var assert = require('assert');
var fromCSS = require('../fromCSS')

var transition = function() {

	// transition
	var style = '{ transition: width 2s, height 4s; -webkit-transition: width 2s, height 4s; }'
	var reactStyle = fromCSS(style)
	var testStyle = { 
		transition: 'width 2s, height 4s',
  		WebkitTransition: 'width 2s, height 4s' 
  	}
	console.log('testing : ' + style)
	assert.deepEqual( reactStyle, testStyle, 'transition parsed correctly' )

	// transition-property
	var style = '{ transition-property: width; -webkit-transition-property: width; }'
	var reactStyle = fromCSS(style)
	var testStyle = { 
		transitionProperty: 'width',
  		WebkitTransitionProperty: 'width' 
  	}
	console.log('testing : ' + style)
	assert.deepEqual( reactStyle, testStyle, 'transition-property parsed correctly' )

	// transition-duration
	var style = '{ transition-property: width; -webkit-transition-property: width; }'
	var reactStyle = fromCSS(style)
	var testStyle = { 
		transitionProperty: 'width',
  		WebkitTransitionProperty: 'width' 
  	}
	console.log('testing : ' + style)
	assert.deepEqual( reactStyle, testStyle, 'transition-property parsed correctly' )

	// transition-delay
	var style = '{ transition-delay: 2s; -webkit-transition-delay: 2s; }'
	var reactStyle = fromCSS(style)
	var testStyle = { 
		transitionDelay: '2s',
  		WebkitTransitionDelay: '2s' 
  	}
	console.log('testing : ' + style)
	assert.deepEqual( reactStyle, testStyle, 'transition-delay parsed correctly' )

	// transition-timing-function
	var style = '{ transition-timing-function: linear; -webkit-transition-timing-function: linear; }'
	var reactStyle = fromCSS(style)
	var testStyle = { 
		transitionTimingFunction: 'linear',
  		WebkitTransitionTimingFunction: 'linear' 
  	}
	console.log('testing : ' + style)
	assert.deepEqual( reactStyle, testStyle, 'transition-timing-function parsed correctly' )


}

module.exports = transition