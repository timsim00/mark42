export default class FancyButton extends HTMLElement {
  // static get elementName() { // not needed if 'define' below.
  //   return 'fancy-button'
  // }
  static get template() {
    return `
      <style>
        button {
          display: inline-flex;
          background: #0086b3;
          color: white;
          margin: 0.5em;
          padding: 1em;
          font-size: 16px;
          border-radius: 0.5em;
          cursor: pointer;
          border: none;
        }
      </style>
      <button>
        <slot></slot>
      </button>
    `;
  }

  constructor() {
    super();
    this.setting = {}
  }

  connectedCallback() {
    this.attachShadow({
      mode: 'open'
    }).innerHTML = FancyButton.template;
  }
};
customElements.define('fancy-button', FancyButton);