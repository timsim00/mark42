import BaseButton from '../../../node_modules/elix-602/src/Button.js';
import * as symbols from '../../../node_modules/elix-602/src/symbols.js';
import InnerClassMixin from './InnerClassMixin.js';

const Base =
  InnerClassMixin(
    BaseButton
  );

class Button extends Base {

  [symbols.render](/** @type {PlainObject} */ changed) {
    super[symbols.render](changed);
    if (!this.shadowRoot.adoptedStyleSheets.length) {
      let oldStyle = this.shadowRoot.querySelector('style')
      if (oldStyle) {
        this.shadowRoot.removeChild(oldStyle)
      }
      const sheet = new CSSStyleSheet();
      let self = this
      sheet.replace(`@import url("/assets/${this.extends}-bootstrap.min.css")`)
      .then(sheet => {
        self.shadowRoot.adoptedStyleSheets = [sheet];
      })
      .catch(err => {
        console.error('Failed to load:', err);
      });
    }
  }

}

customElements.define('elix-construct-button', Button);
export default Button;
