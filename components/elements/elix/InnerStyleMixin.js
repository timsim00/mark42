import * as symbols from './symbols.js';

export default function innerStyleMixin(Base) {

  // The class prototype added by the mixin.
  class innerStyle extends Base {

    get defaultState() {
      return Object.assign(super.defaultState, {
        // TODO: customize the import for the component:
        // https://getbootstrap.com/docs/3.4/customize/
        // innerStyle: `
        //   @import "/assets/bootstrap.min.css"
        // `
        innerStyle: `
          @import "/assets/tachyons.min.css";
          .button-disabled {
            opacity: 0.65;
            cursor: not-allowed;
          }
        `
      });
    }

    get innerStyle() {
      return this.state.innerStyle;
    }
    set innerStyle(innerClass) {
      this.setState({ innerStyle });
    }

    [symbols.render](changed) {
      super[symbols.render](changed);
      if (changed.innerStyle && this.state.innerClass) {
        let style = document.createElement('style');
        style.appendChild(document.createTextNode(this.state.innerStyle));
        this.shadowRoot.querySelector('style').replaceWith(style)
      }
    }

  }

  return innerStyle;
}
