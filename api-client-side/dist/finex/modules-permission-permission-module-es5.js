function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-permission-permission-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/permission/permission-create/permission-create.component.html":
  /*!*****************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/permission/permission-create/permission-create.component.html ***!
    \*****************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesPermissionPermissionCreatePermissionCreateComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>permission-create works!</p>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/permission/permission-detail/permission-detail.component.html":
  /*!*****************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/permission/permission-detail/permission-detail.component.html ***!
    \*****************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesPermissionPermissionDetailPermissionDetailComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div id=\"\">\n\n    <div class=\"headline\">\n        <h2># {{ projet.id}} : Detail du projet {{ projet.nom }}  <a class=\"button pull-right\"\n                                                                     routerLink='/projets/list'><i\n                class=\"fa fa-list\"></i> List </a></h2>\n    </div>\n\n    <div>\n        <div>\n            <table class=\"col-md-12\">\n                <tbody>\n                <tr>\n                    <td>\n                        <div class=\"col-md-12\">\n                            <div class=\"row\">\n                                <div class=\"col-md-8\">\n                                    <p>Nom du Projet : </p>\n                                </div>\n\n                                <div class=\"col-md-4\">\n                                    <strong>{{ projet.nom }}</strong>\n                                </div>\n                            </div>\n                        </div>\n                    </td>\n                </tr>\n\n\n                </tbody>\n            </table>\n            <div>\n                <div class=\"form-title form-title-1\">\n                    <h2>Objet du Projet</h2>\n                </div>\n                <div class=\" scroll\">\n                    <p>\n                        {{projet.description}}\n                    </p>\n                </div>\n\n            </div>\n        </div>\n    </div>\n</div>\n\n<router-outlet></router-outlet>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/permission/permission-list/permission-list.component.html":
  /*!*************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/permission/permission-list/permission-list.component.html ***!
    \*************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesPermissionPermissionListPermissionListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"col-lg-12 col-md-12 col-xs-12\">\n    <div class=\"dashboard-list-box\">\n        <h4 class=\"gray\"><i class=\"fa fa-list\"></i> Liste <a class=\"button pull-right\"\n                                                             routerLink='/partenaire/create'><i class=\"fa fa-plus\"></i>\n            Permissions </a></h4>\n        <div class=\"table-box\">\n            <table class=\"basic-table booking-table\">\n                <thead>\n                <tr>\n                    <th>#</th>\n                    <th>Nom</th>\n                    <th>Type Partenaire</th>\n                    <th>Date de Creation</th>\n                    <th>Action</th>\n                </tr>\n                </thead>\n                <tbody>\n\n                </tbody>\n            </table>\n\n        </div>\n    </div>\n    <div class=\"pagination-container\">\n        <nav class=\"pagination\">\n            <ul>\n                <li><a class=\"current-page\" href=\"#\">1</a></li>\n                <li><a href=\"#\">2</a></li>\n                <li><a href=\"#\"><i class=\"sl sl-icon-arrow-right\"></i></a></li>\n            </ul>\n        </nav>\n    </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/permission/permission-update/permission-update.component.html":
  /*!*****************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/permission/permission-update/permission-update.component.html ***!
    \*****************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesPermissionPermissionUpdatePermissionUpdateComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>permission-update works!</p>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/permission/permission.component.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/permission/permission.component.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesPermissionPermissionComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"dashboard-headline\">\n    <h3>Permissions</h3>\n\n    <!-- Breadcrumbs -->\n    <nav class=\"dark\" id=\"breadcrumbs\">\n        <ul>\n            <li><a [routerLink]=\"['/dashboard']\" routerLinkActive=\"router-link-active\">Tableau de bord </a></li>\n            <li>Permissions</li>\n        </ul>\n    </nav>\n</div>\n\n<div class=\"row\">\n\n    <!-- Dashboard Box -->\n    <div class=\"col-xl-12\">\n        <div class=\"dashboard-box margin-top-0\">\n\n            <router-outlet></router-outlet>\n        </div>\n    </div>\n</div>\n";
    /***/
  },

  /***/
  "./src/app/modules/permission/permission-create/permission-create.component.css":
  /*!**************************************************************************************!*\
    !*** ./src/app/modules/permission/permission-create/permission-create.component.css ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesPermissionPermissionCreatePermissionCreateComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcGVybWlzc2lvbi9wZXJtaXNzaW9uLWNyZWF0ZS9wZXJtaXNzaW9uLWNyZWF0ZS5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/modules/permission/permission-create/permission-create.component.ts":
  /*!*************************************************************************************!*\
    !*** ./src/app/modules/permission/permission-create/permission-create.component.ts ***!
    \*************************************************************************************/

  /*! exports provided: PermissionCreateComponent */

  /***/
  function srcAppModulesPermissionPermissionCreatePermissionCreateComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PermissionCreateComponent", function () {
      return PermissionCreateComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var PermissionCreateComponent =
    /*#__PURE__*/
    function () {
      function PermissionCreateComponent() {
        _classCallCheck(this, PermissionCreateComponent);
      }

      _createClass(PermissionCreateComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PermissionCreateComponent;
    }();

    PermissionCreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-permission-create',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./permission-create.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/permission/permission-create/permission-create.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./permission-create.component.css */
      "./src/app/modules/permission/permission-create/permission-create.component.css")).default]
    })], PermissionCreateComponent);
    /***/
  },

  /***/
  "./src/app/modules/permission/permission-detail/permission-detail.component.css":
  /*!**************************************************************************************!*\
    !*** ./src/app/modules/permission/permission-detail/permission-detail.component.css ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesPermissionPermissionDetailPermissionDetailComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcGVybWlzc2lvbi9wZXJtaXNzaW9uLWRldGFpbC9wZXJtaXNzaW9uLWRldGFpbC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/modules/permission/permission-detail/permission-detail.component.ts":
  /*!*************************************************************************************!*\
    !*** ./src/app/modules/permission/permission-detail/permission-detail.component.ts ***!
    \*************************************************************************************/

  /*! exports provided: PermissionDetailComponent */

  /***/
  function srcAppModulesPermissionPermissionDetailPermissionDetailComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PermissionDetailComponent", function () {
      return PermissionDetailComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var PermissionDetailComponent =
    /*#__PURE__*/
    function () {
      function PermissionDetailComponent() {
        _classCallCheck(this, PermissionDetailComponent);
      }

      _createClass(PermissionDetailComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PermissionDetailComponent;
    }();

    PermissionDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-permission-detail',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./permission-detail.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/permission/permission-detail/permission-detail.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./permission-detail.component.css */
      "./src/app/modules/permission/permission-detail/permission-detail.component.css")).default]
    })], PermissionDetailComponent);
    /***/
  },

  /***/
  "./src/app/modules/permission/permission-list/permission-list.component.css":
  /*!**********************************************************************************!*\
    !*** ./src/app/modules/permission/permission-list/permission-list.component.css ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesPermissionPermissionListPermissionListComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcGVybWlzc2lvbi9wZXJtaXNzaW9uLWxpc3QvcGVybWlzc2lvbi1saXN0LmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/modules/permission/permission-list/permission-list.component.ts":
  /*!*********************************************************************************!*\
    !*** ./src/app/modules/permission/permission-list/permission-list.component.ts ***!
    \*********************************************************************************/

  /*! exports provided: PermissionListComponent */

  /***/
  function srcAppModulesPermissionPermissionListPermissionListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PermissionListComponent", function () {
      return PermissionListComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var PermissionListComponent =
    /*#__PURE__*/
    function () {
      function PermissionListComponent() {
        _classCallCheck(this, PermissionListComponent);
      }

      _createClass(PermissionListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PermissionListComponent;
    }();

    PermissionListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-permission-list',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./permission-list.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/permission/permission-list/permission-list.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./permission-list.component.css */
      "./src/app/modules/permission/permission-list/permission-list.component.css")).default]
    })], PermissionListComponent);
    /***/
  },

  /***/
  "./src/app/modules/permission/permission-update/permission-update.component.css":
  /*!**************************************************************************************!*\
    !*** ./src/app/modules/permission/permission-update/permission-update.component.css ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesPermissionPermissionUpdatePermissionUpdateComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcGVybWlzc2lvbi9wZXJtaXNzaW9uLXVwZGF0ZS9wZXJtaXNzaW9uLXVwZGF0ZS5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/modules/permission/permission-update/permission-update.component.ts":
  /*!*************************************************************************************!*\
    !*** ./src/app/modules/permission/permission-update/permission-update.component.ts ***!
    \*************************************************************************************/

  /*! exports provided: PermissionUpdateComponent */

  /***/
  function srcAppModulesPermissionPermissionUpdatePermissionUpdateComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PermissionUpdateComponent", function () {
      return PermissionUpdateComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var PermissionUpdateComponent =
    /*#__PURE__*/
    function () {
      function PermissionUpdateComponent() {
        _classCallCheck(this, PermissionUpdateComponent);
      }

      _createClass(PermissionUpdateComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PermissionUpdateComponent;
    }();

    PermissionUpdateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-permission-update',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./permission-update.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/permission/permission-update/permission-update.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./permission-update.component.css */
      "./src/app/modules/permission/permission-update/permission-update.component.css")).default]
    })], PermissionUpdateComponent);
    /***/
  },

  /***/
  "./src/app/modules/permission/permission.component.css":
  /*!*************************************************************!*\
    !*** ./src/app/modules/permission/permission.component.css ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesPermissionPermissionComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcGVybWlzc2lvbi9wZXJtaXNzaW9uLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/modules/permission/permission.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/modules/permission/permission.component.ts ***!
    \************************************************************/

  /*! exports provided: PermissionComponent */

  /***/
  function srcAppModulesPermissionPermissionComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PermissionComponent", function () {
      return PermissionComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var PermissionComponent =
    /*#__PURE__*/
    function () {
      function PermissionComponent() {
        _classCallCheck(this, PermissionComponent);
      }

      _createClass(PermissionComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PermissionComponent;
    }();

    PermissionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-permission',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./permission.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/permission/permission.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./permission.component.css */
      "./src/app/modules/permission/permission.component.css")).default]
    })], PermissionComponent);
    /***/
  },

  /***/
  "./src/app/modules/permission/permission.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/modules/permission/permission.module.ts ***!
    \*********************************************************/

  /*! exports provided: PermissionModule */

  /***/
  function srcAppModulesPermissionPermissionModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PermissionModule", function () {
      return PermissionModule;
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


    var _permission_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./permission.component */
    "./src/app/modules/permission/permission.component.ts");
    /* harmony import */


    var _permission_list_permission_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./permission-list/permission-list.component */
    "./src/app/modules/permission/permission-list/permission-list.component.ts");
    /* harmony import */


    var _permission_detail_permission_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./permission-detail/permission-detail.component */
    "./src/app/modules/permission/permission-detail/permission-detail.component.ts");
    /* harmony import */


    var _permission_create_permission_create_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./permission-create/permission-create.component */
    "./src/app/modules/permission/permission-create/permission-create.component.ts");
    /* harmony import */


    var _permission_update_permission_update_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./permission-update/permission-update.component */
    "./src/app/modules/permission/permission-update/permission-update.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _permission_routes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./permission.routes */
    "./src/app/modules/permission/permission.routes.ts");

    var PermissionModule = function PermissionModule() {
      _classCallCheck(this, PermissionModule);
    };

    PermissionModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_permission_component__WEBPACK_IMPORTED_MODULE_3__["PermissionComponent"], _permission_list_permission_list_component__WEBPACK_IMPORTED_MODULE_4__["PermissionListComponent"], _permission_detail_permission_detail_component__WEBPACK_IMPORTED_MODULE_5__["PermissionDetailComponent"], _permission_create_permission_create_component__WEBPACK_IMPORTED_MODULE_6__["PermissionCreateComponent"], _permission_update_permission_update_component__WEBPACK_IMPORTED_MODULE_7__["PermissionUpdateComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"].forChild(_permission_routes__WEBPACK_IMPORTED_MODULE_9__["permissionRoutes"])]
    })], PermissionModule);
    /***/
  },

  /***/
  "./src/app/modules/permission/permission.routes.ts":
  /*!*********************************************************!*\
    !*** ./src/app/modules/permission/permission.routes.ts ***!
    \*********************************************************/

  /*! exports provided: permissionRoutes */

  /***/
  function srcAppModulesPermissionPermissionRoutesTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "permissionRoutes", function () {
      return permissionRoutes;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _permission_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./permission.component */
    "./src/app/modules/permission/permission.component.ts");
    /* harmony import */


    var _permission_list_permission_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./permission-list/permission-list.component */
    "./src/app/modules/permission/permission-list/permission-list.component.ts");
    /* harmony import */


    var _permission_create_permission_create_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./permission-create/permission-create.component */
    "./src/app/modules/permission/permission-create/permission-create.component.ts");
    /* harmony import */


    var _permission_detail_permission_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./permission-detail/permission-detail.component */
    "./src/app/modules/permission/permission-detail/permission-detail.component.ts");
    /* harmony import */


    var src_app_core_auth_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/core/auth-guard */
    "./src/app/core/auth-guard.ts");
    /* harmony import */


    var _permission_update_permission_update_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./permission-update/permission-update.component */
    "./src/app/modules/permission/permission-update/permission-update.component.ts");

    var permissionRoutes = [{
      path: '',
      component: _permission_component__WEBPACK_IMPORTED_MODULE_1__["PermissionComponent"],
      children: [{
        path: 'list',
        component: _permission_list_permission_list_component__WEBPACK_IMPORTED_MODULE_2__["PermissionListComponent"]
      }, {
        path: 'create',
        component: _permission_create_permission_create_component__WEBPACK_IMPORTED_MODULE_3__["PermissionCreateComponent"]
      }, {
        path: 'detail/:slug',
        component: _permission_detail_permission_detail_component__WEBPACK_IMPORTED_MODULE_4__["PermissionDetailComponent"]
      }, {
        path: 'update/:slug',
        component: _permission_update_permission_update_component__WEBPACK_IMPORTED_MODULE_6__["PermissionUpdateComponent"]
      }],
      canActivate: [src_app_core_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]]
    }];
    /***/
  }
}]);
//# sourceMappingURL=modules-permission-permission-module-es5.js.map