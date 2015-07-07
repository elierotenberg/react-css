var assert = require('assert');
var fromCSS = require('../fromCSS')

var font = function() {

	// font
	var style = '{ font: 1em arial, sans-serif; }'
	var reactStyle = fromCSS(style)
	var testStyle = { font: '1em arial, sans-serif' }
	console.log('testing : ' + style)
	assert.deepEqual( reactStyle, testStyle, 'parsing font')

	// font-family
	var style = '{ font-family: "Times New Roman", Georgia, Serif; }'
	var reactStyle = fromCSS(style)
	var testStyle = { fontFamily: '"Times New Roman", Georgia, Serif' }
	console.log('testing : ' + style)
	assert.deepEqual( reactStyle, testStyle, 'parsing font-family')

	// font-face
	var style = '{ font-family: myFont; src: url(myfont.woff); }'
	var reactStyle = fromCSS(style)
	var testStyle = { fontFamily: 'myFont', src: 'url(myfont.woff)' }
	console.log('testing : ' + style)
	assert.deepEqual( reactStyle, testStyle, 'parsing font-face')

	// font-size
	var style = '{ font-size: 200; }'
	var reactStyle = fromCSS(style)
	var testStyle = { fontSize: '200' }
	console.log('testing : ' + style)
	assert.deepEqual( reactStyle, testStyle, 'parsing font-size')

	// font-stretch
	var style = '{ font-stretch: expanded; }'
	var reactStyle = fromCSS(style)
	var testStyle = { fontStretch: 'expanded' }
	console.log('testing : ' + style)
	assert.deepEqual( reactStyle, testStyle, 'parsing font-stretch')

	// font-style
	var style = '{ font-style: italic; }'
	var reactStyle = fromCSS(style)
	var testStyle = { fontStyle: 'italic' }
	console.log('testing : ' + style)
	assert.deepEqual( reactStyle, testStyle, 'parsing font-style')

	// font-variant
	var style = '{ font-variant: small-caps; }'
	var reactStyle = fromCSS(style)
	var testStyle = { fontVariant: 'small-caps' }
	console.log('testing : ' + style)
	assert.deepEqual( reactStyle, testStyle, 'parsing font-variant')

	// font-variant
	var style = '{ font-weight: normal; }'
	var reactStyle = fromCSS(style)
	var testStyle = { fontWeight: 'normal' }
	console.log('testing : ' + style)
	assert.deepEqual( reactStyle, testStyle, 'parsing font-weight')

}

module.exports = font