import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HighmapChildrenComponent } from './highmap-children.component';

describe('HighmapChildrenComponent', () => {
  let component: HighmapChildrenComponent;
  let fixture: ComponentFixture<HighmapChildrenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HighmapChildrenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HighmapChildrenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
