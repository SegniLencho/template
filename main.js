(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/about/about.component.css":
/*!*******************************************!*\
  !*** ./src/app/about/about.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/about/about.component.html":
/*!********************************************!*\
  !*** ./src/app/about/about.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar-component></app-navbar-component>\n<h2>you want to know who we are? </h2>\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _help_help_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./help/help.component */ "./src/app/help/help.component.ts");
/* harmony import */ var _tutorial_tutorial_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tutorial/tutorial.component */ "./src/app/tutorial/tutorial.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _error_page_error_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./error-page/error-page.component */ "./src/app/error-page/error-page.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'contact', component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_2__["ContactComponent"] },
    { path: 'help', component: _help_help_component__WEBPACK_IMPORTED_MODULE_3__["HelpComponent"] },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"] },
    { path: 'tutorial', component: _tutorial_tutorial_component__WEBPACK_IMPORTED_MODULE_4__["TutorialComponent"] },
    { path: 'aboutus', component: _about_about_component__WEBPACK_IMPORTED_MODULE_6__["AboutComponent"] },
    { path: '**', component: _error_page_error_page_component__WEBPACK_IMPORTED_MODULE_7__["ErrorPageComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes),
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            declarations: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<router-outlet></router-outlet>\n\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Shiromeda';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _navbar_component_navbar_component_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./navbar-component/navbar-component.component */ "./src/app/navbar-component/navbar-component.component.ts");
/* harmony import */ var _help_help_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./help/help.component */ "./src/app/help/help.component.ts");
/* harmony import */ var _tutorial_tutorial_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./tutorial/tutorial.component */ "./src/app/tutorial/tutorial.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _error_page_error_page_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./error-page/error-page.component */ "./src/app/error-page/error-page.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _contact_contact_component__WEBPACK_IMPORTED_MODULE_3__["ContactComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
                _navbar_component_navbar_component_component__WEBPACK_IMPORTED_MODULE_7__["NavbarComponentComponent"],
                _help_help_component__WEBPACK_IMPORTED_MODULE_8__["HelpComponent"],
                _tutorial_tutorial_component__WEBPACK_IMPORTED_MODULE_9__["TutorialComponent"],
                _about_about_component__WEBPACK_IMPORTED_MODULE_10__["AboutComponent"],
                _error_page_error_page_component__WEBPACK_IMPORTED_MODULE_11__["ErrorPageComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/contact/contact.component.css":
/*!***********************************************!*\
  !*** ./src/app/contact/contact.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/contact/contact.component.html":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar-component></app-navbar-component>\n<h3>please contact us through the following contact address</h3>\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.css */ "./src/app/contact/contact.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/error-page/error-page.component.css":
/*!*****************************************************!*\
  !*** ./src/app/error-page/error-page.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/error-page/error-page.component.html":
/*!******************************************************!*\
  !*** ./src/app/error-page/error-page.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <h3>Sorry page not found</h3>\n"

/***/ }),

/***/ "./src/app/error-page/error-page.component.ts":
/*!****************************************************!*\
  !*** ./src/app/error-page/error-page.component.ts ***!
  \****************************************************/
/*! exports provided: ErrorPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorPageComponent", function() { return ErrorPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ErrorPageComponent = /** @class */ (function () {
    function ErrorPageComponent() {
    }
    ErrorPageComponent.prototype.ngOnInit = function () {
    };
    ErrorPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-error-page',
            template: __webpack_require__(/*! ./error-page.component.html */ "./src/app/error-page/error-page.component.html"),
            styles: [__webpack_require__(/*! ./error-page.component.css */ "./src/app/error-page/error-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ErrorPageComponent);
    return ErrorPageComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n@import url('https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');\n/* Footer */\nsection {\n    padding: 60px 0;\n}\nsection .section-title {\n    text-align: center;\n    color: #007b5e;\n    margin-bottom: 50px;\n    text-transform: uppercase;\n}\n#footer {\n    background: #007b5e !important;\n}\n#footer h5{\n\tpadding-left: 10px;\n    border-left: 3px solid #eeeeee;\n    padding-bottom: 6px;\n    margin-bottom: 20px;\n    color:#ffffff;\n}\n#footer a {\n    color: #ffffff;\n    text-decoration: none !important;\n    background-color: transparent;\n    -webkit-text-decoration-skip: objects;\n}\n#footer ul.social li{\n\tpadding: 3px 0;\n}\n#footer ul.social li a i {\n    margin-right: 5px;\n\tfont-size:25px;\n\ttransition: .5s all ease;\n}\n#footer ul.social li:hover a i {\n\tfont-size:30px;\n\tmargin-top:-10px;\n}\n#footer ul.social li a,\n#footer ul.quick-links li a{\n\tcolor:#ffffff;\n}\n#footer ul.social li a:hover{\n\tcolor:#eeeeee;\n}\n#footer ul.quick-links li{\n\tpadding: 3px 0;\n\ttransition: .5s all ease;\n}\n#footer ul.quick-links li:hover{\n\tpadding: 3px 0;\n\tmargin-left:5px;\n\tfont-weight:700;\n}\n#footer ul.quick-links li a i{\n\tmargin-right: 5px;\n}\n#footer ul.quick-links li:hover a i {\n    font-weight: 700;\n}\n@media (max-width:767px){\n\t#footer h5 {\n    padding-left: 0;\n    border-left: transparent;\n    padding-bottom: 0px;\n    margin-bottom: 10px;\n}\n}\n"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link href=\"//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css\" rel=\"stylesheet\" id=\"bootstrap-css\">\n<script src=\"//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js\"></script>\n<script src=\"//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js\"></script>\n<!------ Include the above in your HEAD tag ---------->\n\n<!-- Footer -->\n\t<section id=\"footer\">\n\t\t<div class=\"container\">\n\t\t\t<div class=\"row text-center text-xs-center text-sm-left text-md-left\">\n\t\t\t\t<div class=\"col-xs-12 col-sm-4 col-md-4\">\n\t\t\t\t\t<h5>Quick links</h5>\n\t\t\t\t\t<ul class=\"list-unstyled quick-links\">\n\t\t\t\t\t\t<li><a href=\"javascript:void();\"><i class=\"fa fa-angle-double-right\"></i>Home</a></li>\n\t\t\t\t\t\t<li><a href=\"javascript:void();\"><i class=\"fa fa-angle-double-right\"></i>About</a></li>\n\t\t\t\t\t\t<li><a href=\"javascript:void();\"><i class=\"fa fa-angle-double-right\"></i>FAQ</a></li>\n\t\t\t\t\t\t<li><a href=\"javascript:void();\"><i class=\"fa fa-angle-double-right\"></i>Get Started</a></li>\n\t\t\t\t\t\t<li><a href=\"javascript:void();\"><i class=\"fa fa-angle-double-right\"></i>Videos</a></li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-xs-12 col-sm-4 col-md-4\">\n\t\t\t\t\t<h5>Quick links</h5>\n\t\t\t\t\t<ul class=\"list-unstyled quick-links\">\n\t\t\t\t\t\t<li><a href=\"javascript:void();\"><i class=\"fa fa-angle-double-right\"></i>Home</a></li>\n\t\t\t\t\t\t<li><a href=\"javascript:void();\"><i class=\"fa fa-angle-double-right\"></i>About</a></li>\n\t\t\t\t\t\t<li><a href=\"javascript:void();\"><i class=\"fa fa-angle-double-right\"></i>FAQ</a></li>\n\t\t\t\t\t\t<li><a href=\"javascript:void();\"><i class=\"fa fa-angle-double-right\"></i>Get Started</a></li>\n\t\t\t\t\t\t<li><a href=\"javascript:void();\"><i class=\"fa fa-angle-double-right\"></i>Videos</a></li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-xs-12 col-sm-4 col-md-4\">\n\t\t\t\t\t<h5>Quick links</h5>\n\t\t\t\t\t<ul class=\"list-unstyled quick-links\">\n\t\t\t\t\t\t<li><a href=\"javascript:void();\"><i class=\"fa fa-angle-double-right\"></i>Home</a></li>\n\t\t\t\t\t\t<li><a href=\"javascript:void();\"><i class=\"fa fa-angle-double-right\"></i>About</a></li>\n\t\t\t\t\t\t<li><a href=\"javascript:void();\"><i class=\"fa fa-angle-double-right\"></i>FAQ</a></li>\n\t\t\t\t\t\t<li><a href=\"javascript:void();\"><i class=\"fa fa-angle-double-right\"></i>Get Started</a></li>\n\t\t\t\t\t\t<li><a href=\"https://wwwe.sunlimetech.com\" title=\"Design and developed by\"><i class=\"fa fa-angle-double-right\"></i>Imprint</a></li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-5\">\n\t\t\t\t\t<ul class=\"list-unstyled list-inline social text-center\">\n\t\t\t\t\t\t<li class=\"list-inline-item\"><a href=\"javascript:void();\"><i class=\"fa fa-facebook\"></i></a></li>\n\t\t\t\t\t\t<li class=\"list-inline-item\"><a href=\"javascript:void();\"><i class=\"fa fa-twitter\"></i></a></li>\n\t\t\t\t\t\t<li class=\"list-inline-item\"><a href=\"javascript:void();\"><i class=\"fa fa-instagram\"></i></a></li>\n\t\t\t\t\t\t<li class=\"list-inline-item\"><a href=\"javascript:void();\"><i class=\"fa fa-google-plus\"></i></a></li>\n\t\t\t\t\t\t<li class=\"list-inline-item\"><a href=\"javascript:void();\" target=\"_blank\"><i class=\"fa fa-envelope\"></i></a></li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-white\">\n\t\t\t\t\t<p><u><a href=\"https://www.nationaltransaction.com/\">National Transaction Corporation</a></u> is a Registered MSP/ISO of Elavon, Inc. Georgia [a wholly owned subsidiary of U.S. Bancorp, Minneapolis, MN]</p>\n\t\t\t\t\t<p class=\"h6\">&copy All right Reversed.<a class=\"text-green ml-2\" href=\"https://www.sunlimetech.com\" target=\"_blank\">Sunlimetech</a></p>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</section>\n\t<!-- ./Footer -->\n"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/help/help.component.css":
/*!*****************************************!*\
  !*** ./src/app/help/help.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/help/help.component.html":
/*!******************************************!*\
  !*** ./src/app/help/help.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar-component></app-navbar-component>\n\n<h3>We provide interactive help</h3>\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./src/app/help/help.component.ts":
/*!****************************************!*\
  !*** ./src/app/help/help.component.ts ***!
  \****************************************/
/*! exports provided: HelpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpComponent", function() { return HelpComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HelpComponent = /** @class */ (function () {
    function HelpComponent() {
    }
    HelpComponent.prototype.ngOnInit = function () {
    };
    HelpComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-help',
            template: __webpack_require__(/*! ./help.component.html */ "./src/app/help/help.component.html"),
            styles: [__webpack_require__(/*! ./help.component.css */ "./src/app/help/help.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HelpComponent);
    return HelpComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar-component></app-navbar-component><!-- Section: Team v.1 -->\n<section class=\"team-section text-center my-5\">\n\n  <!-- Section heading -->\n  <h2 class=\"h1-responsive font-weight-bold my-5\">Our amazing team</h2>\n  <!-- Section description -->\n  <p class=\"grey-text w-responsive mx-auto mb-5\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error amet numquam iure provident voluptate esse quasi, veritatis totam voluptas nostrum quisquam eum porro a pariatur veniam.</p>\n\n  <!-- Grid row -->\n  <div class=\"row\">\n\n    <!-- Grid column -->\n    <div class=\"col-lg-3 col-md-6 mb-lg-0 mb-5\">\n      <div class=\"avatar mx-auto\">\n        <img src=\"https://mdbootstrap.com/img/Photos/Avatars/img%20(20).jpg\" class=\"rounded-circle z-depth-1\" alt=\"Sample avatar\">\n      </div>\n      <h5 class=\"font-weight-bold mt-4 mb-3\">Anna Williams</h5>\n      <p class=\"text-uppercase blue-text\"><strong>Graphic designer</strong></p>\n      <p class=\"grey-text\">Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci  sed quia non numquam modi tempora eius.</p>\n      <ul class=\"list-unstyled mb-0\">\n        <!-- Facebook -->\n        <a class=\"p-2 fa-lg fb-ic\">\n          <i class=\"fa fa-facebook blue-text\"> </i>\n        </a>\n        <!-- Twitter -->\n        <a class=\"p-2 fa-lg tw-ic\">\n          <i class=\"fa fa-twitter blue-text\"> </i>\n        </a>\n        <!-- Instagram -->\n        <a class=\"p-2 fa-lg ins-ic\">\n          <i class=\"fa fa-instagram blue-text\"> </i>\n        </a>\n      </ul>\n    </div>\n    <!-- Grid column -->\n\n    <!-- Grid column -->\n    <div class=\"col-lg-3 col-md-6 mb-lg-0 mb-5\">\n      <div class=\"avatar mx-auto\">\n        <img src=\"https://mdbootstrap.com/img/Photos/Avatars/img%20(3).jpg\" class=\"rounded-circle z-depth-1\" alt=\"Sample avatar\">\n      </div>\n      <h5 class=\"font-weight-bold mt-4 mb-3\">John Doe</h5>\n      <p class=\"text-uppercase blue-text\"><strong>Web developer</strong></p>\n      <p class=\"grey-text\">Sed ut perspiciatis unde omnis iste natus error sit voluptatem ipsa accusantium doloremque rem laudantium totam aperiam.</p>\n      <ul class=\"list-unstyled mb-0\">\n        <!-- Facebook -->\n        <a class=\"p-2 fa-lg fb-ic\">\n          <i class=\"fa fa-facebook blue-text\"> </i>\n        </a>\n        <!-- Instagram -->\n        <a class=\"p-2 fa-lg ins-ic\">\n          <i class=\"fa fa-instagram blue-text\"> </i>\n        </a>\n      </ul>\n    </div>\n    <!-- Grid column -->\n\n    <!-- Grid column -->\n    <div class=\"col-lg-3 col-md-6 mb-md-0 mb-5\">\n      <div class=\"avatar mx-auto\">\n        <img src=\"https://mdbootstrap.com/img/Photos/Avatars/img%20(30).jpg\" class=\"rounded-circle z-depth-1\" alt=\"Sample avatar\">\n      </div>\n      <h5 class=\"font-weight-bold mt-4 mb-3\">Maria Smith</h5>\n      <p class=\"text-uppercase blue-text\"><strong>Photographer</strong></p>\n      <p class=\"grey-text\">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim est fugiat nulla id eu laborum.</p>\n      <ul class=\"list-unstyled mb-0\">\n        <!-- Facebook -->\n        <a class=\"p-2 fa-lg fb-ic\">\n          <i class=\"fa fa-facebook blue-text\"> </i>\n        </a>\n        <!-- Instagram -->\n        <a class=\"p-2 fa-lg ins-ic\">\n          <i class=\"fa fa-instagram blue-text\"> </i>\n        </a>\n        <!-- Dribbble -->\n        <a class=\"p-2 fa-lg ins-ic\">\n          <i class=\"fa fa-dribbble blue-text\"> </i>\n        </a>\n      </ul>\n    </div>\n    <!-- Grid column -->\n\n    <!-- Grid column -->\n    <div class=\"col-lg-3 col-md-6\">\n      <div class=\"avatar mx-auto\">\n        <img src=\"https://mdbootstrap.com/img/Photos/Avatars/img%20(32).jpg\" class=\"rounded-circle z-depth-1\" alt=\"Sample avatar\">\n      </div>\n      <h5 class=\"font-weight-bold mt-4 mb-3\">Tom Adams</h5>\n      <p class=\"text-uppercase blue-text\"><strong>Backend developer</strong></p>\n      <p class=\"grey-text\">Perspiciatis repellendus ad odit consequuntur, eveniet earum nisi qui consectetur totam officia voluptates perferendis voluptatibus aut.</p>\n      <ul class=\"list-unstyled mb-0\">\n        <!-- Facebook -->\n        <a class=\"p-2 fa-lg fb-ic\">\n          <i class=\"fa fa-facebook blue-text\"> </i>\n        </a>\n        <!-- Github -->\n        <a class=\"p-2 fa-lg ins-ic\">\n          <i class=\"fa fa-github blue-text\"> </i>\n        </a>\n      </ul>\n    </div>\n    <!-- Grid column -->\n\n  </div>\n  <!-- Grid row -->\n\n</section>\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.title = 'Segni portal';
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/navbar-component/navbar-component.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/navbar-component/navbar-component.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ul.social-network {\n\tlist-style: none;\n\tdisplay: inline;\n\tmargin-left: 0 !important;\n\tpadding: 0;\n}\nul.social-network li {\n\tdisplay: inline;\n  margin: 0 5px;\n}\n.social-network a.icoRss:hover {\n\tbackground-color: #f56505;\n}\n.social-network a.icoFacebook:hover {\n\tbackground-color: #3b5998;\n}\n.social-network a.icoTwitter:hover {\n\tbackground-color: #33ccff;\n}\n.social-network a.icoGoogle:hover {\n\tbackground-color: #bd3518;\n}\n.social-network a.icoVimeo:hover {\n\tbackground-color: #0590b8;\n}\n.social-network a.icoLinkedin:hover {\n\tbackground-color: #007bb7;\n}\n.social-network a.icoRss:hover i,\n.social-network a.icoFacebook:hover i,\n.social-network a.icoTwitter:hover i,\n.social-network a.icoGoogle:hover i,\n.social-network a.icoVimeo:hover i,\n.social-network a.icoLinkedin:hover i {\n\tcolor: #fff;\n}\na.socialIcon:hover,\n.socialHoverClass {\n\tcolor: #fff;\n}\n.social-circle li a {\n\tdisplay: inline-block;\n\tposition: relative;\n\tmargin: 0 auto 0 auto;\n\tborder-radius: 50%;\n\ttext-align: center;\n\twidth: 50px;\n\theight: 50px;\n\tfont-size: 20px;\n}\n.social-circle li i {\n\tmargin: 0;\n\tline-height: 50px;\n  text-align: center;\n  color: #fff;\n}\n.social-circle li a:hover i,\n.triggeredHover {\n\t-moz-transform: rotate(360deg);\n\t-webkit-transform: rotate(360deg);\n\t-ms--transform: rotate(360deg);\n\ttransform: rotate(360deg);\n\ttransition: all 0.2s;\n}\n.social-circle i {\n\ttransition: all 0.8s;\n}\nul li a:hover {\n\tmargin-right:5px;\n}\n"

/***/ }),

/***/ "./src/app/navbar-component/navbar-component.component.html":
/*!******************************************************************!*\
  !*** ./src/app/navbar-component/navbar-component.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<head>\n  <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css\">\n</head>\n<nav class=\"navbar navbar-expand-lg navbar-dark\" style=\"background-color: #007b5e;\">\n  <a class=\"navbar-brand\" [routerLink]=\"['/home']\" routerLinkActive=\"router-link-active\">AfroTech</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\"\n    aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" [routerLink]=\"['/tutorial']\" routerLinkActive=\"router-link-active\">Tech News <span class=\"sr-only\">(current)</span></a>\n      </li>\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" [routerLink]=\"['/help']\" routerLinkActive=\"router-link-active\">Events<span class=\"sr-only\">(current)</span></a>\n      </li>\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" [routerLink]=\"['/contact']\" routerLinkActive=\"router-link-active\">Videos<span class=\"sr-only\">(current)</span></a>\n      </li>\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" [routerLink]=\"['/aboutus']\" routerLinkActive=\"router-link-active\">EResource <span class=\"sr-only\">(current)</span></a>\n      </li>\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" [routerLink]=\"['/aboutus']\" routerLinkActive=\"router-link-active\">Contact Us <span class=\"sr-only\">(current)</span></a>\n      </li>\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" [routerLink]=\"['/aboutus']\" routerLinkActive=\"router-link-active\">About <span class=\"sr-only\">(current)</span></a>\n      </li>\n\n    </ul>\n    <div>\n      <ul class=\"social-network social-circle\">\n        <li><a href=\"https://www.github.com/segnilencho\" class=\"icoFacebook\" title=\"Facebook\"><i class=\"fa fa-facebook\"></i></a></li>\n        <li><a href=\"#\" class=\"icoTwitter\" title=\"Twitter\"><i class=\"fa fa-twitter\"></i></a></li>\n        <li><a href=\"#\" class=\"icoGoogle\" title=\"Google +\"><i class=\"fa fa-google-plus\"></i></a></li>\n      </ul>\n    </div>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/navbar-component/navbar-component.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/navbar-component/navbar-component.component.ts ***!
  \****************************************************************/
/*! exports provided: NavbarComponentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponentComponent", function() { return NavbarComponentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponentComponent = /** @class */ (function () {
    function NavbarComponentComponent() {
    }
    NavbarComponentComponent.prototype.ngOnInit = function () {
    };
    NavbarComponentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar-component',
            template: __webpack_require__(/*! ./navbar-component.component.html */ "./src/app/navbar-component/navbar-component.component.html"),
            styles: [__webpack_require__(/*! ./navbar-component.component.css */ "./src/app/navbar-component/navbar-component.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavbarComponentComponent);
    return NavbarComponentComponent;
}());



/***/ }),

/***/ "./src/app/tutorial/tutorial.component.css":
/*!*************************************************!*\
  !*** ./src/app/tutorial/tutorial.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".col{\npadding-top: 5ch;\n}"

/***/ }),

/***/ "./src/app/tutorial/tutorial.component.html":
/*!**************************************************!*\
  !*** ./src/app/tutorial/tutorial.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar-component></app-navbar-component>\n<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col\">\n            In ancient manuscripts, another means to divide sentences into\n            paragraphs was a line break (newline) followed by an initial\n            at the beginning of the next paragraph. An initial is an oversized\n            capital letter, sometimes outdented beyond the margin of the text.\n            This style can be seen, for example, in the original Old English\n            manuscript of Beowulf. Outdenting is still used in English typography,\n            though not commonly.[3] Modern English typography usually indicates\n            a new paragraph by indenting the first line. This style can be seen\n            in the (handwritten) United States Constitution from 1787.\n        </div>\n        <div class=\"col\">\n                In ancient manuscripts, another means to divide sentences into\n                paragraphs was a line break (newline) followed by an initial\n                at the beginning of the next paragraph. An initial is an oversized\n                capital letter, sometimes outdented beyond the margin of the text.\n                This style can be seen, for example, in the original Old English\n                manuscript of Beowulf. Outdenting is still used in English typography,\n                though not commonly.[3] Modern English typography usually indicates\n                a new paragraph by indenting the first line. This style can be seen\n                in the (handwritten) United States Constitution from 1787. \n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col\">\n                In ancient manuscripts, another means to divide sentences into\n                paragraphs was a line break (newline) followed by an initial\n                at the beginning of the next paragraph. An initial is an oversized\n                capital letter, sometimes outdented beyond the margin of the text.\n                This style can be seen, for example, in the original Old English\n                manuscript of Beowulf. Outdenting is still used in English typography,\n                though not commonly.[3] Modern English typography usually indicates\n                a new paragraph by indenting the first line. This style can be seen\n                in the (handwritten) United States Constitution from 1787. \n        </div>\n        <div class=\"col\">\n                In ancient manuscripts, another means to divide sentences into\n                paragraphs was a line break (newline) followed by an initial\n                at the beginning of the next paragraph. An initial is an oversized\n                capital letter, sometimes outdented beyond the margin of the text.\n                This style can be seen, for example, in the original Old English\n                manuscript of Beowulf. Outdenting is still used in English typography,\n                though not commonly.[3] Modern English typography usually indicates\n                a new paragraph by indenting the first line. This style can be seen\n                in the (handwritten) United States Constitution from 1787. \n        </div>\n        <div class=\"col\">\n                In ancient manuscripts, another means to divide sentences into\n                paragraphs was a line break (newline) followed by an initial\n                at the beginning of the next paragraph. An initial is an oversized\n                capital letter, sometimes outdented beyond the margin of the text.\n                This style can be seen, for example, in the original Old English\n                manuscript of Beowulf. Outdenting is still used in English typography,\n                though not commonly.[3] Modern English typography usually indicates\n                a new paragraph by indenting the first line. This style can be seen\n                in the (handwritten) United States Constitution from 1787. \n        </div>\n    </div>\n</div>\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/tutorial/tutorial.component.ts":
/*!************************************************!*\
  !*** ./src/app/tutorial/tutorial.component.ts ***!
  \************************************************/
/*! exports provided: TutorialComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TutorialComponent", function() { return TutorialComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TutorialComponent = /** @class */ (function () {
    function TutorialComponent() {
    }
    TutorialComponent.prototype.ngOnInit = function () {
    };
    TutorialComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tutorial',
            template: __webpack_require__(/*! ./tutorial.component.html */ "./src/app/tutorial/tutorial.component.html"),
            styles: [__webpack_require__(/*! ./tutorial.component.css */ "./src/app/tutorial/tutorial.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TutorialComponent);
    return TutorialComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\503062677\Desktop\Angular_SpringBoot\InfoTech-master\project-one\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map