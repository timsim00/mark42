import * as symbols from './symbols.js';

export default function innerStyleMixin(Base) {

  // The class prototype added by the mixin.
  class innerStyle extends Base {

    get defaultState() {
      // console.log('*** defaultState', this.extends)
      // https://getbootstrap.com/docs/3.4/customize/
      let innerStyle = '@import "/assets/tachyons.min.css";'
      if (this.extends === 'input') {
        innerStyle += '@import "/assets/input-bootstrap.min.css";'
      } else if (this.extends === 'button') {
        innerStyle += `
          @import "/assets/button-bootstrap.min.css";
          .button-disabled {
            opacity: 0.65;
            cursor: not-allowed;
          }
        `
      }

      return Object.assign(super.defaultState, {
        innerStyle
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
