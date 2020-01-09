// setupProxy.js
const proxy = require('http-proxy-middleware');

var port = process.env.PORT || 9000;
var url = 'http://localhost:' + port + '/';
console.log(url);

module.exports = function(app) {
  app.use(proxy('/.netlify/functions/', { 
    target: url,
    "pathRewrite": {
      "^/\\.netlify/functions": ""
    }
  }));
}