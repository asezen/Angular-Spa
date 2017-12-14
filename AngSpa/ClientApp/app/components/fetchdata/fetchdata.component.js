var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { HttpClient } from '../../../app/utilities/HttpClient';
var FetchDataComponent = /** @class */ (function () {
    function FetchDataComponent(httpClient) {
        var _this = this;
        var baseUrl = "http://localhost:5000";
        httpClient.get(baseUrl + 'api/SampleData/WeatherForecasts').subscribe(function (result) {
            _this.forecasts = result.json();
        }, function (error) { return console.error(error); });
        // let headers = new Headers();
        // headers.append('Authorization', 'bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IkFscGVyIiwibmJmIjoxNTEzMDEwMjk1LCJleHAiOjE1MTMwMTE0OTUsImlhdCI6MTUxMzAxMDI5NSwiaXNzIjoiaXNzdWVyIiwiYXVkIjoiYXVkaWVuY2UifQ.zpOZTLFjzSYzKHkrQpHWWhOartHsTDZt0dOZllFjxdUsYMJyBvrL8RW3VSosZOLCmlaHGb0-bBtDP8azVklYbfBRJEzraT9l2Ve4S3p2S9smMCsrT4Hyu6RVCgqT6nWvt5aRpg6N6N0EDUjsS12P6t96B7FH5c3ANjDJwHfyzuez9yeGhGw3GMwk_Bqeo0FAMF89fk9EEYnkRUVYISpsoRYJdk3IkqeZYZAORKVSZyl2SfN1cdUoy8CD1eXvv17dhel0uETF2Y4leX6AWJrxDKwEq_aLYJiWHsuWCuGQIS9Gj1vbuOnG-IRfr40l8j_vvDEiu-rCFLatc9Fq0Bp6KA'); 
        // http.get(baseUrl + 'api/SampleData/WeatherForecasts', 
        // {
        //     headers:headers
        // }
        // ).subscribe(result => {
        //     this.forecasts = result.json() as WeatherForecast[];
        // }, error => console.error(error));
    }
    FetchDataComponent = __decorate([
        Component({
            selector: 'fetchdata',
            templateUrl: './fetchdata.component.html'
        }),
        __metadata("design:paramtypes", [HttpClient])
    ], FetchDataComponent);
    return FetchDataComponent;
}());
export { FetchDataComponent };
//# sourceMappingURL=fetchdata.component.js.map