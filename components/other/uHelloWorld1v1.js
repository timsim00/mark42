<template>
  <div class="mw6 mw8-ns ph4-ns ph3 pv3 center overflow-scroll h-100">

    <h3>Hello World View - loaded on demand</h3>...inside shadowdom

    <div id="compContainer">

    </div>
<!--

    <material-checkbox id="myCheckbox" label="Subscribe" value="subscribe"></material-checkbox>
    <elix-style-auto-complete-input inner-class="mw5 form-control" id="sampleAutoCompleteInput" aria-label="Pet"></elix-style-auto-complete-input>

    <elix-style-button id="bootPrimary" inner-class="btn btn-primary">Elix Bootstrap Button</elix-style-button>
    <elix-style-button id="bootSuccess" inner-class="btn btn-success">Elix Bootstrap Button</elix-style-button>

    <elix-style-button inner-class="f6 link  br2 ph3 pv2 mb2 dib white dim bg-green pointer"  id="btnTachyon">Elix Tachyon Button</elix-style-button>
    <elix-style-button disabled inner-class="f6 link  br2 ph3 pv2 mb2 dib white button-disabled bg-gray"  id="btnTachyonDisabled">Elix Tachyon Button</elix-style-button>

    <elix-construct-button id="bootConPrimary" inner-class="btn btn-primary">Elix Construct Button</elix-construct-button>
    <elix-construct-button id="bootConSuccess" inner-class="btn btn-success">Elix Construct Button</elix-construct-button>

    <ui5-datepicker style="width: 150px;" id="myDatepicker1"></ui5-datepicker>
    <ui5-button id="ui5Button" type="Default">Enabled</ui5-button>

    <wl-button>Weightless Button</wl-button>
-->

<elix-construct-button id="bootConPrimary" inner-class="btn btn-primary">Primary</elix-construct-button>
<elix-construct-button id="bootConSuccess" inner-class="btn btn-success">Success</elix-construct-button>

<app-chip-input></app-chip-input>
<material-textfield type="text" label="Short Description" error-required="This field is required"></material-textfield>
<material-button label="Confirm"></material-button>


<br>
<br>


    <material-drawer open id="comp-material-drawer">
    </material-drawer>

    <br>
    <br>
    <br>


  </div>
</template>
<script>
  // import '/node_modules/moerkerke-mwc-114/src/material-checkbox.js'
  // import '/components/elements/elix-style/AutoCompleteInput.js'
  // import '/components/elements/elix-style/Button.js'
  import '/components/elements/elix-construct/Button.js'
  // import '/node_modules/ui5-0120/dist/Button.js'
  // import '/node_modules/ui5-0120/dist/DatePicker.js'
  // import '/node_modules/weightless-0034/button/index.js'
  // import '/node_modules/elix-602/src/FilterListBox.js'
  import '/node_modules/moerkerke-mwc-114/src/material-drawer.js'
  import '/node_modules/ui5-0120/dist/Panel.js'
  import '/node_modules/ui5-0120/dist/List.js'
  import '/node_modules/ui5-0120/dist/StandardListItem.js'
  // import '/node_modules/ui5-0120/dist/CustomListItem.js'
  // import '/node_modules/ui5-0120/dist/GroupHeaderListItem.js'
  // import '/node_modules/coral-100b82/coral-component-taglist/index.js'
  // import '/bower_components/nuxeo-ui-elements/widgets/nuxeo-tags.html'
  // import 'https://static.oracle.com/cdn/jet/v7.0.1/default/js/min/ojselectcombobox.js'
  import '/node_modules/_gulick/chip-input-021/source/component-chip-input.js'
  import '/node_modules/_nuclei/material-input-116/src/material-input.js'
  import '/node_modules/moerkerke-mwc-114/src/material-textfield.js'
  import '/node_modules/moerkerke-mwc-114/src/material-button.js'



  export default {
    elementName: 'app-uHelloWorld1v1',
    name: 'uHelloWorld1v1',

    connectedCallback() {
      console.log('uHelloWorld1v1 connectedCallback')
      // see https://github.com/timsim00/slots for example of namespaced store 'slice' for modules.

      this._insert()
      this.removeAttribute('hidden')

      const self = this
      fetch('/api/complist')
      .then((response) => {
        return response.json()
      })
      .then((compList) => {
        Object.keys(compList).forEach(key => {
          let ui5Panel = document.createElement('ui5-panel')
          ui5Panel.setAttribute('slot', 'content')
          ui5Panel.setAttribute('accessible-role', 'Complementary')
          ui5Panel.setAttribute('header-text', key)
          ui5Panel.setAttribute('class', 'full-width')
          ui5Panel.setAttribute('collapsed', 'true')

          let ui5list = document.createElement('ui5-list')
          ui5list.setAttribute('separators', 'None')
          const drawer = self.shadowRoot.querySelector(self.selector).querySelector('#comp-material-drawer')
          compList[key].forEach(comp => {
            let ui5LI = document.createElement('ui5-li')
            ui5LI.innerText = comp.title
            ui5LI.dataset.title = comp.title
            ui5LI.dataset.name = comp.name
            ui5LI.dataset.path = comp.path
            ui5LI.dataset.isDir = comp.isDir
            ui5LI.dataset.elName = comp.elName
            ui5list.appendChild(ui5LI)
          })
          ui5Panel.appendChild(ui5list)
          drawer.appendChild(ui5Panel)

        })
      })
    },

    onClick(e) {
      // let comp = this.querySelector(`#${e.target.id}`)
      console.log('ONCLICK', e.target.dataset.name, e.target) //, !!comp.shadowRoot.adoptedStyleSheets.length)

      if (e.target.dataset.path) {
        let comp = e.target
        fetch(e.target.dataset.path)
        .then((response) => {
          console.log('ONCLICK2', comp.dataset.name, comp.dataset.elName)
          let elem = document.createElement(comp.dataset.elName)
          elem.innerText = comp.dataset.title
          let container = this.querySelector('#compContainer')
          container.innerHTML = ''
          container.appendChild(elem)
        })
      }


      if (e.target.id === 'btnTachyon') {
        let outerBtn = this.querySelector('#btnTachyonDisabled')
        outerBtn.setAttribute('inner-class', outerBtn.getAttribute('inner-class').replace('button-disabled bg-gray', 'dim bg-green pointer'))
        outerBtn.removeAttribute('disabled')
      }
    },

    render(state) {
      console.log('uHelloWorld1v1 render', this, this.selector, state)
      // this.shadowRoot.querySelector(this.selector).innerHTML = this._updateTemplate(this.templates[0].innerHTML, state)
      //
      //
      // let outerBtn = this.shadowRoot.querySelector('#bootPrimary')
      // let css = '@import "/assets/bootstrap.min.css"'
      // let style = document.createElement('style');
      // style.appendChild(document.createTextNode(css));
      // outerBtn.shadowRoot.querySelector('style').replaceWith(style)
      //
      //
      // this.shadowRoot.querySelector(this.selector).querySelector('#sampleAutoCompleteInput').texts = [
      //   'Canary',
      //   'Cat',
      //   'Chicken',
      //   'Chinchilla',
      //   'Cockatiel',
      //   'Cricket',
      //   'Dog',
      //   'Ferret',
      //   'Finch',
      //   'Fish',
      //   'Frog',
      //   'Gerbil',
      //   'Guinea Pig',
      //   'Hamster',
      //   'Hermit Crab',
      //   'Lizard',
      //   'Mouse',
      //   'Parakeet',
      //   'Parrot',
      //   'Pig',
      //   'Rabbit',
      //   'Rat',
      //   'Snail',
      //   'Snake',
      //   'Spider',
      //   'Turtle'
      // ]
    }
  }
</script>
<style>
  @import "/assets/tachyons.min.css";
  h3 { color: blue; }
</style>
