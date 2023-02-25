import { HttpErrorResponse } from "@angular/common/http";
import { TestBed } from "@angular/core/testing";
import { of } from "rxjs";
import { SessionService } from "../../services/api/session/session.service";
import { AuthInterceptorService } from "./auth-interceptor.service";


describe('Auth Interceptor Service', () => {
   let service: AuthInterceptorService;

   const token1 = 'abcdef01279792_tk';

   beforeEach(() => {
      const sessionServiceStub = () => ({
         getToken: () => token1,
      });
      TestBed.configureTestingModule({
         providers: [{ provide: SessionService, useFactory: sessionServiceStub }],
      });
      service = TestBed.inject(AuthInterceptorService);
   });

   it('should ...', () => {
      expect(service).toBeTruthy();
   });

   it('intercept and add header autorization token', (done) => {
      const bearerToken = 'Bearer ' + token1;

      service.intercept(
         {
            clone: (a: any) => {
               expect(a).toBeDefined();
               expect(a.setHeaders).toBeDefined();
               expect(a.setHeaders.authorization).toBe(bearerToken);

               return a;
            },
         } as any,
         {
            handle: (r: any) => {
               done();
               return of([]);
            },
         } as any
      );
   });

   it('intercept and return error', (done) => {

      const bearerToken = 'Bearer ' + token1;
      let req:any = {
         clone: (a: any) => {
            return a.setHeaders = {
               authorization: null
            };
         },
      };

      let next:any = {
         handle: (r: any) => {
            var err = new HttpErrorResponse({
               status: 401,
            })
            done();
            return of(err);
         },
      };
      
      let intercept = service.intercept(req,next);

      intercept.subscribe((data: any) => {
         expect(data['message']).toContain('Http failure response for (unknown url): 401 undefined')
      })
   });
});
