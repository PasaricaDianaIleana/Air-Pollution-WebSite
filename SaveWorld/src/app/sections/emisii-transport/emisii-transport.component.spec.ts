import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmisiiTransportComponent } from './emisii-transport.component';

describe('EmisiiTransportComponent', () => {
  let component: EmisiiTransportComponent;
  let fixture: ComponentFixture<EmisiiTransportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmisiiTransportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmisiiTransportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
