<template>
  <!--
  <div class="mw6 mw8-ns ph4-ns ph3 pv3 center overflow-scroll h-100">
    Frameworkless, buildless, single-page, micro-frontend, web component <strong>pattern</strong>
    <ul>
      <li>Loosely-coupled modules are better than monoliths</li>
      <li>Vanilla JS is better than yet another API to learn</li>
      <li>Simple is better than complicated</li>
      <li>Fast is better than slow</li>
      <li>Small is better than large</li>
      <li>Scalable is better than hitting an upper limit</li>
      <li>Easy to reason about is better than hard to reason about</li>
    </ul>
  </div>
  -->
  <div class="contact-clean">
      <form method="post">
          <h2 class="text-center">Contact us</h2>
          <div class="form-group"><input type="text" class="form-control" name="name" placeholder="Name" /></div>
          <div class="form-group"><input type="email" class="form-control is-invalid" name="email" placeholder="Email" /><small class="form-text text-danger">Please enter a correct email address.</small></div>
          <div class="form-group"><textarea class="form-control" name="message" placeholder="Message" rows="14"></textarea></div>
          <div class="form-group"><button class="btn btn-primary" type="submit">send </button></div>
      </form>
  </div>
</template>
<script>
  export default {
    elementName: 'core-about',
    name: 'CoreAbout',

    connectedCallback() {
      console.log('core-copy connectedCallback')

      this.store = document.querySelector('app-root').store
      this._insert({shadow: false, template: false})
      this.render(this.store.state)
    },

    render(state) {
      console.log('core-about render', state)
      document.querySelector(this.selector).innerHTML = this._updateTemplate(this.templates[0].innerHTML, state)
    }
  }

</script>
<style>
  @import "/assets/bootstrap.min.css";
  .contact-clean {
    padding: 20px 0;
  }
</style>
