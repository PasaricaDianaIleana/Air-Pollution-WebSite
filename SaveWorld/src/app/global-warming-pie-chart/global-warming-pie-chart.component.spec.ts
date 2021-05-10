import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalWarmingPieChartComponent } from './global-warming-pie-chart.component';

describe('GlobalWarmingPieChartComponent', () => {
  let component: GlobalWarmingPieChartComponent;
  let fixture: ComponentFixture<GlobalWarmingPieChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlobalWarmingPieChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobalWarmingPieChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
