// Cookie package 

// cookie.parse(str, options)

var cookie = require('cookie');

// Parse an HTTP Cookie header string and returning an object of all cookie name-value pairs.

var cookies = cookie.parse('foo=bar; equation=E%3Dmc%5E2');

// Output: { foo: 'bar', equation: 'E=mc^2' }

console.log(cookies);

