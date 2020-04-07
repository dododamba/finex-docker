function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-mes-taches-mes-taches-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/mes-taches/mes-taches-detail/mes-taches-detail.component.html":
  /*!*****************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/mes-taches/mes-taches-detail/mes-taches-detail.component.html ***!
    \*****************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesMesTachesMesTachesDetailMesTachesDetailComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div id=\"\">\n\n    <div class=\"headline\">\n        <h2># {{ projet.id}} : Detail du projet {{ projet.nom }}  <a class=\"button pull-right\"\n                                                                     routerLink='/projets/list'><i\n                class=\"fa fa-list\"></i> List </a></h2>\n    </div>\n\n    <div>\n        <div>\n            <table class=\"col-md-12\">\n                <tbody>\n                <tr>\n                    <td>\n                        <div class=\"col-md-12\">\n                            <div class=\"row\">\n                                <div class=\"col-md-8\">\n                                    <p>Nom du Projet : </p>\n                                </div>\n\n                                <div class=\"col-md-4\">\n                                    <strong>{{ projet.nom }}</strong>\n                                </div>\n                            </div>\n                        </div>\n                    </td>\n                </tr>\n\n\n                </tbody>\n            </table>\n            <div>\n                <div class=\"form-title form-title-1\">\n                    <h2>Objet du Projet</h2>\n                </div>\n                <div class=\" scroll\">\n                    <p>\n                        {{projet.description}}\n                    </p>\n                </div>\n\n            </div>\n        </div>\n    </div>\n</div>\n\n<router-outlet></router-outlet>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/mes-taches/mes-taches-list/mes-taches-list.component.html":
  /*!*************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/mes-taches/mes-taches-list/mes-taches-list.component.html ***!
    \*************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesMesTachesMesTachesListMesTachesListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"col-lg-12 col-md-12 col-xs-12\">\n    <div class=\"dashboard-list-box\">\n        <div class=\"headline\"><i class=\"fa fa-list\"></i> Liste <a class=\"button pull-right\" routerLink='//create'><i\n                class=\"fa fa-plus\"></i> Ajouter </a></div>\n        <div class=\"table-box\">\n            <table class=\"basic-table booking-table\">\n                <thead>\n                <tr>\n                    <th>#</th>\n                    <th>Libéllé</th>\n                    <th>Date de Creation</th>\n                    <th>Date de debut</th>\n                    <th>Date de fin</th>\n                    <th>Priorité</th>\n                    <th>Crée Par</th>\n                    <th>Projet</th>\n                    <th>Action</th>\n                </tr>\n                </thead>\n                <tbody>\n\n                </tbody>\n            </table>\n\n        </div>\n    </div>\n    <div class=\"pagination-container\">\n        <nav class=\"pagination\">\n            <ul>\n\n                <li *ngIf=\"last\"><a (click)=\"previewPage()\"><i class=\"sl sl-icon-arrow-left\"></i></a></li>\n                <li><a>{{ pageNumber + 1}}</a></li>\n                <li *ngIf=\"numberOfElements < totalElements && !last\"><a (click)=\"nextPage()\">{{ pageNumber + 2}}</a>\n                </li>\n                <li *ngIf=\"!last\"><a (click)=\"nextPage()\"><i class=\"sl sl-icon-arrow-right\"></i></a></li>\n            </ul>\n        </nav>\n        <button class=\"button preview pull-left\">{{numberOfElements}}/ {{totalElements}} Financements</button>\n        <button class=\"button  pull-right\">Imprimer</button>\n    </div>\n</div>\n<router-outlet></router-outlet>\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/mes-taches/mes-taches.component.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/mes-taches/mes-taches.component.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesMesTachesMesTachesComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"dashboard-headline\">\n    <h3>Mes Taches</h3>\n\n    <!-- Breadcrumbs -->\n    <nav class=\"dark\" id=\"breadcrumbs\">\n        <ul>\n            <li><a [routerLink]=\"['/dashboard']\" routerLinkActive=\"router-link-active\">Tableau de bord </a></li>\n            <li>Mes Taches</li>\n        </ul>\n    </nav>\n</div>\n\n<div class=\"row\">\n\n    <!-- Dashboard Box -->\n    <div class=\"col-xl-12\">\n        <div class=\"dashboard-box margin-top-0\">\n\n            <router-outlet></router-outlet>\n        </div>\n    </div>\n</div>\n\n";
    /***/
  },

  /***/
  "./src/app/modules/mes-taches/mes-taches-detail/mes-taches-detail.component.css":
  /*!**************************************************************************************!*\
    !*** ./src/app/modules/mes-taches/mes-taches-detail/mes-taches-detail.component.css ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesMesTachesMesTachesDetailMesTachesDetailComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWVzLXRhY2hlcy9tZXMtdGFjaGVzLWRldGFpbC9tZXMtdGFjaGVzLWRldGFpbC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/modules/mes-taches/mes-taches-detail/mes-taches-detail.component.ts":
  /*!*************************************************************************************!*\
    !*** ./src/app/modules/mes-taches/mes-taches-detail/mes-taches-detail.component.ts ***!
    \*************************************************************************************/

  /*! exports provided: MesTachesDetailComponent */

  /***/
  function srcAppModulesMesTachesMesTachesDetailMesTachesDetailComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MesTachesDetailComponent", function () {
      return MesTachesDetailComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var MesTachesDetailComponent =
    /*#__PURE__*/
    function () {
      function MesTachesDetailComponent() {
        _classCallCheck(this, MesTachesDetailComponent);
      }

      _createClass(MesTachesDetailComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return MesTachesDetailComponent;
    }();

    MesTachesDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-mes-taches-detail',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./mes-taches-detail.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/mes-taches/mes-taches-detail/mes-taches-detail.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./mes-taches-detail.component.css */
      "./src/app/modules/mes-taches/mes-taches-detail/mes-taches-detail.component.css")).default]
    })], MesTachesDetailComponent);
    /***/
  },

  /***/
  "./src/app/modules/mes-taches/mes-taches-list/mes-taches-list.component.css":
  /*!**********************************************************************************!*\
    !*** ./src/app/modules/mes-taches/mes-taches-list/mes-taches-list.component.css ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesMesTachesMesTachesListMesTachesListComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWVzLXRhY2hlcy9tZXMtdGFjaGVzLWxpc3QvbWVzLXRhY2hlcy1saXN0LmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/modules/mes-taches/mes-taches-list/mes-taches-list.component.ts":
  /*!*********************************************************************************!*\
    !*** ./src/app/modules/mes-taches/mes-taches-list/mes-taches-list.component.ts ***!
    \*********************************************************************************/

  /*! exports provided: MesTachesListComponent */

  /***/
  function srcAppModulesMesTachesMesTachesListMesTachesListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MesTachesListComponent", function () {
      return MesTachesListComponent;
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


    var _taches_tache_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../taches/tache.service */
    "./src/app/modules/taches/tache.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default =
    /*#__PURE__*/
    __webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);

    var MesTachesListComponent =
    /*#__PURE__*/
    function () {
      function MesTachesListComponent(service, router) {
        _classCallCheck(this, MesTachesListComponent);

        this.service = service;
        this.router = router;
      }

      _createClass(MesTachesListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onDetail",
        value: function onDetail(slug) {
          this.router.navigateByUrl('mes-taches/' + slug);
        }
      }, {
        key: "onEdit",
        value: function onEdit(slug) {
          this.router.navigateByUrl('mes-taches/edit/' + slug);
        }
      }, {
        key: "onDelete",
        value: function onDelete(item) {
          var _this = this;

          var swalWithBootstrapButtons = sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.mixin({
            customClass: {
              confirmButton: 'btn btn-success',
              cancelButton: 'btn btn-danger'
            },
            buttonsStyling: false
          });
          swalWithBootstrapButtons.fire({
            title: 'Supprimer ?',
            text: 'Le etapes ansi que toutes les taches  seront supprimés !',
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Confirmer!',
            cancelButtonText: 'Annuler!',
            reverseButtons: true
          }).then(function (result) {
            if (result.value) {
              swalWithBootstrapButtons.fire('Succès!', 'Item supprimé avec succès !.', 'success');

              _this.service.delete(item.slug).subscribe(function (response) {
                var message = response.message;
                var display = true; //   this.initDisplay(true,message);
                //  this.getPage(this.pageNumber+1)
              });
            } else if (result.dismiss === sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.DismissReason.cancel) {
              swalWithBootstrapButtons.fire('Annuler', '', 'error');
            }
          });
        }
      }]);

      return MesTachesListComponent;
    }();

    MesTachesListComponent.ctorParameters = function () {
      return [{
        type: _taches_tache_service__WEBPACK_IMPORTED_MODULE_2__["TacheService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    MesTachesListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-mes-taches-list',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./mes-taches-list.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/mes-taches/mes-taches-list/mes-taches-list.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./mes-taches-list.component.css */
      "./src/app/modules/mes-taches/mes-taches-list/mes-taches-list.component.css")).default]
    })], MesTachesListComponent);
    /***/
  },

  /***/
  "./src/app/modules/mes-taches/mes-taches.component.css":
  /*!*************************************************************!*\
    !*** ./src/app/modules/mes-taches/mes-taches.component.css ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesMesTachesMesTachesComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWVzLXRhY2hlcy9tZXMtdGFjaGVzLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/modules/mes-taches/mes-taches.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/modules/mes-taches/mes-taches.component.ts ***!
    \************************************************************/

  /*! exports provided: MesTachesComponent */

  /***/
  function srcAppModulesMesTachesMesTachesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MesTachesComponent", function () {
      return MesTachesComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var MesTachesComponent =
    /*#__PURE__*/
    function () {
      function MesTachesComponent() {
        _classCallCheck(this, MesTachesComponent);
      }

      _createClass(MesTachesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return MesTachesComponent;
    }();

    MesTachesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-mes-taches',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./mes-taches.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/mes-taches/mes-taches.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./mes-taches.component.css */
      "./src/app/modules/mes-taches/mes-taches.component.css")).default]
    })], MesTachesComponent);
    /***/
  },

  /***/
  "./src/app/modules/mes-taches/mes-taches.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/modules/mes-taches/mes-taches.module.ts ***!
    \*********************************************************/

  /*! exports provided: MesTachesModule */

  /***/
  function srcAppModulesMesTachesMesTachesModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MesTachesModule", function () {
      return MesTachesModule;
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


    var _mes_taches_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./mes-taches.component */
    "./src/app/modules/mes-taches/mes-taches.component.ts");
    /* harmony import */


    var _mes_taches_list_mes_taches_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./mes-taches-list/mes-taches-list.component */
    "./src/app/modules/mes-taches/mes-taches-list/mes-taches-list.component.ts");
    /* harmony import */


    var _mes_taches_detail_mes_taches_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./mes-taches-detail/mes-taches-detail.component */
    "./src/app/modules/mes-taches/mes-taches-detail/mes-taches-detail.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _mes_taches_routes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./mes-taches.routes */
    "./src/app/modules/mes-taches/mes-taches.routes.ts");

    var MesTachesModule = function MesTachesModule() {
      _classCallCheck(this, MesTachesModule);
    };

    MesTachesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_mes_taches_component__WEBPACK_IMPORTED_MODULE_3__["MesTachesComponent"], _mes_taches_list_mes_taches_list_component__WEBPACK_IMPORTED_MODULE_4__["MesTachesListComponent"], _mes_taches_detail_mes_taches_detail_component__WEBPACK_IMPORTED_MODULE_5__["MesTachesDetailComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forChild(_mes_taches_routes__WEBPACK_IMPORTED_MODULE_7__["mesTachesRoutes"])]
    })], MesTachesModule);
    /***/
  },

  /***/
  "./src/app/modules/mes-taches/mes-taches.routes.ts":
  /*!*********************************************************!*\
    !*** ./src/app/modules/mes-taches/mes-taches.routes.ts ***!
    \*********************************************************/

  /*! exports provided: mesTachesRoutes */

  /***/
  function srcAppModulesMesTachesMesTachesRoutesTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "mesTachesRoutes", function () {
      return mesTachesRoutes;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _mes_taches_list_mes_taches_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./mes-taches-list/mes-taches-list.component */
    "./src/app/modules/mes-taches/mes-taches-list/mes-taches-list.component.ts");
    /* harmony import */


    var _mes_taches_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./mes-taches.component */
    "./src/app/modules/mes-taches/mes-taches.component.ts");
    /* harmony import */


    var _mes_taches_detail_mes_taches_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./mes-taches-detail/mes-taches-detail.component */
    "./src/app/modules/mes-taches/mes-taches-detail/mes-taches-detail.component.ts");
    /* harmony import */


    var src_app_core_auth_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/core/auth-guard */
    "./src/app/core/auth-guard.ts");

    var mesTachesRoutes = [{
      path: '',
      component: _mes_taches_component__WEBPACK_IMPORTED_MODULE_2__["MesTachesComponent"],
      children: [{
        path: 'list',
        component: _mes_taches_list_mes_taches_list_component__WEBPACK_IMPORTED_MODULE_1__["MesTachesListComponent"]
      }, {
        path: ':slug',
        component: _mes_taches_detail_mes_taches_detail_component__WEBPACK_IMPORTED_MODULE_3__["MesTachesDetailComponent"]
      }],
      canActivate: [src_app_core_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
    }];
    /***/
  }
}]);
//# sourceMappingURL=modules-mes-taches-mes-taches-module-es5.js.map