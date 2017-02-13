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
npm i
node index.js
```

This will start a small static server delivering all JS files residing under `./src` directory. In our case the sample files are:

```
./src/hello.js
./src/bonjour.js
./src/deutsch/willkommen.js

```

The latter will accessible at:

```
http://localhost:8001/hello.js
http://localhost:8001/bonjour.js
http://localhost:8001/deutsch/willkommen.js
```

and you can list the sources as:

```
<script src='http://localhost:8001/hello.js'></script>
<script src='http://localhost:8001/bonjour.js'></script>
<script src='http://localhost:8001/deutsch/willkommen.js'></script>
```


