/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TOKEN } from 'src/app/core/constants/constants';
import { TOKEN_MOCK } from 'src/app/core/mocks/token.mock';
import { environment } from 'src/environments/environment';
import { SessionService } from './session.service';

describe('Service: Session', () => {
  let service:SessionService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SessionService]
    });
    service = TestBed.inject(SessionService)
  });

  it('should ...',() => {
    expect(service).toBeTruthy();
  });

  it('setToken', () => {
    service.setToken(TOKEN_MOCK);
    let token = sessionStorage.getItem(TOKEN);

    expect(token).not.toEqual('');
  });

  it('getToken', () => {
    let token = service.getToken();
    expect(token).not.toBeNull();

    service.setToken(TOKEN_MOCK);
    environment.develop = false;
    token = service.getToken();
    expect(token).not.toBeNull();

    environment.develop = false;
    sessionStorage.removeItem(TOKEN);    
    token = service.getToken();
    expect(token).toBeNull();
  });
});
