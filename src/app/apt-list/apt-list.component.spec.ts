import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AptListComponent } from './apt-list.component';

describe('AptListComponent', () => {
  let component: AptListComponent;
  let fixture: ComponentFixture<AptListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AptListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AptListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
