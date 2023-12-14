import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentSettingComponent } from './agent-setting.component';

describe('AgentSettingComponent', () => {
  let component: AgentSettingComponent;
  let fixture: ComponentFixture<AgentSettingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgentSettingComponent]
    });
    fixture = TestBed.createComponent(AgentSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
