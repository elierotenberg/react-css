var assert = require('assert');
var fromCSS = require('../fromCSS')

var margin = function() {

	// margin
	var style = '{  margin: 1em; }'
	var reactStyle = fromCSS(style)
	var testStyle = { margin: '1em' }
	console.log('testing : ' + style)
	assert.deepEqual( reactStyle, testStyle, 'parsing margin')

	// margin top, bottom, left, right
	var style = '{ margin-top: 1em; margin-bottom: 1em; margin-left: 1em; margin-right: 1em; }'
	var reactStyle = fromCSS(style)
	var testStyle = { 
		marginTop: '1em',
		marginBottom: '1em',
		marginLeft: '1em',
		marginRight: '1em'
	}
	console.log('testing : ' + style)
	assert.deepEqual( reactStyle, testStyle, 'parsing margin top, bottom, left, right')

}

module.exports = margin