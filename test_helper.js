require.extensions['.svg'] = function(){ return null; }
require.extensions['.css'] = function(){ return null; }

require('babel-polyfill')
require('babel-register')
require("babel-preset-env")
require("babel-preset-react")
require("enzyme-to-json/serializer");


var enzyme = require('enzyme');
var Adapter = require('enzyme-adapter-react-16');

enzyme.configure({ adapter: new Adapter() });

