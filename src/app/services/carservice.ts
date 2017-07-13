import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Car } from '../domain/car';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class CarService {
    
    constructor(private http: Http) {}

    getCarsSmall() {
        return this.http.get('assets/data/cars-small.json')
                    .toPromise()
                    .then(res => <Car[]> res.json().data)
                    .then(data => { return data; });
    }
}