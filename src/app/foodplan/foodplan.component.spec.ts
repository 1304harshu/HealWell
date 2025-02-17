import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodplanComponent } from './foodplan.component';

describe('FoodplanComponent', () => {
  let component: FoodplanComponent;
  let fixture: ComponentFixture<FoodplanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FoodplanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoodplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
