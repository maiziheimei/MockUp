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

/***/ "./src/app/ComLR.ts":
/*!**************************!*\
  !*** ./src/app/ComLR.ts ***!
  \**************************/
/*! exports provided: ComLR, LRObj, CRLObj, DependencyObj, AusPair, pairObj */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComLR", function() { return ComLR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LRObj", function() { return LRObj; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CRLObj", function() { return CRLObj; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DependencyObj", function() { return DependencyObj; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AusPair", function() { return AusPair; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pairObj", function() { return pairObj; });
// competence and learning resource
var ComLR = /** @class */ (function () {
    function ComLR() {
    }
    return ComLR;
}());

var LRObj = /** @class */ (function () {
    function LRObj() {
    }
    return LRObj;
}());

var CRLObj = /** @class */ (function () {
    function CRLObj() {
    }
    return CRLObj;
}());

var DependencyObj = /** @class */ (function () {
    function DependencyObj() {
    }
    return DependencyObj;
}());

var AusPair = /** @class */ (function () {
    function AusPair() {
    }
    return AusPair;
}());

var pairObj = /** @class */ (function () {
    function pairObj() {
    }
    return pairObj;
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
/* harmony import */ var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth/auth.guard */ "./src/app/auth/auth.guard.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _impressum_impressum_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./impressum/impressum.component */ "./src/app/impressum/impressum.component.ts");
/* harmony import */ var _modell_center_modell_center_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modell-center/modell-center.component */ "./src/app/modell-center/modell-center.component.ts");
/* harmony import */ var _start_start_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./start/start.component */ "./src/app/start/start.component.ts");
/* harmony import */ var _kriterien_kriterien_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./kriterien/kriterien.component */ "./src/app/kriterien/kriterien.component.ts");
/* harmony import */ var _zustaende_zustaende_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./zustaende/zustaende.component */ "./src/app/zustaende/zustaende.component.ts");
/* harmony import */ var _massnahmen_massnahmen_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./massnahmen/massnahmen.component */ "./src/app/massnahmen/massnahmen.component.ts");
/* harmony import */ var _modell_design_modell_design_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modell-design/modell-design.component */ "./src/app/modell-design/modell-design.component.ts");
/* harmony import */ var _evaluation_evaluation_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./evaluation/evaluation.component */ "./src/app/evaluation/evaluation.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var routes = [
    // { path: '', component: StartComponent, canActivate: [AuthGuard], pathMatch: 'full'},
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    // { path: '**', redirectTo: ''},
    { path: '', redirectTo: '/start', canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]], pathMatch: 'full' },
    { path: 'impressum', component: _impressum_impressum_component__WEBPACK_IMPORTED_MODULE_4__["ImpressumComponent"] },
    { path: 'start', component: _start_start_component__WEBPACK_IMPORTED_MODULE_6__["StartComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]] },
    { path: 'kriteiren', component: _kriterien_kriterien_component__WEBPACK_IMPORTED_MODULE_7__["KriterienComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]] },
    { path: 'zustaende', component: _zustaende_zustaende_component__WEBPACK_IMPORTED_MODULE_8__["ZustaendeComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]] },
    { path: 'massnahman', component: _massnahmen_massnahmen_component__WEBPACK_IMPORTED_MODULE_9__["MassnahmenComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]] },
    { path: 'evaluation', component: _evaluation_evaluation_component__WEBPACK_IMPORTED_MODULE_11__["EvaluationComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]] },
    { path: 'modellDesign', component: _modell_design_modell_design_component__WEBPACK_IMPORTED_MODULE_10__["ModellDesignComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]] },
    { path: 'models', component: _modell_center_modell_center_component__WEBPACK_IMPORTED_MODULE_5__["ModellCenterComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
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

module.exports = "a {\n  color: #B8B8B8;\n}\n\n.header-logout {\n  background-color: #808080;\n  color: #ffffff;\n  height :50px;\n  margin:auto;\n}\n\n.he{\n  float: left;\n  width: 75%;\n}\n\n.app-header{\n  float: left;\n  width: 90%;\n  margin-right: 85px;\n}\n\n.lo{\n  float: left;\n  width: 15%;\n  font-size: 2.4em !important;\n  text-align: right;\n  font-weight: 400;\n  display: inline;\n}\n\nbutton {\n  background-color: transparent;\n  border-style: hidden;\n}\n\n#menu{\n  background: #808080;\n  color:#fff;\n}\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div id=\"menu\">\n<div class=\"container\">\n  <div class=\"header-logout\" *ngIf=\"onOff | async as isLoggedIn\">\n    <div class=\"he\">\n      <app-header class=\"app-header\"></app-header>\n    </div>\n    <div class=\"lo\"><button type=\"button\" (click)=\"onLogout()\" *ngIf=\"onOff\">Exit</button></div>\n  </div>\n</div>\n</div>\n\n<div class=\"container\">\n  <router-outlet></router-outlet>\n</div>\n\n<div id=\"main-footer\">\n    <a routerLink=\"/impressum\" routerLinkActive=\"active\"> IMPRESSUM & DATENSCHUTZERKLÄRUNG </a>\n</div>\n\n"

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
/* harmony import */ var _download_alert_download_alert_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./download-alert/download-alert.component */ "./src/app/download-alert/download-alert.component.ts");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _evaluation_evaluation_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./evaluation/evaluation.component */ "./src/app/evaluation/evaluation.component.ts");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./data.service */ "./src/app/data.service.ts");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user.service */ "./src/app/user.service.ts");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/index.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _massnahmen_massnahmen_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./massnahmen/massnahmen.component */ "./src/app/massnahmen/massnahmen.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var AppComponent = /** @class */ (function () {
    function AppComponent(authService, dialog, _data, _userService, _evn) {
        this.authService = authService;
        this.dialog = dialog;
        this._data = _data;
        this._userService = _userService;
        this._evn = _evn;
        this.sms = [];
        this.continueLogout = false;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._data.selectedModels.subscribe(function (res) { return _this.sms = res; });
        this._data.changeGoal(this.sms);
        this._userService.getUser().subscribe(function (res) { return _this.currUser = res; });
        this._userService.changeUser(this.currUser);
        this.onOff = this.authService.isLoggedIn;
    };
    AppComponent.prototype.onLogout = function () {
        var _this = this;
        // open download-alert dialog
        var dialogRef = this.dialog.open(_download_alert_download_alert_component__WEBPACK_IMPORTED_MODULE_1__["DownloadAlertComponent"]);
        dialogRef.afterClosed().subscribe(function (result) {
            // NOTE: The result can also be nothing if the user presses the `esc` key or clicks outside the dialog
            if (result == 'confirm') {
                _this._data.exportJson(_this.sms, _this.currUser);
                //// ... try to download a pdf
                // this._evn.ngOnInit();
                // this._evn.preview();
                // this._data.print('contentToConvert');
                // this._data.downloadAsPDF(this.sms, this.currUser);
                // this.authService.logout();
            }
            ;
            // if (result == 'cancel') {
            // to clean up the cache before logout
            _this.sms = [];
            _this._data.changeGoal(_this.sms);
            _this.currUser.uuid = Object(uuid__WEBPACK_IMPORTED_MODULE_7__["v4"])();
            _this.currUser.mission = '';
            _this.currUser.vision = '';
            _this.currUser.strategy = '';
            _this.currUser.kriterienList = [];
            _this._userService.changeUser(_this.currUser);
            _this.authService.logout();
            // }
        });
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            providers: [_evaluation_evaluation_component__WEBPACK_IMPORTED_MODULE_4__["EvaluationComponent"], _massnahmen_massnahmen_component__WEBPACK_IMPORTED_MODULE_8__["MassnahmenComponent"]],
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"], _data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"], _user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"], _evaluation_evaluation_component__WEBPACK_IMPORTED_MODULE_4__["EvaluationComponent"]])
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_locales_de__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/locales/de */ "./node_modules/@angular/common/locales/de.js");
/* harmony import */ var _angular_common_locales_de__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_de__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _impressum_impressum_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./impressum/impressum.component */ "./src/app/impressum/impressum.component.ts");
/* harmony import */ var _modell_center_modell_center_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modell-center/modell-center.component */ "./src/app/modell-center/modell-center.component.ts");
/* harmony import */ var _model_list_model_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./model-list/model-list.component */ "./src/app/model-list/model-list.component.ts");
/* harmony import */ var _model_detail_model_detail_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./model-detail/model-detail.component */ "./src/app/model-detail/model-detail.component.ts");
/* harmony import */ var _start_start_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./start/start.component */ "./src/app/start/start.component.ts");
/* harmony import */ var _kriterien_kriterien_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./kriterien/kriterien.component */ "./src/app/kriterien/kriterien.component.ts");
/* harmony import */ var _zustaende_zustaende_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./zustaende/zustaende.component */ "./src/app/zustaende/zustaende.component.ts");
/* harmony import */ var _modell_design_modell_design_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./modell-design/modell-design.component */ "./src/app/modell-design/modell-design.component.ts");
/* harmony import */ var _massnahmen_massnahmen_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./massnahmen/massnahmen.component */ "./src/app/massnahmen/massnahmen.component.ts");
/* harmony import */ var _evaluation_evaluation_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./evaluation/evaluation.component */ "./src/app/evaluation/evaluation.component.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var angular_font_awesome__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! angular-font-awesome */ "./node_modules/angular-font-awesome/dist/angular-font-awesome.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm5/tooltip.es5.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm5/grid-list.es5.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm5/select.es5.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _modell_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./modell.service */ "./src/app/modell.service.ts");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./data.service */ "./src/app/data.service.ts");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./user.service */ "./src/app/user.service.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./auth/auth.guard */ "./src/app/auth/auth.guard.ts");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _sort_arr_pipe__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./sort-arr.pipe */ "./src/app/sort-arr.pipe.ts");
/* harmony import */ var _clrview_clrview_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./clrview/clrview.component */ "./src/app/clrview/clrview.component.ts");
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/cdk/tree */ "./node_modules/@angular/cdk/esm5/tree.es5.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/esm5/table.es5.js");
/* harmony import */ var _download_alert_download_alert_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./download-alert/download-alert.component */ "./src/app/download-alert/download-alert.component.ts");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/esm5/divider.es5.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/esm5/radio.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




Object(_angular_common__WEBPACK_IMPORTED_MODULE_38__["registerLocaleData"])(_angular_common_locales_de__WEBPACK_IMPORTED_MODULE_3___default.a);






































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _impressum_impressum_component__WEBPACK_IMPORTED_MODULE_6__["ImpressumComponent"],
                _modell_center_modell_center_component__WEBPACK_IMPORTED_MODULE_7__["ModellCenterComponent"],
                _model_list_model_list_component__WEBPACK_IMPORTED_MODULE_8__["ModelListComponent"],
                _model_detail_model_detail_component__WEBPACK_IMPORTED_MODULE_9__["ModelDetailComponent"],
                _kriterien_kriterien_component__WEBPACK_IMPORTED_MODULE_11__["KriterienComponent"],
                _start_start_component__WEBPACK_IMPORTED_MODULE_10__["StartComponent"],
                _zustaende_zustaende_component__WEBPACK_IMPORTED_MODULE_12__["ZustaendeComponent"],
                _massnahmen_massnahmen_component__WEBPACK_IMPORTED_MODULE_14__["MassnahmenComponent"],
                _modell_design_modell_design_component__WEBPACK_IMPORTED_MODULE_13__["ModellDesignComponent"],
                _evaluation_evaluation_component__WEBPACK_IMPORTED_MODULE_15__["EvaluationComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_28__["LoginComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_31__["HeaderComponent"],
                _sort_arr_pipe__WEBPACK_IMPORTED_MODULE_32__["SortArrPipe"],
                _clrview_clrview_component__WEBPACK_IMPORTED_MODULE_33__["ClrviewComponent"],
                _download_alert_download_alert_component__WEBPACK_IMPORTED_MODULE_36__["DownloadAlertComponent"],
                _evaluation_evaluation_component__WEBPACK_IMPORTED_MODULE_15__["DialogOverviewExampleDialogComponent"],
                _modell_design_modell_design_component__WEBPACK_IMPORTED_MODULE_13__["NoKLRDialog"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_17__["HttpClientModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_16__["HttpModule"],
                angular_font_awesome__WEBPACK_IMPORTED_MODULE_18__["AngularFontAwesomeModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_19__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatCheckboxModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_24__["MatToolbarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatFormFieldModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_22__["MatGridListModule"], _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatDatepickerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatNativeDateModule"], _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatCardModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_23__["MatSelectModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_39__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatIconModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_21__["MatTooltipModule"], _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatTreeModule"], _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_34__["CdkTreeModule"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_35__["CdkTableModule"], _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatDialogModule"], _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatListModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_37__["MatDividerModule"]
            ],
            providers: [_angular_common_http__WEBPACK_IMPORTED_MODULE_17__["HttpClientModule"], _modell_service__WEBPACK_IMPORTED_MODULE_25__["ModellService"], _modell_design_modell_design_component__WEBPACK_IMPORTED_MODULE_13__["ModellDesignComponent"], _data_service__WEBPACK_IMPORTED_MODULE_26__["DataService"], _user_service__WEBPACK_IMPORTED_MODULE_27__["UserService"], _auth_auth_service__WEBPACK_IMPORTED_MODULE_30__["AuthService"], _auth_auth_guard__WEBPACK_IMPORTED_MODULE_29__["AuthGuard"], { provide: _angular_material__WEBPACK_IMPORTED_MODULE_20__["MAT_DATE_LOCALE"], useValue: 'en-GB' },
                { provide: _angular_core__WEBPACK_IMPORTED_MODULE_2__["LOCALE_ID"], useValue: 'de-DE' },
                { provide: _angular_material__WEBPACK_IMPORTED_MODULE_20__["MAT_DIALOG_DATA"], useValue: {} }, { provide: _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatDialogRef"], useValue: {} }],
            entryComponents: [_clrview_clrview_component__WEBPACK_IMPORTED_MODULE_33__["ClrviewComponent"], _download_alert_download_alert_component__WEBPACK_IMPORTED_MODULE_36__["DownloadAlertComponent"], _evaluation_evaluation_component__WEBPACK_IMPORTED_MODULE_15__["DialogOverviewExampleDialogComponent"], _modell_design_modell_design_component__WEBPACK_IMPORTED_MODULE_13__["NoKLRDialog"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth/auth.guard.ts":
/*!************************************!*\
  !*** ./src/app/auth/auth.guard.ts ***!
  \************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        var _this = this;
        return this.authService.isLoggedIn.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (isLoggedIn) {
            if (!isLoggedIn) {
                _this.router.navigate(['/login']);
                return false;
            }
            return true;
        }));
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/auth/auth.service.ts":
/*!**************************************!*\
  !*** ./src/app/auth/auth.service.ts ***!
  \**************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthService = /** @class */ (function () {
    function AuthService(router) {
        this.router = router;
        this.loggedIn = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
    }
    Object.defineProperty(AuthService.prototype, "isLoggedIn", {
        get: function () {
            return this.loggedIn.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    AuthService.prototype.login = function (user) {
        if (user.userName === '!DFKI' && user.password === '#001') {
            this.loggedIn.next(true);
            this.router.navigate(['/']);
        }
    };
    AuthService.prototype.logout = function () {
        this.loggedIn.next(false);
        this.router.navigate(['/login']);
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/clr.service.ts":
/*!********************************!*\
  !*** ./src/app/clr.service.ts ***!
  \********************************/
/*! exports provided: ClrService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClrService", function() { return ClrService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/toPromise */ "./node_modules/rxjs-compat/_esm5/add/operator/toPromise.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import { BehaviorSubject } from 'rxjs/BehaviorSubject';



var ClrService = /** @class */ (function () {
    function ClrService(http) {
        var _this = this;
        this.http = http;
        this.http.get('assets/learningResource.json')
            .map(function (res) { return res.json(); })
            .subscribe(function (data) { return _this.testdata = data; }, function (err) { return console.log(err); }, function () { return console.log(_this.testdata.length + ' comlearningResource got from local json file'); });
        this.http.get('assets/dependency.json')
            .map(function (res) { return res.json(); })
            .subscribe(function (data) { return _this.dependencies = data; }, function (err) { return console.log(err); }, function () { return console.log(_this.dependencies.length + '  dependencies got from local json file' + _this.dependencies); });
    }
    // to get learning resource of a competence
    ClrService.prototype.getLRObj = function (compt_name) {
        // console.log('... again the testdata.length:  ' + this.testdata.length);
        for (var _i = 0, _a = this.testdata; _i < _a.length; _i++) {
            var entry = _a[_i];
            if (compt_name.indexOf('D3') > -1) {
                console.log('...  D3 index at: ' + compt_name.indexOf('D3'));
            }
            if (entry.competence_name === compt_name || compt_name.indexOf(entry.competence_id) > -1) {
                console.log('... to get lr:  ' + entry.LearningResources[0].lr_name + '...' + entry.LearningResources[0].lr_link);
                return entry.LearningResources;
            }
        }
        return null;
    };
    // to get the Ausprägung Pair of the given kriterien
    ClrService.prototype.getAusPair = function (kriID) {
        var deIndex = this.dependencies.findIndex(function (x) { return x.kri_id === kriID; });
        console.log(kriID + '...  is checked; its index of dependence list:' + deIndex);
        if (deIndex > -1) {
            return this.dependencies[deIndex].dependAuspr;
        }
        else {
            return null;
        }
    };
    ClrService.prototype.getDependenType = function (kriID) {
        var deIndex = this.dependencies.findIndex(function (x) { return x.kri_id === kriID; });
        if (deIndex > -1) {
            return this.dependencies[deIndex].dependencyType;
        }
        else {
            return null;
        }
    };
    ClrService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], ClrService);
    return ClrService;
}());



/***/ }),

/***/ "./src/app/clrview/clrview.component.css":
/*!***********************************************!*\
  !*** ./src/app/clrview/clrview.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-tree-invisible {\n  display: none;\n}\n\n\n.example-tree-node.cdk-tree-node.cdk-nested-tree-node.ng-star-inserted{\n  font-size: 1.5rem;\n  color: #cc8334;\n}\n\n\n.example-tree ul,\n.example-tree li {\n  margin-top: 0;\n  margin-bottom: 0;\n  list-style-type: none;\n}\n\n\n.example-tree-node {\n  display: block;\n  padding-left: 40px;\n}\n"

/***/ }),

/***/ "./src/app/clrview/clrview.component.html":
/*!************************************************!*\
  !*** ./src/app/clrview/clrview.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 style=\"color: #368AC0\" mat-dialog-title>Übersicht der zugehörigen Kompetenzen und Lernressourcen</h1>\n<div mat-dialog-content>\n\n\n  <cdk-tree [dataSource]=\"nestedDataSource\" [treeControl]=\"nestedTreeControl\">\n    <cdk-nested-tree-node *cdkTreeNodeDef=\"let node\" class=\"example-tree-node\" cdkTreeNodeToggle [cdkTreeNodeToggleRecursive]=\"true\">\n      <button mat-icon-button disabled></button>\n\n      <a href=\"{{node.type}}\"  target=\"_blank\">\n        -> &nbsp; {{node.filename}}\n      </a>\n    </cdk-nested-tree-node>\n    <cdk-nested-tree-node *cdkTreeNodeDef=\"let node; when: hasNestedChild\" class=\"example-tree-node\">\n      <button mat-icon-button [attr.aria-label]=\"'toggle ' + node.filename\" cdkTreeNodeToggle>\n        <mat-icon class=\"mat-icon-rtl-mirror\">\n          {{nestedTreeControl.isExpanded(node) ? 'expand_more' : 'chevron_right'}}\n        </mat-icon>\n      </button>\n      {{node.filename}}:  {{node.type}}\n\n      <div [class.example-tree-invisible]=\"nestedTreeControl.isExpanded(node)\">\n        <ng-container cdkTreeNodeOutlet></ng-container>\n      </div>\n    </cdk-nested-tree-node>\n  </cdk-tree>\n\n\n</div>\n\n\n\n"

/***/ }),

/***/ "./src/app/clrview/clrview.component.ts":
/*!**********************************************!*\
  !*** ./src/app/clrview/clrview.component.ts ***!
  \**********************************************/
/*! exports provided: FileNode, FileDatabase, ClrviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileNode", function() { return FileNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileDatabase", function() { return FileDatabase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClrviewComponent", function() { return ClrviewComponent; });
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/tree */ "./node_modules/@angular/cdk/esm5/tree.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/tree */ "./node_modules/@angular/material/esm5/tree.es5.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




// import { DialogOverviewExampleDialogComponent} from '../modell-design/modell-design.component';

/**
 * Json node data with nested structure. Each node has a filename and a value or a list of children
 */
var FileNode = /** @class */ (function () {
    function FileNode() {
    }
    return FileNode;
}());

/**
 * File database, it can build a tree structured Json object from string.
 * Each node in Json object represents a file or a directory. For a file, it has filename and type.
 * For a directory, it has filename and children (a list of files or directories).
 * The input will be a json object string, and the output is a list of `FileNode` with nested
 * structure.
 */
var FileDatabase = /** @class */ (function () {
    function FileDatabase(treedata) {
        this.treedata = treedata;
        this.dataChange = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]([]);
        this.initialize(treedata);
    }
    Object.defineProperty(FileDatabase.prototype, "data", {
        get: function () { return this.dataChange.value; },
        enumerable: true,
        configurable: true
    });
    FileDatabase.prototype.initialize = function (treedata) {
        if (this.treedata === null) {
            console.log('... the treedata is null');
        }
        else {
            console.log('... the treedata got from local jsonfile length is: ' + this.treedata.length);
            // Build the tree nodes from Json object. The result is a list of `FileNode` with nested
            //     file node as children.
            var data = this.buildFileTree(this.treedata, 0);
            // Notify the change.
            this.dataChange.next(data);
        }
    };
    /**
     * Build the file structure tree. The `value` is the Json object, or a sub-tree of a Json object.
     * The return value is the list of `FileNode`.
     */
    FileDatabase.prototype.buildFileTree = function (value, level) {
        var data = [];
        for (var _i = 0, _a = Object.keys(value); _i < _a.length; _i++) {
            var k = _a[_i];
            var v = value[k];
            var node = new FileNode();
            node.filename = "" + k;
            if (v === null || v === undefined) {
                // no action
            }
            else if (typeof v === 'object') {
                node.children = this.buildFileTree(v, level + 1);
            }
            else {
                node.type = v;
            }
            data.push(node);
        }
        return data;
    };
    FileDatabase = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [Object])
    ], FileDatabase);
    return FileDatabase;
}());

var ClrviewComponent = /** @class */ (function () {
    function ClrviewComponent(database, treedata) {
        var _this = this;
        this.treedata = treedata;
        this.title = 'Übersicht der zugehörigen Kompetenzen und Lernressourcen';
        this._getChildren = function (node) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(node.children); };
        this.hasNestedChild = function (_, nodeData) { return !(nodeData.type); };
        this.nestedTreeControl = new _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_0__["NestedTreeControl"](this._getChildren);
        this.nestedDataSource = new _angular_material_tree__WEBPACK_IMPORTED_MODULE_2__["MatTreeNestedDataSource"]();
        database.dataChange.subscribe(function (data) { return _this.nestedDataSource.data = data; });
    }
    ClrviewComponent.prototype.ngOnInit = function () {
    };
    ClrviewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-clrview',
            template: __webpack_require__(/*! ./clrview.component.html */ "./src/app/clrview/clrview.component.html"),
            styles: [__webpack_require__(/*! ./clrview.component.css */ "./src/app/clrview/clrview.component.css")],
            providers: [FileDatabase]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [FileDatabase, Object])
    ], ClrviewComponent);
    return ClrviewComponent;
}());



/***/ }),

/***/ "./src/app/data.service.ts":
/*!*********************************!*\
  !*** ./src/app/data.service.ts ***!
  \*********************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_BehaviorSubject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/BehaviorSubject */ "./node_modules/rxjs-compat/_esm5/BehaviorSubject.js");
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jspdf */ "./node_modules/jspdf/dist/jspdf.min.js");
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jspdf__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! html2canvas */ "./node_modules/html2canvas/dist/npm/index.js");
/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(html2canvas__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DataService = /** @class */ (function () {
    function DataService() {
        // this used to persist the selected models, which will be used by all the other pages
        this.seModels = new rxjs_BehaviorSubject__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
        this.selectedModels = this.seModels.asObservable();
        this.priorities = [
            { value: '3', viewValue: 'HOCH' },
            { value: '2', viewValue: 'MITTEL' },
            { value: '1', viewValue: 'NIEDRIG' },
            { value: '0', viewValue: 'KEINER' }
        ];
    }
    DataService.prototype.changeGoal = function (selectedModels) {
        this.seModels.next(selectedModels);
    };
    DataService.prototype.sortMulti = function (obj) {
        var newArray = obj.map(function (o) {
            return { pri: o.prioirtyNum, kid: o.kriterium_id };
        });
        console.log('.... 1111');
        newArray.forEach(function (element) {
            console.log(element);
        });
        obj.sort(function (a, b) {
            return b['prioirtyNum'] - a['prioirtyNum'] || a['kriterium_id'] - b['kriterium_id'];
        });
        console.log('.... sorted by new multity: ');
        obj.forEach(function (element) {
            console.log(element.kriterium_id);
        });
        return obj;
    };
    // public sortMultiple(obj: SelectedModel[]) {
    //   const newArray = obj.map(o => {
    //     return { pri: o.priority, kid: o.kriterium_id };
    //   });
    //
    //   // console.log('.... 1111');
    //   // newArray.forEach(element => {
    //   //   console.log(element);
    //   // });
    //
    //   let tempArr = [];
    //  newArray.forEach(element => {
    //     let pk = new PriKid();
    //     pk.pri = 3 - this.priorities.findIndex(x => x.viewValue === element.pri);
    //     pk.kid = parseInt(element.kid);
    //     tempArr.push(pk);
    //   });
    //
    //   console.log('.... 222');
    //   tempArr.forEach(element => {
    //     console.log(element);
    //   });
    //
    // // newArray.forEach(o => o.pri = (this.priorities.find(x => x.viewValue === o.pri).value) );
    //
    //   // const newObj = tempArr.map(o => {
    //   //   return { npri: parseInt(o.pri), nkid: parseInt(o.kid) };
    //   // });
    //
    //  tempArr.sort(function(a, b) {
    //     return b['pri'] - a['pri'] || a['kid'] - b['kid'];
    //   });
    //
    //  console.log('.... xxxx');
    //  let newObj2: SelectedModel[] =[];
    //  for(let element of tempArr){
    //    newObj2.push(obj.find(x=> x.kriterium_id === element.kid.toString()));
    //    console.log(element);
    //  }
    //
    //   console.log('.... yyy');
    //   newObj2.forEach(element => {
    //     console.log(element.kriterium_id);
    //   });
    //  return newObj2;
    // }
    DataService.prototype.exportJson = function (sms, currentUser) {
        var arrForJson = [];
        for (var i = 0; i < sms.length; i++) {
            arrForJson.push(sms[i]);
        }
        currentUser.kriterienList = arrForJson.map(function (x) { return Object.assign({}, x); });
        var c = JSON.stringify(currentUser, null, '\t');
        var file = new Blob([c], { type: 'text/json' });
        this.downloadAsJson(file, 'Ihre_Criteria.json');
    };
    DataService.prototype.downloadAsJson = function (blob, filename) {
        if (window.navigator.msSaveOrOpenBlob) { // IE10+
            window.navigator.msSaveOrOpenBlob(blob, filename);
        }
        else { // Others
            var a_1 = document.createElement('a'), url_1 = URL.createObjectURL(blob);
            a_1.href = url_1;
            a_1.download = filename;
            document.body.appendChild(a_1);
            a_1.click();
            setTimeout(function () {
                document.body.removeChild(a_1);
                window.URL.revokeObjectURL(url_1);
            }, 0);
        }
    };
    DataService.prototype.downloadAsPDF = function (sms, currentUser) {
        var doc = new jspdf__WEBPACK_IMPORTED_MODULE_2__();
        doc.setFont('helvetica');
        doc.setFontType('normal');
        doc.setFontSize(10);
        var arrForJson = [];
        for (var i = 0; i < sms.length; i++) {
            arrForJson.push(sms[i]);
            var jsonStr = JSON.stringify(sms[i], null, '\t');
            doc.text(jsonStr, 5, 2);
            if (i < sms.length - 1) {
                doc.addPage();
            }
        }
        // currentUser.kriterienList = arrForJson.map(x => Object.assign({}, x));
        // const jsonStr = JSON.stringify(currentUser, null, '\t');
        doc.save('your_criteria.pdf');
    };
    // public captureScreen(elementid: string)
    // {
    //   this.printPDF();
    // }
    //
    //
    // printPDF() {
    //
    //   var data = document.getElementById('contentToConvert');
    //   html2canvas(data).then(canvas => {
    //     // Few necessary setting options
    //     var imgWidth = 180;
    //     var pageHeight = 295;
    //     var imgHeight = canvas.height * imgWidth / canvas.width;
    //     var heightLeft = imgHeight;
    //
    //
    //     console.log("... canvas.clientHeight is: ",canvas.clientHeight );
    //     console.log("... canvas.clientWidth is: ",canvas.clientWidth );
    //     console.log("... canvas.height is: ",canvas.height );
    //     console.log("... canvas.width is: ",canvas.width );
    //
    //     const contentDataURL = canvas.toDataURL('image/png');
    //     let pdf = new jsPDF('p', 'mm', 'a4'); // A4 size page of PDF
    //     var position = 2;
    //     pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)
    //     pdf.save('MYPdf.pdf'); // Generated PDF
    //   });
    //
    // }
    DataService.prototype.print = function (idstr) {
        var quotes = document.getElementById('contentToConvert');
        //var quotes = document.getElementById(idstr);
        html2canvas__WEBPACK_IMPORTED_MODULE_3__(document.querySelector('#' + idstr)).then(function (canvas) {
            // document.body.appendChild(canvas);
            //! MAKE YOUR PDF‚
            var pdf = new jspdf__WEBPACK_IMPORTED_MODULE_2__('p', 'pt', 'letter');
            console.log("... quotes.clientHeight is: ", quotes.clientHeight);
            console.log("... canvas.Height is: ", canvas.height);
            for (var i = 0; i <= quotes.clientHeight / 980; i++) {
                //! This is all just html2canvas stuff
                var srcImg = canvas;
                var sX = 0;
                var sY = 980 * i; // start 980 pixels down for every new page
                var sWidth = 1000;
                var sHeight = 980;
                var dX = 0;
                var dY = 0;
                var dWidth = 1000;
                var dHeight = 980;
                var onePageCanvas = document.createElement("canvas");
                onePageCanvas.setAttribute('width', '1000');
                onePageCanvas.setAttribute('height', '980');
                var ctx = onePageCanvas.getContext('2d');
                // details on this usage of this function:
                // https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Using_images#Slicing
                ctx.drawImage(srcImg, sX, sY, sWidth, sHeight, dX, dY, dWidth, dHeight);
                // document.body.appendChild(canvas);
                var canvasDataURL = onePageCanvas.toDataURL("image/png", 1.0);
                var width = onePageCanvas.width;
                var height = onePageCanvas.clientHeight;
                //! If we're on anything other than the first page,
                // add another page
                if (i > 0) {
                    pdf.addPage(612, 791); //8.5" x 11" in pts (in*72)
                }
                //! now we declare that we're working on that page
                pdf.setPage(i + 1);
                //! now we add content to that page!
                pdf.addImage(canvasDataURL, 'PNG', 10, 40, (width * .62), (height * .62));
            }
            //! after the for loop is finished running, we save the pdf.
            pdf.save('Adaption_Kriterien.pdf');
        });
    };
    DataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/download-alert/download-alert.component.css":
/*!*************************************************************!*\
  !*** ./src/app/download-alert/download-alert.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/download-alert/download-alert.component.html":
/*!**************************************************************!*\
  !*** ./src/app/download-alert/download-alert.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<mat-dialog-content>\n  <h2>Beachtung: sobald Sie sich abmelden, werden alle Ihre Daten entfernt. </h2>\n</mat-dialog-content>\n<mat-dialog-actions align=\"end\">\n  <button mat-button matDialogClose=\"confirm\" color=\"primary\">herunterladen(.json)</button>\n  <button mat-button matDialogClose=\"cancel\" color=\"warn\">Nein, Danke</button>\n</mat-dialog-actions>\n"

/***/ }),

/***/ "./src/app/download-alert/download-alert.component.ts":
/*!************************************************************!*\
  !*** ./src/app/download-alert/download-alert.component.ts ***!
  \************************************************************/
/*! exports provided: DownloadAlertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DownloadAlertComponent", function() { return DownloadAlertComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DownloadAlertComponent = /** @class */ (function () {
    function DownloadAlertComponent() {
    }
    DownloadAlertComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-download-alert',
            template: __webpack_require__(/*! ./download-alert.component.html */ "./src/app/download-alert/download-alert.component.html"),
            styles: [__webpack_require__(/*! ./download-alert.component.css */ "./src/app/download-alert/download-alert.component.css")]
        })
    ], DownloadAlertComponent);
    return DownloadAlertComponent;
}());



/***/ }),

/***/ "./src/app/evaluation/dialog-overview-example-dialog-component.html":
/*!**************************************************************************!*\
  !*** ./src/app/evaluation/dialog-overview-example-dialog-component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html>\n<head>\n  <style>\n\n    table {\n      width:100%;\n      height:95%;\n    }\n    table, th, td {\n      border: 1px solid black;\n      border-collapse: collapse;\n    }\n    th, td {\n      padding: 15px;\n      text-align: left;\n      font: normal 14px courier !important;\n    }\n\n    td.td01 {\n      padding: 15px;\n      text-align: left;\n      font: normal 16px courier !important;\n      background-color: #d7d7d7;\n    }\n\n    /*table#t01 tr:nth-child(even) {*/\n      /*background-color: #eee;*/\n    /*}*/\n    /*table#t01 tr:nth-child(odd) {*/\n      /*background-color: #fff;*/\n    /*}*/\n\n    table#t01 th {\n      background-color: black;\n      color: white;\n    }\n\n    table.t02 {\n      border: 0px;\n    }\n\n    .printButton {\n      float: right;\n      width: 15%;\n      background-color: #A9B7C0;\n      border: none;\n      color: white;\n      padding: 3px;\n      font-size: medium;\n      margin-left: 15px;\n      margin-right: 15px;\n      margin-top: 5px;\n    }\n\n  </style>\n</head>\n<body>\n\n<div>\n  <input  class=\"printButton\" type=\"button\" value=\"Drucken (.pdf)\" (click)=\"printHtml2PDF()\"/>\n</div>\n\n\n<h1 mat-dialog-title>Vorschau Ihrer Kriterien: </h1>\n\n<div mat-dialog-content >\n\n  <div id=\"contentToConvert\">\n  <table style=\"width:100%\">\n    <tr><td class=\"td01\"  width=\"30%\">Nutzer UUID   </td> <td>{{data.uuid}}</td></tr>\n    <tr><td class=\"td01\"  width=\"30%\">Mission</td> <td  >{{data.mission}}</td></tr>\n    <tr><td class=\"td01\"  width=\"30%\">Vision</td>  <td  >{{data.vision}}</td></tr>\n    <tr><td class=\"td01\"  width=\"30%\">Strategie</td> <td>{{data.strategy}}</td></tr>\n  </table>\n\n  <br style=\"line-height:5vh\">\n  <h2> ausgewählt Kriterien: </h2>\n  <br>\n\n  <div *ngFor=\"let kr of data.kriterienList; index as i\">\n    <table id=\"t01\" border=\"1\" style=\"width:100%\">\n      <tr>\n        <th width=\"63%\">Kriterien_ID: {{kr.kriterium_id}}</th>\n        <td class=\"td01\" width=\"10%\">priority:</td>\n        <td width=\"9%\"> {{kr.priority}}</td>\n        <td class=\"td01\" width=\"10%\">isEvaluated</td>\n        <td width=\"8%\">{{kr.isEvaluated}}</td>\n      </tr>\n    </table>\n\n    <table style=\"width:100%\">\n      <tr><td class=\"td01\"  width=\"30%\">Kriterium</td><td >{{kr.kriterium}}</td></tr>\n      <tr><td class=\"td01\"  width=\"30%\">Korrelierendem Kriterium</td><td  >{{kr.Korkri}}</td>\n      </tr>\n      <tr><td class=\"td01\" >Massnahmen</td><td colspan=\"3\" >{{kr.Massnahmen}}</td></tr>\n      <tr><td class=\"td01\">Notiz</td><td colspan=\"3\" >{{kr.Evaluation_note}}</td></tr>\n    </table>\n\n    <div *ngFor=\"let iste of kr.Iste; index as ii; let l = count\">\n      <table style=\"width:100%\">\n        <tr>\n          <td width=\"12%\" rowspan=\"2\">Ist</td>\n          <td class=\"td01\" width=\"18%\" align=\"center\">Ausprägung {{iste.id}} </td>\n          <td width=\"70%\" align=\"center\">{{iste.content}}</td>\n        </tr>\n        <tr>\n          <td class=\"td01\" width=\"18%\">Notiz</td>\n          <td width=\"70%\" >{{iste.note}}</td>\n        </tr>\n      </table>\n    </div>\n\n    <div *ngFor=\"let ziel of kr.Ziele; index as ii; let l = count\">\n      <table class=\"t02\"  style=\"width:100%\">\n        <tr>\n          <td width=\"12%\" rowspan=\"2\">Ziel</td>\n          <td class=\"td01\" width=\"18%\" align=\"center\">Ausprägung {{ziel.id}} </td>\n          <td  width=\"70%\" align=\"center\">{{ziel.content}}</td>\n        </tr>\n        <tr>\n          <td class=\"td01\" width=\"18%\">Notiz</td>\n          <td width=\"70%\" >{{ziel.note}}</td>\n        </tr>\n      </table>\n    </div>\n\n    <div *ngFor=\"let clr of kr.clrlist; index as ii; let l = count\">\n      <table class=\"t02\" style=\"width:100%\">\n        <tr>\n          <td  width=\"12%\" [attr.rowspan]=\"clr.learningresources.length *2 +1\">Kompetenz</td>\n          <td  > {{clr.competence_name}}</td>\n        </tr>\n\n        <div  *ngFor=\"let lr of clr.learningresources\">\n          <tr>\n            <td  class=\"td01\" width=\"18%\"colspan=\"2\" rowspan=\"2\">Lernressource</td>\n            <td  width=\"70%\">{{lr.lr_id}} : {{lr.lr_name}} </td>\n          </tr>\n          <tr>\n            <td width=\"70%\">{{lr.lr_link}}</td>\n          </tr>\n        </div>\n\n      </table>\n\n    </div>\n\n    <table class=\"t02\" style=\"width:100%\">\n      <tr>\n        <td class=\"td01\" width=\"12%\">Kosten</td>    <td width=\"18%\">{{kr.Kosten | currency:'EUR':true}}</td>\n        <td class=\"td01\" width=\"10%\">Termin</td>    <td width=\"20%\">{{kr.Termin | date: 'dd/MM/yyyy'}}</td>\n        <td class=\"td01\" width=\"18%\">Verantwortlich</td>  <td width=\"22%\">{{kr.Verantwortlich}}</td>\n      </tr>\n    </table>\n\n\n    <br style=\"line-height:5vh\" >\n\n  </div>\n\n\n</div>\n</div>\n\n\n</body>\n</html>\n"

/***/ }),

/***/ "./src/app/evaluation/evaluation.component.css":
/*!*****************************************************!*\
  !*** ./src/app/evaluation/evaluation.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*.container{*/\n  /*background-color: #fac9ae;*/\n  /*}*/\n  div.input-group{\n  float: left;\n  width: 90%;\n  /*border: 1px dotted #A9B7C0;*/\n  border-radius: 25px;\n  background: lightgrey;\n  padding: 20px;\n  margin-top: 20px;\n}\n  #label1{\n  float: left;\n  width: 90%;\n}\n  .input-select{\n  float: right;\n  width: 5%;\n  align-content: left;\n  margin-left: 15px;\n  margin-top: 110px;\n}\n  .checkedModel{\n  float: left;\n  width: 50%;\n  margin:2px;\n}\n  .checkedModel input{\n  background-color:#A9B7C0;\n  width:98%;\n  color:black;\n  font-size: medium;\n  font-weight: bold;\n  padding:5px;\n  border:none;\n  margin-bottom: 5px;\n  display: block;\n}\n  .balls{\n  width: 16%;\n  background-color: #E8E8E8;\n  color:darkgrey;\n  height: 34px;\n  margin-top: 2px;\n  margin-right: 5px;\n  font-size: medium;\n  font-weight: bold;\n  text-align: left;\n  padding-top: 5px;\n}\n  .priority{\n  float:right;\n  width: 16%;\n  margin:2px;\n}\n  .priority input{\n  font-size: medium;\n  height: 34px;\n  width: 100%;\n  font-weight: bold;\n  margin-right: 80px;\n  background-color: #E8E8E8;\n  border:none;\n  display: block;\n  text-align: left;\n  padding:5px;\n  margin-bottom: 5px;\n  color:darkgrey;\n}\n  div.input-group.mb-3{\n  float: left;\n  width: 100%;\n  padding: 0px;\n  margin-top: 2px;\n  background: lightgrey;\n}\n  div.input-group-prepend {\n  float: left;\n  width: 15%;\n}\n  .input-group-text{\n  font-size: medium;\n  font-weight: bold;\n  background: lightgrey;\n  color: gray;\n}\n  .form-control{\n  font-size: medium;\n  background: #E8E8E8;\n  border-style: solid;\n  border-width: 2px;\n  width: 80%;\n}\n  .form-control-2{\n  font-size: medium;\n  background-color: whitesmoke;\n  border-style: none;\n  border-width: 2px;\n  width: 85%;\n}\n  /*.mass{*/\n  /*float:left;*/\n  /*width: 100%;*/\n  /*display: block;*/\n  /*}*/\n  /*.mass  textarea{*/\n  /*float: left;*/\n  /*width: 95%;*/\n  /*background-color: #d7d7d7;*/\n  /*overflow: hidden;*/\n  /*display: block;*/\n  /*margin-top: 5px;*/\n  /*margin-bottom: 5px;*/\n  /*border:1px;*/\n  /*font-size: medium;*/\n  /*color:darkgrey;*/\n  /*font-weight: normal;*/\n  /*}*/\n  .KTV-form {\n  min-width: 150px;\n  max-width: 100%;\n  width: 100%;\n  margin-top: 0px;\n}\n  .example-full-width {\n  width: 100%;\n  font-size: medium;\n  font-weight: bold;\n  background-color: #d7d7d7;\n  color:darkgrey;\n}\n  .btn {\n  float: left;\n  width: 15%;\n  background-color: #989898;\n  border: none;\n  color: white;\n  font-size: medium;\n  cursor: pointer;\n  margin-left: 15px;\n  margin-right: 15px;\n  margin-top: 10px;\n  padding: 3px;\n}\n  /* Darker background on mouse-over */\n  .btn:hover {\n  background-color: #787878;\n}\n  .info{\n  float: left;\n  width: 20%;\n  margin-left: 405px;\n  margin-top: 10px;\n  font-size: medium;\n}\n"

/***/ }),

/***/ "./src/app/evaluation/evaluation.component.html":
/*!******************************************************!*\
  !*** ./src/app/evaluation/evaluation.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<div class=\"container\">-->\n\n  <div id=\"label1\">\n    <label>Welche Maßnahmen wurden umgesetzt? </label>\n  </div>\n\n  <div >\n    <div class=\"info\"> Sie haben evaluiert {{number}} Kriterien. </div>\n    <button class=\"btn\" (click)=\"preview()\"> Vorschau & Drucken </button>\n    <button class=\"btn\" (click)=\"save2Json()\"> herunterladen (.json)</button>\n    <!--<a class=\"btn btn-clear\" title=\"Download JSON\" [href]=\"downloadJsonHref\" download=\"download.json\"></a>-->\n  </div>\n\n<!--<div  id=\"contentToConvert\" >-->\n  <div   *ngFor=\"let cm of sms; index as i\">\n    <div class =\"input-group\">\n      <div class=\"checkedModel\"> <input  disabled type=\"text\" id=\"{{cm.kriterium_id}}\" value=\"{{cm.kriterium_id}}. {{cm.kriterium}}\"></div>\n      <div class=\"balls\">&nbsp;Ist:  {{get_izIDs(cm, 'i')}}</div>\n      <div class=\"balls\">Ziel: {{get_izIDs(cm, 'z')}}</div>\n      <div class=\"priority\"> <input  type=\"text\" disabled value=\" Priorität: {{cm.priority}}\"></div>\n\n\n      <div class=\"input-group mb-3\">\n        <div class=\"input-group-prepend\">\n          <span class=\"input-group-text\">Maßnahme: </span>\n        </div>\n        <textarea class=\"form-control\" aria-label=\"Maßnahme: \"  value=\"{{cm.Massnahmen}}\"  matTextareaAutosize matAutosizeMinRows=\"2\" matAutosizeMaxRows=\"10\" disabled></textarea>\n      </div>\n\n      <div class=\"input-group mb-3\">\n        <div class=\"input-group-prepend\">\n          <span class=\"input-group-text\" style=\"color:black\"> Notiz: </span>\n        </div>\n        <textarea class=\"form-control-2\" aria-label=\"Notiz:\" [(ngModel)]=\"cm.Evaluation_note\"  matTextareaAutosize matAutosizeMinRows=\"2\" matAutosizeMaxRows=\"10\" ></textarea>\n      </div>\n\n\n      <form class=\"KTV-form\">\n        <table class=\"example-full-width\" cellspacing=\"0\">\n          <tr>\n            <td><mat-form-field class=\"example-full-width\" >\n              <input matInput type=\"text\" placeholder=\"Kosten: (€)\" value=\"{{ cm.Kosten| currency:'EUR':true}}\" disabled>\n            </mat-form-field></td>\n            <td>\n              <mat-form-field class=\"example-full-width\">\n              <input matInput [matDatepicker]=\"picker2\"  placeholder=\"Termin:\" [value]=\"cm.Termin\" disabled name=\"myDate\">\n                <mat-datepicker-toggle matSuffix [for]=\"picker2\"></mat-datepicker-toggle>\n                <mat-datepicker #picker2 disabled></mat-datepicker>\n            </mat-form-field>\n            </td>\n            <!--<td>-->\n              <!--<mat-form-field>-->\n                <!--<input matInput [matDatepicker]=\"picker3\" placeholder=\"Termin2\" [value]=\"cm.Termin\">-->\n                <!--<mat-datepicker-toggle matSuffix [for]=\"picker3\"></mat-datepicker-toggle>-->\n                <!--<mat-datepicker #picker3 disabled></mat-datepicker>-->\n              <!--</mat-form-field>-->\n            <!--</td>-->\n            <td><mat-form-field class=\"example-full-width\">\n              <input matInput placeholder=\"Verantwortlich:\" maxlength=\"30\" value=\"{{cm.Verantwortlich}}\" disabled>\n            </mat-form-field></td>\n          </tr></table>\n      </form>\n    </div><!--input Group-->\n\n    <div class=\"input-select\" *ngIf=\"sms[i]\">\n    <!--<div class=\"input-select\">-->\n      <mat-checkbox type=\"checkbox\" checked=\"false\" [checked]=\"sms[i].isEvaluated\" (change)=\"onChange($event, i, cm)\" ></mat-checkbox>\n    </div>\n  </div>\n\n<!--</div>-->\n<!--</div>&lt;!&ndash;container&ndash;&gt;-->\n"

/***/ }),

/***/ "./src/app/evaluation/evaluation.component.ts":
/*!****************************************************!*\
  !*** ./src/app/evaluation/evaluation.component.ts ***!
  \****************************************************/
/*! exports provided: EvaluationComponent, DialogOverviewExampleDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EvaluationComponent", function() { return EvaluationComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogOverviewExampleDialogComponent", function() { return DialogOverviewExampleDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _modell_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modell.service */ "./src/app/modell.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _massnahmen_massnahmen_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../massnahmen/massnahmen.component */ "./src/app/massnahmen/massnahmen.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};








var EvaluationComponent = /** @class */ (function () {
    function EvaluationComponent(_modellService, _data, sanitizer, _userService, _massna, dialog) {
        this._modellService = _modellService;
        this._data = _data;
        this.sanitizer = sanitizer;
        this._userService = _userService;
        this._massna = _massna;
        this.dialog = dialog;
        this.sms = [];
        this.tmpArray = [];
        this.number = 0;
        this.balls = ['1 -> 2', '1 -> 2', '2 -> 3', '0 -> 2', '0 -> 3'];
    }
    EvaluationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._modellService.sharedModells.subscribe(function (res) { return _this.CModells = res; });
        this._modellService.changeModel(this.CModells);
        this.itemCount = this.sms.length;
        this._data.selectedModels.subscribe(function (res) { return _this.sms = res; });
        this._data.changeGoal(this.sms);
        this.number = 0;
        for (var _i = 0, _a = this.sms; _i < _a.length; _i++) {
            var s = _a[_i];
            if (s.isEvaluated) {
                this.number++;
            }
        }
        this._userService.getUser().subscribe(function (res) { return _this.currentUser = res; });
        this._userService.changeUser(this.currentUser);
    };
    // generateDownloadJsonUri() {
    //   const theJSON = JSON.stringify(this.resJsonResponse);
    //   const uri = this.sanitizer.bypassSecurityTrustUrl('data:text/json;charset=UTF-8,' + encodeURIComponent(theJSON));
    //   this.downloadJsonHref = uri;
    // }
    EvaluationComponent.prototype.save2Json = function () {
        this._data.exportJson(this.sms, this.currentUser);
    };
    //  public exportJson(sms): void {
    //    // console.log(this.sms);
    //    // this.tmpArray.push(this.currentUser);
    //    const arrForJson = [];
    //    console.log ('... the current user: ', this.currentUser);
    //    // this will leave out the ones of unchecked
    //    for (let i = 0; i < this.sms.length; i ++) {
    //     // if (this.sms[i].isEvaluated) {
    //      //  // this.tmpArray.push(this.sms[i]);
    //        arrForJson.push(this.sms[i]);
    //     // }
    //    }
    //
    //    //  this.currentUser.kriterienList = this.arrForJson;
    //    this.currentUser.kriterienList = arrForJson.map(x => Object.assign({}, x));
    //    //  this.tmpArray.push(this.currentUser);
    //    //  // this.tmpArray.push(this.arrForJson);
    //
    //   // const c = JSON.stringify(this.tmpArray);
    //    const c = JSON.stringify(this.currentUser);
    //    const file = new Blob([c], {type: 'text/json'});
    //    this.download(file, 'Your_Kriterions.json');
    //  }
    // download(blob, filename) {
    //    if (window.navigator.msSaveOrOpenBlob) { // IE10+
    //      window.navigator.msSaveOrOpenBlob(blob, filename);
    //    } else { // Others
    //      const a = document.createElement('a'),
    //        url = URL.createObjectURL(blob);
    //      a.href = url;
    //      a.download = filename;
    //      document.body.appendChild(a);
    //      a.click();
    //      setTimeout(function() {
    //        document.body.removeChild(a);
    //        window.URL.revokeObjectURL(url);
    //      }, 0);
    //    }
    //  }
    // check or uncheck
    EvaluationComponent.prototype.onChange = function (event, index, item) {
        this.number = 0;
        item.checked = event.checked;
        this.sms[index].isEvaluated = item.checked;
        for (var _i = 0, _a = this.sms; _i < _a.length; _i++) {
            var entry = _a[_i];
            if (entry.isEvaluated) {
                this.number += 1;
                console.log('item is checked', entry.isEvaluated);
            }
        }
    };
    EvaluationComponent.prototype.get_izIDs = function (cdModel, iz) {
        return this._massna.get_izIDs(cdModel, iz);
    };
    EvaluationComponent.prototype.convert = function (_date) {
        var date_temp = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](new Date());
        return date_temp.value;
    };
    EvaluationComponent.prototype.preview = function () {
        console.log('...1. this.currentUser: ', this.currentUser);
        var arrForJson = [];
        for (var i = 0; i < this.sms.length; i++) {
            // var deSe: SelectedModel = this.sms[i];
            // delete deSe.Auspraegung_note;
            // delete deSe.isselected;
            // delete deSe.prioirtyNum;
            // delete deSe.Erklaerung;
            // arrForJson.push(deSe);
            arrForJson.push(this.sms[i]);
        }
        this.currentUser.kriterienList = arrForJson.map(function (x) { return Object.assign({}, x); });
        this._userService.changeUser(this.currentUser);
        console.log('... 2. this.currentUser: ', this.currentUser);
        // delete this.currentUser.name;
        var objJSON = JSON.stringify(this.currentUser, null, '\t');
        console.log('.... preview json: ', objJSON);
        // this.openDialogPreview(objJSON);
        this.openDialogPreviewInTable(this.currentUser);
    };
    // openDialogPreview( TestTree_DATA: any): void {
    //
    //   const dialogRef = this.dialog.open(DialogOverviewExampleDialogComponent, {
    //     width: '1000px',
    //    // height: '1000px',
    //     // data: { name: this.test_name, animal: this.test_animal }
    //     data: <JSON> TestTree_DATA
    //   });
    //
    //   dialogRef.afterClosed().subscribe(result => {
    //     console.log('The preview dialog was closed; ');
    //   });
    // }
    EvaluationComponent.prototype.openDialogPreviewInTable = function (TestTree_DATA) {
        console.log('... TestTree_DATA: ', TestTree_DATA);
        var dialogRef = this.dialog.open(DialogOverviewExampleDialogComponent, {
            width: '1000px',
            //height: '1000px',
            // data: { name: this.test_name, animal: this.test_animal }
            data: TestTree_DATA
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The preview dialog was closed; ');
        });
    };
    EvaluationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            providers: [_massnahmen_massnahmen_component__WEBPACK_IMPORTED_MODULE_5__["MassnahmenComponent"]],
            selector: 'app-evaluation',
            template: __webpack_require__(/*! ./evaluation.component.html */ "./src/app/evaluation/evaluation.component.html"),
            styles: [__webpack_require__(/*! ./evaluation.component.css */ "./src/app/evaluation/evaluation.component.css")]
        }),
        __metadata("design:paramtypes", [_modell_service__WEBPACK_IMPORTED_MODULE_2__["ModellService"], _data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"], _user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"], _massnahmen_massnahmen_component__WEBPACK_IMPORTED_MODULE_5__["MassnahmenComponent"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]])
    ], EvaluationComponent);
    return EvaluationComponent;
}());

var DialogOverviewExampleDialogComponent = /** @class */ (function () {
    function DialogOverviewExampleDialogComponent(dialogRef, _dataService, data) {
        this.dialogRef = dialogRef;
        this._dataService = _dataService;
        this.data = data;
    }
    DialogOverviewExampleDialogComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    // captureScreenPDF(){
    //   this._dataService.captureScreen('contentToConvert');
    // }
    DialogOverviewExampleDialogComponent.prototype.printHtml2PDF = function () {
        this._dataService.print('contentToConvert');
    };
    DialogOverviewExampleDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'dialog-overview-example-dialog',
            template: __webpack_require__(/*! ./dialog-overview-example-dialog-component.html */ "./src/app/evaluation/dialog-overview-example-dialog-component.html"),
        }),
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_6__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialogRef"],
            _data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"], Object])
    ], DialogOverviewExampleDialogComponent);
    return DialogOverviewExampleDialogComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<mat-toolbar color=\"primary\" *ngIf=\"isLoggedIn$ | async as isLoggedIn\">-->\n  <!--<span>-->\n    <!--Angular NavBar + Login Example #01-->\n  <!--</span>-->\n  <!--<span class=\"fill-remaining-space\"></span>-->\n  <!--<button mat-button>Menu Option 01</button>-->\n  <!--<button mat-button>Menu Option 02</button>-->\n  <!--&lt;!&ndash;button mat-button routerLink=\"login\" *ngIf=\"!isLoggedIn; else notLoggedIn\">Login</button>-->\n  <!--<ng-template #notLoggedIn>-->\n    <!--<button mat-button (click)=\"onLogout()\">Logout</button>-->\n  <!--</ng-template &ndash;&gt;-->\n  <!--<button mat-button (click)=\"onLogout()\" *ngIf=\"isLoggedIn\">Logout</button>-->\n<!--</mat-toolbar>-->\n\n\n<!--<nav id=\"navbar\" *ngIf=\"isLoggedIn$ | async as isLoggedIn\">-->\n<nav id=\"navbar\">\n  <div class=\"container\">\n    <ul>\n      <!--<li> <a routerLink=\"/home\" > Home</a> </li>-->\n      <li> <a routerLink=\"/start\" routerLinkActive=\"active\"> Start</a> </li>\n      <li> <a routerLink=\"/kriteiren\" routerLinkActive=\"active\"> Kriterien</a> </li>\n      <li> <a routerLink=\"/zustaende\" routerLinkActive=\"active\"> Zustände</a> </li>\n      <li> <a routerLink=\"/massnahman\" routerLinkActive=\"active\"> Maßnahmen</a> </li>\n      <li> <a routerLink=\"/evaluation\" routerLinkActive=\"active\"> Evaluation</a> </li>\n      <!--<li> <a routerLink=\"/modellDesign\" routerLinkActive=\"active\"> ModelDesign</a> </li>-->\n      <!--<li> <a routerLink=\"/models\" routerLinkActive=\"active\"> ModelList</a> </li>-->\n      <!--<button mat-button (click)=\"onLogout()\" *ngIf=\"isLoggedIn\">Logout</button>-->\n      <!--<li><button class=\"logout\" type=\"button\" (click)=\"onLogout()\" *ngIf=\"isLoggedIn\" >Logout</button></li>-->\n    </ul>\n\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(authService, dialog) {
        this.authService = authService;
        this.dialog = dialog;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        this.isLoggedIn$ = this.authService.isLoggedIn;
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [
                ".angular-logo {\n        margin: 0 4px 3px 0;\n        height: 35px;\n        vertical-align: middle;\n    }\n    .fill-remaining-space {\n      flex: 1 1 auto;\n    }\n    "
            ]
        }),
        __metadata("design:paramtypes", [_auth_auth_service__WEBPACK_IMPORTED_MODULE_0__["AuthService"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/impressum/impressum.component.css":
/*!***************************************************!*\
  !*** ./src/app/impressum/impressum.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "li {\n  font-size:15px;\n}\n\nh2 {\n  color : gray;\n}\n\nh3 {\n  color : gray;\n}\n"

/***/ }),

/***/ "./src/app/impressum/impressum.component.html":
/*!****************************************************!*\
  !*** ./src/app/impressum/impressum.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\">\n  <h2 align=\"center\">IMPRESSUM & DATENSCHUTZERKLÄRUNG </h2>\n\n  <div>\n    <p></p>\n    <h3><strong>Impressum</strong></h3>\n    <p><strong>Deutsches Forschungszentrum für Künstliche Intelligenz GmbH<br />\n      Projektbüro Berlin</strong><br />\n      Alt-Moabit 91 C<br />\n      10559 Berlin<br />\n      Deutschland<br />\n      Telefon: +49 (0)30 / 238 95-0<br />\n      Telefax: +49 (0)30 / 238 95-1810</p>\n    <p><strong>Standort Bremen</strong><br />\n      Robert-Hooke-Straße 1<br />\n      28359 Bremen<br />\n      Deutschland<br />\n      Telefon: +49 (0)421 / 178 45-0<br />\n      Telefax: +49 (0)421 / 178 45-4150</p>\n    <p><strong>Standort Kaiserslautern</strong><br />\n      Trippstadter Straße 122<br />\n      67663 Kaiserslautern<br />\n      Deutschland<br />\n      Telefon: +49 (0)631 / 205 75-0<br />\n      Telefax: +49 (0)631 / 205 75-5030</p>\n    <p><strong>Standort Saarbrücken</strong><br />\n      Stuhlsatzenhausweg 3<br />\n      66123 Saarbrücken<br />\n      Deutschland<br />\n      Telefon: +49 (0)681 / 857 75-0<br />\n      Telefax: +49 (0)681 / 857 75-5341</p>\n    <p><strong>Vertretungsberechtigte Geschäftsführer</strong><br />\n      Prof. Dr. Dr. h.c. mult. Wolfgang Wahlster (Vorsitzender)<br />\n      Dr. Walter Olthoff</p>\n    <p><strong>Vorsitzender des Aufsichtsrates</strong><br />\n      Prof. Dr. h.c. Hans A. Aukes</p>\n    <p>Registergericht: Amtsgericht Kaiserslautern<br />\n      Registernummer: HRB 2313</p>\n    <p>ID-Nummer: DE 148 646 973</p>\n    <p>&nbsp;</p>\n    <h3><strong>Datenschutzerklärung</strong></h3>\n    <p>Das DFKI (Deutsches Forschungszentrum für Künstliche Intelligenz GmbH) und seine Mitarbeiter/-innen setzen sich ziel- und risikoorientiert für die informationelle Selbstbestimmung und das Grundrecht auf Schutz personenbezogener Daten ein. In dieser Datenschutzerklärung informieren wir Sie über die Verarbeitung Ihrer personenbezogenen Daten bei Besuch und Benutzung unserer Webseite.</p>\n    <p><strong>Verantwortlicher</strong></p>\n    <p>Deutsches Forschungszentrum für Künstliche Intelligenz GmbH (DFKI)<br />\n      Telefon: +49 (0)631 / 205 75-0, E-Mail: <a href=\"mailto:info@dfki.de\">info@dfki.de</a>, Impressum</p>\n    <p><strong>Datenschutzbeauftragter</strong></p>\n    <p>Telefon: +49 (0)631 / 205 75-0, E-Mail: <a href=\"mailto:datenschutz@dfki.de\">datenschutz@dfki.de</a></p>\n    <p><strong>Zweck der Verarbeitung</strong></p>\n    <ul>\n      <li>Bereitstellung des Informationsangebotes im Rahmen der Öffentlichkeitsarbeit des DFKI</li>\n      <li>Kontaktaufnahme und Korrespondenz mit Besuchern und Benutzern</li>\n    </ul>\n    <p><strong>Anonyme und geschützte Benutzung</strong></p>\n    <p>Der Besuch und die Benutzung unserer Webseite sind anonym. Personenbezogene Daten werden auf unserer Webseite nur im technisch notwendigen Umfang erhoben. Die verarbeiteten personenbezogenen Daten werden außer aufgrund konkreter gesetzlicher Verpflichtungen nicht an Dritte übermittelt oder in anderer Weise offengelegt. Wir binden innerhalb unseres Informationsangebots keine Inhalts- oder Serviceangebote von Drittanbietern ein. Bei der Benutzung unserer Webseite ist die Datenübertragung im Internet durch ein als sicher anerkanntes Verschlüsselungsverfahren gegen Kenntnisnahme Dritter geschützt und kann somit nicht auf einfache Weise beobachtet oder verfälscht werden kann.</p>\n    <p><strong>Zugriffsdaten</strong></p>\n    <p>Bei jedem Zugriff auf unsere Webseite werden Nutzungs-, Verkehrs- und Verbindungsdaten erhoben, vorübergehend in einer Protokolldatei gespeichert und regelmäß nach 90 Tagen gelöscht. Über jeden Zugriff/Abruf werden folgende Daten gespeichert:</p>\n    <ul>\n      <li>IP-Adresse</li>\n      <li>übermittelte User-Agent Information (insbesondere Typ/Version von Webbrowser, Betriebssystem, usw.)</li>\n      <li>übermittelte Referrer Information (URL der verweisenden Seite)</li>\n      <li>Datum und Uhrzeit des Zugriffs/Abrufs</li>\n      <li>übermittelte Zugriffsmethode/Funktion</li>\n      <li>übermittelte Eingabewerte (Suchbegriffe, usw.)</li>\n      <li>aufgerufene Seite bzw. abgerufene Datei</li>\n      <li>übertragene Datenmenge</li>\n      <li>Status der Verarbeitung des Zugriffs/Abrufs</li>\n    </ul>\n    <p>Die Verarbeitung der Zugriffsdaten ist rechtmäßig, weil sie zur Wahrung berechtigter Interessen des DFKI erforderlich ist. Die berechtigten Interessen des DFKI sind die Anpassung und Optimierung des Informationsangebots und die Ermittlung, Aufdeckung von Verfolgung von rechtswidrigen Handlungen im Zusammenhang mit der Benutzung der Webseite. Die gespeicherten Datensätze können statistisch ausgewertet werden, um unser Informationsangebot an die Bedürfnisse unserer Besucher anpassen und optimieren zu können. Techniken, die es ermöglichen, das Zugriffsverhalten der Benutzer nachzuvollziehen (Tracking), werden nicht eingesetzt. Die Erstellung von Benutzerprofilen und eine darauf beruhende automatisierte Entscheidungsfindung ist ausgeschlossen. Die gespeicherten Datensätze sind nicht bestimmten Personen zuordenbar. Eine Zusammenführung mit anderen Datenquellen wird grundsätzlich nicht vorgenommen. Die gespeicherten Daten können jedoch geprüft und mit anderen Datenquellen zusammengeführt werden, wenn uns konkrete Anhaltspunkte für eine rechtswidrige Benutzung bekannt werden.</p>\n    <p><strong>Cookies</strong></p>\n    <p>Auf unserer Webseite verwenden wir sogenannte Cookies. Cookies sind kleine Dateien, die von Ihrem Webbrowser gespeichert werden. Die auf unserer Webseite verwendeten Cookies richten auf Ihrem Rechner keinen Schaden an und enthalten keine Schadsoftware. Sie ermöglichen eine benutzerfreundliche und effektive Nutzung unserer Webseite. Wir verwenden Cookies nicht für Werbezwecke. Wir übertragen an Ihren Webbrowser temporäre Session Cookies. Sie sind nur für die Dauer Ihres Besuches auf unserer Webseite gültig und sie haben außerhalb unserer Webseite keine Bedeutung. Die temporären Cookies werden verwendet, um Ihre Sitzung während Ihres Besuches mit einer eindeutigen Nummer zu identifizieren und unsere Inhalte in der von Ihnen bevorzugten Sprache zu übertragen. Nach Ende Ihres Besuches können Sie die Session Cookies durch Beendigung Ihres Webbrowsers löschen. Wir übertragen an Ihren Webbrowser auch permanente Cookies mit einer Gültigkeitsdauer von höchstens 365 Tagen. Wir verwenden diese Cookies ausschließlich dazu, bei Ihrem nächsten Besuch unserer Webseite Ihre Einstellungen für die Art der Darstellung (normal, invertiert) und für die Schriftgröße zu beachten. Weiterhin wird vermerkt, ob Sie die Information über die Verwendung von Cookies in Ihrem Webbrowser zur Kenntnis genommen haben. Sie können Ihren Webbrowser so einstellen, dass Sie über das Setzen von Cookies informiert werden und Cookies nur im Einzelfall erlauben bzw. die Annahme von Cookies für bestimmte Fälle oder generell ausschließen. Bereits gespeicherte Cookies können Sie in den Einstellungen Ihres Webbrowsers löschen. Sie können auch das automatische Löschen von Cookies beim Beenden Ihres Webbrowsers einstellen. Bei der Deaktivierung von Cookies kann die Funktionalität unserer Webseite eingeschränkt sein. In jedem Fall steht unser Informationsangebot in seinem vollem Umfang zur Verfügung.</p>\n    <p><strong>Social Media</strong></p>\n    <p>Wir betten keine Social Media Plugins in unserer Webseite ein. Wenn Sie unsere Webseite besuchen, werden daher keine Daten an Social Media Services übermittelt. Eine Profilbildung durch Dritte ist somit ausgeschlossen. Sie haben jedoch die Möglichkeit, direkt zu unseren Informationsangeboten auf Facebook, Twitter und YouTube zu wechseln. Für die Benutzung dieser Dienste verweisen wir auf die Geschäftsbedingungen und die Datenschutzbestimmungen der jeweiligen Betreiber. Wir verarbeiten Ihre personenbezogene Daten innerhalb der sozialen Netzwerke soweit Sie Beiträge einstellen, Nachrichten versenden oder auf andere Weise mit uns kommunizieren.</p>\n    <p><strong>Korrespondenz</strong></p>\n    <p>Sie haben die Möglichkeit, uns per E-Mail zu kontaktieren. Ihre E-Mail-Adresse und andere personenbezogene Kontaktdaten verwenden wir für die Korrespondenz mit Ihnen. Aufgrund gesetzlicher Verpflichtung wird jede E-Mail-Korrespondenz archiviert. Soweit zur Wahrung unserer berechtigten Interessen erforderlich, können Ihre E-Mail-Adresse und andere personenbezogene Kontaktdaten aus der Korrespondenz in unserer Kontaktdatenbank gespeichert werden. In diesem Fall werden Sie eine entsprechende Information über die Verarbeitung Ihrer Kontaktdaten erhalten.</p>\n    <p><strong>Auskunft und Intervention</strong></p>\n    <p>Neben der Information in dieser Datenschutzerklärung haben Sie das Recht auf Auskunft über Ihre personenbezogenen Daten. Zur Gewährleistung einer fairen Verarbeitung bestehen für Sie die folgenden Interventionsrechte:</p>\n    <ul>\n      <li>Das Recht auf Berichtigung und Vervollständigung Ihrer personenbezogenen Daten</li>\n      <li>Das Recht auf Löschung Ihrer personenbezogenen Daten</li>\n      <li>Das Recht auf Einschränkung der Verarbeitung Ihrer personenbezogenen Daten</li>\n      <li>Das Recht auf Widerspruch gegen die Verarbeitung Ihrer personenbezogenen Daten aus Gründen Ihrer besonderen Situation</li>\n    </ul>\n    <p>Für die Ausübung Ihrer Rechte wenden Sie sich bitte an unseren Datenschutzbeauftragten.</p>\n    <p><strong>Recht auf Beschwerde</strong></p>\n    <p>Sie haben das Recht auf Beschwerde bei einer Aufsichtsbehörde, wenn Sie der Ansicht sind, dass die Verarbeitung Ihrer personenbezogenen Daten gegen gesetzliche Datenschutzvorschriften verstößt.</p>\n</div>\n\n\n\n\n\n</div>\n"

/***/ }),

/***/ "./src/app/impressum/impressum.component.ts":
/*!**************************************************!*\
  !*** ./src/app/impressum/impressum.component.ts ***!
  \**************************************************/
/*! exports provided: ImpressumComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImpressumComponent", function() { return ImpressumComponent; });
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

var ImpressumComponent = /** @class */ (function () {
    function ImpressumComponent() {
    }
    ImpressumComponent.prototype.ngOnInit = function () {
    };
    ImpressumComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-impressum',
            template: __webpack_require__(/*! ./impressum.component.html */ "./src/app/impressum/impressum.component.html"),
            styles: [__webpack_require__(/*! ./impressum.component.css */ "./src/app/impressum/impressum.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ImpressumComponent);
    return ImpressumComponent;
}());



/***/ }),

/***/ "./src/app/kriterien/kriterien.component.css":
/*!***************************************************!*\
  !*** ./src/app/kriterien/kriterien.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".myform{\n  width:100%;\n  float:left;\n  padding:0px;\n}\n\n#close-icon {\n  width:10%;\n}\n\n.myform .form-group{\n  padding: 0;\n  margin: 0;\n}\n\n.myform .smsPart{\n  margin-bottom: 10px;\n  margin-top: 10px;\n  background-color: yellow;\n}\n\n.myform .msPart{\n  margin-bottom: 10px;\n  margin-top: 10px;\n  background-color: greenyellow;\n}\n\n.myform .form-group label{\n  float:left;\n  width: 60%;\n  height: 30px;\n  background-color:#A9B7C0;\n  color:#333;\n  font-weight: bolder;\n  padding:0;\n  border:none;\n  margin-bottom: 20px;\n  margin-top: 15px;\n  font-size: medium;\n  cursor: zoom-in;\n}\n\n.hange {\n  float: left;\n  width:25%;\n  height:30px;\n  background-color: #EFD9C1;\n  font-size: 12px;\n  margin-top: 15px;\n  margin-left: 1px;\n  border: 0px;\n}\n\n.myform .form-group mat-checkbox {\n  float: right;\n  width: 20%;\n  margin-right: -80px;\n  margin-top: 20px;\n  padding: 0;\n}\n\n.fa-check-circle-o{\n  font-size:40px;\n  color:orange;\n  width: 20%;\n  float:right;\n  margin-right: -80px;\n  margin-top: 20px;\n  padding: 0;\n  box-sizing: border-box;\n  position: center;\n}\n\n.fa-check-circle{\n  font-size:40px;\n  color:orange;\n  float:right;\n  width: 20%;\n  box-sizing: border-box;\n  position: center;\n  margin-right: -80px;\n  margin-top: 20px;\n  padding: 0;\n}\n\n.myform .form-group textarea {\n  padding: 8px;\n  width: 75%;\n  border-radius: 0;\n  overflow: hidden;\n  background: #EFD9C1;\n  display: block;\n  border-color: lightgrey;\n  font-size: medium;\n  resize: none;\n  overflow-y: scroll;\n}\n\n.mat-form-field{\n  width:100% !important;\n  border:0;\n  margin:0;\n  padding:0;\n}\n\n#wrapper {\n}\n\n#content {\n  float: left;\n  width: 80%;\n}\n\n#sidebar {\n  float: right;\n  width: 20%;\n  margin-right: -100px;\n  margin-bottom: 0;\n  margin-top: 0;\n}\n\n#cleared {\n  clear: both;\n}\n\n.mat-radio-button  {\n  margin-right: 20px;\n  margin-left: 20px;\n}\n\n.mat-radio-group {\n  float: right;\n  margin-right: 15px;\n}\n\n#filter {\n  float: right;\n  width: 100%;\n  margin-right: 80px;\n}\n\n.rb {\n  font: normal 20px courier !important;\n  color: grey;\n}\n"

/***/ }),

/***/ "./src/app/kriterien/kriterien.component.html":
/*!****************************************************!*\
  !*** ./src/app/kriterien/kriterien.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<!--<div class=\"container\">-->\n<form class=\"myform\">\n  <div id=\"label1\">\n    <label> Welche Kriterien benötigen Sie für Ihre Ziele?  </label>\n  </div>\n  <!--<div id=\"showAll\">-->\n  <!--<label (click)=\"allParts()\"> {{showAll}} </label>-->\n  <!--</div>-->\n\n  <div id=\"filter\">\n    <mat-radio-group  [(ngModel)]=\"selectedAll\" name=\"radio\">\n      <mat-radio-button class=\"rb\" *ngFor=\"let sa of saOptions\" [value]=\"sa\">\n        {{sa}}\n      </mat-radio-button>\n    </mat-radio-group>\n  </div>\n  <!--<div >Your favorite season is: {{selectedAll}}</div>-->\n\n\n  <div *ngIf=\"selectedAll==='auswählen'\">\n    <div class =\"form-group\" *ngFor=\"let modell of modells | sortArr:'_id': 'ascending'; let i = index;\">\n      <div *ngIf=\"modell.isSelected\">\n        <label title=\"click to see description\" (click)=\"showBeschreibung(i)\" >{{modell._id}}. {{modell.Kriterium}}</label>\n        <input class=\"hange\" *ngIf=\"getCheckState(modell) && !(getDependentKriFromSM(modell) ===null) \" [value]=\"getDependentKriFromSM(modell)\" disabled/>\n        <mat-checkbox type=\"checkbox\" checked=\"false\" [checked]=\"getCheckState(modell)\" (change)=\"onChange($event, i, modell)\" ></mat-checkbox>\n        <textarea [hidden]=\"!hiddenValue[i]\" placeholder=\"\"  rows=\"5\" >{{modell.Beschreibung}}</textarea>\n      </div>\n    </div>\n  </div>\n\n\n  <div *ngIf=\"selectedAll==='alle'\">\n    <div class =\"form-group\" *ngFor=\"let modell of modells | sortArr:'_id': 'ascending'; let i = index;\">\n      <label title=\"click to see description\" (click)=\"showBeschreibung(i)\" >{{modell._id}}. {{modell.Kriterium}}</label>\n      <input class=\"hange\" *ngIf=\"getCheckState(modell) && !(getDependentKriFromSM(modell) === null)\" [value]=\"getDependentKriFromSM(modell)\" disabled/>\n      <mat-checkbox type=\"checkbox\" checked=\"false\" [checked]=\"getCheckState(modell)\" (change)=\"onChange($event, i, modell)\" ></mat-checkbox>\n      <textarea [hidden]=\"!hiddenValue[i]\"  placeholder=\"\"  rows=\"5\" >{{modell.Beschreibung}}</textarea>\n    </div>\n  </div>\n</form>\n<!--</div>-->\n"

/***/ }),

/***/ "./src/app/kriterien/kriterien.component.ts":
/*!**************************************************!*\
  !*** ./src/app/kriterien/kriterien.component.ts ***!
  \**************************************************/
/*! exports provided: KriterienComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KriterienComponent", function() { return KriterienComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _modell_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modell.service */ "./src/app/modell.service.ts");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _selectedModel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../selectedModel */ "./src/app/selectedModel.ts");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _ComLR__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ComLR */ "./src/app/ComLR.ts");
/* harmony import */ var _clr_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../clr.service */ "./src/app/clr.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var KriterienComponent = /** @class */ (function () {
    function KriterienComponent(_modellService, _data, _userService, _clrService) {
        this._modellService = _modellService;
        this._data = _data;
        this._userService = _userService;
        this._clrService = _clrService;
        // showAll = 'show Selected';
        this.sms = [];
        this.modells = [];
        this.hiddenValue = new Array(47).fill(false);
        this.dependencyStr = "Abhängigkeiten: ";
        this.selectedAll = 'alle';
        // shortLong: boolean;
        this.saOptions = [
            'auswählen',
            'alle',
        ];
        this.amount = 0.0;
        this.formattedAmount = '';
    }
    KriterienComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._modellService.sharedModells.subscribe(function (res) { return _this.modells = res; });
        this._modellService.changeModel(this.modells);
        this._data.selectedModels.subscribe(function (res) { return _this.sms = res; });
        this._data.changeGoal(this.sms);
        console.log('... the sms length is: ', this.sms.length);
    };
    KriterienComponent.prototype.sortModells = function () {
        var size = Object.keys(this.modells).length;
        console.log('... length of dbMmodels: ', size);
        // console.log('... length of modells: ', xxx);
    };
    // allParts(){
    //   console.log('... showALL click before: ', this.showAll);
    //   if(this.showAll === "show Selected") {
    //     this.shortLong = true;
    //     console.log('... hey 1 ');
    //     this.showAll = 'show All';
    //     console.log('... showALL click after: ', this.showAll);
    //   }
    //   else if(this.showAll === "show All") {
    //     console.log('... hey 2 ');
    //     this.shortLong = false;
    //     this.showAll = 'show Selected';
    //     console.log('... showALL click after: ', this.showAll);
    //   }
    //
    // }
    KriterienComponent.prototype.getCLRObjList = function (mod) {
        var crl_KompetenzenStr = mod.Kompetenzen;
        if (crl_KompetenzenStr != null) {
            var crl_KompetenzenList = crl_KompetenzenStr.split(';');
            var clr_list = [];
            for (var _i = 0, crl_KompetenzenList_1 = crl_KompetenzenList; _i < crl_KompetenzenList_1.length; _i++) {
                var kom = crl_KompetenzenList_1[_i];
                var new_clrobj = new _ComLR__WEBPACK_IMPORTED_MODULE_5__["CRLObj"]();
                new_clrobj.competence_name = kom.trim();
                new_clrobj.learningresources = Array();
                new_clrobj.learningresources = this._clrService.getLRObj(kom);
                // for ( let i = 0; i < crl_current.length; i++) {
                //   vals.push(vals[i].val);
                // }
                clr_list.push(new_clrobj);
            }
            mod.clrlist = clr_list;
            console.log('... the clr of checked model: ', mod);
        }
    };
    KriterienComponent.prototype.getKirDependency = function (mod) {
        var kirID = parseInt(mod._id);
        var tempDependent = [];
        tempDependent = this._clrService.getAusPair(kirID);
        mod.dependentAusp = tempDependent;
        mod.dependentType = this._clrService.getDependenType(kirID);
        mod.Korkri = this.getKorrelierendemKriterium(mod);
        console.log('... the dependecy of checked model: ', mod);
    };
    // selectedIndex is actually the model ID
    KriterienComponent.prototype.addItem = function (selectedIndex, kri, clrcontent, ausP, deType, kk) {
        var newItem = new _selectedModel__WEBPACK_IMPORTED_MODULE_3__["SelectedModel"]();
        newItem.isselected = true;
        newItem.kriterium = kri;
        newItem.kriterium_id = selectedIndex;
        newItem.clrlist = clrcontent;
        newItem.dependentAusp = ausP;
        newItem.dependentType = deType;
        newItem.Korkri = kk;
        if (this.sms.length === 0) {
            this.sms[0] = newItem;
            // console.log('... to add the checked model: ', selectedIndex);
        }
        else {
            this.sms.push(newItem);
            // console.log('... to push the checked model: ', selectedIndex);
        }
        // this.sms[selectedIndex] = true;
        this._data.changeGoal(this.sms);
    };
    // selectedIndex is actually the model ID
    KriterienComponent.prototype.removeItem = function (selectedIndex) {
        var cindex = this.sms.findIndex(function (ele) { return ele.kriterium_id === selectedIndex; });
        this.sms.splice(cindex, 1);
        console.log('... to remove the unchecked model: ', selectedIndex);
        this._data.changeGoal(this.sms);
    };
    KriterienComponent.prototype.getCheckState = function (model) {
        // if (this.loadUser.kriterienList.length > 0) {
        //   console.log('... this loadeUser length is: ', this.loadUser.kriterienList.length);
        // }
        if (this.sms != null) {
            // console.log('... to get the check status of model: ', mid);
            var mo = this.sms.find(function (x) { return x.kriterium_id === model._id; });
            if (mo != null) {
                model.isSelected = true;
                // console.log('... mo size is ', mo.length, mid, ' checked status is: ', mo.isselected);
                return mo.isselected;
            }
        }
        else {
            model.isSelected = false;
            return false;
        }
    };
    KriterienComponent.prototype.getDependentKriFromSM = function (model) {
        var s = '';
        if (this.getCheckState(model)) {
            var smodel = this.sms.find(function (x) { return x.kriterium_id === model._id; });
            //console.log('.... using smodel to get dependency');
            s = this.getDependentKri(smodel);
            if (s === null)
                return null;
            if (s === undefined)
                return null;
            if (s !== null && s !== undefined) {
                console.log(" ... s: ", s);
                return s;
            }
            else {
                var ss = this.getDependentKri(model);
                console.log(" ... ss: ", ss);
                return ss;
            }
        }
    };
    KriterienComponent.prototype.getDependentKri = function (model) {
        // console.log('.... then the smodle: ', model);
        var allRelatedKriIDs = '';
        if (model.dependentAusp !== undefined && model.dependentAusp !== null) {
            for (var _i = 0, _a = model.dependentAusp; _i < _a.length; _i++) {
                var de = _a[_i];
                if (de.bulb) {
                    allRelatedKriIDs += de.relatedKri_id + ", ";
                }
            }
            if (allRelatedKriIDs !== null && allRelatedKriIDs.length !== 0) {
                var tttp = '💡' + this.dependencyStr + allRelatedKriIDs.substring(0, allRelatedKriIDs.length - 2);
                console.log(" ... allRelatedKriIDs length: ", allRelatedKriIDs.length, allRelatedKriIDs);
                console.log(" ... tttp: ", tttp);
                return tttp;
            }
        }
        else {
            console.log(" ... sss: ");
            return null;
        }
    };
    KriterienComponent.prototype.getKorrelierendemKriterium = function (model) {
        var kkstr = '';
        if (model.dependentAusp !== undefined && model.dependentAusp !== null) {
            for (var _i = 0, _a = model.dependentAusp; _i < _a.length; _i++) {
                var de = _a[_i];
                if (de.bulb) {
                    kkstr += de.relatedKri_id + ", ";
                }
            }
        }
        if (kkstr !== null && kkstr !== '') {
            return '💡' + kkstr.substring(0, kkstr.length - 2);
        }
        else {
            return null;
        }
    };
    KriterienComponent.prototype.onSMSChange = function (event, i, modell) {
    };
    // check or uncheck modell
    KriterienComponent.prototype.onChange = function (event, index, item) {
        // this.lastAction = 'index: ' + index + ', label: ' + item.label + ', checked: ' + item.checked;
        //
        // console.log('before: ', index, event, item);
        item.checked = event.checked;
        //
        // this.lastAction = 'index: ' + index + ', label: ' + item.label + ', checked: ' + item.checked;
        //
        // console.log('after: ', index, event, item);
        var checkedID = index;
        var kid = item._id;
        this.modells[checkedID].isSelected = item.checked;
        console.log('... now ', kid, ' isSelected : ', this.modells[checkedID].isSelected);
        // retrieve ComLR list
        var mo = this.modells[checkedID];
        this.getCLRObjList(mo);
        //get this model's dependency
        this.getKirDependency(mo);
        this._modellService.changeModel(this.modells);
        if (item.checked) {
            item.isSelected = true;
            if (!this.smsExist(kid)) { // not exist in sms
                this.addItem(kid, item.Kriterium, item.clrlist, item.dependentAusp, item.dependentType, item.Korkri); // add
            }
            // if (kid === '10' || kid === 10) {
            //   this.checked10th = true;
            // }
        }
        if (!item.checked) { // uncheck
            item.isSelected = false;
            if (this.smsExist(kid)) {
                this.removeItem(kid);
            }
            // if (kid === '10' || kid === 10) {
            //   this.checked10th = false;
            // }
        }
        this._modellService.changeModel(this.modells);
        this._data.changeGoal(this.sms);
        // console.log('... the persisted sms ...: ', this.sms.length);
        // for (let i = 0; i < this.sms.length; i++) {
        //   let temp = this.modells.findIndex(x => x._id === this.sms[i].kriterium_id);
        //   if(temp > -1){
        //     this.modells[temp].isSelected  = true;
        //   }
        //   // console.log(this.sms[i].kriterium_id, this.sms[i].kriterium, this.sms[i].isselected);
        //   // console.log('.... model of the persist smodel, item: ', item);
        //   // console.log('.... model of the persist smodel: ', this.modells[checkedID]);
        // }
    };
    KriterienComponent.prototype.smsExist = function (kid) {
        if (this.sms.length === 0) {
            return false;
        }
        else {
            var existIndex = this.sms.findIndex(function (ele) { return ele.kriterium_id === kid; });
            if (existIndex > -1) {
                return true;
            }
            else {
                return false;
            }
        }
    };
    // to expand the Beschreibung section
    KriterienComponent.prototype.showBeschreibung = function (i) {
        if (this.hiddenValue[i]) {
            this.hiddenValue[i] = false;
        }
        else {
            this.hiddenValue[i] = true;
        }
    };
    KriterienComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-kriterien',
            template: __webpack_require__(/*! ./kriterien.component.html */ "./src/app/kriterien/kriterien.component.html"),
            styles: [__webpack_require__(/*! ./kriterien.component.css */ "./src/app/kriterien/kriterien.component.css")],
            providers: [_modell_service__WEBPACK_IMPORTED_MODULE_1__["ModellService"]]
        }),
        __metadata("design:paramtypes", [_modell_service__WEBPACK_IMPORTED_MODULE_1__["ModellService"], _data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"], _user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"], _clr_service__WEBPACK_IMPORTED_MODULE_6__["ClrService"]])
    ], KriterienComponent);
    return KriterienComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-card {\n  max-width: 400px;\n  margin: 2em auto;\n  text-align: center;\n}\n.signin-content {\n  padding: 60px 1rem;\n}\n.full-width-input {\n  width: 100%;\n}\n.mat-raised-button {\n background-color: #A9B7C0;\n}\n"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"signin-content\">\n  <mat-card>\n    <mat-card-content>\n      <form [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\">\n        <p>Please login to continue</p>\n        <mat-form-field class=\"full-width-input\">\n          <input matInput placeholder=\"User\" formControlName=\"userName\" required>\n          <div *ngIf=\"isUsernameInvalid()\">\n            <small><font color=\"red\">incorrect username!</font></small>\n          </div>\n        </mat-form-field>\n        <mat-form-field class=\"full-width-input\">\n          <input matInput type=\"password\" placeholder=\"Password\" formControlName=\"password\" required>\n          <div *ngIf=\"isPassInvalid()\">\n            <small><font color=\"red\">incorrect password!</font></small>\n          </div>\n        </mat-form-field>\n        <button mat-raised-button color=\"primary\" type=\"submit\">Login</button>\n      </form>\n    </mat-card-content>\n  </mat-card>\n</div>\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../auth/auth.service */ "./src/app/auth/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = /** @class */ (function () {
    // fixPassword = 'xw';
    function LoginComponent(fb, authService) {
        this.fb = fb;
        this.authService = authService;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.form = this.fb.group({
            userName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    };
    LoginComponent.prototype.isFieldInvalid = function (field) {
        return ((!this.form.get(field).valid && this.form.get(field).touched) ||
            (this.form.get(field).untouched && this.formSubmitAttempt));
    };
    LoginComponent.prototype.isPassInvalid = function () {
        var ps = this.form.controls.password.value;
        if (ps === '') {
            return false;
        }
        if (ps === '#001' && ps !== null) {
            return false;
        }
        else {
            return true;
        }
        // return (this.form.controls.password.value !== 'xw');
    };
    LoginComponent.prototype.isUsernameInvalid = function () {
        var ps = this.form.controls.userName.value;
        if (ps === '') {
            return false;
        }
        if (ps === '!DFKI' && ps !== null) {
            return false;
        }
        else {
            return true;
        }
        // return (this.form.controls.password.value !== 'xw');
    };
    LoginComponent.prototype.onSubmit = function () {
        if (this.form.valid) {
            this.authService.login(this.form.value);
        }
        this.formSubmitAttempt = true;
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/massnahmen/massnahmen.component.css":
/*!*****************************************************!*\
  !*** ./src/app/massnahmen/massnahmen.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".input-group{\n  float: left;\n  width: 90%;\n  /*border: 1px dotted #A9B7C0;*/\n  border-radius: 25px;\n  background: lightgrey;\n  padding: 20px;\n  margin-top: 20px;\n}\n\ndiv.input-group.mb-3{\n  float: left;\n  width: 95%;\n  padding: 0px;\n  margin-top: 2px;\n}\n\n.input-group-text{\n  font-size: medium;\n  font-weight: bold;\n}\n\n.form-control{\n  font-size: medium;\n  background-color: #F7F9F9;\n}\n\n.checkedModel{\n  float: left;\n  width: 45%;\n  margin:2px;\n}\n\n.checkedModel input{\n  background-color:#A9B7C0;\n  width:100%;\n  color:#333;\n  font-size: medium;\n  font-weight: bold;\n  padding:5px;\n  border:none;\n  margin-bottom: 0px;\n  display: block;\n}\n\n.smallLable {\n  background-color:#A9B7C0;\n  width:45px;\n  height: 34px;\n  color:#333;\n  font-size: medium;\n  font-weight: bold;\n  padding:5px;\n  border:none;\n  margin-top: 2px;\n  margin-bottom: 0px;\n  margin-left: 2px;\n  display: block;\n}\n\n.smallLablePri {\n  background-color:#A9B7C0;\n  width:80px;\n  height: 34px;\n  color:#333;\n  font-size: medium;\n  font-weight: bold;\n  padding:5px;\n  border:none;\n  margin-top: 2px;\n  margin-bottom: 0px;\n  margin-left: 2px;\n  display: block;\n}\n\n.balls{\n  width: 15%;\n  background-color: #EFD9C1;\n  height: 30px;\n  margin-right: 30px;\n  font-size: medium;\n  font-weight: bold;\n  text-align: center;\n  cursor: zoom-in;\n}\n\n.numberCircle {\n  width: 15%;\n  display: block;\n  margin-right: 10px;\n  margin-top: 0px;\n  margin-left: 10px;\n  background: #EFD9C1;\n  border-radius: 100%;\n  width: 36px;\n  height: 36px;\n  padding: 3px;\n  border: 2px solid #EFD9C1;\n  color: #808080;\n  text-align: center;\n  font: 24px Arial, sans-serif;\n  cursor: zoom-in;\n}\n\nbutton#help-icon {\n  width: 40px;\n  height: 36px;\n  padding-left: 0px;\n  padding-right: 0px;\n  margin-left: 5px;\n  background-color: transparent;\n  border: none;\n}\n\n.izLable {\n  display: block;\n  margin-top:0px;\n  margin-right: 5px;\n  width: 110px;\n  height: 33px;\n  margin-left: 2px;\n  background: #EFD9C1;\n  text-align: center;\n  font: 15px Arial, sans-serif;\n  color: #808080;\n  padding: 8px;\n  margin-top: 2px;\n}\n\n.diplayContent {\n  padding: 8px;\n  width: 95%;\n  border-radius: 0;\n  overflow: hidden;\n  background: #F2E0CD;\n  display: block;\n  border-color: lightgrey;\n  font-size: medium;\n  resize: vertical;\n  overflow-y: scroll;\n  margin-bottom: 10px;\n  color: black;\n}\n\n.priority{\n  float:right;\n  width: 7.5%;\n  margin:2px;\n}\n\n.priority input{\n  font-size: medium;\n  width: 100%;\n  height: 34px;\n  margin-left: 0px;\n  font-weight: bold;\n  margin-right: 80px;\n  background-color: #EFD9C1;\n  border:none;\n  display: block;\n  text-align: left;\n  padding:0px;\n  margin-bottom: 5px;\n}\n\n.mass{\n  float:left;\n  width: 100%;\n  display: block;\n}\n\n.mass  textarea{\n  float: left;\n  width: 100%;\n  background-color: #f9f9f9;\n  overflow: hidden;\n  display: block;\n  margin-top: 5px;\n  margin-bottom: 5px;\n  border:1px;\n  font-size: medium;\n}\n\n.KTV-form {\n  min-width: 150px;\n  max-width: 100%;\n  width: 100%;\n  margin-top: 0px;\n}\n\n.example-full-width {\n  width: 95%;\n  font-size: medium;\n  font-weight: bold;\n  background-color: #C7D8C6;\n}\n\n.example2-form {\n  width: 95%;\n}\n\n.example2-full-width {\n  width: 100%;\n  font-size: large;\n  font-weight: bold;\n}\n\n#myCarousel{\n  width: 100%;\n  margin-top: 3px;\n  padding: 10px;\n  background: darkgray;\n  height: 800px;\n}\n\n.carousel-inner{\n  width: 80%;\n}\n\n#myCarousel .carousel-inner .item {\n  width:70%;\n  margin-left: 280px;\n  margin-right: 280px;\n  font-size: medium;\n}\n\n#myCarousel .carousel-inner .left .carousel-control {\n  float: left;\n  margin-left: 0;\n  padding-left: 0;\n}\n\n#myCarousel .carousel-inner .right .carousel-control{\n  float: right;\n  margin-right: 0;\n  padding-right: 0;\n}\n\n.material-icons {\n  font-size: 32px;\n  color: #666666;\n}\n"

/***/ }),

/***/ "./src/app/massnahmen/massnahmen.component.html":
/*!******************************************************!*\
  !*** ./src/app/massnahmen/massnahmen.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<div class=\"container\">-->\n\n  <div id=\"label1\">\n    <label> Welche Maßnahmen sollen die Lücken zwischen Ist- und Ziel-Zuständen schließen? </label>\n  </div>\n\n  <div *ngFor=\"let cm of ssms; index as i\">\n     <!--<div class =\"input-group\" *ngIf=\"sms[i]\">-->\n     <div class =\"input-group\">\n\n         <div class=\"checkedModel\"> <input  disabled type=\"text\" id=\"{{cm.kriterium_id}}\" value=\"{{cm.kriterium_id}}. {{cm.kriterium}}\"></div>\n         <!--<div class=\"balls\" (click)=\"showContent(i)\"> {{cm.ist_id}} -> {{cm.ziel_id}}</div>-->\n         <div><input class=\"smallLable\" disabled type=\"text\" value=\"Ist: \"></div>\n         <div class=\"izLable\" [ngStyle]=\"{'background-color': hiddenShowIst[i]? '#71B7FD' : '#EFD9C1'}\" (click)=\"showIst(i)\">{{get_izIDs(cm, 'i')}}</div>\n\n         <!--<div> <img height=\"30\" width=\"30\" background-color=\"\" src=\"assets/images/arrow1.png\"></div>-->\n         <div><input class=\"smallLable\" disabled type=\"text\" value=\"Ziel: \"></div>\n         <div class=\"izLable\" [ngStyle]=\"{'background-color': hiddenShowZiel[i]? '#a0d878' : '#EFD9C1'}\" (click)=\"showZiel(i)\">{{get_izIDs(cm, 'z')}}</div>\n         <div><input class=\"smallLablePri\" disabled type=\"text\" value=\"Priorität: \"></div>\n         <div class=\"priority\"> <input  type=\"text\" disabled value=\"&nbsp;{{cm.priority}}\"></div>\n\n       <button id=\"help-icon\" (click)=\"openCLRDialog(cm)\"\n               matTooltip=\"View related competencies and learning resources\"\n               aria-label=\"Button that displays a tooltip when focused or hovered over\">\n         <mat-icon> help </mat-icon>\n       </button>\n\n\n       <textarea disabled style=\"background-color: #71B7FD\" class=\"diplayContent\" [hidden]=\"!hiddenShowIst[i]\" matInput placeholder=\"\" matTextareaAutosize matAutosizeMinRows=\"5\" matAutosizeMaxRows=\"10\"> {{get_izContent(cm, 'i')}}</textarea>\n       <textarea disabled style=\"background-color: #a0d878\" class=\"diplayContent\" [hidden]=\"!hiddenShowZiel[i]\" matInput placeholder=\"\" matTextareaAutosize matAutosizeMinRows=\"5\" matAutosizeMaxRows=\"10\"> {{get_izContent(cm, 'z')}}</textarea>\n\n       <div class=\"input-group mb-3\">\n         <div class=\"input-group-prepend\">\n           <span class=\"input-group-text\">Maßnahme: </span>\n         </div>\n         <textarea class=\"form-control\" aria-label=\"Maßnahme: \"  [(ngModel)]=\"cm.Massnahmen\"  matTextareaAutosize matAutosizeMinRows=\"3\" matAutosizeMaxRows=\"15\"></textarea>\n       </div>\n\n       <!--<div class=\"input-group mb-3\">-->\n         <!--<div class=\"input-group-prepend\">-->\n           <!--<span class=\"input-group-text\">Erklärung: &nbsp;&nbsp;</span>-->\n         <!--</div>-->\n         <!--<textarea class=\"form-control\" aria-label=\"Erklärung: \" [(ngModel)]=\"cm.Erklaerung\" matTextareaAutosize matAutosizeMinRows=\"3\" matAutosizeMaxRows=\"15\"></textarea>-->\n       <!--</div>-->\n\n       <div class=\"mass\">\n\n         <form class=\"KTV-form\">\n         <table class=\"example-full-width\" cellspacing=\"0\">\n           <tr>\n              <!--<td><mat-form-field class=\"example-full-width\" >-->\n                <!--<input matInput [(ngModel)]=\"cm.Kosten\" placeholder=\"Kosten: (€)\" [ngModelOptions]=\"{standalone: true}\" (keypress)=\"numberOnly($event)\">-->\n                <!--<mat-hint align=\"end\">Nummer nur</mat-hint>-->\n              <!--</mat-form-field></td>-->\n             <td>\n\n               <mat-form-field class=\"example-full-width\">\n               <input matInput #box (keyup.enter)=\"update(box.value)\" (blur)=\"update(box.value, cm, i)\" placeholder=\"Kosten: (€)\" [ngModel]=\"cm.Kosten| currency:'EUR':'symbol-narrow'\" name=\"Kost\">\n               <mat-hint [ngStyle]=\"{'color': hintText[i]? 'gray' : 'red'}\" align=\"end\" > {{getHintTxt(hintText[i])}}</mat-hint>\n               <!--<mat-error *ngIf=\"Kost.errors.\">-->\n                 <!--falsche Eingabe! Nummer nur.-->\n               <!--</mat-error>-->\n             </mat-form-field>\n\n             </td>\n\n\n              <td><mat-form-field class=\"example-full-width\">\n                <input matInput [matDatepicker]=\"picker\" placeholder=\"Termin:\" [(ngModel)]=\"cm.Termin\"  [ngModelOptions]=\"{standalone: true}\" >\n                <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n                <mat-datepicker #picker ></mat-datepicker>\n              </mat-form-field></td>\n              <td><mat-form-field class=\"example-full-width\">\n                <input matInput #postalCode maxlength=\"30\" placeholder=\"Verantwortlich\" [(ngModel)]=\"cm.Verantwortlich\" [ngModelOptions]=\"{standalone: true}\" >\n              </mat-form-field></td>\n        </tr></table>\n      </form>\n\n       <!--<div> current Mass {{cm.Massnahmen}} Erk:{{cm.Erklaerung}}  Kost: {{cm.Kosten}} Ver: {{cm.Verantwortlich}} Termin: {{cm.Termin}}</div>-->\n\n     </div><!--input Group-->\n\n\n  </div>\n\n</div>\n\n<!--</div>-->\n\n"

/***/ }),

/***/ "./src/app/massnahmen/massnahmen.component.ts":
/*!****************************************************!*\
  !*** ./src/app/massnahmen/massnahmen.component.ts ***!
  \****************************************************/
/*! exports provided: MassnahmenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MassnahmenComponent", function() { return MassnahmenComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _modell_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modell.service */ "./src/app/modell.service.ts");
/* harmony import */ var _modell_design_modell_design_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modell-design/modell-design.component */ "./src/app/modell-design/modell-design.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MassnahmenComponent = /** @class */ (function () {
    // Kost = new FormControl(null, {
    //   validators: Validators.pattern("^[0-9.,]*\\s*€?$"),
    //   updateOn: 'blur'
    // });
    function MassnahmenComponent(_modellService, _data, mdc) {
        this._modellService = _modellService;
        this._data = _data;
        this.mdc = mdc;
        this.ssms = [];
        // money: number = 13495;
        // money: FormControl;
        this.hintCorrect = 'Komma & Nummer nur!';
        this.hintWrong = 'falsch! Komma & Nummer nur!';
        this.email = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email]);
    }
    MassnahmenComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._modellService.sharedModells.subscribe(function (res) { return _this.CModells = res; });
        this._modellService.changeModel(this.CModells);
        this.itemCount = this.ssms.length;
        this._data.selectedModels.subscribe(function (res) { return _this.ssms = res; });
        this._data.changeGoal(this.ssms);
        this.hiddenShowIst = new Array(this.ssms.length).fill(false);
        this.hiddenShowZiel = new Array(this.ssms.length).fill(false);
        this.hintText = new Array(this.ssms.length).fill(true);
        // console.log('... the passed on sms has ...: ', this.ssms.length);
        // for (let i = 0; i < this.ssms.length; i++) {
        //   console.log(this.ssms[i].kriterium_id, this.ssms[i].kriterium,
        //     this.ssms[i].isselected, this.ssms[i].int_priorty); }
    };
    MassnahmenComponent.prototype.getHintTxt = function (tf) {
        if (tf) {
            return this.hintCorrect;
        }
        else {
            return this.hintWrong;
        }
    };
    MassnahmenComponent.prototype.showIst = function (i) {
        if (this.hiddenShowIst[i]) {
            this.hiddenShowIst[i] = false;
        }
        else {
            this.hiddenShowIst[i] = true;
        }
    };
    MassnahmenComponent.prototype.showZiel = function (i) {
        if (this.hiddenShowZiel[i]) {
            this.hiddenShowZiel[i] = false;
        }
        else {
            this.hiddenShowZiel[i] = true;
        }
    };
    MassnahmenComponent.prototype.get_izIDs = function (cdModel, iz) {
        if (iz === 'i') {
            var temp_ist_ids = cdModel.Iste.map(function (ist) {
                return ist.id;
            });
            return temp_ist_ids.join(',');
        }
        if (iz === 'z') {
            var temp_ziel_ids = cdModel.Ziele.map(function (ziel) {
                return ziel.id;
            });
            return temp_ziel_ids.join(',');
        }
        return 'N';
    };
    MassnahmenComponent.prototype.get_izContent = function (cdModel, iz) {
        if (iz === 'i') {
            var temp_ist_contents = cdModel.Iste.map(function (ist) {
                if (ist.content !== null) {
                    return 'Ist ' + ist.id + ': ' + ist.content;
                }
            });
            return temp_ist_contents.join('\n\n');
        }
        if (iz === 'z') {
            var temp_ziel_contents = cdModel.Ziele.map(function (ziel) {
                if (ziel.content !== null) {
                    return 'Ziel ' + ziel.id + ': ' + ziel.content;
                }
            });
            return temp_ziel_contents.join('\n\n');
        }
    };
    MassnahmenComponent.prototype.openCLRDialog = function (cm) {
        this.mdc.openDialog3(cm);
    };
    // currencyInputChanged(value) {
    //   var num = value.replace('.', ",");
    //   return Number(num);
    // }
    //
    MassnahmenComponent.prototype.validateOnlyNumbers = function (evt) {
        var theEvent = evt || window.event;
        var key = theEvent.keyCode || theEvent.which;
        key = String.fromCharCode(key);
        var regex = /[0-9]|\./;
        if (!regex.test(key)) {
            theEvent.returnValue = false;
            if (theEvent.preventDefault)
                theEvent.preventDefault();
        }
    };
    // valuechange(newValue) {
    //   this.money = newValue;
    //   console.log(newValue)
    // }
    MassnahmenComponent.prototype.update = function (value, cmodel, index) {
        // if (value.toString().match(/^[0-9]*$/)) {
        if (value.toString().match(/^[0-9.]*\s*€?$/)) {
            this.hintText[index] = true;
            console.log('...... kost is number: ', value);
            // this.money = value;
            cmodel.Kosten = value.toString();
        }
        else {
            this.hintText[index] = false;
            console.log('...... kost is string: ', value);
            cmodel.Kosten = '';
            value = '';
            return value;
        }
    };
    MassnahmenComponent.prototype.update2 = function (value, cmodel) {
        console.log('...... kost is number: ', value);
        cmodel.Kosten = value.toString();
    };
    MassnahmenComponent.prototype.numberOnly = function (event) {
        var charCode = (event.which) ? event.which : event.keyCode;
        if (charCode > 31 && (charCode < 48 || charCode > 57)) {
            return false;
        }
        return true;
    };
    MassnahmenComponent.prototype.checkKost = function (kost) {
        return (kost.toString().match(/^[0-9]*$/));
    };
    MassnahmenComponent.prototype.getErrorMessage = function () {
        return this.email.hasError('required') ? 'You must enter a value' :
            this.email.hasError('email') ? 'Not a valid email' :
                '';
    };
    MassnahmenComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-massnahmen',
            template: __webpack_require__(/*! ./massnahmen.component.html */ "./src/app/massnahmen/massnahmen.component.html"),
            styles: [__webpack_require__(/*! ./massnahmen.component.css */ "./src/app/massnahmen/massnahmen.component.css")],
            providers: [_modell_design_modell_design_component__WEBPACK_IMPORTED_MODULE_3__["ModellDesignComponent"]]
        }),
        __metadata("design:paramtypes", [_modell_service__WEBPACK_IMPORTED_MODULE_2__["ModellService"], _data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"], _modell_design_modell_design_component__WEBPACK_IMPORTED_MODULE_3__["ModellDesignComponent"]])
    ], MassnahmenComponent);
    return MassnahmenComponent;
}());



/***/ }),

/***/ "./src/app/model-detail/model-detail.component.css":
/*!*********************************************************!*\
  !*** ./src/app/model-detail/model-detail.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/model-detail/model-detail.component.html":
/*!**********************************************************!*\
  !*** ./src/app/model-detail/model-detail.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <form>\n    <h3 *ngIf=\"!editId\" (click)=\"onIdClick()\">{{modell._id}}</h3>\n\n    <div *ngIf=\"editId\" class=\"form-group\">\n      <label >_id:</label>\n      <input type=\"input\" class=\"form-control\" name=\"_id\" required placeholder=\"_id\" [(ngModel)]=\"modell._id\">\n    </div>\n    <div class=\"form-group\">\n      <label>Kriterium: </label> <input type=\"input\" class=\"form-control\" name=\"Kriterium\" required placeholder=\"Kriterium\" [(ngModel)]=\"modell.Kriterium\">\n    </div>\n    <div class=\"form-group\">\n      <label>Beschreibung: </label> <textarea class=\"form-control\" rows=\"5\" name=\"Beschreibung\" [(ngModel)]=\"modell.Beschreibung\"></textarea>\n    </div>\n    <div class=\"form-group\">\n      <label>Auspraegung_0: </label> <textarea class=\"form-control\" rows=\"5\" name=\"Auspraegung_0\" [(ngModel)]=\"modell.Auspraegung_0\"></textarea>\n    </div>\n    <div class=\"form-group\">\n      <label>Auspraegung_1: </label> <textarea class=\"form-control\" rows=\"5\" name=\"Auspraegung_1\" [(ngModel)]=\"modell.Auspraegung_1\"></textarea>\n    </div>\n    <div class=\"form-group\">\n      <label>Auspraegung_2: </label> <textarea class=\"form-control\" rows=\"5\" name=\"Auspraegung_2\" [(ngModel)]=\"modell.Auspraegung_2\"></textarea>\n    </div>\n    <div class=\"form-group\">\n      <label>Auspraegung_3: </label> <textarea class=\"form-control\" rows=\"5\" name=\"Auspraegung_3\" [(ngModel)]=\"modell.Auspraegung_3\"></textarea>\n    </div>\n    <div class=\"form-group\">\n      <label>IT : </label> <input class=\"form-control\" rows=\"5\" name=\"IT\" [(ngModel)]=\"modell.IT\">\n    </div>\n    <div class=\"form-group\">\n      <label>TOP_Zuordnung : </label> <textarea class=\"form-control\" rows=\"5\" name=\"TOP_Zuordnung\" [(ngModel)]=\"modell.TOP_Zuordnung\"></textarea>\n    </div>\n    <button type=\"button\" (click)=\"updateModel()\" class=\"btn btn-primary\">Update</button>\n    <button type=\"button\" (click)=\"deleteModel()\" class=\"btn btn-danger\">Delete</button>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/model-detail/model-detail.component.ts":
/*!********************************************************!*\
  !*** ./src/app/model-detail/model-detail.component.ts ***!
  \********************************************************/
/*! exports provided: ModelDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModelDetailComponent", function() { return ModelDetailComponent; });
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

var ModelDetailComponent = /** @class */ (function () {
    function ModelDetailComponent() {
        this.editId = false;
        this.updateModelEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.deleteModelEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ModelDetailComponent.prototype.ngOnInit = function () {
    };
    ModelDetailComponent.prototype.onIdClick = function () {
        this.editId = true;
    };
    ModelDetailComponent.prototype.ngOnChanges = function () {
        this.editId = false;
    };
    ModelDetailComponent.prototype.updateModel = function () {
        this.updateModelEvent.emit(this.modell);
    };
    ModelDetailComponent.prototype.deleteModel = function () {
        this.deleteModelEvent.emit(this.modell);
    };
    ModelDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'model-detail',
            template: __webpack_require__(/*! ./model-detail.component.html */ "./src/app/model-detail/model-detail.component.html"),
            styles: [__webpack_require__(/*! ./model-detail.component.css */ "./src/app/model-detail/model-detail.component.css")],
            inputs: ['modell'],
            outputs: ['updateModelEvent', 'deleteModelEvent']
        }),
        __metadata("design:paramtypes", [])
    ], ModelDetailComponent);
    return ModelDetailComponent;
}());



/***/ }),

/***/ "./src/app/model-list/model-list.component.css":
/*!*****************************************************!*\
  !*** ./src/app/model-list/model-list.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/model-list/model-list.component.html":
/*!******************************************************!*\
  !*** ./src/app/model-list/model-list.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"nav nav-pills nav-stacked\">\n  <li  (click)=\"onSelect(modell)\" *ngFor=\"let modell of modells\"><a>{{modell._id}}. {{modell.Kriterium}}</a></li>\n</ul>\n"

/***/ }),

/***/ "./src/app/model-list/model-list.component.ts":
/*!****************************************************!*\
  !*** ./src/app/model-list/model-list.component.ts ***!
  \****************************************************/
/*! exports provided: ModelListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModelListComponent", function() { return ModelListComponent; });
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

var ModelListComponent = /** @class */ (function () {
    function ModelListComponent() {
        this.SelectModel = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ModelListComponent.prototype.ngOnInit = function () {
    };
    ModelListComponent.prototype.onSelect = function (ml) {
        this.SelectModel.emit(ml);
    };
    ModelListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'model-list',
            template: __webpack_require__(/*! ./model-list.component.html */ "./src/app/model-list/model-list.component.html"),
            styles: [__webpack_require__(/*! ./model-list.component.css */ "./src/app/model-list/model-list.component.css")],
            inputs: ['modells'],
            outputs: ['SelectModel']
        }),
        __metadata("design:paramtypes", [])
    ], ModelListComponent);
    return ModelListComponent;
}());



/***/ }),

/***/ "./src/app/modell-center/modell-center.component.css":
/*!***********************************************************!*\
  !*** ./src/app/modell-center/modell-center.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modell-center/modell-center.component.html":
/*!************************************************************!*\
  !*** ./src/app/modell-center/modell-center.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-sm-9\">\n      <div *ngIf=\"!hidenewModel\">node\n      <h2>New Modell Document</h2>\n      <form #form=\"ngForm\" (ngSubmit)=\"onSubmitAddModelDoc(form.value)\" class=\"well\">\n        <div class=\"form-group\">\n          <label>_id</label>\n          <input type=\"text\" class=\"form-control\" required name=\"_id\" ngModel>\n        </div>\n        <div class=\"form-group\">\n          <label>Kriterium</label>\n          <input type=\"text\" class=\"form-control\" required name=\"Kriterium\" ngModel>\n        </div>\n        <div class=\"form-group\">\n          <label>Beschreibung</label>\n          <input type=\"text\" class=\"form-control\" name=\"Beschreibung\" ngModel>\n        </div>\n        <div class=\"form-group\">\n          <label>Auspraegung_0</label>\n          <input type=\"text\" class=\"form-control\" name=\"Auspraegung_0\" ngModel>\n        </div>\n        <div class=\"form-group\">\n          <label>Auspraegung_0</label>\n          <input type=\"text\" class=\"form-control\" name=\"Auspraegung_1\" ngModel>\n        </div>\n        <div class=\"form-group\">\n          <label>Auspraegung_0</label>\n          <input type=\"text\" class=\"form-control\" name=\"Auspraegung_2\" ngModel>\n        </div>\n        <div class=\"form-group\">\n          <label>Auspraegung_0</label>\n          <input type=\"text\" class=\"form-control\" name=\"Auspraegung_3\" ngModel>\n        </div>\n        <div class=\"form-group\">\n          <label>IT</label>\n          <input type=\"text\" class=\"form-control\" name=\"IT\" ngModel>\n        </div>\n        <div class=\"form-group\">\n          <label>TOP_Zuordnung</label>\n          <input type=\"text\" class=\"form-control\" name=\"TOP_Zuordnung\" ngModel>\n        </div>\n\n        <button type=\"submit\" class=\"btn btn-success\">Save</button>\n        <button class=\"btn btn-danger\" (click)=\"cancelNewModellDoc()\">Cancel</button>\n      </form>\n    </div>\n    <model-detail *ngIf=\"selectedModel && hidenewModel\"\n                  (updateModelEvent)=\"onUpdateModelEvent($event)\"\n                  (deleteModelEvent)=\"onDeleteModelEvent($event)\"\n                  [modell]=\"selectedModel\"></model-detail>\n  </div>\n\n  <div class=\"col-sm-3\">\n    <button style=\"margin-bottom:2px;\" type=\"button\" (click)=\"newModellDoc()\" class=\"btn btn-success btn-block\">+ New Modell Document</button>\n    <model-list (SelectModel)=\"onSelectModel($event)\" [modells]=\"modells\"></model-list>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/modell-center/modell-center.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/modell-center/modell-center.component.ts ***!
  \**********************************************************/
/*! exports provided: ModellCenterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModellCenterComponent", function() { return ModellCenterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _modell_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modell.service */ "./src/app/modell.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ModellCenterComponent = /** @class */ (function () {
    function ModellCenterComponent(_modellService) {
        this._modellService = _modellService;
        this.hidenewModel = true;
    }
    ModellCenterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._modellService.getModells()
            .subscribe(function (resModellData) { return _this.modells = resModellData; });
    };
    ModellCenterComponent.prototype.onSelectModel = function (modell) {
        this.selectedModel = modell;
        console.log(this.selectedModel);
        this.hidenewModel = true;
    };
    ModellCenterComponent.prototype.onSubmitAddModelDoc = function (mdl) {
        var _this = this;
        this._modellService.addModelDoc(mdl)
            .subscribe(function (resNewVideo) {
            _this.modells.push(resNewVideo);
            _this.hidenewModel = true;
            _this.selectedModel = resNewVideo;
        });
    };
    ModellCenterComponent.prototype.onUpdateModelEvent = function (modell) {
        this._modellService.updateModelDoc(modell)
            .subscribe(function (resUpdatedVideo) { return modell = resUpdatedVideo; });
        this.selectedModel = null;
    };
    ModellCenterComponent.prototype.onDeleteModelEvent = function (modell) {
        var modellArray = this.modells;
        this._modellService.deleteModelDoc(modell)
            .subscribe(function (resDeletedVideo) {
            for (var i = 0; i < modellArray.length; i++) {
                if (modellArray[i]._id === modell._id) {
                    modellArray.splice(i, 1);
                }
            }
        });
        this.selectedModel = null;
    };
    ModellCenterComponent.prototype.newModellDoc = function () {
        this.hidenewModel = false;
    };
    ModellCenterComponent.prototype.cancelNewModellDoc = function () {
        this.hidenewModel = true;
        this.selectedModel = null;
    };
    ModellCenterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-modell-center',
            template: __webpack_require__(/*! ./modell-center.component.html */ "./src/app/modell-center/modell-center.component.html"),
            styles: [__webpack_require__(/*! ./modell-center.component.css */ "./src/app/modell-center/modell-center.component.css")],
            providers: [_modell_service__WEBPACK_IMPORTED_MODULE_1__["ModellService"]]
        }),
        __metadata("design:paramtypes", [_modell_service__WEBPACK_IMPORTED_MODULE_1__["ModellService"]])
    ], ModellCenterComponent);
    return ModellCenterComponent;
}());



/***/ }),

/***/ "./src/app/modell-design/modell-design.component.css":
/*!***********************************************************!*\
  !*** ./src/app/modell-design/modell-design.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".labs{\n  margin-top: 30px;\n  width: 100%;\n  margin-bottom: 10px;\n  position: relative;\n}\n\n#close-icon{\n  float:left;\n  width:5%;\n  margin-right: 10px;\n  margin-left: 2px;\n  margin-top: -10px;\n}\n\n.labs label{\n  float: left;\n  width: 8%;\n  display: block;\n  margin-right: 0;\n  margin-left: 5px;\n  background-color: #EFD9C1;\n  font-size: large;\n  color: #555555;\n  padding:5px;\n  text-align: center;\n}\n\nlabel#R {\n  float: left;\n  width: 13%;\n  display: block;\n  margin-right: 0;\n  margin-left: 0px;\n  background-color: #EFD9C1;\n  font-size: large;\n  color: #555555;\n  padding:5px;\n  text-align: center;\n}\n\n.labs input[type='text']{\n  float: left;\n  width: 55%;\n  height: 37px;\n  background-color: #A9B7C0;\n  border: 0;\n  font: bold 20px courier !important;\n  padding: 5px;\n  margin-left:0px;\n  margin-right:5px;\n}\n\n.labs input[type='number']{\n  float: left;\n  width: 5%;\n  background-color: #C7D8C6;\n  font-weight: bold;\n  font-size: large;\n  text-align: center;\n  padding:5px;\n  border:0;\n  margin-left: 2px;\n  margin-top: 0px;\n}\n\n.labs mat-form-field {\n  height: 37px;\n}\n\n.labs .mat-form-field-wrapper {\n  float: left;\n  width: 10%;\n  height: 35px;\n}\n\n.prioritySection{\n  float: left;\n  width: 12%;\n  height: 37px;\n  margin-top: 0px;\n  margin-right: 0px;\n  /*font-weight: bold;*/\n  /*font-size: medium;*/\n  /*text-align: center;*/\n  /*padding:5px;*/\n  /*border:0;*/\n  /*margin-left: 2px;*/\n  /*margin-top: 0px;*/\n}\n\n.prioritySection mat-select{\n  height: 37px;\n  font-weight: normal;\n  font-size: medium;\n  text-align: center;\n  padding:5px;\n  border:0;\n  margin-left: 2px;\n  margin-top: 0px;\n}\n\n.labs input[type=number]::-webkit-inner-spin-button,\n.labs input[type=number]::-webkit-outer-spin-button {\n\n  opacity: 1;\n}\n\nbutton.mat-button{\n  width:5%;\n  margin-left: 10px;\n}\n\nbutton#info.mat-button {\n  /*width: 5%;*/\n  float: right;\n  margin-top: -15px;\n}\n\nbutton#help-icon {\n  width: 40px;\n  height: 36px;\n  padding-left: 0px;\n  padding-right: 0px;\n  margin-left: 0px;\n  background-color: transparent;\n  border: none;\n}\n\n/*.mat-icon-button.small {*/\n\n/*width:15%;*/\n\n/*}*/\n\n.mat-card.model-detail.mat-card{\n  float: left;\n  display: block;\n  width:97%;\n  /*height:160px;*/\n  background-color: #A9B7C0;\n  margin-top: 5px;\n  margin-left: 10px;\n  padding-bottom:5px;\n  overflow: no-display;\n}\n\n#model-text {\n  width: 90%;\n  float:left;\n  display: block;\n  background-color: #A9B7C0;\n  border: 0px;\n  margin-bottom: 2px;\n}\n\n/*the following 4 styling is for changing the size of icon*/\n\n.mat-icon-button.small {\n  width: 42px;\n  height: 42px;\n  line-height: 42px;\n}\n\n.mat-icon, .mat-icon-button i {\n  line-height: 36px;\n}\n\n.mat-icon {\n  /*margin-left: 25px;*/\n  width: 36px;\n  height:36px;\n}\n\n.material-icons {\n  font-size: 32px;\n  color: #666666;\n}\n\n#model_note{\n  width: 85%;\n  display: block;\n  margin-top: 20px;\n  margin-bottom: 5px;\n}\n\n.aug-cards{\n  width: 100%;\n}\n\n.aug-cards mat-card-title{\n  align-content: center;\n}\n\n/*.mat-form-field{*/\n\n/*width:95%;*/\n\n/*}*/\n\n/*.mat-form-field-wrapper {*/\n\n/*padding-bottom: -1.25em;*/\n\n/*}*/\n\n.example-card-0, .example-card-3, .example-card-4, .example-card-5, .example-card-6, .example-card-7{\n  float:left;\n  width:23%;\n  align-items: center;\n  display: block;\n  background: lightgrey;\n  margin-top: 15px;\n  margin-left: 10px;\n  margin-right:8px;\n  overflow: no-display;\n  padding-left: 13px;\n  padding-right: 10px;\n  padding-top: 5px;\n  padding-bottom: 2px;\n}\n\n/*.example-card-1{*/\n\n/*float:left;*/\n\n/*width:23%;*/\n\n/*display: block;*/\n\n/*background: #7272fd;*/\n\n/*margin-top: 15px;*/\n\n/*margin-left: 10px;*/\n\n/*margin-right:8px;*/\n\n/*padding-left: 10px;*/\n\n/*padding-right: 10px;*/\n\n/*padding-top: 5px;*/\n\n/*padding-bottom: 2px;*/\n\n/*overflow: no-display;*/\n\n/*}*/\n\n/*.example-card-2{*/\n\n/*float:left;*/\n\n/*width:23%;*/\n\n/*display: block;*/\n\n/*background: #FA8072;*/\n\n/*margin-top: 15px;*/\n\n/*margin-left: 10px;*/\n\n/*margin-right:8px;*/\n\n/*overflow: no-display;*/\n\n/*padding-left: 10px;*/\n\n/*padding-right: 10px;*/\n\n/*padding-top: 5px;*/\n\n/*padding-bottom: 2px;*/\n\n/*}*/\n\n.mat-select{\n  background: #A9B7C0;\n  height: 30px;\n  padding: 2px;\n  width:90%;\n  font-size: large;\n  font-weight: normal;\n  margin:2px;\n}\n\n.mat-card-title {\n  margin-bottom: 5px;\n}\n\n.aus_text{\n  width:95%;\n  background: none;\n  border:none;\n  padding:0;\n}\n\ntextarea{\n  float: left;\n  background: #C7D8C6;\n  width: 100%;\n  /*padding: 2px;*/\n  /*margin:0;*/\n}\n\n.big-note-editor{\n  float: left;\n  width: 100%;\n  margin-top: 5px;\n}\n\n.big-aug_note{\n  float: left;\n  width: 90%;\n  color:  darkblue;\n  font-size: medium;\n  margin-right: 20px;\n}\n\n.big-note-label {\n  float:right;\n  width: 5%;\n}\n\n.note-editor{\n   float: left;\n   width: 100%;\n   margin-top: 5px;\n }\n\n.aug_note{\n  float: left;\n  width: 90%;\n  color:  darkblue;\n  font-size: small;\n}\n\n.note-label {\n  float:right;\n  width:8%;\n}\n\n.multi_lines_text {\n  float: left;\n  width: 85%;\n  color:  darkblue;\n  font-size: medium;\n  white-space: pre-line;\n}\n"

/***/ }),

/***/ "./src/app/modell-design/modell-design.component.html":
/*!************************************************************!*\
  !*** ./src/app/modell-design/modell-design.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" xmlns=\"http://www.w3.org/1999/html\">\n<!--<div> current Priority {{ClickedSelectedModel.priority}} Ist: {{ClickedSelectedModel.ist_id}} Ziel: {{ClickedSelectedModel.ziel_id}}</div>-->\n\n  <div class=\"labs\">\n    <!--<a mat-icon-button id=\"close-icon\" (click)=\"closeBlock()\"><mat-icon> clear </mat-icon></a>-->\n    <a mat-icon-button id=\"close-icon\" (click)=\"closeBlock()\"><img src=\"assets/images/saveback.png\" width=\"50\" height=\"50\"></a>\n\n    <input type=\"text\" [(ngModel)]=\" ClickedModell._id + '. ' + ClickedModell.Kriterium\">\n\n    <label> Priorität: </label>\n    <!--<input matInput type=\"number\" placeholder=\"1\" min=\"1\" max=\"42\" [(ngModel)]=\"ClickedSelectedModel.priority\"/>-->\n    <div class=\"prioritySection\">\n    <!--<mat-form-field>-->\n      <!--<mat-select  [(value)]=\"priorityLevels.values[ClickedSelectedModel.priority]\" (selectionChange)=\"changePri($event)\">-->\n        <mat-select  [value]=\"ClickedSelectedModel.prioirtyNum.toString()\" (selectionChange)=\"changePri($event)\">\n\n        <mat-option (onSelectionChange)=\"changePri($event)\" *ngFor=\"let level of priorityLevels\" [value]=\"level.value\">\n          {{ level.viewValue }}\n        </mat-option>\n      </mat-select>\n    <!--</mat-form-field>-->\n    </div>\n    <label id=\"R\"> Kompetenz: </label>\n\n    <button id=\"help-icon\"  (click)=\"openDialog2()\"\n            matTooltip=\"View related compentences and learning resources\"\n            aria-label=\"Button that displays a tooltip when focused or hovered over\">\n      <mat-icon> help </mat-icon>\n    </button>\n  </div>\n\n  <mat-card class=\"model-detail\">\n    <mat-card-content>\n      <textarea id=\"model-text\" rows=\"3\">{{ClickedModell.Beschreibung}}</textarea>\n      <!--<a mat-icon-button class=\"small\"><mat-icon> info </mat-icon></a>-->\n      <button mat-button id=\"info\"\n              matTooltip=\"More info about this\"\n              aria-label=\"Button that displays a tooltip when focused or hovered over\">\n        <mat-icon> info </mat-icon>\n      </button>\n\n      <div class=\"big-note-editor\">\n        <mat-icon class=\"big-note-label\" (click)=\"showNote(8)\"> edit </mat-icon>\n        <textarea class=\"big-aug_note\" title=\"edit note\"  matInput [rows]=\"hiddeRow[8]\" placeholder=\"Notiz\" [(ngModel)]= \"ClickedSelectedModel.Kriterium_note\"> </textarea>\n      </div>\n    </mat-card-content>\n  </mat-card>\n\n  <mat-card class=\"example-card-0\" [ngStyle]=\"{'background': getBColor(niz[ind])}\" *ngFor=\" let au of auspraegung; index as ind\" >\n    <mat-card-header>\n      <mat-card-title><h3> Ausprägung {{ind}}</h3></mat-card-title>\n    </mat-card-header>\n    <mat-card-content>\n      <textarea class=\"aus_text\"  rows=\"4\" disabled> {{au}} </textarea>\n      <mat-select [value]=\"niz[ind]\"  #device (selectionChange)=\"onChange($event, device.value, ind)\">\n        <mat-option value=\"0\">Keine</mat-option>\n        <mat-option value=\"1\">Ist</mat-option>\n        <mat-option value=\"2\">Ziel</mat-option>\n        <mat-option value=\"3\">Ist+Ziel</mat-option>\n      </mat-select>\n      <div class=\"note-editor\">\n        <mat-icon class=\"note-label\" (click)=\"showNote(ind)\"> edit </mat-icon>  <!--<label class=\"note-label\" (click)=\"showNote(ind)\" > {{noteOnLabel}}</label>-->\n        <textarea class=\"aug_note\" title=\"edit note\"  placeholder=\"Notiz\"   matInput  [rows]=\"hiddeRow[ind]\" [(ngModel)]=\"ClickedSelectedModel.Auspraegung_note[ind]\"></textarea>\n      </div>\n      <!--<div class=\"note-editor\">-->\n        <!--<mat-icon class=\"note-label\" (click)=\"showNote(ind)\"> edit </mat-icon>  &lt;!&ndash;<label class=\"note-label\" (click)=\"showNote(ind)\" > {{noteOnLabel}}</label>&ndash;&gt;-->\n        <!--<textarea class=\"multi_lines_text\" title=\"edit note\"  placeholder=\"Notiz\"   matInput  [rows]=\"hiddeRow[ind]\" [(ngModel)]=\"ClickedSelectedModel.Auspraegung_note[ind]\"></textarea>-->\n        <!--&lt;!&ndash;<pre [(ngModel)]=\"ClickedSelectedModel.Auspraegung_note[ind]\"></pre>&ndash;&gt;-->\n      <!--</div>-->\n    </mat-card-content>\n  </mat-card>\n\n\n  </div>\n<!--</div>-->\n\n\n\n\n\n\n\n\n\n\n"

/***/ }),

/***/ "./src/app/modell-design/modell-design.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/modell-design/modell-design.component.ts ***!
  \**********************************************************/
/*! exports provided: ModellDesignComponent, NoKLRDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModellDesignComponent", function() { return ModellDesignComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoKLRDialog", function() { return NoKLRDialog; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _modell__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modell */ "./src/app/modell.ts");
/* harmony import */ var _selectedModel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../selectedModel */ "./src/app/selectedModel.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _clrview_clrview_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../clrview/clrview.component */ "./src/app/clrview/clrview.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};







var ModellDesignComponent = /** @class */ (function () {
    function ModellDesignComponent(dialog, _data) {
        this.dialog = dialog;
        this._data = _data;
        this.childEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.auspraegung = new Array();
        this.niz = new Array(8);
        this.iz_selects = ['None', 'Ist', 'Ziel', 'Ist+Ziel'];
        this.selected = '0';
        this.selectedPri = 0;
        this.panelColor = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('0');
        this.hiddeText = new Array(9).fill(false);
        this.hiddeRow = new Array(9).fill(1);
        this.colorClass = [
            { className: 'example-card-0' },
            { className: 'example-card-1' },
            { className: 'example-card-2' }
        ];
    }
    ModellDesignComponent.prototype.ngOnInit = function () {
        console.log('..... to see the detail of clicked model ', this.ClickedModell._id);
        this.auspraegung.push(this.ClickedModell.Auspraegung_0);
        this.auspraegung.push(this.ClickedModell.Auspraegung_1);
        this.auspraegung.push(this.ClickedModell.Auspraegung_2);
        this.auspraegung.push(this.ClickedModell.Auspraegung_3);
        this.auspraegung.push(this.ClickedModell.Auspraegung_4);
        this.auspraegung.push(this.ClickedModell.Auspraegung_5);
        this.auspraegung.push(this.ClickedModell.Auspraegung_6);
        this.auspraegung.push(this.ClickedModell.Auspraegung_7);
        // this.value_p = this.ClickedSelectedModel.priority;
        this.knote = this.ClickedModell.Kriterium_note;
        this.priorityLevels = this._data.priorities;
        for (var i = 0; i < this.niz.length; i++) {
            this.niz[i] = this.checkInList(i);
        }
        console.log('... init niz[]: ', this.niz, this.ClickedSelectedModel.prioirtyNum);
    };
    ModellDesignComponent.prototype.getBColor = function (nizValue) {
        // console.log('... nizValue:', nizValue);
        switch (nizValue) {
            case '0':
                return 'lightgrey';
            case '1':
                return '#71B7FD';
            case '2':
                return '#a0d878';
            case '3':
                return '#EFD9C1';
        }
    };
    // priorityLevels = [
    //   {value: '3', viewValue: 'High'},
    //   {value: '2', viewValue: 'Medium'},
    //   {value: '1', viewValue: 'Low'},
    //   {value: '0', viewValue: 'None'}
    // ];
    // deal with priority change
    ModellDesignComponent.prototype.changePri = function (event) {
        if (event.isUserInput) {
            this.ClickedSelectedModel.priority = event.source.viewValue;
            this.ClickedSelectedModel.prioirtyNum = event.source.value;
            console.log('.... priority changed: ', event.source.value, event.source.selected);
        }
    };
    ModellDesignComponent.prototype.checkInList = function (i) {
        var temp_ist_ids = this.ClickedSelectedModel.Iste.map(function (ist) {
            return ist.id;
        });
        var temp_ziel_ids = this.ClickedSelectedModel.Ziele.map(function (ziel) {
            return ziel.id;
        });
        if (this.existsObj(i, temp_ist_ids) && this.existsObj(i, temp_ziel_ids)) {
            return '3';
        }
        if (this.existsObj(i, temp_ist_ids) && !this.existsObj(i, temp_ziel_ids)) {
            return '1';
        }
        if (!this.existsObj(i, temp_ist_ids) && this.existsObj(i, temp_ziel_ids)) {
            return '2';
        }
        return '0';
    };
    ModellDesignComponent.prototype.existsObj = function (c_index, iz_list) {
        return iz_list.findIndex(function (x) { return parseInt(x) === c_index; }) > -1;
    };
    // any change with dropdown menu
    ModellDesignComponent.prototype.onChange = function (event, optionValue, cIndex) {
        console.log('... hey I am here');
        console.log('... hey option is', this.iz_selects[optionValue], cIndex, this.ClickedSelectedModel.kriterium_id);
        // this.value_z = cIndex;
        this.removeIZ(cIndex);
        if (optionValue === '3') {
            var new_zeit = this.newZEIT(cIndex);
            this.ClickedSelectedModel.Iste.push(new_zeit);
            var new_ist = this.newIST(cIndex);
            this.ClickedSelectedModel.Ziele.push(new_ist);
            this.selected = '3';
            this.niz[cIndex] = '3';
        }
        if (optionValue === '1') {
            var new_ist = this.newIST(cIndex);
            this.ClickedSelectedModel.Iste.push(new_ist);
            this.selected = '1';
            this.niz[cIndex] = '1';
        }
        if (optionValue === '2') {
            var new_zeit = this.newZEIT(cIndex);
            this.ClickedSelectedModel.Ziele.push(new_zeit);
            this.selected = '2';
            this.niz[cIndex] = '2';
        }
        if (optionValue === '0') {
            this.selected = '0';
            this.niz[cIndex] = '0';
        }
        // testing cretiria_10
        if (this.ClickedSelectedModel.kriterium_id == 10 && cIndex === 3) {
            // const dependency: string = 'Abhängigkeit: 9. Methodik der Fertigungs und Montagesteuerung - Ausprägung 2\n' +
            // '7. Betriebsdatenerfassung - Ausprägung 2\n' +
            // '20. Produktionsstücklisten und Rezepturen - Ausprägung 1\n' +
            // '28. Auswertung von Daten - Ausprägung 1';
            var dependency = this.getAuspDepen4Ziel(cIndex);
            if (optionValue === '2' || optionValue === '3') {
                console.log('...  getting in here !!');
                this.ClickedSelectedModel.Auspraegung_note[3] = dependency;
            }
            else {
                this.ClickedSelectedModel.Auspraegung_note[3] = '';
            }
        }
        // console.log('... currently, priority:', this.ClickedSelectedModel.priority, ' ist_id : ', this.ClickedSelectedModel.ist_id, ' ziel_id : ', this.ClickedSelectedModel.ziel_id);
        // console.log('... ist_note:', this.ClickedSelectedModel.ist_note, ' ziel_id : ', this.ClickedSelectedModel.ziel_note);
        console.log(cIndex, '... this.niz[]:', this.niz);
    };
    // call by onChange
    ModellDesignComponent.prototype.removeIZ = function (cIndex) {
        if (this.ClickedSelectedModel.Iste.find(function (x) { return x.id === cIndex; })) {
            this.ClickedSelectedModel.Iste = this.ClickedSelectedModel.Iste.filter(function (obj) { return obj.id !== cIndex; });
        }
        if (this.ClickedSelectedModel.Ziele.find(function (x) { return x.id === cIndex; })) {
            this.ClickedSelectedModel.Ziele = this.ClickedSelectedModel.Ziele.filter(function (obj) { return obj.id !== cIndex; });
        }
    };
    ModellDesignComponent.prototype.getAuspDepen4Ziel = function (fromAusID) {
        console.log('.... the.ClickedSelectedModel is', this.ClickedSelectedModel);
        var noteStr = '';
        var count = 0;
        var bulb = '💡';
        var dependList = this.ClickedSelectedModel.dependentAusp;
        if (dependList !== undefined && this.ClickedSelectedModel.dependentAusp !== null) {
            var fromKriID = this.ClickedSelectedModel.kriterium_id;
            var tobulb = false;
            for (var _a = 0, dependList_1 = dependList; _a < dependList_1.length; _a++) {
                var dep = dependList_1[_a];
                var toKriID = -1;
                var toAusID = -1;
                if (!dep.bulb) { // buld:false
                    toKriID = dep.relatedKri_id;
                    var ap = dep.pair;
                    for (var _i = 0; _i < ap.length; _i++) {
                        if (ap[_i].from === fromAusID) {
                            toAusID = ap[_i].to;
                            tobulb = ap[_i].to_bulb;
                            if (toAusID > 0) {
                                count++;
                                var newstr = "Kriterien_" + toKriID + " -> Ausprägung#" + toAusID + "; ";
                                if (ap[_i].to_bulb) {
                                    newstr += bulb + "\n";
                                }
                                else {
                                    newstr += "\n";
                                }
                                console.log('.... newstr is: ', newstr);
                                noteStr += newstr;
                                console.log('.... noteStr is: ', noteStr);
                            }
                            if (toAusID === -1) {
                                count++;
                                noteStr += "Kriterien_" + toKriID + "; " + bulb + "\n";
                            }
                            break;
                        }
                    }
                } // if dep.bulb === false
            } //loop of dependList
        }
        if (count > 0) {
            noteStr = "Abhängigkeit: (" + count + ")\n" + noteStr;
            console.log('.... final noteStr is: ', noteStr);
            return noteStr;
        }
        else {
            return null;
        }
    };
    // call by onChange
    ModellDesignComponent.prototype.newZEIT = function (cIndex) {
        var newZiel = new _modell__WEBPACK_IMPORTED_MODULE_1__["Ziel"]();
        newZiel.id = cIndex;
        newZiel.note = this.getAuspDepen4Ziel(cIndex);
        this.ClickedSelectedModel.Auspraegung_note[cIndex] = newZiel.note;
        newZiel.content = this.auspraegung[cIndex];
        return newZiel;
    };
    // call by onChange
    ModellDesignComponent.prototype.newIST = function (cIndex) {
        var newIst = new _modell__WEBPACK_IMPORTED_MODULE_1__["Ist"]();
        newIst.id = cIndex;
        newIst.note = this.ClickedSelectedModel.Auspraegung_note[cIndex];
        newIst.content = this.auspraegung[cIndex];
        return newIst;
    };
    // called by closeBlock;   update the ist and Ziel note
    ModellDesignComponent.prototype.updateIZnote = function (entry) {
        for (var _a = 0, _b = entry.Iste; _a < _b.length; _a++) {
            var em = _b[_a];
            console.log('ist... em.id', em.id);
            if (this.noteIndexContains(em.id, entry)) {
                em.note = entry.Auspraegung_note[parseInt(em.id)];
                console.log('... em.note: ', em.note);
            }
        }
        for (var _c = 0, _d = entry.Ziele; _c < _d.length; _c++) {
            var em = _d[_c];
            console.log('ziel... em.id', em.id);
            if (this.noteIndexContains(em.id, entry)) {
                em.note = entry.Auspraegung_note[em.id];
                console.log('... em.note: ', em.note);
            }
        }
    };
    // called by updateIZnote
    ModellDesignComponent.prototype.noteIndexContains = function (id, entry) {
        for (var i = 0; i < entry.Auspraegung_note.length; i++) {
            if (id === i) {
                return true;
            }
        }
        return false;
    };
    ModellDesignComponent.prototype.openDialog3 = function (csModel) {
        if (csModel.clrlist !== undefined && csModel.clrlist !== null) {
            console.log('... openDialog2() to test on string this.ClickedSelectedModel.clrlist ' + this.createTreeString(csModel.clrlist));
            var crlstring = this.createTreeString(csModel.clrlist);
            var dialogRef = this.dialog.open(_clrview_clrview_component__WEBPACK_IMPORTED_MODULE_4__["ClrviewComponent"], {
                width: '850px',
                data: JSON.parse(crlstring)
            });
            dialogRef.afterClosed().subscribe(function (result) {
                console.log('The dialog was closed; name: ' + result);
            });
        }
        else {
            this.openDialog4();
        }
    };
    ModellDesignComponent.prototype.openDialog2 = function () {
        // const TestTree_DATA: any = {
        //   'D3: Dokumentations- und Lesekompetenzen von Messdaten zz': {
        //     'IT-Berufe und IT-Kompetenzen in der Industrie 4.0 zz': 'https://www.bibb.de/veroeffentlichungen/de/publication/show/7833'
        //   },
        //   'F4: Überwachung und Instandhaltung der vernetzten Systeme': {
        //     'Hands on Industrie 4.0: 1.7 Die neue Qualität der Flexibilität': 'https://mooc.house/courses/industrie40-2016/items/7tUdCRZIAGu1GtiUM3GBqG',
        //     'Hands on Industrie 4.0: 1.6 Enterprise Internet of Things': 'https://mooc.house/courses/industrie40-2016/items/3ENBLZInxWxpVj4vzcjdzl'
        //   }
        // };
        // console.log('... openDialog2() to test on string this.ClickedSelectedModel.clrlist ' + this.createTreeString(this.ClickedSelectedModel.clrlist));
        if (this.ClickedSelectedModel.clrlist !== undefined && this.ClickedSelectedModel.clrlist !== null) {
            var crlstring = this.createTreeString(this.ClickedSelectedModel.clrlist);
            var dialogRef = this.dialog.open(_clrview_clrview_component__WEBPACK_IMPORTED_MODULE_4__["ClrviewComponent"], {
                width: '850px',
                // data: { name: this.test_name, animal: this.test_animal }
                // data: <JSON> TestTree_DATA
                data: JSON.parse(crlstring)
            });
            dialogRef.afterClosed().subscribe(function (result) {
                console.log('The dialog was closed; name: ' + result);
                // this.test_animal = result;
            });
        }
        else {
            this.openDialog4();
        }
    };
    ModellDesignComponent.prototype.openDialog4 = function () {
        var crlstring = 'keine verwandten Kompetenzen und Lernressourcen ';
        var dialogRef = this.dialog.open(NoKLRDialog, {
            width: '850px',
            data: { title: 'Hinweis', text: crlstring }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed; name: ' + result);
        });
    };
    // input this.ClickedSelectedModel.clrlist
    // output: TestTree_DATA
    ModellDesignComponent.prototype.createTreeString = function (clrobj_list) {
        var tree_string = '{';
        for (var _a = 0, clrobj_list_1 = clrobj_list; _a < clrobj_list_1.length; _a++) {
            var entry = clrobj_list_1[_a];
            var ename = entry.competence_name.replace(/"/g, '\'');
            tree_string = tree_string + '\"' + ename + '\":{' + this.getLRString(entry.learningresources) + '},';
        }
        tree_string = tree_string.substring(0, tree_string.length - 1) + '\}';
        console.log('The built tree string is: ' + tree_string);
        return tree_string;
    };
    ModellDesignComponent.prototype.getLRString = function (lrob) {
        var subtree_string = '';
        for (var _a = 0, lrob_1 = lrob; _a < lrob_1.length; _a++) {
            var entry = lrob_1[_a];
            var eename = entry.lr_name;
            var eelink = entry.lr_link;
            subtree_string = subtree_string + '\"' + eename + '\": ' + '\"' + eelink + '\",';
        }
        subtree_string = subtree_string.substring(0, subtree_string.length - 1);
        // subtree_string = subtree_string + '\}';
        return subtree_string;
    };
    // to expand the Beschreibung section
    ModellDesignComponent.prototype.showNote = function (i) {
        if (this.hiddeText[i]) {
            this.hiddeText[i] = false;
            this.hiddeRow[i] = 1;
        }
        else {
            this.hiddeText[i] = true;
            if (i === 8) {
                this.hiddeRow[i] = 5;
            }
            else {
                this.hiddeRow[i] = 5;
            }
        }
    };
    ModellDesignComponent.prototype.closeBlock = function () {
        this.selectedPri = 0;
        this.updateIZnote(this.ClickedSelectedModel);
        this.parentSwitch = true;
        // to do something more here: disable navbar, save the data!
        this.childEvent.emit(this.parentSwitch);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ModellDesignComponent.prototype, "parentSwitch", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _modell__WEBPACK_IMPORTED_MODULE_1__["Modell"])
    ], ModellDesignComponent.prototype, "ClickedModell", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _selectedModel__WEBPACK_IMPORTED_MODULE_2__["SelectedModel"])
    ], ModellDesignComponent.prototype, "ClickedSelectedModel", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ModellDesignComponent.prototype, "childEvent", void 0);
    ModellDesignComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-modell-design',
            template: __webpack_require__(/*! ./modell-design.component.html */ "./src/app/modell-design/modell-design.component.html"),
            styles: [__webpack_require__(/*! ./modell-design.component.css */ "./src/app/modell-design/modell-design.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"], _data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"]])
    ], ModellDesignComponent);
    return ModellDesignComponent;
}());

var NoKLRDialog = /** @class */ (function () {
    function NoKLRDialog(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    NoKLRDialog.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    NoKLRDialog = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'noKLR-dialog',
            template: __webpack_require__(/*! ./noKLR-dialog.html */ "./src/app/modell-design/noKLR-dialog.html"),
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_5__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialogRef"], Object])
    ], NoKLRDialog);
    return NoKLRDialog;
}());



/***/ }),

/***/ "./src/app/modell-design/noKLR-dialog.html":
/*!*************************************************!*\
  !*** ./src/app/modell-design/noKLR-dialog.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>{{data.title}}</h1>\n<div mat-dialog-content>\n  <p style=\"font-size: x-large\">\n  {{data.text}}\n  </p>\n\n</div>\n"

/***/ }),

/***/ "./src/app/modell.service.ts":
/*!***********************************!*\
  !*** ./src/app/modell.service.ts ***!
  \***********************************/
/*! exports provided: ModellService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModellService", function() { return ModellService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_BehaviorSubject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/BehaviorSubject */ "./node_modules/rxjs-compat/_esm5/BehaviorSubject.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ModellService = /** @class */ (function () {
    function ModellService(_http) {
        var _this = this;
        this._http = _http;
        // check out the "server.js" file, "app.use  ..."
        this._getUrl = '/api/models';
        this._postUrl = '/api/model';
        this._putUrl = '/api/model/';
        this._deleteUrl = '/api/model/';
        this.dbModels = new rxjs_BehaviorSubject__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.sharedModells = this.dbModels.asObservable();
        this._http.get(this._getUrl)
            .map(function (response) { return response.json(); })
            .subscribe(function (data) { return _this.dbModels.next(data); }, function (err) { return console.log(err); }, function () { return console.log('Completed'); });
    }
    ModellService.prototype.getModells = function () {
        return this._http.get(this._getUrl)
            .map(function (response) { return response.json(); });
    };
    ModellService.prototype.addModelDoc = function (md) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({ 'Content-Type': 'application/json' });
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: headers });
        return this._http.post(this._postUrl, JSON.stringify(md), options)
            .map(function (response) { return response.json(); });
    };
    ModellService.prototype.updateModelDoc = function (md) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({ 'Content-Type': 'application/json' });
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: headers });
        return this._http.put(this._putUrl + md._id, JSON.stringify(md), options)
            .map(function (response) { return response.json(); });
    };
    ModellService.prototype.deleteModelDoc = function (md) {
        return this._http.delete(this._deleteUrl + md._id)
            .map(function (response) { return response.json(); });
    };
    ModellService.prototype.changeModel = function (sharedModells) {
        this.dbModels.next(sharedModells);
    };
    ModellService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], ModellService);
    return ModellService;
}()); // end of Class



/***/ }),

/***/ "./src/app/modell.ts":
/*!***************************!*\
  !*** ./src/app/modell.ts ***!
  \***************************/
/*! exports provided: Modell, Ist, Ziel, PriKid */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Modell", function() { return Modell; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ist", function() { return Ist; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ziel", function() { return Ziel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PriKid", function() { return PriKid; });
var Modell = /** @class */ (function () {
    function Modell() {
    }
    return Modell;
}());

var Ist = /** @class */ (function () {
    function Ist() {
    }
    return Ist;
}());

var Ziel = /** @class */ (function () {
    function Ziel() {
    }
    return Ziel;
}());

var PriKid = /** @class */ (function () {
    function PriKid() {
    }
    return PriKid;
}());



/***/ }),

/***/ "./src/app/newuser.ts":
/*!****************************!*\
  !*** ./src/app/newuser.ts ***!
  \****************************/
/*! exports provided: NewUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewUser", function() { return NewUser; });
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/index.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_0__);

var NewUser = { uuid: Object(uuid__WEBPACK_IMPORTED_MODULE_0__["v4"])(), name: '', mission: '', vision: '', strategy: '', kriterienList: [] };


/***/ }),

/***/ "./src/app/selectedModel.ts":
/*!**********************************!*\
  !*** ./src/app/selectedModel.ts ***!
  \**********************************/
/*! exports provided: SelectedModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectedModel", function() { return SelectedModel; });
var SelectedModel = /** @class */ (function () {
    function SelectedModel() {
        this.kriterium_id = 0;
        this.kriterium = '';
        this.isselected = false;
        this.isEvaluated = false;
        this.Iste = [];
        this.Ziele = [];
        this.priority = 'KEINER';
        this.prioirtyNum = 0;
        this.Kosten = '';
        this.Evaluation_note = '';
        this.Massnahmen = ' ';
        this.Erklaerung = '  ';
        this.Verantwortlich = '';
        this.Termin = null;
        this.Auspraegung_note = new Array(8);
        this.clrlist = [];
        this.Korkri = '';
        this.dependentType = '';
        this.dependentAusp = [];
    }
    return SelectedModel;
}());



/***/ }),

/***/ "./src/app/sort-arr.pipe.ts":
/*!**********************************!*\
  !*** ./src/app/sort-arr.pipe.ts ***!
  \**********************************/
/*! exports provided: SortArrPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortArrPipe", function() { return SortArrPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SortArrPipe = /** @class */ (function () {
    function SortArrPipe() {
    }
    SortArrPipe.prototype.transform = function (array, field, ad) {
        if (array !== null && array[0].priority !== undefined) {
            this.editPriority(array);
        }
        if (array !== null) {
            array.sort(function (a, b) {
                if (a[field] * 1 < b[field] * 1) {
                    return -1;
                }
                else if (a[field] * 1 > b[field] * 1) {
                    return 1;
                }
                else {
                    return 0;
                }
            });
            if (array !== null && array[0].priority !== undefined) {
                this.changePriBack(array);
            }
            // ad as string, either 'ascending' or 'descending'
            if (ad === 'descending') {
                return array.reverse();
            }
            return array;
        }
    };
    SortArrPipe.prototype.editPriority = function (array) {
        for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
            var ar = array_1[_i];
            console.log('... ar.priority: ', ar.priority);
            if (ar.priority.charAt(0) === 'M') {
                ar.priority = '2';
            }
            if (ar.priority.charAt(0) === 'H') {
                ar.priority = '3';
            }
            if (ar.priority.charAt(0) === 'L') {
                ar.priority = '1';
            }
            if (ar.priority.charAt(0) === 'N') {
                ar.priority = '0';
            }
        }
    };
    SortArrPipe.prototype.changePriBack = function (array) {
        for (var _i = 0, array_2 = array; _i < array_2.length; _i++) {
            var ar = array_2[_i];
            if (ar.priority === '3') {
                ar.priority = 'High';
            }
            if (ar.priority === '2') {
                ar.priority = 'Medium';
            }
            if (ar.priority === '1') {
                ar.priority = 'Low';
            }
            if (ar.priority === '0') {
                ar.priority = 'None';
            }
        }
    };
    SortArrPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'sortArr'
        })
    ], SortArrPipe);
    return SortArrPipe;
}());



/***/ }),

/***/ "./src/app/start/start.component.css":
/*!*******************************************!*\
  !*** ./src/app/start/start.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".containerStart {\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-columns: 42.5% auto;\n      grid-template-columns: 42.5% auto;\n}\n.col {\n\n}\n.titleTable{\n  width: 100%;\n  height: 60px;\n  margin-top: 20px;\n  margin-bottom: 0px;\n  background-color: #A9B7C0;\n}\n.td2{\n  float:left;\n  width:240px;\n  height: 30px;\n  text-align: left;\n  margin-top:10px;\n  margin-right: 15px;\n  margin-left: 10px;\n  font-size: 150%;\n}\n.td1{\n  float:left;\n  width: 40%;\n  margin-top: 5px;\n}\n.textlink {\n  background-color: #A9B7C0;\n  /*font-family: \"Times New Roman\", Times, serif;*/\n  font-size: 150%;\n  width: 100%;\n  padding:auto;\n  margin-bottom: 0px;\n  margin-top: -40px;\n  box-sizing: border-box;\n  border: 0;\n  text-align: right;\n  margin-right: 5px;\n}\na {\n  color: #0067a2;\n}\n.loadButton {\n  background-color: #EFD9C1;;\n  width: 94px;\n  margin-left: 20px;\n  font-size: 10pt;\n}\n.textarea.ng-invalid {\n  /*background-color: rgba(211,211,211, 0.8);*/\n  background-color: #A9B7C0;\n  /*font-family: \"Times New Roman\", Times, serif;*/\n  font-size: 145%;\n  padding:auto;\n  margin-bottom: 5px;\n  margin-top: -15px;\n  box-sizing: border-box;\n  width: 100%;\n  height: 450px;\n  border: 0;\n  text-align: left;\n}\n.textarea.ng-invalid-2 {\n  /*background-color: rgba(211,211,211, 0.8);*/\n  background-color: #A9B7C0;\n  /*font-family: \"Times New Roman\", Times, serif;*/\n  font-size: 150%;\n  padding:auto;\n  margin-bottom: 20px;\n  margin-top: 0px;\n  box-sizing: border-box;\n  width: 100%;\n  height: 315px;\n  border: 0;\n  text-align: left;\n}\n.input-group {\n  margin-bottom: 15px;\n  box-sizing: border-box;\n  width: 85%;\n  height: 156px;\n  border: 0px;\n  margin-top: 20px;\n}\n.input-group-text {\n  background-color: #A9B7C0;\n  width: 128px;\n  font-size: 12pt;\n  /*font-weight: normal;*/\n  font-style: italic;\n}\n.zielText{\n  background-color: #A9B7C0;\n  font-size: 12pt;\n  font-style: italic;\n  padding-top: 45px;\n  color: #495057;\n  width: 128px;\n}\n.form-control {\n font-size: 12pt;\n background-color: #8c9ca7;\n color:  #EFD9C1;\n}\n.textarea.ng-valid {\n  background-color: #EFD9C1;\n  font-size: 150%;\n  font-style: italic;\n  margin-bottom: 2px;\n  box-sizing: border-box;\n  width: 100%;\n  height:150px;\n  border: 0;\n  margin-top: 50px;\n}\n.textarea.ng-valid-2 {\n  background-color: #EFD9C1;\n  font-size: 150%;\n  font-style: italic;\n  margin-bottom: 2px;\n  box-sizing: border-box;\n  width: 100%;\n  height: 150px;\n  border: 0;\n  margin-top: 2px;\n}\ninput.btn {\n  border: 0;\n  display:block;\n  padding:1em 3em;\n  background:brown;\n  color:white;\n  margin-bottom:1em;\n  cursor:pointer;\n}\n.video {\n  box-sizing: border-box;\n  margin-top: 22px;\n  width:85%;\n}\n.uuidLableLeft {\n  margin-top: 30px;\n  height: 20px;\n  text-align: left;\n  font-size: small;\n}\n.uuidLable {\n  width: 85%;\n  margin-top: 30px;\n  height: 20px;\n  text-align: right;\n  font-size: small;\n}\n.newButton {\n  background-color: #EFD9C1;;\n  width: 106px;\n  position: absolute;\n  left: 15px;\n  font-size: 10pt;\n}\n"

/***/ }),

/***/ "./src/app/start/start.component.html":
/*!********************************************!*\
  !*** ./src/app/start/start.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"containerStart\">\n  <div class=\"col\">\n    <div class=\"uuidLableLeft\"> <b>Möchten Sie Ihre vorherige Datei importieren(.json)?</b>\n      <!--<button >import</button>-->\n      <input style=\"display: none\" type=\"file\" accept=\".json\" (change)=\"onFileLoad($event)\" #fileinput>\n      <button class=\"loadButton\" type=\"button\" (click)=\"fileinput.click()\"> laden </button>\n    </div>\n\n    <div class=\"titleTable\">\n        <!--<div  class=\"td2\"> <a href=\"http://www.adaption-projekt.de/\"><h1>Projekt ADAPTION</h1></a></div>-->\n      <div  class=\"td2\"> <h1>Projekt ADAPTION</h1></div>\n        <div class=\"td1\"> <img src=\"assets/images/adaption.png\" width=55% height=35% style=\"margin-left: 80px;\"> </div>\n    </div>\n\n    <div>\n    <br><textarea disabled class =\"textarea ng-invalid\"   name=\"item\" rows=\"30\"  cols=\"50\" placeholder=\"Ziel des Forschungsprojektes ADAPTION ist es, KMU und Unternehmen bei der Migration zum Cyber-physischen System für Produktion und Fertigung zu unterstützen. Gefördert vom BMBF wird ein reifegradbasiertes Vorgehensmodell hierzu entwickelt, das die Ableitung eines individuellen Migrationspfades unter Beachtung von Wirtschaftlichkeitsgesichtspunkten ermöglicht. Der optimale Zielreifegrad wird individuell nach Nutzen und Wirtschaftlichkeit für jedes Unternehmen festgelegt. Das Vorgehensmodell verfolgt einen Ansatz, der die drei betrieblichen Gestaltungsdimensionen Technik, Organisation und Personal berücksichtigt.\n      &#10;Die Aufgabe des Educational Technology Lab in ADAPTION besteht in der Formalisierung und software-technischen Umsetzung eines Reifegrad- und Vorgehensmodell bei der Migration zum Cyber-physischen Produktionssystem. Weiterhin in der Erweiterung eines existierenden Assistenzsystems um digitale Lernszenarien, die für Cyber-physische Produktionssysteme relevant sind. Die Migration wird bei Anwendungspartnern verschiedener Größe (Konzern, KMU) unter realen Bedingungen untersucht, gewonnene Erkenntnisse werden in das allgemeine Vorgehensmodell überführt.\"></textarea>\n      <div class=\"textlink\"><a target=\"_blank\" href=\"http://www.adaption-projekt.de/\">[Mehr Info]&nbsp; &nbsp; </a></div><br>\n\n    </div>\n    <br><textarea disabled class =\"textarea ng-invalid-2\" type=\"textarea\"  name=\"item\" placeholder=\"ADAPTION Tool (ADAPTION) entwickelt ein Selbstbewertungstool für ein Industrie 4.0-Audit, um den vorliegenden Reifegrad zu ermitteln und auf dieser Grundlage den unter wirtschaftlichen Gesichtspunkten optimalen Reifegrad festzulegen. Das Ziel ist die Unterstützung dieses Prozesses:\n          1. Strategische Ausrichtung\n          2. Industrie 4.0 Audit\n          3. Zielstellung\n          4. Maßnahmen-planung\n          5. Evaluation \" ></textarea><br>\n\n  </div>\n\n  <div class=\"col\">\n\n\n    <div class=\"uuidLable\">\n      <button class=\"newButton\" type=\"button\" (click)=\"createNewUser()\"> neu </button>Benutzer_ID: <b style=\"color:black; background-color: #D0D8DD; margin-right: 3px; font-weight:bold\">&nbsp; {{cUser.uuid}} &nbsp;&nbsp; </b>\n    </div>\n\n    <!--<br><textarea class =\"textarea ng-valid-2\" name=\"item\"-->\n                  <!--placeholder=\"Was ist Ihre Vision?\"  [(ngModel)]=\"cUser.vision\"  ></textarea><br>-->\n    <!--<br><textarea class =\"textarea ng-valid-2\"  name=\"item\"-->\n                  <!--placeholder=\"Was ist Ihre Mission?\"  [(ngModel)]=\"cUser.mission\"  ></textarea><br>-->\n\n    <!--<br><textarea class =\"textarea ng-valid-2\"  name=\"item\"-->\n                  <!--placeholder=\"Was sind Ihre Strategische Ziele? (z.B. für 6 Monate) \" [(ngModel)]=\"cUser.strategy\" ></textarea><br>-->\n\n    <div class=\"input-group\">\n      <div class=\"input-group-prepend\">\n        <span class=\"input-group-text\">Vision: &nbsp; </span>\n      </div>\n      <textarea class=\"form-control\" aria-label=\"Vision:  \" placeholder=\"Was ist Ihre xxx Vision?\" [(ngModel)]=\"cUser.vision\"></textarea>\n    </div>\n    <div class=\"input-group\">\n      <div class=\"input-group-prepend\">\n        <span class=\"input-group-text\" >Mission: </span>\n      </div>\n      <textarea class=\"form-control\" placeholder=\"Was ist Ihre Mission?\" [(ngModel)]=\"cUser.mission\"></textarea>\n    </div>\n    <div class=\"input-group\">\n      <div class=\"input-group-prepend\">\n        <!--<textarea class=\"zielText\" rows=\"4\" cols=\"12\" disabled>strategische Zielausrichtung: </textarea>-->\n        <span class=\"zielText\" rows=\"4\" cols=\"12\" disabled>strategische Zielausrichtung: </span>\n     </div>\n     <textarea class=\"form-control\" aria-label=\"Ziel:  \"  placeholder=\"Was sind Ihre strategische Ziele? (z.B. für 6 Monate) \" [(ngModel)]=\"cUser.strategy\" ></textarea>\n   </div>\n\n   <div class=\"video\">\n     <iframe width=\"536\" height=\"315\" src=\"https://www.youtube.com/embed/kQLbVVPNTMQ\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe>\n   </div>\n\n </div>\n\n <!--<div> current User vision: {{cUser.vision}} </div>-->\n  <!--<div> current User mission : {{cUser.mission}} </div>-->\n  <!--<div> current User mission : {{cUser.strategy}} </div>-->\n</div>\n\n"

/***/ }),

/***/ "./src/app/start/start.component.ts":
/*!******************************************!*\
  !*** ./src/app/start/start.component.ts ***!
  \******************************************/
/*! exports provided: StartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartComponent", function() { return StartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/index.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var StartComponent = /** @class */ (function () {
    function StartComponent(sanitizer, _userService, http, _data) {
        this.sanitizer = sanitizer;
        this._userService = _userService;
        this.http = http;
        this._data = _data;
        this.vision = 'Was ist Ihre yyy Vision?';
        this.mission = 'Was ist Ihre Mission?';
        this.strategy = 'Was sind Ihre Strategische Ziele? (z.B. für 6 Monate) ';
        this.myForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormGroup"]({
            EDI: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](),
        });
    }
    StartComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getNewUser();
        this._userService.changeUser(this.cUser);
        this._data.selectedModels.subscribe(function (res) { return _this.slist = res; });
        this._data.changeGoal(this.slist);
    };
    StartComponent.prototype.getNewUser = function () {
        var _this = this;
        this._userService.getUser()
            .subscribe(function (res) { return _this.cUser = res; });
    };
    StartComponent.prototype.getVideoURL = function () {
        return this.sanitizer.bypassSecurityTrustHtml('https://www.youtube.com/embed/kQLbVVPNTMQ');
    };
    //// read a local .json file
    // onFileSelected(event) {
    //   // the code works.
    //     this.http.request('assets/Your_Kriterions_1.json')
    //     .subscribe((res) => {
    //       const resSTR = JSON.stringify(res);
    //       const resJSON = JSON.parse(resSTR);
    //       console.log(resJSON._body);
    //       this.cUser = JSON.parse(resJSON._body);
    //       this.slist = this.cUser.kriterienList;
    //       console.log('... the slist[0].k_id:', this.slist[0].kriterium_id);
    //       console.log('... the slist length:', this.slist.length);
    //       this.slist = this.cUser.kriterienList.map(x => Object.assign({}, x));
    //       console.log('... the slist[0].id: 2', this.slist[0].kriterium_id);
    //       console.log('... first kri list length:', this.cUser.kriterienList.length);
    //       this._userService.changeUser(this.cUser);
    //       this._data.changeGoal(this.slist);
    //     });
    // }
    StartComponent.prototype.onFileLoad = function (event) {
        var _this = this;
        var f = event.target.files[0];
        var reader = new FileReader();
        console.log(this);
        // Closure to capture the file information.
        reader.onload = (function (theFile) {
            console.log('load');
            console.log(_this);
            return function (e) {
                try {
                    console.log(_this);
                    var json = JSON.parse(e.target.result);
                    var resSTR = JSON.stringify(json);
                    console.log('... resSTR: ', resSTR);
                    _this.loadUser = JSON.parse(resSTR);
                    _this.slist = _this.loadUser.kriterienList;
                    _this.cUser.uuid = _this.loadUser.uuid;
                    _this.cUser.vision = _this.loadUser.vision;
                    _this.cUser.mission = _this.loadUser.mission;
                    _this.cUser.strategy = _this.loadUser.strategy;
                    _this.cUser.kriterienList = _this.loadUser.kriterienList;
                    console.log('... mission: ', _this.cUser.mission);
                    console.log('... vision: ', _this.cUser.vision);
                    _this.vision = _this.loadUser.vision;
                    _this.mission = _this.loadUser.mission;
                    console.log('... uuid of cUser: ', _this.cUser.uuid);
                    _this._userService.changeUser(_this.cUser);
                    _this._data.changeGoal(_this.slist);
                }
                catch (ex) {
                    alert('exception when trying to parse json = ' + ex);
                }
            };
        })(f);
        reader.readAsText(f);
        // alert('json global var has been set to parsed json of this file here it is unevaled = \n' + JSON.stringify(this.json));
    };
    StartComponent.prototype.createNewUser = function () {
        console.log('... will create a new user: ');
        // this.cUser = new User( uuid(), ' ',  ' ',  ' ',  ' ', []);
        this.cUser.uuid = Object(uuid__WEBPACK_IMPORTED_MODULE_5__["v4"])();
        this.cUser.mission = '';
        this.cUser.vision = '';
        this.cUser.strategy = '';
        this.cUser.kriterienList = [];
        this._userService.changeUser(this.cUser);
        this.slist = [];
        this._data.changeGoal(this.slist);
    };
    StartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-start',
            template: __webpack_require__(/*! ./start.component.html */ "./src/app/start/start.component.html"),
            styles: [__webpack_require__(/*! ./start.component.css */ "./src/app/start/start.component.css")],
            providers: [_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]]
        }),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"], _user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"], _angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"],
            _data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"]])
    ], StartComponent);
    return StartComponent;
}());



/***/ }),

/***/ "./src/app/user.service.ts":
/*!*********************************!*\
  !*** ./src/app/user.service.ts ***!
  \*********************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_BehaviorSubject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/BehaviorSubject */ "./node_modules/rxjs-compat/_esm5/BehaviorSubject.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _newuser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./newuser */ "./src/app/newuser.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserService = /** @class */ (function () {
    function UserService() {
        //  private user = new ReplaySubject<User>(1);
        this.user = new rxjs_BehaviorSubject__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this.currentUser = this.user.asObservable();
    }
    UserService.prototype.changeUser = function (currentUser) {
        this.user.next(currentUser);
    };
    UserService.prototype.getUser = function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(_newuser__WEBPACK_IMPORTED_MODULE_3__["NewUser"]);
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/zustaende/zustaende.component.css":
/*!***************************************************!*\
  !*** ./src/app/zustaende/zustaende.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".myform{\n  width:100%;\n  float:left;\n  padding: 0;\n}\n\n/*#label1{*/\n\n/*background: #EFD9C1;*/\n\n/*width: 100%;*/\n\n/*margin-bottom: 10px;*/\n\n/*margin-top: 30px;*/\n\n/*font: normal 20px courier !important;*/\n\n/*padding:10px;*/\n\n/*}*/\n\n#three-labels{\n  float: right;\n  width: 36%;\n  margin-bottom: 20px;\n  margin-top: 15px;\n  margin-right: 110px;\n}\n\n#three-labels label{\n  display: -ms-inline-grid;\n  display: inline-grid;\n  float:right;\n  background-color: #C7D8C6;\n  margin-left: 5px;\n  margin-right: 5px;\n  width: 110px;\n  text-align: center;\n  font-weight: bolder;\n  font-size: medium;\n  padding: 3px;\n}\n\n.form-group label{\n  float: left;\n  width: 60%;\n  background-color:#A9B7C0;\n  color:#333;\n  font-weight: bold;\n  font-size: medium;\n  padding:5px;\n  border:none;\n  margin-bottom: 10px;\n  margin-top: 10px;\n  display: -ms-inline-grid;\n  display: inline-grid;\n}\n\n.input-group button{\n  float: left;\n  width: 58%;\n  background-color:#A9B7C0;\n  color:#333;\n  padding:5px;\n  border:none;\n  margin-bottom: 10px;\n  margin-top: 10px;\n  display: -ms-inline-grid;\n  display: inline-grid;\n  font-size: medium;\n  font-weight: bold;\n  text-align: left;\n  cursor: zoom-in;\n}\n\n.numberCircle {\n  float: left;\n  display: block;\n  margin-right: 50px;\n  margin-top: 10px;\n  margin-left: 0px;\n  background: #EFD9C1;\n  border-radius: 100%;\n  width: 36px;\n  height: 36px;\n  padding: 3px;\n  border: 2px solid #EFD9C1;\n  color: #808080;\n  text-align: center;\n  font: 18px Arial, sans-serif;\n}\n\n.istLable {\n  float: left;\n  width: 10%;\n  display: block;\n  margin-top: 10px;\n  margin-right: 10px;\n  height: 33px;\n  margin-left: 12px;\n  background: #EFD9C1;\n  text-align: center;\n  font: 15px Arial, sans-serif;\n  color: #808080;\n  padding-top: 7px;\n}\n\n.zeilLable {\n  float: left;\n  width: 10%;\n  display: block;\n  margin-top: 10px;\n  margin-right: 45px;\n  height: 33px;\n  margin-left: 0px;\n  background: #EFD9C1;\n  text-align: center;\n  font: 15px Arial, sans-serif;\n  color: #808080;\n  padding-top: 7px;\n}\n"

/***/ }),

/***/ "./src/app/zustaende/zustaende.component.html":
/*!****************************************************!*\
  !*** ./src/app/zustaende/zustaende.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Zustaede as the parentComponet and Modell-design as the child component-->\n\n<div *ngIf = \"displayThenBlock; then thenBlock  else elseBlock\"></div>\n\n<ng-template #thenBlock>\n  <!-- for testing\n  <h2>  this is then block</h2>\n  <button (click)= hideThenBlock()> hide </button>-->\n\n\n  <div id=\"label1\">\n    <label> Was sind die Ist-, Ziel-Zustände und Prioritäten für die ausgewählten Kriterien? </label>\n  </div>\n\n    <div id=\"three-labels\">\n      <label> Priorität </label>\n      <label> Ziel </label>\n      <label> Ist </label>\n    </div>\n\n\n  <!--<div *ngFor=\"let cmodle of checkedModells | sortArr:'priority': 'descending '| sortArr:'kriterium_id'; let m = index;\" >-->\n    <div *ngFor=\"let cmodle of sortPK(checkedModells); let m = index;\" >\n\n    <div class =\"input-group\">\n      <button type=\"text\" (click)=openEditor(cmodle)> {{cmodle.kriterium_id}}. {{cmodle.kriterium}} </button>\n      <!--<div class=\"izLable\">{{getISTE(cmodle, 'i')}}</div>-->\n      <!--<div class=\"izLable\">{{getISTE(cmodle, 'z')}}</div>-->\n      <!--<div title= \"{{cmodle.priority}}\" class=\"numberCircle\">{{getPriorityLevel(cmodle)}}</div>-->\n\n      <div (click)=openEditor(cmodle) class=\"istLable\">{{getISTE(cmodle, 'i')}}</div>\n      <div (click)=openEditor(cmodle) class=\"zeilLable\">{{getISTE(cmodle, 'z')}}</div>\n      <div (click)=openEditor(cmodle) title= \"{{cmodle.priority}}\" class=\"numberCircle\">{{getPriorityLevel(cmodle)}}</div>\n    </div>\n  </div>\n\n\n</ng-template>\n\n\n<ng-template #elseBlock>\n  <!--<h2>  this is else block</h2>-->\n  <!--<button (click)= showThenBlock()> show</button>-->\n\n  <app-modell-design (childEvent)=\"receiveChanage($event)\" [parentSwitch]=\"displayThenBlock\" [ClickedSelectedModel]=\"csMod\" [ClickedModell] =\"cMod\"> </app-modell-design>\n\n</ng-template>\n"

/***/ }),

/***/ "./src/app/zustaende/zustaende.component.ts":
/*!**************************************************!*\
  !*** ./src/app/zustaende/zustaende.component.ts ***!
  \**************************************************/
/*! exports provided: ZustaendeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZustaendeComponent", function() { return ZustaendeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _modell_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modell.service */ "./src/app/modell.service.ts");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ZustaendeComponent = /** @class */ (function () {
    function ZustaendeComponent(_modellService, _data) {
        this._modellService = _modellService;
        this._data = _data;
        this.displayThenBlock = true;
        this.int_ist = 0;
        this.int_ziet = 0;
        this.int_priorty = 0;
    }
    ZustaendeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._modellService.sharedModells.subscribe(function (res) { return _this.allmodels = res; });
        this._modellService.changeModel(this.allmodels);
        this._data.selectedModels.subscribe(function (res) { return _this.checkedModells = res; });
        this._data.changeGoal(this.checkedModells);
    };
    // the same code as smsExist(kid) of Kriterien.componenet.ts
    ZustaendeComponent.prototype.isChecked = function (cid) {
        if (this.checkedModells.length === 0) {
            console.log('... 0 elements in checkedModells...: ');
            return false;
        }
        else {
            var existIndex = this.checkedModells.findIndex(function (ele) { return ele.kriterium_id === cid; });
            if (existIndex > -1) {
                return true;
            }
            else {
                return false;
            }
        }
    };
    ZustaendeComponent.prototype.hideThenBlock = function () {
        this.displayThenBlock = false;
        // console.log('..... button has been clicked ' );
    };
    ZustaendeComponent.prototype.openEditor = function (cmodle) {
        this.displayThenBlock = false;
        var m_index = cmodle.kriterium_id;
        this.csMod = cmodle;
        this.cMod = this.allmodels.find(function (el) { return el._id === m_index; });
        console.log('..... the clicked cmodel.des: ', m_index);
        console.log('..... the clicked cmodel.priorty: ', cmodle.priority);
        console.log('..... the clicked cmodel: ', cmodle);
    };
    ZustaendeComponent.prototype.sortPK = function (arr) {
        // this.checkedModells = this._data.sortMultiple(arr);
        this.checkedModells = this._data.sortMulti(arr);
        console.log('.... ccc');
        this.checkedModells.forEach(function (element) {
            console.log(element);
        });
        return this.checkedModells;
    };
    ZustaendeComponent.prototype.receiveChanage = function ($event) {
        this.displayThenBlock = $event;
    };
    ZustaendeComponent.prototype.getPriorityLevel = function (sms) {
        return sms.priority.toUpperCase().charAt(0);
    };
    // getFullPri(sms) {
    //   return this._data.priorities.find(x => x.value === sms.priority);
    // }
    ZustaendeComponent.prototype.getISTE = function (csModell, iz) {
        var temp_list;
        if (iz === 'i') {
            temp_list = csModell.Iste;
        }
        else if (iz === 'z') {
            temp_list = csModell.Ziele;
        }
        else {
            temp_list = [];
        }
        if (temp_list.length === 0) {
            return 'Keiner';
        }
        else {
            var temp_ist_ids = temp_list.map(function (ist) {
                return ist.id;
            });
            console.log('... tge temp_istZiel_string: ', temp_ist_ids.join(','));
            return temp_ist_ids.join(',');
        }
    };
    ZustaendeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-zustaende',
            template: __webpack_require__(/*! ./zustaende.component.html */ "./src/app/zustaende/zustaende.component.html"),
            styles: [__webpack_require__(/*! ./zustaende.component.css */ "./src/app/zustaende/zustaende.component.css")],
            providers: [_modell_service__WEBPACK_IMPORTED_MODULE_1__["ModellService"]]
        }),
        __metadata("design:paramtypes", [_modell_service__WEBPACK_IMPORTED_MODULE_1__["ModellService"], _data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]])
    ], ZustaendeComponent);
    return ZustaendeComponent;
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
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/xiawang/Applications/mockup/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map