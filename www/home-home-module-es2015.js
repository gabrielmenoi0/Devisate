(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      Etec Antonio Devisate\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-img src=\"../../assets/img/log2019-1.png\"> \n    </ion-img>\n  <ion-grid>\n    <ion-row>\n      <ion-col size=\"7\">\n      <h1>\n          Histórico\n        </h1>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n        <ion-col >\n        <p style=\"text-align: justify;\">\n            O Ensino Profissional no Estado de São Paulo, teve início na década de 1940. A indústria apresentava um bom crescimento e por essa razão havia necessidade de mão de obra qualificada. Foi neste período que surgiram nas grandes cidades do Estado de São Paulo as primeiras Escolas Industriais, como: São Paulo, Campinas, Santos, Ribeirão Preto, Sorocaba, Piracicaba, Araraquara, Jau, etc.\n        </p>\n        <p style=\"text-align: justify;\">\n            Os alunos dessas Escolas tinham período integral de estudos, sendo que num período estudava-se o núcleo comum do Currículo escolar e no outro a parte profissionalizante. O ensino era de um currículo que atendia as necessidades da mão de obra procurada pela indústria, que assim sendo todos os alunos ao concluirem o curso tinham emprego garantido na indústria.\n        </p>\n        </ion-col>\n      </ion-row>\n  </ion-grid>\n  <ion-grid>\n      <ion-item-group>\n          <ion-item-divider>\n            <ion-label>Devisate sede</ion-label>\n          </ion-item-divider>\n          <ion-img src=\"../../assets/img/etec-marilia.jpg\"> \n          </ion-img>\n          <ion-item href=\"informatica\">\n            <ion-label >Etim Informática</ion-label>\n          </ion-item>\n          <ion-item href=\"ds\">\n            <ion-label>Etim Desenvolvimento de Sistemas</ion-label>\n          </ion-item>\n          <ion-item href=\"adm\">\n            <ion-label>Etim Administração</ion-label>\n          </ion-item>\n          <ion-item href=\"tecadm\">\n            <ion-label>Tecnico em Administração</ion-label>\n          </ion-item>\n          <ion-item href=\"st\">\n            <ion-label>Segurança do trabalho</ion-label>\n          </ion-item>\n          <ion-item href=\"contabilidade\">\n              <ion-label>Contabilidade</ion-label>\n            </ion-item>\n            <ion-item href=\"enfermagem\">\n                <ion-label>Enfermagem</ion-label>\n              </ion-item>\n          <ion-item href=\"tecds\">\n            <ion-label>Dessenvolvimento de Sistemas</ion-label>\n          </ion-item>\n        </ion-item-group>\n        \n        <ion-item-group>\n          <ion-item-divider>\n            <ion-label>Devisate Extensão</ion-label>\n          </ion-item-divider>\n          <ion-img src=\"../../assets/img/bicudo.png\"> \n          </ion-img>\n          <ion-item href=\"infonet\">\n            <ion-label>Informática para a internet</ion-label>\n          </ion-item>\n          <ion-item href=\"logistica\" >\n            <ion-label>Logistica</ion-label>\n          </ion-item>\n          <ion-item href=\"sj\">\n            <ion-label>Serviços Juridicos</ion-label>\n          </ion-item>\n        </ion-item-group>   \n  </ion-grid>\n</ion-content>\n<ion-footer>\n  <ion-toolbar>\n    <ion-title>\n      Tecnologias em Mobilidade\n    </ion-title>\n  </ion-toolbar>\n</ion-footer>"

/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");







let HomePageModule = class HomePageModule {
};
HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                {
                    path: '',
                    component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
                }
            ])
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
    })
], HomePageModule);



/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HomePage = class HomePage {
    constructor() { }
};
HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.page.html"),
        styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], HomePage);



/***/ })

}]);
//# sourceMappingURL=home-home-module-es2015.js.map