var assert = require('assert');
var fromCSS = require('../fromCSS')

var color = function() {

	// backface-visibility
	var style = '{ backface-visibility: hidden; -webkit-backface-visibility: hidden; }'
	var reactStyle = fromCSS(style)
	var testStyle = { backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }
	console.log('testing : ' + style)
	assert.deepEqual( reactStyle, testStyle, 'parsing backface-visibility')

	// perspective
	var style = '{ perspective: 500px; -webkit-perspective: 500px; perspective-origin: 10% 10%; -webkit-perspective-origin: 10% 10%; }'
	var reactStyle = fromCSS(style)
	var testStyle = { 
		perspective: '500px', 
		WebkitPerspective: '500px',
		perspectiveOrigin: '10% 10%', 
		WebkitPerspectiveOrigin: '10% 10%',
	}
	console.log('testing : ' + style)
	assert.deepEqual( reactStyle, testStyle, 'parsing perspective')

	// transform
	var style = '{ transform: rotate(7deg); -webkit-transform: rotate(7deg); -ms-transform: rotate(7deg); }'
	var reactStyle = fromCSS(style)
	// TODO: This should actually be msTransform
	var testStyle = { 
		transform: 'rotate(7deg)',
		WebkitTransform: 'rotate(7deg)',
		MsTransform: 'rotate(7deg)' 
	}
	console.log('testing : ' + style)
	assert.deepEqual( reactStyle, testStyle, 'parsing transform')

	// transform origin
	var style = '{ transform: rotate(45deg); transform-origin: 20% 40%; -webkit-transform: rotate(45deg); -webkit-transform-origin: 20% 40%; }'
	var reactStyle = fromCSS(style)
	// TODO: This should actually be msTransform
	var testStyle = { 
		WebkitTransform: 'rotate(45deg)',
		MsTransform: 'rotate(45deg)',
		transform: 'rotate(45deg)',
		WebkitTransformOrigin: '20% 40%',
		MsTransformOrigin: '20% 40%',
		transformOrigin: '20% 40%' 
	}
	console.log('testing : ' + style)
	assert.deepEqual( reactStyle, testStyle, 'parsing transform-origin')

	// transform-style
	var style = '{ transform: rotateY(60deg); -webkit-transform: rotateY(60deg); transform-style: preserve-3d; -webkit-transform-style: preserve-3d;}'
	var reactStyle = fromCSS(style)
	var testStyle = { 
		transform: 'rotateY(60deg)',
		WebkitTransform: 'rotateY(60deg)',
		transformStyle: 'preserve-3d',
		WebkitTransformStyle: 'preserve-3d' 
	}
	console.log('testing : ' + style)
	console.log(reactStyle)
	assert.deepEqual( reactStyle, testStyle, 'parsing transform-style')

}

module.exports = color