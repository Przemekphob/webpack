webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _small = __webpack_require__(4);

var _small2 = _interopRequireDefault(_small);

__webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*import big from '../assets/big.jpg';*/
exports.default = function () {
	var image = document.createElement('img');
	image.src = _small2.default;

	document.body.appendChild(image);
};
/*
const bigimage = document.createElement('img');
bigimage.src = big;

document.body.appendChild(bigimage);*/

/***/ },
/* 1 */,
/* 2 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if (item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function (modules, mediaQuery) {
		if (typeof modules === "string") modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for (var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if (typeof id === "number") alreadyImportedModules[id] = true;
		}
		for (i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if (typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if (mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if (mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "img {\r\n\tborder: 10px solid black;\r\n}", ""]);

// exports


/***/ },
/* 4 */
/***/ function(module, exports) {

module.exports = "data:image/jpeg;base64,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"

/***/ }
]);