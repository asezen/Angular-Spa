var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { Injectable, Inject } from '@angular/core';
import { Http, Headers } from '@angular/http';
var HttpClient = /** @class */ (function () {
    function HttpClient(http, baseUrl) {
        var _this = this;
        this.baseUrl = "";
        this.token = "";
        debugger;
        this.baseUrl = baseUrl;
        this.http = http;
        this.http.get(this.baseUrl + '/api/token?username=Alper&password=Alper', {}).subscribe(function (result) {
            _this.token = result.json().access_token;
        }, function (error) { return console.error(error); });
    }
    HttpClient.prototype.createAuthorizationHeader = function (headers) {
        headers.append('Authorization', 'bearer ' + this.token);
    };
    HttpClient.prototype.get = function (url) {
        debugger;
        var headers = new Headers();
        this.createAuthorizationHeader(headers);
        return this.http.get(url, {
            headers: headers
        });
    };
    HttpClient.prototype.post = function (url, data) {
        var headers = new Headers();
        this.createAuthorizationHeader(headers);
        return this.http.post(url, data, {
            headers: headers
        });
    };
    HttpClient = __decorate([
        Injectable(),
        __param(1, Inject('BASE_URL')),
        __metadata("design:paramtypes", [Http, String])
    ], HttpClient);
    return HttpClient;
}());
export { HttpClient };
//# sourceMappingURL=HttpClient.js.map