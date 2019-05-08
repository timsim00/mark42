window.loadMicroApp = ( function() {

  /** https://github.com/aishikaty/tiny-mustache    @version 0.4.1 */
  // api doc: http://mustache.github.io/mustache.5.html
  function mustache(template, self, parent, invert) {
    var render = mustache
    var output = ""
    var i

    function get (ctx, path) {
      path = path.pop ? path : path.split(".")
      ctx = ctx[path.shift()] || ""
      return (0 in path) ? get(ctx, path) : ctx
    }

    self = Array.isArray(self) ? self : (self ? [self] : [])
    self = invert ? (0 in self) ? [] : [1] : self

    for (i = 0; i < self.length; i++) {
      var childCode = ''
      var depth = 0
      var inverted
      var ctx = (typeof self[i] == "object") ? self[i] : {}
      ctx = Object.assign({}, parent, ctx)
      ctx[""] = {"": self[i]}

      template.replace(/([\s\S]*?)({{((\/)|(\^)|#)(.*?)}}|$)/g,
        function(match, code, y, z, close, invert, name) {
          if (!depth) {
            output += code.replace(/{{{(.*?)}}}|{{(!?)(&?)(>?)(.*?)}}/g,
              function(match, raw, comment, isRaw, partial, name) {
                return raw ? get(ctx, raw)
                  : isRaw ? get(ctx, name)
                  : partial ? render(get(ctx, name), ctx)
                  : !comment ? new Option(get(ctx, name)).innerHTML
                  : ""
              }
            )
            inverted = invert
          } else {
            childCode += depth && !close || depth > 1 ? match : code
          }
          if (close) {
            if (!--depth) {
              name = get(ctx, name)
              if (/^f/.test(typeof name)) {
                output += name.call(ctx, childCode, function (template) {
                  return render(template, ctx)
                })
              } else {
                output += render(childCode, name, ctx, inverted)
              }
              childCode = ""
            }
          } else {
            ++depth
          }
        }
      )
    }
    return output
  }

  // https://github.com/timsim00/slots
  class Slots { //nickname for a vending machine
    // TODO: make reactive?, https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy
    constructor({actions, mutators, subscribers, initState, notify, namespace, debug}) {
      this.actions = {}
      this.mutators = {}
      this.subscribers = subscribers || []
      this.state = {}
      this.debug = debug || false
      this.import({actions, mutators, initState, notify, namespace})
    }
    dispatch(action, payload) {
      if (this.debug) {console.log(`dispatch ${action}`, payload)}
      if (action.includes(':')) {
        const parts = action.split(':')
        this.actions[parts[0]][parts[1]]({mutate: this.mutate.bind(this), state: this.state, dispatch: this.dispatch.bind(this)}, payload)
      } else {
        this.actions[action]({mutate: this.mutate.bind(this), state: this.state, dispatch: this.dispatch.bind(this)}, payload)
      }
    }
    mutate(action, payload) {
      if (this.debug) {console.log(`mutate ${action}`, payload)}
      let parts = []
      if (action.includes(':')) {
        parts = action.split(':')
        this.state = this.mutators[parts[0]][parts[1]](this.state, payload)
      } else {
        this.state = this.mutators[action](this.state, payload)
      }
      this.notify(parts[0])
    }
    subscribe(listener) {
      // TODO: subscribe to only a namespace
      this.subscribers.push(listener)
      return () => {
        this.subscribers = this.subscribers.filter(subscriber => subscriber !== listener)
      }
    }
    notify(namespace) {
      this.subscribers.forEach(subscriber => subscriber(this.state, namespace))
    }
    import({namespace, actions, initState, mutators, notify}) {
      if (namespace && !this.state.hasOwnProperty(namespace)) {
        this.state[namespace] = {}
        this.actions[namespace] = {}
        this.mutators[namespace] = {}
      }
      let _state, _actions, _mutators
      if (namespace) {
        _state = this.state[namespace]
        _actions = this.actions[namespace]
        _mutators = this.mutators[namespace]
      } else {
        _state = this.state
        _actions = this.actions
        _mutators = this.mutators
      }
      if (actions) {
        _actions = Object.assign(_actions, actions)
      }
      if (mutators) {
        _mutators = Object.assign(_mutators, mutators)
      }
      if (initState) {
        _state = Object.assign(_state, initState)
      }
      if (notify) {
        this.notify(namespace)
      }
      return this
    }
  }

  function toAbsoluteURL(url) {
    const a = document.createElement("a");
    a.setAttribute("href", url);    // <a href="hoge.html">
    return a.cloneNode(false).href; // -> "http://example.com/hoge.html"
  }

  // https://github.com/uupaa/dynamic-import-polyfill
  function importModule(url) {
    return new Promise((resolve, reject) => {
      const vector = "$importModule$" + Math.random().toString(32).slice(2);
      const script = document.createElement("script");
      const destructor = () => {
        delete window[vector];
        script.onerror = null;
        script.onload = null;
        script.remove();
        URL.revokeObjectURL(script.src);
        script.src = "";
      };
      script.defer = "defer";
      script.type = "module";
      script.onerror = () => {
        reject(new Error(`Failed to import: ${url}`));
        destructor();
      };
      script.onload = () => {
        resolve(window[vector]);
        destructor();
      };
      const absURL = toAbsoluteURL(url);
      const loader = `import * as m from "${absURL}"; window.${vector} = m;`; // export Module
      const blob = new Blob([loader], { type: "text/javascript" });
      script.src = URL.createObjectURL(blob);

      document.head.appendChild(script);
    });
  }

	function fetchAndParse( URL ) {
		return fetch( URL ).then( ( response ) => {
			return response.text();
		} ).then( ( content ) => {

      const parser = new DOMParser()
			const document = parser.parseFromString( content, 'text/html' )
			const head = document.head
			const templates = head.querySelectorAll( 'template' )
			const style = head.querySelector( 'style' )
			const script = head.querySelector( 'script' )
      const fileName = URL.substr(URL.lastIndexOf('/')+1)

			return {
				templates,
				style,
				script,
        content,
        fileName
			};
		});
	}

	function getSettings( { templates, style, script, content, fileName } ) {

		function getListeners( settings ) {
      console.log('getListeners', settings)
			return Object.entries( settings ).reduce( ( listeners, [ setting, value ] ) => {
				if ( setting.startsWith('on') ) {
					listeners[ setting.substr(2).toLowerCase() ] = value
				}
				return listeners;
			}, {} );
		}

    function getHooks( settings ) {
      // console.log('getHooks', settings)
      return {
        connectedCallback: settings.connectedCallback || null
        ,observedAttributes: settings.observedAttributes || null
        ,disconnectedCallback: settings.disconnectedCallback || null
      }
		}

    function unitySettings( module ) {
      // settings for unity file components
      const listeners = getListeners( module.default );
      const hooks = getHooks( module.default )
      return {
        listeners,
        templates,
        style,
        hooks,
        module,
        contentType,
        fileName
      }
    }

    let contentType = script ? 'unityComponent' : ''
    let jsContent = contentType ? script.textContent : content
    const jsFile = new Blob( [ jsContent ], { type: 'application/javascript' } );
    const jsURL = URL.createObjectURL( jsFile );

    return importModule( jsURL )
    .then( module => {
        console.log('module loaded for:', fileName, module)
        if (!contentType) {
          contentType =  module.default && module.default.elementName ? 'customElement' : 'class'
        }

        if (contentType === 'unityComponent') {
          return unitySettings(module)
        } else {
          return { contentType, module, fileName }
        }
      }
    )
	}

	function registerComponent( { templates, style, listeners, hooks, contentType, module, fileName } ) {
    console.log('registerComponent', fileName, module.default.name)

    let elementName = module.default && module.default.elementName ? module.default.elementName.toLowerCase() : ''
    let fileExt = '.js'

    if (contentType === 'customElement') {  // *** load a non-single-file element

      console.log('load standard:', elementName)
      module.default.prototype.fileName = fileName
      module.default.prototype.elementName = elementName // same as localName
      module.default.prototype._className = module.default.name
      module.default.prototype._createStore = (actions, mutators, subscribers, initialState = {}, notify, namespace, debug) => {
        return new Slots(actions, mutators, subscribers, initialState, notify, namespace, debug)
      }
      window.customElements.define(elementName, module.default) // TODO: attachShadow?

    } else if (contentType === 'unityComponent') {  // *** load unity file element

      // https://github.com/TheLarkInn/unity-component-specification
      customElements.define(`${elementName}`,
        class extends HTMLElement {

          connectedCallback() {
            // console.assert(this.id, 'Custom Elements must have an id.')
            this.templates = templates
            this.styleClone = style.cloneNode( true )
            this.listeners = listeners
            this.templateMap = {}
            this.fileName = fileName
            this.elementName = elementName
            this._className = module.default.name
            this._createStore = (actions, mutators, subscribers, initialState = {}, notify, namespace, debug) => {
              return new Slots(actions, mutators, subscribers, initialState, notify, namespace, debug)
            }
            this.selectorNoRoot = `${this.elementName} div#${this._className}_template`
            this.selectorRoot = `#${this._className}_template`
            this.selector = ''
            this.wrapperId = `${this._className}_template`

            // process the template(s)
            // TODO: prefix template id's with className (for comps not using shadowdom)
            for (let i = 0; i < templates.length; i++) {
              templates[i].id = templates[i].id || i
              this.templateMap[templates[i].id] = document.importNode( templates[i].content, true )
            }

            // adopt the non-boilerplate methods
            Object.keys(module.default).forEach(key => {
              if (!this.constructor.prototype.hasOwnProperty(key) && typeof(module.default[key]) === 'function' && !key.startsWith('on')) {
                console.log('>>> adopting:', key)
                this.constructor.prototype[key] = module.default[key]
              }
            })

            if (hooks.connectedCallback) {
              hooks.connectedCallback.call(this)
            }
    			}

          disconnectedCallback() {
            Object.entries( listeners ).forEach( ( [ event, listener ] ) => {
    					this.removeEventListener( event, listener, false )
    				});
            if (hooks.disconnectedCallback) {
              hooks.disconnectedCallback.call(this)
            }
    			}

          _updateTemplate(template, self, parent, invert) {
            return mustache(template, self, parent, invert)
          }

          _replaceTemplate(id) {
            console.log('replaceTemplate', id)

            let template = this.templateMap[id]
            // swap out the requested template
            if (template && this.currentTemplateId !== id) {

              let wrapper, ele
              if (this.shadowRoot) {
                ele = this.shadowRoot
                wrapper = ele.getElementById(this.selectorRoot)
              } else {
                wrapper = document.querySelector(this.selectorNoRoot)
                ele = wrapper ? wrapper.parentNode : document.querySelector(this.elementName) // querySelectorAll??
              }

              if (wrapper) { ele.removeChild(wrapper) }
              // create new wrapper
              wrapper = document.createElement('div')
              wrapper.id = `${this._className}_template`
              // fill wrapper with requested template
              if (!hooks.render) {
                wrapper.appendChild( template )
              }
              ele.appendChild(wrapper)

              this.currentTemplateId = id
            }
          }

          _insert({wrapper, template, listeners, shadow, style, templateId = this.templates[0].id} = {}) {
            console.log('_insert', this._className)
            const fragment = this.templateMap[templateId]
            let eleRoot
            if (shadow !== false) {
              this.attachShadow( { mode: 'open' } )
              this.selector = this.selectorRoot
              eleRoot = this.shadowRoot
            } else {
              this.selector = this.selectorNoRoot
              eleRoot = document.querySelector(this.elementName)
            }
            if (style !== false) {
              console.log('this.style.cloneNode', this.style.cloneNode)
              eleRoot.appendChild( this.styleClone ) //.cloneNode( true ) )
            }
            if (listeners !== false) { this._attachListeners() }
            if (wrapper !== false) {
              wrapper = document.createElement('div')
              wrapper.id = this.wrapperId
              eleRoot.appendChild(wrapper)
            }
            if (template !== false) {
              let wrapper
              if (this.shadowRoot) {
                wrapper = eleRoot.querySelector(this.selector)
              } else {
                wrapper = document.querySelector(this.selector)
              }
              if (wrapper) {
                wrapper.appendChild(fragment)
              } else {
                eleRoot.appendChild(fragment)
              }
            }
    			}

    			_attachListeners() {
    				Object.entries( listeners ).forEach( ( [ event, listener ] ) => {
    					this.addEventListener( event, listener, false )
    				} );
    			}

          static get observedAttributes() {
            return hooks.observedAttributes ? hooks.observedAttributes() : [];
          }
      })
    }

    // load dependency modules
    let imports = module.default && module.default.import ? module.default.import : []
    imports.forEach(name => {
      // TODO: skip if already loaded
      let componentPath = name.startsWith('core') ? '/components/core/' : '/components/app/'
      window.loadMicroApp( `${componentPath}${name}${fileExt}` )
    })
    window.dispatchEvent(new CustomEvent(`module:is-loaded`, {detail: {contentType, elementName, name: module.default.name, fileName, module}, bubbles: true, composed: true, cancelable: false}))

    return elementName
	}

	function loadComponent( URL ) {
    // inspired by: https://medium.com/content-uneditable/implementing-single-file-web-components-22adeaa0cd17
		return fetchAndParse( URL ).then( getSettings ).then( registerComponent );
	}

	return loadComponent;
}() );
