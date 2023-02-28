import {Injectable} from '@angular/core';
import {ApiService} from "./api.service";
import {Observable} from "rxjs";
import {HttpParams} from "@angular/common/http";
import {ApiError} from "../types/api-error";
import {Article} from "../../../data/models/article";
import {ApiResult} from "../types/api-result";

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  private readonly base: string = "/articles/";

  constructor(private apiService: ApiService) {
  }

  getArticles(onError: ApiError, offset: number = 0, size: number = 1): Observable<ApiResult<Array<Article.Item>>> {
    return this.apiService.get(`${this.base}?offset=${offset}&size=${size}`, new HttpParams(), onError);
  }

  getUserArticles(onError: ApiError, userId: number = 0, offset: number = 0, size: number = 1): Observable<ApiResult<Array<Article.Item>>> {
    return this.apiService.get(`${this.base}byUser?id=${userId}&offset=${offset}&size=${size}`, new HttpParams(), onError);
  }

  getArticle(id: number = 0, onError: ApiError): Observable<Article.Item> {
    return this.apiService.get(`${this.base}byId?id=${id}`, new HttpParams(), onError);
  }

  like(articleId: number = 0, onError: ApiError): Observable<void> {
    return this.apiService.post(`${this.base}add_like?articleId=${articleId}`, new HttpParams(), onError);
  }

  disLike(articleId: number = 0, onError: ApiError): Observable<void> {
    return this.apiService.post(`${this.base}decrease_like?articleId=${articleId}`, new HttpParams(), onError);
  }

  search(onError: ApiError, prefix: string = "", offset: number = 0, size: number = 1): Observable<ApiResult<Array<Article.Item>>> {
    return this.apiService.get(`${this.base}searchByTittle?prefix=${prefix}&offset=${offset}&size=${size}`, new HttpParams(), onError);
  }
}