<template id="notFound">
  <div class="tc mw6 mw8-ns ph4-ns ph3 pv3 center overflow-scroll h-100">
    Page not found
  </div>
</template>
<script>
  export default {
    elementName: 'core-404',
    name: 'Core404',

    connectedCallback() {
      console.log('core-404 connectedCallback')

      this.store = document.querySelector('app-root').store
      this._insert({shadow: false, template: false})
      this.render(this.store.state)
    },

    render(state) {
      console.log('core-404 render', state)
      document.querySelector(this.selector).innerHTML = this._updateTemplate(this.templates[0].innerHTML, state)
    }
  }

</script>
<style>

</style>
