!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=12)}([function(t,e,n){"use strict";var r=this&&this.__assign||function(){return(r=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)},o=this&&this.__read||function(t,e){var n="function"==typeof Symbol&&t[Symbol.iterator];if(!n)return t;var r,o,i=n.call(t),a=[];try{for(;(void 0===e||e-- >0)&&!(r=i.next()).done;)a.push(r.value)}catch(t){o={error:t}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(o)throw o.error}}return a},i=this&&this.__spread||function(){for(var t=[],e=0;e<arguments.length;e++)t=t.concat(o(arguments[e]));return t},a=this&&this.__values||function(t){var e="function"==typeof Symbol&&Symbol.iterator,n=e&&t[e],r=0;if(n)return n.call(t);if(t&&"number"==typeof t.length)return{next:function(){return t&&r>=t.length&&(t=void 0),{value:t&&t[r++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")};Object.defineProperty(e,"__esModule",{value:!0}),e.LiteElement=void 0;var u=function(t,e,n){var o,u;void 0===e&&(e={}),void 0===n&&(n=[]),this.kind=t,this.attributes=r({},e),this.children=i(n);try{for(var l=a(this.children),s=l.next();!s.done;s=l.next())s.value.parent=this}catch(t){o={error:t}}finally{try{s&&!s.done&&(u=l.return)&&u.call(l)}finally{if(o)throw o.error}}this.styles=null};e.LiteElement=u},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.LiteDocument=void 0;var r=n(0),o=function(){function t(){this.root=new r.LiteElement("html",{},[this.head=new r.LiteElement("head"),this.body=new r.LiteElement("body")]),this.type="<!DOCTYPE html>"}return Object.defineProperty(t.prototype,"kind",{get:function(){return"#document"},enumerable:!1,configurable:!0}),t}();e.LiteDocument=o},function(t,e,n){"use strict";var r,o=this&&this.__extends||(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});Object.defineProperty(e,"__esModule",{value:!0}),e.LiteComment=e.LiteText=void 0;var i=function(){function t(t){void 0===t&&(t=""),this.value=t}return Object.defineProperty(t.prototype,"kind",{get:function(){return"#text"},enumerable:!1,configurable:!0}),t}();e.LiteText=i;var a=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return o(e,t),Object.defineProperty(e.prototype,"kind",{get:function(){return"#comment"},enumerable:!1,configurable:!0}),e}(i);e.LiteComment=a},function(t,e,n){"use strict";var r=this&&this.__read||function(t,e){var n="function"==typeof Symbol&&t[Symbol.iterator];if(!n)return t;var r,o,i=n.call(t),a=[];try{for(;(void 0===e||e-- >0)&&!(r=i.next()).done;)a.push(r.value)}catch(t){o={error:t}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(o)throw o.error}}return a},o=this&&this.__values||function(t){var e="function"==typeof Symbol&&Symbol.iterator,n=e&&t[e],r=0;if(n)return n.call(t);if(t&&"number"==typeof t.length)return{next:function(){return t&&r>=t.length&&(t=void 0),{value:t&&t[r++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")};Object.defineProperty(e,"__esModule",{value:!0}),e.LiteParser=e.PATTERNS=void 0;var i,a=n(9),u=n(0),l=n(2);!function(t){t.TAGNAME="[a-z][^\\s\\n>]*",t.ATTNAME="[a-z][^\\s\\n>=]*",t.VALUE="(?:'[^']*'|\"[^\"]*\"|[^\\s\\n]+)",t.VALUESPLIT="(?:'([^']*)'|\"([^\"]*)\"|([^\\s\\n]+))",t.SPACE="(?:\\s|\\n)+",t.OPTIONALSPACE="(?:\\s|\\n)*",t.ATTRIBUTE=t.ATTNAME+"(?:"+t.OPTIONALSPACE+"="+t.OPTIONALSPACE+t.VALUE+")?",t.ATTRIBUTESPLIT="("+t.ATTNAME+")(?:"+t.OPTIONALSPACE+"="+t.OPTIONALSPACE+t.VALUESPLIT+")?",t.TAG="(<(?:"+t.TAGNAME+"(?:"+t.SPACE+t.ATTRIBUTE+")*"+t.OPTIONALSPACE+"/?|/"+t.TAGNAME+"|!--[^]*?--|![^]*?)(?:>|$))",t.tag=new RegExp(t.TAG,"i"),t.attr=new RegExp(t.ATTRIBUTE,"i"),t.attrsplit=new RegExp(t.ATTRIBUTESPLIT,"i")}(i=e.PATTERNS||(e.PATTERNS={}));var s=function(){function t(){}return t.prototype.parseFromString=function(t,e,n){void 0===e&&(e="text/html"),void 0===n&&(n=null);for(var r=n.createDocument(),o=n.body(r),a=t.replace(/<\?.*?\?>/g,"").split(i.tag);a.length;){var u=a.shift(),l=a.shift();u&&this.addText(n,o,u),l&&">"===l.charAt(l.length-1)&&("!"===l.charAt(1)?this.addComment(n,o,l):o="/"===l.charAt(1)?this.closeTag(n,o,l):this.openTag(n,o,l,a))}return this.checkDocument(n,r),r},t.prototype.addText=function(t,e,n){return n=a.translate(n),t.append(e,t.text(n))},t.prototype.addComment=function(t,e,n){return t.append(e,new l.LiteComment(n))},t.prototype.closeTag=function(t,e,n){for(var r=n.slice(2,n.length-1).toLowerCase();t.parent(e)&&t.kind(e)!==r;)e=t.parent(e);return t.parent(e)},t.prototype.openTag=function(t,e,n,r){var o=this.constructor.PCDATA,a=this.constructor.SELF_CLOSING,u=n.match(/<(.*?)[\s\n>\/]/)[1].toLowerCase(),l=t.node(u),s=n.replace(/^<.*?[\s\n>]/,"").split(i.attrsplit);return(s.pop().match(/>$/)||s.length<5)&&(this.addAttributes(t,l,s),t.append(e,l),a[u]||n.match(/\/>$/)||(o[u]?this.handlePCDATA(t,l,u,r):e=l)),e},t.prototype.addAttributes=function(t,e,n){for(var o=this.constructor.CDATA_ATTR;n.length;){var i=r(n.splice(0,5),5),u=i[1],l=i[2],s=i[3],c=i[4],p=l||s||c||"";o[u]||(p=a.translate(p)),t.setAttribute(e,u,p)}},t.prototype.handlePCDATA=function(t,e,n,r){for(var o=[],i="</"+n+">",a="";r.length&&a!==i;)o.push(a),o.push(r.shift()),a=r.shift();t.append(e,t.text(o.join("")))},t.prototype.checkDocument=function(t,e){var n,r,i,a,u=this.getOnlyChild(t,t.body(e));if(u){try{for(var s=o(t.childNodes(t.body(e))),c=s.next();!c.done;c=s.next()){if((d=c.value)===u)break;d instanceof l.LiteComment&&d.value.match(/^<!DOCTYPE/)&&(e.type=d.value)}}catch(t){n={error:t}}finally{try{c&&!c.done&&(r=s.return)&&r.call(s)}finally{if(n)throw n.error}}switch(t.kind(u)){case"html":try{for(var p=o(u.children),f=p.next();!f.done;f=p.next()){var d=f.value;switch(t.kind(d)){case"head":e.head=d;break;case"body":e.body=d}}}catch(t){i={error:t}}finally{try{f&&!f.done&&(a=p.return)&&a.call(p)}finally{if(i)throw i.error}}e.root=u,t.remove(u),t.parent(e.body)!==u&&t.append(u,e.body),t.parent(e.head)!==u&&t.insert(e.head,e.body);break;case"head":e.head=t.replace(u,e.head);break;case"body":e.body=t.replace(u,e.body)}}},t.prototype.getOnlyChild=function(t,e){var n,r,i=null;try{for(var a=o(t.childNodes(e)),l=a.next();!l.done;l=a.next()){var s=l.value;if(s instanceof u.LiteElement){if(i)return null;i=s}}}catch(t){n={error:t}}finally{try{l&&!l.done&&(r=a.return)&&r.call(a)}finally{if(n)throw n.error}}return i},t.prototype.serialize=function(t,e){var n=this,r=this.constructor.SELF_CLOSING,o=this.constructor.CDATA_ATTR,i=t.kind(e),a=t.allAttributes(e).map((function(t){return t.name+'="'+(o[t.name]?t.value:n.protectAttribute(t.value))+'"'})).join(" ");return"<"+i+(a?" "+a:"")+">"+(r[i]?"":t.innerHTML(e)+"</"+i+">")},t.prototype.serializeInner=function(t,e){var n=this;return this.constructor.PCDATA.hasOwnProperty(e.kind)?t.childNodes(e).map((function(e){return t.value(e)})).join(""):t.childNodes(e).map((function(e){var r=t.kind(e);return"#text"===r?n.protectHTML(t.value(e)):"#comment"===r?e.value:n.serialize(t,e)})).join("")},t.prototype.protectAttribute=function(t){return"string"!=typeof t&&(t=String(t)),t.replace(/"/g,"&quot;")},t.prototype.protectHTML=function(t){return t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")},t.SELF_CLOSING={area:!0,base:!0,br:!0,col:!0,command:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,menuitem:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0},t.PCDATA={option:!0,textarea:!0,fieldset:!0,title:!0,style:!0,script:!0},t.CDATA_ATTR={style:!0,datafld:!0,datasrc:!0,href:!0,src:!0,longdesc:!0,usemap:!0,cite:!0,datetime:!0,action:!0,axis:!0,profile:!0,content:!0,scheme:!0},t}();e.LiteParser=s},function(t,e,n){"use strict";var r,o=this&&this.__extends||(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),i=this&&this.__assign||function(){return(i=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)},a=this&&this.__values||function(t){var e="function"==typeof Symbol&&Symbol.iterator,n=e&&t[e],r=0;if(n)return n.call(t);if(t&&"number"==typeof t.length)return{next:function(){return t&&r>=t.length&&(t=void 0),{value:t&&t[r++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")},u=this&&this.__read||function(t,e){var n="function"==typeof Symbol&&t[Symbol.iterator];if(!n)return t;var r,o,i=n.call(t),a=[];try{for(;(void 0===e||e-- >0)&&!(r=i.next()).done;)a.push(r.value)}catch(t){o={error:t}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(o)throw o.error}}return a},l=this&&this.__spread||function(){for(var t=[],e=0;e<arguments.length;e++)t=t.concat(u(arguments[e]));return t};Object.defineProperty(e,"__esModule",{value:!0}),e.liteAdaptor=e.LiteAdaptor=void 0;var s=n(8),c=n(1),p=n(0),f=n(2),d=n(5),h=n(3),y=n(10),v=n(11),m=function(t){function e(e){void 0===e&&(e=null);var n=t.call(this)||this,r=n.constructor;return n.options=v.userOptions(v.defaultOptions({},r.OPTIONS),e),n.parser=new h.LiteParser,n.window=new d.LiteWindow,n}return o(e,t),e.prototype.parse=function(t,e){return this.parser.parseFromString(t,e,this)},e.prototype.create=function(t,e){return void 0===e&&(e=null),new p.LiteElement(t)},e.prototype.text=function(t){return new f.LiteText(t)},e.prototype.comment=function(t){return new f.LiteComment(t)},e.prototype.createDocument=function(){return new c.LiteDocument},e.prototype.head=function(t){return t.head},e.prototype.body=function(t){return t.body},e.prototype.root=function(t){return t.root},e.prototype.doctype=function(t){return t.type},e.prototype.tags=function(t,e,n){void 0===n&&(n=null);var r=[],o=[];if(n)return o;for(var i=t;i;){var a=i.kind;"#text"!==a&&"#comment"!==a&&(i=i,a===e&&o.push(i),i.children.length&&(r=i.children.concat(r))),i=r.shift()}return o},e.prototype.elementById=function(t,e){for(var n=[],r=t;r;){if("#text"!==r.kind&&"#comment"!==r.kind){if((r=r).attributes.id===e)return r;r.children.length&&(n=r.children.concat(n))}r=n.shift()}return null},e.prototype.elementsByClass=function(t,e){for(var n=[],r=[],o=t;o;){if("#text"!==o.kind&&"#comment"!==o.kind)((o=o).attributes.class||"").trim().split(/ +/).includes(e)&&r.push(o),o.children.length&&(n=o.children.concat(n));o=n.shift()}return r},e.prototype.getElements=function(t,e){var n,r,o=[],i=this.body(e);try{for(var u=a(t),l=u.next();!l.done;l=u.next()){var s=l.value;if("string"==typeof s)if("#"===s.charAt(0)){var c=this.elementById(i,s.slice(1));c&&o.push(c)}else"."===s.charAt(0)?o=o.concat(this.elementsByClass(i,s.slice(1))):s.match(/^[-a-z][-a-z0-9]*$/i)&&(o=o.concat(this.tags(i,s)));else Array.isArray(s)?o=o.concat(s):s instanceof this.window.NodeList||s instanceof this.window.HTMLCollection?o=o.concat(s.nodes):o.push(s)}}catch(t){n={error:t}}finally{try{l&&!l.done&&(r=u.return)&&r.call(u)}finally{if(n)throw n.error}}return o},e.prototype.contains=function(t,e){for(;e&&e!==t;)e=this.parent(e);return!!e},e.prototype.parent=function(t){return t.parent},e.prototype.childIndex=function(t){return t.parent?t.parent.children.findIndex((function(e){return e===t})):-1},e.prototype.append=function(t,e){return e.parent&&this.remove(e),t.children.push(e),e.parent=t,e},e.prototype.insert=function(t,e){if(t.parent&&this.remove(t),e&&e.parent){var n=this.childIndex(e);e.parent.children.splice(n,0,t),t.parent=e.parent}},e.prototype.remove=function(t){var e=this.childIndex(t);return e>=0&&t.parent.children.splice(e,1),t.parent=null,t},e.prototype.replace=function(t,e){var n=this.childIndex(e);return n>=0&&(e.parent.children[n]=t,t.parent=e.parent,e.parent=null),e},e.prototype.clone=function(t){var e=this,n=new p.LiteElement(t.kind);return n.attributes=i({},t.attributes),n.children=t.children.map((function(t){if("#text"===t.kind)return new f.LiteText(t.value);if("#comment"===t.kind)return new f.LiteComment(t.value);var r=e.clone(t);return r.parent=n,r})),n},e.prototype.split=function(t,e){var n=new f.LiteText(t.value.slice(e));return t.value=t.value.slice(0,e),t.parent.children.splice(this.childIndex(t)+1,0,n),n.parent=t.parent,n},e.prototype.next=function(t){var e=t.parent;if(!e)return null;var n=this.childIndex(t)+1;return n>=0&&n<e.children.length?e.children[n]:null},e.prototype.previous=function(t){var e=t.parent;if(!e)return null;var n=this.childIndex(t)-1;return n>=0?e.children[n]:null},e.prototype.firstChild=function(t){return t.children[0]},e.prototype.lastChild=function(t){return t.children[t.children.length-1]},e.prototype.childNodes=function(t){return l(t.children)},e.prototype.childNode=function(t,e){return t.children[e]},e.prototype.kind=function(t){return t.kind},e.prototype.value=function(t){return"#text"===t.kind?t.value:"#comment"===t.kind?t.value.replace(/^<!(--)?((?:.|\n)*)\1>$/,"$2"):""},e.prototype.textContent=function(t){var e=this;return t.children.reduce((function(t,n){return t+("#text"===n.kind?n.value:"#comment"===n.kind?"":e.textContent(n))}),"")},e.prototype.innerHTML=function(t){return this.parser.serializeInner(this,t)},e.prototype.outerHTML=function(t){return this.parser.serialize(this,t)},e.prototype.setAttribute=function(t,e,n,r){void 0===r&&(r=null),"string"!=typeof n&&(n=String(n)),r&&(e=r.replace(/.*\//,"")+":"+e.replace(/^.*:/,"")),t.attributes[e]=n,"style"===e&&(t.styles=null)},e.prototype.getAttribute=function(t,e){return t.attributes[e]},e.prototype.removeAttribute=function(t,e){delete t.attributes[e]},e.prototype.hasAttribute=function(t,e){return t.attributes.hasOwnProperty(e)},e.prototype.allAttributes=function(t){var e,n,r=t.attributes,o=[];try{for(var i=a(Object.keys(r)),u=i.next();!u.done;u=i.next()){var l=u.value;o.push({name:l,value:r[l]})}}catch(t){e={error:t}}finally{try{u&&!u.done&&(n=i.return)&&n.call(i)}finally{if(e)throw e.error}}return o},e.prototype.addClass=function(t,e){var n=(t.attributes.class||"").split(/ /);n.find((function(t){return t===e}))||(n.push(e),t.attributes.class=n.join(" "))},e.prototype.removeClass=function(t,e){var n=(t.attributes.class||"").split(/ /),r=n.findIndex((function(t){return t===e}));r>=0&&(n.splice(r,1),t.attributes.class=n.join(" "))},e.prototype.hasClass=function(t,e){return!!(t.attributes.class||"").split(/ /).find((function(t){return t===e}))},e.prototype.setStyle=function(t,e,n){t.styles||(t.styles=new y.Styles(this.getAttribute(t,"style"))),t.styles.set(e,n),t.attributes.style=t.styles.cssText},e.prototype.getStyle=function(t,e){if(!t.styles){var n=this.getAttribute(t,"style");if(!n)return"";t.styles=new y.Styles(n)}return t.styles.get(e)},e.prototype.allStyles=function(t){return this.getAttribute(t,"style")},e.prototype.fontSize=function(t){return this.options.fontSize},e.prototype.fontFamily=function(t){return this.options.fontFamily},e.prototype.nodeSize=function(t,e,n){return void 0===e&&(e=1),void 0===n&&(n=null),[.6*this.textContent(t).length,0]},e.prototype.nodeBBox=function(t){return{left:0,right:0,top:0,bottom:0}},e.OPTIONS={fontSize:16,fontFamily:"Times"},e}(s.AbstractDOMAdaptor);e.LiteAdaptor=m,e.liteAdaptor=function(t){return void 0===t&&(t=null),new m(t)}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.LiteWindow=void 0;var r=n(0),o=n(1),i=n(6),a=n(3),u=function(){this.DOMParser=a.LiteParser,this.NodeList=i.LiteList,this.HTMLCollection=i.LiteList,this.HTMLElement=r.LiteElement,this.DocumentFragment=i.LiteList,this.Document=o.LiteDocument,this.document=new o.LiteDocument};e.LiteWindow=u},function(t,e,n){"use strict";var r=this&&this.__read||function(t,e){var n="function"==typeof Symbol&&t[Symbol.iterator];if(!n)return t;var r,o,i=n.call(t),a=[];try{for(;(void 0===e||e-- >0)&&!(r=i.next()).done;)a.push(r.value)}catch(t){o={error:t}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(o)throw o.error}}return a},o=this&&this.__spread||function(){for(var t=[],e=0;e<arguments.length;e++)t=t.concat(r(arguments[e]));return t};Object.defineProperty(e,"__esModule",{value:!0}),e.LiteList=void 0;var i=function(){function t(t){this.nodes=[],this.nodes=o(t)}return t.prototype.append=function(t){this.nodes.push(t)},t.prototype[Symbol.iterator]=function(){var t=0;return{next:function(){return t===this.nodes.length?{value:null,done:!0}:{value:this.nodes[t++],done:!1}}}},t}();e.LiteList=i},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.isObject=MathJax._.components.global.isObject,e.combineConfig=MathJax._.components.global.combineConfig,e.combineDefaults=MathJax._.components.global.combineDefaults,e.combineWithMathJax=MathJax._.components.global.combineWithMathJax,e.MathJax=MathJax._.components.global.MathJax},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.AbstractDOMAdaptor=MathJax._.core.DOMAdaptor.AbstractDOMAdaptor},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.options=MathJax._.util.Entities.options,e.entities=MathJax._.util.Entities.entities,e.add=MathJax._.util.Entities.add,e.remove=MathJax._.util.Entities.remove,e.translate=MathJax._.util.Entities.translate,e.numeric=MathJax._.util.Entities.numeric},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.Styles=MathJax._.util.Styles.Styles},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.APPEND=MathJax._.util.Options.APPEND,e.REMOVE=MathJax._.util.Options.REMOVE,e.Expandable=MathJax._.util.Options.Expandable,e.expandable=MathJax._.util.Options.expandable,e.makeArray=MathJax._.util.Options.makeArray,e.keys=MathJax._.util.Options.keys,e.copy=MathJax._.util.Options.copy,e.insert=MathJax._.util.Options.insert,e.defaultOptions=MathJax._.util.Options.defaultOptions,e.userOptions=MathJax._.util.Options.userOptions,e.selectOptions=MathJax._.util.Options.selectOptions,e.selectOptionsFromKeys=MathJax._.util.Options.selectOptionsFromKeys,e.separateOptions=MathJax._.util.Options.separateOptions},function(t,e,n){"use strict";n.r(e);var r=n(7),o=n(4),i=n(1),a=n(0),u=n(6),l=n(3),s=n(2),c=n(5);Object(r.combineWithMathJax)({_:{adaptors:{liteAdaptor:o,lite:{Document:i,Element:a,List:u,Parser:l,Text:s,Window:c}}}}),MathJax.startup&&(MathJax.startup.registerConstructor("liteAdaptor",o.liteAdaptor),MathJax.startup.useAdaptor("liteAdaptor",!0))}]);