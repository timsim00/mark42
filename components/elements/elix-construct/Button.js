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

  [symbols.render](changed) {
    // console.trace()
    super[symbols.render](changed);
    console.log('button-constructed', this.extends)


    const sheet = new CSSStyleSheet();
    // replace all styles synchronously:
    // sheet.replaceSync('a { color: red; }');
    // replace all styles, allowing external resources:

    let oldStyle = this.shadowRoot.querySelector('style')
    if (oldStyle) {
      this.shadowRoot.removeChild(oldStyle)
    }

    let self = this
    sheet.replace(`@import url("/assets/${this.extends}-bootstrap.min.css")`)
    .then(sheet => {
      console.log('*** Styles loaded successfully');
      // Apply the stylesheet to a document:
      // document.adoptedStyleSheets = [sheet];

      // Apply the stylesheet to a Shadow Root:
      // const shadow = this.attachShadow({ mode: 'open' });
      console.log('self.shadowRoot', self.shadowRoot)
      self.shadowRoot.adoptedStyleSheets = [sheet];
    })
    .catch(err => {
      console.error('Failed to load:', err);
    });
  }

}

customElements.define('elix-construct-button', Button);
export default Button;
