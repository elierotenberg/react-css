var assert = require('assert');
var fromCSS = require('../fromCSS')

var border = function() {

	// border
	var style = '{ border: 5px solid red; }'
	var reactStyle = fromCSS(style)
	var testStyle = { border: '5px solid red' }
	console.log('testing : ' + style)
	assert.deepEqual( reactStyle, testStyle, 'parsing border')

	// border-style
	// border-width
	// border-top
	// border-bottom
	// border-left
	// border-right
	var style = '{ border-style: solid; border-width: 15px; border-top: thick dotted #ff0000; border-bottom: thick dotted #ff0000; border-left: thick double #ff0000; border-right: thick double #ff0000; }'
	var reactStyle = fromCSS(style)
	var testStyle = { 
		borderStyle: 'solid',
		borderWidth: '15px',
		borderTop: 'thick dotted #ff0000',
		borderBottom: 'thick dotted #ff0000', 
		borderLeft: 'thick double #ff0000',
		borderRight: 'thick double #ff0000' 
	}
	console.log('testing : ' + style)
	assert.deepEqual( reactStyle, testStyle, 'parsing border-style, border-width')

	// border-top-right-radius
	// border-top-left-radius
	// border-bottom-right-radius
	// border-bottom-left-radius
	var style = '{ border: 2px solid; border-top-right-radius: 2em; border-top-left-radius: 2em; border-bottom-right-radius: 2em; border-bottom-left-radius: 2em; }'
	var reactStyle = fromCSS(style)
	var testStyle = { 
		border: '2px solid',
		borderTopRightRadius: '2em',
		borderTopLeftRadius: '2em',
		borderBottomRightRadius: '2em',
		borderBottomLeftRadius: '2em'
	}
	console.log('testing : ' + style)
	assert.deepEqual( reactStyle, testStyle, 'parsing radius')

	// box-sizing
	var style = '{ border: 5px solid red; box-sizing: border-box }'
	var reactStyle = fromCSS(style)
	console.log(reactStyle)
	var testStyle = { 
		border: '5px solid red',
		MozBoxSizing: 'border-box',
		boxSizing: 'border-box' 
	}
	console.log('testing : ' + style)
	assert.deepEqual( reactStyle, testStyle, 'parsing box-sizing')


}

module.exports = border