/*
The app-root module handles
  layout,
  orchestration,
  app startup,
  module/view loading,
  common API logic,
  routing,
  persisting state changes to localStorage,
  app-wide store creation
*/
export default class AppRoot extends HTMLElement {
  static get elementName() {
    return 'app-root'
  }
  static get import() {
    return ['corePage', 'core-nav', 'core-header', 'core-main', 'core-landing', 'core-footer']
  }

  constructor() {
    super()
  }

  connectedCallback() {
    console.log('app-root connectedCallback')

    this.innerHTML = this.template
    document.querySelector('core-nav').removeAttribute('hidden')
    document.querySelector('core-header').removeAttribute('hidden')
    // TODO: push footer to bottom regardless of main content height:
    // document.querySelector('core-footer').removeAttribute('hidden')

    this.modules = {}
    this.elementList = []
    const {actions, mutators, initState} = this
    this.store = this._createStore({debug: true, namespace: 'app', actions, mutators, initState,
      subscribers: [
        this.persistState
      ]
    })

    // ROUTER page.js
    window.addEventListener('pageFn:is-loaded', (evt) => {
      console.log('Page:is-loaded', window.location.pathname)
      this.router = evt.detail.module.default
    }, false)

    this.remainingModules = AppRoot.import.slice(0)
    window.addEventListener('module:is-loaded', (evt) => {this.moduleLoaded(evt)}, false)

    // ON LOAD
    if (navigator.userAgent.toLowerCase().includes('chrome')) {
      // this does not work in firefox/safari:
      window.addEventListener('load', (evt) => {
        console.log('load event fired');
        this.allModulesLoaded(evt)
      }, false);
    } else {
      window.addEventListener('modules:all-loaded', (evt) => {
        setTimeout(() => {
          console.log('modules:all-loaded');
          this.allModulesLoaded(evt)
        },100) // yes, this is a horrible hack. better solutions welcome!
      }, false)
    }
  }

  get actions() {
    return {
      REQUEST_VIEW: ({mutate}, path) => {
        this.router(path)
      },
      SHOW_VIEW: ({mutate}, data) => {
        mutate('app:SHOW_VIEW', data)
      },
      SET_VIEW: ({mutate}, data) => {
        mutate('app:SET_VIEW', data)
      }
    }
  }

  get mutators() {
    // every mutator better return state or there's gonna be trouble
    return {
      SHOW_VIEW: (state, res) => {
        state.app.view.next = res
        return state
      },
      SET_VIEW: (state, res) => {
        let {type, app, status} = state.app.view.next || {}
        if (type !== res.type || app !== res.app || res.status !== 'added') {
          console.error(`SET_VIEW error: type and app have unexpected values. next:${type}:${app}-${status} to:${res.type}:${res.app}-${res.status}`)
        } else {
          state.app.view.current = Object.assign({}, state.app.view.next)
          delete state.app.view.next
          return state
        }
      }
    }
  }

  initRouter(evt) {
    console.log('initRouter start')
    const page = this.router
    const qryToObj = (query) => {
      return JSON.parse('{"' + decodeURI(query).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g,'":"') + '"}')
    }
    /*
    * Determine which view the user will see.
    */
    const parsePath = (ctx, next) => {
      console.log('parsePath', ctx)
      ctx.state.next = {
        type: 'core',
        app: this.store.state.app.view.default
      }
      if (ctx.state.notfound) {
        console.log('/notfound')
        ctx.state.next = {
          type: 'core',
          app: '404'
        }
      } else if (ctx.pathname.includes('/about')) {
        console.log('/about')
        ctx.state.next = {
          type: 'core',
          app: 'about'
        }
      } else if (ctx.pathname.includes('/app/')) {
        console.log('/app/')
        ctx.state.next = {
          type: 'app',
          app: ctx.params.appName
        }
      }
      ctx.save()
      console.log('next view:', ctx.state.next)
      next()
    }
    /*
    * Load the view if we don't have it.
    */
    const fetchView = (ctx, next) => {
      console.log('fetchView', ctx)
      const cur = this.store.state.app.view.current
      const nextView = ctx.state.next
      if (cur.type === nextView.type && cur.app === nextView.app) {
        console.error('view already showing', cur.type, cur.app)
        return
      }
      const eleName = `${nextView.type}-${nextView.app}`
      let route = location.pathname
      route += nextView.type === 'core' ? `${nextView.app}` : `app/${nextView.app}`

      if (!this.elementList.includes(eleName.toLowerCase())) {
        const fileName = nextView.type === 'core' ? eleName : eleName.replace('app-','')
        window.loadMicroApp( `/components/${nextView.type}/${fileName}.js` )
        .then( ( elementName ) => {
          console.log('loaded module:', elementName)
          next()
        })
      } else {
        console.log('already loaded:', nextView.app)
        next()
      }
    }

    const showView = (ctx,next) => {
      console.log('showView', ctx.state.next)
      // const queryObj = ctx.querystring ? qryToObj(ctx.querystring) : {}
      this.store.dispatch(`app:SHOW_VIEW`, ctx.state.next)
    }

    page('/', (ctx,next)=>{console.log('router:1 >', page.base(), '<');next()}, parsePath, fetchView, showView)
    page('/about', (ctx,next)=>{console.log('router:3');next()}, parsePath, fetchView, showView)
    page('/app/:appName', (ctx,next)=>{console.log('router:5');next()}, parsePath, fetchView, showView)
    page('*', (ctx,next)=>{console.log('router:6');ctx.state.notfound = true; ctx.save(); next()}, parsePath, fetchView, showView, (ctx,next) => {
      console.log('notfound = false')
      ctx.state.notfound = false; ctx.save();
    })

    // TODO: browser back/foreward not working correctly
    window.onpopstate = function(event) {
      console.log("location: " + document.location + ", state: " + JSON.stringify(event.state))
    }

    page()
  }


  moduleLoaded(evt) {
    const {elementName, name, fileName, module, contentType} = evt.detail
    console.log('module:is-loaded: ', 'fileName:', fileName, contentType, 'elementName:', elementName, 'name:', name, 'module:', module)

    if (elementName) {
      this.elementList.push(elementName)
    }
    this.modules[module.default.name] = module.default
    const pos = this.remainingModules.indexOf(fileName.split('.')[0])  // remove extension
    if (pos > -1) {
      this.remainingModules.splice(pos, 1);
    }
    this.dispatchEvent(new CustomEvent(`${name}:is-loaded`, {detail: {module}, bubbles: true, composed: true, cancelable: false}))
    if (this.remainingModules.length === 0) {
      window.dispatchEvent(new CustomEvent(`modules:all-loaded`, {detail: {}, bubbles: true, composed: true, cancelable: false}))
    }
  }

  allModulesLoaded(evt) {
    console.log('allModulesLoaded')
    this.initRouter(evt) // setup routes, *before* notify()!
    this.store.notify() // send out initial state to all subscribers

  }

  get initState() {
    return {
      orgName: 'mark42',
      view: {
        next: null,
        current: {},
        default: 'landing'
      }
    }
  }

  persistState(state, namespace = 'app') {
    // console.log('persistState', namespace)
    localStorage.setItem(namespace, JSON.stringify(state[namespace]))
  }

  apiRequest (data) {
    return new Promise((resolve, reject) => {
      // common API logic
    })
  }

  get template() {
    return `
      <style>
        @import "/assets/tachyons.min.css";
        h3 { color: blue; }
        .page-content {
          flex: 1 1 auto;
          position: relative;/* need this to position inner content */
          overflow-y: scroll;
        }
        .page {
          display: flex;
          flex-direction: column;
        }
      </style>

      <div id="page" class="page">
        <core-nav hidden id="coreNav"></core-nav>
        <div class="page-content">
          <core-header hidden id="coreHeader"></core-header>
          <core-main hidden id="coreMainContent"></core-main>
          <core-footer hidden id="coreFooter"></core-footer>
        </div>
      </div>
    `;
  }

}
