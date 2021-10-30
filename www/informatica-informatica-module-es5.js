(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["informatica-informatica-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/informatica/informatica.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/informatica/informatica.page.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Etim informatica</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-img src=\"../../assets/img/inf.jpg\"> \n</ion-img>\n<ion-content>\n  <ion-col >\n    <p style=\"text-align: justify;\">\n        Eixo Tecnológico: Informação e Comunicação\n    </p>\n    <p style=\"text-align: justify;\">\n        O técnico em Informática desenvolve e opera sistemas, aplicações e interfaces gráficas. Monta estruturas de banco de dados e codifica programas. Projeta, implanta e realiza manutenção de sistemas e aplicações. Seleciona recursos de trabalho, linguagens de programação, ferramentas e metodologias para o desenvolvimento de sistemas.\n    </p>\n<p style=\"text-align: justify;\">\n        Mercado de Trabalho: Instituições públicas, privadas e do terceiro setor que demandem sistemas computacionais, especialmente envolvendo programação de computadores.\n    </p>\n    <p>\n      Período: Integral<br>\n      Duração: 3 anos\n      </p>\n</ion-col>\n</ion-content>\n<ion-footer>\n    <ion-toolbar>\n      \n     <ion-button href=\"/\">\n      Voltar</ion-button>\n    </ion-toolbar>\n  </ion-footer>"

/***/ }),

/***/ "./src/app/informatica/informatica.module.ts":
/*!***************************************************!*\
  !*** ./src/app/informatica/informatica.module.ts ***!
  \***************************************************/
/*! exports provided: InformaticaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InformaticaPageModule", function() { return InformaticaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _informatica_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./informatica.page */ "./src/app/informatica/informatica.page.ts");







var routes = [
    {
        path: '',
        component: _informatica_page__WEBPACK_IMPORTED_MODULE_6__["InformaticaPage"]
    }
];
var InformaticaPageModule = /** @class */ (function () {
    function InformaticaPageModule() {
    }
    InformaticaPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_informatica_page__WEBPACK_IMPORTED_MODULE_6__["InformaticaPage"]]
        })
    ], InformaticaPageModule);
    return InformaticaPageModule;
}());



/***/ }),

/***/ "./src/app/informatica/informatica.page.scss":
/*!***************************************************!*\
  !*** ./src/app/informatica/informatica.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2luZm9ybWF0aWNhL2luZm9ybWF0aWNhLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/informatica/informatica.page.ts":
/*!*************************************************!*\
  !*** ./src/app/informatica/informatica.page.ts ***!
  \*************************************************/
/*! exports provided: InformaticaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InformaticaPage", function() { return InformaticaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var InformaticaPage = /** @class */ (function () {
    function InformaticaPage() {
    }
    InformaticaPage.prototype.ngOnInit = function () {
    };
    InformaticaPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-informatica',
            template: __webpack_require__(/*! raw-loader!./informatica.page.html */ "./node_modules/raw-loader/index.js!./src/app/informatica/informatica.page.html"),
            styles: [__webpack_require__(/*! ./informatica.page.scss */ "./src/app/informatica/informatica.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], InformaticaPage);
    return InformaticaPage;
}());



/***/ })

}]);
//# sourceMappingURL=informatica-informatica-module-es5.js.map