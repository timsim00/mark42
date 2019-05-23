<template>

</template>

<script>
  // core-main is reponsible for swapping out views in the main content area.
  export default {
    elementName: 'core-main',
    name: 'CoreMain',

    connectedCallback() {
      console.log('core-main connectedCallback')
      this.store = document.querySelector('app-root').store
      this.store.subscribe(state => this.render(state))

      this._insert({shadow: false, template: false})
      this.render(this.store.state)
    },

    // render(state) {
    //   // render main view bc of state change:
    //   let {type, app, status} = state.app.view.next || {}
    //   console.log('core-main render', type, ':', app)
    //   if (!app) { return }
    //
    //   const showingElement = document.querySelector(`${type}-${app}`)
    //   console.log('core-main render showingElement', !!showingElement)
    //   if (showingElement) { return } // we already have this on the screen
    //
    //   console.log('core-main rendering')
    //
    //   this.removeAttribute('hidden')
    //
    //   document.querySelector('#CoreMain_template').innerHTML = `<${type}-${app} hidden></${type}-${app}>`
    //   const ele = document.querySelector(`${type}-${app}`)
    //   ele.render(this.store.state)
    //   ele.removeAttribute('hidden')
    //   this.store.dispatch('app:SET_VIEW', {type, app, status: 'added'})
    // }
    render(state) {
      // render main view bc of state change:
      let {elementName, status} = state.app.view.next || {}
      if (status !== 'ready') return;

      console.log('core-main render', elementName)
      if (!elementName) { return }

      const showingElement = document.querySelector(elementName)
      console.log('core-main render showingElement', !!showingElement)
      if (showingElement) { return } // we already have this on the screen

      console.log('core-main rendering:', elementName)

      this.removeAttribute('hidden')

      document.querySelector('#CoreMain_template').innerHTML = `<${elementName} hidden></${elementName}>`
      const ele = document.querySelector(`${elementName}`)
      ele.render(state)
      ele.removeAttribute('hidden')
      this.store.dispatch('app:SET_VIEW', {elementName, status: 'added'})
    }
  }

</script>
<style>
</style>
