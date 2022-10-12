import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router'
import { DonutItemService } from '../donut-item.service';
import { DonutItemInterface } from '../donut-item-interface';

@Component({
  selector: 'app-donut-item',
  templateUrl: './donut-item.component.html',
  styleUrls: ['./donut-item.component.css']
})
export class DonutItemComponent implements OnInit {

  constructor(private route: ActivatedRoute, 
    private donutItemService: DonutItemService) { }

  donutItem:DonutItemInterface ={} as DonutItemInterface;

  ngOnInit(): void {
    let id: number = Number(this.route.snapshot.paramMap.get("id"));
    console.log(`printingId: ${id}`);


    this.donutItemService.getDonutItemDetails(id).subscribe(
      (data: any) => {
      console.log(data)
      this.donutItem = data
    }
    );
  }

}
