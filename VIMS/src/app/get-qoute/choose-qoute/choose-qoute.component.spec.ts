import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseQouteComponent } from './choose-qoute.component';

describe('ChooseQouteComponent', () => {
  let component: ChooseQouteComponent;
  let fixture: ComponentFixture<ChooseQouteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChooseQouteComponent]
    });
    fixture = TestBed.createComponent(ChooseQouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
