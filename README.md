# A small sample TypeScript/React/Grommet app

The compiled code runs like this: http://action.rutgers.edu/react-test-2/index.html?n1=3&n2=5

Installation process:


1) You need ```npm```


2) Get all the necessary modules, with
```
npm install
```

This will download packages listed as dependencies in packages.json, as well as more packages needed by those dependencies, and so on. They will all go to ```node_modules```.

3) Compile with
```
npm run build
```

This will put the compiled HTML and JS code into subdirectory ```build```.  After that, you can run the app in your browser by doing "Open File" in the browser, or going to an appropriate ```file:``` URL (e.g., on my Macintosh personal computer, ```file:///Users/vmenkov/w2020/small-grommet-app/build/index.html?n1=3&n2=5```. Or you can copy the entire subdirectory ```build``` to your Tomcat's webapps directory, e.g.
```
mv build small-grommet-app
cp -pa small-grommet-app /opt/tomcat/webapps
```
, after which Tomcat will serve your app at 
http://localhost:8080/small-grommet-app
(also, with query string parameters, e.g.
http://localhost:8080/small-grommet-app/?n1=4&n2=2 )

Or you can make it into a WAR file, to deploy it to Tomcat as a single file.

# How did we build package.json ?

Creating a good package.json file is often a tricky point when creating a TypesSript/React/Grommet app, because there are so many dependencies that need to be gotten just right...


(..... need to edit the rest ....)

https://github.com/grommet/grommet-starter-new-app/blob/master/package.json

Added my packages to dependencies:
      "react-use": "*",
      "react-redux": "*",

--------------
TS7016: Could not find a declaration file for module 'react'. '/Users/vmenkov/w2020/react-test-3/node_modules/react/index.js' implicitly has an 'any' type.
  Try `npm i --save-dev @types/react` if it exists or add a new declaration (.d.ts) file containing `declare module 'react';`
    1 | import { Box, Button, Grid, Grommet, Heading, Paragraph, Text, Form, FormField, TextArea, TextInput } from 'grommet';
    2 | import { Expand } from 'grommet-icons';
  > 3 | import React, { useRef, useState, useEffect } from 'react';
      |                                                    ^^^^^^^
    4 | //import { hot } from 'react-hot-loader/root';
    5 | import { useDispatch, useSelector } from 'react-redux';
    6 | import { useEvent, useMount, useSearchParam } from 'react-use';


-----

Proposed solution:
https://stackoverflow.com/questions/41462729/typescript-react-could-not-find-a-declaration-file-for-module-react-material

ADDING "@types/react" to dependencies...
