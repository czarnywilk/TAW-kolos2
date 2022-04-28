import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersATComponent } from './orders-at.component';

describe('OrdersATComponent', () => {
  let component: OrdersATComponent;
  let fixture: ComponentFixture<OrdersATComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdersATComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersATComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
