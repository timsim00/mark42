/*
The app-root module handles
  layout,
  orchestration,
  composition,
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
    return ['core/Page', 'core/nav', 'core/header', 'core/main', 'core/landing', 'core/footer']
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
    this.store = this._createStore({debug: true, quiet: true, namespace: 'app', actions, mutators, initState,
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
    this.isLoading = true
    window.addEventListener('module:is-loaded', (evt) => {this.moduleLoaded(evt)}, false)

    // ON LOAD
    window.addEventListener('modules:all-loaded', (evt) => {
      Promise.resolve().then(() => { // next tick
        console.log('modules:all-loaded')
        this.initRouter(evt) // setup routes, *before* notify()!
        this.store.quiet = false
        this.store.notify() // send out initial state to all subscribers
        window.removeEventListener('modules:all-loaded', this.appLoader, false)
      })
    }, false)
  }

  get actions() {
    return {
      REQUEST_VIEW: ({mutate}, path) => {
        mutate('app:REQUEST_VIEW', path)
        this.router(path.route)
      },
      SHOW_VIEW: ({mutate}, data) => {
        mutate('app:SHOW_VIEW', data)
      },
      SET_VIEW: ({mutate}, data) => {
        mutate('app:SET_VIEW', data)
      },
      PREP_NEXT: ({mutate}, data) => {
        mutate('app:PREP_NEXT', data)
      }
    }
  }

  get mutators() {
    // every mutator better return state or there's gonna be trouble
    return {
      REQUEST_VIEW: (state, res) => {
        state.app.view.next = res
        state.app.view.next.status = 'requested'
        return state
      },
      SHOW_VIEW: (state) => {
        state.app.view.next.status = 'ready' // main.js will pick up this state change.
        return state
      },
      SET_VIEW: (state, res) => {
        let {elementName, status} = state.app.view.next || {}
        if (elementName !== res.elementName || res.status !== 'added') {
          console.error(`SET_VIEW load error: next:${elementName}-${status} to:${res.elementName}-${res.status}`)
        } else {
          state.app.view.current = Object.assign({}, state.app.view.next)
        }
        delete state.app.view.next
        return state
      },
      PREP_NEXT: (state, res) => {
        state.app.view.next = res
        return state
      }
    }
  }

  initRouter(evt) {
    console.log('initRouter start')
    const page = this.router
    const qryToObj = (query) => {
      return JSON.parse('{"' + decodeURI(query).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g,'":"') + '"}')
    }
    const rootPath = '/components/'
    const ext = '.js'

    /*
    * For routes hit via url, vs from within the app, setup the data needed to fetch.
    */
    const parsePath = (ctx, next) => {
      console.log('parsePath', ctx.pathname, this.store.state.app.view.next)
      if (this.store.state.app.view.next) {
        next()
        return
      }

      let nextView
      if (ctx.pathname === '/') {
        nextView = {
          view: this.store.state.app.view.default.view,
          elementName: this.store.state.app.view.default.elementName
        }
      } else if (ctx.pathname.includes('/about')) {
        nextView = {
          view: 'views/about',
          elementName: 'core-about'
        }
      } else if (ctx.pathname.includes('/app/')) {
        nextView = {
          view: `other/${ctx.params.appName}`, // has to be 1-1 correlation btw route and file location for deep linking, unless your route will match your file system paths
          elementName: `app-${ctx.params.appName}`
        }
      } else {
        nextView = {
          view: 'views/404',
          elementName: 'core-404'
        }
      }
      this.store.dispatch('app:PREP_NEXT', nextView)
      next()
    }

    /*
    * Load the view if we don't have it.
    */
    const fetchView = (ctx, next) => {
      console.log('fetchView', this.store.state.app.view.next)
      const cur = this.store.state.app.view.current
      const nextView = this.store.state.app.view.next

      // is this view currently on the screen?
      if (cur.view === nextView.view) {
        console.error('view already showing', cur.type, cur.app)
        return
      }

      // did we already load this element?
      if (!this.elementList.includes(nextView.elementName.toLowerCase())) {
        window.loadMicroApp( {URL:`${rootPath}${nextView.view}${ext}`, rootPath} )
        .then( ( elementName ) => {
          console.log('loaded module:', elementName)
          next()
        })
        .catch( (e) => {
          console.error(`Problem loading ${nextView.view}`, e)
          this.store.dispatch('app:REQUEST_VIEW', {route: ctx.path, view: 'views/404', elementName: 'core-404'})
        })

      } else {
        console.log('already loaded:', nextView.view)
        next()
      }
    }

    const showView = (ctx,next) => {
      console.log('showView', JSON.stringify(this.store.state.app.view.next))
      // const queryObj = ctx.querystring ? qryToObj(ctx.querystring) : {}
      this.store.dispatch(`app:SHOW_VIEW`)
    }

    page('/', parsePath, fetchView, showView)
    page('/about', parsePath, fetchView, showView)
    page('/app/:appName', parsePath, fetchView, showView)
    page('*', parsePath, fetchView, showView)

    window.onpopstate = function(event) {
      console.log("location: " + document.location + ", state: " + JSON.stringify(event.state))
    }

    page()
  }


  moduleLoaded(evt) {
    const {elementName, name, fileName, module, contentType, importName} = evt.detail
    console.log('module:is-loaded: ', 'importName', importName, 'fileName:', fileName, contentType, 'elementName:', elementName, 'name:', name, 'module:', module)

    if (elementName) {
      this.elementList.push(elementName)
    }
    this.modules[module.default.name] = module.default
    const pos = this.remainingModules.indexOf(importName)
    if (pos > -1) {
      this.remainingModules.splice(pos, 1);
    }
    this.dispatchEvent(new CustomEvent(`${name}:is-loaded`, {detail: {module}, bubbles: true, composed: true, cancelable: false}))
    if (this.isLoading && this.remainingModules.length === 0) {
      this.isLoading = false
      window.dispatchEvent(new CustomEvent(`modules:all-loaded`, {detail: {}, bubbles: true, composed: true, cancelable: false}))
    }
  }

  get initState() {
    return {
      orgName: 'mark42',
      view: {
        next: null,
        current: {},
        default: {view: 'core/landing', elementName: 'core-landing'}
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
