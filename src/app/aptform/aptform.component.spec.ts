import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AptformComponent } from './aptform.component';

describe('AptformComponent', () => {
  let component: AptformComponent;
  let fixture: ComponentFixture<AptformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AptformComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AptformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
