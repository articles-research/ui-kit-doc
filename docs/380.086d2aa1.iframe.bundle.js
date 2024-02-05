"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[380],{"./node_modules/lorem-ipsum/dist/constants/formats.js":(__unused_webpack_module,exports)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.FORMAT_PLAIN=exports.FORMAT_HTML=exports.FORMATS=void 0;var FORMAT_HTML="html";exports.FORMAT_HTML=FORMAT_HTML;var FORMAT_PLAIN="plain";exports.FORMAT_PLAIN=FORMAT_PLAIN;var FORMATS=[FORMAT_HTML,FORMAT_PLAIN];exports.FORMATS=FORMATS},"./node_modules/lorem-ipsum/dist/constants/lineEndings.js":(__unused_webpack_module,exports)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.LINE_ENDINGS=void 0,exports.LINE_ENDINGS={POSIX:"\n",WIN32:"\r\n"}},"./node_modules/lorem-ipsum/dist/constants/platforms.js":(__unused_webpack_module,exports)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.SUPPORTED_PLATFORMS=void 0,exports.SUPPORTED_PLATFORMS={DARWIN:"darwin",LINUX:"linux",WIN32:"win32"}},"./node_modules/lorem-ipsum/dist/constants/units.js":(__unused_webpack_module,exports)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.UNIT_WORDS=exports.UNIT_WORD=exports.UNIT_SENTENCES=exports.UNIT_SENTENCE=exports.UNIT_PARAGRAPHS=exports.UNIT_PARAGRAPH=exports.UNITS=void 0;var UNIT_WORDS="words";exports.UNIT_WORDS=UNIT_WORDS;var UNIT_WORD="word";exports.UNIT_WORD=UNIT_WORD;var UNIT_SENTENCES="sentences";exports.UNIT_SENTENCES=UNIT_SENTENCES;var UNIT_SENTENCE="sentence";exports.UNIT_SENTENCE=UNIT_SENTENCE;var UNIT_PARAGRAPHS="paragraphs";exports.UNIT_PARAGRAPHS=UNIT_PARAGRAPHS;var UNIT_PARAGRAPH="paragraph";exports.UNIT_PARAGRAPH=UNIT_PARAGRAPH;var UNITS=[UNIT_WORDS,UNIT_WORD,UNIT_SENTENCES,UNIT_SENTENCE,UNIT_PARAGRAPHS,UNIT_PARAGRAPH];exports.UNITS=UNITS},"./node_modules/lorem-ipsum/dist/constants/words.js":(__unused_webpack_module,exports)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.WORDS=void 0,exports.WORDS=["ad","adipisicing","aliqua","aliquip","amet","anim","aute","cillum","commodo","consectetur","consequat","culpa","cupidatat","deserunt","do","dolor","dolore","duis","ea","eiusmod","elit","enim","esse","est","et","eu","ex","excepteur","exercitation","fugiat","id","in","incididunt","ipsum","irure","labore","laboris","laborum","Lorem","magna","minim","mollit","nisi","non","nostrud","nulla","occaecat","officia","pariatur","proident","qui","quis","reprehenderit","sint","sit","sunt","tempor","ullamco","ut","velit","veniam","voluptate"]},"./node_modules/lorem-ipsum/dist/index.js":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"Ap",{enumerable:!0,get:function get(){return _LoremIpsum.default}}),__webpack_require__("./node_modules/lorem-ipsum/dist/constants/formats.js"),__webpack_require__("./node_modules/lorem-ipsum/dist/constants/units.js"),__webpack_require__("./node_modules/lorem-ipsum/dist/constants/words.js");var _LoremIpsum=_interopRequireDefault(__webpack_require__("./node_modules/lorem-ipsum/dist/lib/LoremIpsum.js"));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}},"./node_modules/lorem-ipsum/dist/lib/LoremIpsum.js":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _formats=__webpack_require__("./node_modules/lorem-ipsum/dist/constants/formats.js"),_lineEndings=__webpack_require__("./node_modules/lorem-ipsum/dist/constants/lineEndings.js"),_generator=_interopRequireDefault(__webpack_require__("./node_modules/lorem-ipsum/dist/lib/generator.js")),_util=__webpack_require__("./node_modules/lorem-ipsum/dist/util/index.js");function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw TypeError("Cannot call a class as a function")}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Object.defineProperty(Constructor,"prototype",{writable:!1}),Constructor}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}var LoremIpsum=function(){function LoremIpsum(){var options=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},format=arguments.length>1&&void 0!==arguments[1]?arguments[1]:_formats.FORMAT_PLAIN,suffix=arguments.length>2?arguments[2]:void 0;if(_classCallCheck(this,LoremIpsum),this.format=format,this.suffix=suffix,_defineProperty(this,"generator",void 0),-1===_formats.FORMATS.indexOf(format.toLowerCase()))throw Error("".concat(format," is an invalid format. Please use ").concat(_formats.FORMATS.join(" or "),"."));this.generator=new _generator.default(options)}return _createClass(LoremIpsum,[{key:"getLineEnding",value:function getLineEnding(){return this.suffix?this.suffix:!(0,_util.isReactNative)()&&(0,_util.isNode)()&&(0,_util.isWindows)()?_lineEndings.LINE_ENDINGS.WIN32:_lineEndings.LINE_ENDINGS.POSIX}},{key:"formatString",value:function formatString(str){return this.format===_formats.FORMAT_HTML?"<p>".concat(str,"</p>"):str}},{key:"formatStrings",value:function formatStrings(strings){var _this=this;return strings.map(function(str){return _this.formatString(str)})}},{key:"generateWords",value:function generateWords(num){return this.formatString(this.generator.generateRandomWords(num))}},{key:"generateSentences",value:function generateSentences(num){return this.formatString(this.generator.generateRandomParagraph(num))}},{key:"generateParagraphs",value:function generateParagraphs(num){var makeString=this.generator.generateRandomParagraph.bind(this.generator);return this.formatStrings((0,_util.makeArrayOfStrings)(num,makeString)).join(this.getLineEnding())}}]),LoremIpsum}();exports.default=LoremIpsum},"./node_modules/lorem-ipsum/dist/lib/generator.js":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _words=__webpack_require__("./node_modules/lorem-ipsum/dist/constants/words.js"),_util=__webpack_require__("./node_modules/lorem-ipsum/dist/util/index.js");function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw TypeError("Cannot call a class as a function")}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Object.defineProperty(Constructor,"prototype",{writable:!1}),Constructor}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}var Generator=function(){function Generator(){var _ref=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},_ref$sentencesPerPara=_ref.sentencesPerParagraph,sentencesPerParagraph=void 0===_ref$sentencesPerPara?{max:7,min:3}:_ref$sentencesPerPara,_ref$wordsPerSentence=_ref.wordsPerSentence,wordsPerSentence=void 0===_ref$wordsPerSentence?{max:15,min:5}:_ref$wordsPerSentence,random=_ref.random,_ref$words=(_ref.seed,_ref.words),words=void 0===_ref$words?_words.WORDS:_ref$words;if(_classCallCheck(this,Generator),_defineProperty(this,"sentencesPerParagraph",void 0),_defineProperty(this,"wordsPerSentence",void 0),_defineProperty(this,"random",void 0),_defineProperty(this,"words",void 0),sentencesPerParagraph.min>sentencesPerParagraph.max)throw Error("Minimum number of sentences per paragraph (".concat(sentencesPerParagraph.min,") cannot exceed maximum (").concat(sentencesPerParagraph.max,")."));if(wordsPerSentence.min>wordsPerSentence.max)throw Error("Minimum number of words per sentence (".concat(wordsPerSentence.min,") cannot exceed maximum (").concat(wordsPerSentence.max,")."));this.sentencesPerParagraph=sentencesPerParagraph,this.words=words,this.wordsPerSentence=wordsPerSentence,this.random=random||Math.random}return _createClass(Generator,[{key:"generateRandomInteger",value:function generateRandomInteger(min,max){return Math.floor(this.random()*(max-min+1)+min)}},{key:"generateRandomWords",value:function generateRandomWords(num){var _this=this,_this$wordsPerSentenc=this.wordsPerSentence,min=_this$wordsPerSentenc.min,max=_this$wordsPerSentenc.max,length=num||this.generateRandomInteger(min,max);return(0,_util.makeArrayOfLength)(length).reduce(function(accumulator,index){return"".concat(_this.pluckRandomWord()," ").concat(accumulator)},"").trim()}},{key:"generateRandomSentence",value:function generateRandomSentence(num){return"".concat((0,_util.capitalize)(this.generateRandomWords(num)),".")}},{key:"generateRandomParagraph",value:function generateRandomParagraph(num){var _this2=this,_this$sentencesPerPar=this.sentencesPerParagraph,min=_this$sentencesPerPar.min,max=_this$sentencesPerPar.max,length=num||this.generateRandomInteger(min,max);return(0,_util.makeArrayOfLength)(length).reduce(function(accumulator,index){return"".concat(_this2.generateRandomSentence()," ").concat(accumulator)},"").trim()}},{key:"pluckRandomWord",value:function pluckRandomWord(){var max=this.words.length-1,index=this.generateRandomInteger(0,max);return this.words[index]}}]),Generator}();exports.default=Generator},"./node_modules/lorem-ipsum/dist/util/capitalize.js":(__unused_webpack_module,exports)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0,exports.default=function(str){var trimmed=str.trim();return trimmed.charAt(0).toUpperCase()+trimmed.slice(1)}},"./node_modules/lorem-ipsum/dist/util/index.js":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"capitalize",{enumerable:!0,get:function get(){return _capitalize.default}}),Object.defineProperty(exports,"isNode",{enumerable:!0,get:function get(){return _isNode.default}}),Object.defineProperty(exports,"isReactNative",{enumerable:!0,get:function get(){return _isReactNative.default}}),Object.defineProperty(exports,"isWindows",{enumerable:!0,get:function get(){return _isWindows.default}}),Object.defineProperty(exports,"makeArrayOfLength",{enumerable:!0,get:function get(){return _makeArrayOfLength.default}}),Object.defineProperty(exports,"makeArrayOfStrings",{enumerable:!0,get:function get(){return _makeArrayOfStrings.default}});var _capitalize=_interopRequireDefault(__webpack_require__("./node_modules/lorem-ipsum/dist/util/capitalize.js")),_isNode=_interopRequireDefault(__webpack_require__("./node_modules/lorem-ipsum/dist/util/isNode.js")),_isReactNative=_interopRequireDefault(__webpack_require__("./node_modules/lorem-ipsum/dist/util/isReactNative.js")),_isWindows=_interopRequireDefault(__webpack_require__("./node_modules/lorem-ipsum/dist/util/isWindows.js")),_makeArrayOfLength=_interopRequireDefault(__webpack_require__("./node_modules/lorem-ipsum/dist/util/makeArrayOfLength.js")),_makeArrayOfStrings=_interopRequireDefault(__webpack_require__("./node_modules/lorem-ipsum/dist/util/makeArrayOfStrings.js"));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}},"./node_modules/lorem-ipsum/dist/util/isNode.js":(module,exports)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0,exports.default=function(){return!!module.exports}},"./node_modules/lorem-ipsum/dist/util/isReactNative.js":(__unused_webpack_module,exports)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0,exports.default=function(){var isReactNativeResult=!1;try{isReactNativeResult="ReactNative"===navigator.product}catch(e){isReactNativeResult=!1}return isReactNativeResult}},"./node_modules/lorem-ipsum/dist/util/isWindows.js":(__unused_webpack_module,exports,__webpack_require__)=>{var process=__webpack_require__("./node_modules/process/browser.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _platforms=__webpack_require__("./node_modules/lorem-ipsum/dist/constants/platforms.js");exports.default=function(){var isWindowsResult=!1;try{isWindowsResult=process.platform===_platforms.SUPPORTED_PLATFORMS.WIN32}catch(e){isWindowsResult=!1}return isWindowsResult}},"./node_modules/lorem-ipsum/dist/util/makeArrayOfLength.js":(__unused_webpack_module,exports)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0,exports.default=function(){var length=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return Array.apply(null,Array(length)).map(function(item,index){return index})}},"./node_modules/lorem-ipsum/dist/util/makeArrayOfStrings.js":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _makeArrayOfLength=_interopRequireDefault(__webpack_require__("./node_modules/lorem-ipsum/dist/util/makeArrayOfLength.js"));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}exports.default=function(length,makeString){return(0,_makeArrayOfLength.default)(length).map(function(){return makeString()})}}}]);