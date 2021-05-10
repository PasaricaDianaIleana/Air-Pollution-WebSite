import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalWarmingChartComponent } from './global-warming-chart.component';

describe('GlobalWarmingChartComponent', () => {
  let component: GlobalWarmingChartComponent;
  let fixture: ComponentFixture<GlobalWarmingChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlobalWarmingChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobalWarmingChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
