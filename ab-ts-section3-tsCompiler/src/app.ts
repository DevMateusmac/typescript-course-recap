console.log('Time to get started...');

// each lecture is a comment separated by a blank line 

//to use watch mode => tsc app.ts --watch or -w 

/*
----compile entire project/multiple files----

to compile the entire project => tsc --init -> to create tsconfig.json
after this step above, just run 'tsc' that ts will compile all ts files to js files
*/

/*
----including/excluding files----

it's note down on tsconfig.json => after the close bracket, you add those properties  
*/

/*
----compilation target----
target sets the version of js it's on compilation section of tsconfig.json
*/

/*
---ts core libs---
enable the "lib" property that receive an array of libs to run ts properly, by default it's disabled so you can use all default libs that ts have, you don't need to set any specific lib, will not cause errors, if you enable, you need to set lib "dom" for example, to use the dom tree  
*/


/*
---configuration/compilation options---
allowJs, checkJs => the definitions is in that file
and some others below them
*/

/*
---source maps---
property sourceMap, it helps while debugging and development 
*/

/*
--- rootDir and outDir---

rootDir is the source folder of the code
outDir is the result folder of the code after the compilation
 you can use like this on tsconfig.json

 property = "outDir": "./dist"
 property = "rootDir": "./src"

 both are on tsconfig file.


 property removecomments it's obivous, will remove comments on compiled file
*/

/*
---Emitting files on compilation erros---

"noEmitOnError"
this property can be set and it's value setted to true, will not compile the file when it has an error until you fix it
*/

/*
---strict compilation---
it's related with ts type of data functionality
*/


/*
  ---code quality options---
  these options allows a better code quality 
  properties: noUnusedLocals, noUnusedParameters, noImplicitReturns 
*/

/*
  ---debugging with visual studio code---
  search the doc
*/

// Attached you find all the code snapshots for this module - you also find them attached to individual lectures throughout this module.

// These links might also be interesting:

//     tsconfig Docs: https://www.typescriptlang.org/docs/handbook/tsconfig-json.html

//     Compiler Config Docs: https://www.typescriptlang.org/docs/handbook/compiler-options.html

//     VS Code TS Debugging: https://code.visualstudio.com/docs/typescript/typescript-debugging