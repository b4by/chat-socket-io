!function(e){function n(n){for(var r,s,c=n[0],i=n[1],u=n[2],d=0,f=[];d<c.length;d++)s=c[d],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&f.push(o[s][0]),o[s]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);for(l&&l(n);f.length;)f.shift()();return a.push.apply(a,u||[]),t()}function t(){for(var e,n=0;n<a.length;n++){for(var t=a[n],r=!0,c=1;c<t.length;c++){var i=t[c];0!==o[i]&&(r=!1)}r&&(a.splice(n--,1),e=s(s.s=t[0]))}return e}var r={},o={0:0},a=[];function s(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,s),t.l=!0,t.exports}s.m=e,s.c=r,s.d=function(e,n,t){s.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,n){if(1&n&&(e=s(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(s.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)s.d(t,r,function(n){return e[n]}.bind(null,r));return t},s.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(n,"a",n),n},s.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},s.p="";var c=window.webpackJsonp=window.webpackJsonp||[],i=c.push.bind(c);c.push=n,c=c.slice();for(var u=0;u<c.length;u++)n(c[u]);var l=i;a.push([121,1]),t()}({121:function(e,n,t){t(122),e.exports=t(308)},308:function(e,n,t){"use strict";t.r(n);t(309);window.addEventListener("DOMContentLoaded",(function(){var e=io(),n=document.getElementById("page-login"),t=document.getElementById("username-form"),r=document.getElementById("username-input"),o=document.getElementById("users-list");t.addEventListener("submit",(function(t){t.preventDefault();var o=r.value;o.trim()&&(e.emit("new user",o),n.style.display="none")}));var a=function(e,n){var t=function(n){return'\n      <li class="chat__message notify">\n        <div class="notify__content">'.concat(e.username," ").concat(n,"</div>\n      </li>\n    ")};i.innerHTML+=t(n),i.scrollTop=i.scrollHeight},s=document.getElementById("send-message__form"),c=document.getElementById("send-message__input"),i=document.getElementById("chat-container");s.addEventListener("submit",(function(n){n.preventDefault();var t=c.value;t.trim()&&(e.emit("add message",t),c.value="")}));e.on("user disconnected",(function(e){a(e,"has left the chat")})),e.on("user joined",(function(e){a(e,"joined the chat"),function(e){var n='\n    <li class="sidebar__user user" data-socketId="'.concat(e.socketId,'">\n      <img class="user__img" src="').concat(e.avatar.path,'" alt="').concat(e.avatar.name,'">\n      <div class="user__info">\n        <span class="user__name">').concat(e.username,"</span>\n      </div>\n    </li>\n    ");o.innerHTML+=n}(e)})),e.on("new message",(function(e){!function(e){var n='\n    <li class="chat__message message">\n      <div class="message__username" style=\'color:'.concat(e.color,"'\">").concat(e.username,'</div>\n      <div class="message__content">').concat(e.message,'</div>\n      <div class="message__date">').concat((new Date).getHours(),":").concat((new Date).getMinutes()<10?"0"+(new Date).getMinutes():""+(new Date).getMinutes()," </div>\n    </li>\n    ");i.innerHTML+=n,i.scrollTop=i.scrollHeight}(e)}))}))},309:function(e,n,t){}});