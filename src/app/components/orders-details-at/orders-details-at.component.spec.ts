import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersDetailsATComponent } from './orders-details-at.component';

describe('OrdersDetailsATComponent', () => {
  let component: OrdersDetailsATComponent;
  let fixture: ComponentFixture<OrdersDetailsATComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdersDetailsATComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersDetailsATComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
