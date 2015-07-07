var assert = require('assert');
var fromCSS = require('../fromCSS')

var padding = function() {

	// padding
	var style = '{  padding: 1em; }'
	var reactStyle = fromCSS(style)
	var testStyle = { padding: '1em' }
	console.log('testing : ' + style)
	assert.deepEqual( reactStyle, testStyle, 'parsing padding')

	// padding top, bottom, left, right
	var style = '{ padding-top: 1em; padding-bottom: 1em; padding-left: 1em; padding-right: 1em; }'
	var reactStyle = fromCSS(style)
	var testStyle = { 
		paddingTop: '1em',
		paddingBottom: '1em',
		paddingLeft: '1em',
		paddingRight: '1em'
	}
	console.log('testing : ' + style)
	assert.deepEqual( reactStyle, testStyle, 'parsing padding top, bottom, left')

}

module.exports = padding