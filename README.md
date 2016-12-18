# sofia
Sofia is small web server dynamically including JS libraries and compiled templates into your web application simplifying development

Motivation:

There is little justification to still support AMD modules asynchronous spaghetti syntax today.

During `development`, you should be able to edit JavaScript and templates, refresh your web application in the browser, and have it load a newly version of your code. Any errors or warnings resulting from JSLint should appear at the top of your web application so they can be  identified. And as such `require.js` should not be used, but a utility server `sofia` is being used to deliver RAW JS files.

During `production` you should compile your JS files and templates using favorite obfuscator (such as Google Closure) and compile them to a minified JS version.
