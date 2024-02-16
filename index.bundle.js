/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `:root {\n  --main-font: \"Roboto\", \"Helvetica\", \"sans-serif\";\n\n  --side-padding: 2rem;\n\n  --bg-color: #d4f1f4;\n  --header-color: #0d97ff;\n  --btn-color: #231709;\n}\n\nbody {\n  height: 100vh;\n  display: grid;\n  grid-template-rows: 150px 1fr 50px;\n  grid-template-columns: 1fr;\n  margin: 0;\n  padding: 0;\n  background-color: var(--bg-color);\n  color: white;\n  font-family: var(--main-font);\n}\n\n.container {\n  display: grid;\n  align-items: center;\n  justify-items: center;\n}\n\nbody > div {\n  padding: 12px var(--side-padding);\n}\n\n.header,\n.footer {\n  background-color: var(--header-color);\n  color: white;\n}\n\n.header {\n  grid-template-columns: 2fr 1fr;\n\n  justify-items: stretch;\n  text-align: center;\n  gap: 12px;\n}\n\n.btn-container {\n  grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));\n  gap: 12px;\n}\n\nbutton {\n  max-width: 200px;\n  padding: 8px 18px;\n  border-radius: 16px;\n  border: 2px solid gray;\n  background-color: var(--btn-color);\n  font-weight: 800;\n  color: white;\n}\n\n.main {\n  color: var(--btn-color);\n  grid-row: 2;\n\n  grid-template-rows: 30px 1fr;\n  gap: 16px;\n  justify-items: stretch;\n  align-items: start;\n}\n\n.table-header {\n  grid-row: 1 / 2;\n}\n\n.table-header,\n.book-container {\n  grid-template-columns: minmax(20px, 1fr) 2fr 2fr repeat(2, minmax(20px, 1fr)) 90px 90px;\n  column-gap: 8px;\n}\n\n.book-container {\n  background-color: white;\n  border-left: 4px solid orange;\n}\n\nform {\n  grid-row: 1 / -1;\n  align-self: stretch;\n  grid-template-rows: 3fr 1fr;\n  padding: 1rem;\n}\n\nfieldset {\n  grid-column: 1 / 2;\n  align-self: stretch;\n\n  grid-template-rows: repeat(5, 1fr);\n  grid-template-columns: 1fr 1fr;\n}\n\n.options {\n  grid-template-columns: repeat(2, 1fr);\n  column-gap: 12px;\n}\n\n.radio {\n  grid-template-columns: 1fr 3fr;\n  justify-items: start;\n  gap: 8px;\n}\n\n.main .btn-container {\n  width: min(250px, 80%);\n}\n\n.footer {\n  grid-row: 3;\n}\n\na {\n  text-decoration: none;\n  color: white;\n  font-weight: bold;\n}\n\na:hover {\n  color: brown;\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://Book_library/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://Book_library/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://Book_library/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://Book_library/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://Book_library/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://Book_library/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://Book_library/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://Book_library/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://Book_library/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://Book_library/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\n\nconst myLibrary = [];\n\nclass Book {\n  constructor(title, author, pages, read) {\n    this.title = title;\n    this.author = author;\n    this.pages = pages;\n    this.read = read;\n  }\n}\n\nconst fillBookInfo = () => {\n  removeTable();\n  displayForm();\n};\n\nconst removeTable = () => {\n  const tHead = document.querySelector(\".table-header\");\n  const books = document.querySelectorAll(\".book-container\");\n  tHead.remove();\n  Array.from(books).forEach((book) => book.remove());\n};\n\nconst displayForm = () => {\n  const container = document.querySelector(\".main\");\n  const form = document.createElement(\"form\");\n  const fieldset = document.createElement(\"fieldset\");\n  const legend = document.createElement(\"legend\");\n  const btnContainer = document.createElement(\"div\");\n  const fields = [\"Title\", \"Author\", \"Pages\", \"Read\"];\n  const btns = [\"Add\", \"Clear\"];\n\n  form.classList.add(\"container\");\n  form.setAttribute(\"id\", \"form\");\n  form.noValidate = true;\n  fieldset.classList.add(\"container\");\n  btnContainer.classList.add(\"btn-container\", \"container\");\n\n  legend.textContent = \"Book information\";\n  fieldset.appendChild(legend);\n\n  fields.forEach((field) => {\n    let id = field.toLowerCase();\n    switch (field) {\n      case \"Title\":\n      case \"Author\":\n      case \"Pages\":\n        const label = document.createElement(\"label\");\n        label.setAttribute(\"for\", id);\n        label.textContent = field;\n        const input = document.createElement(\"input\");\n        input.setAttribute(\"id\", id);\n        input.setAttribute(\"name\", id);\n\n        if (field === \"Pages\") input.setAttribute(\"type\", \"number\");\n        fieldset.appendChild(label);\n        fieldset.appendChild(input);\n        break;\n      default:\n        const optContainer = document.createElement(\"div\");\n        optContainer.classList.add(\"options\", \"container\");\n        const optLabel = document.createElement(\"label\");\n        optLabel.setAttribute(\"id\", \"read-label\");\n        optLabel.textContent = \"Have you read the book?\";\n\n        [\"Yes\", \"No\"].forEach((option) => {\n          const optRadioBtn = document.createElement(\"input\");\n          optRadioBtn.setAttribute(\"type\", \"radio\");\n          optRadioBtn.setAttribute(\"id\", option.toLowerCase());\n          optRadioBtn.setAttribute(\"name\", id);\n          optRadioBtn.setAttribute(\"value\", option === \"Yes\" ? true : false);\n          if (option == \"No\") optRadioBtn.checked = true;\n\n          const label = document.createElement(\"label\");\n          label.setAttribute(\"for\", option.toLowerCase());\n          label.textContent = option;\n\n          const radioContainer = document.createElement(\"div\");\n          radioContainer.classList.add(\"radio\", \"container\");\n\n          radioContainer.appendChild(optRadioBtn);\n          radioContainer.appendChild(label);\n          optContainer.appendChild(radioContainer);\n        });\n\n        fieldset.appendChild(optLabel);\n        fieldset.appendChild(optContainer);\n        break;\n    }\n  });\n\n  btns.forEach((btnTitle) => {\n    const btn = document.createElement(\"button\");\n    btn.setAttribute(\"id\", `${btnTitle.toLowerCase()}-btn`);\n    btn.textContent = btnTitle;\n    btn.setAttribute(\"type\", btnTitle === \"Add\" ? \"Submit\" : \"Reset\");\n    btnContainer.appendChild(btn);\n  });\n\n  form.appendChild(fieldset);\n  form.appendChild(btnContainer);\n  container.appendChild(form);\n  form.addEventListener(\"submit\", validateForm);\n};\n\nconst validateForm = (e) => {\n  e.preventDefault();\n  let validInput = true;\n  const inputs = document.querySelectorAll(\"input\");\n  const inputValues = [];\n\n  Array.from(inputs).forEach((input) => {\n    switch (input.type) {\n      case \"radio\":\n        if (input.checked) inputValues.push(input.id);\n        break;\n      default:\n        if (!input.value) validInput = false;\n        else inputValues.push(input.value);\n        break;\n    }\n  });\n\n  if (validInput) {\n    let read = inputValues[3] === \"yes\" ? true : false;\n    addBookToLibrary(\n      inputValues[0],\n      inputValues[1],\n      Number(inputValues[2]),\n      read,\n    );\n    document.querySelector(\"#form\").remove();\n    displayLibrary();\n  } else console.log(\"Error\");\n};\n\nconst addBookToLibrary = (bookTitle, bookAuthor, bookPages, bookRead) => {\n  const newBook = new Book(bookTitle, bookAuthor, bookPages, bookRead);\n  myLibrary.push(newBook);\n};\n\nconst displayLibrary = () => {\n  const mainContainer = document.querySelector(\".main\");\n  const tableHeader = document.createElement(\"div\");\n  const tableHeaders = [\"Index\", \"Title\", \"Author\", \"Pages\", \"Read\"];\n  const bookContainer = document.createElement(\"div\");\n\n  tableHeader.classList.add(\"table-header\", \"container\");\n  tableHeaders.forEach((elt) => {\n    const e = document.createElement(\"h3\");\n    e.textContent = elt;\n    tableHeader.appendChild(e);\n  });\n  mainContainer.appendChild(tableHeader);\n\n  bookContainer.classList.add(\"book-container\", \"container\");\n  let counter = 1;\n\n  myLibrary.forEach((book) => {\n    // Display the books on the page\n    const fields = [\"index\", \"title\", \"author\", \"pages\", \"read\"];\n    const removeBtn = document.createElement(\"button\");\n    const toggleRead = document.createElement(\"button\");\n\n    fields.forEach((field) => {\n      const f = document.createElement(\"p\");\n      f.classList.add(`book-${field}`);\n\n      switch (field) {\n        case \"title\":\n          f.textContent = book.title;\n          break;\n        case \"author\":\n          f.textContent = book.author;\n          break;\n        case \"pages\":\n          f.textContent = book.pages;\n          break;\n        case \"read\":\n          f.textContent = book.read ? \"Yes\" : \"No\";\n          break;\n        default:\n          f.textContent = counter;\n          counter += 1;\n          break;\n      }\n      bookContainer.appendChild(f);\n    });\n    removeBtn.classList.add(\"remove-btn\");\n    removeBtn.setAttribute(\"id\", counter - 1);\n    removeBtn.textContent = \"Remove\";\n    removeBtn.addEventListener(\"click\", removeBook);\n\n    toggleRead.classList.add(\"toggle-read-btn\");\n    toggleRead.setAttribute(\"id\", counter - 1);\n    toggleRead.textContent = \"Read?\";\n    toggleRead.addEventListener(\"click\", toggleReadStatus);\n\n    bookContainer.appendChild(removeBtn);\n    bookContainer.appendChild(toggleRead);\n    mainContainer.appendChild(bookContainer);\n  });\n};\n\nconst removeBook = (e) => {\n  let index = Number(e.currentTarget.id) - 1;\n  myLibrary.splice(index, 1);\n  removeTable();\n  displayLibrary();\n};\n\nconst toggleReadStatus = (e) => {\n  let index = e.currentTarget.id - 1;\n  myLibrary[index].read = myLibrary[index].read ? false : true;\n  removeTable();\n  displayLibrary();\n};\n\nconst createInterface = () => {\n  // Create a library interface for displaying books\n  const header = document.createElement(\"div\");\n  const footer = document.createElement(\"div\");\n  const link = document.createElement(\"a\");\n  const main = document.createElement(\"div\");\n  const tableHeader = document.createElement(\"div\");\n  const title = document.createElement(\"h1\");\n  const btn = document.createElement(\"button\");\n\n  header.classList.add(\"header\", \"container\");\n  footer.classList.add(\"footer\", \"container\");\n  main.classList.add(\"main\", \"container\");\n  title.classList.add(\"title\");\n\n  title.textContent = \"Book Library\";\n  header.appendChild(title);\n\n  btn.textContent = \"NEW BOOK\";\n  btn.setAttribute(\"id\", \"new-book\");\n  btn.addEventListener(\"click\", fillBookInfo);\n\n  header.appendChild(btn);\n  link.textContent = \"Copyright \\u00A9 Neil Taison Rigaud 2024\";\n  link.setAttribute(\"href\", \"https://blackbird410.github.io/\");\n  link.setAttribute(\"target\", \"_blank\");\n  footer.appendChild(link);\n\n  document.body.appendChild(header);\n  document.body.appendChild(main);\n  document.body.appendChild(footer);\n};\n\naddBookToLibrary(\"Atomic Habits\", \"James Clear\", 271, false);\naddBookToLibrary(\n  \"The Social Contract and Discourses\",\n  \"Jean-Jacques Rousseau\",\n  362,\n  false,\n);\naddBookToLibrary(\n  \"The Meditations of Marcus Aurelius\",\n  \"Marcus Aurelius\",\n  128,\n  true,\n);\ncreateInterface();\ndisplayLibrary();\n\n\n//# sourceURL=webpack://Book_library/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;