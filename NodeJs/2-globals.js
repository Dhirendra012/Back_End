// For Node their will be no WIndow Object just because of no Browser
// But they have some Global object which can be access from any file of the app 

// GLOBALS - NO WINDOW ! ! !

// __dirname  - Path to current directory
// __firlname - file name
// require    - Function to use modules( CommonJS )
// module     - Info about current module ( file )
// Process    - Info about ev=nv where the program is being executed

console.log(__dirname);
console.log(__filename);

setInterval(() => { console.log("Hello World"); }, 1000)