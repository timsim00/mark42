<template>
  <footer class="pv2 bg-neutral white w-100 landing-black {{pageStyles}}">
    <section class="ph2 ph4-m mw8-ns center-ns tc f7">
    Copyright © 2019, {{app.orgName}}. All rights reserved.
    </section>
  </footer>
</template>
<script>
  export default {
    elementName: 'core-footer',
    name: 'CoreFooter',

    connectedCallback() {
      console.log('core-footer connectedCallback')
      this.store = document.querySelector('app-root').store
      this._insert({shadow: false})
      this.render(this.store.state)
    },

    render(state) {
      console.log('core-footer renderState', state)
      document.querySelector(this.selector).innerHTML = this._updateTemplate(this.templates[0].innerHTML, state)
    }
  }

</script>
<style>
</style>
