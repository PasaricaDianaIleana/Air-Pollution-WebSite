import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColumnChart2Component } from './column-chart2.component';

describe('ColumnChart2Component', () => {
  let component: ColumnChart2Component;
  let fixture: ComponentFixture<ColumnChart2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColumnChart2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColumnChart2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
