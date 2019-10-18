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
import { IonicNativePlugin, cordovaPropertyGet, cordovaPropertySet, cordova } from '@ionic-native/core';
import { Injectable } from '@angular/core';
export var BarcodeType;
(function (BarcodeType) {
    BarcodeType[BarcodeType["None"] = 1] = "None";
    BarcodeType[BarcodeType["QRCode"] = 2] = "QRCode";
    BarcodeType[BarcodeType["DataMatrix"] = 3] = "DataMatrix";
    BarcodeType[BarcodeType["UPCE"] = 4] = "UPCE";
    BarcodeType[BarcodeType["UPCA"] = 5] = "UPCA";
    BarcodeType[BarcodeType["EAN8"] = 6] = "EAN8";
    BarcodeType[BarcodeType["EAN13"] = 7] = "EAN13";
    BarcodeType[BarcodeType["Code128"] = 8] = "Code128";
    BarcodeType[BarcodeType["Code39"] = 9] = "Code39";
    BarcodeType[BarcodeType["ITF"] = 10] = "ITF";
    BarcodeType[BarcodeType["Aztec"] = 11] = "Aztec";
    BarcodeType[BarcodeType["PDF417"] = 12] = "PDF417";
})(BarcodeType || (BarcodeType = {}));
export var RecognizerResultState;
(function (RecognizerResultState) {
    RecognizerResultState[RecognizerResultState["empty"] = 1] = "empty";
    RecognizerResultState[RecognizerResultState["uncertain"] = 2] = "uncertain";
    RecognizerResultState[RecognizerResultState["valid"] = 3] = "valid";
})(RecognizerResultState || (RecognizerResultState = {}));
export var MrtdDocumentType;
(function (MrtdDocumentType) {
    MrtdDocumentType[MrtdDocumentType["Unknown"] = 1] = "Unknown";
    MrtdDocumentType[MrtdDocumentType["IdentityCard"] = 2] = "IdentityCard";
    MrtdDocumentType[MrtdDocumentType["Passport"] = 3] = "Passport";
    MrtdDocumentType[MrtdDocumentType["Visa"] = 4] = "Visa";
    MrtdDocumentType[MrtdDocumentType["GreenCard"] = 5] = "GreenCard";
    MrtdDocumentType[MrtdDocumentType["MalaysianPassIMM13P"] = 6] = "MalaysianPassIMM13P";
})(MrtdDocumentType || (MrtdDocumentType = {}));
export var EudlCountry;
(function (EudlCountry) {
    EudlCountry[EudlCountry["UK"] = 1] = "UK";
    EudlCountry[EudlCountry["Germany"] = 2] = "Germany";
    EudlCountry[EudlCountry["Austria"] = 3] = "Austria";
    EudlCountry[EudlCountry["Automatic"] = 4] = "Automatic";
})(EudlCountry || (EudlCountry = {}));
export var DocumentFaceDetectorType;
(function (DocumentFaceDetectorType) {
    DocumentFaceDetectorType[DocumentFaceDetectorType["TD1"] = 1] = "TD1";
    DocumentFaceDetectorType[DocumentFaceDetectorType["TD2"] = 2] = "TD2";
    DocumentFaceDetectorType[DocumentFaceDetectorType["PassportsAndVisas"] = 3] = "PassportsAndVisas";
})(DocumentFaceDetectorType || (DocumentFaceDetectorType = {}));
export var UsdlKeys;
(function (UsdlKeys) {
    UsdlKeys[UsdlKeys["DocumentType"] = 0] = "DocumentType";
    UsdlKeys[UsdlKeys["StandardVersionNumber"] = 1] = "StandardVersionNumber";
    UsdlKeys[UsdlKeys["CustomerFamilyName"] = 2] = "CustomerFamilyName";
    UsdlKeys[UsdlKeys["CustomerFirstName"] = 3] = "CustomerFirstName";
    UsdlKeys[UsdlKeys["CustomerFullName"] = 4] = "CustomerFullName";
    UsdlKeys[UsdlKeys["DateOfBirth"] = 5] = "DateOfBirth";
    UsdlKeys[UsdlKeys["Sex"] = 6] = "Sex";
    UsdlKeys[UsdlKeys["EyeColor"] = 7] = "EyeColor";
    UsdlKeys[UsdlKeys["AddressStreet"] = 8] = "AddressStreet";
    UsdlKeys[UsdlKeys["AddressCity"] = 9] = "AddressCity";
    UsdlKeys[UsdlKeys["AddressJurisdictionCode"] = 10] = "AddressJurisdictionCode";
    UsdlKeys[UsdlKeys["AddressPostalCode"] = 11] = "AddressPostalCode";
    UsdlKeys[UsdlKeys["FullAddress"] = 12] = "FullAddress";
    UsdlKeys[UsdlKeys["Height"] = 13] = "Height";
    UsdlKeys[UsdlKeys["HeightIn"] = 14] = "HeightIn";
    UsdlKeys[UsdlKeys["HeightCm"] = 15] = "HeightCm";
    UsdlKeys[UsdlKeys["CustomerMiddleName"] = 16] = "CustomerMiddleName";
    UsdlKeys[UsdlKeys["HairColor"] = 17] = "HairColor";
    UsdlKeys[UsdlKeys["NameSuffix"] = 18] = "NameSuffix";
    UsdlKeys[UsdlKeys["AKAFullName"] = 19] = "AKAFullName";
    UsdlKeys[UsdlKeys["AKAFamilyName"] = 20] = "AKAFamilyName";
    UsdlKeys[UsdlKeys["AKAGivenName"] = 21] = "AKAGivenName";
    UsdlKeys[UsdlKeys["AKASuffixName"] = 22] = "AKASuffixName";
    UsdlKeys[UsdlKeys["WeightRange"] = 23] = "WeightRange";
    UsdlKeys[UsdlKeys["WeightPounds"] = 24] = "WeightPounds";
    UsdlKeys[UsdlKeys["WeightKilograms"] = 25] = "WeightKilograms";
    UsdlKeys[UsdlKeys["CustomerIdNumber"] = 26] = "CustomerIdNumber";
    UsdlKeys[UsdlKeys["FamilyNameTruncation"] = 27] = "FamilyNameTruncation";
    UsdlKeys[UsdlKeys["FirstNameTruncation"] = 28] = "FirstNameTruncation";
    UsdlKeys[UsdlKeys["MiddleNameTruncation"] = 29] = "MiddleNameTruncation";
    UsdlKeys[UsdlKeys["PlaceOfBirth"] = 30] = "PlaceOfBirth";
    UsdlKeys[UsdlKeys["AddressStreet2"] = 31] = "AddressStreet2";
    UsdlKeys[UsdlKeys["RaceEthnicity"] = 32] = "RaceEthnicity";
    UsdlKeys[UsdlKeys["NamePrefix"] = 33] = "NamePrefix";
    UsdlKeys[UsdlKeys["CountryIdentification"] = 34] = "CountryIdentification";
    UsdlKeys[UsdlKeys["ResidenceStreetAddress"] = 35] = "ResidenceStreetAddress";
    UsdlKeys[UsdlKeys["ResidenceStreetAddress2"] = 36] = "ResidenceStreetAddress2";
    UsdlKeys[UsdlKeys["ResidenceCity"] = 37] = "ResidenceCity";
    UsdlKeys[UsdlKeys["ResidenceJurisdictionCode"] = 38] = "ResidenceJurisdictionCode";
    UsdlKeys[UsdlKeys["ResidencePostalCode"] = 39] = "ResidencePostalCode";
    UsdlKeys[UsdlKeys["ResidenceFullAddress"] = 40] = "ResidenceFullAddress";
    UsdlKeys[UsdlKeys["Under18"] = 41] = "Under18";
    UsdlKeys[UsdlKeys["Under19"] = 42] = "Under19";
    UsdlKeys[UsdlKeys["Under21"] = 43] = "Under21";
    UsdlKeys[UsdlKeys["SocialSecurityNumber"] = 44] = "SocialSecurityNumber";
    UsdlKeys[UsdlKeys["AKASocialSecurityNumber"] = 45] = "AKASocialSecurityNumber";
    UsdlKeys[UsdlKeys["AKAMiddleName"] = 46] = "AKAMiddleName";
    UsdlKeys[UsdlKeys["AKAPrefixName"] = 47] = "AKAPrefixName";
    UsdlKeys[UsdlKeys["OrganDonor"] = 48] = "OrganDonor";
    UsdlKeys[UsdlKeys["Veteran"] = 49] = "Veteran";
    UsdlKeys[UsdlKeys["AKADateOfBirth"] = 50] = "AKADateOfBirth";
    UsdlKeys[UsdlKeys["IssuerIdentificationNumber"] = 51] = "IssuerIdentificationNumber";
    UsdlKeys[UsdlKeys["DocumentExpirationDate"] = 52] = "DocumentExpirationDate";
    UsdlKeys[UsdlKeys["JurisdictionVersionNumber"] = 53] = "JurisdictionVersionNumber";
    UsdlKeys[UsdlKeys["JurisdictionVehicleClass"] = 54] = "JurisdictionVehicleClass";
    UsdlKeys[UsdlKeys["JurisdictionRestrictionCodes"] = 55] = "JurisdictionRestrictionCodes";
    UsdlKeys[UsdlKeys["JurisdictionEndorsementCodes"] = 56] = "JurisdictionEndorsementCodes";
    UsdlKeys[UsdlKeys["DocumentIssueDate"] = 57] = "DocumentIssueDate";
    UsdlKeys[UsdlKeys["FederalCommercialVehicleCodes"] = 58] = "FederalCommercialVehicleCodes";
    UsdlKeys[UsdlKeys["IssuingJurisdiction"] = 59] = "IssuingJurisdiction";
    UsdlKeys[UsdlKeys["StandardVehicleClassification"] = 60] = "StandardVehicleClassification";
    UsdlKeys[UsdlKeys["IssuingJurisdictionName"] = 61] = "IssuingJurisdictionName";
    UsdlKeys[UsdlKeys["StandardEndorsementCode"] = 62] = "StandardEndorsementCode";
    UsdlKeys[UsdlKeys["StandardRestrictionCode"] = 63] = "StandardRestrictionCode";
    UsdlKeys[UsdlKeys["JurisdictionVehicleClassificationDescription"] = 64] = "JurisdictionVehicleClassificationDescription";
    UsdlKeys[UsdlKeys["JurisdictionEndorsmentCodeDescription"] = 65] = "JurisdictionEndorsmentCodeDescription";
    UsdlKeys[UsdlKeys["JurisdictionRestrictionCodeDescription"] = 66] = "JurisdictionRestrictionCodeDescription";
    UsdlKeys[UsdlKeys["InventoryControlNumber"] = 67] = "InventoryControlNumber";
    UsdlKeys[UsdlKeys["CardRevisionDate"] = 68] = "CardRevisionDate";
    UsdlKeys[UsdlKeys["DocumentDiscriminator"] = 69] = "DocumentDiscriminator";
    UsdlKeys[UsdlKeys["LimitedDurationDocument"] = 70] = "LimitedDurationDocument";
    UsdlKeys[UsdlKeys["AuditInformation"] = 71] = "AuditInformation";
    UsdlKeys[UsdlKeys["ComplianceType"] = 72] = "ComplianceType";
    UsdlKeys[UsdlKeys["IssueTimestamp"] = 73] = "IssueTimestamp";
    UsdlKeys[UsdlKeys["PermitExpirationDate"] = 74] = "PermitExpirationDate";
    UsdlKeys[UsdlKeys["PermitIdentifier"] = 75] = "PermitIdentifier";
    UsdlKeys[UsdlKeys["PermitIssueDate"] = 76] = "PermitIssueDate";
    UsdlKeys[UsdlKeys["NumberOfDuplicates"] = 77] = "NumberOfDuplicates";
    UsdlKeys[UsdlKeys["HAZMATExpirationDate"] = 78] = "HAZMATExpirationDate";
    UsdlKeys[UsdlKeys["MedicalIndicator"] = 79] = "MedicalIndicator";
    UsdlKeys[UsdlKeys["NonResident"] = 80] = "NonResident";
    UsdlKeys[UsdlKeys["UniqueCustomerId"] = 81] = "UniqueCustomerId";
    UsdlKeys[UsdlKeys["DataDiscriminator"] = 82] = "DataDiscriminator";
    UsdlKeys[UsdlKeys["DocumentExpirationMonth"] = 83] = "DocumentExpirationMonth";
    UsdlKeys[UsdlKeys["DocumentNonexpiring"] = 84] = "DocumentNonexpiring";
    UsdlKeys[UsdlKeys["SecurityVersion"] = 85] = "SecurityVersion";
})(UsdlKeys || (UsdlKeys = {}));
var BlinkId = /** @class */ (function (_super) {
    __extends(BlinkId, _super);
    function BlinkId() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BlinkId.prototype.scanWithCamera = function (overlaySettings, recognizerCollection, licenses) { return cordova(this, "scanWithCamera", { "callbackOrder": "reverse" }, arguments); };
    Object.defineProperty(BlinkId.prototype, "Date", {
        get: function () { return cordovaPropertyGet(this, "Date"); },
        set: function (value) { cordovaPropertySet(this, "Date", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "Point", {
        get: function () { return cordovaPropertyGet(this, "Point"); },
        set: function (value) { cordovaPropertySet(this, "Point", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "Quadrilateral", {
        get: function () { return cordovaPropertyGet(this, "Quadrilateral"); },
        set: function (value) { cordovaPropertySet(this, "Quadrilateral", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "BarcodeOverlaySettings", {
        get: function () { return cordovaPropertyGet(this, "BarcodeOverlaySettings"); },
        set: function (value) { cordovaPropertySet(this, "BarcodeOverlaySettings", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "DocumentOverlaySettings", {
        get: function () { return cordovaPropertyGet(this, "DocumentOverlaySettings"); },
        set: function (value) { cordovaPropertySet(this, "DocumentOverlaySettings", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "DocumentVerificationOverlaySettings", {
        get: function () { return cordovaPropertyGet(this, "DocumentVerificationOverlaySettings"); },
        set: function (value) { cordovaPropertySet(this, "DocumentVerificationOverlaySettings", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "BlinkCardOverlaySettings", {
        get: function () { return cordovaPropertyGet(this, "BlinkCardOverlaySettings"); },
        set: function (value) { cordovaPropertySet(this, "BlinkCardOverlaySettings", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "RecognizerCollection", {
        get: function () { return cordovaPropertyGet(this, "RecognizerCollection"); },
        set: function (value) { cordovaPropertySet(this, "RecognizerCollection", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "BarcodeRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "BarcodeRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "BarcodeRecognizerResult", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "BarcodeRecognizer", {
        get: function () { return cordovaPropertyGet(this, "BarcodeRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "BarcodeRecognizer", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "SuccessFrameGrabberRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "SuccessFrameGrabberRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "SuccessFrameGrabberRecognizerResult", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "SuccessFrameGrabberRecognizer", {
        get: function () { return cordovaPropertyGet(this, "SuccessFrameGrabberRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "SuccessFrameGrabberRecognizer", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "AustraliaDlBackRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "AustraliaDlBackRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "AustraliaDlBackRecognizerResult", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "AustraliaDlBackRecognizer", {
        get: function () { return cordovaPropertyGet(this, "AustraliaDlBackRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "AustraliaDlBackRecognizer", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "AustraliaDlFrontRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "AustraliaDlFrontRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "AustraliaDlFrontRecognizerResult", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "AustraliaDlFrontRecognizer", {
        get: function () { return cordovaPropertyGet(this, "AustraliaDlFrontRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "AustraliaDlFrontRecognizer", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "AustriaCombinedRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "AustriaCombinedRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "AustriaCombinedRecognizerResult", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "AustriaCombinedRecognizer", {
        get: function () { return cordovaPropertyGet(this, "AustriaCombinedRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "AustriaCombinedRecognizer", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "AustriaDlFrontRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "AustriaDlFrontRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "AustriaDlFrontRecognizerResult", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "AustriaDlFrontRecognizer", {
        get: function () { return cordovaPropertyGet(this, "AustriaDlFrontRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "AustriaDlFrontRecognizer", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "AustriaIdBackRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "AustriaIdBackRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "AustriaIdBackRecognizerResult", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "AustriaIdBackRecognizer", {
        get: function () { return cordovaPropertyGet(this, "AustriaIdBackRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "AustriaIdBackRecognizer", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "AustriaIdFrontRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "AustriaIdFrontRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "AustriaIdFrontRecognizerResult", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "AustriaIdFrontRecognizer", {
        get: function () { return cordovaPropertyGet(this, "AustriaIdFrontRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "AustriaIdFrontRecognizer", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "AustriaPassportRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "AustriaPassportRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "AustriaPassportRecognizerResult", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "AustriaPassportRecognizer", {
        get: function () { return cordovaPropertyGet(this, "AustriaPassportRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "AustriaPassportRecognizer", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "BlinkCardEliteRecognizer", {
        get: function () { return cordovaPropertyGet(this, "BlinkCardEliteRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "BlinkCardEliteRecognizer", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "BlinkCardEliteRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "BlinkCardEliteRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "BlinkCardEliteRecognizerResult", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "BlinkCardRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "BlinkCardRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "BlinkCardRecognizerResult", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "BlinkCardRecognizer", {
        get: function () { return cordovaPropertyGet(this, "BlinkCardRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "BlinkCardRecognizer", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "ColombiaDlFrontRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "ColombiaDlFrontRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "ColombiaDlFrontRecognizerResult", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "ColombiaIdBackRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "ColombiaIdBackRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "ColombiaIdBackRecognizerResult", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "ColombiaIdBackRecognizer", {
        get: function () { return cordovaPropertyGet(this, "ColombiaIdBackRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "ColombiaIdBackRecognizer", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "ColombiaIdFrontRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "ColombiaIdFrontRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "ColombiaIdFrontRecognizerResult", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "ColombiaIdFrontRecognizer", {
        get: function () { return cordovaPropertyGet(this, "ColombiaIdFrontRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "ColombiaIdFrontRecognizer", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "CroatiaCombinedRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "CroatiaCombinedRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "CroatiaCombinedRecognizerResult", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "CroatiaIdBackRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "CroatiaIdBackRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "CroatiaIdBackRecognizerResult", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "CroatiaIdFrontRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "CroatiaIdFrontRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "CroatiaIdFrontRecognizerResult", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "CyprusIdBackRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "CyprusIdBackRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "CyprusIdBackRecognizerResult", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "CyprusIdBackRecognizer", {
        get: function () { return cordovaPropertyGet(this, "CyprusIdBackRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "CyprusIdBackRecognizer", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "CyprusIdFrontRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "CyprusIdFrontRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "CyprusIdFrontRecognizerResult", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "CyprusIdFrontRecognizer", {
        get: function () { return cordovaPropertyGet(this, "CyprusIdFrontRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "CyprusIdFrontRecognizer", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "CzechiaCombinedRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "CzechiaCombinedRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "CzechiaCombinedRecognizerResult", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "CzechiaIdBackRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "CzechiaIdBackRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "CzechiaIdBackRecognizerResult", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "DocumentFaceRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "DocumentFaceRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "DocumentFaceRecognizerResult", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "EgyptIdFrontRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "EgyptIdFrontRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "EgyptIdFrontRecognizerResult", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "EgyptIdFrontRecognizer", {
        get: function () { return cordovaPropertyGet(this, "EgyptIdFrontRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "EgyptIdFrontRecognizer", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "EudlRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "EudlRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "EudlRecognizerResult", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "GermanyCombinedRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "GermanyCombinedRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "GermanyCombinedRecognizerResult", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "GermanyCombinedRecognizer", {
        get: function () { return cordovaPropertyGet(this, "GermanyCombinedRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "GermanyCombinedRecognizer", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "GermanyDlBackRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "GermanyDlBackRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "GermanyDlBackRecognizerResult", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "GermanyDlBackRecognizer", {
        get: function () { return cordovaPropertyGet(this, "GermanyDlBackRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "GermanyDlBackRecognizer", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "GermanyIdBackRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "GermanyIdBackRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "GermanyIdBackRecognizerResult", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "GermanyIdBackRecognizer", {
        get: function () { return cordovaPropertyGet(this, "GermanyIdBackRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "GermanyIdBackRecognizer", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "GermanyIdFrontRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "GermanyIdFrontRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "GermanyIdFrontRecognizerResult", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "GermanyIdFrontRecognizer", {
        get: function () { return cordovaPropertyGet(this, "GermanyIdFrontRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "GermanyIdFrontRecognizer", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "GermanyOldIdRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "GermanyOldIdRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "GermanyOldIdRecognizerResult", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "GermanyOldIdRecognizer", {
        get: function () { return cordovaPropertyGet(this, "GermanyOldIdRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "GermanyOldIdRecognizer", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "GermanyPassportRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "GermanyPassportRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "GermanyPassportRecognizerResult", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "GermanyPassportRecognizer", {
        get: function () { return cordovaPropertyGet(this, "GermanyPassportRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "GermanyPassportRecognizer", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "HongKongIdFrontRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "HongKongIdFrontRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "HongKongIdFrontRecognizerResult", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "HongKongIdFrontRecognizer", {
        get: function () { return cordovaPropertyGet(this, "HongKongIdFrontRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "HongKongIdFrontRecognizer", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "IkadRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "IkadRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "IkadRecognizerResult", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "IkadRecognizer", {
        get: function () { return cordovaPropertyGet(this, "IkadRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "IkadRecognizer", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "IndonesiaIdFrontRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "IndonesiaIdFrontRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "IndonesiaIdFrontRecognizerResult", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "IndonesiaIdFrontRecognizer", {
        get: function () { return cordovaPropertyGet(this, "IndonesiaIdFrontRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "IndonesiaIdFrontRecognizer", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "IrelandDlFrontRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "IrelandDlFrontRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "IrelandDlFrontRecognizerResult", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "IrelandDlFrontRecognizer", {
        get: function () { return cordovaPropertyGet(this, "IrelandDlFrontRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "IrelandDlFrontRecognizer", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "ItalyDlFrontRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "ItalyDlFrontRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "ItalyDlFrontRecognizerResult", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "ItalyDlFrontRecognizer", {
        get: function () { return cordovaPropertyGet(this, "ItalyDlFrontRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "ItalyDlFrontRecognizer", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "JordanCombinedRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "JordanCombinedRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "JordanCombinedRecognizerResult", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "JordanCombinedRecognizer", {
        get: function () { return cordovaPropertyGet(this, "JordanCombinedRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "JordanCombinedRecognizer", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "JordanIdBackRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "JordanIdBackRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "JordanIdBackRecognizerResult", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "JordanIdBackRecognizer", {
        get: function () { return cordovaPropertyGet(this, "JordanIdBackRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "JordanIdBackRecognizer", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "JordanIdFrontRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "JordanIdFrontRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "JordanIdFrontRecognizerResult", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "JordanIdFrontRecognizer", {
        get: function () { return cordovaPropertyGet(this, "JordanIdFrontRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "JordanIdFrontRecognizer", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "KuwaitIdBackRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "KuwaitIdBackRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "KuwaitIdBackRecognizerResult", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "KuwaitIdBackRecognizer", {
        get: function () { return cordovaPropertyGet(this, "KuwaitIdBackRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "KuwaitIdBackRecognizer", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "KuwaitIdFrontRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "KuwaitIdFrontRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "KuwaitIdFrontRecognizerResult", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "KuwaitIdFrontRecognizer", {
        get: function () { return cordovaPropertyGet(this, "KuwaitIdFrontRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "KuwaitIdFrontRecognizer", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "MalaysiaDlFrontRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "MalaysiaDlFrontRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "MalaysiaDlFrontRecognizerResult", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "MalaysiaDlFrontRecognizer", {
        get: function () { return cordovaPropertyGet(this, "MalaysiaDlFrontRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "MalaysiaDlFrontRecognizer", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "MalaysiaMyTenteraRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "MalaysiaMyTenteraRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "MalaysiaMyTenteraRecognizerResult", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "MalaysiaMyTenteraRecognizer", {
        get: function () { return cordovaPropertyGet(this, "MalaysiaMyTenteraRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "MalaysiaMyTenteraRecognizer", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "MexicoVoterIdFrontRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "MexicoVoterIdFrontRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "MexicoVoterIdFrontRecognizerResult", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "MexicoVoterIdFrontRecognizer", {
        get: function () { return cordovaPropertyGet(this, "MexicoVoterIdFrontRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "MexicoVoterIdFrontRecognizer", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "MoroccoIdBackRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "MoroccoIdBackRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "MoroccoIdBackRecognizerResult", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "MoroccoIdBackRecognizer", {
        get: function () { return cordovaPropertyGet(this, "MoroccoIdBackRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "MoroccoIdBackRecognizer", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "MoroccoIdFrontRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "MoroccoIdFrontRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "MoroccoIdFrontRecognizerResult", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "MoroccoIdFrontRecognizer", {
        get: function () { return cordovaPropertyGet(this, "MoroccoIdFrontRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "MoroccoIdFrontRecognizer", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "MrtdCombinedRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "MrtdCombinedRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "MrtdCombinedRecognizerResult", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "MrtdCombinedRecognizer", {
        get: function () { return cordovaPropertyGet(this, "MrtdCombinedRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "MrtdCombinedRecognizer", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "MrtdRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "MrtdRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "MrtdRecognizerResult", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "MrtdRecognizer", {
        get: function () { return cordovaPropertyGet(this, "MrtdRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "MrtdRecognizer", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "MyKadBackRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "MyKadBackRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "MyKadBackRecognizerResult", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "MyKadBackRecognizer", {
        get: function () { return cordovaPropertyGet(this, "MyKadBackRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "MyKadBackRecognizer", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "MyKadFrontRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "MyKadFrontRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "MyKadFrontRecognizerResult", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "MyKadFrontRecognizer", {
        get: function () { return cordovaPropertyGet(this, "MyKadFrontRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "MyKadFrontRecognizer", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "NewZealandDlFrontRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "NewZealandDlFrontRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "NewZealandDlFrontRecognizerResult", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "NewZealandDlFrontRecognizer", {
        get: function () { return cordovaPropertyGet(this, "NewZealandDlFrontRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "NewZealandDlFrontRecognizer", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "Pdf417RecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "Pdf417RecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "Pdf417RecognizerResult", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "Pdf417Recognizer", {
        get: function () { return cordovaPropertyGet(this, "Pdf417Recognizer"); },
        set: function (value) { cordovaPropertySet(this, "Pdf417Recognizer", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "PolandCombinedRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "PolandCombinedRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "PolandCombinedRecognizerResult", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "PolandCombinedRecognizer", {
        get: function () { return cordovaPropertyGet(this, "PolandCombinedRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "PolandCombinedRecognizer", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "PolandIdBackRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "PolandIdBackRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "PolandIdBackRecognizerResult", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "PolandIdBackRecognizer", {
        get: function () { return cordovaPropertyGet(this, "PolandIdBackRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "PolandIdBackRecognizer", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "PolandIdFrontRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "PolandIdFrontRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "PolandIdFrontRecognizerResult", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "PolandIdFrontRecognizer", {
        get: function () { return cordovaPropertyGet(this, "PolandIdFrontRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "PolandIdFrontRecognizer", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "RomaniaIdFrontRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "RomaniaIdFrontRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "RomaniaIdFrontRecognizerResult", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "RomaniaIdFrontRecognizer", {
        get: function () { return cordovaPropertyGet(this, "RomaniaIdFrontRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "RomaniaIdFrontRecognizer", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "SerbiaCombinedRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "SerbiaCombinedRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "SerbiaCombinedRecognizerResult", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "SerbiaCombinedRecognizer", {
        get: function () { return cordovaPropertyGet(this, "SerbiaCombinedRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "SerbiaCombinedRecognizer", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "SerbiaIdBackRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "SerbiaIdBackRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "SerbiaIdBackRecognizerResult", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "SerbiaIdBackRecognizer", {
        get: function () { return cordovaPropertyGet(this, "SerbiaIdBackRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "SerbiaIdBackRecognizer", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "SerbiaIdFrontRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "SerbiaIdFrontRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "SerbiaIdFrontRecognizerResult", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "SerbiaIdFrontRecognizer", {
        get: function () { return cordovaPropertyGet(this, "SerbiaIdFrontRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "SerbiaIdFrontRecognizer", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "SimNumberRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "SimNumberRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "SimNumberRecognizerResult", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "SimNumberRecognizer", {
        get: function () { return cordovaPropertyGet(this, "SimNumberRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "SimNumberRecognizer", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "SingaporeChangiEmployeeIdRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "SingaporeChangiEmployeeIdRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "SingaporeChangiEmployeeIdRecognizerResult", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "SingaporeChangiEmployeeIdRecognizer", {
        get: function () { return cordovaPropertyGet(this, "SingaporeChangiEmployeeIdRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "SingaporeChangiEmployeeIdRecognizer", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "SingaporeCombinedRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "SingaporeCombinedRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "SingaporeCombinedRecognizerResult", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "SingaporeCombinedRecognizer", {
        get: function () { return cordovaPropertyGet(this, "SingaporeCombinedRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "SingaporeCombinedRecognizer", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "SingaporeDlFrontRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "SingaporeDlFrontRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "SingaporeDlFrontRecognizerResult", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "SingaporeDlFrontRecognizer", {
        get: function () { return cordovaPropertyGet(this, "SingaporeDlFrontRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "SingaporeDlFrontRecognizer", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "SingaporeIdBackRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "SingaporeIdBackRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "SingaporeIdBackRecognizerResult", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "SingaporeIdBackRecognizer", {
        get: function () { return cordovaPropertyGet(this, "SingaporeIdBackRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "SingaporeIdBackRecognizer", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "SingaporeIdFrontRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "SingaporeIdFrontRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "SingaporeIdFrontRecognizerResult", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "SingaporeIdFrontRecognizer", {
        get: function () { return cordovaPropertyGet(this, "SingaporeIdFrontRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "SingaporeIdFrontRecognizer", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "SlovakiaCombinedRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "SlovakiaCombinedRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "SlovakiaCombinedRecognizerResult", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "SlovakiaCombinedRecognizer", {
        get: function () { return cordovaPropertyGet(this, "SlovakiaCombinedRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "SlovakiaCombinedRecognizer", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "SlovakiaIdBackRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "SlovakiaIdBackRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "SlovakiaIdBackRecognizerResult", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "SlovakiaIdBackRecognizer", {
        get: function () { return cordovaPropertyGet(this, "SlovakiaIdBackRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "SlovakiaIdBackRecognizer", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "SlovakiaIdFrontRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "SlovakiaIdFrontRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "SlovakiaIdFrontRecognizerResult", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "SlovakiaIdFrontRecognizer", {
        get: function () { return cordovaPropertyGet(this, "SlovakiaIdFrontRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "SlovakiaIdFrontRecognizer", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "SloveniaCombinedRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "SloveniaCombinedRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "SloveniaCombinedRecognizerResult", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "SloveniaCombinedRecognizer", {
        get: function () { return cordovaPropertyGet(this, "SloveniaCombinedRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "SloveniaCombinedRecognizer", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "SloveniaIdBackRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "SloveniaIdBackRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "SloveniaIdBackRecognizerResult", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "SloveniaIdBackRecognizer", {
        get: function () { return cordovaPropertyGet(this, "SloveniaIdBackRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "SloveniaIdBackRecognizer", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "SloveniaIdFrontRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "SloveniaIdFrontRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "SloveniaIdFrontRecognizerResult", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "SloveniaIdFrontRecognizer", {
        get: function () { return cordovaPropertyGet(this, "SloveniaIdFrontRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "SloveniaIdFrontRecognizer", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "SpainDlFrontRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "SpainDlFrontRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "SpainDlFrontRecognizerResult", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "SpainDlFrontRecognizer", {
        get: function () { return cordovaPropertyGet(this, "SpainDlFrontRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "SpainDlFrontRecognizer", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "SwedenDlFrontRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "SwedenDlFrontRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "SwedenDlFrontRecognizerResult", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "SwedenDlFrontRecognizer", {
        get: function () { return cordovaPropertyGet(this, "SwedenDlFrontRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "SwedenDlFrontRecognizer", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "SwitzerlandDlFrontRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "SwitzerlandDlFrontRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "SwitzerlandDlFrontRecognizerResult", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "SwitzerlandDlFrontRecognizer", {
        get: function () { return cordovaPropertyGet(this, "SwitzerlandDlFrontRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "SwitzerlandDlFrontRecognizer", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "SwitzerlandDlBackRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "SwitzerlandDlBackRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "SwitzerlandDlBackRecognizerResult", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "SwitzerlandDlBackRecognizer", {
        get: function () { return cordovaPropertyGet(this, "SwitzerlandDlBackRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "SwitzerlandDlBackRecognizer", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "SwitzerlandIdFrontRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "SwitzerlandIdFrontRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "SwitzerlandIdFrontRecognizerResult", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "SwitzerlandIdFrontRecognizer", {
        get: function () { return cordovaPropertyGet(this, "SwitzerlandIdFrontRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "SwitzerlandIdFrontRecognizer", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "SwitzerlandPassportRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "SwitzerlandPassportRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "SwitzerlandPassportRecognizerResult", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "SwitzerlandPassportRecognizer", {
        get: function () { return cordovaPropertyGet(this, "SwitzerlandPassportRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "SwitzerlandPassportRecognizer", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "UnitedArabEmiratesDlFrontRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "UnitedArabEmiratesDlFrontRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "UnitedArabEmiratesDlFrontRecognizerResult", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "UnitedArabEmiratesDlFrontRecognizer", {
        get: function () { return cordovaPropertyGet(this, "UnitedArabEmiratesDlFrontRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "UnitedArabEmiratesDlFrontRecognizer", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "UnitedArabEmiratesIdBackRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "UnitedArabEmiratesIdBackRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "UnitedArabEmiratesIdBackRecognizerResult", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "UnitedArabEmiratesIdBackRecognizer", {
        get: function () { return cordovaPropertyGet(this, "UnitedArabEmiratesIdBackRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "UnitedArabEmiratesIdBackRecognizer", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "UnitedArabEmiratesIdFrontRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "UnitedArabEmiratesIdFrontRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "UnitedArabEmiratesIdFrontRecognizerResult", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "UnitedArabEmiratesIdFrontRecognizer", {
        get: function () { return cordovaPropertyGet(this, "UnitedArabEmiratesIdFrontRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "UnitedArabEmiratesIdFrontRecognizer", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "VinRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "VinRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "VinRecognizerResult", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "VinRecognizer", {
        get: function () { return cordovaPropertyGet(this, "VinRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "VinRecognizer", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "UsdlRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "UsdlRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "UsdlRecognizerResult", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "UsdlRecognizer", {
        get: function () { return cordovaPropertyGet(this, "UsdlRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "UsdlRecognizer", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "UsdlCombinedRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "UsdlCombinedRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "UsdlCombinedRecognizerResult", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "UsdlCombinedRecognizer", {
        get: function () { return cordovaPropertyGet(this, "UsdlCombinedRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "UsdlCombinedRecognizer", value); },
        enumerable: true,
        configurable: true
    });
    BlinkId.pluginName = "BlinkId";
    BlinkId.plugin = "blinkid-cordova";
    BlinkId.pluginRef = "cordova.plugins.BlinkID";
    BlinkId.repo = "https://github.com/BlinkID/blinkid-phonegap";
    BlinkId.install = "ionic cordova plugin add blinkid-cordova --variable CAMERA_USAGE_DESCRIPTION=\"Enable your camera so that you can scan your ID to validate your account\"";
    BlinkId.platforms = ["iOS", "Android"];
    BlinkId = __decorate([
        Injectable()
    ], BlinkId);
    return BlinkId;
}(IonicNativePlugin));
export { BlinkId };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2JsaW5raWQvbmd4L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPLHNFQUF1RCxNQUFNLG9CQUFvQixDQUFDO0FBQ3pGLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFPM0MsTUFBTSxDQUFOLElBQVksV0FhWDtBQWJELFdBQVksV0FBVztJQUNyQiw2Q0FBUSxDQUFBO0lBQ1IsaURBQVUsQ0FBQTtJQUNWLHlEQUFjLENBQUE7SUFDZCw2Q0FBUSxDQUFBO0lBQ1IsNkNBQVEsQ0FBQTtJQUNSLDZDQUFRLENBQUE7SUFDUiwrQ0FBUyxDQUFBO0lBQ1QsbURBQVcsQ0FBQTtJQUNYLGlEQUFVLENBQUE7SUFDViw0Q0FBUSxDQUFBO0lBQ1IsZ0RBQVUsQ0FBQTtJQUNWLGtEQUFXLENBQUE7QUFDYixDQUFDLEVBYlcsV0FBVyxLQUFYLFdBQVcsUUFhdEI7QUFFRCxNQUFNLENBQU4sSUFBWSxxQkFJWDtBQUpELFdBQVkscUJBQXFCO0lBQy9CLG1FQUFTLENBQUE7SUFDVCwyRUFBYSxDQUFBO0lBQ2IsbUVBQVMsQ0FBQTtBQUNYLENBQUMsRUFKVyxxQkFBcUIsS0FBckIscUJBQXFCLFFBSWhDO0FBRUQsTUFBTSxDQUFOLElBQVksZ0JBT1g7QUFQRCxXQUFZLGdCQUFnQjtJQUMxQiw2REFBVyxDQUFBO0lBQ1gsdUVBQWdCLENBQUE7SUFDaEIsK0RBQVksQ0FBQTtJQUNaLHVEQUFRLENBQUE7SUFDUixpRUFBYSxDQUFBO0lBQ2IscUZBQXVCLENBQUE7QUFDekIsQ0FBQyxFQVBXLGdCQUFnQixLQUFoQixnQkFBZ0IsUUFPM0I7QUFFRCxNQUFNLENBQU4sSUFBWSxXQUtYO0FBTEQsV0FBWSxXQUFXO0lBQ3JCLHlDQUFNLENBQUE7SUFDTixtREFBVyxDQUFBO0lBQ1gsbURBQVcsQ0FBQTtJQUNYLHVEQUFhLENBQUE7QUFDZixDQUFDLEVBTFcsV0FBVyxLQUFYLFdBQVcsUUFLdEI7QUFFRCxNQUFNLENBQU4sSUFBWSx3QkFJWDtBQUpELFdBQVksd0JBQXdCO0lBQ2xDLHFFQUFPLENBQUE7SUFDUCxxRUFBTyxDQUFBO0lBQ1AsaUdBQXFCLENBQUE7QUFDdkIsQ0FBQyxFQUpXLHdCQUF3QixLQUF4Qix3QkFBd0IsUUFJbkM7QUFFRCxNQUFNLENBQU4sSUFBWSxRQXVGWDtBQXZGRCxXQUFZLFFBQVE7SUFDbEIsdURBQWdCLENBQUE7SUFDaEIseUVBQXlCLENBQUE7SUFDekIsbUVBQXNCLENBQUE7SUFDdEIsaUVBQXFCLENBQUE7SUFDckIsK0RBQW9CLENBQUE7SUFDcEIscURBQWUsQ0FBQTtJQUNmLHFDQUFPLENBQUE7SUFDUCwrQ0FBWSxDQUFBO0lBQ1oseURBQWlCLENBQUE7SUFDakIscURBQWUsQ0FBQTtJQUNmLDhFQUE0QixDQUFBO0lBQzVCLGtFQUFzQixDQUFBO0lBQ3RCLHNEQUFnQixDQUFBO0lBQ2hCLDRDQUFXLENBQUE7SUFDWCxnREFBYSxDQUFBO0lBQ2IsZ0RBQWEsQ0FBQTtJQUNiLG9FQUF1QixDQUFBO0lBQ3ZCLGtEQUFjLENBQUE7SUFDZCxvREFBZSxDQUFBO0lBQ2Ysc0RBQWdCLENBQUE7SUFDaEIsMERBQWtCLENBQUE7SUFDbEIsd0RBQWlCLENBQUE7SUFDakIsMERBQWtCLENBQUE7SUFDbEIsc0RBQWdCLENBQUE7SUFDaEIsd0RBQWlCLENBQUE7SUFDakIsOERBQW9CLENBQUE7SUFDcEIsZ0VBQXFCLENBQUE7SUFDckIsd0VBQXlCLENBQUE7SUFDekIsc0VBQXdCLENBQUE7SUFDeEIsd0VBQXlCLENBQUE7SUFDekIsd0RBQWlCLENBQUE7SUFDakIsNERBQW1CLENBQUE7SUFDbkIsMERBQWtCLENBQUE7SUFDbEIsb0RBQWUsQ0FBQTtJQUNmLDBFQUEwQixDQUFBO0lBQzFCLDRFQUEyQixDQUFBO0lBQzNCLDhFQUE0QixDQUFBO0lBQzVCLDBEQUFrQixDQUFBO0lBQ2xCLGtGQUE4QixDQUFBO0lBQzlCLHNFQUF3QixDQUFBO0lBQ3hCLHdFQUF5QixDQUFBO0lBQ3pCLDhDQUFZLENBQUE7SUFDWiw4Q0FBWSxDQUFBO0lBQ1osOENBQVksQ0FBQTtJQUNaLHdFQUF5QixDQUFBO0lBQ3pCLDhFQUE0QixDQUFBO0lBQzVCLDBEQUFrQixDQUFBO0lBQ2xCLDBEQUFrQixDQUFBO0lBQ2xCLG9EQUFlLENBQUE7SUFDZiw4Q0FBWSxDQUFBO0lBQ1osNERBQW1CLENBQUE7SUFDbkIsb0ZBQStCLENBQUE7SUFDL0IsNEVBQTJCLENBQUE7SUFDM0Isa0ZBQThCLENBQUE7SUFDOUIsZ0ZBQTZCLENBQUE7SUFDN0Isd0ZBQWlDLENBQUE7SUFDakMsd0ZBQWlDLENBQUE7SUFDakMsa0VBQXNCLENBQUE7SUFDdEIsMEZBQWtDLENBQUE7SUFDbEMsc0VBQXdCLENBQUE7SUFDeEIsMEZBQWtDLENBQUE7SUFDbEMsOEVBQTRCLENBQUE7SUFDNUIsOEVBQTRCLENBQUE7SUFDNUIsOEVBQTRCLENBQUE7SUFDNUIsd0hBQWlELENBQUE7SUFDakQsMEdBQTBDLENBQUE7SUFDMUMsNEdBQTJDLENBQUE7SUFDM0MsNEVBQTJCLENBQUE7SUFDM0IsZ0VBQXFCLENBQUE7SUFDckIsMEVBQTBCLENBQUE7SUFDMUIsOEVBQTRCLENBQUE7SUFDNUIsZ0VBQXFCLENBQUE7SUFDckIsNERBQW1CLENBQUE7SUFDbkIsNERBQW1CLENBQUE7SUFDbkIsd0VBQXlCLENBQUE7SUFDekIsZ0VBQXFCLENBQUE7SUFDckIsOERBQW9CLENBQUE7SUFDcEIsb0VBQXVCLENBQUE7SUFDdkIsd0VBQXlCLENBQUE7SUFDekIsZ0VBQXFCLENBQUE7SUFDckIsc0RBQWdCLENBQUE7SUFDaEIsZ0VBQXFCLENBQUE7SUFDckIsa0VBQXNCLENBQUE7SUFDdEIsOEVBQTRCLENBQUE7SUFDNUIsc0VBQXdCLENBQUE7SUFDeEIsOERBQW9CLENBQUE7QUFDdEIsQ0FBQyxFQXZGVyxRQUFRLEtBQVIsUUFBUSxRQXVGbkI7O0lBMmhGNEIsMkJBQWlCOzs7O0lBVTVDLGdDQUFjLGFBQ1osZUFBZ0MsRUFDaEMsb0JBQTBDLEVBQzFDLFFBQWtCOzBCQUdELHlCQUFJOzs7Ozs7MEJBQ0osMEJBQUs7Ozs7OzswQkFDTCxrQ0FBYTs7Ozs7OzBCQUViLDJDQUFzQjs7Ozs7OzBCQUN0Qiw0Q0FBdUI7Ozs7OzswQkFDdkIsd0RBQW1DOzs7Ozs7MEJBQ25DLDZDQUF3Qjs7Ozs7OzBCQUV4Qix5Q0FBb0I7Ozs7OzswQkFFcEIsNENBQXVCOzs7Ozs7MEJBQ3ZCLHNDQUFpQjs7Ozs7OzBCQUNqQix3REFBbUM7Ozs7OzswQkFDbkMsa0RBQTZCOzs7Ozs7MEJBRTdCLG9EQUErQjs7Ozs7OzBCQUMvQiw4Q0FBeUI7Ozs7OzswQkFDekIscURBQWdDOzs7Ozs7MEJBQ2hDLCtDQUEwQjs7Ozs7OzBCQUMxQixvREFBK0I7Ozs7OzswQkFDL0IsOENBQXlCOzs7Ozs7MEJBQ3pCLG1EQUE4Qjs7Ozs7OzBCQUM5Qiw2Q0FBd0I7Ozs7OzswQkFDeEIsa0RBQTZCOzs7Ozs7MEJBQzdCLDRDQUF1Qjs7Ozs7OzBCQUN2QixtREFBOEI7Ozs7OzswQkFDOUIsNkNBQXdCOzs7Ozs7MEJBQ3hCLG9EQUErQjs7Ozs7OzBCQUMvQiw4Q0FBeUI7Ozs7OzswQkFDekIsNkNBQXdCOzs7Ozs7MEJBQ3hCLG1EQUE4Qjs7Ozs7OzBCQUM5Qiw4Q0FBeUI7Ozs7OzswQkFDekIsd0NBQW1COzs7Ozs7MEJBQ25CLG9EQUErQjs7Ozs7OzBCQUMvQixtREFBOEI7Ozs7OzswQkFDOUIsNkNBQXdCOzs7Ozs7MEJBQ3hCLG9EQUErQjs7Ozs7OzBCQUMvQiw4Q0FBeUI7Ozs7OzswQkFDekIsb0RBQStCOzs7Ozs7MEJBQy9CLGtEQUE2Qjs7Ozs7OzBCQUM3QixtREFBOEI7Ozs7OzswQkFDOUIsaURBQTRCOzs7Ozs7MEJBQzVCLDJDQUFzQjs7Ozs7OzBCQUN0QixrREFBNkI7Ozs7OzswQkFDN0IsNENBQXVCOzs7Ozs7MEJBQ3ZCLG9EQUErQjs7Ozs7OzBCQUMvQixrREFBNkI7Ozs7OzswQkFDN0IsaURBQTRCOzs7Ozs7MEJBQzVCLGlEQUE0Qjs7Ozs7OzBCQUM1QiwyQ0FBc0I7Ozs7OzswQkFDdEIseUNBQW9COzs7Ozs7MEJBQ3BCLG9EQUErQjs7Ozs7OzBCQUMvQiw4Q0FBeUI7Ozs7OzswQkFDekIsa0RBQTZCOzs7Ozs7MEJBQzdCLDRDQUF1Qjs7Ozs7OzBCQUN2QixrREFBNkI7Ozs7OzswQkFDN0IsNENBQXVCOzs7Ozs7MEJBQ3ZCLG1EQUE4Qjs7Ozs7OzBCQUM5Qiw2Q0FBd0I7Ozs7OzswQkFDeEIsaURBQTRCOzs7Ozs7MEJBQzVCLDJDQUFzQjs7Ozs7OzBCQUN0QixvREFBK0I7Ozs7OzswQkFDL0IsOENBQXlCOzs7Ozs7MEJBQ3pCLG9EQUErQjs7Ozs7OzBCQUMvQiw4Q0FBeUI7Ozs7OzswQkFDekIseUNBQW9COzs7Ozs7MEJBQ3BCLG1DQUFjOzs7Ozs7MEJBQ2QscURBQWdDOzs7Ozs7MEJBQ2hDLCtDQUEwQjs7Ozs7OzBCQUMxQixtREFBOEI7Ozs7OzswQkFDOUIsNkNBQXdCOzs7Ozs7MEJBQ3hCLGlEQUE0Qjs7Ozs7OzBCQUM1QiwyQ0FBc0I7Ozs7OzswQkFDdEIsbURBQThCOzs7Ozs7MEJBQzlCLDZDQUF3Qjs7Ozs7OzBCQUN4QixpREFBNEI7Ozs7OzswQkFDNUIsMkNBQXNCOzs7Ozs7MEJBQ3RCLGtEQUE2Qjs7Ozs7OzBCQUM3Qiw0Q0FBdUI7Ozs7OzswQkFDdkIsaURBQTRCOzs7Ozs7MEJBQzVCLDJDQUFzQjs7Ozs7OzBCQUN0QixrREFBNkI7Ozs7OzswQkFDN0IsNENBQXVCOzs7Ozs7MEJBQ3ZCLG9EQUErQjs7Ozs7OzBCQUMvQiw4Q0FBeUI7Ozs7OzswQkFDekIsc0RBQWlDOzs7Ozs7MEJBQ2pDLGdEQUEyQjs7Ozs7OzBCQUMzQix1REFBa0M7Ozs7OzswQkFDbEMsaURBQTRCOzs7Ozs7MEJBQzVCLGtEQUE2Qjs7Ozs7OzBCQUM3Qiw0Q0FBdUI7Ozs7OzswQkFDdkIsbURBQThCOzs7Ozs7MEJBQzlCLDZDQUF3Qjs7Ozs7OzBCQUN4QixpREFBNEI7Ozs7OzswQkFDNUIsMkNBQXNCOzs7Ozs7MEJBQ3RCLHlDQUFvQjs7Ozs7OzBCQUNwQixtQ0FBYzs7Ozs7OzBCQUNkLDhDQUF5Qjs7Ozs7OzBCQUN6Qix3Q0FBbUI7Ozs7OzswQkFDbkIsK0NBQTBCOzs7Ozs7MEJBQzFCLHlDQUFvQjs7Ozs7OzBCQUNwQixzREFBaUM7Ozs7OzswQkFDakMsZ0RBQTJCOzs7Ozs7MEJBQzNCLDJDQUFzQjs7Ozs7OzBCQUN0QixxQ0FBZ0I7Ozs7OzswQkFDaEIsbURBQThCOzs7Ozs7MEJBQzlCLDZDQUF3Qjs7Ozs7OzBCQUN4QixpREFBNEI7Ozs7OzswQkFDNUIsMkNBQXNCOzs7Ozs7MEJBQ3RCLGtEQUE2Qjs7Ozs7OzBCQUM3Qiw0Q0FBdUI7Ozs7OzswQkFDdkIsbURBQThCOzs7Ozs7MEJBQzlCLDZDQUF3Qjs7Ozs7OzBCQUN4QixtREFBOEI7Ozs7OzswQkFDOUIsNkNBQXdCOzs7Ozs7MEJBQ3hCLGlEQUE0Qjs7Ozs7OzBCQUM1QiwyQ0FBc0I7Ozs7OzswQkFDdEIsa0RBQTZCOzs7Ozs7MEJBQzdCLDRDQUF1Qjs7Ozs7OzBCQUN2Qiw4Q0FBeUI7Ozs7OzswQkFDekIsd0NBQW1COzs7Ozs7MEJBQ25CLDhEQUF5Qzs7Ozs7OzBCQUN6Qyx3REFBbUM7Ozs7OzswQkFDbkMsc0RBQWlDOzs7Ozs7MEJBQ2pDLGdEQUEyQjs7Ozs7OzBCQUMzQixxREFBZ0M7Ozs7OzswQkFDaEMsK0NBQTBCOzs7Ozs7MEJBQzFCLG9EQUErQjs7Ozs7OzBCQUMvQiw4Q0FBeUI7Ozs7OzswQkFDekIscURBQWdDOzs7Ozs7MEJBQ2hDLCtDQUEwQjs7Ozs7OzBCQUMxQixxREFBZ0M7Ozs7OzswQkFDaEMsK0NBQTBCOzs7Ozs7MEJBQzFCLG1EQUE4Qjs7Ozs7OzBCQUM5Qiw2Q0FBd0I7Ozs7OzswQkFDeEIsb0RBQStCOzs7Ozs7MEJBQy9CLDhDQUF5Qjs7Ozs7OzBCQUN6QixxREFBZ0M7Ozs7OzswQkFDaEMsK0NBQTBCOzs7Ozs7MEJBQzFCLG1EQUE4Qjs7Ozs7OzBCQUM5Qiw2Q0FBd0I7Ozs7OzswQkFDeEIsb0RBQStCOzs7Ozs7MEJBQy9CLDhDQUF5Qjs7Ozs7OzBCQUN6QixpREFBNEI7Ozs7OzswQkFDNUIsMkNBQXNCOzs7Ozs7MEJBQ3RCLGtEQUE2Qjs7Ozs7OzBCQUM3Qiw0Q0FBdUI7Ozs7OzswQkFDdkIsdURBQWtDOzs7Ozs7MEJBQ2xDLGlEQUE0Qjs7Ozs7OzBCQUM1QixzREFBaUM7Ozs7OzswQkFDakMsZ0RBQTJCOzs7Ozs7MEJBQzNCLHVEQUFrQzs7Ozs7OzBCQUNsQyxpREFBNEI7Ozs7OzswQkFDNUIsd0RBQW1DOzs7Ozs7MEJBQ25DLGtEQUE2Qjs7Ozs7OzBCQUM3Qiw4REFBeUM7Ozs7OzswQkFDekMsd0RBQW1DOzs7Ozs7MEJBQ25DLDZEQUF3Qzs7Ozs7OzBCQUN4Qyx1REFBa0M7Ozs7OzswQkFDbEMsOERBQXlDOzs7Ozs7MEJBQ3pDLHdEQUFtQzs7Ozs7OzBCQUNuQyx3Q0FBbUI7Ozs7OzswQkFDbkIsa0NBQWE7Ozs7OzswQkFDYix5Q0FBb0I7Ozs7OzswQkFDcEIsbUNBQWM7Ozs7OzswQkFDZCxpREFBNEI7Ozs7OzswQkFDNUIsMkNBQXNCOzs7Ozs7Ozs7Ozs7SUF2TDlCLE9BQU87UUFEbkIsVUFBVSxFQUFFO09BQ0EsT0FBTztrQkFycUZwQjtFQXFxRjZCLGlCQUFpQjtTQUFqQyxPQUFPIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29yZG92YSwgQ29yZG92YVByb3BlcnR5LCBJb25pY05hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBMaWNlbnNlcyB7XG4gIGlvczogc3RyaW5nO1xuICBhbmRyb2lkOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBlbnVtIEJhcmNvZGVUeXBlIHtcbiAgTm9uZSA9IDEsXG4gIFFSQ29kZSA9IDIsXG4gIERhdGFNYXRyaXggPSAzLFxuICBVUENFID0gNCxcbiAgVVBDQSA9IDUsXG4gIEVBTjggPSA2LFxuICBFQU4xMyA9IDcsXG4gIENvZGUxMjggPSA4LFxuICBDb2RlMzkgPSA5LFxuICBJVEYgPSAxMCxcbiAgQXp0ZWMgPSAxMSxcbiAgUERGNDE3ID0gMTJcbn1cblxuZXhwb3J0IGVudW0gUmVjb2duaXplclJlc3VsdFN0YXRlIHtcbiAgZW1wdHkgPSAxLFxuICB1bmNlcnRhaW4gPSAyLFxuICB2YWxpZCA9IDNcbn1cblxuZXhwb3J0IGVudW0gTXJ0ZERvY3VtZW50VHlwZSB7XG4gIFVua25vd24gPSAxLFxuICBJZGVudGl0eUNhcmQgPSAyLFxuICBQYXNzcG9ydCA9IDMsXG4gIFZpc2EgPSA0LFxuICBHcmVlbkNhcmQgPSA1LFxuICBNYWxheXNpYW5QYXNzSU1NMTNQID0gNlxufVxuXG5leHBvcnQgZW51bSBFdWRsQ291bnRyeSB7XG4gIFVLID0gMSxcbiAgR2VybWFueSA9IDIsXG4gIEF1c3RyaWEgPSAzLFxuICBBdXRvbWF0aWMgPSA0XG59XG5cbmV4cG9ydCBlbnVtIERvY3VtZW50RmFjZURldGVjdG9yVHlwZSB7XG4gIFREMSA9IDEsXG4gIFREMiA9IDIsXG4gIFBhc3Nwb3J0c0FuZFZpc2FzID0gM1xufVxuXG5leHBvcnQgZW51bSBVc2RsS2V5cyB7XG4gIERvY3VtZW50VHlwZSA9IDAsXG4gIFN0YW5kYXJkVmVyc2lvbk51bWJlciA9IDEsXG4gIEN1c3RvbWVyRmFtaWx5TmFtZSA9IDIsXG4gIEN1c3RvbWVyRmlyc3ROYW1lID0gMyxcbiAgQ3VzdG9tZXJGdWxsTmFtZSA9IDQsXG4gIERhdGVPZkJpcnRoID0gNSxcbiAgU2V4ID0gNixcbiAgRXllQ29sb3IgPSA3LFxuICBBZGRyZXNzU3RyZWV0ID0gOCxcbiAgQWRkcmVzc0NpdHkgPSA5LFxuICBBZGRyZXNzSnVyaXNkaWN0aW9uQ29kZSA9IDEwLFxuICBBZGRyZXNzUG9zdGFsQ29kZSA9IDExLFxuICBGdWxsQWRkcmVzcyA9IDEyLFxuICBIZWlnaHQgPSAxMyxcbiAgSGVpZ2h0SW4gPSAxNCxcbiAgSGVpZ2h0Q20gPSAxNSxcbiAgQ3VzdG9tZXJNaWRkbGVOYW1lID0gMTYsXG4gIEhhaXJDb2xvciA9IDE3LFxuICBOYW1lU3VmZml4ID0gMTgsXG4gIEFLQUZ1bGxOYW1lID0gMTksXG4gIEFLQUZhbWlseU5hbWUgPSAyMCxcbiAgQUtBR2l2ZW5OYW1lID0gMjEsXG4gIEFLQVN1ZmZpeE5hbWUgPSAyMixcbiAgV2VpZ2h0UmFuZ2UgPSAyMyxcbiAgV2VpZ2h0UG91bmRzID0gMjQsXG4gIFdlaWdodEtpbG9ncmFtcyA9IDI1LFxuICBDdXN0b21lcklkTnVtYmVyID0gMjYsXG4gIEZhbWlseU5hbWVUcnVuY2F0aW9uID0gMjcsXG4gIEZpcnN0TmFtZVRydW5jYXRpb24gPSAyOCxcbiAgTWlkZGxlTmFtZVRydW5jYXRpb24gPSAyOSxcbiAgUGxhY2VPZkJpcnRoID0gMzAsXG4gIEFkZHJlc3NTdHJlZXQyID0gMzEsXG4gIFJhY2VFdGhuaWNpdHkgPSAzMixcbiAgTmFtZVByZWZpeCA9IDMzLFxuICBDb3VudHJ5SWRlbnRpZmljYXRpb24gPSAzNCxcbiAgUmVzaWRlbmNlU3RyZWV0QWRkcmVzcyA9IDM1LFxuICBSZXNpZGVuY2VTdHJlZXRBZGRyZXNzMiA9IDM2LFxuICBSZXNpZGVuY2VDaXR5ID0gMzcsXG4gIFJlc2lkZW5jZUp1cmlzZGljdGlvbkNvZGUgPSAzOCxcbiAgUmVzaWRlbmNlUG9zdGFsQ29kZSA9IDM5LFxuICBSZXNpZGVuY2VGdWxsQWRkcmVzcyA9IDQwLFxuICBVbmRlcjE4ID0gNDEsXG4gIFVuZGVyMTkgPSA0MixcbiAgVW5kZXIyMSA9IDQzLFxuICBTb2NpYWxTZWN1cml0eU51bWJlciA9IDQ0LFxuICBBS0FTb2NpYWxTZWN1cml0eU51bWJlciA9IDQ1LFxuICBBS0FNaWRkbGVOYW1lID0gNDYsXG4gIEFLQVByZWZpeE5hbWUgPSA0NyxcbiAgT3JnYW5Eb25vciA9IDQ4LFxuICBWZXRlcmFuID0gNDksXG4gIEFLQURhdGVPZkJpcnRoID0gNTAsXG4gIElzc3VlcklkZW50aWZpY2F0aW9uTnVtYmVyID0gNTEsXG4gIERvY3VtZW50RXhwaXJhdGlvbkRhdGUgPSA1MixcbiAgSnVyaXNkaWN0aW9uVmVyc2lvbk51bWJlciA9IDUzLFxuICBKdXJpc2RpY3Rpb25WZWhpY2xlQ2xhc3MgPSA1NCxcbiAgSnVyaXNkaWN0aW9uUmVzdHJpY3Rpb25Db2RlcyA9IDU1LFxuICBKdXJpc2RpY3Rpb25FbmRvcnNlbWVudENvZGVzID0gNTYsXG4gIERvY3VtZW50SXNzdWVEYXRlID0gNTcsXG4gIEZlZGVyYWxDb21tZXJjaWFsVmVoaWNsZUNvZGVzID0gNTgsXG4gIElzc3VpbmdKdXJpc2RpY3Rpb24gPSA1OSxcbiAgU3RhbmRhcmRWZWhpY2xlQ2xhc3NpZmljYXRpb24gPSA2MCxcbiAgSXNzdWluZ0p1cmlzZGljdGlvbk5hbWUgPSA2MSxcbiAgU3RhbmRhcmRFbmRvcnNlbWVudENvZGUgPSA2MixcbiAgU3RhbmRhcmRSZXN0cmljdGlvbkNvZGUgPSA2MyxcbiAgSnVyaXNkaWN0aW9uVmVoaWNsZUNsYXNzaWZpY2F0aW9uRGVzY3JpcHRpb24gPSA2NCxcbiAgSnVyaXNkaWN0aW9uRW5kb3JzbWVudENvZGVEZXNjcmlwdGlvbiA9IDY1LFxuICBKdXJpc2RpY3Rpb25SZXN0cmljdGlvbkNvZGVEZXNjcmlwdGlvbiA9IDY2LFxuICBJbnZlbnRvcnlDb250cm9sTnVtYmVyID0gNjcsXG4gIENhcmRSZXZpc2lvbkRhdGUgPSA2OCxcbiAgRG9jdW1lbnREaXNjcmltaW5hdG9yID0gNjksXG4gIExpbWl0ZWREdXJhdGlvbkRvY3VtZW50ID0gNzAsXG4gIEF1ZGl0SW5mb3JtYXRpb24gPSA3MSxcbiAgQ29tcGxpYW5jZVR5cGUgPSA3MixcbiAgSXNzdWVUaW1lc3RhbXAgPSA3MyxcbiAgUGVybWl0RXhwaXJhdGlvbkRhdGUgPSA3NCxcbiAgUGVybWl0SWRlbnRpZmllciA9IDc1LFxuICBQZXJtaXRJc3N1ZURhdGUgPSA3NixcbiAgTnVtYmVyT2ZEdXBsaWNhdGVzID0gNzcsXG4gIEhBWk1BVEV4cGlyYXRpb25EYXRlID0gNzgsXG4gIE1lZGljYWxJbmRpY2F0b3IgPSA3OSxcbiAgTm9uUmVzaWRlbnQgPSA4MCxcbiAgVW5pcXVlQ3VzdG9tZXJJZCA9IDgxLFxuICBEYXRhRGlzY3JpbWluYXRvciA9IDgyLFxuICBEb2N1bWVudEV4cGlyYXRpb25Nb250aCA9IDgzLFxuICBEb2N1bWVudE5vbmV4cGlyaW5nID0gODQsXG4gIFNlY3VyaXR5VmVyc2lvbiA9IDg1XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSW1hZ2VFeHRlbnNpb25GYWN0b3JzIHtcbiAgdXBGYWN0b3I6IG51bWJlcjtcbiAgcmlnaHRGYWN0b3I6IG51bWJlcjtcbiAgZG93bkZhY3RvcjogbnVtYmVyO1xuICBsZWZ0RmFjdG9yOiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGF0ZSB7XG4gIGRheTogc3RyaW5nO1xuICBtb250aDogc3RyaW5nO1xuICB5ZWFyOiBzdHJpbmc7XG59XG5leHBvcnQgaW50ZXJmYWNlIERhdGVDdG9yIHtcbiAgbmV3IChuYXRpdmVEYXRlOiBEYXRlKTogRGF0ZTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBQb2ludCB7XG4gIHg6IHN0cmluZztcbiAgeTogc3RyaW5nO1xufVxuZXhwb3J0IGludGVyZmFjZSBQb2ludEN0b3Ige1xuICBuZXcgKG5hdGl2ZVBvaW50OiBQb2ludCk6IFBvaW50O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFF1YWRyaWxhdGVyYWwge1xuICB1cHBlckxlZnQ6IHN0cmluZztcbiAgdXBwZXJSaWdodDogc3RyaW5nO1xuICBsb3dlckxlZnQ6IHN0cmluZztcbiAgbG93ZXJSaWdodDogc3RyaW5nO1xufVxuZXhwb3J0IGludGVyZmFjZSBRdWFkcmlsYXRlcmFsQ3RvciB7XG4gIG5ldyAobmF0aXZlUXVhZDogUXVhZHJpbGF0ZXJhbCk6IFF1YWRyaWxhdGVyYWw7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgT3ZlcmxheVNldHRpbmdzIHtcbiAgb3ZlcmxheVNldHRpbmdzVHlwZTogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEJhcmNvZGVPdmVybGF5U2V0dGluZ3MgZXh0ZW5kcyBPdmVybGF5U2V0dGluZ3Mge31cbmV4cG9ydCBpbnRlcmZhY2UgQmFyY29kZU92ZXJsYXlTZXR0aW5nc0N0b3Ige1xuICBuZXcoKTogQmFyY29kZU92ZXJsYXlTZXR0aW5ncztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBEb2N1bWVudE92ZXJsYXlTZXR0aW5ncyBleHRlbmRzIE92ZXJsYXlTZXR0aW5ncyB7fVxuZXhwb3J0IGludGVyZmFjZSBEb2N1bWVudE92ZXJsYXlTZXR0aW5nc0N0b3Ige1xuICBuZXcoKTogRG9jdW1lbnRPdmVybGF5U2V0dGluZ3M7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRG9jdW1lbnRWZXJpZmljYXRpb25PdmVybGF5U2V0dGluZ3MgZXh0ZW5kcyBPdmVybGF5U2V0dGluZ3Mge1xuICBmaXJzdFNpZGVTcGxhc2hNZXNzYWdlOiBzdHJpbmc7XG4gIHNlY29uZFNpZGVTcGxhc2hNZXNzYWdlOiBzdHJpbmc7XG4gIHNjYW5uaW5nRG9uZVNwbGFzaE1lc3NhZ2U6IHN0cmluZztcbiAgZmlyc3RTaWRlSW5zdHJ1Y3Rpb25zOiBzdHJpbmc7XG4gIHNlY29uZFNpZGVJbnN0cnVjdGlvbnM6IHN0cmluZztcbiAgZ2xhcmVNZXNzYWdlOiBzdHJpbmc7XG59XG5leHBvcnQgaW50ZXJmYWNlIERvY3VtZW50VmVyaWZpY2F0aW9uT3ZlcmxheVNldHRpbmdzQ3RvciB7XG4gIG5ldygpOiBEb2N1bWVudFZlcmlmaWNhdGlvbk92ZXJsYXlTZXR0aW5ncztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBCbGlua0NhcmRPdmVybGF5U2V0dGluZ3MgZXh0ZW5kcyBPdmVybGF5U2V0dGluZ3Mge1xuICBnbGFyZU1lc3NhZ2U6IHN0cmluZztcbn1cbmV4cG9ydCBpbnRlcmZhY2UgQmxpbmtDYXJkT3ZlcmxheVNldHRpbmdzQ3RvciB7XG4gIG5ldygpOiBCbGlua0NhcmRPdmVybGF5U2V0dGluZ3M7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmVjb2duaXplclJlc3VsdCB7XG4gIHJlc3VsdFN0YXRlOiBSZWNvZ25pemVyUmVzdWx0U3RhdGU7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmVjb2duaXplclJlc3VsdEN0b3I8VCBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHQ+IHtcbiAgbmV3IChuYXRpdmVSZXN1bHQ6IGFueSk6IFQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmVjb2duaXplcjxUIGV4dGVuZHMgUmVjb2duaXplclJlc3VsdCA9IGFueT4ge1xuICByZWNvZ25pemVyVHlwZTogc3RyaW5nO1xuICByZXN1bHQ6IFQ7XG4gIGNyZWF0ZVJlc3VsdEZyb21OYXRpdmUobmF0aXZlUmVzdWx0OiBhbnkpOiBUO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFJlY29nbml6ZXJDdG9yPFQgZXh0ZW5kcyBSZWNvZ25pemVyPiB7XG4gIG5ldyAoKTogVDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBSZWNvZ25pemVyQ29sbGVjdGlvbiB7XG4gIHJlY29nbml6ZXJBcnJheTogUmVjb2duaXplcltdO1xuICBhbGxvd011bHRpcGxlUmVzdWx0czogYm9vbGVhbjtcbiAgLy8gc2ljXG4gIG1pbGlzZWNvbmRzQmVmb3JlVGltZW91dDogbnVtYmVyO1xufVxuZXhwb3J0IGludGVyZmFjZSBSZWNvZ25pemVyQ29sbGVjdGlvbkN0b3Ige1xuICBuZXcgKHJlY29nbml6ZXJDb2xsZWN0aW9uOiBSZWNvZ25pemVyW10pOiBSZWNvZ25pemVyQ29sbGVjdGlvbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBCYXJjb2RlUmVjb2duaXplclJlc3VsdCBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHQge1xuICBiYXJjb2RlVHlwZTogQmFyY29kZVR5cGU7XG4gIHJhd0RhdGE6IHN0cmluZztcbiAgc3RyaW5nRGF0YTogc3RyaW5nO1xuICB1bmNlcnRhaW46IGJvb2xlYW47XG59XG5leHBvcnQgaW50ZXJmYWNlIEJhcmNvZGVSZWNvZ25pemVyUmVzdWx0Q3RvciBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHRDdG9yPEJhcmNvZGVSZWNvZ25pemVyUmVzdWx0PiB7fVxuXG5leHBvcnQgaW50ZXJmYWNlIEJhcmNvZGVSZWNvZ25pemVyIGV4dGVuZHMgUmVjb2duaXplcjxCYXJjb2RlUmVjb2duaXplclJlc3VsdD4ge1xuICBhdXRvU2NhbGVEZXRlY3Rpb246IGJvb2xlYW47XG4gIG51bGxRdWlldFpvbmVBbGxvd2VkOiBib29sZWFuO1xuICByZWFkQ29kZTM5QXNFeHRlbmRlZERhdGE6IGJvb2xlYW47XG4gIHNjYW5BenRlY0NvZGU6IGJvb2xlYW47XG4gIHNjYW5Db2RlMTI4OiBib29sZWFuO1xuICBzY2FuQ29kZTM5OiBib29sZWFuO1xuICBzY2FuRGF0YU1hdHJpeDogYm9vbGVhbjtcbiAgc2NhbkVhbjEzOiBib29sZWFuO1xuICBzY2FuRWFuODogYm9vbGVhbjtcbiAgc2NhbkludmVyc2U6IGJvb2xlYW47XG4gIHNjYW5JdGY6IGJvb2xlYW47XG4gIHNjYW5QZGY0MTc6IGJvb2xlYW47XG4gIHNjYW5RckNvZGU6IGJvb2xlYW47XG4gIHNjYW5VbmNlcnRhaW46IGJvb2xlYW47XG4gIHNjYW5VcGNhOiBib29sZWFuO1xuICBzY2FuVXBjZTogYm9vbGVhbjtcbiAgc2xvd2VyVGhvcm91Z2hTY2FuOiBib29sZWFuO1xufVxuZXhwb3J0IGludGVyZmFjZSBCYXJjb2RlUmVjb2duaXplckN0b3IgZXh0ZW5kcyBSZWNvZ25pemVyQ3RvcjxCYXJjb2RlUmVjb2duaXplcj4ge31cblxuZXhwb3J0IGludGVyZmFjZSBNcnpSZXN1bHQge1xuICBkb2N1bWVudFR5cGU6IHN0cmluZztcbiAgcHJpbWFyeUlkOiBzdHJpbmc7XG4gIHNlY29uZGFyeUlkOiBzdHJpbmc7XG4gIGlzc3Vlcjogc3RyaW5nO1xuICBkYXRlT2ZCaXJ0aDogRGF0ZTtcbiAgZG9jdW1lbnROdW1iZXI6IHN0cmluZztcbiAgbmF0aW9uYWxpdHk6IHN0cmluZztcbiAgZ2VuZGVyOiBzdHJpbmc7XG4gIGRvY3VtZW50Q29kZTogc3RyaW5nO1xuICBkYXRlT2ZFeHBpcnk6IERhdGU7XG4gIG9wdDE6IHN0cmluZztcbiAgb3B0Mjogc3RyaW5nO1xuICBhbGllbk51bWJlcjogc3RyaW5nO1xuICBhcHBsaWNhdGlvblJlY2VpcHROdW1iZXI6IHN0cmluZztcbiAgaW1taWdyYW50Q2FzZU51bWJlcjogc3RyaW5nO1xuICBtcnpUZXh0OiBzdHJpbmc7XG4gIG1yelBhcnNlZDogYm9vbGVhbjtcbiAgbXJ6VmVyaWZpZWQ6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU3VjY2Vzc0ZyYW1lR3JhYmJlclJlY29nbml6ZXJSZXN1bHQgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0IHtcbiAgc3VjY2Vzc0ZyYW1lOiBzdHJpbmc7XG59XG5leHBvcnQgaW50ZXJmYWNlIFN1Y2Nlc3NGcmFtZUdyYWJiZXJSZWNvZ25pemVyUmVzdWx0Q3RvciBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHRDdG9yPFN1Y2Nlc3NGcmFtZUdyYWJiZXJSZWNvZ25pemVyUmVzdWx0PiB7fVxuXG5leHBvcnQgaW50ZXJmYWNlIFN1Y2Nlc3NGcmFtZUdyYWJiZXJSZWNvZ25pemVyIGV4dGVuZHMgUmVjb2duaXplcjxTdWNjZXNzRnJhbWVHcmFiYmVyUmVjb2duaXplclJlc3VsdD4ge1xuICBzbGF2ZVJlY29nbml6ZXI6IFJlY29nbml6ZXI7XG4gIGNyZWF0ZVJlc3VsdEZyb21OYXRpdmUobmF0aXZlUmVzdWx0OiB7IHNsYXZlUmVjb2duaXplclJlc3VsdDogYW55IH0pOiBTdWNjZXNzRnJhbWVHcmFiYmVyUmVjb2duaXplclJlc3VsdDtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgU3VjY2Vzc0ZyYW1lR3JhYmJlclJlY29nbml6ZXJDdG9yIHtcbiAgbmV3IChyZWNvZ25pemVyOiBSZWNvZ25pemVyKTogU3VjY2Vzc0ZyYW1lR3JhYmJlclJlY29nbml6ZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQXVzdHJhbGlhRGxCYWNrUmVjb2duaXplclJlc3VsdCBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHQge1xuICBhZGRyZXNzOiBzdHJpbmc7XG4gIGRhdGVPZkV4cGlyeTogRGF0ZTtcbiAgZnVsbERvY3VtZW50SW1hZ2U6IHN0cmluZztcbiAgbGFzdE5hbWU6IHN0cmluZztcbiAgbGljZW5zZU51bWJlcjogc3RyaW5nO1xufVxuZXhwb3J0IGludGVyZmFjZSBBdXN0cmFsaWFEbEJhY2tSZWNvZ25pemVyUmVzdWx0Q3RvciBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHRDdG9yPEF1c3RyYWxpYURsQmFja1JlY29nbml6ZXJSZXN1bHQ+IHt9XG5cbmV4cG9ydCBpbnRlcmZhY2UgQXVzdHJhbGlhRGxCYWNrUmVjb2duaXplciBleHRlbmRzIFJlY29nbml6ZXI8QXVzdHJhbGlhRGxCYWNrUmVjb2duaXplclJlc3VsdD4ge1xuICBleHRyYWN0QWRkcmVzczogYm9vbGVhbjtcbiAgZXh0cmFjdERhdGVPZkJpcnRoOiBib29sZWFuO1xuICBleHRyYWN0TGFzdE5hbWU6IGJvb2xlYW47XG4gIGZ1bGxEb2N1bWVudEltYWdlRHBpOiBudW1iZXI7XG4gIHJldHVybkZ1bGxEb2N1bWVudEltYWdlOiBib29sZWFuO1xufVxuZXhwb3J0IGludGVyZmFjZSBBdXN0cmFsaWFEbEJhY2tSZWNvZ25pemVyQ3RvciBleHRlbmRzIFJlY29nbml6ZXJDdG9yPEF1c3RyYWxpYURsQmFja1JlY29nbml6ZXI+IHt9XG5cbmV4cG9ydCBpbnRlcmZhY2UgQXVzdHJhbGlhRGxGcm9udFJlY29nbml6ZXJSZXN1bHQgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0IHtcbiAgYWRkcmVzczogc3RyaW5nO1xuICBkYXRlT2ZCaXJ0aDogRGF0ZTtcbiAgZGF0ZU9mRXhwaXJ5OiBEYXRlO1xuICBmYWNlSW1hZ2U6IHN0cmluZztcbiAgZnVsbERvY3VtZW50SW1hZ2U6IHN0cmluZztcbiAgbGljZW5zZU51bWJlcjogc3RyaW5nO1xuICBsaWNlbnNlVHlwZTogc3RyaW5nO1xuICBuYW1lOiBzdHJpbmc7XG4gIHNpZ25hdHVyZUltYWdlOiBzdHJpbmc7XG59XG5leHBvcnQgaW50ZXJmYWNlIEF1c3RyYWxpYURsRnJvbnRSZWNvZ25pemVyUmVzdWx0Q3RvciBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHRDdG9yPEF1c3RyYWxpYURsRnJvbnRSZWNvZ25pemVyUmVzdWx0PiB7fVxuXG5leHBvcnQgaW50ZXJmYWNlIEF1c3RyYWxpYURsRnJvbnRSZWNvZ25pemVyIGV4dGVuZHMgUmVjb2duaXplcjxBdXN0cmFsaWFEbEZyb250UmVjb2duaXplclJlc3VsdD4ge1xuICBleHRyYWN0QWRkcmVzczogYm9vbGVhbjtcbiAgZXh0cmFjdERhdGVPZkJpcnRoOiBib29sZWFuO1xuICBleHRyYWN0RGF0ZU9mRXhwaXJ5OiBib29sZWFuO1xuICBmdWxsRG9jdW1lbnRJbWFnZURwaTogbnVtYmVyO1xuICByZXR1cm5GYWNlSW1hZ2U6IGJvb2xlYW47XG4gIHJldHVybkZ1bGxEb2N1bWVudEltYWdlOiBib29sZWFuO1xuICByZXR1cm5TaWduYXR1cmVJbWFnZTogYm9vbGVhbjtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgQXVzdHJhbGlhRGxGcm9udFJlY29nbml6ZXJDdG9yIGV4dGVuZHMgUmVjb2duaXplckN0b3I8QXVzdHJhbGlhRGxGcm9udFJlY29nbml6ZXI+IHt9XG5cbmV4cG9ydCBpbnRlcmZhY2UgQXVzdHJpYUNvbWJpbmVkUmVjb2duaXplclJlc3VsdCBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHQge1xuICBkYXRlT2ZCaXJ0aDogRGF0ZTtcbiAgZGF0ZU9mRXhwaXJ5OiBEYXRlO1xuICBkYXRlT2ZJc3N1YW5jZTogRGF0ZTtcbiAgZGlnaXRhbFNpZ25hdHVyZTogc3RyaW5nO1xuICBkaWdpdGFsU2lnbmF0dXJlVmVyc2lvbjogc3RyaW5nO1xuICBkb2N1bWVudERhdGFNYXRjaDogYm9vbGVhbjtcbiAgZG9jdW1lbnROdW1iZXI6IHN0cmluZztcbiAgZXllQ29sb3I6IHN0cmluZztcbiAgZmFjZUltYWdlOiBzdHJpbmc7XG4gIGZ1bGxEb2N1bWVudEJhY2tJbWFnZTogc3RyaW5nO1xuICBmdWxsRG9jdW1lbnRGcm9udEltYWdlOiBzdHJpbmc7XG4gIGdpdmVuTmFtZTogc3RyaW5nO1xuICBoZWlnaHQ6IHN0cmluZztcbiAgaXNzdWluZ0F1dGhvcml0eTogc3RyaW5nO1xuICBtcnRkVmVyaWZpZWQ6IGJvb2xlYW47XG4gIG5hdGlvbmFsaXR5OiBzdHJpbmc7XG4gIHBsYWNlT2ZCaXJ0aDogc3RyaW5nO1xuICBwcmluY2lwYWxSZXNpZGVuY2U6IHN0cmluZztcbiAgc2Nhbm5pbmdGaXJzdFNpZGVEb25lOiBib29sZWFuO1xuICBzZXg6IHN0cmluZztcbiAgc2lnbmF0dXJlSW1hZ2U6IHN0cmluZztcbiAgc3VybmFtZTogc3RyaW5nO1xufVxuZXhwb3J0IGludGVyZmFjZSBBdXN0cmlhQ29tYmluZWRSZWNvZ25pemVyUmVzdWx0Q3RvciBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHRDdG9yPEF1c3RyaWFDb21iaW5lZFJlY29nbml6ZXJSZXN1bHQ+IHt9XG5cbmV4cG9ydCBpbnRlcmZhY2UgQXVzdHJpYUNvbWJpbmVkUmVjb2duaXplciBleHRlbmRzIFJlY29nbml6ZXI8QXVzdHJpYUNvbWJpbmVkUmVjb2duaXplclJlc3VsdD4ge1xuICBkZXRlY3RHbGFyZTogYm9vbGVhbjtcbiAgZXh0cmFjdERhdGVPZkJpcnRoOiBib29sZWFuO1xuICBleHRyYWN0RGF0ZU9mRXhwaXJ5OiBib29sZWFuO1xuICBleHRyYWN0RGF0ZU9mSXNzdWFuY2U6IGJvb2xlYW47XG4gIGV4dHJhY3REYXRlT2ZJc3N1ZTogYm9vbGVhbjtcbiAgZXh0cmFjdEdpdmVuTmFtZTogYm9vbGVhbjtcbiAgZXh0cmFjdEhlaWdodDogYm9vbGVhbjtcbiAgZXh0cmFjdElzc3VpbmdBdXRob3JpdHk6IGJvb2xlYW47XG4gIGV4dHJhY3ROYXRpb25hbGl0eTogYm9vbGVhbjtcbiAgZXh0cmFjdFBhc3Nwb3J0TnVtYmVyOiBib29sZWFuO1xuICBleHRyYWN0UGxhY2VPZkJpcnRoOiBib29sZWFuO1xuICBleHRyYWN0UHJpbmNpcGFsUmVzaWRlbmNlOiBib29sZWFuO1xuICBleHRyYWN0U2V4OiBib29sZWFuO1xuICBleHRyYWN0U3VybmFtZTogYm9vbGVhbjtcbiAgZmFjZUltYWdlRHBpOiBudW1iZXI7XG4gIGZ1bGxEb2N1bWVudEltYWdlRHBpOiBudW1iZXI7XG4gIGZ1bGxEb2N1bWVudEltYWdlRXh0ZW5zaW9uRmFjdG9yczogSW1hZ2VFeHRlbnNpb25GYWN0b3JzO1xuICByZXR1cm5GYWNlSW1hZ2U6IGJvb2xlYW47XG4gIHJldHVybkZ1bGxEb2N1bWVudEltYWdlOiBib29sZWFuO1xuICBzaWduUmVzdWx0OiBib29sZWFuO1xuICBzaWduYXR1cmVJbWFnZURwaTogbnVtYmVyO1xufVxuZXhwb3J0IGludGVyZmFjZSBBdXN0cmlhQ29tYmluZWRSZWNvZ25pemVyQ3RvciBleHRlbmRzIFJlY29nbml6ZXJDdG9yPEF1c3RyaWFDb21iaW5lZFJlY29nbml6ZXI+IHt9XG5cbmV4cG9ydCBpbnRlcmZhY2UgQXVzdHJpYURsRnJvbnRSZWNvZ25pemVyUmVzdWx0IGV4dGVuZHMgUmVjb2duaXplclJlc3VsdCB7XG4gIGRhdGVPZkJpcnRoOiBEYXRlO1xuICBkYXRlT2ZFeHBpcnk6IERhdGU7XG4gIGRhdGVPZklzc3VlOiBEYXRlO1xuICBmYWNlSW1hZ2U6IHN0cmluZztcbiAgZmlyc3ROYW1lOiBzdHJpbmc7XG4gIGZ1bGxEb2N1bWVudEltYWdlOiBzdHJpbmc7XG4gIGlzc3VpbmdBdXRob3JpdHk6IHN0cmluZztcbiAgbGljZW5zZU51bWJlcjogc3RyaW5nO1xuICBuYW1lOiBzdHJpbmc7XG4gIHBsYWNlT2ZCaXJ0aDogc3RyaW5nO1xuICBzaWduYXR1cmVJbWFnZTogc3RyaW5nO1xuICB2ZWhpY2xlQ2F0ZWdvcmllczogc3RyaW5nO1xufVxuZXhwb3J0IGludGVyZmFjZSBBdXN0cmlhRGxGcm9udFJlY29nbml6ZXJSZXN1bHRDdG9yIGV4dGVuZHMgUmVjb2duaXplclJlc3VsdEN0b3I8QXVzdHJpYURsRnJvbnRSZWNvZ25pemVyUmVzdWx0PiB7fVxuXG5leHBvcnQgaW50ZXJmYWNlIEF1c3RyaWFEbEZyb250UmVjb2duaXplciBleHRlbmRzIFJlY29nbml6ZXI8QXVzdHJpYURsRnJvbnRSZWNvZ25pemVyUmVzdWx0PiB7XG4gIGRldGVjdEdsYXJlOiBib29sZWFuO1xuICBleHRyYWN0RGF0ZU9mQmlydGg6IGJvb2xlYW47XG4gIGV4dHJhY3REYXRlT2ZFeHBpcnk6IGJvb2xlYW47XG4gIGV4dHJhY3REYXRlT2ZJc3N1ZTogYm9vbGVhbjtcbiAgZXh0cmFjdEZpcnN0TmFtZTogYm9vbGVhbjtcbiAgZXh0cmFjdElzc3VpbmdBdXRob3JpdHk6IGJvb2xlYW47XG4gIGV4dHJhY3ROYW1lOiBib29sZWFuO1xuICBleHRyYWN0UGxhY2VPZkJpcnRoOiBib29sZWFuO1xuICBleHRyYWN0VmVoaWNsZUNhdGVnb3JpZXM6IGJvb2xlYW47XG4gIGZhY2VJbWFnZURwaTogbnVtYmVyO1xuICBmdWxsRG9jdW1lbnRJbWFnZURwaTogbnVtYmVyO1xuICBmdWxsRG9jdW1lbnRJbWFnZUV4dGVuc2lvbkZhY3RvcnM6IEltYWdlRXh0ZW5zaW9uRmFjdG9ycztcbiAgcmV0dXJuRmFjZUltYWdlOiBib29sZWFuO1xuICByZXR1cm5GdWxsRG9jdW1lbnRJbWFnZTogYm9vbGVhbjtcbiAgcmV0dXJuU2lnbmF0dXJlSW1hZ2U6IGJvb2xlYW47XG4gIHNpZ25hdHVyZUltYWdlRHBpOiBudW1iZXI7XG59XG5leHBvcnQgaW50ZXJmYWNlIEF1c3RyaWFEbEZyb250UmVjb2duaXplckN0b3IgZXh0ZW5kcyBSZWNvZ25pemVyQ3RvcjxBdXN0cmlhRGxGcm9udFJlY29nbml6ZXI+IHt9XG5cbmV4cG9ydCBpbnRlcmZhY2UgQXVzdHJpYUlkQmFja1JlY29nbml6ZXJSZXN1bHQgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0IHtcbiAgZGF0ZU9mSXNzdWFuY2U6IERhdGU7XG4gIGRvY3VtZW50TnVtYmVyOiBzdHJpbmc7XG4gIGV5ZUNvbG9yOiBzdHJpbmc7XG4gIGZ1bGxEb2N1bWVudEltYWdlOiBzdHJpbmc7XG4gIGhlaWdodDogc3RyaW5nO1xuICBpc3N1aW5nQXV0aG9yaXR5OiBzdHJpbmc7XG4gIG1yelJlc3VsdDogTXJ6UmVzdWx0O1xuICBwbGFjZU9mQmlydGg6IHN0cmluZztcbiAgcHJpbmNpcGFsUmVzaWRlbmNlOiBzdHJpbmc7XG59XG5leHBvcnQgaW50ZXJmYWNlIEF1c3RyaWFJZEJhY2tSZWNvZ25pemVyUmVzdWx0Q3RvciBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHRDdG9yPEF1c3RyaWFJZEJhY2tSZWNvZ25pemVyUmVzdWx0PiB7fVxuXG5leHBvcnQgaW50ZXJmYWNlIEF1c3RyaWFJZEJhY2tSZWNvZ25pemVyIGV4dGVuZHMgUmVjb2duaXplcjxBdXN0cmlhSWRCYWNrUmVjb2duaXplclJlc3VsdD4ge1xuICBkZXRlY3RHbGFyZTogYm9vbGVhbjtcbiAgZXh0cmFjdERhdGVPZklzc3VhbmNlOiBib29sZWFuO1xuICBleHRyYWN0SGVpZ2h0OiBib29sZWFuO1xuICBleHRyYWN0SXNzdWluZ0F1dGhvcml0eTogYm9vbGVhbjtcbiAgZXh0cmFjdFBsYWNlT2ZCaXJ0aDogYm9vbGVhbjtcbiAgZXh0cmFjdFByaW5jaXBhbFJlc2lkZW5jZTogYm9vbGVhbjtcbiAgZnVsbERvY3VtZW50SW1hZ2VEcGk6IG51bWJlcjtcbiAgZnVsbERvY3VtZW50SW1hZ2VFeHRlbnNpb25GYWN0b3JzOiBJbWFnZUV4dGVuc2lvbkZhY3RvcnM7XG4gIHJldHVybkZ1bGxEb2N1bWVudEltYWdlOiBib29sZWFuO1xufVxuZXhwb3J0IGludGVyZmFjZSBBdXN0cmlhSWRCYWNrUmVjb2duaXplckN0b3IgZXh0ZW5kcyBSZWNvZ25pemVyQ3RvcjxBdXN0cmlhSWRCYWNrUmVjb2duaXplcj4ge31cblxuZXhwb3J0IGludGVyZmFjZSBBdXN0cmlhSWRGcm9udFJlY29nbml6ZXJSZXN1bHQgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0IHtcbiAgZGF0ZU9mQmlydGg6IERhdGU7XG4gIGRvY3VtZW50TnVtYmVyOiBzdHJpbmc7XG4gIGZhY2VJbWFnZTogc3RyaW5nO1xuICBmdWxsRG9jdW1lbnRJbWFnZTogc3RyaW5nO1xuICBnaXZlbk5hbWU6IHN0cmluZztcbiAgc2V4OiBzdHJpbmc7XG4gIHNpZ25hdHVyZUltYWdlOiBzdHJpbmc7XG4gIHN1cm5hbWU6IHN0cmluZztcbn1cbmV4cG9ydCBpbnRlcmZhY2UgQXVzdHJpYUlkRnJvbnRSZWNvZ25pemVyUmVzdWx0Q3RvciBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHRDdG9yPEF1c3RyaWFJZEJhY2tSZWNvZ25pemVyUmVzdWx0PiB7fVxuXG5leHBvcnQgaW50ZXJmYWNlIEF1c3RyaWFJZEZyb250UmVjb2duaXplciBleHRlbmRzIFJlY29nbml6ZXI8QXVzdHJpYUlkRnJvbnRSZWNvZ25pemVyUmVzdWx0PiB7XG4gIGRldGVjdEdsYXJlOiBib29sZWFuO1xuICBleHRyYWN0RGF0ZU9mQmlydGg6IGJvb2xlYW47XG4gIGV4dHJhY3RHaXZlbk5hbWU6IGJvb2xlYW47XG4gIGV4dHJhY3RTZXg6IGJvb2xlYW47XG4gIGV4dHJhY3RTdXJuYW1lOiBib29sZWFuO1xuICBmYWNlSW1hZ2VEcGk6IG51bWJlcjtcbiAgZnVsbERvY3VtZW50SW1hZ2VEcGk6IG51bWJlcjtcbiAgZnVsbERvY3VtZW50SW1hZ2VFeHRlbnNpb25GYWN0b3JzOiBJbWFnZUV4dGVuc2lvbkZhY3RvcnM7XG4gIHJldHVybkZhY2VJbWFnZTogYm9vbGVhbjtcbiAgcmV0dXJuU2lnbmF0dXJlSW1hZ2U6IGJvb2xlYW47XG4gIHNpZ25hdHVyZUltYWdlRHBpOiBudW1iZXI7XG59XG5leHBvcnQgaW50ZXJmYWNlIEF1c3RyaWFJZEZyb250UmVjb2duaXplckN0b3IgZXh0ZW5kcyBSZWNvZ25pemVyQ3RvcjxBdXN0cmlhSWRGcm9udFJlY29nbml6ZXI+IHt9XG5cbmV4cG9ydCBpbnRlcmZhY2UgQXVzdHJpYVBhc3Nwb3J0UmVjb2duaXplclJlc3VsdCBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHQge1xuICBkYXRlT2ZCaXJ0aDogRGF0ZTtcbiAgZGF0ZU9mRXhwaXJ5OiBEYXRlO1xuICBkYXRlT2ZJc3N1YW5jZTogRGF0ZTtcbiAgZmFjZUltYWdlOiBzdHJpbmc7XG4gIGZ1bGxEb2N1bWVudEltYWdlOiBzdHJpbmc7XG4gIGdpdmVuTmFtZTogc3RyaW5nO1xuICBoZWlnaHQ6IHN0cmluZztcbiAgaXNzdWluZ0F1dGhvcml0eTogc3RyaW5nO1xuICBtcnpSZXN1bHQ6IE1yelJlc3VsdDtcbiAgbmF0aW9uYWxpdHk6IHN0cmluZztcbiAgcGFzc3BvcnROdW1iZXI6IHN0cmluZztcbiAgcGxhY2VPZkJpcnRoOiBzdHJpbmc7XG4gIHNleDogc3RyaW5nO1xuICBzaWduYXR1cmVJbWFnZTogc3RyaW5nO1xuICBzdXJuYW1lOiBzdHJpbmc7XG59XG5leHBvcnQgaW50ZXJmYWNlIEF1c3RyaWFQYXNzcG9ydFJlY29nbml6ZXJSZXN1bHRDdG9yIGV4dGVuZHMgUmVjb2duaXplclJlc3VsdEN0b3I8QXVzdHJpYVBhc3Nwb3J0UmVjb2duaXplclJlc3VsdD4ge31cblxuZXhwb3J0IGludGVyZmFjZSBBdXN0cmlhUGFzc3BvcnRSZWNvZ25pemVyIGV4dGVuZHMgUmVjb2duaXplcjxBdXN0cmlhUGFzc3BvcnRSZWNvZ25pemVyUmVzdWx0PiB7XG4gIGRldGVjdEdsYXJlOiBib29sZWFuO1xuICBleHRyYWN0RGF0ZU9mQmlydGg6IGJvb2xlYW47XG4gIGV4dHJhY3REYXRlT2ZFeHBpcnk6IGJvb2xlYW47XG4gIGV4dHJhY3REYXRlT2ZJc3N1ZTogYm9vbGVhbjtcbiAgZXh0cmFjdEdpdmVuTmFtZTogYm9vbGVhbjtcbiAgZXh0cmFjdEhlaWdodDogYm9vbGVhbjtcbiAgZXh0cmFjdElzc3VpbmdBdXRob3JpdHk6IGJvb2xlYW47XG4gIGV4dHJhY3ROYXRpb25hbGl0eTogYm9vbGVhbjtcbiAgZXh0cmFjdFBhc3Nwb3J0TnVtYmVyOiBib29sZWFuO1xuICBleHRyYWN0UGxhY2VPZkJpcnRoOiBib29sZWFuO1xuICBleHRyYWN0U2V4OiBib29sZWFuO1xuICBmYWNlSW1hZ2VEcGk6IG51bWJlcjtcbiAgZnVsbERvY3VtZW50SW1hZ2VEcGk6IG51bWJlcjtcbiAgZnVsbERvY3VtZW50SW1hZ2VFeHRlbnNpb25GYWN0b3JzOiBJbWFnZUV4dGVuc2lvbkZhY3RvcnM7XG4gIHJldHVybkZhY2VJbWFnZTogYm9vbGVhbjtcbiAgcmV0dXJuRnVsbERvY3VtZW50SW1hZ2U6IGJvb2xlYW47XG4gIHJldHVyblNpZ25hdHVyZUltYWdlOiBib29sZWFuO1xuICBzaWduYXR1cmVJbWFnZURwaTogbnVtYmVyO1xufVxuZXhwb3J0IGludGVyZmFjZSBBdXN0cmlhUGFzc3BvcnRSZWNvZ25pemVyQ3RvciBleHRlbmRzIFJlY29nbml6ZXJDdG9yPEF1c3RyaWFQYXNzcG9ydFJlY29nbml6ZXI+IHt9XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29sb21iaWFEbEZyb250UmVjb2duaXplclJlc3VsdCBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHQge1xuICBkYXRlT2ZCaXJ0aDogRGF0ZTtcbiAgZGF0ZU9mSXNzdWU6IERhdGU7XG4gIGRyaXZlclJlc3RyaWN0aW9uczogc3RyaW5nO1xuICBmYWNlSW1hZ2U6IHN0cmluZztcbiAgZnVsbERvY3VtZW50SW1hZ2U6IHN0cmluZztcbiAgaXNzdWluZ0FnZW5jeTogc3RyaW5nO1xuICBsaWNlbnNlTnVtYmVyOiBzdHJpbmc7XG4gIG5hbWU6IHN0cmluZztcbn1cbmV4cG9ydCBpbnRlcmZhY2UgQ29sb21iaWFEbEZyb250UmVjb2duaXplclJlc3VsdEN0b3IgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0Q3RvcjxDb2xvbWJpYURsRnJvbnRSZWNvZ25pemVyUmVzdWx0PiB7fVxuXG5leHBvcnQgaW50ZXJmYWNlIENvbG9tYmlhRGxGcm9udFJlY29nbml6ZXIgZXh0ZW5kcyBSZWNvZ25pemVyPENvbG9tYmlhRGxGcm9udFJlY29nbml6ZXJSZXN1bHQ+IHtcbiAgZGV0ZWN0R2xhcmU6IGJvb2xlYW47XG4gIGV4dHJhY3REYXRlT2ZCaXJ0aDogYm9vbGVhbjtcbiAgZXh0cmFjdERyaXZlclJlc3RyaWN0aW9uczogYm9vbGVhbjtcbiAgZXh0cmFjdElzc3VpbmdBZ2VuY3k6IGJvb2xlYW47XG4gIGV4dHJhY3ROYW1lOiBib29sZWFuO1xuICBmYWNlSW1hZ2VEcGk6IG51bWJlcjtcbiAgZnVsbERvY3VtZW50SW1hZ2VEcGk6IG51bWJlcjtcbiAgZnVsbERvY3VtZW50SW1hZ2VFeHRlbnNpb25GYWN0b3JzOiBJbWFnZUV4dGVuc2lvbkZhY3RvcnM7XG4gIHJldHVybkZhY2VJbWFnZTogYm9vbGVhbjtcbiAgcmV0dXJuRnVsbERvY3VtZW50SW1hZ2U6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29sb21iaWFJZEJhY2tSZWNvZ25pemVyUmVzdWx0IGV4dGVuZHMgUmVjb2duaXplclJlc3VsdCB7XG4gIGJpcnRoRGF0ZTogRGF0ZTtcbiAgYmxvb2RHcm91cDogc3RyaW5nO1xuICBkb2N1bWVudE51bWJlcjogc3RyaW5nO1xuICBmaW5nZXJwcmludDogc3RyaW5nO1xuICBmaXJzdE5hbWU6IHN0cmluZztcbiAgZnVsbERvY3VtZW50SW1hZ2U6IHN0cmluZztcbiAgbGFzdE5hbWU6IHN0cmluZztcbiAgc2V4OiBzdHJpbmc7XG59XG5leHBvcnQgaW50ZXJmYWNlIENvbG9tYmlhSWRCYWNrUmVjb2duaXplclJlc3VsdEN0b3IgZXh0ZW5kcyBSZWNvZ25pemVyPENvbG9tYmlhSWRCYWNrUmVjb2duaXplclJlc3VsdD4ge31cblxuZXhwb3J0IGludGVyZmFjZSBDb2xvbWJpYUlkQmFja1JlY29nbml6ZXIgZXh0ZW5kcyBSZWNvZ25pemVyPENvbG9tYmlhSWRCYWNrUmVjb2duaXplclJlc3VsdD4ge1xuICBkZXRlY3RHbGFyZTogYm9vbGVhbjtcbiAgZnVsbERvY3VtZW50SW1hZ2VEcGk6IG51bWJlcjtcbiAgZnVsbERvY3VtZW50SW1hZ2VFeHRlbnNpb25GYWN0b3JzOiBJbWFnZUV4dGVuc2lvbkZhY3RvcnM7XG4gIG51bGxRdWlldFpvbmVBbGxvd2VkOiBib29sZWFuO1xuICByZXR1cm5GdWxsRG9jdW1lbnRJbWFnZTogYm9vbGVhbjtcbiAgc2NhblVuY2VydGFpbjogYm9vbGVhbjtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgQ29sb21iaWFJZEJhY2tSZWNvZ25pemVyQ3RvciBleHRlbmRzIFJlY29nbml6ZXJDdG9yPENvbG9tYmlhSWRCYWNrUmVjb2duaXplcj4ge31cblxuZXhwb3J0IGludGVyZmFjZSBDb2xvbWJpYUlkRnJvbnRSZWNvZ25pemVyUmVzdWx0IGV4dGVuZHMgUmVjb2duaXplclJlc3VsdCB7XG4gIGRvY3VtZW50TnVtYmVyOiBzdHJpbmc7XG4gIGZhY2VJbWFnZTogc3RyaW5nO1xuICBmaXJzdE5hbWU6IHN0cmluZztcbiAgZnVsbERvY3VtZW50SW1hZ2U6IHN0cmluZztcbiAgbGFzdE5hbWU6IHN0cmluZztcbiAgc2lnbmF0dXJlSW1hZ2U6IHN0cmluZztcbn1cbmV4cG9ydCBpbnRlcmZhY2UgQ29sb21iaWFJZEZyb250UmVjb2duaXplclJlc3VsdEN0b3IgZXh0ZW5kcyBSZWNvZ25pemVyPENvbG9tYmlhSWRGcm9udFJlY29nbml6ZXJSZXN1bHQ+IHt9XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29sb21iaWFJZEZyb250UmVjb2duaXplciBleHRlbmRzIFJlY29nbml6ZXI8Q29sb21iaWFJZEZyb250UmVjb2duaXplclJlc3VsdD4ge1xuICBkZXRlY3RHbGFyZTogYm9vbGVhbjtcbiAgZXh0cmFjdEZpcnN0TmFtZTogYm9vbGVhbjtcbiAgZXh0cmFjdExhc3ROYW1lOiBib29sZWFuO1xuICBmYWNlSW1hZ2VEcGk6IG51bWJlcjtcbiAgZnVsbERvY3VtZW50SW1hZ2VEcGk6IG51bWJlcjtcbiAgcmV0dXJuRmFjZUltYWdlOiBib29sZWFuO1xuICByZXR1cm5GdWxsRG9jdW1lbnRJbWFnZTogYm9vbGVhbjtcbiAgcmV0dXJuU2lnbmF0dXJlSW1hZ2U6IGJvb2xlYW47XG4gIHNpZ25hdHVyZUltYWdlRHBpOiBudW1iZXI7XG59XG5leHBvcnQgaW50ZXJmYWNlIENvbG9tYmlhSWRGcm9udFJlY29nbml6ZXJDdG9yIGV4dGVuZHMgUmVjb2duaXplckN0b3I8Q29sb21iaWFJZEZyb250UmVjb2duaXplcj4ge31cblxuZXhwb3J0IGludGVyZmFjZSBDcm9hdGlhQ29tYmluZWRSZWNvZ25pemVyUmVzdWx0IGV4dGVuZHMgUmVjb2duaXplclJlc3VsdCB7XG4gIGFkZHJlc3M6IHN0cmluZztcbiAgY2l0aXplbnNoaXA6IHN0cmluZztcbiAgZGF0ZU9mQmlydGg6IERhdGU7XG4gIGRhdGVPZkV4cGlyeTogRGF0ZTtcbiAgZGF0ZU9mRXhwaXJ5UGVybWFuZW50OiBEYXRlO1xuICBkYXRlT2ZJc3N1ZTogRGF0ZTtcbiAgZGlnaXRhbFNpZ25hdHVyZTogc3RyaW5nO1xuICBkaWdpdGFsU2lnbmF0dXJlVmVyc2lvbjogc3RyaW5nO1xuICBkb2N1bWVudEJpbGluZ3VhbDogYm9vbGVhbjtcbiAgZG9jdW1lbnREYXRhTWF0Y2g6IHN0cmluZztcbiAgZmFjZUltYWdlOiBzdHJpbmc7XG4gIGZpcnN0TmFtZTogc3RyaW5nO1xuICBmdWxsRG9jdW1lbnRCYWNrSW1hZ2U6IHN0cmluZztcbiAgZnVsbERvY3VtZW50RnJvbnRJbWFnZTogc3RyaW5nO1xuICBpZGVudGl0eUNhcmROdW1iZXI6IHN0cmluZztcbiAgaXNzdWluZ0F1dGhvcml0eTogc3RyaW5nO1xuICBsYXN0TmFtZTogc3RyaW5nO1xuICBtcnpWZXJpZmllZDogYm9vbGVhbjtcbiAgbm9uUmVzaWRlbnQ6IGJvb2xlYW47XG4gIHBlcnNvbmFsSWRlbnRpZmljYXRpb25OdW1iZXI6IHN0cmluZztcbiAgc2Nhbm5pbmdGaXJzdFNpZGVEb25lOiBib29sZWFuO1xuICBzZXg6IHN0cmluZztcbiAgc2lnbmF0dXJlSW1hZ2U6IHN0cmluZztcbn1cbmV4cG9ydCBpbnRlcmZhY2UgQ3JvYXRpYUNvbWJpbmVkUmVjb2duaXplclJlc3VsdEN0b3IgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0Q3RvcjxDcm9hdGlhQ29tYmluZWRSZWNvZ25pemVyUmVzdWx0PiB7fVxuXG5leHBvcnQgaW50ZXJmYWNlIENyb2F0aWFDb21iaW5lZFJlY29nbml6ZXIgZXh0ZW5kcyBSZWNvZ25pemVyPENyb2F0aWFDb21iaW5lZFJlY29nbml6ZXJSZXN1bHQ+IHtcbiAgZGV0ZWN0R2xhcmU6IGJvb2xlYW47XG4gIHJldHVybkZhY2VJbWFnZTogYm9vbGVhbjtcbiAgcmV0dXJuRnVsbERvY3VtZW50SW1hZ2U6IGJvb2xlYW47XG4gIHJldHVyblNpZ25hdHVyZUltYWdlOiBib29sZWFuO1xuICBzaWduUmVzdWx0OiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENyb2F0aWFJZEJhY2tSZWNvZ25pemVyUmVzdWx0IGV4dGVuZHMgUmVjb2duaXplclJlc3VsdCB7XG4gIGRhdGVPZkV4cGlyeVBlcm1hbmVudDogYm9vbGVhbjtcbiAgZGF0ZU9mSXNzdWU6IERhdGU7XG4gIGRvY3VtZW50Rm9yTm9uUmVzaWRlbnQ6IGJvb2xlYW47XG4gIGZ1bGxEb2N1bWVudEltYWdlOiBzdHJpbmc7XG4gIGlzc3VlZEJ5OiBzdHJpbmc7XG4gIG1yelJlc3VsdDogTXJ6UmVzdWx0O1xuICByZXNpZGVuY2U6IHN0cmluZztcbn1cbmV4cG9ydCBpbnRlcmZhY2UgQ3JvYXRpYUlkQmFja1JlY29nbml6ZXJSZXN1bHRDdG9yIGV4dGVuZHMgUmVjb2duaXplclJlc3VsdEN0b3I8Q3JvYXRpYUlkQmFja1JlY29nbml6ZXJSZXN1bHQ+IHt9XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ3JvYXRpYUlkQmFja1JlY29nbml6ZXIgZXh0ZW5kcyBSZWNvZ25pemVyPENyb2F0aWFJZEJhY2tSZWNvZ25pemVyUmVzdWx0PiB7XG4gIGRldGVjdEdsYXJlOiBib29sZWFuO1xuICBleHRyYWN0RGF0ZU9mSXNzdWU6IGJvb2xlYW47XG4gIGV4dHJhY3RJc3N1ZWRCeTogYm9vbGVhbjtcbiAgZXh0cmFjdFJlc2lkZW5jZTogYm9vbGVhbjtcbiAgZnVsbERvY3VtZW50SW1hZ2VEcGk6IG51bWJlcjtcbiAgZnVsbERvY3VtZW50SW1hZ2VFeHRlbnNpb25GYWN0b3JzOiBJbWFnZUV4dGVuc2lvbkZhY3RvcnM7XG4gIHJldHVybkZ1bGxEb2N1bWVudEltYWdlOiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENyb2F0aWFJZEZyb250UmVjb2duaXplclJlc3VsdCBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHQge1xuICBjaXRpemVuc2hpcDogc3RyaW5nO1xuICBkYXRlT2ZCaXJ0aDogRGF0ZTtcbiAgZGF0ZU9mRXhwaXJ5OiBEYXRlO1xuICBkYXRlT2ZFeHBpcnlQZXJtYW5lbnQ6IGJvb2xlYW47XG4gIGRvY3VtZW50QmlsaW5ndWFsOiBib29sZWFuO1xuICBkb2N1bWVudE51bWJlcjogc3RyaW5nO1xuICBmYWNlSW1hZ2U6IHN0cmluZztcbiAgZmlyc3ROYW1lOiBzdHJpbmc7XG4gIGZ1bGxEb2N1bWVudEltYWdlOiBzdHJpbmc7XG4gIGxhc3ROYW1lOiBzdHJpbmc7XG4gIHNleDogc3RyaW5nO1xuICBzaWduYXR1cmVJbWFnZTogc3RyaW5nO1xufVxuZXhwb3J0IGludGVyZmFjZSBDcm9hdGlhSWRGcm9udFJlY29nbml6ZXJSZXN1bHRDdG9yIGV4dGVuZHMgUmVjb2duaXplclJlc3VsdEN0b3I8Q3JvYXRpYUlkRnJvbnRSZWNvZ25pemVyUmVzdWx0PiB7fVxuXG5leHBvcnQgaW50ZXJmYWNlIENyb2F0aWFJZEZyb250UmVjb2duaXplciBleHRlbmRzIFJlY29nbml6ZXI8Q3JvYXRpYUlkRnJvbnRSZWNvZ25pemVyUmVzdWx0PiB7XG4gIGRldGVjdEdsYXJlOiBib29sZWFuO1xuICBleHRyYWN0Q2l0aXplbnNoaXA6IGJvb2xlYW47XG4gIGV4dHJhY3REYXRlT2ZCaXJ0aDogYm9vbGVhbjtcbiAgZXh0cmFjdERhdGVPZkV4cGlyeTogYm9vbGVhbjtcbiAgZXh0cmFjdEZpcnN0TmFtZTogYm9vbGVhbjtcbiAgZXh0cmFjdExhc3ROYW1lOiBib29sZWFuO1xuICBleHRyYWN0U2V4OiBib29sZWFuO1xuICBmYWNlSW1hZ2VEcGk6IG51bWJlcjtcbiAgZnVsbERvY3VtZW50SW1hZ2VEcGk6IG51bWJlcjtcbiAgZnVsbERvY3VtZW50SW1hZ2VFeHRlbnNpb25GYWN0b3JzOiBJbWFnZUV4dGVuc2lvbkZhY3RvcnM7XG4gIHJldHVybkZhY2VJbWFnZTogYm9vbGVhbjtcbiAgcmV0dXJuRnVsbERvY3VtZW50SW1hZ2U6IGJvb2xlYW47XG4gIHJldHVyblNpZ25hdHVyZUltYWdlOiBib29sZWFuO1xuICBzaWduYXR1cmVJbWFnZURwaTogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEN5cHJ1c0lkQmFja1JlY29nbml6ZXJSZXN1bHQgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0IHtcbiAgZGF0ZU9mQmlydGg6IERhdGU7XG4gIGV4cGlyZXNPbjogRGF0ZTtcbiAgZnVsbERvY3VtZW50SW1hZ2U6IHN0cmluZztcbiAgc2V4OiBzdHJpbmc7XG59XG5leHBvcnQgaW50ZXJmYWNlIEN5cHJ1c0lkQmFja1JlY29nbml6ZXJSZXN1bHRDdG9yIGV4dGVuZHMgUmVjb2duaXplclJlc3VsdEN0b3I8Q3lwcnVzSWRCYWNrUmVjb2duaXplclJlc3VsdD4ge31cblxuZXhwb3J0IGludGVyZmFjZSBDeXBydXNJZEJhY2tSZWNvZ25pemVyIGV4dGVuZHMgUmVjb2duaXplcjxDeXBydXNJZEJhY2tSZWNvZ25pemVyUmVzdWx0PiB7XG4gIGRldGVjdEdsYXJlOiBib29sZWFuO1xuICBleHRyYWN0RXhwaXJlc09uOiBib29sZWFuO1xuICBleHRyYWN0U2V4OiBib29sZWFuO1xuICBmdWxsRG9jdW1lbnRJbWFnZURwaTogbnVtYmVyO1xuICBmdWxsRG9jdW1lbnRJbWFnZUV4dGVuc2lvbkZhY3RvcnM6IEltYWdlRXh0ZW5zaW9uRmFjdG9ycztcbiAgcmV0dXJuRnVsbERvY3VtZW50SW1hZ2U6IGJvb2xlYW47XG59XG5leHBvcnQgaW50ZXJmYWNlIEN5cHJ1c0lkQmFja1JlY29nbml6ZXJDdG9yIGV4dGVuZHMgUmVjb2duaXplckN0b3I8Q3lwcnVzSWRCYWNrUmVjb2duaXplcj4ge31cblxuZXhwb3J0IGludGVyZmFjZSBDeXBydXNJZEZyb250UmVjb2duaXplclJlc3VsdCBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHQge1xuICBkb2N1bWVudE51bWJlcjogc3RyaW5nO1xuICBmYWNlSW1hZ2U6IHN0cmluZztcbiAgZnVsbERvY3VtZW50SW1hZ2U6IHN0cmluZztcbiAgaWROdW1iZXI6IHN0cmluZztcbiAgbmFtZTogc3RyaW5nO1xuICBzdXJuYW1lOiBzdHJpbmc7XG59XG5leHBvcnQgaW50ZXJmYWNlIEN5cHJ1c0lkRnJvbnRSZWNvZ25pemVyUmVzdWx0Q3RvciBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHRDdG9yPEN5cHJ1c0lkRnJvbnRSZWNvZ25pemVyUmVzdWx0PiB7fVxuXG5leHBvcnQgaW50ZXJmYWNlIEN5cHJ1c0lkRnJvbnRSZWNvZ25pemVyIGV4dGVuZHMgUmVjb2duaXplcjxDeXBydXNJZEZyb250UmVjb2duaXplclJlc3VsdD4ge1xuICBkZXRlY3RHbGFyZTogYm9vbGVhbjtcbiAgZXh0cmFjdERvY3VtZW50TnVtYmVyOiBib29sZWFuO1xuICBleHRyYWN0TmFtZTogYm9vbGVhbjtcbiAgZXh0cmFjdFN1cm5hbWU6IGJvb2xlYW47XG4gIGZhY2VJbWFnZURwaTogbnVtYmVyO1xuICBmdWxsRG9jdW1lbnRJbWFnZURwaTogbnVtYmVyO1xuICBmdWxsRG9jdW1lbnRJbWFnZUV4dGVuc2lvbkZhY3RvcnM6IEltYWdlRXh0ZW5zaW9uRmFjdG9ycztcbiAgcmV0dXJuRmFjZUltYWdlOiBib29sZWFuO1xuICByZXR1cm5GdWxsRG9jdW1lbnRJbWFnZTogYm9vbGVhbjtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgQ3lwcnVzSWRGcm9udFJlY29nbml6ZXJDdG9yIGV4dGVuZHMgUmVjb2duaXplckN0b3I8Q3lwcnVzSWRGcm9udFJlY29nbml6ZXI+IHt9XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ3plY2hpYUNvbWJpbmVkUmVjb2duaXplclJlc3VsdCBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHQge1xuICBhZGRyZXNzOiBzdHJpbmc7XG4gIGRhdGVPZkJpcnRoOiBEYXRlO1xuICBkYXRlT2ZFeHBpcnk6IERhdGU7XG4gIGRhdGVPZklzc3VlOiBEYXRlO1xuICBkaWdpdGFsU2lnbmF0dXJlOiBzdHJpbmc7XG4gIGRpZ2l0YWxTaWduYXR1cmVWZXJzaW9uOiBzdHJpbmc7XG4gIGRvY3VtZW50RGF0YU1hdGNoOiBib29sZWFuO1xuICBmYWNlSW1hZ2U6IHN0cmluZztcbiAgZmlyc3ROYW1lOiBzdHJpbmc7XG4gIGZ1bGxEb2N1bWVudEJhY2tJbWFnZTogc3RyaW5nO1xuICBmdWxsRG9jdW1lbnRGcm9udEltYWdlOiBzdHJpbmc7XG4gIGlkZW50aXR5Q2FyZE51bWJlcjogc3RyaW5nO1xuICBpc3N1aW5nQXV0aG9yaXR5OiBzdHJpbmc7XG4gIGxhc3ROYW1lOiBzdHJpbmc7XG4gIG1yelZlcmlmaWVkOiBib29sZWFuO1xuICBuYXRpb25hbGl0eTogc3RyaW5nO1xuICBwZXJzb25hbElkZW50aWZpY2F0aW9uTnVtYmVyOiBzdHJpbmc7XG4gIHBsYWNlT2ZCaXJ0aDogc3RyaW5nO1xuICBzY2FubmluZ0ZpcnN0U2lkZURvbmU6IGJvb2xlYW47XG4gIHNleDogc3RyaW5nO1xuICBzaWduYXR1cmVJbWFnZTogc3RyaW5nO1xufVxuZXhwb3J0IGludGVyZmFjZSBDemVjaGlhQ29tYmluZWRSZWNvZ25pemVyUmVzdWx0Q3RvciBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHRDdG9yPEN6ZWNoaWFDb21iaW5lZFJlY29nbml6ZXJSZXN1bHQ+IHt9XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ3plY2hpYUNvbWJpbmVkUmVjb2duaXplciBleHRlbmRzIFJlY29nbml6ZXI8Q3plY2hpYUNvbWJpbmVkUmVjb2duaXplclJlc3VsdD4ge1xuICBkZXRlY3RHbGFyZTogYm9vbGVhbjtcbiAgcmV0dXJuRmFjZUltYWdlOiBib29sZWFuO1xuICByZXR1cm5GdWxsRG9jdW1lbnRJbWFnZTogYm9vbGVhbjtcbiAgc2lnblJlc3VsdDogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDemVjaGlhSWRCYWNrUmVjb2duaXplclJlc3VsdCBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHQge1xuICBhdXRob3JpdHk6IHN0cmluZztcbiAgZGF0ZU9mQmlydGg6IERhdGU7XG4gIGRhdGVPZkV4cGlyeTogRGF0ZTtcbiAgZG9jdW1lbnRDb2RlOiBzdHJpbmc7XG4gIGRvY3VtZW50TnVtYmVyOiBzdHJpbmc7XG4gIGZ1bGxEb2N1bWVudEltYWdlOiBzdHJpbmc7XG4gIGlzc3Vlcjogc3RyaW5nO1xuICBtcnpQYXJzZWQ6IGJvb2xlYW47XG4gIG1yelRleHQ6IHN0cmluZztcbiAgbXJ6VmVyaWZpZWQ6IGJvb2xlYW47XG4gIG5hdGlvbmFsaXR5OiBzdHJpbmc7XG4gIG9wdDE6IHN0cmluZztcbiAgb3B0Mjogc3RyaW5nO1xuICBwZXJtYW5lbnRTdGF5OiBzdHJpbmc7XG4gIHBlcnNvbmFsTnVtYmVyOiBzdHJpbmc7XG4gIHByaW1hcnlJZDogc3RyaW5nO1xuICBzZWNvbmRhcnlJZDogc3RyaW5nO1xuICBzZXg6IHN0cmluZztcbn1cbmV4cG9ydCBpbnRlcmZhY2UgQ3plY2hpYUlkQmFja1JlY29nbml6ZXJSZXN1bHRDdG9yIGV4dGVuZHMgUmVjb2duaXplclJlc3VsdEN0b3I8Q3plY2hpYUlkQmFja1JlY29nbml6ZXJSZXN1bHQ+IHt9XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ3plY2hpYUlkQmFja1JlY29nbml6ZXIgZXh0ZW5kcyBSZWNvZ25pemVyPEN6ZWNoaWFJZEJhY2tSZWNvZ25pemVyUmVzdWx0PiB7XG4gIGRldGVjdEdsYXJlOiBib29sZWFuO1xuICBleHRyYWN0QXV0aG9yaXR5OiBib29sZWFuO1xuICBleHRyYWN0UGVybWFuZW50U3RheTogYm9vbGVhbjtcbiAgZXh0cmFjdFBlcnNvbmFsTnVtYmVyOiBib29sZWFuO1xuICByZXR1cm5GdWxsRG9jdW1lbnRJbWFnZTogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDeXBydXNJZEZyb250UmVjb2duaXplclJlc3VsdCBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHQge1xuICBkYXRlT2ZCaXJ0aDogRGF0ZTtcbiAgZGF0ZU9mRXhwaXJ5OiBEYXRlO1xuICBkYXRlT2ZJc3N1ZTogRGF0ZTtcbiAgZmFjZUltYWdlOiBzdHJpbmc7XG4gIGZpcnN0TmFtZTogc3RyaW5nO1xuICBmdWxsRG9jdW1lbnRJbWFnZTogc3RyaW5nO1xuICBpZGVudGl0eUNhcmROdW1iZXI6IHN0cmluZztcbiAgbGFzdE5hbWU6IHN0cmluZztcbiAgcGxhY2VPZkJpcnRoOiBzdHJpbmc7XG4gIHNleDogc3RyaW5nO1xuICBzaWduYXR1cmVJbWFnZTogc3RyaW5nO1xufVxuZXhwb3J0IGludGVyZmFjZSBDeXBydXNJZEZyb250UmVjb2duaXplclJlc3VsdEN0b3IgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0Q3RvcjxDeXBydXNJZEZyb250UmVjb2duaXplclJlc3VsdD4ge31cblxuZXhwb3J0IGludGVyZmFjZSBDeXBydXNJZEZyb250UmVjb2duaXplciBleHRlbmRzIFJlY29nbml6ZXI8Q3lwcnVzSWRGcm9udFJlY29nbml6ZXJSZXN1bHQ+IHtcbiAgZGV0ZWN0R2xhcmU6IGJvb2xlYW47XG4gIGV4dHJhY3REYXRlT2ZCaXJ0aDogYm9vbGVhbjtcbiAgZXh0cmFjdERhdGVPZkV4cGlyeTogYm9vbGVhbjtcbiAgZXh0cmFjdERhdGVPZklzc3VlOiBib29sZWFuO1xuICBleHRyYWN0R2l2ZW5OYW1lczogYm9vbGVhbjtcbiAgZXh0cmFjdFBsYWNlT2ZCaXJ0aDogYm9vbGVhbjtcbiAgZXh0cmFjdFNleDogYm9vbGVhbjtcbiAgZXh0cmFjdFN1cm5hbWU6IGJvb2xlYW47XG4gIHJldHVybkZhY2VJbWFnZTogYm9vbGVhbjtcbiAgcmV0dXJuRnVsbERvY3VtZW50SW1hZ2U6IGJvb2xlYW47XG4gIHJldHVyblNpZ25hdHVyZUltYWdlOiBib29sZWFuO1xufVxuZXhwb3J0IGludGVyZmFjZSBDeXBydXNJZEZyb250UmVjb2duaXplckN0b3IgZXh0ZW5kcyBSZWNvZ25pemVyQ3RvcjxDeXBydXNJZEZyb250UmVjb2duaXplcj4ge31cblxuZXhwb3J0IGludGVyZmFjZSBEb2N1bWVudEZhY2VSZWNvZ25pemVyUmVzdWx0IGV4dGVuZHMgUmVjb2duaXplclJlc3VsdCB7XG4gIGRvY3VtZW50TG9jYXRpb246IHN0cmluZztcbiAgZmFjZUltYWdlOiBzdHJpbmc7XG4gIGZhY2VMb2NhdGlvbjogUXVhZHJpbGF0ZXJhbDtcbiAgZnVsbERvY3VtZW50SW1hZ2U6IHN0cmluZztcbn1cbmV4cG9ydCBpbnRlcmZhY2UgRG9jdW1lbnRGYWNlUmVjb2duaXplclJlc3VsdEN0b3IgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0Q3RvcjxEb2N1bWVudEZhY2VSZWNvZ25pemVyUmVzdWx0PiB7fVxuXG5leHBvcnQgaW50ZXJmYWNlIERvY3VtZW50RmFjZVJlY29nbml6ZXIgZXh0ZW5kcyBSZWNvZ25pemVyPERvY3VtZW50RmFjZVJlY29nbml6ZXJSZXN1bHQ+IHtcbiAgZGV0ZWN0b3JUeXBlOiBEb2N1bWVudEZhY2VEZXRlY3RvclR5cGUuVEQxO1xuICBmYWNlSW1hZ2VEcGk6IG51bWJlcjtcbiAgZnVsbERvY3VtZW50SW1hZ2U6IG51bWJlcjtcbiAgZnVsbERvY3VtZW50SW1hZ2VFeHRlbnNpb25GYWN0b3JzOiBJbWFnZUV4dGVuc2lvbkZhY3RvcnM7XG4gIG51bVN0YWJsZURldGVjdGlvbnNUaHJlc2hvbGQ6IG51bWJlcjtcbiAgcmV0dXJuRmFjZUltYWdlOiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEVneXB0SWRGcm9udFJlY29nbml6ZXJSZXN1bHQgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0IHtcbiAgZG9jdW1lbnROdW1iZXI6IHN0cmluZztcbiAgZmFjZUltYWdlOiBzdHJpbmc7XG4gIGZ1bGxEb2N1bWVudEltYWdlOiBzdHJpbmc7XG4gIG5hdGlvbmFsTnVtYmVyOiBzdHJpbmc7XG59XG5leHBvcnQgaW50ZXJmYWNlIEVneXB0SWRGcm9udFJlY29nbml6ZXJSZXN1bHRDdG9yIGV4dGVuZHMgUmVjb2duaXplclJlc3VsdEN0b3I8RWd5cHRJZEZyb250UmVjb2duaXplclJlc3VsdD4ge31cblxuZXhwb3J0IGludGVyZmFjZSBFZ3lwdElkRnJvbnRSZWNvZ25pemVyIGV4dGVuZHMgUmVjb2duaXplcjxFZ3lwdElkRnJvbnRSZWNvZ25pemVyUmVzdWx0PiB7XG4gIGRldGVjdEdsYXJlOiBib29sZWFuO1xuICBleHRyYWN0TmF0aW9uYWxOdW1iZXI6IGJvb2xlYW47XG4gIHJldHVybkZhY2VJbWFnZTogYm9vbGVhbjtcbiAgcmV0dXJuRnVsbERvY3VtZW50SW1hZ2U6IGJvb2xlYW47XG59XG5leHBvcnQgaW50ZXJmYWNlIEVneXB0SWRGcm9udFJlY29nbml6ZXJDdG9yIGV4dGVuZHMgUmVjb2duaXplckN0b3I8RWd5cHRJZEZyb250UmVjb2duaXplcj4ge31cblxuZXhwb3J0IGludGVyZmFjZSBCbGlua0NhcmRFbGl0ZVJlY29nbml6ZXJSZXN1bHQgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0IHtcbiAgY2FyZE51bWJlcjogc3RyaW5nO1xuICBjdnY6IHN0cmluZztcbiAgZGlnaXRhbFNpZ25hdHVyZTogc3RyaW5nO1xuICBkaWdpdGFsU2lnbmF0dXJlVmVyc2lvbjogc3RyaW5nO1xuICBkb2N1bWVudERhdGFNYXRjaDogYm9vbGVhbjtcbiAgZnVsbERvY3VtZW50QmFja0ltYWdlOiBzdHJpbmc7XG4gIGZ1bGxEb2N1bWVudEZyb250SW1hZ2U6IHN0cmluZztcbiAgaW52ZW50b3J5TnVtYmVyOiBzdHJpbmc7XG4gIG93bmVyOiBzdHJpbmc7XG4gIHNjYW5uaW5nRmlyc3RTaWRlRG9uZTogYm9vbGVhbjtcbiAgdmFsaWRUaHJ1OiBEYXRlO1xufVxuZXhwb3J0IGludGVyZmFjZSBCbGlua0NhcmRFbGl0ZVJlY29nbml6ZXJSZXN1bHRDdG9yIGV4dGVuZHMgUmVjb2duaXplclJlc3VsdEN0b3I8QmxpbmtDYXJkRWxpdGVSZWNvZ25pemVyUmVzdWx0PiB7fVxuXG5leHBvcnQgaW50ZXJmYWNlIEJsaW5rQ2FyZEVsaXRlUmVjb2duaXplciBleHRlbmRzIFJlY29nbml6ZXI8QmxpbmtDYXJkRWxpdGVSZWNvZ25pemVyUmVzdWx0PiB7XG4gIGFub255bWl6ZUNhcmROdW1iZXI6IGJvb2xlYW47XG4gIGFub255bWl6ZUN2djogYm9vbGVhbjtcbiAgYW5vbnltaXplT3duZXI6IGJvb2xlYW47XG4gIGRldGVjdEdsYXJlOiBib29sZWFuO1xuICBleHRyYWN0SW52ZW50b3J5TnVtYmVyOiBib29sZWFuO1xuICBleHRyYWN0T3duZXI6IGJvb2xlYW47XG4gIGV4dHJhY3RWYWxpZFRocnU6IGJvb2xlYW47XG4gIGZ1bGxEb2N1bWVudEltYWdlRHBpOiBudW1iZXI7XG4gIGZ1bGxEb2N1bWVudEltYWdlRXh0ZW5zaW9uRmFjdG9yczogSW1hZ2VFeHRlbnNpb25GYWN0b3JzO1xuICByZXR1cm5GdWxsRG9jdW1lbnRJbWFnZTogYm9vbGVhbjtcbiAgc2lnblJlc3VsdDogYm9vbGVhbjtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgQmxpbmtDYXJkRWxpdGVSZWNvZ25pemVyQ3RvciBleHRlbmRzIFJlY29nbml6ZXJDdG9yPEJsaW5rQ2FyZEVsaXRlUmVjb2duaXplcj4ge31cblxuZXhwb3J0IGludGVyZmFjZSBFdWRsUmVjb2duaXplclJlc3VsdCBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHQge1xuICBhZGRyZXNzOiBzdHJpbmc7XG4gIGJpcnRoRGF0YTogc3RyaW5nO1xuICBjb3VudHJ5OiBzdHJpbmc7XG4gIGRyaXZlck51bWJlcjogc3RyaW5nO1xuICBleHBpcnlEYXRlOiBEYXRlO1xuICBmYWNlSW1hZ2U6IHN0cmluZztcbiAgZmlyc3ROYW1lOiBzdHJpbmc7XG4gIGZ1bGxEb2N1bWVudEltYWdlOiBzdHJpbmc7XG4gIGlzc3VlRGF0ZTogRGF0ZTtcbiAgaXNzdWluZ0F1dGhvcml0eTogc3RyaW5nO1xuICBsYXN0TmFtZTogc3RyaW5nO1xuICBwZXJzb25hbE51bWJlcjogc3RyaW5nO1xufVxuZXhwb3J0IGludGVyZmFjZSBFdWRsUmVjb2duaXplclJlc3VsdEN0b3IgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0Q3RvcjxFdWRsUmVjb2duaXplclJlc3VsdD4ge31cblxuZXhwb3J0IGludGVyZmFjZSBFdWRsUmVjb2duaXplciBleHRlbmRzIFJlY29nbml6ZXI8RXVkbFJlY29nbml6ZXJSZXN1bHQ+IHtcbiAgY291bnRyeTogRXVkbENvdW50cnkuQXV0b21hdGljO1xuICBleHRyYWN0QWRkcmVzczogYm9vbGVhbjtcbiAgZXh0cmFjdERhdGVPZkV4cGlyeTogYm9vbGVhbjtcbiAgZXh0cmFjdERhdGVPZklzc3VlOiBib29sZWFuO1xuICBleHRyYWN0SXNzdWluZ0F1dGhvcml0eTogYm9vbGVhbjtcbiAgZXh0cmFjdFBlcnNvbmFsTnVtYmVyOiBib29sZWFuO1xuICBmYWNlSW1hZ2VEcGk6IG51bWJlcjtcbiAgZnVsbERvY3VtZW50SW1hZ2VEcGk6IG51bWJlcjtcbiAgZnVsbERvY3VtZW50SW1hZ2VFeHRlbnNpb25GYWN0b3JzOiBJbWFnZUV4dGVuc2lvbkZhY3RvcnM7XG4gIHJldHVybkZhY2VJbWFnZTogYm9vbGVhbjtcbiAgcmV0dXJuRnVsbERvY3VtZW50SW1hZ2U6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgR2VybWFueUNvbWJpbmVkUmVjb2duaXplclJlc3VsdCBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHQge1xuICBhZGRyZXNzOiBzdHJpbmc7XG4gIGNhbk51bWJlcjogc3RyaW5nO1xuICBkYXRlT2ZCaXJ0aDogRGF0ZTtcbiAgZGF0ZU9mRXhwaXJ5OiBEYXRlO1xuICBkYXRlT2ZJc3N1ZTogRGF0ZTtcbiAgZGlnaXRhbFNpZ25hdHVyZTogc3RyaW5nO1xuICBkaWdpdGFsU2lnbmF0dXJlVmVyc2lvbjogc3RyaW5nO1xuICBkb2N1bWVudERhdGFNYXRjaDogYm9vbGVhbjtcbiAgZXllQ29sb3I6IHN0cmluZztcbiAgZmFjZUltYWdlOiBzdHJpbmc7XG4gIGZpcnN0TmFtZTogc3RyaW5nO1xuICBmdWxsRG9jdW1lbnRCYWNrSW1hZ2U6IHN0cmluZztcbiAgZnVsbERvY3VtZW50RnJvbnRJbWFnZTogc3RyaW5nO1xuICBoZWlnaHQ6IHN0cmluZztcbiAgaWRlbnRpdHlDYXJkTnVtYmVyOiBzdHJpbmc7XG4gIGlzc3VpbmdBdXRob3JpdHk6IHN0cmluZztcbiAgbGFzdE5hbWU6IHN0cmluZztcbiAgbXJ6VmVyaWZpZWQ6IGJvb2xlYW47XG4gIG5hdGlvbmFsaXR5OiBzdHJpbmc7XG4gIHBsYWNlT2ZCaXJ0aDogc3RyaW5nO1xuICBzY2FubmluZ0ZpcnN0U2lkZURvbmU6IGJvb2xlYW47XG4gIHNleDogYm9vbGVhbjtcbiAgc2lnbmF0dXJlSW1hZ2U6IHN0cmluZztcbn1cbmV4cG9ydCBpbnRlcmZhY2UgR2VybWFueUNvbWJpbmVkUmVjb2duaXplclJlc3VsdEN0b3IgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0Q3RvcjxHZXJtYW55Q29tYmluZWRSZWNvZ25pemVyUmVzdWx0PiB7fVxuXG5leHBvcnQgaW50ZXJmYWNlIEdlcm1hbnlDb21iaW5lZFJlY29nbml6ZXIgZXh0ZW5kcyBSZWNvZ25pemVyPEdlcm1hbnlDb21iaW5lZFJlY29nbml6ZXJSZXN1bHQ+IHtcbiAgZGV0ZWN0R2xhcmU6IGJvb2xlYW47XG4gIGV4dHJhY3RBZGRyZXNzOiBib29sZWFuO1xuICBmdWxsRG9jdW1lbnRJbWFnZUV4dGVuc2lvbkZhY3RvcnM6IEltYWdlRXh0ZW5zaW9uRmFjdG9ycztcbiAgcmV0dXJuRmFjZUltYWdlOiBib29sZWFuO1xuICByZXR1cm5GdWxsRG9jdW1lbnRJbWFnZTogYm9vbGVhbjtcbiAgcmV0dXJuU2lnbmF0dXJlSW1hZ2U6IGJvb2xlYW47XG4gIHNpZ25SZXN1bHQ6IGJvb2xlYW47XG59XG5leHBvcnQgaW50ZXJmYWNlIEdlcm1hbnlDb21iaW5lZFJlY29nbml6ZXJDdG9yIGV4dGVuZHMgUmVjb2duaXplckN0b3I8R2VybWFueUNvbWJpbmVkUmVjb2duaXplcj4ge31cblxuZXhwb3J0IGludGVyZmFjZSBHZXJtYW55RGxCYWNrUmVjb2duaXplclJlc3VsdCBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHQge1xuICBkYXRlT2ZJc3N1ZUIxMDogc3RyaW5nO1xuICBkYXRlT2ZJc3N1ZUIxME5vdFNwZWNpZmllZDogYm9vbGVhbjtcbiAgZnVsbERvY3VtZW50SW1hZ2U6IHN0cmluZztcbn1cbmV4cG9ydCBpbnRlcmZhY2UgR2VybWFueURsQmFja1JlY29nbml6ZXJSZXN1bHRDdG9yIGV4dGVuZHMgUmVjb2duaXplclJlc3VsdEN0b3I8R2VybWFueURsQmFja1JlY29nbml6ZXJSZXN1bHQ+IHt9XG5cbmV4cG9ydCBpbnRlcmZhY2UgR2VybWFueURsQmFja1JlY29nbml6ZXIgZXh0ZW5kcyBSZWNvZ25pemVyPEdlcm1hbnlEbEJhY2tSZWNvZ25pemVyUmVzdWx0PiB7XG4gIGRldGVjdEdsYXJlOiBib29sZWFuO1xuICBmdWxsRG9jdW1lbnRJbWFnZURwaTogbnVtYmVyO1xuICBmdWxsRG9jdW1lbnRJbWFnZUV4dGVuc2lvbkZhY3RvcnM6IEltYWdlRXh0ZW5zaW9uRmFjdG9ycztcbiAgcmV0dXJuRnVsbERvY3VtZW50SW1hZ2U6IGJvb2xlYW47XG59XG5leHBvcnQgaW50ZXJmYWNlIEdlcm1hbnlEbEJhY2tSZWNvZ25pemVyQ3RvciBleHRlbmRzIFJlY29nbml6ZXJDdG9yPEdlcm1hbnlEbEJhY2tSZWNvZ25pemVyPiB7fVxuXG5leHBvcnQgaW50ZXJmYWNlIEdlcm1hbnlJZEJhY2tSZWNvZ25pemVyUmVzdWx0IGV4dGVuZHMgUmVjb2duaXplclJlc3VsdCB7XG4gIGFkZHJlc3M6IHN0cmluZztcbiAgYWRkcmVzc0NpdHk6IHN0cmluZztcbiAgYWRkcmVzc0hvdXNlTnVtYmVyOiBzdHJpbmc7XG4gIGFkZHJlc3NTdHJlZXQ6IHN0cmluZztcbiAgYWRkcmVzc1ppcENvZGU6IHN0cmluZztcbiAgYXV0aG9yaXR5OiBzdHJpbmc7XG4gIGRhdGVPZkJpcnRoOiBEYXRlO1xuICBkYXRlT2ZFeHBpcnk6IERhdGU7XG4gIGRhdGVPZklzc3VlOiBEYXRlO1xuICBkb2N1bWVudENvZGU6IHN0cmluZztcbiAgZG9jdW1lbnROdW1iZXI6IHN0cmluZztcbiAgZXllQ29sb3VyOiBzdHJpbmc7XG4gIGZ1bGxEb2N1bWVudEltYWdlOiBzdHJpbmc7XG4gIGhlaWdodDogc3RyaW5nO1xuICBpc3N1ZXI6IHN0cmluZztcbiAgbXJ6UGFyc2VkOiBib29sZWFuO1xuICBtcnpUZXh0OiBzdHJpbmc7XG4gIG1yelZlcmlmaWVkOiBib29sZWFuO1xuICBuYXRpb25hbGl0eTogc3RyaW5nO1xuICBvcHQxOiBzdHJpbmc7XG4gIG9wdDI6IHN0cmluZztcbiAgcHJpbWFyeUlkOiBzdHJpbmc7XG4gIHNlY29uZGFyeUlkOiBzdHJpbmc7XG4gIHNleDogc3RyaW5nO1xufVxuZXhwb3J0IGludGVyZmFjZSBHZXJtYW55SWRCYWNrUmVjb2duaXplclJlc3VsdEN0b3IgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0Q3RvcjxHZXJtYW55SWRCYWNrUmVjb2duaXplclJlc3VsdD4ge31cblxuZXhwb3J0IGludGVyZmFjZSBHZXJtYW55SWRCYWNrUmVjb2duaXplciBleHRlbmRzIFJlY29nbml6ZXI8R2VybWFueUlkQmFja1JlY29nbml6ZXJSZXN1bHQ+IHtcbiAgZGV0ZWN0R2xhcmU6IGJvb2xlYW47XG4gIGV4dHJhY3RBZGRyZXNzOiBib29sZWFuO1xuICBleHRyYWN0RGF0ZU9mSXNzdWU6IGJvb2xlYW47XG4gIGV4dHJhY3RFeWVDb2xvdXI6IGJvb2xlYW47XG4gIGV4dHJhY3RIZWlnaHQ6IGJvb2xlYW47XG4gIGZ1bGxEb2N1bWVudEltYWdlRXh0ZW5zaW9uRmFjdG9yczogSW1hZ2VFeHRlbnNpb25GYWN0b3JzO1xuICByZXR1cm5GdWxsRG9jdW1lbnRJbWFnZTogYm9vbGVhbjtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgR2VybWFueUlkQmFja1JlY29nbml6ZXJDdG9yIGV4dGVuZHMgUmVjb2duaXplckN0b3I8R2VybWFueUlkQmFja1JlY29nbml6ZXI+IHt9XG5cbmV4cG9ydCBpbnRlcmZhY2UgR2VybWFueUlkRnJvbnRSZWNvZ25pemVyUmVzdWx0IGV4dGVuZHMgUmVjb2duaXplclJlc3VsdCB7XG4gIGNhbk51bWJlcjogc3RyaW5nO1xuICBkYXRlT2ZCaXJ0aDogRGF0ZTtcbiAgZGF0ZU9mRXhwaXJ5OiBEYXRlO1xuICBkb2N1bWVudE51bWJlcjogc3RyaW5nO1xuICBmYWNlSW1hZ2U6IHN0cmluZztcbiAgZnVsbERvY3VtZW50SW1hZ2U6IHN0cmluZztcbiAgZ2l2ZW5OYW1lczogc3RyaW5nO1xuICBuYXRpb25hbGl0eTogc3RyaW5nO1xuICBwbGFjZU9mQmlydGg6IHN0cmluZztcbiAgc2lnbmF0dXJlSW1hZ2U6IHN0cmluZztcbiAgc3VybmFtZTogc3RyaW5nO1xufVxuZXhwb3J0IGludGVyZmFjZSBHZXJtYW55SWRGcm9udFJlY29nbml6ZXJSZXN1bHRDdG9yIGV4dGVuZHMgUmVjb2duaXplclJlc3VsdEN0b3I8R2VybWFueUlkRnJvbnRSZWNvZ25pemVyUmVzdWx0PiB7fVxuXG5leHBvcnQgaW50ZXJmYWNlIEdlcm1hbnlJZEZyb250UmVjb2duaXplciBleHRlbmRzIFJlY29nbml6ZXI8R2VybWFueUlkRnJvbnRSZWNvZ25pemVyUmVzdWx0PiB7XG4gIGRldGVjdEdsYXJlOiBib29sZWFuO1xuICBleHRyYWN0Q2FuTnVtYmVyOiBib29sZWFuO1xuICBleHRyYWN0RGF0ZU9mRXhwaXJ5OiBib29sZWFuO1xuICBleHRyYWN0RG9jdW1lbnROdW1iZXI6IGJvb2xlYW47XG4gIGV4dHJhY3RHaXZlbk5hbWVzOiBib29sZWFuO1xuICBleHRyYWN0TmF0aW9uYWxpdHk6IGJvb2xlYW47XG4gIGV4dHJhY3RQbGFjZU9mQmlydGg6IGJvb2xlYW47XG4gIGV4dHJhY3RTdXJuYW1lOiBib29sZWFuO1xuICBmYWNlSW1hZ2VEcGk6IG51bWJlcjtcbiAgZnVsbERvY3VtZW50SW1hZ2VEcGk6IG51bWJlcjtcbiAgZnVsbERvY3VtZW50SW1hZ2VFeHRlbnNpb25GYWN0b3JzOiBJbWFnZUV4dGVuc2lvbkZhY3RvcnM7XG4gIHJldHVybkZhY2VJbWFnZTogYm9vbGVhbjtcbiAgcmV0dXJuRnVsbERvY3VtZW50SW1hZ2U6IGJvb2xlYW47XG4gIHJldHVyblNpZ25hdHVyZUltYWdlOiBib29sZWFuO1xuICBzaWduYXR1cmVJbWFnZURwaTogbnVtYmVyO1xufVxuZXhwb3J0IGludGVyZmFjZSBHZXJtYW55SWRGcm9udFJlY29nbml6ZXJDdG9yIGV4dGVuZHMgUmVjb2duaXplckN0b3I8R2VybWFueUlkRnJvbnRSZWNvZ25pemVyPiB7fVxuXG5leHBvcnQgaW50ZXJmYWNlIEdlcm1hbnlPbGRJZFJlY29nbml6ZXJSZXN1bHQgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0IHtcbiAgZGF0ZU9mQmlydGg6IERhdGU7XG4gIGRhdGVPZkV4cGlyeTogRGF0ZTtcbiAgZG9jdW1lbnRDb2RlOiBzdHJpbmc7XG4gIGRvY3VtZW50TnVtYmVyOiBzdHJpbmc7XG4gIGZhY2VJbWFnZTogc3RyaW5nO1xuICBmdWxsRG9jdW1lbnRJbWFnZTogc3RyaW5nO1xuICBpc3N1ZXI6IHN0cmluZztcbiAgbXJ6UGFyc2VkOiBib29sZWFuO1xuICBtcnpUZXh0OiBzdHJpbmc7XG4gIG1yelZlcmlmaWVkOiBib29sZWFuO1xuICBuYXRpb25hbGl0eTogc3RyaW5nO1xuICBvcHQxOiBzdHJpbmc7XG4gIG9wdDI6IHN0cmluZztcbiAgcGxhY2VPZkJpcnRoOiBzdHJpbmc7XG4gIHByaW1hcnlJZDogc3RyaW5nO1xuICBzZWNvbmRhcnlJZDogc3RyaW5nO1xuICBzZXg6IHN0cmluZztcbiAgc2lnbmF0dXJlSW1hZ2U6IHN0cmluZztcbn1cbmV4cG9ydCBpbnRlcmZhY2UgR2VybWFueU9sZElkUmVjb2duaXplclJlc3VsdEN0b3IgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0Q3RvcjxHZXJtYW55T2xkSWRSZWNvZ25pemVyUmVzdWx0PiB7fVxuXG5leHBvcnQgaW50ZXJmYWNlIEdlcm1hbnlPbGRJZFJlY29nbml6ZXIgZXh0ZW5kcyBSZWNvZ25pemVyPEdlcm1hbnlPbGRJZFJlY29nbml6ZXJSZXN1bHQ+IHtcbiAgZGV0ZWN0R2xhcmU6IGJvb2xlYW47XG4gIGV4dHJhY3RQbGFjZU9mQmlydGg6IGJvb2xlYW47XG4gIGZ1bGxEb2N1bWVudEltYWdlRXh0ZW5zaW9uRmFjdG9yczogSW1hZ2VFeHRlbnNpb25GYWN0b3JzO1xuICByZXR1cm5GYWNlSW1hZ2U6IGJvb2xlYW47XG4gIHJldHVybkZ1bGxEb2N1bWVudEltYWdlOiBib29sZWFuO1xuICByZXR1cm5TaWduYXR1cmVJbWFnZTogYm9vbGVhbjtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgR2VybWFueU9sZElkUmVjb2duaXplckN0b3IgZXh0ZW5kcyBSZWNvZ25pemVyQ3RvcjxHZXJtYW55T2xkSWRSZWNvZ25pemVyPiB7fVxuXG5leHBvcnQgaW50ZXJmYWNlIEdlcm1hbnlQYXNzcG9ydFJlY29nbml6ZXJSZXN1bHQgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0IHtcbiAgYXV0aG9yaXR5OiBzdHJpbmc7XG4gIGRhdGVPZkJpcnRoOiBEYXRlO1xuICBkYXRlT2ZFeHBpcnk6IERhdGU7XG4gIGRhdGVPZklzc3VlOiBEYXRlO1xuICBkb2N1bWVudENvZGU6IHN0cmluZztcbiAgZG9jdW1lbnROdW1iZXI6IHN0cmluZztcbiAgZmFjZUltYWdlOiBzdHJpbmc7XG4gIGZ1bGxEb2N1bWVudEltYWdlOiBzdHJpbmc7XG4gIGlzc3Vlcjogc3RyaW5nO1xuICBtcnpQYXJzZWQ6IGJvb2xlYW47XG4gIG1yelRleHQ6IHN0cmluZztcbiAgbXJ6VmVyaWZpZWQ6IHN0cmluZztcbiAgbmFtZTogc3RyaW5nO1xuICBuYXRpb25hbGl0eTogc3RyaW5nO1xuICBvcHQxOiBzdHJpbmc7XG4gIG9wdDI6IHN0cmluZztcbiAgcGxhY2VPZkJpcnRoOiBzdHJpbmc7XG4gIHByaW1hcnlJZDogc3RyaW5nO1xuICBzZWNvbmRhcnlJZDogc3RyaW5nO1xuICBzZXg6IHN0cmluZztcbiAgc2lnbmF0dXJlSW1hZ2U6IHN0cmluZztcbiAgc3VybmFtZTogc3RyaW5nO1xufVxuZXhwb3J0IGludGVyZmFjZSBHZXJtYW55UGFzc3BvcnRSZWNvZ25pemVyUmVzdWx0Q3RvciBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHRDdG9yPEdlcm1hbnlQYXNzcG9ydFJlY29nbml6ZXJSZXN1bHQ+IHt9XG5cbmV4cG9ydCBpbnRlcmZhY2UgR2VybWFueVBhc3Nwb3J0UmVjb2duaXplciBleHRlbmRzIFJlY29nbml6ZXI8R2VybWFueVBhc3Nwb3J0UmVjb2duaXplclJlc3VsdD4ge1xuICBkZXRlY3RHbGFyZTogYm9vbGVhbjtcbiAgZXh0cmFjdEF1dGhvcml0eTogYm9vbGVhbjtcbiAgZXh0cmFjdERhdGVPZklzc3VlOiBib29sZWFuO1xuICBleHRyYWN0TmFtZTogYm9vbGVhbjtcbiAgZXh0cmFjdE5hdGlvbmFsaXR5OiBib29sZWFuO1xuICBleHRyYWN0UGxhY2VPZkJpcnRoOiBib29sZWFuO1xuICBleHRyYWN0U3VybmFtZTogYm9vbGVhbjtcbiAgZnVsbERvY3VtZW50SW1hZ2VFeHRlbnNpb25GYWN0b3JzOiBJbWFnZUV4dGVuc2lvbkZhY3RvcnM7XG4gIHJldHVybkZhY2VJbWFnZTogYm9vbGVhbjtcbiAgcmV0dXJuRnVsbERvY3VtZW50SW1hZ2U6IGJvb2xlYW47XG4gIHJldHVyblNpZ25hdHVyZUltYWdlOiBib29sZWFuO1xufVxuZXhwb3J0IGludGVyZmFjZSBHZXJtYW55UGFzc3BvcnRSZWNvZ25pemVyQ3RvciBleHRlbmRzIFJlY29nbml6ZXJDdG9yPEdlcm1hbnlQYXNzcG9ydFJlY29nbml6ZXI+IHt9XG5cbmV4cG9ydCBpbnRlcmZhY2UgSG9uZ0tvbmdJZEZyb250UmVjb2duaXplclJlc3VsdCBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHQge1xuICBjb21tZXJjaWFsQ29kZTogc3RyaW5nO1xuICBkYXRlT2ZCaXJ0aDogRGF0ZTtcbiAgZGF0ZU9mSXNzdWU6IERhdGU7XG4gIGRvY3VtZW50TnVtYmVyOiBzdHJpbmc7XG4gIGZhY2VJbWFnZTogc3RyaW5nO1xuICBmdWxsRG9jdW1lbnRJbWFnZTogc3RyaW5nO1xuICBmdWxsTmFtZTogc3RyaW5nO1xuICByZXNpZGVudGlhbFN0YXR1czogc3RyaW5nO1xuICBzZXg6IHN0cmluZztcbn1cbmV4cG9ydCBpbnRlcmZhY2UgSG9uZ0tvbmdJZEZyb250UmVjb2duaXplclJlc3VsdEN0b3IgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0Q3RvcjxIb25nS29uZ0lkRnJvbnRSZWNvZ25pemVyUmVzdWx0PiB7fVxuXG5leHBvcnQgaW50ZXJmYWNlIEhvbmdLb25nSWRGcm9udFJlY29nbml6ZXIgZXh0ZW5kcyBSZWNvZ25pemVyPEhvbmdLb25nSWRGcm9udFJlY29nbml6ZXJSZXN1bHQ+IHtcbiAgZGV0ZWN0R2xhcmU6IGJvb2xlYW47XG4gIGV4dHJhY3REYXRlT2ZCaXJ0aDogYm9vbGVhbjtcbiAgZXh0cmFjdERhdGVPZklzc3VlOiBib29sZWFuO1xuICBleHRyYWN0RnVsbE5hbWU6IGJvb2xlYW47XG4gIGV4dHJhY3RSZXNpZGVudGlhbFN0YXR1czogYm9vbGVhbjtcbiAgZXh0cmFjdFNleDogYm9vbGVhbjtcbiAgZmFjZUltYWdlRHBpOiBudW1iZXI7XG4gIGZ1bGxEb2N1bWVudEltYWdlRHBpOiBudW1iZXI7XG4gIGZ1bGxEb2N1bWVudEltYWdlRXh0ZW5zaW9uRmFjdG9yczogSW1hZ2VFeHRlbnNpb25GYWN0b3JzO1xuICByZXR1cm5GYWNlSW1hZ2U6IGJvb2xlYW47XG4gIHJldHVybkZ1bGxEb2N1bWVudEltYWdlOiBib29sZWFuO1xufVxuZXhwb3J0IGludGVyZmFjZSBIb25nS29uZ0lkRnJvbnRSZWNvZ25pemVyQ3RvciBleHRlbmRzIFJlY29nbml6ZXJDdG9yPEhvbmdLb25nSWRGcm9udFJlY29nbml6ZXI+IHt9XG5cbmV4cG9ydCBpbnRlcmZhY2UgSWthZFJlY29nbml6ZXJSZXN1bHQgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0IHtcbiAgYWRkcmVzczogc3RyaW5nO1xuICBkYXRlT2ZCaXJ0aDogRGF0ZTtcbiAgZW1wbG95ZXI6IHN0cmluZztcbiAgZXhwaXJ5RGF0ZTogRGF0ZTtcbiAgZmFjZUltYWdlOiBzdHJpbmc7XG4gIGZhY3VsdHlBZGRyZXNzOiBzdHJpbmc7XG4gIGZ1bGxEb2N1bWVudEltYWdlOiBzdHJpbmc7XG4gIG5hbWU6IHN0cmluZztcbiAgbmF0aW9uYWxpdHk6IHN0cmluZztcbiAgcGFzc3BvcnROdW1iZXI6IHN0cmluZztcbiAgc2VjdG9yeTogc3RyaW5nO1xuICBzZXg6IHN0cmluZztcbn1cbmV4cG9ydCBpbnRlcmZhY2UgSWthZFJlY29nbml6ZXJSZXN1bHRDdG9yIGV4dGVuZHMgUmVjb2duaXplclJlc3VsdEN0b3I8SWthZFJlY29nbml6ZXJSZXN1bHQ+IHt9XG5cbmV4cG9ydCBpbnRlcmZhY2UgSWthZFJlY29nbml6ZXIgZXh0ZW5kcyBSZWNvZ25pemVyPElrYWRSZWNvZ25pemVyUmVzdWx0PiB7XG4gIGRldGVjdEdsYXJlOiBib29sZWFuO1xuICBleHRyYWN0RW1wbG95ZXI6IGJvb2xlYW47XG4gIGV4dHJhY3RFeHBpcnlEYXRlOiBib29sZWFuO1xuICBleHRyYWN0RmFjdWx0eUFkZHJlc3M6IGJvb2xlYW47XG4gIGV4dHJhY3ROYXRpb25hbGl0eTogYm9vbGVhbjtcbiAgZXh0cmFjdFBhc3Nwb3J0TnVtYmVyOiBib29sZWFuO1xuICBleHRyYWN0U2VjdG9yOiBib29sZWFuO1xuICBleHRyYWN0U2V4OiBib29sZWFuO1xuICBmdWxsRG9jdW1lbnRJbWFnZURwaTogbnVtYmVyO1xuICByZXR1cm5GYWNlSW1hZ2U6IGJvb2xlYW47XG4gIHJldHVybkZ1bGxEb2N1bWVudEltYWdlOiBib29sZWFuO1xufVxuZXhwb3J0IGludGVyZmFjZSBJa2FkUmVjb2duaXplckN0b3IgZXh0ZW5kcyBSZWNvZ25pemVyQ3RvcjxJa2FkUmVjb2duaXplcj4ge31cblxuZXhwb3J0IGludGVyZmFjZSBJbmRvbmVzaWFJZEZyb250UmVjb2duaXplclJlc3VsdCBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHQge1xuICBhZGRyZXNzOiBzdHJpbmc7XG4gIGJsb29kVHlwZTogc3RyaW5nO1xuICBjaXRpemVuc2hpcDogc3RyaW5nO1xuICBjaXR5OiBzdHJpbmc7XG4gIGRhdGVPZkJpcnRoOiBEYXRlO1xuICBkYXRlT2ZFeHBpcnk6IERhdGU7XG4gIGRhdGVPZkV4cGlyeVBlcm1hbmVudDogc3RyaW5nO1xuICBkaXN0cmljdDogc3RyaW5nO1xuICBkb2N1bWVudE51bWJlcjogc3RyaW5nO1xuICBmYWNlSW1hZ2U6IHN0cmluZztcbiAgZnVsbERvY3VtZW50SW1hZ2U6IHN0cmluZztcbiAga2VsRGVzYTogc3RyaW5nO1xuICBtYXJpdGFsU3RhdHVzOiBzdHJpbmc7XG4gIG5hbWU6IHN0cmluZztcbiAgb2NjdXBhdGlvbjogc3RyaW5nO1xuICBwbGFjZU9mQmlydGg6IHN0cmluZztcbiAgcHJvdmluY2U6IHN0cmluZztcbiAgcmVsaWdpb246IHN0cmluZztcbiAgcnQ6IHN0cmluZztcbiAgcnc6IHN0cmluZztcbiAgc2V4OiBzdHJpbmc7XG4gIHNpZ25hdHVyZUltYWdlOiBzdHJpbmc7XG59XG5leHBvcnQgaW50ZXJmYWNlIEluZG9uZXNpYUlkRnJvbnRSZWNvZ25pemVyUmVzdWx0Q3RvciBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHRDdG9yPEluZG9uZXNpYUlkRnJvbnRSZWNvZ25pemVyUmVzdWx0PiB7fVxuXG5leHBvcnQgaW50ZXJmYWNlIEluZG9uZXNpYUlkRnJvbnRSZWNvZ25pemVyIGV4dGVuZHMgUmVjb2duaXplcjxJbmRvbmVzaWFJZEZyb250UmVjb2duaXplclJlc3VsdD4ge1xuICBkZXRlY3RHbGFyZTogYm9vbGVhbjtcbiAgZXh0cmFjdEFkZHJlc3M6IGJvb2xlYW47XG4gIGV4dHJhY3RCbG9vZFR5cGU6IGJvb2xlYW47XG4gIGV4dHJhY3RDaXRpemVuc2hpcDogYm9vbGVhbjtcbiAgZXh0cmFjdENpdHk6IGJvb2xlYW47XG4gIGV4dHJhY3REYXRlT2ZFeHBpcnk6IGJvb2xlYW47XG4gIGV4dHJhY3REaXN0cmljdDogYm9vbGVhbjtcbiAgZXh0cmFjdEtlbERlc2E6IGJvb2xlYW47XG4gIGV4dHJhY3RNYXJpdGFsU3RhdHVzOiBib29sZWFuO1xuICBleHRyYWN0TmFtZTogYm9vbGVhbjtcbiAgZXh0cmFjdE9jY3VwYXRpb246IGJvb2xlYW47XG4gIGV4dHJhY3RQbGFjZU9mQmlydGg6IGJvb2xlYW47XG4gIGV4dHJhY3RSZWxpZ2lvbjogYm9vbGVhbjtcbiAgZXh0cmFjdFJ0OiBib29sZWFuO1xuICBleHRyYWN0Unc6IGJvb2xlYW47XG4gIGZhY2VJbWFnZURwaTogbnVtYmVyO1xuICBmdWxsRG9jdW1lbnRJbWFnZURwaTogbnVtYmVyO1xuICBmdWxsRG9jdW1lbnRJbWFnZUV4dGVuc2lvbkZhY3RvcnM6IEltYWdlRXh0ZW5zaW9uRmFjdG9ycztcbiAgcmV0dXJuRmFjZUltYWdlOiBib29sZWFuO1xuICByZXR1cm5GdWxsRG9jdW1lbnRJbWFnZTogYm9vbGVhbjtcbiAgcmV0dXJuU2lnbmF0dXJlSW1hZ2U6IGJvb2xlYW47XG4gIHNpZ25hdHVyZUltYWdlRHBpOiBudW1iZXI7XG59XG5leHBvcnQgaW50ZXJmYWNlIEluZG9uZXNpYUlkRnJvbnRSZWNvZ25pemVyQ3RvciBleHRlbmRzIFJlY29nbml6ZXJDdG9yPEluZG9uZXNpYUlkRnJvbnRSZWNvZ25pemVyPiB7fVxuXG5leHBvcnQgaW50ZXJmYWNlIElyZWxhbmREbEZyb250UmVjb2duaXplclJlc3VsdCBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHQge1xuICBhZGRyZXNzOiBzdHJpbmc7XG4gIGRhdGVPZkJpcnRoOiBEYXRlO1xuICBkYXRlT2ZFeHBpcnk6IERhdGU7XG4gIGRhdGVPZklzc3VlOiBEYXRlO1xuICBkcml2ZXJOdW1iZXI6IHN0cmluZztcbiAgZmFjZUltYWdlOiBzdHJpbmc7XG4gIGZpcnN0TmFtZTogc3RyaW5nO1xuICBmdWxsRG9jdW1lbnRJbWFnZTogc3RyaW5nO1xuICBpc3N1ZWRCeTogc3RyaW5nO1xuICAvLyBzaWNcbiAgbGljZW5jZUNhdGVnb3JpZXM6IHN0cmluZztcbiAgLy8gc2ljXG4gIGxpY2VuY2VOdW1iZXI6IHN0cmluZztcbiAgcGxhY2VPZkJpcnRoOiBzdHJpbmc7XG4gIHNpZ25hdHVyZUltYWdlOiBzdHJpbmc7XG4gIHN1cm5hbWU6IHN0cmluZztcbn1cbmV4cG9ydCBpbnRlcmZhY2UgSXJlbGFuZERsRnJvbnRSZWNvZ25pemVyUmVzdWx0Q3RvciBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHRDdG9yPElyZWxhbmREbEZyb250UmVjb2duaXplclJlc3VsdD4ge31cblxuZXhwb3J0IGludGVyZmFjZSBJcmVsYW5kRGxGcm9udFJlY29nbml6ZXIgZXh0ZW5kcyBSZWNvZ25pemVyPElyZWxhbmREbEZyb250UmVjb2duaXplclJlc3VsdD4ge1xuICBkZXRlY3RHbGFyZTogYm9vbGVhbjtcbiAgZXh0cmFjdEFkZHJlc3M6IGJvb2xlYW47XG4gIGV4dHJhY3REYXRlT2ZCaXJ0aDogYm9vbGVhbjtcbiAgZXh0cmFjdERhdGVPZkV4cGlyeTogYm9vbGVhbjtcbiAgZXh0cmFjdERhdGVPZklzc3VlOiBib29sZWFuO1xuICBleHRyYWN0Rmlyc3ROYW1lOiBib29sZWFuO1xuICBleHRyYWN0SXNzdWVkQnk6IGJvb2xlYW47XG4gIGV4dHJhY3RMaWNlbmNlQ2F0ZWdvcmllczogYm9vbGVhbjtcbiAgZXh0cmFjdExpY2VuY2VOdW1iZXI6IGJvb2xlYW47XG4gIGV4dHJhY3RQbGFjZU9mQmlydGg6IGJvb2xlYW47XG4gIGV4dHJhY3RTdXJuYW1lOiBib29sZWFuO1xuICBmYWNlSW1hZ2VEcGk6IG51bWJlcjtcbiAgZnVsbERvY3VtZW50SW1hZ2VEcGk6IG51bWJlcjtcbiAgZnVsbERvY3VtZW50SW1hZ2VFeHRlbnNpb25GYWN0b3JzOiBJbWFnZUV4dGVuc2lvbkZhY3RvcnM7XG4gIHJldHVybkZhY2VJbWFnZTogYm9vbGVhbjtcbiAgcmV0dXJuRnVsbERvY3VtZW50SW1hZ2U6IGJvb2xlYW47XG4gIHJldHVyblNpZ25hdHVyZUltYWdlOiBib29sZWFuO1xuICBzaWduYXR1cmVJbWFnZURwaTogbnVtYmVyO1xufVxuZXhwb3J0IGludGVyZmFjZSBJcmVsYW5kRGxGcm9udFJlY29nbml6ZXJDdG9yIGV4dGVuZHMgUmVjb2duaXplckN0b3I8SXJlbGFuZERsRnJvbnRSZWNvZ25pemVyPiB7fVxuXG5leHBvcnQgaW50ZXJmYWNlIEl0YWx5RGxGcm9udFJlY29nbml6ZXJSZXN1bHQgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0IHtcbiAgYWRkcmVzczogc3RyaW5nO1xuICBkYXRlT2ZCaXJ0aDogRGF0ZTtcbiAgZGF0ZU9mRXhwaXJ5OiBEYXRlO1xuICBkYXRlT2ZJc3N1ZTogRGF0ZTtcbiAgZmFjZUltYWdlOiBzdHJpbmc7XG4gIGZpcnN0TmFtZTogc3RyaW5nO1xuICBmdWxsRG9jdW1lbnRJbWFnZTogc3RyaW5nO1xuICBnaXZlbk5hbWU6IHN0cmluZztcbiAgaXNzdWluZ0F1dGhvcml0eTogc3RyaW5nO1xuICAvLyBzaWNcbiAgbGljZW5jZUNhdGVnb3JpZXM6IHN0cmluZztcbiAgLy8gc2ljXG4gIGxpY2VuY2VOdW1iZXI6IHN0cmluZztcbiAgcGxhY2VPZkJpcnRoOiBzdHJpbmc7XG4gIHNpZ25hdHVyZUltYWdlOiBzdHJpbmc7XG4gIHN1cm5hbWU6IHN0cmluZztcbn1cbmV4cG9ydCBpbnRlcmZhY2UgSXRhbHlEbEZyb250UmVjb2duaXplclJlc3VsdEN0b3IgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0Q3RvcjxJdGFseURsRnJvbnRSZWNvZ25pemVyUmVzdWx0PiB7fVxuXG5leHBvcnQgaW50ZXJmYWNlIEl0YWx5RGxGcm9udFJlY29nbml6ZXIgZXh0ZW5kcyBSZWNvZ25pemVyPEl0YWx5RGxGcm9udFJlY29nbml6ZXJSZXN1bHQ+IHtcbiAgZGV0ZWN0R2xhcmU6IGJvb2xlYW47XG4gIGV4dHJhY3RBZGRyZXNzOiBib29sZWFuO1xuICBleHRyYWN0RGF0ZU9mQmlydGg6IGJvb2xlYW47XG4gIGV4dHJhY3REYXRlT2ZFeHBpcnk6IGJvb2xlYW47XG4gIGV4dHJhY3REYXRlT2ZJc3N1ZTogYm9vbGVhbjtcbiAgZXh0cmFjdEdpdmVuTmFtZTogYm9vbGVhbjtcbiAgZXh0cmFjdElzc3VpbmdBdXRob3JpdHk6IGJvb2xlYW47XG4gIGV4dHJhY3RMaWNlbmNlQ2F0ZWdvcmllczogYm9vbGVhbjtcbiAgZXh0cmFjdFBsYWNlT2ZCaXJ0aDogYm9vbGVhbjtcbiAgZXh0cmFjdFN1cm5hbWU6IGJvb2xlYW47XG4gIGZhY2VJbWFnZURwaTogbnVtYmVyO1xuICBmdWxsRG9jdW1lbnRJbWFnZURwaTogbnVtYmVyO1xuICBmdWxsRG9jdW1lbnRJbWFnZUV4dGVuc2lvbkZhY3RvcnM6IEltYWdlRXh0ZW5zaW9uRmFjdG9ycztcbiAgcmV0dXJuRmFjZUltYWdlOiBib29sZWFuO1xuICByZXR1cm5GdWxsRG9jdW1lbnRJbWFnZTogYm9vbGVhbjtcbiAgcmV0dXJuU2lnbmF0dXJlSW1hZ2U6IGJvb2xlYW47XG4gIHNpZ25hdHVyZUltYWdlRHBpOiBudW1iZXI7XG59XG5leHBvcnQgaW50ZXJmYWNlIEl0YWx5RGxGcm9udFJlY29nbml6ZXJDdG9yIGV4dGVuZHMgUmVjb2duaXplckN0b3I8SXRhbHlEbEZyb250UmVjb2duaXplcj4ge31cblxuZXhwb3J0IGludGVyZmFjZSBKb3JkYW5Db21iaW5lZFJlY29nbml6ZXJSZXN1bHQgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0IHtcbiAgZGF0ZU9mQmlydGg6IERhdGU7XG4gIGRhdGVPZkV4cGlyeTogRGF0ZTtcbiAgZGlnaXRhbFNpZ25hdHVyZTogc3RyaW5nO1xuICBkaWdpdGFsU2lnbmF0dXJlVmVyc2lvbjogc3RyaW5nO1xuICBkb2N1bWVudERhdGFNYXRjaDogYm9vbGVhbjtcbiAgZG9jdW1lbnROdW1iZXI6IHN0cmluZztcbiAgZmFjZUltYWdlOiBzdHJpbmc7XG4gIGZ1bGxEb2N1bWVudEJhY2tJbWFnZTogc3RyaW5nO1xuICBmdWxsRG9jdW1lbnRGcm9udEltYWdlOiBzdHJpbmc7XG4gIGlzc3Vlcjogc3RyaW5nO1xuICBtcnpWZXJpZmllZDogYm9vbGVhbjtcbiAgbmFtZTogc3RyaW5nO1xuICBuYXRpb25hbE51bWJlcjogc3RyaW5nO1xuICBuYXRpb25hbGl0eTogc3RyaW5nO1xuICBzY2FubmluZ0ZpcnN0U2lkZURvbmU6IGJvb2xlYW47XG4gIHNleDogc3RyaW5nO1xufVxuZXhwb3J0IGludGVyZmFjZSBKb3JkYW5Db21iaW5lZFJlY29nbml6ZXJSZXN1bHRDdG9yIGV4dGVuZHMgUmVjb2duaXplclJlc3VsdEN0b3I8Sm9yZGFuQ29tYmluZWRSZWNvZ25pemVyUmVzdWx0PiB7fVxuXG5leHBvcnQgaW50ZXJmYWNlIEpvcmRhbkNvbWJpbmVkUmVjb2duaXplciBleHRlbmRzIFJlY29nbml6ZXI8Sm9yZGFuQ29tYmluZWRSZWNvZ25pemVyUmVzdWx0PiB7XG4gIGRldGVjdEdsYXJlOiBib29sZWFuO1xuICByZXR1cm5GdWxsRG9jdW1lbnRJbWFnZTogYm9vbGVhbjtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgSm9yZGFuQ29tYmluZWRSZWNvZ25pemVyQ3RvciBleHRlbmRzIFJlY29nbml6ZXJDdG9yPEpvcmRhbkNvbWJpbmVkUmVjb2duaXplcj4ge31cblxuZXhwb3J0IGludGVyZmFjZSBKb3JkYW5JZEJhY2tSZWNvZ25pemVyUmVzdWx0IGV4dGVuZHMgUmVjb2duaXplclJlc3VsdCB7XG4gIGRhdGVPZkJpcnRoOiBEYXRlO1xuICBkYXRlT2ZFeHBpcnk6IERhdGU7XG4gIGRvY3VtZW50Q29kZTogc3RyaW5nO1xuICBkb2N1bWVudE51bWJlcjogc3RyaW5nO1xuICBmdWxsRG9jdW1lbnRJbWFnZTogc3RyaW5nO1xuICBpc3N1ZXI6IHN0cmluZztcbiAgbXJ6UGFyc2VkOiBib29sZWFuO1xuICBtcnpUZXh0OiBzdHJpbmc7XG4gIG1yelZlcmlmaWVkOiBib29sZWFuO1xuICBuYXRpb25hbGl0eTogc3RyaW5nO1xuICBvcHQxOiBzdHJpbmc7XG4gIG9wdDI6IHN0cmluZztcbiAgcHJpbWFyeUlkOiBzdHJpbmc7XG4gIHNlY29uZGFyeUlkOiBzdHJpbmc7XG4gIHNleDogc3RyaW5nO1xufVxuZXhwb3J0IGludGVyZmFjZSBKb3JkYW5JZEJhY2tSZWNvZ25pemVyUmVzdWx0Q3RvciBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHRDdG9yPEpvcmRhbklkQmFja1JlY29nbml6ZXJSZXN1bHQ+IHt9XG5cbmV4cG9ydCBpbnRlcmZhY2UgSm9yZGFuSWRCYWNrUmVjb2duaXplciBleHRlbmRzIFJlY29nbml6ZXI8Sm9yZGFuSWRCYWNrUmVjb2duaXplclJlc3VsdD4ge1xuICBkZXRlY3RHbGFyZTogYm9vbGVhbjtcbiAgZXh0cmFjdERhdGVPZkJpcnRoOiBib29sZWFuO1xuICBleHRyYWN0TmFtZTogYm9vbGVhbjtcbiAgZXh0cmFjdFNleDogYm9vbGVhbjtcbiAgcmV0dXJuRmFjZUltYWdlOiBib29sZWFuO1xuICByZXR1cm5GdWxsRG9jdW1lbnRJbWFnZTogYm9vbGVhbjtcbiAgc2lnblJlc3VsdDogYm9vbGVhbjtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgSm9yZGFuSWRCYWNrUmVjb2duaXplckN0b3IgZXh0ZW5kcyBSZWNvZ25pemVyQ3RvcjxKb3JkYW5JZEJhY2tSZWNvZ25pemVyPiB7fVxuXG5leHBvcnQgaW50ZXJmYWNlIEpvcmRhbklkRnJvbnRSZWNvZ25pemVyUmVzdWx0IGV4dGVuZHMgUmVjb2duaXplclJlc3VsdCB7XG4gIGRhdGVPZkJpcnRoOiBEYXRlO1xuICBmYWNlSW1hZ2U6IHN0cmluZztcbiAgZnVsbERvY3VtZW50SW1hZ2U6IHN0cmluZztcbiAgbmFtZTogc3RyaW5nO1xuICBuYXRpb25hbE51bWJlcjogc3RyaW5nO1xuICBzZXg6IHN0cmluZztcbn1cbmV4cG9ydCBpbnRlcmZhY2UgSm9yZGFuSWRGcm9udFJlY29nbml6ZXJSZXN1bHRDdG9yIGV4dGVuZHMgUmVjb2duaXplclJlc3VsdEN0b3I8Sm9yZGFuSWRGcm9udFJlY29nbml6ZXJSZXN1bHQ+IHt9XG5cbmV4cG9ydCBpbnRlcmZhY2UgSm9yZGFuSWRGcm9udFJlY29nbml6ZXIgZXh0ZW5kcyBSZWNvZ25pemVyPEpvcmRhbklkRnJvbnRSZWNvZ25pemVyUmVzdWx0PiB7XG4gIGRldGVjdEdsYXJlOiBib29sZWFuO1xuICBleHRyYWN0RGF0ZU9mQmlydGg6IGJvb2xlYW47XG4gIGV4dHJhY3ROYW1lOiBib29sZWFuO1xuICBleHRyYWN0U2V4OiBib29sZWFuO1xuICBmdWxsRG9jdW1lbnRJbWFnZURwaTogbnVtYmVyO1xuICByZXR1cm5GYWNlSW1hZ2U6IGJvb2xlYW47XG4gIHJldHVybkZ1bGxEb2N1bWVudEltYWdlOiBib29sZWFuO1xufVxuZXhwb3J0IGludGVyZmFjZSBKb3JkYW5JZEZyb250UmVjb2duaXplckN0b3IgZXh0ZW5kcyBSZWNvZ25pemVyQ3RvcjxKb3JkYW5JZEZyb250UmVjb2duaXplcj4ge31cblxuZXhwb3J0IGludGVyZmFjZSBLdXdhaXRJZEJhY2tSZWNvZ25pemVyUmVzdWx0IGV4dGVuZHMgUmVjb2duaXplclJlc3VsdCB7XG4gIGZ1bGxEb2N1bWVudEltYWdlOiBzdHJpbmc7XG4gIG1yelJlc3VsdDogTXJ6UmVzdWx0O1xuICBzZXJpYWxObzogc3RyaW5nO1xufVxuZXhwb3J0IGludGVyZmFjZSBLdXdhaXRJZEJhY2tSZWNvZ25pemVyUmVzdWx0Q3RvciBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHRDdG9yPEt1d2FpdElkQmFja1JlY29nbml6ZXJSZXN1bHQ+IHt9XG5cbmV4cG9ydCBpbnRlcmZhY2UgS3V3YWl0SWRCYWNrUmVjb2duaXplciBleHRlbmRzIFJlY29nbml6ZXI8S3V3YWl0SWRCYWNrUmVjb2duaXplclJlc3VsdD4ge1xuICBkZXRlY3RHbGFyZTogYm9vbGVhbjtcbiAgZXh0cmFjdFNlcmlhbE5vOiBib29sZWFuO1xuICBmdWxsRG9jdW1lbnRJbWFnZURwaTogbnVtYmVyO1xuICBmdWxsRG9jdW1lbnRJbWFnZUV4dGVuc2lvbkZhY3RvcnM6IEltYWdlRXh0ZW5zaW9uRmFjdG9ycztcbiAgcmV0dXJuRnVsbERvY3VtZW50SW1hZ2U6IGJvb2xlYW47XG59XG5leHBvcnQgaW50ZXJmYWNlIEt1d2FpdElkQmFja1JlY29nbml6ZXJDdG9yIGV4dGVuZHMgUmVjb2duaXplckN0b3I8S3V3YWl0SWRCYWNrUmVjb2duaXplcj4ge31cblxuZXhwb3J0IGludGVyZmFjZSBLdXdhaXRJZEZyb250UmVjb2duaXplclJlc3VsdCBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHQge1xuICBiaXJ0aERhdGE6IERhdGU7XG4gIGNpdmlsSWROdW1iZXI6IHN0cmluZztcbiAgZXhwaXJ5RGF0ZTogRGF0ZTtcbiAgZmFjZUltYWdlOiBzdHJpbmc7XG4gIGZ1bGxEb2N1bWVudEltYWdlOiBzdHJpbmc7XG4gIG5hbWU6IHN0cmluZztcbiAgbmF0aW9uYWxpdHk6IHN0cmluZztcbiAgc2V4OiBzdHJpbmc7XG59XG5leHBvcnQgaW50ZXJmYWNlIEt1d2FpdElkRnJvbnRSZWNvZ25pemVyUmVzdWx0Q3RvciBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHRDdG9yPEt1d2FpdElkRnJvbnRSZWNvZ25pemVyUmVzdWx0PiB7fVxuXG5leHBvcnQgaW50ZXJmYWNlIEt1d2FpdElkRnJvbnRSZWNvZ25pemVyIGV4dGVuZHMgUmVjb2duaXplcjxLdXdhaXRJZEZyb250UmVjb2duaXplclJlc3VsdD4ge1xuICBkZXRlY3RHbGFyZTogYm9vbGVhbjtcbiAgZXh0cmFjdEJpcnRoRGF0ZTogYm9vbGVhbjtcbiAgZXh0cmFjdE5hbWU6IGJvb2xlYW47XG4gIGV4dHJhY3ROYXRpb25hbGl0eTogYm9vbGVhbjtcbiAgZXh0cmFjdFNleDogYm9vbGVhbjtcbiAgZmFjZUltYWdlRHBpOiBudW1iZXI7XG4gIGZ1bGxEb2N1bWVudEltYWdlRHBpOiBudW1iZXI7XG4gIGZ1bGxEb2N1bWVudEltYWdlRXh0ZW5zaW9uRmFjdG9yczogSW1hZ2VFeHRlbnNpb25GYWN0b3JzO1xuICByZXR1cm5GYWNlSW1hZ2U6IGJvb2xlYW47XG4gIHJldHVybkZ1bGxEb2N1bWVudEltYWdlOiBib29sZWFuO1xufVxuZXhwb3J0IGludGVyZmFjZSBLdXdhaXRJZEZyb250UmVjb2duaXplckN0b3IgZXh0ZW5kcyBSZWNvZ25pemVyQ3RvcjxLdXdhaXRJZEZyb250UmVjb2duaXplcj4ge31cblxuZXhwb3J0IGludGVyZmFjZSBNYWxheXNpYURsRnJvbnRSZWNvZ25pemVyUmVzdWx0IGV4dGVuZHMgUmVjb2duaXplclJlc3VsdCB7XG4gIGNpdHk6IHN0cmluZztcbiAgZGxDbGFzczogc3RyaW5nO1xuICBmYWNlSW1hZ2U6IHN0cmluZztcbiAgZnVsbEFkZHJlc3M6IHN0cmluZztcbiAgZnVsbERvY3VtZW50SW1hZ2U6IHN0cmluZztcbiAgaWRlbnRpdHlOdW1iZXI6IHN0cmluZztcbiAgbmFtZTogc3RyaW5nO1xuICBuYXRpb25hbGl0eTogc3RyaW5nO1xuICBvd25lclN0YXRlOiBzdHJpbmc7XG4gIHN0cmVldDogc3RyaW5nO1xuICB2YWxpZEZyb206IERhdGU7XG4gIHZhbGlkVW50aWw6IERhdGU7XG4gIHppcGNvZGU6IHN0cmluZztcbn1cbmV4cG9ydCBpbnRlcmZhY2UgTWFsYXlzaWFEbEZyb250UmVjb2duaXplclJlc3VsdEN0b3IgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0Q3RvcjxNYWxheXNpYURsRnJvbnRSZWNvZ25pemVyUmVzdWx0PiB7fVxuXG5leHBvcnQgaW50ZXJmYWNlIE1hbGF5c2lhRGxGcm9udFJlY29nbml6ZXIgZXh0ZW5kcyBSZWNvZ25pemVyPE1hbGF5c2lhRGxGcm9udFJlY29nbml6ZXJSZXN1bHQ+IHtcbiAgZGV0ZWN0R2xhcmU6IGJvb2xlYW47XG4gIGV4dHJhY3RBZGRyZXNzOiBib29sZWFuO1xuICBleHRyYWN0Q2xhc3M6IGJvb2xlYW47XG4gIGV4dHJhY3ROYW1lOiBib29sZWFuO1xuICBleHRyYWN0TmF0aW9uYWxpdHk6IGJvb2xlYW47XG4gIGV4dHJhY3RWYWxpZEZyb206IGJvb2xlYW47XG4gIGV4dHJhY3RWYWxpZFVudGlsOiBib29sZWFuO1xuICBmYWNlSW1hZ2VEcGk6IG51bWJlcjtcbiAgZnVsbERvY3VtZW50SW1hZ2VEcGk6IG51bWJlcjtcbiAgZnVsbERvY3VtZW50SW1hZ2VFeHRlbnNpb25GYWN0b3JzOiBJbWFnZUV4dGVuc2lvbkZhY3RvcnM7XG4gIHJldHVybkZhY2VJbWFnZTogYm9vbGVhbjtcbiAgcmV0dXJuRnVsbERvY3VtZW50SW1hZ2U6IGJvb2xlYW47XG59XG5leHBvcnQgaW50ZXJmYWNlIE1hbGF5c2lhRGxGcm9udFJlY29nbml6ZXJDdG9yIGV4dGVuZHMgUmVjb2duaXplckN0b3I8TWFsYXlzaWFEbEZyb250UmVjb2duaXplcj4ge31cblxuZXhwb3J0IGludGVyZmFjZSBNYWxheXNpYU15VGVudGVyYVJlY29nbml6ZXJSZXN1bHQgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0IHtcbiAgYXJteU51bWJlcjogc3RyaW5nO1xuICBiaXJ0aERhdGE6IERhdGU7XG4gIGNpdHk6IHN0cmluZztcbiAgZmFjZUltYWdlOiBzdHJpbmc7XG4gIGZ1bGxBZGRyZXNzOiBzdHJpbmc7XG4gIGZ1bGxEb2N1bWVudEltYWdlOiBzdHJpbmc7XG4gIGZ1bGxOYW1lOiBzdHJpbmc7XG4gIG5yaWM6IHN0cmluZztcbiAgb3duZXJTdGF0ZTogc3RyaW5nO1xuICByZWxpZ2lvbjogc3RyaW5nO1xuICBzZXg6IHN0cmluZztcbiAgc3RyZWV0OiBzdHJpbmc7XG4gIHppcGNvZGU6IHN0cmluZztcbn1cbmV4cG9ydCBpbnRlcmZhY2UgTWFsYXlzaWFNeVRlbnRlcmFSZWNvZ25pemVyUmVzdWx0Q3RvciBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHRDdG9yPE1hbGF5c2lhTXlUZW50ZXJhUmVjb2duaXplclJlc3VsdD4ge31cblxuZXhwb3J0IGludGVyZmFjZSBNYWxheXNpYU15VGVudGVyYVJlY29nbml6ZXIgZXh0ZW5kcyBSZWNvZ25pemVyPE1hbGF5c2lhTXlUZW50ZXJhUmVjb2duaXplclJlc3VsdD4ge1xuICBkZXRlY3RHbGFyZTogYm9vbGVhbjtcbiAgZXh0cmFjdEZ1bGxOYW1lQW5kQWRkcmVzczogYm9vbGVhbjtcbiAgZXh0cmFjdFJlbGlnaW9uOiBib29sZWFuO1xuICBmYWNlSW1hZ2VEcGk6IG51bWJlcjtcbiAgZnVsbERvY3VtZW50SW1hZ2VEcGk6IG51bWJlcjtcbiAgZnVsbERvY3VtZW50SW1hZ2VFeHRlbnNpb25GYWN0b3JzOiBJbWFnZUV4dGVuc2lvbkZhY3RvcnM7XG4gIHJldHVybkZhY2VJbWFnZTogYm9vbGVhbjtcbiAgcmV0dXJuRnVsbERvY3VtZW50SW1hZ2U6IGJvb2xlYW47XG59XG5leHBvcnQgaW50ZXJmYWNlIE1hbGF5c2lhTXlUZW50ZXJhUmVjb2duaXplckN0b3IgZXh0ZW5kcyBSZWNvZ25pemVyQ3RvcjxNYWxheXNpYU15VGVudGVyYVJlY29nbml6ZXI+IHt9XG5cbmV4cG9ydCBpbnRlcmZhY2UgTWV4aWNvVm90ZXJJZEZyb250UmVjb2duaXplclJlc3VsdCBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHQge1xuICBhZGRyZXNzOiBzdHJpbmc7XG4gIGN1cnA6IHN0cmluZztcbiAgZGF0ZU9mQmlydGg6IERhdGU7XG4gIGVsZWN0b3JLZXk6IHN0cmluZztcbiAgZmFjZUltYWdlOiBzdHJpbmc7XG4gIGZ1bGxEb2N1bWVudEltYWdlOiBzdHJpbmc7XG4gIGZ1bGxOYW1lOiBzdHJpbmc7XG4gIHNleDogc3RyaW5nO1xuICBzaWduYXR1cmVJbWFnZTogc3RyaW5nO1xufVxuZXhwb3J0IGludGVyZmFjZSBNZXhpY29Wb3RlcklkRnJvbnRSZWNvZ25pemVyUmVzdWx0Q3RvciBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHRDdG9yPE1leGljb1ZvdGVySWRGcm9udFJlY29nbml6ZXJSZXN1bHQ+IHt9XG5cbmV4cG9ydCBpbnRlcmZhY2UgTWV4aWNvVm90ZXJJZEZyb250UmVjb2duaXplciBleHRlbmRzIFJlY29nbml6ZXI8TWV4aWNvVm90ZXJJZEZyb250UmVjb2duaXplclJlc3VsdD4ge1xuICBkZXRlY3RHbGFyZTogYm9vbGVhbjtcbiAgZXh0cmFjdEFkZHJlc3M6IGJvb2xlYW47XG4gIGV4dHJhY3RDdXJwOiBib29sZWFuO1xuICBleHRyYWN0RnVsbE5hbWU6IGJvb2xlYW47XG4gIGZhY2VJbWFnZURwaTogbnVtYmVyO1xuICBmdWxsRG9jdW1lbnRJbWFnZURwaTogbnVtYmVyO1xuICBmdWxsRG9jdW1lbnRJbWFnZUV4dGVuc2lvbkZhY3RvcnM6IEltYWdlRXh0ZW5zaW9uRmFjdG9ycztcbiAgcmV0dXJuRmFjZUltYWdlOiBib29sZWFuO1xuICByZXR1cm5GdWxsRG9jdW1lbnRJbWFnZTogYm9vbGVhbjtcbiAgcmV0dXJuU2lnbmF0dXJlSW1hZ2U6IGJvb2xlYW47XG4gIHNpZ25hdHVyZUltYWdlRHBpOiBudW1iZXI7XG59XG5leHBvcnQgaW50ZXJmYWNlIE1leGljb1ZvdGVySWRGcm9udFJlY29nbml6ZXJDdG9yIGV4dGVuZHMgUmVjb2duaXplckN0b3I8TWV4aWNvVm90ZXJJZEZyb250UmVjb2duaXplcj4ge31cblxuZXhwb3J0IGludGVyZmFjZSBNb3JvY2NvSWRCYWNrUmVjb2duaXplclJlc3VsdCBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHQge1xuICBhZGRyZXNzOiBzdHJpbmc7XG4gIGNpdmlsU3RhdHVzTnVtYmVyOiBzdHJpbmc7XG4gIGRhdGVPZkV4cGlyeTogRGF0ZTtcbiAgZG9jdW1lbnROdW1iZXI6IHN0cmluZztcbiAgZmF0aGVyc05hbWU6IHN0cmluZztcbiAgZnVsbERvY3VtZW50SW1hZ2U6IHN0cmluZztcbiAgbW90aGVyc05hbWU6IHN0cmluZztcbiAgc2V4OiBzdHJpbmc7XG59XG5leHBvcnQgaW50ZXJmYWNlIE1vcm9jY29JZEJhY2tSZWNvZ25pemVyUmVzdWx0Q3RvciBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHRDdG9yPE1vcm9jY29JZEJhY2tSZWNvZ25pemVyUmVzdWx0PiB7fVxuXG5leHBvcnQgaW50ZXJmYWNlIE1vcm9jY29JZEJhY2tSZWNvZ25pemVyIGV4dGVuZHMgUmVjb2duaXplcjxNb3JvY2NvSWRCYWNrUmVjb2duaXplclJlc3VsdD4ge1xuICBkZXRlY3RHbGFyZTogYm9vbGVhbjtcbiAgZXh0cmFjdEFkZHJlc3M6IGJvb2xlYW47XG4gIGV4dHJhY3RDaXZpbFN0YXR1c051bWJlcjogYm9vbGVhbjtcbiAgZXh0cmFjdERhdGVPZkV4cGlyeTogYm9vbGVhbjtcbiAgZXh0cmFjdEZhdGhlcnNOYW1lOiBib29sZWFuO1xuICBleHRyYWN0TW90aGVyc05hbWU6IGJvb2xlYW47XG4gIGV4dHJhY3RTZXg6IGJvb2xlYW47XG4gIGZ1bGxEb2N1bWVudEltYWdlRHBpOiBudW1iZXI7XG4gIGZ1bGxEb2N1bWVudEltYWdlRXh0ZW5zaW9uRmFjdG9yczogSW1hZ2VFeHRlbnNpb25GYWN0b3JzO1xuICByZXR1cm5GdWxsRG9jdW1lbnRJbWFnZTogYm9vbGVhbjtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgTW9yb2Njb0lkQmFja1JlY29nbml6ZXJDdG9yIGV4dGVuZHMgUmVjb2duaXplckN0b3I8TW9yb2Njb0lkQmFja1JlY29nbml6ZXI+IHt9XG5cbmV4cG9ydCBpbnRlcmZhY2UgTW9yb2Njb0lkRnJvbnRSZWNvZ25pemVyUmVzdWx0IGV4dGVuZHMgUmVjb2duaXplclJlc3VsdCB7XG4gIGRhdGVPZkJpcnRoOiBEYXRlO1xuICBkYXRlT2ZFeHBpcnk6IERhdGU7XG4gIGRvY3VtZW50TnVtYmVyOiBzdHJpbmc7XG4gIGZhY2VJbWFnZTogc3RyaW5nO1xuICBmdWxsRG9jdW1lbnRJbWFnZTogc3RyaW5nO1xuICBuYW1lOiBzdHJpbmc7XG4gIHBsYWNlT2ZCaXJ0aDogc3RyaW5nO1xuICBzZXg6IHN0cmluZztcbiAgc2lnbmF0dXJlSW1hZ2U6IHN0cmluZztcbiAgc3VybmFtZTogc3RyaW5nO1xufVxuZXhwb3J0IGludGVyZmFjZSBNb3JvY2NvSWRGcm9udFJlY29nbml6ZXJSZXN1bHRDdG9yIGV4dGVuZHMgUmVjb2duaXplclJlc3VsdEN0b3I8TW9yb2Njb0lkRnJvbnRSZWNvZ25pemVyUmVzdWx0PiB7fVxuXG5leHBvcnQgaW50ZXJmYWNlIE1vcm9jY29JZEZyb250UmVjb2duaXplciBleHRlbmRzIFJlY29nbml6ZXI8TW9yb2Njb0lkRnJvbnRSZWNvZ25pemVyUmVzdWx0PiB7XG4gIGRldGVjdEdsYXJlOiBib29sZWFuO1xuICBleHRyYWN0RGF0ZU9mRXhwaXJ5OiBib29sZWFuO1xuICBleHRyYWN0RGF0ZU9mQmlydGg6IGJvb2xlYW47XG4gIGV4dHJhY3ROYW1lOiBib29sZWFuO1xuICBleHRyYWN0UGxhY2VPZkJpcnRoOiBib29sZWFuO1xuICBleHRyYWN0U2V4OiBib29sZWFuO1xuICBleHRyYWN0U3VybmFtZTogYm9vbGVhbjtcbiAgZmFjZUltYWdlRHBpOiBudW1iZXI7XG4gIGZ1bGxEb2N1bWVudEltYWdlRHBpOiBudW1iZXI7XG4gIGZ1bGxEb2N1bWVudEltYWdlRXh0ZW5zaW9uRmFjdG9yczogSW1hZ2VFeHRlbnNpb25GYWN0b3JzO1xuICByZXR1cm5GYWNlSW1hZ2U6IGJvb2xlYW47XG4gIHJldHVybkZ1bGxEb2N1bWVudEltYWdlOiBib29sZWFuO1xuICByZXR1cm5TaWduYXR1cmVJbWFnZTogYm9vbGVhbjtcbiAgc2lnbmF0dXJlSW1hZ2VEcGk6IG51bWJlcjtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgTW9yb2Njb0lkRnJvbnRSZWNvZ25pemVyQ3RvciBleHRlbmRzIFJlY29nbml6ZXJDdG9yPE1vcm9jY29JZEZyb250UmVjb2duaXplcj4ge31cblxuZXhwb3J0IGludGVyZmFjZSBNcnRkQ29tYmluZWRSZWNvZ25pemVyUmVzdWx0IGV4dGVuZHMgUmVjb2duaXplclJlc3VsdCB7XG4gIGFsaWVuTnVtYmVyOiBzdHJpbmc7XG4gIGFwcGxpY2F0aW9uUmVjZWlwdE51bWJlcjogc3RyaW5nO1xuICBkYXRlT2ZCaXJ0aDogRGF0ZTtcbiAgZGF0ZU9mRXhwaXJ5OiBEYXRlO1xuICBkaWdpdGFsU2lnbmF0dXJlOiBzdHJpbmc7XG4gIGRpZ2l0YWxTaWduYXR1cmVWZXJzaW9uOiBzdHJpbmc7XG4gIGRvY3VtZW50Q29kZTogc3RyaW5nO1xuICBkb2N1bWVudERhdGFNYXRjaDogYm9vbGVhbjtcbiAgZG9jdW1lbnROdW1iZXI6IHN0cmluZztcbiAgZG9jdW1lbnRUeXBlOiBzdHJpbmc7XG4gIGZhY2VJbWFnZTogc3RyaW5nO1xuICBmdWxsRG9jdW1lbnRCYWNrSW1hZ2U6IHN0cmluZztcbiAgZnVsbERvY3VtZW50RnJvbnRJbWFnZTogc3RyaW5nO1xuICBpbW1pZ3JhbnRDYXNlTnVtYmVyOiBzdHJpbmc7XG4gIGlzc3Vlcjogc3RyaW5nO1xuICBtcnpJbWFnZTogc3RyaW5nO1xuICBtcnpQYXJzZWQ6IGJvb2xlYW47XG4gIG1yelRleHQ6IHN0cmluZztcbiAgbXJ6VmVyaWZpZWQ6IGJvb2xlYW47XG4gIG5hdGlvbmFsaXR5OiBzdHJpbmc7XG4gIG9wdDE6IHN0cmluZztcbiAgb3B0Mjogc3RyaW5nO1xuICBwcmltYXJ5SWQ6IHN0cmluZztcbiAgc2Nhbm5pbmdGaXJzdFNpZGVEb25lOiBib29sZWFuO1xuICBzZWNvbmRhcnlJZDogc3RyaW5nO1xuICBzZXg6IHN0cmluZztcbn1cbmV4cG9ydCBpbnRlcmZhY2UgTXJ0ZENvbWJpbmVkUmVjb2duaXplclJlc3VsdEN0b3IgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0Q3RvcjxNcnRkQ29tYmluZWRSZWNvZ25pemVyUmVzdWx0PiB7fVxuXG5leHBvcnQgaW50ZXJmYWNlIE1ydGRDb21iaW5lZFJlY29nbml6ZXIgZXh0ZW5kcyBSZWNvZ25pemVyPE1ydGRDb21iaW5lZFJlY29nbml6ZXJSZXN1bHQ+IHtcbiAgYWxsb3dVbnBhcnNlZFJlc3VsdHM6IGJvb2xlYW47XG4gIGFsbG93VW52ZXJpZmllZFJlc3VsdHM6IGJvb2xlYW47XG4gIG51bVN0YWJsZURldGVjdGlvbnNUaHJlc2hvbGQ6IG51bWJlcjtcbiAgcmV0dXJuRmFjZUltYWdlOiBib29sZWFuO1xuICByZXR1cm5GdWxsRG9jdW1lbnRJbWFnZTogYm9vbGVhbjtcbiAgcmV0dXJuTXJ6SW1hZ2U6IGJvb2xlYW47XG4gIHNpZ25SZXN1bHQ6IGJvb2xlYW47XG59XG5leHBvcnQgaW50ZXJmYWNlIE1ydGRDb21iaW5lZFJlY29nbml6ZXJDdG9yIGV4dGVuZHMgUmVjb2duaXplckN0b3I8TXJ0ZENvbWJpbmVkUmVjb2duaXplcj4ge31cblxuZXhwb3J0IGludGVyZmFjZSBNcnRkUmVjb2duaXplclJlc3VsdCBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHQge1xuICBmdWxsRG9jdW1lbnRJbWFnZTogc3RyaW5nO1xuICBtcnpJbWFnZTogc3RyaW5nO1xuICBtcnpSZXN1bHQ6IE1yelJlc3VsdDtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgTXJ0ZFJlY29nbml6ZXJSZXN1bHRDdG9yIGV4dGVuZHMgUmVjb2duaXplclJlc3VsdEN0b3I8TXJ0ZFJlY29nbml6ZXJSZXN1bHQ+IHt9XG5cbmV4cG9ydCBpbnRlcmZhY2UgTXJ0ZFJlY29nbml6ZXIgZXh0ZW5kcyBSZWNvZ25pemVyPE1ydGRSZWNvZ25pemVyUmVzdWx0PiB7XG4gIGFsbG93VW5wYXJzZWRSZXN1bHRzOiBib29sZWFuO1xuICBhbGxvd1VudmVyaWZpZWRSZXN1bHRzOiBib29sZWFuO1xuICBkZXRlY3RHbGFyZTogYm9vbGVhbjtcbiAgcmV0dXJuRnVsbERvY3VtZW50SW1hZ2U6IGJvb2xlYW47XG4gIHJldHVybk1yekltYWdlOiBib29sZWFuO1xuICBzYXZlSW1hZ2VEUEk6IG51bWJlcjtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgTXJ0ZFJlY29nbml6ZXJDdG9yIGV4dGVuZHMgUmVjb2duaXplckN0b3I8TXJ0ZFJlY29nbml6ZXI+IHt9XG5cbmV4cG9ydCBpbnRlcmZhY2UgTXlLYWRCYWNrUmVjb2duaXplclJlc3VsdCBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHQge1xuICBkYXRlT2ZCaXJ0aDogRGF0ZTtcbiAgZXh0ZW5kZWROcmljOiBzdHJpbmc7XG4gIGZ1bGxEb2N1bWVudEltYWdlOiBzdHJpbmc7XG4gIG5yaWM6IHN0cmluZztcbiAgb2xkTnJpYzogc3RyaW5nO1xuICBzZXg6IHN0cmluZztcbiAgc2lnbmF0dXJlSW1hZ2U6IHN0cmluZztcbn1cbmV4cG9ydCBpbnRlcmZhY2UgTXlLYWRCYWNrUmVjb2duaXplclJlc3VsdEN0b3IgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0Q3RvcjxNeUthZEJhY2tSZWNvZ25pemVyUmVzdWx0PiB7fVxuXG5leHBvcnQgaW50ZXJmYWNlIE15S2FkQmFja1JlY29nbml6ZXIgZXh0ZW5kcyBSZWNvZ25pemVyPE15S2FkQmFja1JlY29nbml6ZXJSZXN1bHQ+IHtcbiAgZGV0ZWN0R2xhcmU6IGJvb2xlYW47XG4gIGV4dHJhY3RPbGROcmljOiBib29sZWFuO1xuICBmdWxsRG9jdW1lbnRJbWFnZURwaTogbnVtYmVyO1xuICBmdWxsRG9jdW1lbnRJbWFnZUV4dGVuc2lvbkZhY3RvcnM6IEltYWdlRXh0ZW5zaW9uRmFjdG9ycztcbiAgcmV0dXJuRnVsbERvY3VtZW50SW1hZ2U6IGJvb2xlYW47XG4gIHJldHVyblNpZ25hdHVyZUltYWdlOiBib29sZWFuO1xuICBzaWduYXR1cmVJbWFnZURwaTogbnVtYmVyO1xufVxuZXhwb3J0IGludGVyZmFjZSBNeUthZEJhY2tSZWNvZ25pemVyQ3RvciBleHRlbmRzIFJlY29nbml6ZXJDdG9yPE15S2FkQmFja1JlY29nbml6ZXI+IHt9XG5cbmV4cG9ydCBpbnRlcmZhY2UgTXlLYWRGcm9udFJlY29nbml6ZXJSZXN1bHQgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0IHtcbiAgYXJteU51bWJlcjogc3RyaW5nO1xuICBmYWNlSW1hZ2U6IHN0cmluZztcbiAgZnVsbERvY3VtZW50SW1hZ2U6IHN0cmluZztcbiAgbnJpY051bWJlcjogc3RyaW5nO1xuICBvd25lckFkZHJlc3M6IHN0cmluZztcbiAgb3duZXJBZGRyZXNzQ2l0eTogc3RyaW5nO1xuICBvd25lckFkZHJlc3NTdGF0ZTogc3RyaW5nO1xuICBvd25lckFkZHJlc3NTdHJlZXQ6IHN0cmluZztcbiAgb3duZXJBZGRyZXNzWmlwQ29kZTogc3RyaW5nO1xuICBvd25lckJpcnRoRGF0ZTogRGF0ZTtcbiAgb3duZXJGdWxsTmFtZTogc3RyaW5nO1xuICBvd25lclJlbGlnaW9uOiBzdHJpbmc7XG4gIG93bmVyU2V4OiBzdHJpbmc7XG59XG5leHBvcnQgaW50ZXJmYWNlIE15S2FkRnJvbnRSZWNvZ25pemVyUmVzdWx0Q3RvciBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHRDdG9yPE15S2FkRnJvbnRSZWNvZ25pemVyUmVzdWx0PiB7fVxuXG5leHBvcnQgaW50ZXJmYWNlIE15S2FkRnJvbnRSZWNvZ25pemVyIGV4dGVuZHMgUmVjb2duaXplcjxNeUthZEZyb250UmVjb2duaXplclJlc3VsdD4ge1xuICBleHRyYWN0QXJteU51bWJlcjogYm9vbGVhbjtcbiAgZnVsbERvY3VtZW50SW1hZ2VEcGk6IG51bWJlcjtcbiAgcmV0dXJuRmFjZUltYWdlOiBib29sZWFuO1xuICByZXR1cm5GdWxsRG9jdW1lbnRJbWFnZTogYm9vbGVhbjtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgTXlLYWRGcm9udFJlY29nbml6ZXJDdG9yIGV4dGVuZHMgUmVjb2duaXplckN0b3I8TXlLYWRGcm9udFJlY29nbml6ZXI+IHt9XG5cbmV4cG9ydCBpbnRlcmZhY2UgTmV3WmVhbGFuZERsRnJvbnRSZWNvZ25pemVyUmVzdWx0IGV4dGVuZHMgUmVjb2duaXplclJlc3VsdCB7XG4gIGFkZHJlc3M6IHN0cmluZztcbiAgY2FyZFZlcnNpb246IHN0cmluZztcbiAgZGF0ZU9mQmlydGg6IERhdGU7XG4gIGRhdGVPZkV4cGlyeTogRGF0ZTtcbiAgZGF0ZU9mSXNzdWU6IERhdGU7XG4gIGRvbm9ySW5kaWNhdG9yOiBzdHJpbmc7XG4gIGZhY2VJbWFnZTogc3RyaW5nO1xuICBmaXJzdE5hbWVzOiBzdHJpbmc7XG4gIGZ1bGxEb2N1bWVudEltYWdlOiBzdHJpbmc7XG4gIGxpY2VuY2VOdW1iZXI6IHN0cmluZztcbiAgc2lnbmF0dXJlSW1hZ2U6IHN0cmluZztcbiAgc3VybmFtZTogc3RyaW5nO1xufVxuZXhwb3J0IGludGVyZmFjZSBOZXdaZWFsYW5kRGxGcm9udFJlY29nbml6ZXJSZXN1bHRDdG9yIGV4dGVuZHMgUmVjb2duaXplclJlc3VsdEN0b3I8TmV3WmVhbGFuZERsRnJvbnRSZWNvZ25pemVyUmVzdWx0PiB7fVxuXG5leHBvcnQgaW50ZXJmYWNlIE5ld1plYWxhbmREbEZyb250UmVjb2duaXplciBleHRlbmRzIFJlY29nbml6ZXI8TmV3WmVhbGFuZERsRnJvbnRSZWNvZ25pemVyUmVzdWx0PiB7XG4gIGRldGVjdEdsYXJlOiBib29sZWFuO1xuICBleHRyYWN0QWRkcmVzczogYm9vbGVhbjtcbiAgZXh0cmFjdERhdGVPZkJpcnRoOiBib29sZWFuO1xuICBleHRyYWN0RGF0ZU9mRXhwaXJ5OiBib29sZWFuO1xuICBleHRyYWN0RGF0ZU9mSXNzdWU6IGJvb2xlYW47XG4gIGV4dHJhY3REb25vckluZGljYXRvcjogYm9vbGVhbjtcbiAgZXh0cmFjdEZpcnN0TmFtZTogYm9vbGVhbjtcbiAgZXh0cmFjdFN1cm5hbWU6IGJvb2xlYW47XG4gIGZhY2VJbWFnZURwaTogbnVtYmVyO1xuICBmdWxsRG9jdW1lbnRJbWFnZURwaTogbnVtYmVyO1xuICBmdWxsRG9jdW1lbnRJbWFnZUV4dGVuc2lvbkZhY3RvcnM6IEltYWdlRXh0ZW5zaW9uRmFjdG9ycztcbiAgcmV0dXJuRmFjZUltYWdlOiBib29sZWFuO1xuICByZXR1cm5GdWxsRG9jdW1lbnRJbWFnZTogYm9vbGVhbjtcbiAgcmV0dXJuU2lnbmF0dXJlSW1hZ2U6IGJvb2xlYW47XG4gIHNpZ25hdHVyZUltYWdlRHBpOiBudW1iZXI7XG59XG5leHBvcnQgaW50ZXJmYWNlIE5ld1plYWxhbmREbEZyb250UmVjb2duaXplckN0b3IgZXh0ZW5kcyBSZWNvZ25pemVyQ3RvcjxOZXdaZWFsYW5kRGxGcm9udFJlY29nbml6ZXI+IHt9XG5cbmV4cG9ydCBpbnRlcmZhY2UgQmxpbmtDYXJkUmVjb2duaXplclJlc3VsdCBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHQge1xuICBjYXJkTnVtYmVyOiBzdHJpbmc7XG4gIGN2djogc3RyaW5nO1xuICBkaWdpdGFsU2lnbmF0dXJlOiBzdHJpbmc7XG4gIGRpZ2l0YWxTaWduYXR1cmVWZXJzaW9uOiBzdHJpbmc7XG4gIGRvY3VtZW50RGF0YU1hdGNoOiBzdHJpbmc7XG4gIGZ1bGxEb2N1bWVudEJhY2tJbWFnZTogc3RyaW5nO1xuICBmdWxsRG9jdW1lbnRGcm9udEltYWdlOiBzdHJpbmc7XG4gIGludmVudG9yeU51bWJlcjogc3RyaW5nO1xuICBpc3N1ZXI6IHN0cmluZztcbiAgb3duZXI6IHN0cmluZztcbiAgc2Nhbm5pbmdGaXJzdFNpZGVEb25lOiBib29sZWFuO1xuICB2YWxpZFRocnU6IERhdGU7XG59XG5leHBvcnQgaW50ZXJmYWNlIEJsaW5rQ2FyZFJlY29nbml6ZXJSZXN1bHRDdG9yIGV4dGVuZHMgUmVjb2duaXplclJlc3VsdEN0b3I8QmxpbmtDYXJkUmVjb2duaXplclJlc3VsdD4ge31cblxuZXhwb3J0IGludGVyZmFjZSBCbGlua0NhcmRSZWNvZ25pemVyIGV4dGVuZHMgUmVjb2duaXplcjxCbGlua0NhcmRSZWNvZ25pemVyUmVzdWx0PiB7XG4gIGFub255bWl6ZUNhcmROdW1iZXI6IGJvb2xlYW47XG4gIGFub255bWl6ZUN2djogYm9vbGVhbjtcbiAgYW5vbnltaXplT3duZXI6IGJvb2xlYW47XG4gIGRldGVjdEdsYXJlOiBib29sZWFuO1xuICBleHRyYWN0Q3Z2OiBib29sZWFuO1xuICBleHRyYWN0SW52ZW50b3J5TnVtYmVyOiBib29sZWFuO1xuICBleHRyYWN0T3duZXI6IGJvb2xlYW47XG4gIGV4dHJhY3RWYWxpZFRocnU6IGJvb2xlYW47XG4gIGZ1bGxEb2N1bWVudEltYWdlRHBpOiBudW1iZXI7XG4gIGZ1bGxEb2N1bWVudEltYWdlRXh0ZW5zaW9uRmFjdG9yczogSW1hZ2VFeHRlbnNpb25GYWN0b3JzO1xuICByZXR1cm5GdWxsRG9jdW1lbnRJbWFnZTogYm9vbGVhbjtcbiAgc2lnblJlc3VsdDogYm9vbGVhbjtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgQmxpbmtDYXJkUmVjb2duaXplckN0b3IgZXh0ZW5kcyBSZWNvZ25pemVyQ3RvcjxCbGlua0NhcmRSZWNvZ25pemVyPiB7fVxuXG5leHBvcnQgaW50ZXJmYWNlIFBkZjQxN1JlY29nbml6ZXJSZXN1bHQgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0IHtcbiAgYmFyY29kZVR5cGU6IHN0cmluZztcbiAgcmF3RGF0YTogc3RyaW5nO1xuICBzdHJpbmdEYXRhOiBzdHJpbmc7XG4gIHVuY2VydGFpbjogYm9vbGVhbjtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgUGRmNDE3UmVjb2duaXplclJlc3VsdEN0b3IgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0Q3RvcjxQZGY0MTdSZWNvZ25pemVyUmVzdWx0PiB7fVxuXG5leHBvcnQgaW50ZXJmYWNlIFBkZjQxN1JlY29nbml6ZXIgZXh0ZW5kcyBSZWNvZ25pemVyPFBkZjQxN1JlY29nbml6ZXJSZXN1bHQ+IHtcbiAgbnVsbFF1aWV0Wm9uZUFsbG93ZWQ6IGJvb2xlYW47XG4gIHNjYW5JbnZlcnNlOiBib29sZWFuO1xuICBzY2FuVW5jZXJ0YWluOiBib29sZWFuO1xufVxuZXhwb3J0IGludGVyZmFjZSBQZGY0MTdSZWNvZ25pemVyQ3RvciBleHRlbmRzIFJlY29nbml6ZXJDdG9yPFBkZjQxN1JlY29nbml6ZXI+IHt9XG5cbmV4cG9ydCBpbnRlcmZhY2UgUG9sYW5kQ29tYmluZWRSZWNvZ25pemVyUmVzdWx0IGV4dGVuZHMgUmVjb2duaXplclJlc3VsdCB7XG4gIGRhdGVPZkJpcnRoOiBEYXRlO1xuICBkYXRlT2ZFeHBpcnk6IERhdGU7XG4gIGRpZ2l0YWxTaWduYXR1cmU6IHN0cmluZztcbiAgZGlnaXRhbFNpZ25hdHVyZVZlcnNpb246IHN0cmluZztcbiAgZG9jdW1lbnREYXRhTWF0Y2g6IHN0cmluZztcbiAgZG9jdW1lbnROdW1iZXI6IHN0cmluZztcbiAgZmFjZUltYWdlOiBzdHJpbmc7XG4gIGZhbWlseU5hbWU6IHN0cmluZztcbiAgZnVsbERvY3VtZW50QmFja0ltYWdlOiBzdHJpbmc7XG4gIGZ1bGxEb2N1bWVudEZyb250SW1hZ2U6IHN0cmluZztcbiAgZ2l2ZW5OYW1lczogc3RyaW5nO1xuICBpc3N1ZXI6IHN0cmluZztcbiAgbXJ6VmVyaWZpZWQ6IGJvb2xlYW47XG4gIG5hdGlvbmFsaXR5OiBzdHJpbmc7XG4gIHBhcmVudHNHaXZlbk5hbWVzOiBzdHJpbmc7XG4gIHBlcnNvbmFsTnVtYmVyOiBzdHJpbmc7XG4gIHNjYW5uaW5nRmlyc3RTaWRlRG9uZTogYm9vbGVhbjtcbiAgc2V4OiBzdHJpbmc7XG4gIHN1cm5hbWU6IHN0cmluZztcbn1cbmV4cG9ydCBpbnRlcmZhY2UgUG9sYW5kQ29tYmluZWRSZWNvZ25pemVyUmVzdWx0Q3RvciBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHRDdG9yPFBvbGFuZENvbWJpbmVkUmVjb2duaXplclJlc3VsdD4ge31cblxuZXhwb3J0IGludGVyZmFjZSBQb2xhbmRDb21iaW5lZFJlY29nbml6ZXIgZXh0ZW5kcyBSZWNvZ25pemVyPFBvbGFuZENvbWJpbmVkUmVjb2duaXplclJlc3VsdD4ge1xuICBkZXRlY3RHbGFyZTogYm9vbGVhbjtcbiAgZXh0cmFjdERhdGVPZkJpcnRoOiBib29sZWFuO1xuICBleHRyYWN0RmFtaWx5TmFtZTogYm9vbGVhbjtcbiAgZXh0cmFjdEdpdmVuTmFtZTogYm9vbGVhbjtcbiAgZXh0cmFjdFBhcmVudHNHaXZlbk5hbWVzOiBib29sZWFuO1xuICBleHRyYWN0U2V4OiBib29sZWFuO1xuICBleHRyYWN0U3VybmFtZTogYm9vbGVhbjtcbiAgcmV0dXJuRmFjZUltYWdlOiBib29sZWFuO1xuICByZXR1cm5GdWxsRG9jdW1lbnRJbWFnZTogYm9vbGVhbjtcbiAgc2lnblJlc3VsdDogYm9vbGVhbjtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgUG9sYW5kQ29tYmluZWRSZWNvZ25pemVyQ3RvciBleHRlbmRzIFJlY29nbml6ZXJDdG9yPFBvbGFuZENvbWJpbmVkUmVjb2duaXplcj4ge31cblxuZXhwb3J0IGludGVyZmFjZSBQb2xhbmRJZEJhY2tSZWNvZ25pemVyUmVzdWx0IGV4dGVuZHMgUmVjb2duaXplclJlc3VsdCB7XG4gIGRhdGVPZkJpcnRoOiBEYXRlO1xuICBkYXRlT2ZFeHBpcnk6IERhdGU7XG4gIGRvY3VtZW50Q29kZTogc3RyaW5nO1xuICBkb2N1bWVudE51bWJlcjogc3RyaW5nO1xuICBmdWxsRG9jdW1lbnRJbWFnZTogc3RyaW5nO1xuICBpc3N1ZXI6IHN0cmluZztcbiAgbXJ6UGFyc2VkOiBib29sZWFuO1xuICBtcnpUZXh0OiBzdHJpbmc7XG4gIG1yelZlcmlmaWVkOiBib29sZWFuO1xuICBuYXRpb25hbGl0eTogc3RyaW5nO1xuICBvcHQxOiBzdHJpbmc7XG4gIG9wdDI6IHN0cmluZztcbiAgcHJpbWFyeUlkOiBzdHJpbmc7XG4gIHNlY29uZGFyeUlkOiBzdHJpbmc7XG4gIHNleDogc3RyaW5nO1xufVxuZXhwb3J0IGludGVyZmFjZSBQb2xhbmRJZEJhY2tSZWNvZ25pemVyUmVzdWx0Q3RvciBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHRDdG9yPFBvbGFuZElkQmFja1JlY29nbml6ZXJSZXN1bHQ+IHt9XG5cbmV4cG9ydCBpbnRlcmZhY2UgUG9sYW5kSWRCYWNrUmVjb2duaXplciBleHRlbmRzIFJlY29nbml6ZXI8UG9sYW5kSWRCYWNrUmVjb2duaXplclJlc3VsdD4ge1xuICBkZXRlY3RHbGFyZTogYm9vbGVhbjtcbiAgcmV0dXJuRnVsbERvY3VtZW50SW1hZ2U6IGJvb2xlYW47XG59XG5leHBvcnQgaW50ZXJmYWNlIFBvbGFuZElkQmFja1JlY29nbml6ZXJDdG9yIGV4dGVuZHMgUmVjb2duaXplckN0b3I8UG9sYW5kSWRCYWNrUmVjb2duaXplcj4ge31cblxuZXhwb3J0IGludGVyZmFjZSBQb2xhbmRJZEZyb250UmVjb2duaXplclJlc3VsdCBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHQge1xuICBkYXRlT2ZCaXJ0aDogRGF0ZTtcbiAgZmFjZUltYWdlOiBzdHJpbmc7XG4gIGZhbWlseU5hbWU6IHN0cmluZztcbiAgZnVsbERvY3VtZW50SW1hZ2U6IHN0cmluZztcbiAgZ2l2ZW5OYW1lczogc3RyaW5nO1xuICBwYXJlbnRzR2l2ZW5OYW1lczogc3RyaW5nO1xuICBzZXg6IHN0cmluZztcbiAgc3VybmFtZTogc3RyaW5nO1xufVxuZXhwb3J0IGludGVyZmFjZSBQb2xhbmRJZEZyb250UmVjb2duaXplclJlc3VsdEN0b3IgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0Q3RvcjxQb2xhbmRJZEZyb250UmVjb2duaXplclJlc3VsdD4ge31cblxuZXhwb3J0IGludGVyZmFjZSBQb2xhbmRJZEZyb250UmVjb2duaXplciBleHRlbmRzIFJlY29nbml6ZXI8UG9sYW5kSWRGcm9udFJlY29nbml6ZXJSZXN1bHQ+IHtcbiAgZGV0ZWN0R2xhcmU6IGJvb2xlYW47XG4gIGV4dHJhY3REYXRlT2ZCaXJ0aDogYm9vbGVhbjtcbiAgZXh0cmFjdEZhbWlseU5hbWU6IGJvb2xlYW47XG4gIGV4dHJhY3RHaXZlbk5hbWVzOiBib29sZWFuO1xuICBleHRyYWN0UGFyZW50c0dpdmVuTmFtZXM6IGJvb2xlYW47XG4gIGV4dHJhY3RTZXg6IGJvb2xlYW47XG4gIGV4dHJhY3RTdXJuYW1lOiBib29sZWFuO1xuICByZXR1cm5GYWNlSW1hZ2U6IGJvb2xlYW47XG4gIHJldHVybkZ1bGxEb2N1bWVudEltYWdlOiBib29sZWFuO1xufVxuZXhwb3J0IGludGVyZmFjZSBQb2xhbmRJZEZyb250UmVjb2duaXplckN0b3IgZXh0ZW5kcyBSZWNvZ25pemVyQ3RvcjxQb2xhbmRJZEZyb250UmVjb2duaXplcj4ge31cblxuZXhwb3J0IGludGVyZmFjZSBSb21hbmlhSWRGcm9udFJlY29nbml6ZXJSZXN1bHQgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0IHtcbiAgYWRkcmVzczogc3RyaW5nO1xuICBjYXJkTnVtYmVyOiBzdHJpbmc7XG4gIGNucDogc3RyaW5nO1xuICBkYXRlT2ZCaXJ0aDogRGF0ZTtcbiAgZGF0ZU9mRXhwaXJ5OiBEYXRlO1xuICBkb2N1bWVudENvZGU6IHN0cmluZztcbiAgZG9jdW1lbnROdW1iZXI6IHN0cmluZztcbiAgZmFjZUltYWdlOiBzdHJpbmc7XG4gIGZpcnN0TmFtZTogc3RyaW5nO1xuICBmdWxsRG9jdW1lbnRJbWFnZTogc3RyaW5nO1xuICBpZFNlcmllczogc3RyaW5nO1xuICBpc3N1ZWRCeTogc3RyaW5nO1xuICBpc3N1ZXI6IHN0cmluZztcbiAgbGFzdE5hbWU6IHN0cmluZztcbiAgbXJ6UGFyc2VkOiBib29sZWFuO1xuICBtcnpUZXh0OiBzdHJpbmc7XG4gIG1yelZlcmlmaWVkOiBib29sZWFuO1xuICBuYXRpb25hbGl0eTogc3RyaW5nO1xuICBub25NUlpOYXRpb25hbGl0eTogc3RyaW5nO1xuICBub25NUlpTZXg6IHN0cmluZztcbiAgb3B0MTogc3RyaW5nO1xuICBvcHQyOiBzdHJpbmc7XG4gIHBhcmVudE5hbWVzOiBzdHJpbmc7XG4gIHBsYWNlT2ZCaXJ0aDogc3RyaW5nO1xuICBwcmltYXJ5SWQ6IHN0cmluZztcbiAgc2Vjb25kYXJ5SWQ6IHN0cmluZztcbiAgc2V4OiBzdHJpbmc7XG4gIHZhbGlkRnJvbTogRGF0ZTtcbiAgdmFsaWRVbnRpbDogRGF0ZTtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgUm9tYW5pYUlkRnJvbnRSZWNvZ25pemVyUmVzdWx0Q3RvciBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHRDdG9yPFJvbWFuaWFJZEZyb250UmVjb2duaXplclJlc3VsdD4ge31cblxuZXhwb3J0IGludGVyZmFjZSBSb21hbmlhSWRGcm9udFJlY29nbml6ZXIgZXh0ZW5kcyBSZWNvZ25pemVyPFJvbWFuaWFJZEZyb250UmVjb2duaXplclJlc3VsdD4ge1xuICBkZXRlY3RHbGFyZTogYm9vbGVhbjtcbiAgZXh0cmFjdEFkZHJlc3M6IGJvb2xlYW47XG4gIGV4dHJhY3RGaXJzdE5hbWU6IGJvb2xlYW47XG4gIGV4dHJhY3RJc3N1ZWRCeTogYm9vbGVhbjtcbiAgZXh0cmFjdExhc3ROYW1lOiBib29sZWFuO1xuICBleHRyYWN0Tm9uTVJaU2V4OiBib29sZWFuO1xuICBleHRyYWN0UGxhY2VPZkJpcnRoOiBib29sZWFuO1xuICBleHRyYWN0VmFsaWRGcm9tOiBib29sZWFuO1xuICBleHRyYWN0VmFsaWRVbnRpbDogYm9vbGVhbjtcbiAgcmV0dXJuRmFjZUltYWdlOiBib29sZWFuO1xuICByZXR1cm5GdWxsRG9jdW1lbnRJbWFnZTogYm9vbGVhbjtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgUm9tYW5pYUlkRnJvbnRSZWNvZ25pemVyQ3RvciBleHRlbmRzIFJlY29nbml6ZXJDdG9yPFJvbWFuaWFJZEZyb250UmVjb2duaXplcj4ge31cblxuZXhwb3J0IGludGVyZmFjZSBTZXJiaWFDb21iaW5lZFJlY29nbml6ZXJSZXN1bHQgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0IHtcbiAgZGF0ZU9mQmlydGg6IERhdGU7XG4gIGRhdGVPZkV4cGlyeTogRGF0ZTtcbiAgZGF0ZU9mSXNzdWU6IERhdGU7XG4gIGRpZ2l0YWxTaWduYXR1cmU6IHN0cmluZztcbiAgZGlnaXRhbFNpZ25hdHVyZVZlcnNpb246IHN0cmluZztcbiAgZG9jdW1lbnREYXRhTWF0Y2g6IGJvb2xlYW47XG4gIGZhY2VJbWFnZTogc3RyaW5nO1xuICBmaXJzdE5hbWU6IHN0cmluZztcbiAgZnVsbERvY3VtZW50QmFja0ltYWdlOiBzdHJpbmc7XG4gIGZ1bGxEb2N1bWVudEZyb250SW1hZ2U6IHN0cmluZztcbiAgaWRlbnRpdHlDYXJkTnVtYmVyOiBzdHJpbmc7XG4gIGlzc3Vlcjogc3RyaW5nO1xuICBqbWJnOiBzdHJpbmc7XG4gIGxhc3ROYW1lOiBzdHJpbmc7XG4gIG1yelZlcmlmaWVkOiBib29sZWFuO1xuICBuYXRpb25hbGl0eTogc3RyaW5nO1xuICBzY2FubmluZ0ZpcnN0U2lkZURvbmU6IGJvb2xlYW47XG4gIHNleDogc3RyaW5nO1xuICBzaWduYXR1cmVJbWFnZTogc3RyaW5nO1xufVxuZXhwb3J0IGludGVyZmFjZSBTZXJiaWFDb21iaW5lZFJlY29nbml6ZXJSZXN1bHRDdG9yIGV4dGVuZHMgUmVjb2duaXplclJlc3VsdEN0b3I8U2VyYmlhQ29tYmluZWRSZWNvZ25pemVyUmVzdWx0PiB7fVxuXG5leHBvcnQgaW50ZXJmYWNlIFNlcmJpYUNvbWJpbmVkUmVjb2duaXplciBleHRlbmRzIFJlY29nbml6ZXI8U2VyYmlhQ29tYmluZWRSZWNvZ25pemVyUmVzdWx0PiB7XG4gIGRldGVjdEdsYXJlOiBib29sZWFuO1xuICByZXR1cm5GYWNlSW1hZ2U6IGJvb2xlYW47XG4gIHJldHVybkZ1bGxEb2N1bWVudEltYWdlOiBib29sZWFuO1xuICByZXR1cm5TaWduYXR1cmVJbWFnZTogYm9vbGVhbjtcbiAgc2lnblJlc3VsdDogYm9vbGVhbjtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgU2VyYmlhQ29tYmluZWRSZWNvZ25pemVyQ3RvciBleHRlbmRzIFJlY29nbml6ZXJDdG9yPFNlcmJpYUNvbWJpbmVkUmVjb2duaXplcj4ge31cblxuZXhwb3J0IGludGVyZmFjZSBTZXJiaWFJZEJhY2tSZWNvZ25pemVyUmVzdWx0IGV4dGVuZHMgUmVjb2duaXplclJlc3VsdCB7XG4gIGRhdGVPZkJpcnRoOiBEYXRlO1xuICBkYXRlT2ZFeHBpcnk6IERhdGU7XG4gIGRvY3VtZW50Q29kZTogc3RyaW5nO1xuICBkb2N1bWVudE51bWJlcjogc3RyaW5nO1xuICBmdWxsRG9jdW1lbnRJbWFnZTogc3RyaW5nO1xuICBpc3N1ZXI6IHN0cmluZztcbiAgbXJ6UGFyc2VkOiBib29sZWFuO1xuICBtcnpUZXh0OiBzdHJpbmc7XG4gIG1yelZlcmlmaWVkOiBib29sZWFuO1xuICBuYXRpb25hbGl0eTogc3RyaW5nO1xuICBvcHQxOiBzdHJpbmc7XG4gIG9wdDI6IHN0cmluZztcbiAgcHJpbWFyeUlkOiBzdHJpbmc7XG4gIHNlY29uZGFyeUlkOiBzdHJpbmc7XG4gIHNleDogc3RyaW5nO1xufVxuZXhwb3J0IGludGVyZmFjZSBTZXJiaWFJZEJhY2tSZWNvZ25pemVyUmVzdWx0Q3RvciBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHRDdG9yPFNlcmJpYUlkQmFja1JlY29nbml6ZXJSZXN1bHQ+IHt9XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2VyYmlhSWRCYWNrUmVjb2duaXplciBleHRlbmRzIFJlY29nbml6ZXI8U2VyYmlhSWRCYWNrUmVjb2duaXplclJlc3VsdD4ge1xuICBkZXRlY3RHbGFyZTogYm9vbGVhbjtcbiAgcmV0dXJuRnVsbERvY3VtZW50SW1hZ2U6IGJvb2xlYW47XG59XG5leHBvcnQgaW50ZXJmYWNlIFNlcmJpYUlkQmFja1JlY29nbml6ZXJDdG9yIGV4dGVuZHMgUmVjb2duaXplckN0b3I8U2VyYmlhSWRCYWNrUmVjb2duaXplcj4ge31cblxuZXhwb3J0IGludGVyZmFjZSBTZXJiaWFJZEZyb250UmVjb2duaXplclJlc3VsdCBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHQge1xuICBkb2N1bWVudE51bWJlcjogc3RyaW5nO1xuICBmYWNlSW1hZ2U6IHN0cmluZztcbiAgZnVsbERvY3VtZW50SW1hZ2U6IHN0cmluZztcbiAgaXNzdWluZ0RhdGU6IERhdGU7XG4gIHNpZ25hdHVyZUltYWdlOiBzdHJpbmc7XG4gIHZhbGlkVGhydTogRGF0ZTtcbiAgdmFsaWRVbnRpbDogRGF0ZTtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgU2VyYmlhSWRGcm9udFJlY29nbml6ZXJSZXN1bHRDdG9yIGV4dGVuZHMgUmVjb2duaXplclJlc3VsdEN0b3I8U2VyYmlhSWRGcm9udFJlY29nbml6ZXJSZXN1bHQ+IHt9XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2VyYmlhSWRGcm9udFJlY29nbml6ZXIgZXh0ZW5kcyBSZWNvZ25pemVyPFNlcmJpYUlkRnJvbnRSZWNvZ25pemVyUmVzdWx0PiB7XG4gIGRldGVjdEdsYXJlOiBib29sZWFuO1xuICBleHRyYWN0SXNzdWluZ0RhdGU6IGJvb2xlYW47XG4gIGV4dHJhY3RWYWxpZFVudGlsOiBib29sZWFuO1xuICByZXR1cm5GYWNlSW1hZ2U6IGJvb2xlYW47XG4gIHJldHVybkZ1bGxEb2N1bWVudEltYWdlOiBib29sZWFuO1xuICByZXR1cm5TaWduYXR1cmVJbWFnZTogYm9vbGVhbjtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgU2VyYmlhSWRGcm9udFJlY29nbml6ZXJDdG9yIGV4dGVuZHMgUmVjb2duaXplckN0b3I8U2VyYmlhSWRGcm9udFJlY29nbml6ZXI+IHt9XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2ltTnVtYmVyUmVjb2duaXplclJlc3VsdCBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHQge1xuICBzaW1OdW1iZXI6IHN0cmluZztcbn1cbmV4cG9ydCBpbnRlcmZhY2UgU2ltTnVtYmVyUmVjb2duaXplclJlc3VsdEN0b3IgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0Q3RvcjxTaW1OdW1iZXJSZWNvZ25pemVyUmVzdWx0PiB7fVxuXG5leHBvcnQgaW50ZXJmYWNlIFNpbU51bWJlclJlY29nbml6ZXIgZXh0ZW5kcyBSZWNvZ25pemVyPFNpbU51bWJlclJlY29nbml6ZXJSZXN1bHQ+IHt9XG5leHBvcnQgaW50ZXJmYWNlIFNpbU51bWJlclJlY29nbml6ZXJDdG9yIGV4dGVuZHMgUmVjb2duaXplckN0b3I8U2ltTnVtYmVyUmVjb2duaXplcj4ge31cblxuZXhwb3J0IGludGVyZmFjZSBTaW5nYXBvcmVDaGFuZ2lFbXBsb3llZUlkUmVjb2duaXplclJlc3VsdCBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHQge1xuICBjb21wYW55TmFtZTogc3RyaW5nO1xuICBkYXRlT2ZFeHBpcnk6IERhdGU7XG4gIGRvY3VtZW50TnVtYmVyOiBzdHJpbmc7XG4gIGZhY2VJbWFnZTogc3RyaW5nO1xuICBmdWxsRG9jdW1lbnRJbWFnZTogc3RyaW5nO1xuICBuYW1lOiBzdHJpbmc7XG59XG5leHBvcnQgaW50ZXJmYWNlIFNpbmdhcG9yZUNoYW5naUVtcGxveWVlSWRSZWNvZ25pemVyUmVzdWx0Q3RvciBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHRDdG9yPFNpbmdhcG9yZUNoYW5naUVtcGxveWVlSWRSZWNvZ25pemVyUmVzdWx0PiB7fVxuXG5leHBvcnQgaW50ZXJmYWNlIFNpbmdhcG9yZUNoYW5naUVtcGxveWVlSWRSZWNvZ25pemVyIGV4dGVuZHMgUmVjb2duaXplcjxTaW5nYXBvcmVDaGFuZ2lFbXBsb3llZUlkUmVjb2duaXplclJlc3VsdD4ge1xuICBkZXRlY3RHbGFyZTogYm9vbGVhbjtcbiAgZXh0cmFjdENvbXBhbnlOYW1lOiBib29sZWFuO1xuICBleHRyYWN0RGF0ZU9mRXhwaXJ5OiBib29sZWFuO1xuICBleHRyYWN0TmFtZTogYm9vbGVhbjtcbiAgZmFjZUltYWdlRHBpOiBudW1iZXI7XG4gIGZ1bGxEb2N1bWVudEltYWdlRHBpOiBudW1iZXI7XG4gIGZ1bGxEb2N1bWVudEltYWdlRXh0ZW5zaW9uRmFjdG9yczogSW1hZ2VFeHRlbnNpb25GYWN0b3JzO1xuICByZXR1cm5GYWNlSW1hZ2U6IGJvb2xlYW47XG4gIHJldHVybkZ1bGxEb2N1bWVudEltYWdlOiBib29sZWFuO1xufVxuZXhwb3J0IGludGVyZmFjZSBTaW5nYXBvcmVDaGFuZ2lFbXBsb3llZUlkUmVjb2duaXplckN0b3IgZXh0ZW5kcyBSZWNvZ25pemVyQ3RvcjxTaW5nYXBvcmVDaGFuZ2lFbXBsb3llZUlkUmVjb2duaXplcj4ge31cblxuZXhwb3J0IGludGVyZmFjZSBTaW5nYXBvcmVDb21iaW5lZFJlY29nbml6ZXJSZXN1bHQgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0IHtcbiAgYWRkcmVzczogc3RyaW5nO1xuICBhZGRyZXNzQ2hhbmdlRGF0ZTogRGF0ZTtcbiAgYmxvb2RHcm91cDogc3RyaW5nO1xuICBjb3VudHJ5T2ZCaXJ0aDogc3RyaW5nO1xuICBkYXRlT2ZCaXJ0aDogRGF0ZTtcbiAgZGF0ZU9mSXNzdWU6IERhdGU7XG4gIGRpZ2l0YWxTaWduYXR1cmU6IHN0cmluZztcbiAgZGlnaXRhbFNpZ25hdHVyZVZlcnNpb246IHN0cmluZztcbiAgZG9jdW1lbnREYXRhTWF0Y2g6IGJvb2xlYW47XG4gIGZhY2VJbWFnZTogc3RyaW5nO1xuICBmdWxsRG9jdW1lbnRCYWNrSW1hZ2U6IHN0cmluZztcbiAgZnVsbERvY3VtZW50RnJvbnRJbWFnZTogc3RyaW5nO1xuICBpZGVudGl0eUNhcmROdW1iZXI6IHN0cmluZztcbiAgbmFtZTogc3RyaW5nO1xuICByYWNlOiBzdHJpbmc7XG4gIHNjYW5uaW5nRmlyc3RTaWRlRG9uZTogc3RyaW5nO1xuICBzZXg6IHN0cmluZztcbn1cbmV4cG9ydCBpbnRlcmZhY2UgU2luZ2Fwb3JlQ29tYmluZWRSZWNvZ25pemVyUmVzdWx0Q3RvciBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHRDdG9yPFNpbmdhcG9yZUNvbWJpbmVkUmVjb2duaXplclJlc3VsdD4ge31cblxuZXhwb3J0IGludGVyZmFjZSBTaW5nYXBvcmVDb21iaW5lZFJlY29nbml6ZXIgZXh0ZW5kcyBSZWNvZ25pemVyPFNpbmdhcG9yZUNvbWJpbmVkUmVjb2duaXplclJlc3VsdD4ge1xuICBkZXRlY3RHbGFyZTogYm9vbGVhbjtcbiAgZXh0cmFjdEFkZHJlc3M6IGJvb2xlYW47XG4gIGV4dHJhY3RBZGRyZXNzQ2hhbmdlRGF0ZTogYm9vbGVhbjtcbiAgZXh0cmFjdEJsb29kR3JvdXA6IGJvb2xlYW47XG4gIGV4dHJhY3RDb3VudHJ5T2ZCaXJ0aDogYm9vbGVhbjtcbiAgZXh0cmFjdERhdGVPZkJpcnRoOiBib29sZWFuO1xuICBleHRyYWN0RGF0ZU9mSXNzdWU6IGJvb2xlYW47XG4gIGV4dHJhY3ROYW1lOiBib29sZWFuO1xuICBleHRyYWN0UmFjZTogYm9vbGVhbjtcbiAgZXh0cmFjdFNleDogYm9vbGVhbjtcbiAgZmFjZUltYWdlRHBpOiBudW1iZXI7XG4gIGZ1bGxEb2N1bWVudEltYWdlRHBpOiBudW1iZXI7XG4gIGZ1bGxEb2N1bWVudEltYWdlRXh0ZW5zaW9uRmFjdG9yczogSW1hZ2VFeHRlbnNpb25GYWN0b3JzO1xuICByZXR1cm5GYWNlSW1hZ2U6IGJvb2xlYW47XG4gIHJldHVybkZ1bGxEb2N1bWVudEltYWdlOiBib29sZWFuO1xuICBzaWduUmVzdWx0OiBib29sZWFuO1xufVxuZXhwb3J0IGludGVyZmFjZSBTaW5nYXBvcmVDb21iaW5lZFJlY29nbml6ZXJDdG9yIGV4dGVuZHMgUmVjb2duaXplckN0b3I8U2luZ2Fwb3JlQ29tYmluZWRSZWNvZ25pemVyPiB7fVxuXG5leHBvcnQgaW50ZXJmYWNlIFNpbmdhcG9yZURsRnJvbnRSZWNvZ25pemVyUmVzdWx0IGV4dGVuZHMgUmVjb2duaXplclJlc3VsdCB7XG4gIGJpcnRoRGF0YTogRGF0ZTtcbiAgZmFjZUltYWdlOiBzdHJpbmc7XG4gIGZ1bGxEb2N1bWVudEltYWdlOiBzdHJpbmc7XG4gIGlzc3VlRGF0ZTogRGF0ZTtcbiAgbGljZW5jZU51bWJlcjogc3RyaW5nO1xuICBuYW1lOiBzdHJpbmc7XG4gIHZhbGlkVGlsbDogRGF0ZTtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgU2luZ2Fwb3JlRGxGcm9udFJlY29nbml6ZXJSZXN1bHRDdG9yIGV4dGVuZHMgUmVjb2duaXplclJlc3VsdEN0b3I8U2luZ2Fwb3JlRGxGcm9udFJlY29nbml6ZXJSZXN1bHQ+IHt9XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2luZ2Fwb3JlRGxGcm9udFJlY29nbml6ZXIgZXh0ZW5kcyBSZWNvZ25pemVyPFNpbmdhcG9yZURsRnJvbnRSZWNvZ25pemVyUmVzdWx0PiB7XG4gIGRldGVjdEdsYXJlOiBib29sZWFuO1xuICBleHRyYWN0QmlydGhEYXRlOiBib29sZWFuO1xuICBleHRyYWN0SXNzdWVEYXRlOiBib29sZWFuO1xuICBleHRyYWN0TmFtZTogYm9vbGVhbjtcbiAgZXh0cmFjdFZhbGlkVGlsbDogYm9vbGVhbjtcbiAgZmFjZUltYWdlRHBpOiBudW1iZXI7XG4gIGZ1bGxEb2N1bWVudEltYWdlRHBpOiBudW1iZXI7XG4gIGZ1bGxEb2N1bWVudEltYWdlRXh0ZW5zaW9uRmFjdG9yczogSW1hZ2VFeHRlbnNpb25GYWN0b3JzO1xuICByZXR1cm5GYWNlSW1hZ2U6IGJvb2xlYW47XG4gIHJldHVybkZ1bGxEb2N1bWVudEltYWdlOiBib29sZWFuO1xufVxuZXhwb3J0IGludGVyZmFjZSBTaW5nYXBvcmVEbEZyb250UmVjb2duaXplckN0b3IgZXh0ZW5kcyBSZWNvZ25pemVyQ3RvcjxTaW5nYXBvcmVEbEZyb250UmVjb2duaXplcj4ge31cblxuZXhwb3J0IGludGVyZmFjZSBTaW5nYXBvcmVJZEJhY2tSZWNvZ25pemVyUmVzdWx0IGV4dGVuZHMgUmVjb2duaXplclJlc3VsdCB7XG4gIGFkZHJlc3M6IHN0cmluZztcbiAgYWRkcmVzc0NoYW5nZURhdGU6IHN0cmluZztcbiAgYmxvb2RHcm91cDogc3RyaW5nO1xuICBjYXJkTnVtYmVyOiBzdHJpbmc7XG4gIGRhdGVPZklzc3VlOiBEYXRlO1xuICBmdWxsRG9jdW1lbnRJbWFnZTogc3RyaW5nO1xufVxuZXhwb3J0IGludGVyZmFjZSBTaW5nYXBvcmVJZEJhY2tSZWNvZ25pemVyUmVzdWx0Q3RvciBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHRDdG9yPFNpbmdhcG9yZUlkQmFja1JlY29nbml6ZXJSZXN1bHQ+IHt9XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2luZ2Fwb3JlSWRCYWNrUmVjb2duaXplciBleHRlbmRzIFJlY29nbml6ZXI8U2luZ2Fwb3JlSWRCYWNrUmVjb2duaXplclJlc3VsdD4ge1xuICBkZXRlY3RHbGFyZTogYm9vbGVhbjtcbiAgZXh0cmFjdEFkZHJlc3M6IGJvb2xlYW47XG4gIGV4dHJhY3RBZGRyZXNzQ2hhbmdlRGF0ZTogYm9vbGVhbjtcbiAgZXh0cmFjdEJsb29kR3JvdXA6IGJvb2xlYW47XG4gIGV4dHJhY3REYXRlT2ZJc3N1ZTogYm9vbGVhbjtcbiAgZnVsbERvY3VtZW50SW1hZ2VEcGk6IG51bWJlcjtcbiAgZnVsbERvY3VtZW50SW1hZ2VFeHRlbnNpb25GYWN0b3JzOiBJbWFnZUV4dGVuc2lvbkZhY3RvcnM7XG4gIHJldHVybkZ1bGxEb2N1bWVudEltYWdlOiBib29sZWFuO1xufVxuZXhwb3J0IGludGVyZmFjZSBTaW5nYXBvcmVJZEJhY2tSZWNvZ25pemVyQ3RvciBleHRlbmRzIFJlY29nbml6ZXJDdG9yPFNpbmdhcG9yZUlkQmFja1JlY29nbml6ZXI+IHt9XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2luZ2Fwb3JlSWRGcm9udFJlY29nbml6ZXJSZXN1bHQgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0IHtcbiAgY291bnRyeU9mQmlydGg6IHN0cmluZztcbiAgZGF0ZU9mQmlydGg6IERhdGU7XG4gIGZhY2VJbWFnZTogc3RyaW5nO1xuICBmdWxsRG9jdW1lbnRJbWFnZTogc3RyaW5nO1xuICBpZGVudGl0eUNhcmROdW1iZXI6IHN0cmluZztcbiAgbmFtZTogc3RyaW5nO1xuICByYWNlOiBzdHJpbmc7XG4gIHNleDogc3RyaW5nO1xufVxuZXhwb3J0IGludGVyZmFjZSBTaW5nYXBvcmVJZEZyb250UmVjb2duaXplclJlc3VsdEN0b3IgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0Q3RvcjxTaW5nYXBvcmVJZEZyb250UmVjb2duaXplclJlc3VsdD4ge31cblxuZXhwb3J0IGludGVyZmFjZSBTaW5nYXBvcmVJZEZyb250UmVjb2duaXplciBleHRlbmRzIFJlY29nbml6ZXI8U2luZ2Fwb3JlSWRGcm9udFJlY29nbml6ZXJSZXN1bHQ+IHtcbiAgZGV0ZWN0R2xhcmU6IGJvb2xlYW47XG4gIGV4dHJhY3RDb3VudHJ5T2ZCaXJ0aDogYm9vbGVhbjtcbiAgZXh0cmFjdERhdGVPZkJpcnRoOiBib29sZWFuO1xuICBleHRyYWN0TmFtZTogYm9vbGVhbjtcbiAgZXh0cmFjdFJhY2U6IGJvb2xlYW47XG4gIGV4dHJhY3RTZXg6IGJvb2xlYW47XG4gIGZhY2VJbWFnZURwaTogbnVtYmVyO1xuICBmdWxsRG9jdW1lbnRJbWFnZURwaTogbnVtYmVyO1xuICBmdWxsRG9jdW1lbnRJbWFnZUV4dGVuc2lvbkZhY3RvcnM6IEltYWdlRXh0ZW5zaW9uRmFjdG9ycztcbiAgcmV0dXJuRmFjZUltYWdlOiBib29sZWFuO1xuICByZXR1cm5GdWxsRG9jdW1lbnRJbWFnZTogYm9vbGVhbjtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgU2luZ2Fwb3JlSWRGcm9udFJlY29nbml6ZXJDdG9yIGV4dGVuZHMgUmVjb2duaXplckN0b3I8U2luZ2Fwb3JlSWRGcm9udFJlY29nbml6ZXI+IHt9XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2xvdmFraWFDb21iaW5lZFJlY29nbml6ZXJSZXN1bHQgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0IHtcbiAgYWRkcmVzczogc3RyaW5nO1xuICBkYXRlT2ZCaXJ0aDogRGF0ZTtcbiAgZGF0ZU9mRXhwaXJ5OiBEYXRlO1xuICBkYXRlT2ZJc3N1ZTogRGF0ZTtcbiAgZGlnaXRhbFNpZ25hdHVyZTogbnVtYmVyO1xuICBkaWdpdGFsU2lnbmF0dXJlVmVyc2lvbjogbnVtYmVyO1xuICBkb2N1bWVudERhdGFNYXRjaDogYm9vbGVhbjtcbiAgZG9jdW1lbnROdW1iZXI6IHN0cmluZztcbiAgZmFjZUltYWdlOiBzdHJpbmc7XG4gIGZpcnN0TmFtZTogc3RyaW5nO1xuICBmdWxsRG9jdW1lbnRCYWNrSW1hZ2U6IHN0cmluZztcbiAgZnVsbERvY3VtZW50RnJvbnRJbWFnZTogc3RyaW5nO1xuICBpc3N1aW5nQXV0aG9yaXR5OiBzdHJpbmc7XG4gIGxhc3ROYW1lOiBzdHJpbmc7XG4gIG1yelZlcmlmaWVkOiBib29sZWFuO1xuICBuYXRpb25hbGl0eTogc3RyaW5nO1xuICBwZXJzb25hbElkZW50aWZpY2F0aW9uTnVtYmVyOiBzdHJpbmc7XG4gIHBsYWNlT2ZCaXJ0aDogc3RyaW5nO1xuICBzY2FubmluZ0ZpcnN0U2lkZURvbmU6IHN0cmluZztcbiAgc2V4OiBzdHJpbmc7XG4gIHNpZ25hdHVyZUltYWdlOiBzdHJpbmc7XG4gIHNwZWNpYWxSZW1hcmtzOiBzdHJpbmc7XG4gIHN1cm5hbWVBdEJpcnRoOiBzdHJpbmc7XG59XG5leHBvcnQgaW50ZXJmYWNlIFNsb3Zha2lhQ29tYmluZWRSZWNvZ25pemVyUmVzdWx0Q3RvciBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHRDdG9yPFNsb3Zha2lhQ29tYmluZWRSZWNvZ25pemVyUmVzdWx0PiB7fVxuXG5leHBvcnQgaW50ZXJmYWNlIFNsb3Zha2lhQ29tYmluZWRSZWNvZ25pemVyIGV4dGVuZHMgUmVjb2duaXplcjxTbG92YWtpYUNvbWJpbmVkUmVjb2duaXplclJlc3VsdD4ge1xuICBkZXRlY3RHbGFyZTogYm9vbGVhbjtcbiAgZXh0cmFjdERhdGVPZkJpcnRoOiBib29sZWFuO1xuICBleHRyYWN0RGF0ZU9mRXhwaXJ5OiBib29sZWFuO1xuICBleHRyYWN0RGF0ZU9mSXNzdWU6IGJvb2xlYW47XG4gIGV4dHJhY3REb2N1bWVudE51bWJlcjogYm9vbGVhbjtcbiAgZXh0cmFjdElzc3VlZEJ5OiBib29sZWFuO1xuICBleHRyYWN0TmF0aW9uYWxpdHk6IGJvb2xlYW47XG4gIGV4dHJhY3RQbGFjZU9mQmlydGg6IGJvb2xlYW47XG4gIGV4dHJhY3RTZXg6IGJvb2xlYW47XG4gIGV4dHJhY3RTcGVjaWFsUmVtYXJrczogYm9vbGVhbjtcbiAgZXh0cmFjdFN1cm5hbWVBdEJpcnRoOiBib29sZWFuO1xuICByZXR1cm5GYWNlSW1hZ2U6IGJvb2xlYW47XG4gIHJldHVybkZ1bGxEb2N1bWVudEltYWdlOiBib29sZWFuO1xuICBzaWduUmVzdWx0OiBib29sZWFuO1xufVxuZXhwb3J0IGludGVyZmFjZSBTbG92YWtpYUNvbWJpbmVkUmVjb2duaXplckN0b3IgZXh0ZW5kcyBSZWNvZ25pemVyQ3RvcjxTbG92YWtpYUNvbWJpbmVkUmVjb2duaXplcj4ge31cblxuZXhwb3J0IGludGVyZmFjZSBTbG92YWtpYUlkQmFja1JlY29nbml6ZXJSZXN1bHQgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0IHtcbiAgYWRkcmVzczogc3RyaW5nO1xuICBkYXRlT2ZCaXJ0aDogRGF0ZTtcbiAgZGF0ZU9mRXhwaXJ5OiBEYXRlO1xuICBkb2N1bWVudENvZGU6IHN0cmluZztcbiAgZnVsbERvY3VtZW50SW1hZ2U6IHN0cmluZztcbiAgaXNzdWVyOiBzdHJpbmc7XG4gIG1yelBhcnNlZDogYm9vbGVhbjtcbiAgbXJ6VGV4dDogc3RyaW5nO1xuICBtcnpWZXJpZmllZDogYm9vbGVhbjtcbiAgbmF0aW9uYWxpdHk6IHN0cmluZztcbiAgb3B0MTogc3RyaW5nO1xuICBvcHQyOiBzdHJpbmc7XG4gIHBsYWNlT2ZCaXJ0aDogc3RyaW5nO1xuICBwcmltYXJ5SWQ6IHN0cmluZztcbiAgc2Vjb25kYXJ5SWQ6IHN0cmluZztcbiAgc2V4OiBzdHJpbmc7XG4gIHNwZWNpYWxSZW1hcmtzOiBzdHJpbmc7XG4gIHN1cm5hbWVBdEJpcnRoOiBzdHJpbmc7XG59XG5leHBvcnQgaW50ZXJmYWNlIFNsb3Zha2lhSWRCYWNrUmVjb2duaXplclJlc3VsdEN0b3IgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0Q3RvcjxTbG92YWtpYUlkQmFja1JlY29nbml6ZXJSZXN1bHQ+IHt9XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2xvdmFraWFJZEJhY2tSZWNvZ25pemVyIGV4dGVuZHMgUmVjb2duaXplcjxTbG92YWtpYUlkQmFja1JlY29nbml6ZXJSZXN1bHQ+IHtcbiAgZGV0ZWN0R2xhcmU6IGJvb2xlYW47XG4gIGV4dHJhY3RQbGFjZU9mQmlydGg6IGJvb2xlYW47XG4gIGV4dHJhY3RTcGVjaWFsUmVtYXJrczogYm9vbGVhbjtcbiAgZXh0cmFjdFN1cm5hbWVBdEJpcnRoOiBib29sZWFuO1xuICByZXR1cm5GdWxsRG9jdW1lbnRJbWFnZTogYm9vbGVhbjtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgU2xvdmFraWFJZEJhY2tSZWNvZ25pemVyQ3RvciBleHRlbmRzIFJlY29nbml6ZXJDdG9yPFNsb3Zha2lhSWRCYWNrUmVjb2duaXplcj4ge31cblxuZXhwb3J0IGludGVyZmFjZSBTbG92YWtpYUlkRnJvbnRSZWNvZ25pemVyUmVzdWx0IGV4dGVuZHMgUmVjb2duaXplclJlc3VsdCB7XG4gIGRhdGVPZkJpcnRoOiBEYXRlO1xuICBkYXRlT2ZFeHBpcnk6IERhdGU7XG4gIGRhdGVPZklzc3VlOiBEYXRlO1xuICBkb2N1bWVudE51bWJlcjogc3RyaW5nO1xuICBmYWNlSW1hZ2U6IHN0cmluZztcbiAgZmlyc3ROYW1lOiBzdHJpbmc7XG4gIGZ1bGxEb2N1bWVudEltYWdlOiBzdHJpbmc7XG4gIGlzc3VlZEJ5OiBzdHJpbmc7XG4gIGxhc3ROYW1lOiBzdHJpbmc7XG4gIG5hdGlvbmFsaXR5OiBzdHJpbmc7XG4gIHBlcnNvbmFsTnVtYmVyOiBzdHJpbmc7XG4gIHNleDogc3RyaW5nO1xuICBzaWduYXR1cmVJbWFnZTogc3RyaW5nO1xufVxuZXhwb3J0IGludGVyZmFjZSBTbG92YWtpYUlkRnJvbnRSZWNvZ25pemVyUmVzdWx0Q3RvciBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHRDdG9yPFNsb3Zha2lhSWRGcm9udFJlY29nbml6ZXJSZXN1bHQ+IHt9XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2xvdmFraWFJZEZyb250UmVjb2duaXplciBleHRlbmRzIFJlY29nbml6ZXI8U2xvdmFraWFJZEZyb250UmVjb2duaXplclJlc3VsdD4ge1xuICBkZXRlY3RHbGFyZTogYm9vbGVhbjtcbiAgZXh0cmFjdFBsYWNlT2ZCaXJ0aDogYm9vbGVhbjtcbiAgZXh0cmFjdERhdGVPZkV4cGlyeTogYm9vbGVhbjtcbiAgZXh0cmFjdERhdGVPZklzc3VlOiBib29sZWFuO1xuICBleHRyYWN0RG9jdW1lbnROdW1iZXI6IGJvb2xlYW47XG4gIGV4dHJhY3RJc3N1ZWRCeTogYm9vbGVhbjtcbiAgZXh0cmFjdE5hdGlvbmFsaXR5OiBib29sZWFuO1xuICBleHRyYWN0U2V4OiBib29sZWFuO1xuICByZXR1cm5GYWNlSW1hZ2U6IGJvb2xlYW47XG4gIHJldHVybkZ1bGxEb2N1bWVudEltYWdlOiBib29sZWFuO1xuICByZXR1cm5TaWduYXR1cmVJbWFnZTogYm9vbGVhbjtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgU2xvdmFraWFJZEZyb250UmVjb2duaXplckN0b3IgZXh0ZW5kcyBSZWNvZ25pemVyQ3RvcjxTbG92YWtpYUlkRnJvbnRSZWNvZ25pemVyPiB7fVxuXG5leHBvcnQgaW50ZXJmYWNlIFNsb3ZlbmlhQ29tYmluZWRSZWNvZ25pemVyUmVzdWx0IGV4dGVuZHMgUmVjb2duaXplclJlc3VsdCB7XG4gIGFkZHJlc3M6IHN0cmluZztcbiAgY2l0aXplbnNoaXA6IHN0cmluZztcbiAgZGF0ZU9mQmlydGg6IERhdGU7XG4gIGRhdGVPZkV4cGlyeTogRGF0ZTtcbiAgZGF0ZU9mSXNzdWU6IERhdGU7XG4gIGRpZ2l0YWxTaWduYXR1cmU6IHN0cmluZztcbiAgZGlnaXRhbFNpZ25hdHVyZVZlcnNpb246IHN0cmluZztcbiAgZG9jdW1lbnREYXRhTWF0Y2g6IGJvb2xlYW47XG4gIGZhY2VJbWFnZTogc3RyaW5nO1xuICBmaXJzdE5hbWU6IHN0cmluZztcbiAgZnVsbERvY3VtZW50QmFja0ltYWdlOiBzdHJpbmc7XG4gIGZ1bGxEb2N1bWVudEZyb250SW1hZ2U6IHN0cmluZztcbiAgaWRlbnRpdHlDYXJkTnVtYmVyOiBzdHJpbmc7XG4gIGlzc3VpbmdBdXRob3JpdHk6IHN0cmluZztcbiAgbGFzdE5hbWU6IHN0cmluZztcbiAgbXJ6VmVyaWZpZWQ6IGJvb2xlYW47XG4gIHBlcnNvbmFsSWRlbnRpZmljYXRpb25OdW1iZXI6IHN0cmluZztcbiAgc2Nhbm5pbmdGaXJzdFNpZGVEb25lOiBib29sZWFuO1xuICBzZXg6IHN0cmluZztcbiAgc2lnbmF0dXJlSW1hZ2U6IHN0cmluZztcbn1cbmV4cG9ydCBpbnRlcmZhY2UgU2xvdmVuaWFDb21iaW5lZFJlY29nbml6ZXJSZXN1bHRDdG9yIGV4dGVuZHMgUmVjb2duaXplclJlc3VsdEN0b3I8U2xvdmVuaWFDb21iaW5lZFJlY29nbml6ZXJSZXN1bHQ+IHt9XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2xvdmVuaWFDb21iaW5lZFJlY29nbml6ZXIgZXh0ZW5kcyBSZWNvZ25pemVyPFNsb3ZlbmlhQ29tYmluZWRSZWNvZ25pemVyUmVzdWx0PiB7XG4gIGRldGVjdEdsYXJlOiBib29sZWFuO1xuICByZXR1cm5GYWNlSW1hZ2U6IGJvb2xlYW47XG4gIHJldHVybkZ1bGxEb2N1bWVudEltYWdlOiBib29sZWFuO1xuICByZXR1cm5TaWduYXR1cmVJbWFnZTogYm9vbGVhbjtcbiAgc2lnblJlc3VsdDogYm9vbGVhbjtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgU2xvdmVuaWFDb21iaW5lZFJlY29nbml6ZXJDdG9yIGV4dGVuZHMgUmVjb2duaXplckN0b3I8U2xvdmVuaWFDb21iaW5lZFJlY29nbml6ZXI+IHt9XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2xvdmVuaWFJZEJhY2tSZWNvZ25pemVyUmVzdWx0IGV4dGVuZHMgUmVjb2duaXplclJlc3VsdCB7XG4gIGFkZHJlc3M6IHN0cmluZztcbiAgYXV0aG9yaXR5OiBzdHJpbmc7XG4gIGRhdGVPZkV4cGlyeTogRGF0ZTtcbiAgZGF0ZU9mSXNzdWU6IERhdGU7XG4gIGRvY3VtZW50Q29kZTogc3RyaW5nO1xuICBkb2N1bWVudE51bWJlcjogc3RyaW5nO1xuICBmdWxsRG9jdW1lbnRJbWFnZTogc3RyaW5nO1xuICBpc3N1ZXI6IHN0cmluZztcbiAgbXJ6UGFyc2VkOiBib29sZWFuO1xuICBtcnpUZXh0OiBzdHJpbmc7XG4gIG1yelZlcmlmaWVkOiBib29sZWFuO1xuICBuYXRpb25hbGl0eTogc3RyaW5nO1xuICBvcHQxOiBzdHJpbmc7XG4gIG9wdDI6IHN0cmluZztcbiAgcHJpbWFyeUlkOiBzdHJpbmc7XG4gIHNlY29uZGFyeUlkOiBzdHJpbmc7XG4gIHNleDogc3RyaW5nO1xufVxuZXhwb3J0IGludGVyZmFjZSBTbG92ZW5pYUlkQmFja1JlY29nbml6ZXJSZXN1bHRDdG9yIGV4dGVuZHMgUmVjb2duaXplclJlc3VsdEN0b3I8U2xvdmVuaWFJZEJhY2tSZWNvZ25pemVyUmVzdWx0PiB7fVxuXG5leHBvcnQgaW50ZXJmYWNlIFNsb3ZlbmlhSWRCYWNrUmVjb2duaXplciBleHRlbmRzIFJlY29nbml6ZXI8U2xvdmVuaWFJZEJhY2tSZWNvZ25pemVyUmVzdWx0PiB7XG4gIGRldGVjdEdsYXJlOiBib29sZWFuO1xuICBleHRyYWN0QXV0aG9yaXR5OiBib29sZWFuO1xuICBleHRyYWN0RGF0ZU9mSXNzdWU6IGJvb2xlYW47XG4gIHJldHVybkZ1bGxEb2N1bWVudEltYWdlOiBib29sZWFuO1xufVxuZXhwb3J0IGludGVyZmFjZSBTbG92ZW5pYUlkQmFja1JlY29nbml6ZXJDdG9yIGV4dGVuZHMgUmVjb2duaXplckN0b3I8U2xvdmVuaWFJZEJhY2tSZWNvZ25pemVyPiB7fVxuXG5leHBvcnQgaW50ZXJmYWNlIFNsb3ZlbmlhSWRGcm9udFJlY29nbml6ZXJSZXN1bHQgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0IHtcbiAgZGF0ZU9mQmlydGg6IERhdGU7XG4gIGRhdGVPZkV4cGlyeTogRGF0ZTtcbiAgZmFjZUltYWdlOiBzdHJpbmc7XG4gIGZpcnN0TmFtZTogc3RyaW5nO1xuICBmdWxsRG9jdW1lbnRJbWFnZTogc3RyaW5nO1xuICBsYXN0TmFtZTogc3RyaW5nO1xuICBuYXRpb25hbGl0eTogc3RyaW5nO1xuICBzZXg6IHN0cmluZztcbiAgc2lnbmF0dXJlSW1hZ2U6IHN0cmluZztcbn1cbmV4cG9ydCBpbnRlcmZhY2UgU2xvdmVuaWFJZEZyb250UmVjb2duaXplclJlc3VsdEN0b3IgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0Q3RvcjxTbG92ZW5pYUlkRnJvbnRSZWNvZ25pemVyUmVzdWx0PiB7fVxuXG5leHBvcnQgaW50ZXJmYWNlIFNsb3ZlbmlhSWRGcm9udFJlY29nbml6ZXIgZXh0ZW5kcyBSZWNvZ25pemVyPFNsb3ZlbmlhSWRGcm9udFJlY29nbml6ZXJSZXN1bHQ+IHtcbiAgZGV0ZWN0R2xhcmU6IGJvb2xlYW47XG4gIGV4dHJhY3REYXRlT2ZCaXJ0aDogYm9vbGVhbjtcbiAgZXh0cmFjdERhdGVPZkV4cGlyeTogYm9vbGVhbjtcbiAgZXh0cmFjdE5hdGlvbmFsaXR5OiBib29sZWFuO1xuICBleHRyYWN0U2V4OiBib29sZWFuO1xuICByZXR1cm5GYWNlSW1hZ2U6IGJvb2xlYW47XG4gIHJldHVybkZ1bGxEb2N1bWVudEltYWdlOiBib29sZWFuO1xuICByZXR1cm5TaWduYXR1cmVJbWFnZTogYm9vbGVhbjtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgU2xvdmVuaWFJZEZyb250UmVjb2duaXplckN0b3IgZXh0ZW5kcyBSZWNvZ25pemVyQ3RvcjxTbG92ZW5pYUlkRnJvbnRSZWNvZ25pemVyPiB7fVxuXG5leHBvcnQgaW50ZXJmYWNlIFNwYWluRGxGcm9udFJlY29nbml6ZXJSZXN1bHQgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0IHtcbiAgZGF0ZU9mQmlydGg6IERhdGU7XG4gIGZhY2VJbWFnZTogc3RyaW5nO1xuICBmaXJzdE5hbWU6IHN0cmluZztcbiAgZnVsbERvY3VtZW50SW1hZ2U6IHN0cmluZztcbiAgaXNzdWluZ0F1dGhvcml0eTogc3RyaW5nO1xuICBsaWNlbmNlQ2F0ZWdvcmllczogc3RyaW5nO1xuICBudW1iZXI6IHN0cmluZztcbiAgcGxhY2VPZkJpcnRoOiBzdHJpbmc7XG4gIHNpZ25hdHVyZUltYWdlOiBzdHJpbmc7XG4gIHN1cm5hbWU6IHN0cmluZztcbiAgdmFsaWRGcm9tOiBEYXRlO1xuICB2YWxpZFVudGlsOiBEYXRlO1xufVxuZXhwb3J0IGludGVyZmFjZSBTcGFpbkRsRnJvbnRSZWNvZ25pemVyUmVzdWx0Q3RvciBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHRDdG9yPFNwYWluRGxGcm9udFJlY29nbml6ZXJSZXN1bHQ+IHt9XG5cbmV4cG9ydCBpbnRlcmZhY2UgU3BhaW5EbEZyb250UmVjb2duaXplciBleHRlbmRzIFJlY29nbml6ZXI8U3BhaW5EbEZyb250UmVjb2duaXplclJlc3VsdD4ge1xuICBkZXRlY3RHbGFyZTogYm9vbGVhbjtcbiAgZXh0cmFjdERhdGVPZkJpcnRoOiBib29sZWFuO1xuICBleHRyYWN0Rmlyc3ROYW1lOiBib29sZWFuO1xuICBleHRyYWN0SXNzdWluZ0F1dGhvcml0eTogYm9vbGVhbjtcbiAgZXh0cmFjdExpY2VuY2VDYXRlZ29yaWVzOiBib29sZWFuO1xuICBleHRyYWN0UGxhY2VPZkJpcnRoOiBib29sZWFuO1xuICBleHRyYWN0U3VybmFtZTogYm9vbGVhbjtcbiAgZXh0cmFjdFZhbGlkRnJvbTogYm9vbGVhbjtcbiAgZXh0cmFjdFZhbGlkVW50aWw6IGJvb2xlYW47XG4gIGZhY2VJbWFnZURwaTogbnVtYmVyO1xuICBmdWxsRG9jdW1lbnRJbWFnZURwaTogbnVtYmVyO1xuICBmdWxsRG9jdW1lbnRJbWFnZUV4dGVuc2lvbkZhY3RvcnM6IEltYWdlRXh0ZW5zaW9uRmFjdG9ycztcbiAgcmV0dXJuRmFjZUltYWdlOiBib29sZWFuO1xuICByZXR1cm5GdWxsRG9jdW1lbnRJbWFnZTogYm9vbGVhbjtcbiAgcmV0dXJuU2lnbmF0dXJlSW1hZ2U6IGJvb2xlYW47XG4gIHNpZ25hdHVyZUltYWdlRHBpOiBudW1iZXI7XG59XG5leHBvcnQgaW50ZXJmYWNlIFNwYWluRGxGcm9udFJlY29nbml6ZXJDdG9yIGV4dGVuZHMgUmVjb2duaXplckN0b3I8U3BhaW5EbEZyb250UmVjb2duaXplcj4ge31cblxuZXhwb3J0IGludGVyZmFjZSBTd2VkZW5EbEZyb250UmVjb2duaXplclJlc3VsdCBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHQge1xuICBkYXRlT2ZCaXJ0aDogRGF0ZTtcbiAgZGF0ZU9mRXhwaXJ5OiBEYXRlO1xuICBkYXRlT2ZJc3N1ZTogRGF0ZTtcbiAgZmFjZUltYWdlOiBzdHJpbmc7XG4gIGZ1bGxEb2N1bWVudEltYWdlOiBzdHJpbmc7XG4gIGlzc3VpbmdBZ2VuY3k6IHN0cmluZztcbiAgbGljZW5jZUNhdGVnb3JpZXM6IHN0cmluZztcbiAgbGljZW5jZU51bWJlcjogc3RyaW5nO1xuICBuYW1lOiBzdHJpbmc7XG4gIHJlZmVyZW5jZU51bWJlcjogc3RyaW5nO1xuICBzaWduYXR1cmVJbWFnZTogc3RyaW5nO1xuICBzdXJuYW1lOiBzdHJpbmc7XG59XG5leHBvcnQgaW50ZXJmYWNlIFN3ZWRlbkRsRnJvbnRSZWNvZ25pemVyUmVzdWx0Q3RvciBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHRDdG9yPFN3ZWRlbkRsRnJvbnRSZWNvZ25pemVyUmVzdWx0PiB7fVxuXG5leHBvcnQgaW50ZXJmYWNlIFN3ZWRlbkRsRnJvbnRSZWNvZ25pemVyIGV4dGVuZHMgUmVjb2duaXplcjxTd2VkZW5EbEZyb250UmVjb2duaXplclJlc3VsdD4ge1xuICBkZXRlY3RHbGFyZTogYm9vbGVhbjtcbiAgZXh0cmFjdERhdGVPZkJpcnRoOiBib29sZWFuO1xuICBleHRyYWN0RGF0ZU9mRXhwaXJ5OiBib29sZWFuO1xuICBleHRyYWN0RGF0ZU9mSXNzdWU6IGJvb2xlYW47XG4gIGV4dHJhY3RJc3N1aW5nQXV0aG9yaXR5OiBib29sZWFuO1xuICBleHRyYWN0TGljZW5jZUNhdGVnb3JpZXM6IGJvb2xlYW47XG4gIGV4dHJhY3ROYW1lOiBib29sZWFuO1xuICBleHRyYWN0UmVmZXJlbmNlTnVtYmVyOiBib29sZWFuO1xuICBleHRyYWN0U3VybmFtZTogYm9vbGVhbjtcbiAgZXh0cmFjdFZhbGlkRnJvbTogYm9vbGVhbjtcbiAgZnVsbERvY3VtZW50SW1hZ2VEcGk6IG51bWJlcjtcbiAgcmV0dXJuRmFjZUltYWdlOiBib29sZWFuO1xuICByZXR1cm5GdWxsRG9jdW1lbnRJbWFnZTogYm9vbGVhbjtcbiAgcmV0dXJuU2lnbmF0dXJlSW1hZ2U6IGJvb2xlYW47XG59XG5leHBvcnQgaW50ZXJmYWNlIFN3ZWRlbkRsRnJvbnRSZWNvZ25pemVyQ3RvciBleHRlbmRzIFJlY29nbml6ZXJDdG9yPFN3ZWRlbkRsRnJvbnRSZWNvZ25pemVyPiB7fVxuXG5leHBvcnQgaW50ZXJmYWNlIFN3aXR6ZXJsYW5kRGxGcm9udFJlY29nbml6ZXJSZXN1bHQgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0IHtcbiAgZGF0ZU9mQmlydGg6IERhdGU7XG4gIGRhdGVPZkV4cGlyeTogRGF0ZTtcbiAgZGF0ZU9mSXNzdWU6IERhdGU7XG4gIGV4cGlyeURhdGVQZXJtYW5lbnQ6IGJvb2xlYW47XG4gIGZhY2VJbWFnZTogc3RyaW5nO1xuICBmaXJzdE5hbWU6IHN0cmluZztcbiAgZnVsbERvY3VtZW50SW1hZ2U6IHN0cmluZztcbiAgaXNzdWluZ0F1dGhvcml0eTogc3RyaW5nO1xuICBsYXN0TmFtZTogc3RyaW5nO1xuICBsaWNlbnNlTnVtYmVyOiBzdHJpbmc7XG4gIHBsYWNlT2ZCaXJ0aDogc3RyaW5nO1xuICBzaWduYXR1cmVJbWFnZTogc3RyaW5nO1xuICB2ZWhpY2xlQ2F0ZWdvcmllczogc3RyaW5nO1xufVxuZXhwb3J0IGludGVyZmFjZSBTd2l0emVybGFuZERsRnJvbnRSZWNvZ25pemVyUmVzdWx0Q3RvciBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHRDdG9yPFN3aXR6ZXJsYW5kRGxGcm9udFJlY29nbml6ZXJSZXN1bHQ+IHt9XG5cbmV4cG9ydCBpbnRlcmZhY2UgU3dpdHplcmxhbmREbEZyb250UmVjb2duaXplciBleHRlbmRzIFJlY29nbml6ZXI8U3dpdHplcmxhbmREbEZyb250UmVjb2duaXplclJlc3VsdD4ge1xuICBkZXRlY3RHbGFyZTogYm9vbGVhbjtcbiAgZXh0cmFjdERhdGVPZkJpcnRoOiBib29sZWFuO1xuICBleHRyYWN0RGF0ZU9mRXhwaXJ5OiBib29sZWFuO1xuICBleHRyYWN0RGF0ZU9mSXNzdWU6IGJvb2xlYW47XG4gIGV4dHJhY3RGaXJzdE5hbWU6IGJvb2xlYW47XG4gIGV4dHJhY3RJc3N1aW5nQXV0aG9yaXR5OiBib29sZWFuO1xuICBleHRyYWN0TGFzdE5hbWU6IGJvb2xlYW47XG4gIGV4dHJhY3RQbGFjZU9mQmlydGg6IGJvb2xlYW47XG4gIGV4dHJhY3RWZWhpY2xlQ2F0ZWdvcmllczogYm9vbGVhbjtcbiAgZmFjZUltYWdlRHBpOiBudW1iZXI7XG4gIGZ1bGxEb2N1bWVudEltYWdlRHBpOiBudW1iZXI7XG4gIGZ1bGxEb2N1bWVudEltYWdlRXh0ZW5zaW9uRmFjdG9yczogSW1hZ2VFeHRlbnNpb25GYWN0b3JzO1xuICByZXR1cm5GYWNlSW1hZ2U6IGJvb2xlYW47XG4gIHJldHVybkZ1bGxEb2N1bWVudEltYWdlOiBib29sZWFuO1xuICByZXR1cm5TaWduYXR1cmVJbWFnZTogYm9vbGVhbjtcbiAgc2lnbmF0dXJlSW1hZ2VEcGk6IG51bWJlcjtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgU3dpdHplcmxhbmREbEZyb250UmVjb2duaXplckN0b3IgZXh0ZW5kcyBSZWNvZ25pemVyQ3RvcjxTd2l0emVybGFuZERsRnJvbnRSZWNvZ25pemVyPiB7fVxuXG5leHBvcnQgaW50ZXJmYWNlIFN3aXR6ZXJsYW5kRGxCYWNrUmVjb2duaXplclJlc3VsdCBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHQge1xuICBhdXRob3JpdHk6IHN0cmluZztcbiAgZGF0ZU9mQmlydGg6IERhdGU7XG4gIGRhdGVPZkV4cGlyeTogRGF0ZTtcbiAgZGF0ZU9mSXNzdWU6IERhdGU7XG4gIGRvY3VtZW50Q29kZTogc3RyaW5nO1xuICBkb2N1bWVudE51bWJlcjogc3RyaW5nO1xuICBmdWxsRG9jdW1lbnRJbWFnZTogc3RyaW5nO1xuICBoZWlnaHQ6IHN0cmluZztcbiAgaXNzdWVyOiBzdHJpbmc7XG4gIG1yelBhcnNlZDogYm9vbGVhbjtcbiAgbXJ6VGV4dDogc3RyaW5nO1xuICBtcnpWZXJpZmllZDogYm9vbGVhbjtcbiAgbmF0aW9uYWxpdHk6IHN0cmluZztcbiAgbm9uTXJ6RGF0ZU9mRXhwaXJ5OiBEYXRlO1xuICBub25NcnpTZXg6IHN0cmluZztcbiAgb3B0MTogc3RyaW5nO1xuICBvcHQyOiBzdHJpbmc7XG4gIHBsYWNlT2ZPcmlnaW46IHN0cmluZztcbiAgcHJpbWFyeUlkOiBzdHJpbmc7XG4gIHNlY29uZGFyeUlkOiBzdHJpbmc7XG4gIHNleDogU3RyaW5nO1xufVxuZXhwb3J0IGludGVyZmFjZSBTd2l0emVybGFuZERsQmFja1JlY29nbml6ZXJSZXN1bHRDdG9yIGV4dGVuZHMgUmVjb2duaXplclJlc3VsdEN0b3I8U3dpdHplcmxhbmREbEJhY2tSZWNvZ25pemVyUmVzdWx0PiB7fVxuXG5leHBvcnQgaW50ZXJmYWNlIFN3aXR6ZXJsYW5kRGxCYWNrUmVjb2duaXplciBleHRlbmRzIFJlY29nbml6ZXI8U3dpdHplcmxhbmREbEJhY2tSZWNvZ25pemVyUmVzdWx0PiB7XG4gIGRldGVjdEdsYXJlOiBib29sZWFuO1xuICBleHRyYWN0QXV0aG9yaXR5OiBib29sZWFuO1xuICBleHRyYWN0RGF0ZU9mRXhwaXJ5OiBib29sZWFuO1xuICBleHRyYWN0RGF0ZU9mSXNzdWU6IGJvb2xlYW47XG4gIGV4dHJhY3RIZWlnaHQ6IGJvb2xlYW47XG4gIGV4dHJhY3RQbGFjZU9mT3JpZ2luOiBib29sZWFuO1xuICBleHRyYWN0U2V4OiBib29sZWFuO1xuICByZXR1cm5GdWxsRG9jdW1lbnRJbWFnZTogYm9vbGVhbjtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgU3dpdHplcmxhbmREbEJhY2tSZWNvZ25pemVyQ3RvciBleHRlbmRzIFJlY29nbml6ZXJDdG9yPFN3aXR6ZXJsYW5kRGxCYWNrUmVjb2duaXplcj4ge31cblxuZXhwb3J0IGludGVyZmFjZSBTd2l0emVybGFuZElkRnJvbnRSZWNvZ25pemVyUmVzdWx0IGV4dGVuZHMgUmVjb2duaXplclJlc3VsdCB7XG4gIGRhdGVPZkJpcnRoOiBEYXRlO1xuICBmYWNlSW1hZ2U6IHN0cmluZztcbiAgZnVsbERvY3VtZW50SW1hZ2U6IHN0cmluZztcbiAgZ2l2ZW5OYW1lOiBzdHJpbmc7XG4gIHNpZ25hdHVyZUltYWdlOiBzdHJpbmc7XG4gIHN1cm5hbWU6IHN0cmluZztcbn1cbmV4cG9ydCBpbnRlcmZhY2UgU3dpdHplcmxhbmRJZEZyb250UmVjb2duaXplclJlc3VsdEN0b3IgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0Q3RvcjxTd2l0emVybGFuZElkRnJvbnRSZWNvZ25pemVyUmVzdWx0PiB7fVxuXG5leHBvcnQgaW50ZXJmYWNlIFN3aXR6ZXJsYW5kSWRGcm9udFJlY29nbml6ZXIgZXh0ZW5kcyBSZWNvZ25pemVyPFN3aXR6ZXJsYW5kSWRGcm9udFJlY29nbml6ZXJSZXN1bHQ+IHtcbiAgZGV0ZWN0R2xhcmU6IGJvb2xlYW47XG4gIGV4dHJhY3RHaXZlbk5hbWU6IGJvb2xlYW47XG4gIGV4dHJhY3RTdXJuYW1lOiBib29sZWFuO1xuICBmYWNlSW1hZ2VEcGk6IG51bWJlcjtcbiAgZnVsbERvY3VtZW50SW1hZ2VEcGk6IG51bWJlcjtcbiAgZnVsbERvY3VtZW50SW1hZ2VFeHRlbnNpb25GYWN0b3JzOiBJbWFnZUV4dGVuc2lvbkZhY3RvcnM7XG4gIHJldHVybkZhY2VJbWFnZTogYm9vbGVhbjtcbiAgcmV0dXJuRnVsbERvY3VtZW50SW1hZ2U6IGJvb2xlYW47XG4gIHJldHVyblNpZ25hdHVyZUltYWdlOiBib29sZWFuO1xuICBzaWduYXR1cmVJbWFnZURwaTogbnVtYmVyO1xufVxuZXhwb3J0IGludGVyZmFjZSBTd2l0emVybGFuZElkRnJvbnRSZWNvZ25pemVyQ3RvciBleHRlbmRzIFJlY29nbml6ZXJDdG9yPFN3aXR6ZXJsYW5kSWRGcm9udFJlY29nbml6ZXI+IHt9XG5cbmV4cG9ydCBpbnRlcmZhY2UgU3dpdHplcmxhbmRQYXNzcG9ydFJlY29nbml6ZXJSZXN1bHQgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0IHtcbiAgYXV0aG9yaXR5OiBzdHJpbmc7XG4gIGRhdGVPZkJpcnRoOiBEYXRlO1xuICBkYXRlT2ZFeHBpcnk6IERhdGU7XG4gIGRhdGVPZklzc3VlOiBEYXRlO1xuICBkb2N1bWVudENvZGU6IHN0cmluZztcbiAgZG9jdW1lbnROdW1iZXI6IHN0cmluZztcbiAgZmFjZUltYWdlOiBzdHJpbmc7XG4gIGZ1bGxEb2N1bWVudEltYWdlOiBzdHJpbmc7XG4gIGdpdmVuTmFtZTogc3RyaW5nO1xuICBoZWlnaHQ6IHN0cmluZztcbiAgaXNzdWVyOiBzdHJpbmc7XG4gIG1yelBhcnNlZDogYm9vbGVhbjtcbiAgbXJ6VGV4dDogc3RyaW5nO1xuICBtcnpWZXJpZmllZDogYm9vbGVhbjtcbiAgbmF0aW9uYWxpdHk6IHN0cmluZztcbiAgbm9uTXJ6RGF0ZU9mQmlydGg6IERhdGU7XG4gIG5vbk1yekRhdGVPZkV4cGlyeTogRGF0ZTtcbiAgbm9uTXJ6U2V4OiBzdHJpbmc7XG4gIG9wdDE6IHN0cmluZztcbiAgb3B0Mjogc3RyaW5nO1xuICBwYXNzcG9ydE51bWJlcjogc3RyaW5nO1xuICBwbGFjZU9mQmlydGg6IHN0cmluZztcbiAgcHJpbWFyeUlkOiBzdHJpbmc7XG4gIHNlY29uZGFyeUlkOiBzdHJpbmc7XG4gIHNleDogc3RyaW5nO1xuICBzdXJuYW1lOiBzdHJpbmc7XG59XG5leHBvcnQgaW50ZXJmYWNlIFN3aXR6ZXJsYW5kUGFzc3BvcnRSZWNvZ25pemVyUmVzdWx0Q3RvciBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHRDdG9yPFN3aXR6ZXJsYW5kUGFzc3BvcnRSZWNvZ25pemVyUmVzdWx0PiB7fVxuXG5leHBvcnQgaW50ZXJmYWNlIFN3aXR6ZXJsYW5kUGFzc3BvcnRSZWNvZ25pemVyIGV4dGVuZHMgUmVjb2duaXplcjxTd2l0emVybGFuZFBhc3Nwb3J0UmVjb2duaXplclJlc3VsdD4ge1xuICBkZXRlY3RHbGFyZTogYm9vbGVhbjtcbiAgZXh0cmFjdEF1dGhvcml0eTogYm9vbGVhbjtcbiAgZXh0cmFjdERhdGVPZkJpcnRoOiBib29sZWFuO1xuICBleHRyYWN0RGF0ZU9mRXhwaXJ5OiBib29sZWFuO1xuICBleHRyYWN0RGF0ZU9mSXNzdWU6IGJvb2xlYW47XG4gIGV4dHJhY3RHaXZlbk5hbWU6IGJvb2xlYW47XG4gIGV4dHJhY3RIZWlnaHQ6IGJvb2xlYW47XG4gIGV4dHJhY3RQYXNzcG9ydE51bWJlcjogYm9vbGVhbjtcbiAgZXh0cmFjdFBsYWNlT2ZCaXJ0aDogYm9vbGVhbjtcbiAgZXh0cmFjdFNleDogYm9vbGVhbjtcbiAgZXh0cmFjdFN1cm5hbWU6IGJvb2xlYW47XG4gIHJldHVybkZhY2VJbWFnZTogYm9vbGVhbjtcbiAgcmV0dXJuRnVsbERvY3VtZW50SW1hZ2U6IGJvb2xlYW47XG59XG5leHBvcnQgaW50ZXJmYWNlIFN3aXR6ZXJsYW5kUGFzc3BvcnRSZWNvZ25pemVyQ3RvciBleHRlbmRzIFJlY29nbml6ZXJDdG9yPFN3aXR6ZXJsYW5kUGFzc3BvcnRSZWNvZ25pemVyPiB7fVxuXG5leHBvcnQgaW50ZXJmYWNlIFVuaXRlZEFyYWJFbWlyYXRlc0RsRnJvbnRSZWNvZ25pemVyUmVzdWx0IGV4dGVuZHMgUmVjb2duaXplclJlc3VsdCB7XG4gIGRhdGVPZkJpcnRoOiBEYXRlO1xuICBleHBpcnlEYXRlOiBEYXRlO1xuICBmYWNlSW1hZ2U6IHN0cmluZztcbiAgZnVsbERvY3VtZW50SW1hZ2U6IHN0cmluZztcbiAgaXNzdWVEYXRlOiBEYXRlO1xuICBsaWNlbnNlTnVtYmVyOiBzdHJpbmc7XG4gIGxpY2Vuc2luZ0F1dGhvcml0eTogc3RyaW5nO1xuICBuYW1lOiBzdHJpbmc7XG4gIG5hdGlvbmFsaXR5OiBzdHJpbmc7XG4gIHBsYWNlT2ZJc3N1ZTogc3RyaW5nO1xufVxuZXhwb3J0IGludGVyZmFjZSBVbml0ZWRBcmFiRW1pcmF0ZXNEbEZyb250UmVjb2duaXplclJlc3VsdEN0b3IgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0Q3RvcjxVbml0ZWRBcmFiRW1pcmF0ZXNEbEZyb250UmVjb2duaXplclJlc3VsdD4ge31cblxuZXhwb3J0IGludGVyZmFjZSBVbml0ZWRBcmFiRW1pcmF0ZXNEbEZyb250UmVjb2duaXplciBleHRlbmRzIFJlY29nbml6ZXI8VW5pdGVkQXJhYkVtaXJhdGVzRGxGcm9udFJlY29nbml6ZXJSZXN1bHQ+IHtcbiAgZGV0ZWN0R2xhcmU6IGJvb2xlYW47XG4gIGV4dHJhY3REYXRlT2ZCaXJ0aDogYm9vbGVhbjtcbiAgZXh0cmFjdERhdGVPZklzc3VlOiBib29sZWFuO1xuICBleHRyYWN0TGljZW5zZU51bWJlcjogYm9vbGVhbjtcbiAgZXh0cmFjdExpY2Vuc2luZ0F1dGhvcml0eTogYm9vbGVhbjtcbiAgZXh0cmFjdE5hbWU6IGJvb2xlYW47XG4gIGV4dHJhY3ROYXRpb25hbGl0eTogYm9vbGVhbjtcbiAgZXh0cmFjdFBsYWNlT2ZJc3N1ZTogYm9vbGVhbjtcbiAgZmFjZUltYWdlRHBpOiBudW1iZXI7XG4gIGZ1bGxEb2N1bWVudEltYWdlRHBpOiBudW1iZXI7XG4gIGZ1bGxEb2N1bWVudEltYWdlRXh0ZW5zaW9uRmFjdG9yczogSW1hZ2VFeHRlbnNpb25GYWN0b3JzO1xuICByZXR1cm5GYWNlSW1hZ2U6IGJvb2xlYW47XG4gIHJldHVybkZ1bGxEb2N1bWVudEltYWdlOiBib29sZWFuO1xufVxuZXhwb3J0IGludGVyZmFjZSBVbml0ZWRBcmFiRW1pcmF0ZXNEbEZyb250UmVjb2duaXplckN0b3IgZXh0ZW5kcyBSZWNvZ25pemVyQ3RvcjxVbml0ZWRBcmFiRW1pcmF0ZXNEbEZyb250UmVjb2duaXplcj4ge31cblxuZXhwb3J0IGludGVyZmFjZSBVbml0ZWRBcmFiRW1pcmF0ZXNJZEJhY2tSZWNvZ25pemVyUmVzdWx0IGV4dGVuZHMgUmVjb2duaXplclJlc3VsdCB7XG4gIGZ1bGxEb2N1bWVudEltYWdlOiBzdHJpbmc7XG4gIG1yelJlc3VsdDogTXJ6UmVzdWx0O1xufVxuZXhwb3J0IGludGVyZmFjZSBVbml0ZWRBcmFiRW1pcmF0ZXNJZEJhY2tSZWNvZ25pemVyUmVzdWx0Q3RvciBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHRDdG9yPFVuaXRlZEFyYWJFbWlyYXRlc0lkQmFja1JlY29nbml6ZXJSZXN1bHQ+IHt9XG5cbmV4cG9ydCBpbnRlcmZhY2UgVW5pdGVkQXJhYkVtaXJhdGVzSWRCYWNrUmVjb2duaXplciBleHRlbmRzIFJlY29nbml6ZXI8VW5pdGVkQXJhYkVtaXJhdGVzSWRCYWNrUmVjb2duaXplclJlc3VsdD4ge1xuICBkZXRlY3RHbGFyZTogYm9vbGVhbjtcbiAgZnVsbERvY3VtZW50SW1hZ2VEcGk6IG51bWJlcjtcbiAgZnVsbERvY3VtZW50SW1hZ2VFeHRlbnNpb25GYWN0b3JzOiBJbWFnZUV4dGVuc2lvbkZhY3RvcnM7XG4gIHJldHVybkZ1bGxEb2N1bWVudEltYWdlOiBib29sZWFuO1xufVxuZXhwb3J0IGludGVyZmFjZSBVbml0ZWRBcmFiRW1pcmF0ZXNJZEJhY2tSZWNvZ25pemVyQ3RvciBleHRlbmRzIFJlY29nbml6ZXJDdG9yPFVuaXRlZEFyYWJFbWlyYXRlc0lkQmFja1JlY29nbml6ZXI+IHt9XG5cbmV4cG9ydCBpbnRlcmZhY2UgVW5pdGVkQXJhYkVtaXJhdGVzSWRGcm9udFJlY29nbml6ZXJSZXN1bHQgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0IHtcbiAgZmFjZUltYWdlOiBzdHJpbmc7XG4gIGZ1bGxEb2N1bWVudEltYWdlOiBzdHJpbmc7XG4gIGlkTnVtYmVyOiBzdHJpbmc7XG4gIG5hbWU6IHN0cmluZztcbiAgbmF0aW9uYWxpdHk6IHN0cmluZztcbn1cbmV4cG9ydCBpbnRlcmZhY2UgVW5pdGVkQXJhYkVtaXJhdGVzSWRGcm9udFJlY29nbml6ZXJSZXN1bHRDdG9yIGV4dGVuZHMgUmVjb2duaXplclJlc3VsdEN0b3I8VW5pdGVkQXJhYkVtaXJhdGVzSWRGcm9udFJlY29nbml6ZXJSZXN1bHQ+IHt9XG5cbmV4cG9ydCBpbnRlcmZhY2UgVW5pdGVkQXJhYkVtaXJhdGVzSWRGcm9udFJlY29nbml6ZXIgZXh0ZW5kcyBSZWNvZ25pemVyPFVuaXRlZEFyYWJFbWlyYXRlc0lkRnJvbnRSZWNvZ25pemVyUmVzdWx0PiB7XG4gIGRldGVjdEdsYXJlOiBib29sZWFuO1xuICBleHRyYWN0TmFtZTogYm9vbGVhbjtcbiAgZXh0cmFjdE5hdGlvbmFsaXR5OiBib29sZWFuO1xuICBmYWNlSW1hZ2VEcGk6IG51bWJlcjtcbiAgZnVsbERvY3VtZW50SW1hZ2VEcGk6IG51bWJlcjtcbiAgZnVsbERvY3VtZW50SW1hZ2VFeHRlbnNpb25GYWN0b3JzOiBJbWFnZUV4dGVuc2lvbkZhY3RvcnM7XG4gIHJldHVybkZhY2VJbWFnZTogYm9vbGVhbjtcbiAgcmV0dXJuRnVsbERvY3VtZW50SW1hZ2U6IGJvb2xlYW47XG59XG5leHBvcnQgaW50ZXJmYWNlIFVuaXRlZEFyYWJFbWlyYXRlc0lkRnJvbnRSZWNvZ25pemVyQ3RvciBleHRlbmRzIFJlY29nbml6ZXJDdG9yPFVuaXRlZEFyYWJFbWlyYXRlc0lkRnJvbnRSZWNvZ25pemVyPiB7fVxuXG5leHBvcnQgaW50ZXJmYWNlIFZpblJlY29nbml6ZXJSZXN1bHQgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0IHtcbiAgdmluOiBzdHJpbmc7XG59XG5leHBvcnQgaW50ZXJmYWNlIFZpblJlY29nbml6ZXJSZXN1bHRDdG9yIGV4dGVuZHMgUmVjb2duaXplclJlc3VsdEN0b3I8VmluUmVjb2duaXplclJlc3VsdD4ge31cblxuZXhwb3J0IGludGVyZmFjZSBWaW5SZWNvZ25pemVyIGV4dGVuZHMgUmVjb2duaXplcjxWaW5SZWNvZ25pemVyUmVzdWx0PiB7fVxuZXhwb3J0IGludGVyZmFjZSBWaW5SZWNvZ25pemVyQ3RvciBleHRlbmRzIFJlY29nbml6ZXJDdG9yPFZpblJlY29nbml6ZXI+IHt9XG5cbmV4cG9ydCBpbnRlcmZhY2UgVXNkbFJlY29nbml6ZXJSZXN1bHQgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0IHtcbiAgb3B0aW9uYWxFbGVtZW50czogYW55W107XG4gIHJhd0RhdGE6IHN0cmluZztcbiAgcmF3U3RyaW5nRGF0YTogc3RyaW5nO1xuICB1bmNlcnRhaW46IHN0cmluZztcbiAgZmllbGRzOiBhbnlbXTtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgVXNkbFJlY29nbml6ZXJSZXN1bHRDdG9yIGV4dGVuZHMgUmVjb2duaXplclJlc3VsdEN0b3I8VXNkbFJlY29nbml6ZXJSZXN1bHQ+IHt9XG5cbmV4cG9ydCBpbnRlcmZhY2UgVXNkbFJlY29nbml6ZXIgZXh0ZW5kcyBSZWNvZ25pemVyPFVzZGxSZWNvZ25pemVyUmVzdWx0PiB7XG4gIG51bGxRdWlldFpvbmVBbGxvd2VkOiBib29sZWFuO1xuICB1bmNlcnRhaW5EZWNvZGluZzogYm9vbGVhbjtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgVXNkbFJlY29nbml6ZXJDdG9yIGV4dGVuZHMgUmVjb2duaXplckN0b3I8VXNkbFJlY29nbml6ZXI+IHt9XG5cbmV4cG9ydCBpbnRlcmZhY2UgVXNkbENvbWJpbmVkUmVjb2duaXplclJlc3VsdCBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHQge1xuICBkaWdpdGFsU2lnbmF0dXJlOiBzdHJpbmc7XG4gIGRpZ2l0YWxTaWduYXR1cmVWZXJzaW9uOiBzdHJpbmc7XG4gIGRvY3VtZW50RGF0YU1hdGNoOiBib29sZWFuO1xuICBmYWNlSW1hZ2U6IHN0cmluZztcbiAgZnVsbERvY3VtZW50SW1hZ2U6IHN0cmluZztcbiAgc2Nhbm5pbmdGaXJzdFNpZGVEb25lOiBib29sZWFuO1xuICBvcHRpb25hbEVsZW1lbnRzOiBhbnlbXTtcbiAgcmF3RGF0YTogc3RyaW5nO1xuICByYXdTdHJpbmdEYXRhOiBzdHJpbmc7XG4gIHVuY2VydGFpbjogYm9vbGVhbjtcbiAgZmllbGRzOiBhbnlbXTtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgVXNkbENvbWJpbmVkUmVjb2duaXplclJlc3VsdEN0b3IgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0Q3RvcjxVc2RsQ29tYmluZWRSZWNvZ25pemVyUmVzdWx0PiB7fVxuXG5leHBvcnQgaW50ZXJmYWNlIFVzZGxDb21iaW5lZFJlY29nbml6ZXIgZXh0ZW5kcyBSZWNvZ25pemVyPFVzZGxDb21iaW5lZFJlY29nbml6ZXJSZXN1bHQ+IHtcbiAgZmFjZUltYWdlRHBpOiBudW1iZXI7XG4gIGZ1bGxEb2N1bWVudEltYWdlRHBpOiBudW1iZXI7XG4gIHJldHVybkZhY2VJbWFnZTogYm9vbGVhbjtcbiAgcmV0dXJuRnVsbERvY3VtZW50SW1hZ2U6IGJvb2xlYW47XG4gIHNpZ25SZXN1bHQ6IGJvb2xlYW47XG59XG5leHBvcnQgaW50ZXJmYWNlIFVzZGxDb21iaW5lZFJlY29nbml6ZXJDdG9yIGV4dGVuZHMgUmVjb2duaXplckN0b3I8VXNkbENvbWJpbmVkUmVjb2duaXplcj4ge31cblxuLyoqXG4gKiBAbmFtZSBCbGlua0lkXG4gKiBAZGVzY3JpcHRpb25cbiAqIE1pY3JvYmxpbmsgU0RLIHdyYXBwZXIgZm9yIGJhcmNvZGUgYW5kIGRvY3VtZW50IHNjYW5uaW5nLiBTZWUgdGhlXG4gKiBibGlua2lkLXBob25lZ2FwIHJlcG9zaXRvcnkgZm9yIGF2YWlsYWJsZSByZWNvZ25pemVycyBhbmQgb3RoZXIgc2V0dGluZ3NcbiAqXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IEJsaW5rSWQsIFJlY29nbml6ZXJSZXN1bHRTdGF0ZSB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvYmxpbmtpZC9uZ3gnO1xuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgYmxpbmtJZDogQmxpbmtJZCkgeyB9XG4gKlxuICogLi4uXG4gKlxuICogY29uc3Qgb3ZlcmxheVNldHRpbmdzID0gbmV3IHRoaXMuYmxpbmtJZC5Eb2N1bWVudE92ZXJsYXlTZXR0aW5ncygpO1xuICpcbiAqIGNvbnN0IHVzZGxSZWNvZ25pemVyID0gbmV3IHRoaXMuYmxpbmtJZC5Vc2RsUmVjb2duaXplcigpO1xuICogY29uc3QgdXNkbFN1Y2Nlc3NGcmFtZUdyYWJiZXIgPSBuZXcgdGhpcy5ibGlua0lkLlN1Y2Nlc3NGcmFtZUdyYWJiZXJSZWNvZ25pemVyKHVzZGxSZWNvZ25pemVyKTtcbiAqXG4gKiBjb25zdCBiYXJjb2RlUmVjb2duaXplciA9IG5ldyB0aGlzLmJsaW5rSWQuQmFyY29kZVJlY29nbml6ZXIoKTtcbiAqIGJhcmNvZGVSZWNvZ25pemVyLnNjYW5QZGY0MTcgPSB0cnVlO1xuICpcbiAqIGNvbnN0IHJlY29nbml6ZXJDb2xsZWN0aW9uID0gbmV3IHRoaXMuYmxpbmtJZC5SZWNvZ25pemVyQ29sbGVjdGlvbihbXG4gKiAgIHVzZGxTdWNjZXNzRnJhbWVHcmFiYmVyLFxuICogICBiYXJjb2RlUmVjb2duaXplcixcbiAqIF0pO1xuICpcbiAqIGNvbnN0IGNhbmNlbGVkID0gYXdhaXQgdGhpcy5ibGlua0lkLnNjYW5XaXRoQ2FtZXJhKFxuICogICBvdmVybGF5U2V0dGluZ3MsXG4gKiAgIHJlY29nbml6ZXJDb2xsZWN0aW9uLFxuICogICB7IGlvczogSU9TX0xJQ0VOU0VfS0VZLCBhbmRyb2lkOiBBTkRST0lEX0xJQ0VOU0VfS0VZIH0sXG4gKiApO1xuICpcbiAqIGlmICghY2FuY2VsZWQpIHtcbiAqICAgaWYgKHVzZGxSZWNvZ25pemVyLnJlc3VsdC5yZXN1bHRTdGF0ZSA9PT0gUmVjb2duaXplclJlc3VsdFN0YXRlLnZhbGlkKSB7XG4gKiAgICAgY29uc3Qgc3VjY2Vzc0ZyYW1lID0gdXNkbFN1Y2Nlc3NGcmFtZUdyYWJiZXIucmVzdWx0LnN1Y2Nlc3NGcmFtZTtcbiAqICAgICBpZiAoc3VjY2Vzc0ZyYW1lKSB7XG4gKiAgICAgICB0aGlzLmJhc2U2NEltZyA9IGBkYXRhOmltYWdlL2pwZztiYXNlNjQsICR7c3VjY2Vzc0ZyYW1lfWA7XG4gKiAgICAgICB0aGlzLmZpZWxkcyA9IHVzZGxSZWNvZ25pemVyLnJlc3VsdC5maWVsZHM7XG4gKiAgICAgfVxuICogICB9IGVsc2Uge1xuICogICAgIHRoaXMuYmFyY29kZVN0cmluZ0RhdGEgPSBiYXJjb2RlUmVjb2duaXplci5yZXN1bHQuc3RyaW5nRGF0YTtcbiAqICAgfVxuICogfVxuICpcbiAqIC4uLlxuICpcbiAqIGNvbnN0IG92ZXJsYXlTZXR0aW5ncyA9IG5ldyB0aGlzLmJsaW5rSWQuQmxpbmtDYXJkT3ZlcmxheVNldHRpbmdzKCk7XG4gKiBjb25zdCByZWNvZ25pemVyID0gbmV3IHRoaXMuYmxpbmtJZC5CbGlua0NhcmRSZWNvZ25pemVyKCk7XG4gKiByZWNvZ25pemVyLnJldHVybkZ1bGxEb2N1bWVudEltYWdlID0gZmFsc2U7XG4gKiByZWNvZ25pemVyLmRldGVjdEdsYXJlID0gdHJ1ZTtcbiAqIHJlY29nbml6ZXIuZXh0cmFjdEN2diA9IHRydWU7XG4gKiByZWNvZ25pemVyLmV4dHJhY3RWYWxpZFRocnUgPSB0cnVlO1xuICogcmVjb2duaXplci5leHRyYWN0T3duZXIgPSB0cnVlO1xuICpcbiAqIGNvbnN0IHJlY29nbml6ZXJDb2xsZWN0aW9uID0gbmV3IHRoaXMuYmxpbmtJZC5SZWNvZ25pemVyQ29sbGVjdGlvbihbcmVjb2duaXplcl0pO1xuICogY29uc3QgY2FuY2VsZWQgPSBhd2FpdCB0aGlzLmJsaW5rSWQuc2NhbldpdGhDYW1lcmEoXG4gKiAgIG92ZXJsYXlTZXR0aW5ncyxcbiAqICAgcmVjb2duaXplckNvbGxlY3Rpb24sXG4gKiAgIHtcbiAqICAgICBpb3M6ICcnLCAvL2lPUyBMaWNlbnNlIEtleVxuICogICAgIGFuZHJvaWQ6ICcnIC8vQW5kcm9pZCBMaWNlbnNlIEtleVxuICogICB9LFxuICogKTtcbiAqXG4gKiBpZiAoIWNhbmNlbGVkKSB7XG4gKiAgIGlmIChyZWNvZ25pemVyLnJlc3VsdC5yZXN1bHRTdGF0ZSA9PT0gUmVjb2duaXplclJlc3VsdFN0YXRlLnZhbGlkKSB7XG4gKiAgICAgY29uc3QgcmVzdWx0cyA9IHJlY29nbml6ZXIucmVzdWx0O1xuICpcbiAqICAgICBpZiAocmVzdWx0cy5yZXN1bHRTdGF0ZSA9PT0gUmVjb2duaXplclJlc3VsdFN0YXRlLnZhbGlkKSB7XG4gKiAgICAgICBjb25zdCBjY0luZm8gPSB7XG4gKiAgICAgICAgIGNhcmROdW1iZXI6IE51bWJlcihyZXN1bHRzLmNhcmROdW1iZXIpLFxuICogICAgICAgICBleHBpcmF0aW9uTW9udGg6IE51bWJlcihyZXN1bHRzLnZhbGlkVGhydS5tb250aCksXG4gKiAgICAgICAgIGV4cGlyYXRpb25ZZWFyOiBOdW1iZXIocmVzdWx0cy52YWxpZFRocnUueWVhciksXG4gKiAgICAgICAgIGN2djogTnVtYmVyKHJlc3VsdHMuY3Z2KVxuICogICAgICAgfTtcbiAqICAgICB9XG4gKiAgIH1cbiAqIGBgYFxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ0JsaW5rSWQnLFxuICBwbHVnaW46ICdibGlua2lkLWNvcmRvdmEnLFxuICBwbHVnaW5SZWY6ICdjb3Jkb3ZhLnBsdWdpbnMuQmxpbmtJRCcsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vQmxpbmtJRC9ibGlua2lkLXBob25lZ2FwJyxcbiAgaW5zdGFsbDpcbiAgICAnaW9uaWMgY29yZG92YSBwbHVnaW4gYWRkIGJsaW5raWQtY29yZG92YSAtLXZhcmlhYmxlIENBTUVSQV9VU0FHRV9ERVNDUklQVElPTj1cIkVuYWJsZSB5b3VyIGNhbWVyYSBzbyB0aGF0IHlvdSBjYW4gc2NhbiB5b3VyIElEIHRvIHZhbGlkYXRlIHlvdXIgYWNjb3VudFwiJyxcbiAgcGxhdGZvcm1zOiBbJ2lPUycsICdBbmRyb2lkJ11cbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQmxpbmtJZCBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcbiAgLyoqXG4gICAqIE9wZW5zIHRoZSBjYW1lcmEgZGlhbG9nIGFuZCBhdHRlbXB0cyB0byBzY2FuIGEgYmFyY29kZS9kb2N1bWVudFxuICAgKiBAcGFyYW0gb3ZlcmxheVNldHRpbmdzIHtPdmVybGF5U2V0dGluZ3N9IGZvciBjYW1lcmEgb3ZlcmxheSBjdXN0b21pemF0aW9uXG4gICAqIEBwYXJhbSByZWNvZ25pemVyQ29sbGVjdGlvbiB7UmVjb2duaXplckNvbGxlY3Rpb259IGNvbGxlY3Rpb24gb2YgcmVjb2duaXplcnMgdG8gc2NhbiB3aXRoXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGJvb2xlYW4+fVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIGNhbGxiYWNrT3JkZXI6ICdyZXZlcnNlJ1xuICB9KVxuICBzY2FuV2l0aENhbWVyYShcbiAgICBvdmVybGF5U2V0dGluZ3M6IE92ZXJsYXlTZXR0aW5ncyxcbiAgICByZWNvZ25pemVyQ29sbGVjdGlvbjogUmVjb2duaXplckNvbGxlY3Rpb24sXG4gICAgbGljZW5zZXM6IExpY2Vuc2VzLFxuICApOiBQcm9taXNlPGJvb2xlYW4+IHsgcmV0dXJuOyB9XG5cbiAgQENvcmRvdmFQcm9wZXJ0eSgpIERhdGU6IERhdGVDdG9yO1xuICBAQ29yZG92YVByb3BlcnR5KCkgUG9pbnQ6IFBvaW50Q3RvcjtcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIFF1YWRyaWxhdGVyYWw6IFF1YWRyaWxhdGVyYWxDdG9yO1xuXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBCYXJjb2RlT3ZlcmxheVNldHRpbmdzOiBCYXJjb2RlT3ZlcmxheVNldHRpbmdzQ3RvcjtcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIERvY3VtZW50T3ZlcmxheVNldHRpbmdzOiBEb2N1bWVudE92ZXJsYXlTZXR0aW5nc0N0b3I7XG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBEb2N1bWVudFZlcmlmaWNhdGlvbk92ZXJsYXlTZXR0aW5nczogRG9jdW1lbnRWZXJpZmljYXRpb25PdmVybGF5U2V0dGluZ3NDdG9yO1xuICBAQ29yZG92YVByb3BlcnR5KCkgQmxpbmtDYXJkT3ZlcmxheVNldHRpbmdzOiBCbGlua0NhcmRPdmVybGF5U2V0dGluZ3NDdG9yO1xuXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBSZWNvZ25pemVyQ29sbGVjdGlvbjogUmVjb2duaXplckNvbGxlY3Rpb25DdG9yO1xuXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBCYXJjb2RlUmVjb2duaXplclJlc3VsdDogQmFyY29kZVJlY29nbml6ZXJSZXN1bHRDdG9yO1xuICBAQ29yZG92YVByb3BlcnR5KCkgQmFyY29kZVJlY29nbml6ZXI6IEJhcmNvZGVSZWNvZ25pemVyQ3RvcjtcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIFN1Y2Nlc3NGcmFtZUdyYWJiZXJSZWNvZ25pemVyUmVzdWx0OiBTdWNjZXNzRnJhbWVHcmFiYmVyUmVjb2duaXplclJlc3VsdEN0b3I7XG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBTdWNjZXNzRnJhbWVHcmFiYmVyUmVjb2duaXplcjogU3VjY2Vzc0ZyYW1lR3JhYmJlclJlY29nbml6ZXJDdG9yO1xuXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBBdXN0cmFsaWFEbEJhY2tSZWNvZ25pemVyUmVzdWx0OiBBdXN0cmFsaWFEbEJhY2tSZWNvZ25pemVyUmVzdWx0Q3RvcjtcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIEF1c3RyYWxpYURsQmFja1JlY29nbml6ZXI6IEF1c3RyYWxpYURsQmFja1JlY29nbml6ZXJDdG9yO1xuICBAQ29yZG92YVByb3BlcnR5KCkgQXVzdHJhbGlhRGxGcm9udFJlY29nbml6ZXJSZXN1bHQ6IEF1c3RyYWxpYURsRnJvbnRSZWNvZ25pemVyUmVzdWx0Q3RvcjtcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIEF1c3RyYWxpYURsRnJvbnRSZWNvZ25pemVyOiBBdXN0cmFsaWFEbEZyb250UmVjb2duaXplckN0b3I7XG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBBdXN0cmlhQ29tYmluZWRSZWNvZ25pemVyUmVzdWx0OiBBdXN0cmlhQ29tYmluZWRSZWNvZ25pemVyUmVzdWx0Q3RvcjtcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIEF1c3RyaWFDb21iaW5lZFJlY29nbml6ZXI6IEF1c3RyaWFDb21iaW5lZFJlY29nbml6ZXJDdG9yO1xuICBAQ29yZG92YVByb3BlcnR5KCkgQXVzdHJpYURsRnJvbnRSZWNvZ25pemVyUmVzdWx0OiBBdXN0cmlhRGxGcm9udFJlY29nbml6ZXJSZXN1bHRDdG9yO1xuICBAQ29yZG92YVByb3BlcnR5KCkgQXVzdHJpYURsRnJvbnRSZWNvZ25pemVyOiBBdXN0cmlhRGxGcm9udFJlY29nbml6ZXJDdG9yO1xuICBAQ29yZG92YVByb3BlcnR5KCkgQXVzdHJpYUlkQmFja1JlY29nbml6ZXJSZXN1bHQ6IEF1c3RyaWFJZEJhY2tSZWNvZ25pemVyUmVzdWx0Q3RvcjtcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIEF1c3RyaWFJZEJhY2tSZWNvZ25pemVyOiBBdXN0cmlhSWRCYWNrUmVjb2duaXplckN0b3I7XG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBBdXN0cmlhSWRGcm9udFJlY29nbml6ZXJSZXN1bHQ6IEF1c3RyaWFJZEZyb250UmVjb2duaXplclJlc3VsdEN0b3I7XG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBBdXN0cmlhSWRGcm9udFJlY29nbml6ZXI6IEF1c3RyaWFJZEZyb250UmVjb2duaXplckN0b3I7XG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBBdXN0cmlhUGFzc3BvcnRSZWNvZ25pemVyUmVzdWx0OiBBdXN0cmlhUGFzc3BvcnRSZWNvZ25pemVyUmVzdWx0Q3RvcjtcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIEF1c3RyaWFQYXNzcG9ydFJlY29nbml6ZXI6IEF1c3RyaWFQYXNzcG9ydFJlY29nbml6ZXJDdG9yO1xuICBAQ29yZG92YVByb3BlcnR5KCkgQmxpbmtDYXJkRWxpdGVSZWNvZ25pemVyOiBCbGlua0NhcmRFbGl0ZVJlY29nbml6ZXJDdG9yO1xuICBAQ29yZG92YVByb3BlcnR5KCkgQmxpbmtDYXJkRWxpdGVSZWNvZ25pemVyUmVzdWx0OiBCbGlua0NhcmRFbGl0ZVJlY29nbml6ZXJSZXN1bHRDdG9yO1xuICBAQ29yZG92YVByb3BlcnR5KCkgQmxpbmtDYXJkUmVjb2duaXplclJlc3VsdDogQmxpbmtDYXJkUmVjb2duaXplclJlc3VsdEN0b3I7XG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBCbGlua0NhcmRSZWNvZ25pemVyOiBCbGlua0NhcmRSZWNvZ25pemVyQ3RvcjtcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIENvbG9tYmlhRGxGcm9udFJlY29nbml6ZXJSZXN1bHQ6IENvbG9tYmlhRGxGcm9udFJlY29nbml6ZXJSZXN1bHRDdG9yO1xuICBAQ29yZG92YVByb3BlcnR5KCkgQ29sb21iaWFJZEJhY2tSZWNvZ25pemVyUmVzdWx0OiBDb2xvbWJpYUlkQmFja1JlY29nbml6ZXJSZXN1bHRDdG9yO1xuICBAQ29yZG92YVByb3BlcnR5KCkgQ29sb21iaWFJZEJhY2tSZWNvZ25pemVyOiBDb2xvbWJpYUlkQmFja1JlY29nbml6ZXJDdG9yO1xuICBAQ29yZG92YVByb3BlcnR5KCkgQ29sb21iaWFJZEZyb250UmVjb2duaXplclJlc3VsdDogQ29sb21iaWFJZEZyb250UmVjb2duaXplclJlc3VsdEN0b3I7XG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBDb2xvbWJpYUlkRnJvbnRSZWNvZ25pemVyOiBDb2xvbWJpYUlkRnJvbnRSZWNvZ25pemVyQ3RvcjtcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIENyb2F0aWFDb21iaW5lZFJlY29nbml6ZXJSZXN1bHQ6IENyb2F0aWFDb21iaW5lZFJlY29nbml6ZXJSZXN1bHRDdG9yO1xuICBAQ29yZG92YVByb3BlcnR5KCkgQ3JvYXRpYUlkQmFja1JlY29nbml6ZXJSZXN1bHQ6IENyb2F0aWFJZEJhY2tSZWNvZ25pemVyUmVzdWx0Q3RvcjtcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIENyb2F0aWFJZEZyb250UmVjb2duaXplclJlc3VsdDogQ3JvYXRpYUlkRnJvbnRSZWNvZ25pemVyUmVzdWx0Q3RvcjtcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIEN5cHJ1c0lkQmFja1JlY29nbml6ZXJSZXN1bHQ6IEN5cHJ1c0lkQmFja1JlY29nbml6ZXJSZXN1bHRDdG9yO1xuICBAQ29yZG92YVByb3BlcnR5KCkgQ3lwcnVzSWRCYWNrUmVjb2duaXplcjogQ3lwcnVzSWRCYWNrUmVjb2duaXplckN0b3I7XG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBDeXBydXNJZEZyb250UmVjb2duaXplclJlc3VsdDogQ3lwcnVzSWRGcm9udFJlY29nbml6ZXJSZXN1bHRDdG9yO1xuICBAQ29yZG92YVByb3BlcnR5KCkgQ3lwcnVzSWRGcm9udFJlY29nbml6ZXI6IEN5cHJ1c0lkRnJvbnRSZWNvZ25pemVyQ3RvcjtcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIEN6ZWNoaWFDb21iaW5lZFJlY29nbml6ZXJSZXN1bHQ6IEN6ZWNoaWFDb21iaW5lZFJlY29nbml6ZXJSZXN1bHRDdG9yO1xuICBAQ29yZG92YVByb3BlcnR5KCkgQ3plY2hpYUlkQmFja1JlY29nbml6ZXJSZXN1bHQ6IEN6ZWNoaWFJZEJhY2tSZWNvZ25pemVyUmVzdWx0Q3RvcjtcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIERvY3VtZW50RmFjZVJlY29nbml6ZXJSZXN1bHQ6IERvY3VtZW50RmFjZVJlY29nbml6ZXJSZXN1bHRDdG9yO1xuICBAQ29yZG92YVByb3BlcnR5KCkgRWd5cHRJZEZyb250UmVjb2duaXplclJlc3VsdDogRWd5cHRJZEZyb250UmVjb2duaXplclJlc3VsdEN0b3I7XG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBFZ3lwdElkRnJvbnRSZWNvZ25pemVyOiBFZ3lwdElkRnJvbnRSZWNvZ25pemVyQ3RvcjtcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIEV1ZGxSZWNvZ25pemVyUmVzdWx0OiBFdWRsUmVjb2duaXplclJlc3VsdEN0b3I7XG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBHZXJtYW55Q29tYmluZWRSZWNvZ25pemVyUmVzdWx0OiBHZXJtYW55Q29tYmluZWRSZWNvZ25pemVyUmVzdWx0Q3RvcjtcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIEdlcm1hbnlDb21iaW5lZFJlY29nbml6ZXI6IEdlcm1hbnlDb21iaW5lZFJlY29nbml6ZXJDdG9yO1xuICBAQ29yZG92YVByb3BlcnR5KCkgR2VybWFueURsQmFja1JlY29nbml6ZXJSZXN1bHQ6IEdlcm1hbnlEbEJhY2tSZWNvZ25pemVyUmVzdWx0Q3RvcjtcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIEdlcm1hbnlEbEJhY2tSZWNvZ25pemVyOiBHZXJtYW55RGxCYWNrUmVjb2duaXplckN0b3I7XG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBHZXJtYW55SWRCYWNrUmVjb2duaXplclJlc3VsdDogR2VybWFueUlkQmFja1JlY29nbml6ZXJSZXN1bHRDdG9yO1xuICBAQ29yZG92YVByb3BlcnR5KCkgR2VybWFueUlkQmFja1JlY29nbml6ZXI6IEdlcm1hbnlJZEJhY2tSZWNvZ25pemVyQ3RvcjtcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIEdlcm1hbnlJZEZyb250UmVjb2duaXplclJlc3VsdDogR2VybWFueUlkRnJvbnRSZWNvZ25pemVyUmVzdWx0Q3RvcjtcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIEdlcm1hbnlJZEZyb250UmVjb2duaXplcjogR2VybWFueUlkRnJvbnRSZWNvZ25pemVyQ3RvcjtcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIEdlcm1hbnlPbGRJZFJlY29nbml6ZXJSZXN1bHQ6IEdlcm1hbnlPbGRJZFJlY29nbml6ZXJSZXN1bHRDdG9yO1xuICBAQ29yZG92YVByb3BlcnR5KCkgR2VybWFueU9sZElkUmVjb2duaXplcjogR2VybWFueU9sZElkUmVjb2duaXplckN0b3I7XG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBHZXJtYW55UGFzc3BvcnRSZWNvZ25pemVyUmVzdWx0OiBHZXJtYW55UGFzc3BvcnRSZWNvZ25pemVyUmVzdWx0Q3RvcjtcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIEdlcm1hbnlQYXNzcG9ydFJlY29nbml6ZXI6IEdlcm1hbnlQYXNzcG9ydFJlY29nbml6ZXJDdG9yO1xuICBAQ29yZG92YVByb3BlcnR5KCkgSG9uZ0tvbmdJZEZyb250UmVjb2duaXplclJlc3VsdDogSG9uZ0tvbmdJZEZyb250UmVjb2duaXplclJlc3VsdEN0b3I7XG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBIb25nS29uZ0lkRnJvbnRSZWNvZ25pemVyOiBIb25nS29uZ0lkRnJvbnRSZWNvZ25pemVyQ3RvcjtcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIElrYWRSZWNvZ25pemVyUmVzdWx0OiBJa2FkUmVjb2duaXplclJlc3VsdEN0b3I7XG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBJa2FkUmVjb2duaXplcjogSWthZFJlY29nbml6ZXJDdG9yO1xuICBAQ29yZG92YVByb3BlcnR5KCkgSW5kb25lc2lhSWRGcm9udFJlY29nbml6ZXJSZXN1bHQ6IEluZG9uZXNpYUlkRnJvbnRSZWNvZ25pemVyUmVzdWx0Q3RvcjtcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIEluZG9uZXNpYUlkRnJvbnRSZWNvZ25pemVyOiBJbmRvbmVzaWFJZEZyb250UmVjb2duaXplckN0b3I7XG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBJcmVsYW5kRGxGcm9udFJlY29nbml6ZXJSZXN1bHQ6IElyZWxhbmREbEZyb250UmVjb2duaXplclJlc3VsdEN0b3I7XG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBJcmVsYW5kRGxGcm9udFJlY29nbml6ZXI6IElyZWxhbmREbEZyb250UmVjb2duaXplckN0b3I7XG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBJdGFseURsRnJvbnRSZWNvZ25pemVyUmVzdWx0OiBJdGFseURsRnJvbnRSZWNvZ25pemVyUmVzdWx0Q3RvcjtcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIEl0YWx5RGxGcm9udFJlY29nbml6ZXI6IEl0YWx5RGxGcm9udFJlY29nbml6ZXJDdG9yO1xuICBAQ29yZG92YVByb3BlcnR5KCkgSm9yZGFuQ29tYmluZWRSZWNvZ25pemVyUmVzdWx0OiBKb3JkYW5Db21iaW5lZFJlY29nbml6ZXJSZXN1bHRDdG9yO1xuICBAQ29yZG92YVByb3BlcnR5KCkgSm9yZGFuQ29tYmluZWRSZWNvZ25pemVyOiBKb3JkYW5Db21iaW5lZFJlY29nbml6ZXJDdG9yO1xuICBAQ29yZG92YVByb3BlcnR5KCkgSm9yZGFuSWRCYWNrUmVjb2duaXplclJlc3VsdDogSm9yZGFuSWRCYWNrUmVjb2duaXplclJlc3VsdEN0b3I7XG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBKb3JkYW5JZEJhY2tSZWNvZ25pemVyOiBKb3JkYW5JZEJhY2tSZWNvZ25pemVyQ3RvcjtcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIEpvcmRhbklkRnJvbnRSZWNvZ25pemVyUmVzdWx0OiBKb3JkYW5JZEZyb250UmVjb2duaXplclJlc3VsdEN0b3I7XG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBKb3JkYW5JZEZyb250UmVjb2duaXplcjogSm9yZGFuSWRGcm9udFJlY29nbml6ZXJDdG9yO1xuICBAQ29yZG92YVByb3BlcnR5KCkgS3V3YWl0SWRCYWNrUmVjb2duaXplclJlc3VsdDogS3V3YWl0SWRCYWNrUmVjb2duaXplclJlc3VsdEN0b3I7XG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBLdXdhaXRJZEJhY2tSZWNvZ25pemVyOiBLdXdhaXRJZEJhY2tSZWNvZ25pemVyQ3RvcjtcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIEt1d2FpdElkRnJvbnRSZWNvZ25pemVyUmVzdWx0OiBLdXdhaXRJZEZyb250UmVjb2duaXplclJlc3VsdEN0b3I7XG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBLdXdhaXRJZEZyb250UmVjb2duaXplcjogS3V3YWl0SWRGcm9udFJlY29nbml6ZXJDdG9yO1xuICBAQ29yZG92YVByb3BlcnR5KCkgTWFsYXlzaWFEbEZyb250UmVjb2duaXplclJlc3VsdDogTWFsYXlzaWFEbEZyb250UmVjb2duaXplclJlc3VsdEN0b3I7XG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBNYWxheXNpYURsRnJvbnRSZWNvZ25pemVyOiBNYWxheXNpYURsRnJvbnRSZWNvZ25pemVyQ3RvcjtcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIE1hbGF5c2lhTXlUZW50ZXJhUmVjb2duaXplclJlc3VsdDogTWFsYXlzaWFNeVRlbnRlcmFSZWNvZ25pemVyUmVzdWx0Q3RvcjtcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIE1hbGF5c2lhTXlUZW50ZXJhUmVjb2duaXplcjogTWFsYXlzaWFNeVRlbnRlcmFSZWNvZ25pemVyQ3RvcjtcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIE1leGljb1ZvdGVySWRGcm9udFJlY29nbml6ZXJSZXN1bHQ6IE1leGljb1ZvdGVySWRGcm9udFJlY29nbml6ZXJSZXN1bHRDdG9yO1xuICBAQ29yZG92YVByb3BlcnR5KCkgTWV4aWNvVm90ZXJJZEZyb250UmVjb2duaXplcjogTWV4aWNvVm90ZXJJZEZyb250UmVjb2duaXplckN0b3I7XG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBNb3JvY2NvSWRCYWNrUmVjb2duaXplclJlc3VsdDogTW9yb2Njb0lkQmFja1JlY29nbml6ZXJSZXN1bHRDdG9yO1xuICBAQ29yZG92YVByb3BlcnR5KCkgTW9yb2Njb0lkQmFja1JlY29nbml6ZXI6IE1vcm9jY29JZEJhY2tSZWNvZ25pemVyQ3RvcjtcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIE1vcm9jY29JZEZyb250UmVjb2duaXplclJlc3VsdDogTW9yb2Njb0lkRnJvbnRSZWNvZ25pemVyUmVzdWx0Q3RvcjtcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIE1vcm9jY29JZEZyb250UmVjb2duaXplcjogTW9yb2Njb0lkRnJvbnRSZWNvZ25pemVyQ3RvcjtcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIE1ydGRDb21iaW5lZFJlY29nbml6ZXJSZXN1bHQ6IE1ydGRDb21iaW5lZFJlY29nbml6ZXJSZXN1bHRDdG9yO1xuICBAQ29yZG92YVByb3BlcnR5KCkgTXJ0ZENvbWJpbmVkUmVjb2duaXplcjogTXJ0ZENvbWJpbmVkUmVjb2duaXplckN0b3I7XG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBNcnRkUmVjb2duaXplclJlc3VsdDogTXJ0ZFJlY29nbml6ZXJSZXN1bHRDdG9yO1xuICBAQ29yZG92YVByb3BlcnR5KCkgTXJ0ZFJlY29nbml6ZXI6IE1ydGRSZWNvZ25pemVyQ3RvcjtcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIE15S2FkQmFja1JlY29nbml6ZXJSZXN1bHQ6IE15S2FkQmFja1JlY29nbml6ZXJSZXN1bHRDdG9yO1xuICBAQ29yZG92YVByb3BlcnR5KCkgTXlLYWRCYWNrUmVjb2duaXplcjogTXlLYWRCYWNrUmVjb2duaXplckN0b3I7XG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBNeUthZEZyb250UmVjb2duaXplclJlc3VsdDogTXlLYWRGcm9udFJlY29nbml6ZXJSZXN1bHRDdG9yO1xuICBAQ29yZG92YVByb3BlcnR5KCkgTXlLYWRGcm9udFJlY29nbml6ZXI6IE15S2FkRnJvbnRSZWNvZ25pemVyQ3RvcjtcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIE5ld1plYWxhbmREbEZyb250UmVjb2duaXplclJlc3VsdDogTmV3WmVhbGFuZERsRnJvbnRSZWNvZ25pemVyUmVzdWx0Q3RvcjtcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIE5ld1plYWxhbmREbEZyb250UmVjb2duaXplcjogTmV3WmVhbGFuZERsRnJvbnRSZWNvZ25pemVyQ3RvcjtcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIFBkZjQxN1JlY29nbml6ZXJSZXN1bHQ6IFBkZjQxN1JlY29nbml6ZXJSZXN1bHRDdG9yO1xuICBAQ29yZG92YVByb3BlcnR5KCkgUGRmNDE3UmVjb2duaXplcjogUGRmNDE3UmVjb2duaXplckN0b3I7XG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBQb2xhbmRDb21iaW5lZFJlY29nbml6ZXJSZXN1bHQ6IFBvbGFuZENvbWJpbmVkUmVjb2duaXplclJlc3VsdEN0b3I7XG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBQb2xhbmRDb21iaW5lZFJlY29nbml6ZXI6IFBvbGFuZENvbWJpbmVkUmVjb2duaXplckN0b3I7XG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBQb2xhbmRJZEJhY2tSZWNvZ25pemVyUmVzdWx0OiBQb2xhbmRJZEJhY2tSZWNvZ25pemVyUmVzdWx0Q3RvcjtcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIFBvbGFuZElkQmFja1JlY29nbml6ZXI6IFBvbGFuZElkQmFja1JlY29nbml6ZXJDdG9yO1xuICBAQ29yZG92YVByb3BlcnR5KCkgUG9sYW5kSWRGcm9udFJlY29nbml6ZXJSZXN1bHQ6IFBvbGFuZElkRnJvbnRSZWNvZ25pemVyUmVzdWx0Q3RvcjtcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIFBvbGFuZElkRnJvbnRSZWNvZ25pemVyOiBQb2xhbmRJZEZyb250UmVjb2duaXplckN0b3I7XG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBSb21hbmlhSWRGcm9udFJlY29nbml6ZXJSZXN1bHQ6IFJvbWFuaWFJZEZyb250UmVjb2duaXplclJlc3VsdEN0b3I7XG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBSb21hbmlhSWRGcm9udFJlY29nbml6ZXI6IFJvbWFuaWFJZEZyb250UmVjb2duaXplckN0b3I7XG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBTZXJiaWFDb21iaW5lZFJlY29nbml6ZXJSZXN1bHQ6IFNlcmJpYUNvbWJpbmVkUmVjb2duaXplclJlc3VsdEN0b3I7XG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBTZXJiaWFDb21iaW5lZFJlY29nbml6ZXI6IFNlcmJpYUNvbWJpbmVkUmVjb2duaXplckN0b3I7XG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBTZXJiaWFJZEJhY2tSZWNvZ25pemVyUmVzdWx0OiBTZXJiaWFJZEJhY2tSZWNvZ25pemVyUmVzdWx0Q3RvcjtcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIFNlcmJpYUlkQmFja1JlY29nbml6ZXI6IFNlcmJpYUlkQmFja1JlY29nbml6ZXJDdG9yO1xuICBAQ29yZG92YVByb3BlcnR5KCkgU2VyYmlhSWRGcm9udFJlY29nbml6ZXJSZXN1bHQ6IFNlcmJpYUlkRnJvbnRSZWNvZ25pemVyUmVzdWx0Q3RvcjtcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIFNlcmJpYUlkRnJvbnRSZWNvZ25pemVyOiBTZXJiaWFJZEZyb250UmVjb2duaXplckN0b3I7XG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBTaW1OdW1iZXJSZWNvZ25pemVyUmVzdWx0OiBTaW1OdW1iZXJSZWNvZ25pemVyUmVzdWx0Q3RvcjtcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIFNpbU51bWJlclJlY29nbml6ZXI6IFNpbU51bWJlclJlY29nbml6ZXJDdG9yO1xuICBAQ29yZG92YVByb3BlcnR5KCkgU2luZ2Fwb3JlQ2hhbmdpRW1wbG95ZWVJZFJlY29nbml6ZXJSZXN1bHQ6IFNpbmdhcG9yZUNoYW5naUVtcGxveWVlSWRSZWNvZ25pemVyUmVzdWx0Q3RvcjtcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIFNpbmdhcG9yZUNoYW5naUVtcGxveWVlSWRSZWNvZ25pemVyOiBTaW5nYXBvcmVDaGFuZ2lFbXBsb3llZUlkUmVjb2duaXplckN0b3I7XG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBTaW5nYXBvcmVDb21iaW5lZFJlY29nbml6ZXJSZXN1bHQ6IFNpbmdhcG9yZUNvbWJpbmVkUmVjb2duaXplclJlc3VsdEN0b3I7XG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBTaW5nYXBvcmVDb21iaW5lZFJlY29nbml6ZXI6IFNpbmdhcG9yZUNvbWJpbmVkUmVjb2duaXplckN0b3I7XG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBTaW5nYXBvcmVEbEZyb250UmVjb2duaXplclJlc3VsdDogU2luZ2Fwb3JlRGxGcm9udFJlY29nbml6ZXJSZXN1bHRDdG9yO1xuICBAQ29yZG92YVByb3BlcnR5KCkgU2luZ2Fwb3JlRGxGcm9udFJlY29nbml6ZXI6IFNpbmdhcG9yZURsRnJvbnRSZWNvZ25pemVyQ3RvcjtcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIFNpbmdhcG9yZUlkQmFja1JlY29nbml6ZXJSZXN1bHQ6IFNpbmdhcG9yZUlkQmFja1JlY29nbml6ZXJSZXN1bHRDdG9yO1xuICBAQ29yZG92YVByb3BlcnR5KCkgU2luZ2Fwb3JlSWRCYWNrUmVjb2duaXplcjogU2luZ2Fwb3JlSWRCYWNrUmVjb2duaXplckN0b3I7XG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBTaW5nYXBvcmVJZEZyb250UmVjb2duaXplclJlc3VsdDogU2luZ2Fwb3JlSWRGcm9udFJlY29nbml6ZXJSZXN1bHRDdG9yO1xuICBAQ29yZG92YVByb3BlcnR5KCkgU2luZ2Fwb3JlSWRGcm9udFJlY29nbml6ZXI6IFNpbmdhcG9yZUlkRnJvbnRSZWNvZ25pemVyQ3RvcjtcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIFNsb3Zha2lhQ29tYmluZWRSZWNvZ25pemVyUmVzdWx0OiBTbG92YWtpYUNvbWJpbmVkUmVjb2duaXplclJlc3VsdEN0b3I7XG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBTbG92YWtpYUNvbWJpbmVkUmVjb2duaXplcjogU2xvdmFraWFDb21iaW5lZFJlY29nbml6ZXJDdG9yO1xuICBAQ29yZG92YVByb3BlcnR5KCkgU2xvdmFraWFJZEJhY2tSZWNvZ25pemVyUmVzdWx0OiBTbG92YWtpYUlkQmFja1JlY29nbml6ZXJSZXN1bHRDdG9yO1xuICBAQ29yZG92YVByb3BlcnR5KCkgU2xvdmFraWFJZEJhY2tSZWNvZ25pemVyOiBTbG92YWtpYUlkQmFja1JlY29nbml6ZXJDdG9yO1xuICBAQ29yZG92YVByb3BlcnR5KCkgU2xvdmFraWFJZEZyb250UmVjb2duaXplclJlc3VsdDogU2xvdmFraWFJZEZyb250UmVjb2duaXplclJlc3VsdEN0b3I7XG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBTbG92YWtpYUlkRnJvbnRSZWNvZ25pemVyOiBTbG92YWtpYUlkRnJvbnRSZWNvZ25pemVyQ3RvcjtcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIFNsb3ZlbmlhQ29tYmluZWRSZWNvZ25pemVyUmVzdWx0OiBTbG92ZW5pYUNvbWJpbmVkUmVjb2duaXplclJlc3VsdEN0b3I7XG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBTbG92ZW5pYUNvbWJpbmVkUmVjb2duaXplcjogU2xvdmVuaWFDb21iaW5lZFJlY29nbml6ZXJDdG9yO1xuICBAQ29yZG92YVByb3BlcnR5KCkgU2xvdmVuaWFJZEJhY2tSZWNvZ25pemVyUmVzdWx0OiBTbG92ZW5pYUlkQmFja1JlY29nbml6ZXJSZXN1bHRDdG9yO1xuICBAQ29yZG92YVByb3BlcnR5KCkgU2xvdmVuaWFJZEJhY2tSZWNvZ25pemVyOiBTbG92ZW5pYUlkQmFja1JlY29nbml6ZXJDdG9yO1xuICBAQ29yZG92YVByb3BlcnR5KCkgU2xvdmVuaWFJZEZyb250UmVjb2duaXplclJlc3VsdDogU2xvdmVuaWFJZEZyb250UmVjb2duaXplclJlc3VsdEN0b3I7XG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBTbG92ZW5pYUlkRnJvbnRSZWNvZ25pemVyOiBTbG92ZW5pYUlkRnJvbnRSZWNvZ25pemVyQ3RvcjtcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIFNwYWluRGxGcm9udFJlY29nbml6ZXJSZXN1bHQ6IFNwYWluRGxGcm9udFJlY29nbml6ZXJSZXN1bHRDdG9yO1xuICBAQ29yZG92YVByb3BlcnR5KCkgU3BhaW5EbEZyb250UmVjb2duaXplcjogU3BhaW5EbEZyb250UmVjb2duaXplckN0b3I7XG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBTd2VkZW5EbEZyb250UmVjb2duaXplclJlc3VsdDogU3dlZGVuRGxGcm9udFJlY29nbml6ZXJSZXN1bHRDdG9yO1xuICBAQ29yZG92YVByb3BlcnR5KCkgU3dlZGVuRGxGcm9udFJlY29nbml6ZXI6IFN3ZWRlbkRsRnJvbnRSZWNvZ25pemVyQ3RvcjtcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIFN3aXR6ZXJsYW5kRGxGcm9udFJlY29nbml6ZXJSZXN1bHQ6IFN3aXR6ZXJsYW5kRGxGcm9udFJlY29nbml6ZXJSZXN1bHRDdG9yO1xuICBAQ29yZG92YVByb3BlcnR5KCkgU3dpdHplcmxhbmREbEZyb250UmVjb2duaXplcjogU3dpdHplcmxhbmREbEZyb250UmVjb2duaXplckN0b3I7XG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBTd2l0emVybGFuZERsQmFja1JlY29nbml6ZXJSZXN1bHQ6IFN3aXR6ZXJsYW5kRGxCYWNrUmVjb2duaXplclJlc3VsdEN0b3I7XG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBTd2l0emVybGFuZERsQmFja1JlY29nbml6ZXI6IFN3aXR6ZXJsYW5kRGxCYWNrUmVjb2duaXplckN0b3I7XG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBTd2l0emVybGFuZElkRnJvbnRSZWNvZ25pemVyUmVzdWx0OiBTd2l0emVybGFuZElkRnJvbnRSZWNvZ25pemVyUmVzdWx0Q3RvcjtcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIFN3aXR6ZXJsYW5kSWRGcm9udFJlY29nbml6ZXI6IFN3aXR6ZXJsYW5kSWRGcm9udFJlY29nbml6ZXJDdG9yO1xuICBAQ29yZG92YVByb3BlcnR5KCkgU3dpdHplcmxhbmRQYXNzcG9ydFJlY29nbml6ZXJSZXN1bHQ6IFN3aXR6ZXJsYW5kUGFzc3BvcnRSZWNvZ25pemVyUmVzdWx0Q3RvcjtcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIFN3aXR6ZXJsYW5kUGFzc3BvcnRSZWNvZ25pemVyOiBTd2l0emVybGFuZFBhc3Nwb3J0UmVjb2duaXplckN0b3I7XG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBVbml0ZWRBcmFiRW1pcmF0ZXNEbEZyb250UmVjb2duaXplclJlc3VsdDogVW5pdGVkQXJhYkVtaXJhdGVzRGxGcm9udFJlY29nbml6ZXJSZXN1bHRDdG9yO1xuICBAQ29yZG92YVByb3BlcnR5KCkgVW5pdGVkQXJhYkVtaXJhdGVzRGxGcm9udFJlY29nbml6ZXI6IFVuaXRlZEFyYWJFbWlyYXRlc0RsRnJvbnRSZWNvZ25pemVyQ3RvcjtcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIFVuaXRlZEFyYWJFbWlyYXRlc0lkQmFja1JlY29nbml6ZXJSZXN1bHQ6IFVuaXRlZEFyYWJFbWlyYXRlc0lkQmFja1JlY29nbml6ZXJSZXN1bHRDdG9yO1xuICBAQ29yZG92YVByb3BlcnR5KCkgVW5pdGVkQXJhYkVtaXJhdGVzSWRCYWNrUmVjb2duaXplcjogVW5pdGVkQXJhYkVtaXJhdGVzSWRCYWNrUmVjb2duaXplckN0b3I7XG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBVbml0ZWRBcmFiRW1pcmF0ZXNJZEZyb250UmVjb2duaXplclJlc3VsdDogVW5pdGVkQXJhYkVtaXJhdGVzSWRGcm9udFJlY29nbml6ZXJSZXN1bHRDdG9yO1xuICBAQ29yZG92YVByb3BlcnR5KCkgVW5pdGVkQXJhYkVtaXJhdGVzSWRGcm9udFJlY29nbml6ZXI6IFVuaXRlZEFyYWJFbWlyYXRlc0lkRnJvbnRSZWNvZ25pemVyQ3RvcjtcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIFZpblJlY29nbml6ZXJSZXN1bHQ6IFZpblJlY29nbml6ZXJSZXN1bHRDdG9yO1xuICBAQ29yZG92YVByb3BlcnR5KCkgVmluUmVjb2duaXplcjogVmluUmVjb2duaXplckN0b3I7XG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBVc2RsUmVjb2duaXplclJlc3VsdDogVXNkbFJlY29nbml6ZXJSZXN1bHRDdG9yO1xuICBAQ29yZG92YVByb3BlcnR5KCkgVXNkbFJlY29nbml6ZXI6IFVzZGxSZWNvZ25pemVyQ3RvcjtcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIFVzZGxDb21iaW5lZFJlY29nbml6ZXJSZXN1bHQ6IFVzZGxDb21iaW5lZFJlY29nbml6ZXJSZXN1bHRDdG9yO1xuICBAQ29yZG92YVByb3BlcnR5KCkgVXNkbENvbWJpbmVkUmVjb2duaXplcjogVXNkbENvbWJpbmVkUmVjb2duaXplckN0b3I7XG59XG4iXX0=