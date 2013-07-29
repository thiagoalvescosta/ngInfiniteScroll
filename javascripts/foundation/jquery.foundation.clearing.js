/*
 * jQuery Foundation Clearing 1.2.1
 * http://foundation.zurb.com
 * Copyright 2012, ZURB
 * Free to use under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
*/
!function(i,t,e){"use strict";var n={templates:{viewing:'<a href="#" class="clearing-close">&times;</a><div class="visible-img" style="display: none"><img src="#"><p class="clearing-caption"></p><a href="#" class="clearing-main-left"></a><a href="#" class="clearing-main-right"></a></div>'},close_selectors:"a.clearing-close",initialized:!1,locked:!1},a={init:function(){return this.find("ul[data-clearing]").each(function(){var t=(i(e),i(this)),r=r||{},s=t.data("fndtn.clearing.settings");s||(r.$parent=t.parent(),t.data("fndtn.clearing.settings",i.extend({},n,r)),a.assemble(t.find("li")),n.initialized||(a.events(t),Modernizr.touch&&a.swipe_events()))})},events:function(r){var s=r.data("fndtn.clearing.settings");i(e).on("click.fndtn.clearing","ul[data-clearing] li",function(t,e,n){var e=e||i(this),n=n||e,r=e.parent().data("fndtn.clearing.settings");t.preventDefault(),r||e.parent().foundationClearing(),a.open(i(t.target),e,n),a.update_paddles(n)}).on("click.fndtn.clearing",".clearing-main-right",function(i){a.nav(i,"next")}).on("click.fndtn.clearing",".clearing-main-left",function(i){a.nav(i,"prev")}).on("click.fndtn.clearing",s.close_selectors,this.close).on("keydown.fndtn.clearing",this.keydown),i(t).on("resize.fndtn.clearing",this.resize),n.initialized=!0},swipe_events:function(){i(e).bind("swipeleft","ul[data-clearing]",function(i){a.nav(i,"next")}).bind("swiperight","ul[data-clearing]",function(i){a.nav(i,"prev")}).bind("movestart","ul[data-clearing]",function(i){(i.distX>i.distY&&i.distX<-i.distY||i.distX<i.distY&&i.distX>-i.distY)&&i.preventDefault()})},assemble:function(i){var t=i.parent(),e=t.data("fndtn.clearing.settings"),n=t.detach(),a={grid:'<div class="carousel">'+this.outerHTML(n[0])+"</div>",viewing:e.templates.viewing},r='<div class="clearing-assembled"><div>'+a.viewing+a.grid+"</div></div>";return e.$parent.append(r)},open:function(i,t,e){var n=e.closest(".clearing-assembled"),r=n.find("div:first"),s=r.find(".visible-img"),l=s.find("img").not(i);a.locked()||(l.attr("src",this.load(i)),l.loaded(function(){n.addClass("clearing-blackout"),r.addClass("clearing-container"),this.caption(s.find(".clearing-caption"),i),s.show(),this.fix_height(e),this.center(l),this.shift(t,e,function(){e.siblings().removeClass("visible"),e.addClass("visible")})}.bind(this)))},close:function(t){t.preventDefault();var e,a,r=function(i){return/blackout/.test(i.selector)?i:i.closest(".clearing-blackout")}(i(this));return this===t.target&&r&&(e=r.find("div:first"),a=e.find(".visible-img"),n.prev_index=0,r.find("ul[data-clearing]").attr("style",""),r.removeClass("clearing-blackout"),e.removeClass("clearing-container"),a.hide()),!1},keydown:function(t){var e=i(".clearing-blackout").find("ul[data-clearing]");39===t.which&&a.go(e,"next"),37===t.which&&a.go(e,"prev"),27===t.which&&i("a.clearing-close").trigger("click")},nav:function(t,e){var n=i(".clearing-blackout").find("ul[data-clearing]");t.preventDefault(),this.go(n,e)},resize:function(){var t=i(".clearing-blackout .visible-img").find("img");t.length>0&&a.center(t)},fix_height:function(t){var e=t.siblings();e.each(function(){var t=i(this),e=t.find("img");t.height()>e.outerHeight()&&t.addClass("fix-height")}).closest("ul").width(100*e.length+"%")},update_paddles:function(i){var t=i.closest(".carousel").siblings(".visible-img");i.next().length>0?t.find(".clearing-main-right").removeClass("disabled"):t.find(".clearing-main-right").addClass("disabled"),i.prev().length>0?t.find(".clearing-main-left").removeClass("disabled"):t.find(".clearing-main-left").addClass("disabled")},load:function(i){var t=i.parent().attr("href");return this.preload(i),t?t:i.attr("src")},preload:function(i){this.img(i.closest("li").next()),this.img(i.closest("li").prev())},img:function(i){if(i.length>0){var t=new Image,e=i.find("a");t.src=e.length>0?e.attr("href"):i.find("img").attr("src")}},caption:function(i,t){var e=t.data("caption");e?i.text(e).show():i.text("").hide()},go:function(i,t){var e=i.find(".visible"),n=e[t]();n.length>0&&n.find("img").trigger("click",[e,n])},shift:function(i,t,e){var a,r=t.parent(),s=n.prev_index,l=this.direction(r,i,t),c=parseInt(r.css("left"),10),o=t.outerWidth();t.index()===s||/skip/.test(l)?/skip/.test(l)&&(a=t.index()-n.up_count,this.lock(),a>0?r.animate({left:-(a*o)},300,this.unlock):r.animate({left:0},300,this.unlock)):/left/.test(l)?(this.lock(),r.animate({left:c+o},300,this.unlock)):/right/.test(l)&&(this.lock(),r.animate({left:c-o},300,this.unlock)),e()},lock:function(){n.locked=!0},unlock:function(){n.locked=!1},locked:function(){return n.locked},direction:function(t,e,a){var r,s=t.find("li"),l=s.outerWidth()+s.outerWidth()/4,c=Math.floor(i(".clearing-container").outerWidth()/l)-1,o=s.index(a);return n.up_count=c,r=this.adjacent(n.prev_index,o)?o>c&&o>n.prev_index?"right":o>c-1&&o<=n.prev_index?"left":!1:"skip",n.prev_index=o,r},adjacent:function(i,t){for(var e=t+1;e>=t-1;e--)if(e===i)return!0;return!1},center:function(i){i.css({marginLeft:-(i.outerWidth()/2),marginTop:-(i.outerHeight()/2)})},outerHTML:function(i){return i.outerHTML||(new XMLSerializer).serializeToString(i)}};i.fn.foundationClearing=function(t){return a[t]?a[t].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof t&&t?(i.error("Method "+t+" does not exist on jQuery.foundationClearing"),void 0):a.init.apply(this,arguments)},function(i){i.fn.loaded=function(t,e){function n(){l-=1,!l&&t()}function a(){if(this.one("load",n),i.browser.msie){var t=this.attr("src"),e=t.match(/\?/)?"&":"?";e+=r.cachePrefix+"="+(new Date).getTime(),this.attr("src",t+e)}}var r=i.extend({},i.fn.loaded.defaults,e),s=this.find("img").add(this.filter("img")),l=s.length;return s.each(function(){var t=i(this);return t.attr("src")?(this.complete||4===this.readyState?n():a.call(t),void 0):(n(),void 0)})},i.fn.loaded.defaults={cachePrefix:"random"}}(jQuery)}(jQuery,this,this.document);