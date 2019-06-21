import { Clima } from './clima';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import { Injectable } from '@angular/core';
import { URL_API } from './advisor.api';
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

    public clima: Clima;

    constructor(private http: HttpClient) {
    }

    //Modelo de consumir API 01 (ERRO 404 - Bad Request)
    public getClima(): Promise<Clima[]> {
        //Efeturar uma requisição http
        return this.http.get(`${URL_API})///ofertas?destaque=true`)
            .toPromise()
            .then((resposta: Response) => resposta.json())
        //Retornar um promisse Oferta[]
    }

    //Modelo de consumir API 02
    getClima2(): Observable<any> {
        return this.http.get<any>(`${URL_API}`)///${latitude},${longitude}`)
            .pipe(
                tap(resp => {
                    //return console.log('Retorno API --> ', clima);
                    return resp;
                }),
                catchError(this.handleError('getClima -->', []))
            );
    }

    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {

            console.error(error);

            return of(result as T);
        };
    }
}