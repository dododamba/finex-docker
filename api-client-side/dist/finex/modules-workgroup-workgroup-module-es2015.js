(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-workgroup-workgroup-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/workgroup/card/card.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/workgroup/card/card.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p (dragstart)=\"dragStart($event)\" class=\"card\" draggable=\"true\" id=\"{{card.id}}\">\n    {{card.description}}\n</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/workgroup/list/list.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/workgroup/list/list.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div (dragover)=\"allowDrop($event)\" (drop)=\"drop($event)\" class=\"list\">\n    <p class=\"list__title\"><strong>{{list.name}}</strong></p>\n    <div class=\"cards\">\n        <app-card *ngFor=\"let cardId of list.cards\" [card]=\"cardStore.getCard(cardId)\"></app-card>\n    </div>\n\n    <input #addCardInput (keyup.enter)=\"onEnter(addCardInput.value); addCardInput.value=''; displayAddCard=false;\"\n           *ngIf=\"displayAddCard\"\n           autofocus type=\"text\">\n    <a (click)=\"toggleDisplayAddCard();\" class=\"list__newcard\">Ajouter une Tache</a>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/workgroup/workgroup-item-dashboard/workgroup-item-dashboard.component.html":
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/workgroup/workgroup-item-dashboard/workgroup-item-dashboard.component.html ***!
  \******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"kanban\">\n    <app-list *ngFor=\"let list of lists\" [cardStore]=\"cardStore\" [list]=\"list\"></app-list>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/workgroup/workgroup-list/workgroup-list.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/workgroup/workgroup-list/workgroup-list.component.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n    <div class=\"col-xl-12\">\n\n        <!-- Section Headline -->\n\n\n        <!-- Jobs Container -->\n        <div class=\"listings-container compact-list-layout margin-top-35\">\n\n            <!-- Job Listing -->\n\n            <div *ngFor=\"let item of groups\">\n                <div class=\"job-listing with-apply-button\">\n\n                    <!-- Job Listing Details -->\n                    <div class=\"job-listing-details\">\n\n                        <!-- Logo -->\n                        <div class=\"job-listing-company-logo\">\n                            <img alt=\"\" src=\"images/company-logo-01.png\">\n                        </div>\n\n                        <!-- Details -->\n                        <div class=\"job-listing-description\">\n                            <h3 class=\"job-listing-title\">{{item.nom}}</h3>\n\n                            <!-- Job Listing Footer -->\n                            <div class=\"job-listing-footer\">\n                                <ul>\n                                    <li><i class=\"icon-material-outline-supervisor-account\"></i> Membres\n                                        ( {{item.membres.length}})\n                                        <div class=\"verified-badge\" data-original-title=\"Verified Employer\" data-tippy=\"\"\n                                             data-tippy-placement=\"top\"></div>\n                                    </li>\n                                    <li><i class=\"icon-material-outline-access-time\"></i> 2 days ago</li>\n                                </ul>\n                            </div>\n                        </div>\n\n                        <!-- Apply Button -->\n                        <button (click)='getWorkGroup(item.slug)' class=\"list-apply-button ripple-effect\" type=\"button\">\n                            Acceder au groupe\n                        </button>\n                    </div>\n                </div>\n            </div>\n\n\n            <!-- Job Listing -->\n\n\n        </div>\n        <!-- Jobs Container / End -->\n\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/workgroup/workgroup.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/workgroup/workgroup.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"dashboard-headline\">\n    <h3>Groupe de Tavail</h3>\n\n    <!-- Breadcrumbs -->\n    <nav class=\"dark\" id=\"breadcrumbs\">\n        <ul>\n            <li><a [routerLink]=\"['/dashboard']\" routerLinkActive=\"router-link-active\">Tableau de bord </a></li>\n            <li>Groupe de Tavail</li>\n        </ul>\n    </nav>\n</div>\n\n<router-outlet></router-outlet>\n");

/***/ }),

/***/ "./src/app/modules/workgroup/card/card.component.css":
/*!***********************************************************!*\
  !*** ./src/app/modules/workgroup/card/card.component.css ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("p {\n    background: white;\n    margin: 0 0 6px 0;\n    padding: 6px 6px 2px 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy93b3JrZ3JvdXAvY2FyZC9jYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLHdCQUF3QjtBQUM1QiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvd29ya2dyb3VwL2NhcmQvY2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsicCB7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgbWFyZ2luOiAwIDAgNnB4IDA7XG4gICAgcGFkZGluZzogNnB4IDZweCAycHggOHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/modules/workgroup/card/card.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/modules/workgroup/card/card.component.ts ***!
  \**********************************************************/
/*! exports provided: CardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardComponent", function() { return CardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CardComponent = class CardComponent {
    constructor() {
    }
    ngOnInit() {
    }
    dragStart(ev) {
        ev.dataTransfer.setData('text', ev.target.id);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], CardComponent.prototype, "card", void 0);
CardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-card',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./card.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/workgroup/card/card.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./card.component.css */ "./src/app/modules/workgroup/card/card.component.css")).default]
    })
], CardComponent);



/***/ }),

/***/ "./src/app/modules/workgroup/card/card.ts":
/*!************************************************!*\
  !*** ./src/app/modules/workgroup/card/card.ts ***!
  \************************************************/
/*! exports provided: CardStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardStore", function() { return CardStore; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _cardschema__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cardschema */ "./src/app/modules/workgroup/card/cardschema.ts");


class CardStore {
    constructor() {
        this.cards = {};
        this.lastId = -1;
    }
    _addCard(card) {
        card.id = String(++this.lastId);
        this.cards[card.id] = card;
        return card.id;
    }
    getCard(cardId) {
        return this.cards[cardId];
    }
    newCard(description) {
        const card = new _cardschema__WEBPACK_IMPORTED_MODULE_1__["CardSchema"]();
        card.description = description;
        return (this._addCard(card));
    }
}


/***/ }),

/***/ "./src/app/modules/workgroup/card/cardschema.ts":
/*!******************************************************!*\
  !*** ./src/app/modules/workgroup/card/cardschema.ts ***!
  \******************************************************/
/*! exports provided: CardSchema */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardSchema", function() { return CardSchema; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class CardSchema {
}


/***/ }),

/***/ "./src/app/modules/workgroup/list/list.component.css":
/*!***********************************************************!*\
  !*** ./src/app/modules/workgroup/list/list.component.css ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".list {\n    background: #e2e4e6;\n    width: 258px;\n    padding: 6px;\n    margin: 5px;\n    display: inline-block;\n\n}\n\n.list__title {\n    margin: 0;\n    padding: 16px 0;\n}\n\n.list a {\n    width: 100%;\n    display: block;\n    text-decoration: none;\n}\n\ninput {\n    width: 248px;\n    padding: 5px;\n    border: 2px solid orange;\n    outline: 0;\n    background: #fff;\n    box-shadow: none;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy93b3JrZ3JvdXAvbGlzdC9saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLFlBQVk7SUFDWixXQUFXO0lBQ1gscUJBQXFCOztBQUV6Qjs7QUFFQTtJQUNJLFNBQVM7SUFDVCxlQUFlO0FBQ25COztBQUVBO0lBQ0ksV0FBVztJQUNYLGNBQWM7SUFDZCxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLHdCQUF3QjtJQUN4QixVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvd29ya2dyb3VwL2xpc3QvbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxpc3Qge1xuICAgIGJhY2tncm91bmQ6ICNlMmU0ZTY7XG4gICAgd2lkdGg6IDI1OHB4O1xuICAgIHBhZGRpbmc6IDZweDtcbiAgICBtYXJnaW46IDVweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cbn1cblxuLmxpc3RfX3RpdGxlIHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMTZweCAwO1xufVxuXG4ubGlzdCBhIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbmlucHV0IHtcbiAgICB3aWR0aDogMjQ4cHg7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIG9yYW5nZTtcbiAgICBvdXRsaW5lOiAwO1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/modules/workgroup/list/list.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/modules/workgroup/list/list.component.ts ***!
  \**********************************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ListComponent = class ListComponent {
    constructor() {
        this.displayAddCard = false;
    }
    toggleDisplayAddCard() {
        this.displayAddCard = !this.displayAddCard;
    }
    ngOnInit() {
    }
    allowDrop($event) {
        $event.preventDefault();
    }
    drop($event) {
        $event.preventDefault();
        const data = $event.dataTransfer.getData('text');
        let target = $event.target;
        const targetClassName = target.className;
        while (target.className !== 'list') {
            target = target.parentNode;
        }
        target = target.querySelector('.cards');
        if (targetClassName === 'card') {
            $event.target.parentNode.insertBefore(document.getElementById(data), $event.target);
        }
        else if (targetClassName === 'list__title') {
            if (target.children.length) {
                target.insertBefore(document.getElementById(data), target.children[0]);
            }
            else {
                target.appendChild(document.getElementById(data));
            }
        }
        else {
            target.appendChild(document.getElementById(data));
        }
    }
    onEnter(value) {
        const cardId = this.cardStore.newCard(value);
        this.list.cards.push(cardId);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ListComponent.prototype, "list", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ListComponent.prototype, "cardStore", void 0);
ListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/workgroup/list/list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./list.component.css */ "./src/app/modules/workgroup/list/list.component.css")).default]
    })
], ListComponent);



/***/ }),

/***/ "./src/app/modules/workgroup/workgroup-item-dashboard/workgroup-item-dashboard.component.css":
/*!***************************************************************************************************!*\
  !*** ./src/app/modules/workgroup/workgroup-item-dashboard/workgroup-item-dashboard.component.css ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".kanban {\n    background: #ffffff;\n    display: -webkit-box;\n    display: flex;\n    padding: 0 5px;\n    height: 100vh;\n    overflow-x: scroll;\n    overflow-y: unset;\n}\n\na:hover, a:focus {\n    outline: none;\n    text-decoration: none;\n}\n\n.tab .nav-tabs {\n    border: none;\n    margin-bottom: 20px;\n}\n\n.tab .nav-tabs li a {\n    padding: 10px 20px;\n    margin-right: 5px;\n    background: #005294;\n    font-size: 18px;\n    font-weight: 700;\n    color: #fff;\n    border: 2px solid #005294;\n    border-radius: 50px;\n    overflow: hidden;\n    z-index: 1;\n    position: relative;\n    -webkit-transition: all 0.4s ease-in 0s;\n    transition: all 0.4s ease-in 0s;\n}\n\n.tab .nav-tabs li a:hover {\n    color: #005294;\n    background: #fff;\n    border: 2px solid #005294;\n}\n\n.tab .nav-tabs li.active a {\n    color: #fff;\n    border: 2px solid #fff;\n}\n\n.tab .nav-tabs li a:before {\n    content: \"\";\n    display: block;\n    width: 200px;\n    height: 200px;\n    border-radius: 50%;\n    background: #fff;\n    margin-top: -100px;\n    position: absolute;\n    top: 50%;\n    left: -50%;\n    opacity: 0.3;\n    z-index: -1;\n    -webkit-transform: scale(0);\n            transform: scale(0);\n    -webkit-transition: all 0.4s ease-in 0.1s;\n    transition: all 0.4s ease-in 0.1s;\n}\n\n.tab .nav-tabs li a:hover:before,\n.tab .nav-tabs li.active a:before {\n    opacity: 1;\n    -webkit-transform: scale(2);\n            transform: scale(2);\n}\n\n@media only screen and (max-width: 479px) {\n    .tab .nav-tabs li {\n        width: 100%;\n        text-align: center;\n        margin-bottom: 15px;\n    }\n\n    .tab .nav-tabs li a:hover:before,\n    .tab .nav-tabs li.active a:before {\n        -webkit-transform: scale(10);\n                transform: scale(10);\n    }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy93b3JrZ3JvdXAvd29ya2dyb3VwLWl0ZW0tZGFzaGJvYXJkL3dvcmtncm91cC1pdGVtLWRhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksbUJBQW1CO0lBQ25CLG9CQUFhO0lBQWIsYUFBYTtJQUNiLGNBQWM7SUFDZCxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gseUJBQXlCO0lBQ3pCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsVUFBVTtJQUNWLGtCQUFrQjtJQUNsQix1Q0FBK0I7SUFBL0IsK0JBQStCO0FBQ25DOztBQUVBO0lBQ0ksY0FBYztJQUNkLGdCQUFnQjtJQUNoQix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGNBQWM7SUFDZCxZQUFZO0lBQ1osYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsVUFBVTtJQUNWLFlBQVk7SUFDWixXQUFXO0lBQ1gsMkJBQW1CO1lBQW5CLG1CQUFtQjtJQUNuQix5Q0FBaUM7SUFBakMsaUNBQWlDO0FBQ3JDOztBQUVBOztJQUVJLFVBQVU7SUFDViwyQkFBbUI7WUFBbkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0k7UUFDSSxXQUFXO1FBQ1gsa0JBQWtCO1FBQ2xCLG1CQUFtQjtJQUN2Qjs7SUFFQTs7UUFFSSw0QkFBb0I7Z0JBQXBCLG9CQUFvQjtJQUN4QjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy93b3JrZ3JvdXAvd29ya2dyb3VwLWl0ZW0tZGFzaGJvYXJkL3dvcmtncm91cC1pdGVtLWRhc2hib2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmthbmJhbiB7XG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHBhZGRpbmc6IDAgNXB4O1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgb3ZlcmZsb3cteDogc2Nyb2xsO1xuICAgIG92ZXJmbG93LXk6IHVuc2V0O1xufVxuXG5hOmhvdmVyLCBhOmZvY3VzIHtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLnRhYiAubmF2LXRhYnMge1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4udGFiIC5uYXYtdGFicyBsaSBhIHtcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgYmFja2dyb3VuZDogIzAwNTI5NDtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjMDA1Mjk0O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB6LWluZGV4OiAxO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluIDBzO1xufVxuXG4udGFiIC5uYXYtdGFicyBsaSBhOmhvdmVyIHtcbiAgICBjb2xvcjogIzAwNTI5NDtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICMwMDUyOTQ7XG59XG5cbi50YWIgLm5hdi10YWJzIGxpLmFjdGl2ZSBhIHtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjZmZmO1xufVxuXG4udGFiIC5uYXYtdGFicyBsaSBhOmJlZm9yZSB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMjAwcHg7XG4gICAgaGVpZ2h0OiAyMDBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBtYXJnaW4tdG9wOiAtMTAwcHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTAlO1xuICAgIGxlZnQ6IC01MCU7XG4gICAgb3BhY2l0eTogMC4zO1xuICAgIHotaW5kZXg6IC0xO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1pbiAwLjFzO1xufVxuXG4udGFiIC5uYXYtdGFicyBsaSBhOmhvdmVyOmJlZm9yZSxcbi50YWIgLm5hdi10YWJzIGxpLmFjdGl2ZSBhOmJlZm9yZSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDIpO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ3OXB4KSB7XG4gICAgLnRhYiAubmF2LXRhYnMgbGkge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgIH1cblxuICAgIC50YWIgLm5hdi10YWJzIGxpIGE6aG92ZXI6YmVmb3JlLFxuICAgIC50YWIgLm5hdi10YWJzIGxpLmFjdGl2ZSBhOmJlZm9yZSB7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMTApO1xuICAgIH1cbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/modules/workgroup/workgroup-item-dashboard/workgroup-item-dashboard.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/modules/workgroup/workgroup-item-dashboard/workgroup-item-dashboard.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: WorkgroupItemDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkgroupItemDashboardComponent", function() { return WorkgroupItemDashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _card_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../card/card */ "./src/app/modules/workgroup/card/card.ts");



let WorkgroupItemDashboardComponent = class WorkgroupItemDashboardComponent {
    constructor() {
    }
    setMockData() {
        this.cardStore = new _card_card__WEBPACK_IMPORTED_MODULE_2__["CardStore"]();
        const lists = [
            {
                name: 'En cours',
                cards: []
            },
            {
                name: 'Effectué',
                cards: []
            },
            {
                name: 'A verifier',
                cards: []
            },
        ];
        this.lists = lists;
    }
    ngOnInit() {
        this.setMockData();
    }
};
WorkgroupItemDashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-workgroup-item-dashboard',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./workgroup-item-dashboard.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/workgroup/workgroup-item-dashboard/workgroup-item-dashboard.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./workgroup-item-dashboard.component.css */ "./src/app/modules/workgroup/workgroup-item-dashboard/workgroup-item-dashboard.component.css")).default]
    })
], WorkgroupItemDashboardComponent);



/***/ }),

/***/ "./src/app/modules/workgroup/workgroup-list/workgroup-list.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/modules/workgroup/workgroup-list/workgroup-list.component.css ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n.demo {\n    background-color: #E2E2E2;\n}\n\n.serviceBox {\n    color: #303030;\n    background-color: #fff;\n    font-family: 'Lato', sans-serif;\n    text-align: center;\n    padding: 25px 10px;\n    margin: 75px 0 0;\n    border-radius: 15px;\n}\n\n.serviceBox .service-icon {\n    color: #fff;\n    background: -webkit-gradient(linear, left top, left bottom, from(#FFA425), to(#FAC93C));\n    background: linear-gradient(to bottom, #FFA425, #FAC93C);\n    font-size: 80px;\n    line-height: 170px;\n    height: 170px;\n    width: 170px;\n    margin: -100px auto 30px;\n    border-radius: 50%;\n    display: block;\n    -webkit-transition: all 0.3s ease 0s;\n    transition: all 0.3s ease 0s;\n}\n\n.serviceBox:hover .service-icon {\n    font-size: 90px;\n    box-shadow: 0 0 20px -5px #000;\n}\n\n.serviceBox .title {\n    color: #FFA425;\n    font-size: 20px;\n    font-weight: 600;\n    text-transform: uppercase;\n    margin: 0 0 10px;\n}\n\n.serviceBox .description {\n    font-size: 15px;\n    text-align: center;\n    line-height: 28px;\n    margin: 0 0 20px;\n}\n\n.serviceBox .read-more {\n    color: #fff;\n    font-size: 17px;\n    font-weight: 600;\n    padding: 8px 10px;\n    border-radius: 20px 0;\n    display: inline-block;\n    overflow: hidden;\n    position: relative;\n    z-index: 1;\n    -webkit-transition: all 0.3s ease 0s;\n    transition: all 0.3s ease 0s;\n}\n\n.serviceBox .read-more:hover {\n    text-decoration: none;\n    box-shadow: 0 0 10px #fff inset;\n    text-shadow: 0 0 2px #000;\n}\n\n.serviceBox .read-more:before,\n.serviceBox .read-more:after {\n    content: '';\n    width: 50%;\n    height: 100%;\n    background: -webkit-gradient(linear, left top, left bottom, from(#FFA425), to(#FAC93C));\n    background: linear-gradient(to bottom, #FFA425, #FAC93C);\n    position: absolute;\n    left: -100%;\n    top: 0;\n    z-index: -1;\n    -webkit-transition: all 0.3s ease 0s;\n    transition: all 0.3s ease 0s;\n}\n\n.serviceBox .read-more:after {\n    left: auto;\n    right: -100%;\n}\n\n.serviceBox:hover .read-more:before {\n    left: 0;\n}\n\n.serviceBox:hover .read-more:after {\n    right: 0;\n}\n\n.serviceBox.orange .service-icon {\n    background: -webkit-gradient(linear, left top, left bottom, from(#E55928), to(#F39523));\n    background: linear-gradient(to bottom, #E55928, #F39523);\n}\n\n.serviceBox.orange .title {\n    color: #E55928;\n}\n\n.serviceBox.orange .read-more:before,\n.serviceBox.orange .read-more:after {\n    background: -webkit-gradient(linear, left top, left bottom, from(#E55928), to(#F39523));\n    background: linear-gradient(to bottom, #E55928, #F39523);\n}\n\n.serviceBox.purple .service-icon {\n    background: -webkit-gradient(linear, left top, left bottom, from(#A04A89), to(#E65844));\n    background: linear-gradient(to bottom, #A04A89, #E65844);\n}\n\n.serviceBox.purple .title {\n    color: #A04A89;\n}\n\n.serviceBox.purple .read-more:before,\n.serviceBox.purple .read-more:after {\n    background: -webkit-gradient(linear, left top, left bottom, from(#A04A89), to(#E65844));\n    background: linear-gradient(to bottom, #A04A89, #E65844);\n}\n\n.serviceBox.blue .service-icon {\n    background: -webkit-gradient(linear, left top, left bottom, from(#587EBC), to(#8D4D99));\n    background: linear-gradient(to bottom, #587EBC, #8D4D99);\n}\n\n.serviceBox.blue .title {\n    color: #587EBC;\n}\n\n.serviceBox.blue .read-more:before,\n.serviceBox.blue .read-more:after {\n    background: -webkit-gradient(linear, left top, left bottom, from(#587EBC), to(#8D4D99));\n    background: linear-gradient(to bottom, #587EBC, #8D4D99);\n}\n\n@media only screen and (max-width: 990px) {\n    .serviceBox {\n        margin: 110px 0 0;\n    }\n}\n\na:hover, a:focus {\n    text-decoration: none;\n    outline: none;\n}\n\n.vertical-tab {\n    font-family: 'Roboto', sans-serif;\n    display: table;\n}\n\n.vertical-tab .nav-tabs {\n    display: table-cell;\n    width: 28%;\n    min-width: 28%;\n    border: none;\n    border-right: 3px solid #079992;\n    position: relative;\n}\n\n.vertical-tab .nav-tabs li {\n    float: none;\n    vertical-align: top;\n}\n\n.vertical-tab .nav-tabs li a {\n    color: #606060;\n    background-color: #f1f2f6;\n    font-size: 18px;\n    text-transform: uppercase;\n    text-align: center;\n    letter-spacing: 1px;\n    padding: 15px 15px;\n    margin: 0;\n    border: none;\n    border-radius: 0;\n    display: block;\n    position: relative;\n    z-index: 1;\n    -webkit-transition: all 0.3s ease 0s;\n    transition: all 0.3s ease 0s;\n}\n\n.vertical-tab .nav-tabs li a:hover,\n.vertical-tab .nav-tabs li.active a,\n.vertical-tab .nav-tabs li.active a:hover {\n    color: #079992;\n    background-color: #fff;\n    border: none;\n}\n\n.vertical-tab .nav-tabs li a:before,\n.vertical-tab .nav-tabs li a:after {\n    content: '';\n    height: 20px;\n    width: 20px;\n    background-color: #fff;\n    border-radius: 5px;\n    box-shadow: 0 0 5px rgba(0, 0, 0, 0.3) inset;\n    opacity: 0;\n    -webkit-transform: translateY(-50%) rotate(45deg);\n            transform: translateY(-50%) rotate(45deg);\n    position: absolute;\n    right: -10px;\n    top: 100%;\n    z-index: -1;\n    -webkit-transition: all 0.3s ease 0s;\n    transition: all 0.3s ease 0s;\n}\n\n.vertical-tab .nav-tabs li a:after {\n    background-color: #079992;\n    border-radius: 50%;\n    height: 12px;\n    width: 12px;\n    right: 100%;\n    top: 50%;\n}\n\n.vertical-tab .nav-tabs li.active a:before,\n.vertical-tab .nav-tabs li a:hover:before {\n    top: 50%;\n    opacity: 1;\n}\n\n.vertical-tab .nav-tabs li.active a:after,\n.vertical-tab .nav-tabs li a:hover:after {\n    right: -6px;\n    opacity: 1;\n}\n\n.vertical-tab .tab-content {\n    color: #606060;\n    font-size: 14px;\n    text-align: justify;\n    line-height: 23px;\n    vertical-align: top;\n    padding: 15px 15px 15px 30px;\n    display: table-cell;\n}\n\n.vertical-tab .tab-content h3 {\n    color: #079992;\n    font-size: 24px;\n    margin: 0 0 5px 0;\n}\n\n@media only screen and (max-width: 479px) {\n    .vertical-tab .nav-tabs {\n        display: block;\n        width: 100%;\n        border-right: none;\n    }\n\n    .vertical-tab .nav-tabs li a {\n        padding: 10px;\n        margin: 0 0 10px;\n    }\n\n    .vertical-tab .tab-content {\n        display: block;\n        padding: 20px 15px 5px;\n        border-radius: 0 0 10px 10px;\n    }\n\n    .vertical-tab .tab-content h3 {\n        font-size: 18px;\n    }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy93b3JrZ3JvdXAvd29ya2dyb3VwLWxpc3Qvd29ya2dyb3VwLWxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxjQUFjO0lBQ2Qsc0JBQXNCO0lBQ3RCLCtCQUErQjtJQUMvQixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsdUZBQXdEO0lBQXhELHdEQUF3RDtJQUN4RCxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixZQUFZO0lBQ1osd0JBQXdCO0lBQ3hCLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2Qsb0NBQTRCO0lBQTVCLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLGVBQWU7SUFDZiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQix5QkFBeUI7SUFDekIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLHFCQUFxQjtJQUNyQixxQkFBcUI7SUFDckIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1Ysb0NBQTRCO0lBQTVCLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQiwrQkFBK0I7SUFDL0IseUJBQXlCO0FBQzdCOztBQUVBOztJQUVJLFdBQVc7SUFDWCxVQUFVO0lBQ1YsWUFBWTtJQUNaLHVGQUF3RDtJQUF4RCx3REFBd0Q7SUFDeEQsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxNQUFNO0lBQ04sV0FBVztJQUNYLG9DQUE0QjtJQUE1Qiw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLE9BQU87QUFDWDs7QUFFQTtJQUNJLFFBQVE7QUFDWjs7QUFFQTtJQUNJLHVGQUF3RDtJQUF4RCx3REFBd0Q7QUFDNUQ7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBOztJQUVJLHVGQUF3RDtJQUF4RCx3REFBd0Q7QUFDNUQ7O0FBRUE7SUFDSSx1RkFBd0Q7SUFBeEQsd0RBQXdEO0FBQzVEOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTs7SUFFSSx1RkFBd0Q7SUFBeEQsd0RBQXdEO0FBQzVEOztBQUVBO0lBQ0ksdUZBQXdEO0lBQXhELHdEQUF3RDtBQUM1RDs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7O0lBRUksdUZBQXdEO0lBQXhELHdEQUF3RDtBQUM1RDs7QUFFQTtJQUNJO1FBQ0ksaUJBQWlCO0lBQ3JCO0FBQ0o7O0FBR0E7SUFDSSxxQkFBcUI7SUFDckIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGlDQUFpQztJQUNqQyxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLFVBQVU7SUFDVixjQUFjO0lBQ2QsWUFBWTtJQUNaLCtCQUErQjtJQUMvQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksY0FBYztJQUNkLHlCQUF5QjtJQUN6QixlQUFlO0lBQ2YseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLG9DQUE0QjtJQUE1Qiw0QkFBNEI7QUFDaEM7O0FBRUE7OztJQUdJLGNBQWM7SUFDZCxzQkFBc0I7SUFDdEIsWUFBWTtBQUNoQjs7QUFFQTs7SUFFSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLFdBQVc7SUFDWCxzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLDRDQUE0QztJQUM1QyxVQUFVO0lBQ1YsaURBQXlDO1lBQXpDLHlDQUF5QztJQUN6QyxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFNBQVM7SUFDVCxXQUFXO0lBQ1gsb0NBQTRCO0lBQTVCLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFdBQVc7SUFDWCxXQUFXO0lBQ1gsUUFBUTtBQUNaOztBQUVBOztJQUVJLFFBQVE7SUFDUixVQUFVO0FBQ2Q7O0FBRUE7O0lBRUksV0FBVztJQUNYLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGNBQWM7SUFDZCxlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsNEJBQTRCO0lBQzVCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxlQUFlO0lBQ2YsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0k7UUFDSSxjQUFjO1FBQ2QsV0FBVztRQUNYLGtCQUFrQjtJQUN0Qjs7SUFFQTtRQUNJLGFBQWE7UUFDYixnQkFBZ0I7SUFDcEI7O0lBRUE7UUFDSSxjQUFjO1FBQ2Qsc0JBQXNCO1FBQ3RCLDRCQUE0QjtJQUNoQzs7SUFFQTtRQUNJLGVBQWU7SUFDbkI7QUFDSiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvd29ya2dyb3VwL3dvcmtncm91cC1saXN0L3dvcmtncm91cC1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5kZW1vIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTJFMkUyO1xufVxuXG4uc2VydmljZUJveCB7XG4gICAgY29sb3I6ICMzMDMwMzA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBmb250LWZhbWlseTogJ0xhdG8nLCBzYW5zLXNlcmlmO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAyNXB4IDEwcHg7XG4gICAgbWFyZ2luOiA3NXB4IDAgMDtcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xufVxuXG4uc2VydmljZUJveCAuc2VydmljZS1pY29uIHtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjRkZBNDI1LCAjRkFDOTNDKTtcbiAgICBmb250LXNpemU6IDgwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDE3MHB4O1xuICAgIGhlaWdodDogMTcwcHg7XG4gICAgd2lkdGg6IDE3MHB4O1xuICAgIG1hcmdpbjogLTEwMHB4IGF1dG8gMzBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZSAwcztcbn1cblxuLnNlcnZpY2VCb3g6aG92ZXIgLnNlcnZpY2UtaWNvbiB7XG4gICAgZm9udC1zaXplOiA5MHB4O1xuICAgIGJveC1zaGFkb3c6IDAgMCAyMHB4IC01cHggIzAwMDtcbn1cblxuLnNlcnZpY2VCb3ggLnRpdGxlIHtcbiAgICBjb2xvcjogI0ZGQTQyNTtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIG1hcmdpbjogMCAwIDEwcHg7XG59XG5cbi5zZXJ2aWNlQm94IC5kZXNjcmlwdGlvbiB7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBsaW5lLWhlaWdodDogMjhweDtcbiAgICBtYXJnaW46IDAgMCAyMHB4O1xufVxuXG4uc2VydmljZUJveCAucmVhZC1tb3JlIHtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBmb250LXNpemU6IDE3cHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBwYWRkaW5nOiA4cHggMTBweDtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4IDA7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHotaW5kZXg6IDE7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZSAwcztcbn1cblxuLnNlcnZpY2VCb3ggLnJlYWQtbW9yZTpob3ZlciB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4ICNmZmYgaW5zZXQ7XG4gICAgdGV4dC1zaGFkb3c6IDAgMCAycHggIzAwMDtcbn1cblxuLnNlcnZpY2VCb3ggLnJlYWQtbW9yZTpiZWZvcmUsXG4uc2VydmljZUJveCAucmVhZC1tb3JlOmFmdGVyIHtcbiAgICBjb250ZW50OiAnJztcbiAgICB3aWR0aDogNTAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjRkZBNDI1LCAjRkFDOTNDKTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogLTEwMCU7XG4gICAgdG9wOiAwO1xuICAgIHotaW5kZXg6IC0xO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UgMHM7XG59XG5cbi5zZXJ2aWNlQm94IC5yZWFkLW1vcmU6YWZ0ZXIge1xuICAgIGxlZnQ6IGF1dG87XG4gICAgcmlnaHQ6IC0xMDAlO1xufVxuXG4uc2VydmljZUJveDpob3ZlciAucmVhZC1tb3JlOmJlZm9yZSB7XG4gICAgbGVmdDogMDtcbn1cblxuLnNlcnZpY2VCb3g6aG92ZXIgLnJlYWQtbW9yZTphZnRlciB7XG4gICAgcmlnaHQ6IDA7XG59XG5cbi5zZXJ2aWNlQm94Lm9yYW5nZSAuc2VydmljZS1pY29uIHtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjRTU1OTI4LCAjRjM5NTIzKTtcbn1cblxuLnNlcnZpY2VCb3gub3JhbmdlIC50aXRsZSB7XG4gICAgY29sb3I6ICNFNTU5Mjg7XG59XG5cbi5zZXJ2aWNlQm94Lm9yYW5nZSAucmVhZC1tb3JlOmJlZm9yZSxcbi5zZXJ2aWNlQm94Lm9yYW5nZSAucmVhZC1tb3JlOmFmdGVyIHtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjRTU1OTI4LCAjRjM5NTIzKTtcbn1cblxuLnNlcnZpY2VCb3gucHVycGxlIC5zZXJ2aWNlLWljb24ge1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICNBMDRBODksICNFNjU4NDQpO1xufVxuXG4uc2VydmljZUJveC5wdXJwbGUgLnRpdGxlIHtcbiAgICBjb2xvcjogI0EwNEE4OTtcbn1cblxuLnNlcnZpY2VCb3gucHVycGxlIC5yZWFkLW1vcmU6YmVmb3JlLFxuLnNlcnZpY2VCb3gucHVycGxlIC5yZWFkLW1vcmU6YWZ0ZXIge1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICNBMDRBODksICNFNjU4NDQpO1xufVxuXG4uc2VydmljZUJveC5ibHVlIC5zZXJ2aWNlLWljb24ge1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICM1ODdFQkMsICM4RDREOTkpO1xufVxuXG4uc2VydmljZUJveC5ibHVlIC50aXRsZSB7XG4gICAgY29sb3I6ICM1ODdFQkM7XG59XG5cbi5zZXJ2aWNlQm94LmJsdWUgLnJlYWQtbW9yZTpiZWZvcmUsXG4uc2VydmljZUJveC5ibHVlIC5yZWFkLW1vcmU6YWZ0ZXIge1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICM1ODdFQkMsICM4RDREOTkpO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MHB4KSB7XG4gICAgLnNlcnZpY2VCb3gge1xuICAgICAgICBtYXJnaW46IDExMHB4IDAgMDtcbiAgICB9XG59XG5cblxuYTpob3ZlciwgYTpmb2N1cyB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIG91dGxpbmU6IG5vbmU7XG59XG5cbi52ZXJ0aWNhbC10YWIge1xuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcbiAgICBkaXNwbGF5OiB0YWJsZTtcbn1cblxuLnZlcnRpY2FsLXRhYiAubmF2LXRhYnMge1xuICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XG4gICAgd2lkdGg6IDI4JTtcbiAgICBtaW4td2lkdGg6IDI4JTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXJpZ2h0OiAzcHggc29saWQgIzA3OTk5MjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi52ZXJ0aWNhbC10YWIgLm5hdi10YWJzIGxpIHtcbiAgICBmbG9hdDogbm9uZTtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xufVxuXG4udmVydGljYWwtdGFiIC5uYXYtdGFicyBsaSBhIHtcbiAgICBjb2xvcjogIzYwNjA2MDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMmY2O1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICAgIHBhZGRpbmc6IDE1cHggMTVweDtcbiAgICBtYXJnaW46IDA7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHotaW5kZXg6IDE7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZSAwcztcbn1cblxuLnZlcnRpY2FsLXRhYiAubmF2LXRhYnMgbGkgYTpob3Zlcixcbi52ZXJ0aWNhbC10YWIgLm5hdi10YWJzIGxpLmFjdGl2ZSBhLFxuLnZlcnRpY2FsLXRhYiAubmF2LXRhYnMgbGkuYWN0aXZlIGE6aG92ZXIge1xuICAgIGNvbG9yOiAjMDc5OTkyO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgYm9yZGVyOiBub25lO1xufVxuXG4udmVydGljYWwtdGFiIC5uYXYtdGFicyBsaSBhOmJlZm9yZSxcbi52ZXJ0aWNhbC10YWIgLm5hdi10YWJzIGxpIGE6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIGhlaWdodDogMjBweDtcbiAgICB3aWR0aDogMjBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBib3gtc2hhZG93OiAwIDAgNXB4IHJnYmEoMCwgMCwgMCwgMC4zKSBpbnNldDtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKSByb3RhdGUoNDVkZWcpO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogLTEwcHg7XG4gICAgdG9wOiAxMDAlO1xuICAgIHotaW5kZXg6IC0xO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UgMHM7XG59XG5cbi52ZXJ0aWNhbC10YWIgLm5hdi10YWJzIGxpIGE6YWZ0ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwNzk5OTI7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGhlaWdodDogMTJweDtcbiAgICB3aWR0aDogMTJweDtcbiAgICByaWdodDogMTAwJTtcbiAgICB0b3A6IDUwJTtcbn1cblxuLnZlcnRpY2FsLXRhYiAubmF2LXRhYnMgbGkuYWN0aXZlIGE6YmVmb3JlLFxuLnZlcnRpY2FsLXRhYiAubmF2LXRhYnMgbGkgYTpob3ZlcjpiZWZvcmUge1xuICAgIHRvcDogNTAlO1xuICAgIG9wYWNpdHk6IDE7XG59XG5cbi52ZXJ0aWNhbC10YWIgLm5hdi10YWJzIGxpLmFjdGl2ZSBhOmFmdGVyLFxuLnZlcnRpY2FsLXRhYiAubmF2LXRhYnMgbGkgYTpob3ZlcjphZnRlciB7XG4gICAgcmlnaHQ6IC02cHg7XG4gICAgb3BhY2l0eTogMTtcbn1cblxuLnZlcnRpY2FsLXRhYiAudGFiLWNvbnRlbnQge1xuICAgIGNvbG9yOiAjNjA2MDYwO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICAgIGxpbmUtaGVpZ2h0OiAyM3B4O1xuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gICAgcGFkZGluZzogMTVweCAxNXB4IDE1cHggMzBweDtcbiAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xufVxuXG4udmVydGljYWwtdGFiIC50YWItY29udGVudCBoMyB7XG4gICAgY29sb3I6ICMwNzk5OTI7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIG1hcmdpbjogMCAwIDVweCAwO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ3OXB4KSB7XG4gICAgLnZlcnRpY2FsLXRhYiAubmF2LXRhYnMge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGJvcmRlci1yaWdodDogbm9uZTtcbiAgICB9XG5cbiAgICAudmVydGljYWwtdGFiIC5uYXYtdGFicyBsaSBhIHtcbiAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgbWFyZ2luOiAwIDAgMTBweDtcbiAgICB9XG5cbiAgICAudmVydGljYWwtdGFiIC50YWItY29udGVudCB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBwYWRkaW5nOiAyMHB4IDE1cHggNXB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAwIDAgMTBweCAxMHB4O1xuICAgIH1cblxuICAgIC52ZXJ0aWNhbC10YWIgLnRhYi1jb250ZW50IGgzIHtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgIH1cbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/modules/workgroup/workgroup-list/workgroup-list.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/modules/workgroup/workgroup-list/workgroup-list.component.ts ***!
  \******************************************************************************/
/*! exports provided: WorkgroupListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkgroupListComponent", function() { return WorkgroupListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _groupe_travail_groupe_travail_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../groupe-travail/groupe-travail.service */ "./src/app/modules/groupe-travail/groupe-travail.service.ts");




let WorkgroupListComponent = class WorkgroupListComponent {
    constructor(router, groupService) {
        this.router = router;
        this.groupService = groupService;
    }
    ngOnInit() {
        this.getEmployeInfo();
    }
    getEmployeInfo() {
        const employe = JSON.parse(localStorage.getItem('employe'));
        this.employe = employe;
        this.getMyGroups(this.employe);
    }
    getMyGroups(employe) {
        this.groupService.getMyGroup(employe.slug).subscribe((res) => {
            this.groups = res._embeded.groupes;
        });
    }
    getWorkGroup(slug) {
        this.router.navigate(['workgroups/' + slug]);
    }
};
WorkgroupListComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _groupe_travail_groupe_travail_service__WEBPACK_IMPORTED_MODULE_3__["GroupeTravailService"] }
];
WorkgroupListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-workgroup-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./workgroup-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/workgroup/workgroup-list/workgroup-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./workgroup-list.component.css */ "./src/app/modules/workgroup/workgroup-list/workgroup-list.component.css")).default]
    })
], WorkgroupListComponent);



/***/ }),

/***/ "./src/app/modules/workgroup/workgroup.component.css":
/*!***********************************************************!*\
  !*** ./src/app/modules/workgroup/workgroup.component.css ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvd29ya2dyb3VwL3dvcmtncm91cC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/workgroup/workgroup.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/modules/workgroup/workgroup.component.ts ***!
  \**********************************************************/
/*! exports provided: WorkgroupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkgroupComponent", function() { return WorkgroupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let WorkgroupComponent = class WorkgroupComponent {
    constructor() {
    }
    ngOnInit() {
    }
};
WorkgroupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-workgroup',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./workgroup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/workgroup/workgroup.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./workgroup.component.css */ "./src/app/modules/workgroup/workgroup.component.css")).default]
    })
], WorkgroupComponent);



/***/ }),

/***/ "./src/app/modules/workgroup/workgroup.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/modules/workgroup/workgroup.module.ts ***!
  \*******************************************************/
/*! exports provided: WorkgroupModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkgroupModule", function() { return WorkgroupModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _workgroup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./workgroup.component */ "./src/app/modules/workgroup/workgroup.component.ts");
/* harmony import */ var _workgroup_list_workgroup_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./workgroup-list/workgroup-list.component */ "./src/app/modules/workgroup/workgroup-list/workgroup-list.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _workgroup_routes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./workgroup.routes */ "./src/app/modules/workgroup/workgroup.routes.ts");
/* harmony import */ var _workgroup_item_dashboard_workgroup_item_dashboard_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./workgroup-item-dashboard/workgroup-item-dashboard.component */ "./src/app/modules/workgroup/workgroup-item-dashboard/workgroup-item-dashboard.component.ts");
/* harmony import */ var _card_card_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./card/card.component */ "./src/app/modules/workgroup/card/card.component.ts");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./list/list.component */ "./src/app/modules/workgroup/list/list.component.ts");










let WorkgroupModule = class WorkgroupModule {
};
WorkgroupModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_workgroup_component__WEBPACK_IMPORTED_MODULE_3__["WorkgroupComponent"], _workgroup_list_workgroup_list_component__WEBPACK_IMPORTED_MODULE_4__["WorkgroupListComponent"], _workgroup_item_dashboard_workgroup_item_dashboard_component__WEBPACK_IMPORTED_MODULE_7__["WorkgroupItemDashboardComponent"], _card_card_component__WEBPACK_IMPORTED_MODULE_8__["CardComponent"], _list_list_component__WEBPACK_IMPORTED_MODULE_9__["ListComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(_workgroup_routes__WEBPACK_IMPORTED_MODULE_6__["workGroupRoutes"])
        ]
    })
], WorkgroupModule);



/***/ }),

/***/ "./src/app/modules/workgroup/workgroup.routes.ts":
/*!*******************************************************!*\
  !*** ./src/app/modules/workgroup/workgroup.routes.ts ***!
  \*******************************************************/
/*! exports provided: workGroupRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "workGroupRoutes", function() { return workGroupRoutes; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _workgroup_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./workgroup.component */ "./src/app/modules/workgroup/workgroup.component.ts");
/* harmony import */ var _workgroup_list_workgroup_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./workgroup-list/workgroup-list.component */ "./src/app/modules/workgroup/workgroup-list/workgroup-list.component.ts");
/* harmony import */ var src_app_core_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/auth-guard */ "./src/app/core/auth-guard.ts");
/* harmony import */ var _workgroup_item_dashboard_workgroup_item_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./workgroup-item-dashboard/workgroup-item-dashboard.component */ "./src/app/modules/workgroup/workgroup-item-dashboard/workgroup-item-dashboard.component.ts");





const workGroupRoutes = [
    {
        path: '',
        component: _workgroup_component__WEBPACK_IMPORTED_MODULE_1__["WorkgroupComponent"],
        children: [
            { path: 'list', component: _workgroup_list_workgroup_list_component__WEBPACK_IMPORTED_MODULE_2__["WorkgroupListComponent"] },
            { path: ':slug', component: _workgroup_item_dashboard_workgroup_item_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["WorkgroupItemDashboardComponent"] },
        ],
        canActivate: [src_app_core_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    },
];


/***/ })

}]);
//# sourceMappingURL=modules-workgroup-workgroup-module-es2015.js.map