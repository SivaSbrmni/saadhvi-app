import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MitigationStrategyComponent } from './mitigation-strategy.component';

describe('MitigationStrategyComponent', () => {
  let component: MitigationStrategyComponent;
  let fixture: ComponentFixture<MitigationStrategyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MitigationStrategyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MitigationStrategyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
