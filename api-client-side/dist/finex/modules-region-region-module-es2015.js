(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-region-region-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/region/region-create/region-create.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/region/region-create/region-create.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"dashboard-box margin-top-0 \">\n    <div class=\"headline\">\n        <p class=\"text-danger\">Les champs marqués par un ( <i class=\"text-danger glyphicon glyphicon-asterisk\"></i>)\n            sont obligatoires !</p>\n\n        <div class=\"dashboard-headline\">\n            <h4 class=\"wither\"><i class=\"sl sl-icon-doc\"></i> Enregistrement <a class=\"button pull-right\"\n                                                                                routerLink='/taches/list'><i\n                    class=\"fa fa-list\"></i> Liste </a></h4>\n\n        </div>\n    </div>\n    <!-- Nav tabs -->\n    <div>\n\n        <!-- Tab panes -->\n        <form (ngSubmit)=\"submit()\" [formGroup]=\"fGroup\" enctype=\"multipart/form-data\">\n            <div class=\"content with-padding padding-bottom-10\">\n                <div class=\"jumbotron\">\n                    <div class=\"submit-field\">\n\n                        <div class=\"col-xl-12\">\n                            <label>Nom <i class=\"text-danger glyphicon glyphicon-asterisk\"></i></label>\n                            <input class=\"search-field\" formControlName=\"nom\" placeholder=\"ex : Achat des materiel\"\n                                   type=\"text\">\n\n                            <div *ngIf=\"fGroup.controls['nom'].invalid && (fGroup.controls['nom'].dirty || fGroup.controls['nom'].touched)\">\n                                <div *ngIf=\"fGroup.controls['nom'].errors.required\">\n                                    <p class=\"text-danger\">Entrez le libelle du projet !</p>\n                                </div>\n                            </div>\n                        </div>\n\n                    </div>\n\n\n                    <div class=\"col-md-12\">\n                        <div class=\"row\">\n\n                            <div class=\"col-md-6\">\n                                <label>Chef Lieux <i class=\"text-danger glyphicon glyphicon-asterisk\"></i></label>\n                                <input  type=\"text\" formControlName=\"cheflieux\"/>\n                            </div>\n                        </div>\n                    </div>\n\n\n                   <div class=\"submit-field\">\n\n                        <div class=\"col-xl-12\">\n                            <label>Description</label>\n                            <textarea class=\"WYSIWYG\" cols=\"40\" formControlName=\"description\" id=\"summary\" name=\"summary\" rows=\"3\"\n                                      spellcheck=\"true\"> </textarea>\n\n                        </div>\n\n\n                    </div>\n\n\n                    <div>\n\n                        <button class=\"button ripple-effect big margin-top-30\" style=\"background: #139469;color: #fff\"\n                                type=\"submit\">Enregistrer <i\n                                class=\"fa fa-save\"></i></button> &nbsp;\n\n                        <button class=\"button ripple-effect big margin-top-30\" href=\"#\"> Liste</button>\n\n\n                    </div>\n                </div>\n\n\n            </div>\n        </form>\n\n\n    </div>\n\n\n</div>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/region/region-list/region-list.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/region/region-list/region-list.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"col-lg-12 col-md-12 col-xs-12\">\n    <div class=\"dashboard-list-box\">\n        <div class=\"headline\"><i class=\"fa fa-list\"></i> Liste <a class=\"button pull-right\"\n                                                                  routerLink='/regions/create'><i\n                class=\"fa fa-plus\"></i> Ajouter </a></div>\n        <div class=\"table-box\">\n            <table class=\"basic-table booking-table\">\n                <thead>\n                <tr>\n                    <th>#</th>\n                    <th>Nom</th>\n                    <th>Description</th>\n                    <th>Date de Creation</th>\n                    <th>Action</th>\n                </tr>\n                </thead>\n                <tbody>\n                <tr *ngFor=\"let item of secteurs\">\n                    <td>{{ item.id }}</td>\n                    <td>{{ item.nom }}</td>\n                    <td></td>\n                    <td>{{  parseDate(item.createdAt) }}</td>\n\n                    <td class=\"btn-group\">\n                        <button (click)=\"show(item.slug)\" class=\"btn btn-xs btn-info\"><i class=\"icon-feather-eye\"></i>\n                        </button>&nbsp;\n                        <button (click)=\"edit(item.slug)\" class=\"btn btn-xs btn-warning\"><i\n                                class=\"icon-line-awesome-edit\"></i></button>&nbsp;\n                        <button (click)=\"delete(item.slug)\" class=\"btn btn-xs btn-danger\"><i\n                                class=\"icon-feather-trash\"></i></button>\n                    </td>\n                </tr>\n                </tbody>\n            </table>\n\n        </div>\n    </div>\n    <div class=\"pagination-container\">\n        <nav class=\"pagination\">\n            <ul>\n\n                <li *ngIf=\"last\"><a (click)=\"previewPage()\"><i class=\"sl sl-icon-arrow-left\"></i></a></li>\n                <li><a>{{ pageNumber + 1}}</a></li>\n                <li *ngIf=\"numberOfElements < totalElements && !last\"><a (click)=\"nextPage()\">{{ pageNumber + 2}}</a>\n                </li>\n                <li *ngIf=\"!last\"><a (click)=\"nextPage()\"><i class=\"sl sl-icon-arrow-right\"></i></a></li>\n            </ul>\n        </nav>\n        <button class=\"button preview pull-left\">{{numberOfElements}}/ {{totalElements}} Financements</button>\n        <button class=\"button  pull-right\">Imprimer</button>\n    </div>\n</div>\n<router-outlet></router-outlet>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/region/region-show/region-show.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/region/region-show/region-show.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>region-show works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/region/region-update/region-update.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/region/region-update/region-update.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>region-update works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/region/region.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/region/region.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"dashboard-headline\">\n    <h3>Régions</h3>\n\n    <!-- Breadcrumbs -->\n    <nav id=\"breadcrumbs\" class=\"dark\">\n        <ul>\n            <li><a [routerLink]=\"['/dashboard']\" routerLinkActive=\"router-link-active\">Tableau de bord </a></li>\n            <li>Régions</li>\n        </ul>\n    </nav>\n</div>\n\n<div class=\"row\">\n\n    <!-- Dashboard Box -->\n    <div class=\"col-xl-12\">\n        <div class=\"dashboard-box margin-top-0\">\n\n            <router-outlet></router-outlet>\n        </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "./src/app/modules/region/region-create/region-create.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/modules/region/region-create/region-create.component.scss ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcmVnaW9uL3JlZ2lvbi1jcmVhdGUvcmVnaW9uLWNyZWF0ZS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/modules/region/region-create/region-create.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/modules/region/region-create/region-create.component.ts ***!
  \*************************************************************************/
/*! exports provided: RegionCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegionCreateComponent", function() { return RegionCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _region__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../region */ "./src/app/modules/region/region.ts");
/* harmony import */ var _region_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../region.service */ "./src/app/modules/region/region.service.ts");






let RegionCreateComponent = class RegionCreateComponent {
    constructor(service, fb) {
        this.service = service;
        this.fb = fb;
    }
    ngOnInit() {
        this.initForm();
    }
    initForm() {
        this.fGroup = this.fb.group({
            nom: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            description: [''],
            cheflieux: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    }
    submit() {
        const nom = this.fGroup.value.nom;
        const description = this.fGroup.value.description;
        const cheflieux = this.fGroup.value.cheflieux;
        const request = new _region__WEBPACK_IMPORTED_MODULE_4__["Region"](null, nom, cheflieux, description);
        this.service.create(request).subscribe((response) => {
            if (response.status) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire('Succès', response.message, 'success');
            }
        });
    }
};
RegionCreateComponent.ctorParameters = () => [
    { type: _region_service__WEBPACK_IMPORTED_MODULE_5__["RegionService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
];
RegionCreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-region-create',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./region-create.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/region/region-create/region-create.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./region-create.component.scss */ "./src/app/modules/region/region-create/region-create.component.scss")).default]
    })
], RegionCreateComponent);



/***/ }),

/***/ "./src/app/modules/region/region-list/region-list.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/modules/region/region-list/region-list.component.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcmVnaW9uL3JlZ2lvbi1saXN0L3JlZ2lvbi1saXN0LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/region/region-list/region-list.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/modules/region/region-list/region-list.component.ts ***!
  \*********************************************************************/
/*! exports provided: RegionListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegionListComponent", function() { return RegionListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _region_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../region.service */ "./src/app/modules/region/region.service.ts");






let RegionListComponent = class RegionListComponent {
    constructor(service, router) {
        this.service = service;
        this.router = router;
    }
    ngOnInit() {
        this.fetch(1);
    }
    parseDate(date) {
        return date = moment__WEBPACK_IMPORTED_MODULE_3__().locale('fr').format('dddd, MMMM Do YYYY, h:mm:ss a');
    }
    fetch(page) {
        this.service.fetch(page).subscribe((res) => {
            this.regions = res._embeded.entitys.content;
        });
    }
    onDetail(slug) {
        this.router.navigateByUrl('regions/' + slug);
    }
    onEdit(slug) {
        this.router.navigateByUrl('regions/edit/' + slug);
    }
    onDelete(item) {
        const swalWithBootstrapButtons = sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.mixin({
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
        }).then((result) => {
            if (result.value) {
                swalWithBootstrapButtons.fire('Succès!', 'Item supprimé avec succès !.', 'success');
                this.service.delete(item.slug).subscribe((response) => {
                    const message = response.message;
                    const display = true;
                });
            }
            else if (result.dismiss === sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.DismissReason.cancel) {
                swalWithBootstrapButtons.fire('Annuler', '', 'error');
            }
        });
    }
};
RegionListComponent.ctorParameters = () => [
    { type: _region_service__WEBPACK_IMPORTED_MODULE_5__["RegionService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
RegionListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-region-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./region-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/region/region-list/region-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./region-list.component.scss */ "./src/app/modules/region/region-list/region-list.component.scss")).default]
    })
], RegionListComponent);



/***/ }),

/***/ "./src/app/modules/region/region-show/region-show.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/modules/region/region-show/region-show.component.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcmVnaW9uL3JlZ2lvbi1zaG93L3JlZ2lvbi1zaG93LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/region/region-show/region-show.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/modules/region/region-show/region-show.component.ts ***!
  \*********************************************************************/
/*! exports provided: RegionShowComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegionShowComponent", function() { return RegionShowComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let RegionShowComponent = class RegionShowComponent {
    constructor() {
    }
    ngOnInit() {
    }
};
RegionShowComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-region-show',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./region-show.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/region/region-show/region-show.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./region-show.component.scss */ "./src/app/modules/region/region-show/region-show.component.scss")).default]
    })
], RegionShowComponent);



/***/ }),

/***/ "./src/app/modules/region/region-update/region-update.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/modules/region/region-update/region-update.component.scss ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcmVnaW9uL3JlZ2lvbi11cGRhdGUvcmVnaW9uLXVwZGF0ZS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/modules/region/region-update/region-update.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/modules/region/region-update/region-update.component.ts ***!
  \*************************************************************************/
/*! exports provided: RegionUpdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegionUpdateComponent", function() { return RegionUpdateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let RegionUpdateComponent = class RegionUpdateComponent {
    constructor() {
    }
    ngOnInit() {
    }
};
RegionUpdateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-region-update',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./region-update.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/region/region-update/region-update.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./region-update.component.scss */ "./src/app/modules/region/region-update/region-update.component.scss")).default]
    })
], RegionUpdateComponent);



/***/ }),

/***/ "./src/app/modules/region/region.component.scss":
/*!******************************************************!*\
  !*** ./src/app/modules/region/region.component.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcmVnaW9uL3JlZ2lvbi5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/modules/region/region.component.ts":
/*!****************************************************!*\
  !*** ./src/app/modules/region/region.component.ts ***!
  \****************************************************/
/*! exports provided: RegionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegionComponent", function() { return RegionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let RegionComponent = class RegionComponent {
    constructor() {
    }
    ngOnInit() {
    }
};
RegionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-region',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./region.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/region/region.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./region.component.scss */ "./src/app/modules/region/region.component.scss")).default]
    })
], RegionComponent);



/***/ }),

/***/ "./src/app/modules/region/region.module.ts":
/*!*************************************************!*\
  !*** ./src/app/modules/region/region.module.ts ***!
  \*************************************************/
/*! exports provided: RegionModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegionModule", function() { return RegionModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _region_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./region.component */ "./src/app/modules/region/region.component.ts");
/* harmony import */ var _region_list_region_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./region-list/region-list.component */ "./src/app/modules/region/region-list/region-list.component.ts");
/* harmony import */ var _region_create_region_create_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./region-create/region-create.component */ "./src/app/modules/region/region-create/region-create.component.ts");
/* harmony import */ var _region_show_region_show_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./region-show/region-show.component */ "./src/app/modules/region/region-show/region-show.component.ts");
/* harmony import */ var _region_update_region_update_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./region-update/region-update.component */ "./src/app/modules/region/region-update/region-update.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _region_routes__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./region.routes */ "./src/app/modules/region/region.routes.ts");











let RegionModule = class RegionModule {
};
RegionModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_region_component__WEBPACK_IMPORTED_MODULE_3__["RegionComponent"], _region_list_region_list_component__WEBPACK_IMPORTED_MODULE_4__["RegionListComponent"], _region_create_region_create_component__WEBPACK_IMPORTED_MODULE_5__["RegionCreateComponent"], _region_show_region_show_component__WEBPACK_IMPORTED_MODULE_6__["RegionShowComponent"], _region_update_region_update_component__WEBPACK_IMPORTED_MODULE_7__["RegionUpdateComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"].forChild(_region_routes__WEBPACK_IMPORTED_MODULE_10__["regionRoutes"])
        ]
    })
], RegionModule);



/***/ }),

/***/ "./src/app/modules/region/region.routes.ts":
/*!*************************************************!*\
  !*** ./src/app/modules/region/region.routes.ts ***!
  \*************************************************/
/*! exports provided: regionRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "regionRoutes", function() { return regionRoutes; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _core_auth_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/auth-guard */ "./src/app/core/auth-guard.ts");
/* harmony import */ var _region_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./region.component */ "./src/app/modules/region/region.component.ts");
/* harmony import */ var _region_list_region_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./region-list/region-list.component */ "./src/app/modules/region/region-list/region-list.component.ts");
/* harmony import */ var _region_create_region_create_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./region-create/region-create.component */ "./src/app/modules/region/region-create/region-create.component.ts");
/* harmony import */ var _region_show_region_show_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./region-show/region-show.component */ "./src/app/modules/region/region-show/region-show.component.ts");






const regionRoutes = [
    {
        path: '',
        component: _region_component__WEBPACK_IMPORTED_MODULE_2__["RegionComponent"],
        children: [
            { path: 'list', component: _region_list_region_list_component__WEBPACK_IMPORTED_MODULE_3__["RegionListComponent"] },
            { path: ':create', component: _region_create_region_create_component__WEBPACK_IMPORTED_MODULE_4__["RegionCreateComponent"] },
            { path: ':slug', component: _region_show_region_show_component__WEBPACK_IMPORTED_MODULE_5__["RegionShowComponent"] }
        ],
        canActivate: [_core_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]]
    },
];


/***/ }),

/***/ "./src/app/modules/region/region.service.ts":
/*!**************************************************!*\
  !*** ./src/app/modules/region/region.service.ts ***!
  \**************************************************/
/*! exports provided: RegionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegionService", function() { return RegionService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");




const headers = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-Type': 'application/json', 'Cache-Control': 'no-cache' })
};
let RegionService = class RegionService {
    constructor(http) {
        this.http = http;
        this.env = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"];
        this.resourceUrl = this.env.baseUrl + 'secteur';
    }
    create(secteur) {
        return this.http.post(this.resourceUrl, secteur, headers);
    }
    update(secteur) {
        return this.http.put(this.resourceUrl, secteur, headers);
    }
    find(id) {
        return this.http.get(`${this.resourceUrl}` + '/show/' + id, headers);
    }
    fetch(page) {
        return this.http.get(this.resourceUrl + '?page=' + page, headers);
    }
    fetchNoPagination() {
        return this.http.get(this.resourceUrl + '/no-pagination', headers);
    }
    delete(id) {
        return this.http.delete(`${this.resourceUrl}/${id}`, headers);
    }
};
RegionService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
RegionService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], RegionService);



/***/ }),

/***/ "./src/app/modules/region/region.ts":
/*!******************************************!*\
  !*** ./src/app/modules/region/region.ts ***!
  \******************************************/
/*! exports provided: Region */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Region", function() { return Region; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Region {
    // tslint:disable-next-line: max-line-length
    constructor(id, libelle, cheflieux, description, slug) {
        this.id = id;
        this.libelle = libelle;
        this.cheflieux = cheflieux;
        this.description = description;
        this.slug = slug;
    }
}


/***/ })

}]);
//# sourceMappingURL=modules-region-region-module-es2015.js.map