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
		var e = new Error('Cannot find module "' + req + '".');
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _modell_center_modell_center_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modell-center/modell-center.component */ "./src/app/modell-center/modell-center.component.ts");
/* harmony import */ var _start_start_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./start/start.component */ "./src/app/start/start.component.ts");
/* harmony import */ var _kriterien_kriterien_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./kriterien/kriterien.component */ "./src/app/kriterien/kriterien.component.ts");
/* harmony import */ var _zustaende_zustaende_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./zustaende/zustaende.component */ "./src/app/zustaende/zustaende.component.ts");
/* harmony import */ var _massnahmen_massnahmen_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./massnahmen/massnahmen.component */ "./src/app/massnahmen/massnahmen.component.ts");
/* harmony import */ var _modell_design_modell_design_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modell-design/modell-design.component */ "./src/app/modell-design/modell-design.component.ts");
/* harmony import */ var _evaluation_evaluation_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./evaluation/evaluation.component */ "./src/app/evaluation/evaluation.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    { path: '', redirectTo: '/start', pathMatch: 'full' },
    // {path: 'home', component: HomeComponent},
    { path: 'start', component: _start_start_component__WEBPACK_IMPORTED_MODULE_3__["StartComponent"] },
    { path: 'kriteiren', component: _kriterien_kriterien_component__WEBPACK_IMPORTED_MODULE_4__["KriterienComponent"] },
    { path: 'zustaende', component: _zustaende_zustaende_component__WEBPACK_IMPORTED_MODULE_5__["ZustaendeComponent"] },
    { path: 'massnahman', component: _massnahmen_massnahmen_component__WEBPACK_IMPORTED_MODULE_6__["MassnahmenComponent"] },
    { path: 'evaluation', component: _evaluation_evaluation_component__WEBPACK_IMPORTED_MODULE_8__["EvaluationComponent"] },
    { path: 'modellDesign', component: _modell_design_modell_design_component__WEBPACK_IMPORTED_MODULE_7__["ModellDesignComponent"] },
    { path: 'models', component: _modell_center_modell_center_component__WEBPACK_IMPORTED_MODULE_2__["ModellCenterComponent"] }
];
var AppRoutingModule = (function () {
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

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<nav class = \"navbar navbar-inverse\">-->\n  <!--<div class=\"container-fluid\">-->\n    <!--<div class=\" navbar-header\">-->\n      <!--<a class=\"navbar-brand\" href=\"#\"> Mockup Modell Editor</a>-->\n    <!--</div>-->\n    <!--<div><ul class=\"nav navbar-nav\">-->\n      <!--<li> <a routerLink=\"/home\" routerLinkActive=\"active\"> Home</a> </li>-->\n      <!--<li> <a routerLink=\"/start\" routerLinkActive=\"active\"> Start</a> </li>-->\n      <!--<li> <a routerLink=\"/kriteiren\" routerLinkActive=\"active\"> Kriterien</a> </li>-->\n      <!--<li> <a routerLink=\"/models\" routerLinkActive=\"active\"> Model List</a> </li>-->\n    <!--</ul></div>-->\n  <!--</div>-->\n<!--</nav>-->\n\n\n<nav id=\"navbar\">\n  <div class=\"container\">\n    <ul>\n      <!--<li> <a routerLink=\"/home\" > Home</a> </li>-->\n      <li> <a routerLink=\"/start\" routerLinkActive=\"active\"> Start</a> </li>\n      <li> <a routerLink=\"/kriteiren\" routerLinkActive=\"active\"> Kriterien</a> </li>\n      <li> <a routerLink=\"/zustaende\" routerLinkActive=\"active\"> Zustände</a> </li>\n      <li> <a routerLink=\"/massnahman\" routerLinkActive=\"active\"> Maßnahmen</a> </li>\n      <li> <a routerLink=\"/evaluation\" routerLinkActive=\"active\"> Evaluation</a> </li>\n      <!--<li> <a routerLink=\"/modellDesign\" routerLinkActive=\"active\"> ModelDesign</a> </li>-->\n      <!--<li> <a routerLink=\"/models\" routerLinkActive=\"active\"> ModelList</a> </li>-->\n\n    </ul>\n  </div>\n</nav>\n\n<div class=\"container\">\n  <router-outlet></router-outlet>\n</div>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _modell_center_modell_center_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modell-center/modell-center.component */ "./src/app/modell-center/modell-center.component.ts");
/* harmony import */ var _model_list_model_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./model-list/model-list.component */ "./src/app/model-list/model-list.component.ts");
/* harmony import */ var _model_detail_model_detail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./model-detail/model-detail.component */ "./src/app/model-detail/model-detail.component.ts");
/* harmony import */ var _start_start_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./start/start.component */ "./src/app/start/start.component.ts");
/* harmony import */ var _kriterien_kriterien_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./kriterien/kriterien.component */ "./src/app/kriterien/kriterien.component.ts");
/* harmony import */ var _zustaende_zustaende_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./zustaende/zustaende.component */ "./src/app/zustaende/zustaende.component.ts");
/* harmony import */ var _modell_design_modell_design_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modell-design/modell-design.component */ "./src/app/modell-design/modell-design.component.ts");
/* harmony import */ var _massnahmen_massnahmen_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./massnahmen/massnahmen.component */ "./src/app/massnahmen/massnahmen.component.ts");
/* harmony import */ var _evaluation_evaluation_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./evaluation/evaluation.component */ "./src/app/evaluation/evaluation.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var angular_font_awesome__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! angular-font-awesome */ "./node_modules/angular-font-awesome/dist/angular-font-awesome.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm5/tooltip.es5.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm5/grid-list.es5.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm5/select.es5.js");
/* harmony import */ var _modell_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./modell.service */ "./src/app/modell.service.ts");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./data.service */ "./src/app/data.service.ts");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./user.service */ "./src/app/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


























var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
                _modell_center_modell_center_component__WEBPACK_IMPORTED_MODULE_5__["ModellCenterComponent"],
                _model_list_model_list_component__WEBPACK_IMPORTED_MODULE_6__["ModelListComponent"],
                _model_detail_model_detail_component__WEBPACK_IMPORTED_MODULE_7__["ModelDetailComponent"],
                _kriterien_kriterien_component__WEBPACK_IMPORTED_MODULE_9__["KriterienComponent"],
                _start_start_component__WEBPACK_IMPORTED_MODULE_8__["StartComponent"],
                _zustaende_zustaende_component__WEBPACK_IMPORTED_MODULE_10__["ZustaendeComponent"],
                _massnahmen_massnahmen_component__WEBPACK_IMPORTED_MODULE_12__["MassnahmenComponent"],
                _modell_design_modell_design_component__WEBPACK_IMPORTED_MODULE_11__["ModellDesignComponent"],
                _evaluation_evaluation_component__WEBPACK_IMPORTED_MODULE_13__["EvaluationComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HttpClientModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_15__["HttpModule"],
                angular_font_awesome__WEBPACK_IMPORTED_MODULE_17__["AngularFontAwesomeModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_19__["MatCheckboxModule"], _angular_material__WEBPACK_IMPORTED_MODULE_19__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_19__["MatFormFieldModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_21__["MatGridListModule"], _angular_material__WEBPACK_IMPORTED_MODULE_19__["MatDatepickerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_19__["MatNativeDateModule"], _angular_material__WEBPACK_IMPORTED_MODULE_19__["MatCardModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_22__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_19__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_19__["MatIconModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_20__["MatTooltipModule"]
            ],
            providers: [_angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HttpClientModule"], _modell_service__WEBPACK_IMPORTED_MODULE_23__["ModellService"], _data_service__WEBPACK_IMPORTED_MODULE_24__["DataService"], _user_service__WEBPACK_IMPORTED_MODULE_25__["UserService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var rxjs_BehaviorSubject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/BehaviorSubject */ "./node_modules/rxjs/_esm5/BehaviorSubject.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DataService = (function () {
    function DataService() {
        // this used to persist the selected models, which will be used by all the other pages
        // private seModels = new BehaviorSubject<boolean[]>( new Array(42));
        this.seModels = new rxjs_BehaviorSubject__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
        this.selectedModels = this.seModels.asObservable();
    }
    DataService.prototype.changeGoal = function (selectedModels) {
        this.seModels.next(selectedModels);
    };
    DataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/evaluation/evaluation.component.css":
/*!*****************************************************!*\
  !*** ./src/app/evaluation/evaluation.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*.container{*/\n  /*background-color: #fac9ae;*/\n  /*}*/\n  div.input-group{\n  float: left;\n  width: 80%;\n  /*border: 1px dotted #A9B7C0;*/\n  border-radius: 25px;\n  background: lightgrey;\n  padding: 20px;\n  margin-top: 20px;\n}\n  #label1{\n  float: left;\n  width: 80%;\n}\n  .input-select{\n  float: right;\n  width: 15%;\n  margin-left: 15px;\n  margin-top: 110px;\n}\n  .checkedModel{\n  float: left;\n  width: 60%;\n  margin:2px;\n}\n  .checkedModel input{\n  background-color:#A9B7C0;\n  width:95%;\n  color:black;\n  font-size: medium;\n  font-weight: bold;\n  padding:5px;\n  border:none;\n  margin-bottom: 5px;\n  display: block;\n}\n  .balls{\n  width: 15%;\n  background-color: #d7d7d7;\n  color:darkgrey;\n  height: 30px;\n  margin-right: 30px;\n  font-size: medium;\n  font-weight: bold;\n  text-align: center;\n}\n  .priority{\n  float:right;\n  width: 6%;\n  margin:2px;\n}\n  .priority input{\n  font-size: medium;\n  height: 30px;\n  width: 140px;\n  font-weight: bold;\n  margin-right: 80px;\n  background-color: #d7d7d7;\n  border:none;\n  display: block;\n  text-align: center;\n  padding:5px;\n  margin-bottom: 5px;\n  color:darkgrey;\n}\n  div.input-group.mb-3{\n  float: left;\n  width: 95%;\n  padding: 0px;\n  margin-top: 2px;\n  background: lightgrey;\n}\n  .input-group-text{\n  font-size: medium;\n  font-weight: bold;\n  background: lightgrey;\n}\n  .form-control{\n  font-size: medium;\n  background: lightgrey;\n  border-style: none;\n}\n  .mass{\n  float:left;\n  width: 100%;\n  display: block;\n}\n  .mass  textarea{\n  float: left;\n  width: 95%;\n  background-color: #d7d7d7;\n  overflow: hidden;\n  display: block;\n  margin-top: 5px;\n  margin-bottom: 5px;\n  border:1px;\n  font-size: medium;\n  color:darkgrey;\n  font-weight: normal;\n}\n  .KTV-form {\n  min-width: 150px;\n  max-width: 100%;\n  width: 100%;\n  margin-top: 15px;\n}\n  .example-full-width {\n  width: 95%;\n  font-size: medium;\n  font-weight: bold;\n  background-color: #d7d7d7;\n  color:darkgrey;\n}\n  .btn {\n  float: left;\n  width: 15%;\n  background-color: #989898;\n  border: none;\n  color: white;\n  padding: 12px 30px;\n  font-size: medium;\n  cursor: pointer;\n  margin-left: 15px;\n  margin-right: 15px;\n  margin-top: 10px;\n  padding: 3px;\n}\n  /* Darker background on mouse-over */\n  .btn:hover {\n  background-color: #787878;\n}\n  .info{\n  float: left;\n  width: 20%;\n  margin-left: 295px;\n  margin-top: 10px;\n  font-size: medium;\n}\n"

/***/ }),

/***/ "./src/app/evaluation/evaluation.component.html":
/*!******************************************************!*\
  !*** ./src/app/evaluation/evaluation.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n  <div id=\"label1\">\n    <label> Welche Maßnahmen sollen die Lücken zwischen Ist- und Ziel-Zuständen schließen? </label>\n  </div>\n\n  <div>\n    <div class=\"info\"> You have evaluated {{number}} Kriterien. </div>\n    <button class=\"btn\" (click)=\"preview()\" disabled> Preview </button>\n    <button class=\"btn\" (click)=\"exportJson()\"> Download (.json)</button>\n    <!--<a class=\"btn btn-clear\" title=\"Download JSON\" [href]=\"downloadJsonHref\" download=\"download.json\"></a>-->\n  </div>\n  <div *ngFor=\"let cm of sms; index as i\">\n    <div class =\"input-group\">\n      <div class=\"checkedModel\"> <input  disabled type=\"text\" id=\"{{cm.kriterium_id}}\" value=\"{{cm.kriterium_id}}. {{cm.kriterium}}\"></div>\n      <div class=\"balls\"> {{cm.ist_id}} -> {{cm.ziel_id}}</div>\n      <div class=\"priority\"> <input  type=\"text\" disabled value=\" Priorität: {{cm.priority}}\"></div>\n\n\n      <div class=\"input-group mb-3\">\n        <div class=\"input-group-prepend\">\n          <span class=\"input-group-text\">Maßnahme: </span>\n        </div>\n        <textarea class=\"form-control\" aria-label=\"Maßnahme: \"  value=\"{{cm.Massnahmen}}\"  matTextareaAutosize matAutosizeMinRows=\"3\" matAutosizeMaxRows=\"15\" disabled></textarea>\n      </div>\n\n      <div class=\"input-group mb-3\">\n        <div class=\"input-group-prepend\">\n          <span class=\"input-group-text\">Erklärung: &nbsp;&nbsp;&nbsp;</span>\n        </div>\n        <textarea class=\"form-control\" aria-label=\"Erklärung:\" value=\"{{cm.Erklaerung}}\" matTextareaAutosize matAutosizeMinRows=\"3\" matAutosizeMaxRows=\"15\" disabled></textarea>\n      </div>\n\n\n      <form class=\"KTV-form\">\n        <table class=\"example-full-width\" cellspacing=\"0\">\n          <tr>\n            <td><mat-form-field class=\"example-full-width\">\n              <input matInput type=\"text\" placeholder=\"Kosten: (EUR)\" value=\"{{cm.Kosten}}\">\n            </mat-form-field></td>\n            <td><mat-form-field class=\"example-full-width\">\n              <input matInput  placeholder=\"Termin:\" value=\"{{cm.Termin | date : 'dd.MM.y' }}\">\n            </mat-form-field></td>\n            <td><mat-form-field class=\"example-full-width\">\n              <input matInput placeholder=\"Verantwortlich:\" maxlength=\"30\" value=\"{{cm.Verantwortlich}}\">\n            </mat-form-field></td>\n          </tr></table>\n      </form>\n    </div><!--input Group-->\n\n    <div class=\"input-select\" *ngIf=\"sms[i]\">\n    <!--<div class=\"input-select\">-->\n      <mat-checkbox type=\"checkbox\" checked=\"false\" [checked]=\"sms[i].isEvaluated\" (change)=\"onChange($event, i, cm)\" ></mat-checkbox>\n    </div>\n  </div>\n\n\n</div><!--container-->\n"

/***/ }),

/***/ "./src/app/evaluation/evaluation.component.ts":
/*!****************************************************!*\
  !*** ./src/app/evaluation/evaluation.component.ts ***!
  \****************************************************/
/*! exports provided: EvaluationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EvaluationComponent", function() { return EvaluationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _modell_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modell.service */ "./src/app/modell.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/esm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EvaluationComponent = (function () {
    function EvaluationComponent(_modellService, _data, sanitizer) {
        this._modellService = _modellService;
        this._data = _data;
        this.sanitizer = sanitizer;
        // public CModells = [
        //   {'_id': '1', 'Kriterium': 'Digitale Konnektivität von Maschinen'},
        //   {'_id': '3', 'Kriterium': 'Produkt als digitaler Informationstraeger'},
        //   {'_id': '6', 'Kriterium': 'Mensch-Roboter-Kollaboration'},
        //   {'_id': '7', 'Kriterium': 'Betriebsdatenerfassung (BDE)'},
        //   {'_id': '9', 'Kriterium': 'Methodik der Fertigungs- und Montagesteuerung'}
        // ];
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
    };
    EvaluationComponent.prototype.preview = function () {
        var objJSON = JSON.stringify(this.tmpArray);
        console.log(objJSON);
    };
    EvaluationComponent.prototype.generateDownloadJsonUri = function () {
        var theJSON = JSON.stringify(this.resJsonResponse);
        var uri = this.sanitizer.bypassSecurityTrustUrl('data:text/json;charset=UTF-8,' + encodeURIComponent(theJSON));
        this.downloadJsonHref = uri;
    };
    EvaluationComponent.prototype.exportJson = function () {
        console.log(this.sms);
        for (var i = 0; i < this.sms.length; i++) {
            if (this.sms[i].isEvaluated) {
                this.tmpArray.push(this.sms[i]);
            }
        }
        var c = JSON.stringify(this.tmpArray);
        var file = new Blob([c], { type: 'text/json' });
        this.download(file, 'Your_Kriterions.json');
    };
    EvaluationComponent.prototype.download = function (blob, filename) {
        if (window.navigator.msSaveOrOpenBlob) {
            window.navigator.msSaveOrOpenBlob(blob, filename);
        }
        else {
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
    EvaluationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-evaluation',
            template: __webpack_require__(/*! ./evaluation.component.html */ "./src/app/evaluation/evaluation.component.html"),
            styles: [__webpack_require__(/*! ./evaluation.component.css */ "./src/app/evaluation/evaluation.component.css")]
        }),
        __metadata("design:paramtypes", [_modell_service__WEBPACK_IMPORTED_MODULE_2__["ModellService"], _data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"]])
    ], EvaluationComponent);
    return EvaluationComponent;
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

module.exports = "<div class=\"jumbotron\">\n  <h3>Mockup Modell Viewer -updeated </h3>\n</div>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
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

/***/ "./src/app/kriterien/kriterien.component.css":
/*!***************************************************!*\
  !*** ./src/app/kriterien/kriterien.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".myform{\n  width:100%;\n  float:left;\n  padding: 20px;\n}\n\n#close-icon {\n  width:10%;\n}\n\n.myform .form-group{\n  padding: 0;\n  margin:0;\n}\n\n.myform .form-group label{\n  float:left;\n  width: 60%;\n  height: 30px;\n  background-color:#A9B7C0;\n  color:#333;\n  font-weight: bolder;\n  padding:0;\n  border:none;\n  margin-bottom: 20px;\n  margin-top: 15px;\n  font-size: medium;\n  cursor: zoom-in;\n}\n\n.myform .form-group mat-checkbox {\n  float: right;\n  width: 20%;\n  margin-right: -80px;\n  margin-top: 20px;\n  padding: 0;\n}\n\n.fa-check-circle-o{\n  font-size:40px;\n  color:orange;\n  width: 20%;\n  float:right;\n  margin-right: -80px;\n  margin-top: 20px;\n  padding: 0;\n  box-sizing: border-box;\n  position: center;\n}\n\n.fa-check-circle{\n  font-size:40px;\n  color:orange;\n  float:right;\n  width: 20%;\n  box-sizing: border-box;\n  position: center;\n  margin-right: -80px;\n  margin-top: 20px;\n  padding: 0;\n}\n\n.myform .form-group textarea {\n  padding: 8px;\n  width: 75%;\n  border-radius: 0;\n  overflow: hidden;\n  background: #EFD9C1;\n  display: block;\n  border-color: lightgrey;\n  font-size: medium;\n}\n\n.mat-form-field{\n  width:100% !important;\n  border:0;\n  margin:0;\n  padding:0;\n}\n\n#wrapper {\n}\n\n#content {\n  float: left;\n  width: 80%;\n}\n\n#sidebar {\n  float: right;\n  width: 20%;\n  margin-right: -100px;\n  margin-bottom: 0;\n  margin-top: 0;\n}\n\n#cleared {\n  clear: both;\n}\n\n"

/***/ }),

/***/ "./src/app/kriterien/kriterien.component.html":
/*!****************************************************!*\
  !*** ./src/app/kriterien/kriterien.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <form class=\"myform\">\n    <div id=\"label1\">\n      <label> Welche Kriterien benötigen Sie für Ihre Ziele?  </label>\n    </div>\n\n    <div class =\"form-group\" *ngFor=\"let modell of modells; let i = index;\">\n      <label title=\"click to see description\" (click)=\"showBeschreibung(i)\" >{{modell._id}}. {{modell.Kriterium}}</label>\n      <mat-checkbox type=\"checkbox\" checked=\"false\" [checked]=\"getCheckState(modell._id)\" (change)=\"onChange($event, i, modell)\" ></mat-checkbox>\n      <textarea [hidden]=\"!hiddenValue[i]\" matInput placeholder=\"\" matTextareaAutosize matAutosizeMinRows=\"6\" matAutosizeMaxRows=\"50\">{{modell.Beschreibung}}</textarea>\n    </div>\n  </form>\n</div>\n\n\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _modell_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modell.service */ "./src/app/modell.service.ts");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _selectedModel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../selectedModel */ "./src/app/selectedModel.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var KriterienComponent = (function () {
    function KriterienComponent(_modellService, _data) {
        this._modellService = _modellService;
        this._data = _data;
        // showUnderline = true;
        this.sms = [];
        this.hiddenValue = new Array(42).fill(false);
    }
    KriterienComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._modellService.sharedModells.subscribe(function (res) { return _this.modells = res; });
        this._modellService.changeModel(this.modells);
        // console.log('... get from DB, the modell length is: ', this.modells.length);
        this.itemCount = this.sms.length;
        console.log('... the sms length is: ', this.itemCount);
        this._data.selectedModels.subscribe(function (res) { return _this.sms = res; });
        this._data.changeGoal(this.sms);
        // this.sortModells();
    };
    KriterienComponent.prototype.sortModells = function () {
        var size = Object.keys(this.modells).length;
        console.log('... length of dbMmodels: ', size);
        // console.log('... length of modells: ', xxx);
        // this.modells.sort((a, b) => +a._id < +b._id ? -1 : +a._id > +b._id ? 1 : 0);
    };
    // selectedIndex is actually the model ID
    KriterienComponent.prototype.addItem = function (selectedIndex, kri) {
        var newItem = new _selectedModel__WEBPACK_IMPORTED_MODULE_3__["SelectedModel"]();
        newItem.isselected = true;
        newItem.kriterium = kri;
        newItem.kriterium_id = selectedIndex;
        if (this.sms.length === 0) {
            this.sms[0] = newItem;
            console.log('... to add the checked model: ', selectedIndex);
        }
        else {
            this.sms.push(newItem);
            console.log('... to push the checked model: ', selectedIndex);
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
    KriterienComponent.prototype.getCheckState = function (mid) {
        if (this.sms != null) {
            // console.log('... to get the check status of model: ', mid);
            var mo = this.sms.find(function (x) { return x.kriterium_id === mid; });
            if (mo != null) {
                // console.log('... mo size is ', mo.length, mid, ' checked status is: ', mo.isselected);
                return mo.isselected;
            }
        }
        else {
            return false;
        }
    };
    // check or uncheck modell
    KriterienComponent.prototype.onChange = function (event, index, item) {
        this.lastAction = 'index: ' + index + ', label: ' + item.label + ', checked: ' + item.checked;
        console.log('before: ', index, event, item);
        item.checked = event.checked;
        this.lastAction = 'index: ' + index + ', label: ' + item.label + ', checked: ' + item.checked;
        console.log('after: ', index, event, item);
        var checkedID = index;
        var kid = item._id;
        this.modells[checkedID].isSelected = item.checked;
        console.log('... now ', kid, ' hasChecked ...: ');
        if (item.checked) {
            if (!this.smsExist(kid)) {
                this.addItem(kid, item.Kriterium); // add
            }
        }
        if (!item.checked) {
            if (this.smsExist(kid)) {
                this.removeItem(kid);
            }
        }
        this._modellService.changeModel(this.modells);
        console.log('... the persisted sms ...: ', this.sms.length);
        for (var i = 0; i < this.sms.length; i++) {
            console.log(this.sms[i].kriterium_id, this.sms[i].isselected);
        }
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
        __metadata("design:paramtypes", [_modell_service__WEBPACK_IMPORTED_MODULE_1__["ModellService"], _data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]])
    ], KriterienComponent);
    return KriterienComponent;
}());



/***/ }),

/***/ "./src/app/massnahmen/massnahmen.component.css":
/*!*****************************************************!*\
  !*** ./src/app/massnahmen/massnahmen.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".input-group{\n  float: left;\n  width: 90%;\n  /*border: 1px dotted #A9B7C0;*/\n  border-radius: 25px;\n  background: lightgrey;\n  padding: 20px;\n  margin-top: 20px;\n}\n\ndiv.input-group.mb-3{\n  float: left;\n  width: 95%;\n  padding: 0px;\n  margin-top: 2px;\n}\n\n.input-group-text{\n  font-size: medium;\n  font-weight: bold;\n}\n\n.form-control{\n  font-size: medium;\n  background-color: #F7F9F9;\n}\n\n.checkedModel{\n  float: left;\n  width: 50%;\n  margin:2px;\n}\n\n.checkedModel input{\n  background-color:#A9B7C0;\n  width:90%;\n  color:#333;\n  font-size: medium;\n  font-weight: bold;\n  padding:5px;\n  border:none;\n  margin-bottom: 5px;\n  display: block;\n}\n\n.balls{\n  width: 15%;\n  background-color: #EFD9C1;\n  height: 30px;\n  margin-right: 30px;\n  font-size: medium;\n  font-weight: bold;\n  text-align: center;\n}\n\n.priority{\n  float:right;\n  width: 15%;\n  margin:2px;\n}\n\n.priority input{\n  font-size: medium;\n  height: 30px;\n\n  font-weight: bold;\n  margin-right: 80px;\n  background-color: #EFD9C1;\n  border:none;\n  display: block;\n  text-align: center;\n  padding:5px;\n  margin-bottom: 5px;\n}\n\n.mass{\n  float:left;\n  width: 100%;\n  display: block;\n}\n\n.mass  textarea{\n  float: left;\n  width: 100%;\n  background-color: #f9f9f9;\n  overflow: hidden;\n  display: block;\n  margin-top: 5px;\n  margin-bottom: 5px;\n  border:1px;\n  font-size: medium;\n}\n\n.KTV-form {\n  min-width: 150px;\n  max-width: 100%;\n  width: 100%;\n  margin-top: 15px;\n}\n\n.example-full-width {\n  width: 95%;\n  font-size: medium;\n  font-weight: bold;\n  background-color: #C7D8C6;\n}\n\n.example2-form {\n  width: 95%;\n}\n\n.example2-full-width {\n  width: 100%;\n  font-size: large;\n  font-weight: bold;\n}\n\n#myCarousel{\n  width: 100%;\n  margin-top: 3px;\n  padding: 10px;\n  background: darkgray;\n  height: 800px;\n}\n\n.carousel-inner{\n  width: 80%;\n}\n\n#myCarousel .carousel-inner .item {\n  width:70%;\n  margin-left: 280px;\n  margin-right: 280px;\n  font-size: medium;\n}\n\n#myCarousel .carousel-inner .left .carousel-control {\n  float: left;\n  margin-left: 0;\n  padding-left: 0;\n}\n\n#myCarousel .carousel-inner .right .carousel-control{\n  float: right;\n  margin-right: 0;\n  padding-right: 0;\n}\n"

/***/ }),

/***/ "./src/app/massnahmen/massnahmen.component.html":
/*!******************************************************!*\
  !*** ./src/app/massnahmen/massnahmen.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n  <div id=\"label1\">\n    <label> Welche Maßnahmen sollen die Lücken zwischen Ist- und Ziel-Zuständen schließen? </label>\n  </div>\n\n  <div *ngFor=\"let cm of ssms; index as i\">\n     <!--<div class =\"input-group\" *ngIf=\"sms[i]\">-->\n     <div class =\"input-group\">\n         <div class=\"checkedModel\"> <input  disabled type=\"text\" id=\"{{cm.kriterium_id}}\" value=\"{{cm.kriterium_id}}. {{cm.kriterium}}\"></div>\n         <div class=\"balls\"> {{cm.ist_id}} -> {{cm.ziel_id}}</div>\n         <div class=\"priority\"> <input  type=\"text\" disabled value=\" Priorität: {{cm.priority}}\"></div>\n\n       <div class=\"input-group mb-3\">\n         <div class=\"input-group-prepend\">\n           <span class=\"input-group-text\">Maßnahme: </span>\n         </div>\n         <textarea class=\"form-control\" aria-label=\"Maßnahme: \"  [(ngModel)]=\"cm.Massnahmen\"  matTextareaAutosize matAutosizeMinRows=\"3\" matAutosizeMaxRows=\"15\"></textarea>\n       </div>\n\n       <div class=\"input-group mb-3\">\n         <div class=\"input-group-prepend\">\n           <span class=\"input-group-text\">Erklärung: &nbsp;&nbsp;</span>\n         </div>\n         <textarea class=\"form-control\" aria-label=\"Erklärung: \" [(ngModel)]=\"cm.Erklaerung\" matTextareaAutosize matAutosizeMinRows=\"3\" matAutosizeMaxRows=\"15\"></textarea>\n       </div>\n\n       <div class=\"mass\">\n\n         <form class=\"KTV-form\">\n         <table class=\"example-full-width\" cellspacing=\"0\">\n           <tr>\n              <td><mat-form-field class=\"example-full-width\">\n                <input matInput type=\"text\" [(ngModel)]=\"cm.Kosten\" placeholder=\"Kosten: (EUR)\" [ngModelOptions]=\"{standalone: true}\">\n              </mat-form-field></td>\n              <td><mat-form-field class=\"example-full-width\">\n                <input matInput [matDatepicker]=\"picker\" placeholder=\"Termin:\" [(ngModel)]=\"cm.Termin\"  [ngModelOptions]=\"{standalone: true}\" >\n                <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n                <mat-datepicker #picker startView=\"year\" [startAt]=\"startDate\"></mat-datepicker>\n              </mat-form-field></td>\n              <td><mat-form-field class=\"example-full-width\">\n                <input matInput #postalCode maxlength=\"30\" placeholder=\"Verantwortlich\" [(ngModel)]=\"cm.Verantwortlich\" [ngModelOptions]=\"{standalone: true}\" >\n              </mat-form-field></td>\n        </tr></table>\n      </form>\n\n       <!--<div> current Mass {{cm.Massnahmen}} Erk:{{cm.Erklaerung}}  Kost: {{cm.Kosten}} Ver: {{cm.Verantwortlich}} Termin: {{cm.Termin}}</div>-->\n\n     </div><!--input Group-->\n\n\n  </div>\n\n</div>\n\n</div>\n\n\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _modell_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modell.service */ "./src/app/modell.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MassnahmenComponent = (function () {
    function MassnahmenComponent(_modellService, _data) {
        this._modellService = _modellService;
        this._data = _data;
        // public CModells = [
        //   {'_id': '1', 'Kriterium': 'Digitale Konnektivität von Maschinen'},
        //   {'_id': '3', 'Kriterium': 'Produkt als digitaler Informationstraeger'},
        //   {'_id': '6', 'Kriterium': 'Mensch-Roboter-Kollaboration'},
        //   {'_id': '7', 'Kriterium': 'Betriebsdatenerfassung (BDE)'},
        //   {'_id': '9', 'Kriterium': 'Methodik der Fertigungs- und Montagesteuerung'},
        //   {'_id': '14', 'Kriterium': 'Kostentransparenz'},
        //   {'_id': '20', 'Kriterium': 'Dokumentation und Analyse von Qualitaetsdaten'},
        //   {'_id': '24', 'Kriterium': 'IT-Sicherheit / Industrial Security'}
        // ];
        // show = false;
        // myVar = 1;
        // balls = ['1 -> 2', '1 -> 2', '2 -> 3', '0 -> 2', '0 -> 3', '3 -> 4' ];
        //  public mass= ['Maßnahme: Die Machinen bekommen einfache I/O-Schnittstellen (z.B. Klemmen einer SPS) über welche binäre ode analoge Singale ausgetauscht werder. ',
        //    '1 Maßnahme: Die Machinen bekommen einfache I/O-Schnittstellen (z.B. Klemmen einer SPS) über welche binäre ode analoge Singale ausgetauscht werder. ',
        //    '2 Maßnahme: Die Machinen bekommen einfache I/O-Schnittstellen (z.B. Klemmen einer SPS) über welche binäre ode analoge Singale ausgetauscht werder. ',
        //    '3 Maßnahme: Die Machinen bekommen einfache I/O-Schnittstellen (z.B. Klemmen einer SPS) über welche binäre ode analoge Singale ausgetauscht werder. ',
        //    '4 Maßnahme: Die Machinen bekommen einfache I/O-Schnittstellen (z.B. Klemmen einer SPS) über welche binäre ode analoge Singale ausgetauscht werder. ',
        //    'Maßnahme: Die Machinen bekommen einfache I/O-Schnittstellen (z.B. Klemmen einer SPS) über welche binäre ode analoge Singale ausgetauscht werder. ',
        //    'Maßnahme: Die Machinen bekommen einfache I/O-Schnittstellen (z.B. Klemmen einer SPS) über welche binäre ode analoge Singale ausgetauscht werder. '];
        // public  erk= ['Erklärung: Neue (informations-) technischen Schnittstellen zwischen Hard- und Software sowie Maschinen und Anagen werden gebraucht',
        //    'Erklärung: Neue (informations-) technischen Schnittstellen zwischen Hard- und Software sowie Maschinen und Anagen werden gebraucht',
        //    'Erklärung: Neue (informations-) technischen Schnittstellen zwischen Hard- und Software sowie Maschinen und Anagen werden gebraucht',
        //    'Erklärung: Neue (informations-) technischen Schnittstellen zwischen Hard- und Software sowie Maschinen und Anagen werden gebraucht',
        //    'Erklärung: Neue (informations-) technischen Schnittstellen zwischen Hard- und Software sowie Maschinen und Anagen werden gebraucht',
        //    'Erklärung: Neue (informations-) technischen Schnittstellen zwischen Hard- und Software sowie Maschinen und Anagen werden gebraucht',
        //    'Erklärung: Neue (informations-) technischen Schnittstellen zwischen Hard- und Software sowie Maschinen und Anagen werden gebraucht',
        //    'Erklärung: Neue (informations-) technischen Schnittstellen zwischen Hard- und Software sowie Maschinen und Anagen werden gebraucht'];
        //
        //
        this.ssms = [];
    }
    MassnahmenComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._modellService.sharedModells.subscribe(function (res) { return _this.CModells = res; });
        this._modellService.changeModel(this.CModells);
        this.itemCount = this.ssms.length;
        this._data.selectedModels.subscribe(function (res) { return _this.ssms = res; });
        this._data.changeGoal(this.ssms);
        // console.log('... the passed on sms has ...: ', this.ssms.length);
        // for (let i = 0; i < this.ssms.length; i++) {
        //   console.log(this.ssms[i].kriterium_id, this.ssms[i].kriterium,
        //     this.ssms[i].isselected, this.ssms[i].int_priorty); }
    };
    MassnahmenComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-massnahmen',
            template: __webpack_require__(/*! ./massnahmen.component.html */ "./src/app/massnahmen/massnahmen.component.html"),
            styles: [__webpack_require__(/*! ./massnahmen.component.css */ "./src/app/massnahmen/massnahmen.component.css")]
        }),
        __metadata("design:paramtypes", [_modell_service__WEBPACK_IMPORTED_MODULE_2__["ModellService"], _data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ModelDetailComponent = (function () {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ModelListComponent = (function () {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
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


var ModellCenterComponent = (function () {
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

module.exports = ".labs{\n  margin-top: 30px;\n  width: 100%;\n  margin-bottom: 10px;\n  position: relative;\n}\n\n#close-icon{\n  float:left;\n  width:5%;\n  margin-right: 10px;\n  margin-left: 2px;\n  margin-top: -10px;\n}\n\n.labs label{\n  float: left;\n  width: 10%;\n  display: block;\n  margin-right: 0;\n  margin-left: 5px;\n  background-color: #EFD9C1;\n  font-size: large;\n  color: #555555;\n  padding:5px;\n  text-align: center;\n}\n\n.labs input[type='text']{\n  float: left;\n  width: 55%;\n  height: 37px;\n  background-color: #A9B7C0;\n  border: 0;\n  font: bold 20px courier !important;\n  padding: 5px;\n  margin-left:10px;\n  margin-right:10px;\n}\n\n.labs input[type='number']{\n  float: left;\n  width: 5%;\n  background-color: #C7D8C6;\n  font-weight: bold;\n  font-size: large;\n  text-align: center;\n  padding:5px;\n  border:0;\n  margin-left: 2px;\n  margin-top: 0px;\n}\n\n.labs input[type=number]::-webkit-inner-spin-button,\n.labs input[type=number]::-webkit-outer-spin-button {\n\n  opacity: 1;\n}\n\nbutton.mat-button{\n  width:5%;\n  margin-left: 10px;\n}\n\nbutton#info.mat-button {\n  /*width: 5%;*/\n  float: right;\n  margin-top: -15px;\n}\n\n/*.mat-icon-button.small {*/\n\n/*width:15%;*/\n\n/*}*/\n\n.modell-card{\n  width:97%;\n  background-color: #A9B7C0;\n  margin-top: 15px;\n  margin-left: 10px;\n  padding-bottom:5px;\n}\n\n#model-text {\n  width: 90%;\n  float:left;\n  display: block;\n}\n\n/*the following 4 styling is for changing the size of icon*/\n\n.mat-icon-button.small {\n  width: 42px;\n  height: 42px;\n  line-height: 42px;\n}\n\n.mat-icon, .mat-icon-button i {\n  line-height: 36px;\n}\n\n.mat-icon {\n  width: 36px;\n  height:36px;\n}\n\n.material-icons {\n  font-size: 32px;\n  color: #666666;\n}\n\n#model_note{\n  width: 85%;\n  display: block;\n  margin-top: 20px;\n  margin-bottom: 5px;\n}\n\n.aug-cards{\n  width: 100%;\n}\n\n.aug-cards mat-card-title{\n  align-content: center;\n}\n\n.mat-form-field{\n  width:95%;\n}\n\n.mat-form-field-wrapper {\n  padding-bottom: -1.25em;\n}\n\n.example-card-0, .example-card-3, .example-card-4, .example-card-5, .example-card-6, .example-card-7{\n  float:left;\n  width:23%;\n  align-items: center;\n  display: block;\n  background: lightgrey;\n  margin-top: 15px;\n  margin-left: 10px;\n  margin-right:8px;\n  overflow: no-display;\n  padding-left: 13px;\n  padding-right: 10px;\n  padding-top: 5px;\n  padding-bottom: 2px;\n}\n\n.example-card-1{\n  float:left;\n  width:23%;\n  display: block;\n  background: #7272fd;\n  margin-top: 15px;\n  margin-left: 10px;\n  margin-right:8px;\n  padding-left: 10px;\n  padding-right: 10px;\n  padding-top: 5px;\n  padding-bottom: 2px;\n  overflow: no-display;\n}\n\n.example-card-2{\n  float:left;\n  width:23%;\n  display: block;\n  background: #FA8072;\n  margin-top: 15px;\n  margin-left: 10px;\n  margin-right:8px;\n  overflow: no-display;\n  padding-left: 10px;\n  padding-right: 10px;\n  padding-top: 5px;\n  padding-bottom: 2px;\n}\n\n.mat-select{\n  background: #A9B7C0;\n  height: 30px;\n  padding: 2px;\n  width:100%;\n  font-size: large;\n  font-weight: normal;\n  margin:2px;\n}\n\n.mat-card-title {\n  margin-bottom: 5px;\n}\n\n.aus_text{\n  width:95%;\n  background: none;\n  border:none;\n  padding:0;\n}\n\ntextarea{\n  background: #C7D8C6;\n  width: 100%;\n  /*padding: 2px;*/\n  /*margin:0;*/\n}\n\n.aug_note{\n  font-size: medium;\n  color:  #FA8072;\n}\n"

/***/ }),

/***/ "./src/app/modell-design/modell-design.component.html":
/*!************************************************************!*\
  !*** ./src/app/modell-design/modell-design.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n<div> current Priority {{ClickedSelectedModel.priority}} Ist: {{ClickedSelectedModel.ist_id}} Ziel: {{ClickedSelectedModel.ziel_id}}</div>\n\n  <div class=\"labs\">\n    <!--<a mat-icon-button id=\"close-icon\" (click)=\"closeBlock()\"><mat-icon> clear </mat-icon></a>-->\n    <a mat-icon-button id=\"close-icon\" (click)=\"closeBlock()\"><img src=\"assets/images/saveback.png\" width=\"50\" height=\"50\"></a>\n    <label id=\"R\"> Relevant</label>\n    <input type=\"text\" [(ngModel)]=\"ClickedModell.Kriterium\">\n    <label >  Priorität</label>\n    <input matInput type=\"number\" placeholder=\"1\" min=\"1\" max=\"42\" [(ngModel)]=\"ClickedSelectedModel.priority\"/>\n    <!--<a mat-icon-button id=\"help-icon\"><mat-icon> help </mat-icon></a>-->\n    <button mat-button id=\"help-icon\"\n            matTooltip=\"Help information about the Kriterium\"\n            aria-label=\"Button that displays a tooltip when focused or hovered over\">\n      <mat-icon> help </mat-icon>\n    </button>\n  </div>\n\n  <mat-card class=\"modell-card\">\n    <mat-card-content>\n      <p id=\"model-text\">{{ClickedModell.Beschreibung}}</p>\n      <!--<a mat-icon-button class=\"small\"><mat-icon> info </mat-icon></a>-->\n      <button mat-button id=\"info\"\n              matTooltip=\"More info about this\"\n              aria-label=\"Button that displays a tooltip when focused or hovered over\">\n        <mat-icon> info </mat-icon>\n      </button>\n\n      <textarea class=\"aug_note\" matInput placeholder=\"Notiz \" [(ngModel)]=\"ClickedSelectedModel.Kriterium_note\"> </textarea>\n    </mat-card-content>\n  </mat-card>\n\n\n  <div class=\"aug-cards\">\n  <!--<mat-card  *ngFor=\" let au of auspraegung; index as ind\" class=\"example-card-{{ind % 8}}\">-->\n    <mat-card class=\"example-card-0\" [ngStyle]=\"{'background': getBColor(niz[ind])}\" *ngFor=\" let au of auspraegung; index as ind\" >\n    <mat-card-header>\n      <mat-card-title><h3> Ausprägung {{ind}}</h3></mat-card-title>\n    </mat-card-header>\n    <mat-card-content>\n        <textarea class=\"aus_text\"  rows=\"6\" disabled> {{au}} </textarea>\n      <mat-form-field style=\" margin-bottom: -1.25em\" >\n        <!--<mat-select [ngClass]=\"colorClass\"  placeholder=\"\" [value]=\"selectedOption\"-->\n                    <!--#device (change)=\"onChange($event, device.value, ind)\">-->\n\n\n          <!--<mat-select  [ngClass]=\"{'example-card-0': value == '0', 'example-card-1': value == '1', 'example-card-2': value =='2'}\"-->\n                       <!--placeholder=\"\" [value]=\"selectedOption\"-->\n                       <!--#device (change)=\"onChange($event, device.value, ind)\">-->\n\n        <mat-select [value]=\"niz[ind]\"  #device (change)=\"onChange($event, device.value, ind)\">\n\n            <!--<mat-select  [formControl]=\"panelColor\" panelClass=\"example-card-{{panelColor.value}}}\"-->\n                         <!--placeholder=\"\" [value]=\"selectedOption\"-->\n                         <!--#device (change)=\"onChange($event, device.value, ind)\">-->\n          <mat-option value=\"0\">Keine</mat-option>\n          <mat-option value=\"1\">Ist</mat-option>\n          <mat-option value=\"2\">Ziel</mat-option>\n        </mat-select>\n\n\n        <!--<select [ngModel]=\"selected\" (ngModelChange)=\"onChange($event.target.value, ind)\" name=\"sel2\">-->\n          <!--<option [value]=\"selected\" *ngFor=\"let i of iz_selects\">{{i}}</option>-->\n        <!--</select>-->\n\n        <!--<div ng-init=\"students=['None', 'Ist', 'Ziel']\">-->\n          <!--Students: <select ngModel=\"student\"-->\n                            <!--ngOptions=\"student as student for student in students\"-->\n                            <!--ngChange=\"changedValue(ind,student)\"></select>-->\n          <!--<pre>Student: {{student}}</pre>-->\n        <!--</div>-->\n\n      </mat-form-field>\n      <mat-form-field  style=\" margin-bottom: -1.25em\">\n           <textarea class=\"aug_note\" matInput placeholder=\"Notiz\"  matTextareaAutosize matAutosizeMinRows=\"8\" matAutosizeMaxRows=\"15\" [(ngModel)]=\"ClickedSelectedModel.Auspraegung_note[ind]\"></textarea>\n      </mat-form-field>\n    </mat-card-content>\n  </mat-card>\n  </div>\n</div>\n\n\n\n\n\n\n\n\n\n\n"

/***/ }),

/***/ "./src/app/modell-design/modell-design.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/modell-design/modell-design.component.ts ***!
  \**********************************************************/
/*! exports provided: ModellDesignComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModellDesignComponent", function() { return ModellDesignComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _modell__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modell */ "./src/app/modell.ts");
/* harmony import */ var _selectedModel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../selectedModel */ "./src/app/selectedModel.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/esm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ModellDesignComponent = (function () {
    function ModellDesignComponent() {
        this.childEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.selectedOption = 1;
        // data from Modell_1
        // auspraegung = ['Keine Konnektivität gegeben, d.h., es stehen keine Schnittstellen für die digitale Datenkommunikation zur Verfügung.',
        //   'Es existieren lediglich Schnittstellen, die den manuellen Transfer von digitalen Daten vor Ort mittels physischer Speichermedien ermöglichen. Es gibt keinen permanenten Kommunikationskanal.',
        //   'Die Maschinen bzw. Anlagen verfügen über einfache I/O-Schnittstellen (z.B. Klemmen einer SPS) über welche nur binaere oder analoge Signale ausgetauscht werden.',
        //   'Die Maschinen und Anlagen sind mittels Punkt-zu-Punkt-Kommunikationssystemen (z.B. IO-Link, HART) bzw. Low-Level-Feldbussen (z.B. AS-Interface) angebunden.',
        //   'Mit den Maschinen und Anlagen kann über (High-Level-)Feldbusse kommuniziert werden (z.B. Profi-Bus, CANOpen, CC-Link, Foundation Fieldbus).',
        //   'Die Maschinen und Anlagen sind an ein lokales IP-basiertes Netzwerk angeschlossen. Dies kann kabelgebunden oder drahtlos erfolgen (z.B. Industrial Ethernet, WLAN). Die Maschinen und Anlagen sind nicht (unmittelbar) mit dem Internet verbunden.',
        //   'Die Maschinen bzw. Anlagen sind kabelgebunden (z.B. Ethernet) oder drahtlos (z.B. WLAN, Mobilfunk) an das Internet angeschlossen und  können über dieses aktiv mit anderen Systemen kommunizieren (Internet of Things).',
        //   'null'];
        this.auspraegung = new Array();
        this.niz = new Array(8);
        this.iz_selects = ['None', 'Ist', 'Ziel'];
        // selected = this.iz_selects[0];;
        this.selected = '0';
        this.panelColor = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('0');
        this.colorClass = [
            // 'example-card-0': this.selected === 'None',
            // 'example-card-1': this.selected === 'Ist',
            // 'example-card-2': this.selected === 'Ziel'
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
        this.value_p = this.ClickedSelectedModel.priority;
        this.knote = this.ClickedModell.Kriterium_note;
        for (var i = 0; i < this.niz.length; i++) {
            this.niz[i] = '0';
            if (i === +this.ClickedSelectedModel.ziel_id) {
                this.niz[i] = '2';
            }
            if (i === +this.ClickedSelectedModel.ist_id) {
                this.niz[i] = '1';
            }
        }
        for (var _i = 0, _a = this.niz; _i < _a.length; _i++) {
            var s = _a[_i];
            console.log('... ', s);
        }
    };
    ModellDesignComponent.prototype.getBColor = function (nizValue) {
        switch (nizValue) {
            case '0':
                return 'lightgrey';
            case '1':
                return '#7272fd';
            case '2':
                return '#FA8072';
        }
    };
    ModellDesignComponent.prototype.getValue = function (aug_index) {
        if (this.ClickedSelectedModel.ziel_id !== 'N' && aug_index === this.ClickedSelectedModel.ziel_id) {
            console.log('... ang_index is ', aug_index, '... ziel id: ', this.ClickedSelectedModel.ziel_id);
            this.selectedOption = 2;
        }
        if (this.ClickedSelectedModel.ist_id !== 'N' && aug_index === this.ClickedSelectedModel.ist_id) {
            console.log('... ang_index is ', aug_index, '... ist id: ', this.ClickedSelectedModel.ist_id);
            this.selectedOption = 1;
        }
    };
    ModellDesignComponent.prototype.onChange = function (event, optionValue, cIndex) {
        console.log('... hey option is', this.iz_selects[optionValue], cIndex);
        if (optionValue === '1') {
            this.value_s = cIndex;
            this.ClickedSelectedModel.ist_id = cIndex;
            this.selected = '1';
            this.niz[cIndex] = '1';
        }
        if (optionValue === '2') {
            this.value_z = cIndex;
            this.ClickedSelectedModel.ziel_id = cIndex;
            this.selected = '2';
            this.niz[cIndex] = '2';
        }
        console.log('... currently, priority:', this.ClickedSelectedModel.priority, ' ist_id : ', this.ClickedSelectedModel.ist_id, ' ziel_id : ', this.ClickedSelectedModel.ziel_id);
    };
    ModellDesignComponent.prototype.closeBlock = function () {
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
        __metadata("design:paramtypes", [])
    ], ModellDesignComponent);
    return ModellDesignComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var rxjs_BehaviorSubject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/BehaviorSubject */ "./node_modules/rxjs/_esm5/BehaviorSubject.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs/_esm5/add/operator/map.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ModellService = (function () {
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
/*! exports provided: Modell */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Modell", function() { return Modell; });
// export class Modell {
//   _id: string;
//   Kriterium: string;
//   Beschreibung:  string;
//   Auspraegung_0: string;
//   Auspraegung_1: string;
//   Auspraegung_2: string;
//   Auspraegung_3: string;
//   Auspraegung_4: string;
//   Auspraegung_5: string;
//   Auspraegung_6: string;
//   Auspraegung_7: string;
//   ggf_weitere_Auspraegungn: string;
//   TOP_Zuordnung: string;
//   Zustaendige_Partner: string;
//   Hinweise_Anmerkungen: string;
//   Produktionsplanung_langfristig: string;
//   Produktionssteuerung_kurzfristig: string;
//   Produktion_Fertigung_Montage: string;
//   Personal: string;
//   IT: string;
//   Logistik: string;
// }
var Modell = (function () {
    function Modell() {
    }
    return Modell;
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

var NewUser = { id: Object(uuid__WEBPACK_IMPORTED_MODULE_0__["v4"])(), name: ' ', mission: '', vision: '', strategy: '' };


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
var SelectedModel = (function () {
    function SelectedModel() {
        this.kriterium_id = '0';
        this.isselected = false;
        this.isEvaluated = false;
        this.ist_id = 'N';
        this.ziel_id = 'N';
        this.priority = 0;
        this.Kosten = '3,000';
        this.Massnahmen = ' ';
        this.Erklaerung = '  ';
        this.Verantwortlich = ' ';
        this.Termin = new Date(2018, 0, 1);
        this.Auspraegung_note = new Array(3);
    }
    return SelectedModel;
}());



/***/ }),

/***/ "./src/app/start/start.component.css":
/*!*******************************************!*\
  !*** ./src/app/start/start.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".containerStart {\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-columns: 50% auto;\n      grid-template-columns: 50% auto;\n}\n.col {\n  padding: .4em 1.3em;\n}\n.titleTable{\n  width: 100%;\n  height: 60px;\n  margin-top: 70px;\n  margin-bottom: 0px;\n  background-color: #A9B7C0;\n}\n.td2{\n  float:left;\n  width:240px;\n  height: 30px;\n  text-align: left;\n  margin-top:10px;\n  margin-right: 45px;\n  margin-left: 10px;\n  font-size: 150%;\n}\n.td1{\n  float:left;\n  width: 40%;\n  margin-top: 5px;\n}\n.textlink {\n  background-color: #A9B7C0;\n  /*font-family: \"Times New Roman\", Times, serif;*/\n  font-size: 150%;\n  width: 100%;\n  padding:auto;\n  margin-bottom: 0px;\n  margin-top: -60px;\n  box-sizing: border-box;\n  border: 0;\n  text-align: left;\n}\na {\n  color: #0067a2;\n}\n.textarea.ng-invalid {\n  /*background-color: rgba(211,211,211, 0.8);*/\n  background-color: #A9B7C0;\n  /*font-family: \"Times New Roman\", Times, serif;*/\n  font-size: 150%;\n  padding:auto;\n  margin-bottom: 5px;\n  margin-top: -15px;\n  box-sizing: border-box;\n  width: 100%;\n  height: 450px;\n  border: 0;\n  text-align: left;\n}\n.textarea.ng-invalid-2 {\n  /*background-color: rgba(211,211,211, 0.8);*/\n  background-color: #A9B7C0;\n  /*font-family: \"Times New Roman\", Times, serif;*/\n  font-size: 150%;\n  padding:auto;\n  margin-bottom: 20px;\n  margin-top: 18px;\n  box-sizing: border-box;\n  width: 100%;\n  height: 315px;\n  border: 0;\n  text-align: left;\n}\n.input-group {\n  margin-bottom: 15px;\n  box-sizing: border-box;\n  width: 100%;\n  height: 156px;\n  border: 0;\n  margin-top: 20px;\n}\n.input-group-text {\n  background-color: #A9B7C0;\n  font-size: small;\n  font-weight: normal;\n  font-style: italic;\n}\n.form-control {\n font-size: 12pt;\n background-color: #E2E6E9;\n}\n.textarea.ng-valid {\n  background-color: #EFD9C1;\n  font-size: 150%;\n  font-style: italic;\n  margin-bottom: 2px;\n  box-sizing: border-box;\n  width: 100%;\n  height:150px;\n  border: 0;\n  margin-top: 50px;\n}\n.textarea.ng-valid-2 {\n  background-color: #EFD9C1;\n  font-size: 150%;\n  font-style: italic;\n  margin-bottom: 2px;\n  box-sizing: border-box;\n  width: 100%;\n  height: 150px;\n  border: 0;\n  margin-top: 2px;\n}\ninput.btn {\n  border: 0;\n  display:block;\n  padding:1em 3em;\n  background:brown;\n  color:white;\n  margin-bottom:1em;\n  cursor:pointer;\n}\n.video {\n  box-sizing: border-box;\n  width: 100%;\n  height: 450px;\n  margin-top: 20px;\n}\n.uuidLable {\n  margin-top: 30px;\n  height: 20px;\n  text-align: right;\n  font-size: small;\n}\n\n"

/***/ }),

/***/ "./src/app/start/start.component.html":
/*!********************************************!*\
  !*** ./src/app/start/start.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"containerStart\">\n  <div class=\"col\">\n    <div class=\"titleTable\">\n        <!--<div  class=\"td2\"> <a href=\"http://www.adaption-projekt.de/\"><h1>Projekt ADAPTION</h1></a></div>-->\n      <div  class=\"td2\"> <h1>Projekt ADAPTION</h1></div>\n        <div class=\"td1\"> <img src=\"assets/images/adaption.png\" width=55% height=35%> </div>\n    </div>\n    <div>\n    <br><textarea disabled class =\"textarea ng-invalid\"   name=\"item\" rows=\"30\"  cols=\"50\" placeholder=\"Ziel des Forschungsprojektes ADAPTION ist es, KMU und Unternehmen bei der Migration zum Cyber-physischen System für Produktion und Fertigung zu unterstützen. Gefördert vom BMBF wird ein reifegradbasiertes Vorgehensmodell hierzu entwickelt, das die Ableitung eines individuellen Migrationspfades unter Beachtung von Wirtschaftlichkeitsgesichtspunkten ermöglicht. Der optimale Zielreifegrad wird individuell nach Nutzen und Wirtschaftlichkeit für jedes Unternehmen festgelegt. Das Vorgehensmodell verfolgt einen Ansatz, der die drei betrieblichen Gestaltungsdimensionen Technik, Organisation und Personal berücksichtigt.\n&#10;Die Aufgabe des Educational Technology Lab in ADAPTION besteht in der Formalisierung und software-technischen Umsetzung eines Reifegrad- und Vorgehensmodell bei der Migration zum Cyber-physischen Produktionssystem. Weiterhin in der Erweiterung eines existierenden Assistenzsystems um digitale Lernszenarien, die für Cyber-physische Produktionssysteme relevant sind. Die Migration wird bei Anwendungspartnern verschiedener Größe (Konzern, KMU) unter realen Bedingungen untersucht, gewonnene Erkenntnisse werden in das allgemeine Vorgehensmodell überführt.\"></textarea>\n      <div class=\"textlink\"><a target=\"_blank\" href=\"http://www.adaption-projekt.de/\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[Mehr Info]</a></div><br>\n\n    </div>\n    <br><textarea disabled class =\"textarea ng-invalid-2\" type=\"textarea\"  name=\"item\" placeholder=\"&#10; ADAPTION Tool (ADAPTION) entwickelt ein Selbstbewertungstool für ein Industrie 4.0-Audit, um den vorliegenden Reifegrad zu ermitteln und auf dieser Grundlage den unter wirtschaftlichen Gesichtspunkten optimalen Reifegrad festzulegen. Das Ziel ist die Unterstützung dieses Prozesses:\n          1. Strategische Ausrichtung\n          2. Industrie 4.0 Audit\n          3. Zielstellung\n          4. Maßnahmen-planung\n          5. Evaluation) \" ></textarea><br>\n\n  </div>\n\n  <div class=\"col\">\n\n    <div class=\"uuidLable\"> Welcome! &nbsp; Your User_ID is: <b>{{cUser.id}}</b></div>\n    <!--<br><textarea class =\"textarea ng-valid-2\" name=\"item\"-->\n                  <!--placeholder=\"Was ist Ihre Vision?\"  [(ngModel)]=\"cUser.vision\"  ></textarea><br>-->\n    <!--<br><textarea class =\"textarea ng-valid-2\"  name=\"item\"-->\n                  <!--placeholder=\"Was ist Ihre Mission?\"  [(ngModel)]=\"cUser.mission\"  ></textarea><br>-->\n\n    <!--<br><textarea class =\"textarea ng-valid-2\"  name=\"item\"-->\n                  <!--placeholder=\"Was sind Ihre Strategische Ziele? (z.B. für 6 Monate) \" [(ngModel)]=\"cUser.strategy\" ></textarea><br>-->\n\n    <div class=\"input-group\">\n      <div class=\"input-group-prepend\">\n        <span class=\"input-group-text\">Vision: &nbsp; </span>\n      </div>\n      <textarea class=\"form-control\" aria-label=\"Vision:  \" placeholder=\"Was ist Ihre Vision?\"  [(ngModel)]=\"cUser.vision\" ></textarea>\n    </div>\n    <div class=\"input-group\">\n      <div class=\"input-group-prepend\">\n        <span class=\"input-group-text\" >Mission: </span>\n      </div>\n      <textarea class=\"form-control\" aria-label=\"Mission:\"  placeholder=\"Was ist Ihre Mission?\"  [(ngModel)]=\"cUser.mission\"  ></textarea>\n    </div>\n    <div class=\"input-group\">\n      <div class=\"input-group-prepend\">\n        <span class=\"input-group-text\">Ziel:  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>\n      </div>\n      <textarea class=\"form-control\" aria-label=\"Ziel:  \"  placeholder=\"Was sind Ihre Strategische Ziele? (z.B. für 6 Monate) \" [(ngModel)]=\"cUser.strategy\" ></textarea>\n    </div>\n\n    <div class=\"video\">\n      <iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/kQLbVVPNTMQ\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe>\n    </div>\n\n  </div>\n\n  <!--<div> current User vision: {{cUser.vision}} </div>-->\n  <!--<div> current User mission : {{cUser.mission}} </div>-->\n  <!--<div> current User mission : {{cUser.strategy}} </div>-->\n</div>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var StartComponent = (function () {
    function StartComponent(sanitizer, _userService) {
        this.sanitizer = sanitizer;
        this._userService = _userService;
        this.vision = 'Was ist Ihre Vision?';
        this.mission = 'Was ist Ihre Mission?';
        this.strategy = 'Was sind Ihre Strategische Ziele? (z.B. für 6 Monate) ';
    }
    StartComponent.prototype.ngOnInit = function () {
        this.getNewUser();
        this._userService.changeUser(this.cUser);
    };
    StartComponent.prototype.getNewUser = function () {
        var _this = this;
        this._userService.getUser()
            .subscribe(function (res) { return _this.cUser = res; });
    };
    StartComponent.prototype.getVideoURL = function () {
        return this.sanitizer.bypassSecurityTrustHtml('https://www.youtube.com/embed/kQLbVVPNTMQ');
    };
    StartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-start',
            template: __webpack_require__(/*! ./start.component.html */ "./src/app/start/start.component.html"),
            styles: [__webpack_require__(/*! ./start.component.css */ "./src/app/start/start.component.css")],
            providers: [_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]]
        }),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"], _user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var rxjs_BehaviorSubject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/BehaviorSubject */ "./node_modules/rxjs/_esm5/BehaviorSubject.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/Rx.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_2__);
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




var UserService = (function () {
    function UserService() {
        this.user = new rxjs_BehaviorSubject__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this.currentUser = this.user.asObservable();
    }
    UserService.prototype.changeUser = function (currentUser) {
        this.user.next(currentUser);
    };
    UserService.prototype.getUser = function () {
        return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].of(_newuser__WEBPACK_IMPORTED_MODULE_3__["NewUser"]);
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

module.exports = ".myform{\n  width:100%;\n  float:left;\n  padding: 0;\n}\n\n/*#label1{*/\n\n/*background: #EFD9C1;*/\n\n/*width: 100%;*/\n\n/*margin-bottom: 10px;*/\n\n/*margin-top: 30px;*/\n\n/*font: normal 20px courier !important;*/\n\n/*padding:10px;*/\n\n/*}*/\n\n#three-labels{\n  float: right;\n  width: 35%;\n  margin-bottom: 20px;\n  margin-top: 15px;\n  margin-right: 80px;\n}\n\n#three-labels label{\n  display: -ms-inline-grid;\n  display: inline-grid;\n  float:right;\n  background-color: #C7D8C6;\n  margin-left: 20px;\n  margin-right: 30px;\n  width: 80px;\n  text-align: center;\n  font-weight: bolder;\n  font-size: medium;\n  padding: 3px;\n}\n\n.form-group label{\n  float: left;\n  width: 60%;\n  background-color:#A9B7C0;\n  color:#333;\n  font-weight: bold;\n  font-size: medium;\n  padding:5px;\n  border:none;\n  margin-bottom: 10px;\n  margin-top: 10px;\n  display: -ms-inline-grid;\n  display: inline-grid;\n}\n\n.input-group button{\n  float: left;\n  width: 60%;\n  background-color:#A9B7C0;\n  color:#333;\n  padding:5px;\n  border:none;\n  margin-bottom: 10px;\n  margin-top: 10px;\n  display: -ms-inline-grid;\n  display: inline-grid;\n  font-size: medium;\n  font-weight: bold;\n  text-align: left;\n  cursor: zoom-in;\n}\n\n.numberCircle {\n  display: block;\n  margin-right: 52px;\n  margin-top: 12px;\n  margin-left: 35px;\n  background: #EFD9C1;\n  border-radius: 100%;\n  width: 36px;\n  height: 36px;\n  padding: 3px;\n  border: 2px solid #EFD9C1;\n  color: #808080;\n  text-align: center;\n  font: 24px Arial, sans-serif;\n}\n"

/***/ }),

/***/ "./src/app/zustaende/zustaende.component.html":
/*!****************************************************!*\
  !*** ./src/app/zustaende/zustaende.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Zustaede as the parentComponet and Modell-design as the child component-->\n\n<div *ngIf = \"displayThenBlock; then thenBlock  else elseBlock\"></div>\n\n<ng-template #thenBlock>\n  <!-- for testing\n  <h2>  this is then block</h2>\n  <button (click)= hideThenBlock()> hide </button>-->\n\n\n  <div id=\"label1\">\n    <label> Was sind die Ist-, Ziel-Zustände und Prioritäten für dir aus gewählten Kriterien? </label>\n  </div>\n\n    <div id=\"three-labels\">\n      <label> Priorität </label>\n      <label> Ziel </label>\n      <label> Ist </label>\n    </div>\n\n\n  <!--<div *ngFor=\"let cmodle of allmodels; let m = index;\" >-->\n    <!--&lt;!&ndash;<div class =\"input-group\" *ngIf=\"checkedArray.indexOf(cmodle._id) >-1 && checkedModells[m]\">&ndash;&gt;-->\n    <!--<div class =\"input-group\" *ngIf=\"isChecked(cmodle._id)\">-->\n    <!--<button type=\"text\" (click)=openEditor(cmodle)> {{cmodle._id}}. {{cmodle.Kriterium}} </button>-->\n    <!--<div class=\"numberCircle\">{{int_ist}}</div>-->\n    <!--<div class=\"numberCircle\">{{int_ziet}}</div>-->\n    <!--<div class=\"numberCircle\">{{int_priorty}}</div>-->\n    <!--</div>-->\n  <!--</div>-->\n\n\n  <div *ngFor=\"let cmodle of checkedModells; let m = index;\" >\n    <!--<div class =\"input-group\" *ngIf=\"checkedArray.indexOf(cmodle._id) >-1 && checkedModells[m]\">-->\n    <div class =\"input-group\">\n      <button type=\"text\" (click)=openEditor(cmodle)> {{cmodle.kriterium_id}}. {{cmodle.kriterium}} </button>\n      <div class=\"numberCircle\">{{cmodle.ist_id}}</div>\n      <div class=\"numberCircle\">{{cmodle.ziel_id}}</div>\n      <div class=\"numberCircle\">{{cmodle.priority}}</div>\n    </div>\n  </div>\n\n\n\n\n  <!--<div *ngFor=\"let cmodle of allmodels\" >-->\n      <!--<button type=\"text\" > {{cmodle._id}}. {{cmodle.Kriterium}} ... plus {{cmodle.isSelected()}}</button>-->\n  <!--</div>-->\n\n\n</ng-template>\n\n\n<ng-template #elseBlock>\n  <!--<h2>  this is else block</h2>-->\n  <!--<button (click)= showThenBlock()> show</button>-->\n\n  <app-modell-design (childEvent)=\"receiveChanage($event)\" [parentSwitch]=\"displayThenBlock\" [ClickedSelectedModel]=\"csMod\" [ClickedModell] =\"cMod\"> </app-modell-design>\n\n</ng-template>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
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



var ZustaendeComponent = (function () {
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
    };
    ZustaendeComponent.prototype.receiveChanage = function ($event) {
        this.displayThenBlock = $event;
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
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

module.exports = __webpack_require__(/*! /Users/xiwa03/Applications/WebAppDeve/test/MockUp/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map