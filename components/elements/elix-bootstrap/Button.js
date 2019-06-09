import Button from '../elix/Button.js';
import * as symbols from '../elix/symbols.js';
import * as template from '../elix/template.js';

class BootButton extends Button {

  constructor() {
    super()
  }

  get [symbols.hasDynamicTemplate]() {
    return true;
  }

  get [symbols.template]() {
    return template.html`
      <button id="inner" role="none">
        <slot></slot>
      </button>
    `;
  }

}

customElements.define('elix-boot-button', BootButton);
export default BootButton;



