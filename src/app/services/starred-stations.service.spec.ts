import { TestBed } from '@angular/core/testing';

import { StarredStationsService } from './starred-stations.service';

describe('StarredStationsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StarredStationsService = TestBed.get(StarredStationsService);
    expect(service).toBeTruthy();
  });
});
