var assert = require('assert');
var fromCSS = require('../fromCSS')

var color = function() {

	// color
	var style = '{ color: #00ff00; }'
	var reactStyle = fromCSS(style)
	var testStyle = { color: '#00ff00' }
	console.log('testing : ' + style)
	assert.deepEqual( reactStyle, testStyle, 'parsing color')

	// opacity
	var style = '{ opacity: 0.5; }'
	var reactStyle = fromCSS(style)
	var testStyle = { opacity: '0.5' }
	console.log('testing : ' + style)
	assert.deepEqual( reactStyle, testStyle, 'parsing opacity')

}

module.exports = color