import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of, tap } from 'rxjs';
import { Country } from '../interfaces/country.interface';
import { CacheStore } from '../interfaces/cache-store.interface';
import { Region } from '../interfaces/region.type';

@Injectable({ providedIn: 'root' })
export class CountriesService {

  private urlApi: string = 'https://restcountries.com/v3.1/'

  public cacheStore :CacheStore={
    byCapital: { term: '', countries: []},
    byCountry: { term: '', countries: []},
    byRegion: { region: '', countries: []}
  }


  constructor(private httpClient: HttpClient) {
    this.loadFromLocalStorage()
   }

  private saveToLocalStorage (){
    localStorage.setItem( 'cacheStore', JSON.stringify(this.cacheStore))
  }

  private loadFromLocalStorage(){
    if( !localStorage.getItem('cacheStore')) return

    this.cacheStore = JSON.parse( localStorage.getItem('cacheStore')!)
  }


  private getCountriesRequest(url: string): Observable<Country[]> {

    return this.httpClient.get<Country[]>(url)
      .pipe(
        catchError(() => of([])),
      )
  }

  searchCountryByAlphaCode(code: string): Observable<Country | null> {

    const url = `${this.urlApi}/alpha/${code}`

    return this.httpClient.get<Country[]>(url)
      .pipe(
        map(countries => countries.length > 0 ? countries[0] : null),
        catchError(
          () => of(null)
        )
      )
  }

  searchRegion(term: Region): Observable<Country[]> {

    const url = `${this.urlApi}/region/${term}`

    return this.getCountriesRequest(url)
    .pipe(
      tap( countries => this.cacheStore.byRegion = {region: term, countries: countries }),
      tap( ()=> this.saveToLocalStorage())
    )

  }

  searchCountry(term: string): Observable<Country[]> {

    const url = `${this.urlApi}/name/${term}`

    return this.getCountriesRequest(url)
    .pipe(
      tap( countries => this.cacheStore.byCountry = { term: term, countries: countries}),
      tap( ()=> this.saveToLocalStorage())
     )

  }

  searchCapital(term: string): Observable<Country[]> {

    const url = `${this.urlApi}/capital/${term}`

    return this.getCountriesRequest(url)
    .pipe(
      tap( countries => this.cacheStore.byCapital = { term: term, countries: countries}),
      tap( ()=> this.saveToLocalStorage())
    )

  }
}
