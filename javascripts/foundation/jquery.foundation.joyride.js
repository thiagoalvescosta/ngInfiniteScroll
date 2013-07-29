/*
 * jQuery Foundation Joyride Plugin 2.0.2
 * http://foundation.zurb.com
 * Copyright 2012, ZURB
 * Free to use under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
*/
!function(t,e,i){"use strict";var o={version:"2.0.1",tipLocation:"bottom",nubPosition:"auto",scrollSpeed:300,timer:0,startTimerOnClick:!0,startOffset:0,nextButton:!0,tipAnimation:"fade",pauseAfter:[],tipAnimationFadeSpeed:300,cookieMonster:!1,cookieName:"joyride",cookieDomain:!1,tipContainer:"body",postRideCallback:t.noop,postStepCallback:t.noop,template:{link:'<a href="#close" class="joyride-close-tip">X</a>',timer:'<div class="joyride-timer-indicator-wrap"><span class="joyride-timer-indicator"></span></div>',tip:'<div class="joyride-tip-guide"><span class="joyride-nub"></span></div>',wrapper:'<div class="joyride-content-wrapper"></div>',button:'<a href="#" class="small button joyride-next-tip"></a>'}},n=n||!1,r={},s={init:function(i){return this.each(function(){t.isEmptyObject(r)?(r=t.extend(o,i),r.document=e.document,r.$document=t(r.document),r.$window=t(e),r.$content_el=t(this),r.body_offset=t(r.tipContainer).position(),r.$tip_content=t("> li",r.$content_el),r.paused=!1,r.attempts=0,r.tipLocationPatterns={top:["bottom"],bottom:[],left:["right","top","bottom"],right:["left","top","bottom"]},s.jquery_check(),t.isFunction(t.cookie)||(r.cookieMonster=!1),r.cookieMonster&&t.cookie(r.cookieName)||(r.$tip_content.each(function(e){s.create({$li:t(this),index:e})}),!r.startTimerOnClick&&r.timer>0?(s.show("init"),s.startTimer()):s.show("init")),r.$document.on("click.joyride",".joyride-next-tip, .joyride-modal-bg",function(t){t.preventDefault(),r.$li.next().length<1?s.end():r.timer>0?(clearTimeout(r.automate),s.hide(),s.show(),s.startTimer()):(s.hide(),s.show())}),r.$document.on("click.joyride",".joyride-close-tip",function(t){t.preventDefault(),s.end()}),r.$window.bind("resize.joyride",function(){s.is_phone()?s.pos_phone():s.pos_default()})):s.restart()})},resume:function(){s.set_li(),s.show()},tip_template:function(e){var i,o;return e.tip_class=e.tip_class||"",i=t(r.template.tip).addClass(e.tip_class),o=t.trim(t(e.li).html())+s.button_text(e.button_text)+r.template.link+s.timer_instance(e.index),i.append(t(r.template.wrapper)),i.first().attr("data-index",e.index),t(".joyride-content-wrapper",i).append(o),i[0]},timer_instance:function(e){var i;return i=0===e&&r.startTimerOnClick&&r.timer>0||0===r.timer?"":s.outerHTML(t(r.template.timer)[0])},button_text:function(e){return r.nextButton?(e=t.trim(e)||"Next",e=s.outerHTML(t(r.template.button).append(e)[0])):e="",e},create:function(e){var i=e.$li.attr("data-button")||e.$li.attr("data-text"),o=e.$li.attr("class"),n=t(s.tip_template({tip_class:o,index:e.index,button_text:i,li:e.$li}));t(r.tipContainer).append(n)},show:function(e){var o,n,a={},p=[],l=0,d=null;if(r.$li===i||-1===t.inArray(r.$li.index(),r.pauseAfter))if(r.paused?r.paused=!1:s.set_li(e),r.attempts=0,r.$li.length&&r.$target.length>0){for(p=(r.$li.data("options")||":").split(";"),l=p.length,o=l-1;o>=0;o--)n=p[o].split(":"),2===n.length&&(a[t.trim(n[0])]=t.trim(n[1]));r.tipSettings=t.extend({},r,a),r.tipSettings.tipLocationPattern=r.tipLocationPatterns[r.tipSettings.tipLocation],/body/i.test(r.$target.selector)||s.scroll_to(),s.is_phone()?s.pos_phone(!0):s.pos_default(!0),d=t(".joyride-timer-indicator",r.$next_tip),/pop/i.test(r.tipAnimation)?(d.outerWidth(0),r.timer>0?(r.$next_tip.show(),d.animate({width:t(".joyride-timer-indicator-wrap",r.$next_tip).outerWidth()},r.timer)):r.$next_tip.show()):/fade/i.test(r.tipAnimation)&&(d.outerWidth(0),r.timer>0?(r.$next_tip.fadeIn(r.tipAnimationFadeSpeed),r.$next_tip.show(),d.animate({width:t(".joyride-timer-indicator-wrap",r.$next_tip).outerWidth()},r.timer)):r.$next_tip.fadeIn(r.tipAnimationFadeSpeed)),r.$current_tip=r.$next_tip}else r.$li&&r.$target.length<1?s.show():s.end();else r.paused=!0},is_phone:function(){return n?n.mq("only screen and (max-width: 767px)"):r.$window.width()<767?!0:!1},hide:function(){r.postStepCallback(r.$li.index(),r.$current_tip),t(".joyride-modal-bg").hide(),r.$current_tip.hide()},set_li:function(t){t?(r.$li=r.$tip_content.eq(r.startOffset),s.set_next_tip(),r.$current_tip=r.$next_tip):(r.$li=r.$li.next(),s.set_next_tip()),s.set_target()},set_next_tip:function(){r.$next_tip=t(".joyride-tip-guide[data-index="+r.$li.index()+"]")},set_target:function(){var e=r.$li.attr("data-class"),i=r.$li.attr("data-id"),o=function(){return i?t(r.document.getElementById(i)):e?t("."+e).first():t("body")};r.$target=o()},scroll_to:function(){var e,i;e=r.$window.height()/2,i=Math.ceil(r.$target.offset().top-e+r.$next_tip.outerHeight()),t("html, body").stop().animate({scrollTop:i},r.scrollSpeed)},paused:function(){return-1===t.inArray(r.$li.index()+1,r.pauseAfter)?!0:!1},destroy:function(){r.$document.off(".joyride"),t(e).off(".joyride"),t(".joyride-close-tip, .joyride-next-tip, .joyride-modal-bg").off(".joyride"),t(".joyride-tip-guide, .joyride-modal-bg").remove(),clearTimeout(r.automate),r={}},restart:function(){s.hide(),r.$li=i,s.show("init")},pos_default:function(e){var i=(Math.ceil(r.$window.height()/2),r.$next_tip.offset(),t(".joyride-nub",r.$next_tip)),o=Math.ceil(i.outerHeight()/2),n=e||!1;n&&(r.$next_tip.css("visibility","hidden"),r.$next_tip.show()),/body/i.test(r.$target.selector)?r.$li.length&&s.pos_modal(i):(s.bottom()?(r.$next_tip.css({top:r.$target.offset().top+o+r.$target.outerHeight(),left:r.$target.offset().left}),s.nub_position(i,r.tipSettings.nubPosition,"top")):s.top()?(r.$next_tip.css({top:r.$target.offset().top-r.$next_tip.outerHeight()-o,left:r.$target.offset().left}),s.nub_position(i,r.tipSettings.nubPosition,"bottom")):s.right()?(r.$next_tip.css({top:r.$target.offset().top,left:r.$target.outerWidth()+r.$target.offset().left}),s.nub_position(i,r.tipSettings.nubPosition,"left")):s.left()&&(r.$next_tip.css({top:r.$target.offset().top,left:r.$target.offset().left-r.$next_tip.outerWidth()-o}),s.nub_position(i,r.tipSettings.nubPosition,"right")),!s.visible(s.corners(r.$next_tip))&&r.attempts<r.tipSettings.tipLocationPattern.length&&(i.removeClass("bottom").removeClass("top").removeClass("right").removeClass("left"),r.tipSettings.tipLocation=r.tipSettings.tipLocationPattern[r.attempts],r.attempts++,s.pos_default(!0))),n&&(r.$next_tip.hide(),r.$next_tip.css("visibility","visible"))},pos_phone:function(e){var i=r.$next_tip.outerHeight(),o=(r.$next_tip.offset(),r.$target.outerHeight()),n=t(".joyride-nub",r.$next_tip),a=Math.ceil(n.outerHeight()/2),p=e||!1;n.removeClass("bottom").removeClass("top").removeClass("right").removeClass("left"),p&&(r.$next_tip.css("visibility","hidden"),r.$next_tip.show()),/body/i.test(r.$target.selector)?r.$li.length&&s.pos_modal(n):s.top()?(r.$next_tip.offset({top:r.$target.offset().top-i-a}),n.addClass("bottom")):(r.$next_tip.offset({top:r.$target.offset().top+o+a}),n.addClass("top")),p&&(r.$next_tip.hide(),r.$next_tip.css("visibility","visible"))},pos_modal:function(e){s.center(),e.hide(),t(".joyride-modal-bg").length<1&&t("body").append('<div class="joyride-modal-bg">').show(),/pop/i.test(r.tipAnimation)?t(".joyride-modal-bg").show():t(".joyride-modal-bg").fadeIn(r.tipAnimationFadeSpeed)},center:function(){var t=r.$window;return r.$next_tip.css({top:(t.height()-r.$next_tip.outerHeight())/2+t.scrollTop(),left:(t.width()-r.$next_tip.outerWidth())/2+t.scrollLeft()}),!0},bottom:function(){return/bottom/i.test(r.tipSettings.tipLocation)},top:function(){return/top/i.test(r.tipSettings.tipLocation)},right:function(){return/right/i.test(r.tipSettings.tipLocation)},left:function(){return/left/i.test(r.tipSettings.tipLocation)},corners:function(t){var e=r.$window,i=e.width()+e.scrollLeft(),o=e.width()+e.scrollTop();return[t.offset().top<=e.scrollTop(),i<=t.offset().left+t.outerWidth(),o<=t.offset().top+t.outerHeight(),e.scrollLeft()>=t.offset().left]},visible:function(t){for(var e=t.length;e--;)if(t[e])return!1;return!0},nub_position:function(t,e,i){"auto"===e?t.addClass(i):t.addClass(e)},startTimer:function(){r.$li.length?r.automate=setTimeout(function(){s.hide(),s.show(),s.startTimer()},r.timer):clearTimeout(r.automate)},end:function(){r.cookieMonster&&t.cookie(r.cookieName,"ridden",{expires:365,domain:r.cookieDomain}),r.timer>0&&clearTimeout(r.automate),t(".joyride-modal-bg").hide(),r.$current_tip.hide(),r.postStepCallback(r.$li.index(),r.$current_tip),r.postRideCallback(r.$li.index(),r.$current_tip)},jquery_check:function(){return t.isFunction(t.fn.on)?!0:(t.fn.on=function(t,e,i){return this.delegate(e,t,i)},t.fn.off=function(t,e,i){return this.undelegate(e,t,i)},!1)},outerHTML:function(t){return t.outerHTML||(new XMLSerializer).serializeToString(t)},version:function(){return r.version}};t.fn.joyride=function(e){return s[e]?s[e].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof e&&e?(t.error("Method "+e+" does not exist on jQuery.joyride"),void 0):s.init.apply(this,arguments)}}(jQuery,this);