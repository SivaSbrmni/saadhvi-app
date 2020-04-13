import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RenderKeyValPairComponent } from './render-key-val-pair.component';

describe('RenderKeyValPairComponent', () => {
  let component: RenderKeyValPairComponent;
  let fixture: ComponentFixture<RenderKeyValPairComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RenderKeyValPairComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RenderKeyValPairComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
