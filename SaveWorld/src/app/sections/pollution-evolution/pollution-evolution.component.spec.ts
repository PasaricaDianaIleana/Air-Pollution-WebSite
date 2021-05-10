import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PollutionEvolutionComponent } from './pollution-evolution.component';

describe('PollutionEvolutionComponent', () => {
  let component: PollutionEvolutionComponent;
  let fixture: ComponentFixture<PollutionEvolutionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PollutionEvolutionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PollutionEvolutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
