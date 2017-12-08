const Enzyme = require('enzyme');
const Adapter = require('enzyme-adapter-react-15');

// set node evn
process.env.NODE_ENV = 'test';

// register babel presets
require('babel-register')({
  presets: ['es2015', 'stage-0', 'react'],
  plugins: ['istanbul', 'transform-decorators-legacy']
});

Enzyme.configure({ adapter: new Adapter() });

global.document = require('jsdom').jsdom('<!doctype html><html><body></body></html>');
global.window = document.defaultView;
global.navigator = global.window.navigator;
