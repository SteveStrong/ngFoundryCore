webpackJsonp([1,4],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_do__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__common_emitter_service__ = __webpack_require__(29);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DockerecosystemService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var DockerecosystemService = (function () {
    function DockerecosystemService(http) {
        this.http = http;
    }
    DockerecosystemService.prototype.getModel = function () {
        var model = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"](function (observer) {
            setTimeout(function () {
                observer.next(21);
            }, 1000);
            setTimeout(function () {
                observer.next(22);
            }, 2000);
            setTimeout(function () {
                observer.complete();
            }, 3000);
        });
        return model;
    };
    DockerecosystemService.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    DockerecosystemService.prototype.handleError = function (error) {
        // In a real world app, you might use a remote logging infrastructure
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Response */]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        var toast = {
            title: "Dockerecosystem Service",
            message: errMsg
        };
        __WEBPACK_IMPORTED_MODULE_6__common_emitter_service__["a" /* EmitterService */].get("SHOWERROR").emit(toast);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(errMsg);
    };
    DockerecosystemService.prototype.getEcosystem = function () {
        var source = this.http.get('dockerecosystem.json');
        //source.do(this.extractData)
        //  .catch(this.handleError);
        return source;
    };
    return DockerecosystemService;
}());
DockerecosystemService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
], DockerecosystemService);

var _a;
//# sourceMappingURL=dockerecosystem.service.js.map

/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NetworkviewComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NetworkviewComponent = (function () {
    function NetworkviewComponent() {
    }
    NetworkviewComponent.prototype.ngOnInit = function () {
    };
    return NetworkviewComponent;
}());
NetworkviewComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'foundry-networkview',
        template: __webpack_require__(360),
        styles: [__webpack_require__(345)]
    }),
    __metadata("design:paramtypes", [])
], NetworkviewComponent);

//# sourceMappingURL=networkview.component.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_emitter_service__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_do__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__foundry_foTools__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__swim_model__ = __webpack_require__(66);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SwimService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var SwimService = (function () {
    function SwimService(http) {
        this.http = http;
        this.Dictionary = new __WEBPACK_IMPORTED_MODULE_8__swim_model__["a" /* SwimDictionary */]();
        this.viewElementDef = this.Dictionary.swimElementDef;
        this.viewLaneDef = this.Dictionary.swimLaneDef;
        this.viewDef = this.Dictionary.swimDef;
    }
    SwimService.prototype.handleError = function (error) {
        // In a real world app, you might use a remote logging infrastructure
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Response */]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        __WEBPACK_IMPORTED_MODULE_2__common_emitter_service__["a" /* EmitterService */].error(errMsg, 'SwimService');
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].throw(errMsg);
    };
    SwimService.prototype.getRootView = function () {
        var result = this.viewDef.newInstance();
        return result;
    };
    SwimService.prototype.getEcosystem = function (callback) {
        var _this = this;
        var source = this.http.get('caas.json');
        source.subscribe(function (res) {
            var body = res.json();
            var categories = body.categories;
            var result = _this.viewDef.newInstance();
            //categories = Tools.distinctItems(body.products.map(Tools.pluck('category')));
            var lanes = categories.map(function (item) {
                return { 'title': item, 'myName': item };
            });
            lanes.map(function (item) {
                var found = _this.viewLaneDef.newInstance(item);
                result.addSubcomponent(found);
                result[item.myName] = found;
            });
            var groups = __WEBPACK_IMPORTED_MODULE_7__foundry_foTools__["a" /* Tools */].groupBy(__WEBPACK_IMPORTED_MODULE_7__foundry_foTools__["a" /* Tools */].pluck('category'), body.products);
            __WEBPACK_IMPORTED_MODULE_7__foundry_foTools__["a" /* Tools */].mapOverKeyValue(groups, function (key, list) {
                var product = result[key];
                list.forEach(function (item) {
                    var spec = { 'name': item.product, 'myName': item.product };
                    var element = _this.viewElementDef.newInstance(spec);
                    product.addSubcomponent(element);
                });
            });
            callback && callback(result);
        }, this.handleError);
        return source;
    };
    return SwimService;
}());
SwimService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
], SwimService);

var _a;
//# sourceMappingURL=swim.service.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__swimlaneview_swim_service__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_emitter_service__ = __webpack_require__(29);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SwimlaneviewComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SwimlaneviewComponent = (function () {
    function SwimlaneviewComponent(vcr, service, zone) {
        this.vcr = vcr;
        this.service = service;
        this.zone = zone;
        this.circles = [
            { 'x': 105, 'y': 10, 'r': 30 },
            { 'x': 305, 'y': 60, 'r': 20 },
            { 'x': 505, 'y': 10, 'r': 40 },
        ];
    }
    SwimlaneviewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.viewModel = this.service.getRootView();
        this.service.getEcosystem(function (result) {
            _this.viewModel = result;
        });
        __WEBPACK_IMPORTED_MODULE_2__common_emitter_service__["a" /* EmitterService */].get("RECOMPUTE").subscribe(function (_) {
            _this.viewModel.refresh();
            //this.swimLanes.forEach(item => {
            //  item.refresh()
        });
    };
    return SwimlaneviewComponent;
}());
SwimlaneviewComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'foundry-swimlaneview',
        template: __webpack_require__(364),
        styles: [__webpack_require__(349)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__swimlaneview_swim_service__["a" /* SwimService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__swimlaneview_swim_service__["a" /* SwimService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]) === "function" && _c || Object])
], SwimlaneviewComponent);

var _a, _b, _c;
//# sourceMappingURL=swimlaneview.component.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TreeviewComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TreeviewComponent = (function () {
    function TreeviewComponent() {
    }
    TreeviewComponent.prototype.ngOnInit = function () {
    };
    return TreeviewComponent;
}());
TreeviewComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'foundry-treeview',
        template: __webpack_require__(366),
        styles: [__webpack_require__(351)]
    }),
    __metadata("design:paramtypes", [])
], TreeviewComponent);

//# sourceMappingURL=treeview.component.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebglviewComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//import { element } from 'protractor/built';

var WebglviewComponent = (function () {
    //https://www.npmjs.com/package/three
    function WebglviewComponent() {
    }
    WebglviewComponent.prototype.ngOnInit = function () {
    };
    return WebglviewComponent;
}());
WebglviewComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'foundry-webglview',
        template: __webpack_require__(368),
        styles: [__webpack_require__(353)]
    }),
    __metadata("design:paramtypes", [])
], WebglviewComponent);

//# sourceMappingURL=webglview.component.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__foundry_foNode_model__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__foundry_foConcept_model__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_emitter_service__ = __webpack_require__(29);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WelcomeComponent = (function () {
    function WelcomeComponent() {
        this.model = [];
        this.def = new __WEBPACK_IMPORTED_MODULE_2__foundry_foConcept_model__["a" /* foConcept */]();
    }
    WelcomeComponent.prototype.info = function (message, title) {
        var toast = {
            title: title || '',
            message: message
        };
        __WEBPACK_IMPORTED_MODULE_3__common_emitter_service__["a" /* EmitterService */].get("SHOWINFO").emit(toast);
    };
    WelcomeComponent.prototype.doToast = function () {
        this.info("info message", "my title");
    };
    WelcomeComponent.prototype.ngOnInit = function () {
        var xxx = function () { return "hello"; };
        var yyy = xxx.toString();
        var zzz = '{ return "hello" }';
        function evil(fn) {
            return new Function(fn)();
        }
        var props = {
            first: 'steve',
            last: 'strong',
            full: function () {
                return "hello all " + this.first + " - " + this.last;
            },
            xxx: xxx,
            yyy: yyy,
            zzz: evil(zzz),
            morestuff: function (x) {
                return this.first + " - " + this.last;
            }
        };
        this.def = new __WEBPACK_IMPORTED_MODULE_2__foundry_foConcept_model__["a" /* foConcept */]({
            first: 'mile',
            last: 'davis',
        });
        this.model = [
            this.def,
            this.def.newInstance(),
            // new foNode(props),
            // new foNode(props),
            new __WEBPACK_IMPORTED_MODULE_1__foundry_foNode_model__["a" /* foNode */](props)
        ];
    };
    return WelcomeComponent;
}());
WelcomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'foundry-welcome',
        template: __webpack_require__(369),
        styles: [__webpack_require__(354)]
    }),
    __metadata("design:paramtypes", [])
], WelcomeComponent);

//# sourceMappingURL=welcome.component.js.map

/***/ }),

/***/ 165:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 165;


/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(189);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 176:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__networkview_networkview_component__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__listview_listview_component__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__treeview_treeview_component__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_welcome_welcome_component__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__webglview_webglview_component__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_app_swimlaneview_swimlaneview_component__ = __webpack_require__(103);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    { path: '', pathMatch: 'full', redirectTo: 'welcome' },
    { path: 'welcome', component: __WEBPACK_IMPORTED_MODULE_5__app_welcome_welcome_component__["a" /* WelcomeComponent */] },
    { path: 'webgl', component: __WEBPACK_IMPORTED_MODULE_6__webglview_webglview_component__["a" /* WebglviewComponent */] },
    { path: 'tree', component: __WEBPACK_IMPORTED_MODULE_4__treeview_treeview_component__["a" /* TreeviewComponent */] },
    { path: 'list', component: __WEBPACK_IMPORTED_MODULE_3__listview_listview_component__["a" /* ListviewComponent */] },
    { path: 'swim', component: __WEBPACK_IMPORTED_MODULE_7_app_swimlaneview_swimlaneview_component__["a" /* SwimlaneviewComponent */] },
    { path: 'network', component: __WEBPACK_IMPORTED_MODULE_2__networkview_networkview_component__["a" /* NetworkviewComponent */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ 177:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_emitter_service__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_toastr_ng2_toastr__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng2_toastr_ng2_toastr__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//https://www.npmjs.com/package/ng2-toastr

var AppComponent = (function () {
    function AppComponent(toastrService, options, vcr) {
        this.toastrService = toastrService;
        this.options = options;
        this.vcr = vcr;
        this.title = 'ngFoundry';
        this.toastrService.setRootViewContainerRef(vcr);
        this.options.showCloseButton = true;
        this.options.newestOnTop = true;
        this.options.positionClass = "toast-top-right"; //"toast-bottom-left"  toast-top-full-width
    }
    // if (!environment.production) {
    //   this._url.setBaseUrl('http://localhost:13114');
    //   //this._url.useLocalCashe();
    // }
    AppComponent.prototype.openToast = function (type, title, message) {
        this.toastrService[type](title, message, this.options);
    };
    AppComponent.prototype.clearToasts = function () {
        this.toastrService.clearAllToasts();
    };
    AppComponent.prototype.showCustom = function () {
        this.toastrService.custom('<span style="color: red">Message in red.</span>', null, { enableHTML: true });
    };
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_1__common_emitter_service__["a" /* EmitterService */].get("SHOWERROR").subscribe(function (item) {
            //console.log('SHOWERROR ' + JSON.stringify(item, undefined, 3));
            _this.openToast('error', item.title, item.message);
        });
        __WEBPACK_IMPORTED_MODULE_1__common_emitter_service__["a" /* EmitterService */].get("SHOWWARNING").subscribe(function (item) {
            //console.log('SHOWWARNING ' + JSON.stringify(item, undefined, 3));
            _this.openToast('warning', item.title, item.message);
        });
        __WEBPACK_IMPORTED_MODULE_1__common_emitter_service__["a" /* EmitterService */].get("SHOWINFO").subscribe(function (item) {
            //console.log('SHOWINFO ' + JSON.stringify(item, undefined, 3));
            _this.openToast('info', item.title, item.message);
        });
        __WEBPACK_IMPORTED_MODULE_1__common_emitter_service__["a" /* EmitterService */].get("SHOWSUCCESS").subscribe(function (item) {
            //console.log('SHOWSUCCESS ' + JSON.stringify(item, undefined, 3));
            _this.openToast('success', item.title, item.message);
        });
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'foundry-root',
        template: __webpack_require__(357),
        styles: [__webpack_require__(342)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_ng2_toastr_ng2_toastr__["ToastsManager"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ng2_toastr_ng2_toastr__["ToastsManager"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ng2_toastr_ng2_toastr__["ToastOptions"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ng2_toastr_ng2_toastr__["ToastOptions"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]) === "function" && _c || Object])
], AppComponent);

var _a, _b, _c;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 178:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_toastr_ng2_toastr__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ng2_toastr_ng2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_routing_module__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__treeview_treeview_component__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__listview_listview_component__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__networkview_networkview_component__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__treeview_treeitem_component__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__welcome_welcome_component__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__webglview_webglview_component__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__networkview_test_forcediagram_component__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__webglview_test_sceen1_component__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__networkview_dockerecosystem_component__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__networkview_dockerecosystem_service__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__swimlaneview_swimlaneview_component__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__swimlaneview_swimlane_component__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__swimlaneview_swimelement_component__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__swimlaneview_swim_service__ = __webpack_require__(102);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_8__treeview_treeview_component__["a" /* TreeviewComponent */],
            __WEBPACK_IMPORTED_MODULE_9__listview_listview_component__["a" /* ListviewComponent */],
            __WEBPACK_IMPORTED_MODULE_10__networkview_networkview_component__["a" /* NetworkviewComponent */],
            __WEBPACK_IMPORTED_MODULE_11__treeview_treeitem_component__["a" /* TreeitemComponent */],
            __WEBPACK_IMPORTED_MODULE_12__welcome_welcome_component__["a" /* WelcomeComponent */],
            __WEBPACK_IMPORTED_MODULE_13__webglview_webglview_component__["a" /* WebglviewComponent */],
            __WEBPACK_IMPORTED_MODULE_14__networkview_test_forcediagram_component__["a" /* TestForcediagramComponent */],
            __WEBPACK_IMPORTED_MODULE_15__webglview_test_sceen1_component__["a" /* TestSceen1Component */],
            __WEBPACK_IMPORTED_MODULE_16__networkview_dockerecosystem_component__["a" /* DockerecosystemComponent */],
            __WEBPACK_IMPORTED_MODULE_18__swimlaneview_swimlaneview_component__["a" /* SwimlaneviewComponent */],
            __WEBPACK_IMPORTED_MODULE_19__swimlaneview_swimlane_component__["a" /* SwimlaneComponent */],
            __WEBPACK_IMPORTED_MODULE_20__swimlaneview_swimelement_component__["a" /* SwimelementComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_5_ng2_toastr_ng2_toastr__["ToastModule"].forRoot(),
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_6__app_routing_module__["a" /* AppRoutingModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_17__networkview_dockerecosystem_service__["a" /* DockerecosystemService */], __WEBPACK_IMPORTED_MODULE_21__swimlaneview_swim_service__["a" /* SwimService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 179:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_d3__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Diagram; });

function makeTransform(dx, dy, s) {
    if (s === void 0) { s = 0; }
    if (s) {
        return "translate(" + dx + "," + dy + ") scale (" + s + ")";
    }
    return "translate(" + dx + "," + dy + ")";
}
var Diagram = (function () {
    function Diagram() {
        this.svgRoot = {};
        this.scale = 1.0;
        this.scaleFactor = 0.2;
        this.Tx = 0.0;
        this.Ty = 0.0;
        this.width = 960;
        this.height = 600;
    }
    Diagram.prototype.setRoot = function (nativeElement) {
        this.svgRoot = __WEBPACK_IMPORTED_MODULE_0_d3__["select"](nativeElement)
            .append("svg")
            .attr("class", "svg-canvas")
            .attr("width", this.width) //.attr("width", "100%")
            .attr("height", this.height);
    };
    Diagram.prototype.renderGraph = function (graph) {
        var boxWidth = 80;
        var boxHeight = 40;
        var color = __WEBPACK_IMPORTED_MODULE_0_d3__["scaleOrdinal"](__WEBPACK_IMPORTED_MODULE_0_d3__["schemeCategory20"]);
        var allLinks = graph.links.map(function (item) {
            return item;
        });
        var counter = 0;
        var allNodes = graph.nodes.map(function (item) {
            var count = 3;
            counter++;
            var quotient = Math.floor(counter / count);
            item.width = boxWidth;
            item.height = boxHeight;
            item.x = 100 * quotient;
            item.y = boxHeight;
            //console.log(item);
            return item;
        });
        var link = this.svgRoot.append("g")
            .attr("class", "links-style")
            .selectAll("line")
            .data(allLinks)
            .enter().append("line")
            .attr("stroke-width", function (d) { return Math.sqrt(d.value); });
        var node = this.svgRoot.append("g")
            .attr("class", "nodes-style")
            .selectAll(".node-body")
            .data(allNodes)
            .enter().append("g")
            .attr("class", "node-body")
            .call(__WEBPACK_IMPORTED_MODULE_0_d3__["drag"]()
            .on("start", dragstarted)
            .on("drag", dragged)
            .on("end", dragended));
        node.append("rect")
            .attr("width", function (d) { return d.width; })
            .attr("height", function (d) { return d.height; })
            .attr("fill", function (d) { return color(d.group); });
        node.append("text")
            .attr("y", boxHeight / 2)
            .attr("x", boxWidth / 2)
            .attr("text-anchor", "middle")
            .attr("font-family", "sans-serif")
            .attr("font-size", "10px")
            .text(function (d) { return d.id; });
        var simulation = __WEBPACK_IMPORTED_MODULE_0_d3__["forceSimulation"]()
            .force("x", __WEBPACK_IMPORTED_MODULE_0_d3__["forceX"](function (d) { return d.x; }).strength(4))
            .force("collide", __WEBPACK_IMPORTED_MODULE_0_d3__["forceCollide"](22))
            .force("center", __WEBPACK_IMPORTED_MODULE_0_d3__["forceCenter"](this.width / 2, this.height / 2));
        simulation
            .nodes(allNodes)
            .on("tick", ticked);
        //simulation.force("link")
        //  .links(allLinks);
        function collide(node) {
            var r = node.width, nx1 = node.x - node.width / 2, nx2 = node.x + node.width / 2, ny1 = node.y - node.heigth / 2, ny2 = node.y + node.heigth / 2;
            return function (quad, x1, y1, x2, y2) {
                if (quad.point && (quad.point !== node)) {
                    var x = node.x - quad.point.x, y = node.y - quad.point.y, l = Math.sqrt(x * x + y * y), r = node.width + quad.point.radius;
                    if (l < r) {
                        l = (l - r) / l * .5;
                        node.x -= x *= l;
                        node.y -= y *= l;
                        quad.point.x += x;
                        quad.point.y += y;
                    }
                }
                return x1 > nx2
                    || x2 < nx1
                    || y1 > ny2
                    || y2 < ny1;
            };
        }
        function ticked() {
            var q = __WEBPACK_IMPORTED_MODULE_0_d3__["quadtree"]().addAll(allNodes), i = 0, n = allNodes.length;
            while (++i < n) {
                q.visit(collide(allNodes[i]));
            }
            link
                .attr("x1", function (d) { return d.source.x; })
                .attr("y1", function (d) { return d.source.y; })
                .attr("x2", function (d) { return d.target.x; })
                .attr("y2", function (d) { return d.target.y; });
            node
                .attr("transform", function (d) {
                return makeTransform(d.x - d.width / 2, d.y - d.height / 2);
            });
        }
        function dragstarted(d) {
            if (!__WEBPACK_IMPORTED_MODULE_0_d3__["event"].active)
                simulation.alphaTarget(0.3).restart();
            d.fx = d.x;
            d.fy = d.y;
        }
        function dragged(d) {
            d.fx = __WEBPACK_IMPORTED_MODULE_0_d3__["event"].x;
            d.fy = __WEBPACK_IMPORTED_MODULE_0_d3__["event"].y;
        }
        function dragended(d) {
            if (!__WEBPACK_IMPORTED_MODULE_0_d3__["event"].active)
                simulation.alphaTarget(0);
            d.fx = null;
            d.fy = null;
        }
    };
    Diagram.prototype.renderDiagram = function (nodes, nodeRenderFn, links, linkRenderFn) {
        //var color = d3.scaleOrdinal(d3.schemeCategory20);
        var link = this.svgRoot.append("g")
            .attr("class", "links-style")
            .selectAll("line")
            .data(links)
            .enter().append("line")
            .attr("stroke-width", function (d) { return Math.sqrt(d.value); });
        var node = this.svgRoot.append("g")
            .attr("class", "nodes-style")
            .selectAll(".node-body")
            .data(nodes)
            .enter().append("g")
            .attr("class", "node-body");
        nodeRenderFn && nodeRenderFn(node);
        // node.append("rect")
        //     .attr("width", function (d) { return d.width; })
        //     .attr("height", function (d) { return d.height; })
        //     .attr("fill", function (d) { return color(d.group); });
        // node.append("text")
        //     //.attr("dy", ".75em")
        //     .attr("y", function (d) { return d.height / 2; })
        //     .attr("x", function (d) { return d.width / 2; })
        //     .attr("text-anchor", "middle")
        //     .attr("font-family", "sans-serif")
        //     .attr("font-size", "10px")
        //     .text(function (d) { return d.id; })
        node.call(__WEBPACK_IMPORTED_MODULE_0_d3__["drag"]()
            .on("start", dragstarted)
            .on("drag", dragged)
            .on("end", dragended));
        var simulation = __WEBPACK_IMPORTED_MODULE_0_d3__["forceSimulation"]()
            .force("x", __WEBPACK_IMPORTED_MODULE_0_d3__["forceX"](function (d) { return d.x; }).strength(4))
            .force("collide", __WEBPACK_IMPORTED_MODULE_0_d3__["forceCollide"](22))
            .force("center", __WEBPACK_IMPORTED_MODULE_0_d3__["forceCenter"](this.width / 2, this.height / 2));
        simulation
            .nodes(nodes)
            .on("tick", ticked);
        //simulation.force("link")
        //  .links(links);
        function collide(node) {
            var r = node.width, nx1 = node.x - node.width / 2, nx2 = node.x + node.width / 2, ny1 = node.y - node.heigth / 2, ny2 = node.y + node.heigth / 2;
            return function (quad, x1, y1, x2, y2) {
                if (quad.point && (quad.point !== node)) {
                    var x = node.x - quad.point.x, y = node.y - quad.point.y, l = Math.sqrt(x * x + y * y), r = node.width + quad.point.radius;
                    if (l < r) {
                        l = (l - r) / l * .5;
                        node.x -= x *= l;
                        node.y -= y *= l;
                        quad.point.x += x;
                        quad.point.y += y;
                    }
                }
                return x1 > nx2
                    || x2 < nx1
                    || y1 > ny2
                    || y2 < ny1;
            };
        }
        function ticked() {
            var q = __WEBPACK_IMPORTED_MODULE_0_d3__["quadtree"]().addAll(nodes), i = 0, n = nodes.length;
            while (++i < n) {
                q.visit(collide(nodes[i]));
            }
            link
                .attr("x1", function (d) { return d.source.x; })
                .attr("y1", function (d) { return d.source.y; })
                .attr("x2", function (d) { return d.target.x; })
                .attr("y2", function (d) { return d.target.y; });
            node
                .attr("transform", function (d) {
                return makeTransform(d.x - d.width / 2, d.y - d.height / 2);
            });
        }
        function dragstarted(d) {
            if (!__WEBPACK_IMPORTED_MODULE_0_d3__["event"].active)
                simulation.alphaTarget(0.3).restart();
            d.fx = d.x;
            d.fy = d.y;
        }
        function dragged(d) {
            d.fx = __WEBPACK_IMPORTED_MODULE_0_d3__["event"].x;
            d.fy = __WEBPACK_IMPORTED_MODULE_0_d3__["event"].y;
        }
        function dragended(d) {
            if (!__WEBPACK_IMPORTED_MODULE_0_d3__["event"].active)
                simulation.alphaTarget(0);
            d.fx = null;
            d.fy = null;
        }
    };
    return Diagram;
}());

//# sourceMappingURL=diagramDriver.js.map

/***/ }),

/***/ 180:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_three__ = __webpack_require__(398);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Sceen3D; });

function doAnimate(mySelf) {
    function animate() {
        requestAnimationFrame(animate);
        mySelf.doRotation(.01, .02, .03);
    }
    animate();
}
var Sceen3D = (function () {
    function Sceen3D() {
        this.scene = {};
        this.camera = {};
        this.renderer = {};
        this.geometry = {};
        this.material = {};
        this.mesh = {};
    }
    Sceen3D.prototype.doRotation = function (x, y, z) {
        this.mesh.rotation.x += 0.01;
        this.mesh.rotation.y += 0.02;
        this.renderer.render(this.scene, this.camera);
    };
    Sceen3D.prototype.go = function () {
        doAnimate(this);
    };
    Sceen3D.prototype.setRoot = function (nativeElement) {
        this.scene = new __WEBPACK_IMPORTED_MODULE_0_three__["a" /* Scene */]();
        this.camera = new __WEBPACK_IMPORTED_MODULE_0_three__["b" /* PerspectiveCamera */](75, window.innerWidth / window.innerHeight, 1, 10000);
        this.camera.position.z = 1000;
        this.geometry = new __WEBPACK_IMPORTED_MODULE_0_three__["c" /* BoxGeometry */](100, 400, 900);
        this.material = new __WEBPACK_IMPORTED_MODULE_0_three__["d" /* MeshBasicMaterial */]({ color: 0x990033, wireframe: false });
        this.mesh = new __WEBPACK_IMPORTED_MODULE_0_three__["e" /* Mesh */](this.geometry, this.material);
        this.scene.add(this.mesh);
        this.renderer = new __WEBPACK_IMPORTED_MODULE_0_three__["f" /* WebGLRenderer */]();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        nativeElement.append(this.renderer.domElement);
    };
    Sceen3D.prototype.init = function (id) {
        this.scene = new __WEBPACK_IMPORTED_MODULE_0_three__["a" /* Scene */]();
        this.camera = new __WEBPACK_IMPORTED_MODULE_0_three__["b" /* PerspectiveCamera */](75, window.innerWidth / window.innerHeight, 1, 10000);
        this.camera.position.z = 1000;
        this.geometry = new __WEBPACK_IMPORTED_MODULE_0_three__["c" /* BoxGeometry */](100, 400, 900);
        this.material = new __WEBPACK_IMPORTED_MODULE_0_three__["d" /* MeshBasicMaterial */]({ color: 0x990033, wireframe: false });
        this.mesh = new __WEBPACK_IMPORTED_MODULE_0_three__["e" /* Mesh */](this.geometry, this.material);
        this.scene.add(this.mesh);
        this.renderer = new __WEBPACK_IMPORTED_MODULE_0_three__["f" /* WebGLRenderer */]();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        var element = document.getElementById(id);
        element.appendChild(this.renderer.domElement);
    };
    return Sceen3D;
}());

//# sourceMappingURL=threeDriver.js.map

/***/ }),

/***/ 181:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__foObject_model__ = __webpack_require__(49);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return foKnowledge; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var foKnowledge = (function (_super) {
    __extends(foKnowledge, _super);
    function foKnowledge(spec) {
        if (spec === void 0) { spec = undefined; }
        var _this = _super.call(this) || this;
        _this.myType = 'foKnowledge';
        _this.myName = spec && spec['myName'] ? spec['myName'] : 'unknown';
        return _this;
    }
    return foKnowledge;
}(__WEBPACK_IMPORTED_MODULE_0__foObject_model__["a" /* foObject */]));

//# sourceMappingURL=foKnowledge.model.js.map

/***/ }),

/***/ 182:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__foundryDrivers_diagramDriver__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dockerecosystem_model__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dockerecosystem_service__ = __webpack_require__(100);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DockerecosystemComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DockerecosystemComponent = (function () {
    function DockerecosystemComponent(vcr, service) {
        this.vcr = vcr;
        this.service = service;
        this.myDiagram = new __WEBPACK_IMPORTED_MODULE_1__foundryDrivers_diagramDriver__["a" /* Diagram */]();
        this.myModel = new __WEBPACK_IMPORTED_MODULE_2__dockerecosystem_model__["a" /* DockerecosystemModel */]();
    }
    DockerecosystemComponent.prototype.scaleOut = function () {
        // this.scale -= this.scaleFactor;
        // this.Tx -= this.scaleFactor * this.width / 2;
        // this.Ty -= this.scaleFactor * this.height / 2;
        // this.svgRoot
        //   .attr("transform", makeTransform(this.Tx, this.Ty, this.scale))
        //   .attr("width", this.width / this.scale)
        //   .attr("height", this.height / this.scale)
    };
    DockerecosystemComponent.prototype.scaleIn = function () {
        // this.scale += this.scaleFactor;
        // this.Tx += this.scaleFactor * this.width / 2;
        // this.Ty += this.scaleFactor * this.height / 2;
        // this.svgRoot
        //   .attr("transform", makeTransform(this.Tx, this.Ty, this.scale))
        //   .attr("width", this.width / this.scale)
        //   .attr("height", this.height / this.scale)
    };
    // zoomListener = d3.behavior.zoom()
    //   .scaleExtent([0.1, 3])
    //   .on("zoom", zoomHandler);
    DockerecosystemComponent.prototype.ngOnInit = function () {
        this.myDiagram.setRoot(this.vcr.element.nativeElement);
        // this.service.getEcosystem()
        //   .subscribe(res => {
        //     let graph = res.json();
        //     this.myDiagram.renderGraph(graph);
        //   })
        var test1 = {
            "nodes": [
                { "id": "Myriel", "group": 1 },
                { "id": "Napoleon", "group": 1 },
                { "id": "Mlle.Baptistine", "group": 1 },
                { "id": "Fameuil", "group": 3 }
            ],
            "links": [
                { "source": "Napoleon", "target": "Myriel", "value": 1 }
            ]
        };
        this.myDiagram.renderGraph(test1);
        var nodes = [];
        var links = [];
        var nodeDef = this.myModel.nodeDef;
        for (var i = 0; i < 2; i++) {
            var obj = nodeDef.newInstance({
                index: i,
                id: function () { return "Hello all " + this.myGuid; }
            });
            nodes.push(obj);
        }
        console.log(nodes);
        // this.myDiagram.renderDiagram(
        //   nodes, (i) => { 
        //     return this.myModel.doGeom(i) 
        //   },
        //   links, _ => { }
        // );
    };
    return DockerecosystemComponent;
}());
DockerecosystemComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'foundry-dockerecosystem',
        template: __webpack_require__(359),
        styles: [__webpack_require__(344)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__dockerecosystem_service__["a" /* DockerecosystemService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__dockerecosystem_service__["a" /* DockerecosystemService */]) === "function" && _b || Object])
], DockerecosystemComponent);

var _a, _b;
//# sourceMappingURL=dockerecosystem.component.js.map

/***/ }),

/***/ 183:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__foundry_foConcept_model__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_d3__);
/* unused harmony export Shape */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DockerecosystemModel; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var Shape = (function (_super) {
    __extends(Shape, _super);
    function Shape(properties) {
        var _this = _super.call(this, properties) || this;
        _this.color = __WEBPACK_IMPORTED_MODULE_1_d3__["scaleOrdinal"](__WEBPACK_IMPORTED_MODULE_1_d3__["schemeCategory20"]);
        _this.myType = 'Shape';
        return _this;
    }
    Shape.prototype.localGeom = function (item) {
        item.append("rect")
            .attr("width", function (d) { return d.width; })
            .attr("height", function (d) { return d.height; })
            .attr("fill", function (d) { return this.color(d.group); })
            .append("text")
            .attr("class", "text-style");
        //.attr("dy", ".75em")
        item.attr("y", function (d) { return d.height / 2; })
            .attr("x", function (d) { return d.width / 2; })
            .attr("text-anchor", "middle")
            .attr("font-family", "sans-serif")
            .attr("font-size", "10px")
            .text(function (d) {
            return d.text + d.myGuid;
        });
        return item;
    };
    ;
    return Shape;
}(__WEBPACK_IMPORTED_MODULE_0__foundry_foConcept_model__["a" /* foConcept */]));

var DockerecosystemModel = (function () {
    function DockerecosystemModel() {
        this.nodeDef = new Shape({
            id: "steve",
            group: 1,
            width: 80,
            height: 40,
            text: "hello"
        });
    }
    DockerecosystemModel.prototype.doGeom = function (item) {
        var root = item
            .append("rect")
            .attr("width", function (d) { return d.width; })
            .attr("height", function (d) { return d.height; })
            .attr("fill", function (d) { return __WEBPACK_IMPORTED_MODULE_1_d3__["scaleOrdinal"](__WEBPACK_IMPORTED_MODULE_1_d3__["schemeCategory20"])(d.group); })
            .append("text")
            .attr("class", "text-style");
        item.attr("y", function (d) { return d.height / 2; })
            .attr("x", function (d) { return d.width / 2; })
            .attr("text-anchor", "middle")
            .attr("font-family", "sans-serif")
            .attr("font-size", "10px")
            .text(function (d) {
            return d.text + d.myGuid;
        });
        return root;
    };
    ;
    return DockerecosystemModel;
}());

//# sourceMappingURL=dockerecosystem.model.js.map

/***/ }),

/***/ 184:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_d3__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_d3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_d3__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestForcediagramComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TestForcediagramComponent = (function () {
    function TestForcediagramComponent(http, vcr) {
        this.http = http;
        this.vcr = vcr;
        this.graph = {};
    }
    TestForcediagramComponent.prototype.ngOnInit = function () {
        var _this = this;
        var root = this.vcr.element.nativeElement;
        var width = 1000;
        var height = 600;
        var svg = __WEBPACK_IMPORTED_MODULE_2_d3__["select"](root)
            .append("svg")
            .attr("class", "svg-canvas")
            .attr("width", width)
            .attr("height", height);
        var color = __WEBPACK_IMPORTED_MODULE_2_d3__["scaleOrdinal"](__WEBPACK_IMPORTED_MODULE_2_d3__["schemeCategory20"]);
        var simulation = __WEBPACK_IMPORTED_MODULE_2_d3__["forceSimulation"]()
            .force("link", __WEBPACK_IMPORTED_MODULE_2_d3__["forceLink"]().id(function (d) { return d.id; }))
            .force("charge", __WEBPACK_IMPORTED_MODULE_2_d3__["forceManyBody"]())
            .force("center", __WEBPACK_IMPORTED_MODULE_2_d3__["forceCenter"](width / 2, height / 2));
        this.http.get('miserables.json')
            .subscribe(function (res) {
            _this.graph = res.json();
            var link = svg.append("g")
                .attr("class", "links-style")
                .selectAll("line")
                .data(_this.graph.links)
                .enter().append("line")
                .attr("stroke-width", function (d) { return Math.sqrt(d.value); });
            var node = svg.append("g")
                .attr("class", "nodes-style")
                .selectAll("circle")
                .data(_this.graph.nodes)
                .enter().append("circle")
                .attr("r", 5)
                .attr("fill", function (d) { return color(d.group); })
                .call(__WEBPACK_IMPORTED_MODULE_2_d3__["drag"]()
                .on("start", dragstarted)
                .on("drag", dragged)
                .on("end", dragended));
            node.append("title")
                .text(function (d) { return d.id; });
            simulation
                .nodes(_this.graph.nodes)
                .on("tick", ticked);
            simulation.force("link")
                .links(_this.graph.links);
            function ticked() {
                link
                    .attr("x1", function (d) { return d.source.x; })
                    .attr("y1", function (d) { return d.source.y; })
                    .attr("x2", function (d) { return d.target.x; })
                    .attr("y2", function (d) { return d.target.y; });
                node
                    .attr("cx", function (d) { return d.x; })
                    .attr("cy", function (d) { return d.y; });
            }
        });
        function dragstarted(d) {
            if (!__WEBPACK_IMPORTED_MODULE_2_d3__["event"].active)
                simulation.alphaTarget(0.3).restart();
            d.fx = d.x;
            d.fy = d.y;
        }
        function dragged(d) {
            d.fx = __WEBPACK_IMPORTED_MODULE_2_d3__["event"].x;
            d.fy = __WEBPACK_IMPORTED_MODULE_2_d3__["event"].y;
        }
        function dragended(d) {
            if (!__WEBPACK_IMPORTED_MODULE_2_d3__["event"].active)
                simulation.alphaTarget(0);
            d.fx = null;
            d.fy = null;
        }
    };
    return TestForcediagramComponent;
}());
TestForcediagramComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'foundry-test-forcediagram',
        template: __webpack_require__(361),
        styles: [__webpack_require__(346)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]) === "function" && _b || Object])
], TestForcediagramComponent);

var _a, _b;
//# sourceMappingURL=test-forcediagram.component.js.map

/***/ }),

/***/ 185:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__swim_model__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_emitter_service__ = __webpack_require__(29);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SwimelementComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//http://stackoverflow.com/questions/32211013/how-can-i-nest-directives-that-render-svg-in-angular-2
var SwimelementComponent = (function () {
    function SwimelementComponent(vcr) {
        this.vcr = vcr;
    }
    SwimelementComponent.prototype.ngOnInit = function () {
        var root = this.vcr.element.nativeElement;
        root.setAttribute("transform", this.viewModel.translate(root));
    };
    SwimelementComponent.prototype.doClick = function () {
        this.viewModel.toggleSelected();
        this.viewModel['width'] += this.viewModel['gap'];
        this.viewModel['height'] += this.viewModel['gap'];
        __WEBPACK_IMPORTED_MODULE_2__common_emitter_service__["a" /* EmitterService */].info("info message", this.viewModel['name']);
        __WEBPACK_IMPORTED_MODULE_2__common_emitter_service__["a" /* EmitterService */].get("RECOMPUTE").emit();
    };
    return SwimelementComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__swim_model__["b" /* svgShapeView */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__swim_model__["b" /* svgShapeView */]) === "function" && _a || Object)
], SwimelementComponent.prototype, "viewModel", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('display'),
    __metadata("design:type", Object)
], SwimelementComponent.prototype, "svgText", void 0);
SwimelementComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: '[foundry-swimelement]',
        template: __webpack_require__(362),
        styles: [__webpack_require__(347)]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]) === "function" && _b || Object])
], SwimelementComponent);

var _a, _b;
//# sourceMappingURL=swimelement.component.js.map

/***/ }),

/***/ 186:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__swim_model__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_emitter_service__ = __webpack_require__(29);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SwimlaneComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//http://stackoverflow.com/questions/32211013/how-can-i-nest-directives-that-render-svg-in-angular-2
var SwimlaneComponent = (function () {
    function SwimlaneComponent(vcr) {
        this.vcr = vcr;
    }
    SwimlaneComponent.prototype.ngOnInit = function () {
        var root = this.vcr.element.nativeElement;
        root.setAttribute("transform", this.viewModel.translate(root));
    };
    SwimlaneComponent.prototype.doClick = function () {
        this.viewModel.toggleSelected();
        __WEBPACK_IMPORTED_MODULE_2__common_emitter_service__["a" /* EmitterService */].success("render this", this.viewModel['title']);
    };
    return SwimlaneComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__swim_model__["b" /* svgShapeView */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__swim_model__["b" /* svgShapeView */]) === "function" && _a || Object)
], SwimlaneComponent.prototype, "viewModel", void 0);
SwimlaneComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: '[foundry-swimlane]',
        template: __webpack_require__(363),
        styles: [__webpack_require__(348)]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]) === "function" && _b || Object])
], SwimlaneComponent);

var _a, _b;
//# sourceMappingURL=swimlane.component.js.map

/***/ }),

/***/ 187:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TreeitemComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TreeitemComponent = (function () {
    function TreeitemComponent() {
        this.graph = {
            width: 800,
            height: 600
        };
        this.circles = [
            { 'x': 15, 'y': 10, 'r': 3 },
            { 'x': 35, 'y': 60, 'r': 20 },
            { 'x': 55, 'y': 10, 'r': 4 },
        ];
    }
    TreeitemComponent.prototype.ngOnInit = function () {
    };
    return TreeitemComponent;
}());
TreeitemComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'foundry-treeitem',
        template: __webpack_require__(365),
        styles: [__webpack_require__(350)]
    }),
    __metadata("design:paramtypes", [])
], TreeitemComponent);

//# sourceMappingURL=treeitem.component.js.map

/***/ }),

/***/ 188:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__foundryDrivers_threeDriver__ = __webpack_require__(180);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestSceen1Component; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TestSceen1Component = (function () {
    function TestSceen1Component(vcr) {
        this.vcr = vcr;
        this.mySceen = new __WEBPACK_IMPORTED_MODULE_1__foundryDrivers_threeDriver__["a" /* Sceen3D */]();
    }
    TestSceen1Component.prototype.ngOnInit = function () {
        this.mySceen.setRoot(this.vcr.element.nativeElement);
        this.mySceen.go();
    };
    return TestSceen1Component;
}());
TestSceen1Component = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'foundry-test-sceen1',
        template: __webpack_require__(367),
        styles: [__webpack_require__(352)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]) === "function" && _a || Object])
], TestSceen1Component);

var _a;
//# sourceMappingURL=test-sceen1.component.js.map

/***/ }),

/***/ 189:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 29:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmitterService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Credit to https://gist.github.com/sasxa
// Imports

//https://scotch.io/tutorials/angular-2-http-requests-with-observables
var EmitterService = (function () {
    function EmitterService() {
    }
    // Set a new event in the store with a given ID
    // as key
    EmitterService.get = function (ID) {
        if (!this._emitters[ID])
            this._emitters[ID] = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        return this._emitters[ID];
    };
    EmitterService.toast = function (channel, message, title) {
        var toast = {
            title: title || '',
            message: message
        };
        this.get(channel).emit(toast);
    };
    EmitterService.info = function (message, title) {
        this.toast("SHOWINFO", message, title);
    };
    EmitterService.success = function (message, title) {
        this.toast("SHOWSUCCESS", message, title);
    };
    EmitterService.warning = function (message, title) {
        this.toast("SHOWWARNING", message, title);
    };
    EmitterService.error = function (message, title) {
        this.toast("SHOWERROR", message, title);
    };
    return EmitterService;
}());
// Event store
EmitterService._emitters = {};
EmitterService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], EmitterService);

//# sourceMappingURL=emitter.service.js.map

/***/ }),

/***/ 342:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)();
// imports


// module
exports.push([module.i, ".content {\r\n  padding: 30px 15px;\r\n}\r\n\r\n.greeting {\r\n  padding: 30px 15px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 343:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 344:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 345:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 346:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)();
// imports


// module
exports.push([module.i, "\r\n\r\n.svg-canvas {\r\n  /*background-color: #333;*/\r\n  border: darkblue;\r\n  border-style: solid;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 347:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)();
// imports


// module
exports.push([module.i, "polyline\r\n{\r\n\tstroke: 0;\r\n\tstroke-linejoin: butt;\r\n\tfill: #003565;\r\n}\r\n\r\n\r\npolyline.orange\r\n{\r\n\tfill: #ff6400;\r\n}\r\n\r\ntext#display\r\n{\r\n\tfont-family: verdana, sans-serif;\r\n\tfont-size: 120%;\r\n\tfill: #003565;\r\n}\r\n\r\n\r\nrect#page\r\n{\r\n\tstroke:#000;\r\n\tfill: yellow;\r\n}\r\n\r\nrect#select\r\n{\r\n\tstroke-width: 4px;  \r\n\tstroke:red;\r\n\tfill: none\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 348:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)();
// imports


// module
exports.push([module.i, "polyline\r\n{\r\n\tstroke: 0;\r\n\tstroke-linejoin: butt;\r\n\tfill: #003565;\r\n}\r\n\r\n\r\npolyline.orange\r\n{\r\n\tfill: #ff6400;\r\n}\r\n\r\ntext#horz\r\n{\r\n\tfont-family: verdana, sans-serif;\r\n\tfont-size: 170%;\r\n\tfill: #003565;\r\n}\r\n\r\ntext#vert\r\n{\r\n\tfont-family: verdana, sans-serif;\r\n\tfont-size: 170%;\r\n\tfill: goldenrod;\r\n}\r\n\r\nrect#select\r\n{\r\n\tstroke-width: 4px;  \r\n\tstroke:red;\r\n\tfill: none\r\n} ", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 349:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)();
// imports


// module
exports.push([module.i, "circle\r\n{\r\n\tstroke: yellow;\r\n\tfill: red;\r\n    stroke-width: 5;\r\n}\r\n\r\ntext#title\r\n{\r\n\tfont-family: verdana, sans-serif;\r\n\tfont-size: 270%;\r\n\tfill: black;\r\n}\r\n\r\nsvg#lane\r\n{\r\n\tstroke-width: 1px; \r\n\tbackground-color:none; \r\n\tstroke:black; \r\n\tfill:navajowhite\r\n}  \r\n\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 350:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 351:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 352:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 353:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 354:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 357:
/***/ (function(module, exports) {

module.exports = "<div class=\"navbar navbar-inverse \" role=\"navigation\">\r\n  <div class=\"container-fluid\">\r\n    <a class='navbar-brand' [routerLink]=\"['/welcome']\">Welcome</a>\r\n\r\n    <div class=\"nav navbar-nav navbar-right \">\r\n      <a class=\"nav navbar-brand \" [routerLink]=\"[ '/webgl'] \">WebGL</a>\r\n      <a class=\"nav navbar-brand \" [routerLink]=\"[ '/tree'] \">Tree</a>\r\n      <a class=\"nav navbar-brand \" [routerLink]=\"[ '/list'] \">List</a>\r\n      <a class=\"nav navbar-brand \" [routerLink]=\"[ '/swim'] \">Swim</a>\r\n      <a class=\"nav navbar-brand \" [routerLink]=\"[ '/network'] \">Network</a>\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n\r\n<div class=\"content\" style=\"padding-top:0px\">\r\n    <router-outlet></router-outlet>\r\n</div>"

/***/ }),

/***/ 358:
/***/ (function(module, exports) {

module.exports = "<p>\r\n  listview works!\r\n</p>\r\n"

/***/ }),

/***/ 359:
/***/ (function(module, exports) {

module.exports = "<p>\r\n  dockerecosystem works!\r\n  <a href=\"https://bl.ocks.org/mbostock/4062045\">forcediagram</a>\r\n  <button (click)=\"scaleIn()\" >Scale in</button>\r\n  <button (click)=\"scaleOut()\" >Scale out</button>\r\n</p>\r\n"

/***/ }),

/***/ 360:
/***/ (function(module, exports) {

module.exports = "<p>\r\n  networkview works!\r\n</p>\r\n\r\n<foundry-dockerecosystem> </foundry-dockerecosystem>\r\n<foundry-test-forcediagram>\r\n</foundry-test-forcediagram>"

/***/ }),

/***/ 361:
/***/ (function(module, exports) {

module.exports = "<p>\r\n  test-forcediagram works!\r\n  <a href=\"https://bl.ocks.org/mbostock/4062045\">forcediagram</a>\r\n</p>\r\n\r\n"

/***/ }),

/***/ 362:
/***/ (function(module, exports) {

module.exports = "<!--<svg:g  transform=\"translate(-100 -100)  scale(1.0)\">\r\n  <svg:polyline points=\"100,100 150,100 170,150 120,150\" />\r\n  <svg:polyline points=\"170,100 220,100 240,150 190,150\" />\r\n  <svg:polyline class=\"orange\" points=\"120,45 170,45 150,95 100,95\" />\r\n  <svg:polyline class=\"orange\" points=\"190,155 240,155 220,205 170,205\" />\r\n  <svg:text id=\"sp\" x=\"240\" y=\"150\"> {{ displayText }}</svg:text>\r\n</svg:g>-->\r\n\r\n<svg:g (click)=\"doClick()\">\r\n  <svg:rect id=\"page\" x=\"0\" y=\"0\" [attr.height]=\"viewModel.height\" [attr.width]=\"viewModel.width\" >\r\n  </svg:rect>\r\n  <svg:text id=\"display\" x=\"20\" [attr.y]=\"viewModel.height/3\" > {{ viewModel.name }}</svg:text>\r\n\r\n<svg:rect id=\"select\" *ngIf=\"viewModel.isSelected\"  [attr.height]=\"viewModel.height\" [attr.width]=\"viewModel.width\" >\r\n        <!--<animateTransform\r\n            attributeName=\"transform\"\r\n            begin=\"0s\"\r\n            dur=\"20s\"\r\n            type=\"rotate\"\r\n            from=\"0 60 60\"\r\n            to=\"360 60 60\"\r\n            repeatCount=\"indefinite\"\r\n        />-->\r\n        </svg:rect>\r\n\r\n</svg:g>\r\n"

/***/ }),

/***/ 363:
/***/ (function(module, exports) {

module.exports = "<svg:rect (click)=\"doClick()\"  [attr.height]=\"viewModel.height\" [attr.width]=\"viewModel.width\" style=\"stroke:#000\">\r\n</svg:rect>\r\n\r\n<svg:text *ngIf=\"viewModel.hasSubcomponents\" id=\"horz\" x=\"10\" y=\"40\"  >{{ viewModel.title }}</svg:text>\r\n<svg:text *ngIf=\"!viewModel.hasSubcomponents\" id=\"vert\" x=\"20\" y=\"20\" style=\"writing-mode: tb;\" >{{ viewModel.title }}</svg:text>\r\n\r\n<svg:g *ngFor=\"let component of viewModel.subcomponents()\" foundry-swimelement [viewModel]=\"component\">\r\n</svg:g>\r\n\r\n<!--\r\nhttp://tutorials.jenkov.com/svg/rect-element.html\r\n-->\r\n\r\n<svg:rect id=\"select\" *ngIf=\"viewModel.isSelected\"  [attr.height]=\"viewModel.height\" [attr.width]=\"viewModel.width\" >\r\n        <!--<animateTransform\r\n            attributeName=\"transform\"\r\n            begin=\"0s\"\r\n            dur=\"20s\"\r\n            type=\"rotate\"\r\n            from=\"0 60 60\"\r\n            to=\"360 60 60\"\r\n            repeatCount=\"indefinite\"\r\n        />-->\r\n        </svg:rect>"

/***/ }),

/***/ 364:
/***/ (function(module, exports) {

module.exports = "<svg:svg id=\"lane\" [attr.height]=\"viewModel.height\" [attr.width]=\"viewModel.width\" >\r\n  <svg:text id=\"title\" x=\"10\" y=\"35\">{{ viewModel.title }}</svg:text>\r\n  <svg:g transform=\"translate(0 50)\">\r\n    <svg:g *ngFor=\"let component of viewModel.subcomponents()\" foundry-swimlane [viewModel]=\"component\">\r\n\r\n    </svg:g>\r\n  </svg:g>\r\n\r\n\r\n  <!--<svg:g transform=\"translate(130 200) rotate(45 50 50) scale(1.5)\">\r\n    <svg:circle *ngFor=\"let circle of circles\" [attr.cx]=\"circle.x\" [attr.cy]=\"circle.y\" [attr.r]=\"circle.r\">\r\n    </svg:circle>\r\n   </svg:g>-->\r\n</svg:svg>"

/***/ }),

/***/ 365:
/***/ (function(module, exports) {

module.exports = "<p>\r\n  Lets do a quick SVG test Ok?\r\n</p>\r\n\r\n<!--<svg viewBox=\"0 0 250 250\">\r\n  <polygon points=\"125,30 125,30 125,30 31.9,63.2 46.1,186.3 125,230 125,230 125,230 203.9,186.3 218.1,63.2\" />\r\n  <polygon points=\"125,30 125,52.2 125,52.1 125,153.4 125,153.4 125,230 125,230 203.9,186.3 218.1,63.2 125,30\" />\r\n  <path d=\"M125,52.1L66.8,182.6h0h21.7h0l11.7-29.2h49.4l11.7,29.2h0h21.7h0L125,52.1L125,52.1L125,52.1L125,52.1\r\n      L125,52.1z M142,135.4H108l17-40.9L142,135.4z\"/>\r\n</svg>-->\r\n\r\n<svg:svg [attr.height]=\"graph.height\" [attr.width]=\"graph.width\" xmlns=\"http://www.w3.org/2000/svg\">\r\n  <svg:g transform=\"translate(130 200) rotate(45 50 50) scale(2.5)\">\r\n    <svg:circle *ngFor=\"let circle of circles\" [attr.cx]=\"circle.x\" [attr.cy]=\"circle.y\" [attr.r]=\"circle.r\">\r\n    </svg:circle>\r\n    <svg:rect x=\"50\" y=\"50\" height=\"100\" width=\"100\" style=\"stroke:#000; fill: #0086B2\" transform=\"translate(130) rotate(45 50 50)\"> </svg:rect>\r\n  </svg:g>\r\n\r\n</svg:svg>\r\n\r\n\r\n<p>\r\n  Did that work?\r\n</p>"

/***/ }),

/***/ 366:
/***/ (function(module, exports) {

module.exports = "<p>\r\n  treeview works!\r\n</p>\r\n\r\n<foundry-treeitem></foundry-treeitem>\r\n"

/***/ }),

/***/ 367:
/***/ (function(module, exports) {

module.exports = "<p>\r\n  test-sceen1 works!\r\n</p>\r\n\r\n"

/***/ }),

/***/ 368:
/***/ (function(module, exports) {

module.exports = "<p>\r\n  webglview works!\r\n</p>\r\n\r\n<foundry-test-sceen1>\r\n  \r\n</foundry-test-sceen1>\r\n"

/***/ }),

/***/ 369:
/***/ (function(module, exports) {

module.exports = "<p>\r\n    Sample Models generated by Foundry\r\n</p>\r\n\r\n<a target=\"_blank\" href=\"https://teropa.info/blog/2016/12/12/graphics-in-angular-2.html\">SVG and Canvas Graphics in Angular 2</a>\r\n\r\n<button type=\"button\" (click)=\"doToast()\">toast test</button>\r\n\r\n<div class=\"row\">\r\n\r\n    <div class=\"col-md-4\">\r\n        <h1>{{model.full}}</h1>\r\n\r\n        <pre class=\"well\">{{model | json}}</pre>\r\n    </div>\r\n    <!--<foundry-test-forcediagram class=\"col-md-4\">\r\n\r\n    </foundry-test-forcediagram>\r\n    <foundry-test-sceen1 class=\"col-md-4\">\r\n\r\n    </foundry-test-sceen1>-->\r\n</div>"

/***/ }),

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export foTools */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Tools; });

var foTools = (function () {
    function foTools() {
        // Speed up calls to hasOwnProperty
        this.hasOwnProperty = Object.prototype.hasOwnProperty;
    }
    /**
     * http://stackoverflow.com/questions/6588977/how-to-to-extract-a-javascript-function-from-a-javascript-file
     * @param funct
     */
    foTools.prototype.getFunctionName = function (funct) {
        var ret = funct.toString(); //do with regx
        ret = ret.substr('function '.length);
        ret = ret.substr(0, ret.indexOf('('));
        return ret.trim();
    };
    ;
    //http://stackoverflow.com/questions/105034/how-to-create-a-guid-uuid-in-javascript
    foTools.prototype.generateUUID = function () {
        var d = new Date().getTime();
        var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = (d + Math.random() * 16) % 16 | 0;
            d = Math.floor(d / 16);
            return (c == 'x' ? r : (r & 0x7 | 0x8)).toString(16);
        });
        return uuid;
    };
    ;
    foTools.prototype.stringify = function (target, func, deep) {
        if (func === void 0) { func = undefined; }
        if (deep === void 0) { deep = 3; }
        function resolveReference(value) {
            if (value && value.asReference) {
                return 'resolveRef(' + value.asReference() + ',' + value.myType + ')';
            }
            return value;
        }
        function resolveCircular(key, value) {
            if (key.startsWith('_'))
                return;
            switch (key) {
                case 'myParent':
                    return resolveReference(value);
                case 'myMembers':
                    return value ? value.map(function (item) { return resolveReference(item); }) : value;
            }
            //if (this.isCustomLinkName(key)) {
            //    return resolveReference(value);
            //}
            return value;
        }
        return JSON.stringify(target, resolveCircular, deep);
    };
    ;
    foTools.prototype.isSelf = function (ref) {
        return ref.matches('@') || ref.matches('this') || ref.matches('self');
    };
    ;
    foTools.prototype.isArray = function (obj) {
        if (Array.isArray)
            return Array.isArray(obj);
        return (Object.prototype.toString.call(obj) === '[object Array]') ? true : false;
    };
    ;
    foTools.prototype.isFunction = function (obj) {
        return typeof obj === 'function';
    };
    ;
    foTools.prototype.isString = function (obj) {
        return typeof obj === 'string';
    };
    ;
    foTools.prototype.isNumber = function (obj) {
        return typeof obj === 'number';
    };
    ;
    foTools.prototype.isDate = function (obj) {
        return obj instanceof Date;
    };
    ;
    foTools.prototype.isObject = function (obj) {
        return obj && typeof obj === 'object'; //prevents typeOf null === 'object'
    };
    ;
    foTools.prototype.isCustomLinkName = function (key) {
        return false;
    };
    ;
    foTools.prototype.isTyped = function (obj) {
        return obj && obj.isInstanceOf;
    };
    ;
    foTools.prototype.isEmpty = function (obj) {
        // null and undefined are "empty"
        if (obj == null)
            return true;
        // Assume if it has a length property with a non-zero value
        // that that property is correct.
        if (obj.length > 0)
            return false;
        if (obj.length === 0)
            return true;
        // Otherwise, does it have any properties of its own?
        // Note that this doesn't handle
        // toString and valueOf enumeration bugs in IE < 9
        for (var key in obj) {
            if (this.hasOwnProperty.call(obj, key))
                return false;
        }
        return true;
    };
    ;
    foTools.prototype.extend = function (target, source) {
        if (!source)
            return target;
        for (var key in source) {
            if (this.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
            }
        }
        return target;
    };
    ;
    foTools.prototype.mixin = function (target, source) {
        if (!source)
            return target;
        if (!target)
            return source;
        for (var key in source) {
            target[key] = source[key];
        }
        return target;
    };
    ;
    foTools.prototype.mixExact = function (target, source) {
        if (!source)
            return target;
        if (!target)
            return source;
        for (var key in source) {
            if (foTools.hasOwnProperty.call(target, key)) {
                target[key] = source[key];
            }
        }
        return target;
    };
    ;
    foTools.prototype.mixout = function (target, source) {
        if (!source)
            return target;
        if (!target)
            return source;
        for (var key in source) {
            if (this.hasOwnProperty.call(target, key)) {
                delete target[key];
            }
        }
        return target;
    };
    ;
    foTools.prototype.mixMap = function (target, source) {
        if (!source)
            return target;
        var result = {};
        for (var key in target) {
            var keyMap = source[key] || key;
            result[keyMap] = target[key];
        }
        return result;
    };
    ;
    foTools.prototype.intersect = function (target, source) {
        if (!source)
            return target;
        if (!target)
            return source;
        var intersect = {};
        for (var key in target) {
            if (this.hasOwnProperty.call(source, key)) {
                intersect[key] = source[key];
            }
            else {
                intersect[key] = target[key];
            }
        }
        return intersect;
    };
    ;
    foTools.prototype.union = function (target, source) {
        var result = {};
        if (target) {
            for (var key in target) {
                result[key] = target[key];
            }
        }
        if (source) {
            for (var key in source) {
                result[key] = source[key];
            }
        }
        return result;
    };
    ;
    foTools.prototype.defineCalculatedProperty = function (target, name, func) {
        var self = target;
        Object.defineProperty(target, name, {
            enumerable: true,
            configurable: true,
            get: func,
        });
        return target;
    };
    ;
    foTools.prototype.asArray = function (obj, funct) {
        if (this.isArray(obj))
            return obj;
        return this.mapOverKeyValue(obj, function (key, value) { return funct ? funct(key, value) : value; });
    };
    ;
    foTools.prototype.applyOverKeyValue = function (obj, mapFunc) {
        var _this = this;
        var body = {};
        var keys = obj ? Object.keys(obj) : [];
        keys.forEach(function (key) {
            if (_this.hasOwnProperty.call(obj, key)) {
                var value = obj[key];
                var result = mapFunc(key, value);
                if (result)
                    body[key] = result;
            }
        });
        return body;
    };
    ;
    foTools.prototype.mapOverKeyValue = function (obj, mapFunc) {
        var _this = this;
        var list = [];
        var keys = obj ? Object.keys(obj) : [];
        keys.forEach(function (key) {
            if (_this.hasOwnProperty.call(obj, key)) {
                var value = obj[key];
                var result = mapFunc(key, value);
                if (result)
                    list.push(result);
            }
        });
        return list;
    };
    ;
    foTools.prototype.forEachKeyValue = function (obj, mapFunc) {
        var _this = this;
        var keys = obj ? Object.keys(obj) : [];
        keys.forEach(function (key) {
            if (_this.hasOwnProperty.call(obj, key)) {
                var value = obj[key];
                mapFunc(key, value);
            }
        });
    };
    ;
    foTools.prototype.findKeyForValue = function (obj, key) {
        for (var name in obj) {
            if (this.hasOwnProperty.call(obj, key)) {
                if (obj[name].matches(key))
                    return name;
            }
        }
        return obj;
    };
    ;
    foTools.prototype.pluck = function (name) {
        return function (x) { return x[name]; };
    };
    foTools.prototype.distinctItems = function (list) {
        var distinct = {};
        list.forEach(function (item) {
            distinct[item] = item;
        });
        return Object.keys(distinct);
    };
    foTools.prototype.groupBy = function (pluckBy, list) {
        var dictionary = {};
        list.forEach(function (item) {
            var key = pluckBy(item);
            if (!dictionary[key]) {
                dictionary[key] = [];
            }
            dictionary[key].push(item);
        });
        return dictionary;
    };
    return foTools;
}());

var Tools = new foTools();
//# sourceMappingURL=foTools.js.map

/***/ }),

/***/ 400:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(166);


/***/ }),

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__foTools__ = __webpack_require__(40);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return foObject; });

var foObject = (function () {
    function foObject() {
        this.myType = 'foObject';
        this.myName = 'unknown';
        this.myParent = undefined;
    }
    foObject.prototype.asReference = function () {
        if (this.myParent === undefined) {
            return "\'root\'";
        }
        return this.myName + "." + this.myParent.asReference();
    };
    Object.defineProperty(foObject.prototype, "hasParent", {
        get: function () {
            return this.myParent ? true : false;
        },
        enumerable: true,
        configurable: true
    });
    foObject.prototype.getChildAt = function (i) {
        return undefined;
    };
    Object.defineProperty(foObject.prototype, "debug", {
        get: function () {
            return __WEBPACK_IMPORTED_MODULE_0__foTools__["a" /* Tools */].stringify(this);
            //return JSON.stringify(this,undefined,3);
        },
        enumerable: true,
        configurable: true
    });
    return foObject;
}());

//# sourceMappingURL=foObject.model.js.map

/***/ }),

/***/ 64:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__foTools__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__foKnowledge_model__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__foObject_model__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__foComponent_model__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__foNode_model__ = __webpack_require__(65);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return foConcept; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();





var foConcept = (function (_super) {
    __extends(foConcept, _super);
    function foConcept(properties) {
        var _this = _super.call(this, properties) || this;
        _this._create = function (properties, subcomponents, parent) {
            return new __WEBPACK_IMPORTED_MODULE_2__foObject_model__["a" /* foObject */]();
        };
        _this._spec = properties || {};
        _this.myType = 'foConcept';
        _this.createNode();
        return _this;
        //this.createComponent();
    }
    Object.defineProperty(foConcept.prototype, "debug", {
        get: function () {
            var result = {
                base: this,
                spec: this._spec,
                attribute: this._attributes,
            };
            return __WEBPACK_IMPORTED_MODULE_0__foTools__["a" /* Tools */].stringify(result);
        },
        enumerable: true,
        configurable: true
    });
    foConcept.prototype.newInstance = function (properties, subcomponents, parent) {
        var fullSpec = __WEBPACK_IMPORTED_MODULE_0__foTools__["a" /* Tools */].union(this._spec, properties);
        var result = this._create(fullSpec, subcomponents, parent);
        return result;
    };
    //start fluent interface
    foConcept.prototype.target = function () {
        return this;
    };
    foConcept.prototype.createNode = function () {
        this._create = function (properties, subcomponents, parent) {
            return new __WEBPACK_IMPORTED_MODULE_4__foNode_model__["a" /* foNode */](properties, subcomponents, parent);
        };
        return this;
    };
    foConcept.prototype.createComponent = function () {
        this._create = function (properties, subcomponents, parent) {
            return new __WEBPACK_IMPORTED_MODULE_3__foComponent_model__["a" /* foComponent */](properties, subcomponents, parent);
        };
        return this;
    };
    foConcept.prototype.createCustom = function (funct) {
        this._create = funct;
        return this;
    };
    return foConcept;
}(__WEBPACK_IMPORTED_MODULE_1__foKnowledge_model__["a" /* foKnowledge */]));

//# sourceMappingURL=foConcept.model.js.map

/***/ }),

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__foTools__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__foObject_model__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__foCollection_model__ = __webpack_require__(97);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return foNode; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var foNode = (function (_super) {
    __extends(foNode, _super);
    function foNode(properties, subcomponents, parent) {
        var _this = _super.call(this) || this;
        _this._index = 0;
        _this.myType = 'foNode';
        _this.init(properties, subcomponents, parent);
        return _this;
    }
    foNode.prototype.init = function (properties, subcomponents, parent) {
        var _this = this;
        var self = this;
        properties && __WEBPACK_IMPORTED_MODULE_0__foTools__["a" /* Tools */].forEachKeyValue(properties, function (key, value) {
            if (__WEBPACK_IMPORTED_MODULE_0__foTools__["a" /* Tools */].isFunction(value)) {
                __WEBPACK_IMPORTED_MODULE_0__foTools__["a" /* Tools */].defineCalculatedProperty(self, key, value);
            }
            else {
                self[key] = value;
            }
        });
        this._subcomponents = new __WEBPACK_IMPORTED_MODULE_2__foCollection_model__["a" /* foCollection */]();
        subcomponents && subcomponents.forEach(function (item) { return _this.addSubcomponent(item); });
        return this;
    };
    Object.defineProperty(foNode.prototype, "myGuid", {
        get: function () {
            if (!this._myGuid) {
                this._myGuid = __WEBPACK_IMPORTED_MODULE_0__foTools__["a" /* Tools */].generateUUID();
            }
            return this._myGuid;
        },
        enumerable: true,
        configurable: true
    });
    //todo modify api to take bote item and array
    foNode.prototype.addSubcomponent = function (obj) {
        if (!obj)
            return;
        if (!obj.myParent) {
            obj.myParent = this;
            obj._index = this._subcomponents.length;
        }
        this._subcomponents.addMember(obj);
        return obj;
    };
    foNode.prototype.removeSubcomponent = function (obj) {
        if (!obj)
            return;
        if (obj.myParent == this) {
            obj.myParent = undefined;
            obj._index = 0;
        }
        this._subcomponents.removeMember(obj);
    };
    Object.defineProperty(foNode.prototype, "index", {
        get: function () {
            return this._index;
        },
        enumerable: true,
        configurable: true
    });
    foNode.prototype.getChildAt = function (i) {
        if (this.hasSubcomponents) {
            return this._subcomponents.getMember(i);
        }
    };
    Object.defineProperty(foNode.prototype, "prevChild", {
        get: function () {
            var prev = this.index - 1;
            if (this.myParent && prev > -1) {
                var found = this.myParent.getChildAt(prev);
                return found;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(foNode.prototype, "nextChild", {
        get: function () {
            var next = this.index + 1;
            if (this.myParent && next < this._subcomponents.length) {
                var found = this.myParent.getChildAt(next);
                return found;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(foNode.prototype, "Subcomponents", {
        get: function () {
            return this._subcomponents.members;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(foNode.prototype, "nodes", {
        get: function () {
            return this._subcomponents;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(foNode.prototype, "hasSubcomponents", {
        get: function () {
            return this._subcomponents && this._subcomponents.hasMembers;
        },
        enumerable: true,
        configurable: true
    });
    return foNode;
}(__WEBPACK_IMPORTED_MODULE_1__foObject_model__["a" /* foObject */]));

//# sourceMappingURL=foNode.model.js.map

/***/ }),

/***/ 66:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__foundry_foConcept_model__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__foundry_foComponent_model__ = __webpack_require__(98);
/* unused harmony export svgConcept */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return svgShapeView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SwimDictionary; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var svgConcept = (function (_super) {
    __extends(svgConcept, _super);
    function svgConcept(properties) {
        var _this = _super.call(this, properties) || this;
        _this.myType = 'svgConcept';
        _this.createCustom(function (properties, subcomponents, parent) {
            return new svgShapeView(properties, subcomponents, parent);
        });
        return _this;
    }
    return svgConcept;
}(__WEBPACK_IMPORTED_MODULE_0__foundry_foConcept_model__["a" /* foConcept */]));

var svgShapeView = (function (_super) {
    __extends(svgShapeView, _super);
    function svgShapeView(properties, subcomponents, parent) {
        var _this = _super.call(this, properties, subcomponents, parent) || this;
        _this.isSelected = false;
        _this.myType = 'svgShapeView';
        return _this;
    }
    svgShapeView.prototype.makeTransform = function (dx, dy, s) {
        if (s === void 0) { s = 0; }
        if (s) {
            return "translate(" + dx + "," + dy + ") scale (" + s + ")";
        }
        return "translate(" + dx + "," + dy + ")";
    };
    svgShapeView.prototype.translate = function (root) {
        this.nativeElement = root ? root : this.nativeElement;
        return this.makeTransform(this['pinX'], this['pinY']);
    };
    svgShapeView.prototype.refresh = function () {
        if (this.nativeElement) {
            this.nativeElement.setAttribute("transform", this.translate());
        }
        this.nodes.map(function (item) { return item.refresh(); });
    };
    svgShapeView.prototype.toggleSelected = function () {
        this.isSelected = !this.isSelected;
    };
    return svgShapeView;
}(__WEBPACK_IMPORTED_MODULE_1__foundry_foComponent_model__["a" /* foComponent */]));

var SwimDictionary = (function () {
    function SwimDictionary() {
        this.elementDefaults = {
            width: 240,
            gap: 5,
            height: 90,
            pinX: function () { return this.gap; },
            pinY: function () {
                return this.topEdge + 50;
            },
            topEdge: function () {
                if (this.prevChild) {
                    return this.prevChild.bottomEdge + this.gap;
                }
                return 0;
            },
            bottomEdge: function () {
                return this.topEdge + this.height;
            }
        };
        this.swimElementDef = new svgConcept(this.elementDefaults);
        this.laneDefaults = {
            width: function () {
                if (!this.hasSubcomponents) {
                    return 50;
                }
                var width = Math.max.apply(Math, this.nodes.map(function (o) { return o.width; }));
                return width + 2 * this.gap;
            },
            gap: 5,
            height: 800,
            pinX: function () {
                return this.leftEdge;
            },
            pinY: function () {
                return this.gap;
            },
            leftEdge: function () {
                if (this.prevChild) {
                    return this.prevChild.rightEdge + this.gap;
                }
                return this.gap;
            },
            rightEdge: function () {
                return this.leftEdge + this.width;
            }
        };
        this.swimLaneDef = new svgConcept(this.laneDefaults);
        this.swimDefaults = {
            title: "The Docker Ecosystem. - dockercon17",
            width: 1800,
            height: 1000
        };
        this.swimDef = new svgConcept(this.swimDefaults);
    }
    return SwimDictionary;
}());

//# sourceMappingURL=swim.model.js.map

/***/ }),

/***/ 97:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__foObject_model__ = __webpack_require__(49);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return foCollection; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

//we want foCollection to be observable
var foCollection = (function (_super) {
    __extends(foCollection, _super);
    function foCollection(list) {
        if (list === void 0) { list = undefined; }
        var _this = _super.call(this) || this;
        _this.myType = 'foCollection';
        _this._members = new Array();
        list && list.forEach(function (item) { return _this.addMember(item); });
        return _this;
    }
    Object.defineProperty(foCollection.prototype, "length", {
        get: function () {
            return this._members.length;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(foCollection.prototype, "hasMembers", {
        get: function () {
            return this.length > 0;
        },
        enumerable: true,
        configurable: true
    });
    foCollection.prototype.map = function (funct) {
        return this._members.map(funct);
    };
    foCollection.prototype.findMember = function (name) {
        return this._members[0];
    };
    foCollection.prototype.getMember = function (id) {
        return this._members[id];
    };
    foCollection.prototype.addMember = function (obj) {
        this._members.push(obj);
    };
    foCollection.prototype.removeMember = function (obj) {
        this._members.push(obj);
    };
    Object.defineProperty(foCollection.prototype, "members", {
        get: function () {
            return this._members;
        },
        enumerable: true,
        configurable: true
    });
    return foCollection;
}(__WEBPACK_IMPORTED_MODULE_0__foObject_model__["a" /* foObject */]));

//# sourceMappingURL=foCollection.model.js.map

/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__foTools__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__foNode_model__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__foCollection_model__ = __webpack_require__(97);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return foComponent; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var foComponent = (function (_super) {
    __extends(foComponent, _super);
    function foComponent(properties, subcomponents, parent) {
        var _this = _super.call(this, properties, subcomponents, parent) || this;
        _this.myType = 'foComponent';
        return _this;
    }
    foComponent.prototype.init = function (properties, subcomponents, parent) {
        var _this = this;
        var self = this;
        this.myName = properties && properties['myName'] ? properties['myName'] : 'unknown';
        //create a different behaviour
        __WEBPACK_IMPORTED_MODULE_0__foTools__["a" /* Tools */].forEachKeyValue(properties, function (key, value) {
            if (__WEBPACK_IMPORTED_MODULE_0__foTools__["a" /* Tools */].isFunction(value)) {
                __WEBPACK_IMPORTED_MODULE_0__foTools__["a" /* Tools */].defineCalculatedProperty(self, key, value);
            }
            else {
                self[key] = value;
            }
        });
        this._subcomponents = new __WEBPACK_IMPORTED_MODULE_2__foCollection_model__["a" /* foCollection */]();
        subcomponents && subcomponents.forEach(function (item) { return _this.addSubcomponent(item); });
        return this;
    };
    //return a new collection that could be destroyed
    foComponent.prototype.subcomponents = function () {
        var result = new __WEBPACK_IMPORTED_MODULE_2__foCollection_model__["a" /* foCollection */](this._subcomponents.members);
        return result.members;
    };
    return foComponent;
}(__WEBPACK_IMPORTED_MODULE_1__foNode_model__["a" /* foNode */]));

//# sourceMappingURL=foComponent.model.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListviewComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ListviewComponent = (function () {
    function ListviewComponent() {
    }
    ListviewComponent.prototype.ngOnInit = function () {
    };
    return ListviewComponent;
}());
ListviewComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'foundry-listview',
        template: __webpack_require__(358),
        styles: [__webpack_require__(343)]
    }),
    __metadata("design:paramtypes", [])
], ListviewComponent);

//# sourceMappingURL=listview.component.js.map

/***/ })

},[400]);
//# sourceMappingURL=main.bundle.js.map