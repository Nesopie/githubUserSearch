(this["webpackJsonpgithub-user-search"]=this["webpackJsonpgithub-user-search"]||[]).push([[0],{12:function(e,t,c){},15:function(e,t,c){"use strict";c.r(t);var i=c(1),a=c.n(i),n=c(6),r=c.n(n),s=(c(12),c(3)),l=c.n(s),o=c(7),d=c(5),j=c.p+"static/media/icon-moon.cce754ce.svg",b=c(0),u=function(){return Object(b.jsxs)("header",{children:[Object(b.jsx)("div",{className:"title",children:"devfinder"}),Object(b.jsxs)("div",{className:"preferenceWrapper",children:[Object(b.jsx)("div",{className:"colorPreference",children:"Light"}),Object(b.jsx)("img",{className:"preferenceIcon",src:j,alt:"colorSchemePreferenceIcon"})]})]})},h=function(e){return Object(b.jsxs)("form",{onSubmit:e.getData,type:"search",children:[Object(b.jsx)("input",{type:"text",name:"userSearch",placeholder:"Search GitHub username..."}),Object(b.jsxs)("div",{className:"buttonContainer",children:[e.results?null:Object(b.jsx)("span",{id:"results",children:"No results"}),Object(b.jsx)("button",{type:"submit",children:"Search"})]})]})},m=function(e){var t;return t=e.profileName?Object(b.jsx)("div",{id:"profileName",children:e.profileName}):Object(b.jsx)("div",{id:"profileName",style:{color:"#697c9a",fontSize:"16px"},children:"This user has no name"}),Object(b.jsxs)("div",{className:"introContainer",children:[Object(b.jsx)("div",{className:"userProfilePic",children:Object(b.jsx)("img",{src:e.imgUrl,alt:"profile pic"})}),Object(b.jsxs)("div",{className:"about",children:[t,Object(b.jsx)("div",{id:"profileHandle",children:e.profileHandle}),Object(b.jsx)("div",{id:"dateOfJoin",children:e.dateOfJoin})]}),Object(b.jsx)("div",{id:"dateOfJoinDesktop",children:e.dateOfJoin})]})},O=function(e){var t;return t=e.bio?Object(b.jsx)("div",{children:e.bio}):Object(b.jsx)("div",{style:{color:"#697c9a"},children:"This user has no bio"}),Object(b.jsx)("div",{className:"bio",children:t})},p=function(e){return Object(b.jsxs)("div",{className:"aboutContainer",children:[Object(b.jsxs)("div",{className:"aboutInner",children:[Object(b.jsx)("div",{className:"innerTitle",children:"Repos"}),Object(b.jsx)("div",{className:"data",children:e.repoData})]}),Object(b.jsxs)("div",{className:"aboutInner",children:[Object(b.jsx)("div",{className:"innerTitle",children:"Followers"}),Object(b.jsx)("div",{className:"data",children:e.followers})]}),Object(b.jsxs)("div",{className:"aboutInner",children:[Object(b.jsx)("div",{className:"innerTitle",children:"Following"}),Object(b.jsx)("div",{className:"data",children:e.following})]})]})},f=function(e){var t,c,i,a;return t=e.location?Object(b.jsx)("div",{id:"location",children:e.location}):Object(b.jsx)("div",{id:"location",style:{color:"#697c9a"},children:"Not Available"}),c=e.blog?Object(b.jsx)("div",{id:"blog",children:e.blog}):Object(b.jsx)("div",{id:"blog",style:{color:"#697c9a"},children:"Not Available"}),i=e.twitterHandle?Object(b.jsx)("div",{id:"twitterHandle",children:e.twitterHandle}):Object(b.jsx)("div",{id:"twitterHandle",style:{color:"#697c9a"},children:"Not Available"}),a=e.company?Object(b.jsx)("div",{id:"company",children:e.company}):Object(b.jsx)("div",{id:"company",style:{color:"#697c9a"},children:"Not Available"}),Object(b.jsxs)("div",{className:"detailContainer",children:[t,c,i,a]})},x=function(e){return Object(b.jsxs)("div",{className:"cardContainer",children:[Object(b.jsx)("div",{className:"desktopProfilePicture",children:Object(b.jsx)("img",{src:e.imgUrl,alt:"profile pic"})}),Object(b.jsxs)("div",{className:"card",children:[Object(b.jsx)(m,{imgUrl:e.imgUrl,profileName:e.profileName,profileHandle:e.profileHandle,dateOfJoin:e.dateOfJoin}),Object(b.jsx)(O,{desc:e.desc,bio:e.bio}),Object(b.jsx)(p,{repoData:e.repoData,followers:e.followers,following:e.following}),Object(b.jsx)(f,{location:e.location,blog:e.blog,twitter:e.twitterHandle,company:e.company})]})]})},v=c(4);var g=function(){var e=Object(i.useState)({name:"The Octocat",login:"octocat",created_at:"2011-01-25T18:44:36Z",avatar_url:"https://avatars.githubusercontent.com/u/583231?v=4",public_repos:8,followers:4094,following:9,bio:null,location:"San Francisco",blog:"https://github/blog",twitter_username:null,company:"@github"}),t=Object(d.a)(e,2),c=t[0],a=t[1],n=Object(i.useState)(!0),r=Object(d.a)(n,2),s=r[0],j=r[1];function m(){return(m=Object(o.a)(l.a.mark((function e(t){var c,i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.github.com/users/".concat(t));case 2:if(404!==(c=e.sent).status&&400!==c.status){e.next=7;break}j(!1),e.next=12;break;case 7:return j(!0),e.next=10,c.json();case 10:i=e.sent,a(i);case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)(u,{}),Object(b.jsx)(h,{results:s,getData:function(e){e.preventDefault();var t=e.target;!function(e){m.apply(this,arguments)}(t.querySelector("input").value),t.reset()}}),Object(b.jsx)(x,{profileName:c.name,profileHandle:"@"+c.login,imgUrl:c.avatar_url,dateOfJoin:"Joined ".concat(v.DateTime.fromISO(c.created_at).toLocaleString(v.DateTime.DATE_MED)),bio:c.bio,repoData:c.public_repos,followers:c.followers,following:c.following,location:c.location,blog:c.blog,twitterHandle:c.twitter_username,company:c.company})]})};r.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(g,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.b84b721a.chunk.js.map