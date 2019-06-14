import * as symbols from '../../../node_modules/elix-602/src/symbols.js';
import * as template from '../../../node_modules/elix-602/src/template.js';

export default function innerStyleMixin(Base) {

  // The class prototype added by the mixin.
  class InnerStyle extends Base {

    get [symbols.template]() {
      // console.log('innerstyle get template:', this.extends)

      // const sheet = new CSSStyleSheet();
      // // replace all styles synchronously:
      // // sheet.replaceSync('a { color: red; }');
      // // replace all styles, allowing external resources:
      // sheet.replace(`@import url("/assets/${this.extends}-bootstrap.min.css")`)
      // .then(sheet => {
      //   console.log('*** Styles loaded successfully');
      //   // Apply the stylesheet to a document:
      //   document.adoptedStyleSheets = [sheet];
      //
      //   // Apply the stylesheet to a Shadow Root:
      //   // const shadow = this.attachShadow({ mode: 'open' });
      //   // console.log('this', this)
      //   super.shadowRoot.adoptedStyleSheets = [sheet];
      // })
      // .catch(err => {
      //   console.error('Failed to load:', err);
      // });

      return super[symbols.template]

      // let innerStyle = '@import "/assets/tachyons.min.css";'
      // const handled = ['input', 'button']
      // // TODO: browser-specific style sheets?
      // // TODO: reverse-tachyons to create component-specific css? (still need to allow for dynamic class changes)
      // // TODO: confirm browser caching/performance of @import's
      // if (handled.includes(this.extends)) {
      //   innerStyle += `@import "/assets/${this.extends}-bootstrap.min.css";`
      // }
      // if (this.extends === 'button') {
      //   innerStyle += `
      //     .button-disabled {
      //       opacity: 0.65;
      //       cursor: not-allowed; /* bootstrap css overrides this */
      //     }
      //   `
      // }
      //
      // let superTemplate = super[symbols.template]
      // let oldStyle = superTemplate.content.querySelector('style')
      // if (oldStyle) {
      //   superTemplate.content.removeChild(oldStyle)
      // }
      // let newTemplate = template.concat(template.html`
      //   <style>
      //     ${innerStyle}
      //   </style>
      // `, superTemplate);
      // return newTemplate;
    }

  }

  return InnerStyle;
}
