<template id="landingView">
<main class="mw6 mw8-ns ph4-ns ph3 pv3 center overflow-scroll h-100">
  Main Content - Landing View
</main>
</template>
<script>
  export default {
    elementName: 'core-landing',
    name: 'CoreLanding',

    connectedCallback() {
      console.log('core-landing connectedCallback')

      this.store = document.querySelector('app-root').store
      this._insert({shadow: false, template: false})
      this.render(this.store.state)
    },

    render(state) {
      console.log('core-landing renderState', state)
      document.querySelector(this.selector).innerHTML = this._updateTemplate(this.templates[0].innerHTML, state)
    }
  }

</script>
<style>

</style>
