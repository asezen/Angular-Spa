import { Component, Inject } from '@angular/core';
import {Http, Headers} from '@angular/http';
import { RequestOptions } from '@angular/http/src/base_request_options';
import {HttpClient} from '../../../app/utilities/HttpClient';

@Component({
    selector: 'fetchdata',
    templateUrl: './fetchdata.component.html'
})
export class FetchDataComponent {
    public forecasts: WeatherForecast[];

    constructor(httpClient: HttpClient) //, @Inject('BASE_URL') baseUrl: string
    { 
        let baseUrl = "http://localhost:5000";
 
        httpClient.get(baseUrl + 'api/SampleData/WeatherForecasts').subscribe(result => {
            this.forecasts = result.json() as WeatherForecast[];
        }, error => console.error(error));
        
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
}

interface WeatherForecast {
    dateFormatted: string;
    temperatureC: number;
    temperatureF: number;
    summary: string;
}
