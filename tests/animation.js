var assert = require('assert');
var fromCSS = require('../fromCSS')

var color = function() {

	// animation
	var style = '{ animation: mymove 5s infinite; -webkit-animation: mymove 5s infinite; }'
	var reactStyle = fromCSS(style)
	var testStyle = { animation: 'mymove 5s infinite', WebkitAnimation: 'mymove 5s infinite' }
	console.log('testing : ' + style)
	assert.deepEqual( reactStyle, testStyle, 'parsing animation')

	// animation delay
	var style = '{ animation-delay: 2s; -webkit-animation-delay: 2s; }'
	var reactStyle = fromCSS(style)
	var testStyle = { animationDelay: '2s', WebkitAnimationDelay: '2s' }
	console.log('testing : ' + style)
	assert.deepEqual( reactStyle, testStyle, 'parsing animation-delay')

	// animation
	var style = '{ animation-direction: alternate; -webkit-animation-direction: alternate; }'
	var reactStyle = fromCSS(style)
	var testStyle = { animationDirection: 'alternate', WebkitAnimationDirection: 'alternate' }
	console.log('testing : ' + style)
	assert.deepEqual( reactStyle, testStyle, 'parsing animation-direction')

	// animation duration
	var style = '{ animation-duration: 2s; -webkit-animation-duration: 2s; }'
	var reactStyle = fromCSS(style)
	var testStyle = { animationDuration: '2s', WebkitAnimationDuration: '2s' }
	console.log('testing : ' + style)
	assert.deepEqual( reactStyle, testStyle, 'parsing animation-duration')

	// animation-fill-mode
	var style = '{ animation-fill-mode: forwards; -webkit-animation-fill-mode: forwards; }'
	var reactStyle = fromCSS(style)
	var testStyle = { animationFillMode: 'forwards', WebkitAnimationFillMode: 'forwards' }
	console.log('testing : ' + style)
	assert.deepEqual( reactStyle, testStyle, 'parsing animation-fill-mode')

	// animation name
	var style = '{ animation-name: mymove; -webkit-animation-name: mymove; }'
	var reactStyle = fromCSS(style)
	var testStyle = { animationName: 'mymove', WebkitAnimationName: 'mymove' }
	console.log('testing : ' + style)
	assert.deepEqual( reactStyle, testStyle, 'parsing animation-name')

	// animation-play-state
	var style = '{ animation-play-state: paused; -webkit-animation-play-state: paused; }'
	var reactStyle = fromCSS(style)
	var testStyle = { animationPlayState: 'paused', WebkitAnimationPlayState: 'paused' }
	console.log('testing : ' + style)
	assert.deepEqual( reactStyle, testStyle, 'parsing animation-play-state')

	// animation-timing-function
	var style = '{ animation-timing-function: linear; -webkit-animation-timing-function: linear; }'
	var reactStyle = fromCSS(style)
	var testStyle = { animationTimingFunction: 'linear', WebkitAnimationTimingFunction: 'linear' }
	console.log('testing : ' + style)
	assert.deepEqual( reactStyle, testStyle, 'parsing animation-timing-function')

}

module.exports = color