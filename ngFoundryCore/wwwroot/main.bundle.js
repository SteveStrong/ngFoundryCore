webpackJsonp([1,4],{

/***/ 154:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 154;


/***/ }),

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(175);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__networkview_networkview_component__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__listview_listview_component__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__treeview_treeview_component__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_welcome_welcome_component__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__webglview_webglview_component__ = __webpack_require__(97);
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

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_emitter_service__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_toastr_ng2_toastr__ = __webpack_require__(136);
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
        selector: 'app-root',
        template: __webpack_require__(340),
        styles: [__webpack_require__(329)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_ng2_toastr_ng2_toastr__["ToastsManager"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ng2_toastr_ng2_toastr__["ToastsManager"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ng2_toastr_ng2_toastr__["ToastOptions"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ng2_toastr_ng2_toastr__["ToastOptions"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]) === "function" && _c || Object])
], AppComponent);

var _a, _b, _c;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_toastr_ng2_toastr__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ng2_toastr_ng2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_routing_module__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__treeview_treeview_component__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__listview_listview_component__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__networkview_networkview_component__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__treeview_treeitem_component__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__welcome_welcome_component__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__webglview_webglview_component__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__networkview_test_forcediagram_component__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__webglview_test_sceen1_component__ = __webpack_require__(174);
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
            __WEBPACK_IMPORTED_MODULE_15__webglview_test_sceen1_component__["a" /* TestSceen1Component */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_5_ng2_toastr_ng2_toastr__["ToastModule"].forRoot(),
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_6__app_routing_module__["a" /* AppRoutingModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_three__ = __webpack_require__(377);
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

/***/ 169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__foTools__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__foNode_model__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__foCollection_model__ = __webpack_require__(93);
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
    return foComponent;
}(__WEBPACK_IMPORTED_MODULE_1__foNode_model__["a" /* foNode */]));

//# sourceMappingURL=foComponent.model.js.map

/***/ }),

/***/ 170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__foTools__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__foKnowledge_model__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__foObject_model__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__foComponent_model__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__foNode_model__ = __webpack_require__(62);
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
    foConcept.prototype.newInstance = function (properties) {
        var fullSpec = __WEBPACK_IMPORTED_MODULE_0__foTools__["a" /* Tools */].union(this._spec, properties);
        var result = this._create(fullSpec);
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

/***/ 171:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__foObject_model__ = __webpack_require__(46);
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

/***/ 172:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_d3__ = __webpack_require__(328);
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
    function TestForcediagramComponent(http) {
        this.http = http;
        this.graph = {};
    }
    TestForcediagramComponent.prototype.ngOnInit = function () {
        var _this = this;
        var svg = __WEBPACK_IMPORTED_MODULE_2_d3__["select"]("svg"), width = +svg.attr("width"), height = +svg.attr("height");
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
        selector: 'app-test-forcediagram',
        template: __webpack_require__(343),
        styles: [__webpack_require__(332)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], TestForcediagramComponent);

var _a;
//# sourceMappingURL=test-forcediagram.component.js.map

/***/ }),

/***/ 173:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
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
    }
    TreeitemComponent.prototype.ngOnInit = function () {
    };
    return TreeitemComponent;
}());
TreeitemComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-treeitem',
        template: __webpack_require__(344),
        styles: [__webpack_require__(333)]
    }),
    __metadata("design:paramtypes", [])
], TreeitemComponent);

//# sourceMappingURL=treeitem.component.js.map

/***/ }),

/***/ 174:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__foundryDrivers_threeDriver__ = __webpack_require__(168);
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
        selector: 'app-test-sceen1',
        template: __webpack_require__(346),
        styles: [__webpack_require__(335)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]) === "function" && _a || Object])
], TestSceen1Component);

var _a;
//# sourceMappingURL=test-sceen1.component.js.map

/***/ }),

/***/ 175:
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

/***/ 329:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 330:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 331:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 332:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)();
// imports


// module
exports.push([module.i, "\r\n\r\nsvg {\r\n  /*background-color: #333;*/\r\n  border: darkblue;\r\n  border-style: solid;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 333:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 334:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 335:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 336:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 337:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 340:
/***/ (function(module, exports) {

module.exports = "<h3>\r\n  {{title}}\r\n</h3>\r\n\r\n<div class=\"navbar navbar-inverse \" role=\"navigation\">\r\n  <div class=\"container-fluid\">\r\n    <a class='navbar-brand' [routerLink]=\"['/welcome']\">Welcome</a>\r\n\r\n    <div class=\"nav navbar-nav navbar-right \">\r\n      <a class=\"nav navbar-brand \" [routerLink]=\"[ '/webgl'] \">WebGL</a>\r\n      <a class=\"nav navbar-brand \" [routerLink]=\"[ '/tree'] \">Tree</a>\r\n      <a class=\"nav navbar-brand \" [routerLink]=\"[ '/list'] \">List</a>\r\n      <a class=\"nav navbar-brand \" [routerLink]=\"[ '/network'] \">Network</a>\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n\r\n<router-outlet></router-outlet>"

/***/ }),

/***/ 341:
/***/ (function(module, exports) {

module.exports = "<p>\r\n  listview works!\r\n</p>\r\n"

/***/ }),

/***/ 342:
/***/ (function(module, exports) {

module.exports = "<p>\r\n  networkview works!\r\n</p>\r\n\r\n<app-test-forcediagram>\r\n  \r\n</app-test-forcediagram>"

/***/ }),

/***/ 343:
/***/ (function(module, exports) {

module.exports = "<p>\n  test-forcediagram works!\n  <a href=\"https://bl.ocks.org/mbostock/4062045\">forcediagram</a>\n</p>\n\n<svg  width=\"960\" height=\"600\"></svg>\n"

/***/ }),

/***/ 344:
/***/ (function(module, exports) {

module.exports = "<p>\r\n  treeitem works!\r\n</p>\r\n"

/***/ }),

/***/ 345:
/***/ (function(module, exports) {

module.exports = "<p>\r\n  treeview works!\r\n</p>\r\n"

/***/ }),

/***/ 346:
/***/ (function(module, exports) {

module.exports = "<p>\n  test-sceen1 works!\n</p>\n\n"

/***/ }),

/***/ 347:
/***/ (function(module, exports) {

module.exports = "<p>\r\n  webglview works!\r\n</p>\r\n\r\n<app-test-sceen1>\r\n  \r\n</app-test-sceen1>\r\n"

/***/ }),

/***/ 348:
/***/ (function(module, exports) {

module.exports = "<p>\r\n    Sample Models generated by Foundry\r\n</p>\r\n\r\n<a target=\"_blank\" href=\"https://teropa.info/blog/2016/12/12/graphics-in-angular-2.html\">SVG and Canvas Graphics in Angular 2</a>\r\n\r\n<button type=\"button\" (click)=\"doToast()\">toast test</button>\r\n\r\n<div class=\"row\">\r\n\r\n    <div class=\"col-md-4\">\r\n        <h1>{{model.full}}</h1>\r\n\r\n        <pre class=\"well\">{{model | json}}</pre>\r\n    </div>\r\n    <!--<app-test-forcediagram class=\"col-md-4\">\r\n\r\n    </app-test-forcediagram>\r\n    <app-test-sceen1 class=\"col-md-4\">\r\n\r\n    </app-test-sceen1>-->\r\n</div>"

/***/ }),

/***/ 379:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(155);


/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__foTools__ = __webpack_require__(47);
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

/***/ 47:
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
    return foTools;
}());

var Tools = new foTools();
//# sourceMappingURL=foTools.js.map

/***/ }),

/***/ 62:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__foTools__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__foObject_model__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__foCollection_model__ = __webpack_require__(93);
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
        }
        this._subcomponents.addMember(obj);
        return obj;
    };
    foNode.prototype.removeSubcomponent = function (obj) {
        this._subcomponents.removeMember(obj);
    };
    Object.defineProperty(foNode.prototype, "Subcomponents", {
        get: function () {
            return this._subcomponents.members;
        },
        enumerable: true,
        configurable: true
    });
    return foNode;
}(__WEBPACK_IMPORTED_MODULE_1__foObject_model__["a" /* foObject */]));

//# sourceMappingURL=foNode.model.js.map

/***/ }),

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
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
    return EmitterService;
}());
// Event store
EmitterService._emitters = {};
EmitterService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], EmitterService);

//# sourceMappingURL=emitter.service.js.map

/***/ }),

/***/ 93:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__foObject_model__ = __webpack_require__(46);
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

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
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
        selector: 'app-listview',
        template: __webpack_require__(341),
        styles: [__webpack_require__(330)]
    }),
    __metadata("design:paramtypes", [])
], ListviewComponent);

//# sourceMappingURL=listview.component.js.map

/***/ }),

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
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
        selector: 'app-networkview',
        template: __webpack_require__(342),
        styles: [__webpack_require__(331)]
    }),
    __metadata("design:paramtypes", [])
], NetworkviewComponent);

//# sourceMappingURL=networkview.component.js.map

/***/ }),

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
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
        selector: 'app-treeview',
        template: __webpack_require__(345),
        styles: [__webpack_require__(334)]
    }),
    __metadata("design:paramtypes", [])
], TreeviewComponent);

//# sourceMappingURL=treeview.component.js.map

/***/ }),

/***/ 97:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
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
        selector: 'app-webglview',
        template: __webpack_require__(347),
        styles: [__webpack_require__(336)]
    }),
    __metadata("design:paramtypes", [])
], WebglviewComponent);

//# sourceMappingURL=webglview.component.js.map

/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__foundry_foNode_model__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__foundry_foConcept_model__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_emitter_service__ = __webpack_require__(92);
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
        selector: 'app-welcome',
        template: __webpack_require__(348),
        styles: [__webpack_require__(337)]
    }),
    __metadata("design:paramtypes", [])
], WelcomeComponent);

//# sourceMappingURL=welcome.component.js.map

/***/ })

},[379]);
//# sourceMappingURL=main.bundle.js.map