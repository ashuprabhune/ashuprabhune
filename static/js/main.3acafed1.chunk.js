(this.webpackJsonpashishprabhune1=this.webpackJsonpashishprabhune1||[]).push([[0],{130:function(e,a,t){e.exports=t(147)},135:function(e,a,t){},147:function(e,a,t){"use strict";t.r(a);var n=t(1),r=t.n(n),o=t(29),i=t.n(o),l=(t(135),t(106)),c=t(107),s=t(120),m=t(118),d=t(79),p=t(180),u=t(81),h=t(78),g=t.n(h),f=t(168),b=t(181),y=t(170),E=t(174),v=t(171),w=t(172),x=t(182),k=t(67),j=t.n(k),O=t(108),C=t.n(O),S=t(109),B=t.n(S),N=t(110),A=t.n(N),z=t(117),I=t(169),H=t(173),T=Object(z.a)({palette:{primary:{main:"#4faeae"},secondary:{main:"#6a6c6c"},ternary:{main:"#37393a"}}}),D=Object(f.a)({root:{minWidth:350,color:"white",borderRadius:"10px",paddingBottom:"0",backgroundColor:"#555656",boxShadow:"8px 8px 5px #222424"},media:{height:140},html:{fontSize:12},smallIcon:{width:2,height:2},header:{height:80},description:{height:100},info:{height:60},footer:{height:20}}),R=Object(f.a)((function(e){return{root:{display:"flex",justifyContent:"center",flexWrap:"wrap","& > *":{margin:e.spacing(.5)}},typography:{nowrap:"true"}}}));function U(e){var a=D(),t=R();return r.a.createElement(I.a,{theme:T},r.a.createElement(b.a,{className:a.root},r.a.createElement(y.a,{className:a.header,style:{backgroundColor:"#404242"}},r.a.createElement("div",{className:t.root},e.topics.map((function(e){return r.a.createElement(x.a,{color:"secondary",key:e,size:"small",style:{fontSize:10,color:"white",boxShadow:"1px 1px 1px #2b2d2d "},label:e})})))),r.a.createElement(y.a,{style:{backgroundColor:"#2b2d2d"}},r.a.createElement(v.a,{className:a.description,align:"left"},r.a.createElement(w.a,{gutterBottom:!0,variant:"h5",component:"h2"},e.name),r.a.createElement(w.a,{className:a.typography,variant:"body2",component:"p"},e.description)),r.a.createElement(H.a,{light:!0,variant:"middle",style:{backgroundColor:"#4faeae"}}),r.a.createElement(v.a,{className:a.info,align:"left"},r.a.createElement(w.a,{className:a.html,display:"block",gutterBottom:!0},r.a.createElement(C.a,{color:"primary",style:{fontSize:12},label:""})," ",e.date," ","on"," ",e.commitBranch),r.a.createElement(w.a,{variant:"caption",display:"block",gutterBottom:!0},r.a.createElement(B.a,{color:"primary",style:{fontSize:12},fontSize:"small",label:""})," ",e.messageHeadline),r.a.createElement(w.a,{variant:"caption",display:"block",gutterBottom:!0},r.a.createElement(A.a,{color:"primary",style:{fontSize:12},fontSize:"small",label:""})," ",e.commitMessage," "," commits"))),r.a.createElement(y.a,{style:{backgroundColor:"#4faeae"}},r.a.createElement(E.a,{style:{justifyContent:"center",height:"inherit"}},r.a.createElement(j.a,{style:{height:"100%"}}),"GitHub"))))}var W=t(175),q=function(e){return e.children};function G(e){var a=e.pinnedItems,t=Object.keys(a).map((function(e){a[e].node.refs.nodes.length;var t=a[e].node.refs.nodes.concat().sort((function(e,a){return e.target.pushedDate<a.target.pushedDate?1:-1}))[0],n=a[e].node.repositoryTopics.edges.map((function(e){return e.node.topic.name})),o=a[e].node.refs.nodes.reduce((function(e,a){return e+a.target.history.totalCount}),0),i=t.target.messageHeadline,l=g()(t.target.pushedDate).fromNow(),c=t.name,s=a[e].url;a[e].homepageUrl;return r.a.createElement(W.a,{item:!0,xs:12,sm:12,md:4,lg:4,key:s},r.a.createElement(U,{topics:n,name:a[e].node.name,description:a[e].node.description,url:s,messageHeadline:i,commitMessage:o,commitBranch:c,date:l,key:s}))}));return r.a.createElement(q,null,t)}var L=t(176),M=t(111),F=t.n(M),J=t(183),P=Object(z.a)({palette:{primary:{main:"#4faeae"},secondary:{main:"#6a6c6c"},ternary:{main:"#37393a"}}}),V=Object(f.a)({root:{minWidth:350,height:350,color:"white",borderRadius:"10px",paddingBottom:"0",backgroundColor:"#2b2d2d",boxShadow:"8px 8px 5px #222424"},media:{height:140},html:{fontSize:12},smallIcon:{width:2,height:2},header:{height:105},avatar:{width:80,height:80,margin:"auto",zIndex:10,top:10},description:{height:200},button:{display:"flex",justifyContent:"space-between",bottom:0}}),$=Object(f.a)((function(e){return{root:{display:"flex",justifyContent:"center",flexWrap:"wrap","& > *":{margin:e.spacing(.5)}},typography:{nowrap:"true"}}}));function K(e){var a=V(),t=$();return r.a.createElement(I.a,{theme:P},r.a.createElement(b.a,{className:a.root},r.a.createElement(y.a,{className:a.header,style:{backgroundColor:"#404242"}},r.a.createElement("div",{className:t.root},e.topics.map((function(e){return r.a.createElement(x.a,{color:"secondary",key:e,size:"small",style:{fontSize:10,color:"white",boxShadow:"1px 1px 1px #2b2d2d "},label:e})}))),r.a.createElement(J.a,{className:a.avatar,src:e.avatarUrl})),r.a.createElement(y.a,{className:a.description,style:{backgroundColor:"#2b2d2d"}},r.a.createElement(v.a,{align:"left"},r.a.createElement(w.a,{gutterBottom:!0,variant:"h5",component:"h2"},e.name),r.a.createElement(w.a,{className:a.typography,variant:"body2",color:"primary",component:"p"},e.description))),r.a.createElement(L.a,{style:{width:"50%",backgroundColor:"black",color:"white",textTransform:"none"}},r.a.createElement(E.a,null,r.a.createElement(j.a,{style:{paddingRight:5}}),"  GitHub")),r.a.createElement(L.a,{style:{width:"50%",backgroundColor:"#2867B2",color:"white",textTransform:"none"}},r.a.createElement(E.a,null,"Linked",r.a.createElement(F.a,null)))))}var Q=t(68),X=t(119),Y=t(8),Z=t(178),_=t(179),ee=t(177),ae=t(74),te=t(112),ne=t.n(te),re=Object(z.a)({palette:{primary:{main:"#4faeae"},secondary:{main:"#6a6c6c"},ternary:{main:"#37393a"}}}),oe=Object(f.a)((function(e){return{root:{minWidth:350,color:"white",minHeight:350,height:"100%",boxShadow:"8px 8px 5px #222424",borderRadius:"10px"},media:{height:0,paddingTop:"56.25%"},expand:{transform:"rotate(0deg)",marginLeft:"auto",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest})},expandOpen:{transform:"rotate(180deg)"},avatar:{backgroundColor:ae.a[500]}}}));function ie(e){var a=oe(),t=r.a.useState(!1),n=Object(X.a)(t,2),o=n[0],i=n[1];return r.a.createElement(I.a,{theme:re},r.a.createElement(b.a,{className:a.root,style:{backgroundColor:"#2b2d2d"}},r.a.createElement(E.a,null,r.a.createElement(w.a,{paragraph:!0,align:"left"},e.text),r.a.createElement(Z.a,{textAlign:"center"},r.a.createElement(ee.a,{className:Object(Y.a)(a.expand,Object(Q.a)({},a.expandOpen,o)),onClick:function(){i(!o)},"aria-expanded":o,"aria-label":"show more",color:"primary"},r.a.createElement(ne.a,null)))),r.a.createElement(_.a,{in:o,timeout:"auto",unmountOnExit:!0},r.a.createElement(v.a,{align:"left"},r.a.createElement(w.a,{paragraph:!0},"Method:"),r.a.createElement(w.a,{paragraph:!0},"Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10 minutes."),r.a.createElement(w.a,{paragraph:!0},"Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken and chorizo in the pan. Add piment\xf3n, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil."),r.a.createElement(w.a,{paragraph:!0},"Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook again without stirring, until mussels have opened and rice is just tender, 5 to 7 minutes more. (Discard any mussels that don\u2019t open.)"),r.a.createElement(w.a,null,"Set aside off of the heat to let rest for 10 minutes, and then serve.")))))}function le(e){return console.log(e.info.id),r.a.createElement(W.a,{container:!0,direction:"row",spacing:3,alignItems:"center",style:{paddingTop:"5%",paddingBottom:"5%"}},r.a.createElement(W.a,{item:!0,xs:12,sm:12,md:4,lg:4},r.a.createElement(K,{topics:["Ashish","asas","asdasdas","arwef","ASD","ASDASD","EFAFEF","ASEFGAVG"],name:e.info.name,company:e.info.company,avatarUrl:e.info.avatarUrl})),r.a.createElement(W.a,{item:!0,xs:12,sm:12,md:8,lg:8},r.a.createElement(ie,{text:e.info.repository.object.text})))}function ce(){var e=Object(d.a)(['\n  query{\n\tviewer{\n    id\n    url\n    name\n    avatarUrl\n    bio\n   \tcompany\n    repository(name:"ashuprabhune"){\n      id\n      object(expression: "master:README.md") {\n      ... on Blob {\n        text\n      }\n      }\n    }\n\n\n  }\n}\n']);return ce=function(){return e},e}function se(){var e=Object(d.a)(['\nquery  {\n    viewer {\n        id\n      pinnedItems(first: 3) {\n        edges {\n          node {\n            ... on Repository {\n              id\n              name\n              description\n              homepageUrl\n              pushedAt\n              url\n              openGraphImageUrl\n              usesCustomOpenGraphImage\n              refs(refPrefix: "refs/heads/", last: 3) {\n                nodes {\n                  name\n                  target {\n                    ... on Commit {\n                      history {\n                        totalCount\n                      }\n                      messageHeadline\n                      pushedDate\n                    }\n                  }\n                }\n              }\n              repositoryTopics(first: 100) {\n                edges {\n                  node {\n                    topic {\n                      name\n                    }\n                  }\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n']);return se=function(){return e},e}var me=Object(u.a)(se()),de=Object(u.a)(ce()),pe=function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(){return Object(l.a)(this,t),a.apply(this,arguments)}return Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(W.a,{container:!0,alignItems:"center",style:{paddingLeft:"20%",paddingRight:"20%",paddingTop:"5%",paddingBottom:"5%"}},r.a.createElement(p.a,{query:de,key:"1"},(function(e){var a=e.loading,t=e.error,n=e.data;return r.a.createElement(q,null,a&&r.a.createElement("div",null,"Loading..."),t&&r.a.createElement("div",null,"Error..."),n&&r.a.createElement(le,{info:n.viewer}))})),r.a.createElement(W.a,{container:!0,direction:"row",spacing:3,alignItems:"center",style:{paddingTop:"5%",paddingBottom:"5%"}},r.a.createElement(p.a,{query:me},(function(e){var a=e.loading,t=e.error,n=e.data;return r.a.createElement(q,null,a&&r.a.createElement("div",null,"Loading..."),t&&r.a.createElement("div",null,"Error..."),n&&r.a.createElement(G,{pinnedItems:n.viewer.pinnedItems.edges}))}))))}}]),t}(n.Component),ue=function(){return r.a.createElement(q,null,r.a.createElement(pe,null))},he=t(80),ge=t(53),fe=t(17),be=t(115),ye=new ge.createHttpLink({uri:"https://api.github.com/graphql"}),Ee="bde4eac2ebfd0a494d5ddcc6dbe69fa42c177e18",ve=function(e){var a=Object(be.a)((function(e,a){var t=a.headers;return{headers:Object(he.a)(Object(he.a)({},t),{},{authorization:"Bearer ".concat(Ee)})}})),t=new ge.ApolloClient({link:a.concat(ye),cache:new ge.InMemoryCache});return r.a.createElement(fe.a,{client:t},e.children)};var we=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(ve,null,r.a.createElement(ue,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(we,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[130,1,2]]]);
//# sourceMappingURL=main.3acafed1.chunk.js.map