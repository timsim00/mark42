<template>
  <div class="page-header w-100 bb b--black-30">
    <nav class="dt pv2 bg-white w-100 mw8 center">
      <div class="mw8 center ph3 pt0 flex items-center justify-between justify-between-ns">
        <a class="dark-red tl f3 link fw1" title="Home" href="/">
          <h1 class="link mv0 tracked no-underline f3 fw4">
            <span class="v-mid dib link dim mr2 w2 h2" href="/" title="{{app.orgName}}">
              <img src="/assets/icon.png" alt="Logo">
            </span>
            <span class="dark-red mr3 v-mid link dim color-neutral hover-color-neutral f5 f3-ns dn dib-ns" href="/" title="{{app.orgName}}">
              {{app.orgName}}
            </span>
          </h1>
        </a>
        <nav class="mt0 pt0 tr items-baseline justify-between db-l flex-l">
          <div class="dib">
            <span id="btnAbout" name="about" class="tr fr mr4 dim pointer link">About</span>
            <span id="btnApp" name="app" class="tr fr mr4 dim pointer link">Test</span>
          </div>
        </nav>
      </div>
    </nav>
  </div>
</template>
<script>
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
      if (e.target.id === 'btnAbout') {
        console.log('About clicked')
        this.store.dispatch('app:REQUEST_VIEW', '/about')
      } else if (e.target.id === 'btnApp') {
        this.store.dispatch('app:REQUEST_VIEW', '/app/uHelloWorld1v1')
      }
    }


  }
</script>
<style>
  .page-header {
    flex: 0 0 auto;
  }
</style>
