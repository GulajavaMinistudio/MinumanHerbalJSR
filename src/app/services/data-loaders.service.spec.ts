import { TestBed } from '@angular/core/testing';

import { DataLoadersService } from './data-loaders.service';

describe('DataLoadersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataLoadersService = TestBed.get(DataLoadersService);
    expect(service).toBeTruthy();
  });
});
