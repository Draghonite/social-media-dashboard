(function(e){function o(o){for(var r,l,c=o[0],s=o[1],n=o[2],w=0,v=[];w<c.length;w++)l=c[w],Object.prototype.hasOwnProperty.call(a,l)&&a[l]&&v.push(a[l][0]),a[l]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);u&&u(o);while(v.length)v.shift()();return i.push.apply(i,n||[]),t()}function t(){for(var e,o=0;o<i.length;o++){for(var t=i[o],r=!0,c=1;c<t.length;c++){var s=t[c];0!==a[s]&&(r=!1)}r&&(i.splice(o--,1),e=l(l.s=t[0]))}return e}var r={},a={app:0},i=[];function l(o){if(r[o])return r[o].exports;var t=r[o]={i:o,l:!1,exports:{}};return e[o].call(t.exports,t,t.exports,l),t.l=!0,t.exports}l.m=e,l.c=r,l.d=function(e,o,t){l.o(e,o)||Object.defineProperty(e,o,{enumerable:!0,get:t})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,o){if(1&o&&(e=l(e)),8&o)return e;if(4&o&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(l.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&o&&"string"!=typeof e)for(var r in e)l.d(t,r,function(o){return e[o]}.bind(null,r));return t},l.n=function(e){var o=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(o,"a",o),o},l.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)},l.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=o,c=c.slice();for(var n=0;n<c.length;n++)o(c[n]);var u=s;i.push([0,"chunk-vendors"]),t()})({0:function(e,o,t){e.exports=t("cd49")},5295:function(e,o,t){"use strict";t("5411")},5411:function(e,o,t){},cd49:function(e,o,t){"use strict";t.r(o);t("e260"),t("e6cf"),t("cca6"),t("a79d");var r=t("7a23");function a(e,o,t,a,i,l){var c=Object(r["o"])("app-dashboard");return Object(r["k"])(),Object(r["c"])(c)}var i=t("d4ec"),l=t("262e"),c=t("2caf"),s=t("9ab4"),n=t("ce1f"),u=(t("4e82"),Object(r["f"])("div",{class:"top-part"},null,-1)),w={class:"content"},v={key:0,class:"social-cards cards"},O={key:1},h=Object(r["f"])("h2",null,"Overview - Today",-1),f={class:"social-overview-cards cards"};function b(e,o,t,a,i,l){var c=Object(r["o"])("app-header"),s=Object(r["o"])("social-card"),n=Object(r["o"])("social-overview-card");return Object(r["k"])(),Object(r["e"])("div",{class:Object(r["j"])(["dashboard theme",e.appTheme])},[u,Object(r["f"])("div",w,[Object(r["h"])(c,{theme:e.theme,followers:e.followers,onThemeChanged:e.setTheme},null,8,["theme","followers","onThemeChanged"]),e.socialNetworkProfiles?(Object(r["k"])(),Object(r["e"])("div",v,[(Object(r["k"])(!0),Object(r["e"])(r["a"],null,Object(r["n"])(e.socialNetworkProfiles.sort((function(o,t){return e.socialCardsSortOrder[o.SocialNetworkName]-e.socialCardsSortOrder[t.SocialNetworkName]})),(function(e){return Object(r["k"])(),Object(r["c"])(s,{key:e,social:e},null,8,["social"])})),128))])):Object(r["d"])("",!0),e.socialNetworkProfiles?(Object(r["k"])(),Object(r["e"])("div",O,[h,Object(r["f"])("div",f,[(Object(r["k"])(!0),Object(r["e"])(r["a"],null,Object(r["n"])(e.socialOverview,(function(e){return Object(r["k"])(),Object(r["c"])(n,{key:e,overview:e},null,8,["overview"])})),128))])])):Object(r["d"])("",!0)])],2)}t("d3b7"),t("25f0"),t("4de4");var d=Object(r["f"])("h1",null,"Social Media Dashboard",-1),p={class:"theme-switcher"},k=["value"];function m(e,o,t,a,i,l){return Object(r["k"])(),Object(r["e"])("header",null,[Object(r["f"])("div",null,[d,Object(r["f"])("h2",null,"Total Followers: "+Object(r["p"])(e.totalFollowers),1)]),Object(r["f"])("div",p,[Object(r["f"])("label",{onClick:o[0]||(o[0]=function(){return e.toggleTheme&&e.toggleTheme.apply(e,arguments)}),for:"theme-chooser"},"Dark Mode"),Object(r["f"])("input",{id:"theme-chooser",value:e.currentTheme,onChange:o[1]||(o[1]=function(){return e.onThemeChanged&&e.onThemeChanged.apply(e,arguments)}),type:"range",min:"1","aria-valuemin":"1",max:"2","aria-valuemax":"2","aria-label":"Theme Options"},null,40,k)])])}t("a9e3"),t("ac1f"),t("00b4");var g=Object(r["i"])({props:{followers:Number,theme:null},computed:{currentTheme:function(){return/dark/.test(this.$props.theme)?1:2},totalFollowers:function(){var e;return null===(e=this.followers)||void 0===e?void 0:e.toLocaleString()}},setup:function(e,o){var t=o.emit,r=function(e){t("themeChanged",2==+e.target.value?"light":"dark")},a=function(){t("themeChanged",/light/.test(e.theme)?"dark":"light")};return{toggleTheme:a,onThemeChanged:r}}}),j=t("6b0d"),N=t.n(j);const S=N()(g,[["render",m]]);var L=S,P={class:"card-header"},V={class:"user-name"},C={class:"followers"},y={class:"value"},F={class:"label"};function T(e,o,t,a,i,l){return Object(r["k"])(),Object(r["e"])("div",{class:Object(r["j"])(["social-card card",e.socialColor])},[Object(r["f"])("div",P,[Object(r["f"])("span",{class:Object(r["j"])(["logo",e.social.SocialNetworkLogo])},null,2),Object(r["f"])("span",V,Object(r["p"])(e.social.Username),1)]),Object(r["f"])("div",C,[Object(r["f"])("span",y,Object(r["p"])(e.formatNumber(e.social.Followers)),1),Object(r["f"])("span",F,Object(r["p"])(e.social.FollowersDisplay),1)]),Object(r["f"])("div",{class:Object(r["j"])(["change",e.followersChangeStyle])},[Object(r["f"])("span",{class:Object(r["j"])(["icon",e.followersChangeIcon])},null,2),Object(r["g"])(" "+Object(r["p"])(Math.abs(e.followersChangeAmount))+" Today ",1)],2)],2)}var I=Object(r["i"])({props:{social:{type:Object,required:!0}},setup:function(e){var o=function(e){return e&&0!==e?e>=1e4&&e<=999999?e/1e3+"k":e>=1e6?e/1e6+"m":e.toString():"0"};return{formatNumber:o}},computed:{followersChangeIcon:function(){return this.followersChangeAmount>0?"icon-arrow-up":"icon-arrow-down"},followersChangeStyle:function(){return this.followersChangeAmount>0?"change-up":"change-down"},followersChangeAmount:function(){return this.social.Followers-this.social.FollowersPrevious},socialColor:function(){return/facebook/i.test(this.social.SocialNetworkName)?"facebook":/insta/i.test(this.social.SocialNetworkName)?"instagram":/twitter/i.test(this.social.SocialNetworkName)?"twitter":/youtube/i.test(this.social.SocialNetworkName)?"youtube":""}}});const U=N()(I,[["render",T]]);var M=U,R={class:"social-overview-card card"},x={class:"card-header"},D={class:"field-name"},_={class:"card-body"},A={class:"field-value"};function E(e,o,t,a,i,l){return Object(r["k"])(),Object(r["e"])("div",R,[Object(r["f"])("div",x,[Object(r["f"])("span",D,Object(r["p"])(e.overview.OverviewField),1),Object(r["f"])("span",{class:Object(r["j"])(["logo",e.overview.SocialNetworkLogo])},null,2)]),Object(r["f"])("div",_,[Object(r["f"])("span",A,Object(r["p"])(e.overview.OverviewValue),1),Object(r["f"])("div",{class:Object(r["j"])(["change",e.changeStyle])},[Object(r["f"])("span",{class:Object(r["j"])(["icon",e.changeIcon])},null,2),Object(r["g"])(" "+Object(r["p"])(e.overview.OverviewValueChange)+"% ",1)],2)])])}var Y=Object(r["i"])({props:{overview:{type:Object,required:!0}},setup:function(e){return{}},computed:{changeIcon:function(){return this.overview.OverviewValueChangeIsUp?"icon-arrow-up":"icon-arrow-down"},changeStyle:function(){return this.overview.OverviewValueChangeIsUp?"change-up":"change-down"},socialColor:function(){return/facebook/i.test(this.overview.SocialNetworkName)?"facebook":/insta/i.test(this.overview.SocialNetworkName)?"instagram":/twitter/i.test(this.overview.SocialNetworkName)?"twitter":/youtube/i.test(this.overview.SocialNetworkName)?"youtube":""}}});const W=N()(Y,[["render",E]]);var q=W,B=Object(r["i"])({components:{AppHeader:L,SocialCard:M,SocialOverviewCard:q},setup:function(){var e=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light",o=Object(r["m"])(e),t=Object(r["m"])(23004),a=function(e){return e&&0!==e?e>=1e4&&e<=999999?e/1e3+"k":e>=1e6?e/1e6+"m":e.toString():"0"},i={Facebook:0,Twitter:1,Instagram:2,YouTube:3},l={Facebook:0,Instagram:1,Twitter:2,YouTube:3},c=[{SocialNetworkName:"Facebook",SocialNetworkLogo:"icon-facebook",Username:"@nathanf",Followers:1987,FollowersPrevious:1975,FollowersDisplay:"FOLLOWERS",Likes:52,LikesPrevious:52/.98,PageViews:87,PageViewsPrevious:87/1.03},{SocialNetworkName:"Instagram",SocialNetworkLogo:"icon-instagram",Username:"@realnathanf",Followers:11e3,FollowersPrevious:9901,FollowersDisplay:"FOLLOWERS",Likes:5462,LikesPrevious:5462/22.57,ProfileViews:52e3,ProfileViewsPrevious:52e3/13.75},{SocialNetworkName:"Twitter",SocialNetworkLogo:"icon-twitter",Username:"@nathanf",Followers:1044,FollowersPrevious:945,FollowersDisplay:"FOLLOWERS",Likes:507,LikesPrevious:507/5.53,Retweets:117,RetweetsPrevious:117/3.03},{SocialNetworkName:"YouTube",SocialNetworkLogo:"icon-youtube",Username:"Nathan F.",Followers:8239,FollowersPrevious:8383,FollowersDisplay:"SUBSCRIBERS",Likes:107,LikesPrevious:107/.81,TotalViews:1407,TotalViewsPrevious:1407/.88}],s=[],n=c.filter((function(e){return"Facebook"===e.SocialNetworkName}))[0];n&&(s.push({SocialNetworkName:n.SocialNetworkName,SocialNetworkLogo:n.SocialNetworkLogo,OverviewField:"Page Views",OverviewValue:n.PageViews,OverviewValueChange:Math.ceil(Math.abs(n.PageViews-n.PageViewsPrevious)),OverviewValueChangeIsUp:n.PageViews-n.PageViewsPrevious>0}),s.push({SocialNetworkName:n.SocialNetworkName,SocialNetworkLogo:n.SocialNetworkLogo,OverviewField:"Likes",OverviewValue:n.Likes,OverviewValueChange:Math.floor(Math.abs(n.Likes-n.LikesPrevious)/n.LikesPrevious*100),OverviewValueChangeIsUp:n.Likes-n.LikesPrevious>0}));var u=c.filter((function(e){return"Instagram"===e.SocialNetworkName}))[0];u&&(s.push({SocialNetworkName:u.SocialNetworkName,SocialNetworkLogo:u.SocialNetworkLogo,OverviewField:"Likes",OverviewValue:u.Likes,OverviewValueChange:2257,OverviewValueChangeIsUp:u.Likes-u.LikesPrevious>0}),s.push({SocialNetworkName:u.SocialNetworkName,SocialNetworkLogo:u.SocialNetworkLogo,OverviewField:"Profile Views",OverviewValue:a(u.ProfileViews),OverviewValueChange:1375,OverviewValueChangeIsUp:u.ProfileViews-u.ProfileViewsPrevious>0}));var w=c.filter((function(e){return"Twitter"===e.SocialNetworkName}))[0];w&&(s.push({SocialNetworkName:w.SocialNetworkName,SocialNetworkLogo:w.SocialNetworkLogo,OverviewField:"Retweets",OverviewValue:w.Retweets,OverviewValueChange:303,OverviewValueChangeIsUp:w.Retweets-w.RetweetsPrevious>0}),s.push({SocialNetworkName:w.SocialNetworkName,SocialNetworkLogo:w.SocialNetworkLogo,OverviewField:"Likes",OverviewValue:w.Likes,OverviewValueChange:553,OverviewValueChangeIsUp:w.Likes-w.LikesPrevious>0}));var v=c.filter((function(e){return"YouTube"===e.SocialNetworkName}))[0];u&&(s.push({SocialNetworkName:v.SocialNetworkName,SocialNetworkLogo:v.SocialNetworkLogo,OverviewField:"Likes",OverviewValue:v.Likes,OverviewValueChange:19,OverviewValueChangeIsUp:v.Likes-v.LikesPrevious>0}),s.push({SocialNetworkName:v.SocialNetworkName,SocialNetworkLogo:v.SocialNetworkLogo,OverviewField:"Total Views",OverviewValue:v.TotalViews,OverviewValueChange:12,OverviewValueChangeIsUp:v.TotalViews-v.TotalViewsPrevious>0}));var O=function(e){o.value=e};return{theme:o,followers:t,socialNetworkProfiles:c,socialCardsSortOrder:i,socialOverviewSortOrder:l,socialOverview:s,setTheme:O,formatNumber:a}},computed:{appTheme:function(){return"theme-".concat(this.theme)}}});const J=N()(B,[["render",b]]);var H=J,$=function(e){Object(l["a"])(t,e);var o=Object(c["a"])(t);function t(){return Object(i["a"])(this,t),o.apply(this,arguments)}return t}(n["b"]);$=Object(s["a"])([Object(n["a"])({components:{"app-dashboard":H}})],$);var z=$;t("5295");const G=N()(z,[["render",a]]);var K=G;Object(r["b"])(K).mount("#app")}});
//# sourceMappingURL=app.e96f4445.js.map