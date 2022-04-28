import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {ATDataService} from "../../services/AT-data.service";
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'orders-details-at',
  templateUrl: './orders-details-at.component.html',
  styleUrls: ['./orders-details-at.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class OrdersDetailsATComponent implements OnInit {

  public image: string = '';
  public text: string = '';

  constructor(private service: ATDataService, private route: ActivatedRoute) {
  }


  ngOnInit() {
	let id: string = '';
	this.route.paramMap
  	.subscribe((params: any) => {
    	id = params.get('id');
  	});

	this.service.getById(id).subscribe((res: any) => {
  	this.image = res['image'];
  	this.text = res['text'];
	});

  }

}
