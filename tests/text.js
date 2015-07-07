var assert = require('assert');
var fromCSS = require('../fromCSS')

var text = function() {

	// letter-spacing
	var style = '{ letter-spacing: 2px; }'
	var reactStyle = fromCSS(style)
	var testStyle = { letterSpacing: '2px' }
	console.log('testing : ' + style)
	assert.deepEqual( reactStyle, testStyle, 'parsing letter-spacing')

	// line-height, word-break
	var style = '{ line-height: 90%; word-break: break-all; }'
	var reactStyle = fromCSS(style)
	var testStyle = { lineHeight: '90%', wordBreak: 'break-all' }
	console.log('testing : ' + style)
	assert.deepEqual( reactStyle, testStyle, 'parsing line-height, word-break')

	// word-spacing, word-wrap
	var style = '{ word-spacing: 30px; word-wrap: break-word; }'
	var reactStyle = fromCSS(style)
	var testStyle = { wordSpacing: '30px', wordWrap: 'break-word' }
	console.log('testing : ' + style)
	assert.deepEqual( reactStyle, testStyle, 'parsing word-spacing, word-wrap')

	//text-align, text-justify
	var style = '{ text-align: center; text-justify: inter-word; }'
	var reactStyle = fromCSS(style)
	var testStyle = { textAlign: 'center', textJustify: 'inter-word' }
	console.log('testing : ' + style)
	assert.deepEqual( reactStyle, testStyle, 'parsing text-align, text-justify')

	//text-indent, text-transform
	var style = '{ text-indent: 50px; text-transform: uppercase; }'
	var reactStyle = fromCSS(style)
	var testStyle = { textIndent: '50px', textTransform: 'uppercase' }
	console.log('testing : ' + style)
	assert.deepEqual( reactStyle, testStyle, 'parsing text-indent, text-transform')

	//text-decoration
	var style = '{ text-decoration: underline; }'
	var reactStyle = fromCSS(style)
	var testStyle = { textDecoration: 'underline' }
	console.log('testing : ' + style)
	assert.deepEqual( reactStyle, testStyle, 'parsing text-decoration')

	//text-decoration color
	var style = '{ text-decoration: underline; text-decoration-color: red; -moz-text-decoration-color: red; }'
	var reactStyle = fromCSS(style)
	var testStyle = { 
		textDecoration: 'underline',
		textDecorationColor: 'red',
		MozTextDecorationColor: 'red' 
	}
	console.log('testing : ' + style)
	assert.deepEqual( reactStyle, testStyle, 'parsing text-decoration-color')

	//text-decoration line
	var style = '{ text-decoration-line: overline; -moz-text-decoration-line: overline; }'
	var reactStyle = fromCSS(style)
	var testStyle = { 
		textDecorationLine: 'overline',
		MozTextDecorationLine: 'overline' 
	}
	console.log('testing : ' + style)
	assert.deepEqual( reactStyle, testStyle, 'parsing text-decoration-line')

	//text-shadow
	var style = '{ text-shadow: 2px 2px #ff0000; }'
	var reactStyle = fromCSS(style)
	var testStyle = { 
		textShadow: '2px 2px #ff0000'
	}
	console.log('testing : ' + style)
	assert.deepEqual( reactStyle, testStyle, 'parsing text-shadow')

	//text-overflow
	var style = '{ text-overflow: ellipsis; }'
	var reactStyle = fromCSS(style)
	var testStyle = { 
		textOverflow: 'ellipsis'
	}
	console.log('testing : ' + style)
	assert.deepEqual( reactStyle, testStyle, 'parsing text-overflow')

}

module.exports = text