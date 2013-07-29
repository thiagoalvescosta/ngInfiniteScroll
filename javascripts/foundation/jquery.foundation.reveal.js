/*
 * jQuery Reveal Plugin 1.1
 * www.ZURB.com
 * Copyright 2010, ZURB
 * Free to use under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
*/
!function(e){"use strict";var n=!1;e(document).on("click","[data-reveal-id]",function(n){n.preventDefault();var a=e(this).attr("data-reveal-id");e("#"+a).reveal(e(this).data())}),e.fn.reveal=function(a){var o=e(document),i={animation:"fadeAndPop",animationSpeed:300,closeOnBackgroundClick:!0,dismissModalClass:"close-reveal-modal",open:e.noop,opened:e.noop,close:e.noop,closed:e.noop};return a=e.extend({},i,a),this.not(".reveal-modal.open").each(function(){function i(){g=!1}function l(){g=!0}function t(){var a=e(".reveal-modal.open");1===a.length&&(n=!0,a.trigger("reveal:close"))}function r(){g||(l(),t(),f.addClass("open"),"fadeAndPop"===a.animation&&(y.open.top=o.scrollTop()-m,y.open.opacity=0,f.css(y.open),b.fadeIn(a.animationSpeed/2),f.delay(a.animationSpeed/2).animate({top:o.scrollTop()+u+"px",opacity:1},a.animationSpeed,function(){f.trigger("reveal:opened")})),"fade"===a.animation&&(y.open.top=o.scrollTop()+u,y.open.opacity=0,f.css(y.open),b.fadeIn(a.animationSpeed/2),f.delay(a.animationSpeed/2).animate({opacity:1},a.animationSpeed,function(){f.trigger("reveal:opened")})),"none"===a.animation&&(y.open.top=o.scrollTop()+u,y.open.opacity=1,f.css(y.open),b.css({display:"block"}),f.trigger("reveal:opened")))}function d(){var e=f.find(".flex-video"),n=e.find("iframe");n.length>0&&(n.attr("src",n.data("src")),e.fadeIn(100))}function c(){g||(l(),f.removeClass("open"),"fadeAndPop"===a.animation&&(f.animate({top:o.scrollTop()-m+"px",opacity:0},a.animationSpeed/2,function(){f.css(y.close)}),n?f.trigger("reveal:closed"):b.delay(a.animationSpeed).fadeOut(a.animationSpeed,function(){f.trigger("reveal:closed")})),"fade"===a.animation&&(f.animate({opacity:0},a.animationSpeed,function(){f.css(y.close)}),n?f.trigger("reveal:closed"):b.delay(a.animationSpeed).fadeOut(a.animationSpeed,function(){f.trigger("reveal:closed")})),"none"===a.animation&&(f.css(y.close),n||b.css({display:"none"}),f.trigger("reveal:closed")),n=!1)}function s(){f.unbind(".reveal"),b.unbind(".reveal"),v.unbind(".reveal"),e("body").unbind(".reveal")}function p(){var e=f.find(".flex-video"),n=e.find("iframe");n.length>0&&(n.data("src",n.attr("src")),n.attr("src",""),e.fadeOut(100))}var v,f=e(this),u=parseInt(f.css("top"),10),m=f.height()+u,g=!1,b=e(".reveal-modal-bg"),y={open:{top:0,opacity:0,visibility:"visible",display:"block"},close:{top:u,opacity:1,visibility:"hidden",display:"none"}};0===b.length&&(b=e("<div />",{"class":"reveal-modal-bg"}).insertAfter(f),b.fadeTo("fast",.8)),f.bind("reveal:open.reveal",r),f.bind("reveal:open.reveal",d),f.bind("reveal:close.reveal",c),f.bind("reveal:closed.reveal",p),f.bind("reveal:opened.reveal reveal:closed.reveal",i),f.bind("reveal:closed.reveal",s),f.bind("reveal:open.reveal",a.open),f.bind("reveal:opened.reveal",a.opened),f.bind("reveal:close.reveal",a.close),f.bind("reveal:closed.reveal",a.closed),f.trigger("reveal:open"),v=e("."+a.dismissModalClass).bind("click.reveal",function(){f.trigger("reveal:close")}),a.closeOnBackgroundClick&&(b.css({cursor:"pointer"}),b.bind("click.reveal",function(){f.trigger("reveal:close")})),e("body").bind("keyup.reveal",function(e){27===e.which&&f.trigger("reveal:close")})})}}(jQuery);