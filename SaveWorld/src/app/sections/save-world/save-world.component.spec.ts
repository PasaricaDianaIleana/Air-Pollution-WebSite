import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveWorldComponent } from './save-world.component';

describe('SaveWorldComponent', () => {
  let component: SaveWorldComponent;
  let fixture: ComponentFixture<SaveWorldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaveWorldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveWorldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
