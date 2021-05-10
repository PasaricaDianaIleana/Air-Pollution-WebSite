import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LineChartPm25Component } from './line-chart-pm25.component';

describe('LineChartPm25Component', () => {
  let component: LineChartPm25Component;
  let fixture: ComponentFixture<LineChartPm25Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LineChartPm25Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LineChartPm25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
