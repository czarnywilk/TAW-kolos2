import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'orders-item-at',
  templateUrl: 'orders-item-at.component.html',
  styleUrls: ['orders-item-at.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class OrdersItemATComponent implements OnInit {

  @Input() image?: string;
  @Input() text?: string;
  @Input() id?: number;

  constructor() { }

  ngOnInit(): void {
  }

}
