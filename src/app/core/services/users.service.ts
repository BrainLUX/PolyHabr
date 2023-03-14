import {Injectable} from '@angular/core';
import {ApiService} from "./api.service";
import {Observable} from "rxjs";
import {HttpParams} from "@angular/common/http";
import {ApiError} from "../types/api-error";
import {Article} from "../../../data/models/article";
import {ApiResult} from "../types/api-result";
import User = Article.User;

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private readonly base: string = "/users/";

  constructor(private apiService: ApiService) {
  }

  getMe(): Observable<User> {
    return this.apiService.get(`${this.base}me`, new HttpParams());
  }

  update(onError: ApiError, body: {}): Observable<void> {
    return this.apiService.put(`${this.base}update`, body, onError);
  }
}
