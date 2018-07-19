import { TestBed, inject } from '@angular/core/testing';

import { ProcesspuzzleDocService } from './processpuzzle-doc-lib.service';

describe('ProcesspuzzleDocService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProcesspuzzleDocService]
    });
  });

  it('should be created', inject([ProcesspuzzleDocService], (service: ProcesspuzzleDocService) => {
    expect(service).toBeTruthy();
  }));
});
