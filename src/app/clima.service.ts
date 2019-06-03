import { Clima } from './clima';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import { Injectable } from '@angular/core';
import { URL_API } from './darksky.api';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { of } from 'rxjs';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
    providedIn: 'root'
})
export class ClimaService {

    constructor(private http: HttpClient) {
    }

    getClima2(latitude: number, longitude: number): Observable<Clima[]> {
        return this.http.get<Clima[]>(`${URL_API}/${latitude},${longitude}`)
            .pipe(
                tap(clima => console.log('Funcionou....')),
                catchError(this.handleError('getProdutos', []))
            );
    }

    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {

            console.error(error);

            return of(result as T);
        };
    }
}