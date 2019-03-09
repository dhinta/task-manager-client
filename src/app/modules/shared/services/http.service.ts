import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Response } from '../models/common';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private http: HttpClient) {}

  private configureOptions(headers: {} = null) {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        ...headers
      }),
      withCredentials: true
    };
  }

  public get(url: string, headers: {} = null): Observable<Response> {
    const options = this.configureOptions(headers);
    return this.http.get<Response>(url, options).pipe(
      catchError(error => throwError(error))
    );
  }

  public post(
    url: string,
    payload: {} = {},
    headers: object = null
  ): Observable<Response> {
    const options = this.configureOptions(headers);
    return this.http.post<Response>(url, payload, options).pipe(
      catchError(error => throwError(error))
    );
  }
}
