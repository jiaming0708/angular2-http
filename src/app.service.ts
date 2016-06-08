import { Injectable }    from '@angular/core';
import { Headers, Http, Jsonp, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class AppService{
    constructor(private _http: Http, private _jsonp: Jsonp){}

    getCurrentTime(){
        let header = new Headers ({
            'Access-Control-Allow-Origin': '*',
            'X-Requested-With': 'XMLHttpRequest',
            'Content-Type': 'application/json'
        });
        let options = new RequestOptions({headers:header});
        //return this._http.post('http://192.168.100.157/everestapi02/user/GetUserData', 'jimmy')
        return this._http.get('http://date.jsontest.com', options)
        .toPromise()
        .then(res => res.json())
        .catch(this.handleError);
    }

    private handleError(error: any) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}