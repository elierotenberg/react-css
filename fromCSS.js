var _ = require("lodash");
var assert = require("assert");
var parse = require("css-parse");
var toCamelCase = require("to-camel-case");
var autoprefixer = require("autoprefixer");

/**
 * Process a CSS rule (without a selector) into a React-style
 * camelCase properties map with proper vendor prefixing.
 * Autoprefixing can be optionally disabled.
 * @param {String} css Single CSS rule without selector.
 * @param {boolean} autoprefix If set to false, disable autoprefixing. Defaults to 'true'.
 * @return {Object.<String, String>}
 * @public
 */
var fromCSS = function fromCSS(css, autoprefix) {
	if(autoprefix === undefined) {
		autoprefix = true;
	}
	/* Prepend a dummy selector to allow proper parsing */
	css = "*" + css;
	if(autoprefix) {
		css = autoprefixer.process(css).css;
	}
	var rules = {};
	var parsed = parse(css);
	/* Assert only one rule was passed. */
	assert(_.size(parsed.stylesheet.rules) === 1);
	_.each(parsed.stylesheet.rules, function(rule) {
		if(rule.type === "rule") {
			_.each(rule.declarations, function(decl) {
				if(decl.type === "declaration") {
					rules[toCamelCase(decl.property)] = decl.value;
				}
			});			
		}
	});
	return rules;
};

module.exports = fromCSS;
