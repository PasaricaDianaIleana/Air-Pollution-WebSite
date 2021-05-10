import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DonatiiComponent } from './donatii.component';

describe('DonatiiComponent', () => {
  let component: DonatiiComponent;
  let fixture: ComponentFixture<DonatiiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonatiiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonatiiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
