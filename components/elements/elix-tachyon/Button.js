import Button from '../elix/Button.js';
import * as symbols from '../elix/symbols.js';
import * as template from '../elix/template.js';

class TachButton extends Button {

  constructor() {
    super()
    console.log(`constructor: ${this.id} - ${this.dataset.class}`)
  }

  get [symbols.hasDynamicTemplate]() {
    return true;
  }  

  get [symbols.template]() {
    console.log(`get template${this.id} - ${this.dataset.class}`)
    return template.html`
      <style>
        @import "/assets/tachyons.min.css";
        .button-disabled {
          opacity: 0.65;
          cursor: not-allowed;
        }
      </style>

      <button class="${this.dataset.class}" id="inner" role="none">
        <slot></slot>
      </button>
    `;
  }

}

customElements.define('elix-tach-button', TachButton);
export default TachButton;
