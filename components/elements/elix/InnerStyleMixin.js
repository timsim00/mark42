import * as symbols from './symbols.js';
import * as template from './template.js';

export default function innerStyleMixin(Base) {

  // The class prototype added by the mixin.
  class innerStyle extends Base {

    // get defaultState() {
    //   // console.log('*** defaultState', this.extends)
    //   // https://getbootstrap.com/docs/3.4/customize/
    //   let innerStyle = '@import "/assets/tachyons.min.css";'
    //   if (this.extends === 'input') {
    //     innerStyle += '@import "/assets/input-bootstrap.min.css";'
    //   } else if (this.extends === 'button') {
    //     innerStyle += `
    //       @import "/assets/button-bootstrap.min.css";
    //       .button-disabled {
    //         opacity: 0.65;
    //         cursor: not-allowed;
    //       }
    //     `
    //   }
    //
    //   return Object.assign(super.defaultState, {
    //     innerStyle
    //   });
    // }
    //
    // get innerStyle() {
    //   return this.state.innerStyle;
    // }
    // set innerStyle(innerClass) {
    //   this.setState({ innerStyle });
    // }
    //
    // [symbols.render](changed) {
    //   super[symbols.render](changed);
    //   if (changed.innerStyle && this.state.innerClass) {
    //     let style = document.createElement('style');
    //     style.appendChild(document.createTextNode(this.state.innerStyle));
    //     this.shadowRoot.querySelector('style').replaceWith(style)
    //   }
    // }

    // get [symbols.hasDynamicTemplate]() {
    //   return true;
    // }

    get [symbols.template]() {
      console.log('*** innerstyle get template:', this.extends)

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

      let superTemplate = super[symbols.template]
      let oldStyle = superTemplate.content.querySelector('style')
      if (oldStyle) {
        superTemplate.content.removeChild(oldStyle)
      }
      let newTemplate = template.concat(template.html`
        <style>
          ${innerStyle}
        </style>
      `, superTemplate);
      return newTemplate;
    }

  }

  return innerStyle;
}
