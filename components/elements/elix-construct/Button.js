import BaseButton from '../../../node_modules/elix-602/src/Button.js';
import InnerClassMixin from './InnerClassMixin.js';
import InnerStyleMixin from './InnerStyleMixin.js';

const Base =
  InnerClassMixin(
  InnerStyleMixin(
    BaseButton
  ));

class Button extends Base {

}

customElements.define('elix-style-button', Button);
export default Button;
