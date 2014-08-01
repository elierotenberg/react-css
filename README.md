react-css
=========
Converts plain CSS into (optionally auto-prefixed) React-style properties map.

Usage
=====
```js
/** @jsx React.DOM */
var React = require("react");
var fromCSS = require("react-css").fromCSS;

/* Pre-compute the CSS to avoid lengthy calculations at each render cycle */
var myComponentStyle = fromCSS("{ opacity: 0.5; }");

var MyComponent = React.createClass({
	render: function() {
		return (
			<div style={myComponentStyle}>
				/* ... */
			</div>
		);
	},
});
/* ... */
```