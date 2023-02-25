/* tslint:disable:no-unused-variable */

import { HttpClientModule } from '@angular/common/http';
import { TestBed, async, inject } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { defer } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpBaseService } from './http-base.service';

describe('Service: HttpBase', () => {
  let service: HttpBaseService;
  let httpClienteSpy: { get: jasmine.Spy; post: jasmine.Spy,put: jasmine.Spy, delete:jasmine.Spy };
  let routerSpy: { createUrlTree: jasmine.Spy }
  let serializerSpy: { serialize: jasmine.Spy }

  beforeEach(() => {
     TestBed.configureTestingModule({
        imports: [
           HttpClientModule,
           RouterModule.forRoot([])
        ],
     });
     httpClienteSpy = jasmine.createSpyObj('HttpClient', ['get', 'post','put','delete']);
     routerSpy = jasmine.createSpyObj('Router', ['createUrlTree'])
     serializerSpy = jasmine.createSpyObj('UrlSerializer', ['serialize'])
     service = TestBed.inject(HttpBaseService);
  });

  it('get', (hecho: DoneFn) => {
      const valorEsperado = [
        { a: 1, b: 2 },
        { a: 3, b: 4 },
        { a: 5, b: 7 },
     ];
     httpClienteSpy.get.and.returnValue(defer(() => Promise.resolve(valorEsperado)));

     service.get('abc').subscribe((datos) => {
        expect(datos).toEqual(undefined, 'valores esperados');
        hecho();
     }, hecho.fail);

     expect(httpClienteSpy.get.calls.count()).toBe(0);
  });

  it('post', (hecho: DoneFn) => {
     httpClienteSpy.post.and.returnValue(defer(() => Promise.resolve(({}))));

     const data = {
        valor: 123,
     };

     service.post('urlendpoint', data).subscribe((suceso) => {
        expect(httpClienteSpy.post.calls.count()).toBe(0);
        hecho();
     });
  });

  it('put', (hecho: DoneFn) => {
    httpClienteSpy.put.and.returnValue(defer(() => Promise.resolve(({}))));

    const data = {
       valor: 123,
    };

    service.put('urlendpoint', data).subscribe((suceso) => {
       expect(httpClienteSpy.post.calls.count()).toBe(0);
       hecho();
    });
 });

 it('delete', (hecho: DoneFn) => {
  httpClienteSpy.delete.and.returnValue(defer(() => Promise.resolve(({}))));

  const data = {
     valor: 123,
  };

  service.delete('urlendpoint').subscribe((suceso) => {
     expect(httpClienteSpy.post.calls.count()).toBe(0);
     hecho();
  });
});

});
