import { TestBed } from '@angular/core/testing';

import { SaveWorldService } from './save-world.service';

describe('SaveWorldService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SaveWorldService = TestBed.get(SaveWorldService);
    expect(service).toBeTruthy();
  });
});
