import{d as W,n as H,v as G,p as K,b as M,B as ae}from"../common/preact.module-eb550cef.js";import"../common/hooks.module-11136954.js";function N(e,t){for(var n in e)if("__source"!==n&&!(n in t))return!0;for(var r in t)if("__source"!==r&&e[r]!==t[r])return!0;return!1}function Q(e){this.props=e}(Q.prototype=new W).isPureReactComponent=!0,Q.prototype.shouldComponentUpdate=function(e,t){return N(this.props,e)||N(this.state,t)};var ce=H.__b;H.__b=e=>{e.type&&e.type.__f&&e.ref&&(e.props.ref=e.ref,e.ref=null),ce&&ce(e)};var ue=H.__e;function oe(e){return e&&(e.__c&&e.__c.__H&&(e.__c.__H.__.forEach((e=>{"function"==typeof e.__c&&e.__c()})),e.__c.__H=null),(e=((e,t)=>{for(var n in t)e[n]=t[n];return e})({},e)).__c=null,e.__k=e.__k&&e.__k.map(oe)),e}function pe(e){return e&&(e.__v=null,e.__k=e.__k&&e.__k.map(pe)),e}function se(){this.__u=0,this.t=null,this.__b=null}function re(e){var t=e.__.__c;return t&&t.__e&&t.__e(e)}function le(){this.u=null,this.o=null}H.__e=(e,t,n)=>{if(e.then)for(var r,o=t;o=o.__;)if((r=o.__c)&&r.__c)return null==t.__e&&(t.__e=n.__e,t.__k=n.__k),r.__c(e,t);ue(e,t,n)},(se.prototype=new W).__c=function(e,t){var n=t.__c,r=this;null==r.t&&(r.t=[]),r.t.push(n);var o=re(r.__v),_=!1,i=()=>{_||(_=!0,n.componentWillUnmount=n.__c,o?o(l):l())};n.__c=n.componentWillUnmount,n.componentWillUnmount=()=>{i(),n.__c&&n.__c()};var l=()=>{var e;if(!--r.__u)for(r.__v.__k[0]=pe(r.state.__e),r.setState({__e:r.__b=null});e=r.t.pop();)e.forceUpdate()};!0===t.__h||r.__u++||r.setState({__e:r.__b=r.__v.__k[0]}),e.then(i,i)},se.prototype.componentWillUnmount=function(){this.t=[]},se.prototype.render=function(e,t){this.__b&&(this.__v.__k&&(this.__v.__k[0]=oe(this.__b)),this.__b=null);var n=t.__e&&G(K,null,e.fallback);return n&&(n.__h=null),[G(K,null,t.__e?null:e.children),n]};var ne=(e,t,n)=>{if(++n[1]===n[0]&&e.o.delete(t),e.props.revealOrder&&("t"!==e.props.revealOrder[0]||!e.o.size))for(n=e.u;n;){for(;n.length>3;)n.pop()();if(n[1]<n[0])break;e.u=n=n[2]}};(le.prototype=new W).__e=function(e){var t=this,n=re(t.__v),r=t.o.get(e);return r[0]++,o=>{var _=()=>{t.props.revealOrder?(r.push(o),ne(t,e,r)):o()};n?n(_):_()}},le.prototype.render=function(e){this.u=null,this.o=new Map;var t=M(e.children);e.revealOrder&&"b"===e.revealOrder[0]&&t.reverse();for(var n=t.length;n--;)this.o.set(t[n],this.u=[1,0,this.u]);return e.children},le.prototype.componentDidUpdate=le.prototype.componentDidMount=function(){var e=this;this.o.forEach(((t,n)=>{ne(e,n,t)}))};var Z="undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,fe=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,ie="undefined"!=typeof Symbol?/fil|che|rad/i:/fil|che|ra/i;W.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach((function(e){Object.defineProperty(W.prototype,e,{configurable:!0,get:function(){return this["UNSAFE_"+e]},set:function(t){Object.defineProperty(this,e,{configurable:!0,writable:!0,value:t})}})}));var ve=H.event;function te(){}function he(){return this.cancelBubble}function de(){return this.defaultPrevented}H.event=e=>(ve&&(e=ve(e)),e.persist=te,e.isPropagationStopped=he,e.isDefaultPrevented=de,e.nativeEvent=e);var me={configurable:!0,get:function(){return this.class}},be=H.vnode;H.vnode=e=>{var t=e.type,n=e.props,r=n;if("string"==typeof t){for(var o in r={},n){var _=n[o];"defaultValue"===o&&"value"in n&&null==n.value?o="value":"download"===o&&!0===_?_="":/ondoubleclick/i.test(o)?o="ondblclick":/^onchange(textarea|input)/i.test(o+t)&&!ie.test(n.type)?o="oninput":/^on(Ani|Tra|Tou|BeforeInp)/.test(o)?o=o.toLowerCase():fe.test(o)?o=o.replace(/[A-Z0-9]/,"-$&").toLowerCase():null===_&&(_=void 0),r[o]=_}"select"==t&&r.multiple&&Array.isArray(r.value)&&(r.value=M(n.children).forEach((e=>{e.props.selected=-1!=r.value.indexOf(e.props.value)}))),e.props=r}t&&n.class!=n.className&&(me.enumerable="className"in n,null!=n.className&&(r.class=n.className),Object.defineProperty(r,"className",me)),e.$$typeof=Z,be&&be(e)};var ye=H.__r;H.__r=e=>{ye&&ye(e),e.__c};let _=ae();export{_ as StoreContext};