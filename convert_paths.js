const replace = require('replace-in-file');
let options = {
  files: [],
  from: [
    /import "@ui5/g,
    /import '@ui5/g,
    /from "@ui5/g,
    /from '@ui5/g,
    /from "lit-html"/g,
    /from 'lit-html'/g,
    /from "lit-html\//g,
    /from 'lit-html\//g,
    /from "lit-element"/g,
    /from 'lit-element'/g,
    /from 'tslib'/g,
    /directives\/if-defined'/g,
    /from '@a11y\/focus-trap\/debounce'/g,
    /lit-html\/directives\/repeat"/g,
    /lit-html\/directives\/class-map"/g,
    /lit-html\/directives\/style-map"/g,
    /from '.\/i18n\/translations'/g,
    /from '..\/coral-utils'/g,
    /from \'.\/src\/scripts\/Tag\'/g,
    /from \'.\/src\/scripts\/TagLabel\'/g,
    /from \'.\/src\/scripts\/TagList\'/g,
    /from \'.\/component-chip\'/g
  ],
  to: [
    'import "/node_modules/@ui5',
    'import \'/node_modules/@ui5',
    'from "/node_modules/@ui5',
    'from \'/node_modules/@ui5',
    'from "/node_modules/lit-html/lit-html.js"',
    'from \'/node_modules/lit-html/lit-html.js\'',
    'from "/node_modules/lit-html/',
    'from \'/node_modules/lit-html/',
    'from "/node_modules/lit-element/lit-element.js"',
    'from \'/node_modules/lit-element/lit-element.js\'',
    'from \'/node_modules/tslib/tslib.es6.js\'',
    'directives/if-defined.js\'',
    'from \'/node_modules/@a11y/focus-trap/debounce.js\'',
    'lit-html/directives/repeat.js"',
    'lit-html/directives/class-map.js"',
    'lit-html/directives/style-map.js"',
    'from \'./i18n/translations.js\'',
    'from \'../coral-utils/index.js\'',
    'from \'./src/scripts/Tag.js\'',
    'from \'./src/scripts/TagLabel.js\'',
    'from \'./src/scripts/TagList.js\'',
    'from \'./component-chip.js\''
  ]
};

// https://gist.github.com/kethinov/6658166
// List all files in a directory in Node.js recursively in a synchronous fashion
  var walkSync = function(dir, filelist) {
         var path = path || require('path');
         var fs = fs || require('fs'),
             files = fs.readdirSync(dir);
         filelist = filelist || [];
         files.forEach(function(file) {
             let filePath = path.join(dir, file)
             if (fs.statSync(filePath).isDirectory()) {
                 filelist = walkSync(path.join(dir, file), filelist);
                 // options.files.push(`${filePath}/*.js`);

                 options.files = `${filePath}/*.js`
                 // console.log('***', options.files);
                 replace(options, (error, results) => {
                   if (error) {
                     console.error('Error occurred:', error);
                   }
                   console.log('Replacement results:', results);
                 });

                 // console.log(`${filePath}/*.js`);
             }
             else {
               if (path.extname(file) === '.js') {
                 let filePath = path.join(dir, file)
                 // console.log('^^^', filePath)
                 options.files = filePath
                 replace(options, (error, results) => {
                   if (error) {
                     console.error('Error occurred:', error);
                   }
                   console.log('Replacement results:', results);
                 });
               }
             }
         });
         return filelist;
     };

walkSync('node_modules/@ui5')
walkSync('node_modules/ui5-0120')
walkSync('node_modules/weightless-0034')
walkSync('node_modules/lit-element')
walkSync('node_modules/lit-html')
walkSync('node_modules/coral-100b82')
walkSync('node_modules/_gulick/chip-input-021/source')


options = {
  files: 'node_modules/@ui5/webcomponents-base/src/renderer/LitRenderer.js',
  from: [
    /from "lit-html"/g,
    /lit-html\/directives\/repeat"/g,
    /lit-html\/directives\/class-map"/g,
    /lit-html\/directives\/style-map"/g
  ],
  to: [
    'from "lit-html/lit-html.js"',
    '/node_modules/lit-html/directives/repeat.js"',
    '/node_modules/lit-html/directives/class-map.js"',
    '/node_modules/lit-html/directives/style-map.js"'
  ],
};

// replace(options, (error, results) => {
//   if (error) {
//     console.error('Error occurred:', error);
//   }
//   console.log('Replacement results:', results);
// });


