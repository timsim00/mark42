
![Mark 42](https://github.com/timsim00/mark42/raw/master/assets/icon.png "Mark 42")


What if we could make (highly scalable) apps that act like [Tony Stark's Mark 42](https://youtu.be/bvwnbrrIvmA?t=100)?

(ie. components fly in as needed)


## Status
Experimental, WIP


## Installation

```
$ yarn install
$ npm run paths  (be prepared to run this after every any node_modules change)
$ npm run start
```


## Contact
Love it, hate it, or anywhere in between, [drop me a line](https://drew-simmons.grapedrop.com/).

Help make it better (criticism and PR's welcome).


![Mark 42 Screenshot](https://github.com/timsim00/mark42/raw/master/screenshot42.png "Mark 42 Small Device")


## Features

- Tiny footprint
- No framework
- No build step (just cmd-R to reload)
- Micro-frontend in nature (as opposed to monolithic)
- Prehensile modules (send the minimum bytes to client on load, send non-essential modules as needed)
- Views can have multiple templates (eg. Loading template and main template)
- Modules can
  - be single-file (eg. see core-about) inspired by [this article](https://medium.com/content-uneditable/implementing-single-file-web-components-22adeaa0cd17),
  - be standard HTMLElement (eg. see app-root),
  - be plain script (eg. see corePage)
  - have or not have a UI
- Templates engine included ([tiny version of mustache](https://github.com/aishikaty/tiny-mustache))
- Tiny [uni-directional central state management](https://github.com/timsim00/slots) included
  - Central store can have namespaced modules
  - Subscribers are notified of state changes
- Router keeps URL in sync with fetched modules (ie. deep link your views)
- Static server included
- [Tachyons](http://tachyons.io/) is awesome, give it a shot.


## Why?

- Loosely-coupled modules are better than monoliths.
- Vanilla JS is better than yet another API to learn.
- Simple is better than complicated.
- Fast is better than slow.
- Small is better than large.
- Scalable is better than hitting an upper limit.
- Easy to reason about is better than hard to reason about.

## Component Collections

- [UI5](https://sap.github.io/ui5-webcomponents/playground/)
- [Elix](https://component.kitchen/elix)
- [Moerkerke](https://dannymoerkerke.github.io/material-webcomponents)
- [Weightless](https://weightless.dev/elements)
- [Nuclei](https://github.com/nuclei/material-input)
- [Gulick](https://www.npmjs.com/package/chip-input)

(Some are faster than others.)

### TODO:
- [Mailjet MJML](https://github.com/mjmlio/mjml/tree/master/packages) [and](https://mjml.io/documentation/#standard-body-components) [and](https://github.com/artf/grapesjs-mjml) [and](https://grapesjs.com/demo-mjml.html)
- [Coral-Spectrum](https://github.com/adobe/coral-spectrum) [github](https://github.com/adobe/coral-spectrum)
- [Stripe](https://stripe.com/payments/elements)
- [Costello](https://github.com/MikeCostello/bootstrap-web-components/tree/master/js)
- [Morbidick](https://github.com/morbidick/bootstrap-webcomponents/tree/master/elements)
- [Codepen](https://codepen.io/search/pens?q=web%20component&page=1&order=popularity&depth=everything)
- [Aurelia Materialize](http://aurelia-ui-toolkits.github.io/demo-materialize/#/samples/catalog) +
- [Aurelia.io plugin?](https://github.com/aurelia/web-components)
- [Carbon Custom Elements](https://carbon-custom-elements.netlify.com)
- [PatternFly / Redhat](https://github.com/patternfly/patternfly-elements/tree/master/elements)
- [Material Components](https://github.com/material-components/material-components-web-components/tree/master/demos)
- [Polymer](https://github.com/PolymerElements)
- [Vaadin](https://github.com/vaadin/vaadin)
- [Smart](https://github.com/HTMLElements)
- [NPM search](https://www.npmjs.com/search?q=web%20component%20collection)
- [Oracle JET](https://www.oracle.com/webfolder/technetwork/jet/jetCookbook.html) [min](https://www.oracle.com/webfolder/technetwork/jet/oj/v7.0.1/3rdparty/webcomponents/custom-elements.min.js) [github](https://github.com/oracle/oraclejet)
- [Nuxeo](https://github.com/nuxeo/nuxeo-elements/tree/master/ui)
- [Ionic](https://github.com/ionic-team/ionic/tree/master/core)
- [Vaadin](https://github.com/vaadin/vaadin-core/blob/master/vaadin-core.js)
- [Material Chip Input](https://www.npmjs.com/package/material-ui-chip-input)
- [Paper chip input](https://www.npmjs.com/package/@advanced-rest-client/paper-chip-input)
- [Aybolit](https://github.com/web-padawan/aybolit)


### UI Patterns
- [flowstate](https://miksovsky.blogs.com/flowstate/2013/07/how-many-general-purpose-ui-components.html)


## Fine print

To enable deep linking we have to have a 1-1 correlation between the route and the file path of the view.  This can be modified for your use-case.  Views can be kept in a db instead of the file system and this would not be an issue.  Another option would be let your routes match your file path.

Needs work:
- Naming conventions/logic
- [FOUC](https://en.wikipedia.org/wiki/Flash_of_unstyled_content) (esp. when using tachyons within shadowdom)
  - Constructible style sheets are the answer for this?
- Experiment with bundling core components/assets
- [Support](https://github.com/WebReflection/document-register-element) for older browsers, [more](https://github.com/webcomponents/webcomponentsjs)
