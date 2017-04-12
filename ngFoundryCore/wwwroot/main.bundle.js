webpackJsonp([1,4],{

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__networkview_networkview_component__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__listview_listview_component__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__treeview_treeview_component__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_welcome_welcome_component__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__webglview_webglview_component__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__webglview_test1_component__ = __webpack_require__(64);
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
    { path: 'test1', component: __WEBPACK_IMPORTED_MODULE_7__webglview_test1_component__["a" /* Test1Component */] },
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'ngFoundry';
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(172),
        styles: [__webpack_require__(163)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing_module__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__treeview_treeview_component__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__listview_listview_component__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__networkview_networkview_component__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__treeview_treeitem_component__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__welcome_welcome_component__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__webglview_webglview_component__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__webglview_test1_component__ = __webpack_require__(64);
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__treeview_treeview_component__["a" /* TreeviewComponent */],
            __WEBPACK_IMPORTED_MODULE_7__listview_listview_component__["a" /* ListviewComponent */],
            __WEBPACK_IMPORTED_MODULE_8__networkview_networkview_component__["a" /* NetworkviewComponent */],
            __WEBPACK_IMPORTED_MODULE_9__treeview_treeitem_component__["a" /* TreeitemComponent */],
            __WEBPACK_IMPORTED_MODULE_10__welcome_welcome_component__["a" /* WelcomeComponent */],
            __WEBPACK_IMPORTED_MODULE_11__webglview_webglview_component__["a" /* WebglviewComponent */],
            __WEBPACK_IMPORTED_MODULE_12__webglview_test1_component__["a" /* Test1Component */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__app_routing_module__["a" /* AppRoutingModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_three__ = __webpack_require__(91);
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

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__foTools__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__foNode_model__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__foCollection_model__ = __webpack_require__(60);
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

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__foTools__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__foKnowledge_model__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__foObject_model__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__foComponent_model__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__foNode_model__ = __webpack_require__(35);
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

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__foObject_model__ = __webpack_require__(23);
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

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-treeitem',
        template: __webpack_require__(175),
        styles: [__webpack_require__(166)]
    }),
    __metadata("design:paramtypes", [])
], TreeitemComponent);

//# sourceMappingURL=treeitem.component.js.map

/***/ }),

/***/ 109:
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

/***/ 163:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 164:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 165:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 166:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 167:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 168:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 169:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 170:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 172:
/***/ (function(module, exports) {

module.exports = "<h3>\r\n  {{title}}\r\n</h3>\r\n\r\n<div class=\"navbar navbar-inverse \" role=\"navigation\">\r\n  <div class=\"container-fluid\">\r\n    <a class='navbar-brand' [routerLink]=\"['/welcome']\">Welcome</a>\r\n\r\n    <div class=\"nav navbar-nav navbar-right \">\r\n      <a class=\"nav navbar-brand \" [routerLink]=\"[ '/test1'] \">test</a>\r\n\r\n      <a class=\"nav navbar-brand \" [routerLink]=\"[ '/webgl'] \">WebGL</a>\r\n      <a class=\"nav navbar-brand \" [routerLink]=\"[ '/tree'] \">Tree</a>\r\n      <a class=\"nav navbar-brand \" [routerLink]=\"[ '/list'] \">List</a>\r\n      <a class=\"nav navbar-brand \" [routerLink]=\"[ '/network'] \">Network</a>\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n\r\n<router-outlet></router-outlet>"

/***/ }),

/***/ 173:
/***/ (function(module, exports) {

module.exports = "<p>\r\n  listview works!\r\n</p>\r\n"

/***/ }),

/***/ 174:
/***/ (function(module, exports) {

module.exports = "<p>\r\n  networkview works!\r\n</p>\r\n"

/***/ }),

/***/ 175:
/***/ (function(module, exports) {

module.exports = "<p>\r\n  treeitem works!\r\n</p>\r\n"

/***/ }),

/***/ 176:
/***/ (function(module, exports) {

module.exports = "<p>\r\n  treeview works!\r\n</p>\r\n"

/***/ }),

/***/ 177:
/***/ (function(module, exports) {

module.exports = "\n\n<div id=\"drawsceen\">\n  \n</div>\n"

/***/ }),

/***/ 178:
/***/ (function(module, exports) {

module.exports = "<p>\n  webglview works!\n</p>\n\n<div id=\"drawhere\">\n  \n</div>\n"

/***/ }),

/***/ 179:
/***/ (function(module, exports) {

module.exports = "<p>\r\n Sample Models generated by Foundry\r\n</p>\r\n\r\n<a target=\"_blank\" href=\"https://teropa.info/blog/2016/12/12/graphics-in-angular-2.html\">SVG and Canvas Graphics in Angular 2</a>\r\n\r\n<h1>{{model.full}}</h1>\r\n\r\n<pre class=\"well\">{{model | json}}</pre>"

/***/ }),

/***/ 210:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(93);


/***/ }),

/***/ 23:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__foTools__ = __webpack_require__(24);
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

/***/ 24:
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

/***/ 35:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__foTools__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__foObject_model__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__foCollection_model__ = __webpack_require__(60);
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

/***/ 60:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__foObject_model__ = __webpack_require__(23);
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

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-listview',
        template: __webpack_require__(173),
        styles: [__webpack_require__(164)]
    }),
    __metadata("design:paramtypes", [])
], ListviewComponent);

//# sourceMappingURL=listview.component.js.map

/***/ }),

/***/ 62:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-networkview',
        template: __webpack_require__(174),
        styles: [__webpack_require__(165)]
    }),
    __metadata("design:paramtypes", [])
], NetworkviewComponent);

//# sourceMappingURL=networkview.component.js.map

/***/ }),

/***/ 63:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-treeview',
        template: __webpack_require__(176),
        styles: [__webpack_require__(167)]
    }),
    __metadata("design:paramtypes", [])
], TreeviewComponent);

//# sourceMappingURL=treeview.component.js.map

/***/ }),

/***/ 64:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__foundryDrivers_threeDriver__ = __webpack_require__(104);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Test1Component; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Test1Component = (function () {
    function Test1Component() {
        this.mySceen = new __WEBPACK_IMPORTED_MODULE_1__foundryDrivers_threeDriver__["a" /* Sceen3D */]();
    }
    Test1Component.prototype.ngOnInit = function () {
        this.mySceen.init('drawsceen');
        this.mySceen.go();
    };
    return Test1Component;
}());
Test1Component = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-test1',
        template: __webpack_require__(177),
        styles: [__webpack_require__(168)]
    }),
    __metadata("design:paramtypes", [])
], Test1Component);

//# sourceMappingURL=test1.component.js.map

/***/ }),

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_three__ = __webpack_require__(91);
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


//import 'webvr-polyfill';
//import 'three/examples/js/controls/VRControls.js';
//import 'three/examples/js/effects/VREffect.js';
function doAnimate(mySelf) {
    function animate() {
        requestAnimationFrame(animate);
        mySelf.mesh.rotation.x += 0.01;
        mySelf.mesh.rotation.y += 0.02;
        mySelf.renderer.render(mySelf.scene, mySelf.camera);
    }
    animate();
}
var WebglviewComponent = (function () {
    //https://www.npmjs.com/package/three
    function WebglviewComponent() {
        this.scene = {};
        this.camera = {};
        this.renderer = {};
        this.geometry = {};
        this.material = {};
        this.mesh = {};
    }
    WebglviewComponent.prototype.ngOnInit = function () {
        this.init();
        this.renderer.render(this.scene, this.camera);
        doAnimate(this);
    };
    WebglviewComponent.prototype.init = function () {
        this.scene = new __WEBPACK_IMPORTED_MODULE_1_three__["a" /* Scene */]();
        this.camera = new __WEBPACK_IMPORTED_MODULE_1_three__["b" /* PerspectiveCamera */](75, window.innerWidth / window.innerHeight, 1, 10000);
        this.camera.position.z = 1000;
        this.geometry = new __WEBPACK_IMPORTED_MODULE_1_three__["c" /* BoxGeometry */](100, 400, 900);
        this.material = new __WEBPACK_IMPORTED_MODULE_1_three__["d" /* MeshBasicMaterial */]({ color: 0xff00ff, wireframe: true });
        this.mesh = new __WEBPACK_IMPORTED_MODULE_1_three__["e" /* Mesh */](this.geometry, this.material);
        this.scene.add(this.mesh);
        this.renderer = new __WEBPACK_IMPORTED_MODULE_1_three__["f" /* WebGLRenderer */]();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        var element = document.getElementById('drawhere');
        element.appendChild(this.renderer.domElement);
    };
    return WebglviewComponent;
}());
WebglviewComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-webglview',
        template: __webpack_require__(178),
        styles: [__webpack_require__(169)]
    }),
    __metadata("design:paramtypes", [])
], WebglviewComponent);

//# sourceMappingURL=webglview.component.js.map

/***/ }),

/***/ 66:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__foundry_foNode_model__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__foundry_foConcept_model__ = __webpack_require__(106);
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-welcome',
        template: __webpack_require__(179),
        styles: [__webpack_require__(170)]
    }),
    __metadata("design:paramtypes", [])
], WelcomeComponent);

//# sourceMappingURL=welcome.component.js.map

/***/ }),

/***/ 92:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 92;


/***/ }),

/***/ 93:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(109);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ })

},[210]);
//# sourceMappingURL=main.bundle.js.map