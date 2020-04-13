import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstrumentParameterComponent } from './intrument-parameter.component';

describe('IntrumentParameterComponent', () => {
  let component: InstrumentParameterComponent;
  let fixture: ComponentFixture<InstrumentParameterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstrumentParameterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstrumentParameterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
