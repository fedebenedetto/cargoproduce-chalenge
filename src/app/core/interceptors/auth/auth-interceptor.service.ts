import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError, throwError } from "rxjs";
import { SessionService } from "../../services/api/session/session.service";



@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {

  constructor(private sessionService: SessionService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const tokenStr = this.sessionService.getToken();
    const request = req.clone({
      setHeaders: {
        authorization: `Bearer ${tokenStr}`
      }
    });
        return next.handle(request).pipe(
      catchError((err: HttpErrorResponse) => {
        if (err.status === 401) {
          window.location.href = '/'; //ToDo: cambiar cuando tenga el path del hb
        }
        return throwError(err);
      })
    );
  }
}
