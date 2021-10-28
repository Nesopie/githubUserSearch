(this["webpackJsonpgithub-user-search"]=this["webpackJsonpgithub-user-search"]||[]).push([[0],{12:function(e,t,c){},15:function(e,t,c){"use strict";c.r(t);var i=c(1),a=c.n(i),n=c(6),r=c.n(n),s=(c(12),c(3)),l=c.n(s),o=c(7),d=c(5),j=c.p+"static/media/icon-moon.049cb540.svg",b=c.p+"static/media/icon-sun.f28a8996.svg",u=c(0),m=function(){return Object(u.jsxs)("header",{children:[Object(u.jsx)("div",{className:"title",children:"devfinder"}),Object(u.jsxs)("div",{className:"preferenceWrapper",children:[Object(u.jsx)("div",{className:"colorPreference",children:"Light"}),Object(u.jsx)("img",{onClick:function(e){var t=document.documentElement.getAttribute("data-theme"),c=document.querySelector(".preferenceIcon"),i=document.querySelector(".colorPreference");"dark"===t?(document.documentElement.setAttribute("data-theme","light"),c.src=j,i.innerText="Dark"):(document.documentElement.setAttribute("data-theme","dark"),c.src=b,i.innerText="Light")},className:"preferenceIcon",src:b,alt:"colorSchemePreferenceIcon"})]})]})},h=function(e){return Object(u.jsxs)("form",{onSubmit:e.getData,type:"search",children:[Object(u.jsx)("input",{type:"text",name:"userSearch",placeholder:"Search GitHub username..."}),Object(u.jsxs)("div",{className:"buttonContainer",children:[e.results?null:Object(u.jsx)("span",{id:"results",children:"No results"}),Object(u.jsx)("button",{type:"submit",children:"Search"})]})]})},O=function(e){var t;return t=e.profileName?Object(u.jsx)("div",{id:"profileName",children:e.profileName}):Object(u.jsx)("div",{id:"profileName",style:{color:"#697c9a",fontSize:"16px"},children:"This user has no name"}),Object(u.jsxs)("div",{className:"introContainer",children:[Object(u.jsx)("div",{className:"userProfilePic",children:Object(u.jsx)("img",{src:e.imgUrl,alt:"profile pic"})}),Object(u.jsxs)("div",{className:"about",children:[t,Object(u.jsx)("div",{id:"profileHandle",children:e.profileHandle}),Object(u.jsx)("div",{id:"dateOfJoin",children:e.dateOfJoin})]}),Object(u.jsx)("div",{id:"dateOfJoinDesktop",children:e.dateOfJoin})]})},p=function(e){var t;return t=e.bio?Object(u.jsx)("div",{children:e.bio}):Object(u.jsx)("div",{style:{color:"#697c9a"},children:"This user has no bio"}),Object(u.jsx)("div",{className:"bio",children:t})},f=function(e){return Object(u.jsxs)("div",{className:"aboutContainer",children:[Object(u.jsxs)("div",{className:"aboutInner",children:[Object(u.jsx)("div",{className:"innerTitle",children:"Repos"}),Object(u.jsx)("div",{className:"data",children:e.repoData})]}),Object(u.jsxs)("div",{className:"aboutInner",children:[Object(u.jsx)("div",{className:"innerTitle",children:"Followers"}),Object(u.jsx)("div",{className:"data",children:e.followers})]}),Object(u.jsxs)("div",{className:"aboutInner",children:[Object(u.jsx)("div",{className:"innerTitle",children:"Following"}),Object(u.jsx)("div",{className:"data",children:e.following})]})]})},x=function(e){var t,c,i,a;return t=e.location?Object(u.jsx)("div",{id:"location",children:e.location}):Object(u.jsx)("div",{id:"location",style:{color:"#697c9a"},children:"Not Available"}),c=e.blog?Object(u.jsx)("div",{id:"blog",children:e.blog}):Object(u.jsx)("div",{id:"blog",style:{color:"#697c9a"},children:"Not Available"}),i=e.twitterHandle?Object(u.jsx)("div",{id:"twitterHandle",children:e.twitterHandle}):Object(u.jsx)("div",{id:"twitterHandle",style:{color:"#697c9a"},children:"Not Available"}),a=e.company?Object(u.jsx)("div",{id:"company",children:e.company}):Object(u.jsx)("div",{id:"company",style:{color:"#697c9a"},children:"Not Available"}),Object(u.jsxs)("div",{className:"detailContainer",children:[t,c,i,a]})},v=function(e){return Object(u.jsxs)("div",{className:"cardContainer",children:[Object(u.jsx)("div",{className:"desktopProfilePicture",children:Object(u.jsx)("img",{src:e.imgUrl,alt:"profile pic"})}),Object(u.jsxs)("div",{className:"card",children:[Object(u.jsx)(O,{imgUrl:e.imgUrl,profileName:e.profileName,profileHandle:e.profileHandle,dateOfJoin:e.dateOfJoin}),Object(u.jsx)(p,{desc:e.desc,bio:e.bio}),Object(u.jsx)(f,{repoData:e.repoData,followers:e.followers,following:e.following}),Object(u.jsx)(x,{location:e.location,blog:e.blog,twitter:e.twitterHandle,company:e.company})]})]})},g=c(4);var N=function(){var e=Object(i.useState)({name:"The Octocat",login:"octocat",created_at:"2011-01-25T18:44:36Z",avatar_url:"https://avatars.githubusercontent.com/u/583231?v=4",public_repos:8,followers:4094,following:9,bio:null,location:"San Francisco",blog:"https://github/blog",twitter_username:null,company:"@github"}),t=Object(d.a)(e,2),c=t[0],a=t[1],n=Object(i.useState)(!0),r=Object(d.a)(n,2),s=r[0],j=r[1];function b(){return(b=Object(o.a)(l.a.mark((function e(t){var c,i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.github.com/users/".concat(t));case 2:if(404!==(c=e.sent).status&&400!==c.status){e.next=7;break}j(!1),e.next=12;break;case 7:return j(!0),e.next=10,c.json();case 10:i=e.sent,a(i);case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)(m,{}),Object(u.jsx)(h,{results:s,getData:function(e){e.preventDefault();var t=e.target;!function(e){b.apply(this,arguments)}(t.querySelector("input").value),t.reset()}}),Object(u.jsx)(v,{profileName:c.name,profileHandle:"@"+c.login,imgUrl:c.avatar_url,dateOfJoin:"Joined ".concat(g.DateTime.fromISO(c.created_at).toLocaleString(g.DateTime.DATE_MED)),bio:c.bio,repoData:c.public_repos,followers:c.followers,following:c.following,location:c.location,blog:c.blog,twitterHandle:c.twitter_username,company:c.company})]})};r.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(N,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.07347733.chunk.js.map