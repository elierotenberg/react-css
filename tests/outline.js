var assert = require('assert');
var fromCSS = require('../fromCSS')

var outline = function() {

	// outline
	var style = '{ outline: #00FF00 dotted thick; }'
	var reactStyle = fromCSS(style)
	var testStyle = { outline: '#00FF00 dotted thick' }
	console.log('testing : ' + style)
	assert.deepEqual( reactStyle, testStyle, 'parsing outline')

	// outline-style, width, offset, color
	var style = '{ outline-style: dotted;  outline-width: 5px; outline-offset: 15px; outline-color: #00ff00; }'
	var reactStyle = fromCSS(style)
	var testStyle = { 
		outlineStyle: 'dotted',
		outlineWidth: '5px',
		outlineOffset: '15px',
		outlineColor: '#00ff00' 
	}
	console.log('testing : ' + style)
	assert.deepEqual( reactStyle, testStyle, 'parsing outline-style, width, offset, color')

}

module.exports = outline