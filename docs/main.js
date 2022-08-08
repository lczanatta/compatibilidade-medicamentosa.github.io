(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Workspace\compatibilidade-medicamentosa.github.io\src\main.ts */"zUnb");


/***/ }),

/***/ "AytR":
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
const environment = {
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

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/core */ "FKr1");







function AppComponent_mat_option_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const medicine_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", medicine_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", medicine_r2.name, " ");
} }
function AppComponent_mat_option_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const medicine_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", medicine_r3.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", medicine_r3.name, " ");
} }
class AppComponent {
    constructor(fb) {
        this.fb = fb;
        this.title = 'compa-medica';
        this.medList = [
            { varName: 'acidofolinico', name: 'ácido folínico' },
            { varName: 'aciclovir', name: 'aciclovir' },
            { varName: 'acidotranexâmico', name: 'ácido tranexâmico' },
            { varName: 'adenosina', name: 'adenosina' },
            { varName: 'adrenalina', name: 'adrenalina' },
            { varName: 'albumina', name: 'albumina' },
            { varName: 'alteplase', name: 'alteplase' },
            { varName: 'amicacina', name: 'amicacina' },
            { varName: 'aminofilina', name: 'aminofilina' },
            { varName: 'amiodarona', name: 'amiodarona' },
            { varName: 'amoxicilinaclavulanato', name: 'amoxicilina-clavulanato' },
            { varName: 'ampicilina', name: 'ampicilina' },
            { varName: 'ampicilinasulbactam', name: 'ampicilina-sulbactam' },
            { varName: 'anfotericinaB', name: 'anfotericina B' },
            { varName: 'anidulafungina', name: 'anidulafungina' },
            { varName: 'atracurio', name: 'atracúrio' },
            { varName: 'atropina', name: 'atropina' },
            { varName: 'azitromicina', name: 'azitromicina' },
            { varName: 'azuldemetileno', name: 'azul de metileno' },
            { varName: 'bicarbonatodesódio', name: 'bicarbonato de sódio' },
            { varName: 'cefaLOTina', name: 'cefaLOTina' },
            { varName: 'ceFAZolina', name: 'ceFAZolina' },
            { varName: 'ceFEPima', name: 'ceFEPima' },
            { varName: 'cefoTAXima', name: 'cefoTAXima' },
            { varName: 'cefOXitina', name: 'cefOXitina' },
            { varName: 'cefTAZidima', name: 'cefTAZidima' },
            { varName: 'cefTRIAXona', name: 'cefTRIAXona' },
            { varName: 'cefUROxima', name: 'cefUROxima' },
            { varName: 'cetamina', name: 'cetamina' },
            { varName: 'cetoprofeno', name: 'cetoprofeno' },
            { varName: 'ciprofloxacino', name: 'ciprofloxacino' },
            { varName: 'clindamicina', name: 'clindamicina' },
            { varName: 'clonidina', name: 'clonidina' },
            { varName: 'cloretodecalcio', name: 'cloreto de cálcio (reposição de cálcio)' },
            { varName: 'cloretodepotassio', name: 'cloreto de potássio' },
            { varName: 'clorpromazina', name: 'clorpromazina' },
            { varName: 'dantroleno', name: 'dantroleno' },
            { varName: 'DESMopressina', name: 'DESMopressina' },
            { varName: 'dexametasona', name: 'dexametasona' },
            { varName: 'diazepam', name: 'diazepam' },
            { varName: 'dimenidratopiridoxina', name: 'dimenidrato-piridoxina' },
            { varName: 'dipirona', name: 'dipirona' },
            { varName: 'DOBUTamina', name: 'DOBUTamina' },
            { varName: 'DOPamina', name: 'DOPamina' },
            { varName: 'droperidol', name: 'droperidol' },
            { varName: 'esmolol', name: 'esmolol' },
            { varName: 'estreptomicina', name: 'estreptomicina' },
            { varName: 'fenitoina', name: 'fenitoína' },
            { varName: 'fenobarbital', name: 'fenobarbital' },
            { varName: 'fentanil', name: 'fentanil' },
            { varName: 'ferrocoloidal', name: 'ferro coloidal' },
            { varName: 'filgrastima', name: 'filgrastima' },
            { varName: 'fitomenadiona', name: 'fitomenadiona' },
            { varName: 'fluconazol', name: 'fluconazol' },
            { varName: 'flumazenil', name: 'flumazenil' },
            { varName: 'fosfatodepotassio', name: 'fosfato de potássio' },
            { varName: 'furosemida', name: 'furosemida' },
            { varName: 'ganciclovir', name: 'ganciclovir' },
            { varName: 'gentamicina', name: 'gentamicina' },
            { varName: 'gluconatodecalcio', name: 'gluconato de cálcio' },
            { varName: 'haloperidol', name: 'haloperidol' },
            { varName: 'heparina', name: 'heparina' },
            { varName: 'hidralazina', name: 'hidralazina' },
            { varName: 'hidrocortisona', name: 'hidrocortisona' },
            { varName: 'hioscina', name: 'hioscina' },
            { varName: 'imipenemcilastatina', name: 'imipenem-cilastatina' },
            { varName: 'insulinaregular', name: 'insulina regular' },
            { varName: 'lanatosideo', name: 'lanatosídeo' },
            { varName: 'levofloxacino', name: 'levofloxacino' },
            { varName: 'lidocaína', name: 'lidocaína' },
            { varName: 'linezolida', name: 'linezolida' },
            { varName: 'manitol', name: 'manitol' },
            { varName: 'meropenem', name: 'meropenem' },
            { varName: 'metilprednisolona', name: 'metilprednisolona' },
            { varName: 'metoclopramida', name: 'metoclopramida' },
            { varName: 'metoprolol', name: 'metoprolol' },
            { varName: 'metronidazol', name: 'metronidazol' },
            { varName: 'midazolam', name: 'midazolam' },
            { varName: 'milrinona', name: 'milrinona' },
            { varName: 'morfina', name: 'morfina' },
            { varName: 'naloxona', name: 'naloxona' },
            { varName: 'neostigmina', name: 'neostigmina' },
            { varName: 'nitroGLICERINA', name: 'nitroGLICERINA' },
            { varName: 'nitroPRUSSIATOdesódio', name: 'nitroPRUSSIATO de sódio' },
            { varName: 'noradrenalina', name: 'noradrenalina' },
            { varName: 'ocitocina', name: 'ocitocina' },
            { varName: 'octreotida', name: 'octreotida' },
            { varName: 'oligoelementos', name: 'oligoelementos' },
            { varName: 'omeprazol', name: 'omeprazol' },
            { varName: 'ondansetrona', name: 'ondansetrona' },
            { varName: 'oxacilina', name: 'oxacilina' },
            { varName: 'pamidronato', name: 'pamidronato' },
            { varName: 'pancurônio', name: 'pancurônio' },
            { varName: 'penicilinaGpotassica', name: 'penicilina G potássica' },
            { varName: 'piperacilinatazobactam', name: 'piperacilina-tazobactam' },
            { varName: 'polimixinaB', name: 'polimixina B' },
            { varName: 'polivitamínico', name: 'polivitamínico' },
            { varName: 'prometazina', name: 'prometazina' },
            { varName: 'propofol', name: 'propofol' },
            { varName: 'protamina', name: 'protamina' },
            { varName: 'ranitidina', name: 'ranitidina' },
            { varName: 'remifentanil', name: 'remifentanil' },
            { varName: 'ringerlactato', name: 'ringer lactato' },
            { varName: 'rocurônio', name: 'rocurônio' },
            { varName: 'salbutamol', name: 'salbutamol' },
            { varName: 'succinilcolina', name: 'succinilcolina' },
            { varName: 'sulfametoxazoltrimetoprima', name: 'sulfametoxazol-trimetoprima' },
            { varName: 'sulfatodemagnésio', name: 'sulfato de magnésio' },
            { varName: 'tiamina', name: 'tiamina' },
            { varName: 'tigeciclina', name: 'tigeciclina' },
            { varName: 'tiopental', name: 'tiopental' },
            { varName: 'tramadol', name: 'tramadol' },
            { varName: 'vancomicina', name: 'vancomicina' },
            { varName: 'VASopressina', name: 'VASopressina' },
            { varName: 'vitaminasdocomplexoB', name: 'vitaminas do complexo B' },
            { varName: 'voriconazol', name: 'voriconazol' },
            { varName: 'zidovudina', name: 'zidovudina' },
        ];
        this.medMap = new Map();
        this.form = this.fb.group({
            medicine1: this.fb.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
            medicine2: this.fb.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required])
        });
    }
    ngOnInit() {
        this.medMap.set('ácido folínicoXaciclovir', 'C');
        this.medMap.set('ácido folínicoXamicacina', 'C');
        this.medMap.set('ácido folínicoXaminofilina', 'C');
        this.medMap.set('ácido folínicoXamiodarona', 'I');
        this.medMap.set('ácido folínicoXampicilina', 'C');
        this.medMap.set('ácido folínicoXampicilina-sulbactam', 'C');
        this.medMap.set('ácido folínicoXanfotericina B', 'I');
        this.medMap.set('ácido folínicoXanidulafungina', 'C');
        this.medMap.set('ácido folínicoXatracúrio', 'C');
        this.medMap.set('ácido folínicoXazitromicina', 'C');
        this.medMap.set('ácido folínicoXbicarbonato de sódio', 'I');
        this.medMap.set('ácido folínicoXceFAZolina', 'C');
        this.medMap.set('ácido folínicoXceFEPima', 'C');
        this.medMap.set('ácido folínicoXcefoTAXima', 'C');
        this.medMap.set('ácido folínicoXcefOXitina', 'C');
        this.medMap.set('ácido folínicoXcefTAZidima', 'C');
        this.medMap.set('ácido folínicoXcefTRIAXona', 'I');
        this.medMap.set('ácido folínicoXcefUROxima', 'C');
        this.medMap.set('ácido folínicoXclindamicina', 'C');
        this.medMap.set('ácido folínicoXcloreto de cálcio', 'C');
        this.medMap.set('ácido folínicoXcloreto de potássio', 'C');
        this.medMap.set('ácido folínicoXclorpromazina', 'I');
        this.medMap.set('ácido folínicoXdantroleno', 'I');
        this.medMap.set('ácido folínicoXdexametasona', 'C');
        this.medMap.set('ácido folínicoXdiazepam', 'I');
        this.medMap.set('ácido folínicoXDOBUTamina', 'C');
        this.medMap.set('ácido folínicoXDOPamina', 'C');
        this.medMap.set('ácido folínicoXdroperidol', 'I');
        this.medMap.set('ácido folínicoXesmolol', 'C');
        this.medMap.set('ácido folínicoXfenitoína', 'I');
        this.medMap.set('ácido folínicoXfenobarbital', 'C');
        this.medMap.set('ácido folínicoXfentanil', 'C');
        this.medMap.set('ácido folínicoXfilgrastima', 'C');
        this.medMap.set('ácido folínicoXfluconazol', 'C');
        this.medMap.set('ácido folínicoXfosfato de potássio', 'I');
        this.medMap.set('ácido folínicoXfurosemida', 'C');
        this.medMap.set('ácido folínicoXganciclovir', 'C');
        this.medMap.set('ácido folínicoXgentamicina', 'C');
        this.medMap.set('ácido folínicoXgluconato de cálcio', 'C');
        this.medMap.set('ácido folínicoXhaloperidol', 'C');
        this.medMap.set('ácido folínicoXheparina', 'C');
        this.medMap.set('ácido folínicoXhidralazina', 'C');
        this.medMap.set('ácido folínicoXhidrocortisona', 'C');
        this.medMap.set('ácido folínicoXimipenem-cilastatina', 'C');
        this.medMap.set('ácido folínicoXinsulina regular', 'C');
        this.medMap.set('ácido folínicoXlevofloxacino', 'C');
        this.medMap.set('ácido folínicoXlidocaína', 'C');
        this.medMap.set('ácido folínicoXlinezolida', 'C');
        this.medMap.set('ácido folínicoXmanitol', 'C');
        this.medMap.set('ácido folínicoXmeropenem', 'C');
        this.medMap.set('ácido folínicoXmetilprednisolona', 'I');
        this.medMap.set('ácido folínicoXmetoclopramida', 'C');
        this.medMap.set('ácido folínicoXmetoprolol', 'C');
        this.medMap.set('ácido folínicoXmetronidazol', 'C');
        this.medMap.set('ácido folínicoXmidazolam', 'C');
        this.medMap.set('ácido folínicoXmilrinona', 'C');
        this.medMap.set('ácido folínicoXmorfina', 'C');
        this.medMap.set('ácido folínicoXnaloxona', 'I');
        this.medMap.set('ácido folínicoXnitroGLICERINA', 'C');
        this.medMap.set('ácido folínicoXnitroPRUSSIATO de sódio', 'C');
        this.medMap.set('ácido folínicoXnoradrenalina', 'C');
        this.medMap.set('ácido folínicoXocitocina', 'C');
        this.medMap.set('ácido folínicoXoctreotida', 'C');
        this.medMap.set('ácido folínicoXondansetrona', 'C');
        this.medMap.set('ácido folínicoXpamidronato', 'I');
        this.medMap.set('ácido folínicoXpancurônio', 'C');
        this.medMap.set('ácido folínicoXpiperacilina-tazobactam', 'C');
        this.medMap.set('ácido folínicoXpolimixina B', 'C');
        this.medMap.set('ácido folínicoXprometazina', 'C');
        this.medMap.set('ácido folínicoXranitidina', 'C');
        this.medMap.set('ácido folínicoXremifentanil', 'C');
        this.medMap.set('ácido folínicoXringer lactato', 'C');
        this.medMap.set('ácido folínicoXrocurônio', 'C');
        this.medMap.set('ácido folínicoXsuccinilcolina', 'C');
        this.medMap.set('ácido folínicoXsulfametoxazol-trimetoprima', 'C');
        this.medMap.set('ácido folínicoXsulfato de magnésio', 'C');
        this.medMap.set('ácido folínicoXtigeciclina', 'C');
        this.medMap.set('ácido folínicoXtiopental', 'I');
        this.medMap.set('ácido folínicoXvancomicina', 'I');
        this.medMap.set('ácido folínicoXVASopressina', 'C');
        this.medMap.set('ácido folínicoXvoriconazol', 'C');
        this.medMap.set('ácido folínicoXzidovudina', 'C');
        this.medMap.set('aciclovirXamicacina', 'C');
        this.medMap.set('aciclovirXaminofilina', 'C');
        this.medMap.set('aciclovirXamiodarona', 'I');
        this.medMap.set('aciclovirXampicilina', 'C');
        this.medMap.set('aciclovirXampicilina-sulbactam', 'I');
        this.medMap.set('aciclovirXanfotericina B', 'I');
        this.medMap.set('aciclovirXanidulafungina', 'C');
        this.medMap.set('aciclovirXatracúrio', 'C');
        this.medMap.set('aciclovirXazitromicina', 'C');
        this.medMap.set('aciclovirXbicarbonato de sódio', 'C');
        this.medMap.set('aciclovirXceFAZolina', 'C');
        this.medMap.set('aciclovirXceFEPima', 'I');
        this.medMap.set('aciclovirXcefoTAXima', 'C');
        this.medMap.set('aciclovirXcefOXitina', 'C');
        this.medMap.set('aciclovirXcefTAZidima', 'C');
        this.medMap.set('aciclovirXcefTRIAXona', 'C');
        this.medMap.set('aciclovirXcefUROxima', 'C');
        this.medMap.set('aciclovirXcetamina', 'I');
        this.medMap.set('aciclovirXciprofloxacino', 'I');
        this.medMap.set('aciclovirXclindamicina', 'C');
        this.medMap.set('aciclovirXcloreto de cálcio (reposição de cálcio)', 'C');
        this.medMap.set('aciclovirXcloreto de potássio', 'C');
        this.medMap.set('aciclovirXclorpromazina', 'I');
        this.medMap.set('aciclovirXdantroleno', 'C');
        this.medMap.set('aciclovirXdexametasona', 'C');
        this.medMap.set('aciclovirXdiazepam', 'I');
        this.medMap.set('aciclovirXDOBUTamina', 'I');
        this.medMap.set('aciclovirXDOPamina', 'I');
        this.medMap.set('aciclovirXdroperidol', 'V');
        this.medMap.set('aciclovirXesmolol', 'I');
        this.medMap.set('aciclovirXfenitoína', 'I');
        this.medMap.set('aciclovirXfenobarbital', 'C');
        this.medMap.set('aciclovirXfentanil', 'C');
        this.medMap.set('aciclovirXfilgrastima', 'C');
        this.medMap.set('aciclovirXfluconazol', 'C');
        this.medMap.set('aciclovirXfosfato de potássio', 'I');
        this.medMap.set('aciclovirXfurosemida', 'C');
        this.medMap.set('aciclovirXgentamicina', 'V');
        this.medMap.set('aciclovirXgluconato de cálcio', 'C');
        this.medMap.set('aciclovirXhaloperidol', 'I');
        this.medMap.set('aciclovirXheparina', 'C');
        this.medMap.set('aciclovirXhidralazina', 'I');
        this.medMap.set('aciclovirXhidrocortisona', 'C');
        this.medMap.set('aciclovirXimipenem-cilastatina', 'C');
        this.medMap.set('aciclovirXinsulina regular', 'C');
        this.medMap.set('aciclovirXlevofloxacino', 'I');
        this.medMap.set('aciclovirXlidocaína', 'I');
        this.medMap.set('aciclovirXlinezolida', 'C');
        this.medMap.set('aciclovirXmanitol', 'C');
        this.medMap.set('aciclovirXmetilprednisolona', 'C');
        this.medMap.set('aciclovirXmetoclopramida', 'I');
        this.medMap.set('aciclovirXmetoprolol', 'C');
        this.medMap.set('aciclovirXmetronidazol', 'C');
        this.medMap.set('aciclovirXmidazolam', 'I');
        this.medMap.set('aciclovirXmilrinona', 'C');
        this.medMap.set('aciclovirXnaloxona', 'V');
        this.medMap.set('aciclovirXnitroGLICERINA', 'C');
        this.medMap.set('aciclovirXnitroPRUSSIATO de sódio', 'I');
        this.medMap.set('aciclovirXocitocina', 'C');
        this.medMap.set('aciclovirXoctreotida', 'C');
        this.medMap.set('aciclovirXondansetrona', 'I');
        this.medMap.set('aciclovirXoxacilina', 'C');
        this.medMap.set('aciclovirXpamidronato', 'C');
        this.medMap.set('aciclovirXpancurônio', 'C');
        this.medMap.set('aciclovirXpenicilina G potássica', 'C');
        this.medMap.set('aciclovirXpiperacilina-tazobactam', 'I');
        this.medMap.set('aciclovirXpolimixina B', 'C');
        this.medMap.set('aciclovirXpolivitamínico', 'C');
        this.medMap.set('aciclovirXprometazina', 'I');
        this.medMap.set('aciclovirXpropofol', 'C');
        this.medMap.set('aciclovirXranitidina', 'C');
        this.medMap.set('aciclovirXremifentanil', 'C');
        this.medMap.set('aciclovirXringer lactato', 'C');
        this.medMap.set('aciclovirXrocurônio', 'C');
        this.medMap.set('aciclovirXsuccinilcolina', 'C');
        this.medMap.set('aciclovirXsulfametoxazol-trimetoprima', 'C');
        this.medMap.set('aciclovirXsulfato de magnésio', 'C');
        this.medMap.set('aciclovirXtigeciclina', 'C');
        this.medMap.set('aciclovirXtiopental', 'C');
        this.medMap.set('aciclovirXvancomicina', 'C');
        this.medMap.set('aciclovirXVASopressina', 'C');
        this.medMap.set('aciclovirXvoriconazol', 'C');
        this.medMap.set('aciclovirXzidovudina', 'C');
        this.medMap.set('ácido tranexâmicoXampicilina', 'I');
        this.medMap.set('ácido tranexâmicoXampicilina-sulbactam', 'I');
        this.medMap.set('ácido tranexâmicoXheparina', 'C');
        this.medMap.set('ácido tranexâmicoXlidocaína', 'C');
        this.medMap.set('ácido tranexâmicoXpenicilina G potássica', 'I');
        this.medMap.set('ácido tranexâmicoXpiperacilina-tazobactam', 'I');
        this.medMap.set('adenosinaXringer lactato', 'C');
        this.medMap.set('adrenalinaXlidocaína', 'C');
        this.medMap.set('adrenalinaXringer lactato', 'C');
    }
    medicamento1change(e) {
        var _a, _b;
        if (this.form.valid) {
            console.log((_a = this.form.get('medicine1')) === null || _a === void 0 ? void 0 : _a.value, (_b = this.form.get('medicine2')) === null || _b === void 0 ? void 0 : _b.value);
            const key = this.getKey();
            console.log(key);
            console.log(this.medMap.get(key));
        }
    }
    getKey() {
        var _a, _b;
        return ((_a = this.form.get('medicine1')) === null || _a === void 0 ? void 0 : _a.value) + 'X' + ((_b = this.form.get('medicine2')) === null || _b === void 0 ? void 0 : _b.value);
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 14, vars: 3, consts: [[1, "container"], [1, "row", 3, "formGroup"], [1, "col-md-6", "col-sm-12"], ["appearance", "fill"], ["formControlName", "medicine1", 3, "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "medicine2", 3, "selectionChange"], [3, "value"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Medicamento 1:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-select", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("selectionChange", function AppComponent_Template_mat_select_selectionChange_6_listener($event) { return ctx.medicamento1change($event.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, AppComponent_mat_option_7_Template, 2, 2, "mat-option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Medicamento 2:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "mat-select", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("selectionChange", function AppComponent_Template_mat_select_selectionChange_12_listener($event) { return ctx.medicamento1change($event.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, AppComponent_mat_option_13_Template, 2, 2, "mat-option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.medList);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.medList);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_3__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatOption"]], styles: [".container[_ngcontent-%COMP%] {\n  padding: 50px;\n}\n.container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtBQUNGO0FBQUU7RUFDRSxrQkFBQTtBQUVKIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xyXG4gIHBhZGRpbmc6IDUwcHg7XHJcbiAgLnJvdyB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG59Il19 */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "fXoL");









class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_6__["MatSelectModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_6__["MatSelectModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"]] }); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes),
        ], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map