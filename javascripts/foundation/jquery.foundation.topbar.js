/*
 * jQuery Foundation Top Bar 2.0.3
 * http://foundation.zurb.com
 * Copyright 2012, ZURB
 * Free to use under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
*/
!function(t,e){"use strict";var i={index:0,initialized:!1},n={init:function(o){return this.each(function(){i=t.extend(i,o),i.$w=t(e),i.$topbar=t("nav.top-bar"),i.$section=i.$topbar.find("section"),i.$titlebar=i.$topbar.children("ul:first");var a=t("<div class='top-bar-js-breakpoint'/>").appendTo("body");i.breakPoint=a.width(),a.remove(),i.initialized||(n.assemble(),i.initialized=!0),i.height||n.largestUL(),i.$topbar.parent().hasClass("fixed")&&t("body").css("padding-top",i.$topbar.outerHeight()),t(".top-bar .toggle-topbar").die("click.fndtn").live("click.fndtn",function(t){t.preventDefault(),n.breakpoint()&&(i.$topbar.toggleClass("expanded"),i.$topbar.css("min-height","")),i.$topbar.hasClass("expanded")||(i.$section.css({left:"0%"}),i.$section.find(">.name").css({left:"100%"}),i.$section.find("li.moved").removeClass("moved"),i.index=0)}),t(".top-bar .has-dropdown>a").die("click.fndtn").live("click.fndtn",function(e){if((Modernizr.touch||n.breakpoint())&&e.preventDefault(),n.breakpoint()){var o=t(this),a=o.closest("li");i.index+=1,a.addClass("moved"),i.$section.css({left:-(100*i.index)+"%"}),i.$section.find(">.name").css({left:100*i.index+"%"}),o.siblings("ul").height(i.height+i.$titlebar.outerHeight(!0)),i.$topbar.css("min-height",i.height+2*i.$titlebar.outerHeight(!0))}}),t(e).on("resize.fndtn.topbar",function(){n.breakpoint()||i.$topbar.css("min-height","")}),t(".top-bar .has-dropdown .back").die("click.fndtn").live("click.fndtn",function(e){e.preventDefault();var n=t(this),o=n.closest("li.moved");o.parent(),i.index-=1,i.$section.css({left:-(100*i.index)+"%"}),i.$section.find(">.name").css({left:100*i.index+"%"}),0===i.index&&i.$topbar.css("min-height",0),setTimeout(function(){o.removeClass("moved")},300)})})},breakpoint:function(){return i.$w.width()<i.breakPoint},assemble:function(){i.$section.detach(),i.$section.find(".has-dropdown>a").each(function(){var e=t(this),i=e.siblings(".dropdown"),n=t('<li class="title back js-generated"><h5><a href="#"></a></h5></li>');n.find("h5>a").html(e.html()),i.prepend(n)}),i.$section.appendTo(i.$topbar)},largestUL:function(){var e=i.$topbar.find("section ul ul"),n=e.first(),o=0;e.each(function(){t(this).children("li").length>n.children("li").length&&(n=t(this))}),n.children("li").each(function(){o+=t(this).outerHeight(!0)}),i.height=o}};t.fn.foundationTopBar=function(e){return n[e]?n[e].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof e&&e?(t.error("Method "+e+" does not exist on jQuery.foundationTopBar"),void 0):n.init.apply(this,arguments)}}(jQuery,this);