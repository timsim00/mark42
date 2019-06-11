import Button from './Button.js';
import InnerClassMixin from './InnerClassMixin.js';
import InnerStyleMixin from './InnerStyleMixin.js';

const Base =
  InnerClassMixin(
  InnerStyleMixin(
    Button
  ));

class StyleButton extends Base {

}

customElements.define('elix-style-button', StyleButton);
export default StyleButton;
