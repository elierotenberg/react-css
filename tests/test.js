var assert = require("assert");
var _ = require("lodash");
var fromCSS = require("../").fromCSS;
assert(_.isEqual({
	WebkitTransition: "-webkit-transform 1s",
	transition: "transform 1s",
}, fromCSS("{ transition: transform 1s; }")));
