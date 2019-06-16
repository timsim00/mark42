import BaseButton from '../../../node_modules/elix-602/src/Button.js';
import * as symbols from '../../../node_modules/elix-602/src/symbols.js';
import InnerClassMixin from './InnerClassMixin.js';
// import InnerStyleMixin from './InnerStyleMixin.js';

const Base =
  InnerClassMixin(
  // InnerStyleMixin(
    BaseButton
  );

class Button extends Base {

  // [symbols.render](changed) {
  //   super[symbols.render](changed);
  // }

  get [symbols.template]() {
    console.log('button-constructed', this.extends)
    // console.trace()

    const sheet = new CSSStyleSheet();

    // let oldStyle = this.shadowRoot.querySelector('style')
    // if (oldStyle) {
    //   this.shadowRoot.removeChild(oldStyle)
    // }
    let superTemplate = super[symbols.template]
    let oldStyle = superTemplate.content.querySelector('style')
    if (oldStyle) {
      superTemplate.content.removeChild(oldStyle)
    }

    let self = this
    sheet.replace(`@import url("/assets/${this.extends}-bootstrap.min.css")`)
    .then(sheet => {
      console.log('*** Styles loaded successfully');

      self.shadowRoot.adoptedStyleSheets = [sheet];
      console.log(`self.shadowRoot.adoptedStyleSheets`, self.id, !!self.shadowRoot.adoptedStyleSheets.length)
    })
    .catch(err => {
      console.error('Failed to load:', err);
    });

    return superTemplate
  }

  attributeChangedCallback(name, oldValue, newValue) {
    // console.log('attributeChangedCallback', name, oldValue, newValue);
  }


  // get [symbols.template]() {
  //   return template.concat(super[symbols.template], template.html`
  //     <style>
  //       #inner {
  //         background: white;
  //         border-radius: 0.5em;
  //         border: 2px solid rgba(255, 0, 0, 0.2);
  //         padding: 0.5em 1em;
  //       }
  //     </style>
  //   `);
  // }

}

customElements.define('elix-construct-button', Button);
export default Button;
