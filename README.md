# Sofia
Sofia is small web server including JS libraries and sources directly into your web application simplifying development

## Motivation:

There is little justification to still support AMD modules asynchronous spaghetti syntax today.

During `development`, you should be able to edit JavaScript and templates, refresh your web application in the browser, and have it load a newly version of your code. And as such there is little need for using `require.js` and `AMD`, but a utility server such as `sofia` or similar could be utilized to deliver RAW JS files. 

Bear in mind the order of the JS is important as as such remeber to list the in the required order. E.g.

```
http://localhost:8001/initial-file.js
http://localhost:8001/second-file.js
http://localhost:8001/third-file.js
...
http://localhost:8001/last-file.js
```

Start
---
```
node index.js
```

This will start a small static server delivering all JS files residing under './src' directory.

During `production` the JS files and templates should be compiled to a minified JS version.
