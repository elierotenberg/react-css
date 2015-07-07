var assert = require('assert');
var fromCSS = require('../fromCSS')

var table = function() {

	// border-spacing, border-collapse, empty-cells
	var style = '{ border-spacing: 10px 50px; border-collapse: separate; empty-cells: hide; }'
	var reactStyle = fromCSS(style)
	var testStyle = { 
		borderSpacing: '10px 50px',
		borderCollapse: 'separate',
		emptyCells: 'hide'
	}
	console.log('testing : ' + style)
	assert.deepEqual( reactStyle, testStyle, 'parsing border')

}

module.exports = table