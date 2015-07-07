var background = function() {

	var assert = require('assert');
	var fromCSS = require('../fromCSS')

	// background
	var style = '{ background: #00ff00 url("image.gif") no-repeat fixed center; }'
	var reactStyle = fromCSS(style)
	var testStyle = { background: '#00ff00 url("image.gif") no-repeat fixed center' }
	console.log('testing : ' + style)
	assert.deepEqual( reactStyle, testStyle, 'parsing background');

	// background-image
	// background-size
	// background-repeat
	// background-attachment
	// background-position
	var style = '{ background-image: url("image.gif"); background-size: 80px 60px; background-repeat: no-repeat; background-attachment: fixed; background-position: center; }'
	var reactStyle = fromCSS(style)
	var testStyle = { 
		backgroundImage: 'url("image.gif")',
		backgroundSize: '80px 60px',
		backgroundRepeat: 'no-repeat', 
		backgroundAttachment: 'fixed',
		backgroundPosition: 'center' 
	}
	console.log('testing : ' + style)
	assert.deepEqual( reactStyle, testStyle, 'parsing background-image');

}

module.exports = background