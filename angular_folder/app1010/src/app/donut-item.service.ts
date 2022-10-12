import { Injectable } from '@angular/core';
import { DonutItemInterface } from './donut-item-interface';
import { DonutInfoInterface } from './donuts-list-interface';
import { DonutsListService } from './donuts-list.service';
import { HttpClient } from '@angular/common/http';
import { Observable, of, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DonutItemService {

  constructor(private donutsListService: DonutsListService, private http: HttpClient) { }

  getDonutItemDetails(donutItemId: number): Observable<any>{
    let donutInfoFromList: DonutInfoInterface = {} as DonutInfoInterface;
    let donutItem: DonutItemInterface = {} as DonutItemInterface;

    return this.donutsListService.getDonutsList().pipe(
      map (data => {
        data.forEach((d: { id: number; ref: any; }) => {
          if(d.id == donutItemId) {
            console.log('printingSuccess');
            console.log(d.ref);
            return this.http.get<any>(d.ref);
          } else {
            return of('fail');
          }
        })
      })
    );
  }
}