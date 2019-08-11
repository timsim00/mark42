<template>
  <div class="page-header w-100 bb b--black-30">
    <nav class="dt pv2 bg-white w-100 mw8 center">
      <div class="mw8 center ph3 pt0 flex items-center justify-between justify-between-ns">
        <div class="dark-red tl f3 link pointer fw1" title="Home">
          <h1 id="app-title" class="link mv0 tracked no-underline f3 fw4">
            <span class="v-mid dib link dim mr2 w2 h2" title="{{app.orgName}}">
              <img src="/assets/icon.png" alt="Logo">
            </span>
            <span class="dark-red mr3 v-mid link dim color-neutral hover-color-neutral f5 f3-ns dn dib-ns" title="{{app.orgName}}">
              {{app.orgName}}
            </span>
          </h1>
        </div>
        <nav class="mt0 pt0 tr items-baseline justify-between db-l flex-l">
          <div class="dib">
            <span id="btnAbout" name="about" class="tr fr mr4 dim pointer link">About</span>
            <span id="btnApp" name="app" class="tr fr mr4 dim pointer link">Test</span>
            <span name="pen" class="tr fr mr6 dim pointer link">
              <material-checkbox id="chkPen42" label="pen42" value="pen42"></material-checkbox>
            </span>
          </div>
        </nav>
      </div>
    </nav>
  </div>
</template>
<script>
  import '/node_modules/moerkerke-mwc-114/src/material-checkbox.js'
  export default {
    elementName: 'core-nav',
    name: 'CoreNav',

    connectedCallback() {
      console.log('nav connectedCallback')
      this.store = document.querySelector('app-root').store
      this._insert({shadow: false, template: false})
      this.render(this.store.state)
    },

    render(state) {
      console.log('nav render', state)
      document.querySelector(this.selector).innerHTML = this._updateTemplate(this.templates[0].innerHTML, state)
    },

    onClick(e) {
      console.log('click', e.target.id)
      const h1 = e.target.closest('h1')
      if (e.target.id === 'btnAbout') {
        console.log('About clicked')
        this.store.dispatch('app:REQUEST_VIEW', {route: '/about', view: 'views/about', elementName: 'core-about'})
      } else if (e.target.id === 'btnApp') {
        this.store.dispatch('app:REQUEST_VIEW', {route: '/app/uHelloWorld1v1', view: 'other/uHelloWorld1v1', elementName: 'app-uHelloWorld1v1'})
      } else if (h1 && h1.id === 'app-title') {
        e.preventDefault()
        this.store.dispatch('app:REQUEST_VIEW', {route: '/', view: 'core/landing', elementName: 'core-landing'})
      } else if (e.target.id === 'chkPen42') {
        if (!document.querySelector(`#${e.target.id}`).checked) {
          document.querySelector(`#banner`).classList.add('dn')
          this.addPen42();
          // document.querySelector(`#banner`)
        } else {
          this.removePen42();
        }
      }
    },

    myPlugin(editor) {
      /*
      TODO:
      - canvas recognize tachyons css (or change to vanilla css)
      - save changes (node api)
      - 
      */
      window.pen42editor.BlockManager.add('my-first-block', {
        category: 'Moerkerke',
        label: 'Checkbox',
        content: '<material-checkbox label="Checkbox"></material-checkbox>',
      });
    },

    addPen42() {

      window.pen42editor = grapesjs.init({
          container : '#pen42', //'#CoreMain_template', //
          noticeOnUnload: false,
          // fromElement: true,
          components: document.getElementById('CoreMain_template').innerHTML,
          // style: '.txt-red{color: red}',
          storageManager: {
            id: 'gjs-',
            type: 'local',
            // autosave: false,
            autoload: false,
          },
          plugins: ['gjs-blocks-basic'],
          pluginsOpts: {
            'gjs-blocks-basic': {flexGrid: true}
          }

          // storageManager: {
          //   type: 'remote',
          //   stepsBeforeSave: 10,
          //   urlStore: 'http://store/endpoint',
          //   urlLoad: 'http://load/endpoint',
          //   params: {}, // Custom parameters to pass with the remote storage request, eg. CSRF token
          //   headers: {}, // Custom headers for the remote storage request
          // }
      })
      this.myPlugin()

      // window.pen42editor = grapesjs.init({
      //   container : '#pen42',
      //   plugins: [this.myPlugin],
      //   pluginsOpts: {}
      // })

      document.getElementById('pen42').classList.remove('dn')

      //   // console.log('Add', html);
      //
      //   var div = document.getElementById("CoreMain_template");
      //   if (!div) {
     	//     div = document.createElement('div');
      //     div.id = 'gjs';
      //     document.body.appendChild(div);
      //
      //     editor = grapesjs.init({
      //     container: '#CoreMain_template',
      //     colorPicker: { appendTo: 'body' },
      //     domComponents: {
      //       wrapper: {
      //         badgable: false,
      //         copyable: false,
      //         draggable: false,
      //         droppable: false,
      //         components: [],
      //         highlightable: false,
      //         hoverable: false,
      //         movable: false,
      //         removable: false,
      //         traits: [],
      //         stylable: false,
      //       },
      //     },
      //     fromElement: 1,
      //     height: '100%',
      //     layerManager: { root: 'sqh-global-container', showWrapper: 1, },
      //     noticeOnUnload: 0,
      //     plugins: ['grapesjs-test'],
      //     //showDevices: 0,
      //     //showOffsets: 1,
      //     //storageManager: { autoload: 0 },
      //     components:html
     	// 	});
      // }
    },

    removePen42() {
      document.querySelector(`#banner`).classList.remove('dn')
      document.getElementById('pen42').classList.add('dn')
      // delete window.pen42editor
      // window.pen42editor = null

      // if (window.pen42editor) {
      //     // html = editor.getHtml();
      //     // console.log('Remove', html);
      //
      //     // let element = document.getElementById('pen42');
      //     // if (element) {
      //         document.getElementById('pen42editor').classList.add('dn') // element.remove();
      //     // }
      //     pen42 = null;
      // }
    }


  }
</script>
<style>
  .page-header {
    flex: 0 0 auto;
  }
</style>
