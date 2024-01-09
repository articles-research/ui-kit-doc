"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[19],{"./src/main/TaskScreen.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{FinishedTask:()=>FinishedTask,ProcessingTask:()=>ProcessingTask,__namedExportsOrder:()=>__namedExportsOrder,default:()=>TaskScreen_stories});var _templateObject,SearchRestult_templateObject,clusters_templateObject,Article_templateObject,_ProcessingTask$param,_ProcessingTask$param2,_ProcessingTask$param3,_FinishedTask$paramet,_FinishedTask$paramet2,_FinishedTask$paramet3,react_router=__webpack_require__("./node_modules/react-router/esm/react-router.js"),ExpandMore=__webpack_require__("./node_modules/@mui/icons-material/ExpandMore.js"),Typography=__webpack_require__("./node_modules/@mui/material/esm/Typography/Typography.js"),LinearProgress=__webpack_require__("./node_modules/@mui/material/esm/LinearProgress/LinearProgress.js"),Box=__webpack_require__("./node_modules/@mui/material/esm/Box/Box.js"),Grid=__webpack_require__("./node_modules/@mui/material/esm/Grid/Grid.js"),Stack=__webpack_require__("./node_modules/@mui/system/esm/Stack/Stack.js"),react=__webpack_require__("./node_modules/react/index.js"),AuthorsList=__webpack_require__("./src/AuthorsList/AuthorsList.js"),taggedTemplateLiteral=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),Box_Box=__webpack_require__("./node_modules/@mui/system/esm/Box/Box.js"),chip=__webpack_require__("./src/common/chip.js"),emotion_styled_browser_esm=__webpack_require__("./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js"),AreaChart=__webpack_require__("./node_modules/recharts/es6/chart/AreaChart.js"),Area=__webpack_require__("./node_modules/recharts/es6/cartesian/Area.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");let ChartWrapper=emotion_styled_browser_esm.Z.div(_templateObject||(_templateObject=(0,taggedTemplateLiteral.Z)(["\n  background: rgba(0, 0, 0, 0.04);\n  border-radius: 8px;\n"]))),AreaChartComponent=_ref=>{let{plot_data}=_ref,graphData=Object.keys(plot_data).map(key=>({name:key,publications:plot_data[key]}));return(0,jsx_runtime.jsx)(ChartWrapper,{children:(0,jsx_runtime.jsxs)(AreaChart.T,{width:80,height:28,data:graphData,margin:{left:0,bottom:0},children:[(0,jsx_runtime.jsx)("defs",{children:(0,jsx_runtime.jsxs)("linearGradient",{id:"colorUv",x1:"0",y1:"0",x2:"0",y2:"1",children:[(0,jsx_runtime.jsx)("stop",{offset:"0%",stopColor:"rgba(163, 212, 20, 1)",stopOpacity:1}),(0,jsx_runtime.jsx)("stop",{offset:"100%",stopColor:"rgba(212, 147, 20, 1)",stopOpacity:1})]})}),(0,jsx_runtime.jsx)(Area.u,{type:"monotone",stroke:"none",dataKey:"publications",fill:"url(#colorUv)"})]})})};AreaChartComponent.__docgenInfo={description:"",methods:[],displayName:"AreaChartComponent"};var clsx_m=__webpack_require__("./node_modules/clsx/dist/clsx.m.js");let SearchResultWrapper=(0,emotion_styled_browser_esm.Z)(Stack.Z)(SearchRestult_templateObject||(SearchRestult_templateObject=(0,taggedTemplateLiteral.Z)(["\n  padding: 8px 16px;\n  flex: 1;\n  min-width: 0;\n\n  &.zero-cluster {\n    background: rgba(0, 0, 0, 0.04);\n    border-radius: 16px;\n  }\n\n  .percentage, .count {\n    font-weight: 500;\n    font-size: 12px;\n    line-height: 16px;\n    letter-spacing: 0.2px;\n\n    color: #749C00;\n  }\n\n  .count {\n    color: rgba(0, 0, 0, 0.42);\n    display: flex;\n    align-items: center;\n    font-weight: 400;\n    &:before {\n      margin: 0 8px;\n      content: '';\n      height: 4px;\n      width: 4px;\n      border-radius: 50%;\n      background: rgba(0, 0, 0, 0.12);\n    }\n  }\n"]))),SearchResult=_ref=>{let{active,fos_list,name,works,growth,plot_data,zeroCluster=!1}=_ref,foses=fos_list[0].slice(0,2);return(0,jsx_runtime.jsxs)(SearchResultWrapper,{className:(0,clsx_m.W)({active:active,"zero-cluster":zeroCluster}),container:!0,spacing:2,direction:"row",display:"flex",children:[(0,jsx_runtime.jsx)(Box_Box.Z,{item:!0,style:{width:"80px"},children:(0,jsx_runtime.jsx)(AreaChartComponent,{plot_data:plot_data})}),(0,jsx_runtime.jsx)(Box_Box.Z,{item:!0,display:"flex",xs:!0,children:(0,jsx_runtime.jsxs)(Stack.Z,{spacing:0,flexShrink:1,children:[(0,jsx_runtime.jsx)(Typography.Z,{children:name}),(0,jsx_runtime.jsxs)(Box_Box.Z,{display:"flex",children:[growth&&(0,jsx_runtime.jsxs)("div",{className:"percentage",children:[Math.floor(100*growth)," %"]}),(0,jsx_runtime.jsx)("div",{className:"count",children:works})]}),!zeroCluster&&(0,jsx_runtime.jsx)(Stack.Z,{spacing:1,mt:"8px",flexShrink:1,direction:"row",children:foses.map(i=>(0,jsx_runtime.jsx)(chip.Z,{size:"small",label:i}))})]})})]})};SearchResult.__docgenInfo={description:"",methods:[],displayName:"SearchResult",props:{zeroCluster:{defaultValue:{value:"false",computed:!1},required:!1}}};var api=__webpack_require__("./src/services/api.js"),Stack_Stack=__webpack_require__("./node_modules/@mui/material/esm/Stack/Stack.js"),Skeleton=__webpack_require__("./node_modules/@mui/material/esm/Skeleton/Skeleton.js");let SearchResultList=emotion_styled_browser_esm.Z.ul(clusters_templateObject||(clusters_templateObject=(0,taggedTemplateLiteral.Z)(["\n  list-style: none;\n  padding: 0;\n  margin: 10px -16px;\n\n  li {\n    cursor: pointer;\n    padding: 16px;\n    display: flex;\n    &.active {\n      background: rgba(0, 150, 255, 0.08);\n    }\n  }\n"]))),Clusters=_ref=>{let{clusterId,onSelectCluster,list=[],zeroCluster,loading=!1,status}=_ref;return(0,jsx_runtime.jsxs)(SearchResultList,{children:[zeroCluster&&(0,jsx_runtime.jsx)("li",{className:(0,clsx_m.W)({active:clusterId===zeroCluster}),onClick:()=>onSelectCluster(zeroCluster),children:(0,jsx_runtime.jsx)(SearchResult,{className:"zero-cluster",plot_data:zeroCluster.plot_data,works:zeroCluster.works_count,name:zeroCluster.name,zeroCluster:!0,growth:zeroCluster.growth,fos_list:[zeroCluster.fos_list],active:clusterId===zeroCluster})}),loading||"Running"===status?(0,jsx_runtime.jsxs)(Stack_Stack.Z,{spacing:1,children:[(0,jsx_runtime.jsx)(Skeleton.Z,{variant:"rectangular",width:"100%",height:90}),(0,jsx_runtime.jsx)(Skeleton.Z,{variant:"rectangular",width:"100%",height:90}),(0,jsx_runtime.jsx)(Skeleton.Z,{variant:"rectangular",width:"100%",height:90})]}):(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:list.filter(i=>i.id!==(null==zeroCluster?void 0:zeroCluster.id)).map((i,index)=>(0,jsx_runtime.jsx)("li",{className:(0,clsx_m.W)({active:clusterId===i.id}),onClick:()=>onSelectCluster(i),children:(0,jsx_runtime.jsx)(SearchResult,{plot_data:i.plot_data,works:i.works_count,name:i.name,zeroCluster:!zeroCluster&&0===index,growth:i.growth,fos_list:[i.fos_list],active:clusterId===i.id})}))})]})};Clusters.__docgenInfo={description:"",methods:[],displayName:"Clusters",props:{list:{defaultValue:{value:"[]",computed:!1},required:!1},loading:{defaultValue:{value:"false",computed:!1},required:!1}}};var searchBar=__webpack_require__("./src/common/searchBar.js"),IconButton=__webpack_require__("./node_modules/@mui/material/esm/IconButton/IconButton.js"),StarBorder=__webpack_require__("./node_modules/@mui/icons-material/StarBorder.js"),Star=__webpack_require__("./node_modules/@mui/icons-material/Star.js");let MainText=_ref=>{let{selectedCluster}=_ref,onFavoriteToggle=async()=>{try{await (0,api.Jh)(selectedCluster.id)}catch(err){console.log(err)}};return(0,jsx_runtime.jsxs)(Stack.Z,{direction:"row",alignItems:"center",spacing:2,children:[(0,jsx_runtime.jsx)(IconButton.Z,{onClick:onFavoriteToggle,color:"secondary",sx:{marginRight:"-16px"},"aria-label":"directions",children:selectedCluster.is_favorite?(0,jsx_runtime.jsx)(Star.Z,{style:{color:"#FFCC00"}}):(0,jsx_runtime.jsx)(StarBorder.Z,{})}),(0,jsx_runtime.jsx)(Typography.Z,{variant:"h1",gutterBottom:!0,children:selectedCluster.name})]})};MainText.__docgenInfo={description:"",methods:[],displayName:"MainText"};var store=__webpack_require__("./src/services/store/store.js"),ResponsiveContainer=__webpack_require__("./node_modules/recharts/es6/component/ResponsiveContainer.js"),BarChart=__webpack_require__("./node_modules/recharts/es6/chart/BarChart.js"),XAxis=__webpack_require__("./node_modules/recharts/es6/cartesian/XAxis.js"),Tooltip=__webpack_require__("./node_modules/recharts/es6/component/Tooltip.js"),Bar=__webpack_require__("./node_modules/recharts/es6/cartesian/Bar.js");function App(_ref){let{plot_data}=_ref,graphData=Object.keys(plot_data).map(key=>({name:key,publications:plot_data[key]}));return(0,jsx_runtime.jsx)(ResponsiveContainer.h,{width:"100%",height:150,children:(0,jsx_runtime.jsxs)(BarChart.v,{data:graphData,margin:{top:5,right:0,left:0,bottom:5},children:[(0,jsx_runtime.jsx)(XAxis.K,{dataKey:"name"}),(0,jsx_runtime.jsx)(Tooltip.u,{}),(0,jsx_runtime.jsx)(Bar.$,{yAxisId:"left",barCategoryGap:30,dataKey:"publications",fill:"#aaaaaa"})]})})}App.__docgenInfo={description:"",methods:[],displayName:"App"};let Trends=_ref=>{let{selectedCluster}=_ref;return(0,jsx_runtime.jsxs)(Stack.Z,{sx:{background:"rgba(0, 0, 0, 0.02)",borderRadius:"8px",padding:"16px"},children:[(0,jsx_runtime.jsx)(Typography.Z,{variant:"h3",mb:"16px",children:"Trends"}),(0,jsx_runtime.jsx)(App,{plot_data:selectedCluster.plot_data})]})};Trends.__docgenInfo={description:"",methods:[],displayName:"Trends"};var FormatQuote=__webpack_require__("./node_modules/@mui/icons-material/FormatQuote.js"),react_infinite_scroller=__webpack_require__("./node_modules/react-infinite-scroller/index.js"),react_infinite_scroller_default=__webpack_require__.n(react_infinite_scroller);let ArticleWrapper=(0,emotion_styled_browser_esm.Z)(Stack.Z)(Article_templateObject||(Article_templateObject=(0,taggedTemplateLiteral.Z)(["\n  /* .main-text {\n    font-weight: 600;\n    font-size: 16px;\n    line-height: 20px;\n  } */\n  cursor: pointer;\n  margin-top: 16px;\n  font-size: 12px;\n  font-weight: 400;\n  overflow: auto;\n  max-height: 700px;\n\n  .cited {\n    font-weight: 500;\n    display: flex;\n    align-items: center;\n  }\n\n  .field, .author {\n    color: rgba(0, 0, 0, 0.42);\n    margin-left: 8px;\n  }\n"]))),Article=_ref=>{let{clusterId}=_ref,[results,setResults]=(0,react.useState)(null),setOpenOverlay=(0,store.Z)(state=>state.setOpenOverlay),[period,fields,types,mainSort]=(0,store.Z)(state=>[state.periodTypes,state.selectedFosesTypes,state.selectedWorkTypes,state.mainSort]);(0,react.useEffect)(()=>{let initOverlay=async()=>{setResults((await (0,api.LG)(clusterId,{params:{page:1,size:15,fos_ids:fields.join(","),venues:types.join(","),year_from:period.from,year_to:period.to,order_by:mainSort}})).data)};clusterId&&initOverlay()},[clusterId,fields.length,types.length,period,mainSort]);let onRequestPage=async page=>{try{let{data}=await (0,api.LG)(clusterId,{params:{page:page,size:15,fos_ids:fields.join(","),types:types.join(","),year_from:period.from,year_to:period.to,order_by:mainSort}}),list=[...data.items];setResults({...results,items:[...results.items,...list]})}catch(error){console.log(error)}};return results&&(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsxs)(Typography.Z,{variant:"h2",children:[results.total," Articles"]}),(0,jsx_runtime.jsxs)(react_infinite_scroller_default(),{pageStart:0,loadMore:onRequestPage,hasMore:results.total>results.items.length,useWindow:!0,loader:(0,jsx_runtime.jsx)("div",{className:"loader",children:"Loading ..."},0),children:[(results.items||[]).map(i=>(0,jsx_runtime.jsxs)(ArticleWrapper,{onClick:()=>setOpenOverlay({ARTICLE:i.id}),container:!0,spacing:0,display:"flex",children:[(0,jsx_runtime.jsxs)(Box_Box.Z,{item:!0,children:[(0,jsx_runtime.jsx)("span",{className:"date",children:i.publication_date}),i.fos_list.slice(0,2).map((fos,index,arr)=>(0,jsx_runtime.jsxs)("span",{className:"field",children:[fos,index!==arr.length-1?",":""]}))]}),(0,jsx_runtime.jsx)(Box_Box.Z,{item:!0,sx:{mt:"4px"},children:(0,jsx_runtime.jsx)(Typography.Z,{variant:"h4",children:i.title})}),(0,jsx_runtime.jsxs)(Box_Box.Z,{display:"flex",alignItems:"center",flexWrap:"wrap",children:[(0,jsx_runtime.jsxs)("span",{className:"cited",children:[(0,jsx_runtime.jsx)(FormatQuote.Z,{}),i.cited_by_count]}),i.authors_list.slice(0,2).map(author=>(0,jsx_runtime.jsx)("span",{className:"author",children:author}))]})]})),";"]})]})};Article.__docgenInfo={description:"",methods:[],displayName:"Article"};let MainParagraph=_ref=>{let{selectedCluster}=_ref;return(0,jsx_runtime.jsx)(Stack.Z,{sx:{background:"rgba(0, 0, 0, 0.04)",borderRadius:"8px",padding:"16px",height:"188px",overflow:"scroll"},children:(null==selectedCluster?void 0:selectedCluster.summary)&&(0,jsx_runtime.jsx)(Typography.Z,{children:selectedCluster.summary})})};MainParagraph.__docgenInfo={description:"",methods:[],displayName:"MainParagraph"};var Toggler=__webpack_require__("./src/ui-kit/Toggler/Toggler.tsx"),POCCirclePackgingChart=__webpack_require__("./src/components/POCCirclePackgingChart/index.ts"),Workspace=__webpack_require__("./src/components/Workspace/Workspace.tsx"),CirclePackingChart=__webpack_require__("./src/components/POCCirclePackgingChart/CirclePackingChart.tsx");let VIEWS={list:"As a list",chart:"On a map"};function isLoading(taskStatus,taskProcessingStep){let isTaskProcessing=["MILVUS_SEARCH","CLUSTERING"].includes(taskProcessingStep);return"Running"===taskStatus||isTaskProcessing}let Task=()=>{let[loading,setLoading]=(0,react.useState)(!1),[status,setStatus]=(0,react.useState)(""),[selectedCluster,setSelectedCluster]=(0,react.useState)(null),setOpenOverlay=(0,store.Z)(state=>state.setOpenOverlay),[selectedFoses,selectedPeriod]=(0,store.Z)(state=>[state.selectedFoses,state.period]),[finishedTask,setFinishedTaskId]=(0,react.useState)(""),[zeroCluster,setZeroCluster]=(0,react.useState)(null),[clusters,setClusters]=(0,react.useState)([]),[clustersSort,mainSort,periodTypes,selectedFosesTypes,selectedWorkTypes]=(0,store.Z)(state=>[state.clustersSort,state.mainSort,state.periodTypes,state.selectedFosesTypes,state.selectedWorkTypes]),[view,setView]=(0,react.useState)("list"),handleViewChange=(0,react.useCallback)(event=>setView(event.value)),[selectedClusterBox,setSelectedClusterBox]=(0,react.useState)(),[clustersMap,setClustersMap]=(0,react.useState)(),selectCluster=(0,react.useCallback)(cluster=>{setSelectedCluster(cluster)},[clustersMap,setSelectedCluster,setSelectedClusterBox]),handleChartFocusChange=(0,react.useCallback)(event=>{selectCluster(clusters.find(c=>c.id===+event.value))}),[processingStep,setProcessingStep]=(0,react.useState)(),params=(0,react_router.UO)(),getStatus=async id=>{try{let statusRes=await (0,api.XV)(id);if(setStatus(statusRes.data.status),setProcessingStep(statusRes.data.processing_step),isLoading(statusRes.data.status,statusRes.data.processingStep)?setTimeout(()=>{getStatus(id)},5e3):setClustersMap((0,CirclePackingChart.O)(null==statusRes?void 0:statusRes.data.clusters_map)),statusRes&&"Running"===statusRes.data.status)try{if(!clusters.length&&"CLUSTERING"===statusRes.data.processing_step){let clusterResponse=await (0,api.Zz)(id,{params:{order_by:clustersSort}});setZeroCluster(clusterResponse.data[0]),selectCluster(clusterResponse.data[0])}}catch(error){console.log(error)}else if(statusRes&&"Finished"===statusRes.data.status){setFinishedTaskId(id);try{let clusterResponse=await (0,api.Zz)(id,{params:{order_by:clustersSort}});setClusters(clusterResponse.data),selectedCluster||selectCluster(clusterResponse.data[0])}catch(error){console.log(error)}setLoading(!1)}else setLoading(!1)}catch(err){console.log(err)}};(0,react.useEffect)(()=>{(async()=>{try{await getStatus(params.id)}catch(error){console.log(error)}})()},[params.id,clustersSort]);let postSearch=async search=>{setLoading(!0);let model={search_query:search,fos_ids:selectedFoses,year_from:selectedPeriod.from,year_to:selectedPeriod.to},res=await (0,api.vr)(model);await getStatus(res.data.id)};return(0,jsx_runtime.jsxs)(Box.Z,{sx:{flexGrow:1},display:"flex",children:[(0,jsx_runtime.jsx)(Box.Z,{width:"394px",children:(0,jsx_runtime.jsxs)(Stack.Z,{spacing:1,sx:{p:2,background:"#fafafa",height:"100%",boxSizing:"border-box"},display:"flex",flex:"1",flexDirection:"column",children:[(0,jsx_runtime.jsx)(searchBar.Z,{showHistory:!1,onSearch:postSearch,small:!0}),clusters.length?(0,jsx_runtime.jsxs)(Box.Z,{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",children:[(0,jsx_runtime.jsxs)(Typography.Z,{children:[clusters.length," results"]}),(0,jsx_runtime.jsx)(chip.Z,{onClick:()=>setOpenOverlay({SORT_ClUSTERS:"SORT_ClUSTERS"}),size:"medium",label:"Sort",icon:(0,jsx_runtime.jsx)(ExpandMore.Z,{})})]}):(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:!!status&&(0,jsx_runtime.jsx)("div",{children:status})}),(0,jsx_runtime.jsxs)(Box.Z,{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",gap:2,children:[(0,jsx_runtime.jsx)(Box.Z,{flex:1,children:isLoading(status,processingStep)&&(0,jsx_runtime.jsx)(LinearProgress.Z,{})}),(0,jsx_runtime.jsx)(Toggler.Z,{value:view,options:VIEWS,onChange:handleViewChange,disabled:isLoading(status,processingStep)})]}),(0,jsx_runtime.jsx)(Box.Z,{ml:"-16px",mr:"-16px",children:(0,jsx_runtime.jsx)(Clusters,{list:clusters,status:status,clusterId:selectedCluster&&selectedCluster.id,onSelectCluster:selectCluster,taskId:finishedTask,zeroCluster:zeroCluster,loading:loading})})]})}),(0,jsx_runtime.jsxs)(Box.Z,{flex:"1",children:["list"===view&&selectedCluster&&selectedCluster.id&&(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(Box.Z,{sx:{p:2},display:"flex",flexDirection:"column",children:(0,jsx_runtime.jsx)(MainText,{selectedCluster:selectedCluster})}),(0,jsx_runtime.jsxs)(Box.Z,{children:[(0,jsx_runtime.jsxs)(Grid.ZP,{container:!0,spacing:0,children:[(0,jsx_runtime.jsx)(Grid.ZP,{item:!0,xs:7,children:(0,jsx_runtime.jsx)(Box.Z,{sx:{p:2},display:"flex",flexDirection:"column",children:(0,jsx_runtime.jsx)(MainParagraph,{selectedCluster:selectedCluster})})}),(0,jsx_runtime.jsx)(Grid.ZP,{item:!0,xs:5,children:(0,jsx_runtime.jsx)(Box.Z,{sx:{p:2},display:"flex",flexDirection:"column",children:(0,jsx_runtime.jsx)(Trends,{selectedCluster:selectedCluster})})})]}),(0,jsx_runtime.jsxs)(Grid.ZP,{container:!0,spacing:0,children:[(0,jsx_runtime.jsx)(Grid.ZP,{item:!0,xs:12,children:(0,jsx_runtime.jsx)(Box.Z,{sx:{p:2},children:(0,jsx_runtime.jsxs)(Stack.Z,{sx:{margin:"16px 0 0"},direction:"row",spacing:2,children:[(0,jsx_runtime.jsx)(chip.Z,{className:(periodTypes.from!==store.R.from||periodTypes.to!==store.R.to)&&"active",onClick:()=>setOpenOverlay({ARTICLES_PERIOD:"ARTICLES_PERIOD"}),size:"medium",label:"Date Range",icon:(0,jsx_runtime.jsx)(ExpandMore.Z,{})}),(0,jsx_runtime.jsx)(chip.Z,{className:selectedFosesTypes.length&&"active",onClick:()=>setOpenOverlay({ARTICLES_FIELDS:"ARTICLES_FIELDS"}),size:"medium",label:"Fields of study",icon:(0,jsx_runtime.jsx)(ExpandMore.Z,{})}),(0,jsx_runtime.jsx)(chip.Z,{className:selectedWorkTypes.length&&"active",onClick:()=>setOpenOverlay({ARTICLES_TYPES:selectedCluster.id}),size:"medium",label:"Journals & Conferences",icon:(0,jsx_runtime.jsx)(ExpandMore.Z,{})}),(0,jsx_runtime.jsx)(chip.Z,{className:"date_asc"!==mainSort&&"active",onClick:()=>setOpenOverlay({SORT_MAIN:"SORT_MAIN"}),size:"medium",label:"Sort",icon:(0,jsx_runtime.jsx)(ExpandMore.Z,{})})]})})}),(0,jsx_runtime.jsx)(Grid.ZP,{item:!0,xs:7,children:(0,jsx_runtime.jsx)(Box.Z,{sx:{p:2},display:"flex",flexDirection:"column",children:(0,jsx_runtime.jsx)(Article,{clusterId:selectedCluster.id})})}),(0,jsx_runtime.jsx)(Grid.ZP,{item:!0,xs:5,children:(0,jsx_runtime.jsx)(Box.Z,{sx:{p:2},display:"flex",flexDirection:"column",children:(0,jsx_runtime.jsx)(AuthorsList.Z,{clusterId:selectedCluster.id})})})]})]})]}),"chart"===view&&(0,jsx_runtime.jsx)(Box.Z,{height:"100%",children:(0,jsx_runtime.jsx)(Workspace.Z,{focus:selectedClusterBox,children:(0,jsx_runtime.jsx)(POCCirclePackgingChart.S,{data:clustersMap,focus:selectedCluster.id,onFocus:handleChartFocusChange,onClick:e=>setOpenOverlay({ARTICLE:e.value})})})})]})]},params.id)};Task.__docgenInfo={description:"",methods:[],displayName:"Task"};var search_tasks=__webpack_require__("./src/services/api/search_tasks/index.ts"),SearchTask_mocks=__webpack_require__("./src/domain/SearchTask/SearchTask.mocks.ts"),lib=__webpack_require__("./node_modules/msw/lib/index.js"),mock=__webpack_require__("./src/services/api/mock.ts"),Cluster_mocks=__webpack_require__("./src/domain/Cluster/Cluster.mocks.ts"),Work_mocks=__webpack_require__("./src/domain/Work/Work.mocks.ts");let Author={id:"User ID",display_name:"Display Author Name",works_count:20,cited_by_count:5,hindex:10,linkedin_url:"Linkedin URL",linkedin_url_updated_date:"Linkedin URL Updated Date",institution_name:"Institution Name",emails:[{email:"Email 1",institution:"Institution Name",publication_date:"Publication Date"}]},worksByClusterIdResponse={items:Work_mocks.z,total:1,page:1,size:1},getWorksByClusterIdRequestsFactory=()=>Object.keys(Cluster_mocks.C).map(clusterId=>lib.rest.get("".concat(mock.j,"/api/v1/clusters/").concat(clusterId,"/works"),(_req,res,ctx)=>res(ctx.json(worksByClusterIdResponse)))),getAuthorsByClusterIdRequestsFactory=()=>Object.keys(Cluster_mocks.C).map(clusterId=>lib.rest.get("".concat(mock.j,"/api/v1/clusters/").concat(clusterId,"/authors"),(_req,res,ctx)=>res(ctx.json({items:[Author],total:1,page:1,size:1}))));var works=__webpack_require__("./src/services/api/works/index.ts");let TaskScreen_stories={title:"views/Task",component:Task},ProcessingTask={decorators:[Story=>(0,jsx_runtime.jsx)(react_router.VA,{initialEntries:["/task/".concat(2)],children:(0,jsx_runtime.jsx)(react_router.AW,{path:"/task/:id",children:(0,jsx_runtime.jsx)(Story,{})})})],parameters:{msw:{handlers:[search_tasks.Bo,(0,search_tasks.d2)(2,SearchTask_mocks.LV),(0,search_tasks.sg)(2),getWorksByClusterIdRequestsFactory(),getAuthorsByClusterIdRequestsFactory(),works.j]}}},FinishedTask={decorators:[Story=>(0,jsx_runtime.jsx)(react_router.VA,{initialEntries:["/task/".concat(1)],children:(0,jsx_runtime.jsx)(react_router.AW,{path:"/task/:id",children:(0,jsx_runtime.jsx)(Story,{})})})],parameters:{msw:{handlers:[search_tasks.Bo,(0,search_tasks.d2)(1,SearchTask_mocks.Fw),(0,search_tasks.sg)(1),getWorksByClusterIdRequestsFactory(),getAuthorsByClusterIdRequestsFactory(),works.j]}}};ProcessingTask.parameters={...ProcessingTask.parameters,docs:{...null===(_ProcessingTask$param=ProcessingTask.parameters)||void 0===_ProcessingTask$param?void 0:_ProcessingTask$param.docs,source:{originalSource:'{\n  decorators: [Story => <MemoryRouter initialEntries={[`/task/${PROCESSING_TASK_ID}`]}>\n        <Route path="/task/:id">\n          <Story />\n        </Route>\n      </MemoryRouter>],\n  parameters: {\n    msw: {\n      handlers: [getSearchTasks, getSearchTaskByIdRequestFactory(PROCESSING_TASK_ID, ProcessingTaskFactory), getClustersBySearchTaskIdRequestFactory(PROCESSING_TASK_ID), getWorksByClusterIdRequestsFactory(), getAuthorsByClusterIdRequestsFactory(), getWorkById]\n    }\n  }\n}',...null===(_ProcessingTask$param2=ProcessingTask.parameters)||void 0===_ProcessingTask$param2?void 0:null===(_ProcessingTask$param3=_ProcessingTask$param2.docs)||void 0===_ProcessingTask$param3?void 0:_ProcessingTask$param3.source}}},FinishedTask.parameters={...FinishedTask.parameters,docs:{...null===(_FinishedTask$paramet=FinishedTask.parameters)||void 0===_FinishedTask$paramet?void 0:_FinishedTask$paramet.docs,source:{originalSource:'{\n  decorators: [Story => <MemoryRouter initialEntries={[`/task/${FINISHED_TASK_ID}`]}>\n        <Route path="/task/:id">\n          <Story />\n        </Route>\n      </MemoryRouter>],\n  parameters: {\n    msw: {\n      handlers: [\n      // Request each time the component is rendered\n      // @TODO cache requests result with RTK Query\n      getSearchTasks, getSearchTaskByIdRequestFactory(FINISHED_TASK_ID, FinishedTaskFactory), getClustersBySearchTaskIdRequestFactory(FINISHED_TASK_ID), getWorksByClusterIdRequestsFactory(), getAuthorsByClusterIdRequestsFactory(), getWorkById]\n    }\n  }\n}',...null===(_FinishedTask$paramet2=FinishedTask.parameters)||void 0===_FinishedTask$paramet2?void 0:null===(_FinishedTask$paramet3=_FinishedTask$paramet2.docs)||void 0===_FinishedTask$paramet3?void 0:_FinishedTask$paramet3.source}}};let __namedExportsOrder=["ProcessingTask","FinishedTask"]},"./src/common/searchBar.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _templateObject,_home_egorro_work_pv_frontend_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_mui_material_InputBase__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@mui/material/esm/InputBase/InputBase.js"),_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/@mui/material/esm/IconButton/IconButton.js"),_mui_icons_material_Search__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__("./node_modules/@mui/icons-material/Search.js"),_mui_icons_material_HighlightOffRounded__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./node_modules/@mui/icons-material/HighlightOffRounded.js"),_mui_material__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("./node_modules/@mui/material/esm/Button/Button.js"),_mui_material__WEBPACK_IMPORTED_MODULE_15__=__webpack_require__("./node_modules/@mui/material/esm/Typography/Typography.js"),_emotion_styled__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js"),_mui_icons_material_ImportContactsRounded__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./node_modules/@mui/icons-material/ImportContactsRounded.js"),_mui_icons_material_ExpandMore__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__("./node_modules/@mui/icons-material/ExpandMore.js"),_services_store_store__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/services/store/store.js"),_services_api__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/services/api.js"),react_router_dom__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/react-router/esm/react-router.js"),_mui_system__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__("./node_modules/@mui/system/esm/Box/Box.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js");let Wrapper=_emotion_styled__WEBPACK_IMPORTED_MODULE_1__.Z.div(_templateObject||(_templateObject=(0,_home_egorro_work_pv_frontend_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_5__.Z)(["\n  padding: 0;\n\n  .input {\n    display: flex;\n    align-items: center;\n    width: 546px;\n    box-shadow: none;\n    border: 2px solid #005BFF;\n    overflow: hidden;\n    border-radius: 8px 12px 12px 8px;\n    input::placeholder {\n      font-weight: 700;\n      font-size: 20px;\n    }\n\n     ","\n  }\n\n  .actions {\n    margin-top: 8px;\n    display: flex;\n    color: rgba(0, 0, 0, 0.72);\n  }\n\n  .search-history {\n    max-height: 300px;\n    overflow: auto;\n\n    h4 {\n      cursor: pointer;\n    }\n  }\n"])),props=>props.small&&"\n      width: 356px;\n    "),SearchBar=_ref=>{let{small=!1,onSelectFromHistory,showHistory}=_ref,setOpenOverlay=(0,_services_store_store__WEBPACK_IMPORTED_MODULE_2__.Z)(state=>state.setOpenOverlay),[selectedFoses,selectedPeriod,resetFilters,search,setSearch]=(0,_services_store_store__WEBPACK_IMPORTED_MODULE_2__.Z)(state=>[state.selectedFoses,state.period,state.resetFilters,state.search,state.setSearch]),[query,setQuery]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),[historyList,setHistoryList]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),[loading,setLoading]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),history=(0,react_router_dom__WEBPACK_IMPORTED_MODULE_6__.k6)();(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{(async()=>{try{let res=await (0,_services_api__WEBPACK_IMPORTED_MODULE_3__.Jv)({params:{page:1,size:15}});console.log(res),setHistoryList(res.data)}catch(err){console.log(err)}})()},[]);let postSearch=async search=>{setLoading(!0),resetFilters(resetFilters);let model={search_query:search,fos_ids:selectedFoses,year_from:selectedPeriod.from,year_to:selectedPeriod.to},res=await (0,_services_api__WEBPACK_IMPORTED_MODULE_3__.vr)(model);history.push("/task/".concat(res.data.id))};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(Wrapper,{component:"form",small:small,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div",{className:"input",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_mui_material_InputBase__WEBPACK_IMPORTED_MODULE_7__.ZP,{size:"medium",fullWidth:!0,onChange:e=>setSearch(e.target.value),value:search,sx:{ml:1,flex:1},placeholder:"Search",inputProps:{"aria-label":"search google maps"}}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_8__.Z,{size:"small",variant:"contained",type:"primary",onClick:()=>setQuery(""),color:"secondary","aria-label":"directions",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_mui_icons_material_HighlightOffRounded__WEBPACK_IMPORTED_MODULE_9__.Z,{fontSize:"10px",color:"secondary"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_8__.Z,{size:"small",variant:"contained",type:"primary",onClick:()=>setOpenOverlay({HISTORY:"HISTORY"}),"aria-label":"directions",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_mui_icons_material_ImportContactsRounded__WEBPACK_IMPORTED_MODULE_10__.Z,{fontSize:"10px",color:"secondary"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_11__.Z,{onClick:()=>postSearch(search),type:"primary",color:"primary",variant:"contained",sx:{p:"10px",border:"none",boxShadow:"none",width:small?"36px":"112px",borderRadius:0},"aria-label":"search",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_mui_icons_material_Search__WEBPACK_IMPORTED_MODULE_12__.Z,{})})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div",{className:"actions",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_11__.Z,{type:"primary",color:"secondary",endIcon:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_mui_icons_material_ExpandMore__WEBPACK_IMPORTED_MODULE_13__.Z,{}),onClick:()=>setOpenOverlay({FIELDS:"FIELDS"}),variant:"contained",sx:{p:"10px",border:"none",boxShadow:"none",width:"112px",borderRadius:"8px",flex:1,mr:"8px",justifyContent:"space-between",color:"rgba(0, 0, 0, 0.72)"},"aria-label":"search",children:"Field"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_11__.Z,{type:"primary",color:"secondary",onClick:()=>setOpenOverlay({PERIOD:"PERIOD"}),endIcon:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_mui_icons_material_ExpandMore__WEBPACK_IMPORTED_MODULE_13__.Z,{}),variant:"contained",sx:{p:"10px",border:"none",boxShadow:"none",width:"112px",borderRadius:"8px",color:"rgba(0, 0, 0, 0.72)"},"aria-label":"period",children:"Period"})]}),showHistory&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div",{className:"search-history",children:historyList.map(i=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_mui_system__WEBPACK_IMPORTED_MODULE_14__.Z,{display:"flex",justifyContent:"space-between",alignItems:"flex-start",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_15__.Z,{onClick:()=>onSelectFromHistory(i),sx:{mt:1},variant:"h4",children:i.search_query},i.id),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_15__.Z,{variant:"subtitle1",children:i.created_at})]}),i.year_from&&i.year_to&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_15__.Z,{onClick:()=>onSelectFromHistory(i),sx:{mt:1},variant:"subtitle1",children:"".concat(i.year_from," - ").concat(i.year_to)},i.id)]},i.id))})]})},__WEBPACK_DEFAULT_EXPORT__=SearchBar;SearchBar.__docgenInfo={description:"",methods:[],displayName:"SearchBar",props:{small:{defaultValue:{value:"false",computed:!1},required:!1}}}},"./src/domain/Work/Work.mocks.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{m:()=>Work,z:()=>WorkList});let Work={id:"1",title:"Work 1 Title",publication_date:"24/12/2023",cited_by_count:100,abstract:"Work 1 Abstract",fos_list:["Field of Study 1","Field of Study 2"],authors_list:["Author 1","Author 2","Author 3"]},WorkList=[Work]},"./src/services/api/works/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{j:()=>getWorkById});var msw__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/msw/lib/index.js"),_mock__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/services/api/mock.ts"),_domain_Work_Work_mocks__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/domain/Work/Work.mocks.ts");let getWorkById=msw__WEBPACK_IMPORTED_MODULE_1__.rest.get("".concat(_mock__WEBPACK_IMPORTED_MODULE_2__.j,"/api/v1/works/1"),(_req,res,ctx)=>res(ctx.json(_domain_Work_Work_mocks__WEBPACK_IMPORTED_MODULE_0__.m)))},"./src/ui-kit/Toggler/Toggler.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>Toggler_Toggler});var react=__webpack_require__("./node_modules/react/index.js"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames);let Toggler_module={toggler:"Toggler_toggler__h3XZn",option:"Toggler_option__xAsrf",active:"Toggler_active__PLyBu"};var EventObject=__webpack_require__("./src/ui-kit/EventObject.tsx"),Button=__webpack_require__("./src/ui-kit/Button/index.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");let Toggler=_ref=>{let{value,onChange,options={},disabled}=_ref,handleToggle=(0,react.useCallback)(event=>{onChange(new EventObject.f(event.meta.name))},[onChange]);return(0,jsx_runtime.jsx)("div",{className:classnames_default()(Toggler_module.toggler),children:Object.entries(options).map(_ref2=>{let[optionId,optionValue]=_ref2;return(0,jsx_runtime.jsx)(Button.z,{className:classnames_default()(Toggler_module.option,optionId===value&&Toggler_module.active),name:optionId,onClick:handleToggle,color:optionId===value?"primary":"secondary",disabled:disabled,children:optionValue},optionId)})})},Toggler_Toggler=Toggler;try{Toggler.displayName="Toggler",Toggler.__docgenInfo={description:"",displayName:"Toggler",props:{value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string"}},options:{defaultValue:{value:"{}"},description:"",name:"options",required:!1,type:{name:"TogglerOptions"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(event: EventObject<string>) => void"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/ui-kit/Toggler/Toggler.tsx#Toggler"]={docgenInfo:Toggler.__docgenInfo,name:"Toggler",path:"src/ui-kit/Toggler/Toggler.tsx#Toggler"})}catch(__react_docgen_typescript_loader_error){}}}]);