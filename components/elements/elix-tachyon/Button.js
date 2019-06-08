import Button from '../elix/Button.js';
import * as symbols from '../elix/symbols.js';
import * as template from '../elix/template.js';

class TachButton extends Button {

  constructor() {
    super()
    console.log(`constructor: ${this.id} - ${this.dataset.class}`)
  }

  get defaultState() {
    return Object.assign(super.defaultState, {
      innerClass: null
    });
  }

  get innerClass() {
    return this.state.innerClass;
  }
  set innerClass(innerClass) {
    this.setState({ innerClass });
  }

  [symbols.render](changed) {
    super[symbols.render](changed);
    if (changed.innerClass) {
      if (this.state.innerClass) {
        this.$.inner.setAttribute('class', this.state.innerClass);
      } else {
        this.$.inner.removeAttribute('class');
      }
    }
  }

  // get [symbols.hasDynamicTemplate]() {
  //   return true;
  // }

  get [symbols.template]() {
    console.log(`get template${this.id} - ${this.dataset.class}`)
    // console.trace()
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
