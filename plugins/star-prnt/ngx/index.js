var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Injectable } from '@angular/core';
import { IonicNativePlugin, cordova } from '@ionic-native/core';
import { Observable } from 'rxjs';
/**
 * Emulation constants
 */
export var Emulation;
(function (Emulation) {
    /** mPOP, SM-L200, SM-L300, SM-S210i, SM-S220i, SM-S230i, SM-T300i/T300, SM-T400i */
    Emulation["StarPRNT"] = "StarPRNT";
    /** SM-L200, SM-L300 */
    Emulation["StarPRNTL"] = "StarPRNTL";
    /** FVP10, TSP650II, TSP700II, TSP800II */
    Emulation["StarLine"] = "StarLine";
    /** TSP100 */
    Emulation["StarGraphic"] = "StarGraphic";
    /** BSC10 */
    Emulation["EscPos"] = "EscPos";
    /** SM-S210i, SM-S220i, SM-S230i, SM-T300i/T300, SM-T400i */
    Emulation["EscPosMobile"] = "EscPosMobile";
    /** SP700 */
    Emulation["StarDotImpact"] = "StarDotImpact";
})(Emulation || (Emulation = {}));
/**
 * Encoding constants
 */
export var Encoding;
(function (Encoding) {
    /** English */
    Encoding["USASCII"] = "US-ASCII";
    /** French, German, Portuguese, Spanish */
    Encoding["Windows1252"] = "Windows-1252";
    /** Japanese */
    Encoding["ShiftJIS"] = "Shift-JIS";
    /** Russian */
    Encoding["Windows1251"] = "Windows-1251";
    /** Simplified Chinese */
    Encoding["GB2312"] = "GB2312";
    /** Traditional Chinese */
    Encoding["Big5"] = "Big5";
    /** UFT8 */
    Encoding["UTF8"] = "UTF-8";
})(Encoding || (Encoding = {}));
/**
 * CodePageType constants
 */
export var CodePageType;
(function (CodePageType) {
    CodePageType["CP737"] = "CP737";
    CodePageType["CP772"] = "CP772";
    CodePageType["CP774"] = "CP774";
    CodePageType["CP851"] = "CP851";
    CodePageType["CP852"] = "CP852";
    CodePageType["CP855"] = "CP855";
    CodePageType["CP857"] = "CP857";
    CodePageType["CP858"] = "CP858";
    CodePageType["CP860"] = "CP860";
    CodePageType["CP861"] = "CP861";
    CodePageType["CP862"] = "CP862";
    CodePageType["CP863"] = "CP863";
    CodePageType["CP864"] = "CP864";
    CodePageType["CP865"] = "CP865";
    CodePageType["CP869"] = "CP869";
    CodePageType["CP874"] = "CP874";
    CodePageType["CP928"] = "CP928";
    CodePageType["CP932"] = "CP932";
    CodePageType["CP999"] = "CP999";
    CodePageType["CP1001"] = "CP1001";
    CodePageType["CP1250"] = "CP1250";
    CodePageType["CP1251"] = "CP1251";
    CodePageType["CP1252"] = "CP1252";
    CodePageType["CP2001"] = "CP2001";
    CodePageType["CP3001"] = "CP3001";
    CodePageType["CP3002"] = "CP3002";
    CodePageType["CP3011"] = "CP3011";
    CodePageType["CP3012"] = "CP3012";
    CodePageType["CP3021"] = "CP3021";
    CodePageType["CP3041"] = "CP3041";
    CodePageType["CP3840"] = "CP3840";
    CodePageType["CP3841"] = "CP3841";
    CodePageType["CP3843"] = "CP3843";
    CodePageType["CP3845"] = "CP3845";
    CodePageType["CP3846"] = "CP3846";
    CodePageType["CP3847"] = "CP3847";
    CodePageType["CP3848"] = "CP3848";
    CodePageType["UTF8"] = "UTF8";
    CodePageType["Blank"] = "Blank";
})(CodePageType || (CodePageType = {}));
/**
 * InternationalType constants
 */
export var InternationalType;
(function (InternationalType) {
    InternationalType["UK"] = "UK";
    InternationalType["USA"] = "USA";
    InternationalType["France"] = "France";
    InternationalType["Germany"] = "Germany";
    InternationalType["Denmark"] = "Denmark";
    InternationalType["Sweden"] = "Sweden";
    InternationalType["Italy"] = "Italy";
    InternationalType["Spain"] = "Spain";
    InternationalType["Japan"] = "Japan";
    InternationalType["Norway"] = "Norway";
    InternationalType["Denmark2"] = "Denmark2";
    InternationalType["Spain2"] = "Spain2";
    InternationalType["LatinAmerica"] = "LatinAmerica";
    InternationalType["Korea"] = "Korea";
    InternationalType["Ireland"] = "Ireland";
    InternationalType["Legal"] = "Legal";
})(InternationalType || (InternationalType = {}));
/**
 * FontStyleType constants.
 */
export var FontStyleType;
(function (FontStyleType) {
    /** Font-A (12 x 24 dots) / Specify 7 x 9 font (half dots) */
    FontStyleType["A"] = "A";
    /** Font-B (9 x 24 dots) / Specify 5 x 9 font (2P-1) */
    FontStyleType["B"] = "B";
})(FontStyleType || (FontStyleType = {}));
/**
 * CutPaperAction constants.
 */
export var CutPaperAction;
(function (CutPaperAction) {
    CutPaperAction["FullCut"] = "FullCut";
    CutPaperAction["FullCutWithFeed"] = "FullCutWithFeed";
    CutPaperAction["PartialCut"] = "PartialCut";
    CutPaperAction["PartialCutWithFeed"] = "PartialCutWithFeed";
})(CutPaperAction || (CutPaperAction = {}));
/**
 * BlackMarkType constants.
 */
export var BlackMarkType;
(function (BlackMarkType) {
    BlackMarkType["Valid"] = "Valid";
    BlackMarkType["Invalid"] = "Invalid";
    BlackMarkType["ValidWithDetection"] = "ValidWithDetection";
})(BlackMarkType || (BlackMarkType = {}));
/**
 * LogoSize constants
 */
export var LogoSize;
(function (LogoSize) {
    LogoSize["Normal"] = "Normal";
    LogoSize["DoubleWidth"] = "DoubleWidth";
    LogoSize["DoubleHeight"] = "DoubleHeight";
    LogoSize["DoubleWidthDoubleHeight"] = "DoubleWidthDoubleHeight";
})(LogoSize || (LogoSize = {}));
/**
 * AlignmentPosition constants
 */
export var AlignmentPosition;
(function (AlignmentPosition) {
    AlignmentPosition["Left"] = "Left";
    AlignmentPosition["Center"] = "Center";
    AlignmentPosition["Right"] = "Right";
})(AlignmentPosition || (AlignmentPosition = {}));
/**
 * BarcodeSymbology constants
 */
export var BarcodeSymbology;
(function (BarcodeSymbology) {
    BarcodeSymbology["Code128"] = "Code128";
    BarcodeSymbology["Code39"] = "Code39";
    BarcodeSymbology["Code93"] = "Code93";
    BarcodeSymbology["ITF"] = "ITF";
    BarcodeSymbology["JAN8"] = "JAN8";
    BarcodeSymbology["JAN13"] = "JAN13";
    BarcodeSymbology["NW7"] = "NW7";
    BarcodeSymbology["UPCA"] = "UPCA";
    BarcodeSymbology["UPCE"] = "UPCE";
})(BarcodeSymbology || (BarcodeSymbology = {}));
/**
 * BarcodeWidth constants
 */
export var BarcodeWidth;
(function (BarcodeWidth) {
    BarcodeWidth["Mode1"] = "Mode1";
    BarcodeWidth["Mode2"] = "Mode2";
    BarcodeWidth["Mode3"] = "Mode3";
    BarcodeWidth["Mode4"] = "Mode4";
    BarcodeWidth["Mode5"] = "Mode5";
    BarcodeWidth["Mode6"] = "Mode6";
    BarcodeWidth["Mode7"] = "Mode7";
    BarcodeWidth["Mode8"] = "Mode8";
    BarcodeWidth["Mode9"] = "Mode9";
})(BarcodeWidth || (BarcodeWidth = {}));
/**
 * QrCodeModel constants
 */
export var QrCodeModel;
(function (QrCodeModel) {
    QrCodeModel["No1"] = "No1";
    QrCodeModel["No2"] = "No2";
})(QrCodeModel || (QrCodeModel = {}));
/**
 * QrCodeLevel constants
 */
export var QrCodeLevel;
(function (QrCodeLevel) {
    QrCodeLevel["H"] = "H";
    QrCodeLevel["L"] = "L";
    QrCodeLevel["M"] = "M";
    QrCodeLevel["Q"] = "Q";
})(QrCodeLevel || (QrCodeLevel = {}));
/**
 * BitmapConverterRotation constants
 */
export var BitmapConverterRotation;
(function (BitmapConverterRotation) {
    BitmapConverterRotation["Normal"] = "Normal";
    BitmapConverterRotation["Left90"] = "Left90";
    BitmapConverterRotation["Right90"] = "Right90";
    BitmapConverterRotation["Rotate180"] = "Rotate180";
})(BitmapConverterRotation || (BitmapConverterRotation = {}));
var StarPRNT = /** @class */ (function (_super) {
    __extends(StarPRNT, _super);
    function StarPRNT() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Constant for Emulation
         */
        _this.Emulation = {
            StarPRNT: 'StarPRNT',
            StarPRNTL: 'StarPRNTL',
            StarLine: 'StarLine',
            StarGraphic: 'StarGraphic',
            EscPos: 'EscPos',
            EscPosMobile: 'EscPosMobile',
            StarDotImpact: 'StarDotImpact'
        };
        /**
         * Constant for possible Encoding
         */
        _this.Encoding = {
            USASCII: 'US-ASCII',
            Windows1252: 'Windows-1252',
            ShiftJIS: 'Shift-JIS',
            Windows1251: 'Windows-1251',
            GB2312: 'GB2312',
            Big5: 'Big5',
            UTF8: 'UTF-8'
        };
        /**
         * CodePageType constants
         */
        _this.CodePageType = {
            CP737: 'CP737',
            CP772: 'CP772',
            CP774: 'CP774',
            CP851: 'CP851',
            CP852: 'CP852',
            CP855: 'CP855',
            CP857: 'CP857',
            CP858: 'CP858',
            CP860: 'CP860',
            CP861: 'CP861',
            CP862: 'CP862',
            CP863: 'CP863',
            CP864: 'CP864',
            CP865: 'CP865',
            CP869: 'CP869',
            CP874: 'CP874',
            CP928: 'CP928',
            CP932: 'CP932',
            CP999: 'CP999',
            CP1001: 'CP1001',
            CP1250: 'CP1250',
            CP1251: 'CP1251',
            CP1252: 'CP1252',
            CP2001: 'CP2001',
            CP3001: 'CP3001',
            CP3002: 'CP3002',
            CP3011: 'CP3011',
            CP3012: 'CP3012',
            CP3021: 'CP3021',
            CP3041: 'CP3041',
            CP3840: 'CP3840',
            CP3841: 'CP3841',
            CP3843: 'CP3843',
            CP3845: 'CP3845',
            CP3846: 'CP3846',
            CP3847: 'CP3847',
            CP3848: 'CP3848',
            UTF8: 'UTF8',
            Blank: 'Blank'
        };
        /**
         * Constant for possible InternationalType
         */
        _this.InternationalType = {
            UK: 'UK',
            USA: 'USA',
            France: 'France',
            Germany: 'Germany',
            Denmark: 'Denmark',
            Sweden: 'Sweden',
            Italy: 'Italy',
            Spain: 'Spain',
            Japan: 'Japan',
            Norway: 'Norway',
            Denmark2: 'Denmark2',
            Spain2: 'Spain2',
            LatinAmerica: 'LatinAmerica',
            Korea: 'Korea',
            Ireland: 'Ireland',
            Legal: 'Legal'
        };
        /**
         * Constant for possible FontStyleType
         */
        _this.FontStyleType = {
            /** Font-A (12 x 24 dots) / Specify 7 x 9 font (half dots) */
            A: 'A',
            /** Font-B (9 x 24 dots) / Specify 5 x 9 font (2P-1) */
            B: 'B'
        };
        /**
         * Constant for possible CutPaperAction
         */
        _this.CutPaperAction = {
            FullCut: 'FullCut',
            FullCutWithFeed: 'FullCutWithFeed',
            PartialCut: 'PartialCut',
            PartialCutWithFeed: 'PartialCutWithFeed'
        };
        /**
         * Constant for possible BlackMarkType
         */
        _this.BlackMarkType = {
            Valid: 'Valid',
            Invalid: 'Invalid',
            ValidWithDetection: 'ValidWithDetection'
        };
        /**
         * Constant for possible AlignmentPosition
         */
        _this.AlignmentPosition = {
            Left: 'Left',
            Center: 'Center',
            Right: 'Right'
        };
        /**
         * Constant for possible LogoSize
         */
        _this.LogoSize = {
            Normal: 'Normal',
            DoubleWidth: 'DoubleWidth',
            DoubleHeight: 'DoubleHeight',
            DoubleWidthDoubleHeight: 'DoubleWidthDoubleHeight'
        };
        /**
         * Constant for possible BarcodeSymbology
         */
        _this.BarcodeSymbology = {
            Code128: 'Code128',
            Code39: 'Code39',
            Code93: 'Code93',
            ITF: 'ITF',
            JAN8: 'JAN8',
            JAN13: 'JAN13',
            NW7: 'NW7',
            UPCA: 'UPCA',
            UPCE: 'UPCE'
        };
        /**
         * Constant for possible BarcodeWidth
         */
        _this.BarcodeWidth = {
            Mode1: 'Mode1',
            Mode2: 'Mode2',
            Mode3: 'Mode3',
            Mode4: 'Mode4',
            Mode5: 'Mode5',
            Mode6: 'Mode6',
            Mode7: 'Mode7',
            Mode8: 'Mode8',
            Mode9: 'Mode9'
        };
        /**
         * Constant for possible QrCodeModel
         */
        _this.QrCodeModel = {
            No1: 'No1',
            No2: 'No2'
        };
        /**
         * Constant for possible QrCodeLevel
         */
        _this.QrCodeLevel = {
            H: 'H',
            L: 'L',
            M: 'M',
            Q: 'Q'
        };
        /**
         * Constant for possible BitmapConverterRotation
         */
        _this.BitmapConverterRotation = {
            Normal: 'Normal',
            Left90: 'Left90',
            Right90: 'Right90',
            Rotate180: 'Rotate180'
        };
        return _this;
    }
    StarPRNT.prototype.portDiscovery = function (type) { return cordova(this, "portDiscovery", {}, arguments); };
    StarPRNT.prototype.checkStatus = function (port, emulation) { return cordova(this, "checkStatus", {}, arguments); };
    StarPRNT.prototype.printRawText = function (port, emulation, printObj) { return cordova(this, "printRawText", {}, arguments); };
    StarPRNT.prototype.printRasterReceipt = function (port, emulation, rasterObj) { return cordova(this, "printRasterReceipt", {}, arguments); };
    StarPRNT.prototype.printImage = function (port, emulation, imageObj) { return cordova(this, "printImage", {}, arguments); };
    StarPRNT.prototype.openCashDrawer = function (port, emulation) { return cordova(this, "openCashDrawer", {}, arguments); };
    StarPRNT.prototype.print = function (port, emulation, commandsArray) { return cordova(this, "print", {}, arguments); };
    StarPRNT.prototype.connect = function (port, emulation, hasBarcodeReader) { return cordova(this, "connect", { "observable": true, "callbackStyle": "node" }, arguments); };
    StarPRNT.prototype.getStatus = function () { return cordova(this, "getStatus", { "eventObservable": true, "event": "starPrntData" }, arguments); };
    StarPRNT.prototype.disconnect = function () { return cordova(this, "disconnect", {}, arguments); };
    StarPRNT.pluginName = "StarPRNT";
    StarPRNT.plugin = "cordova-plugin-starprnt";
    StarPRNT.pluginRef = "starprnt";
    StarPRNT.repo = "https://github.com/auctifera-josed/starprnt";
    StarPRNT.platforms = ["Android", "iOS"];
    StarPRNT = __decorate([
        Injectable()
    ], StarPRNT);
    return StarPRNT;
}(IonicNativePlugin));
export { StarPRNT };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL3N0YXItcHJudC9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyw4QkFBc0MsTUFBTSxvQkFBb0IsQ0FBQztBQUN4RSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBa1psQzs7R0FFRztBQUNILE1BQU0sQ0FBTixJQUFZLFNBZVg7QUFmRCxXQUFZLFNBQVM7SUFDbkIsb0ZBQW9GO0lBQ3BGLGtDQUFxQixDQUFBO0lBQ3JCLHVCQUF1QjtJQUN2QixvQ0FBdUIsQ0FBQTtJQUN2QiwwQ0FBMEM7SUFDMUMsa0NBQXFCLENBQUE7SUFDckIsYUFBYTtJQUNiLHdDQUEyQixDQUFBO0lBQzNCLFlBQVk7SUFDWiw4QkFBaUIsQ0FBQTtJQUNqQiw0REFBNEQ7SUFDNUQsMENBQTZCLENBQUE7SUFDN0IsWUFBWTtJQUNaLDRDQUErQixDQUFBO0FBQ2pDLENBQUMsRUFmVyxTQUFTLEtBQVQsU0FBUyxRQWVwQjtBQUVEOztHQUVHO0FBQ0gsTUFBTSxDQUFOLElBQVksUUFlWDtBQWZELFdBQVksUUFBUTtJQUNsQixjQUFjO0lBQ2QsZ0NBQW9CLENBQUE7SUFDcEIsMENBQTBDO0lBQzFDLHdDQUE0QixDQUFBO0lBQzVCLGVBQWU7SUFDZixrQ0FBc0IsQ0FBQTtJQUN0QixjQUFjO0lBQ2Qsd0NBQTRCLENBQUE7SUFDNUIseUJBQXlCO0lBQ3pCLDZCQUFpQixDQUFBO0lBQ2pCLDBCQUEwQjtJQUMxQix5QkFBYSxDQUFBO0lBQ2IsV0FBVztJQUNYLDBCQUFjLENBQUE7QUFDaEIsQ0FBQyxFQWZXLFFBQVEsS0FBUixRQUFRLFFBZW5CO0FBRUQ7O0dBRUc7QUFDSCxNQUFNLENBQU4sSUFB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QUNWLEdBQUcsRUFBRSxLQUFLO1NBQ1gsQ0FBQztRQUVGOztXQUVHO1FBQ0gsaUJBQVcsR0FBRztZQUNaLENBQUMsRUFBRSxHQUFHO1lBQ04sQ0FBQyxFQUFFLEdBQUc7WUFDTixDQUFDLEVBQUUsR0FBRztZQUNOLENBQUMsRUFBRSxHQUFHO1NBQ1AsQ0FBQztRQUVGOztXQUVHO1FBQ0gsNkJBQXVCLEdBQUc7WUFDeEIsTUFBTSxFQUFFLFFBQVE7WUFDaEIsTUFBTSxFQUFFLFFBQVE7WUFDaEIsT0FBTyxFQUFFLFNBQVM7WUFDbEIsU0FBUyxFQUFFLFdBQVc7U0FDdkIsQ0FBQzs7O0lBUUYsZ0NBQWEsYUFBQyxJQUFZO0lBVzFCLDhCQUFXLGFBQUMsSUFBWSxFQUFFLFNBQWlCO0lBWTNDLCtCQUFZLGFBQ1YsSUFBWSxFQUNaLFNBQWlCLEVBQ2pCLFFBQWtCO0lBYXBCLHFDQUFrQixhQUNoQixJQUFZLEVBQ1osU0FBaUIsRUFDakIsU0FBb0I7SUFhdEIsNkJBQVUsYUFDUixJQUFZLEVBQ1osU0FBaUIsRUFDakIsUUFBa0I7SUFZcEIsaUNBQWMsYUFBQyxJQUFZLEVBQUUsU0FBaUI7SUFZOUMsd0JBQUssYUFDSCxJQUFZLEVBQ1osU0FBaUIsRUFDakIsYUFBNEI7SUFlOUIsMEJBQU8sYUFDTCxJQUFZLEVBQ1osU0FBaUIsRUFDakIsZ0JBQXlCO0lBYTNCLDRCQUFTO0lBVVQsNkJBQVU7Ozs7OztJQTVVQyxRQUFRO1FBRHBCLFVBQVUsRUFBRTtPQUNBLFFBQVE7bUJBM29CckI7RUEyb0I4QixpQkFBaUI7U0FBbEMsUUFBUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmRvdmEsIElvbmljTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFByaW50ZXIge1xuICAvKipcbiAgICogUHJpbnRlciBtb2RlbCBuYW1lIGFuZCBtb2RlbCBudW1iZXJcbiAgICovXG4gIG1vZGVsTmFtZT86IHN0cmluZztcblxuICAvKipcbiAgICogUHJpbnRlciBNYWMgQWRkcmVzc1xuICAgKi9cbiAgbWFjQWRkcmVzcz86IHN0cmluZztcblxuICAvKipcbiAgICogUHJpbnRlciBwb3J0IG5hbWUgdXNlZCB0byBjcmVhdGUgYSBuZXcgcG9ydCBpbnN0YW5jZSBvZiBTTVBvcnQgb3IgU3RhcklPRXh0TWFuYWdlclxuICAgKi9cbiAgcG9ydE5hbWU/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBVU0IgU2VyaWFsIE51bWJlciAoVVNCIFByaW50ZXJzIE9ubHkpXG4gICAqL1xuICBVU0JTZXJpYWxOdW1iZXI/OiBzdHJpbmc7XG59XG4vKipcbiAqIEFycmF5IG9mIFByaW50ZXIgb2JqZWN0cyByZXR1cm5lZCBieSB0aGUgcG9ydERpc2NvdmVyeSgpIGZ1bmN0aW9uXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUHJpbnRlcnMgZXh0ZW5kcyBBcnJheTxQcmludGVyPiB7fVxuXG5leHBvcnQgaW50ZXJmYWNlIFByaW50ZXJTdGF0dXMge1xuICAvKipcbiAgICogUHJpbnRlciBPbmxpbmUvT2ZmbGluZSBzdGF0dXNcbiAgICovXG4gIG9mZmxpbmU/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiAgUHJpbnRlciBtb2RlbCBuYW1lIGFuZCBtb2RlbCBudW1iZXJcbiAgICovXG4gIE1vZGVsTmFtZT86IHN0cmluZztcblxuICAvKipcbiAgICogUHJpbnRlciBjb3ZlciBzdGF0dXNcbiAgICovXG4gIGNvdmVyT3Blbj86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIFByaW50ZXIgUGFwZXIgQ3V0dGVyIHN0YXR1c1xuICAgKi9cbiAgY3V0dGVyRXJyb3I/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBQcmludGVyIFBhcGVyIHN0YXR1c1xuICAgKi9cbiAgcmVjZWlwdFBhcGVyRW1wdHk/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBQcmludGVyIEZpcm13YXJlIGluZm9ybWF0aW9uXG4gICAqL1xuICBGaXJtd2FyZVZlcnNpb24/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUHJpbnRPYmoge1xuICAvKipcbiAgICogc3RyaW5nIGNvbnRhaW5pbmcgdGhlIHRleHQgdG8gcHJpbnQsIEV4YW1wbGU6IFwiU3RhciBDbG90aGluZyBCb3V0aXF1ZVxcbjEyMyBTdGFyIFJvYWRcXG5DaXR5LCBTdGF0ZSAxMjM0NVxcblxcblwiXG4gICAqL1xuICB0ZXh0OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqICBTZW5kcyBhIFBhcnRpYWxDdXRXaXRoRmVlZCBjb21tYW5kIHRvIHRoZSBwcmludGVyLCBkZWZhdWx0cyB0byB0cnVlXG4gICAqL1xuICBjdXRSZWNlaXB0PzogYm9vbGVhbjtcblxuICAvKipcbiAgICogc2VuZHMgYSBhcHBlbmRQZXJpcGhlcmFsIGNvbW1hbmQgdG8gdGhlIHByaW50ZXIgZm9yIGNoYW5uZWxzIE5vMSBhbmQgTm8yIC0gRGVmYXVsdHMgdG8gdHJ1ZVxuICAgKi9cbiAgb3BlbkNhc2hEcmF3ZXI/OiBib29sZWFuO1xufVxuZXhwb3J0IGludGVyZmFjZSBSYXN0ZXJPYmogZXh0ZW5kcyBQcmludE9iaiB7XG4gIC8qKlxuICAgKiBGb250IHNpemUgbnVtYmVyLCBkZWZhdWx0cyB0byAyNVxuICAgKi9cbiAgZm9udFNpemU/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIFBhcGVyIHdpZHRoIChVbml0czogRG90cykuIDIgaW5jaGVzOiAzODQsIDMgaW5jaGVzOiA1NzYsIDQgaW5jaGVzOiA4MzIsIEVTQ1BvcyAzIGluY2hlczogNTEyLCBEb3QgMyBpbmNoZXM6IDIxMC4gRGVmYXVsdHMgdG8gNTc2XG4gICAqL1xuICBwYXBlcldpZHRoPzogbnVtYmVyO1xufVxuZXhwb3J0IGludGVyZmFjZSBJbWFnZU9iaiB7XG4gIC8qKlxuICAgKiBJbWFnZSBVUkkgdG8gcHJpbnQsIHRoaXMgY2FuIGJlIG9idGFpbmVkIHZpYSB0aGUgY2FtZXJhIG9yIHBob3RvIGxpYnJhcnkgb3IgYXMgYSBzdGF0aWMgcmVzb3VyY2Ugc2F2ZWQgb24gdGhlIHBob25lIG1lbW9yeVxuICAgKi9cbiAgdXJpOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIEltYWdlIHdpZHRoIChVbml0czogRG90cykgZGVmYXVsdHMgdG8gNTc2XG4gICAqL1xuICBwYXBlcldpZHRoPzogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiAgU2VuZHMgYSBQYXJ0aWFsQ3V0V2l0aEZlZWQgY29tbWFuZCB0byB0aGUgcHJpbnRlciwgZGVmYXVsdHMgdG8gdHJ1ZVxuICAgKi9cbiAgY3V0UmVjZWlwdD86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIHNlbmRzIGEgYXBwZW5kUGVyaXBoZXJhbCBjb21tYW5kIHRvIHRoZSBwcmludGVyIGZvciBjaGFubmVscyBObzEgYW5kIE5vMiAtIERlZmF1bHRzIHRvIHRydWVcbiAgICovXG4gIG9wZW5DYXNoRHJhd2VyPzogYm9vbGVhbjtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgUHJpbnRDb21tYW5kIHtcbiAgLyoqXG4gICAqIENoYXJhY3RoZXIgZW5jb2RpbmcgaXMgdXNlZCB0byBnZXRCeXRlIGRhdGEgZnJvbSBhbGwgc3Vic2VxdWVudCBjb21tYW5kcy4gRGVmYXVsdCAnVVMtQVNDSUknXG4gICAqIENob29zZSB0aGUgZm9ybWF0IG9mIHRoZSByZXR1cm4gdmFsdWUgRGVmaW5lZCBpbiBTdGFyUFJOVC5FbmNvZGluZyBvciB0aGUgRW5jb2RpbmcgZW51bS5cbiAgICogRXhhbXBsZToge2FwcGVuZEVuY29kaW5nOidVUy1BU0NJSSd9XG4gICAqL1xuICBhcHBlbmRFbmNvZGluZz86IHN0cmluZztcblxuICAvKipcbiAgICogU2VsZWN0IGNvbW1hbmQgb2YgdGhlIGNvZGUgcGFnZSBpcyBnZW5lcmF0ZWQgYW5kIGFkZGVkIHRvIHRoZSBjb21tYW5kcyBwcm9wZXJ0eS5cbiAgICogQ2hvb3NlIHRoZSBmb3JtYXQgb2YgdGhlIHJldHVybiB2YWx1ZSBEZWZpbmVkIGluIFN0YXJQUk5ULkNvZGVQYWdlVHlwZSBvciB0aGUgQ29kZVBhZ2VUeXBlIGVudW0uXG4gICAqIEV4YW1wbGU6IHthcHBlbmRDb2RlUGFnZTonQ1A4NTgnfVxuICAgKi9cbiAgYXBwZW5kQ29kZVBhZ2U/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIERhdGEgKFRleHQpIGlzIGFkZGVkIHRvIHRoZSBjb21tYW5kIGJ1ZmZlci4gRXhhbXBsZToge2FwcGVuZDpcIlN0YXIgQ2xvdGhpbmcgQm91dGlxdWVcXG4xMjMgU3RhciBSb2FkXFxuQ2l0eSwgU3RhdGUgMTIzNDVcXG5cXG5cIn1cbiAgICovXG4gIGFwcGVuZD86IHN0cmluZztcblxuICAvKipcbiAgICogRGF0YSAoVGV4dCkgaXMgYWRkZWQgdG8gdGhlIGNvbW1hbmQgYnVmZmVyLiBFeGFtcGxlOiB7YXBwZW5kUmF3OlwiU3RhciBDbG90aGluZyBCb3V0aXF1ZVxcbjEyMyBTdGFyIFJvYWRcXG5DaXR5LCBTdGF0ZSAxMjM0NVxcblxcblwifVxuICAgKi9cbiAgYXBwZW5kUmF3Pzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBEYXRhIChDb21tYW5kKSBpcyBhZGRlZCB0byB0aGUgY29tbWFuZCBidWZmZXIuIFRha2VzIGFuIGFycmF5IG9mIGJ5dGVzLlxuICAgKiBFeGFtcGxlOiB7YXBwZW5kQnl0ZXM6WzB4NDgsIDB4NjUsIDB4NmMsIDB4NmMsIDB4NmYsIDB4MjAsIDB4NTcsIDB4NmYsIDB4NzIsIDB4NmMsIDB4NjQsIDB4MmVdfVxuICAgKi9cbiAgYXBwZW5kQnl0ZXM/OiBudW1iZXJbXTtcblxuICAvKipcbiAgICogRGF0YSAoQ29tbWFuZCkgaXMgYWRkZWQgdG8gdGhlIGNvbW1hbmQgYnVmZmVyLiBUYWtlcyBhbiBhcnJheSBvZiBieXRlcy5cbiAgICogRXhhbXBsZToge2FwcGVuZFJhd0J5dGVzOlsweDQ4LCAweDY1LCAweDZjLCAweDZjLCAweDZmLCAweDIwLCAweDU3LCAweDZmLCAweDcyLCAweDZjLCAweDY0LCAweDJlXX1cbiAgICovXG4gIGFwcGVuZFJhd0J5dGVzPzogbnVtYmVyW107XG5cbiAgLyoqXG4gICAqIFNldCBjb21tYW5kIG9mIHRoZSBjaGFyYWN0ZXIgc3BhY2UgaXMgZ2VuZXJhdGVkIGFuZCBhZGRlZCB0byB0aGUgY29tbWFuZCBidWZmZXIuIENoYXJhY3RlciBTcGFjcyAoVW5pdDogRG90cykgRXhhbXBsZTogNFxuICAgKi9cbiAgYXBwZW5kQ2hhcmFjdGVyU3BhY2U/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqICBTZWxlY3QgY29tbWFuZCBvZiB0aGUgZW1waGFzaXMgbW9kZSBpcyBnZW5lcmF0ZWQgYW5kIGFkZGVkIHRvIHRoZSBjb21tYW5kIGJ1ZmZlci4gRXhhbXBsZToge2FwcGVuZEVtcGhhc2lzOlwiU0FMRVxcblwifVxuICAgKi9cbiAgYXBwZW5kRW1waGFzaXM/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqICBFbmFibGUgZW1waGFzaXMgbW9kZSBpcyBnZW5lcmF0ZWQgYW5kIGFkZGVkIHRvIHRoZSBjb21tYW5kIGJ1ZmZlci4gRXhhbXBsZToge2VuYWJsZUVtcGhhc2lzOnRydWV9XG4gICAqL1xuICBlbmFibGVFbXBoYXNpcz86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqICBTZWxlY3QgY29tbWFuZCBvZiB0aGUgaW52ZXJ0IG1vZGUgaXMgZ2VuZXJhdGVkIGFuZCBhZGRlZCB0byB0aGUgY29tbWFuZCBidWZmZXIuIEV4YW1wbGU6IHthcHBlbmRJbnZlcnQ6XCJSZWZ1bmRzIGFuZCBFeGNoYW5nZXNcXG5cIn1cbiAgICovXG4gIGFwcGVuZEludmVydD86IHN0cmluZztcbiAgLyoqXG4gICAqICBFbmFibGUgaW52ZXJ0IG1vZGUgaXMgZ2VuZXJhdGVkIGFuZCBhZGRlZCB0byB0aGUgY29tbWFuZCBidWZmZXIuIEV4YW1wbGU6IHtlbmFibGVJbnZlcnQ6dHJ1ZX1cbiAgICovXG4gIGVuYWJsZUludmVydD86IGJvb2xlYW47XG4gIC8qKlxuICAgKiAgU2VsZWN0IGNvbW1hbmQgb2YgdGhlIHVuZGVyIGxpbmUgbW9kZSBpcyBnZW5lcmF0ZWQgYW5kIGFkZGVkIHRvIHRoZSBjb21tYW5kIGJ1ZmZlci4gRXhhbXBsZToge2FwcGVuZFVuZGVybGluZTpcIjMwIGRheXNcIn1cbiAgICovXG4gIGFwcGVuZFVuZGVybGluZT86IHN0cmluZztcbiAgLyoqXG4gICAqICBFbmFibGUgdW5kZXIgbGluZSBtb2RlIGlzIGdlbmVyYXRlZCBhbmQgYWRkZWQgdG8gdGhlIGNvbW1hbmQgYnVmZmVyLiBFeGFtcGxlOiB7ZW5hYmxlVW5kZXJsaW5lOnRydWV9XG4gICAqL1xuICBlbmFibGVVbmRlcmxpbmU/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBTZWxlY3QgY29tbWFuZCBvZiB0aGUgaW50ZXJuYXRpb25hbCBjaGFyYWN0ZXIgbW9kZSBpcyBnZW5lcmF0ZWQgYW5kIGFkZGVkIHRvIHRoZSBjb21tYW5kIGJ1ZmZlci5cbiAgICogQ2hvb3NlIHRoZSBmb3JtYXQgb2YgdGhlIHJldHVybiB2YWx1ZSBEZWZpbmVkIGluIFN0YXJQUk5ULkludGVybmF0aW9uYWxUeXBlIG9yIHRoZSBJbnRlcm5hdGlvbmFsVHlwZSBlbnVtLlxuICAgKiAnVUsnIHwgJ1VTQScgfCAnRnJhbmNlJyB8ICdHZXJtYW55JyB8ICdEZW5tYXJrJyB8ICdTd2VkZW4nIHwgJ0l0YWx5JyB8ICdTcGFpbicgfCAnSmFwYW4nIHwgJ05vcndheScgfCAnRGVubWFyazInIHwgJ1NwYWluMicgfCAnTGF0aW5BbWVyaWNhJyB8ICdLb3JlYScgfCAnSXJlbGFuZCcgfCAnTGVnYWwnXG4gICAqIEV4YW1wbGUge2FwcGVuZEludGVybmF0aW9uYWw6SW50ZXJuYXRpb25hbFR5cGUuVUt9XG4gICAqL1xuICBhcHBlbmRJbnRlcm5hdGlvbmFsPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBMaW5lIGZlZWQgY29tbWFuZCBpcyBnZW5lcmF0ZWQgYW5kIGFkZGVkIHRvIHRoZSBjb21tYW5kIGJ1ZmZlci4gUGFwZXIgZmVlZCB1bml0cyAoVW5pdHM6IExpbmVzKSBFeGFtcGxlOiAyXG4gICAqL1xuICBhcHBlbmRMaW5lRmVlZD86IG51bWJlcjtcblxuICAvKipcbiAgICogVW5pdCBmZWVkIGNvbW1hbmQgaXMgZ2VuZXJhdGVkIGFuZCBhZGRlZCB0byB0aGUgY29tbWFuZCBidWZmZXIuIFBhcGVyIGZlZWQgdW5pdHMgKFVuaXRzOiBEb3RzKSBFeGFtcGxlOiA2NFxuICAgKi9cbiAgYXBwZW5kVW5pdEZlZWQ/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIFNldCBjb21tYW5kIG9mIHRoZSBsaW5lIHNwYWNlIGlzIGdlbmVyYXRlZCBhbmQgYWRkZWQgdG8gdGhlIGNvbW1hbmQgYnVmZmVyLiBMaW5lIHNwYWNlcyAoVW5pdHM6IERvdHMpIEV4YW1wbGU6IDMyXG4gICAqL1xuICBhcHBlbmRMaW5lU3BhY2U/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIFNlbGVjdCBjb21tYW5kIG9mIHRoZSBmb250IHN0eWxlIGlzIGdlbmVyYXRlZCBhbmQgYWRkZWQgdG8gdGhlIGNvbW1hbmQgYnVmZmVyLlxuICAgKiBDaG9vc2UgdGhlIGZvcm1hdCBvZiB0aGUgcmV0dXJuIHZhbHVlIGRlZmluZWQgaW4gU3RhclBSTlQuRm9udFN0eWxlVHlwZSBvciB0aGUgRm9udFN0eWxlVHlwZSBlbnVtLiAnQScgfCAnQidcbiAgICogRXhhbXBsZToge2FwcGVuZEZvbnRTdHlsZTpGb250U3R5bGVUeXBlLkF9XG4gICAqL1xuICBhcHBlbmRGb250U3R5bGU/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFBhcGVyIGN1dCBjb21tYW5kIGlzIGdlbmVyYXRlZCBhbmQgYWRkZWQgdG8gdGhlIGNvbW1hbmQgYnVmZmVyLlxuICAgKiBDaG9vc2UgdGhlIGZvcm1hdCBvZiB0aGUgcmV0dXJuIHZhbHVlIGRlZmluZWQgaW4gU3RhclBSTlQuQ3V0UGFwZXJBY3Rpb24gb3IgdGhlIEN1dFBhcGVyQWN0aW9uIGVudW0uICdGdWxsQ3V0JyB8ICdGdWxsQ3V0V2l0aEZlZWQnIHwgJ1BhcnRpYWxDdXQnIHwgJ1BhcnRpYWxDdXRXaXRoRmVlZCdcbiAgICogRXhhbXBsZToge2FwcGVuZEN1dFBhcGVyOkN1dFBhcGVyQWN0aW9uLlBhcnRpYWxDdXRXaXRoRmVlZH1cbiAgICovXG4gIGFwcGVuZEN1dFBhcGVyPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBCbGFjayBtYXJrIGNvbW1hbmQgaXMgZ2VuZXJhdGVkIGFuZCBhZGRlZCB0byB0aGUgY29tbWFuZCBidWZmZXIuXG4gICAqIENob29zZSB0aGUgZm9ybWF0IG9mIHRoZSByZXR1cm4gdmFsdWUgZGVmaW5lZCBpbiBTdGFyUFJOVC5CbGFja01hcmtUeXBlIG9yIHRoZSBCbGFja01hcmtUeXBlIGVudW0uICdWYWxpZCcgfCAnSW52YWxpZCcgfCAnVmFsaWRXaXRoRGV0ZWN0aW9uJ1xuICAgKiBFeGFtcGxlOiB7YXBwZW5kQmxhY2tNYXJrOiBCbGFja01hcmtUeXBlLlZhbGlkfVxuICAgKi9cbiAgYXBwZW5kQmxhY2tNYXJrPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBBYnNvbHV0ZSBwb3NpdGlvbiBjb21tYW5kIGlzIGdlbmVyYXRlZCBhbmQgYWRkZWQgdG8gdGhlIGNvbW1hbmQgYnVmZmVyLiAoVW5pdDogRG90cykuIFNlbmQgaW4gY29uanVuY3Rpb24gd2l0aCB0aGUgZGF0YSBwcm9wZXJ0eSB0byBhcHBlbmQgYWJzb2x1dGUgcG9zaXRpb24ganVzdCB0byB0aGF0IHN0cmluZ1xuICAgKiBFeGFtcGxlMTogQXBwZW5kIGRhdGEgd2l0aCBBYnNvbHV0ZSBwb3NpdGlvbiB7YXBwZW5kQWJzb2x1dGVQb3NpdGlvbjo0MCwgZGF0YTogXCJUZXh0IHdpdGggYWJzb2x1dGUgcG9zaXRpb25cIn1cbiAgICogRXhhbXBsZTI6IEFwcGVuZCBhYnNvbHV0ZSBwb3NpdGlvbiB0byBzdWJzZXF1ZW50IGNvbW1hbmRzOiB7YXBwZW5kQWJzb2x1dGVQb3NpdGlvbjo0MH1cbiAgICovXG4gIGFwcGVuZEFic29sdXRlUG9zaXRpb24/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIEFsaWdubWVudCBjb21tYW5kIGlzIGdlbmVyYXRlZCBhbmQgYWRkZWQgdG8gdGhlIGNvbW1hbmQgYnVmZmVyLiBTZW5kIGluIGNvbmp1bmN0aW9uIHdpdGggdGhlIGRhdGEgcHJvcGVydHkgdG8gYXBwZW5kIGFsaWdubWVudCBwb3NpdGlvbiBqdXN0IHRvIHRoYXQgc3RyaW5nXG4gICAqIENob29zZSB0aGUgZm9ybWF0IG9mIHRoZSByZXR1cm4gdmFsdWUgZGVmaW5lZCBpbiBTdGFyUFJOVC5BbGlnbm1lbnRQb3NpdGlvbiBvciB0aGUgQWxpZ25tZW50UG9zaXRpb24gZW51bS4gJ0xlZnQnIHwgJ0NlbnRlcicgfCAnUmlnaHQnLlxuICAgKiBFeGFtcGxlMSBBcHBlbmQgZGF0YSB3aXRoIEFsaWdubWVudCBwb3NpdGlvbjoge2FwcGVuZEFsaWdubWVudDpBbGlnbm1lbnRQb3NpdGlvbi5DZW50ZXIsIGRhdGE6IFwiVGV4dCB3aXRoIGNlbnRlcmVkIHBvc2l0aW9uXCJ9XG4gICAqIEV4YW1wbGUyIEFwcGVuZCBhYnNvbHV0ZSBwb3NpdGlvbiB0byBzdWJzZXF1ZW50IGNvbW1hbmRzOiB7YXBwZW5kQWxpZ25tZW50OkFsaWdubWVudFBvc2l0aW9uLkNlbnRlcn1cbiAgICovXG4gIGFwcGVuZEFsaWdubWVudD86IHN0cmluZztcblxuICAvKipcbiAgICogSG9yaXpvbnRhbCB0YWIgc2V0L2NsZWFyIGNvbW1hbmQgaXMgZ2VuZXJhdGVkIGFuZCBhZGRlZCB0byB0aGUgY29tbWFuZCBidWZmZXIuIChPbmx5IHdvcmtzIGZvciBjZXJ0YWluIHByaW50ZXIgbW9kZWxzLCBjaGVjayB0aGUgc3RhclNESyBkb2N1bWVudGF0aW9uIGZvciBkZXRhaWxzKVxuICAgKiBBcnJheSBvZiBob3Jpem9udGFsIHRhYiBwb3NpdGlvbnMgKFVuaXRzOiBBTksgY2hhcmFjdGVyIHBpdGNoKS4gU3BlY2lmeWluZyBlbXB0eSBhcnJheSBkZWxldGVzIGFsbCBjdXJyZW50bHkgc2V0IGhvcml6b250YWwgdGFiIHBvc2l0aW9ucy5cbiAgICogRXhhbXBsZToge2FwcGVuZEhvcml6b250YWxUYWJQb3NpdGlvbjpbMTUsIDM1XX1cbiAgICogRGVsZXRlIHBvc2l0aW9ucyBFeGFtcGxlOiB7YXBwZW5kSG9yaXpvbnRhbFRhYlBvc2l0aW9uOltdfVxuICAgKi9cbiAgYXBwZW5kSG9yaXpvbnRhbFRhYlBvc2l0aW9uPzogbnVtYmVyW107XG5cbiAgLyoqXG4gICAqIFByaW50IGNvbW1hbmQgb2YgdGhlIGxvZ28gaXMgZ2VuZXJhdGVkIGFuZCBhZGRlZCB0byB0aGUgY29tbWFuZCBidWZmZXIuIFRoZSBsb2dvIGhhcyB0byBiZSB1cGxvYWRlZCB0byB0aGUgcHJpbnRlciB1c2luZyB0aGUgU3RhciBQcmludCB1dGlsaXR5LlxuICAgKiBTZW5kIGluIGNvbmp1Y3Rpb24gd2l0aCB0aGUgbG9nb1NpemUgcHJvcGVydHkgdG8gc2V0IHRoZSBsb2dvIHNpemVcbiAgICogRXhhbXBsZToge2FwcGVuZExvZ286MX1cbiAgICogRXhhbXBsZSB3aXRoIExvZ29TaXplOiB7YXBwZW5kTG9nbzoxLCBsb2dvU2l6ZTpMb2dvU2l6ZS5Eb3VibGVXaWR0aERvdWJsZUhlaWdodH1cbiAgICovXG4gIGFwcGVuZExvZ28/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIFByb3BlcnR5IHRvIGJlIHVzZWQgd2l0aCB0aGUgYXBwZW5kTG9nbyBjb21tYW5kLlxuICAgKiBDaG9vc2UgdGhlIGZvcm1hdCBvZiB0aGUgcmV0dXJuIHZhbHVlIGRlZmluZWQgaW4gU3RhclBSTlQuTG9nb1NpemUgb3IgdGhlIExvZ29TaXplIGVudW0uICdOb3JtYWwnIHwgJ0RvdWJsZVdpZHRoJyB8ICdEb3VibGVIZWlnaHQnIHwgJ0RvdWJsZVdpZHRoRG91YmxlSGVpZ2h0JztcbiAgICogRXhhbXBsZToge2FwcGVuZExvZ286MSwgbG9nb1NpemU6TG9nb1NpemUuRG91YmxlV2lkdGhEb3VibGVIZWlnaHR9XG4gICAqL1xuICBsb2dvU2l6ZT86IHN0cmluZztcblxuICAvKipcbiAgICogUHJpbnQgY29tbWFuZCBvZiB0aGUgYmFyY29kZSBpcyBnZW5lcmF0ZWQgYW5kIGFkZGVkIHRvIHRoZSBjb21tYW5kIGJ1ZmZlci5cbiAgICogQWRkaXRpb25hbCBQcm9wZXJ0aWVzOiBCYXJjb2RlU3ltYm9sb2d5LCBCYXJjb2RlV2lkdGgsIGhlaWdodCwgaHJpLCBhYnNvbHV0ZVBvc2l0aW9uLCBhbGlnbm1lbnQuXG4gICAqIEV4YW1wbGU6IHthcHBlbmRCYXJjb2RlOlwie0JTdGFyXCIsIEJhcmNvZGVTeW1ib2xvZ3k6QmFyY29kZVN5bWJvbG9neS5Db2RlMTI4LCBCYXJjb2RlV2lkdGg6QmFyY29kZVdpZHRoLk1vZGUyLCBoZWlnaHQ6NDAsIGhyaTp0cnVlIH1cbiAgICogRXhhbXBsZSB3aXRoIGFic29sdXRlUG9zaXRpb246IHthcHBlbmRCYXJjb2RlOlwie0JTdGFyXCIsIEJhcmNvZGVTeW1ib2xvZ3k6QmFyY29kZVN5bWJvbG9neS5Db2RlMTI4LCBCYXJjb2RlV2lkdGg6QmFyY29kZVdpZHRoLk1vZGUyLCBoZWlnaHQ6NDAsIGhyaTp0cnVlLCBhYnNvbHV0ZVBvc2l0aW9uOjQwIH1cbiAgICogRXhhbXBsZSB3aXRoIGFsaWdubWVudDp7YXBwZW5kQmFyY29kZTpcIntCU3RhclwiLCBCYXJjb2RlU3ltYm9sb2d5OkJhcmNvZGVTeW1ib2xvZ3kuQ29kZTEyOCwgQmFyY29kZVdpZHRoOkJhcmNvZGVXaWR0aC5Nb2RlMiwgaGVpZ2h0OjQwLCBocmk6dHJ1ZSwgYWxpZ25tZW50OmFsaWdubWVudDpBbGlnbm1lbnRQb3NpdGlvbi5DZW50ZXIgfVxuICAgKi9cbiAgYXBwZW5kQmFyY29kZT86IHN0cmluZztcblxuICAvKipcbiAgICogUHJvcGVydHkgdG8gYmUgdXNlZCB3aXRoIHRoZSBhcHBlbmRCYXJjb2RlIGNvbW1hbmQuXG4gICAqIENob29zZSB0aGUgZm9ybWF0IG9mIHRoZSByZXR1cm4gdmFsdWUgZGVmaW5lZCBpbiBTdGFyUFJOVC5CYXJjb2RlU3ltYm9sb2d5IG9yIHRoZSBCYXJjb2RlU3ltYm9sb2d5IGVudW0uXG4gICAqICdDb2RlMTI4JyB8ICdDb2RlMzknIHwgJ0NvZGU5MycgfCAnSVRGJyB8ICdKQU44JyB8ICdKQU4xMycgfCAnTlc3JyB8ICdVUENBJyB8ICdVUENFJyB8XG4gICAqIEV4YW1wbGU6IHthcHBlbmRCYXJjb2RlOid7QlN0YXInLCBCYXJjb2RlU3ltYm9sb2d5OkJhcmNvZGVTeW1ib2xvZ3kuQ29kZTEyOH1cbiAgICovXG4gIEJhcmNvZGVTeW1ib2xvZ3k/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFByb3BlcnR5IHRvIGJlIHVzZWQgd2l0aCB0aGUgYXBwZW5kQmFyY29kZSBjb21tYW5kLlxuICAgKiBDaG9vc2UgdGhlIGZvcm1hdCBvZiB0aGUgcmV0dXJuIHZhbHVlIGRlZmluZWQgaW4gU3RhclBSTlQuQmFyY29kZVdpZHRoIG9yIHRoZSBCYXJjb2RlV2lkdGggZW51bS5cbiAgICogTW9kZTEgfCBNb2RlMiB8IE1vZGUzIHwgTW9kZTQgfCBNb2RlNSB8IE1vZGU2IHwgTW9kZTcgfCBNb2RlOCB8IE1vZGU5XG4gICAqIEV4YW1wbGU6IHthcHBlbmRCYXJjb2RlOid7QlN0YXInLCBCYXJjb2RlV2lkdGg6QmFyY29kZVdpZHRoLk1vZGUyfVxuICAgKi9cbiAgQmFyY29kZVdpZHRoPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBQcm9wZXJ0eSB0byBiZSB1c2VkIHdpdGggdGhlIGFwcGVuZEJhcmNvZGUgY29tbWFuZC5cbiAgICogVW5kZXItYmFyIGNoYXJhY3RlcnMuIHRydWUgPSBWYWxpZCwgZmFsc2UgPSBJbnZhbGlkXG4gICAqIEV4YW1wbGU6IHthcHBlbmRCYXJjb2RlOid7QlN0YXInLCBocmk6dHJ1ZX1cbiAgICovXG4gIGhyaT86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIFByb3BlcnR5IHRvIGJlIHVzZWQgd2l0aCB0aGUgYXBwZW5kQmFyY29kZSBjb21tYW5kIG9yIHRoZSBhcHBlbmRNdWx0aXBsZSBjb21tYW5kIChVbml0czpEb3RzKVxuICAgKiBhcHBlbmRCYXJjb2RlIEV4YW1wbGU6IHthcHBlbmRCYXJjb2RlOid7QlN0YXInLCBoZWlnaHQ6NDB9XG4gICAqIGFwcGVuZE11bHRpcGxlOiB7YXBwZW5kTXVsdGlwbGU6J3RleHQgdG8gcHJpbnQnLCBoZWlnaHQ6NDB9XG4gICAqL1xuICBoZWlnaHQ/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIFByb3BlcnR5IHRvIGJlIHVzZWQgd2l0aCB0aGUgYXBwZW5kQml0bWFwIGNvbW1hbmQgb3IgdGhlIGFwcGVuZE11bHRpcGxlIGNvbW1hbmQgKFVuaXRzOkRvdHMpXG4gICAqIGFwcGVuZEJpdG1hcCBFeGFtcGxlOiB7YXBwZW5kQml0bWFwOnVyaSwgd2lkdGg6NTc2fVxuICAgKiBhcHBlbmRNdWx0aXBsZToge2FwcGVuZE11bHRpcGxlOid0ZXh0IHRvIHByaW50Jywgd2lkdGg6NDB9XG4gICAqL1xuICB3aWR0aD86IG51bWJlcjtcblxuICAvKipcbiAgICogUHJvcGVydHkgdG8gYmUgdXNlZCB3aXRoIHRoZSBhcHBlbmRCaXRtYXAgY29tbWFuZCwgdGhlIGFwcGVuZEJhcmNvZGUgY29tbWFuZCwgb3IgdGhlIGFwcGVuZFFyQ29kZSBjb21tYW5kIChVbml0czpEb3RzKVxuICAgKiBhcHBlbmRCaXRtYXAgRXhhbXBsZToge2FwcGVuZEJpdG1hcDp1cmksIGFic29sdXRlUG9zaXRpb246NDB9LlxuICAgKiBhcHBlbmRCYXJjb2RlIEV4YW1wbGU6IHthcHBlbmRCYXJjb2RlOid7QlN0YXInLCBhYnNvbHV0ZVBvc2l0aW9uOjQwfS5cbiAgICogYXBwZW5kUXJDb2RlIEV4YW1wbGU6IHthcHBlbmRRckNvZGU6J3tCU3RhcicsIGFic29sdXRlUG9zaXRpb246NDB9LlxuICAgKi9cbiAgYWJzb2x1dGVQb3NpdGlvbj86IG51bWJlcjtcblxuICAvKipcbiAgICogUHJvcGVydHkgdG8gYmUgdXNlZCB3aXRoIHRoZSBhcHBlbmRCaXRtYXAgY29tbWFuZCwgdGhlIGFwcGVuZEJhcmNvZGUgY29tbWFuZCwgb3IgdGhlIGFwcGVuZFFyQ29kZSBjb21tYW5kIChVbml0czpEb3RzKVxuICAgKiBDaG9vc2UgdGhlIGZvcm1hdCBvZiB0aGUgcmV0dXJuIHZhbHVlIGRlZmluZWQgaW4gU3RhclBSTlQuQWxpZ25tZW50UG9zaXRpb24gb3IgdGhlIEFsaWdubWVudFBvc2l0aW9uIGVudW0uICdMZWZ0JyB8ICdDZW50ZXInIHwgJ1JpZ2h0Jy5cbiAgICogYXBwZW5kQml0bWFwIEV4YW1wbGU6IHthcHBlbmRCaXRtYXA6dXJpLCBhbGlnbm1lbnQ6QWxpZ25tZW50UG9zaXRpb24uQ2VudGVyfS5cbiAgICogYXBwZW5kQmFyY29kZSBFeGFtcGxlOiB7YXBwZW5kQmFyY29kZTone0JTdGFyJywgYWxpZ25tZW50OkFsaWdubWVudFBvc2l0aW9uLkNlbnRlcn0uXG4gICAqIGFwcGVuZFFyQ29kZSBFeGFtcGxlOiB7YXBwZW5kUXJDb2RlOid7QlN0YXInLCBhbGlnbm1lbnQ6QWxpZ25tZW50UG9zaXRpb24uQ2VudGVyfS5cbiAgICovXG4gIGFsaWdubWVudD86IHN0cmluZztcblxuICAvKipcbiAgICogU2VsZWN0IGNvbW1hbmQgb2YgdGhlIG11bHRpcGxlIG1vZGUgaXMgZ2VuZXJhdGVkIGFuZCBhZGRlZCB0byB0aGUgY29tbWFuZCBidWZmZXIuXG4gICAqIEFkZGl0aW9uYWwgcHJvcGVydGllczogd2lkdGg6bnVtYmVyLCBoZWlnaHQ6bnVtYmVyXG4gICAqIEV4YW1wbGU6IHthcHBlbmRNdWx0aXBsZTpcIiAgICQxNTYuOTVcXG5cIiwgd2lkdGg6MiwgaGVpZ2h0OjJ9LlxuICAgKi9cbiAgYXBwZW5kTXVsdGlwbGU/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIEVuYWJsZSBtdWx0aXBsZSBtb2RlIGlzIGdlbmVyYXRlZCBhbmQgYWRkZWQgdG8gdGhlIGNvbW1hbmQgYnVmZmVyLlxuICAgKiBBZGRpdGlvbmFsIHByb3BlcnRpZXM6IHdpZHRoOm51bWJlciwgaGVpZ2h0Om51bWJlclxuICAgKiBFeGFtcGxlOiB7ZW5hYmxlTXVsdGlwbGU6dHJ1ZSwgd2lkdGg6MiwgaGVpZ2h0OjJ9XG4gICAqIERpc2FibGUgRXhhbXBsZToge2VuYWJsZU11bHRpcGxlOmZhbHNlfVxuICAgKi9cbiAgZW5hYmxlTXVsdGlwbGU/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBQcmludCBjb21tYW5kIG9mIHRoZSBRUiBjb2RlIGlzIGdlbmVyYXRlZCBhbmQgYWRkZWQgdG8gdGhlIGNvbW1hbmQgYnVmZmVyLlxuICAgKiBBZGRpdGlvbmFsIFByb3BlcnRpZXM6IFFyQ29kZU1vZGVsLCBRckNvZGVMZXZlbCwgY2VsbCwgYWJzb2x1dGVQb3NpdGlvbiwgYWxpZ25tZW50LlxuICAgKiBFeGFtcGxlOiB7YXBwZW5kUXJDb2RlOlwie0JTdGFyXCIsIFFyQ29kZU1vZGVsOlwiTm8yXCIsIFFyQ29kZUxldmVsOlwiTFwiLCBjZWxsOiA4fS5cbiAgICogRXhhbXBsZSB3aXRoIGFic29sdXRlUG9zaXRpb246IHthcHBlbmRRckNvZGU6XCJ7QlN0YXJcIiwgUXJDb2RlTW9kZWw6XCJObzJcIiwgUXJDb2RlTGV2ZWw6XCJMXCIsIGNlbGw6IDgsIGFic29sdXRlUG9zaXRpb246IDQwIH0uXG4gICAqIEV4YW1wbGUgd2l0aCBhbGlnbm1lbnQ6IHthcHBlbmRRckNvZGU6XCJ7QlN0YXJcIiwgUXJDb2RlTW9kZWw6XCJObzJcIiwgUXJDb2RlTGV2ZWw6XCJMXCIsIGNlbGw6IDgsIGFsaWdubWVudDpcIkNlbnRlclwiIH0uXG4gICAqL1xuICBhcHBlbmRRckNvZGU/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFByb3BlcnR5IHRvIGJlIHVzZWQgd2l0aCB0aGUgYXBwZW5kUXJDb2RlIGNvbW1hbmQuXG4gICAqIENob29zZSB0aGUgZm9ybWF0IG9mIHRoZSByZXR1cm4gdmFsdWUgZGVmaW5lZCBpbiBTdGFyUFJOVC5RckNvZGVNb2RlbCBvciB0aGUgUXJDb2RlTW9kZWwgZW51bS4gJ05vMScgfCAnTm8yJyBEZWZhdWx0ICdObzInXG4gICAqIEV4YW1wbGU6IHthcHBlbmRRckNvZGU6J3tCU3RhcicsIFFyQ29kZU1vZGVsOlFyQ29kZU1vZGVsLk5vMX1cbiAgICovXG4gIFFyQ29kZU1vZGVsPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBQcm9wZXJ0eSB0byBiZSB1c2VkIHdpdGggdGhlIGFwcGVuZFFyQ29kZSBjb21tYW5kLlxuICAgKiBDaG9vc2UgdGhlIGZvcm1hdCBvZiB0aGUgcmV0dXJuIHZhbHVlIGRlZmluZWQgaW4gU3RhclBSTlQuUXJDb2RlTGV2ZWwgb3IgdGhlIFFyQ29kZUxldmVsIGVudW0uICdObzEnIHwgJ05vMicuIERlZmF1bHQgJ0gnXG4gICAqIEV4YW1wbGU6IHthcHBlbmRRckNvZGU6J3tCU3RhcicsIFFyQ29kZUxldmVsOlFyQ29kZUxldmVsLkh9XG4gICAqL1xuICBRckNvZGVMZXZlbD86IHN0cmluZztcblxuICAvKipcbiAgICogUHJvcGVydHkgdG8gYmUgdXNlZCB3aXRoIHRoZSBhcHBlbmRRckNvZGUgY29tbWFuZC4gUVJDb2RlIENlbGwgc2l6ZS4gRGVmYXVsdCA0LlxuICAgKiBFeGFtcGxlOiB7YXBwZW5kUXJDb2RlOid7QlN0YXInLCBjZWxsOjh9XG4gICAqL1xuICBjZWxsPzogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBQcmludCBjb21tYW5kIG9mIHRoZSBiaXRtYXAgaXMgZ2VuZXJhdGVkIGFuZCBhZGRlZCB0byB0aGUgY29tbWFuZCBidWZmZXIuIFRha2VzIGEgc3RyaW5nIGltYWdlIFVSSVxuICAgKiB0aGlzIGNhbiBiZSBvYnRhaW5lZCB2aWEgdGhlIGNhbWVyYSBvciBwaG90byBsaWJyYXJ5IG9yIGFzIGEgc3RhdGljIHJlc291cmNlIHNhdmVkIG9uIHRoZSBwaG9uZSBtZW1vcnkuXG4gICAqIEFkZGl0aW9uYWwgUHJvcGVydGllczogZGlmZnVzaW9uLCB3aWR0aCwgYm90aFNjYWxlLCByb3RhdGlvbiwgYWJzb2x1dGVQb3NpdGlvbiwgYWxpZ25tZW50LlxuICAgKiBFeGFtcGxlOiB7YXBwZW5kQml0bWFwOnVyaSwgZGlmZnVzaW9uOiB0cnVlLCB3aWR0aDo1NzYsIGJvdGhTY2FsZTogdHJ1ZX1cbiAgICogRXhhbXBsZSB3aXRoIGFic29sdXRlUG9zaXRpb246IHthcHBlbmRCaXRtYXA6dXJpLCBkaWZmdXNpb246IHRydWUsIHdpZHRoOjU3NiwgYm90aFNjYWxlOiB0cnVlLCBhYnNvbHV0ZVBvc2l0aW9uOiA0MCB9LlxuICAgKiBFeGFtcGxlIHdpdGggYWxpZ25tZW50OiB7YXBwZW5kQml0bWFwOnVyaSwgZGlmZnVzaW9uOiB0cnVlLCB3aWR0aDo1NzYsIGJvdGhTY2FsZTogdHJ1ZSwgYWxpZ25tZW50OlwiQ2VudGVyXCIgfS5cbiAgICovXG4gIGFwcGVuZEJpdG1hcD86IHN0cmluZztcblxuICAvKipcbiAgICogUHJvcGVydHkgdG8gYmUgdXNlZCB3aXRoIHRoZSBhcHBlbmRCaXRtYXAgY29tbWFuZC4gUmFuZG9tIGRpdGhlcjogdHJ1ZSA9IFZhbGlkLCBmYWxzZSA9IEludmFsaWQuIERlZmF1bHQgdHJ1ZS5cbiAgICogRXhhbXBsZToge2FwcGVuZEJpdG1hcDp1cmksIGRpZmZ1c2lvbjogZmFsc2UgfVxuICAgKi9cbiAgZGlmZnVzaW9uPzogYm9vbGVhbjtcblxuICAvKipcbiAgICogUHJvcGVydHkgdG8gYmUgdXNlZCB3aXRoIHRoZSBhcHBlbmRCaXRtYXAgY29tbWFuZC4gSGVpZ2h0IGlzIGNoYW5nZWQgYWNjb3JkaW5nIHRvIHRoZSBjb252ZXJzaW9uIHJhdGUgb2YgdGhlIHdpZHRoIHByb3BlcnR5LlxuICAgKiB0cnVlID0gVmFsaWQsIGZhbHNlID0gSW52YWxpZC4gRGVmYXVsdCB0cnVlLlxuICAgKiBFeGFtcGxlOiB7YXBwZW5kQml0bWFwOnVyaSwgYm90aFNjYWxlOiB0cnVlIH1cbiAgICovXG4gIGJvdGhTY2FsZT86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIFByb3BlcnR5IHRvIGJlIHVzZWQgd2l0aCB0aGUgYXBwZW5kQml0bWFwIGNvbW1hbmQuXG4gICAqIENob29zZSB0aGUgZm9ybWF0IG9mIHRoZSByZXR1cm4gdmFsdWUgZGVmaW5lZCBpbiBTdGFyUFJOVC5CaXRtYXBDb252ZXJ0ZXJSb3RhdGlvbiBvciB0aGUgQml0bWFwQ29udmVydGVyUm90YXRpb24gZW51bS5cbiAgICogJ05vcm1hbCcgfCAnTGVmdDkwJyB8ICdSaWdodDkwJyB8ICdSb3RhdGUxODAnXG4gICAqIEV4YW1wbGU6IHthcHBlbmRCaXRtYXA6dXJpLCByb3RhdGlvbjogQml0bWFwQ29udmVydGVyUm90YXRpb24uTGVmdDkwIH1cbiAgICovXG4gIHJvdGF0aW9uPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBzZW5kcyBhIGFwcGVuZFBlcmlwaGVyYWwgY29tbWFuZCB0byB0aGUgcHJpbnRlciBmb3IgY2hhbm5lbCBudW1iZXI6IEV4YW1wbGU6IDEgPSBObzEsIDIgPSBObzJcbiAgICovXG4gIG9wZW5DYXNoRHJhd2VyPzogbnVtYmVyO1xufVxuXG4vKipcbiAqIEVtdWxhdGlvbiBjb25zdGFudHNcbiAqL1xuZXhwb3J0IGVudW0gRW11bGF0aW9uIHtcbiAgLyoqIG1QT1AsIFNNLUwyMDAsIFNNLUwzMDAsIFNNLVMyMTBpLCBTTS1TMjIwaSwgU00tUzIzMGksIFNNLVQzMDBpL1QzMDAsIFNNLVQ0MDBpICovXG4gIFN0YXJQUk5UID0gJ1N0YXJQUk5UJyxcbiAgLyoqIFNNLUwyMDAsIFNNLUwzMDAgKi9cbiAgU3RhclBSTlRMID0gJ1N0YXJQUk5UTCcsXG4gIC8qKiBGVlAxMCwgVFNQNjUwSUksIFRTUDcwMElJLCBUU1A4MDBJSSAqL1xuICBTdGFyTGluZSA9ICdTdGFyTGluZScsXG4gIC8qKiBUU1AxMDAgKi9cbiAgU3RhckdyYXBoaWMgPSAnU3RhckdyYXBoaWMnLFxuICAvKiogQlNDMTAgKi9cbiAgRXNjUG9zID0gJ0VzY1BvcycsXG4gIC8qKiBTTS1TMjEwaSwgU00tUzIyMGksIFNNLVMyMzBpLCBTTS1UMzAwaS9UMzAwLCBTTS1UNDAwaSAqL1xuICBFc2NQb3NNb2JpbGUgPSAnRXNjUG9zTW9iaWxlJyxcbiAgLyoqIFNQNzAwICovXG4gIFN0YXJEb3RJbXBhY3QgPSAnU3RhckRvdEltcGFjdCdcbn1cblxuLyoqXG4gKiBFbmNvZGluZyBjb25zdGFudHNcbiAqL1xuZXhwb3J0IGVudW0gRW5jb2Rpbmcge1xuICAvKiogRW5nbGlzaCAqL1xuICBVU0FTQ0lJID0gJ1VTLUFTQ0lJJyxcbiAgLyoqIEZyZW5jaCwgR2VybWFuLCBQb3J0dWd1ZXNlLCBTcGFuaXNoICovXG4gIFdpbmRvd3MxMjUyID0gJ1dpbmRvd3MtMTI1MicsXG4gIC8qKiBKYXBhbmVzZSAqL1xuICBTaGlmdEpJUyA9ICdTaGlmdC1KSVMnLFxuICAvKiogUnVzc2lhbiAqL1xuICBXaW5kb3dzMTI1MSA9ICdXaW5kb3dzLTEyNTEnLFxuICAvKiogU2ltcGxpZmllZCBDaGluZXNlICovXG4gIEdCMjMxMiA9ICdHQjIzMTInLFxuICAvKiogVHJhZGl0aW9uYWwgQ2hpbmVzZSAqL1xuICBCaWc1ID0gJ0JpZzUnLFxuICAvKiogVUZUOCAqL1xuICBVVEY4ID0gJ1VURi04J1xufVxuXG4vKipcbiAqIENvZGVQYWdlVHlwZSBjb25zdGFudHNcbiAqL1xuZXhwb3J0IGVudW0gQ29kZVBhZ2VUeXBlIHtcbiAgQ1A3MzcgPSAnQ1A3MzcnLFxuICBDUDc3MiA9ICdDUDc3MicsXG4gIENQNzc0ID0gJ0NQNzc0JyxcbiAgQ1A4NTEgPSAnQ1A4NTEnLFxuICBDUDg1MiA9ICdDUDg1MicsXG4gIENQODU1ID0gJ0NQODU1JyxcbiAgQ1A4NTcgPSAnQ1A4NTcnLFxuICBDUDg1OCA9ICdDUDg1OCcsXG4gIENQODYwID0gJ0NQODYwJyxcbiAgQ1A4NjEgPSAnQ1A4NjEnLFxuICBDUDg2MiA9ICdDUDg2MicsXG4gIENQODYzID0gJ0NQODYzJyxcbiAgQ1A4NjQgPSAnQ1A4NjQnLFxuICBDUDg2NSA9ICdDUDg2NScsXG4gIENQODY5ID0gJ0NQODY5JyxcbiAgQ1A4NzQgPSAnQ1A4NzQnLFxuICBDUDkyOCA9ICdDUDkyOCcsXG4gIENQOTMyID0gJ0NQOTMyJyxcbiAgQ1A5OTkgPSAnQ1A5OTknLFxuICBDUDEwMDEgPSAnQ1AxMDAxJyxcbiAgQ1AxMjUwID0gJ0NQMTI1MCcsXG4gIENQMTI1MSA9ICdDUDEyNTEnLFxuICBDUDEyNTIgPSAnQ1AxMjUyJyxcbiAgQ1AyMDAxID0gJ0NQMjAwMScsXG4gIENQMzAwMSA9ICdDUDMwMDEnLFxuICBDUDMwMDIgPSAnQ1AzMDAyJyxcbiAgQ1AzMDExID0gJ0NQMzAxMScsXG4gIENQMzAxMiA9ICdDUDMwMTInLFxuICBDUDMwMjEgPSAnQ1AzMDIxJyxcbiAgQ1AzMDQxID0gJ0NQMzA0MScsXG4gIENQMzg0MCA9ICdDUDM4NDAnLFxuICBDUDM4NDEgPSAnQ1AzODQxJyxcbiAgQ1AzODQzID0gJ0NQMzg0MycsXG4gIENQMzg0NSA9ICdDUDM4NDUnLFxuICBDUDM4NDYgPSAnQ1AzODQ2JyxcbiAgQ1AzODQ3ID0gJ0NQMzg0NycsXG4gIENQMzg0OCA9ICdDUDM4NDgnLFxuICBVVEY4ID0gJ1VURjgnLFxuICBCbGFuayA9ICdCbGFuaydcbn1cblxuLyoqXG4gKiBJbnRlcm5hdGlvbmFsVHlwZSBjb25zdGFudHNcbiAqL1xuZXhwb3J0IGVudW0gSW50ZXJuYXRpb25hbFR5cGUge1xuICBVSyA9ICdVSycsXG4gIFVTQSA9ICdVU0EnLFxuICBGcmFuY2UgPSAnRnJhbmNlJyxcbiAgR2VybWFueSA9ICdHZXJtYW55JyxcbiAgRGVubWFyayA9ICdEZW5tYXJrJyxcbiAgU3dlZGVuID0gJ1N3ZWRlbicsXG4gIEl0YWx5ID0gJ0l0YWx5JyxcbiAgU3BhaW4gPSAnU3BhaW4nLFxuICBKYXBhbiA9ICdKYXBhbicsXG4gIE5vcndheSA9ICdOb3J3YXknLFxuICBEZW5tYXJrMiA9ICdEZW5tYXJrMicsXG4gIFNwYWluMiA9ICdTcGFpbjInLFxuICBMYXRpbkFtZXJpY2EgPSAnTGF0aW5BbWVyaWNhJyxcbiAgS29yZWEgPSAnS29yZWEnLFxuICBJcmVsYW5kID0gJ0lyZWxhbmQnLFxuICBMZWdhbCA9ICdMZWdhbCdcbn1cblxuLyoqXG4gKiBGb250U3R5bGVUeXBlIGNvbnN0YW50cy5cbiAqL1xuZXhwb3J0IGVudW0gRm9udFN0eWxlVHlwZSB7XG4gIC8qKiBGb250LUEgKDEyIHggMjQgZG90cykgLyBTcGVjaWZ5IDcgeCA5IGZvbnQgKGhhbGYgZG90cykgKi9cbiAgQSA9ICdBJyxcbiAgLyoqIEZvbnQtQiAoOSB4IDI0IGRvdHMpIC8gU3BlY2lmeSA1IHggOSBmb250ICgyUC0xKSAqL1xuICBCID0gJ0InXG59XG5cbi8qKlxuICogQ3V0UGFwZXJBY3Rpb24gY29uc3RhbnRzLlxuICovXG5leHBvcnQgZW51bSBDdXRQYXBlckFjdGlvbiB7XG4gIEZ1bGxDdXQgPSAnRnVsbEN1dCcsXG4gIEZ1bGxDdXRXaXRoRmVlZCA9ICdGdWxsQ3V0V2l0aEZlZWQnLFxuICBQYXJ0aWFsQ3V0ID0gJ1BhcnRpYWxDdXQnLFxuICBQYXJ0aWFsQ3V0V2l0aEZlZWQgPSAnUGFydGlhbEN1dFdpdGhGZWVkJ1xufVxuXG4vKipcbiAqIEJsYWNrTWFya1R5cGUgY29uc3RhbnRzLlxuICovXG5leHBvcnQgZW51bSBCbGFja01hcmtUeXBlIHtcbiAgVmFsaWQgPSAnVmFsaWQnLFxuICBJbnZhbGlkID0gJ0ludmFsaWQnLFxuICBWYWxpZFdpdGhEZXRlY3Rpb24gPSAnVmFsaWRXaXRoRGV0ZWN0aW9uJ1xufVxuXG4vKipcbiAqIExvZ29TaXplIGNvbnN0YW50c1xuICovXG5leHBvcnQgZW51bSBMb2dvU2l6ZSB7XG4gIE5vcm1hbCA9ICdOb3JtYWwnLFxuICBEb3VibGVXaWR0aCA9ICdEb3VibGVXaWR0aCcsXG4gIERvdWJsZUhlaWdodCA9ICdEb3VibGVIZWlnaHQnLFxuICBEb3VibGVXaWR0aERvdWJsZUhlaWdodCA9ICdEb3VibGVXaWR0aERvdWJsZUhlaWdodCdcbn1cblxuLyoqXG4gKiBBbGlnbm1lbnRQb3NpdGlvbiBjb25zdGFudHNcbiAqL1xuZXhwb3J0IGVudW0gQWxpZ25tZW50UG9zaXRpb24ge1xuICBMZWZ0ID0gJ0xlZnQnLFxuICBDZW50ZXIgPSAnQ2VudGVyJyxcbiAgUmlnaHQgPSAnUmlnaHQnXG59XG5cbi8qKlxuICogQmFyY29kZVN5bWJvbG9neSBjb25zdGFudHNcbiAqL1xuZXhwb3J0IGVudW0gQmFyY29kZVN5bWJvbG9neSB7XG4gIENvZGUxMjggPSAnQ29kZTEyOCcsXG4gIENvZGUzOSA9ICdDb2RlMzknLFxuICBDb2RlOTMgPSAnQ29kZTkzJyxcbiAgSVRGID0gJ0lURicsXG4gIEpBTjggPSAnSkFOOCcsXG4gIEpBTjEzID0gJ0pBTjEzJyxcbiAgTlc3ID0gJ05XNycsXG4gIFVQQ0EgPSAnVVBDQScsXG4gIFVQQ0UgPSAnVVBDRSdcbn1cblxuLyoqXG4gKiBCYXJjb2RlV2lkdGggY29uc3RhbnRzXG4gKi9cbmV4cG9ydCBlbnVtIEJhcmNvZGVXaWR0aCB7XG4gIE1vZGUxID0gJ01vZGUxJyxcbiAgTW9kZTIgPSAnTW9kZTInLFxuICBNb2RlMyA9ICdNb2RlMycsXG4gIE1vZGU0ID0gJ01vZGU0JyxcbiAgTW9kZTUgPSAnTW9kZTUnLFxuICBNb2RlNiA9ICdNb2RlNicsXG4gIE1vZGU3ID0gJ01vZGU3JyxcbiAgTW9kZTggPSAnTW9kZTgnLFxuICBNb2RlOSA9ICdNb2RlOSdcbn1cblxuLyoqXG4gKiBRckNvZGVNb2RlbCBjb25zdGFudHNcbiAqL1xuZXhwb3J0IGVudW0gUXJDb2RlTW9kZWwge1xuICBObzEgPSAnTm8xJyxcbiAgTm8yID0gJ05vMidcbn1cblxuLyoqXG4gKiBRckNvZGVMZXZlbCBjb25zdGFudHNcbiAqL1xuZXhwb3J0IGVudW0gUXJDb2RlTGV2ZWwge1xuICBIID0gJ0gnLFxuICBMID0gJ0wnLFxuICBNID0gJ00nLFxuICBRID0gJ1EnXG59XG5cbi8qKlxuICogQml0bWFwQ29udmVydGVyUm90YXRpb24gY29uc3RhbnRzXG4gKi9cbmV4cG9ydCBlbnVtIEJpdG1hcENvbnZlcnRlclJvdGF0aW9uIHtcbiAgTm9ybWFsID0gJ05vcm1hbCcsXG4gIExlZnQ5MCA9ICdMZWZ0OTAnLFxuICBSaWdodDkwID0gJ1JpZ2h0OTAnLFxuICBSb3RhdGUxODAgPSAnUm90YXRlMTgwJ1xufVxuXG4vKipcbiAqIFB1c2ggYSBuZXcgUHJpbnRDb21tYW5kIG9iamVjdCB0byB0aGUgYXJyYXkgZm9yIGEgc2VwYXJhdGUgaW5zdHJ1Y3Rpb24gdG8gdGhlIHByaW50ZXIuIEV4YW1wbGUgW3thcHBlbmQ6XCJ0ZXh0XCJ9LCB7XCJvcGVuQ2FzaERyYXdlcjogMVwifV1cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBDb21tYW5kc0FycmF5IGV4dGVuZHMgQXJyYXk8UHJpbnRDb21tYW5kPiB7fVxuXG4vKipcbiAqIEBuYW1lIFN0YXJQUk5UXG4gKiBAZGVzY3JpcHRpb25cbiAqICogSW9uaWMgTmF0aXZlIHdyYXBwZXJzIGZvciB0aGUgc3RhcnBybnQgY29yZG92YSBwbHVnaW4gZm9yIFN0YXIgTWljcm9uaWNzIEJsdWV0b290aC9MQU4gcHJpbnRlcnNcbiAqXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IFN0YXJQUk5UIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9zdGFyLXBybnQvbmd4JztcbiAqXG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBzdGFycHJudDogU3RhclBSTlQpIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqXG4gKiB0aGlzLnN0YXJwcm50LnBvcnREaXNjb3ZlcnkoJ2FsbCcpXG4gKiAgIC50aGVuKChyZXM6IGFueSkgPT4gY29uc29sZS5sb2cocmVzKSlcbiAqICAgLmNhdGNoKChlcnJvcjogYW55KSA9PiBjb25zb2xlLmVycm9yKGVycm9yKSk7XG4gKlxuICogYGBgXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnU3RhclBSTlQnLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1zdGFycHJudCcsIC8vIG5wbSBwYWNrYWdlIG5hbWUsIGV4YW1wbGU6IGNvcmRvdmEtcGx1Z2luLWNhbWVyYVxuICBwbHVnaW5SZWY6ICdzdGFycHJudCcsIC8vIHRoZSB2YXJpYWJsZSByZWZlcmVuY2UgdG8gY2FsbCB0aGUgcGx1Z2luLCBleGFtcGxlOiBuYXZpZ2F0b3IuZ2VvbG9jYXRpb25cbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9hdWN0aWZlcmEtam9zZWQvc3RhcnBybnQnLCAvLyB0aGUgZ2l0aHViIHJlcG9zaXRvcnkgVVJMIGZvciB0aGUgcGx1Z2luXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUyddIC8vIEFycmF5IG9mIHBsYXRmb3JtcyBzdXBwb3J0ZWQsIGV4YW1wbGU6IFsnQW5kcm9pZCcsICdpT1MnXVxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTdGFyUFJOVCBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcbiAgLyoqXG4gICAqIENvbnN0YW50IGZvciBFbXVsYXRpb25cbiAgICovXG4gIEVtdWxhdGlvbiA9IHtcbiAgICBTdGFyUFJOVDogJ1N0YXJQUk5UJyxcbiAgICBTdGFyUFJOVEw6ICdTdGFyUFJOVEwnLFxuICAgIFN0YXJMaW5lOiAnU3RhckxpbmUnLFxuICAgIFN0YXJHcmFwaGljOiAnU3RhckdyYXBoaWMnLFxuICAgIEVzY1BvczogJ0VzY1BvcycsXG4gICAgRXNjUG9zTW9iaWxlOiAnRXNjUG9zTW9iaWxlJyxcbiAgICBTdGFyRG90SW1wYWN0OiAnU3RhckRvdEltcGFjdCdcbiAgfTtcblxuICAvKipcbiAgICogQ29uc3RhbnQgZm9yIHBvc3NpYmxlIEVuY29kaW5nXG4gICAqL1xuICBFbmNvZGluZyA9IHtcbiAgICBVU0FTQ0lJOiAnVVMtQVNDSUknLFxuICAgIFdpbmRvd3MxMjUyOiAnV2luZG93cy0xMjUyJyxcbiAgICBTaGlmdEpJUzogJ1NoaWZ0LUpJUycsXG4gICAgV2luZG93czEyNTE6ICdXaW5kb3dzLTEyNTEnLFxuICAgIEdCMjMxMjogJ0dCMjMxMicsXG4gICAgQmlnNTogJ0JpZzUnLFxuICAgIFVURjg6ICdVVEYtOCdcbiAgfTtcblxuICAvKipcbiAgICogQ29kZVBhZ2VUeXBlIGNvbnN0YW50c1xuICAgKi9cbiAgQ29kZVBhZ2VUeXBlID0ge1xuICAgIENQNzM3OiAnQ1A3MzcnLFxuICAgIENQNzcyOiAnQ1A3NzInLFxuICAgIENQNzc0OiAnQ1A3NzQnLFxuICAgIENQODUxOiAnQ1A4NTEnLFxuICAgIENQODUyOiAnQ1A4NTInLFxuICAgIENQODU1OiAnQ1A4NTUnLFxuICAgIENQODU3OiAnQ1A4NTcnLFxuICAgIENQODU4OiAnQ1A4NTgnLFxuICAgIENQODYwOiAnQ1A4NjAnLFxuICAgIENQODYxOiAnQ1A4NjEnLFxuICAgIENQODYyOiAnQ1A4NjInLFxuICAgIENQODYzOiAnQ1A4NjMnLFxuICAgIENQODY0OiAnQ1A4NjQnLFxuICAgIENQODY1OiAnQ1A4NjUnLFxuICAgIENQODY5OiAnQ1A4NjknLFxuICAgIENQODc0OiAnQ1A4NzQnLFxuICAgIENQOTI4OiAnQ1A5MjgnLFxuICAgIENQOTMyOiAnQ1A5MzInLFxuICAgIENQOTk5OiAnQ1A5OTknLFxuICAgIENQMTAwMTogJ0NQMTAwMScsXG4gICAgQ1AxMjUwOiAnQ1AxMjUwJyxcbiAgICBDUDEyNTE6ICdDUDEyNTEnLFxuICAgIENQMTI1MjogJ0NQMTI1MicsXG4gICAgQ1AyMDAxOiAnQ1AyMDAxJyxcbiAgICBDUDMwMDE6ICdDUDMwMDEnLFxuICAgIENQMzAwMjogJ0NQMzAwMicsXG4gICAgQ1AzMDExOiAnQ1AzMDExJyxcbiAgICBDUDMwMTI6ICdDUDMwMTInLFxuICAgIENQMzAyMTogJ0NQMzAyMScsXG4gICAgQ1AzMDQxOiAnQ1AzMDQxJyxcbiAgICBDUDM4NDA6ICdDUDM4NDAnLFxuICAgIENQMzg0MTogJ0NQMzg0MScsXG4gICAgQ1AzODQzOiAnQ1AzODQzJyxcbiAgICBDUDM4NDU6ICdDUDM4NDUnLFxuICAgIENQMzg0NjogJ0NQMzg0NicsXG4gICAgQ1AzODQ3OiAnQ1AzODQ3JyxcbiAgICBDUDM4NDg6ICdDUDM4NDgnLFxuICAgIFVURjg6ICdVVEY4JyxcbiAgICBCbGFuazogJ0JsYW5rJ1xuICB9O1xuXG4gIC8qKlxuICAgKiBDb25zdGFudCBmb3IgcG9zc2libGUgSW50ZXJuYXRpb25hbFR5cGVcbiAgICovXG4gIEludGVybmF0aW9uYWxUeXBlID0ge1xuICAgIFVLOiAnVUsnLFxuICAgIFVTQTogJ1VTQScsXG4gICAgRnJhbmNlOiAnRnJhbmNlJyxcbiAgICBHZXJtYW55OiAnR2VybWFueScsXG4gICAgRGVubWFyazogJ0Rlbm1hcmsnLFxuICAgIFN3ZWRlbjogJ1N3ZWRlbicsXG4gICAgSXRhbHk6ICdJdGFseScsXG4gICAgU3BhaW46ICdTcGFpbicsXG4gICAgSmFwYW46ICdKYXBhbicsXG4gICAgTm9yd2F5OiAnTm9yd2F5JyxcbiAgICBEZW5tYXJrMjogJ0Rlbm1hcmsyJyxcbiAgICBTcGFpbjI6ICdTcGFpbjInLFxuICAgIExhdGluQW1lcmljYTogJ0xhdGluQW1lcmljYScsXG4gICAgS29yZWE6ICdLb3JlYScsXG4gICAgSXJlbGFuZDogJ0lyZWxhbmQnLFxuICAgIExlZ2FsOiAnTGVnYWwnXG4gIH07XG5cbiAgLyoqXG4gICAqIENvbnN0YW50IGZvciBwb3NzaWJsZSBGb250U3R5bGVUeXBlXG4gICAqL1xuICBGb250U3R5bGVUeXBlID0ge1xuICAgIC8qKiBGb250LUEgKDEyIHggMjQgZG90cykgLyBTcGVjaWZ5IDcgeCA5IGZvbnQgKGhhbGYgZG90cykgKi9cbiAgICBBOiAnQScsXG4gICAgLyoqIEZvbnQtQiAoOSB4IDI0IGRvdHMpIC8gU3BlY2lmeSA1IHggOSBmb250ICgyUC0xKSAqL1xuICAgIEI6ICdCJ1xuICB9O1xuXG4gIC8qKlxuICAgKiBDb25zdGFudCBmb3IgcG9zc2libGUgQ3V0UGFwZXJBY3Rpb25cbiAgICovXG4gIEN1dFBhcGVyQWN0aW9uID0ge1xuICAgIEZ1bGxDdXQ6ICdGdWxsQ3V0JyxcbiAgICBGdWxsQ3V0V2l0aEZlZWQ6ICdGdWxsQ3V0V2l0aEZlZWQnLFxuICAgIFBhcnRpYWxDdXQ6ICdQYXJ0aWFsQ3V0JyxcbiAgICBQYXJ0aWFsQ3V0V2l0aEZlZWQ6ICdQYXJ0aWFsQ3V0V2l0aEZlZWQnXG4gIH07XG5cbiAgLyoqXG4gICAqIENvbnN0YW50IGZvciBwb3NzaWJsZSBCbGFja01hcmtUeXBlXG4gICAqL1xuICBCbGFja01hcmtUeXBlID0ge1xuICAgIFZhbGlkOiAnVmFsaWQnLFxuICAgIEludmFsaWQ6ICdJbnZhbGlkJyxcbiAgICBWYWxpZFdpdGhEZXRlY3Rpb246ICdWYWxpZFdpdGhEZXRlY3Rpb24nXG4gIH07XG5cbiAgLyoqXG4gICAqIENvbnN0YW50IGZvciBwb3NzaWJsZSBBbGlnbm1lbnRQb3NpdGlvblxuICAgKi9cbiAgQWxpZ25tZW50UG9zaXRpb24gPSB7XG4gICAgTGVmdDogJ0xlZnQnLFxuICAgIENlbnRlcjogJ0NlbnRlcicsXG4gICAgUmlnaHQ6ICdSaWdodCdcbiAgfTtcblxuICAvKipcbiAgICogQ29uc3RhbnQgZm9yIHBvc3NpYmxlIExvZ29TaXplXG4gICAqL1xuICBMb2dvU2l6ZSA9IHtcbiAgICBOb3JtYWw6ICdOb3JtYWwnLFxuICAgIERvdWJsZVdpZHRoOiAnRG91YmxlV2lkdGgnLFxuICAgIERvdWJsZUhlaWdodDogJ0RvdWJsZUhlaWdodCcsXG4gICAgRG91YmxlV2lkdGhEb3VibGVIZWlnaHQ6ICdEb3VibGVXaWR0aERvdWJsZUhlaWdodCdcbiAgfTtcblxuICAvKipcbiAgICogQ29uc3RhbnQgZm9yIHBvc3NpYmxlIEJhcmNvZGVTeW1ib2xvZ3lcbiAgICovXG4gIEJhcmNvZGVTeW1ib2xvZ3kgPSB7XG4gICAgQ29kZTEyODogJ0NvZGUxMjgnLFxuICAgIENvZGUzOTogJ0NvZGUzOScsXG4gICAgQ29kZTkzOiAnQ29kZTkzJyxcbiAgICBJVEY6ICdJVEYnLFxuICAgIEpBTjg6ICdKQU44JyxcbiAgICBKQU4xMzogJ0pBTjEzJyxcbiAgICBOVzc6ICdOVzcnLFxuICAgIFVQQ0E6ICdVUENBJyxcbiAgICBVUENFOiAnVVBDRSdcbiAgfTtcblxuICAvKipcbiAgICogQ29uc3RhbnQgZm9yIHBvc3NpYmxlIEJhcmNvZGVXaWR0aFxuICAgKi9cbiAgQmFyY29kZVdpZHRoID0ge1xuICAgIE1vZGUxOiAnTW9kZTEnLFxuICAgIE1vZGUyOiAnTW9kZTInLFxuICAgIE1vZGUzOiAnTW9kZTMnLFxuICAgIE1vZGU0OiAnTW9kZTQnLFxuICAgIE1vZGU1OiAnTW9kZTUnLFxuICAgIE1vZGU2OiAnTW9kZTYnLFxuICAgIE1vZGU3OiAnTW9kZTcnLFxuICAgIE1vZGU4OiAnTW9kZTgnLFxuICAgIE1vZGU5OiAnTW9kZTknXG4gIH07XG5cbiAgLyoqXG4gICAqIENvbnN0YW50IGZvciBwb3NzaWJsZSBRckNvZGVNb2RlbFxuICAgKi9cbiAgUXJDb2RlTW9kZWwgPSB7XG4gICAgTm8xOiAnTm8xJyxcbiAgICBObzI6ICdObzInXG4gIH07XG5cbiAgLyoqXG4gICAqIENvbnN0YW50IGZvciBwb3NzaWJsZSBRckNvZGVMZXZlbFxuICAgKi9cbiAgUXJDb2RlTGV2ZWwgPSB7XG4gICAgSDogJ0gnLFxuICAgIEw6ICdMJyxcbiAgICBNOiAnTScsXG4gICAgUTogJ1EnXG4gIH07XG5cbiAgLyoqXG4gICAqIENvbnN0YW50IGZvciBwb3NzaWJsZSBCaXRtYXBDb252ZXJ0ZXJSb3RhdGlvblxuICAgKi9cbiAgQml0bWFwQ29udmVydGVyUm90YXRpb24gPSB7XG4gICAgTm9ybWFsOiAnTm9ybWFsJyxcbiAgICBMZWZ0OTA6ICdMZWZ0OTAnLFxuICAgIFJpZ2h0OTA6ICdSaWdodDkwJyxcbiAgICBSb3RhdGUxODA6ICdSb3RhdGUxODAnXG4gIH07XG5cbiAgLyoqXG4gICAqIEZpbmQgYXZhaWxhYmxlIHByaW50ZXJzXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlICBJbnRlcmZhY2UgVHlwZTogQWxsLCBMQU4sIEJsdWV0b290aCwgVVNCXG4gICAqIEByZXR1cm4ge1Byb21pc2U8UHJpbnRlcnM+fSBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggYW4gYXJyYXkgb2YgcHJpbnRlcnNcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgcG9ydERpc2NvdmVyeSh0eXBlOiBzdHJpbmcpOiBQcm9taXNlPFByaW50ZXJzPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrcyB0aGUgc3RhdHVzIG9mIHRoZSBwcmludGVyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwb3J0ICBQcmludGVyIG5hbWUgaS5lIEJUOlN0YXJNaWNyb25pY3NcbiAgICogQHBhcmFtIHtzdHJpbmd9IGVtdWxhdGlvbiAgU3RhclByaW50ZXIgRW11bGF0aW9uIHR5cGU6IFwiU3RhclBSTlRcIiwgXCJTdGFyUFJOVExcIiwgXCJTdGFyTGluZVwiLCBcIlN0YXJHcmFwaGljXCIsIFwiRXNjUG9zXCIsIFwiRXNjUG9zTW9iaWxlXCIsIFwiU3RhckRvdEltcGFjdFwiXG4gICAqIEByZXR1cm4ge1Byb21pc2U8UHJpbnRlclN0YXR1cz59IFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCB0aGUgUHJpbnRlclN0YXR1cyBvYmplY3RcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgY2hlY2tTdGF0dXMocG9ydDogc3RyaW5nLCBlbXVsYXRpb246IHN0cmluZyk6IFByb21pc2U8UHJpbnRlclN0YXR1cz4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBQcmludHMgcGxhaW4gdGV4dFxuICAgKiBAcGFyYW0ge3N0cmluZ30gcG9ydCAgUHJpbnRlciBuYW1lIGkuZSBCVDpTdGFyTWljcm9uaWNzLiBTZW5kIG51bGwgdG8gdXNlIGEgcHJpbnRlciBjb25uZWN0ZWQgdmlhIFN0YXJJT0V4dE1hbmFnZXIgdXNpbmcgdGhlIGNvbm5lY3QoKSBmdW5jdGlvblxuICAgKiBAcGFyYW0ge3N0cmluZ30gZW11bGF0aW9uICBTdGFyUHJpbnRlciBFbXVsYXRpb24gdHlwZTogXCJTdGFyUFJOVFwiLCBcIlN0YXJQUk5UTFwiLCBcIlN0YXJMaW5lXCIsIFwiU3RhckdyYXBoaWNcIiwgXCJFc2NQb3NcIiwgXCJFc2NQb3NNb2JpbGVcIiwgXCJTdGFyRG90SW1wYWN0XCJcbiAgICogQHBhcmFtIHtQcmludE9ian0gcHJpbnRPYmogIHRleHQ6c3RyaW5nLCBjdXRSZWNlaXB0Pzpib29sZWFuLCBvcGVuQ2FzaERyYXdlcj86Ym9vbGVhblxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFN1Y2Nlc3MhIGlmIHByaW50ZWQgY29ycmVjdGx5IG9yIGVycm9yIG1lc3NhZ2Ugc3RyaW5nIHJldHVybmVkIGJ5IHRoZSBTREsuXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHByaW50UmF3VGV4dChcbiAgICBwb3J0OiBzdHJpbmcsXG4gICAgZW11bGF0aW9uOiBzdHJpbmcsXG4gICAgcHJpbnRPYmo6IFByaW50T2JqXG4gICk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlcnRzIHRoZSB0ZXh0IGludG8gYSBiaXRtYXAgaW1hZ2UgYW5kIHNlbmRzIGl0IHRvIHRoZSBwcmludGVyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwb3J0ICBQcmludGVyIG5hbWUgaS5lIEJUOlN0YXJNaWNyb25pY3MuICBTZW5kIG51bGwgdG8gdXNlIGEgcHJpbnRlciBjb25uZWN0ZWQgdmlhIFN0YXJJT0V4dE1hbmFnZXIgdXNpbmcgdGhlIGNvbm5lY3QoKSBmdW5jdGlvblxuICAgKiBAcGFyYW0ge3N0cmluZ30gZW11bGF0aW9uICBTdGFyUHJpbnRlciBFbXVsYXRpb24gdHlwZTogXCJTdGFyUFJOVFwiLCBcIlN0YXJQUk5UTFwiLCBcIlN0YXJMaW5lXCIsIFwiU3RhckdyYXBoaWNcIiwgXCJFc2NQb3NcIiwgXCJFc2NQb3NNb2JpbGVcIiwgXCJTdGFyRG90SW1wYWN0XCJcbiAgICogQHBhcmFtIHtSYXN0ZXJPYmp9IHJhc3Rlck9iaiAgdGV4dDpzdHJpbmcsIGN1dFJlY2VpcHQ/OmJvb2xlYW4sIG9wZW5DYXNoRHJhd2VyPzpib29sZWFuLCBmb250U2l6ZTpudW1iZXIsIHBhcGVyV2lkdGg6bnVtYmVyXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gU3VjY2VzcyEgaWYgcHJpbnRlZCBjb3JyZWN0bHkgb3IgZXJyb3IgbWVzc2FnZSBzdHJpbmcgcmV0dXJuZWQgYnkgdGhlIFNESy5cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgcHJpbnRSYXN0ZXJSZWNlaXB0KFxuICAgIHBvcnQ6IHN0cmluZyxcbiAgICBlbXVsYXRpb246IHN0cmluZyxcbiAgICByYXN0ZXJPYmo6IFJhc3Rlck9ialxuICApOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXRzIGFuIGltYWdlIGZyb20gYSBzdHJpbmcgVVJJIGFuZCBjb252ZXJ0cyBpdCB0byBiaXRtYXAgdG8gc2VuZCBpdCB0byB0aGUgcHJpbnRlclxuICAgKiBAcGFyYW0ge3N0cmluZ30gcG9ydCBQcmludGVyIG5hbWUgaS5lIEJUOlN0YXJNaWNyb25pY3MuICBTZW5kIG51bGwgdG8gdXNlIGEgcHJpbnRlciBjb25uZWN0ZWQgdmlhIFN0YXJJT0V4dE1hbmFnZXIgdXNpbmcgdGhlIGNvbm5lY3QoKSBmdW5jdGlvblxuICAgKiBAcGFyYW0ge3N0cmluZ30gZW11bGF0aW9uICBTdGFyUHJpbnRlciBFbXVsYXRpb24gdHlwZTogXCJTdGFyUFJOVFwiLCBcIlN0YXJQUk5UTFwiLCBcIlN0YXJMaW5lXCIsIFwiU3RhckdyYXBoaWNcIiwgXCJFc2NQb3NcIiwgXCJFc2NQb3NNb2JpbGVcIiwgXCJTdGFyRG90SW1wYWN0XCJcbiAgICogQHBhcmFtIHtJbWFnZU9ian0gaW1hZ2VPYmogIHVyaTpzdHJpbmcsIHBhcGVyV2lkdGg/Om51bWJlciwgY3V0UmVjZWlwdD86Ym9vbGVhbiwgb3BlbkNhc2hEcmF3ZXI/OmJvb2xlYW5cbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBTdWNjZXNzISBpZiBwcmludGVkIGNvcnJlY3RseSBvciBlcnJvciBtZXNzYWdlIHN0cmluZyByZXR1cm5lZCBieSB0aGUgU0RLLlxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBwcmludEltYWdlKFxuICAgIHBvcnQ6IHN0cmluZyxcbiAgICBlbXVsYXRpb246IHN0cmluZyxcbiAgICBpbWFnZU9iajogSW1hZ2VPYmpcbiAgKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogc2VuZHMgYW4gYXBwZW5kUGVyaXBoZXJhbCBjb21tYW5kIHRvIHRoZSBwcmludGVyIGZvciBjaGFubmVscyBObzEgYW5kIE5vMlxuICAgKiBAcGFyYW0ge3N0cmluZ30gcG9ydCAgUHJpbnRlciBuYW1lIGkuZSBCVDpTdGFyTWljcm9uaWNzLiAgU2VuZCBudWxsIHRvIHVzZSBhIHByaW50ZXIgY29ubmVjdGVkIHZpYSBTdGFySU9FeHRNYW5hZ2VyIHVzaW5nIHRoZSBjb25uZWN0KCkgZnVuY3Rpb25cbiAgICogQHBhcmFtIHtzdHJpbmd9IGVtdWxhdGlvbiAgU3RhclByaW50ZXIgRW11bGF0aW9uIHR5cGU6IFwiU3RhclBSTlRcIiwgXCJTdGFyUFJOVExcIiwgXCJTdGFyTGluZVwiLCBcIlN0YXJHcmFwaGljXCIsIFwiRXNjUG9zXCIsIFwiRXNjUG9zTW9iaWxlXCIsIFwiU3RhckRvdEltcGFjdFwiXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gU3VjY2VzcyEgaWYgb3BlbmVkIG9yIGVycm9yIG1lc3NhZ2Ugc3RyaW5nIHJldHVybmVkIGJ5IHRoZSBTREsuXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIG9wZW5DYXNoRHJhd2VyKHBvcnQ6IHN0cmluZywgZW11bGF0aW9uOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZW5kcyBhbiBBcnJheSBvZiBjb21tYW5kcyB0byB0aGUgY29tbWFuZCBidWZmZXIgdXNpbmcgdGhlIEFuZHJvaWQgSUNvbW1hbmRCdWlsZGVySW50ZXJmYWNlIG9yIGlPUyBJU0NCQnVpbGRlckludGVyZmFjZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gcG9ydCAgUHJpbnRlciBuYW1lIGkuZSBCVDpTdGFyTWljcm9uaWNzLiAgU2VuZCBudWxsIHRvIHVzZSBhIHByaW50ZXIgY29ubmVjdGVkIHZpYSBTdGFySU9FeHRNYW5hZ2VyIHVzaW5nIHRoZSBjb25uZWN0KCkgZnVuY3Rpb25cbiAgICogQHBhcmFtIHtzdHJpbmd9IGVtdWxhdGlvbiAgU3RhclByaW50ZXIgRW11bGF0aW9uIHR5cGU6IFwiU3RhclBSTlRcIiwgXCJTdGFyUFJOVExcIiwgXCJTdGFyTGluZVwiLCBcIlN0YXJHcmFwaGljXCIsIFwiRXNjUG9zXCIsIFwiRXNjUG9zTW9iaWxlXCIsIFwiU3RhckRvdEltcGFjdFwiXG4gICAqIEBwYXJhbSB7Q29tbWFuZHNBcnJheX0gY29tbWFuZHNBcnJheSAgZWFjaCBjb21tYW5kIGluIHRoZSBhcnJheSBzaG91bGQgYmUgYW4gaW5zdGFuY2Ugb2YgdGhlIFByaW50Q29tbWFuZCBvYmplY3QuIEV4YW1wbGUgW3thcHBlbmQ6XCJ0ZXh0XCJ9LCB7XCJvcGVuQ2FzaERyYXdlcjogMVwifV1cbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBTdWNjZXNzISBpZiBwcmludGVkIGNvcnJlY3RseSBvciBlcnJvciBtZXNzYWdlIHN0cmluZyByZXR1cm5lZCBieSB0aGUgU0RLLlxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBwcmludChcbiAgICBwb3J0OiBzdHJpbmcsXG4gICAgZW11bGF0aW9uOiBzdHJpbmcsXG4gICAgY29tbWFuZHNBcnJheTogQ29tbWFuZHNBcnJheVxuICApOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBBbGxvd3MgeW91IHRvIGNvbm5lY3QgdG8gdGhlIHByaW50ZXIsIGtlZXAgdGhlIGNvbm5lY3Rpb24gYWxpdmUgYW5kIHJlY2VpdmUgc3RhdHVzIHVwZGF0ZXMgdGhyb3VnaCBhbiBvYnNlcnZhYmxlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwb3J0ICBwcmludGVyIG5hbWUgaS5lIEJUOlN0YXJNaWNyb25pY3MuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBlbXVsYXRpb24gIFN0YXJQcmludGVyIEVtdWxhdGlvbiB0eXBlOiBcIlN0YXJQUk5UXCIsIFwiU3RhclBSTlRMXCIsIFwiU3RhckxpbmVcIiwgXCJTdGFyR3JhcGhpY1wiLCBcIkVzY1Bvc1wiLCBcIkVzY1Bvc01vYmlsZVwiLCBcIlN0YXJEb3RJbXBhY3RcIlxuICAgKiBAcmV0dXJuIHtPYnNlcnZhYmxlPGFueT59IFN1Y2Nlc3MhIGlmIGNvbm5lY3RlZCBvciBlcnJvciBtZXNzYWdlIHN0cmluZyByZXR1cm5lZCBieSB0aGUgU0RLLlxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIG9ic2VydmFibGU6IHRydWUsXG4gICAgY2FsbGJhY2tTdHlsZTogJ25vZGUnXG4gIH0pXG4gIGNvbm5lY3QoXG4gICAgcG9ydDogc3RyaW5nLFxuICAgIGVtdWxhdGlvbjogc3RyaW5nLFxuICAgIGhhc0JhcmNvZGVSZWFkZXI6IGJvb2xlYW5cbiAgKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhbiBvYnNlcnZhYmxlIHdpdGggdGhlIGRldmljZSBzdGF0dXMgZXZlbnRzLiBPbmx5IGZpcmVzIHdoZW4gYSBwcmludGVyIGlzIGNvbm5uZWN0ZWQgdGhyb3VnaCB0aGUgY29ubmVjdCgpIGZ1bmN0aW9uXG4gICAqIEByZXR1cm4ge09ic2VydmFibGU8YW55Pn0gZGF0YVR5cGU6IHByaW50ZXJPbmxpbmUsIHByaW50ZXJPZmZsaW5lLCBwcmludGVySW1wb3NzaWJsZSwgcHJpbnRlclBhcGVyRW1wdHksIHByaW50ZXJQYXBlck5lYXJFbXB0eSwgcHJpbnRlclBhcGVyUmVhZHksIHByaW50ZXJDb3Zlck9wZW4sIHByaW50ZXJDb3ZlckNsb3NlLCBjYXNoRHJhd2VyT3BlbiwgY2FzaERyYXdlckNsb3NlXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgZXZlbnRPYnNlcnZhYmxlOiB0cnVlLFxuICAgIGV2ZW50OiAnc3RhclBybnREYXRhJ1xuICB9KVxuICBnZXRTdGF0dXMoKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQWxsb3dzIHRvIGRpc2Nvbm5lY3QgKGNsb3NlIHRoZSBjb25uZWN0aW9uIHRvIHRoZSBwZXJpcGhlcmFscyksIHRoaXMgaXMgdXNlZnVsIHRvIGF2b2lkIGtlZXBpbmcgYWxpdmUgYSBjb25uZWN0aW9uIHdoZW4gbm90IGluIHRoZSBhcHAgdG8gc2F2ZSBkZXZpY2UgYmF0dGVyeVxuICAgKiAoZW5lcmd5IGNvbnN1bXB0aW9uKS4gWW91IHNob3VsZCBjYWxsIHRoaXMgZnVuY3Rpb24gd2hlbiB0aGUgYXBwIGlzIHBhdXNlZCBvciBjbG9zZWQuXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gU3VjY2VzcyEgaWYgY29ubmVjdGVkIG9yIGVycm9yIG1lc3NhZ2Ugc3RyaW5nIHJldHVybmVkIGJ5IHRoZSBTREsuXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGRpc2Nvbm5lY3QoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cbn1cbiJdfQ==