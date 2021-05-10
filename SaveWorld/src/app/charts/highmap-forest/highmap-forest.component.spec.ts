import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HighmapForestComponent } from './highmap-forest.component';

describe('HighmapForestComponent', () => {
  let component: HighmapForestComponent;
  let fixture: ComponentFixture<HighmapForestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HighmapForestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HighmapForestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
