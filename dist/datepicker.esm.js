var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var dayjs_min = createCommonjsModule(function (module, exports) {
!function(t,e){module.exports=e();}(commonjsGlobal,function(){var t="millisecond",e="second",n="minute",r="hour",i="day",s="week",u="month",o="quarter",a="year",h=/^(\d{4})-?(\d{1,2})-?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?.?(\d{1,3})?$/,f=/\[([^\]]+)]|Y{2,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,c=function(t,e,n){var r=String(t);return !r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},d={s:c,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return (e<=0?"+":"-")+c(r,2,"0")+":"+c(i,2,"0")},m:function(t,e){var n=12*(e.year()-t.year())+(e.month()-t.month()),r=t.clone().add(n,u),i=e-r<0,s=t.clone().add(n+(i?-1:1),u);return Number(-(n+(e-r)/(i?r-s:s-r))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(h){return {M:u,y:a,w:s,d:i,D:"date",h:r,m:n,s:e,ms:t,Q:o}[h]||String(h||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},$={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},l="en",m={};m[l]=$;var y=function(t){return t instanceof v},M=function(t,e,n){var r;if(!t)return l;if("string"==typeof t)m[t]&&(r=t),e&&(m[t]=e,r=t);else {var i=t.name;m[i]=t,r=i;}return !n&&r&&(l=r),r||!n&&l},g=function(t,e){if(y(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new v(n)},D=d;D.l=M,D.i=y,D.w=function(t,e){return g(t,{locale:e.$L,utc:e.$u,$offset:e.$offset})};var v=function(){function c(t){this.$L=this.$L||M(t.locale,null,!0),this.parse(t);}var d=c.prototype;return d.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(D.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(h);if(r)return n?new Date(Date.UTC(r[1],r[2]-1,r[3]||1,r[4]||0,r[5]||0,r[6]||0,r[7]||0)):new Date(r[1],r[2]-1,r[3]||1,r[4]||0,r[5]||0,r[6]||0,r[7]||0)}return new Date(e)}(t),this.init();},d.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds();},d.$utils=function(){return D},d.isValid=function(){return !("Invalid Date"===this.$d.toString())},d.isSame=function(t,e){var n=g(t);return this.startOf(e)<=n&&n<=this.endOf(e)},d.isAfter=function(t,e){return g(t)<this.startOf(e)},d.isBefore=function(t,e){return this.endOf(e)<g(t)},d.$g=function(t,e,n){return D.u(t)?this[e]:this.set(n,t)},d.year=function(t){return this.$g(t,"$y",a)},d.month=function(t){return this.$g(t,"$M",u)},d.day=function(t){return this.$g(t,"$W",i)},d.date=function(t){return this.$g(t,"$D","date")},d.hour=function(t){return this.$g(t,"$H",r)},d.minute=function(t){return this.$g(t,"$m",n)},d.second=function(t){return this.$g(t,"$s",e)},d.millisecond=function(e){return this.$g(e,"$ms",t)},d.unix=function(){return Math.floor(this.valueOf()/1e3)},d.valueOf=function(){return this.$d.getTime()},d.startOf=function(t,o){var h=this,f=!!D.u(o)||o,c=D.p(t),d=function(t,e){var n=D.w(h.$u?Date.UTC(h.$y,e,t):new Date(h.$y,e,t),h);return f?n:n.endOf(i)},$=function(t,e){return D.w(h.toDate()[t].apply(h.toDate("s"),(f?[0,0,0,0]:[23,59,59,999]).slice(e)),h)},l=this.$W,m=this.$M,y=this.$D,M="set"+(this.$u?"UTC":"");switch(c){case a:return f?d(1,0):d(31,11);case u:return f?d(1,m):d(0,m+1);case s:var g=this.$locale().weekStart||0,v=(l<g?l+7:l)-g;return d(f?y-v:y+(6-v),m);case i:case"date":return $(M+"Hours",0);case r:return $(M+"Minutes",1);case n:return $(M+"Seconds",2);case e:return $(M+"Milliseconds",3);default:return this.clone()}},d.endOf=function(t){return this.startOf(t,!1)},d.$set=function(s,o){var h,f=D.p(s),c="set"+(this.$u?"UTC":""),d=(h={},h[i]=c+"Date",h.date=c+"Date",h[u]=c+"Month",h[a]=c+"FullYear",h[r]=c+"Hours",h[n]=c+"Minutes",h[e]=c+"Seconds",h[t]=c+"Milliseconds",h)[f],$=f===i?this.$D+(o-this.$W):o;if(f===u||f===a){var l=this.clone().set("date",1);l.$d[d]($),l.init(),this.$d=l.set("date",Math.min(this.$D,l.daysInMonth())).toDate();}else d&&this.$d[d]($);return this.init(),this},d.set=function(t,e){return this.clone().$set(t,e)},d.get=function(t){return this[D.p(t)]()},d.add=function(t,o){var h,f=this;t=Number(t);var c=D.p(o),d=function(e){var n=g(f);return D.w(n.date(n.date()+Math.round(e*t)),f)};if(c===u)return this.set(u,this.$M+t);if(c===a)return this.set(a,this.$y+t);if(c===i)return d(1);if(c===s)return d(7);var $=(h={},h[n]=6e4,h[r]=36e5,h[e]=1e3,h)[c]||1,l=this.$d.getTime()+t*$;return D.w(l,this)},d.subtract=function(t,e){return this.add(-1*t,e)},d.format=function(t){var e=this;if(!this.isValid())return "Invalid Date";var n=t||"YYYY-MM-DDTHH:mm:ssZ",r=D.z(this),i=this.$locale(),s=this.$H,u=this.$m,o=this.$M,a=i.weekdays,h=i.months,c=function(t,r,i,s){return t&&(t[r]||t(e,n))||i[r].substr(0,s)},d=function(t){return D.s(s%12||12,t,"0")},$=i.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},l={YY:String(this.$y).slice(-2),YYYY:this.$y,M:o+1,MM:D.s(o+1,2,"0"),MMM:c(i.monthsShort,o,h,3),MMMM:c(h,o),D:this.$D,DD:D.s(this.$D,2,"0"),d:String(this.$W),dd:c(i.weekdaysMin,this.$W,a,2),ddd:c(i.weekdaysShort,this.$W,a,3),dddd:a[this.$W],H:String(s),HH:D.s(s,2,"0"),h:d(1),hh:d(2),a:$(s,u,!0),A:$(s,u,!1),m:String(u),mm:D.s(u,2,"0"),s:String(this.$s),ss:D.s(this.$s,2,"0"),SSS:D.s(this.$ms,3,"0"),Z:r};return n.replace(f,function(t,e){return e||l[t]||r.replace(":","")})},d.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},d.diff=function(t,h,f){var c,d=D.p(h),$=g(t),l=6e4*($.utcOffset()-this.utcOffset()),m=this-$,y=D.m(this,$);return y=(c={},c[a]=y/12,c[u]=y,c[o]=y/3,c[s]=(m-l)/6048e5,c[i]=(m-l)/864e5,c[r]=m/36e5,c[n]=m/6e4,c[e]=m/1e3,c)[d]||m,f?y:D.a(y)},d.daysInMonth=function(){return this.endOf(u).$D},d.$locale=function(){return m[this.$L]},d.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=M(t,e,!0);return r&&(n.$L=r),n},d.clone=function(){return D.w(this.$d,this)},d.toDate=function(){return new Date(this.valueOf())},d.toJSON=function(){return this.isValid()?this.toISOString():null},d.toISOString=function(){return this.$d.toISOString()},d.toString=function(){return this.$d.toUTCString()},c}();return g.prototype=v.prototype,g.extend=function(t,e){return t(e,v,g),g},g.locale=M,g.isDayjs=y,g.unix=function(t){return g(1e3*t)},g.en=m[l],g.Ls=m,g});
});

var isoWeek = createCommonjsModule(function (module, exports) {
!function(e,t){module.exports=t();}(commonjsGlobal,function(){var e="day";return function(t,i,s){var a=function(t){return t.add(4-t.isoWeekday(),e)},d=i.prototype;d.isoWeekYear=function(){return a(this).year()},d.isoWeek=function(t){if(!this.$utils().u(t))return this.add(7*(t-this.isoWeek()),e);var i,d,n,r=a(this),o=(i=this.isoWeekYear(),d=s().year(i).startOf("year"),n=4-d.isoWeekday(),d.isoWeekday()>4&&(n+=7),d.add(n,e));return r.diff(o,"week")+1},d.isoWeekday=function(e){return this.$utils().u(e)?this.day()||7:this.day(this.day()%7?e:e-7)};var n=d.startOf;d.startOf=function(e,t){var i=this.$utils(),s=!!i.u(t)||t;return "isoweek"===i.p(e)?s?this.date(this.date()-(this.isoWeekday()-1)).startOf("day"):this.date(this.date()-1-(this.isoWeekday()-1)+7).endOf("day"):n.bind(this)(e,t)};}});
});

var updateLocale = createCommonjsModule(function (module, exports) {
!function(e,n){module.exports=n();}(commonjsGlobal,function(){return function(e,n,t){t.updateLocale=function(e,n){var o=t.Ls[e];if(o)return (n?Object.keys(n):[]).forEach(function(e){o[e]=n[e];}),o};}});
});

var isBetween = createCommonjsModule(function (module, exports) {
!function(e,t){module.exports=t();}(commonjsGlobal,function(){return function(e,t,i){t.prototype.isBetween=function(e,t,s,f){var n=i(e),o=i(t),r="("===(f=f||"()")[0],u=")"===f[1];return (r?this.isAfter(n,s):!this.isBefore(n,s))&&(u?this.isBefore(o,s):!this.isAfter(o,s))||(r?this.isBefore(n,s):!this.isAfter(n,s))&&(u?this.isAfter(o,s):!this.isBefore(o,s))};}});
});

var advancedFormat = createCommonjsModule(function (module, exports) {
!function(e,t){module.exports=t();}(commonjsGlobal,function(){return function(e,t,r){var n=t.prototype,o=n.format;r.en.ordinal=function(e){var t=["th","st","nd","rd"],r=e%100;return "["+e+(t[(r-20)%10]||t[r]||t[0])+"]"},n.format=function(e){var t=this,r=this.$locale(),n=this.$utils(),a=(e||"YYYY-MM-DDTHH:mm:ssZ").replace(/\[([^\]]+)]|Q|wo|ww|w|gggg|Do|X|x|k{1,2}|S/g,function(e){switch(e){case"Q":return Math.ceil((t.$M+1)/3);case"Do":return r.ordinal(t.$D);case"gggg":return t.weekYear();case"wo":return r.ordinal(t.week(),"W");case"w":case"ww":return n.s(t.week(),"w"===e?1:2,"0");case"k":case"kk":return n.s(String(0===t.$H?24:t.$H),"k"===e?1:2,"0");case"X":return Math.floor(t.$d.getTime()/1e3);case"x":return t.$d.getTime();default:return e}});return o.bind(this)(a)};}});
});

var quarterOfYear = createCommonjsModule(function (module, exports) {
!function(t,n){module.exports=n();}(commonjsGlobal,function(){var t="month",n="quarter";return function(r,i){var e=i.prototype;e.quarter=function(t){return this.$utils().u(t)?Math.ceil((this.month()+1)/3):this.month(this.month()%3+3*(t-1))};var u=e.add;e.add=function(r,i){return r=Number(r),this.$utils().p(i)===n?this.add(3*r,t):u.bind(this)(r,i)};var s=e.startOf;e.startOf=function(r,i){var e=this.$utils(),u=!!e.u(i)||i;if(e.p(r)===n){var a=this.quarter()-1;return u?this.month(3*a).startOf(t).startOf("day"):this.month(3*a+2).endOf(t).endOf("day")}return s.bind(this)(r,i)};}});
});

var localeData = createCommonjsModule(function (module, exports) {
!function(n,t){module.exports=t();}(commonjsGlobal,function(){return function(n,t,e){var r=function(n){return n&&(n.indexOf?n:n.s)},o=function(n,t,e,o){var u=n.name?n:n.$locale(),a=r(u[t]),s=r(u[e]);return a||s.map(function(n){return n.substr(0,o)})},u=function(){return e.Ls[e.locale()]};t.prototype.localeData=function(){return function(){var n=this;return {months:function(t){return t?t.format("MMMM"):o(n,"months")},monthsShort:function(t){return t?t.format("MMM"):o(n,"monthsShort","months",3)},firstDayOfWeek:function(){return n.$locale().weekStart||0},weekdaysMin:function(t){return t?t.format("dd"):o(n,"weekdaysMin","weekdays",2)},weekdaysShort:function(t){return t?t.format("ddd"):o(n,"weekdaysShort","weekdays",3)},longDateFormat:function(t){return n.$locale().formats[t]}}}.bind(this)()},e.localeData=function(){var n=u();return {firstDayOfWeek:function(){return n.weekStart||0},weekdays:function(){return e.weekdays()},weekdaysShort:function(){return e.weekdaysShort()},weekdaysMin:function(){return e.weekdaysMin()},months:function(){return e.months()},monthsShort:function(){return e.monthsShort()}}},e.months=function(){return o(u(),"months")},e.monthsShort=function(){return o(u(),"monthsShort","months",3)},e.weekdays=function(){return u().weekdays},e.weekdaysShort=function(){return o(u(),"weekdaysShort","weekdays",3)},e.weekdaysMin=function(){return o(u(),"weekdaysMin","weekdays",2)};}});
});

var isMergeableObject = function isMergeableObject(value) {
	return isNonNullObject(value)
		&& !isSpecial(value)
};

function isNonNullObject(value) {
	return !!value && typeof value === 'object'
}

function isSpecial(value) {
	var stringValue = Object.prototype.toString.call(value);

	return stringValue === '[object RegExp]'
		|| stringValue === '[object Date]'
		|| isReactElement(value)
}

// see https://github.com/facebook/react/blob/b5ac963fb791d1298e7f396236383bc955f916c1/src/isomorphic/classic/element/ReactElement.js#L21-L25
var canUseSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = canUseSymbol ? Symbol.for('react.element') : 0xeac7;

function isReactElement(value) {
	return value.$$typeof === REACT_ELEMENT_TYPE
}

function emptyTarget(val) {
	return Array.isArray(val) ? [] : {}
}

function cloneUnlessOtherwiseSpecified(value, options) {
	return (options.clone !== false && options.isMergeableObject(value))
		? deepmerge(emptyTarget(value), value, options)
		: value
}

function defaultArrayMerge(target, source, options) {
	return target.concat(source).map(function(element) {
		return cloneUnlessOtherwiseSpecified(element, options)
	})
}

function getMergeFunction(key, options) {
	if (!options.customMerge) {
		return deepmerge
	}
	var customMerge = options.customMerge(key);
	return typeof customMerge === 'function' ? customMerge : deepmerge
}

function getEnumerableOwnPropertySymbols(target) {
	return Object.getOwnPropertySymbols
		? Object.getOwnPropertySymbols(target).filter(function(symbol) {
			return target.propertyIsEnumerable(symbol)
		})
		: []
}

function getKeys(target) {
	return Object.keys(target).concat(getEnumerableOwnPropertySymbols(target))
}

function propertyIsOnObject(object, property) {
	try {
		return property in object
	} catch(_) {
		return false
	}
}

// Protects from prototype poisoning and unexpected merging up the prototype chain.
function propertyIsUnsafe(target, key) {
	return propertyIsOnObject(target, key) // Properties are safe to merge if they don't exist in the target yet,
		&& !(Object.hasOwnProperty.call(target, key) // unsafe if they exist up the prototype chain,
			&& Object.propertyIsEnumerable.call(target, key)) // and also unsafe if they're nonenumerable.
}

function mergeObject(target, source, options) {
	var destination = {};
	if (options.isMergeableObject(target)) {
		getKeys(target).forEach(function(key) {
			destination[key] = cloneUnlessOtherwiseSpecified(target[key], options);
		});
	}
	getKeys(source).forEach(function(key) {
		if (propertyIsUnsafe(target, key)) {
			return
		}

		if (propertyIsOnObject(target, key) && options.isMergeableObject(source[key])) {
			destination[key] = getMergeFunction(key, options)(target[key], source[key], options);
		} else {
			destination[key] = cloneUnlessOtherwiseSpecified(source[key], options);
		}
	});
	return destination
}

function deepmerge(target, source, options) {
	options = options || {};
	options.arrayMerge = options.arrayMerge || defaultArrayMerge;
	options.isMergeableObject = options.isMergeableObject || isMergeableObject;
	// cloneUnlessOtherwiseSpecified is added to `options` so that custom arrayMerge()
	// implementations can use it. The caller may not replace it.
	options.cloneUnlessOtherwiseSpecified = cloneUnlessOtherwiseSpecified;

	var sourceIsArray = Array.isArray(source);
	var targetIsArray = Array.isArray(target);
	var sourceAndTargetTypesMatch = sourceIsArray === targetIsArray;

	if (!sourceAndTargetTypesMatch) {
		return cloneUnlessOtherwiseSpecified(source, options)
	} else if (sourceIsArray) {
		return options.arrayMerge(target, source, options)
	} else {
		return mergeObject(target, source, options)
	}
}

deepmerge.all = function deepmergeAll(array, options) {
	if (!Array.isArray(array)) {
		throw new Error('first argument should be an array')
	}

	return array.reduce(function(prev, next) {
		return deepmerge(prev, next, options)
	}, {})
};

var deepmerge_1 = deepmerge;

var cjs = deepmerge_1;

function getBoundingClientRect(element) {
  var rect = element.getBoundingClientRect();
  return {
    width: rect.width,
    height: rect.height,
    top: rect.top,
    right: rect.right,
    bottom: rect.bottom,
    left: rect.left,
    x: rect.left,
    y: rect.top
  };
}

/*:: import type { Window } from '../types'; */

/*:: declare function getWindow(node: Node | Window): Window; */
function getWindow(node) {
  if (node.toString() !== '[object Window]') {
    var ownerDocument = node.ownerDocument;
    return ownerDocument ? ownerDocument.defaultView : window;
  }

  return node;
}

function getWindowScroll(node) {
  var win = getWindow(node);
  var scrollLeft = win.pageXOffset;
  var scrollTop = win.pageYOffset;
  return {
    scrollLeft: scrollLeft,
    scrollTop: scrollTop
  };
}

/*:: declare function isElement(node: mixed): boolean %checks(node instanceof
  Element); */

function isElement(node) {
  var OwnElement = getWindow(node).Element;
  return node instanceof OwnElement || node instanceof Element;
}
/*:: declare function isHTMLElement(node: mixed): boolean %checks(node instanceof
  HTMLElement); */


function isHTMLElement(node) {
  var OwnElement = getWindow(node).HTMLElement;
  return node instanceof OwnElement || node instanceof HTMLElement;
}

function getHTMLElementScroll(element) {
  return {
    scrollLeft: element.scrollLeft,
    scrollTop: element.scrollTop
  };
}

function getNodeScroll(node) {
  if (node === getWindow(node) || !isHTMLElement(node)) {
    return getWindowScroll(node);
  } else {
    return getHTMLElementScroll(node);
  }
}

function getNodeName(element) {
  return element ? (element.nodeName || '').toLowerCase() : null;
}

function getDocumentElement(element) {
  // $FlowFixMe: assume body is always available
  return (isElement(element) ? element.ownerDocument : element.document).documentElement;
}

function getWindowScrollBarX(element) {
  // If <html> has a CSS width greater than the viewport, then this will be
  // incorrect for RTL.
  // Popper 1 is broken in this case and never had a bug report so let's assume
  // it's not an issue. I don't think anyone ever specifies width on <html>
  // anyway.
  // Browsers where the left scrollbar doesn't cause an issue report `0` for
  // this (e.g. Edge 2019, IE11, Safari)
  return getBoundingClientRect(getDocumentElement(element)).left + getWindowScroll(element).scrollLeft;
}

function getComputedStyle(element) {
  return getWindow(element).getComputedStyle(element);
}

function isScrollParent(element) {
  // Firefox wants us to check `-x` and `-y` variations as well
  var _getComputedStyle = getComputedStyle(element),
      overflow = _getComputedStyle.overflow,
      overflowX = _getComputedStyle.overflowX,
      overflowY = _getComputedStyle.overflowY;

  return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
}

// Composite means it takes into account transforms as well as layout.

function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
  if (isFixed === void 0) {
    isFixed = false;
  }

  var documentElement = getDocumentElement(offsetParent);
  var rect = getBoundingClientRect(elementOrVirtualElement);
  var isOffsetParentAnElement = isHTMLElement(offsetParent);
  var scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  var offsets = {
    x: 0,
    y: 0
  };

  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== 'body' || // https://github.com/popperjs/popper-core/issues/1078
    isScrollParent(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }

    if (isHTMLElement(offsetParent)) {
      offsets = getBoundingClientRect(offsetParent);
      offsets.x += offsetParent.clientLeft;
      offsets.y += offsetParent.clientTop;
    } else if (documentElement) {
      offsets.x = getWindowScrollBarX(documentElement);
    }
  }

  return {
    x: rect.left + scroll.scrollLeft - offsets.x,
    y: rect.top + scroll.scrollTop - offsets.y,
    width: rect.width,
    height: rect.height
  };
}

// Returns the layout rect of an element relative to its offsetParent. Layout
// means it doesn't take into account transforms.
function getLayoutRect(element) {
  return {
    x: element.offsetLeft,
    y: element.offsetTop,
    width: element.offsetWidth,
    height: element.offsetHeight
  };
}

function getParentNode(element) {
  if (getNodeName(element) === 'html') {
    return element;
  }

  return (// $FlowFixMe: this is a quicker (but less type safe) way to save quite some bytes from the bundle
    element.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    element.parentNode || // DOM Element detected
    // $FlowFixMe: need a better way to handle this...
    element.host || // ShadowRoot detected
    // $FlowFixMe: HTMLElement is a Node
    getDocumentElement(element) // fallback

  );
}

function getScrollParent(node) {
  if (['html', 'body', '#document'].indexOf(getNodeName(node)) >= 0) {
    // $FlowFixMe: assume body is always available
    return node.ownerDocument.body;
  }

  if (isHTMLElement(node) && isScrollParent(node)) {
    return node;
  }

  return getScrollParent(getParentNode(node));
}

/*
given a DOM element, return the list of all scroll parents, up the list of ancesors
until we get to the top window object. This list is what we attach scroll listeners
to, because if any of these parent elements scroll, we'll need to re-calculate the 
reference element's position.
*/

function listScrollParents(element, list) {
  if (list === void 0) {
    list = [];
  }

  var scrollParent = getScrollParent(element);
  var isBody = getNodeName(scrollParent) === 'body';
  var win = getWindow(scrollParent);
  var target = isBody ? [win].concat(win.visualViewport || [], isScrollParent(scrollParent) ? scrollParent : []) : scrollParent;
  var updatedList = list.concat(target);
  return isBody ? updatedList : // $FlowFixMe: isBody tells us target will be an HTMLElement here
  updatedList.concat(listScrollParents(getParentNode(target)));
}

function isTableElement(element) {
  return ['table', 'td', 'th'].indexOf(getNodeName(element)) >= 0;
}

function getTrueOffsetParent(element) {
  if (!isHTMLElement(element) || // https://github.com/popperjs/popper-core/issues/837
  getComputedStyle(element).position === 'fixed') {
    return null;
  }

  return element.offsetParent;
} // `.offsetParent` reports `null` for fixed elements, while absolute elements
// return the containing block


function getContainingBlock(element) {
  var currentNode = getParentNode(element);

  while (isHTMLElement(currentNode) && ['html', 'body'].indexOf(getNodeName(currentNode)) < 0) {
    var css = getComputedStyle(currentNode); // This is non-exhaustive but covers the most common CSS properties that
    // create a containing block.

    if (css.transform !== 'none' || css.perspective !== 'none' || css.willChange !== 'auto') {
      return currentNode;
    } else {
      currentNode = currentNode.parentNode;
    }
  }

  return null;
} // Gets the closest ancestor positioned element. Handles some edge cases,
// such as table ancestors and cross browser bugs.


function getOffsetParent(element) {
  var window = getWindow(element);
  var offsetParent = getTrueOffsetParent(element);

  while (offsetParent && isTableElement(offsetParent) && getComputedStyle(offsetParent).position === 'static') {
    offsetParent = getTrueOffsetParent(offsetParent);
  }

  if (offsetParent && getNodeName(offsetParent) === 'body' && getComputedStyle(offsetParent).position === 'static') {
    return window;
  }

  return offsetParent || getContainingBlock(element) || window;
}

var top = 'top';
var bottom = 'bottom';
var right = 'right';
var left = 'left';
var auto = 'auto';
var basePlacements = [top, bottom, right, left];
var start = 'start';
var end = 'end';
var clippingParents = 'clippingParents';
var viewport = 'viewport';
var popper = 'popper';
var reference = 'reference';
var variationPlacements = /*#__PURE__*/basePlacements.reduce(function (acc, placement) {
  return acc.concat([placement + "-" + start, placement + "-" + end]);
}, []);
var placements = /*#__PURE__*/[].concat(basePlacements, [auto]).reduce(function (acc, placement) {
  return acc.concat([placement, placement + "-" + start, placement + "-" + end]);
}, []); // modifiers that need to read the DOM

var beforeRead = 'beforeRead';
var read = 'read';
var afterRead = 'afterRead'; // pure-logic modifiers

var beforeMain = 'beforeMain';
var main = 'main';
var afterMain = 'afterMain'; // modifier with the purpose to write to the DOM (or write into a framework state)

var beforeWrite = 'beforeWrite';
var write = 'write';
var afterWrite = 'afterWrite';
var modifierPhases = [beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite];

function order(modifiers) {
  var map = new Map();
  var visited = new Set();
  var result = [];
  modifiers.forEach(function (modifier) {
    map.set(modifier.name, modifier);
  }); // On visiting object, check for its dependencies and visit them recursively

  function sort(modifier) {
    visited.add(modifier.name);
    var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
    requires.forEach(function (dep) {
      if (!visited.has(dep)) {
        var depModifier = map.get(dep);

        if (depModifier) {
          sort(depModifier);
        }
      }
    });
    result.push(modifier);
  }

  modifiers.forEach(function (modifier) {
    if (!visited.has(modifier.name)) {
      // check for visited object
      sort(modifier);
    }
  });
  return result;
}

function orderModifiers(modifiers) {
  // order based on dependencies
  var orderedModifiers = order(modifiers); // order based on phase

  return modifierPhases.reduce(function (acc, phase) {
    return acc.concat(orderedModifiers.filter(function (modifier) {
      return modifier.phase === phase;
    }));
  }, []);
}

function debounce(fn) {
  var pending;
  return function () {
    if (!pending) {
      pending = new Promise(function (resolve) {
        Promise.resolve().then(function () {
          pending = undefined;
          resolve(fn());
        });
      });
    }

    return pending;
  };
}

function getBasePlacement(placement) {
  return placement.split('-')[0];
}

function mergeByName(modifiers) {
  var merged = modifiers.reduce(function (merged, current) {
    var existing = merged[current.name];
    merged[current.name] = existing ? Object.assign(Object.assign(Object.assign({}, existing), current), {}, {
      options: Object.assign(Object.assign({}, existing.options), current.options),
      data: Object.assign(Object.assign({}, existing.data), current.data)
    }) : current;
    return merged;
  }, {}); // IE11 does not support Object.values

  return Object.keys(merged).map(function (key) {
    return merged[key];
  });
}

var DEFAULT_OPTIONS = {
  placement: 'bottom',
  modifiers: [],
  strategy: 'absolute'
};

function areValidElements() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return !args.some(function (element) {
    return !(element && typeof element.getBoundingClientRect === 'function');
  });
}

function popperGenerator(generatorOptions) {
  if (generatorOptions === void 0) {
    generatorOptions = {};
  }

  var _generatorOptions = generatorOptions,
      _generatorOptions$def = _generatorOptions.defaultModifiers,
      defaultModifiers = _generatorOptions$def === void 0 ? [] : _generatorOptions$def,
      _generatorOptions$def2 = _generatorOptions.defaultOptions,
      defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
  return function createPopper(reference, popper, options) {
    if (options === void 0) {
      options = defaultOptions;
    }

    var state = {
      placement: 'bottom',
      orderedModifiers: [],
      options: Object.assign(Object.assign({}, DEFAULT_OPTIONS), defaultOptions),
      modifiersData: {},
      elements: {
        reference: reference,
        popper: popper
      },
      attributes: {},
      styles: {}
    };
    var effectCleanupFns = [];
    var isDestroyed = false;
    var instance = {
      state: state,
      setOptions: function setOptions(options) {
        cleanupModifierEffects();
        state.options = Object.assign(Object.assign(Object.assign({}, defaultOptions), state.options), options);
        state.scrollParents = {
          reference: isElement(reference) ? listScrollParents(reference) : reference.contextElement ? listScrollParents(reference.contextElement) : [],
          popper: listScrollParents(popper)
        }; // Orders the modifiers based on their dependencies and `phase`
        // properties

        var orderedModifiers = orderModifiers(mergeByName([].concat(defaultModifiers, state.options.modifiers))); // Strip out disabled modifiers

        state.orderedModifiers = orderedModifiers.filter(function (m) {
          return m.enabled;
        }); // Validate the provided modifiers so that the consumer will get warned

        runModifierEffects();
        return instance.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function forceUpdate() {
        if (isDestroyed) {
          return;
        }

        var _state$elements = state.elements,
            reference = _state$elements.reference,
            popper = _state$elements.popper; // Don't proceed if `reference` or `popper` are not valid elements
        // anymore

        if (!areValidElements(reference, popper)) {

          return;
        } // Store the reference and popper rects to be read by modifiers


        state.rects = {
          reference: getCompositeRect(reference, getOffsetParent(popper), state.options.strategy === 'fixed'),
          popper: getLayoutRect(popper)
        }; // Modifiers have the ability to reset the current update cycle. The
        // most common use case for this is the `flip` modifier changing the
        // placement, which then needs to re-run all the modifiers, because the
        // logic was previously ran for the previous placement and is therefore
        // stale/incorrect

        state.reset = false;
        state.placement = state.options.placement; // On each update cycle, the `modifiersData` property for each modifier
        // is filled with the initial data specified by the modifier. This means
        // it doesn't persist and is fresh on each update.
        // To ensure persistent data, use `${name}#persistent`

        state.orderedModifiers.forEach(function (modifier) {
          return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
        });

        for (var index = 0; index < state.orderedModifiers.length; index++) {

          if (state.reset === true) {
            state.reset = false;
            index = -1;
            continue;
          }

          var _state$orderedModifie = state.orderedModifiers[index],
              fn = _state$orderedModifie.fn,
              _state$orderedModifie2 = _state$orderedModifie.options,
              _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2,
              name = _state$orderedModifie.name;

          if (typeof fn === 'function') {
            state = fn({
              state: state,
              options: _options,
              name: name,
              instance: instance
            }) || state;
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: debounce(function () {
        return new Promise(function (resolve) {
          instance.forceUpdate();
          resolve(state);
        });
      }),
      destroy: function destroy() {
        cleanupModifierEffects();
        isDestroyed = true;
      }
    };

    if (!areValidElements(reference, popper)) {

      return instance;
    }

    instance.setOptions(options).then(function (state) {
      if (!isDestroyed && options.onFirstUpdate) {
        options.onFirstUpdate(state);
      }
    }); // Modifiers have the ability to execute arbitrary code before the first
    // update cycle runs. They will be executed in the same order as the update
    // cycle. This is useful when a modifier adds some persistent data that
    // other modifiers need to use, but the modifier is run after the dependent
    // one.

    function runModifierEffects() {
      state.orderedModifiers.forEach(function (_ref3) {
        var name = _ref3.name,
            _ref3$options = _ref3.options,
            options = _ref3$options === void 0 ? {} : _ref3$options,
            effect = _ref3.effect;

        if (typeof effect === 'function') {
          var cleanupFn = effect({
            state: state,
            name: name,
            instance: instance,
            options: options
          });

          var noopFn = function noopFn() {};

          effectCleanupFns.push(cleanupFn || noopFn);
        }
      });
    }

    function cleanupModifierEffects() {
      effectCleanupFns.forEach(function (fn) {
        return fn();
      });
      effectCleanupFns = [];
    }

    return instance;
  };
}

var passive = {
  passive: true
};

function effect(_ref) {
  var state = _ref.state,
      instance = _ref.instance,
      options = _ref.options;
  var _options$scroll = options.scroll,
      scroll = _options$scroll === void 0 ? true : _options$scroll,
      _options$resize = options.resize,
      resize = _options$resize === void 0 ? true : _options$resize;
  var window = getWindow(state.elements.popper);
  var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);

  if (scroll) {
    scrollParents.forEach(function (scrollParent) {
      scrollParent.addEventListener('scroll', instance.update, passive);
    });
  }

  if (resize) {
    window.addEventListener('resize', instance.update, passive);
  }

  return function () {
    if (scroll) {
      scrollParents.forEach(function (scrollParent) {
        scrollParent.removeEventListener('scroll', instance.update, passive);
      });
    }

    if (resize) {
      window.removeEventListener('resize', instance.update, passive);
    }
  };
} // eslint-disable-next-line import/no-unused-modules


var eventListeners = {
  name: 'eventListeners',
  enabled: true,
  phase: 'write',
  fn: function fn() {},
  effect: effect,
  data: {}
};

function getVariation(placement) {
  return placement.split('-')[1];
}

function getMainAxisFromPlacement(placement) {
  return ['top', 'bottom'].indexOf(placement) >= 0 ? 'x' : 'y';
}

function computeOffsets(_ref) {
  var reference = _ref.reference,
      element = _ref.element,
      placement = _ref.placement;
  var basePlacement = placement ? getBasePlacement(placement) : null;
  var variation = placement ? getVariation(placement) : null;
  var commonX = reference.x + reference.width / 2 - element.width / 2;
  var commonY = reference.y + reference.height / 2 - element.height / 2;
  var offsets;

  switch (basePlacement) {
    case top:
      offsets = {
        x: commonX,
        y: reference.y - element.height
      };
      break;

    case bottom:
      offsets = {
        x: commonX,
        y: reference.y + reference.height
      };
      break;

    case right:
      offsets = {
        x: reference.x + reference.width,
        y: commonY
      };
      break;

    case left:
      offsets = {
        x: reference.x - element.width,
        y: commonY
      };
      break;

    default:
      offsets = {
        x: reference.x,
        y: reference.y
      };
  }

  var mainAxis = basePlacement ? getMainAxisFromPlacement(basePlacement) : null;

  if (mainAxis != null) {
    var len = mainAxis === 'y' ? 'height' : 'width';

    switch (variation) {
      case start:
        offsets[mainAxis] = Math.floor(offsets[mainAxis]) - Math.floor(reference[len] / 2 - element[len] / 2);
        break;

      case end:
        offsets[mainAxis] = Math.floor(offsets[mainAxis]) + Math.ceil(reference[len] / 2 - element[len] / 2);
        break;
    }
  }

  return offsets;
}

function popperOffsets(_ref) {
  var state = _ref.state,
      name = _ref.name;
  // Offsets are the actual position the popper needs to have to be
  // properly positioned near its reference element
  // This is the most basic placement, and will be adjusted by
  // the modifiers in the next step
  state.modifiersData[name] = computeOffsets({
    reference: state.rects.reference,
    element: state.rects.popper,
    strategy: 'absolute',
    placement: state.placement
  });
} // eslint-disable-next-line import/no-unused-modules


var popperOffsets$1 = {
  name: 'popperOffsets',
  enabled: true,
  phase: 'read',
  fn: popperOffsets,
  data: {}
};

var unsetSides = {
  top: 'auto',
  right: 'auto',
  bottom: 'auto',
  left: 'auto'
}; // Round the offsets to the nearest suitable subpixel based on the DPR.
// Zooming can change the DPR, but it seems to report a value that will
// cleanly divide the values into the appropriate subpixels.

function roundOffsets(_ref) {
  var x = _ref.x,
      y = _ref.y;
  var win = window;
  var dpr = win.devicePixelRatio || 1;
  return {
    x: Math.round(x * dpr) / dpr || 0,
    y: Math.round(y * dpr) / dpr || 0
  };
}

function mapToStyles(_ref2) {
  var _Object$assign2;

  var popper = _ref2.popper,
      popperRect = _ref2.popperRect,
      placement = _ref2.placement,
      offsets = _ref2.offsets,
      position = _ref2.position,
      gpuAcceleration = _ref2.gpuAcceleration,
      adaptive = _ref2.adaptive;

  var _roundOffsets = roundOffsets(offsets),
      x = _roundOffsets.x,
      y = _roundOffsets.y;

  var hasX = offsets.hasOwnProperty('x');
  var hasY = offsets.hasOwnProperty('y');
  var sideX = left;
  var sideY = top;
  var win = window;

  if (adaptive) {
    var offsetParent = getOffsetParent(popper);

    if (offsetParent === getWindow(popper)) {
      offsetParent = getDocumentElement(popper);
    } // $FlowFixMe: force type refinement, we compare offsetParent with window above, but Flow doesn't detect it

    /*:: offsetParent = (offsetParent: Element); */


    if (placement === top) {
      sideY = bottom;
      y -= offsetParent.clientHeight - popperRect.height;
      y *= gpuAcceleration ? 1 : -1;
    }

    if (placement === left) {
      sideX = right;
      x -= offsetParent.clientWidth - popperRect.width;
      x *= gpuAcceleration ? 1 : -1;
    }
  }

  var commonStyles = Object.assign({
    position: position
  }, adaptive && unsetSides);

  if (gpuAcceleration) {
    var _Object$assign;

    return Object.assign(Object.assign({}, commonStyles), {}, (_Object$assign = {}, _Object$assign[sideY] = hasY ? '0' : '', _Object$assign[sideX] = hasX ? '0' : '', _Object$assign.transform = (win.devicePixelRatio || 1) < 2 ? "translate(" + x + "px, " + y + "px)" : "translate3d(" + x + "px, " + y + "px, 0)", _Object$assign));
  }

  return Object.assign(Object.assign({}, commonStyles), {}, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y + "px" : '', _Object$assign2[sideX] = hasX ? x + "px" : '', _Object$assign2.transform = '', _Object$assign2));
}

function computeStyles(_ref3) {
  var state = _ref3.state,
      options = _ref3.options;
  var _options$gpuAccelerat = options.gpuAcceleration,
      gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat,
      _options$adaptive = options.adaptive,
      adaptive = _options$adaptive === void 0 ? true : _options$adaptive;

  var commonStyles = {
    placement: getBasePlacement(state.placement),
    popper: state.elements.popper,
    popperRect: state.rects.popper,
    gpuAcceleration: gpuAcceleration
  };

  if (state.modifiersData.popperOffsets != null) {
    state.styles.popper = Object.assign(Object.assign({}, state.styles.popper), mapToStyles(Object.assign(Object.assign({}, commonStyles), {}, {
      offsets: state.modifiersData.popperOffsets,
      position: state.options.strategy,
      adaptive: adaptive
    })));
  }

  if (state.modifiersData.arrow != null) {
    state.styles.arrow = Object.assign(Object.assign({}, state.styles.arrow), mapToStyles(Object.assign(Object.assign({}, commonStyles), {}, {
      offsets: state.modifiersData.arrow,
      position: 'absolute',
      adaptive: false
    })));
  }

  state.attributes.popper = Object.assign(Object.assign({}, state.attributes.popper), {}, {
    'data-popper-placement': state.placement
  });
} // eslint-disable-next-line import/no-unused-modules


var computeStyles$1 = {
  name: 'computeStyles',
  enabled: true,
  phase: 'beforeWrite',
  fn: computeStyles,
  data: {}
};

// and applies them to the HTMLElements such as popper and arrow

function applyStyles(_ref) {
  var state = _ref.state;
  Object.keys(state.elements).forEach(function (name) {
    var style = state.styles[name] || {};
    var attributes = state.attributes[name] || {};
    var element = state.elements[name]; // arrow is optional + virtual elements

    if (!isHTMLElement(element) || !getNodeName(element)) {
      return;
    } // Flow doesn't support to extend this property, but it's the most
    // effective way to apply styles to an HTMLElement
    // $FlowFixMe


    Object.assign(element.style, style);
    Object.keys(attributes).forEach(function (name) {
      var value = attributes[name];

      if (value === false) {
        element.removeAttribute(name);
      } else {
        element.setAttribute(name, value === true ? '' : value);
      }
    });
  });
}

function effect$1(_ref2) {
  var state = _ref2.state;
  var initialStyles = {
    popper: {
      position: state.options.strategy,
      left: '0',
      top: '0',
      margin: '0'
    },
    arrow: {
      position: 'absolute'
    },
    reference: {}
  };
  Object.assign(state.elements.popper.style, initialStyles.popper);

  if (state.elements.arrow) {
    Object.assign(state.elements.arrow.style, initialStyles.arrow);
  }

  return function () {
    Object.keys(state.elements).forEach(function (name) {
      var element = state.elements[name];
      var attributes = state.attributes[name] || {};
      var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]); // Set all values to an empty string to unset them

      var style = styleProperties.reduce(function (style, property) {
        style[property] = '';
        return style;
      }, {}); // arrow is optional + virtual elements

      if (!isHTMLElement(element) || !getNodeName(element)) {
        return;
      } // Flow doesn't support to extend this property, but it's the most
      // effective way to apply styles to an HTMLElement
      // $FlowFixMe


      Object.assign(element.style, style);
      Object.keys(attributes).forEach(function (attribute) {
        element.removeAttribute(attribute);
      });
    });
  };
} // eslint-disable-next-line import/no-unused-modules


var applyStyles$1 = {
  name: 'applyStyles',
  enabled: true,
  phase: 'write',
  fn: applyStyles,
  effect: effect$1,
  requires: ['computeStyles']
};

function getViewportRect(element) {
  var win = getWindow(element);
  var html = getDocumentElement(element);
  var visualViewport = win.visualViewport;
  var width = html.clientWidth;
  var height = html.clientHeight;
  var x = 0;
  var y = 0; // NB: This isn't supported on iOS <= 12. If the keyboard is open, the popper
  // can be obscured underneath it.
  // Also, `html.clientHeight` adds the bottom bar height in Safari iOS, even
  // if it isn't open, so if this isn't available, the popper will be detected
  // to overflow the bottom of the screen too early.

  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height; // Uses Layout Viewport (like Chrome; Safari does not currently)
    // In Chrome, it returns a value very close to 0 (+/-) but contains rounding
    // errors due to floating point numbers, so we need to check precision.
    // Safari returns a number <= 0, usually < -1 when pinch-zoomed
    // Feature detection fails in mobile emulation mode in Chrome.
    // Math.abs(win.innerWidth / visualViewport.scale - visualViewport.width) <
    // 0.001
    // Fallback here: "Not Safari" userAgent

    if (!/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
      x = visualViewport.offsetLeft;
      y = visualViewport.offsetTop;
    }
  }

  return {
    width: width,
    height: height,
    x: x + getWindowScrollBarX(element),
    y: y
  };
}

// of the `<html>` and `<body>` rect bounds if horizontally scrollable

function getDocumentRect(element) {
  var html = getDocumentElement(element);
  var winScroll = getWindowScroll(element);
  var body = element.ownerDocument.body;
  var width = Math.max(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
  var height = Math.max(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
  var x = -winScroll.scrollLeft + getWindowScrollBarX(element);
  var y = -winScroll.scrollTop;

  if (getComputedStyle(body || html).direction === 'rtl') {
    x += Math.max(html.clientWidth, body ? body.clientWidth : 0) - width;
  }

  return {
    width: width,
    height: height,
    x: x,
    y: y
  };
}

function contains(parent, child) {
  // $FlowFixMe: hasOwnProperty doesn't seem to work in tests
  var isShadow = Boolean(child.getRootNode && child.getRootNode().host); // First, attempt with faster native method

  if (parent.contains(child)) {
    return true;
  } // then fallback to custom implementation with Shadow DOM support
  else if (isShadow) {
      var next = child;

      do {
        if (next && parent.isSameNode(next)) {
          return true;
        } // $FlowFixMe: need a better way to handle this...


        next = next.parentNode || next.host;
      } while (next);
    } // Give up, the result is false


  return false;
}

function rectToClientRect(rect) {
  return Object.assign(Object.assign({}, rect), {}, {
    left: rect.x,
    top: rect.y,
    right: rect.x + rect.width,
    bottom: rect.y + rect.height
  });
}

function getInnerBoundingClientRect(element) {
  var rect = getBoundingClientRect(element);
  rect.top = rect.top + element.clientTop;
  rect.left = rect.left + element.clientLeft;
  rect.bottom = rect.top + element.clientHeight;
  rect.right = rect.left + element.clientWidth;
  rect.width = element.clientWidth;
  rect.height = element.clientHeight;
  rect.x = rect.left;
  rect.y = rect.top;
  return rect;
}

function getClientRectFromMixedType(element, clippingParent) {
  return clippingParent === viewport ? rectToClientRect(getViewportRect(element)) : isHTMLElement(clippingParent) ? getInnerBoundingClientRect(clippingParent) : rectToClientRect(getDocumentRect(getDocumentElement(element)));
} // A "clipping parent" is an overflowable container with the characteristic of
// clipping (or hiding) overflowing elements with a position different from
// `initial`


function getClippingParents(element) {
  var clippingParents = listScrollParents(element);
  var canEscapeClipping = ['absolute', 'fixed'].indexOf(getComputedStyle(element).position) >= 0;
  var clipperElement = canEscapeClipping && isHTMLElement(element) ? getOffsetParent(element) : element;

  if (!isElement(clipperElement)) {
    return [];
  } // $FlowFixMe: https://github.com/facebook/flow/issues/1414


  return clippingParents.filter(function (clippingParent) {
    return isElement(clippingParent) && contains(clippingParent, clipperElement);
  });
} // Gets the maximum area that the element is visible in due to any number of
// clipping parents


function getClippingRect(element, boundary, rootBoundary) {
  var mainClippingParents = boundary === 'clippingParents' ? getClippingParents(element) : [].concat(boundary);
  var clippingParents = [].concat(mainClippingParents, [rootBoundary]);
  var firstClippingParent = clippingParents[0];
  var clippingRect = clippingParents.reduce(function (accRect, clippingParent) {
    var rect = getClientRectFromMixedType(element, clippingParent);
    accRect.top = Math.max(rect.top, accRect.top);
    accRect.right = Math.min(rect.right, accRect.right);
    accRect.bottom = Math.min(rect.bottom, accRect.bottom);
    accRect.left = Math.max(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromMixedType(element, firstClippingParent));
  clippingRect.width = clippingRect.right - clippingRect.left;
  clippingRect.height = clippingRect.bottom - clippingRect.top;
  clippingRect.x = clippingRect.left;
  clippingRect.y = clippingRect.top;
  return clippingRect;
}

function getFreshSideObject() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}

function mergePaddingObject(paddingObject) {
  return Object.assign(Object.assign({}, getFreshSideObject()), paddingObject);
}

function expandToHashMap(value, keys) {
  return keys.reduce(function (hashMap, key) {
    hashMap[key] = value;
    return hashMap;
  }, {});
}

function detectOverflow(state, options) {
  if (options === void 0) {
    options = {};
  }

  var _options = options,
      _options$placement = _options.placement,
      placement = _options$placement === void 0 ? state.placement : _options$placement,
      _options$boundary = _options.boundary,
      boundary = _options$boundary === void 0 ? clippingParents : _options$boundary,
      _options$rootBoundary = _options.rootBoundary,
      rootBoundary = _options$rootBoundary === void 0 ? viewport : _options$rootBoundary,
      _options$elementConte = _options.elementContext,
      elementContext = _options$elementConte === void 0 ? popper : _options$elementConte,
      _options$altBoundary = _options.altBoundary,
      altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary,
      _options$padding = _options.padding,
      padding = _options$padding === void 0 ? 0 : _options$padding;
  var paddingObject = mergePaddingObject(typeof padding !== 'number' ? padding : expandToHashMap(padding, basePlacements));
  var altContext = elementContext === popper ? reference : popper;
  var referenceElement = state.elements.reference;
  var popperRect = state.rects.popper;
  var element = state.elements[altBoundary ? altContext : elementContext];
  var clippingClientRect = getClippingRect(isElement(element) ? element : element.contextElement || getDocumentElement(state.elements.popper), boundary, rootBoundary);
  var referenceClientRect = getBoundingClientRect(referenceElement);
  var popperOffsets = computeOffsets({
    reference: referenceClientRect,
    element: popperRect,
    strategy: 'absolute',
    placement: placement
  });
  var popperClientRect = rectToClientRect(Object.assign(Object.assign({}, popperRect), popperOffsets));
  var elementClientRect = elementContext === popper ? popperClientRect : referenceClientRect; // positive = overflowing the clipping rect
  // 0 or negative = within the clipping rect

  var overflowOffsets = {
    top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
    bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
    left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
    right: elementClientRect.right - clippingClientRect.right + paddingObject.right
  };
  var offsetData = state.modifiersData.offset; // Offsets can be applied only to the popper element

  if (elementContext === popper && offsetData) {
    var offset = offsetData[placement];
    Object.keys(overflowOffsets).forEach(function (key) {
      var multiply = [right, bottom].indexOf(key) >= 0 ? 1 : -1;
      var axis = [top, bottom].indexOf(key) >= 0 ? 'y' : 'x';
      overflowOffsets[key] += offset[axis] * multiply;
    });
  }

  return overflowOffsets;
}

var defaultModifiers = [eventListeners, popperOffsets$1, computeStyles$1, applyStyles$1];

var hash = {
  left: 'right',
  right: 'left',
  bottom: 'top',
  top: 'bottom'
};
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, function (matched) {
    return hash[matched];
  });
}

var hash$1 = {
  start: 'end',
  end: 'start'
};
function getOppositeVariationPlacement(placement) {
  return placement.replace(/start|end/g, function (matched) {
    return hash$1[matched];
  });
}

/*:: type OverflowsMap = { [ComputedPlacement]: number }; */

/*;; type OverflowsMap = { [key in ComputedPlacement]: number }; */
function computeAutoPlacement(state, options) {
  if (options === void 0) {
    options = {};
  }

  var _options = options,
      placement = _options.placement,
      boundary = _options.boundary,
      rootBoundary = _options.rootBoundary,
      padding = _options.padding,
      flipVariations = _options.flipVariations,
      _options$allowedAutoP = _options.allowedAutoPlacements,
      allowedAutoPlacements = _options$allowedAutoP === void 0 ? placements : _options$allowedAutoP;
  var variation = getVariation(placement);
  var placements$1 = (variation ? flipVariations ? variationPlacements : variationPlacements.filter(function (placement) {
    return getVariation(placement) === variation;
  }) : basePlacements).filter(function (placement) {
    return allowedAutoPlacements.indexOf(placement) >= 0;
  }); // $FlowFixMe: Flow seems to have problems with two array unions...

  var overflows = placements$1.reduce(function (acc, placement) {
    acc[placement] = detectOverflow(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      padding: padding
    })[getBasePlacement(placement)];
    return acc;
  }, {});
  return Object.keys(overflows).sort(function (a, b) {
    return overflows[a] - overflows[b];
  });
}

function getExpandedFallbackPlacements(placement) {
  if (getBasePlacement(placement) === auto) {
    return [];
  }

  var oppositePlacement = getOppositePlacement(placement);
  return [getOppositeVariationPlacement(placement), oppositePlacement, getOppositeVariationPlacement(oppositePlacement)];
}

function flip(_ref) {
  var state = _ref.state,
      options = _ref.options,
      name = _ref.name;

  if (state.modifiersData[name]._skip) {
    return;
  }

  var _options$mainAxis = options.mainAxis,
      checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
      _options$altAxis = options.altAxis,
      checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis,
      specifiedFallbackPlacements = options.fallbackPlacements,
      padding = options.padding,
      boundary = options.boundary,
      rootBoundary = options.rootBoundary,
      altBoundary = options.altBoundary,
      _options$flipVariatio = options.flipVariations,
      flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio,
      allowedAutoPlacements = options.allowedAutoPlacements;
  var preferredPlacement = state.options.placement;
  var basePlacement = getBasePlacement(preferredPlacement);
  var isBasePlacement = basePlacement === preferredPlacement;
  var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [getOppositePlacement(preferredPlacement)] : getExpandedFallbackPlacements(preferredPlacement));
  var placements = [preferredPlacement].concat(fallbackPlacements).reduce(function (acc, placement) {
    return acc.concat(getBasePlacement(placement) === auto ? computeAutoPlacement(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      padding: padding,
      flipVariations: flipVariations,
      allowedAutoPlacements: allowedAutoPlacements
    }) : placement);
  }, []);
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var checksMap = new Map();
  var makeFallbackChecks = true;
  var firstFittingPlacement = placements[0];

  for (var i = 0; i < placements.length; i++) {
    var placement = placements[i];

    var _basePlacement = getBasePlacement(placement);

    var isStartVariation = getVariation(placement) === start;
    var isVertical = [top, bottom].indexOf(_basePlacement) >= 0;
    var len = isVertical ? 'width' : 'height';
    var overflow = detectOverflow(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      altBoundary: altBoundary,
      padding: padding
    });
    var mainVariationSide = isVertical ? isStartVariation ? right : left : isStartVariation ? bottom : top;

    if (referenceRect[len] > popperRect[len]) {
      mainVariationSide = getOppositePlacement(mainVariationSide);
    }

    var altVariationSide = getOppositePlacement(mainVariationSide);
    var checks = [];

    if (checkMainAxis) {
      checks.push(overflow[_basePlacement] <= 0);
    }

    if (checkAltAxis) {
      checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
    }

    if (checks.every(function (check) {
      return check;
    })) {
      firstFittingPlacement = placement;
      makeFallbackChecks = false;
      break;
    }

    checksMap.set(placement, checks);
  }

  if (makeFallbackChecks) {
    // `2` may be desired in some cases – research later
    var numberOfChecks = flipVariations ? 3 : 1;

    var _loop = function _loop(_i) {
      var fittingPlacement = placements.find(function (placement) {
        var checks = checksMap.get(placement);

        if (checks) {
          return checks.slice(0, _i).every(function (check) {
            return check;
          });
        }
      });

      if (fittingPlacement) {
        firstFittingPlacement = fittingPlacement;
        return "break";
      }
    };

    for (var _i = numberOfChecks; _i > 0; _i--) {
      var _ret = _loop(_i);

      if (_ret === "break") break;
    }
  }

  if (state.placement !== firstFittingPlacement) {
    state.modifiersData[name]._skip = true;
    state.placement = firstFittingPlacement;
    state.reset = true;
  }
} // eslint-disable-next-line import/no-unused-modules


var flip$1 = {
  name: 'flip',
  enabled: true,
  phase: 'main',
  fn: flip,
  requiresIfExists: ['offset'],
  data: {
    _skip: false
  }
};

function getAltAxis(axis) {
  return axis === 'x' ? 'y' : 'x';
}

function within(min, value, max) {
  return Math.max(min, Math.min(value, max));
}

function preventOverflow(_ref) {
  var state = _ref.state,
      options = _ref.options,
      name = _ref.name;
  var _options$mainAxis = options.mainAxis,
      checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
      _options$altAxis = options.altAxis,
      checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis,
      boundary = options.boundary,
      rootBoundary = options.rootBoundary,
      altBoundary = options.altBoundary,
      padding = options.padding,
      _options$tether = options.tether,
      tether = _options$tether === void 0 ? true : _options$tether,
      _options$tetherOffset = options.tetherOffset,
      tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
  var overflow = detectOverflow(state, {
    boundary: boundary,
    rootBoundary: rootBoundary,
    padding: padding,
    altBoundary: altBoundary
  });
  var basePlacement = getBasePlacement(state.placement);
  var variation = getVariation(state.placement);
  var isBasePlacement = !variation;
  var mainAxis = getMainAxisFromPlacement(basePlacement);
  var altAxis = getAltAxis(mainAxis);
  var popperOffsets = state.modifiersData.popperOffsets;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var tetherOffsetValue = typeof tetherOffset === 'function' ? tetherOffset(Object.assign(Object.assign({}, state.rects), {}, {
    placement: state.placement
  })) : tetherOffset;
  var data = {
    x: 0,
    y: 0
  };

  if (!popperOffsets) {
    return;
  }

  if (checkMainAxis) {
    var mainSide = mainAxis === 'y' ? top : left;
    var altSide = mainAxis === 'y' ? bottom : right;
    var len = mainAxis === 'y' ? 'height' : 'width';
    var offset = popperOffsets[mainAxis];
    var min = popperOffsets[mainAxis] + overflow[mainSide];
    var max = popperOffsets[mainAxis] - overflow[altSide];
    var additive = tether ? -popperRect[len] / 2 : 0;
    var minLen = variation === start ? referenceRect[len] : popperRect[len];
    var maxLen = variation === start ? -popperRect[len] : -referenceRect[len]; // We need to include the arrow in the calculation so the arrow doesn't go
    // outside the reference bounds

    var arrowElement = state.elements.arrow;
    var arrowRect = tether && arrowElement ? getLayoutRect(arrowElement) : {
      width: 0,
      height: 0
    };
    var arrowPaddingObject = state.modifiersData['arrow#persistent'] ? state.modifiersData['arrow#persistent'].padding : getFreshSideObject();
    var arrowPaddingMin = arrowPaddingObject[mainSide];
    var arrowPaddingMax = arrowPaddingObject[altSide]; // If the reference length is smaller than the arrow length, we don't want
    // to include its full size in the calculation. If the reference is small
    // and near the edge of a boundary, the popper can overflow even if the
    // reference is not overflowing as well (e.g. virtual elements with no
    // width or height)

    var arrowLen = within(0, referenceRect[len], arrowRect[len]);
    var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - tetherOffsetValue : minLen - arrowLen - arrowPaddingMin - tetherOffsetValue;
    var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + tetherOffsetValue : maxLen + arrowLen + arrowPaddingMax + tetherOffsetValue;
    var arrowOffsetParent = state.elements.arrow && getOffsetParent(state.elements.arrow);
    var clientOffset = arrowOffsetParent ? mainAxis === 'y' ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
    var offsetModifierValue = state.modifiersData.offset ? state.modifiersData.offset[state.placement][mainAxis] : 0;
    var tetherMin = popperOffsets[mainAxis] + minOffset - offsetModifierValue - clientOffset;
    var tetherMax = popperOffsets[mainAxis] + maxOffset - offsetModifierValue;
    var preventedOffset = within(tether ? Math.min(min, tetherMin) : min, offset, tether ? Math.max(max, tetherMax) : max);
    popperOffsets[mainAxis] = preventedOffset;
    data[mainAxis] = preventedOffset - offset;
  }

  if (checkAltAxis) {
    var _mainSide = mainAxis === 'x' ? top : left;

    var _altSide = mainAxis === 'x' ? bottom : right;

    var _offset = popperOffsets[altAxis];

    var _min = _offset + overflow[_mainSide];

    var _max = _offset - overflow[_altSide];

    var _preventedOffset = within(_min, _offset, _max);

    popperOffsets[altAxis] = _preventedOffset;
    data[altAxis] = _preventedOffset - _offset;
  }

  state.modifiersData[name] = data;
} // eslint-disable-next-line import/no-unused-modules


var preventOverflow$1 = {
  name: 'preventOverflow',
  enabled: true,
  phase: 'main',
  fn: preventOverflow,
  requiresIfExists: ['offset']
};

function distanceAndSkiddingToXY(placement, rects, offset) {
  var basePlacement = getBasePlacement(placement);
  var invertDistance = [left, top].indexOf(basePlacement) >= 0 ? -1 : 1;

  var _ref = typeof offset === 'function' ? offset(Object.assign(Object.assign({}, rects), {}, {
    placement: placement
  })) : offset,
      skidding = _ref[0],
      distance = _ref[1];

  skidding = skidding || 0;
  distance = (distance || 0) * invertDistance;
  return [left, right].indexOf(basePlacement) >= 0 ? {
    x: distance,
    y: skidding
  } : {
    x: skidding,
    y: distance
  };
}

function offset(_ref2) {
  var state = _ref2.state,
      options = _ref2.options,
      name = _ref2.name;
  var _options$offset = options.offset,
      offset = _options$offset === void 0 ? [0, 0] : _options$offset;
  var data = placements.reduce(function (acc, placement) {
    acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset);
    return acc;
  }, {});
  var _data$state$placement = data[state.placement],
      x = _data$state$placement.x,
      y = _data$state$placement.y;

  if (state.modifiersData.popperOffsets != null) {
    state.modifiersData.popperOffsets.x += x;
    state.modifiersData.popperOffsets.y += y;
  }

  state.modifiersData[name] = data;
} // eslint-disable-next-line import/no-unused-modules


var offset$1 = {
  name: 'offset',
  enabled: true,
  phase: 'main',
  requires: ['popperOffsets'],
  fn: offset
};

function arrow(_ref) {
  var _state$modifiersData$;

  var state = _ref.state,
      name = _ref.name;
  var arrowElement = state.elements.arrow;
  var popperOffsets = state.modifiersData.popperOffsets;
  var basePlacement = getBasePlacement(state.placement);
  var axis = getMainAxisFromPlacement(basePlacement);
  var isVertical = [left, right].indexOf(basePlacement) >= 0;
  var len = isVertical ? 'height' : 'width';

  if (!arrowElement || !popperOffsets) {
    return;
  }

  var paddingObject = state.modifiersData[name + "#persistent"].padding;
  var arrowRect = getLayoutRect(arrowElement);
  var minProp = axis === 'y' ? top : left;
  var maxProp = axis === 'y' ? bottom : right;
  var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets[axis] - state.rects.popper[len];
  var startDiff = popperOffsets[axis] - state.rects.reference[axis];
  var arrowOffsetParent = getOffsetParent(arrowElement);
  var clientSize = arrowOffsetParent ? axis === 'y' ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
  var centerToReference = endDiff / 2 - startDiff / 2; // Make sure the arrow doesn't overflow the popper if the center point is
  // outside of the popper bounds

  var min = paddingObject[minProp];
  var max = clientSize - arrowRect[len] - paddingObject[maxProp];
  var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
  var offset = within(min, center, max); // Prevents breaking syntax highlighting...

  var axisProp = axis;
  state.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset, _state$modifiersData$.centerOffset = offset - center, _state$modifiersData$);
}

function effect$2(_ref2) {
  var state = _ref2.state,
      options = _ref2.options,
      name = _ref2.name;
  var _options$element = options.element,
      arrowElement = _options$element === void 0 ? '[data-popper-arrow]' : _options$element,
      _options$padding = options.padding,
      padding = _options$padding === void 0 ? 0 : _options$padding;

  if (arrowElement == null) {
    return;
  } // CSS selector


  if (typeof arrowElement === 'string') {
    arrowElement = state.elements.popper.querySelector(arrowElement);

    if (!arrowElement) {
      return;
    }
  }

  if (!contains(state.elements.popper, arrowElement)) {

    return;
  }

  state.elements.arrow = arrowElement;
  state.modifiersData[name + "#persistent"] = {
    padding: mergePaddingObject(typeof padding !== 'number' ? padding : expandToHashMap(padding, basePlacements))
  };
} // eslint-disable-next-line import/no-unused-modules


var arrow$1 = {
  name: 'arrow',
  enabled: true,
  phase: 'main',
  fn: arrow,
  effect: effect$2,
  requires: ['popperOffsets'],
  requiresIfExists: ['preventOverflow']
};

//
let dayjsPlugins = [isoWeek, updateLocale, isBetween, advancedFormat, quarterOfYear, localeData].map(plugin => dayjs_min.extend(plugin));
const createPopper = popperGenerator({
  defaultModifiers: [...defaultModifiers, flip$1, preventOverflow$1, offset$1, arrow$1]
});
var script = {
  name: 'Datepicker',
  props: {
    // Default date to show in the picker
    default: {
      default: null
    },
    // Default date format
    format: {
      default: 'DD/MM/YYYY'
    },
    // Input name
    name: {
      default: ''
    },
    // Picker type
    // -----------------------------
    // e.g. single, range, multiple (in development)
    type: {
      default: 'single'
    },
    // can pick: days, months, years
    picks: {
      default: 'days',
      validator: function (value) {
        return ['days', 'months', 'years'].indexOf(value) !== -1;
      }
    },
    // Event trigger
    trigger: {
      default: 'click',
      validator: function (value) {
        return ['click', 'mouseover', 'mouseenter', 'hover'].indexOf(value) !== -1;
      }
    },
    // Picker layout/theme
    // -----------------------------
    inline: {
      type: Boolean,
      default: false
    },
    dark: {
      type: Boolean,
      default: false
    },
    theme: {
      type: String,
      default: 'blue'
    },
    placement: {
      default: 'bottom-start'
    },
    confirmable: {
      type: Boolean,
      default: false
    },
    // Limit date selection
    // -----------------------------
    // By past/future
    disablePast: {
      type: Boolean,
      default: false
    },
    disableFuture: {
      type: Boolean,
      default: false
    },
    // By array/function
    disable: {
      default: null
    },
    // By min/max date
    from: {
      default: null
    },
    to: {
      default: null
    },
    // Additional options
    // -----------------------------
    options: {
      type: Object,
      default: function () {
        return {};
      }
    },
    // Output debugging console logs
    debug: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      // Main dates
      date: null,
      selected: null,
      today: dayjs_min().startOf('day'),
      focus: dayjs_min().startOf('day'),
      // View: days, months, years
      view: 'days',
      show: false,
      // If requires confirm
      hasChanged: false,
      isConfirmed: false,
      // Flag initial setup
      setupComplete: false,
      // Date limits
      canSelectPast: true,
      canSelectFuture: true,
      minDate: null,
      maxDate: null,
      // Deny rules
      denyDates: null,
      // Range
      rangeHover: null,
      rangePresets: [],
      rangePresetIcons: {
        clock: `<svg class="w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>`,
        week: `<svg class="w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>`,
        calendar: `<svg class="w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>`,
        prev: `<svg class="w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="1 4 1 10 7 10"></polyline><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"></path></svg>`,
        trend: `<svg class="w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>`
      },
      // Templates
      hasTemplate: false,
      template: null,
      templateMatches: null,
      // Options
      opts: {
        // Days of week format
        dowFormat: 'ddd',
        // Trigger class
        triggerClass: 'inline-block',
        // Week starts on
        weekStartsOn: 1,
        // TODO.
        // Transitions:
        // enterTransition: 'fadeInDown',
        // leaveTransition: 'fadeOutDown',
        // With pointer?
        withPointer: false,
        // Enable popper js flip modifier
        alwaysInView: true,
        // Hide picker after select
        hideOnSelect: true,
        // Range Presets
        rangePresets: [],
        // Confirm button
        confirmButtonText: 'Apply'
      }
      /* 
       * Non-reactive Reference:
       * Any properties we define in the component that don't need to be reactive
      
      @type    object
      @stores  The popper.js instance
      @initBy  setupInteraction
      popper: null,
       @type    function
      @stores  The focus setTimeout function
      @initBy  focusTimeout
      focusTimeout: null,
      */

    };
  },

  computed: {
    selectedReadable() {
      if (this.selected == null) return '';

      if (this.type == 'range') {
        let dates = [];
        this.selected.map(date => {
          dates.push(date.format(this.format));
        });
        return dates.join(' - ');
      }

      return this.selected.format(this.format);
    },

    weekStartsOn() {
      return this.opts.weekStartsOn;
    },

    weekEndsOn() {
      return this.opts.weekStartsOn + 6 > 7 ? this.opts.weekStartsOn - 1 : this.opts.weekStartsOn + 6;
    },

    day() {
      return this.focus.format('D');
    },

    month() {
      return this.focus.format('M');
    },

    year() {
      return this.focus.format('YYYY');
    },

    weekDays() {
      let dow = this.opts.weekStartsOn;
      let days = [];

      for (let i = 1; i <= 7; i++) {
        days.push(dayjs_min().isoWeekday(dow).format(this.opts.dowFormat));

        if (dow < 7) {
          dow++;
        } else {
          dow = 1;
        }
      }

      return days;
    },

    days() {
      let days = [];
      let monthStart = this.focus.startOf('month'),
          monthStartDay = monthStart.isoWeekday(),
          startOffset = monthStartDay < this.opts.weekStartsOn ? monthStartDay + 7 : monthStartDay,
          subDays = startOffset - this.opts.weekStartsOn;
      let monthEnd = this.focus.endOf('month'),
          monthEndDay = monthEnd.isoWeekday(),
          endOffset = monthEndDay <= this.weekEndsOn ? monthEndDay : monthEndDay - 7,
          addDays = this.weekEndsOn - endOffset;
      let start = monthStart.subtract(subDays, 'day'),
          end = monthEnd.add(addDays, 'day'),
          totalDays = Math.abs(start.diff(end, 'day')) + 1;

      for (let i = 0; i < totalDays; i++) {
        days.push(start.add(i, 'days'));
      }

      return days;
    },

    months() {
      let months = [];
      let start = this.focus.startOf('year');

      for (let i = 0; i < 12; i++) {
        months.push(start.add(i, 'months'));
      }

      return months;
    },

    years() {
      let years = [];
      let start = this.focus.subtract(4, 'years');

      for (let i = 0; i < 12; i++) {
        years.push(start.add(i, 'years'));
      }

      return years;
    },

    // Check if we can go back/forward in focus time
    canAddTime() {
      let offset = this.view == 'years' ? 12 : 1,
          unit = this.view == 'days' ? 'months' : 'years',
          date = this.focus.startOf('month').add(offset, unit);

      if (this.maxDate !== null && date.isAfter(this.maxDate.startOf('month'))) {
        return false;
      }

      return this.canSelectFuture || !date.isAfter(this.today.startOf('month'));
    },

    canSubTime() {
      let offset = this.view == 'years' ? 12 : 1,
          unit = this.view == 'days' ? 'months' : 'years',
          date = this.focus.startOf('month').subtract(offset, unit);

      if (this.minDate !== null && date.isBefore(this.minDate.startOf('month'))) {
        return false;
      }

      return this.canSelectPast || !date.isBefore(this.today.startOf('month'));
    },

    // Range
    isSelectingRange() {
      if (this.type !== 'range' || this.selected == null) return false;
      return this.selected.length == 1;
    },

    hasRangePresets() {
      if (this.type !== "range") return false;
      return this.rangePresets.length > 0;
    },

    rangePresetDefaults() {
      return {
        today: {
          label: 'Today',
          from: dayjs_min(),
          icon: 'clock'
        },
        this_week: {
          label: 'This Week',
          from: dayjs_min().startOf('week'),
          to: dayjs_min().endOf('week'),
          icon: 'week'
        },
        this_month: {
          label: 'This Month',
          from: dayjs_min().startOf('month'),
          to: dayjs_min().endOf('month'),
          icon: 'calendar'
        },
        last_month: {
          label: 'Last Month',
          from: dayjs_min().startOf('month').subtract(1, 'month'),
          to: dayjs_min().endOf('month').subtract(1, 'month'),
          icon: 'prev'
        },
        last_quarter: {
          label: 'Last Quarter',
          from: dayjs_min().startOf('quarter').subtract(1, 'quarter'),
          to: dayjs_min().endOf('quarter').subtract(1, 'quarter'),
          icon: 'prev'
        },
        '12_week': {
          label: '12 Week Trend',
          from: dayjs_min().startOf('week').subtract(11, 'week'),
          to: dayjs_min().endOf('week'),
          icon: 'trend'
        }
      };
    },

    // Apply Button
    requireConfirm() {
      return this.confirmable;
    },

    canConfirm() {
      return this.selected !== null && this.hasChanged;
    },

    // Day styling
    dayEdgeOffset() {
      return this.hasRangePresets ? 3 : 1;
    },

    // Theme
    _theme() {
      let color = this.theme;
      let base = {
        navHover: 'hover:bg-gray-200',
        weekDay: 'text-gray-400',
        day: {
          hover: `group-hover:bg-${color}-200`,
          selected: `bg-${color}-500 text-white`,
          weekendBg: 'bg-gray-100',
          inRange: `text-${color}-500 bg-${color}-300`
        },
        month: {
          current: 'border-gray-300 border hover:border-transparent',
          tile: 'm-1 py-5 cursor-pointer text-center text-sm leading-none border border-transparent rounded-sm hover:text-white',
          tileBg: `bg-gray-100 hover:bg-${color}-500`
        },
        rangeEndHover: `group-hover:text-${color}-500 group-hover:bg-${color}-300`,
        rangePresets: {
          bg: 'bg-gray-100',
          normal: 'text-gray-500',
          hover: `hover:text-gray-900 hover:bg-${color}-200`,
          selected: `text-white bg-${color}-500`
        },
        applyBtn: {
          bg: this.canConfirm ? `bg-${color}-500` : `bg-${color}-200`
        }
      };
      let dark = {
        navHover: 'hover:bg-gray-700',
        weekDay: 'text-gray-600',
        day: {
          hover: `group-hover:bg-${color}-900`,
          selected: `bg-${color}-500 text-white`,
          weekendBg: 'bg-gray-800 bg-opacity-50',
          inRange: `text-${color}-300 bg-${color}-700`
        },
        month: {
          current: 'border-gray-500 border hover:border-transparent',
          tileBg: `bg-gray-800 hover:bg-${color}-500`
        },
        rangeEndHover: `group-hover:text-${color}-300 group-hover:bg-${color}-700`,
        rangePresets: {
          bg: 'bg-gray-800 bg-opacity-50',
          normal: 'text-gray-500',
          hover: `hover:text-white hover:bg-${color}-900`,
          selected: `text-white bg-${color}-500`
        },
        applyBtn: {
          bg: this.canConfirm ? `bg-${color}-500` : `bg-${color}-900`
        }
      };
      return this.dark ? cjs(base, dark) : base;
    },

    detectClickOutside() {
      return e => {
        if (!this.show) {
          return false;
        }

        if (e.target === this.$el || this.$el.contains(e.target)) {
          // Maintain focus if we're using the default input
          if (this.$refs.input) {
            this.$nextTick(() => {
              this.focusTimeout = setTimeout(() => {
                this.$refs.input.focus();
              }, 100);
            });
          }

          return false;
        }

        this.show = false;
      };
    },

    api() {
      return {
        dates: {
          raw: this.date,
          readable: this.selectedReadable
        },
        methods: {
          show: this.showPicker,
          hide: this.hidePicker,
          setFocus: this.setFocus,
          setDate: this.setDate
        }
      };
    }

  },
  watch: {
    selected(newValue, oldValue) {
      // 
      if (this.debug) {
        console.log('selected change: ' + newValue);
      }
    },

    setupComplete(newValue) {
      if (this.debug) {
        console.log('setupComplete change: ' + newValue);
      }
    },

    isConfirmed(newValue) {
      if (this.debug) {
        console.log('isConfirmed change: ' + newValue);
      }

      if (!newValue) {
        return false;
      }

      if (this.hasChanged) {
        this.selectedChange(this.selected);
      } // Reset confirmed var


      this.isConfirmed = false;
    },

    selectedReadable(newValue, oldValue) {
      if (this.debug) {
        console.log('selectedReadable change: ' + newValue);
      }

      if (this.selected == null) {
        return;
      }

      if (newValue !== oldValue) {
        this.hasChanged = true;
      }

      if (this.requireConfirm && !this.isConfirmed) {
        return;
      }

      this.$emit('input', newValue);
      this.selectedChange(this.selected);
    },

    show(newValue) {
      if (newValue) {
        this.updatePosition();
        this.setupListeners();

        if (this.selected !== null) {
          this.focusOn(this.type == 'range' ? this.selected[0] : this.selected);
        }
      } else {
        clearTimeout(this.focusTimeout);
        this.teardownListeners();

        if (this.confirmable && !this.isConfirmed) {
          this.revertSelection();
        }
      }
    },

    type(newValue) {
      this.selected = null;
    },

    picks(newValue) {
      this.setupPickerFocus();
    },

    disable(newValue) {
      this.updateDenyDates();
    }

  },

  beforeMount() {
    // Initial setup for dayjs
    // ---------------------------------------------
    this.setupLocale();
  },

  mounted() {
    // Assign any options passed in via props
    // ---------------------------------------------
    this.setupPickerOptions(); // Eaves droppin' like J.Edgar ya dig?!
    // ---------------------------------------------
    // this.setupListeners()
    // Setup Popper Instance
    // ---------------------------------------------

    this.setupPopper(); // Set date select limits
    // ---------------------------------------------

    this.setupPickerDateLimits(); // Set the initial date and view
    // e.g. days, months, years
    // ---------------------------------------------

    this.setupPickerFocus(); // Setup range presets
    // ---------------------------------------------

    this.setupRangePresets(); // Setup the template parsing
    // (if we have a tenplate)
    // ---------------------------------------------

    this.setupPickerTemplate(); // Set setup flag

    this.$nextTick(() => {
      this.setupComplete = true;
    });
  },

  beforeDestroy() {
    this.teardownListeners();
    this.teardownPopper();
  },

  methods: {
    setupPickerOptions() {
      this.opts = Object.assign(this.opts, this.options);
    },

    setupLocale() {
      dayjs_min.updateLocale('en', {
        weekStart: this.opts.weekStartsOn
      });
    },

    setupListeners() {
      if (!this.inline) {
        window.addEventListener('mousedown', this.detectClickOutside, {
          capture: true,
          passive: true
        });
      }
    },

    teardownListeners() {
      if (!this.inline) {
        window.removeEventListener('mousedown', this.detectClickOutside);
      }
    },

    setupPopper() {
      if (this.inline) return false;
      this.$nextTick(() => {
        let distance = this.opts.withPointer ? 12 : 4;
        let modifiers = [{
          name: 'preventOverflow',
          options: {
            padding: {
              top: 5,
              bottom: 5
            }
          }
        }, {
          name: 'flip',
          enabled: this.opts.alwaysInView,
          options: {
            padding: 5
          }
        }, {
          name: 'offset',
          options: {
            offset: [0, distance]
          }
        }, {
          name: 'arrow',
          options: {
            enabled: this.opts.withPointer,
            padding: 8
          }
        }];
        this.popper = createPopper(this.$refs.trigger, this.$refs.picker, {
          placement: this.placement,
          modifiers: modifiers
        });
      });
    },

    teardownPopper() {
      if (this.popper !== undefined) {
        this.popper.destroy();
      }
    },

    setupPickerDateLimits() {
      // Set min/max date limits
      if (this.from !== null) {
        let from = dayjs_min(this.from);
        if (!from.isValid()) console.error("The Datepicker 'from' date is invalid");
        this.minDate = from;
      }

      if (this.to !== null) {
        let to = dayjs_min(this.to);
        if (!to.isValid()) console.error("The Datepicker 'to' date is invalid");
        this.maxDate = to;
      } // Set past/future limits


      this.canSelectPast = !this.disablePast;
      this.canSelectFuture = !this.disableFuture; // Set recurrence limits

      this.updateDenyDates();
    },

    setupPickerFocus() {
      let defaultDate = this.default;

      if (defaultDate !== null) {
        defaultDate = Array.isArray(defaultDate) ? defaultDate : [defaultDate];
        defaultDate = defaultDate.map(date => {
          // Check for allowed strings
          if (typeof date == 'string' && ['now', 'today'].indexOf(date.toLowerCase()) !== -1) {
            return dayjs_min();
          }

          return dayjs_min(date);
        });
        defaultDate.forEach(date => {
          // Check date can be selected
          if (!this.isSelectable(date)) {
            return console.error('This date cannot be selected, it is outside the allowed range!');
          } // Select date


          if (this.type == 'range') {
            if (this.selected == null) {
              this.selected = [];
            }

            this.selected.push(date);
          } else {
            this.selected = date;
          }
        });

        if (this.requireConfirm) {
          this.$nextTick(() => {
            this.isConfirmed = true;
            this.hasChanged = false;
          });
        }

        this.focusOn(defaultDate[0], this.picks);
      } else {
        defaultDate = this.minDate !== null ? this.minDate : this.today;
        this.focusOn(defaultDate, this.picks);
      }
    },

    setupRangePresets() {
      if (this.opts.rangePresets.length === 0) return;
      this.opts.rangePresets.forEach((preset, index) => {
        if (typeof preset === 'string' && this.rangePresetDefaults[preset]) {
          this.rangePresets.push(this.rangePresetDefaults[preset]);
          return;
        }

        if (typeof preset === 'object') {
          this.rangePresets.push(preset);
          return;
        }
      });
    },

    setupPickerTemplate() {
      // Check for a slot template
      if (this.$slots.default !== undefined) {
        let content = this.$refs.trigger.innerHTML; // Search for template vars

        this.hasTemplate = content.trim().indexOf('%date') !== -1; // Set template

        if (this.hasTemplate) {
          this.template = content.trim();
        }
      }
    },

    parseTemplate() {
      // Get the template matches if needed
      if (this.templateMatches == null) {
        let reg = /%date(.*?)%/g;
        let matches = this.template.match(reg);
        this.templateMatches = matches;
      } // Get the original template


      let template = this.template; // Loop through the %date% matches and update the new template var

      this.templateMatches.map(match => {
        let parts = this.replaceAll(match, '%', '').split('|');
        let format = parts.length > 1 ? parts[1] : this.format;
        template = this.replaceAll(template, match, this.selected.format(format));
      }); // Update the slot

      this.$refs.trigger.innerHTML = template;
    },

    updatePosition() {
      if (this.inline || this.popper == null) return false;
      this.$nextTick(function () {
        this.popper.update();
      });
    },

    updateDenyDates() {
      if (this.disable == null) {
        return;
      }

      let dates = [];

      if (Array.isArray(this.disable)) {
        dates = this.disable.map(date => {
          return dayjs_min(date, ['DD-MM-YYYY', 'DD/MM/YYYY', 'YYYY-MM-DD', 'YYYY/MM/DD']);
        });
      }

      if (typeof this.disable == 'function') {
        let from = this.focus.subtract(1, 'months').startOf('month');
        let to = this.focus.add(1, 'months').endOf('month');
        let days = [];

        while (from.isBefore(to)) {
          days.push(from);
          from = from.add(1, 'days');
        }

        dates = days.filter(date => {
          return this.disable(date);
        });
      }

      this.denyDates = dates;
    },

    select(date, selectOnly = false, confirm = false) {
      if (!this.isSelectable(date)) return false;

      if (this.type == 'range') {
        this.selectRangeDate(date, selectOnly);
        return false;
      } // Update selected


      this.selected = date; // Exit here if we only need to select a date and nothing else

      if (selectOnly) return false; // Emit select event

      this.emitSelected();
    },

    revertSelection() {
      this.selected = this.date;
      this.$nextTick(() => {
        this.hasChanged = false;
        this.isConfirmed = false;
      });
    },

    selectedChange(newValue) {
      this.date = newValue;

      if (this.setupComplete) {
        this.$emit('change', newValue);
      } // If we have a template replace the text


      if (this.hasTemplate) {
        this.parseTemplate();
      }

      if (newValue == null) return; // Hide on selection

      if (this.type == 'range' && !this.confirmable) {
        if (newValue.length > 1) {
          this.hidePicker(true);
        }
      } else {
        if (this.inline) {
          this.focusOn(newValue);
        }

        this.hidePicker(true);
      } // Reset Changed Flag


      this.hasChanged = false;
    },

    confirmSelection() {
      if (this.selected !== null && this.hasChanged) {
        this.isConfirmed = true;
      }
    },

    emitSelected() {
      this.$nextTick(function () {
        this.$emit('select', this.selected);
      });
    },

    deselect(date) {
      if (this.selected == date) {
        this.selected = null;
        return false;
      }

      if (this.selected !== null && Array.isArray(this.selected)) {
        this.selected = this.selected.filter(selected => {
          return selected !== date;
        });
        if (this.selected.length == 0) this.selected = null;
      }
    },

    focusOn(date, view = null) {
      // Check if we can alter the focus date with this date
      if (!this.isFocusable(date)) return false; // Set the focus

      this.focus = date; // Set the view if defined

      if (view !== null) this.view = view; // Update deny dates array

      this.updateDenyDates(); // Update the picker position
      // - in case on months with more/less weeks

      this.updatePosition(); // Emit focus event

      this.$nextTick(function () {
        this.$emit('focus', this.focus);
      });
    },

    inFocus(date) {
      return this.focus !== null && date.format('DMYYYY') == this.focus.format('DMYYYY');
    },

    isPast(date) {
      return date.isBefore(this.today);
    },

    isFuture(date) {
      return date.isAfter(this.today.endOf('day'));
    },

    isFocusable(date) {
      // Check we can select past dates
      if (!this.canSelectPast && this.isPast(date)) return false; // Check we can select future dates

      if (!this.canSelectFuture && this.isFuture(date)) return false; // Check for a minDate

      if (this.minDate !== null && date.isBefore(this.minDate)) return false; // Check for a maxDate

      if (this.maxDate !== null && date.isAfter(this.maxDate)) return false;
      return true;
    },

    isSelectable(date) {
      // Check if we have recurrance dates set
      if (this.denyDates !== null && this.denyDates.length > 0) {
        for (let i = 0; i < this.denyDates.length; i++) {
          if (dayjs_min(this.denyDates[i]).isSame(date, 'day')) return false;
        }
      }

      return this.isFocusable(date);
    },

    isSelected(date) {
      let format = this.getIsSelectedFormat();

      if (this.type == 'range' && this.selected !== null) {
        return this.selected.filter(selected => {
          return date.format(format) == selected.format(format);
        }).length > 0;
      }

      return this.selected !== null && date.format(format) == this.selected.format(format);
    },

    getIsSelectedFormat() {
      let format = 'DMYYYY';
      if (this.view == 'months') format = 'MYYYY';
      if (this.view == 'years') format = 'YYYY';
      return format;
    },

    // Day specific
    // -----------------------------
    isToday(day) {
      return day.format('DMYYYY') == this.today.format('DMYYYY');
    },

    isOverflow(day) {
      return day.format('M') !== this.focus.format('M');
    },

    isWeekend(day) {
      return ['Saturday', 'Sunday'].indexOf(day.format('dddd')) !== -1;
    },

    isDay(date, day) {
      return dayjs_min(date).format('dddd').toLowerCase() == day.toLowerCase();
    },

    isStartOfWeek(day) {
      return day.isoWeekday() == this.weekStartsOn;
    },

    isEndOfWeek(day) {
      return day.isoWeekday() == this.weekEndsOn;
    },

    // Date addition/subtraction
    // -----------------------------
    addDay(num = 1) {
      this.focusOn(this.focus.add(num, 'days'));
    },

    subDay(num = 1) {
      this.focusOn(this.focus.subtract(num, 'days'));
    },

    addMonth(num = 1) {
      this.focusOn(this.focus.add(num, 'months'));
    },

    subMonth(num = 1) {
      this.focusOn(this.focus.subtract(num, 'months'));
    },

    addYear(num = 1) {
      this.focusOn(this.focus.add(num, 'years'));
    },

    subYear(num = 1) {
      this.focusOn(this.focus.subtract(num, 'years'));
    },

    getTimeMethod(prefix) {
      return prefix + (this.view == 'days' ? 'Month' : 'Year');
    },

    addTime(num = 1) {
      let method = this.getTimeMethod('add');
      num = this.view == 'years' ? 12 : 1;
      this[method](num);
    },

    subTime(num = 1) {
      let method = this.getTimeMethod('sub');
      num = this.view == 'years' ? 12 : 1;
      this[method](num);
    },

    // Range specific
    // -----------------------------
    inRange(day) {
      if (this.type !== 'range' || this.selected == null) return false;
      let rangeStart = this.selected[0];
      let rangeEnd = this.isSelectingRange ? this.rangeHover : this.selected[1];
      if (rangeEnd == null) return false;
      return day.isBetween(rangeStart, rangeEnd, 'day', '()');
    },

    isRangeStart(day) {
      if (this.type !== 'range' || this.selected == null || this.rangeHover == null && this.selected[1] == null) return false;
      return day.format('DMYYYY') == this.selected[0].format('DMYYYY');
    },

    isRangeEnd(day) {
      if (this.type !== 'range' || this.selected == null || this.rangeHover == null && this.selected[1] == null) {
        return false;
      }

      let end = this.selected[1] == null ? this.rangeHover : this.selected[1];
      return day.format('DMYYYY') == end.format('DMYYYY');
    },

    inFullRange(day) {
      return this.inRange(day) || this.isRangeStart(day) || this.isRangeEnd(day);
    },

    marshallDayEnter(day) {
      if (this.type == 'range' && this.isSelectingRange) {
        if (day.isAfter(this.selected[0])) this.rangeHover = day;
      }
    },

    marshallDayLeave(day) {
      if (this.type == 'range' && this.rangeHover !== null) {
        if (this.rangeHover == day) this.rangeHover = null;
      }
    },

    selectRangeDate(date, selectOnly = false) {
      // If we currently only have a start date
      if (this.selected !== null && this.selected.length == 1) {
        // Check if we need to deselect an already selected date
        if (this.isSelected(date)) {
          this.deselect(date);
          return;
        } // Check if we're selecting a date before the current selected date
        // If yes, use as the start date instead


        if (date.isBefore(this.selected[0])) {
          this.selected = [date]; // Push the date into the selected array
        } else {
          this.selected.push(date);
        }

        if (!selectOnly) {
          this.emitSelected();
        }

        return;
      } // If we currently have a full range


      if (this.selected == null || this.selected.length == 2) {
        this.selected = [date];

        if (!selectOnly) {
          this.emitSelected();
        } // Reset the range hover for our new selection


        this.rangeHover = null;
      }
    },

    selectRangePreset(preset) {
      this.selected = null;
      this.selectRangeDate(preset.from, true);

      if (preset.to) {
        this.selectRangeDate(preset.to, true);
      }

      this.focusOn(preset.from);

      if (!this.requireConfirm) {
        this.hidePicker(true);
      } else {
        this.$nextTick(() => {
          this.isConfirmed = true;
        });
      }
    },

    isPresetSelected(preset) {
      if (this.selected == null || this.selected[0].format('DDMMYYY') !== preset.from.format('DDMMYYY')) return false;

      if (!preset.to) {
        return !this.selected[1];
      }

      return this.isRangeEnd(preset.to);
    },

    getPresetIcon(preset) {
      if (!preset.icon) return '';
      return this.rangePresetIcons[preset.icon] || preset.icon;
    },

    changeView(view) {
      this.view = view;
    },

    selectDay(day) {
      this.select(day);
    },

    selectMonth(month) {
      if (this.picks == 'months') {
        return this.select(month.startOf('month'));
      }

      this.focusOn(month, 'days');
    },

    selectYear(year) {
      if (this.picks == 'years') {
        return this.select(year.startOf('year'));
      }

      this.focusOn(year, 'months');
    },

    replaceAll(str, search, replacement) {
      return str.split(search).join(replacement);
    },

    handleMouseLeave() {
      if (['mouseenter', 'mouseover', 'hover'].indexOf(this.trigger) == -1) {
        return false;
      }

      this.show = false;
    },

    // Slot methods
    showPicker() {
      this.show = true;
    },

    hidePicker(calledOnSelection = false) {
      if (calledOnSelection && !this.opts.hideOnSelect) {
        return;
      }

      this.show = false;
    },

    setFocus(date) {
      this.focusOn(dayjs_min(date));
    },

    setDate(date, show) {
      this.select(dayjs_min(date));
      this.focusOn(dayjs_min(date));

      if (show) {
        this.showPicker();
      }
    },

    _(classes) {
      return classes;
    }

  }
};

function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    if (typeof shadowMode !== 'boolean') {
        createInjectorSSR = createInjector;
        createInjector = shadowMode;
        shadowMode = false;
    }
    // Vue.extend constructor export interop.
    const options = typeof script === 'function' ? script.options : script;
    // render functions
    if (template && template.render) {
        options.render = template.render;
        options.staticRenderFns = template.staticRenderFns;
        options._compiled = true;
        // functional template
        if (isFunctionalTemplate) {
            options.functional = true;
        }
    }
    // scopedId
    if (scopeId) {
        options._scopeId = scopeId;
    }
    let hook;
    if (moduleIdentifier) {
        // server build
        hook = function (context) {
            // 2.3 injection
            context =
                context || // cached call
                    (this.$vnode && this.$vnode.ssrContext) || // stateful
                    (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
            // 2.2 with runInNewContext: true
            if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
                context = __VUE_SSR_CONTEXT__;
            }
            // inject component styles
            if (style) {
                style.call(this, createInjectorSSR(context));
            }
            // register component module identifier for async chunk inference
            if (context && context._registeredComponents) {
                context._registeredComponents.add(moduleIdentifier);
            }
        };
        // used by ssr in case component is cached and beforeCreate
        // never gets called
        options._ssrRegister = hook;
    }
    else if (style) {
        hook = shadowMode
            ? function (context) {
                style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
            }
            : function (context) {
                style.call(this, createInjector(context));
            };
    }
    if (hook) {
        if (options.functional) {
            // register for functional component in vue file
            const originalRender = options.render;
            options.render = function renderWithStyleInjection(h, context) {
                hook.call(context);
                return originalRender(h, context);
            };
        }
        else {
            // inject component registration as beforeCreate hook
            const existing = options.beforeCreate;
            options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
    }
    return script;
}

/* script */
const __vue_script__ = script;
/* template */

var __vue_render__ = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "inline-block"
  }, [!_vm.inline ? _c('div', {
    ref: "trigger",
    class: [this.opts.triggerClass],
    on: {
      "click": function ($event) {
        _vm.show = true;
      }
    }
  }, [_vm._t("default", [_c('input', {
    ref: "input",
    staticClass: "form-input transition duration-150 ease-in-out sm:text-sm sm:leading-5",
    attrs: {
      "name": _vm.name,
      "type": "text",
      "autocomplete": "off"
    },
    domProps: {
      "value": _vm.selectedReadable
    },
    on: {
      "focus": function ($event) {
        _vm.show = true;
      },
      "keydown": function ($event) {
        if (!$event.type.indexOf('key') && _vm._k($event.keyCode, "tab", 9, $event.key, "Tab")) {
          return null;
        }

        _vm.show = false;
      }
    }
  })], {
    "date": _vm.api.dates,
    "methods": _vm.api.methods
  })], 2) : _vm._e(), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.inline || _vm.show,
      expression: "inline || show"
    }],
    ref: "picker",
    staticClass: "rounded-lg shadow-datepicker select-none",
    class: {
      'z-50': !_vm.inline,
      'is-inline': _vm.inline,
      'max-w-lg': _vm.hasRangePresets,
      'max-w-xs': !_vm.hasRangePresets
    },
    staticStyle: {
      "width": "22rem"
    },
    attrs: {
      "role": "datepicker"
    }
  }, [_vm.opts.withPointer && !_vm.inline ? _c('div', {
    class: {
      'text-white': !_vm.dark,
      'text-gray-900': _vm.dark
    },
    attrs: {
      "data-popper-arrow": ""
    }
  }) : _vm._e(), _vm._v(" "), _vm.inline || _vm.show ? _c('div', {
    staticClass: "flex items-stretch rounded-lg",
    class: {
      'text-gray-900 bg-white': !_vm.dark,
      'text-white bg-gray-900': _vm.dark,
      'border border-gray-200': !_vm.dark && _vm.inline
    }
  }, [_c('div', {
    staticClass: "flex-1 pt-2 pb-1",
    class: [_vm.hasRangePresets ? 'pl-1 pr-3' : 'px-1']
  }, [_c('div', {
    staticClass: "flex items-center font-bold mb-1"
  }, [_c('div', {
    staticClass: "flex-initial flex items-center justify-center w-8 h-8 rounded-full leading-none select-none",
    class: [!_vm.canSubTime ? 'opacity-50' : '', _vm.canSubTime ? 'cursor-pointer ' + _vm._theme.navHover : ''],
    on: {
      "click": function ($event) {
        return _vm.subTime();
      }
    }
  }, [_c('svg', {
    staticClass: "w-4 h-4",
    attrs: {
      "viewBox": "0 0 20 20",
      "fill": "currentColor"
    }
  }, [_c('path', {
    attrs: {
      "fill-rule": "evenodd",
      "d": "M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z",
      "clip-rule": "evenodd"
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "flex-1 text-center"
  }, [_vm.view == 'days' ? _c('span', {
    staticClass: "p-1 cursor-pointer rounded-md",
    class: [_vm._theme.navHover],
    on: {
      "click": function ($event) {
        return _vm.changeView('months');
      }
    }
  }, [_vm._v(_vm._s(_vm.focus.format('MMMM')))]) : _vm._e(), _vm._v(" "), _vm.view !== 'years' ? _c('span', {
    staticClass: "p-1 -mx-1 cursor-pointer rounded-md",
    class: [_vm._theme.navHover],
    on: {
      "click": function ($event) {
        return _vm.changeView('years');
      }
    }
  }, [_vm._v(_vm._s(_vm.focus.format('YYYY')))]) : _vm._e(), _vm._v(" "), _vm.view == 'years' ? _c('span', [_vm._v("\n                            " + _vm._s(this.focus.subtract(4, 'years').format('YYYY')) + " - " + _vm._s(this.focus.add(7, 'years').format('YYYY')) + "\n                        ")]) : _vm._e()]), _vm._v(" "), _c('div', {
    staticClass: "flex-initial flex items-center justify-center w-8 h-8 rounded-full leading-none select-none",
    class: [!_vm.canAddTime ? 'opacity-50' : '', _vm.canAddTime ? 'cursor-pointer ' + _vm._theme.navHover : ''],
    on: {
      "click": function ($event) {
        return _vm.addTime();
      }
    }
  }, [_c('svg', {
    staticClass: "w-4 h-4",
    attrs: {
      "viewBox": "0 0 20 20",
      "fill": "currentColor"
    }
  }, [_c('path', {
    attrs: {
      "fill-rule": "evenodd",
      "d": "M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z",
      "clip-rule": "evenodd"
    }
  })])])]), _vm._v(" "), _vm.view == 'days' ? _c('div', [_c('div', {
    staticClass: "flex uppercase py-2"
  }, _vm._l(_vm.weekDays, function (weekDay) {
    return _c('div', {
      staticClass: "text-center text-xs font-semibold",
      class: [_vm._theme.weekDay],
      staticStyle: {
        "width": "14.28%"
      }
    }, [_vm._v("\n                            " + _vm._s(weekDay) + "\n                        ")]);
  }), 0), _vm._v(" "), _c('div', {
    staticClass: "flex flex-wrap"
  }, _vm._l(_vm.days, function (day, index) {
    return _c('div', {
      staticClass: "flex items-center pt-1 group",
      class: _vm._([_vm.isSelectable(day) ? 'cursor-pointer' : '', !_vm.isSelectable(day) ? 'cursor-default' : '', _vm.isOverflow(day) && _vm.isSelectable(day) && !_vm.inFullRange(day) ? 'opacity-50' : '', !_vm.isSelectable(day) ? 'opacity-25 line-through' : '', _vm.inRange(day) ? 'range' : '', _vm.isWeekend(day) ? _vm._theme.day.weekendBg : '', // Weekend corner rounding
      index == 5 ? 'rounded-tl-md' : '', index == 6 ? 'rounded-tr-md' : '', index == _vm.days.length - 2 ? 'rounded-bl-md' : '', index == _vm.days.length - 1 ? 'rounded-br-md' : '']),
      staticStyle: {
        "width": "14.28%"
      },
      on: {
        "!click": function ($event) {
          $event.stopPropagation();
          $event.preventDefault();
          return _vm.selectDay(day);
        },
        "mouseenter": function ($event) {
          return _vm.marshallDayEnter(day);
        },
        "mouseleave": function ($event) {
          return _vm.marshallDayLeave(day);
        }
      }
    }, [_c('div', {
      staticClass: "flex w-full items-center justify-center"
    }, [_c('div', {
      staticClass: "flex items-center justify-center h-10 text-sm leading-none",
      class: [_vm.isSelected(day) ? _vm._theme.day.selected : '', !_vm.isSelected(day) && _vm.isSelectable(day) && !_vm.isRangeEnd(day) ? _vm._theme.day.hover : '', !_vm.isSelected(day) && _vm.isRangeEnd(day) ? _vm._theme.rangeEndHover : '', _vm.isToday(day) && !_vm.inFullRange(day) && !_vm.isSelected(day) ? 'border border-gray-400' : '', !_vm.inRange(day) ? 'w-10 rounded-full' : '', _vm.inRange(day) ? ['w-full', _vm._theme.day.inRange, _vm.isStartOfWeek(day) ? "box-content -ml-1 pl-1" : '', _vm.isEndOfWeek(day) ? "box-content -mr-" + _vm.dayEdgeOffset + " pr-" + _vm.dayEdgeOffset : ''] : '', _vm.isRangeStart(day) ? ['w-full rounded-l-full rounded-r-none border-0', _vm.isEndOfWeek(day) ? "box-content -mr-" + _vm.dayEdgeOffset + " pr-" + _vm.dayEdgeOffset : ''] : '', _vm.isRangeEnd(day) ? ['w-full rounded-r-full rounded-l-none border-0', _vm.isStartOfWeek(day) ? "box-content -ml-1 pl-1" : ''] : '']
    }, [_vm._v("\n                                    " + _vm._s(day.format('D')) + "\n                                ")])])]);
  }), 0)]) : _vm._e(), _vm._v(" "), _vm.view == 'months' ? _c('div', [_c('div', {
    staticClass: "flex flex-wrap"
  }, _vm._l(_vm.months, function (month) {
    return _c('div', {
      staticClass: "w-1/4",
      on: {
        "click": function ($event) {
          return _vm.selectMonth(month);
        }
      }
    }, [_c('div', {
      class: [_vm._theme.month.tile, _vm._theme.month.tileBg, _vm.isSelected(month) ? _vm._theme.day.selected : '', month.format('MYYYY') == _vm.today.format('MYYYY') && !_vm.isSelected(month) ? _vm._theme.month.current : '', !_vm.isSelectable(month) ? 'opacity-25 line-through' : '']
    }, [_vm._v("\n                                " + _vm._s(month.format('MMM')) + "\n                            ")])]);
  }), 0)]) : _vm._e(), _vm._v(" "), _vm.view == 'years' ? _c('div', [_c('div', {
    staticClass: "flex flex-wrap"
  }, _vm._l(_vm.years, function (year) {
    return _c('div', {
      staticClass: "w-1/4",
      on: {
        "click": function ($event) {
          return _vm.selectYear(year);
        }
      }
    }, [_c('div', {
      class: [_vm._theme.month.tile, _vm._theme.month.tileBg, _vm.isSelected(year) ? _vm._theme.day.selected : '', year.format('YYYY') == _vm.today.format('YYYY') && !_vm.isSelected(year) ? _vm._theme.month.current : '', !_vm.isSelectable(year) ? 'opacity-25 line-through' : '']
    }, [_vm._v("\n                                " + _vm._s(year.format('YYYY')) + "\n                            ")])]);
  }), 0)]) : _vm._e(), _vm._v(" "), !_vm.hasRangePresets && _vm.requireConfirm ? _c('div', {
    staticClass: "p-2"
  }, [_c('button', {
    staticClass: "inline-flex items-center justify-center w-full px-3 py-2 border border-transparent text-sm text-white leading-4 font-medium rounded shadow-sm",
    class: [_vm._theme.applyBtn.bg, this.canConfirm ? 'cursor-pointer hover:opacity-75' : 'cursor-not-allowed'],
    attrs: {
      "type": "button"
    },
    on: {
      "click": function ($event) {
        $event.preventDefault();
        return _vm.confirmSelection($event);
      }
    }
  }, [_vm._v("\n                        " + _vm._s(_vm.opts.confirmButtonText) + "\n                    ")])]) : _vm._e()]), _vm._v(" "), _vm.hasRangePresets ? _c('div', {
    staticClass: "relative flex w-1/3 rounded-r-lg",
    class: [_vm._theme.rangePresets.bg]
  }, [_c('div', {
    staticClass: "absolute top-0 left-0 flex flex-col w-full h-full overflow-y-auto"
  }, [_c('div', {
    staticClass: "flex-1 p-2"
  }, _vm._l(_vm.rangePresets, function (preset) {
    return _c('span', {
      staticClass: "flex items-center p-2 rounded text-sm whitespace-no-wrap mb-1 cursor-pointer",
      class: [_vm.isPresetSelected(preset) ? _vm._theme.rangePresets.selected : [_vm._theme.rangePresets.normal, _vm._theme.rangePresets.hover].join(' ')],
      domProps: {
        "innerHTML": _vm._s(_vm.getPresetIcon(preset) + preset.label)
      },
      on: {
        "click": function ($event) {
          return _vm.selectRangePreset(preset);
        }
      }
    });
  }), 0), _vm._v(" "), _vm.requireConfirm ? _c('div', {
    staticClass: "p-2"
  }, [_c('button', {
    staticClass: "inline-flex items-center justify-center w-full px-3 py-2 border border-transparent text-sm text-white leading-4 font-medium rounded shadow-sm",
    class: [_vm._theme.applyBtn.bg, this.canConfirm ? 'cursor-pointer hover:opacity-75' : 'cursor-not-allowed'],
    attrs: {
      "type": "button"
    },
    on: {
      "click": function ($event) {
        $event.preventDefault();
        return _vm.confirmSelection($event);
      }
    }
  }, [_vm._v("\n                            " + _vm._s(_vm.opts.confirmButtonText) + "\n                        ")])]) : _vm._e()])]) : _vm._e()]) : _vm._e()])]);
};

var __vue_staticRenderFns__ = [];
/* style */

const __vue_inject_styles__ = undefined;
/* scoped */

const __vue_scope_id__ = undefined;
/* module identifier */

const __vue_module_identifier__ = undefined;
/* functional template */

const __vue_is_functional_template__ = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

const __vue_component__ = /*#__PURE__*/normalizeComponent({
  render: __vue_render__,
  staticRenderFns: __vue_staticRenderFns__
}, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, false, undefined, undefined, undefined);

// Import vue component

const install = function installDatepicker(Vue) {
  if (install.installed) return;
  install.installed = true;
  Vue.component('Datepicker', __vue_component__);
}; // Create module definition for Vue.use()
// to be registered via Vue.use() as well as Vue.component()


__vue_component__.install = install; // Export component by default
// also be used as directives, etc. - eg. import { RollupDemoDirective } from 'rollup-demo';
// export const RollupDemoDirective = component;

export default __vue_component__;
