// This is the main file, it depends on other stuff to work (namely lib.js).
// Unfortunately, JSLib cannot realize "HelloWorld" is defined elsewhere,
// so it issues a warning.
//
// IMHO the solution would be to make JSLint work on a directory, instead
// of a single file. Alternatively, it could parse importScripts().
//
// The usual way to cope with it seems to define /*global ...*/ comments,
// which causes some boilerplate code.

window.importScripts("lib.js");

var helloWorld = new HelloWorld("John Doe"); // JSLint error
helloWorld.greet();
