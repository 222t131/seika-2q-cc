/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/dayjs/dayjs.min.js":
/*!*****************************************!*\
  !*** ./node_modules/dayjs/dayjs.min.js ***!
  \*****************************************/
/***/ (function(module) {

!function(t,e){ true?module.exports=e():0}(this,(function(){"use strict";var t=1e3,e=6e4,n=36e5,r="millisecond",i="second",s="minute",u="hour",a="day",o="week",c="month",f="quarter",h="year",d="date",l="Invalid Date",$=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,y=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,M={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],n=t%100;return"["+t+(e[(n-20)%10]||e[n]||e[0])+"]"}},m=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},v={s:m,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+m(r,2,"0")+":"+m(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,c),s=n-i<0,u=e.clone().add(r+(s?-1:1),c);return+(-(r+(n-i)/(s?i-u:u-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:c,y:h,w:o,d:a,D:d,h:u,m:s,s:i,ms:r,Q:f}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},g="en",D={};D[g]=M;var p="$isDayjsObject",S=function(t){return t instanceof _||!(!t||!t[p])},w=function t(e,n,r){var i;if(!e)return g;if("string"==typeof e){var s=e.toLowerCase();D[s]&&(i=s),n&&(D[s]=n,i=s);var u=e.split("-");if(!i&&u.length>1)return t(u[0])}else{var a=e.name;D[a]=e,i=a}return!r&&i&&(g=i),i||!r&&g},O=function(t,e){if(S(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new _(n)},b=v;b.l=w,b.i=S,b.w=function(t,e){return O(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var _=function(){function M(t){this.$L=w(t.locale,null,!0),this.parse(t),this.$x=this.$x||t.x||{},this[p]=!0}var m=M.prototype;return m.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(b.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match($);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(e)}(t),this.init()},m.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},m.$utils=function(){return b},m.isValid=function(){return!(this.$d.toString()===l)},m.isSame=function(t,e){var n=O(t);return this.startOf(e)<=n&&n<=this.endOf(e)},m.isAfter=function(t,e){return O(t)<this.startOf(e)},m.isBefore=function(t,e){return this.endOf(e)<O(t)},m.$g=function(t,e,n){return b.u(t)?this[e]:this.set(n,t)},m.unix=function(){return Math.floor(this.valueOf()/1e3)},m.valueOf=function(){return this.$d.getTime()},m.startOf=function(t,e){var n=this,r=!!b.u(e)||e,f=b.p(t),l=function(t,e){var i=b.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return r?i:i.endOf(a)},$=function(t,e){return b.w(n.toDate()[t].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},y=this.$W,M=this.$M,m=this.$D,v="set"+(this.$u?"UTC":"");switch(f){case h:return r?l(1,0):l(31,11);case c:return r?l(1,M):l(0,M+1);case o:var g=this.$locale().weekStart||0,D=(y<g?y+7:y)-g;return l(r?m-D:m+(6-D),M);case a:case d:return $(v+"Hours",0);case u:return $(v+"Minutes",1);case s:return $(v+"Seconds",2);case i:return $(v+"Milliseconds",3);default:return this.clone()}},m.endOf=function(t){return this.startOf(t,!1)},m.$set=function(t,e){var n,o=b.p(t),f="set"+(this.$u?"UTC":""),l=(n={},n[a]=f+"Date",n[d]=f+"Date",n[c]=f+"Month",n[h]=f+"FullYear",n[u]=f+"Hours",n[s]=f+"Minutes",n[i]=f+"Seconds",n[r]=f+"Milliseconds",n)[o],$=o===a?this.$D+(e-this.$W):e;if(o===c||o===h){var y=this.clone().set(d,1);y.$d[l]($),y.init(),this.$d=y.set(d,Math.min(this.$D,y.daysInMonth())).$d}else l&&this.$d[l]($);return this.init(),this},m.set=function(t,e){return this.clone().$set(t,e)},m.get=function(t){return this[b.p(t)]()},m.add=function(r,f){var d,l=this;r=Number(r);var $=b.p(f),y=function(t){var e=O(l);return b.w(e.date(e.date()+Math.round(t*r)),l)};if($===c)return this.set(c,this.$M+r);if($===h)return this.set(h,this.$y+r);if($===a)return y(1);if($===o)return y(7);var M=(d={},d[s]=e,d[u]=n,d[i]=t,d)[$]||1,m=this.$d.getTime()+r*M;return b.w(m,this)},m.subtract=function(t,e){return this.add(-1*t,e)},m.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||l;var r=t||"YYYY-MM-DDTHH:mm:ssZ",i=b.z(this),s=this.$H,u=this.$m,a=this.$M,o=n.weekdays,c=n.months,f=n.meridiem,h=function(t,n,i,s){return t&&(t[n]||t(e,r))||i[n].slice(0,s)},d=function(t){return b.s(s%12||12,t,"0")},$=f||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r};return r.replace(y,(function(t,r){return r||function(t){switch(t){case"YY":return String(e.$y).slice(-2);case"YYYY":return b.s(e.$y,4,"0");case"M":return a+1;case"MM":return b.s(a+1,2,"0");case"MMM":return h(n.monthsShort,a,c,3);case"MMMM":return h(c,a);case"D":return e.$D;case"DD":return b.s(e.$D,2,"0");case"d":return String(e.$W);case"dd":return h(n.weekdaysMin,e.$W,o,2);case"ddd":return h(n.weekdaysShort,e.$W,o,3);case"dddd":return o[e.$W];case"H":return String(s);case"HH":return b.s(s,2,"0");case"h":return d(1);case"hh":return d(2);case"a":return $(s,u,!0);case"A":return $(s,u,!1);case"m":return String(u);case"mm":return b.s(u,2,"0");case"s":return String(e.$s);case"ss":return b.s(e.$s,2,"0");case"SSS":return b.s(e.$ms,3,"0");case"Z":return i}return null}(t)||i.replace(":","")}))},m.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},m.diff=function(r,d,l){var $,y=this,M=b.p(d),m=O(r),v=(m.utcOffset()-this.utcOffset())*e,g=this-m,D=function(){return b.m(y,m)};switch(M){case h:$=D()/12;break;case c:$=D();break;case f:$=D()/3;break;case o:$=(g-v)/6048e5;break;case a:$=(g-v)/864e5;break;case u:$=g/n;break;case s:$=g/e;break;case i:$=g/t;break;default:$=g}return l?$:b.a($)},m.daysInMonth=function(){return this.endOf(c).$D},m.$locale=function(){return D[this.$L]},m.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=w(t,e,!0);return r&&(n.$L=r),n},m.clone=function(){return b.w(this.$d,this)},m.toDate=function(){return new Date(this.valueOf())},m.toJSON=function(){return this.isValid()?this.toISOString():null},m.toISOString=function(){return this.$d.toISOString()},m.toString=function(){return this.$d.toUTCString()},M}(),k=_.prototype;return O.prototype=k,[["$ms",r],["$s",i],["$m",s],["$H",u],["$W",a],["$M",c],["$y",h],["$D",d]].forEach((function(t){k[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),O.extend=function(t,e){return t.$i||(t(e,_,O),t.$i=!0),O},O.locale=w,O.isDayjs=S,O.unix=function(t){return O(1e3*t)},O.en=D[g],O.Ls=D,O.p={},O}));

/***/ }),

/***/ "./node_modules/dayjs/locale/ja.js":
/*!*****************************************!*\
  !*** ./node_modules/dayjs/locale/ja.js ***!
  \*****************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

!function(e,_){ true?module.exports=_(__webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js")):0}(this,(function(e){"use strict";function _(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var t=_(e),d={name:"ja",weekdays:"日曜日_月曜日_火曜日_水曜日_木曜日_金曜日_土曜日".split("_"),weekdaysShort:"日_月_火_水_木_金_土".split("_"),weekdaysMin:"日_月_火_水_木_金_土".split("_"),months:"1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),monthsShort:"1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),ordinal:function(e){return e+"日"},formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY/MM/DD",LL:"YYYY年M月D日",LLL:"YYYY年M月D日 HH:mm",LLLL:"YYYY年M月D日 dddd HH:mm",l:"YYYY/MM/DD",ll:"YYYY年M月D日",lll:"YYYY年M月D日 HH:mm",llll:"YYYY年M月D日(ddd) HH:mm"},meridiem:function(e){return e<12?"午前":"午後"},relativeTime:{future:"%s後",past:"%s前",s:"数秒",m:"1分",mm:"%d分",h:"1時間",hh:"%d時間",d:"1日",dd:"%d日",M:"1ヶ月",MM:"%dヶ月",y:"1年",yy:"%d年"}};return t.default.locale(d,null,!0),d}));

/***/ }),

/***/ "./node_modules/just-validate/dist/just-validate.es.js":
/*!*************************************************************!*\
  !*** ./node_modules/just-validate/dist/just-validate.es.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CustomStyleTagIds: () => (/* binding */ CustomStyleTagIds),
/* harmony export */   GroupRules: () => (/* binding */ GroupRules),
/* harmony export */   Rules: () => (/* binding */ Rules),
/* harmony export */   "default": () => (/* binding */ JustValidate)
/* harmony export */ });
var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
const EMAIL_REGEXP = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const INTEGER_REGEXP = /^-?[0-9]\d*$/;
const PASSWORD_REGEXP = /^(?=.*[A-Za-z])(?=.*\d).{8,}$/;
const STRONG_PASSWORD_REGEXP = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
const isEmpty = (value) => {
  let newVal = value;
  if (typeof value === "string") {
    newVal = value.trim();
  }
  return !newVal;
};
const isEmail = (value) => {
  return EMAIL_REGEXP.test(value);
};
const isLengthMoreThanMax = (value, len) => {
  return value.length > len;
};
const isLengthLessThanMin = (value, len) => {
  return value.length < len;
};
const isNumber = (value) => {
  if (typeof value !== "string") {
    return false;
  }
  return !isNaN(+value) && !isNaN(parseFloat(value));
};
const isInteger = (value) => {
  return INTEGER_REGEXP.test(value);
};
const isPassword = (value) => {
  return PASSWORD_REGEXP.test(value);
};
const isStrongPassword = (value) => {
  return STRONG_PASSWORD_REGEXP.test(value);
};
const isNumberMoreThanMax = (value, len) => {
  return value > len;
};
const isNumberLessThanMin = (value, len) => {
  return value < len;
};
const isInvalidOrEmptyString = (value) => {
  return typeof value !== "string" || value === "";
};
var Rules = /* @__PURE__ */ ((Rules2) => {
  Rules2["Required"] = "required";
  Rules2["Email"] = "email";
  Rules2["MinLength"] = "minLength";
  Rules2["MaxLength"] = "maxLength";
  Rules2["Password"] = "password";
  Rules2["Number"] = "number";
  Rules2["Integer"] = "integer";
  Rules2["MaxNumber"] = "maxNumber";
  Rules2["MinNumber"] = "minNumber";
  Rules2["StrongPassword"] = "strongPassword";
  Rules2["CustomRegexp"] = "customRegexp";
  Rules2["MinFilesCount"] = "minFilesCount";
  Rules2["MaxFilesCount"] = "maxFilesCount";
  Rules2["Files"] = "files";
  return Rules2;
})(Rules || {});
var GroupRules = /* @__PURE__ */ ((GroupRules2) => {
  GroupRules2["Required"] = "required";
  return GroupRules2;
})(GroupRules || {});
var CustomStyleTagIds = /* @__PURE__ */ ((CustomStyleTagIds2) => {
  CustomStyleTagIds2["Label"] = "label";
  CustomStyleTagIds2["LabelArrow"] = "labelArrow";
  return CustomStyleTagIds2;
})(CustomStyleTagIds || {});
const defaultDictionary = [
  {
    key: Rules.Required,
    dict: {
      en: "The field is required"
    }
  },
  {
    key: Rules.Email,
    dict: {
      en: "Email has invalid format"
    }
  },
  {
    key: Rules.MaxLength,
    dict: {
      en: "The field must contain a maximum of :value characters"
    }
  },
  {
    key: Rules.MinLength,
    dict: {
      en: "The field must contain a minimum of :value characters"
    }
  },
  {
    key: Rules.Password,
    dict: {
      en: "Password must contain minimum eight characters, at least one letter and one number"
    }
  },
  {
    key: Rules.StrongPassword,
    dict: {
      en: "Password should contain minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character"
    }
  },
  {
    key: Rules.Number,
    dict: {
      en: "Value should be a number"
    }
  },
  {
    key: Rules.MaxNumber,
    dict: {
      en: "Number should be less or equal than :value"
    }
  },
  {
    key: Rules.MinNumber,
    dict: {
      en: "Number should be more or equal than :value"
    }
  },
  {
    key: Rules.MinFilesCount,
    dict: {
      en: "Files count should be more or equal than :value"
    }
  },
  {
    key: Rules.MaxFilesCount,
    dict: {
      en: "Files count should be less or equal than :value"
    }
  },
  {
    key: Rules.Files,
    dict: {
      en: "Uploaded files have one or several invalid properties (extension/size/type etc)."
    }
  }
];
const DEFAULT_ERROR_FIELD_MESSAGE = "Value is incorrect";
const isPromise = (val) => typeof val === "object" && val !== null && "then" in val && typeof val.then === "function";
const getNodeParents = (el) => {
  let elem = el;
  const els = [];
  while (elem) {
    els.unshift(elem);
    elem = elem.parentNode;
  }
  return els;
};
const getClosestParent = (groups, parents) => {
  const reversedParents = [...parents].reverse();
  for (let i = 0, len = reversedParents.length; i < len; ++i) {
    const parent = reversedParents[i];
    for (const key in groups) {
      const group = groups[key];
      if (group.groupElem === parent) {
        return [key, group];
      }
    }
  }
  return null;
};
const getClassList = (classList) => {
  if (Array.isArray(classList)) {
    return classList.filter((cls) => cls.length > 0);
  }
  if (typeof classList === "string" && classList.trim()) {
    return [...classList.split(" ").filter((cls) => cls.length > 0)];
  }
  return [];
};
const isElement = (element) => {
  return element instanceof Element || element instanceof HTMLDocument;
};
const errorLabelCss = `.just-validate-error-label[data-tooltip=true]{position:fixed;padding:4px 8px;background:#423f3f;color:#fff;white-space:nowrap;z-index:10;border-radius:4px;transform:translateY(-5px)}.just-validate-error-label[data-tooltip=true]:before{content:'';width:0;height:0;border-left:solid 5px transparent;border-right:solid 5px transparent;border-bottom:solid 5px #423f3f;position:absolute;z-index:3;display:block;bottom:-5px;transform:rotate(180deg);left:calc(50% - 5px)}.just-validate-error-label[data-tooltip=true][data-direction=left]{transform:translateX(-5px)}.just-validate-error-label[data-tooltip=true][data-direction=left]:before{right:-7px;bottom:auto;left:auto;top:calc(50% - 2px);transform:rotate(90deg)}.just-validate-error-label[data-tooltip=true][data-direction=right]{transform:translateX(5px)}.just-validate-error-label[data-tooltip=true][data-direction=right]:before{right:auto;bottom:auto;left:-7px;top:calc(50% - 2px);transform:rotate(-90deg)}.just-validate-error-label[data-tooltip=true][data-direction=bottom]{transform:translateY(5px)}.just-validate-error-label[data-tooltip=true][data-direction=bottom]:before{right:auto;bottom:auto;left:calc(50% - 5px);top:-5px;transform:rotate(0)}`;
const TOOLTIP_ARROW_HEIGHT = 5;
const defaultGlobalConfig = {
  errorFieldStyle: {
    color: "#b81111",
    border: "1px solid #B81111"
  },
  errorFieldCssClass: "just-validate-error-field",
  successFieldCssClass: "just-validate-success-field",
  errorLabelStyle: {
    color: "#b81111"
  },
  errorLabelCssClass: "just-validate-error-label",
  successLabelCssClass: "just-validate-success-label",
  focusInvalidField: true,
  lockForm: true,
  testingMode: false,
  validateBeforeSubmitting: false,
  submitFormAutomatically: false
};
class JustValidate {
  constructor(form, globalConfig, dictLocale) {
    __publicField(this, "form", null);
    __publicField(this, "fields", {});
    __publicField(this, "groupFields", {});
    __publicField(this, "errors", {});
    __publicField(this, "isValid", false);
    __publicField(this, "isSubmitted", false);
    __publicField(this, "globalConfig", defaultGlobalConfig);
    __publicField(this, "errorLabels", {});
    __publicField(this, "successLabels", {});
    __publicField(this, "eventListeners", []);
    __publicField(this, "dictLocale", defaultDictionary);
    __publicField(this, "currentLocale", "en");
    __publicField(this, "customStyleTags", {});
    __publicField(this, "onSuccessCallback");
    __publicField(this, "onFailCallback");
    __publicField(this, "onValidateCallback");
    __publicField(this, "tooltips", []);
    __publicField(this, "lastScrollPosition");
    __publicField(this, "isScrollTick");
    __publicField(this, "fieldIds", /* @__PURE__ */ new Map());
    __publicField(this, "getKeyByFieldSelector", (field) => {
      return this.fieldIds.get(field);
    });
    __publicField(this, "getFieldSelectorByKey", (key) => {
      for (const [fieldSelector, k] of this.fieldIds) {
        if (key === k) {
          return fieldSelector;
        }
      }
      return void 0;
    });
    __publicField(this, "getCompatibleFields", () => {
      const fields = {};
      Object.keys(this.fields).forEach((key) => {
        let newKey = key;
        const fieldSelector = this.getFieldSelectorByKey(key);
        if (typeof fieldSelector === "string") {
          newKey = fieldSelector;
        }
        fields[newKey] = { ...this.fields[key] };
      });
      return fields;
    });
    __publicField(this, "setKeyByFieldSelector", (field) => {
      if (this.fieldIds.has(field)) {
        return this.fieldIds.get(field);
      }
      const key = String(this.fieldIds.size + 1);
      this.fieldIds.set(field, key);
      return key;
    });
    __publicField(this, "refreshAllTooltips", () => {
      this.tooltips.forEach((item) => {
        item.refresh();
      });
    });
    __publicField(this, "handleDocumentScroll", () => {
      this.lastScrollPosition = window.scrollY;
      if (!this.isScrollTick) {
        window.requestAnimationFrame(() => {
          this.refreshAllTooltips();
          this.isScrollTick = false;
        });
        this.isScrollTick = true;
      }
    });
    __publicField(this, "formSubmitHandler", (ev) => {
      ev.preventDefault();
      this.isSubmitted = true;
      this.validateHandler(ev);
    });
    __publicField(this, "handleFieldChange", (target) => {
      let foundKey;
      for (const key in this.fields) {
        const field = this.fields[key];
        if (field.elem === target) {
          foundKey = key;
          break;
        }
      }
      if (!foundKey) {
        return;
      }
      this.fields[foundKey].touched = true;
      this.validateField(foundKey, true);
    });
    __publicField(this, "handleGroupChange", (target) => {
      let foundKey;
      for (const key in this.groupFields) {
        const group = this.groupFields[key];
        if (group.elems.find((elem) => elem === target)) {
          foundKey = key;
          break;
        }
      }
      if (!foundKey) {
        return;
      }
      this.groupFields[foundKey].touched = true;
      this.validateGroup(foundKey, true);
    });
    __publicField(this, "handlerChange", (ev) => {
      if (!ev.target) {
        return;
      }
      this.handleFieldChange(ev.target);
      this.handleGroupChange(ev.target);
      this.renderErrors();
    });
    this.initialize(form, globalConfig, dictLocale);
  }
  initialize(form, globalConfig, dictLocale) {
    this.form = null;
    this.errors = {};
    this.isValid = false;
    this.isSubmitted = false;
    this.globalConfig = defaultGlobalConfig;
    this.errorLabels = {};
    this.successLabels = {};
    this.eventListeners = [];
    this.customStyleTags = {};
    this.tooltips = [];
    this.currentLocale = "en";
    if (typeof form === "string") {
      const elem = document.querySelector(form);
      if (!elem) {
        throw Error(
          `Form with ${form} selector not found! Please check the form selector`
        );
      }
      this.setForm(elem);
    } else if (form instanceof HTMLFormElement) {
      this.setForm(form);
    } else {
      throw Error(
        `Form selector is not valid. Please specify a string selector or a DOM element.`
      );
    }
    this.globalConfig = { ...defaultGlobalConfig, ...globalConfig };
    if (dictLocale) {
      this.dictLocale = [...dictLocale, ...defaultDictionary];
    }
    if (this.isTooltip()) {
      const styleTag = document.createElement("style");
      styleTag.textContent = errorLabelCss;
      this.customStyleTags[CustomStyleTagIds.Label] = document.head.appendChild(styleTag);
      this.addListener("scroll", document, this.handleDocumentScroll);
    }
  }
  getLocalisedString(rule, ruleValue, customMsg) {
    var _a;
    const search = customMsg != null ? customMsg : rule;
    let localisedStr = (_a = this.dictLocale.find((item) => item.key === search)) == null ? void 0 : _a.dict[this.currentLocale];
    if (!localisedStr) {
      if (customMsg) {
        localisedStr = customMsg;
      }
    }
    if (localisedStr && ruleValue !== void 0) {
      switch (rule) {
        case Rules.MaxLength:
        case Rules.MinLength:
        case Rules.MaxNumber:
        case Rules.MinNumber:
        case Rules.MinFilesCount:
        case Rules.MaxFilesCount:
          localisedStr = localisedStr.replace(":value", String(ruleValue));
      }
    }
    return localisedStr || customMsg || DEFAULT_ERROR_FIELD_MESSAGE;
  }
  getFieldErrorMessage(fieldRule, elem) {
    const msg = typeof fieldRule.errorMessage === "function" ? fieldRule.errorMessage(this.getElemValue(elem), this.fields) : fieldRule.errorMessage;
    return this.getLocalisedString(fieldRule.rule, fieldRule.value, msg);
  }
  getFieldSuccessMessage(successMessage, elem) {
    const msg = typeof successMessage === "function" ? successMessage(this.getElemValue(elem), this.fields) : successMessage;
    return this.getLocalisedString(void 0, void 0, msg);
  }
  getGroupErrorMessage(groupRule) {
    return this.getLocalisedString(
      groupRule.rule,
      void 0,
      groupRule.errorMessage
    );
  }
  getGroupSuccessMessage(groupRule) {
    if (!groupRule.successMessage) {
      return void 0;
    }
    return this.getLocalisedString(
      void 0,
      void 0,
      groupRule.successMessage
    );
  }
  setFieldInvalid(key, fieldRule) {
    this.fields[key].isValid = false;
    this.fields[key].errorMessage = this.getFieldErrorMessage(
      fieldRule,
      this.fields[key].elem
    );
  }
  setFieldValid(key, successMessage) {
    this.fields[key].isValid = true;
    if (successMessage !== void 0) {
      this.fields[key].successMessage = this.getFieldSuccessMessage(
        successMessage,
        this.fields[key].elem
      );
    }
  }
  setGroupInvalid(key, groupRule) {
    this.groupFields[key].isValid = false;
    this.groupFields[key].errorMessage = this.getGroupErrorMessage(groupRule);
  }
  setGroupValid(key, groupRule) {
    this.groupFields[key].isValid = true;
    this.groupFields[key].successMessage = this.getGroupSuccessMessage(groupRule);
  }
  getElemValue(elem) {
    switch (elem.type) {
      case "checkbox":
        return elem.checked;
      case "file":
        return elem.files;
      default:
        return elem.value;
    }
  }
  validateGroupRule(key, elems, groupRule) {
    switch (groupRule.rule) {
      case GroupRules.Required: {
        if (elems.every((elem) => !elem.checked)) {
          this.setGroupInvalid(key, groupRule);
        } else {
          this.setGroupValid(key, groupRule);
        }
      }
    }
  }
  validateFieldRule(key, elem, fieldRule, afterInputChanged = false) {
    const ruleValue = fieldRule.value;
    const elemValue = this.getElemValue(elem);
    if (fieldRule.plugin) {
      const result = fieldRule.plugin(
        elemValue,
        this.getCompatibleFields()
      );
      if (!result) {
        this.setFieldInvalid(key, fieldRule);
      }
      return;
    }
    switch (fieldRule.rule) {
      case Rules.Required: {
        if (isEmpty(elemValue)) {
          this.setFieldInvalid(key, fieldRule);
        }
        break;
      }
      case Rules.Email: {
        if (isInvalidOrEmptyString(elemValue)) {
          break;
        }
        if (!isEmail(elemValue)) {
          this.setFieldInvalid(key, fieldRule);
        }
        break;
      }
      case Rules.MaxLength: {
        if (ruleValue === void 0) {
          console.error(
            `Value for ${fieldRule.rule} rule for [${key}] field is not defined. The field will be always invalid.`
          );
          this.setFieldInvalid(key, fieldRule);
          break;
        }
        if (typeof ruleValue !== "number") {
          console.error(
            `Value for ${fieldRule.rule} rule for [${key}] should be a number. The field will be always invalid.`
          );
          this.setFieldInvalid(key, fieldRule);
          break;
        }
        if (isInvalidOrEmptyString(elemValue)) {
          break;
        }
        if (isLengthMoreThanMax(elemValue, ruleValue)) {
          this.setFieldInvalid(key, fieldRule);
        }
        break;
      }
      case Rules.MinLength: {
        if (ruleValue === void 0) {
          console.error(
            `Value for ${fieldRule.rule} rule for [${key}] field is not defined. The field will be always invalid.`
          );
          this.setFieldInvalid(key, fieldRule);
          break;
        }
        if (typeof ruleValue !== "number") {
          console.error(
            `Value for ${fieldRule.rule} rule for [${key}] should be a number. The field will be always invalid.`
          );
          this.setFieldInvalid(key, fieldRule);
          break;
        }
        if (isInvalidOrEmptyString(elemValue)) {
          break;
        }
        if (isLengthLessThanMin(elemValue, ruleValue)) {
          this.setFieldInvalid(key, fieldRule);
        }
        break;
      }
      case Rules.Password: {
        if (isInvalidOrEmptyString(elemValue)) {
          break;
        }
        if (!isPassword(elemValue)) {
          this.setFieldInvalid(key, fieldRule);
        }
        break;
      }
      case Rules.StrongPassword: {
        if (isInvalidOrEmptyString(elemValue)) {
          break;
        }
        if (!isStrongPassword(elemValue)) {
          this.setFieldInvalid(key, fieldRule);
        }
        break;
      }
      case Rules.Number: {
        if (isInvalidOrEmptyString(elemValue)) {
          break;
        }
        if (!isNumber(elemValue)) {
          this.setFieldInvalid(key, fieldRule);
        }
        break;
      }
      case Rules.Integer: {
        if (isInvalidOrEmptyString(elemValue)) {
          break;
        }
        if (!isInteger(elemValue)) {
          this.setFieldInvalid(key, fieldRule);
        }
        break;
      }
      case Rules.MaxNumber: {
        if (ruleValue === void 0) {
          console.error(
            `Value for ${fieldRule.rule} rule for [${key}] field is not defined. The field will be always invalid.`
          );
          this.setFieldInvalid(key, fieldRule);
          break;
        }
        if (typeof ruleValue !== "number") {
          console.error(
            `Value for ${fieldRule.rule} rule for [${key}] field should be a number. The field will be always invalid.`
          );
          this.setFieldInvalid(key, fieldRule);
          break;
        }
        if (isInvalidOrEmptyString(elemValue)) {
          break;
        }
        const num = +elemValue;
        if (Number.isNaN(num) || isNumberMoreThanMax(num, ruleValue)) {
          this.setFieldInvalid(key, fieldRule);
        }
        break;
      }
      case Rules.MinNumber: {
        if (ruleValue === void 0) {
          console.error(
            `Value for ${fieldRule.rule} rule for [${key}] field is not defined. The field will be always invalid.`
          );
          this.setFieldInvalid(key, fieldRule);
          break;
        }
        if (typeof ruleValue !== "number") {
          console.error(
            `Value for ${fieldRule.rule} rule for [${key}] field should be a number. The field will be always invalid.`
          );
          this.setFieldInvalid(key, fieldRule);
          break;
        }
        if (isInvalidOrEmptyString(elemValue)) {
          break;
        }
        const num = +elemValue;
        if (Number.isNaN(num) || isNumberLessThanMin(num, ruleValue)) {
          this.setFieldInvalid(key, fieldRule);
        }
        break;
      }
      case Rules.CustomRegexp: {
        if (ruleValue === void 0) {
          console.error(
            `Value for ${fieldRule.rule} rule for [${key}] field is not defined. This field will be always invalid.`
          );
          this.setFieldInvalid(key, fieldRule);
          return;
        }
        let regexp;
        try {
          regexp = new RegExp(ruleValue);
        } catch (e) {
          console.error(
            `Value for ${fieldRule.rule} rule for [${key}] should be a valid regexp. This field will be always invalid.`
          );
          this.setFieldInvalid(key, fieldRule);
          break;
        }
        const str = String(elemValue);
        if (str !== "" && !regexp.test(str)) {
          this.setFieldInvalid(key, fieldRule);
        }
        break;
      }
      case Rules.MinFilesCount: {
        if (ruleValue === void 0) {
          console.error(
            `Value for ${fieldRule.rule} rule for [${key}] field is not defined. This field will be always invalid.`
          );
          this.setFieldInvalid(key, fieldRule);
          break;
        }
        if (typeof ruleValue !== "number") {
          console.error(
            `Value for ${fieldRule.rule} rule for [${key}] field should be a number. The field will be always invalid.`
          );
          this.setFieldInvalid(key, fieldRule);
          break;
        }
        if (Number.isFinite(elemValue == null ? void 0 : elemValue.length) && elemValue.length < ruleValue) {
          this.setFieldInvalid(key, fieldRule);
          break;
        }
        break;
      }
      case Rules.MaxFilesCount: {
        if (ruleValue === void 0) {
          console.error(
            `Value for ${fieldRule.rule} rule for [${key}] field is not defined. This field will be always invalid.`
          );
          this.setFieldInvalid(key, fieldRule);
          break;
        }
        if (typeof ruleValue !== "number") {
          console.error(
            `Value for ${fieldRule.rule} rule for [${key}] field should be a number. The field will be always invalid.`
          );
          this.setFieldInvalid(key, fieldRule);
          break;
        }
        if (Number.isFinite(elemValue == null ? void 0 : elemValue.length) && elemValue.length > ruleValue) {
          this.setFieldInvalid(key, fieldRule);
          break;
        }
        break;
      }
      case Rules.Files: {
        if (ruleValue === void 0) {
          console.error(
            `Value for ${fieldRule.rule} rule for [${key}] field is not defined. This field will be always invalid.`
          );
          this.setFieldInvalid(key, fieldRule);
          return;
        }
        if (typeof ruleValue !== "object") {
          console.error(
            `Value for ${fieldRule.rule} rule for [${key}] field should be an object. This field will be always invalid.`
          );
          this.setFieldInvalid(key, fieldRule);
          return;
        }
        const filesConfig = ruleValue.files;
        if (typeof filesConfig !== "object") {
          console.error(
            `Value for ${fieldRule.rule} rule for [${key}] field should be an object with files array. This field will be always invalid.`
          );
          this.setFieldInvalid(key, fieldRule);
          return;
        }
        const isFilePropsInvalid = (file, fileConfig) => {
          const minSizeInvalid = Number.isFinite(fileConfig.minSize) && file.size < fileConfig.minSize;
          const maxSizeInvalid = Number.isFinite(fileConfig.maxSize) && file.size > fileConfig.maxSize;
          const nameInvalid = Array.isArray(fileConfig.names) && !fileConfig.names.includes(file.name);
          const extInvalid = Array.isArray(fileConfig.extensions) && !fileConfig.extensions.includes(
            file.name.split(".")[file.name.split(".").length - 1]
          );
          const typeInvalid = Array.isArray(fileConfig.types) && !fileConfig.types.includes(file.type);
          return minSizeInvalid || maxSizeInvalid || nameInvalid || extInvalid || typeInvalid;
        };
        if (typeof elemValue === "object" && elemValue !== null) {
          for (let fileIdx = 0, len = elemValue.length; fileIdx < len; ++fileIdx) {
            const file = elemValue.item(fileIdx);
            if (!file) {
              this.setFieldInvalid(key, fieldRule);
              break;
            }
            const filesInvalid = isFilePropsInvalid(file, filesConfig);
            if (filesInvalid) {
              this.setFieldInvalid(key, fieldRule);
              break;
            }
          }
        }
        break;
      }
      default: {
        if (typeof fieldRule.validator !== "function") {
          console.error(
            `Validator for custom rule for [${key}] field should be a function. This field will be always invalid.`
          );
          this.setFieldInvalid(key, fieldRule);
          return;
        }
        const result = fieldRule.validator(
          elemValue,
          this.getCompatibleFields()
        );
        if (typeof result !== "boolean" && typeof result !== "function") {
          console.error(
            `Validator return value for [${key}] field should be boolean or function. It will be cast to boolean.`
          );
        }
        if (typeof result === "function") {
          if (afterInputChanged) {
            this.fields[key].asyncCheckPending = true;
          } else {
            this.fields[key].asyncCheckPending = false;
            const promise = result();
            if (!isPromise(promise)) {
              console.error(
                `Validator function for custom rule for [${key}] field should return a Promise. This field will be always invalid.`
              );
              this.setFieldInvalid(key, fieldRule);
              return;
            }
            return promise.then((resp) => {
              if (!resp) {
                this.setFieldInvalid(key, fieldRule);
              }
            }).catch(() => {
              this.setFieldInvalid(key, fieldRule);
            });
          }
        }
        if (!result) {
          this.setFieldInvalid(key, fieldRule);
        }
      }
    }
  }
  isFormValid() {
    let isValid = true;
    for (let i = 0, len = Object.values(this.fields).length; i < len; ++i) {
      const item = Object.values(this.fields)[i];
      if (item.isValid === void 0) {
        isValid = void 0;
        break;
      }
      if (item.isValid === false) {
        isValid = false;
        break;
      }
    }
    for (let i = 0, len = Object.values(this.groupFields).length; i < len; ++i) {
      const item = Object.values(this.groupFields)[i];
      if (item.isValid === void 0) {
        isValid = void 0;
        break;
      }
      if (item.isValid === false) {
        isValid = false;
        break;
      }
    }
    return isValid;
  }
  validateField(key, afterInputChanged = false) {
    var _a;
    const field = this.fields[key];
    field.isValid = true;
    const promises = [];
    [...field.rules].reverse().forEach((rule) => {
      const res = this.validateFieldRule(
        key,
        field.elem,
        rule,
        afterInputChanged
      );
      if (isPromise(res)) {
        promises.push(res);
      }
    });
    if (field.isValid) {
      this.setFieldValid(key, (_a = field.config) == null ? void 0 : _a.successMessage);
    }
    return Promise.allSettled(promises).finally(() => {
      var _a2;
      if (afterInputChanged) {
        (_a2 = this.onValidateCallback) == null ? void 0 : _a2.call(this, {
          isValid: this.isFormValid(),
          isSubmitted: this.isSubmitted,
          fields: this.getCompatibleFields(),
          groups: { ...this.groupFields }
        });
      }
    });
  }
  revalidateField(fieldSelector) {
    if (typeof fieldSelector !== "string" && !isElement(fieldSelector)) {
      throw Error(
        `Field selector is not valid. Please specify a string selector or a valid DOM element.`
      );
    }
    const key = this.getKeyByFieldSelector(fieldSelector);
    if (!key || !this.fields[key]) {
      console.error(`Field not found. Check the field selector.`);
      return Promise.reject();
    }
    return new Promise((resolve) => {
      this.validateField(key, true).finally(() => {
        this.clearFieldStyle(key);
        this.clearFieldLabel(key);
        this.renderFieldError(key, true);
        resolve(!!this.fields[key].isValid);
      });
    });
  }
  revalidateGroup(groupSelector) {
    if (typeof groupSelector !== "string" && !isElement(groupSelector)) {
      throw Error(
        `Group selector is not valid. Please specify a string selector or a valid DOM element.`
      );
    }
    const key = this.getKeyByFieldSelector(groupSelector);
    if (!key || !this.groupFields[key]) {
      console.error(`Group not found. Check the group selector.`);
      return Promise.reject();
    }
    return new Promise((resolve) => {
      this.validateGroup(key).finally(() => {
        this.clearFieldLabel(key);
        this.renderGroupError(key, true);
        resolve(!!this.groupFields[key].isValid);
      });
    });
  }
  validateGroup(key, afterInputChanged = false) {
    const group = this.groupFields[key];
    const promises = [];
    [...group.rules].reverse().forEach((rule) => {
      const res = this.validateGroupRule(key, group.elems, rule);
      if (isPromise(res)) {
        promises.push(res);
      }
    });
    return Promise.allSettled(promises).finally(() => {
      var _a;
      if (afterInputChanged) {
        (_a = this.onValidateCallback) == null ? void 0 : _a.call(this, {
          isValid: this.isFormValid(),
          isSubmitted: this.isSubmitted,
          fields: this.getCompatibleFields(),
          groups: { ...this.groupFields }
        });
      }
    });
  }
  focusInvalidField() {
    for (const key in this.fields) {
      const field = this.fields[key];
      if (!field.isValid) {
        setTimeout(() => field.elem.focus(), 0);
        break;
      }
    }
  }
  afterSubmitValidation(forceRevalidation = false) {
    this.renderErrors(forceRevalidation);
    if (this.globalConfig.focusInvalidField) {
      this.focusInvalidField();
    }
  }
  validate(forceRevalidation = false) {
    return new Promise((resolve) => {
      const promises = [];
      Object.keys(this.fields).forEach((key) => {
        const promise = this.validateField(key);
        if (isPromise(promise)) {
          promises.push(promise);
        }
      });
      Object.keys(this.groupFields).forEach((key) => {
        const promise = this.validateGroup(key);
        if (isPromise(promise)) {
          promises.push(promise);
        }
      });
      Promise.allSettled(promises).then(() => {
        var _a;
        this.afterSubmitValidation(forceRevalidation);
        (_a = this.onValidateCallback) == null ? void 0 : _a.call(this, {
          isValid: this.isFormValid(),
          isSubmitted: this.isSubmitted,
          fields: this.getCompatibleFields(),
          groups: { ...this.groupFields }
        });
        resolve(!!promises.length);
      });
    });
  }
  revalidate() {
    return new Promise((resolve) => {
      this.validateHandler(void 0, true).finally(() => {
        if (this.globalConfig.focusInvalidField) {
          this.focusInvalidField();
        }
        resolve(this.isValid);
      });
    });
  }
  validateHandler(ev, forceRevalidation = false) {
    if (this.globalConfig.lockForm) {
      this.lockForm();
    }
    return this.validate(forceRevalidation).finally(() => {
      var _a, _b, _c;
      if (this.globalConfig.lockForm) {
        this.unlockForm();
      }
      if (this.isValid) {
        (_a = this.onSuccessCallback) == null ? void 0 : _a.call(this, ev);
        if (this.globalConfig.submitFormAutomatically) {
          (_b = ev == null ? void 0 : ev.currentTarget) == null ? void 0 : _b.submit();
        }
      } else {
        (_c = this.onFailCallback) == null ? void 0 : _c.call(this, this.getCompatibleFields(), this.groupFields);
      }
    });
  }
  setForm(form) {
    this.form = form;
    this.form.setAttribute("novalidate", "novalidate");
    this.removeListener("submit", this.form, this.formSubmitHandler);
    this.addListener("submit", this.form, this.formSubmitHandler);
  }
  addListener(type, elem, handler) {
    elem.addEventListener(type, handler);
    this.eventListeners.push({ type, elem, func: handler });
  }
  removeListener(type, elem, handler) {
    elem.removeEventListener(type, handler);
    this.eventListeners = this.eventListeners.filter(
      (item) => item.type !== type || item.elem !== elem
    );
  }
  addField(fieldSelector, rules, config) {
    if (typeof fieldSelector !== "string" && !isElement(fieldSelector)) {
      throw Error(
        `Field selector is not valid. Please specify a string selector or a valid DOM element.`
      );
    }
    let elem;
    if (typeof fieldSelector === "string") {
      elem = this.form.querySelector(fieldSelector);
    } else {
      elem = fieldSelector;
    }
    if (!elem) {
      throw Error(
        `Field doesn't exist in the DOM! Please check the field selector.`
      );
    }
    if (!Array.isArray(rules) || !rules.length) {
      throw Error(
        `Rules argument should be an array and should contain at least 1 element.`
      );
    }
    rules.forEach((item) => {
      if (!("rule" in item || "validator" in item || "plugin" in item)) {
        throw Error(
          `Rules argument must contain at least one rule or validator property.`
        );
      }
      if (!item.validator && !item.plugin && (!item.rule || !Object.values(Rules).includes(item.rule))) {
        throw Error(
          `Rule should be one of these types: ${Object.values(Rules).join(
            ", "
          )}. Provided value: ${item.rule}`
        );
      }
    });
    const key = this.setKeyByFieldSelector(fieldSelector);
    this.fields[key] = {
      elem,
      rules,
      isValid: void 0,
      touched: false,
      config
    };
    this.setListeners(elem);
    if (this.isSubmitted || this.globalConfig.validateBeforeSubmitting) {
      this.validateField(key);
    }
    return this;
  }
  removeField(fieldSelector) {
    if (typeof fieldSelector !== "string" && !isElement(fieldSelector)) {
      throw Error(
        `Field selector is not valid. Please specify a string selector or a valid DOM element.`
      );
    }
    const key = this.getKeyByFieldSelector(fieldSelector);
    if (!key || !this.fields[key]) {
      console.error(`Field not found. Check the field selector.`);
      return this;
    }
    const type = this.getListenerType(this.fields[key].elem.type);
    this.removeListener(type, this.fields[key].elem, this.handlerChange);
    this.clearErrors();
    delete this.fields[key];
    return this;
  }
  removeGroup(group) {
    if (typeof group !== "string") {
      throw Error(
        `Group selector is not valid. Please specify a string selector.`
      );
    }
    const key = this.getKeyByFieldSelector(group);
    if (!key || !this.groupFields[key]) {
      console.error(`Group not found. Check the group selector.`);
      return this;
    }
    this.groupFields[key].elems.forEach((elem) => {
      const type = this.getListenerType(elem.type);
      this.removeListener(type, elem, this.handlerChange);
    });
    this.clearErrors();
    delete this.groupFields[key];
    return this;
  }
  addRequiredGroup(groupField, errorMessage, config, successMessage) {
    if (typeof groupField !== "string" && !isElement(groupField)) {
      throw Error(
        `Group selector is not valid. Please specify a string selector or a valid DOM element.`
      );
    }
    let elem;
    if (typeof groupField === "string") {
      elem = this.form.querySelector(groupField);
    } else {
      elem = groupField;
    }
    if (!elem) {
      throw Error(`Group selector not found! Please check the group selector.`);
    }
    const inputs = elem.querySelectorAll("input");
    const childrenInputs = Array.from(inputs).filter((input) => {
      const parent = getClosestParent(this.groupFields, getNodeParents(input));
      if (!parent) {
        return true;
      }
      return parent[1].elems.find((elem2) => elem2 !== input);
    });
    const key = this.setKeyByFieldSelector(groupField);
    this.groupFields[key] = {
      rules: [
        {
          rule: GroupRules.Required,
          errorMessage,
          successMessage
        }
      ],
      groupElem: elem,
      elems: childrenInputs,
      touched: false,
      isValid: void 0,
      config
    };
    inputs.forEach((input) => {
      this.setListeners(input);
    });
    return this;
  }
  getListenerType(type) {
    switch (type) {
      case "checkbox":
      case "select-one":
      case "file":
      case "radio": {
        return "change";
      }
      default: {
        return "input";
      }
    }
  }
  setListeners(elem) {
    const type = this.getListenerType(elem.type);
    this.removeListener(type, elem, this.handlerChange);
    this.addListener(type, elem, this.handlerChange);
  }
  clearFieldLabel(key) {
    var _a, _b;
    (_a = this.errorLabels[key]) == null ? void 0 : _a.remove();
    (_b = this.successLabels[key]) == null ? void 0 : _b.remove();
  }
  clearFieldStyle(key) {
    var _a, _b, _c, _d;
    const field = this.fields[key];
    const errorStyle = ((_a = field.config) == null ? void 0 : _a.errorFieldStyle) || this.globalConfig.errorFieldStyle;
    Object.keys(errorStyle).forEach((key2) => {
      field.elem.style[key2] = "";
    });
    const successStyle = ((_b = field.config) == null ? void 0 : _b.successFieldStyle) || this.globalConfig.successFieldStyle || {};
    Object.keys(successStyle).forEach((key2) => {
      field.elem.style[key2] = "";
    });
    field.elem.classList.remove(
      ...getClassList(
        ((_c = field.config) == null ? void 0 : _c.errorFieldCssClass) || this.globalConfig.errorFieldCssClass
      ),
      ...getClassList(
        ((_d = field.config) == null ? void 0 : _d.successFieldCssClass) || this.globalConfig.successFieldCssClass
      )
    );
  }
  clearErrors() {
    var _a, _b;
    Object.keys(this.errorLabels).forEach(
      (key) => this.errorLabels[key].remove()
    );
    Object.keys(this.successLabels).forEach(
      (key) => this.successLabels[key].remove()
    );
    for (const key in this.fields) {
      this.clearFieldStyle(key);
    }
    for (const key in this.groupFields) {
      const group = this.groupFields[key];
      const errorStyle = ((_a = group.config) == null ? void 0 : _a.errorFieldStyle) || this.globalConfig.errorFieldStyle;
      Object.keys(errorStyle).forEach((key2) => {
        group.elems.forEach((elem) => {
          var _a2;
          elem.style[key2] = "";
          elem.classList.remove(
            ...getClassList(
              ((_a2 = group.config) == null ? void 0 : _a2.errorFieldCssClass) || this.globalConfig.errorFieldCssClass
            )
          );
        });
      });
      const successStyle = ((_b = group.config) == null ? void 0 : _b.successFieldStyle) || this.globalConfig.successFieldStyle || {};
      Object.keys(successStyle).forEach((key2) => {
        group.elems.forEach((elem) => {
          var _a2;
          elem.style[key2] = "";
          elem.classList.remove(
            ...getClassList(
              ((_a2 = group.config) == null ? void 0 : _a2.successFieldCssClass) || this.globalConfig.successFieldCssClass
            )
          );
        });
      });
    }
    this.tooltips = [];
  }
  isTooltip() {
    return !!this.globalConfig.tooltip;
  }
  lockForm() {
    const elems = this.form.querySelectorAll(
      "input, textarea, button, select"
    );
    for (let i = 0, len = elems.length; i < len; ++i) {
      elems[i].setAttribute(
        "data-just-validate-fallback-disabled",
        elems[i].disabled ? "true" : "false"
      );
      elems[i].setAttribute("disabled", "disabled");
      elems[i].style.pointerEvents = "none";
      elems[i].style.webkitFilter = "grayscale(100%)";
      elems[i].style.filter = "grayscale(100%)";
    }
  }
  unlockForm() {
    const elems = this.form.querySelectorAll(
      "input, textarea, button, select"
    );
    for (let i = 0, len = elems.length; i < len; ++i) {
      if (elems[i].getAttribute("data-just-validate-fallback-disabled") !== "true") {
        elems[i].removeAttribute("disabled");
      }
      elems[i].style.pointerEvents = "";
      elems[i].style.webkitFilter = "";
      elems[i].style.filter = "";
    }
  }
  renderTooltip(elem, errorLabel, position) {
    var _a;
    const { top, left, width, height } = elem.getBoundingClientRect();
    const errorLabelRect = errorLabel.getBoundingClientRect();
    const pos = position || ((_a = this.globalConfig.tooltip) == null ? void 0 : _a.position);
    switch (pos) {
      case "left": {
        errorLabel.style.top = `${top + height / 2 - errorLabelRect.height / 2}px`;
        errorLabel.style.left = `${left - errorLabelRect.width - TOOLTIP_ARROW_HEIGHT}px`;
        break;
      }
      case "top": {
        errorLabel.style.top = `${top - errorLabelRect.height - TOOLTIP_ARROW_HEIGHT}px`;
        errorLabel.style.left = `${left + width / 2 - errorLabelRect.width / 2}px`;
        break;
      }
      case "right": {
        errorLabel.style.top = `${top + height / 2 - errorLabelRect.height / 2}px`;
        errorLabel.style.left = `${left + width + TOOLTIP_ARROW_HEIGHT}px`;
        break;
      }
      case "bottom": {
        errorLabel.style.top = `${top + height + TOOLTIP_ARROW_HEIGHT}px`;
        errorLabel.style.left = `${left + width / 2 - errorLabelRect.width / 2}px`;
        break;
      }
    }
    errorLabel.dataset.direction = pos;
    const refresh = () => {
      this.renderTooltip(elem, errorLabel, position);
    };
    return {
      refresh
    };
  }
  createErrorLabelElem(key, errorMessage, config) {
    const errorLabel = document.createElement("div");
    errorLabel.innerHTML = errorMessage;
    const customErrorLabelStyle = this.isTooltip() ? config == null ? void 0 : config.errorLabelStyle : (config == null ? void 0 : config.errorLabelStyle) || this.globalConfig.errorLabelStyle;
    Object.assign(errorLabel.style, customErrorLabelStyle);
    errorLabel.classList.add(
      ...getClassList(
        (config == null ? void 0 : config.errorLabelCssClass) || this.globalConfig.errorLabelCssClass
      ),
      "just-validate-error-label"
    );
    if (this.isTooltip()) {
      errorLabel.dataset.tooltip = "true";
    }
    if (this.globalConfig.testingMode) {
      errorLabel.dataset.testId = `error-label-${key}`;
    }
    this.errorLabels[key] = errorLabel;
    return errorLabel;
  }
  createSuccessLabelElem(key, successMessage, config) {
    if (successMessage === void 0) {
      return null;
    }
    const successLabel = document.createElement("div");
    successLabel.innerHTML = successMessage;
    const customSuccessLabelStyle = (config == null ? void 0 : config.successLabelStyle) || this.globalConfig.successLabelStyle;
    Object.assign(successLabel.style, customSuccessLabelStyle);
    successLabel.classList.add(
      ...getClassList(
        (config == null ? void 0 : config.successLabelCssClass) || this.globalConfig.successLabelCssClass
      ),
      "just-validate-success-label"
    );
    if (this.globalConfig.testingMode) {
      successLabel.dataset.testId = `success-label-${key}`;
    }
    this.successLabels[key] = successLabel;
    return successLabel;
  }
  renderErrorsContainer(label, errorsContainer) {
    const container = errorsContainer || this.globalConfig.errorsContainer;
    if (typeof container === "string") {
      const elem = this.form.querySelector(container);
      if (elem) {
        elem.appendChild(label);
        return true;
      } else {
        console.error(
          `Error container with ${container} selector not found. Errors will be rendered as usual`
        );
      }
    }
    if (container instanceof Element) {
      container.appendChild(label);
      return true;
    }
    if (container !== void 0) {
      console.error(
        `Error container not found. It should be a string or existing Element. Errors will be rendered as usual`
      );
    }
    return false;
  }
  renderGroupLabel(elem, label, errorsContainer, isSuccess) {
    if (!isSuccess) {
      const renderedInErrorsContainer = this.renderErrorsContainer(
        label,
        errorsContainer
      );
      if (renderedInErrorsContainer) {
        return;
      }
    }
    elem.appendChild(label);
  }
  renderFieldLabel(elem, label, errorsContainer, isSuccess) {
    var _a, _b, _c, _d, _e, _f, _g;
    if (!isSuccess) {
      const renderedInErrorsContainer = this.renderErrorsContainer(
        label,
        errorsContainer
      );
      if (renderedInErrorsContainer) {
        return;
      }
    }
    if (elem.type === "checkbox" || elem.type === "radio") {
      const labelElem = document.querySelector(
        `label[for="${elem.getAttribute("id")}"]`
      );
      if (((_b = (_a = elem.parentElement) == null ? void 0 : _a.tagName) == null ? void 0 : _b.toLowerCase()) === "label") {
        (_d = (_c = elem.parentElement) == null ? void 0 : _c.parentElement) == null ? void 0 : _d.appendChild(label);
      } else if (labelElem) {
        (_e = labelElem.parentElement) == null ? void 0 : _e.appendChild(label);
      } else {
        (_f = elem.parentElement) == null ? void 0 : _f.appendChild(label);
      }
    } else {
      (_g = elem.parentElement) == null ? void 0 : _g.appendChild(label);
    }
  }
  showLabels(fields, isError) {
    Object.keys(fields).forEach((fieldName, i) => {
      const error = fields[fieldName];
      const key = this.getKeyByFieldSelector(fieldName);
      if (!key || !this.fields[key]) {
        console.error(`Field not found. Check the field selector.`);
        return;
      }
      const field = this.fields[key];
      field.isValid = !isError;
      this.clearFieldStyle(key);
      this.clearFieldLabel(key);
      this.renderFieldError(key, false, error);
      if (i === 0 && this.globalConfig.focusInvalidField) {
        setTimeout(() => field.elem.focus(), 0);
      }
    });
  }
  showErrors(fields) {
    if (typeof fields !== "object") {
      throw Error(
        "[showErrors]: Errors should be an object with key: value format"
      );
    }
    this.showLabels(fields, true);
  }
  showSuccessLabels(fields) {
    if (typeof fields !== "object") {
      throw Error(
        "[showSuccessLabels]: Labels should be an object with key: value format"
      );
    }
    this.showLabels(fields, false);
  }
  renderFieldError(key, forced = false, message) {
    var _a, _b, _c, _d, _e, _f;
    const field = this.fields[key];
    if (field.isValid === false) {
      this.isValid = false;
    }
    if (field.isValid === void 0 || !forced && !this.isSubmitted && !field.touched && message === void 0) {
      return;
    }
    if (field.isValid) {
      if (!field.asyncCheckPending) {
        const successLabel = this.createSuccessLabelElem(
          key,
          message !== void 0 ? message : field.successMessage,
          field.config
        );
        if (successLabel) {
          this.renderFieldLabel(
            field.elem,
            successLabel,
            (_a = field.config) == null ? void 0 : _a.errorsContainer,
            true
          );
        }
        field.elem.classList.add(
          ...getClassList(
            ((_b = field.config) == null ? void 0 : _b.successFieldCssClass) || this.globalConfig.successFieldCssClass
          )
        );
      }
      return;
    }
    field.elem.classList.add(
      ...getClassList(
        ((_c = field.config) == null ? void 0 : _c.errorFieldCssClass) || this.globalConfig.errorFieldCssClass
      )
    );
    const errorLabel = this.createErrorLabelElem(
      key,
      message !== void 0 ? message : field.errorMessage,
      field.config
    );
    this.renderFieldLabel(
      field.elem,
      errorLabel,
      (_d = field.config) == null ? void 0 : _d.errorsContainer
    );
    if (this.isTooltip()) {
      this.tooltips.push(
        this.renderTooltip(
          field.elem,
          errorLabel,
          (_f = (_e = field.config) == null ? void 0 : _e.tooltip) == null ? void 0 : _f.position
        )
      );
    }
  }
  renderGroupError(key, force = true) {
    var _a, _b, _c, _d;
    const group = this.groupFields[key];
    if (group.isValid === false) {
      this.isValid = false;
    }
    if (group.isValid === void 0 || !force && !this.isSubmitted && !group.touched) {
      return;
    }
    if (group.isValid) {
      group.elems.forEach((elem) => {
        var _a2, _b2;
        Object.assign(
          elem.style,
          ((_a2 = group.config) == null ? void 0 : _a2.successFieldStyle) || this.globalConfig.successFieldStyle
        );
        elem.classList.add(
          ...getClassList(
            ((_b2 = group.config) == null ? void 0 : _b2.successFieldCssClass) || this.globalConfig.successFieldCssClass
          )
        );
      });
      const successLabel = this.createSuccessLabelElem(
        key,
        group.successMessage,
        group.config
      );
      if (successLabel) {
        this.renderGroupLabel(
          group.groupElem,
          successLabel,
          (_a = group.config) == null ? void 0 : _a.errorsContainer,
          true
        );
      }
      return;
    }
    this.isValid = false;
    group.elems.forEach((elem) => {
      var _a2, _b2;
      Object.assign(
        elem.style,
        ((_a2 = group.config) == null ? void 0 : _a2.errorFieldStyle) || this.globalConfig.errorFieldStyle
      );
      elem.classList.add(
        ...getClassList(
          ((_b2 = group.config) == null ? void 0 : _b2.errorFieldCssClass) || this.globalConfig.errorFieldCssClass
        )
      );
    });
    const errorLabel = this.createErrorLabelElem(
      key,
      group.errorMessage,
      group.config
    );
    this.renderGroupLabel(
      group.groupElem,
      errorLabel,
      (_b = group.config) == null ? void 0 : _b.errorsContainer
    );
    if (this.isTooltip()) {
      this.tooltips.push(
        this.renderTooltip(
          group.groupElem,
          errorLabel,
          (_d = (_c = group.config) == null ? void 0 : _c.tooltip) == null ? void 0 : _d.position
        )
      );
    }
  }
  renderErrors(forceRevalidation = false) {
    if (!this.isSubmitted && !forceRevalidation && !this.globalConfig.validateBeforeSubmitting) {
      return;
    }
    this.clearErrors();
    this.isValid = true;
    for (const key in this.groupFields) {
      this.renderGroupError(key);
    }
    for (const key in this.fields) {
      this.renderFieldError(key);
    }
  }
  destroy() {
    this.eventListeners.forEach((event) => {
      this.removeListener(event.type, event.elem, event.func);
    });
    Object.keys(this.customStyleTags).forEach((key) => {
      this.customStyleTags[key].remove();
    });
    this.clearErrors();
    if (this.globalConfig.lockForm) {
      this.unlockForm();
    }
  }
  refresh() {
    this.destroy();
    if (!this.form) {
      console.error("Cannot initialize the library! Form is not defined");
    } else {
      this.initialize(this.form, this.globalConfig);
      Object.keys(this.fields).forEach((key) => {
        const fieldSelector = this.getFieldSelectorByKey(key);
        if (fieldSelector) {
          this.addField(
            fieldSelector,
            [...this.fields[key].rules],
            this.fields[key].config
          );
        }
      });
    }
  }
  setCurrentLocale(locale) {
    if (typeof locale !== "string" && locale !== void 0) {
      console.error("Current locale should be a string");
      return;
    }
    this.currentLocale = locale;
    if (this.isSubmitted) {
      this.validate();
    }
  }
  onSuccess(callback) {
    this.onSuccessCallback = callback;
    return this;
  }
  onFail(callback) {
    this.onFailCallback = callback;
    return this;
  }
  onValidate(callback) {
    this.onValidateCallback = callback;
    return this;
  }
}



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var dayjs_locale_ja__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dayjs/locale/ja */ "./node_modules/dayjs/locale/ja.js");
/* harmony import */ var dayjs_locale_ja__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dayjs_locale_ja__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var just_validate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! just-validate */ "./node_modules/just-validate/dist/just-validate.es.js");


dayjs__WEBPACK_IMPORTED_MODULE_0___default().locale("ja")

console.log(dayjs__WEBPACK_IMPORTED_MODULE_0___default()().format('YYYY/MM/DD(ddd) HH:mm'));


const validator = new just_validate__WEBPACK_IMPORTED_MODULE_2__["default"]('#basic_form');

validator
.addField('#name', [
    {
      rule: 'required',
    },
    {
      rule: 'minLength',
      value: 3,
    },
])
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLGVBQWUsS0FBb0Qsb0JBQW9CLENBQStHLENBQUMsa0JBQWtCLGFBQWEsd0pBQXdKLEVBQUUsVUFBVSxJQUFJLFdBQVcsSUFBSSxZQUFZLElBQUksUUFBUSxJQUFJLFFBQVEsSUFBSSxpQ0FBaUMsSUFBSSxHQUFHLElBQUksR0FBRyxJQUFJLEdBQUcsSUFBSSxHQUFHLElBQUksR0FBRyxJQUFJLE9BQU8sSUFBSSxHQUFHLElBQUksR0FBRyxJQUFJLFVBQVUsdU5BQXVOLG9DQUFvQyw0Q0FBNEMsbUJBQW1CLGdCQUFnQix5REFBeUQsSUFBSSxrQkFBa0IsNkRBQTZELCtDQUErQyxtQkFBbUIsbUNBQW1DLDhHQUE4RyxtQ0FBbUMsZUFBZSx5Q0FBeUMsZUFBZSxPQUFPLHlDQUF5QyxrREFBa0QsZUFBZSxtQkFBbUIsYUFBYSxPQUFPLHFDQUFxQyxvQ0FBb0MscUJBQXFCLE1BQU0sZUFBZSx1QkFBdUIsc0JBQXNCLDRCQUE0QixtQkFBbUIsaUNBQWlDLEtBQUssYUFBYSxXQUFXLDRCQUE0QixpQkFBaUIseUJBQXlCLDhCQUE4QiwwQ0FBMEMsS0FBSyw4QkFBOEIsWUFBWSw4Q0FBOEMsR0FBRyxpQkFBaUIsY0FBYyxrRUFBa0UsWUFBWSxrQkFBa0IsMkJBQTJCLG9CQUFvQixxQkFBcUIsaUNBQWlDLDBCQUEwQix3Q0FBd0MsdUNBQXVDLGlCQUFpQixNQUFNLDZDQUE2QywwSEFBMEgsbUJBQW1CLGdCQUFnQixtQkFBbUIsY0FBYyxvTEFBb0wscUJBQXFCLFNBQVMsc0JBQXNCLGdDQUFnQyx3QkFBd0IsV0FBVyw0Q0FBNEMseUJBQXlCLDRCQUE0QiwwQkFBMEIsMEJBQTBCLHNCQUFzQixvQ0FBb0MsbUJBQW1CLHNDQUFzQyxzQkFBc0IseUJBQXlCLHlCQUF5QixrREFBa0Qsd0RBQXdELHNCQUFzQixpQkFBaUIsdUZBQXVGLDBEQUEwRCxVQUFVLGdDQUFnQyxnQ0FBZ0MseURBQXlELDBCQUEwQixvQ0FBb0MsK0JBQStCLCtCQUErQixvQ0FBb0MsNkJBQTZCLHFCQUFxQiwwQkFBMEIsc0JBQXNCLGlEQUFpRCx5S0FBeUssaUJBQWlCLDRCQUE0QiwwRUFBMEUsc0JBQXNCLHdCQUF3QixxQkFBcUIsOEJBQThCLG1CQUFtQixzQkFBc0IscUJBQXFCLGFBQWEsWUFBWSwyQkFBMkIsV0FBVyxnREFBZ0Qsc0NBQXNDLHNDQUFzQyxxQkFBcUIscUJBQXFCLFdBQVcsdURBQXVELG1CQUFtQiwwQkFBMEIsd0JBQXdCLHNCQUFzQiw0QkFBNEIsMkNBQTJDLG1JQUFtSSwwQ0FBMEMsZUFBZSwyQkFBMkIsc0JBQXNCLHFCQUFxQiw0QkFBNEIsa0NBQWtDLHNCQUFzQixVQUFVLHVDQUF1QyxrQ0FBa0MsbUJBQW1CLCtCQUErQix3Q0FBd0MseUJBQXlCLG9CQUFvQixnQ0FBZ0MsNEJBQTRCLDBDQUEwQyw2Q0FBNkMsMEJBQTBCLHlCQUF5Qiw2QkFBNkIsb0JBQW9CLHFCQUFxQix5QkFBeUIseUJBQXlCLHlCQUF5Qiw2QkFBNkIsNEJBQTRCLGdDQUFnQyxrQ0FBa0MsaUJBQWlCLFlBQVksdUJBQXVCLEdBQUcsd0JBQXdCLHNEQUFzRCx3QkFBd0Isd0ZBQXdGLGlCQUFpQixVQUFVLGdCQUFnQixNQUFNLGFBQWEsTUFBTSxlQUFlLE1BQU0sc0JBQXNCLE1BQU0scUJBQXFCLE1BQU0sYUFBYSxNQUFNLGFBQWEsTUFBTSxhQUFhLE1BQU0sWUFBWSxrQkFBa0IsMEJBQTBCLHdCQUF3QixzQkFBc0Isa0JBQWtCLHdCQUF3QixxQkFBcUIsK0JBQStCLHFCQUFxQixvQkFBb0IseUJBQXlCLHFCQUFxQixnQ0FBZ0MscUJBQXFCLDhDQUE4QywwQkFBMEIsNkJBQTZCLHVCQUF1Qiw2QkFBNkIsR0FBRyxpQkFBaUIscUhBQXFILG9CQUFvQiw2QkFBNkIsMEJBQTBCLGtDQUFrQywyQ0FBMkMsZ0JBQWdCLHdCQUF3QixHQUFHOzs7Ozs7Ozs7O0FDQXIvTixlQUFlLEtBQW9ELGtCQUFrQixtQkFBTyxDQUFDLGdEQUFPLEdBQUcsQ0FBMEksQ0FBQyxtQkFBbUIsYUFBYSxjQUFjLCtDQUErQyxXQUFXLGNBQWMsMlJBQTJSLGFBQWEsVUFBVSwwTEFBMEwsc0JBQXNCLHNCQUFzQixlQUFlLHFIQUFxSCxxQ0FBcUM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0F6aUM7QUFDQSw4RUFBOEUsNkRBQTZEO0FBQzNJO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDLHdCQUF3Qiw2QkFBNkIsSUFBSSxRQUFRLElBQUksUUFBUSxJQUFJLFFBQVEsSUFBSSxnQ0FBZ0MsR0FBRztBQUN2SztBQUNBLGtEQUFrRCxHQUFHO0FBQ3JELGdHQUFnRyxHQUFHO0FBQ25HO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLGFBQWE7QUFDZDtBQUNBO0FBQ0E7QUFDQSxDQUFDLGtCQUFrQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMseUJBQXlCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnREFBZ0QsU0FBUztBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFFQUFxRSxlQUFlLGdCQUFnQixtQkFBbUIsV0FBVyxtQkFBbUIsV0FBVyxrQkFBa0IsMkJBQTJCLHFEQUFxRCxXQUFXLFFBQVEsU0FBUyxrQ0FBa0MsbUNBQW1DLGdDQUFnQyxrQkFBa0IsVUFBVSxjQUFjLFlBQVkseUJBQXlCLHFCQUFxQixtRUFBbUUsMkJBQTJCLDBFQUEwRSxXQUFXLFlBQVksVUFBVSxvQkFBb0Isd0JBQXdCLG9FQUFvRSwwQkFBMEIsMkVBQTJFLFdBQVcsWUFBWSxVQUFVLG9CQUFvQix5QkFBeUIscUVBQXFFLDBCQUEwQiw0RUFBNEUsV0FBVyxZQUFZLHFCQUFxQixTQUFTLG9CQUFvQjtBQUN2c0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DO0FBQ3BDLHlDQUF5QztBQUN6QyxvQ0FBb0M7QUFDcEM7QUFDQTtBQUNBO0FBQ0EseUNBQXlDO0FBQ3pDLDJDQUEyQztBQUMzQztBQUNBO0FBQ0E7QUFDQSw2Q0FBNkM7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0IsT0FBTztBQUNQO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixNQUFNO0FBQzdCO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsZ0JBQWdCLFlBQVksSUFBSTtBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsZ0JBQWdCLFlBQVksSUFBSTtBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsZ0JBQWdCLFlBQVksSUFBSTtBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsZ0JBQWdCLFlBQVksSUFBSTtBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsZ0JBQWdCLFlBQVksSUFBSTtBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsZ0JBQWdCLFlBQVksSUFBSTtBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixnQkFBZ0IsWUFBWSxJQUFJO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixnQkFBZ0IsWUFBWSxJQUFJO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLGdCQUFnQixZQUFZLElBQUk7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQSx5QkFBeUIsZ0JBQWdCLFlBQVksSUFBSTtBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixnQkFBZ0IsWUFBWSxJQUFJO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixnQkFBZ0IsWUFBWSxJQUFJO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLGdCQUFnQixZQUFZLElBQUk7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLGdCQUFnQixZQUFZLElBQUk7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsZ0JBQWdCLFlBQVksSUFBSTtBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsZ0JBQWdCLFlBQVksSUFBSTtBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixnQkFBZ0IsWUFBWSxJQUFJO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdEQUF3RCxlQUFlO0FBQ3ZFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsSUFBSTtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyxJQUFJO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyREFBMkQsSUFBSTtBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkRBQTZELFNBQVM7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrRUFBa0UsU0FBUztBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0I7QUFDcEIsU0FBUztBQUNUO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CO0FBQ3BCLFNBQVM7QUFDVDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQjtBQUNwQixTQUFTO0FBQ1Q7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQiwyQkFBMkI7QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdEQUFnRDtBQUNoRDtBQUNBLFlBQVksb0JBQW9CLFVBQVU7QUFDMUM7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QyxTQUFTO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0MsU0FBUztBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksMkJBQTJCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLDZDQUE2QztBQUMvRSxtQ0FBbUMsbURBQW1EO0FBQ3RGO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyxtREFBbUQ7QUFDckYsbUNBQW1DLDRDQUE0QztBQUMvRTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0MsNkNBQTZDO0FBQy9FLG1DQUFtQyxvQ0FBb0M7QUFDdkU7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLG9DQUFvQztBQUN0RSxtQ0FBbUMsNENBQTRDO0FBQy9FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBaUQsSUFBSTtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRCxJQUFJO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQSxrQ0FBa0MsV0FBVztBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0Isd0JBQXdCO0FBQzlDO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU1FOzs7Ozs7O1VDampERjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOMEI7QUFDRDtBQUN6QixtREFBWTs7QUFFWixZQUFZLDRDQUFLOztBQUV3QjtBQUN6QyxzQkFBc0IscURBQVk7O0FBRWxDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaG9tZXBhZ2UvLi9ub2RlX21vZHVsZXMvZGF5anMvZGF5anMubWluLmpzIiwid2VicGFjazovL2hvbWVwYWdlLy4vbm9kZV9tb2R1bGVzL2RheWpzL2xvY2FsZS9qYS5qcyIsIndlYnBhY2s6Ly9ob21lcGFnZS8uL25vZGVfbW9kdWxlcy9qdXN0LXZhbGlkYXRlL2Rpc3QvanVzdC12YWxpZGF0ZS5lcy5qcyIsIndlYnBhY2s6Ly9ob21lcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9ob21lcGFnZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9ob21lcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vaG9tZXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9ob21lcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2hvbWVwYWdlLy4vc3JjL2FwcC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIhZnVuY3Rpb24odCxlKXtcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cyYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIG1vZHVsZT9tb2R1bGUuZXhwb3J0cz1lKCk6XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShlKToodD1cInVuZGVmaW5lZFwiIT10eXBlb2YgZ2xvYmFsVGhpcz9nbG9iYWxUaGlzOnR8fHNlbGYpLmRheWpzPWUoKX0odGhpcywoZnVuY3Rpb24oKXtcInVzZSBzdHJpY3RcIjt2YXIgdD0xZTMsZT02ZTQsbj0zNmU1LHI9XCJtaWxsaXNlY29uZFwiLGk9XCJzZWNvbmRcIixzPVwibWludXRlXCIsdT1cImhvdXJcIixhPVwiZGF5XCIsbz1cIndlZWtcIixjPVwibW9udGhcIixmPVwicXVhcnRlclwiLGg9XCJ5ZWFyXCIsZD1cImRhdGVcIixsPVwiSW52YWxpZCBEYXRlXCIsJD0vXihcXGR7NH0pWy0vXT8oXFxkezEsMn0pP1stL10/KFxcZHswLDJ9KVtUdFxcc10qKFxcZHsxLDJ9KT86PyhcXGR7MSwyfSk/Oj8oXFxkezEsMn0pP1suOl0/KFxcZCspPyQvLHk9L1xcWyhbXlxcXV0rKV18WXsxLDR9fE17MSw0fXxEezEsMn18ZHsxLDR9fEh7MSwyfXxoezEsMn18YXxBfG17MSwyfXxzezEsMn18WnsxLDJ9fFNTUy9nLE09e25hbWU6XCJlblwiLHdlZWtkYXlzOlwiU3VuZGF5X01vbmRheV9UdWVzZGF5X1dlZG5lc2RheV9UaHVyc2RheV9GcmlkYXlfU2F0dXJkYXlcIi5zcGxpdChcIl9cIiksbW9udGhzOlwiSmFudWFyeV9GZWJydWFyeV9NYXJjaF9BcHJpbF9NYXlfSnVuZV9KdWx5X0F1Z3VzdF9TZXB0ZW1iZXJfT2N0b2Jlcl9Ob3ZlbWJlcl9EZWNlbWJlclwiLnNwbGl0KFwiX1wiKSxvcmRpbmFsOmZ1bmN0aW9uKHQpe3ZhciBlPVtcInRoXCIsXCJzdFwiLFwibmRcIixcInJkXCJdLG49dCUxMDA7cmV0dXJuXCJbXCIrdCsoZVsobi0yMCklMTBdfHxlW25dfHxlWzBdKStcIl1cIn19LG09ZnVuY3Rpb24odCxlLG4pe3ZhciByPVN0cmluZyh0KTtyZXR1cm4hcnx8ci5sZW5ndGg+PWU/dDpcIlwiK0FycmF5KGUrMS1yLmxlbmd0aCkuam9pbihuKSt0fSx2PXtzOm0sejpmdW5jdGlvbih0KXt2YXIgZT0tdC51dGNPZmZzZXQoKSxuPU1hdGguYWJzKGUpLHI9TWF0aC5mbG9vcihuLzYwKSxpPW4lNjA7cmV0dXJuKGU8PTA/XCIrXCI6XCItXCIpK20ociwyLFwiMFwiKStcIjpcIittKGksMixcIjBcIil9LG06ZnVuY3Rpb24gdChlLG4pe2lmKGUuZGF0ZSgpPG4uZGF0ZSgpKXJldHVybi10KG4sZSk7dmFyIHI9MTIqKG4ueWVhcigpLWUueWVhcigpKSsobi5tb250aCgpLWUubW9udGgoKSksaT1lLmNsb25lKCkuYWRkKHIsYykscz1uLWk8MCx1PWUuY2xvbmUoKS5hZGQocisocz8tMToxKSxjKTtyZXR1cm4rKC0ocisobi1pKS8ocz9pLXU6dS1pKSl8fDApfSxhOmZ1bmN0aW9uKHQpe3JldHVybiB0PDA/TWF0aC5jZWlsKHQpfHwwOk1hdGguZmxvb3IodCl9LHA6ZnVuY3Rpb24odCl7cmV0dXJue006Yyx5OmgsdzpvLGQ6YSxEOmQsaDp1LG06cyxzOmksbXM6cixROmZ9W3RdfHxTdHJpbmcodHx8XCJcIikudG9Mb3dlckNhc2UoKS5yZXBsYWNlKC9zJC8sXCJcIil9LHU6ZnVuY3Rpb24odCl7cmV0dXJuIHZvaWQgMD09PXR9fSxnPVwiZW5cIixEPXt9O0RbZ109TTt2YXIgcD1cIiRpc0RheWpzT2JqZWN0XCIsUz1mdW5jdGlvbih0KXtyZXR1cm4gdCBpbnN0YW5jZW9mIF98fCEoIXR8fCF0W3BdKX0sdz1mdW5jdGlvbiB0KGUsbixyKXt2YXIgaTtpZighZSlyZXR1cm4gZztpZihcInN0cmluZ1wiPT10eXBlb2YgZSl7dmFyIHM9ZS50b0xvd2VyQ2FzZSgpO0Rbc10mJihpPXMpLG4mJihEW3NdPW4saT1zKTt2YXIgdT1lLnNwbGl0KFwiLVwiKTtpZighaSYmdS5sZW5ndGg+MSlyZXR1cm4gdCh1WzBdKX1lbHNle3ZhciBhPWUubmFtZTtEW2FdPWUsaT1hfXJldHVybiFyJiZpJiYoZz1pKSxpfHwhciYmZ30sTz1mdW5jdGlvbih0LGUpe2lmKFModCkpcmV0dXJuIHQuY2xvbmUoKTt2YXIgbj1cIm9iamVjdFwiPT10eXBlb2YgZT9lOnt9O3JldHVybiBuLmRhdGU9dCxuLmFyZ3M9YXJndW1lbnRzLG5ldyBfKG4pfSxiPXY7Yi5sPXcsYi5pPVMsYi53PWZ1bmN0aW9uKHQsZSl7cmV0dXJuIE8odCx7bG9jYWxlOmUuJEwsdXRjOmUuJHUseDplLiR4LCRvZmZzZXQ6ZS4kb2Zmc2V0fSl9O3ZhciBfPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gTSh0KXt0aGlzLiRMPXcodC5sb2NhbGUsbnVsbCwhMCksdGhpcy5wYXJzZSh0KSx0aGlzLiR4PXRoaXMuJHh8fHQueHx8e30sdGhpc1twXT0hMH12YXIgbT1NLnByb3RvdHlwZTtyZXR1cm4gbS5wYXJzZT1mdW5jdGlvbih0KXt0aGlzLiRkPWZ1bmN0aW9uKHQpe3ZhciBlPXQuZGF0ZSxuPXQudXRjO2lmKG51bGw9PT1lKXJldHVybiBuZXcgRGF0ZShOYU4pO2lmKGIudShlKSlyZXR1cm4gbmV3IERhdGU7aWYoZSBpbnN0YW5jZW9mIERhdGUpcmV0dXJuIG5ldyBEYXRlKGUpO2lmKFwic3RyaW5nXCI9PXR5cGVvZiBlJiYhL1okL2kudGVzdChlKSl7dmFyIHI9ZS5tYXRjaCgkKTtpZihyKXt2YXIgaT1yWzJdLTF8fDAscz0ocls3XXx8XCIwXCIpLnN1YnN0cmluZygwLDMpO3JldHVybiBuP25ldyBEYXRlKERhdGUuVVRDKHJbMV0saSxyWzNdfHwxLHJbNF18fDAscls1XXx8MCxyWzZdfHwwLHMpKTpuZXcgRGF0ZShyWzFdLGksclszXXx8MSxyWzRdfHwwLHJbNV18fDAscls2XXx8MCxzKX19cmV0dXJuIG5ldyBEYXRlKGUpfSh0KSx0aGlzLmluaXQoKX0sbS5pbml0PWZ1bmN0aW9uKCl7dmFyIHQ9dGhpcy4kZDt0aGlzLiR5PXQuZ2V0RnVsbFllYXIoKSx0aGlzLiRNPXQuZ2V0TW9udGgoKSx0aGlzLiREPXQuZ2V0RGF0ZSgpLHRoaXMuJFc9dC5nZXREYXkoKSx0aGlzLiRIPXQuZ2V0SG91cnMoKSx0aGlzLiRtPXQuZ2V0TWludXRlcygpLHRoaXMuJHM9dC5nZXRTZWNvbmRzKCksdGhpcy4kbXM9dC5nZXRNaWxsaXNlY29uZHMoKX0sbS4kdXRpbHM9ZnVuY3Rpb24oKXtyZXR1cm4gYn0sbS5pc1ZhbGlkPWZ1bmN0aW9uKCl7cmV0dXJuISh0aGlzLiRkLnRvU3RyaW5nKCk9PT1sKX0sbS5pc1NhbWU9ZnVuY3Rpb24odCxlKXt2YXIgbj1PKHQpO3JldHVybiB0aGlzLnN0YXJ0T2YoZSk8PW4mJm48PXRoaXMuZW5kT2YoZSl9LG0uaXNBZnRlcj1mdW5jdGlvbih0LGUpe3JldHVybiBPKHQpPHRoaXMuc3RhcnRPZihlKX0sbS5pc0JlZm9yZT1mdW5jdGlvbih0LGUpe3JldHVybiB0aGlzLmVuZE9mKGUpPE8odCl9LG0uJGc9ZnVuY3Rpb24odCxlLG4pe3JldHVybiBiLnUodCk/dGhpc1tlXTp0aGlzLnNldChuLHQpfSxtLnVuaXg9ZnVuY3Rpb24oKXtyZXR1cm4gTWF0aC5mbG9vcih0aGlzLnZhbHVlT2YoKS8xZTMpfSxtLnZhbHVlT2Y9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy4kZC5nZXRUaW1lKCl9LG0uc3RhcnRPZj1mdW5jdGlvbih0LGUpe3ZhciBuPXRoaXMscj0hIWIudShlKXx8ZSxmPWIucCh0KSxsPWZ1bmN0aW9uKHQsZSl7dmFyIGk9Yi53KG4uJHU/RGF0ZS5VVEMobi4keSxlLHQpOm5ldyBEYXRlKG4uJHksZSx0KSxuKTtyZXR1cm4gcj9pOmkuZW5kT2YoYSl9LCQ9ZnVuY3Rpb24odCxlKXtyZXR1cm4gYi53KG4udG9EYXRlKClbdF0uYXBwbHkobi50b0RhdGUoXCJzXCIpLChyP1swLDAsMCwwXTpbMjMsNTksNTksOTk5XSkuc2xpY2UoZSkpLG4pfSx5PXRoaXMuJFcsTT10aGlzLiRNLG09dGhpcy4kRCx2PVwic2V0XCIrKHRoaXMuJHU/XCJVVENcIjpcIlwiKTtzd2l0Y2goZil7Y2FzZSBoOnJldHVybiByP2woMSwwKTpsKDMxLDExKTtjYXNlIGM6cmV0dXJuIHI/bCgxLE0pOmwoMCxNKzEpO2Nhc2Ugbzp2YXIgZz10aGlzLiRsb2NhbGUoKS53ZWVrU3RhcnR8fDAsRD0oeTxnP3krNzp5KS1nO3JldHVybiBsKHI/bS1EOm0rKDYtRCksTSk7Y2FzZSBhOmNhc2UgZDpyZXR1cm4gJCh2K1wiSG91cnNcIiwwKTtjYXNlIHU6cmV0dXJuICQoditcIk1pbnV0ZXNcIiwxKTtjYXNlIHM6cmV0dXJuICQoditcIlNlY29uZHNcIiwyKTtjYXNlIGk6cmV0dXJuICQoditcIk1pbGxpc2Vjb25kc1wiLDMpO2RlZmF1bHQ6cmV0dXJuIHRoaXMuY2xvbmUoKX19LG0uZW5kT2Y9ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMuc3RhcnRPZih0LCExKX0sbS4kc2V0PWZ1bmN0aW9uKHQsZSl7dmFyIG4sbz1iLnAodCksZj1cInNldFwiKyh0aGlzLiR1P1wiVVRDXCI6XCJcIiksbD0obj17fSxuW2FdPWYrXCJEYXRlXCIsbltkXT1mK1wiRGF0ZVwiLG5bY109ZitcIk1vbnRoXCIsbltoXT1mK1wiRnVsbFllYXJcIixuW3VdPWYrXCJIb3Vyc1wiLG5bc109ZitcIk1pbnV0ZXNcIixuW2ldPWYrXCJTZWNvbmRzXCIsbltyXT1mK1wiTWlsbGlzZWNvbmRzXCIsbilbb10sJD1vPT09YT90aGlzLiREKyhlLXRoaXMuJFcpOmU7aWYobz09PWN8fG89PT1oKXt2YXIgeT10aGlzLmNsb25lKCkuc2V0KGQsMSk7eS4kZFtsXSgkKSx5LmluaXQoKSx0aGlzLiRkPXkuc2V0KGQsTWF0aC5taW4odGhpcy4kRCx5LmRheXNJbk1vbnRoKCkpKS4kZH1lbHNlIGwmJnRoaXMuJGRbbF0oJCk7cmV0dXJuIHRoaXMuaW5pdCgpLHRoaXN9LG0uc2V0PWZ1bmN0aW9uKHQsZSl7cmV0dXJuIHRoaXMuY2xvbmUoKS4kc2V0KHQsZSl9LG0uZ2V0PWZ1bmN0aW9uKHQpe3JldHVybiB0aGlzW2IucCh0KV0oKX0sbS5hZGQ9ZnVuY3Rpb24ocixmKXt2YXIgZCxsPXRoaXM7cj1OdW1iZXIocik7dmFyICQ9Yi5wKGYpLHk9ZnVuY3Rpb24odCl7dmFyIGU9TyhsKTtyZXR1cm4gYi53KGUuZGF0ZShlLmRhdGUoKStNYXRoLnJvdW5kKHQqcikpLGwpfTtpZigkPT09YylyZXR1cm4gdGhpcy5zZXQoYyx0aGlzLiRNK3IpO2lmKCQ9PT1oKXJldHVybiB0aGlzLnNldChoLHRoaXMuJHkrcik7aWYoJD09PWEpcmV0dXJuIHkoMSk7aWYoJD09PW8pcmV0dXJuIHkoNyk7dmFyIE09KGQ9e30sZFtzXT1lLGRbdV09bixkW2ldPXQsZClbJF18fDEsbT10aGlzLiRkLmdldFRpbWUoKStyKk07cmV0dXJuIGIudyhtLHRoaXMpfSxtLnN1YnRyYWN0PWZ1bmN0aW9uKHQsZSl7cmV0dXJuIHRoaXMuYWRkKC0xKnQsZSl9LG0uZm9ybWF0PWZ1bmN0aW9uKHQpe3ZhciBlPXRoaXMsbj10aGlzLiRsb2NhbGUoKTtpZighdGhpcy5pc1ZhbGlkKCkpcmV0dXJuIG4uaW52YWxpZERhdGV8fGw7dmFyIHI9dHx8XCJZWVlZLU1NLUREVEhIOm1tOnNzWlwiLGk9Yi56KHRoaXMpLHM9dGhpcy4kSCx1PXRoaXMuJG0sYT10aGlzLiRNLG89bi53ZWVrZGF5cyxjPW4ubW9udGhzLGY9bi5tZXJpZGllbSxoPWZ1bmN0aW9uKHQsbixpLHMpe3JldHVybiB0JiYodFtuXXx8dChlLHIpKXx8aVtuXS5zbGljZSgwLHMpfSxkPWZ1bmN0aW9uKHQpe3JldHVybiBiLnMocyUxMnx8MTIsdCxcIjBcIil9LCQ9Znx8ZnVuY3Rpb24odCxlLG4pe3ZhciByPXQ8MTI/XCJBTVwiOlwiUE1cIjtyZXR1cm4gbj9yLnRvTG93ZXJDYXNlKCk6cn07cmV0dXJuIHIucmVwbGFjZSh5LChmdW5jdGlvbih0LHIpe3JldHVybiByfHxmdW5jdGlvbih0KXtzd2l0Y2godCl7Y2FzZVwiWVlcIjpyZXR1cm4gU3RyaW5nKGUuJHkpLnNsaWNlKC0yKTtjYXNlXCJZWVlZXCI6cmV0dXJuIGIucyhlLiR5LDQsXCIwXCIpO2Nhc2VcIk1cIjpyZXR1cm4gYSsxO2Nhc2VcIk1NXCI6cmV0dXJuIGIucyhhKzEsMixcIjBcIik7Y2FzZVwiTU1NXCI6cmV0dXJuIGgobi5tb250aHNTaG9ydCxhLGMsMyk7Y2FzZVwiTU1NTVwiOnJldHVybiBoKGMsYSk7Y2FzZVwiRFwiOnJldHVybiBlLiREO2Nhc2VcIkREXCI6cmV0dXJuIGIucyhlLiRELDIsXCIwXCIpO2Nhc2VcImRcIjpyZXR1cm4gU3RyaW5nKGUuJFcpO2Nhc2VcImRkXCI6cmV0dXJuIGgobi53ZWVrZGF5c01pbixlLiRXLG8sMik7Y2FzZVwiZGRkXCI6cmV0dXJuIGgobi53ZWVrZGF5c1Nob3J0LGUuJFcsbywzKTtjYXNlXCJkZGRkXCI6cmV0dXJuIG9bZS4kV107Y2FzZVwiSFwiOnJldHVybiBTdHJpbmcocyk7Y2FzZVwiSEhcIjpyZXR1cm4gYi5zKHMsMixcIjBcIik7Y2FzZVwiaFwiOnJldHVybiBkKDEpO2Nhc2VcImhoXCI6cmV0dXJuIGQoMik7Y2FzZVwiYVwiOnJldHVybiAkKHMsdSwhMCk7Y2FzZVwiQVwiOnJldHVybiAkKHMsdSwhMSk7Y2FzZVwibVwiOnJldHVybiBTdHJpbmcodSk7Y2FzZVwibW1cIjpyZXR1cm4gYi5zKHUsMixcIjBcIik7Y2FzZVwic1wiOnJldHVybiBTdHJpbmcoZS4kcyk7Y2FzZVwic3NcIjpyZXR1cm4gYi5zKGUuJHMsMixcIjBcIik7Y2FzZVwiU1NTXCI6cmV0dXJuIGIucyhlLiRtcywzLFwiMFwiKTtjYXNlXCJaXCI6cmV0dXJuIGl9cmV0dXJuIG51bGx9KHQpfHxpLnJlcGxhY2UoXCI6XCIsXCJcIil9KSl9LG0udXRjT2Zmc2V0PWZ1bmN0aW9uKCl7cmV0dXJuIDE1Ki1NYXRoLnJvdW5kKHRoaXMuJGQuZ2V0VGltZXpvbmVPZmZzZXQoKS8xNSl9LG0uZGlmZj1mdW5jdGlvbihyLGQsbCl7dmFyICQseT10aGlzLE09Yi5wKGQpLG09TyhyKSx2PShtLnV0Y09mZnNldCgpLXRoaXMudXRjT2Zmc2V0KCkpKmUsZz10aGlzLW0sRD1mdW5jdGlvbigpe3JldHVybiBiLm0oeSxtKX07c3dpdGNoKE0pe2Nhc2UgaDokPUQoKS8xMjticmVhaztjYXNlIGM6JD1EKCk7YnJlYWs7Y2FzZSBmOiQ9RCgpLzM7YnJlYWs7Y2FzZSBvOiQ9KGctdikvNjA0OGU1O2JyZWFrO2Nhc2UgYTokPShnLXYpLzg2NGU1O2JyZWFrO2Nhc2UgdTokPWcvbjticmVhaztjYXNlIHM6JD1nL2U7YnJlYWs7Y2FzZSBpOiQ9Zy90O2JyZWFrO2RlZmF1bHQ6JD1nfXJldHVybiBsPyQ6Yi5hKCQpfSxtLmRheXNJbk1vbnRoPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuZW5kT2YoYykuJER9LG0uJGxvY2FsZT1mdW5jdGlvbigpe3JldHVybiBEW3RoaXMuJExdfSxtLmxvY2FsZT1mdW5jdGlvbih0LGUpe2lmKCF0KXJldHVybiB0aGlzLiRMO3ZhciBuPXRoaXMuY2xvbmUoKSxyPXcodCxlLCEwKTtyZXR1cm4gciYmKG4uJEw9ciksbn0sbS5jbG9uZT1mdW5jdGlvbigpe3JldHVybiBiLncodGhpcy4kZCx0aGlzKX0sbS50b0RhdGU9ZnVuY3Rpb24oKXtyZXR1cm4gbmV3IERhdGUodGhpcy52YWx1ZU9mKCkpfSxtLnRvSlNPTj1mdW5jdGlvbigpe3JldHVybiB0aGlzLmlzVmFsaWQoKT90aGlzLnRvSVNPU3RyaW5nKCk6bnVsbH0sbS50b0lTT1N0cmluZz1mdW5jdGlvbigpe3JldHVybiB0aGlzLiRkLnRvSVNPU3RyaW5nKCl9LG0udG9TdHJpbmc9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy4kZC50b1VUQ1N0cmluZygpfSxNfSgpLGs9Xy5wcm90b3R5cGU7cmV0dXJuIE8ucHJvdG90eXBlPWssW1tcIiRtc1wiLHJdLFtcIiRzXCIsaV0sW1wiJG1cIixzXSxbXCIkSFwiLHVdLFtcIiRXXCIsYV0sW1wiJE1cIixjXSxbXCIkeVwiLGhdLFtcIiREXCIsZF1dLmZvckVhY2goKGZ1bmN0aW9uKHQpe2tbdFsxXV09ZnVuY3Rpb24oZSl7cmV0dXJuIHRoaXMuJGcoZSx0WzBdLHRbMV0pfX0pKSxPLmV4dGVuZD1mdW5jdGlvbih0LGUpe3JldHVybiB0LiRpfHwodChlLF8sTyksdC4kaT0hMCksT30sTy5sb2NhbGU9dyxPLmlzRGF5anM9UyxPLnVuaXg9ZnVuY3Rpb24odCl7cmV0dXJuIE8oMWUzKnQpfSxPLmVuPURbZ10sTy5Mcz1ELE8ucD17fSxPfSkpOyIsIiFmdW5jdGlvbihlLF8pe1wib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzJiZcInVuZGVmaW5lZFwiIT10eXBlb2YgbW9kdWxlP21vZHVsZS5leHBvcnRzPV8ocmVxdWlyZShcImRheWpzXCIpKTpcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKFtcImRheWpzXCJdLF8pOihlPVwidW5kZWZpbmVkXCIhPXR5cGVvZiBnbG9iYWxUaGlzP2dsb2JhbFRoaXM6ZXx8c2VsZikuZGF5anNfbG9jYWxlX2phPV8oZS5kYXlqcyl9KHRoaXMsKGZ1bmN0aW9uKGUpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIF8oZSl7cmV0dXJuIGUmJlwib2JqZWN0XCI9PXR5cGVvZiBlJiZcImRlZmF1bHRcImluIGU/ZTp7ZGVmYXVsdDplfX12YXIgdD1fKGUpLGQ9e25hbWU6XCJqYVwiLHdlZWtkYXlzOlwi5pel5puc5pelX+aciOabnOaXpV/ngavmm5zml6Vf5rC05puc5pelX+acqOabnOaXpV/ph5Hmm5zml6Vf5Zyf5puc5pelXCIuc3BsaXQoXCJfXCIpLHdlZWtkYXlzU2hvcnQ6XCLml6Vf5pyIX+eBq1/msLRf5pyoX+mHkV/lnJ9cIi5zcGxpdChcIl9cIiksd2Vla2RheXNNaW46XCLml6Vf5pyIX+eBq1/msLRf5pyoX+mHkV/lnJ9cIi5zcGxpdChcIl9cIiksbW9udGhzOlwiMeaciF8y5pyIXzPmnIhfNOaciF815pyIXzbmnIhfN+aciF845pyIXznmnIhfMTDmnIhfMTHmnIhfMTLmnIhcIi5zcGxpdChcIl9cIiksbW9udGhzU2hvcnQ6XCIx5pyIXzLmnIhfM+aciF805pyIXzXmnIhfNuaciF835pyIXzjmnIhfOeaciF8xMOaciF8xMeaciF8xMuaciFwiLnNwbGl0KFwiX1wiKSxvcmRpbmFsOmZ1bmN0aW9uKGUpe3JldHVybiBlK1wi5pelXCJ9LGZvcm1hdHM6e0xUOlwiSEg6bW1cIixMVFM6XCJISDptbTpzc1wiLEw6XCJZWVlZL01NL0REXCIsTEw6XCJZWVlZ5bm0TeaciETml6VcIixMTEw6XCJZWVlZ5bm0TeaciETml6UgSEg6bW1cIixMTExMOlwiWVlZWeW5tE3mnIhE5pelIGRkZGQgSEg6bW1cIixsOlwiWVlZWS9NTS9ERFwiLGxsOlwiWVlZWeW5tE3mnIhE5pelXCIsbGxsOlwiWVlZWeW5tE3mnIhE5pelIEhIOm1tXCIsbGxsbDpcIllZWVnlubRN5pyIROaXpShkZGQpIEhIOm1tXCJ9LG1lcmlkaWVtOmZ1bmN0aW9uKGUpe3JldHVybiBlPDEyP1wi5Y2I5YmNXCI6XCLljYjlvoxcIn0scmVsYXRpdmVUaW1lOntmdXR1cmU6XCIlc+W+jFwiLHBhc3Q6XCIlc+WJjVwiLHM6XCLmlbDnp5JcIixtOlwiMeWIhlwiLG1tOlwiJWTliIZcIixoOlwiMeaZgumWk1wiLGhoOlwiJWTmmYLplpNcIixkOlwiMeaXpVwiLGRkOlwiJWTml6VcIixNOlwiMeODtuaciFwiLE1NOlwiJWTjg7bmnIhcIix5OlwiMeW5tFwiLHl5OlwiJWTlubRcIn19O3JldHVybiB0LmRlZmF1bHQubG9jYWxlKGQsbnVsbCwhMCksZH0pKTsiLCJ2YXIgX19kZWZQcm9wID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xudmFyIF9fZGVmTm9ybWFsUHJvcCA9IChvYmosIGtleSwgdmFsdWUpID0+IGtleSBpbiBvYmogPyBfX2RlZlByb3Aob2JqLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSwgdmFsdWUgfSkgOiBvYmpba2V5XSA9IHZhbHVlO1xudmFyIF9fcHVibGljRmllbGQgPSAob2JqLCBrZXksIHZhbHVlKSA9PiB7XG4gIF9fZGVmTm9ybWFsUHJvcChvYmosIHR5cGVvZiBrZXkgIT09IFwic3ltYm9sXCIgPyBrZXkgKyBcIlwiIDoga2V5LCB2YWx1ZSk7XG4gIHJldHVybiB2YWx1ZTtcbn07XG5jb25zdCBFTUFJTF9SRUdFWFAgPSAvXigoW148PigpW1xcXVxcXFwuLDs6XFxzQFwiXSsoXFwuW148PigpW1xcXVxcXFwuLDs6XFxzQFwiXSspKil8KFwiLitcIikpQCgoXFxbWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfV0pfCgoW2EtekEtWlxcLTAtOV0rXFwuKStbYS16QS1aXXsyLH0pKSQvO1xuY29uc3QgSU5URUdFUl9SRUdFWFAgPSAvXi0/WzAtOV1cXGQqJC87XG5jb25zdCBQQVNTV09SRF9SRUdFWFAgPSAvXig/PS4qW0EtWmEtel0pKD89LipcXGQpLns4LH0kLztcbmNvbnN0IFNUUk9OR19QQVNTV09SRF9SRUdFWFAgPSAvXig/PS4qW2Etel0pKD89LipbQS1aXSkoPz0uKlxcZCkoPz0uKltAJCElKj8mXSlbQS1aYS16XFxkQCQhJSo/Jl17OCx9JC87XG5jb25zdCBpc0VtcHR5ID0gKHZhbHVlKSA9PiB7XG4gIGxldCBuZXdWYWwgPSB2YWx1ZTtcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJzdHJpbmdcIikge1xuICAgIG5ld1ZhbCA9IHZhbHVlLnRyaW0oKTtcbiAgfVxuICByZXR1cm4gIW5ld1ZhbDtcbn07XG5jb25zdCBpc0VtYWlsID0gKHZhbHVlKSA9PiB7XG4gIHJldHVybiBFTUFJTF9SRUdFWFAudGVzdCh2YWx1ZSk7XG59O1xuY29uc3QgaXNMZW5ndGhNb3JlVGhhbk1heCA9ICh2YWx1ZSwgbGVuKSA9PiB7XG4gIHJldHVybiB2YWx1ZS5sZW5ndGggPiBsZW47XG59O1xuY29uc3QgaXNMZW5ndGhMZXNzVGhhbk1pbiA9ICh2YWx1ZSwgbGVuKSA9PiB7XG4gIHJldHVybiB2YWx1ZS5sZW5ndGggPCBsZW47XG59O1xuY29uc3QgaXNOdW1iZXIgPSAodmFsdWUpID0+IHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gXCJzdHJpbmdcIikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICByZXR1cm4gIWlzTmFOKCt2YWx1ZSkgJiYgIWlzTmFOKHBhcnNlRmxvYXQodmFsdWUpKTtcbn07XG5jb25zdCBpc0ludGVnZXIgPSAodmFsdWUpID0+IHtcbiAgcmV0dXJuIElOVEVHRVJfUkVHRVhQLnRlc3QodmFsdWUpO1xufTtcbmNvbnN0IGlzUGFzc3dvcmQgPSAodmFsdWUpID0+IHtcbiAgcmV0dXJuIFBBU1NXT1JEX1JFR0VYUC50ZXN0KHZhbHVlKTtcbn07XG5jb25zdCBpc1N0cm9uZ1Bhc3N3b3JkID0gKHZhbHVlKSA9PiB7XG4gIHJldHVybiBTVFJPTkdfUEFTU1dPUkRfUkVHRVhQLnRlc3QodmFsdWUpO1xufTtcbmNvbnN0IGlzTnVtYmVyTW9yZVRoYW5NYXggPSAodmFsdWUsIGxlbikgPT4ge1xuICByZXR1cm4gdmFsdWUgPiBsZW47XG59O1xuY29uc3QgaXNOdW1iZXJMZXNzVGhhbk1pbiA9ICh2YWx1ZSwgbGVuKSA9PiB7XG4gIHJldHVybiB2YWx1ZSA8IGxlbjtcbn07XG5jb25zdCBpc0ludmFsaWRPckVtcHR5U3RyaW5nID0gKHZhbHVlKSA9PiB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgIT09IFwic3RyaW5nXCIgfHwgdmFsdWUgPT09IFwiXCI7XG59O1xudmFyIFJ1bGVzID0gLyogQF9fUFVSRV9fICovICgoUnVsZXMyKSA9PiB7XG4gIFJ1bGVzMltcIlJlcXVpcmVkXCJdID0gXCJyZXF1aXJlZFwiO1xuICBSdWxlczJbXCJFbWFpbFwiXSA9IFwiZW1haWxcIjtcbiAgUnVsZXMyW1wiTWluTGVuZ3RoXCJdID0gXCJtaW5MZW5ndGhcIjtcbiAgUnVsZXMyW1wiTWF4TGVuZ3RoXCJdID0gXCJtYXhMZW5ndGhcIjtcbiAgUnVsZXMyW1wiUGFzc3dvcmRcIl0gPSBcInBhc3N3b3JkXCI7XG4gIFJ1bGVzMltcIk51bWJlclwiXSA9IFwibnVtYmVyXCI7XG4gIFJ1bGVzMltcIkludGVnZXJcIl0gPSBcImludGVnZXJcIjtcbiAgUnVsZXMyW1wiTWF4TnVtYmVyXCJdID0gXCJtYXhOdW1iZXJcIjtcbiAgUnVsZXMyW1wiTWluTnVtYmVyXCJdID0gXCJtaW5OdW1iZXJcIjtcbiAgUnVsZXMyW1wiU3Ryb25nUGFzc3dvcmRcIl0gPSBcInN0cm9uZ1Bhc3N3b3JkXCI7XG4gIFJ1bGVzMltcIkN1c3RvbVJlZ2V4cFwiXSA9IFwiY3VzdG9tUmVnZXhwXCI7XG4gIFJ1bGVzMltcIk1pbkZpbGVzQ291bnRcIl0gPSBcIm1pbkZpbGVzQ291bnRcIjtcbiAgUnVsZXMyW1wiTWF4RmlsZXNDb3VudFwiXSA9IFwibWF4RmlsZXNDb3VudFwiO1xuICBSdWxlczJbXCJGaWxlc1wiXSA9IFwiZmlsZXNcIjtcbiAgcmV0dXJuIFJ1bGVzMjtcbn0pKFJ1bGVzIHx8IHt9KTtcbnZhciBHcm91cFJ1bGVzID0gLyogQF9fUFVSRV9fICovICgoR3JvdXBSdWxlczIpID0+IHtcbiAgR3JvdXBSdWxlczJbXCJSZXF1aXJlZFwiXSA9IFwicmVxdWlyZWRcIjtcbiAgcmV0dXJuIEdyb3VwUnVsZXMyO1xufSkoR3JvdXBSdWxlcyB8fCB7fSk7XG52YXIgQ3VzdG9tU3R5bGVUYWdJZHMgPSAvKiBAX19QVVJFX18gKi8gKChDdXN0b21TdHlsZVRhZ0lkczIpID0+IHtcbiAgQ3VzdG9tU3R5bGVUYWdJZHMyW1wiTGFiZWxcIl0gPSBcImxhYmVsXCI7XG4gIEN1c3RvbVN0eWxlVGFnSWRzMltcIkxhYmVsQXJyb3dcIl0gPSBcImxhYmVsQXJyb3dcIjtcbiAgcmV0dXJuIEN1c3RvbVN0eWxlVGFnSWRzMjtcbn0pKEN1c3RvbVN0eWxlVGFnSWRzIHx8IHt9KTtcbmNvbnN0IGRlZmF1bHREaWN0aW9uYXJ5ID0gW1xuICB7XG4gICAga2V5OiBSdWxlcy5SZXF1aXJlZCxcbiAgICBkaWN0OiB7XG4gICAgICBlbjogXCJUaGUgZmllbGQgaXMgcmVxdWlyZWRcIlxuICAgIH1cbiAgfSxcbiAge1xuICAgIGtleTogUnVsZXMuRW1haWwsXG4gICAgZGljdDoge1xuICAgICAgZW46IFwiRW1haWwgaGFzIGludmFsaWQgZm9ybWF0XCJcbiAgICB9XG4gIH0sXG4gIHtcbiAgICBrZXk6IFJ1bGVzLk1heExlbmd0aCxcbiAgICBkaWN0OiB7XG4gICAgICBlbjogXCJUaGUgZmllbGQgbXVzdCBjb250YWluIGEgbWF4aW11bSBvZiA6dmFsdWUgY2hhcmFjdGVyc1wiXG4gICAgfVxuICB9LFxuICB7XG4gICAga2V5OiBSdWxlcy5NaW5MZW5ndGgsXG4gICAgZGljdDoge1xuICAgICAgZW46IFwiVGhlIGZpZWxkIG11c3QgY29udGFpbiBhIG1pbmltdW0gb2YgOnZhbHVlIGNoYXJhY3RlcnNcIlxuICAgIH1cbiAgfSxcbiAge1xuICAgIGtleTogUnVsZXMuUGFzc3dvcmQsXG4gICAgZGljdDoge1xuICAgICAgZW46IFwiUGFzc3dvcmQgbXVzdCBjb250YWluIG1pbmltdW0gZWlnaHQgY2hhcmFjdGVycywgYXQgbGVhc3Qgb25lIGxldHRlciBhbmQgb25lIG51bWJlclwiXG4gICAgfVxuICB9LFxuICB7XG4gICAga2V5OiBSdWxlcy5TdHJvbmdQYXNzd29yZCxcbiAgICBkaWN0OiB7XG4gICAgICBlbjogXCJQYXNzd29yZCBzaG91bGQgY29udGFpbiBtaW5pbXVtIGVpZ2h0IGNoYXJhY3RlcnMsIGF0IGxlYXN0IG9uZSB1cHBlcmNhc2UgbGV0dGVyLCBvbmUgbG93ZXJjYXNlIGxldHRlciwgb25lIG51bWJlciBhbmQgb25lIHNwZWNpYWwgY2hhcmFjdGVyXCJcbiAgICB9XG4gIH0sXG4gIHtcbiAgICBrZXk6IFJ1bGVzLk51bWJlcixcbiAgICBkaWN0OiB7XG4gICAgICBlbjogXCJWYWx1ZSBzaG91bGQgYmUgYSBudW1iZXJcIlxuICAgIH1cbiAgfSxcbiAge1xuICAgIGtleTogUnVsZXMuTWF4TnVtYmVyLFxuICAgIGRpY3Q6IHtcbiAgICAgIGVuOiBcIk51bWJlciBzaG91bGQgYmUgbGVzcyBvciBlcXVhbCB0aGFuIDp2YWx1ZVwiXG4gICAgfVxuICB9LFxuICB7XG4gICAga2V5OiBSdWxlcy5NaW5OdW1iZXIsXG4gICAgZGljdDoge1xuICAgICAgZW46IFwiTnVtYmVyIHNob3VsZCBiZSBtb3JlIG9yIGVxdWFsIHRoYW4gOnZhbHVlXCJcbiAgICB9XG4gIH0sXG4gIHtcbiAgICBrZXk6IFJ1bGVzLk1pbkZpbGVzQ291bnQsXG4gICAgZGljdDoge1xuICAgICAgZW46IFwiRmlsZXMgY291bnQgc2hvdWxkIGJlIG1vcmUgb3IgZXF1YWwgdGhhbiA6dmFsdWVcIlxuICAgIH1cbiAgfSxcbiAge1xuICAgIGtleTogUnVsZXMuTWF4RmlsZXNDb3VudCxcbiAgICBkaWN0OiB7XG4gICAgICBlbjogXCJGaWxlcyBjb3VudCBzaG91bGQgYmUgbGVzcyBvciBlcXVhbCB0aGFuIDp2YWx1ZVwiXG4gICAgfVxuICB9LFxuICB7XG4gICAga2V5OiBSdWxlcy5GaWxlcyxcbiAgICBkaWN0OiB7XG4gICAgICBlbjogXCJVcGxvYWRlZCBmaWxlcyBoYXZlIG9uZSBvciBzZXZlcmFsIGludmFsaWQgcHJvcGVydGllcyAoZXh0ZW5zaW9uL3NpemUvdHlwZSBldGMpLlwiXG4gICAgfVxuICB9XG5dO1xuY29uc3QgREVGQVVMVF9FUlJPUl9GSUVMRF9NRVNTQUdFID0gXCJWYWx1ZSBpcyBpbmNvcnJlY3RcIjtcbmNvbnN0IGlzUHJvbWlzZSA9ICh2YWwpID0+IHR5cGVvZiB2YWwgPT09IFwib2JqZWN0XCIgJiYgdmFsICE9PSBudWxsICYmIFwidGhlblwiIGluIHZhbCAmJiB0eXBlb2YgdmFsLnRoZW4gPT09IFwiZnVuY3Rpb25cIjtcbmNvbnN0IGdldE5vZGVQYXJlbnRzID0gKGVsKSA9PiB7XG4gIGxldCBlbGVtID0gZWw7XG4gIGNvbnN0IGVscyA9IFtdO1xuICB3aGlsZSAoZWxlbSkge1xuICAgIGVscy51bnNoaWZ0KGVsZW0pO1xuICAgIGVsZW0gPSBlbGVtLnBhcmVudE5vZGU7XG4gIH1cbiAgcmV0dXJuIGVscztcbn07XG5jb25zdCBnZXRDbG9zZXN0UGFyZW50ID0gKGdyb3VwcywgcGFyZW50cykgPT4ge1xuICBjb25zdCByZXZlcnNlZFBhcmVudHMgPSBbLi4ucGFyZW50c10ucmV2ZXJzZSgpO1xuICBmb3IgKGxldCBpID0gMCwgbGVuID0gcmV2ZXJzZWRQYXJlbnRzLmxlbmd0aDsgaSA8IGxlbjsgKytpKSB7XG4gICAgY29uc3QgcGFyZW50ID0gcmV2ZXJzZWRQYXJlbnRzW2ldO1xuICAgIGZvciAoY29uc3Qga2V5IGluIGdyb3Vwcykge1xuICAgICAgY29uc3QgZ3JvdXAgPSBncm91cHNba2V5XTtcbiAgICAgIGlmIChncm91cC5ncm91cEVsZW0gPT09IHBhcmVudCkge1xuICAgICAgICByZXR1cm4gW2tleSwgZ3JvdXBdO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gbnVsbDtcbn07XG5jb25zdCBnZXRDbGFzc0xpc3QgPSAoY2xhc3NMaXN0KSA9PiB7XG4gIGlmIChBcnJheS5pc0FycmF5KGNsYXNzTGlzdCkpIHtcbiAgICByZXR1cm4gY2xhc3NMaXN0LmZpbHRlcigoY2xzKSA9PiBjbHMubGVuZ3RoID4gMCk7XG4gIH1cbiAgaWYgKHR5cGVvZiBjbGFzc0xpc3QgPT09IFwic3RyaW5nXCIgJiYgY2xhc3NMaXN0LnRyaW0oKSkge1xuICAgIHJldHVybiBbLi4uY2xhc3NMaXN0LnNwbGl0KFwiIFwiKS5maWx0ZXIoKGNscykgPT4gY2xzLmxlbmd0aCA+IDApXTtcbiAgfVxuICByZXR1cm4gW107XG59O1xuY29uc3QgaXNFbGVtZW50ID0gKGVsZW1lbnQpID0+IHtcbiAgcmV0dXJuIGVsZW1lbnQgaW5zdGFuY2VvZiBFbGVtZW50IHx8IGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MRG9jdW1lbnQ7XG59O1xuY29uc3QgZXJyb3JMYWJlbENzcyA9IGAuanVzdC12YWxpZGF0ZS1lcnJvci1sYWJlbFtkYXRhLXRvb2x0aXA9dHJ1ZV17cG9zaXRpb246Zml4ZWQ7cGFkZGluZzo0cHggOHB4O2JhY2tncm91bmQ6IzQyM2YzZjtjb2xvcjojZmZmO3doaXRlLXNwYWNlOm5vd3JhcDt6LWluZGV4OjEwO2JvcmRlci1yYWRpdXM6NHB4O3RyYW5zZm9ybTp0cmFuc2xhdGVZKC01cHgpfS5qdXN0LXZhbGlkYXRlLWVycm9yLWxhYmVsW2RhdGEtdG9vbHRpcD10cnVlXTpiZWZvcmV7Y29udGVudDonJzt3aWR0aDowO2hlaWdodDowO2JvcmRlci1sZWZ0OnNvbGlkIDVweCB0cmFuc3BhcmVudDtib3JkZXItcmlnaHQ6c29saWQgNXB4IHRyYW5zcGFyZW50O2JvcmRlci1ib3R0b206c29saWQgNXB4ICM0MjNmM2Y7cG9zaXRpb246YWJzb2x1dGU7ei1pbmRleDozO2Rpc3BsYXk6YmxvY2s7Ym90dG9tOi01cHg7dHJhbnNmb3JtOnJvdGF0ZSgxODBkZWcpO2xlZnQ6Y2FsYyg1MCUgLSA1cHgpfS5qdXN0LXZhbGlkYXRlLWVycm9yLWxhYmVsW2RhdGEtdG9vbHRpcD10cnVlXVtkYXRhLWRpcmVjdGlvbj1sZWZ0XXt0cmFuc2Zvcm06dHJhbnNsYXRlWCgtNXB4KX0uanVzdC12YWxpZGF0ZS1lcnJvci1sYWJlbFtkYXRhLXRvb2x0aXA9dHJ1ZV1bZGF0YS1kaXJlY3Rpb249bGVmdF06YmVmb3Jle3JpZ2h0Oi03cHg7Ym90dG9tOmF1dG87bGVmdDphdXRvO3RvcDpjYWxjKDUwJSAtIDJweCk7dHJhbnNmb3JtOnJvdGF0ZSg5MGRlZyl9Lmp1c3QtdmFsaWRhdGUtZXJyb3ItbGFiZWxbZGF0YS10b29sdGlwPXRydWVdW2RhdGEtZGlyZWN0aW9uPXJpZ2h0XXt0cmFuc2Zvcm06dHJhbnNsYXRlWCg1cHgpfS5qdXN0LXZhbGlkYXRlLWVycm9yLWxhYmVsW2RhdGEtdG9vbHRpcD10cnVlXVtkYXRhLWRpcmVjdGlvbj1yaWdodF06YmVmb3Jle3JpZ2h0OmF1dG87Ym90dG9tOmF1dG87bGVmdDotN3B4O3RvcDpjYWxjKDUwJSAtIDJweCk7dHJhbnNmb3JtOnJvdGF0ZSgtOTBkZWcpfS5qdXN0LXZhbGlkYXRlLWVycm9yLWxhYmVsW2RhdGEtdG9vbHRpcD10cnVlXVtkYXRhLWRpcmVjdGlvbj1ib3R0b21de3RyYW5zZm9ybTp0cmFuc2xhdGVZKDVweCl9Lmp1c3QtdmFsaWRhdGUtZXJyb3ItbGFiZWxbZGF0YS10b29sdGlwPXRydWVdW2RhdGEtZGlyZWN0aW9uPWJvdHRvbV06YmVmb3Jle3JpZ2h0OmF1dG87Ym90dG9tOmF1dG87bGVmdDpjYWxjKDUwJSAtIDVweCk7dG9wOi01cHg7dHJhbnNmb3JtOnJvdGF0ZSgwKX1gO1xuY29uc3QgVE9PTFRJUF9BUlJPV19IRUlHSFQgPSA1O1xuY29uc3QgZGVmYXVsdEdsb2JhbENvbmZpZyA9IHtcbiAgZXJyb3JGaWVsZFN0eWxlOiB7XG4gICAgY29sb3I6IFwiI2I4MTExMVwiLFxuICAgIGJvcmRlcjogXCIxcHggc29saWQgI0I4MTExMVwiXG4gIH0sXG4gIGVycm9yRmllbGRDc3NDbGFzczogXCJqdXN0LXZhbGlkYXRlLWVycm9yLWZpZWxkXCIsXG4gIHN1Y2Nlc3NGaWVsZENzc0NsYXNzOiBcImp1c3QtdmFsaWRhdGUtc3VjY2Vzcy1maWVsZFwiLFxuICBlcnJvckxhYmVsU3R5bGU6IHtcbiAgICBjb2xvcjogXCIjYjgxMTExXCJcbiAgfSxcbiAgZXJyb3JMYWJlbENzc0NsYXNzOiBcImp1c3QtdmFsaWRhdGUtZXJyb3ItbGFiZWxcIixcbiAgc3VjY2Vzc0xhYmVsQ3NzQ2xhc3M6IFwianVzdC12YWxpZGF0ZS1zdWNjZXNzLWxhYmVsXCIsXG4gIGZvY3VzSW52YWxpZEZpZWxkOiB0cnVlLFxuICBsb2NrRm9ybTogdHJ1ZSxcbiAgdGVzdGluZ01vZGU6IGZhbHNlLFxuICB2YWxpZGF0ZUJlZm9yZVN1Ym1pdHRpbmc6IGZhbHNlLFxuICBzdWJtaXRGb3JtQXV0b21hdGljYWxseTogZmFsc2Vcbn07XG5jbGFzcyBKdXN0VmFsaWRhdGUge1xuICBjb25zdHJ1Y3Rvcihmb3JtLCBnbG9iYWxDb25maWcsIGRpY3RMb2NhbGUpIHtcbiAgICBfX3B1YmxpY0ZpZWxkKHRoaXMsIFwiZm9ybVwiLCBudWxsKTtcbiAgICBfX3B1YmxpY0ZpZWxkKHRoaXMsIFwiZmllbGRzXCIsIHt9KTtcbiAgICBfX3B1YmxpY0ZpZWxkKHRoaXMsIFwiZ3JvdXBGaWVsZHNcIiwge30pO1xuICAgIF9fcHVibGljRmllbGQodGhpcywgXCJlcnJvcnNcIiwge30pO1xuICAgIF9fcHVibGljRmllbGQodGhpcywgXCJpc1ZhbGlkXCIsIGZhbHNlKTtcbiAgICBfX3B1YmxpY0ZpZWxkKHRoaXMsIFwiaXNTdWJtaXR0ZWRcIiwgZmFsc2UpO1xuICAgIF9fcHVibGljRmllbGQodGhpcywgXCJnbG9iYWxDb25maWdcIiwgZGVmYXVsdEdsb2JhbENvbmZpZyk7XG4gICAgX19wdWJsaWNGaWVsZCh0aGlzLCBcImVycm9yTGFiZWxzXCIsIHt9KTtcbiAgICBfX3B1YmxpY0ZpZWxkKHRoaXMsIFwic3VjY2Vzc0xhYmVsc1wiLCB7fSk7XG4gICAgX19wdWJsaWNGaWVsZCh0aGlzLCBcImV2ZW50TGlzdGVuZXJzXCIsIFtdKTtcbiAgICBfX3B1YmxpY0ZpZWxkKHRoaXMsIFwiZGljdExvY2FsZVwiLCBkZWZhdWx0RGljdGlvbmFyeSk7XG4gICAgX19wdWJsaWNGaWVsZCh0aGlzLCBcImN1cnJlbnRMb2NhbGVcIiwgXCJlblwiKTtcbiAgICBfX3B1YmxpY0ZpZWxkKHRoaXMsIFwiY3VzdG9tU3R5bGVUYWdzXCIsIHt9KTtcbiAgICBfX3B1YmxpY0ZpZWxkKHRoaXMsIFwib25TdWNjZXNzQ2FsbGJhY2tcIik7XG4gICAgX19wdWJsaWNGaWVsZCh0aGlzLCBcIm9uRmFpbENhbGxiYWNrXCIpO1xuICAgIF9fcHVibGljRmllbGQodGhpcywgXCJvblZhbGlkYXRlQ2FsbGJhY2tcIik7XG4gICAgX19wdWJsaWNGaWVsZCh0aGlzLCBcInRvb2x0aXBzXCIsIFtdKTtcbiAgICBfX3B1YmxpY0ZpZWxkKHRoaXMsIFwibGFzdFNjcm9sbFBvc2l0aW9uXCIpO1xuICAgIF9fcHVibGljRmllbGQodGhpcywgXCJpc1Njcm9sbFRpY2tcIik7XG4gICAgX19wdWJsaWNGaWVsZCh0aGlzLCBcImZpZWxkSWRzXCIsIC8qIEBfX1BVUkVfXyAqLyBuZXcgTWFwKCkpO1xuICAgIF9fcHVibGljRmllbGQodGhpcywgXCJnZXRLZXlCeUZpZWxkU2VsZWN0b3JcIiwgKGZpZWxkKSA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5maWVsZElkcy5nZXQoZmllbGQpO1xuICAgIH0pO1xuICAgIF9fcHVibGljRmllbGQodGhpcywgXCJnZXRGaWVsZFNlbGVjdG9yQnlLZXlcIiwgKGtleSkgPT4ge1xuICAgICAgZm9yIChjb25zdCBbZmllbGRTZWxlY3Rvciwga10gb2YgdGhpcy5maWVsZElkcykge1xuICAgICAgICBpZiAoa2V5ID09PSBrKSB7XG4gICAgICAgICAgcmV0dXJuIGZpZWxkU2VsZWN0b3I7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB2b2lkIDA7XG4gICAgfSk7XG4gICAgX19wdWJsaWNGaWVsZCh0aGlzLCBcImdldENvbXBhdGlibGVGaWVsZHNcIiwgKCkgPT4ge1xuICAgICAgY29uc3QgZmllbGRzID0ge307XG4gICAgICBPYmplY3Qua2V5cyh0aGlzLmZpZWxkcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIGxldCBuZXdLZXkgPSBrZXk7XG4gICAgICAgIGNvbnN0IGZpZWxkU2VsZWN0b3IgPSB0aGlzLmdldEZpZWxkU2VsZWN0b3JCeUtleShrZXkpO1xuICAgICAgICBpZiAodHlwZW9mIGZpZWxkU2VsZWN0b3IgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICBuZXdLZXkgPSBmaWVsZFNlbGVjdG9yO1xuICAgICAgICB9XG4gICAgICAgIGZpZWxkc1tuZXdLZXldID0geyAuLi50aGlzLmZpZWxkc1trZXldIH07XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBmaWVsZHM7XG4gICAgfSk7XG4gICAgX19wdWJsaWNGaWVsZCh0aGlzLCBcInNldEtleUJ5RmllbGRTZWxlY3RvclwiLCAoZmllbGQpID0+IHtcbiAgICAgIGlmICh0aGlzLmZpZWxkSWRzLmhhcyhmaWVsZCkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZmllbGRJZHMuZ2V0KGZpZWxkKTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGtleSA9IFN0cmluZyh0aGlzLmZpZWxkSWRzLnNpemUgKyAxKTtcbiAgICAgIHRoaXMuZmllbGRJZHMuc2V0KGZpZWxkLCBrZXkpO1xuICAgICAgcmV0dXJuIGtleTtcbiAgICB9KTtcbiAgICBfX3B1YmxpY0ZpZWxkKHRoaXMsIFwicmVmcmVzaEFsbFRvb2x0aXBzXCIsICgpID0+IHtcbiAgICAgIHRoaXMudG9vbHRpcHMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICBpdGVtLnJlZnJlc2goKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIF9fcHVibGljRmllbGQodGhpcywgXCJoYW5kbGVEb2N1bWVudFNjcm9sbFwiLCAoKSA9PiB7XG4gICAgICB0aGlzLmxhc3RTY3JvbGxQb3NpdGlvbiA9IHdpbmRvdy5zY3JvbGxZO1xuICAgICAgaWYgKCF0aGlzLmlzU2Nyb2xsVGljaykge1xuICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgICB0aGlzLnJlZnJlc2hBbGxUb29sdGlwcygpO1xuICAgICAgICAgIHRoaXMuaXNTY3JvbGxUaWNrID0gZmFsc2U7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmlzU2Nyb2xsVGljayA9IHRydWU7XG4gICAgICB9XG4gICAgfSk7XG4gICAgX19wdWJsaWNGaWVsZCh0aGlzLCBcImZvcm1TdWJtaXRIYW5kbGVyXCIsIChldikgPT4ge1xuICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHRoaXMuaXNTdWJtaXR0ZWQgPSB0cnVlO1xuICAgICAgdGhpcy52YWxpZGF0ZUhhbmRsZXIoZXYpO1xuICAgIH0pO1xuICAgIF9fcHVibGljRmllbGQodGhpcywgXCJoYW5kbGVGaWVsZENoYW5nZVwiLCAodGFyZ2V0KSA9PiB7XG4gICAgICBsZXQgZm91bmRLZXk7XG4gICAgICBmb3IgKGNvbnN0IGtleSBpbiB0aGlzLmZpZWxkcykge1xuICAgICAgICBjb25zdCBmaWVsZCA9IHRoaXMuZmllbGRzW2tleV07XG4gICAgICAgIGlmIChmaWVsZC5lbGVtID09PSB0YXJnZXQpIHtcbiAgICAgICAgICBmb3VuZEtleSA9IGtleTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKCFmb3VuZEtleSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLmZpZWxkc1tmb3VuZEtleV0udG91Y2hlZCA9IHRydWU7XG4gICAgICB0aGlzLnZhbGlkYXRlRmllbGQoZm91bmRLZXksIHRydWUpO1xuICAgIH0pO1xuICAgIF9fcHVibGljRmllbGQodGhpcywgXCJoYW5kbGVHcm91cENoYW5nZVwiLCAodGFyZ2V0KSA9PiB7XG4gICAgICBsZXQgZm91bmRLZXk7XG4gICAgICBmb3IgKGNvbnN0IGtleSBpbiB0aGlzLmdyb3VwRmllbGRzKSB7XG4gICAgICAgIGNvbnN0IGdyb3VwID0gdGhpcy5ncm91cEZpZWxkc1trZXldO1xuICAgICAgICBpZiAoZ3JvdXAuZWxlbXMuZmluZCgoZWxlbSkgPT4gZWxlbSA9PT0gdGFyZ2V0KSkge1xuICAgICAgICAgIGZvdW5kS2V5ID0ga2V5O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoIWZvdW5kS2V5KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMuZ3JvdXBGaWVsZHNbZm91bmRLZXldLnRvdWNoZWQgPSB0cnVlO1xuICAgICAgdGhpcy52YWxpZGF0ZUdyb3VwKGZvdW5kS2V5LCB0cnVlKTtcbiAgICB9KTtcbiAgICBfX3B1YmxpY0ZpZWxkKHRoaXMsIFwiaGFuZGxlckNoYW5nZVwiLCAoZXYpID0+IHtcbiAgICAgIGlmICghZXYudGFyZ2V0KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMuaGFuZGxlRmllbGRDaGFuZ2UoZXYudGFyZ2V0KTtcbiAgICAgIHRoaXMuaGFuZGxlR3JvdXBDaGFuZ2UoZXYudGFyZ2V0KTtcbiAgICAgIHRoaXMucmVuZGVyRXJyb3JzKCk7XG4gICAgfSk7XG4gICAgdGhpcy5pbml0aWFsaXplKGZvcm0sIGdsb2JhbENvbmZpZywgZGljdExvY2FsZSk7XG4gIH1cbiAgaW5pdGlhbGl6ZShmb3JtLCBnbG9iYWxDb25maWcsIGRpY3RMb2NhbGUpIHtcbiAgICB0aGlzLmZvcm0gPSBudWxsO1xuICAgIHRoaXMuZXJyb3JzID0ge307XG4gICAgdGhpcy5pc1ZhbGlkID0gZmFsc2U7XG4gICAgdGhpcy5pc1N1Ym1pdHRlZCA9IGZhbHNlO1xuICAgIHRoaXMuZ2xvYmFsQ29uZmlnID0gZGVmYXVsdEdsb2JhbENvbmZpZztcbiAgICB0aGlzLmVycm9yTGFiZWxzID0ge307XG4gICAgdGhpcy5zdWNjZXNzTGFiZWxzID0ge307XG4gICAgdGhpcy5ldmVudExpc3RlbmVycyA9IFtdO1xuICAgIHRoaXMuY3VzdG9tU3R5bGVUYWdzID0ge307XG4gICAgdGhpcy50b29sdGlwcyA9IFtdO1xuICAgIHRoaXMuY3VycmVudExvY2FsZSA9IFwiZW5cIjtcbiAgICBpZiAodHlwZW9mIGZvcm0gPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIGNvbnN0IGVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGZvcm0pO1xuICAgICAgaWYgKCFlbGVtKSB7XG4gICAgICAgIHRocm93IEVycm9yKFxuICAgICAgICAgIGBGb3JtIHdpdGggJHtmb3JtfSBzZWxlY3RvciBub3QgZm91bmQhIFBsZWFzZSBjaGVjayB0aGUgZm9ybSBzZWxlY3RvcmBcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuc2V0Rm9ybShlbGVtKTtcbiAgICB9IGVsc2UgaWYgKGZvcm0gaW5zdGFuY2VvZiBIVE1MRm9ybUVsZW1lbnQpIHtcbiAgICAgIHRoaXMuc2V0Rm9ybShmb3JtKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgRXJyb3IoXG4gICAgICAgIGBGb3JtIHNlbGVjdG9yIGlzIG5vdCB2YWxpZC4gUGxlYXNlIHNwZWNpZnkgYSBzdHJpbmcgc2VsZWN0b3Igb3IgYSBET00gZWxlbWVudC5gXG4gICAgICApO1xuICAgIH1cbiAgICB0aGlzLmdsb2JhbENvbmZpZyA9IHsgLi4uZGVmYXVsdEdsb2JhbENvbmZpZywgLi4uZ2xvYmFsQ29uZmlnIH07XG4gICAgaWYgKGRpY3RMb2NhbGUpIHtcbiAgICAgIHRoaXMuZGljdExvY2FsZSA9IFsuLi5kaWN0TG9jYWxlLCAuLi5kZWZhdWx0RGljdGlvbmFyeV07XG4gICAgfVxuICAgIGlmICh0aGlzLmlzVG9vbHRpcCgpKSB7XG4gICAgICBjb25zdCBzdHlsZVRhZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgICAgIHN0eWxlVGFnLnRleHRDb250ZW50ID0gZXJyb3JMYWJlbENzcztcbiAgICAgIHRoaXMuY3VzdG9tU3R5bGVUYWdzW0N1c3RvbVN0eWxlVGFnSWRzLkxhYmVsXSA9IGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc3R5bGVUYWcpO1xuICAgICAgdGhpcy5hZGRMaXN0ZW5lcihcInNjcm9sbFwiLCBkb2N1bWVudCwgdGhpcy5oYW5kbGVEb2N1bWVudFNjcm9sbCk7XG4gICAgfVxuICB9XG4gIGdldExvY2FsaXNlZFN0cmluZyhydWxlLCBydWxlVmFsdWUsIGN1c3RvbU1zZykge1xuICAgIHZhciBfYTtcbiAgICBjb25zdCBzZWFyY2ggPSBjdXN0b21Nc2cgIT0gbnVsbCA/IGN1c3RvbU1zZyA6IHJ1bGU7XG4gICAgbGV0IGxvY2FsaXNlZFN0ciA9IChfYSA9IHRoaXMuZGljdExvY2FsZS5maW5kKChpdGVtKSA9PiBpdGVtLmtleSA9PT0gc2VhcmNoKSkgPT0gbnVsbCA/IHZvaWQgMCA6IF9hLmRpY3RbdGhpcy5jdXJyZW50TG9jYWxlXTtcbiAgICBpZiAoIWxvY2FsaXNlZFN0cikge1xuICAgICAgaWYgKGN1c3RvbU1zZykge1xuICAgICAgICBsb2NhbGlzZWRTdHIgPSBjdXN0b21Nc2c7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChsb2NhbGlzZWRTdHIgJiYgcnVsZVZhbHVlICE9PSB2b2lkIDApIHtcbiAgICAgIHN3aXRjaCAocnVsZSkge1xuICAgICAgICBjYXNlIFJ1bGVzLk1heExlbmd0aDpcbiAgICAgICAgY2FzZSBSdWxlcy5NaW5MZW5ndGg6XG4gICAgICAgIGNhc2UgUnVsZXMuTWF4TnVtYmVyOlxuICAgICAgICBjYXNlIFJ1bGVzLk1pbk51bWJlcjpcbiAgICAgICAgY2FzZSBSdWxlcy5NaW5GaWxlc0NvdW50OlxuICAgICAgICBjYXNlIFJ1bGVzLk1heEZpbGVzQ291bnQ6XG4gICAgICAgICAgbG9jYWxpc2VkU3RyID0gbG9jYWxpc2VkU3RyLnJlcGxhY2UoXCI6dmFsdWVcIiwgU3RyaW5nKHJ1bGVWYWx1ZSkpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbG9jYWxpc2VkU3RyIHx8IGN1c3RvbU1zZyB8fCBERUZBVUxUX0VSUk9SX0ZJRUxEX01FU1NBR0U7XG4gIH1cbiAgZ2V0RmllbGRFcnJvck1lc3NhZ2UoZmllbGRSdWxlLCBlbGVtKSB7XG4gICAgY29uc3QgbXNnID0gdHlwZW9mIGZpZWxkUnVsZS5lcnJvck1lc3NhZ2UgPT09IFwiZnVuY3Rpb25cIiA/IGZpZWxkUnVsZS5lcnJvck1lc3NhZ2UodGhpcy5nZXRFbGVtVmFsdWUoZWxlbSksIHRoaXMuZmllbGRzKSA6IGZpZWxkUnVsZS5lcnJvck1lc3NhZ2U7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TG9jYWxpc2VkU3RyaW5nKGZpZWxkUnVsZS5ydWxlLCBmaWVsZFJ1bGUudmFsdWUsIG1zZyk7XG4gIH1cbiAgZ2V0RmllbGRTdWNjZXNzTWVzc2FnZShzdWNjZXNzTWVzc2FnZSwgZWxlbSkge1xuICAgIGNvbnN0IG1zZyA9IHR5cGVvZiBzdWNjZXNzTWVzc2FnZSA9PT0gXCJmdW5jdGlvblwiID8gc3VjY2Vzc01lc3NhZ2UodGhpcy5nZXRFbGVtVmFsdWUoZWxlbSksIHRoaXMuZmllbGRzKSA6IHN1Y2Nlc3NNZXNzYWdlO1xuICAgIHJldHVybiB0aGlzLmdldExvY2FsaXNlZFN0cmluZyh2b2lkIDAsIHZvaWQgMCwgbXNnKTtcbiAgfVxuICBnZXRHcm91cEVycm9yTWVzc2FnZShncm91cFJ1bGUpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRMb2NhbGlzZWRTdHJpbmcoXG4gICAgICBncm91cFJ1bGUucnVsZSxcbiAgICAgIHZvaWQgMCxcbiAgICAgIGdyb3VwUnVsZS5lcnJvck1lc3NhZ2VcbiAgICApO1xuICB9XG4gIGdldEdyb3VwU3VjY2Vzc01lc3NhZ2UoZ3JvdXBSdWxlKSB7XG4gICAgaWYgKCFncm91cFJ1bGUuc3VjY2Vzc01lc3NhZ2UpIHtcbiAgICAgIHJldHVybiB2b2lkIDA7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmdldExvY2FsaXNlZFN0cmluZyhcbiAgICAgIHZvaWQgMCxcbiAgICAgIHZvaWQgMCxcbiAgICAgIGdyb3VwUnVsZS5zdWNjZXNzTWVzc2FnZVxuICAgICk7XG4gIH1cbiAgc2V0RmllbGRJbnZhbGlkKGtleSwgZmllbGRSdWxlKSB7XG4gICAgdGhpcy5maWVsZHNba2V5XS5pc1ZhbGlkID0gZmFsc2U7XG4gICAgdGhpcy5maWVsZHNba2V5XS5lcnJvck1lc3NhZ2UgPSB0aGlzLmdldEZpZWxkRXJyb3JNZXNzYWdlKFxuICAgICAgZmllbGRSdWxlLFxuICAgICAgdGhpcy5maWVsZHNba2V5XS5lbGVtXG4gICAgKTtcbiAgfVxuICBzZXRGaWVsZFZhbGlkKGtleSwgc3VjY2Vzc01lc3NhZ2UpIHtcbiAgICB0aGlzLmZpZWxkc1trZXldLmlzVmFsaWQgPSB0cnVlO1xuICAgIGlmIChzdWNjZXNzTWVzc2FnZSAhPT0gdm9pZCAwKSB7XG4gICAgICB0aGlzLmZpZWxkc1trZXldLnN1Y2Nlc3NNZXNzYWdlID0gdGhpcy5nZXRGaWVsZFN1Y2Nlc3NNZXNzYWdlKFxuICAgICAgICBzdWNjZXNzTWVzc2FnZSxcbiAgICAgICAgdGhpcy5maWVsZHNba2V5XS5lbGVtXG4gICAgICApO1xuICAgIH1cbiAgfVxuICBzZXRHcm91cEludmFsaWQoa2V5LCBncm91cFJ1bGUpIHtcbiAgICB0aGlzLmdyb3VwRmllbGRzW2tleV0uaXNWYWxpZCA9IGZhbHNlO1xuICAgIHRoaXMuZ3JvdXBGaWVsZHNba2V5XS5lcnJvck1lc3NhZ2UgPSB0aGlzLmdldEdyb3VwRXJyb3JNZXNzYWdlKGdyb3VwUnVsZSk7XG4gIH1cbiAgc2V0R3JvdXBWYWxpZChrZXksIGdyb3VwUnVsZSkge1xuICAgIHRoaXMuZ3JvdXBGaWVsZHNba2V5XS5pc1ZhbGlkID0gdHJ1ZTtcbiAgICB0aGlzLmdyb3VwRmllbGRzW2tleV0uc3VjY2Vzc01lc3NhZ2UgPSB0aGlzLmdldEdyb3VwU3VjY2Vzc01lc3NhZ2UoZ3JvdXBSdWxlKTtcbiAgfVxuICBnZXRFbGVtVmFsdWUoZWxlbSkge1xuICAgIHN3aXRjaCAoZWxlbS50eXBlKSB7XG4gICAgICBjYXNlIFwiY2hlY2tib3hcIjpcbiAgICAgICAgcmV0dXJuIGVsZW0uY2hlY2tlZDtcbiAgICAgIGNhc2UgXCJmaWxlXCI6XG4gICAgICAgIHJldHVybiBlbGVtLmZpbGVzO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGVsZW0udmFsdWU7XG4gICAgfVxuICB9XG4gIHZhbGlkYXRlR3JvdXBSdWxlKGtleSwgZWxlbXMsIGdyb3VwUnVsZSkge1xuICAgIHN3aXRjaCAoZ3JvdXBSdWxlLnJ1bGUpIHtcbiAgICAgIGNhc2UgR3JvdXBSdWxlcy5SZXF1aXJlZDoge1xuICAgICAgICBpZiAoZWxlbXMuZXZlcnkoKGVsZW0pID0+ICFlbGVtLmNoZWNrZWQpKSB7XG4gICAgICAgICAgdGhpcy5zZXRHcm91cEludmFsaWQoa2V5LCBncm91cFJ1bGUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuc2V0R3JvdXBWYWxpZChrZXksIGdyb3VwUnVsZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgdmFsaWRhdGVGaWVsZFJ1bGUoa2V5LCBlbGVtLCBmaWVsZFJ1bGUsIGFmdGVySW5wdXRDaGFuZ2VkID0gZmFsc2UpIHtcbiAgICBjb25zdCBydWxlVmFsdWUgPSBmaWVsZFJ1bGUudmFsdWU7XG4gICAgY29uc3QgZWxlbVZhbHVlID0gdGhpcy5nZXRFbGVtVmFsdWUoZWxlbSk7XG4gICAgaWYgKGZpZWxkUnVsZS5wbHVnaW4pIHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGZpZWxkUnVsZS5wbHVnaW4oXG4gICAgICAgIGVsZW1WYWx1ZSxcbiAgICAgICAgdGhpcy5nZXRDb21wYXRpYmxlRmllbGRzKClcbiAgICAgICk7XG4gICAgICBpZiAoIXJlc3VsdCkge1xuICAgICAgICB0aGlzLnNldEZpZWxkSW52YWxpZChrZXksIGZpZWxkUnVsZSk7XG4gICAgICB9XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHN3aXRjaCAoZmllbGRSdWxlLnJ1bGUpIHtcbiAgICAgIGNhc2UgUnVsZXMuUmVxdWlyZWQ6IHtcbiAgICAgICAgaWYgKGlzRW1wdHkoZWxlbVZhbHVlKSkge1xuICAgICAgICAgIHRoaXMuc2V0RmllbGRJbnZhbGlkKGtleSwgZmllbGRSdWxlKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgUnVsZXMuRW1haWw6IHtcbiAgICAgICAgaWYgKGlzSW52YWxpZE9yRW1wdHlTdHJpbmcoZWxlbVZhbHVlKSkge1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGlmICghaXNFbWFpbChlbGVtVmFsdWUpKSB7XG4gICAgICAgICAgdGhpcy5zZXRGaWVsZEludmFsaWQoa2V5LCBmaWVsZFJ1bGUpO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBSdWxlcy5NYXhMZW5ndGg6IHtcbiAgICAgICAgaWYgKHJ1bGVWYWx1ZSA9PT0gdm9pZCAwKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihcbiAgICAgICAgICAgIGBWYWx1ZSBmb3IgJHtmaWVsZFJ1bGUucnVsZX0gcnVsZSBmb3IgWyR7a2V5fV0gZmllbGQgaXMgbm90IGRlZmluZWQuIFRoZSBmaWVsZCB3aWxsIGJlIGFsd2F5cyBpbnZhbGlkLmBcbiAgICAgICAgICApO1xuICAgICAgICAgIHRoaXMuc2V0RmllbGRJbnZhbGlkKGtleSwgZmllbGRSdWxlKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIHJ1bGVWYWx1ZSAhPT0gXCJudW1iZXJcIikge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgICAgICBgVmFsdWUgZm9yICR7ZmllbGRSdWxlLnJ1bGV9IHJ1bGUgZm9yIFske2tleX1dIHNob3VsZCBiZSBhIG51bWJlci4gVGhlIGZpZWxkIHdpbGwgYmUgYWx3YXlzIGludmFsaWQuYFxuICAgICAgICAgICk7XG4gICAgICAgICAgdGhpcy5zZXRGaWVsZEludmFsaWQoa2V5LCBmaWVsZFJ1bGUpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc0ludmFsaWRPckVtcHR5U3RyaW5nKGVsZW1WYWx1ZSkpIHtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNMZW5ndGhNb3JlVGhhbk1heChlbGVtVmFsdWUsIHJ1bGVWYWx1ZSkpIHtcbiAgICAgICAgICB0aGlzLnNldEZpZWxkSW52YWxpZChrZXksIGZpZWxkUnVsZSk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIFJ1bGVzLk1pbkxlbmd0aDoge1xuICAgICAgICBpZiAocnVsZVZhbHVlID09PSB2b2lkIDApIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKFxuICAgICAgICAgICAgYFZhbHVlIGZvciAke2ZpZWxkUnVsZS5ydWxlfSBydWxlIGZvciBbJHtrZXl9XSBmaWVsZCBpcyBub3QgZGVmaW5lZC4gVGhlIGZpZWxkIHdpbGwgYmUgYWx3YXlzIGludmFsaWQuYFxuICAgICAgICAgICk7XG4gICAgICAgICAgdGhpcy5zZXRGaWVsZEludmFsaWQoa2V5LCBmaWVsZFJ1bGUpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgcnVsZVZhbHVlICE9PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihcbiAgICAgICAgICAgIGBWYWx1ZSBmb3IgJHtmaWVsZFJ1bGUucnVsZX0gcnVsZSBmb3IgWyR7a2V5fV0gc2hvdWxkIGJlIGEgbnVtYmVyLiBUaGUgZmllbGQgd2lsbCBiZSBhbHdheXMgaW52YWxpZC5gXG4gICAgICAgICAgKTtcbiAgICAgICAgICB0aGlzLnNldEZpZWxkSW52YWxpZChrZXksIGZpZWxkUnVsZSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzSW52YWxpZE9yRW1wdHlTdHJpbmcoZWxlbVZhbHVlKSkge1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc0xlbmd0aExlc3NUaGFuTWluKGVsZW1WYWx1ZSwgcnVsZVZhbHVlKSkge1xuICAgICAgICAgIHRoaXMuc2V0RmllbGRJbnZhbGlkKGtleSwgZmllbGRSdWxlKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgUnVsZXMuUGFzc3dvcmQ6IHtcbiAgICAgICAgaWYgKGlzSW52YWxpZE9yRW1wdHlTdHJpbmcoZWxlbVZhbHVlKSkge1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGlmICghaXNQYXNzd29yZChlbGVtVmFsdWUpKSB7XG4gICAgICAgICAgdGhpcy5zZXRGaWVsZEludmFsaWQoa2V5LCBmaWVsZFJ1bGUpO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBSdWxlcy5TdHJvbmdQYXNzd29yZDoge1xuICAgICAgICBpZiAoaXNJbnZhbGlkT3JFbXB0eVN0cmluZyhlbGVtVmFsdWUpKSB7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFpc1N0cm9uZ1Bhc3N3b3JkKGVsZW1WYWx1ZSkpIHtcbiAgICAgICAgICB0aGlzLnNldEZpZWxkSW52YWxpZChrZXksIGZpZWxkUnVsZSk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIFJ1bGVzLk51bWJlcjoge1xuICAgICAgICBpZiAoaXNJbnZhbGlkT3JFbXB0eVN0cmluZyhlbGVtVmFsdWUpKSB7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFpc051bWJlcihlbGVtVmFsdWUpKSB7XG4gICAgICAgICAgdGhpcy5zZXRGaWVsZEludmFsaWQoa2V5LCBmaWVsZFJ1bGUpO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBSdWxlcy5JbnRlZ2VyOiB7XG4gICAgICAgIGlmIChpc0ludmFsaWRPckVtcHR5U3RyaW5nKGVsZW1WYWx1ZSkpIHtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWlzSW50ZWdlcihlbGVtVmFsdWUpKSB7XG4gICAgICAgICAgdGhpcy5zZXRGaWVsZEludmFsaWQoa2V5LCBmaWVsZFJ1bGUpO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBSdWxlcy5NYXhOdW1iZXI6IHtcbiAgICAgICAgaWYgKHJ1bGVWYWx1ZSA9PT0gdm9pZCAwKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihcbiAgICAgICAgICAgIGBWYWx1ZSBmb3IgJHtmaWVsZFJ1bGUucnVsZX0gcnVsZSBmb3IgWyR7a2V5fV0gZmllbGQgaXMgbm90IGRlZmluZWQuIFRoZSBmaWVsZCB3aWxsIGJlIGFsd2F5cyBpbnZhbGlkLmBcbiAgICAgICAgICApO1xuICAgICAgICAgIHRoaXMuc2V0RmllbGRJbnZhbGlkKGtleSwgZmllbGRSdWxlKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIHJ1bGVWYWx1ZSAhPT0gXCJudW1iZXJcIikge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgICAgICBgVmFsdWUgZm9yICR7ZmllbGRSdWxlLnJ1bGV9IHJ1bGUgZm9yIFske2tleX1dIGZpZWxkIHNob3VsZCBiZSBhIG51bWJlci4gVGhlIGZpZWxkIHdpbGwgYmUgYWx3YXlzIGludmFsaWQuYFxuICAgICAgICAgICk7XG4gICAgICAgICAgdGhpcy5zZXRGaWVsZEludmFsaWQoa2V5LCBmaWVsZFJ1bGUpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc0ludmFsaWRPckVtcHR5U3RyaW5nKGVsZW1WYWx1ZSkpIHtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBudW0gPSArZWxlbVZhbHVlO1xuICAgICAgICBpZiAoTnVtYmVyLmlzTmFOKG51bSkgfHwgaXNOdW1iZXJNb3JlVGhhbk1heChudW0sIHJ1bGVWYWx1ZSkpIHtcbiAgICAgICAgICB0aGlzLnNldEZpZWxkSW52YWxpZChrZXksIGZpZWxkUnVsZSk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIFJ1bGVzLk1pbk51bWJlcjoge1xuICAgICAgICBpZiAocnVsZVZhbHVlID09PSB2b2lkIDApIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKFxuICAgICAgICAgICAgYFZhbHVlIGZvciAke2ZpZWxkUnVsZS5ydWxlfSBydWxlIGZvciBbJHtrZXl9XSBmaWVsZCBpcyBub3QgZGVmaW5lZC4gVGhlIGZpZWxkIHdpbGwgYmUgYWx3YXlzIGludmFsaWQuYFxuICAgICAgICAgICk7XG4gICAgICAgICAgdGhpcy5zZXRGaWVsZEludmFsaWQoa2V5LCBmaWVsZFJ1bGUpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgcnVsZVZhbHVlICE9PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihcbiAgICAgICAgICAgIGBWYWx1ZSBmb3IgJHtmaWVsZFJ1bGUucnVsZX0gcnVsZSBmb3IgWyR7a2V5fV0gZmllbGQgc2hvdWxkIGJlIGEgbnVtYmVyLiBUaGUgZmllbGQgd2lsbCBiZSBhbHdheXMgaW52YWxpZC5gXG4gICAgICAgICAgKTtcbiAgICAgICAgICB0aGlzLnNldEZpZWxkSW52YWxpZChrZXksIGZpZWxkUnVsZSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzSW52YWxpZE9yRW1wdHlTdHJpbmcoZWxlbVZhbHVlKSkge1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG51bSA9ICtlbGVtVmFsdWU7XG4gICAgICAgIGlmIChOdW1iZXIuaXNOYU4obnVtKSB8fCBpc051bWJlckxlc3NUaGFuTWluKG51bSwgcnVsZVZhbHVlKSkge1xuICAgICAgICAgIHRoaXMuc2V0RmllbGRJbnZhbGlkKGtleSwgZmllbGRSdWxlKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgUnVsZXMuQ3VzdG9tUmVnZXhwOiB7XG4gICAgICAgIGlmIChydWxlVmFsdWUgPT09IHZvaWQgMCkge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgICAgICBgVmFsdWUgZm9yICR7ZmllbGRSdWxlLnJ1bGV9IHJ1bGUgZm9yIFske2tleX1dIGZpZWxkIGlzIG5vdCBkZWZpbmVkLiBUaGlzIGZpZWxkIHdpbGwgYmUgYWx3YXlzIGludmFsaWQuYFxuICAgICAgICAgICk7XG4gICAgICAgICAgdGhpcy5zZXRGaWVsZEludmFsaWQoa2V5LCBmaWVsZFJ1bGUpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBsZXQgcmVnZXhwO1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHJlZ2V4cCA9IG5ldyBSZWdFeHAocnVsZVZhbHVlKTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgICAgICBgVmFsdWUgZm9yICR7ZmllbGRSdWxlLnJ1bGV9IHJ1bGUgZm9yIFske2tleX1dIHNob3VsZCBiZSBhIHZhbGlkIHJlZ2V4cC4gVGhpcyBmaWVsZCB3aWxsIGJlIGFsd2F5cyBpbnZhbGlkLmBcbiAgICAgICAgICApO1xuICAgICAgICAgIHRoaXMuc2V0RmllbGRJbnZhbGlkKGtleSwgZmllbGRSdWxlKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBzdHIgPSBTdHJpbmcoZWxlbVZhbHVlKTtcbiAgICAgICAgaWYgKHN0ciAhPT0gXCJcIiAmJiAhcmVnZXhwLnRlc3Qoc3RyKSkge1xuICAgICAgICAgIHRoaXMuc2V0RmllbGRJbnZhbGlkKGtleSwgZmllbGRSdWxlKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgUnVsZXMuTWluRmlsZXNDb3VudDoge1xuICAgICAgICBpZiAocnVsZVZhbHVlID09PSB2b2lkIDApIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKFxuICAgICAgICAgICAgYFZhbHVlIGZvciAke2ZpZWxkUnVsZS5ydWxlfSBydWxlIGZvciBbJHtrZXl9XSBmaWVsZCBpcyBub3QgZGVmaW5lZC4gVGhpcyBmaWVsZCB3aWxsIGJlIGFsd2F5cyBpbnZhbGlkLmBcbiAgICAgICAgICApO1xuICAgICAgICAgIHRoaXMuc2V0RmllbGRJbnZhbGlkKGtleSwgZmllbGRSdWxlKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIHJ1bGVWYWx1ZSAhPT0gXCJudW1iZXJcIikge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgICAgICBgVmFsdWUgZm9yICR7ZmllbGRSdWxlLnJ1bGV9IHJ1bGUgZm9yIFske2tleX1dIGZpZWxkIHNob3VsZCBiZSBhIG51bWJlci4gVGhlIGZpZWxkIHdpbGwgYmUgYWx3YXlzIGludmFsaWQuYFxuICAgICAgICAgICk7XG4gICAgICAgICAgdGhpcy5zZXRGaWVsZEludmFsaWQoa2V5LCBmaWVsZFJ1bGUpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGlmIChOdW1iZXIuaXNGaW5pdGUoZWxlbVZhbHVlID09IG51bGwgPyB2b2lkIDAgOiBlbGVtVmFsdWUubGVuZ3RoKSAmJiBlbGVtVmFsdWUubGVuZ3RoIDwgcnVsZVZhbHVlKSB7XG4gICAgICAgICAgdGhpcy5zZXRGaWVsZEludmFsaWQoa2V5LCBmaWVsZFJ1bGUpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBSdWxlcy5NYXhGaWxlc0NvdW50OiB7XG4gICAgICAgIGlmIChydWxlVmFsdWUgPT09IHZvaWQgMCkge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgICAgICBgVmFsdWUgZm9yICR7ZmllbGRSdWxlLnJ1bGV9IHJ1bGUgZm9yIFske2tleX1dIGZpZWxkIGlzIG5vdCBkZWZpbmVkLiBUaGlzIGZpZWxkIHdpbGwgYmUgYWx3YXlzIGludmFsaWQuYFxuICAgICAgICAgICk7XG4gICAgICAgICAgdGhpcy5zZXRGaWVsZEludmFsaWQoa2V5LCBmaWVsZFJ1bGUpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgcnVsZVZhbHVlICE9PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihcbiAgICAgICAgICAgIGBWYWx1ZSBmb3IgJHtmaWVsZFJ1bGUucnVsZX0gcnVsZSBmb3IgWyR7a2V5fV0gZmllbGQgc2hvdWxkIGJlIGEgbnVtYmVyLiBUaGUgZmllbGQgd2lsbCBiZSBhbHdheXMgaW52YWxpZC5gXG4gICAgICAgICAgKTtcbiAgICAgICAgICB0aGlzLnNldEZpZWxkSW52YWxpZChrZXksIGZpZWxkUnVsZSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKE51bWJlci5pc0Zpbml0ZShlbGVtVmFsdWUgPT0gbnVsbCA/IHZvaWQgMCA6IGVsZW1WYWx1ZS5sZW5ndGgpICYmIGVsZW1WYWx1ZS5sZW5ndGggPiBydWxlVmFsdWUpIHtcbiAgICAgICAgICB0aGlzLnNldEZpZWxkSW52YWxpZChrZXksIGZpZWxkUnVsZSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIFJ1bGVzLkZpbGVzOiB7XG4gICAgICAgIGlmIChydWxlVmFsdWUgPT09IHZvaWQgMCkge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgICAgICBgVmFsdWUgZm9yICR7ZmllbGRSdWxlLnJ1bGV9IHJ1bGUgZm9yIFske2tleX1dIGZpZWxkIGlzIG5vdCBkZWZpbmVkLiBUaGlzIGZpZWxkIHdpbGwgYmUgYWx3YXlzIGludmFsaWQuYFxuICAgICAgICAgICk7XG4gICAgICAgICAgdGhpcy5zZXRGaWVsZEludmFsaWQoa2V5LCBmaWVsZFJ1bGUpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIHJ1bGVWYWx1ZSAhPT0gXCJvYmplY3RcIikge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgICAgICBgVmFsdWUgZm9yICR7ZmllbGRSdWxlLnJ1bGV9IHJ1bGUgZm9yIFske2tleX1dIGZpZWxkIHNob3VsZCBiZSBhbiBvYmplY3QuIFRoaXMgZmllbGQgd2lsbCBiZSBhbHdheXMgaW52YWxpZC5gXG4gICAgICAgICAgKTtcbiAgICAgICAgICB0aGlzLnNldEZpZWxkSW52YWxpZChrZXksIGZpZWxkUnVsZSk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGZpbGVzQ29uZmlnID0gcnVsZVZhbHVlLmZpbGVzO1xuICAgICAgICBpZiAodHlwZW9mIGZpbGVzQ29uZmlnICE9PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihcbiAgICAgICAgICAgIGBWYWx1ZSBmb3IgJHtmaWVsZFJ1bGUucnVsZX0gcnVsZSBmb3IgWyR7a2V5fV0gZmllbGQgc2hvdWxkIGJlIGFuIG9iamVjdCB3aXRoIGZpbGVzIGFycmF5LiBUaGlzIGZpZWxkIHdpbGwgYmUgYWx3YXlzIGludmFsaWQuYFxuICAgICAgICAgICk7XG4gICAgICAgICAgdGhpcy5zZXRGaWVsZEludmFsaWQoa2V5LCBmaWVsZFJ1bGUpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBpc0ZpbGVQcm9wc0ludmFsaWQgPSAoZmlsZSwgZmlsZUNvbmZpZykgPT4ge1xuICAgICAgICAgIGNvbnN0IG1pblNpemVJbnZhbGlkID0gTnVtYmVyLmlzRmluaXRlKGZpbGVDb25maWcubWluU2l6ZSkgJiYgZmlsZS5zaXplIDwgZmlsZUNvbmZpZy5taW5TaXplO1xuICAgICAgICAgIGNvbnN0IG1heFNpemVJbnZhbGlkID0gTnVtYmVyLmlzRmluaXRlKGZpbGVDb25maWcubWF4U2l6ZSkgJiYgZmlsZS5zaXplID4gZmlsZUNvbmZpZy5tYXhTaXplO1xuICAgICAgICAgIGNvbnN0IG5hbWVJbnZhbGlkID0gQXJyYXkuaXNBcnJheShmaWxlQ29uZmlnLm5hbWVzKSAmJiAhZmlsZUNvbmZpZy5uYW1lcy5pbmNsdWRlcyhmaWxlLm5hbWUpO1xuICAgICAgICAgIGNvbnN0IGV4dEludmFsaWQgPSBBcnJheS5pc0FycmF5KGZpbGVDb25maWcuZXh0ZW5zaW9ucykgJiYgIWZpbGVDb25maWcuZXh0ZW5zaW9ucy5pbmNsdWRlcyhcbiAgICAgICAgICAgIGZpbGUubmFtZS5zcGxpdChcIi5cIilbZmlsZS5uYW1lLnNwbGl0KFwiLlwiKS5sZW5ndGggLSAxXVxuICAgICAgICAgICk7XG4gICAgICAgICAgY29uc3QgdHlwZUludmFsaWQgPSBBcnJheS5pc0FycmF5KGZpbGVDb25maWcudHlwZXMpICYmICFmaWxlQ29uZmlnLnR5cGVzLmluY2x1ZGVzKGZpbGUudHlwZSk7XG4gICAgICAgICAgcmV0dXJuIG1pblNpemVJbnZhbGlkIHx8IG1heFNpemVJbnZhbGlkIHx8IG5hbWVJbnZhbGlkIHx8IGV4dEludmFsaWQgfHwgdHlwZUludmFsaWQ7XG4gICAgICAgIH07XG4gICAgICAgIGlmICh0eXBlb2YgZWxlbVZhbHVlID09PSBcIm9iamVjdFwiICYmIGVsZW1WYWx1ZSAhPT0gbnVsbCkge1xuICAgICAgICAgIGZvciAobGV0IGZpbGVJZHggPSAwLCBsZW4gPSBlbGVtVmFsdWUubGVuZ3RoOyBmaWxlSWR4IDwgbGVuOyArK2ZpbGVJZHgpIHtcbiAgICAgICAgICAgIGNvbnN0IGZpbGUgPSBlbGVtVmFsdWUuaXRlbShmaWxlSWR4KTtcbiAgICAgICAgICAgIGlmICghZmlsZSkge1xuICAgICAgICAgICAgICB0aGlzLnNldEZpZWxkSW52YWxpZChrZXksIGZpZWxkUnVsZSk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgZmlsZXNJbnZhbGlkID0gaXNGaWxlUHJvcHNJbnZhbGlkKGZpbGUsIGZpbGVzQ29uZmlnKTtcbiAgICAgICAgICAgIGlmIChmaWxlc0ludmFsaWQpIHtcbiAgICAgICAgICAgICAgdGhpcy5zZXRGaWVsZEludmFsaWQoa2V5LCBmaWVsZFJ1bGUpO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBkZWZhdWx0OiB7XG4gICAgICAgIGlmICh0eXBlb2YgZmllbGRSdWxlLnZhbGlkYXRvciAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihcbiAgICAgICAgICAgIGBWYWxpZGF0b3IgZm9yIGN1c3RvbSBydWxlIGZvciBbJHtrZXl9XSBmaWVsZCBzaG91bGQgYmUgYSBmdW5jdGlvbi4gVGhpcyBmaWVsZCB3aWxsIGJlIGFsd2F5cyBpbnZhbGlkLmBcbiAgICAgICAgICApO1xuICAgICAgICAgIHRoaXMuc2V0RmllbGRJbnZhbGlkKGtleSwgZmllbGRSdWxlKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcmVzdWx0ID0gZmllbGRSdWxlLnZhbGlkYXRvcihcbiAgICAgICAgICBlbGVtVmFsdWUsXG4gICAgICAgICAgdGhpcy5nZXRDb21wYXRpYmxlRmllbGRzKClcbiAgICAgICAgKTtcbiAgICAgICAgaWYgKHR5cGVvZiByZXN1bHQgIT09IFwiYm9vbGVhblwiICYmIHR5cGVvZiByZXN1bHQgIT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgICAgICBgVmFsaWRhdG9yIHJldHVybiB2YWx1ZSBmb3IgWyR7a2V5fV0gZmllbGQgc2hvdWxkIGJlIGJvb2xlYW4gb3IgZnVuY3Rpb24uIEl0IHdpbGwgYmUgY2FzdCB0byBib29sZWFuLmBcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgcmVzdWx0ID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICBpZiAoYWZ0ZXJJbnB1dENoYW5nZWQpIHtcbiAgICAgICAgICAgIHRoaXMuZmllbGRzW2tleV0uYXN5bmNDaGVja1BlbmRpbmcgPSB0cnVlO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmZpZWxkc1trZXldLmFzeW5jQ2hlY2tQZW5kaW5nID0gZmFsc2U7XG4gICAgICAgICAgICBjb25zdCBwcm9taXNlID0gcmVzdWx0KCk7XG4gICAgICAgICAgICBpZiAoIWlzUHJvbWlzZShwcm9taXNlKSkge1xuICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFxuICAgICAgICAgICAgICAgIGBWYWxpZGF0b3IgZnVuY3Rpb24gZm9yIGN1c3RvbSBydWxlIGZvciBbJHtrZXl9XSBmaWVsZCBzaG91bGQgcmV0dXJuIGEgUHJvbWlzZS4gVGhpcyBmaWVsZCB3aWxsIGJlIGFsd2F5cyBpbnZhbGlkLmBcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgdGhpcy5zZXRGaWVsZEludmFsaWQoa2V5LCBmaWVsZFJ1bGUpO1xuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcHJvbWlzZS50aGVuKChyZXNwKSA9PiB7XG4gICAgICAgICAgICAgIGlmICghcmVzcCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0RmllbGRJbnZhbGlkKGtleSwgZmllbGRSdWxlKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSkuY2F0Y2goKCkgPT4ge1xuICAgICAgICAgICAgICB0aGlzLnNldEZpZWxkSW52YWxpZChrZXksIGZpZWxkUnVsZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFyZXN1bHQpIHtcbiAgICAgICAgICB0aGlzLnNldEZpZWxkSW52YWxpZChrZXksIGZpZWxkUnVsZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgaXNGb3JtVmFsaWQoKSB7XG4gICAgbGV0IGlzVmFsaWQgPSB0cnVlO1xuICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSBPYmplY3QudmFsdWVzKHRoaXMuZmllbGRzKS5sZW5ndGg7IGkgPCBsZW47ICsraSkge1xuICAgICAgY29uc3QgaXRlbSA9IE9iamVjdC52YWx1ZXModGhpcy5maWVsZHMpW2ldO1xuICAgICAgaWYgKGl0ZW0uaXNWYWxpZCA9PT0gdm9pZCAwKSB7XG4gICAgICAgIGlzVmFsaWQgPSB2b2lkIDA7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW0uaXNWYWxpZCA9PT0gZmFsc2UpIHtcbiAgICAgICAgaXNWYWxpZCA9IGZhbHNlO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IE9iamVjdC52YWx1ZXModGhpcy5ncm91cEZpZWxkcykubGVuZ3RoOyBpIDwgbGVuOyArK2kpIHtcbiAgICAgIGNvbnN0IGl0ZW0gPSBPYmplY3QudmFsdWVzKHRoaXMuZ3JvdXBGaWVsZHMpW2ldO1xuICAgICAgaWYgKGl0ZW0uaXNWYWxpZCA9PT0gdm9pZCAwKSB7XG4gICAgICAgIGlzVmFsaWQgPSB2b2lkIDA7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW0uaXNWYWxpZCA9PT0gZmFsc2UpIHtcbiAgICAgICAgaXNWYWxpZCA9IGZhbHNlO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGlzVmFsaWQ7XG4gIH1cbiAgdmFsaWRhdGVGaWVsZChrZXksIGFmdGVySW5wdXRDaGFuZ2VkID0gZmFsc2UpIHtcbiAgICB2YXIgX2E7XG4gICAgY29uc3QgZmllbGQgPSB0aGlzLmZpZWxkc1trZXldO1xuICAgIGZpZWxkLmlzVmFsaWQgPSB0cnVlO1xuICAgIGNvbnN0IHByb21pc2VzID0gW107XG4gICAgWy4uLmZpZWxkLnJ1bGVzXS5yZXZlcnNlKCkuZm9yRWFjaCgocnVsZSkgPT4ge1xuICAgICAgY29uc3QgcmVzID0gdGhpcy52YWxpZGF0ZUZpZWxkUnVsZShcbiAgICAgICAga2V5LFxuICAgICAgICBmaWVsZC5lbGVtLFxuICAgICAgICBydWxlLFxuICAgICAgICBhZnRlcklucHV0Q2hhbmdlZFxuICAgICAgKTtcbiAgICAgIGlmIChpc1Byb21pc2UocmVzKSkge1xuICAgICAgICBwcm9taXNlcy5wdXNoKHJlcyk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgaWYgKGZpZWxkLmlzVmFsaWQpIHtcbiAgICAgIHRoaXMuc2V0RmllbGRWYWxpZChrZXksIChfYSA9IGZpZWxkLmNvbmZpZykgPT0gbnVsbCA/IHZvaWQgMCA6IF9hLnN1Y2Nlc3NNZXNzYWdlKTtcbiAgICB9XG4gICAgcmV0dXJuIFByb21pc2UuYWxsU2V0dGxlZChwcm9taXNlcykuZmluYWxseSgoKSA9PiB7XG4gICAgICB2YXIgX2EyO1xuICAgICAgaWYgKGFmdGVySW5wdXRDaGFuZ2VkKSB7XG4gICAgICAgIChfYTIgPSB0aGlzLm9uVmFsaWRhdGVDYWxsYmFjaykgPT0gbnVsbCA/IHZvaWQgMCA6IF9hMi5jYWxsKHRoaXMsIHtcbiAgICAgICAgICBpc1ZhbGlkOiB0aGlzLmlzRm9ybVZhbGlkKCksXG4gICAgICAgICAgaXNTdWJtaXR0ZWQ6IHRoaXMuaXNTdWJtaXR0ZWQsXG4gICAgICAgICAgZmllbGRzOiB0aGlzLmdldENvbXBhdGlibGVGaWVsZHMoKSxcbiAgICAgICAgICBncm91cHM6IHsgLi4udGhpcy5ncm91cEZpZWxkcyB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIHJldmFsaWRhdGVGaWVsZChmaWVsZFNlbGVjdG9yKSB7XG4gICAgaWYgKHR5cGVvZiBmaWVsZFNlbGVjdG9yICE9PSBcInN0cmluZ1wiICYmICFpc0VsZW1lbnQoZmllbGRTZWxlY3RvcikpIHtcbiAgICAgIHRocm93IEVycm9yKFxuICAgICAgICBgRmllbGQgc2VsZWN0b3IgaXMgbm90IHZhbGlkLiBQbGVhc2Ugc3BlY2lmeSBhIHN0cmluZyBzZWxlY3RvciBvciBhIHZhbGlkIERPTSBlbGVtZW50LmBcbiAgICAgICk7XG4gICAgfVxuICAgIGNvbnN0IGtleSA9IHRoaXMuZ2V0S2V5QnlGaWVsZFNlbGVjdG9yKGZpZWxkU2VsZWN0b3IpO1xuICAgIGlmICgha2V5IHx8ICF0aGlzLmZpZWxkc1trZXldKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGBGaWVsZCBub3QgZm91bmQuIENoZWNrIHRoZSBmaWVsZCBzZWxlY3Rvci5gKTtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdCgpO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgIHRoaXMudmFsaWRhdGVGaWVsZChrZXksIHRydWUpLmZpbmFsbHkoKCkgPT4ge1xuICAgICAgICB0aGlzLmNsZWFyRmllbGRTdHlsZShrZXkpO1xuICAgICAgICB0aGlzLmNsZWFyRmllbGRMYWJlbChrZXkpO1xuICAgICAgICB0aGlzLnJlbmRlckZpZWxkRXJyb3Ioa2V5LCB0cnVlKTtcbiAgICAgICAgcmVzb2x2ZSghIXRoaXMuZmllbGRzW2tleV0uaXNWYWxpZCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuICByZXZhbGlkYXRlR3JvdXAoZ3JvdXBTZWxlY3Rvcikge1xuICAgIGlmICh0eXBlb2YgZ3JvdXBTZWxlY3RvciAhPT0gXCJzdHJpbmdcIiAmJiAhaXNFbGVtZW50KGdyb3VwU2VsZWN0b3IpKSB7XG4gICAgICB0aHJvdyBFcnJvcihcbiAgICAgICAgYEdyb3VwIHNlbGVjdG9yIGlzIG5vdCB2YWxpZC4gUGxlYXNlIHNwZWNpZnkgYSBzdHJpbmcgc2VsZWN0b3Igb3IgYSB2YWxpZCBET00gZWxlbWVudC5gXG4gICAgICApO1xuICAgIH1cbiAgICBjb25zdCBrZXkgPSB0aGlzLmdldEtleUJ5RmllbGRTZWxlY3Rvcihncm91cFNlbGVjdG9yKTtcbiAgICBpZiAoIWtleSB8fCAhdGhpcy5ncm91cEZpZWxkc1trZXldKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGBHcm91cCBub3QgZm91bmQuIENoZWNrIHRoZSBncm91cCBzZWxlY3Rvci5gKTtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdCgpO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgIHRoaXMudmFsaWRhdGVHcm91cChrZXkpLmZpbmFsbHkoKCkgPT4ge1xuICAgICAgICB0aGlzLmNsZWFyRmllbGRMYWJlbChrZXkpO1xuICAgICAgICB0aGlzLnJlbmRlckdyb3VwRXJyb3Ioa2V5LCB0cnVlKTtcbiAgICAgICAgcmVzb2x2ZSghIXRoaXMuZ3JvdXBGaWVsZHNba2V5XS5pc1ZhbGlkKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG4gIHZhbGlkYXRlR3JvdXAoa2V5LCBhZnRlcklucHV0Q2hhbmdlZCA9IGZhbHNlKSB7XG4gICAgY29uc3QgZ3JvdXAgPSB0aGlzLmdyb3VwRmllbGRzW2tleV07XG4gICAgY29uc3QgcHJvbWlzZXMgPSBbXTtcbiAgICBbLi4uZ3JvdXAucnVsZXNdLnJldmVyc2UoKS5mb3JFYWNoKChydWxlKSA9PiB7XG4gICAgICBjb25zdCByZXMgPSB0aGlzLnZhbGlkYXRlR3JvdXBSdWxlKGtleSwgZ3JvdXAuZWxlbXMsIHJ1bGUpO1xuICAgICAgaWYgKGlzUHJvbWlzZShyZXMpKSB7XG4gICAgICAgIHByb21pc2VzLnB1c2gocmVzKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gUHJvbWlzZS5hbGxTZXR0bGVkKHByb21pc2VzKS5maW5hbGx5KCgpID0+IHtcbiAgICAgIHZhciBfYTtcbiAgICAgIGlmIChhZnRlcklucHV0Q2hhbmdlZCkge1xuICAgICAgICAoX2EgPSB0aGlzLm9uVmFsaWRhdGVDYWxsYmFjaykgPT0gbnVsbCA/IHZvaWQgMCA6IF9hLmNhbGwodGhpcywge1xuICAgICAgICAgIGlzVmFsaWQ6IHRoaXMuaXNGb3JtVmFsaWQoKSxcbiAgICAgICAgICBpc1N1Ym1pdHRlZDogdGhpcy5pc1N1Ym1pdHRlZCxcbiAgICAgICAgICBmaWVsZHM6IHRoaXMuZ2V0Q29tcGF0aWJsZUZpZWxkcygpLFxuICAgICAgICAgIGdyb3VwczogeyAuLi50aGlzLmdyb3VwRmllbGRzIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgZm9jdXNJbnZhbGlkRmllbGQoKSB7XG4gICAgZm9yIChjb25zdCBrZXkgaW4gdGhpcy5maWVsZHMpIHtcbiAgICAgIGNvbnN0IGZpZWxkID0gdGhpcy5maWVsZHNba2V5XTtcbiAgICAgIGlmICghZmllbGQuaXNWYWxpZCkge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IGZpZWxkLmVsZW0uZm9jdXMoKSwgMCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBhZnRlclN1Ym1pdFZhbGlkYXRpb24oZm9yY2VSZXZhbGlkYXRpb24gPSBmYWxzZSkge1xuICAgIHRoaXMucmVuZGVyRXJyb3JzKGZvcmNlUmV2YWxpZGF0aW9uKTtcbiAgICBpZiAodGhpcy5nbG9iYWxDb25maWcuZm9jdXNJbnZhbGlkRmllbGQpIHtcbiAgICAgIHRoaXMuZm9jdXNJbnZhbGlkRmllbGQoKTtcbiAgICB9XG4gIH1cbiAgdmFsaWRhdGUoZm9yY2VSZXZhbGlkYXRpb24gPSBmYWxzZSkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgY29uc3QgcHJvbWlzZXMgPSBbXTtcbiAgICAgIE9iamVjdC5rZXlzKHRoaXMuZmllbGRzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgY29uc3QgcHJvbWlzZSA9IHRoaXMudmFsaWRhdGVGaWVsZChrZXkpO1xuICAgICAgICBpZiAoaXNQcm9taXNlKHByb21pc2UpKSB7XG4gICAgICAgICAgcHJvbWlzZXMucHVzaChwcm9taXNlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBPYmplY3Qua2V5cyh0aGlzLmdyb3VwRmllbGRzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgY29uc3QgcHJvbWlzZSA9IHRoaXMudmFsaWRhdGVHcm91cChrZXkpO1xuICAgICAgICBpZiAoaXNQcm9taXNlKHByb21pc2UpKSB7XG4gICAgICAgICAgcHJvbWlzZXMucHVzaChwcm9taXNlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBQcm9taXNlLmFsbFNldHRsZWQocHJvbWlzZXMpLnRoZW4oKCkgPT4ge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIHRoaXMuYWZ0ZXJTdWJtaXRWYWxpZGF0aW9uKGZvcmNlUmV2YWxpZGF0aW9uKTtcbiAgICAgICAgKF9hID0gdGhpcy5vblZhbGlkYXRlQ2FsbGJhY2spID09IG51bGwgPyB2b2lkIDAgOiBfYS5jYWxsKHRoaXMsIHtcbiAgICAgICAgICBpc1ZhbGlkOiB0aGlzLmlzRm9ybVZhbGlkKCksXG4gICAgICAgICAgaXNTdWJtaXR0ZWQ6IHRoaXMuaXNTdWJtaXR0ZWQsXG4gICAgICAgICAgZmllbGRzOiB0aGlzLmdldENvbXBhdGlibGVGaWVsZHMoKSxcbiAgICAgICAgICBncm91cHM6IHsgLi4udGhpcy5ncm91cEZpZWxkcyB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXNvbHZlKCEhcHJvbWlzZXMubGVuZ3RoKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG4gIHJldmFsaWRhdGUoKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICB0aGlzLnZhbGlkYXRlSGFuZGxlcih2b2lkIDAsIHRydWUpLmZpbmFsbHkoKCkgPT4ge1xuICAgICAgICBpZiAodGhpcy5nbG9iYWxDb25maWcuZm9jdXNJbnZhbGlkRmllbGQpIHtcbiAgICAgICAgICB0aGlzLmZvY3VzSW52YWxpZEZpZWxkKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmVzb2x2ZSh0aGlzLmlzVmFsaWQpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbiAgdmFsaWRhdGVIYW5kbGVyKGV2LCBmb3JjZVJldmFsaWRhdGlvbiA9IGZhbHNlKSB7XG4gICAgaWYgKHRoaXMuZ2xvYmFsQ29uZmlnLmxvY2tGb3JtKSB7XG4gICAgICB0aGlzLmxvY2tGb3JtKCk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLnZhbGlkYXRlKGZvcmNlUmV2YWxpZGF0aW9uKS5maW5hbGx5KCgpID0+IHtcbiAgICAgIHZhciBfYSwgX2IsIF9jO1xuICAgICAgaWYgKHRoaXMuZ2xvYmFsQ29uZmlnLmxvY2tGb3JtKSB7XG4gICAgICAgIHRoaXMudW5sb2NrRm9ybSgpO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuaXNWYWxpZCkge1xuICAgICAgICAoX2EgPSB0aGlzLm9uU3VjY2Vzc0NhbGxiYWNrKSA9PSBudWxsID8gdm9pZCAwIDogX2EuY2FsbCh0aGlzLCBldik7XG4gICAgICAgIGlmICh0aGlzLmdsb2JhbENvbmZpZy5zdWJtaXRGb3JtQXV0b21hdGljYWxseSkge1xuICAgICAgICAgIChfYiA9IGV2ID09IG51bGwgPyB2b2lkIDAgOiBldi5jdXJyZW50VGFyZ2V0KSA9PSBudWxsID8gdm9pZCAwIDogX2Iuc3VibWl0KCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIChfYyA9IHRoaXMub25GYWlsQ2FsbGJhY2spID09IG51bGwgPyB2b2lkIDAgOiBfYy5jYWxsKHRoaXMsIHRoaXMuZ2V0Q29tcGF0aWJsZUZpZWxkcygpLCB0aGlzLmdyb3VwRmllbGRzKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICBzZXRGb3JtKGZvcm0pIHtcbiAgICB0aGlzLmZvcm0gPSBmb3JtO1xuICAgIHRoaXMuZm9ybS5zZXRBdHRyaWJ1dGUoXCJub3ZhbGlkYXRlXCIsIFwibm92YWxpZGF0ZVwiKTtcbiAgICB0aGlzLnJlbW92ZUxpc3RlbmVyKFwic3VibWl0XCIsIHRoaXMuZm9ybSwgdGhpcy5mb3JtU3VibWl0SGFuZGxlcik7XG4gICAgdGhpcy5hZGRMaXN0ZW5lcihcInN1Ym1pdFwiLCB0aGlzLmZvcm0sIHRoaXMuZm9ybVN1Ym1pdEhhbmRsZXIpO1xuICB9XG4gIGFkZExpc3RlbmVyKHR5cGUsIGVsZW0sIGhhbmRsZXIpIHtcbiAgICBlbGVtLmFkZEV2ZW50TGlzdGVuZXIodHlwZSwgaGFuZGxlcik7XG4gICAgdGhpcy5ldmVudExpc3RlbmVycy5wdXNoKHsgdHlwZSwgZWxlbSwgZnVuYzogaGFuZGxlciB9KTtcbiAgfVxuICByZW1vdmVMaXN0ZW5lcih0eXBlLCBlbGVtLCBoYW5kbGVyKSB7XG4gICAgZWxlbS5yZW1vdmVFdmVudExpc3RlbmVyKHR5cGUsIGhhbmRsZXIpO1xuICAgIHRoaXMuZXZlbnRMaXN0ZW5lcnMgPSB0aGlzLmV2ZW50TGlzdGVuZXJzLmZpbHRlcihcbiAgICAgIChpdGVtKSA9PiBpdGVtLnR5cGUgIT09IHR5cGUgfHwgaXRlbS5lbGVtICE9PSBlbGVtXG4gICAgKTtcbiAgfVxuICBhZGRGaWVsZChmaWVsZFNlbGVjdG9yLCBydWxlcywgY29uZmlnKSB7XG4gICAgaWYgKHR5cGVvZiBmaWVsZFNlbGVjdG9yICE9PSBcInN0cmluZ1wiICYmICFpc0VsZW1lbnQoZmllbGRTZWxlY3RvcikpIHtcbiAgICAgIHRocm93IEVycm9yKFxuICAgICAgICBgRmllbGQgc2VsZWN0b3IgaXMgbm90IHZhbGlkLiBQbGVhc2Ugc3BlY2lmeSBhIHN0cmluZyBzZWxlY3RvciBvciBhIHZhbGlkIERPTSBlbGVtZW50LmBcbiAgICAgICk7XG4gICAgfVxuICAgIGxldCBlbGVtO1xuICAgIGlmICh0eXBlb2YgZmllbGRTZWxlY3RvciA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgZWxlbSA9IHRoaXMuZm9ybS5xdWVyeVNlbGVjdG9yKGZpZWxkU2VsZWN0b3IpO1xuICAgIH0gZWxzZSB7XG4gICAgICBlbGVtID0gZmllbGRTZWxlY3RvcjtcbiAgICB9XG4gICAgaWYgKCFlbGVtKSB7XG4gICAgICB0aHJvdyBFcnJvcihcbiAgICAgICAgYEZpZWxkIGRvZXNuJ3QgZXhpc3QgaW4gdGhlIERPTSEgUGxlYXNlIGNoZWNrIHRoZSBmaWVsZCBzZWxlY3Rvci5gXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAoIUFycmF5LmlzQXJyYXkocnVsZXMpIHx8ICFydWxlcy5sZW5ndGgpIHtcbiAgICAgIHRocm93IEVycm9yKFxuICAgICAgICBgUnVsZXMgYXJndW1lbnQgc2hvdWxkIGJlIGFuIGFycmF5IGFuZCBzaG91bGQgY29udGFpbiBhdCBsZWFzdCAxIGVsZW1lbnQuYFxuICAgICAgKTtcbiAgICB9XG4gICAgcnVsZXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgaWYgKCEoXCJydWxlXCIgaW4gaXRlbSB8fCBcInZhbGlkYXRvclwiIGluIGl0ZW0gfHwgXCJwbHVnaW5cIiBpbiBpdGVtKSkge1xuICAgICAgICB0aHJvdyBFcnJvcihcbiAgICAgICAgICBgUnVsZXMgYXJndW1lbnQgbXVzdCBjb250YWluIGF0IGxlYXN0IG9uZSBydWxlIG9yIHZhbGlkYXRvciBwcm9wZXJ0eS5gXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICBpZiAoIWl0ZW0udmFsaWRhdG9yICYmICFpdGVtLnBsdWdpbiAmJiAoIWl0ZW0ucnVsZSB8fCAhT2JqZWN0LnZhbHVlcyhSdWxlcykuaW5jbHVkZXMoaXRlbS5ydWxlKSkpIHtcbiAgICAgICAgdGhyb3cgRXJyb3IoXG4gICAgICAgICAgYFJ1bGUgc2hvdWxkIGJlIG9uZSBvZiB0aGVzZSB0eXBlczogJHtPYmplY3QudmFsdWVzKFJ1bGVzKS5qb2luKFxuICAgICAgICAgICAgXCIsIFwiXG4gICAgICAgICAgKX0uIFByb3ZpZGVkIHZhbHVlOiAke2l0ZW0ucnVsZX1gXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgY29uc3Qga2V5ID0gdGhpcy5zZXRLZXlCeUZpZWxkU2VsZWN0b3IoZmllbGRTZWxlY3Rvcik7XG4gICAgdGhpcy5maWVsZHNba2V5XSA9IHtcbiAgICAgIGVsZW0sXG4gICAgICBydWxlcyxcbiAgICAgIGlzVmFsaWQ6IHZvaWQgMCxcbiAgICAgIHRvdWNoZWQ6IGZhbHNlLFxuICAgICAgY29uZmlnXG4gICAgfTtcbiAgICB0aGlzLnNldExpc3RlbmVycyhlbGVtKTtcbiAgICBpZiAodGhpcy5pc1N1Ym1pdHRlZCB8fCB0aGlzLmdsb2JhbENvbmZpZy52YWxpZGF0ZUJlZm9yZVN1Ym1pdHRpbmcpIHtcbiAgICAgIHRoaXMudmFsaWRhdGVGaWVsZChrZXkpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuICByZW1vdmVGaWVsZChmaWVsZFNlbGVjdG9yKSB7XG4gICAgaWYgKHR5cGVvZiBmaWVsZFNlbGVjdG9yICE9PSBcInN0cmluZ1wiICYmICFpc0VsZW1lbnQoZmllbGRTZWxlY3RvcikpIHtcbiAgICAgIHRocm93IEVycm9yKFxuICAgICAgICBgRmllbGQgc2VsZWN0b3IgaXMgbm90IHZhbGlkLiBQbGVhc2Ugc3BlY2lmeSBhIHN0cmluZyBzZWxlY3RvciBvciBhIHZhbGlkIERPTSBlbGVtZW50LmBcbiAgICAgICk7XG4gICAgfVxuICAgIGNvbnN0IGtleSA9IHRoaXMuZ2V0S2V5QnlGaWVsZFNlbGVjdG9yKGZpZWxkU2VsZWN0b3IpO1xuICAgIGlmICgha2V5IHx8ICF0aGlzLmZpZWxkc1trZXldKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGBGaWVsZCBub3QgZm91bmQuIENoZWNrIHRoZSBmaWVsZCBzZWxlY3Rvci5gKTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBjb25zdCB0eXBlID0gdGhpcy5nZXRMaXN0ZW5lclR5cGUodGhpcy5maWVsZHNba2V5XS5lbGVtLnR5cGUpO1xuICAgIHRoaXMucmVtb3ZlTGlzdGVuZXIodHlwZSwgdGhpcy5maWVsZHNba2V5XS5lbGVtLCB0aGlzLmhhbmRsZXJDaGFuZ2UpO1xuICAgIHRoaXMuY2xlYXJFcnJvcnMoKTtcbiAgICBkZWxldGUgdGhpcy5maWVsZHNba2V5XTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuICByZW1vdmVHcm91cChncm91cCkge1xuICAgIGlmICh0eXBlb2YgZ3JvdXAgIT09IFwic3RyaW5nXCIpIHtcbiAgICAgIHRocm93IEVycm9yKFxuICAgICAgICBgR3JvdXAgc2VsZWN0b3IgaXMgbm90IHZhbGlkLiBQbGVhc2Ugc3BlY2lmeSBhIHN0cmluZyBzZWxlY3Rvci5gXG4gICAgICApO1xuICAgIH1cbiAgICBjb25zdCBrZXkgPSB0aGlzLmdldEtleUJ5RmllbGRTZWxlY3Rvcihncm91cCk7XG4gICAgaWYgKCFrZXkgfHwgIXRoaXMuZ3JvdXBGaWVsZHNba2V5XSkge1xuICAgICAgY29uc29sZS5lcnJvcihgR3JvdXAgbm90IGZvdW5kLiBDaGVjayB0aGUgZ3JvdXAgc2VsZWN0b3IuYCk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgdGhpcy5ncm91cEZpZWxkc1trZXldLmVsZW1zLmZvckVhY2goKGVsZW0pID0+IHtcbiAgICAgIGNvbnN0IHR5cGUgPSB0aGlzLmdldExpc3RlbmVyVHlwZShlbGVtLnR5cGUpO1xuICAgICAgdGhpcy5yZW1vdmVMaXN0ZW5lcih0eXBlLCBlbGVtLCB0aGlzLmhhbmRsZXJDaGFuZ2UpO1xuICAgIH0pO1xuICAgIHRoaXMuY2xlYXJFcnJvcnMoKTtcbiAgICBkZWxldGUgdGhpcy5ncm91cEZpZWxkc1trZXldO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG4gIGFkZFJlcXVpcmVkR3JvdXAoZ3JvdXBGaWVsZCwgZXJyb3JNZXNzYWdlLCBjb25maWcsIHN1Y2Nlc3NNZXNzYWdlKSB7XG4gICAgaWYgKHR5cGVvZiBncm91cEZpZWxkICE9PSBcInN0cmluZ1wiICYmICFpc0VsZW1lbnQoZ3JvdXBGaWVsZCkpIHtcbiAgICAgIHRocm93IEVycm9yKFxuICAgICAgICBgR3JvdXAgc2VsZWN0b3IgaXMgbm90IHZhbGlkLiBQbGVhc2Ugc3BlY2lmeSBhIHN0cmluZyBzZWxlY3RvciBvciBhIHZhbGlkIERPTSBlbGVtZW50LmBcbiAgICAgICk7XG4gICAgfVxuICAgIGxldCBlbGVtO1xuICAgIGlmICh0eXBlb2YgZ3JvdXBGaWVsZCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgZWxlbSA9IHRoaXMuZm9ybS5xdWVyeVNlbGVjdG9yKGdyb3VwRmllbGQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBlbGVtID0gZ3JvdXBGaWVsZDtcbiAgICB9XG4gICAgaWYgKCFlbGVtKSB7XG4gICAgICB0aHJvdyBFcnJvcihgR3JvdXAgc2VsZWN0b3Igbm90IGZvdW5kISBQbGVhc2UgY2hlY2sgdGhlIGdyb3VwIHNlbGVjdG9yLmApO1xuICAgIH1cbiAgICBjb25zdCBpbnB1dHMgPSBlbGVtLnF1ZXJ5U2VsZWN0b3JBbGwoXCJpbnB1dFwiKTtcbiAgICBjb25zdCBjaGlsZHJlbklucHV0cyA9IEFycmF5LmZyb20oaW5wdXRzKS5maWx0ZXIoKGlucHV0KSA9PiB7XG4gICAgICBjb25zdCBwYXJlbnQgPSBnZXRDbG9zZXN0UGFyZW50KHRoaXMuZ3JvdXBGaWVsZHMsIGdldE5vZGVQYXJlbnRzKGlucHV0KSk7XG4gICAgICBpZiAoIXBhcmVudCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBwYXJlbnRbMV0uZWxlbXMuZmluZCgoZWxlbTIpID0+IGVsZW0yICE9PSBpbnB1dCk7XG4gICAgfSk7XG4gICAgY29uc3Qga2V5ID0gdGhpcy5zZXRLZXlCeUZpZWxkU2VsZWN0b3IoZ3JvdXBGaWVsZCk7XG4gICAgdGhpcy5ncm91cEZpZWxkc1trZXldID0ge1xuICAgICAgcnVsZXM6IFtcbiAgICAgICAge1xuICAgICAgICAgIHJ1bGU6IEdyb3VwUnVsZXMuUmVxdWlyZWQsXG4gICAgICAgICAgZXJyb3JNZXNzYWdlLFxuICAgICAgICAgIHN1Y2Nlc3NNZXNzYWdlXG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBncm91cEVsZW06IGVsZW0sXG4gICAgICBlbGVtczogY2hpbGRyZW5JbnB1dHMsXG4gICAgICB0b3VjaGVkOiBmYWxzZSxcbiAgICAgIGlzVmFsaWQ6IHZvaWQgMCxcbiAgICAgIGNvbmZpZ1xuICAgIH07XG4gICAgaW5wdXRzLmZvckVhY2goKGlucHV0KSA9PiB7XG4gICAgICB0aGlzLnNldExpc3RlbmVycyhpbnB1dCk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgZ2V0TGlzdGVuZXJUeXBlKHR5cGUpIHtcbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgIGNhc2UgXCJjaGVja2JveFwiOlxuICAgICAgY2FzZSBcInNlbGVjdC1vbmVcIjpcbiAgICAgIGNhc2UgXCJmaWxlXCI6XG4gICAgICBjYXNlIFwicmFkaW9cIjoge1xuICAgICAgICByZXR1cm4gXCJjaGFuZ2VcIjtcbiAgICAgIH1cbiAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgcmV0dXJuIFwiaW5wdXRcIjtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgc2V0TGlzdGVuZXJzKGVsZW0pIHtcbiAgICBjb25zdCB0eXBlID0gdGhpcy5nZXRMaXN0ZW5lclR5cGUoZWxlbS50eXBlKTtcbiAgICB0aGlzLnJlbW92ZUxpc3RlbmVyKHR5cGUsIGVsZW0sIHRoaXMuaGFuZGxlckNoYW5nZSk7XG4gICAgdGhpcy5hZGRMaXN0ZW5lcih0eXBlLCBlbGVtLCB0aGlzLmhhbmRsZXJDaGFuZ2UpO1xuICB9XG4gIGNsZWFyRmllbGRMYWJlbChrZXkpIHtcbiAgICB2YXIgX2EsIF9iO1xuICAgIChfYSA9IHRoaXMuZXJyb3JMYWJlbHNba2V5XSkgPT0gbnVsbCA/IHZvaWQgMCA6IF9hLnJlbW92ZSgpO1xuICAgIChfYiA9IHRoaXMuc3VjY2Vzc0xhYmVsc1trZXldKSA9PSBudWxsID8gdm9pZCAwIDogX2IucmVtb3ZlKCk7XG4gIH1cbiAgY2xlYXJGaWVsZFN0eWxlKGtleSkge1xuICAgIHZhciBfYSwgX2IsIF9jLCBfZDtcbiAgICBjb25zdCBmaWVsZCA9IHRoaXMuZmllbGRzW2tleV07XG4gICAgY29uc3QgZXJyb3JTdHlsZSA9ICgoX2EgPSBmaWVsZC5jb25maWcpID09IG51bGwgPyB2b2lkIDAgOiBfYS5lcnJvckZpZWxkU3R5bGUpIHx8IHRoaXMuZ2xvYmFsQ29uZmlnLmVycm9yRmllbGRTdHlsZTtcbiAgICBPYmplY3Qua2V5cyhlcnJvclN0eWxlKS5mb3JFYWNoKChrZXkyKSA9PiB7XG4gICAgICBmaWVsZC5lbGVtLnN0eWxlW2tleTJdID0gXCJcIjtcbiAgICB9KTtcbiAgICBjb25zdCBzdWNjZXNzU3R5bGUgPSAoKF9iID0gZmllbGQuY29uZmlnKSA9PSBudWxsID8gdm9pZCAwIDogX2Iuc3VjY2Vzc0ZpZWxkU3R5bGUpIHx8IHRoaXMuZ2xvYmFsQ29uZmlnLnN1Y2Nlc3NGaWVsZFN0eWxlIHx8IHt9O1xuICAgIE9iamVjdC5rZXlzKHN1Y2Nlc3NTdHlsZSkuZm9yRWFjaCgoa2V5MikgPT4ge1xuICAgICAgZmllbGQuZWxlbS5zdHlsZVtrZXkyXSA9IFwiXCI7XG4gICAgfSk7XG4gICAgZmllbGQuZWxlbS5jbGFzc0xpc3QucmVtb3ZlKFxuICAgICAgLi4uZ2V0Q2xhc3NMaXN0KFxuICAgICAgICAoKF9jID0gZmllbGQuY29uZmlnKSA9PSBudWxsID8gdm9pZCAwIDogX2MuZXJyb3JGaWVsZENzc0NsYXNzKSB8fCB0aGlzLmdsb2JhbENvbmZpZy5lcnJvckZpZWxkQ3NzQ2xhc3NcbiAgICAgICksXG4gICAgICAuLi5nZXRDbGFzc0xpc3QoXG4gICAgICAgICgoX2QgPSBmaWVsZC5jb25maWcpID09IG51bGwgPyB2b2lkIDAgOiBfZC5zdWNjZXNzRmllbGRDc3NDbGFzcykgfHwgdGhpcy5nbG9iYWxDb25maWcuc3VjY2Vzc0ZpZWxkQ3NzQ2xhc3NcbiAgICAgIClcbiAgICApO1xuICB9XG4gIGNsZWFyRXJyb3JzKCkge1xuICAgIHZhciBfYSwgX2I7XG4gICAgT2JqZWN0LmtleXModGhpcy5lcnJvckxhYmVscykuZm9yRWFjaChcbiAgICAgIChrZXkpID0+IHRoaXMuZXJyb3JMYWJlbHNba2V5XS5yZW1vdmUoKVxuICAgICk7XG4gICAgT2JqZWN0LmtleXModGhpcy5zdWNjZXNzTGFiZWxzKS5mb3JFYWNoKFxuICAgICAgKGtleSkgPT4gdGhpcy5zdWNjZXNzTGFiZWxzW2tleV0ucmVtb3ZlKClcbiAgICApO1xuICAgIGZvciAoY29uc3Qga2V5IGluIHRoaXMuZmllbGRzKSB7XG4gICAgICB0aGlzLmNsZWFyRmllbGRTdHlsZShrZXkpO1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IGtleSBpbiB0aGlzLmdyb3VwRmllbGRzKSB7XG4gICAgICBjb25zdCBncm91cCA9IHRoaXMuZ3JvdXBGaWVsZHNba2V5XTtcbiAgICAgIGNvbnN0IGVycm9yU3R5bGUgPSAoKF9hID0gZ3JvdXAuY29uZmlnKSA9PSBudWxsID8gdm9pZCAwIDogX2EuZXJyb3JGaWVsZFN0eWxlKSB8fCB0aGlzLmdsb2JhbENvbmZpZy5lcnJvckZpZWxkU3R5bGU7XG4gICAgICBPYmplY3Qua2V5cyhlcnJvclN0eWxlKS5mb3JFYWNoKChrZXkyKSA9PiB7XG4gICAgICAgIGdyb3VwLmVsZW1zLmZvckVhY2goKGVsZW0pID0+IHtcbiAgICAgICAgICB2YXIgX2EyO1xuICAgICAgICAgIGVsZW0uc3R5bGVba2V5Ml0gPSBcIlwiO1xuICAgICAgICAgIGVsZW0uY2xhc3NMaXN0LnJlbW92ZShcbiAgICAgICAgICAgIC4uLmdldENsYXNzTGlzdChcbiAgICAgICAgICAgICAgKChfYTIgPSBncm91cC5jb25maWcpID09IG51bGwgPyB2b2lkIDAgOiBfYTIuZXJyb3JGaWVsZENzc0NsYXNzKSB8fCB0aGlzLmdsb2JhbENvbmZpZy5lcnJvckZpZWxkQ3NzQ2xhc3NcbiAgICAgICAgICAgIClcbiAgICAgICAgICApO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgICAgY29uc3Qgc3VjY2Vzc1N0eWxlID0gKChfYiA9IGdyb3VwLmNvbmZpZykgPT0gbnVsbCA/IHZvaWQgMCA6IF9iLnN1Y2Nlc3NGaWVsZFN0eWxlKSB8fCB0aGlzLmdsb2JhbENvbmZpZy5zdWNjZXNzRmllbGRTdHlsZSB8fCB7fTtcbiAgICAgIE9iamVjdC5rZXlzKHN1Y2Nlc3NTdHlsZSkuZm9yRWFjaCgoa2V5MikgPT4ge1xuICAgICAgICBncm91cC5lbGVtcy5mb3JFYWNoKChlbGVtKSA9PiB7XG4gICAgICAgICAgdmFyIF9hMjtcbiAgICAgICAgICBlbGVtLnN0eWxlW2tleTJdID0gXCJcIjtcbiAgICAgICAgICBlbGVtLmNsYXNzTGlzdC5yZW1vdmUoXG4gICAgICAgICAgICAuLi5nZXRDbGFzc0xpc3QoXG4gICAgICAgICAgICAgICgoX2EyID0gZ3JvdXAuY29uZmlnKSA9PSBudWxsID8gdm9pZCAwIDogX2EyLnN1Y2Nlc3NGaWVsZENzc0NsYXNzKSB8fCB0aGlzLmdsb2JhbENvbmZpZy5zdWNjZXNzRmllbGRDc3NDbGFzc1xuICAgICAgICAgICAgKVxuICAgICAgICAgICk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuICAgIHRoaXMudG9vbHRpcHMgPSBbXTtcbiAgfVxuICBpc1Rvb2x0aXAoKSB7XG4gICAgcmV0dXJuICEhdGhpcy5nbG9iYWxDb25maWcudG9vbHRpcDtcbiAgfVxuICBsb2NrRm9ybSgpIHtcbiAgICBjb25zdCBlbGVtcyA9IHRoaXMuZm9ybS5xdWVyeVNlbGVjdG9yQWxsKFxuICAgICAgXCJpbnB1dCwgdGV4dGFyZWEsIGJ1dHRvbiwgc2VsZWN0XCJcbiAgICApO1xuICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSBlbGVtcy5sZW5ndGg7IGkgPCBsZW47ICsraSkge1xuICAgICAgZWxlbXNbaV0uc2V0QXR0cmlidXRlKFxuICAgICAgICBcImRhdGEtanVzdC12YWxpZGF0ZS1mYWxsYmFjay1kaXNhYmxlZFwiLFxuICAgICAgICBlbGVtc1tpXS5kaXNhYmxlZCA/IFwidHJ1ZVwiIDogXCJmYWxzZVwiXG4gICAgICApO1xuICAgICAgZWxlbXNbaV0uc2V0QXR0cmlidXRlKFwiZGlzYWJsZWRcIiwgXCJkaXNhYmxlZFwiKTtcbiAgICAgIGVsZW1zW2ldLnN0eWxlLnBvaW50ZXJFdmVudHMgPSBcIm5vbmVcIjtcbiAgICAgIGVsZW1zW2ldLnN0eWxlLndlYmtpdEZpbHRlciA9IFwiZ3JheXNjYWxlKDEwMCUpXCI7XG4gICAgICBlbGVtc1tpXS5zdHlsZS5maWx0ZXIgPSBcImdyYXlzY2FsZSgxMDAlKVwiO1xuICAgIH1cbiAgfVxuICB1bmxvY2tGb3JtKCkge1xuICAgIGNvbnN0IGVsZW1zID0gdGhpcy5mb3JtLnF1ZXJ5U2VsZWN0b3JBbGwoXG4gICAgICBcImlucHV0LCB0ZXh0YXJlYSwgYnV0dG9uLCBzZWxlY3RcIlxuICAgICk7XG4gICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IGVsZW1zLmxlbmd0aDsgaSA8IGxlbjsgKytpKSB7XG4gICAgICBpZiAoZWxlbXNbaV0uZ2V0QXR0cmlidXRlKFwiZGF0YS1qdXN0LXZhbGlkYXRlLWZhbGxiYWNrLWRpc2FibGVkXCIpICE9PSBcInRydWVcIikge1xuICAgICAgICBlbGVtc1tpXS5yZW1vdmVBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiKTtcbiAgICAgIH1cbiAgICAgIGVsZW1zW2ldLnN0eWxlLnBvaW50ZXJFdmVudHMgPSBcIlwiO1xuICAgICAgZWxlbXNbaV0uc3R5bGUud2Via2l0RmlsdGVyID0gXCJcIjtcbiAgICAgIGVsZW1zW2ldLnN0eWxlLmZpbHRlciA9IFwiXCI7XG4gICAgfVxuICB9XG4gIHJlbmRlclRvb2x0aXAoZWxlbSwgZXJyb3JMYWJlbCwgcG9zaXRpb24pIHtcbiAgICB2YXIgX2E7XG4gICAgY29uc3QgeyB0b3AsIGxlZnQsIHdpZHRoLCBoZWlnaHQgfSA9IGVsZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgY29uc3QgZXJyb3JMYWJlbFJlY3QgPSBlcnJvckxhYmVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGNvbnN0IHBvcyA9IHBvc2l0aW9uIHx8ICgoX2EgPSB0aGlzLmdsb2JhbENvbmZpZy50b29sdGlwKSA9PSBudWxsID8gdm9pZCAwIDogX2EucG9zaXRpb24pO1xuICAgIHN3aXRjaCAocG9zKSB7XG4gICAgICBjYXNlIFwibGVmdFwiOiB7XG4gICAgICAgIGVycm9yTGFiZWwuc3R5bGUudG9wID0gYCR7dG9wICsgaGVpZ2h0IC8gMiAtIGVycm9yTGFiZWxSZWN0LmhlaWdodCAvIDJ9cHhgO1xuICAgICAgICBlcnJvckxhYmVsLnN0eWxlLmxlZnQgPSBgJHtsZWZ0IC0gZXJyb3JMYWJlbFJlY3Qud2lkdGggLSBUT09MVElQX0FSUk9XX0hFSUdIVH1weGA7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBcInRvcFwiOiB7XG4gICAgICAgIGVycm9yTGFiZWwuc3R5bGUudG9wID0gYCR7dG9wIC0gZXJyb3JMYWJlbFJlY3QuaGVpZ2h0IC0gVE9PTFRJUF9BUlJPV19IRUlHSFR9cHhgO1xuICAgICAgICBlcnJvckxhYmVsLnN0eWxlLmxlZnQgPSBgJHtsZWZ0ICsgd2lkdGggLyAyIC0gZXJyb3JMYWJlbFJlY3Qud2lkdGggLyAyfXB4YDtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIFwicmlnaHRcIjoge1xuICAgICAgICBlcnJvckxhYmVsLnN0eWxlLnRvcCA9IGAke3RvcCArIGhlaWdodCAvIDIgLSBlcnJvckxhYmVsUmVjdC5oZWlnaHQgLyAyfXB4YDtcbiAgICAgICAgZXJyb3JMYWJlbC5zdHlsZS5sZWZ0ID0gYCR7bGVmdCArIHdpZHRoICsgVE9PTFRJUF9BUlJPV19IRUlHSFR9cHhgO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgXCJib3R0b21cIjoge1xuICAgICAgICBlcnJvckxhYmVsLnN0eWxlLnRvcCA9IGAke3RvcCArIGhlaWdodCArIFRPT0xUSVBfQVJST1dfSEVJR0hUfXB4YDtcbiAgICAgICAgZXJyb3JMYWJlbC5zdHlsZS5sZWZ0ID0gYCR7bGVmdCArIHdpZHRoIC8gMiAtIGVycm9yTGFiZWxSZWN0LndpZHRoIC8gMn1weGA7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICBlcnJvckxhYmVsLmRhdGFzZXQuZGlyZWN0aW9uID0gcG9zO1xuICAgIGNvbnN0IHJlZnJlc2ggPSAoKSA9PiB7XG4gICAgICB0aGlzLnJlbmRlclRvb2x0aXAoZWxlbSwgZXJyb3JMYWJlbCwgcG9zaXRpb24pO1xuICAgIH07XG4gICAgcmV0dXJuIHtcbiAgICAgIHJlZnJlc2hcbiAgICB9O1xuICB9XG4gIGNyZWF0ZUVycm9yTGFiZWxFbGVtKGtleSwgZXJyb3JNZXNzYWdlLCBjb25maWcpIHtcbiAgICBjb25zdCBlcnJvckxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBlcnJvckxhYmVsLmlubmVySFRNTCA9IGVycm9yTWVzc2FnZTtcbiAgICBjb25zdCBjdXN0b21FcnJvckxhYmVsU3R5bGUgPSB0aGlzLmlzVG9vbHRpcCgpID8gY29uZmlnID09IG51bGwgPyB2b2lkIDAgOiBjb25maWcuZXJyb3JMYWJlbFN0eWxlIDogKGNvbmZpZyA9PSBudWxsID8gdm9pZCAwIDogY29uZmlnLmVycm9yTGFiZWxTdHlsZSkgfHwgdGhpcy5nbG9iYWxDb25maWcuZXJyb3JMYWJlbFN0eWxlO1xuICAgIE9iamVjdC5hc3NpZ24oZXJyb3JMYWJlbC5zdHlsZSwgY3VzdG9tRXJyb3JMYWJlbFN0eWxlKTtcbiAgICBlcnJvckxhYmVsLmNsYXNzTGlzdC5hZGQoXG4gICAgICAuLi5nZXRDbGFzc0xpc3QoXG4gICAgICAgIChjb25maWcgPT0gbnVsbCA/IHZvaWQgMCA6IGNvbmZpZy5lcnJvckxhYmVsQ3NzQ2xhc3MpIHx8IHRoaXMuZ2xvYmFsQ29uZmlnLmVycm9yTGFiZWxDc3NDbGFzc1xuICAgICAgKSxcbiAgICAgIFwianVzdC12YWxpZGF0ZS1lcnJvci1sYWJlbFwiXG4gICAgKTtcbiAgICBpZiAodGhpcy5pc1Rvb2x0aXAoKSkge1xuICAgICAgZXJyb3JMYWJlbC5kYXRhc2V0LnRvb2x0aXAgPSBcInRydWVcIjtcbiAgICB9XG4gICAgaWYgKHRoaXMuZ2xvYmFsQ29uZmlnLnRlc3RpbmdNb2RlKSB7XG4gICAgICBlcnJvckxhYmVsLmRhdGFzZXQudGVzdElkID0gYGVycm9yLWxhYmVsLSR7a2V5fWA7XG4gICAgfVxuICAgIHRoaXMuZXJyb3JMYWJlbHNba2V5XSA9IGVycm9yTGFiZWw7XG4gICAgcmV0dXJuIGVycm9yTGFiZWw7XG4gIH1cbiAgY3JlYXRlU3VjY2Vzc0xhYmVsRWxlbShrZXksIHN1Y2Nlc3NNZXNzYWdlLCBjb25maWcpIHtcbiAgICBpZiAoc3VjY2Vzc01lc3NhZ2UgPT09IHZvaWQgMCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGNvbnN0IHN1Y2Nlc3NMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgc3VjY2Vzc0xhYmVsLmlubmVySFRNTCA9IHN1Y2Nlc3NNZXNzYWdlO1xuICAgIGNvbnN0IGN1c3RvbVN1Y2Nlc3NMYWJlbFN0eWxlID0gKGNvbmZpZyA9PSBudWxsID8gdm9pZCAwIDogY29uZmlnLnN1Y2Nlc3NMYWJlbFN0eWxlKSB8fCB0aGlzLmdsb2JhbENvbmZpZy5zdWNjZXNzTGFiZWxTdHlsZTtcbiAgICBPYmplY3QuYXNzaWduKHN1Y2Nlc3NMYWJlbC5zdHlsZSwgY3VzdG9tU3VjY2Vzc0xhYmVsU3R5bGUpO1xuICAgIHN1Y2Nlc3NMYWJlbC5jbGFzc0xpc3QuYWRkKFxuICAgICAgLi4uZ2V0Q2xhc3NMaXN0KFxuICAgICAgICAoY29uZmlnID09IG51bGwgPyB2b2lkIDAgOiBjb25maWcuc3VjY2Vzc0xhYmVsQ3NzQ2xhc3MpIHx8IHRoaXMuZ2xvYmFsQ29uZmlnLnN1Y2Nlc3NMYWJlbENzc0NsYXNzXG4gICAgICApLFxuICAgICAgXCJqdXN0LXZhbGlkYXRlLXN1Y2Nlc3MtbGFiZWxcIlxuICAgICk7XG4gICAgaWYgKHRoaXMuZ2xvYmFsQ29uZmlnLnRlc3RpbmdNb2RlKSB7XG4gICAgICBzdWNjZXNzTGFiZWwuZGF0YXNldC50ZXN0SWQgPSBgc3VjY2Vzcy1sYWJlbC0ke2tleX1gO1xuICAgIH1cbiAgICB0aGlzLnN1Y2Nlc3NMYWJlbHNba2V5XSA9IHN1Y2Nlc3NMYWJlbDtcbiAgICByZXR1cm4gc3VjY2Vzc0xhYmVsO1xuICB9XG4gIHJlbmRlckVycm9yc0NvbnRhaW5lcihsYWJlbCwgZXJyb3JzQ29udGFpbmVyKSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZXJyb3JzQ29udGFpbmVyIHx8IHRoaXMuZ2xvYmFsQ29uZmlnLmVycm9yc0NvbnRhaW5lcjtcbiAgICBpZiAodHlwZW9mIGNvbnRhaW5lciA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgY29uc3QgZWxlbSA9IHRoaXMuZm9ybS5xdWVyeVNlbGVjdG9yKGNvbnRhaW5lcik7XG4gICAgICBpZiAoZWxlbSkge1xuICAgICAgICBlbGVtLmFwcGVuZENoaWxkKGxhYmVsKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmVycm9yKFxuICAgICAgICAgIGBFcnJvciBjb250YWluZXIgd2l0aCAke2NvbnRhaW5lcn0gc2VsZWN0b3Igbm90IGZvdW5kLiBFcnJvcnMgd2lsbCBiZSByZW5kZXJlZCBhcyB1c3VhbGBcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGNvbnRhaW5lciBpbnN0YW5jZW9mIEVsZW1lbnQpIHtcbiAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChsYWJlbCk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKGNvbnRhaW5lciAhPT0gdm9pZCAwKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFxuICAgICAgICBgRXJyb3IgY29udGFpbmVyIG5vdCBmb3VuZC4gSXQgc2hvdWxkIGJlIGEgc3RyaW5nIG9yIGV4aXN0aW5nIEVsZW1lbnQuIEVycm9ycyB3aWxsIGJlIHJlbmRlcmVkIGFzIHVzdWFsYFxuICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHJlbmRlckdyb3VwTGFiZWwoZWxlbSwgbGFiZWwsIGVycm9yc0NvbnRhaW5lciwgaXNTdWNjZXNzKSB7XG4gICAgaWYgKCFpc1N1Y2Nlc3MpIHtcbiAgICAgIGNvbnN0IHJlbmRlcmVkSW5FcnJvcnNDb250YWluZXIgPSB0aGlzLnJlbmRlckVycm9yc0NvbnRhaW5lcihcbiAgICAgICAgbGFiZWwsXG4gICAgICAgIGVycm9yc0NvbnRhaW5lclxuICAgICAgKTtcbiAgICAgIGlmIChyZW5kZXJlZEluRXJyb3JzQ29udGFpbmVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG4gICAgZWxlbS5hcHBlbmRDaGlsZChsYWJlbCk7XG4gIH1cbiAgcmVuZGVyRmllbGRMYWJlbChlbGVtLCBsYWJlbCwgZXJyb3JzQ29udGFpbmVyLCBpc1N1Y2Nlc3MpIHtcbiAgICB2YXIgX2EsIF9iLCBfYywgX2QsIF9lLCBfZiwgX2c7XG4gICAgaWYgKCFpc1N1Y2Nlc3MpIHtcbiAgICAgIGNvbnN0IHJlbmRlcmVkSW5FcnJvcnNDb250YWluZXIgPSB0aGlzLnJlbmRlckVycm9yc0NvbnRhaW5lcihcbiAgICAgICAgbGFiZWwsXG4gICAgICAgIGVycm9yc0NvbnRhaW5lclxuICAgICAgKTtcbiAgICAgIGlmIChyZW5kZXJlZEluRXJyb3JzQ29udGFpbmVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGVsZW0udHlwZSA9PT0gXCJjaGVja2JveFwiIHx8IGVsZW0udHlwZSA9PT0gXCJyYWRpb1wiKSB7XG4gICAgICBjb25zdCBsYWJlbEVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICBgbGFiZWxbZm9yPVwiJHtlbGVtLmdldEF0dHJpYnV0ZShcImlkXCIpfVwiXWBcbiAgICAgICk7XG4gICAgICBpZiAoKChfYiA9IChfYSA9IGVsZW0ucGFyZW50RWxlbWVudCkgPT0gbnVsbCA/IHZvaWQgMCA6IF9hLnRhZ05hbWUpID09IG51bGwgPyB2b2lkIDAgOiBfYi50b0xvd2VyQ2FzZSgpKSA9PT0gXCJsYWJlbFwiKSB7XG4gICAgICAgIChfZCA9IChfYyA9IGVsZW0ucGFyZW50RWxlbWVudCkgPT0gbnVsbCA/IHZvaWQgMCA6IF9jLnBhcmVudEVsZW1lbnQpID09IG51bGwgPyB2b2lkIDAgOiBfZC5hcHBlbmRDaGlsZChsYWJlbCk7XG4gICAgICB9IGVsc2UgaWYgKGxhYmVsRWxlbSkge1xuICAgICAgICAoX2UgPSBsYWJlbEVsZW0ucGFyZW50RWxlbWVudCkgPT0gbnVsbCA/IHZvaWQgMCA6IF9lLmFwcGVuZENoaWxkKGxhYmVsKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIChfZiA9IGVsZW0ucGFyZW50RWxlbWVudCkgPT0gbnVsbCA/IHZvaWQgMCA6IF9mLmFwcGVuZENoaWxkKGxhYmVsKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgKF9nID0gZWxlbS5wYXJlbnRFbGVtZW50KSA9PSBudWxsID8gdm9pZCAwIDogX2cuYXBwZW5kQ2hpbGQobGFiZWwpO1xuICAgIH1cbiAgfVxuICBzaG93TGFiZWxzKGZpZWxkcywgaXNFcnJvcikge1xuICAgIE9iamVjdC5rZXlzKGZpZWxkcykuZm9yRWFjaCgoZmllbGROYW1lLCBpKSA9PiB7XG4gICAgICBjb25zdCBlcnJvciA9IGZpZWxkc1tmaWVsZE5hbWVdO1xuICAgICAgY29uc3Qga2V5ID0gdGhpcy5nZXRLZXlCeUZpZWxkU2VsZWN0b3IoZmllbGROYW1lKTtcbiAgICAgIGlmICgha2V5IHx8ICF0aGlzLmZpZWxkc1trZXldKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYEZpZWxkIG5vdCBmb3VuZC4gQ2hlY2sgdGhlIGZpZWxkIHNlbGVjdG9yLmApO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCBmaWVsZCA9IHRoaXMuZmllbGRzW2tleV07XG4gICAgICBmaWVsZC5pc1ZhbGlkID0gIWlzRXJyb3I7XG4gICAgICB0aGlzLmNsZWFyRmllbGRTdHlsZShrZXkpO1xuICAgICAgdGhpcy5jbGVhckZpZWxkTGFiZWwoa2V5KTtcbiAgICAgIHRoaXMucmVuZGVyRmllbGRFcnJvcihrZXksIGZhbHNlLCBlcnJvcik7XG4gICAgICBpZiAoaSA9PT0gMCAmJiB0aGlzLmdsb2JhbENvbmZpZy5mb2N1c0ludmFsaWRGaWVsZCkge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IGZpZWxkLmVsZW0uZm9jdXMoKSwgMCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgc2hvd0Vycm9ycyhmaWVsZHMpIHtcbiAgICBpZiAodHlwZW9mIGZpZWxkcyAhPT0gXCJvYmplY3RcIikge1xuICAgICAgdGhyb3cgRXJyb3IoXG4gICAgICAgIFwiW3Nob3dFcnJvcnNdOiBFcnJvcnMgc2hvdWxkIGJlIGFuIG9iamVjdCB3aXRoIGtleTogdmFsdWUgZm9ybWF0XCJcbiAgICAgICk7XG4gICAgfVxuICAgIHRoaXMuc2hvd0xhYmVscyhmaWVsZHMsIHRydWUpO1xuICB9XG4gIHNob3dTdWNjZXNzTGFiZWxzKGZpZWxkcykge1xuICAgIGlmICh0eXBlb2YgZmllbGRzICE9PSBcIm9iamVjdFwiKSB7XG4gICAgICB0aHJvdyBFcnJvcihcbiAgICAgICAgXCJbc2hvd1N1Y2Nlc3NMYWJlbHNdOiBMYWJlbHMgc2hvdWxkIGJlIGFuIG9iamVjdCB3aXRoIGtleTogdmFsdWUgZm9ybWF0XCJcbiAgICAgICk7XG4gICAgfVxuICAgIHRoaXMuc2hvd0xhYmVscyhmaWVsZHMsIGZhbHNlKTtcbiAgfVxuICByZW5kZXJGaWVsZEVycm9yKGtleSwgZm9yY2VkID0gZmFsc2UsIG1lc3NhZ2UpIHtcbiAgICB2YXIgX2EsIF9iLCBfYywgX2QsIF9lLCBfZjtcbiAgICBjb25zdCBmaWVsZCA9IHRoaXMuZmllbGRzW2tleV07XG4gICAgaWYgKGZpZWxkLmlzVmFsaWQgPT09IGZhbHNlKSB7XG4gICAgICB0aGlzLmlzVmFsaWQgPSBmYWxzZTtcbiAgICB9XG4gICAgaWYgKGZpZWxkLmlzVmFsaWQgPT09IHZvaWQgMCB8fCAhZm9yY2VkICYmICF0aGlzLmlzU3VibWl0dGVkICYmICFmaWVsZC50b3VjaGVkICYmIG1lc3NhZ2UgPT09IHZvaWQgMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoZmllbGQuaXNWYWxpZCkge1xuICAgICAgaWYgKCFmaWVsZC5hc3luY0NoZWNrUGVuZGluZykge1xuICAgICAgICBjb25zdCBzdWNjZXNzTGFiZWwgPSB0aGlzLmNyZWF0ZVN1Y2Nlc3NMYWJlbEVsZW0oXG4gICAgICAgICAga2V5LFxuICAgICAgICAgIG1lc3NhZ2UgIT09IHZvaWQgMCA/IG1lc3NhZ2UgOiBmaWVsZC5zdWNjZXNzTWVzc2FnZSxcbiAgICAgICAgICBmaWVsZC5jb25maWdcbiAgICAgICAgKTtcbiAgICAgICAgaWYgKHN1Y2Nlc3NMYWJlbCkge1xuICAgICAgICAgIHRoaXMucmVuZGVyRmllbGRMYWJlbChcbiAgICAgICAgICAgIGZpZWxkLmVsZW0sXG4gICAgICAgICAgICBzdWNjZXNzTGFiZWwsXG4gICAgICAgICAgICAoX2EgPSBmaWVsZC5jb25maWcpID09IG51bGwgPyB2b2lkIDAgOiBfYS5lcnJvcnNDb250YWluZXIsXG4gICAgICAgICAgICB0cnVlXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICBmaWVsZC5lbGVtLmNsYXNzTGlzdC5hZGQoXG4gICAgICAgICAgLi4uZ2V0Q2xhc3NMaXN0KFxuICAgICAgICAgICAgKChfYiA9IGZpZWxkLmNvbmZpZykgPT0gbnVsbCA/IHZvaWQgMCA6IF9iLnN1Y2Nlc3NGaWVsZENzc0NsYXNzKSB8fCB0aGlzLmdsb2JhbENvbmZpZy5zdWNjZXNzRmllbGRDc3NDbGFzc1xuICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZmllbGQuZWxlbS5jbGFzc0xpc3QuYWRkKFxuICAgICAgLi4uZ2V0Q2xhc3NMaXN0KFxuICAgICAgICAoKF9jID0gZmllbGQuY29uZmlnKSA9PSBudWxsID8gdm9pZCAwIDogX2MuZXJyb3JGaWVsZENzc0NsYXNzKSB8fCB0aGlzLmdsb2JhbENvbmZpZy5lcnJvckZpZWxkQ3NzQ2xhc3NcbiAgICAgIClcbiAgICApO1xuICAgIGNvbnN0IGVycm9yTGFiZWwgPSB0aGlzLmNyZWF0ZUVycm9yTGFiZWxFbGVtKFxuICAgICAga2V5LFxuICAgICAgbWVzc2FnZSAhPT0gdm9pZCAwID8gbWVzc2FnZSA6IGZpZWxkLmVycm9yTWVzc2FnZSxcbiAgICAgIGZpZWxkLmNvbmZpZ1xuICAgICk7XG4gICAgdGhpcy5yZW5kZXJGaWVsZExhYmVsKFxuICAgICAgZmllbGQuZWxlbSxcbiAgICAgIGVycm9yTGFiZWwsXG4gICAgICAoX2QgPSBmaWVsZC5jb25maWcpID09IG51bGwgPyB2b2lkIDAgOiBfZC5lcnJvcnNDb250YWluZXJcbiAgICApO1xuICAgIGlmICh0aGlzLmlzVG9vbHRpcCgpKSB7XG4gICAgICB0aGlzLnRvb2x0aXBzLnB1c2goXG4gICAgICAgIHRoaXMucmVuZGVyVG9vbHRpcChcbiAgICAgICAgICBmaWVsZC5lbGVtLFxuICAgICAgICAgIGVycm9yTGFiZWwsXG4gICAgICAgICAgKF9mID0gKF9lID0gZmllbGQuY29uZmlnKSA9PSBudWxsID8gdm9pZCAwIDogX2UudG9vbHRpcCkgPT0gbnVsbCA/IHZvaWQgMCA6IF9mLnBvc2l0aW9uXG4gICAgICAgIClcbiAgICAgICk7XG4gICAgfVxuICB9XG4gIHJlbmRlckdyb3VwRXJyb3Ioa2V5LCBmb3JjZSA9IHRydWUpIHtcbiAgICB2YXIgX2EsIF9iLCBfYywgX2Q7XG4gICAgY29uc3QgZ3JvdXAgPSB0aGlzLmdyb3VwRmllbGRzW2tleV07XG4gICAgaWYgKGdyb3VwLmlzVmFsaWQgPT09IGZhbHNlKSB7XG4gICAgICB0aGlzLmlzVmFsaWQgPSBmYWxzZTtcbiAgICB9XG4gICAgaWYgKGdyb3VwLmlzVmFsaWQgPT09IHZvaWQgMCB8fCAhZm9yY2UgJiYgIXRoaXMuaXNTdWJtaXR0ZWQgJiYgIWdyb3VwLnRvdWNoZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKGdyb3VwLmlzVmFsaWQpIHtcbiAgICAgIGdyb3VwLmVsZW1zLmZvckVhY2goKGVsZW0pID0+IHtcbiAgICAgICAgdmFyIF9hMiwgX2IyO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgIGVsZW0uc3R5bGUsXG4gICAgICAgICAgKChfYTIgPSBncm91cC5jb25maWcpID09IG51bGwgPyB2b2lkIDAgOiBfYTIuc3VjY2Vzc0ZpZWxkU3R5bGUpIHx8IHRoaXMuZ2xvYmFsQ29uZmlnLnN1Y2Nlc3NGaWVsZFN0eWxlXG4gICAgICAgICk7XG4gICAgICAgIGVsZW0uY2xhc3NMaXN0LmFkZChcbiAgICAgICAgICAuLi5nZXRDbGFzc0xpc3QoXG4gICAgICAgICAgICAoKF9iMiA9IGdyb3VwLmNvbmZpZykgPT0gbnVsbCA/IHZvaWQgMCA6IF9iMi5zdWNjZXNzRmllbGRDc3NDbGFzcykgfHwgdGhpcy5nbG9iYWxDb25maWcuc3VjY2Vzc0ZpZWxkQ3NzQ2xhc3NcbiAgICAgICAgICApXG4gICAgICAgICk7XG4gICAgICB9KTtcbiAgICAgIGNvbnN0IHN1Y2Nlc3NMYWJlbCA9IHRoaXMuY3JlYXRlU3VjY2Vzc0xhYmVsRWxlbShcbiAgICAgICAga2V5LFxuICAgICAgICBncm91cC5zdWNjZXNzTWVzc2FnZSxcbiAgICAgICAgZ3JvdXAuY29uZmlnXG4gICAgICApO1xuICAgICAgaWYgKHN1Y2Nlc3NMYWJlbCkge1xuICAgICAgICB0aGlzLnJlbmRlckdyb3VwTGFiZWwoXG4gICAgICAgICAgZ3JvdXAuZ3JvdXBFbGVtLFxuICAgICAgICAgIHN1Y2Nlc3NMYWJlbCxcbiAgICAgICAgICAoX2EgPSBncm91cC5jb25maWcpID09IG51bGwgPyB2b2lkIDAgOiBfYS5lcnJvcnNDb250YWluZXIsXG4gICAgICAgICAgdHJ1ZVxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmlzVmFsaWQgPSBmYWxzZTtcbiAgICBncm91cC5lbGVtcy5mb3JFYWNoKChlbGVtKSA9PiB7XG4gICAgICB2YXIgX2EyLCBfYjI7XG4gICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICBlbGVtLnN0eWxlLFxuICAgICAgICAoKF9hMiA9IGdyb3VwLmNvbmZpZykgPT0gbnVsbCA/IHZvaWQgMCA6IF9hMi5lcnJvckZpZWxkU3R5bGUpIHx8IHRoaXMuZ2xvYmFsQ29uZmlnLmVycm9yRmllbGRTdHlsZVxuICAgICAgKTtcbiAgICAgIGVsZW0uY2xhc3NMaXN0LmFkZChcbiAgICAgICAgLi4uZ2V0Q2xhc3NMaXN0KFxuICAgICAgICAgICgoX2IyID0gZ3JvdXAuY29uZmlnKSA9PSBudWxsID8gdm9pZCAwIDogX2IyLmVycm9yRmllbGRDc3NDbGFzcykgfHwgdGhpcy5nbG9iYWxDb25maWcuZXJyb3JGaWVsZENzc0NsYXNzXG4gICAgICAgIClcbiAgICAgICk7XG4gICAgfSk7XG4gICAgY29uc3QgZXJyb3JMYWJlbCA9IHRoaXMuY3JlYXRlRXJyb3JMYWJlbEVsZW0oXG4gICAgICBrZXksXG4gICAgICBncm91cC5lcnJvck1lc3NhZ2UsXG4gICAgICBncm91cC5jb25maWdcbiAgICApO1xuICAgIHRoaXMucmVuZGVyR3JvdXBMYWJlbChcbiAgICAgIGdyb3VwLmdyb3VwRWxlbSxcbiAgICAgIGVycm9yTGFiZWwsXG4gICAgICAoX2IgPSBncm91cC5jb25maWcpID09IG51bGwgPyB2b2lkIDAgOiBfYi5lcnJvcnNDb250YWluZXJcbiAgICApO1xuICAgIGlmICh0aGlzLmlzVG9vbHRpcCgpKSB7XG4gICAgICB0aGlzLnRvb2x0aXBzLnB1c2goXG4gICAgICAgIHRoaXMucmVuZGVyVG9vbHRpcChcbiAgICAgICAgICBncm91cC5ncm91cEVsZW0sXG4gICAgICAgICAgZXJyb3JMYWJlbCxcbiAgICAgICAgICAoX2QgPSAoX2MgPSBncm91cC5jb25maWcpID09IG51bGwgPyB2b2lkIDAgOiBfYy50b29sdGlwKSA9PSBudWxsID8gdm9pZCAwIDogX2QucG9zaXRpb25cbiAgICAgICAgKVxuICAgICAgKTtcbiAgICB9XG4gIH1cbiAgcmVuZGVyRXJyb3JzKGZvcmNlUmV2YWxpZGF0aW9uID0gZmFsc2UpIHtcbiAgICBpZiAoIXRoaXMuaXNTdWJtaXR0ZWQgJiYgIWZvcmNlUmV2YWxpZGF0aW9uICYmICF0aGlzLmdsb2JhbENvbmZpZy52YWxpZGF0ZUJlZm9yZVN1Ym1pdHRpbmcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5jbGVhckVycm9ycygpO1xuICAgIHRoaXMuaXNWYWxpZCA9IHRydWU7XG4gICAgZm9yIChjb25zdCBrZXkgaW4gdGhpcy5ncm91cEZpZWxkcykge1xuICAgICAgdGhpcy5yZW5kZXJHcm91cEVycm9yKGtleSk7XG4gICAgfVxuICAgIGZvciAoY29uc3Qga2V5IGluIHRoaXMuZmllbGRzKSB7XG4gICAgICB0aGlzLnJlbmRlckZpZWxkRXJyb3Ioa2V5KTtcbiAgICB9XG4gIH1cbiAgZGVzdHJveSgpIHtcbiAgICB0aGlzLmV2ZW50TGlzdGVuZXJzLmZvckVhY2goKGV2ZW50KSA9PiB7XG4gICAgICB0aGlzLnJlbW92ZUxpc3RlbmVyKGV2ZW50LnR5cGUsIGV2ZW50LmVsZW0sIGV2ZW50LmZ1bmMpO1xuICAgIH0pO1xuICAgIE9iamVjdC5rZXlzKHRoaXMuY3VzdG9tU3R5bGVUYWdzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIHRoaXMuY3VzdG9tU3R5bGVUYWdzW2tleV0ucmVtb3ZlKCk7XG4gICAgfSk7XG4gICAgdGhpcy5jbGVhckVycm9ycygpO1xuICAgIGlmICh0aGlzLmdsb2JhbENvbmZpZy5sb2NrRm9ybSkge1xuICAgICAgdGhpcy51bmxvY2tGb3JtKCk7XG4gICAgfVxuICB9XG4gIHJlZnJlc2goKSB7XG4gICAgdGhpcy5kZXN0cm95KCk7XG4gICAgaWYgKCF0aGlzLmZvcm0pIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJDYW5ub3QgaW5pdGlhbGl6ZSB0aGUgbGlicmFyeSEgRm9ybSBpcyBub3QgZGVmaW5lZFwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5pbml0aWFsaXplKHRoaXMuZm9ybSwgdGhpcy5nbG9iYWxDb25maWcpO1xuICAgICAgT2JqZWN0LmtleXModGhpcy5maWVsZHMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICBjb25zdCBmaWVsZFNlbGVjdG9yID0gdGhpcy5nZXRGaWVsZFNlbGVjdG9yQnlLZXkoa2V5KTtcbiAgICAgICAgaWYgKGZpZWxkU2VsZWN0b3IpIHtcbiAgICAgICAgICB0aGlzLmFkZEZpZWxkKFxuICAgICAgICAgICAgZmllbGRTZWxlY3RvcixcbiAgICAgICAgICAgIFsuLi50aGlzLmZpZWxkc1trZXldLnJ1bGVzXSxcbiAgICAgICAgICAgIHRoaXMuZmllbGRzW2tleV0uY29uZmlnXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG4gIHNldEN1cnJlbnRMb2NhbGUobG9jYWxlKSB7XG4gICAgaWYgKHR5cGVvZiBsb2NhbGUgIT09IFwic3RyaW5nXCIgJiYgbG9jYWxlICE9PSB2b2lkIDApIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJDdXJyZW50IGxvY2FsZSBzaG91bGQgYmUgYSBzdHJpbmdcIik7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuY3VycmVudExvY2FsZSA9IGxvY2FsZTtcbiAgICBpZiAodGhpcy5pc1N1Ym1pdHRlZCkge1xuICAgICAgdGhpcy52YWxpZGF0ZSgpO1xuICAgIH1cbiAgfVxuICBvblN1Y2Nlc3MoY2FsbGJhY2spIHtcbiAgICB0aGlzLm9uU3VjY2Vzc0NhbGxiYWNrID0gY2FsbGJhY2s7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgb25GYWlsKGNhbGxiYWNrKSB7XG4gICAgdGhpcy5vbkZhaWxDYWxsYmFjayA9IGNhbGxiYWNrO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG4gIG9uVmFsaWRhdGUoY2FsbGJhY2spIHtcbiAgICB0aGlzLm9uVmFsaWRhdGVDYWxsYmFjayA9IGNhbGxiYWNrO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG59XG5leHBvcnQge1xuICBDdXN0b21TdHlsZVRhZ0lkcyxcbiAgR3JvdXBSdWxlcyxcbiAgUnVsZXMsXG4gIEp1c3RWYWxpZGF0ZSBhcyBkZWZhdWx0XG59O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBkYXlqcyBmcm9tIFwiZGF5anNcIjtcbmltcG9ydCAnZGF5anMvbG9jYWxlL2phJztcbmRheWpzLmxvY2FsZShcImphXCIpXG5cbmNvbnNvbGUubG9nKGRheWpzKCkuZm9ybWF0KCdZWVlZL01NL0REKGRkZCkgSEg6bW0nKSk7XG5cbmltcG9ydCBKdXN0VmFsaWRhdGUgZnJvbSAnanVzdC12YWxpZGF0ZSc7XG5jb25zdCB2YWxpZGF0b3IgPSBuZXcgSnVzdFZhbGlkYXRlKCcjYmFzaWNfZm9ybScpO1xuXG52YWxpZGF0b3Jcbi5hZGRGaWVsZCgnI25hbWUnLCBbXG4gICAge1xuICAgICAgcnVsZTogJ3JlcXVpcmVkJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIHJ1bGU6ICdtaW5MZW5ndGgnLFxuICAgICAgdmFsdWU6IDMsXG4gICAgfSxcbl0pIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9