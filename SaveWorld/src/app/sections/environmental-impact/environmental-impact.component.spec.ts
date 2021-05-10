import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvironmentalImpactComponent } from './environmental-impact.component';

describe('EnvironmentalImpactComponent', () => {
  let component: EnvironmentalImpactComponent;
  let fixture: ComponentFixture<EnvironmentalImpactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnvironmentalImpactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnvironmentalImpactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
