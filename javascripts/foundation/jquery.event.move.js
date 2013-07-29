!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):e(jQuery)}(function(e,t){function n(e){function t(){i?(n(),O(t),a=!0,i=!1):a=!1}var n=e,i=!1,a=!1;this.kick=function(){i=!0,a||t()},this.end=function(e){var t=n;e&&(a?(n=i?function(){t(),e()}:e,i=!0):e())}}function i(){return!0}function a(){return!1}function o(e){e.preventDefault()}function r(e){z[e.target.tagName.toLowerCase()]||e.preventDefault()}function u(e){return 1===e.which&&!e.ctrlKey&&!e.altKey}function c(e,t){var n,i;if(e.identifiedTouch)return e.identifiedTouch(t);for(n=-1,i=e.length;++n<i;)if(e[n].identifier===t)return e[n]}function d(e,t){var n=c(e.changedTouches,t.identifier);if(n&&(n.pageX!==t.pageX||n.pageY!==t.pageY))return n}function m(e){var t;u(e)&&(t={target:e.target,startX:e.pageX,startY:e.pageY,timeStamp:e.timeStamp},K(document,Q.move,f,t),K(document,Q.cancel,s,t))}function f(e){var t=e.data;X(e,t,e,v)}function s(){v()}function v(){L(document,Q.move,f),L(document,Q.cancel,v)}function g(e){var t,n;z[e.target.tagName.toLowerCase()]||(t=e.changedTouches[0],n={target:t.target,startX:t.pageX,startY:t.pageY,timeStamp:e.timeStamp,identifier:t.identifier},K(document,B.move+"."+t.identifier,p,n),K(document,B.cancel+"."+t.identifier,h,n))}function p(e){var t=e.data,n=d(e,t);n&&X(e,t,n,l)}function h(e){var t=e.data,n=c(e.changedTouches,t.identifier);n&&l(t.identifier)}function l(e){L(document,"."+e,p),L(document,"."+e,h)}function X(e,t,n,i){var a=n.pageX-t.startX,o=n.pageY-t.startY;C*C>a*a+o*o||y(e,t,n,a,o,i)}function Y(){return this._handled=i,!1}function w(e){e._handled()}function y(e,t,n,i,a,o){var r,u;t.target,r=e.targetTouches,u=e.timeStamp-t.timeStamp,t.type="movestart",t.distX=i,t.distY=a,t.deltaX=i,t.deltaY=a,t.pageX=n.pageX,t.pageY=n.pageY,t.velocityX=i/u,t.velocityY=a/u,t.targetTouches=r,t.finger=r?r.length:1,t._handled=Y,t._preventTouchmoveDefault=function(){e.preventDefault()},N(t.target,t),o(t.identifier)}function T(e){var t=e.data.event,n=e.data.timer;D(t,e,e.timeStamp,n)}function S(e){var t=e.data.event,n=e.data.timer;k(),F(t,n,function(){setTimeout(function(){L(t.target,"click",a)},0)})}function k(){L(document,Q.move,T),L(document,Q.end,S)}function _(e){var t=e.data.event,n=e.data.timer,i=d(e,t);i&&(e.preventDefault(),t.targetTouches=e.targetTouches,D(t,i,e.timeStamp,n))}function q(e){var t=e.data.event,n=e.data.timer,i=c(e.changedTouches,t.identifier);i&&(A(t),F(t,n))}function A(e){L(document,"."+e.identifier,_),L(document,"."+e.identifier,q)}function D(e,t,n,i){var a=n-e.timeStamp;e.type="move",e.distX=t.pageX-e.startX,e.distY=t.pageY-e.startY,e.deltaX=t.pageX-e.pageX,e.deltaY=t.pageY-e.pageY,e.velocityX=.3*e.velocityX+.7*e.deltaX/a,e.velocityY=.3*e.velocityY+.7*e.deltaY/a,e.pageX=t.pageX,e.pageY=t.pageY,i.kick()}function F(e,t,n){t.end(function(){return e.type="moveend",N(e.target,e),n&&n()})}function R(){return K(this,"movestart.move",w),!0}function x(){return L(this,"dragstart drag",o),L(this,"mousedown touchstart",r),L(this,"movestart",w),!0}function b(e){"move"!==e.namespace&&"moveend"!==e.namespace&&(K(this,"dragstart."+e.guid+" drag."+e.guid,o,t,e.selector),K(this,"mousedown."+e.guid,r,t,e.selector))}function j(e){"move"!==e.namespace&&"moveend"!==e.namespace&&(L(this,"dragstart."+e.guid+" drag."+e.guid),L(this,"mousedown."+e.guid))}var C=6,K=e.event.add,L=e.event.remove,N=function(t,n,i){e.event.trigger(n,i,t)},O=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(e){return window.setTimeout(function(){e()},25)}}(),z={textarea:!0,input:!0,select:!0,button:!0},Q={move:"mousemove",cancel:"mouseup dragstart",end:"mouseup"},B={move:"touchmove",cancel:"touchend",end:"touchend"};e.event.special.movestart={setup:R,teardown:x,add:b,remove:j,_default:function(e){var i,o;e._handled()&&(i={target:e.target,startX:e.startX,startY:e.startY,pageX:e.pageX,pageY:e.pageY,distX:e.distX,distY:e.distY,deltaX:e.deltaX,deltaY:e.deltaY,velocityX:e.velocityX,velocityY:e.velocityY,timeStamp:e.timeStamp,identifier:e.identifier,targetTouches:e.targetTouches,finger:e.finger},o={event:i,timer:new n(function(){N(e.target,i)})},e.identifier===t?(K(e.target,"click",a),K(document,Q.move,T,o),K(document,Q.end,S,o)):(e._preventTouchmoveDefault(),K(document,B.move+"."+e.identifier,_,o),K(document,B.end+"."+e.identifier,q,o)))}},e.event.special.move={setup:function(){K(this,"movestart.move",e.noop)},teardown:function(){L(this,"movestart.move",e.noop)}},e.event.special.moveend={setup:function(){K(this,"movestart.moveend",e.noop)},teardown:function(){L(this,"movestart.moveend",e.noop)}},K(document,"mousedown.move",m),K(document,"touchstart.move",g),"function"==typeof Array.prototype.indexOf&&function(e){for(var t=["changedTouches","targetTouches"],n=t.length;n--;)-1===e.event.props.indexOf(t[n])&&e.event.props.push(t[n])}(e)});