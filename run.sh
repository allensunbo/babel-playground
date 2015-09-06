// this is only used to generate output file
babel script.js --modules common --source-maps --watch --out-file script-compiled.js
// typical setup
nodemon server.js 
	where server.js is es5 and server.js requires script.js, and script.js can be es6
