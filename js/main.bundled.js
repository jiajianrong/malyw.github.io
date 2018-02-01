(function(a){function b(d){if(c[d])return c[d].exports;var e=c[d]={i:d,l:!1,exports:{}};return a[d].call(e.exports,e,e.exports,b),e.l=!0,e.exports}var c={};return b.m=a,b.c=c,b.d=function(a,c,d){b.o(a,c)||Object.defineProperty(a,c,{configurable:!1,enumerable:!0,get:d})},b.n=function(a){var c=a&&a.__esModule?function(){return a['default']}:function(){return a};return b.d(c,'a',c),c},b.o=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)},b.p='',b(b.s=1)})([function(a,b,c){'use strict';b.d=function(a,b){var c=document.createEvent('HTMLEvents');c.initEvent(b,!0,!0),c.eventName=b,a.dispatchEvent(c)},b.c=function(a,b){return new Promise(function(c,d){var e=document.createElement('script');if(e.async=!0,e.src=a,b)for(var f in b)b.hasOwnProperty(f)&&e.setAttribute(f,b[f]);e.onload=c,e.onerror=d,document.head.appendChild(e)})},b.b=function(a,b){return new Promise(function(c,d){var e=document.createElement('link');e.href=a,e.rel='stylesheet',e.type='text/css',b?e.onload=b:(e.onload=c,e.onerror=d),document.head.appendChild(e)})},c.d(b,'a',function(){return d});var d='https:'===document.location.protocol?'https:':'http:'},function(a,b,c){'use strict';Object.defineProperty(b,'__esModule',{value:!0});var d=c(2),e=c(3),f=c(4),g=c(5),h=c(7),i=c(8),j=c(9),k=c(10);document.addEventListener('DOMContentLoaded',function(){var a=window.jekyllVariables;delete window.jekyllVariables,a.analytics=new h.a({GOOGLE_ANALYTICS:a.GOOGLE_ANALYTICS}),a.conditionalLoader=new j.a({SITE_BASE_URL:a.SITE_BASE_URL,DISCUSS_ID:a.DISCUSS_ID,PAGE_URL:a.PAGE_URL,PAGE_IDENTIFIER:a.PAGE_IDENTIFIER}),a.customSearch=new i.a({GOOGLE_SEARCH_ID:a.GOOGLE_SEARCH_ID}),a.includeCss=new k.a({isDefaultCssEnabled:a.isDefaultCssEnabled,SITE_BASE_URL:a.SITE_BASE_URL}),a.events=new d.a,Array.from(document.querySelectorAll('.talks-data')).forEach(function(b){new e.a(b,{SITE_BASE_URL:a.SITE_BASE_URL,STATIC_RESOURCES_URL:a.STATIC_RESOURCES_URL})}),Array.from(document.querySelectorAll('.js-contact-form')).forEach(function(b){new f.a({contactFormEl:b,CONTACT_EMAIL:a.CONTACT_EMAIL})})})},function(a,b){'use strict';var c=function(){this.bindEvents()};c.prototype.onPostShortClick=function(a){if('a'!==a.target.tagName.toLowerCase()){var b=this.querySelector('.post-title a').getAttribute('href');b&&(window.location=b)}},c.prototype.bindPostClick=function(){var a=this,b=document.querySelectorAll('.post__short');[].slice.apply(b).forEach(function(b){b.addEventListener('click',a.onPostShortClick,!0)})},c.prototype.bindHeadingClick=function(){var a=document.querySelectorAll('h1,h2,h3,h4,h5,h6');[].slice.apply(a).forEach(function(a){var b=a.getAttribute('id');b&&a.addEventListener('click',function(){window.location.hash=b})})},c.prototype.bindEvents=function(){this.bindPostClick(),this.bindHeadingClick()},b.a=c},function(a,b,c){'use strict';function d(a,b){if(!(a instanceof b))throw new TypeError('Cannot call a class as a function')}var e=c(0),f=function(){function a(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,'value'in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}(),g=function(){function a(b,c){var e=this;d(this,a),this.options=c,a.loadTalksData().then(function(a){e.initComponent({talksDataEl:b,talksJson:a})})}return f(a,[{key:'initComponent',value:function(b){var c=b.talksDataEl,d=b.talksJson;this.talksDataEl=c,this.talksJson=d,this.talksJson=a.addDateToTalks(this.talksJson),this.talksDataEl.classList.contains('upcoming-only')&&(this.talksJson=this.leaveUpcomingOnly(),this.checkUpcomingTalksPresent(this.talksJson,this.talksDataEl)),this.talksDataEl.classList.contains('previous-only')&&(this.talksJson=this.leavePreviousOnly()),this.forEachTalkEl=this.talksDataEl.querySelector('.for-each-talk'),this.forEachTalkEl.parentNode.removeChild(this.forEachTalkEl),this.isGalleryIncluded=!1,this.populateData(),this.onLoad(),this.talksDataEl.classList.add('loaded')}},{key:'checkUpcomingTalksPresent',value:function(){0===this.talksJson.length&&(this.talksDataEl.closest('.js-talks-data_upcoming-only__hide-when-empty').style.display='none')}},{key:'leaveUpcomingOnly',value:function(){return this.talksJson.filter(function(b){return a.isTalkUpcoming(b)}).reverse()}},{key:'leavePreviousOnly',value:function(){return this.talksJson.filter(function(b){return!a.isTalkUpcoming(b)})}},{key:'populateData',value:function(){this.talksJson.forEach(this.populateTalkData.bind(this))}},{key:'populateTalkImages',value:function(a,b){var c=this,d=a.querySelector('.event-image-gallery');if(d&&b.talkImages){d.classList.add('js-with-images'),this.isGalleryIncluded=!0;var e=document.createDocumentFragment(),f=b.talkImages.folderName,g=null;b.talkImages.imageNames.forEach(function(a){var b=document.createElement('a');b.href=c.options.STATIC_RESOURCES_URL+'/blog/conferences/'+f+'/'+a,e.appendChild(b),g||(g=b)});var h=d.querySelector('.ignoreClass');h.addEventListener('click',function(a){a.preventDefault(),g.click()}),d.appendChild(e)}}},{key:'populateTalkData',value:function(b){var c=this.forEachTalkEl.cloneNode(!0);for(var d in b)if(b.hasOwnProperty(d)){var e=b[d];c.innerHTML=c.innerHTML.replace(new RegExp('%%'+d+'%%','g'),e)}var f=a.isTalkUpcoming(b),g=c.querySelector('.show-if-upcoming');g&&(g.hidden=!f);var h=Array.from(c.querySelectorAll('.pre-src'));h.forEach(function(a){a.setAttribute('src',a.getAttribute('pre-src')),a.removeAttribute('pre-src')}),this.populateTalkImages(c,b),this.talksDataEl.appendChild(c)}},{key:'onLoad',value:function(){this.isGalleryIncluded&&Object(e.c)(this.options.SITE_BASE_URL+'/js/libs/baguetteBox.min.js').then(function(){window.baguetteBox.run('.event-image-gallery',{ignoreClass:'ignoreClass'})})}}],[{key:'loadTalksData',value:function(){return fetch('/js/assets/talks-data.json').then(function(a){return a.json()}).catch(console.error)}},{key:'addDateToTalks',value:function(a){var b=['January','February','March','April','May','June','July','August','September','October','November','December'];return a.forEach(function(a){var c=b[+a.month-1];a.date=c+' '+a.year}),a}},{key:'isTalkUpcoming',value:function(a){var b=+a.year,c=+a.month,d=new Date().getFullYear(),e=new Date().getMonth()+1;return!!(b>d)||b===d&&c>=e}}]),a}();b.a=g},function(a,b){'use strict';function c(a,b){if(!(a instanceof b))throw new TypeError('Cannot call a class as a function')}b.a=function a(b){var d=this;c(this,a),this.contactFormEl=b.contactFormEl,this.CONTACT_EMAIL=b.CONTACT_EMAIL+'@gmail.com',this.contactFormSubmitEl=this.contactFormEl.querySelector('[type="submit"]'),this.classNames={loading:'contact-form-loading',reject:'contact-form-reject',success:'contact-form-success'},this.resetClassNames=function(){Object.values(d.classNames).forEach(function(a){d.contactFormEl.classList.remove(a)})},this.addClassName=function(a){d.contactFormEl.classList.add(d.classNames[a])},this.removeClassName=function(a){d.contactFormEl.classList.remove(d.classNames[a])},this.disableForm=function(){d.contactFormSubmitEl.setAttribute('disabled','')},this.enableForm=function(){d.contactFormSubmitEl.removeAttribute('disabled')},this.onSubmit=function(a){a.preventDefault(),d.sendForm()},this.onSuccess=function(){d.disableForm(),d.addClassName('success'),d.onFinally()},this.onReject=function(){d.enableForm(),d.addClassName('reject'),d.onFinally()},this.onBeforeSend=function(){d.isSending=!0,d.resetClassNames(),d.addClassName('loading')},this.onFinally=function(){d.isSending=!1,d.removeClassName('loading')},this.sendForm=function(){d.isSending||(d.onBeforeSend(),fetch('https://formspree.io/'+d.CONTACT_EMAIL,{method:'post',headers:new Headers({Accept:'application/json'}),body:new FormData(d.contactFormEl)}).then(function(a){return a.json()}).then(function(a){a.success?d.onSuccess():d.onReject()}).catch(d.onReject))},this.contactFormEl.addEventListener('submit',this.onSubmit)}},function(a,b,c){'use strict';function d(a){if(Array.isArray(a)){for(var b=0,c=Array(a.length);b<a.length;b++)c[b]=a[b];return c}return Array.from(a)}function e(){var a;j&&(a=console).log.apply(a,d(g('PAGE:',arguments)))}function f(){var a;j&&(a=console).error.apply(a,d(g('PAGE:',arguments)))}function g(a,b){var c=Array.prototype.slice.apply(b);return c.unshift(a),c}function h(a){return new Promise(function(b,c){var d=new MessageChannel;d.port1.onmessage=function(a){a.data.error?c(a.data.error):(f('An error occured getting a message from SW',a.data.error),b(a.data))},navigator.serviceWorker.controller?navigator.serviceWorker.controller.postMessage(a,[d.port2]):f('Message sending to SW failed: navigator.serviceWorker.controller is',navigator.serviceWorker.controller)}).then(function(){},function(a){f('Message sending to SW failed with error',a)})}var i=c(6),j=localStorage.debug||-1!==window.location.search.indexOf('debug');if('serviceWorker'in navigator){var k='/service-worker.js';navigator.serviceWorker.register(k).then(function(a){h({"---isDebugEnabled---":j}),e('Service Worker "'+k+'" registration successful with scope: '+a.scope)}).catch(function(a){f('Registration of Service Worker "'+k+'" failed with error',a)})}'serviceWorker'in navigator&&navigator.serviceWorker.addEventListener('message',function(a){a.data['---notification---']!==void 0&&i.a.log(a.data['---notification---'],{addnCls:'humane-libnotify-info',timeout:5e3,clickToClose:!0})})},function(a,b){'use strict';/**
 * humane.js
 * Humanized Messages for Notifications
 * @author Marc Harter (@wavded)
 * @example
 *   humane.log('hello world');
 * @license MIT
 * See more usage examples at: http://wavded.github.com/humane-js/
 */var c=window,d=document,f={on:function(a,b,d){'addEventListener'in c?a.addEventListener(b,d,!1):a.attachEvent('on'+b,d)},off:function(a,b,d){'removeEventListener'in c?a.removeEventListener(b,d,!1):a.detachEvent('on'+b,d)},bind:function(a,b){return function(){a.apply(b,arguments)}},isArray:Array.isArray||function(a){return'[object Array]'===Object.prototype.toString.call(a)},config:function(a,b){return null==a?b:a},transSupport:!1,useFilter:/msie [678]/i.test(navigator.userAgent),_checkTransition:function(){var a=d.createElement('div'),b={webkit:'webkit',Moz:'',O:'o',ms:'MS'};for(var c in b)c+'Transition'in a.style&&(this.vendorPrefix=b[c],this.transSupport=!0)}};f._checkTransition();var e=function(a){a||(a={}),this.queue=[],this.baseCls=a.baseCls||'humane',this.addnCls=a.addnCls||'',this.timeout='timeout'in a?a.timeout:2500,this.waitForMove=a.waitForMove||!1,this.clickToClose=a.clickToClose||!1,this.timeoutAfterMove=a.timeoutAfterMove||!1,this.container=a.container;try{this._setupEl()}catch(a){f.on(c,'load',f.bind(this._setupEl,this))}};e.prototype={constructor:e,_setupEl:function(){var a=d.createElement('div');if(a.style.display='none',!this.container)if(d.body)this.container=d.body;else throw'document.body is null';this.container.appendChild(a),this.el=a,this.removeEvent=f.bind(function(){var a=f.config(this.currentMsg.timeoutAfterMove,this.timeoutAfterMove);a?setTimeout(f.bind(this.remove,this),a):this.remove()},this),this.transEvent=f.bind(this._afterAnimation,this),this._run()},_afterTimeout:function(){f.config(this.currentMsg.waitForMove,this.waitForMove)?!this.removeEventsSet&&(f.on(d.body,'mousemove',this.removeEvent),f.on(d.body,'click',this.removeEvent),f.on(d.body,'keypress',this.removeEvent),f.on(d.body,'touchstart',this.removeEvent),this.removeEventsSet=!0):this.remove()},_run:function(){if(!this._animating&&this.queue.length&&this.el){this._animating=!0,this.currentTimer&&(clearTimeout(this.currentTimer),this.currentTimer=null);var a=this.queue.shift(),b=f.config(a.clickToClose,this.clickToClose);b&&(f.on(this.el,'click',this.removeEvent),f.on(this.el,'touchstart',this.removeEvent));var c=f.config(a.timeout,this.timeout);0<c&&(this.currentTimer=setTimeout(f.bind(this._afterTimeout,this),c)),f.isArray(a.html)&&(a.html='<ul><li>'+a.html.join('<li>')+'</ul>'),this.el.innerHTML=a.html,this.currentMsg=a,this.el.className=this.baseCls,f.transSupport?(this.el.style.display='block',setTimeout(f.bind(this._showMsg,this),50)):this._showMsg()}},_setOpacity:function(a){if(f.useFilter)try{this.el.filters.item('DXImageTransform.Microsoft.Alpha').Opacity=100*a}catch(a){}else this.el.style.opacity=a+''},_showMsg:function(){var a=f.config(this.currentMsg.addnCls,this.addnCls);if(f.transSupport)this.el.className=this.baseCls+' '+a+' '+this.baseCls+'-animate';else{var b=0;this.el.className=this.baseCls+' '+a+' '+this.baseCls+'-js-animate',this._setOpacity(0),this.el.style.display='block';var c=this,d=setInterval(function(){1>b?(b+=0.1,1<b&&(b=1),c._setOpacity(b)):clearInterval(d)},30)}},_hideMsg:function(){var a=f.config(this.currentMsg.addnCls,this.addnCls);if(f.transSupport)this.el.className=this.baseCls+' '+a,f.on(this.el,f.vendorPrefix?f.vendorPrefix+'TransitionEnd':'transitionend',this.transEvent);else var b=1,c=this,d=setInterval(function(){0<b?(b-=0.1,0>b&&(b=0),c._setOpacity(b)):(c.el.className=c.baseCls+' '+a,clearInterval(d),c._afterAnimation())},30)},_afterAnimation:function(){f.transSupport&&f.off(this.el,f.vendorPrefix?f.vendorPrefix+'TransitionEnd':'transitionend',this.transEvent),this.currentMsg.cb&&this.currentMsg.cb(),this.el.style.display='none',this._animating=!1,this._run()},remove:function(a){var b='function'==typeof a?a:null;f.off(d.body,'mousemove',this.removeEvent),f.off(d.body,'click',this.removeEvent),f.off(d.body,'keypress',this.removeEvent),f.off(d.body,'touchstart',this.removeEvent),f.off(this.el,'click',this.removeEvent),f.off(this.el,'touchstart',this.removeEvent),this.removeEventsSet=!1,b&&this.currentMsg&&(this.currentMsg.cb=b),this._animating?this._hideMsg():b&&b()},log:function(a,b,c,d){var e={};if(d)for(var f in d)e[f]=d[f];if('function'==typeof b)c=b;else if(b)for(var f in b)e[f]=b[f];return e.html=a,c&&(e.cb=c),this.queue.push(e),this._run(),this},spawn:function(a){var b=this;return function(c,d,e){return b.log.call(b,c,d,e,a),b}},create:function(a){return new e(a)}},b.a=new e},function(a,b,c){'use strict';var d=c(0),e=function(a){this.options=a,this.prepare(),this.load(),this.addJsErrorsTracking()};e.prototype.prepare=function(){window._gaq=window._gaq||[],window._gaq.push(['_setAccount',this.options.GOOGLE_ANALYTICS]),window._gaq.push(['_trackPageview'])},e.prototype.load=function(){Object(d.c)(('https:'===document.location.protocol?'https://ssl':'http://www')+'.google-analytics.com/ga.js')},e.prototype.addJsErrorsTracking=function(){window.addEventListener('error',function(a){var b=a.colno?' line:'+a.lineno+', column:'+a.colno:' line:'+a.lineno;window._gaq.push(['_trackEvent','JavaScript Error',a.message,a.filename+b+' -> '+navigator.userAgent,0,!0])})},b.a=e},function(a,b,c){'use strict';var d=c(0),e=function(a){this.options=a,this.isLoading=!1,this._onFocus=this.onFocus.bind(this),this.placeholderForm=document.querySelector('.google-custom-search-placeholder');this.placeholderForm&&(this.placeholderInput=this.placeholderForm.querySelector('input'),this.originalInput=void 0,this.googleOriginalSubmit=void 0,this.bindEvents())};e.prototype.defineOriginalElements=function(){this.originalInput||(this.originalInput=document.querySelector('.gsc-input input[type="text"]')),this.googleOriginalSubmit||(this.googleOriginalSubmit=document.querySelector('.gsc-search-button input'))},e.prototype.runSearch=function(a){this.originalInput.value=a,this.placeholderInput.blur(),window.console.log=function(){},Object(d.d)(this.googleOriginalSubmit,'click'),delete console.log},e.prototype.loadSearch=function(){return Object(d.c)(d.a+'//www.google.com/cse/cse.js?cx='+this.options.GOOGLE_SEARCH_ID)},e.prototype.onFocus=function(){var a=this;this.isLoading||(this.isLoading=!0,this.loadSearch().then(function(){a.isLoading=!1,a.placeholderInput.removeEventListener('focus',a._onFocus),a.bindAdditionalEvents()},function(){a.isLoading=!1}))},e.prototype.bindEvents=function(){this.placeholderInput.addEventListener('focus',this._onFocus),this.placeholderForm.addEventListener('submit',function(a){a.preventDefault()})},e.prototype.bindAdditionalEvents=function(){var a=this;this.placeholderForm.addEventListener('submit',function(){a.defineOriginalElements(),a.runSearch(a.placeholderInput.value)})},b.a=e},function(a,b,c){'use strict';var d=c(0),e=function(a){this.options=a,this.loadScripts()};e.prototype.loadScripts=function(){if(document.querySelectorAll('pre > code').length&&Object(d.c)(this.options.SITE_BASE_URL+'/js/libs/highlight.pack.js').then(function(){window.hljs.initHighlightingOnLoad()}),document.querySelectorAll('.caniuse').length&&Object(d.c)(this.options.SITE_BASE_URL+'/js/libs/caniuse.min.js'),document.querySelectorAll('.codepen').length&&Object(d.c)(d.a+'//codepen.io/assets/embed/ei.js'),document.querySelectorAll('.jsbin-embed').length&&Object(d.c)(d.a+'//static.jsbin.com/js/embed.js'),document.querySelectorAll('#disqus_thread').length&&(window.disqus_config=function(){this.page.url=this.options.PAGE_URL,this.page.identifier=this.options.PAGE_IDENTIFIER},Object(d.c)(d.a+'//'+this.options.DISCUSS_ID+'.disqus.com/embed.js')),document.querySelectorAll('.post__short-comment-counter').length&&Object(d.c)(d.a+'//'+this.options.DISCUSS_ID+'.disqus.com/count.js',{id:'dsq-count-scr'}),document.querySelectorAll('.twitter-widget').length&&Object(d.c)(d.a+'//platform.twitter.com/widgets.js'),document.querySelectorAll('.fb-widget').length){var a=document.createElement('div');a.setAttribute('id','fb-root'),document.body.appendChild(a),Object(d.c)(d.a+'//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.10')}if(document.querySelectorAll('.image-gallery').length&&Object(d.c)(this.options.SITE_BASE_URL+'/js/libs/baguetteBox.min.js').then(function(){window.baguetteBox.run('.image-gallery')}),-1!==window.location.search.indexOf('neguru=enabled')){var b=document.querySelector('.main-sidebar .scroller-area');b&&Object(d.c)(this.options.SITE_BASE_URL+'/js/libs/netguru.js')}},b.a=e},function(a,b,c){'use strict';var d=c(0),e=function(a){this.options=a,this.options.isDefaultCssEnabled&&Object(d.b)(this.options.SITE_BASE_URL+'/css/non-critical.css')};e.prototype.loadCss=function(a){return Object(d.b)(a)},b.a=e}]);
//# sourceMappingURL=main.bundled.js.map