<template>
  <div class="tc">
    <div class="white landing-black db">
      <div class="bg-neutral color-white w-100 center">
        <section class="tc pa3">
          <h1 class="f3 f2-m f1-l fw2 mv3 tracked">
              {{app.orgName}}
          </h1>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    elementName: 'core-header',
    name: 'CoreHeader',

    connectedCallback() {
      console.log('header connectedCallback')
      this.store = document.querySelector('app-root').store

      this._insert({shadow: false, template: false})
      this.store.subscribe(state => this.render(state))
    },

    render(state) {
      console.log('header render')
      document.querySelector(this.selector).innerHTML = this._updateTemplate(this.templates[0].innerHTML, state)
    }
  }

</script>

<style>
  .landing-black {background-color: #293648}
</style>
