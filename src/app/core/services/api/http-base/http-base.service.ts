import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, delay } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpBaseService {

constructor(private http: HttpClient) { }

get<T>(endpoint: string, params?: HttpParams, mock?: any): Observable<T> {
  if (environment.mock) {
     return of(mock).pipe(delay(2000));
  } else {
     return this.http.get<T>(`${environment.apiUrl}${endpoint}`, { params });
  }
}

post<T>(endpoint: string, body?: any, mock?: any): Observable<T> {
  if (environment.mock) {
     return of(mock).pipe(delay(2000));
  } else {
     return this.http.post<T>(`${environment.apiUrl}${endpoint}`, body);
  }
}

put<T>(endpoint: string, body?: any, mock?: any): Observable<T> {
  if (environment.mock) {
     return of(mock).pipe(delay(2000));
  } else {
     return this.http.put<T>(`${environment.apiUrl}${endpoint}`, body);
  }
}

delete<T>(endpoint: string, params?: HttpParams, mock?: any): Observable<T> {
  if (environment.mock) {
     return of(mock).pipe(delay(2000));
  } else {
     return this.http.delete<T>(`${environment.apiUrl}${endpoint}`, { params });
  }
}
}
