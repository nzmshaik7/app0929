import { Injectable } from '@angular/core';
import { DonutInfoInterface, DonutListResultsInterface } from './donuts-list-interface';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { DonutItemInterface } from './donut-item-interface';

@Injectable({
  providedIn: 'root'
})
export class DonutsListService {

  constructor(private http: HttpClient) { }

  apiUrl: string = 'https://grandcircusco.github.io/demo-apis/donuts.json';
  getDonutsList(): Observable<any> {
    return this.http.get<any>(this.apiUrl).pipe(map (res => res.results));
  } 

}
