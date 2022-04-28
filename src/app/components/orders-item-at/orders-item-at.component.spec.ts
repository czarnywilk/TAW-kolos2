import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersItemATComponent } from './orders-item-at.component';

describe('OrdersItemATComponent', () => {
  let component: OrdersItemATComponent;
  let fixture: ComponentFixture<OrdersItemATComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdersItemATComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersItemATComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
