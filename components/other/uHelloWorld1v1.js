<template>
  <div class="mw6 mw8-ns ph4-ns ph3 pv3 center overflow-scroll h-100">
    <h3>Hello World View - loaded on demand</h3>...inside shadowdom
    <fancy-button id="btnFancy">Imported Component</fancy-button>
    <material-checkbox id="myCheckbox" label="Subscribe" value="subscribe"></material-checkbox>
  </div>
</template>
<script>
  export default {
    elementName: 'app-uHelloWorld1v1',
    name: 'uHelloWorld1v1',
    import: ['elements/fancy-button', 'elements/material-checkbox'],

    connectedCallback() {
      console.log('uHelloWorld1v1 connectedCallback')
      // see https://github.com/timsim00/slots for example of namespaced store 'slice' for modules.
      this._insert()
      this.removeAttribute('hidden')
    },

    render(state) {
      console.log('uHelloWorld1v1 render', this, this.selector, state)
      this.shadowRoot.querySelector(this.selector).innerHTML = this._updateTemplate(this.templates[0].innerHTML, state)
    }
  }
</script>
<style>
  @import "/assets/tachyons.min.css";
  h3 { color: blue; }
</style>
