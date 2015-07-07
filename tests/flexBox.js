var assert = require('assert');
var fromCSS = require('../fromCSS')

var color = function() {

	// flex
	var style = '{ -webkit-flex: 1; -ms-flex: 1; flex: 1; }'
	var reactStyle = fromCSS(style)
	console.log(reactStyle)
	// TODO: This should actually be msFlex
	var testStyle = { WebkitFlex: '1', MsFlex: '1', flex: '1' }
	console.log('testing : ' + style)
	assert.deepEqual( reactStyle, testStyle, 'parsing flex')

	// align
	var style = '{ display: -webkit-flex; -webkit-align-items: center; display: flex; align-items: center; }'
	var reactStyle = fromCSS(style)
	// TODO: This should actually be msFlex
	var testStyle = { 
		display: 'flex',
		WebkitAlignItems: 'center',
		MsFlexAlign: 'center',
		alignItems: 'center' 
	}
	console.log('testing : ' + style)
	assert.deepEqual( reactStyle, testStyle, 'parsing alignitems')

	// flex-direction
	var style = '{ display: -webkit-flex; -webkit-flex-direction: row-reverse; display: flex; flex-direction: row-reverse; }'
	var reactStyle = fromCSS(style)
	// TODO: This should actually be msFlex
	var testStyle = { 
		display: 'flex',
		WebkitFlexDirection: 'row-reverse',
		MsFlexDirection: 'row-reverse',
		flexDirection: 'row-reverse' 
	}
	console.log('testing : ' + style)
	assert.deepEqual( reactStyle, testStyle, 'parsing flex direction')

	// justify-content
	var style = '{ display: -webkit-flex; -webkit-justify-content: space-around; display: flex; justify-content: space-around; }'
	var reactStyle = fromCSS(style)
	// TODO: This should actually be msFlex? is FlexPack IE11 or IE10? is this just from autoprefixer?
	var testStyle = { 
		display: 'flex',
		WebkitJustifyContent: 'space-around',
		MsFlexPack: 'distribute',
  		justifyContent: 'space-around' 
	}
	console.log('testing : ' + style)
	assert.deepEqual( reactStyle, testStyle, 'parsing justify-content')

	// flex-wrap
	var style = '{ display: -webkit-flex; -webkit-flex-wrap: wrap; display: flex; flex-wrap: wrap; }'
	var reactStyle = fromCSS(style)
	// TODO: This should actually be msFlex
	var testStyle = { 
		display: 'flex',
		WebkitFlexWrap: 'wrap',
		MsFlexWrap: 'wrap',
  		flexWrap: 'wrap' 
	}
	console.log('testing : ' + style)
	assert.deepEqual( reactStyle, testStyle, 'parsing flex-wrap')

	// flex-flow
	var style = '{ display: -webkit-flex; -webkit-flex-flow: row-reverse wrap; display: flex; flex-flow: row-reverse wrap; }'
	var reactStyle = fromCSS(style)
	// TODO: This should actually be msFlex
	var testStyle = { 
		display: 'flex',
		WebkitFlexFlow: 'row-reverse wrap',
		MsFlexFlow: 'row-reverse wrap',
  		flexFlow: 'row-reverse wrap' 
	}
	console.log('testing : ' + style)
	assert.deepEqual( reactStyle, testStyle, 'parsing flex-flow')

}

module.exports = color