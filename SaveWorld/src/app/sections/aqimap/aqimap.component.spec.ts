import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AQIMapComponent } from './aqimap.component';

describe('AQIMapComponent', () => {
  let component: AQIMapComponent;
  let fixture: ComponentFixture<AQIMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AQIMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AQIMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
