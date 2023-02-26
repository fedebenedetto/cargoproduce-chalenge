/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TasksStoreService } from './tasks.store.service';

describe('Service: Tasks.store', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TasksStoreService]
    });
  });

  it('should ...', inject([TasksStoreService], (service: TasksStoreService) => {
    expect(service).toBeTruthy();
  }));
});
