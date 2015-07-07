var assert = require('assert');
var fromCSS = require('../fromCSS')

var list = function() {

	// list-style
	var style = '{ list-style: square url("sqare.gif"); }'
	var reactStyle = fromCSS(style)
	var testStyle = { listStyle: 'square url("sqare.gif")' }
	console.log('testing : ' + style)
	assert.deepEqual( reactStyle, testStyle, 'parsing list-style')

	// list-style-image
	var style = '{ list-style-image: url("sqare.gif"); }'
	var reactStyle = fromCSS(style)
	var testStyle = { listStyleImage: 'url("sqare.gif")' }
	console.log('testing : ' + style)
	assert.deepEqual( reactStyle, testStyle, 'parsing list-style-image')

	// list-style-position, list-style-type
	var style = '{ list-style-position: inside; list-style-type: circle; }'
	var reactStyle = fromCSS(style)
	var testStyle = { listStylePosition: 'inside', listStyleType: 'circle' }
	console.log('testing : ' + style)
	assert.deepEqual( reactStyle, testStyle, 'parsing list-style-position, list-style-type')	

}

module.exports = list