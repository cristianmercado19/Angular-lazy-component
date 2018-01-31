/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { LazyDynamicComponentFactoryService } from './LazyDynamicComponentFactory.service';

describe('Service: LazyDinamicComponentFactory', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LazyDynamicComponentFactoryService]
    });
  });

  it('should ...', inject([LazyDynamicComponentFactoryService], (service: LazyDynamicComponentFactoryService) => {
    expect(service).toBeTruthy();
  }));
});
