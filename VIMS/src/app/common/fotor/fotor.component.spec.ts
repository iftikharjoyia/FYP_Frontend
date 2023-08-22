import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FotorComponent } from './fotor.component';

describe('FotorComponent', () => {
  let component: FotorComponent;
  let fixture: ComponentFixture<FotorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FotorComponent]
    });
    fixture = TestBed.createComponent(FotorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
