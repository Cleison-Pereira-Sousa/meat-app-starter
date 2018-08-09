import { Restaurant } from './restaurant/restaurant.model';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { MEAT_API } from '../app.api';

import { ErrorHandler } from '../app.error-handler'

@Injectable()

export class RestaurantsService {

    rest: Restaurant[]

    constructor(private http: Http) {}

    restaurants(): Observable<Restaurant[]> {
        return this.http.get(`${MEAT_API}/restaurants`)
          .map(res => res.json())
          .catch(ErrorHandler.handlerError);
    }

    restaurantById(id: string): Observable<Restaurant> {
        return this.http.get(`${MEAT_API}/restaurants/${id}`)
            .map(rep => rep.json())
            .catch(ErrorHandler.handlerError);
    }
}