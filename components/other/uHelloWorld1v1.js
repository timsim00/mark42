<template>
  <div class="mw6 mw8-ns ph4-ns ph3 pv3 center overflow-scroll h-100">

    <h3>Hello World View - loaded on demand</h3>...inside shadowdom

    <material-checkbox id="myCheckbox" label="Subscribe" value="subscribe"></material-checkbox>
    <elix-style-auto-complete-input inner-class="mw5 form-control" id="sampleAutoCompleteInput" aria-label="Pet"></elix-style-auto-complete-input>

    <elix-style-button id="bootPrimary" inner-class="btn btn-primary">Elix Bootstrap Button</elix-style-button>
    <elix-style-button id="bootSuccess" inner-class="btn btn-success">Elix Bootstrap Button</elix-style-button>

    <elix-style-button inner-class="f6 link  br2 ph3 pv2 mb2 dib white dim bg-green pointer"  id="btnTachyon">Elix Tachyon Button</elix-style-button>
    <elix-style-button disabled inner-class="f6 link  br2 ph3 pv2 mb2 dib white button-disabled bg-gray"  id="btnTachyonDisabled">Elix Tachyon Button</elix-style-button>

    <elix-construct-button id="bootConPrimary" inner-class="btn btn-primary">Elix Bootstrap Button</elix-construct-button>
    <elix-construct-button id="bootConSuccess" inner-class="btn btn-success">Elix Bootstrap Button</elix-construct-button>

    <ui5-datepicker style="width: 150px;" id="myDatepicker1"></ui5-datepicker>
    <ui5-button id="ui5Button" type="Default">Enabled</ui5-button>


<!--
    <elix-construct-button inner-class="btn btn-primary">Elix Bootstrap Button</elix-construct-button>
    <elix-construct-button inner-class="btn btn-success">Elix Bootstrap Button</elix-construct-button>
    <elix-construct-button inner-class="btn btn-primary">Elix Bootstrap Button</elix-construct-button>
    <elix-construct-button inner-class="btn btn-success">Elix Bootstrap Button</elix-construct-button>
    <elix-construct-button inner-class="btn btn-primary">Elix Bootstrap Button</elix-construct-button>
    <elix-construct-button inner-class="btn btn-success">Elix Bootstrap Button</elix-construct-button>
    <elix-construct-button inner-class="btn btn-primary">Elix Bootstrap Button</elix-construct-button>
    <elix-construct-button inner-class="btn btn-success">Elix Bootstrap Button</elix-construct-button>
    <elix-construct-button inner-class="btn btn-primary">Elix Bootstrap Button</elix-construct-button>
    <elix-construct-button inner-class="btn btn-success">Elix Bootstrap Button</elix-construct-button>
    <elix-construct-button inner-class="btn btn-primary">Elix Bootstrap Button</elix-construct-button>
    <elix-construct-button inner-class="btn btn-success">Elix Bootstrap Button</elix-construct-button>
    <elix-construct-button inner-class="btn btn-primary">Elix Bootstrap Button</elix-construct-button>
    <elix-construct-button inner-class="btn btn-success">Elix Bootstrap Button</elix-construct-button>
    <elix-construct-button inner-class="btn btn-primary">Elix Bootstrap Button</elix-construct-button>
    <elix-construct-button inner-class="btn btn-success">Elix Bootstrap Button</elix-construct-button>
    <elix-construct-button inner-class="btn btn-primary">Elix Bootstrap Button</elix-construct-button>
    <elix-construct-button inner-class="btn btn-success">Elix Bootstrap Button</elix-construct-button>
    <elix-construct-button inner-class="btn btn-primary">Elix Bootstrap Button</elix-construct-button>
    <elix-construct-button inner-class="btn btn-success">Elix Bootstrap Button</elix-construct-button>
    <elix-construct-button inner-class="btn btn-primary">Elix Bootstrap Button</elix-construct-button>
    <elix-construct-button inner-class="btn btn-success">Elix Bootstrap Button</elix-construct-button>
    <elix-construct-button inner-class="btn btn-primary">Elix Bootstrap Button</elix-construct-button>
    <elix-construct-button inner-class="btn btn-success">Elix Bootstrap Button</elix-construct-button>
    <elix-construct-button inner-class="btn btn-primary">Elix Bootstrap Button</elix-construct-button>
    <elix-construct-button inner-class="btn btn-success">Elix Bootstrap Button</elix-construct-button>
    <elix-construct-button inner-class="btn btn-primary">Elix Bootstrap Button</elix-construct-button>
    <elix-construct-button inner-class="btn btn-success">Elix Bootstrap Button</elix-construct-button>
    <elix-construct-button inner-class="btn btn-primary">Elix Bootstrap Button</elix-construct-button>
    <elix-construct-button inner-class="btn btn-success">Elix Bootstrap Button</elix-construct-button>
    <elix-construct-button inner-class="btn btn-primary">Elix Bootstrap Button</elix-construct-button>
    <elix-construct-button inner-class="btn btn-success">Elix Bootstrap Button</elix-construct-button>
    <elix-construct-button inner-class="btn btn-primary">Elix Bootstrap Button</elix-construct-button>
    <elix-construct-button inner-class="btn btn-success">Elix Bootstrap Button</elix-construct-button>
    <elix-construct-button inner-class="btn btn-primary">Elix Bootstrap Button</elix-construct-button>
    <elix-construct-button inner-class="btn btn-success">Elix Bootstrap Button</elix-construct-button>
    <elix-construct-button inner-class="btn btn-primary">Elix Bootstrap Button</elix-construct-button>
    <elix-construct-button inner-class="btn btn-success">Elix Bootstrap Button</elix-construct-button>
    <elix-construct-button inner-class="btn btn-primary">Elix Bootstrap Button</elix-construct-button>
    <elix-construct-button inner-class="btn btn-success">Elix Bootstrap Button</elix-construct-button>
    <elix-construct-button inner-class="btn btn-primary">Elix Bootstrap Button</elix-construct-button>
    <elix-construct-button inner-class="btn btn-success">Elix Bootstrap Button</elix-construct-button>
    <elix-construct-button inner-class="btn btn-primary">Elix Bootstrap Button</elix-construct-button>
    <elix-construct-button inner-class="btn btn-success">Elix Bootstrap Button</elix-construct-button>
    <elix-construct-button inner-class="btn btn-primary">Elix Bootstrap Button</elix-construct-button>
    <elix-construct-button inner-class="btn btn-success">Elix Bootstrap Button</elix-construct-button>
    <elix-construct-button inner-class="btn btn-primary">Elix Bootstrap Button</elix-construct-button>
    <elix-construct-button inner-class="btn btn-success">Elix Bootstrap Button</elix-construct-button>
    <elix-construct-button inner-class="btn btn-primary">Elix Bootstrap Button</elix-construct-button>
    <elix-construct-button inner-class="btn btn-success">Elix Bootstrap Button</elix-construct-button>
-->


  </div>
</template>
<script>
  import '/node_modules/moerkerke-mwc-114/src/material-checkbox.js'
  // import '/components/elements/fancy-button.js'
  import '/components/elements/elix-style/AutoCompleteInput.js'
  import '/components/elements/elix-style/Button.js'
  import '/components/elements/elix-construct/Button.js'
  import '/node_modules/ui5-0120/dist/Button.js'
  import '/node_modules/ui5-0120/dist/DatePicker.js'

  export default {
    elementName: 'app-uHelloWorld1v1',
    name: 'uHelloWorld1v1',

    connectedCallback() {
      console.log('uHelloWorld1v1 connectedCallback')
      // see https://github.com/timsim00/slots for example of namespaced store 'slice' for modules.

      this._insert()
      this.removeAttribute('hidden')
    },

    onClick(e) {
      // let comp = this.querySelector(`#${e.target.id}`)
      console.log('ONCLICK', e.target.id, this) //, !!comp.shadowRoot.adoptedStyleSheets.length)
      if (e.target.id === 'btnTachyon') {
        let outerBtn = this.querySelector('#btnTachyonDisabled')
        outerBtn.setAttribute('inner-class', outerBtn.getAttribute('inner-class').replace('button-disabled bg-gray', 'dim bg-green pointer'))
        outerBtn.removeAttribute('disabled')
      }
    },

    render(state) {
      console.log('uHelloWorld1v1 render', this, this.selector, state)
      this.shadowRoot.querySelector(this.selector).innerHTML = this._updateTemplate(this.templates[0].innerHTML, state)


      // let outerBtn = this.shadowRoot.querySelector('#bootPrimary')
      // let css = '@import "/assets/bootstrap.min.css"'
      // let style = document.createElement('style');
      // style.appendChild(document.createTextNode(css));
      // outerBtn.shadowRoot.querySelector('style').replaceWith(style)


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
