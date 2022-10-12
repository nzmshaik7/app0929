import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { DonutItemInterface } from '../donut-item-interface';
import { DonutsListService } from '../donuts-list.service';

@Component({
  selector: 'app-donuts-list',
  templateUrl: './donuts-list.component.html',
  styleUrls: ['./donuts-list.component.css']
})
export class DonutsListComponent implements OnInit {

  constructor(private donutsListService: DonutsListService) { }

  donutsList: DonutItemInterface[] = [];
  ngOnInit(): void {
    this.donutsListService.getDonutsList().subscribe(
      (data: any) => this.donutsList = data,
      error => console.log(`printingError: ${error}`)
    );
  }

}
