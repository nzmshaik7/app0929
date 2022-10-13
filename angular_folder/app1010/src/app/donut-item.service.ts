import { Injectable } from '@angular/core';
import { DonutItemInterface } from './donut-item-interface';
import { DonutInfoInterface } from './donuts-list-interface';
import { DonutsListService } from './donuts-list.service';
import { HttpClient } from '@angular/common/http';
import { Observable, of, map, concatMap, switchMap } from 'rxjs';
import { UrlHandlingStrategy } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DonutItemService {

  constructor(private donutsListService: DonutsListService, private http: HttpClient) { }

  getDonutItemDetails(donutItemId: number): Observable<any> {
    let donutInfoFromList: DonutInfoInterface = {} as DonutInfoInterface;
    let donutItem: DonutItemInterface = {} as DonutItemInterface;

    return this.donutsListService.getDonutsList().pipe(
      switchMap((data:any) => {
        const record:any = data.filter ((d: { id: number; }) => d.id == donutItemId)[0];
        return this.getDonutItemRecord(record.ref);
      }))
    }
  
  getDonutItemRecord(url: string): Observable<any>  {
    return this.http.get<any>(url);
  }
}