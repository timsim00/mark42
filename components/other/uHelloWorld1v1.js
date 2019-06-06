<template>
  <div class="mw6 mw8-ns ph4-ns ph3 pv3 center overflow-scroll h-100">
    <h3>Hello World View - loaded on demand</h3>...inside shadowdom
    <fancy-button id="btnFancy">Imported Component</fancy-button>
    <material-checkbox id="myCheckbox" label="Subscribe" value="subscribe"></material-checkbox>
    <elix-auto-complete-input id="sampleAutoCompleteInput" aria-label="Pet"></elix-auto-complete-input>
    <elix-button>&nbsp;&nbsp;Elix Button&nbsp;&nbsp;</elix-button>
  </div>
</template>
<script>
  import '/components/elements/moerkerke/material-checkbox.js'
  import '/components/elements/fancy-button.js'
  import '/components/elements/elix/AutoCompleteInput.js'
  import '/components/elements/elix/Button.js'

  export default {
    elementName: 'app-uHelloWorld1v1',
    name: 'uHelloWorld1v1',
    // import: ['elements/fancy-button', 'elements/material-checkbox', 'elements/elix/AutoCompleteInput'],

    connectedCallback() {
      console.log('uHelloWorld1v1 connectedCallback')
      // see https://github.com/timsim00/slots for example of namespaced store 'slice' for modules.

      this._insert()
      this.removeAttribute('hidden')
    },

    render(state) {
      console.log('uHelloWorld1v1 render', this, this.selector, state)
      this.shadowRoot.querySelector(this.selector).innerHTML = this._updateTemplate(this.templates[0].innerHTML, state)

      this.shadowRoot.querySelector(this.selector).querySelector('#sampleAutoCompleteInput').texts = [
        'Canary',
        'Cat',
        'Chicken',
        'Chinchilla',
        'Cockatiel',
        'Cricket',
        'Dog',
        'Ferret',
        'Finch',
        'Fish',
        'Frog',
        'Gerbil',
        'Guinea Pig',
        'Hamster',
        'Hermit Crab',
        'Lizard',
        'Mouse',
        'Parakeet',
        'Parrot',
        'Pig',
        'Rabbit',
        'Rat',
        'Snail',
        'Snake',
        'Spider',
        'Turtle'
      ]
    }
  }
</script>
<style>
  @import "/assets/tachyons.min.css";
  h3 { color: blue; }
</style>
