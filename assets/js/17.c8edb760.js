(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{545:function(e,t,n){"use strict";n.r(t);n(244),n(87);var r={mounted:function(){this.reverse(),this.WatchClick()},methods:{reverse:function(){var e=setInterval((function(){var t=document.getElementsByClassName("sidebar-group-items")[0];if(t){for(var n=t.childNodes,r=n.length-1;r>=0;r--)t.append(n[r]);clearInterval(e)}}),100)},WatchClick:function(){var e=this,t=setInterval((function(){var n=document.getElementsByClassName("sidebar-group");if(n){for(var r=0;r<n.length;r++)n[r].addEventListener("click",(function(){e.reverse()}));clearInterval(t)}}),100)}}},a=n(15),s=Object(a.a)(r,(function(){var e=this.$createElement;return(this._self._c||e)("div")}),[],!1,null,null,null);t.default=s.exports}}]);