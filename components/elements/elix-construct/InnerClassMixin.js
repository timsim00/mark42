import * as symbols from '../../../node_modules/elix-602/src/symbols.js';

export default function InnerClassMixin(Base) {

  // The class prototype added by the mixin.
  class InnerClass extends Base {

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

  }

  return InnerClass;
}
