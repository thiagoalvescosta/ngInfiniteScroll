!function(t){"function"==typeof define&&define.amd?define(["jquery"],t):t(jQuery)}(function(t){function e(t){var e,i,s;e=t.target.offsetWidth,i=t.target.offsetHeight,s={distX:t.distX,distY:t.distY,velocityX:t.velocityX,velocityY:t.velocityY,finger:t.finger},t.distX>t.distY?t.distX>-t.distY?(t.distX/e>d.threshold||t.velocityX*t.distX/e*d.sensitivity>1)&&(s.type="swiperight",r(t.currentTarget,s)):(-t.distY/i>d.threshold||t.velocityY*t.distY/e*d.sensitivity>1)&&(s.type="swipeup",r(t.currentTarget,s)):t.distX>-t.distY?(t.distY/i>d.threshold||t.velocityY*t.distY/e*d.sensitivity>1)&&(s.type="swipedown",r(t.currentTarget,s)):(-t.distX/e>d.threshold||t.velocityX*t.distX/e*d.sensitivity>1)&&(s.type="swipeleft",r(t.currentTarget,s))}function i(e){var i=t.data(e,"event_swipe");return i||(i={count:0},t.data(e,"event_swipe",i)),i}var s=t.event.add,n=t.event.remove,r=function(e,i,s){t.event.trigger(i,s,e)},d={threshold:.4,sensitivity:6};t.event.special.swipe=t.event.special.swipeleft=t.event.special.swiperight=t.event.special.swipeup=t.event.special.swipedown={setup:function(t){var t=i(this);if(!(t.count++>0))return s(this,"moveend",e),!0},teardown:function(){var t=i(this);if(!(--t.count>0))return n(this,"moveend",e),!0},settings:d}});