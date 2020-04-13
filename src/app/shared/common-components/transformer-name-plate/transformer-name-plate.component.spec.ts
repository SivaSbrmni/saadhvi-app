import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransformerNamePlateComponent } from './transformer-name-plate.component';

describe('TransformerNamePlateComponent', () => {
  let component: TransformerNamePlateComponent;
  let fixture: ComponentFixture<TransformerNamePlateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransformerNamePlateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransformerNamePlateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
