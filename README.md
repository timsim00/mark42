
![Mark 42](https://github.com/timsim00/mark42/raw/master/assets/icon.png "Mark 42")


What if we could make (highly scalable) apps that act like [Tony Stark's Mark 42](https://youtu.be/bvwnbrrIvmA?t=100)?

(ie. components fly in as needed)


## Status
Experimental, WIP


## Installation

```
$ npm install
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


## Fine print

Naming conventions are important atm.  Certain logic is driven by how folders, files and modules are named. Not ideal, but room for improvement.

Needs work:
- Naming conventions/logic
- Browser back/forward navigation
- [FOUC](https://en.wikipedia.org/wiki/Flash_of_unstyled_content) (esp. when using tachyons within shadowdom)
- Firefox/safari 'app ready' event
- Experiment with bundling core components/assets
- [Support](https://github.com/WebReflection/document-register-element) for older browsers
