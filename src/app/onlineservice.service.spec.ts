import { TestBed } from '@angular/core/testing';

import { OnlineserviceService } from './onlineservice.service';

describe('  OnlineserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const onlineservice: OnlineserviceService = TestBed.get(OnlineserviceService);
    expect(onlineservice).toBeTruthy();
  });
});


