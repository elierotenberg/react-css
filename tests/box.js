var assert = require('assert');
var fromCSS = require('../fromCSS')

var box = function() {

	// position
	var style = '{ position: absolute; bottom: 5px; left: 5px; }'
	var reactStyle = fromCSS(style)
	var testStyle = { position: 'absolute', bottom: '5px', left: '5px' }
	console.log('testing : ' + style)
	assert.deepEqual( reactStyle, testStyle, 'parsing position')

	// float
	var style = '{ float: left }'
	var reactStyle = fromCSS(style)
	var testStyle = { float: 'left' }
	console.log('testing : ' + style)
	assert.deepEqual( reactStyle, testStyle, 'parsing float')

	// height width
	var style = '{ height: 100px; width: 100px; }'
	var reactStyle = fromCSS(style)
	var testStyle = { height: '100px', width: '100px' }
	console.log('testing : ' + style)
	assert.deepEqual( reactStyle, testStyle, 'parsing height, width')

	// min, max
	var style = '{ min-height: 100px; min-width: 100px; max-height: 100px; max-width: 100px; }'
	var reactStyle = fromCSS(style)
	var testStyle = { 
		minHeight: '100px',
		minWidth: '100px',
		maxHeight: '100px',
		maxWidth: '100px'
	}
	console.log('testing : ' + style)
	assert.deepEqual( reactStyle, testStyle, 'parsing min, max')

	// display
	var style = '{ display: inline; }'
	var reactStyle = fromCSS(style)
	var testStyle = { display: 'inline' }
	console.log('testing : ' + style)
	assert.deepEqual( reactStyle, testStyle, 'parsing display')

	// clear
	var style = '{ clear: both }'
	var reactStyle = fromCSS(style)
	var testStyle = { clear: 'both' }
	console.log('testing : ' + style)
	assert.deepEqual( reactStyle, testStyle, 'parsing clear')

	// visibility
	var style = '{ visibility: hidden }'
	var reactStyle = fromCSS(style)
	var testStyle = { visibility: 'hidden' }
	console.log('testing : ' + style)
	assert.deepEqual( reactStyle, testStyle, 'parsing visibility')

	// z-index
	var style = '{ position: absolute; top: 0px; z-index: -1; }'
	var reactStyle = fromCSS(style)
	var testStyle = { position: 'absolute', top: '0px', zIndex: '-1' }
	console.log('testing : ' + style)
	assert.deepEqual( reactStyle, testStyle, 'parsing z-index')

	// overflow
	var style = '{ width: 150px; height: 150px; overflow: scroll; }'
	var reactStyle = fromCSS(style)
	var testStyle = { width: '150px', height: '150px', overflow: 'scroll' }
	console.log('testing : ' + style)
	assert.deepEqual( reactStyle, testStyle, 'parsing overflow')

	// clip
	var style = '{ position: absolute; clip: rect(0px,60px,200px,0px); }'
	var reactStyle = fromCSS(style)
	var testStyle = { position: 'absolute', clip: 'rect(0px,60px,200px,0px)' }
	console.log('testing : ' + style)
	assert.deepEqual( reactStyle, testStyle, 'parsing clip')

}

module.exports = box