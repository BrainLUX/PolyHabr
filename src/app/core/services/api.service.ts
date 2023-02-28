import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {catchError, EMPTY, Observable} from "rxjs";
import {environment} from "../../../environments/environment";
import {ApiError} from "../types/api-error";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {
  }

  get(path: string, params: HttpParams = new HttpParams(), onError: ApiError): Observable<any> {
    let headers = new HttpHeaders();
    headers = headers.append('Authorization', 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTY3NzYxNDIzMiwiZXhwIjoxNjc3NzAwNjMyfQ.snkTMj5RE9IzGAwxycrjTLjsS3Vx_kfqxCSWWjNzgwLXwPvZQ_Wiw_5Uy9DwZo7pjsYGlMbnyKSpH_Pt7RbD6g');
    headers = headers.append('Content-Type', 'application/json');

    return this.http.get(`${environment.api_url}${path}`, {headers: headers})
      .pipe(catchError((response) => {
        onError(response.status);
        console.log(response);
        return EMPTY;
      }));
  }

  put(path: string, body: Object = {}, onError: ApiError): Observable<any> {
    let headers = new HttpHeaders();
    headers = headers.append('Authorization', 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTY3NzYxNDIzMiwiZXhwIjoxNjc3NzAwNjMyfQ.snkTMj5RE9IzGAwxycrjTLjsS3Vx_kfqxCSWWjNzgwLXwPvZQ_Wiw_5Uy9DwZo7pjsYGlMbnyKSpH_Pt7RbD6g');
    headers = headers.append('Content-Type', 'application/json');
    return this.http.put(
      `${environment.api_url}${path}`,
      JSON.stringify(body),
      {
        headers: headers
      }
    ).pipe(catchError((response) => {
      onError(response.status);
      return EMPTY;
    }));
  }

  post(path: string, body: Object = {}, onError: ApiError): Observable<any> {
    let headers = new HttpHeaders();
    headers = headers.append('Authorization', 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTY3NzYxNDIzMiwiZXhwIjoxNjc3NzAwNjMyfQ.snkTMj5RE9IzGAwxycrjTLjsS3Vx_kfqxCSWWjNzgwLXwPvZQ_Wiw_5Uy9DwZo7pjsYGlMbnyKSpH_Pt7RbD6g');
    headers = headers.append('Content-Type', 'application/json');
    return this.http.post(
      `${environment.api_url}${path}`,
      JSON.stringify(body), {headers: headers}
    ).pipe(catchError((response) => {
      console.log(response)
      onError(response.status);
      return EMPTY;
    }));
  }

  delete(path: string, onError: ApiError): Observable<any> {
    let headers = new HttpHeaders();
    headers = headers.append('Authorization', 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTY3NzYxNDIzMiwiZXhwIjoxNjc3NzAwNjMyfQ.snkTMj5RE9IzGAwxycrjTLjsS3Vx_kfqxCSWWjNzgwLXwPvZQ_Wiw_5Uy9DwZo7pjsYGlMbnyKSpH_Pt7RbD6g');
    headers = headers.append('Content-Type', 'application/json');
    return this.http.delete(
      `${environment.api_url}${path}`, {headers: headers}
    ).pipe(catchError((response) => {
      onError(response.status);
      return EMPTY;
    }));
  }

  uploadFile(path: string, file: File, onError: ApiError, reportProgress: boolean = false): Observable<any> {
    // const formData = new FormData();
    // formData.append('file', file);
    // const headers = new HttpHeaders({'enctype': 'multipart/form-data'});
    return this.http.put(path, file, {reportProgress: reportProgress,}).pipe(catchError((response) => {
      onError(response.status);
      return EMPTY;
    }));
  }
}
