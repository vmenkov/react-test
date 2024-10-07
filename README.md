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

This will put the compiled HTML and JS code into subdirectory ```build```.  After that, you can run the app in your browser by doing "Open File" in the browser, or going to an appropriate ```file:``` URL (e.g., on my Macintosh personal computer, ```file:///Users/vmenkov/w2020/small-grommet-app/build/index.html?n1=3&n2=5```). If you run a web server such as Apache Tomcat, you can copy the entire subdirectory ```build``` to your Tomcat's webapps directory, e.g.
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

Creating a good package.json file is often a tricky point when creating a TypesSript/React/Grommet app, because there are so many dependencies that need to be gotten just right, without serious conflicts. As a base for the package.json file for this application I have taken the one from another sample Grommet app:
https://github.com/grommet/grommet-starter-new-app/blob/master/package.json

Our application, although small, uses a few packages that aren't included in that prototype ```package.json```. To accommodate them, I first added the packages in question to the list of "dependencies" with the "*" in the version field, meaning that we are OK with any version. (In practice, this means that we'll have the installation script install the latest version):
```
      "react-use": "*",
      "react-redux": "*"
```
After ```npm install``` pulled in some (likely, the latest) versions of these packages into the ```node_modules``` directory, I could see their actual version numbers, and put them into my  ```package.json``` instead of asterisks. This ensured that even future versions of these packages won't be compatible with the version of other packages in my dependencies list, any future run of ```npm install``` (say, if someone else wants to recreate my setup on his machine) will still pull in the same package versions I happened to use.

In the same way I added dependencies (and, evetually, version numbers)
for a few "packages" that turned out to be necessary during compuilation, such as ``` @types/react```. (Errors reported by ```npm build```:
```
TS7016: Could not find a declaration file for module 'react'. '/Users/vmenkov/w2020/react-test-3/node_modules/react/index.js' implicitly has an 'any' type.
  Try `npm i --save-dev @types/react` if it exists or add a new declaration (.d.ts) file containing `declare module 'react';`
    1 | import { Box, Button, Grid, Grommet, Heading, Paragraph, Text, Form, FormField, TextArea, TextInput } from 'grommet';
    2 | import { Expand } from 'grommet-icons';
  > 3 | import React, { useRef, useState, useEffect } from 'react';
      |                                                    ^^^^^^^
    4 | //import { hot } from 'react-hot-loader/root';
    5 | import { useDispatch, useSelector } from 'react-redux';
    6 | import { useEvent, useMount, useSearchParam } from 'react-use';
```
See more on this here:
https://stackoverflow.com/questions/41462729/typescript-react-could-not-find-a-declaration-file-for-module-react-material )

