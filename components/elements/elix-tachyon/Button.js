import Button from '../elix/Button.js';
import * as symbols from '../elix/symbols.js';
import * as template from '../elix/template.js';

class TachButton extends Button {

  constructor() {
    super()
    console.log(`constructor: ${this.id} - ${this.getAttribute('inner-class')}`)
  }

  // get [symbols.hasDynamicTemplate]() {
  //   return true;
  // }

  get [symbols.template]() {
    return template.html`
      <style>
        @import "/assets/tachyons.min.css";
        .button-disabled {
          opacity: 0.65;
          cursor: not-allowed;
        }
      </style>

      <button id="inner" role="none">
        <slot></slot>
      </button>
    `;
  }

}

customElements.define('elix-tach-button', TachButton);
export default TachButton;
