"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[978],{"./src/Overlays/WorkOverlay.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Opened:()=>Opened,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _Opened$parameters,_Opened$parameters2,_Opened$parameters2$d,_ArticleOverlay__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/Overlays/ArticleOverlay.js"),_services_api_works__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/services/api/works/index.ts");let __WEBPACK_DEFAULT_EXPORT__={title:"Overlays/Work",component:_ArticleOverlay__WEBPACK_IMPORTED_MODULE_0__.Z},Opened={args:{open:"1"},parameters:{msw:{handlers:[_services_api_works__WEBPACK_IMPORTED_MODULE_1__.j]}}};Opened.parameters={...Opened.parameters,docs:{...null===(_Opened$parameters=Opened.parameters)||void 0===_Opened$parameters?void 0:_Opened$parameters.docs,source:{originalSource:"{\n  args: {\n    open: '1'\n  },\n  parameters: {\n    msw: {\n      handlers: [getWorkById]\n    }\n  }\n}",...null===(_Opened$parameters2=Opened.parameters)||void 0===_Opened$parameters2?void 0:null===(_Opened$parameters2$d=_Opened$parameters2.docs)||void 0===_Opened$parameters2$d?void 0:_Opened$parameters2$d.source}}};let __namedExportsOrder=["Opened"]},"./src/domain/Author/Author.mocks.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Ay:()=>authorsListMockFactory,S7:()=>AUTHOR,TY:()=>authorMockFactory,Tt:()=>authorMockLinkedin,aP:()=>authorMockEmails,ni:()=>AUTHOR_ID});var _lorem__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/lorem.tsx"),_mock_utils__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/domain/mock.utils.ts");let AUTHOR_ID="A5051388705";function getRandomAuthorId(){return"A".concat((0,_mock_utils__WEBPACK_IMPORTED_MODULE_1__.xT)(1e9,9999999999))}let AUTHOR={id:AUTHOR_ID,display_name:_lorem__WEBPACK_IMPORTED_MODULE_0__.Z.generateWords(2),works_count:20,cited_by_count:5,hindex:10,linkedin_url:(0,_mock_utils__WEBPACK_IMPORTED_MODULE_1__.gm)("https://www.linkedin.com/in/${random}"),linkedin_url_updated_date:"Linkedin URL Updated Date",institution_name:"Institution Name",emails:[{email:"Email 1",institution:"Institution Name",publication_date:"Publication Date"}]},authorMockFactory=function(){let id=arguments.length>0&&void 0!==arguments[0]?arguments[0]:getRandomAuthorId();return{id,display_name:_lorem__WEBPACK_IMPORTED_MODULE_0__.Z.generateWords((0,_mock_utils__WEBPACK_IMPORTED_MODULE_1__.xT)(2,3)),works_count:(0,_mock_utils__WEBPACK_IMPORTED_MODULE_1__.xT)(10,150),cited_by_count:(0,_mock_utils__WEBPACK_IMPORTED_MODULE_1__.xT)(0,100),hindex:(0,_mock_utils__WEBPACK_IMPORTED_MODULE_1__.xT)(0,100),linkedin_url:(0,_mock_utils__WEBPACK_IMPORTED_MODULE_1__.xT)(0,1)?(0,_mock_utils__WEBPACK_IMPORTED_MODULE_1__.gm)("https://www.linkedin.com/in/${random}"):null,institution_name:_lorem__WEBPACK_IMPORTED_MODULE_0__.Z.generateWords((0,_mock_utils__WEBPACK_IMPORTED_MODULE_1__.xT)(4,8)),emails:(0,_mock_utils__WEBPACK_IMPORTED_MODULE_1__.hp)((0,_mock_utils__WEBPACK_IMPORTED_MODULE_1__.xT)(0,2),()=>({email:(0,_mock_utils__WEBPACK_IMPORTED_MODULE_1__._o)(),institution:_lorem__WEBPACK_IMPORTED_MODULE_0__.Z.generateWords((0,_mock_utils__WEBPACK_IMPORTED_MODULE_1__.xT)(4,8)),publication_date:(0,_mock_utils__WEBPACK_IMPORTED_MODULE_1__.yN)(new Date(2012,0,1),new Date)}))}},authorMockEmails=()=>(0,_mock_utils__WEBPACK_IMPORTED_MODULE_1__.hp)((0,_mock_utils__WEBPACK_IMPORTED_MODULE_1__.xT)(3,10),()=>({email:(0,_mock_utils__WEBPACK_IMPORTED_MODULE_1__._o)(),institution:_lorem__WEBPACK_IMPORTED_MODULE_0__.Z.generateWords((0,_mock_utils__WEBPACK_IMPORTED_MODULE_1__.xT)(4,8)),publication_date:(0,_mock_utils__WEBPACK_IMPORTED_MODULE_1__.yN)(new Date(2012,0,1),new Date)})),authorMockLinkedin=()=>({linkedin_url:(0,_mock_utils__WEBPACK_IMPORTED_MODULE_1__.gm)("https://www.linkedin.com/in/${random}"),linkedid_url_updated_date:new Date().toLocaleDateString()}),authorsListMockFactory=size=>{let authors=[];for(let i=0;i<size;i++)authors.push(authorMockFactory());return authors}},"./src/domain/Work/Work.mocks.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{V1:()=>WORK,oQ:()=>WORK_LIST,vo:()=>worksListMockFactory});var uuid__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/uuid/dist/esm-browser/v4.js"),_lorem__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/lorem.tsx"),_mock_utils__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/domain/mock.utils.ts"),_Author_Author_mocks__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/domain/Author/Author.mocks.ts");let WORK={id:"1",title:"Work 1 Title",publication_date:"24/12/2023",cited_by_count:100,abstract:"Work 1 Abstract",fos_list:["Field of Study 1","Field of Study 2"],authors_list:["Author 1","Author 2","Author 3"]},WORK_LIST=[WORK],worksListMockFactory=size=>{let works=[];for(let i=0;i<size;i++)works.push({id:(0,uuid__WEBPACK_IMPORTED_MODULE_3__.Z)(),title:_lorem__WEBPACK_IMPORTED_MODULE_0__.Z.generateSentences(1),publication_date:(0,_mock_utils__WEBPACK_IMPORTED_MODULE_1__.yN)(new Date(2012,0,1),new Date),cited_by_count:(0,_mock_utils__WEBPACK_IMPORTED_MODULE_1__.xT)(0,100),abstract:_lorem__WEBPACK_IMPORTED_MODULE_0__.Z.generateSentences(10),fos_list:(0,_mock_utils__WEBPACK_IMPORTED_MODULE_1__.pB)({minSize:0,maxSize:4,minWords:1,maxWords:2}),authors_list:(0,_mock_utils__WEBPACK_IMPORTED_MODULE_1__.pB)({minSize:2,maxSize:10,minWords:2,maxWords:3}),authors:(0,_Author_Author_mocks__WEBPACK_IMPORTED_MODULE_2__.Ay)((0,_mock_utils__WEBPACK_IMPORTED_MODULE_1__.xT)(3,5))});return works}},"./src/domain/mock.utils.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{_o:()=>getRandomEmail,gm:()=>getRandomUrl,hp:()=>getRandomObjectArray,pB:()=>getRandomStringArray,xT:()=>getRandomNumber,yN:()=>getRandomDate});var _lorem__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/lorem.tsx");function getRandomNumber(minValue,maxValue){return Math.floor(Math.random()*(maxValue-minValue+1)+minValue)}function getRandomStringArray(_ref){let{minSize,maxSize,minWords,maxWords}=_ref,array=[],size=getRandomNumber(minSize,maxSize),wordsCount=getRandomNumber(minWords,maxWords);for(let i=0;i<size;i++)array.push(_lorem__WEBPACK_IMPORTED_MODULE_0__.Z.generateWords(wordsCount));return array}function getRandomObjectArray(size,generatorCb){let array=[];for(let i=0;i<size;i++)array.push(generatorCb());return array}function getRandomDate(start,end){return new Date(start.getTime()+Math.random()*(end.getTime()-start.getTime())).toLocaleDateString()}function getRandomUrl(template){let randomPath=_lorem__WEBPACK_IMPORTED_MODULE_0__.Z.generateWords(1);return template?Function("with(this) { return ".concat("`"+template+"`","; }")).call({random:randomPath}):"http://www.".concat(_lorem__WEBPACK_IMPORTED_MODULE_0__.Z.generateWords(1),".com")}function getRandomEmail(){return"".concat(_lorem__WEBPACK_IMPORTED_MODULE_0__.Z.generateWords(1),"@").concat(_lorem__WEBPACK_IMPORTED_MODULE_0__.Z.generateWords(1),".org")}},"./src/lorem.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});let __WEBPACK_DEFAULT_EXPORT__=new(__webpack_require__("./node_modules/lorem-ipsum/dist/index.js")).Ap({sentencesPerParagraph:{max:8,min:4},wordsPerSentence:{max:16,min:4}})},"./src/services/api/mock.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{j:()=>MOCK_SERVER});let MOCK_SERVER="http://188.124.55.238:8000"},"./src/services/api/works/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{j:()=>getWorkById});var msw__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/msw/lib/index.js"),_mock__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/services/api/mock.ts"),_domain_Work_Work_mocks__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/domain/Work/Work.mocks.ts");let getWorkById=msw__WEBPACK_IMPORTED_MODULE_1__.rest.get("".concat(_mock__WEBPACK_IMPORTED_MODULE_2__.j,"/api/v1/works/1"),(_req,res,ctx)=>res(ctx.json(_domain_Work_Work_mocks__WEBPACK_IMPORTED_MODULE_0__.V1)))},"./node_modules/uuid/dist/esm-browser/v4.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>esm_browser_v4});var getRandomValues,rnds8=new Uint8Array(16);function rng(){if(!getRandomValues&&!(getRandomValues="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return getRandomValues(rnds8)}let regex=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;for(var byteToHex=[],i=0;i<256;++i)byteToHex.push((i+256).toString(16).substr(1));let esm_browser_stringify=function(arr){var offset=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,uuid=(byteToHex[arr[offset+0]]+byteToHex[arr[offset+1]]+byteToHex[arr[offset+2]]+byteToHex[arr[offset+3]]+"-"+byteToHex[arr[offset+4]]+byteToHex[arr[offset+5]]+"-"+byteToHex[arr[offset+6]]+byteToHex[arr[offset+7]]+"-"+byteToHex[arr[offset+8]]+byteToHex[arr[offset+9]]+"-"+byteToHex[arr[offset+10]]+byteToHex[arr[offset+11]]+byteToHex[arr[offset+12]]+byteToHex[arr[offset+13]]+byteToHex[arr[offset+14]]+byteToHex[arr[offset+15]]).toLowerCase();if(!("string"==typeof uuid&&regex.test(uuid)))throw TypeError("Stringified UUID is invalid");return uuid},esm_browser_v4=function(options,buf,offset){var rnds=(options=options||{}).random||(options.rng||rng)();if(rnds[6]=15&rnds[6]|64,rnds[8]=63&rnds[8]|128,buf){offset=offset||0;for(var i=0;i<16;++i)buf[offset+i]=rnds[i];return buf}return esm_browser_stringify(rnds)}}}]);