import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Country } from '../models/pais';

@Injectable({
  providedIn: 'root',
})
export class PaisService {
  private restAPI = 'http://api.countrylayer.com/v2/';

  constructor(private $http: HttpClient) {}

  buscarPais(termino: string): Observable<Country[]> {
    const url = this.restAPI + 'name/' + termino;
    const params = new HttpParams().set(
      'access_key',
      '2969ae60178eb4d57274658cb503fd04'
    );
    //return this.$http.get<Country[]>(url, {params});
    return of([
      { alpha2Code: '123', name: 'Mexico', capital: 'DF', population: 123456 },
    ]);
  }

  /**
   * buscarPorCapital
termino: string : Observable<Country[]>  */
  public buscarPorCapital(termino: string): Observable<Country[]> {
    const url = this.restAPI + 'capital/' + termino;
    const params = new HttpParams().set(
      'access_key',
      '2969ae60178eb4d57274658cb503fd04'
    );
    // return this.$http.get<Country[]>(url, {params});
    return of([
      {
        alpha2Code: '123',
        name: 'Mexico',
        capital: 'CDMX',
        population: 123456,
      },
    ]);
  }

    /**
   * buscarPorRegion
termino: string : Observable<Country[]>  */
public buscarPorRegion(termino: string): Observable<Country[]> {
  const url = this.restAPI + 'region/' + termino;
  const params = new HttpParams().set(
    'access_key',
    '2969ae60178eb4d57274658cb503fd04'
  );
   return this.$http.get<Country[]>(url, {params});
  // return of([{alpha2Code: '123',name: 'Mexico',capital: 'CDMX',population: 123456,},]);
}


}
