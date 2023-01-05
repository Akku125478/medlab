import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedincineHomeComponent } from './medincine-home.component';

describe('MedincineHomeComponent', () => {
  let component: MedincineHomeComponent;
  let fixture: ComponentFixture<MedincineHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedincineHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedincineHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
