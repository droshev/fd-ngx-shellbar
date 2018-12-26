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

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<fd-shellbar>\n  <fd-shellbar-logo>\n    <a href=\"#\" class=\"fd-shellbar__logo fd-shellbar__logo--image-replaced\" aria-label=\"SAP\"></a>\n  </fd-shellbar-logo>\n  <fd-product-menu>\n    <fd-popover alignment=\"right\">\n      <fd-popover-control> <fd-product-menu-control> Corporate Portal </fd-product-menu-control> </fd-popover-control>\n      <fd-popover-body>\n        <fd-menu>\n          <fd-menu-list>\n            <fd-menu-item *ngFor=\"let application of applicationList\"> {{ application.name }} </fd-menu-item>\n          </fd-menu-list>\n        </fd-menu>\n      </fd-popover-body>\n    </fd-popover>\n  </fd-product-menu>\n  <fd-shellbar-subtitle> Subtitle </fd-shellbar-subtitle>\n  <fd-copilot></fd-copilot>\n  <fd-shellbar-actions [user]=\"user\" [userMenu]=\"userMenu\" [productSwitcher]=\"productSwitcher\">\n    <fd-shellbar-action [label]=\"'Search'\">\n      <fd-search-input\n        [inShellbar]=\"true\"\n        [searchTerms]=\"searchTerms\"\n        [(ngModel)]=\"searchTerm\"\n        [searchFunction]=\"exampleSearchFunction\"\n      ></fd-search-input>\n    </fd-shellbar-action>\n    <fd-shellbar-action\n      *ngFor=\"let action of actions\"\n      [glyph]=\"action.glyph\"\n      [callback]=\"action.callback\"\n      [label]=\"action.label\"\n      [notificationCount]=\"action.notificationCount\"\n      [notificationLabel]=\"action.notificationLabel\"\n    >\n    </fd-shellbar-action>\n  </fd-shellbar-actions>\n</fd-shellbar>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        var _this = this;
        this.title = 'fd-ngx-shellbar';
        this.user = {
            initials: 'MD',
        };
        this.userMenu = [
            { text: 'Settings', callback: this.settingsCallback },
            { text: 'Sign Out', callback: this.signOutCallback },
        ];
        this.actions = [
            {
                glyph: 'bell',
                callback: this.actionNotificationCallback,
                label: 'Notifications',
                notificationCount: 12,
                notificationLabel: 'Unread Notifications',
            },
            {
                glyph: 'pool',
                callback: this.actionPoolCallback,
                label: 'Pool',
                notificationCount: 3,
                notificationLabel: 'Pool Count',
            },
        ];
        this.applicationList = [
            { name: 'Application A' },
            { name: 'Application B' },
            { name: 'Application C' },
            { name: 'Application D' },
        ];
        this.searchTerm = '';
        this.searchTerms = [
            {
                text: 'Apple',
                callback: function () {
                    alert('Apple Clicked');
                },
            },
            {
                text: 'Banana',
                callback: function () {
                    alert('Banana Clicked');
                },
            },
            {
                text: 'Kiwi',
                callback: function () {
                    alert('Kiwi Clicked');
                },
            },
            {
                text: 'Strawberry',
                callback: function () {
                    alert('Strawberry Clicked');
                },
            },
        ];
        this.productSwitcher = [
            {
                title: 'Fiori Home',
                image: './assets/01.png',
                callback: function ($event) {
                    _this.productSwitcherCallback($event, 'Fiori Home');
                },
            },
            {
                title: 'S/4 HANA Cloud',
                image: './assets/02.png',
                callback: function ($event) {
                    _this.productSwitcherCallback($event, 'S/4 HANA Cloud');
                },
            },
            {
                title: 'Analytics Cloud',
                image: './assets/03.png',
                callback: function ($event) {
                    _this.productSwitcherCallback($event, 'Analytics Cloud');
                },
            },
            {
                title: 'Ariba',
                image: './assets/04.png',
                callback: function ($event) {
                    _this.productSwitcherCallback($event, 'Ariba');
                },
            },
            {
                title: 'SuccessFactors',
                image: './assets/05.png',
                callback: function ($event) {
                    _this.productSwitcherCallback($event, 'SuccessFactors');
                },
            },
            {
                title: 'Commerce Cloud',
                image: './assets/06.png',
                callback: function ($event) {
                    _this.productSwitcherCallback($event, 'Commerce Cloud');
                },
            },
            {
                title: 'Gigya',
                image: './assets/07.png',
                callback: function ($event) {
                    _this.productSwitcherCallback($event, 'Gigya');
                },
            },
            {
                title: 'Callidus Cloud',
                image: './assets/08.png',
                callback: function ($event) {
                    _this.productSwitcherCallback($event, 'Callidus Cloud');
                },
            },
            {
                title: 'Fieldglass',
                image: './assets/09.png',
                callback: function ($event) {
                    _this.productSwitcherCallback($event, 'Fieldglass');
                },
            },
            {
                title: 'Concur',
                image: './assets/10.png',
                callback: function ($event) {
                    _this.productSwitcherCallback($event, 'Concur');
                },
            },
            {
                title: 'Cloud for Customer',
                image: './assets/11.png',
                callback: function ($event) {
                    _this.productSwitcherCallback($event, 'Cloud for Customer');
                },
            },
            {
                title: 'Cloud Portal',
                image: './assets/12.png',
                callback: function ($event) {
                    _this.productSwitcherCallback($event, 'Cloud Portal');
                },
            },
        ];
        this.exampleSearchFunction = function () {
            alert('Search Function Called with search term: ' + _this.searchTerm);
        };
    }
    AppComponent.prototype.settingsCallback = function ($event) {
        console.log($event);
        alert('Settings Clicked');
    };
    AppComponent.prototype.signOutCallback = function ($event) {
        console.log($event);
        alert('Sign Out Clicked');
    };
    AppComponent.prototype.actionNotificationCallback = function ($event) {
        console.log($event);
        alert('Notification Action Clicked');
    };
    AppComponent.prototype.actionPoolCallback = function ($event) {
        console.log($event);
        alert('Pool Action Clicked');
    };
    AppComponent.prototype.productSwitcherCallback = function ($event, product) {
        console.log($event);
        alert(product + ' Product Clicked');
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var fundamental_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! fundamental-ngx */ "./node_modules/fundamental-ngx/fesm5/fundamental-ngx.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"], fundamental_ngx__WEBPACK_IMPORTED_MODULE_4__["FundamentalNgxModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]],
        })
    ], AppModule);
    return AppModule;
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

module.exports = __webpack_require__(/*! /Users/i820906/develop/github/fd-ngx-shellbar/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map