import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ATDataService } from '../../services/AT-data.service';

@Component({
  selector: 'orders-at',
  templateUrl: 'orders-at.component.html',
  styleUrls: ['orders-at.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class OrdersATComponent implements OnInit {

  public items$: any;

  constructor(private service: ATDataService) {
  }

  ngOnInit(): void {
    console.log('xD');
    this.getAll();
  }

  getAll(): void{
    this.service.getAll().subscribe(response => {
      this.items$ = response;
    });

  }

}
