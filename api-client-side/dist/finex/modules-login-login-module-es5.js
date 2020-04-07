function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-login-login-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/login/login.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/login/login.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesLoginLoginComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\n    <div class=\"row\">\n\n\n        <div class=\"col-xl-5 offset-xl-3\">\n\n\n            <div class=\"login-register-page\">\n\n\n                <!-- Welcome Text -->\n                <div class=\"welcome-text\">\n                    <h3></h3>\n                    <span></span>\n                </div>\n\n                <!-- Form -->\n                <form (ngSubmit)=\"login()\" [formGroup]=\"fGroup\" id=\"login-form\">\n                    <fieldset>\n                        <div class=\"input-with-icon-left\">\n                            <i class=\"icon-material-baseline-mail-outline\"></i>\n                            <input class=\"input-text with-border\" formControlName=\"email\" placeholder=\"E-mail\"\n                                   type=\"email\">\n                        </div>\n                        <div *ngIf=\"fGroup.controls['email'].invalid && (fGroup.controls['email'].dirty || fGroup.controls['email'].touched)\">\n                            <div *ngIf=\"fGroup.controls['email'].errors.required\">\n                                <p class=\"text-danger\">Entrez votre Email ou votre Pseudo</p>\n                            </div>\n                        </div>\n                        <div class=\"input-with-icon-left\">\n                            <i class=\"icon-material-outline-lock\"></i>\n                            <input class=\"input-text with-border\" formControlName=\"password\" placeholder=\"Password\"\n                                   type=\"password\">\n                        </div>\n                        <div *ngIf=\"fGroup.controls['password'].invalid && (fGroup.controls['password'].dirty || fGroup.controls['password'].touched)\">\n                            <div *ngIf=\"fGroup.controls['password'].errors.required\">\n                                <p class=\"text-danger\">Entrez votre mot de pass</p>\n\n                            </div>\n                        </div>\n\n                        <div class=\"checkbox\">\n                            <label>\n                                <input name=\"remember\" type=\"checkbox\" value=\"Remember Me\">Remember Me\n                            </label>\n                        </div>\n\n                        <div class=\"col-xs-12\">\n                            <div *ngIf=\"!fGroup.invalid\" class=\"comment-btn\">\n                                <button class=\"button full-width button-sliding-icon ripple-effect margin-top-10\" href=\"#\"\n                                        type=\"submit\">\n                                    Connection\n                                </button>\n                            </div>\n                        </div>\n\n                    </fieldset>\n                </form>\n\n\n            </div>\n\n        </div>\n    </div>\n</div>\n\n\n";
    /***/
  },

  /***/
  "./src/app/modules/login/login.component.css":
  /*!***************************************************!*\
    !*** ./src/app/modules/login/login.component.css ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesLoginLoginComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/modules/login/login.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/modules/login/login.component.ts ***!
    \**************************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppModulesLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/auth.service */
    "./src/app/services/auth.service.ts");

    var LoginComponent =
    /*#__PURE__*/
    function () {
      function LoginComponent(route, router, authenticationService, fb) {
        _classCallCheck(this, LoginComponent);

        this.route = route;
        this.router = router;
        this.authenticationService = authenticationService;
        this.fb = fb;
        this.initForm();
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.returnUrl = this.route.snapshot.queryParams.returnUrl || '/';

          if (this.authenticationService.sessionExists()) {
            this.router.navigateByUrl('dashboard');
          }
        }
      }, {
        key: "initForm",
        value: function initForm() {
          this.fGroup = this.fb.group({
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
          });
        }
      }, {
        key: "login",
        value: function login() {
          this.authenticationService.getLogin(this.fGroup.value.email, this.fGroup.value.password);
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }];
    };

    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-login',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./login.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/login/login.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./login.component.css */
      "./src/app/modules/login/login.component.css")).default]
    })], LoginComponent);
    /***/
  },

  /***/
  "./src/app/modules/login/login.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/modules/login/login.module.ts ***!
    \***********************************************/

  /*! exports provided: routes, LoginModule */

  /***/
  function srcAppModulesLoginLoginModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "routes", function () {
      return routes;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginModule", function () {
      return LoginModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./login.component */
    "./src/app/modules/login/login.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var routes = [{
      path: '',
      component: _login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
    }];

    var LoginModule = function LoginModule() {
      _classCallCheck(this, LoginModule);
    };

    LoginModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]]
    })], LoginModule);
    /***/
  }
}]);
//# sourceMappingURL=modules-login-login-module-es5.js.map