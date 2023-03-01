import {Injectable} from '@angular/core';
import {ApiService} from "./api.service";
import {Observable} from "rxjs";
import {HttpParams} from "@angular/common/http";
import {ApiError} from "../types/api-error";
import {Article} from "../../../data/models/article";
import {ApiResult} from "../types/api-result";
import {Data} from "../types/Data";

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  private readonly base: string = "/articles/";

  constructor(private apiService: ApiService) {
  }

  getArticles(onError: ApiError,
              offset: number = 0,
              size: number = 1,
              fieldView: boolean | null = null,
              fieldRating: boolean | null = null,
              datRange: String | null = null): Observable<ApiResult<Array<Article.Item>>> {
    let result = `${this.base}?offset=${offset}&size=${size}`;
    if (fieldView) {
      result += `&fieldView=${fieldView}`;
      result += `&datRange=${datRange}`;
    } else if (fieldRating) {
      result += `&fieldRating=${fieldRating}`;
      result += `&datRange=${datRange}`;
    }
    return this.apiService.get(result, new HttpParams(), onError);
  }

  getUserArticles(onError: ApiError, userId: number = 0, offset: number = 0, size: number = 1): Observable<ApiResult<Array<Article.Item>>> {
    return this.apiService.get(`${this.base}byUser?id=${userId}&offset=${offset}&size=${size}`, new HttpParams(), onError);
  }

  getFavArticles(onError: ApiError, offset: number = 0, size: number = 1): Observable<ApiResult<Array<Article.Item>>> {
    return this.apiService.get(`${this.base}getFavArticles?offset=${offset}&size=${size}`, new HttpParams(), onError);
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

  addFav(articleId: number = 0, onError: ApiError): Observable<void> {
    return this.apiService.post(`${this.base}addFavArticles?articleId=${articleId}`, new HttpParams(), onError);
  }

  removeFav(articleId: number = 0, onError: ApiError): Observable<void> {
    return this.apiService.post(`${this.base}removeFromArticles?articleId=${articleId}`, new HttpParams(), onError);
  }

  search(onError: ApiError, prefix: string = "", offset: number = 0, size: number = 1): Observable<ApiResult<Array<Article.Item>>> {
    return this.apiService.get(`${this.base}searchByTittle?prefix=${prefix}&offset=${offset}&size=${size}`, new HttpParams(), onError);
  }
  update(onError: ApiError, id: number): Observable<any> {
    return this.apiService.put(`${this.base}update?id=${id}`, new HttpParams(), onError);
  }
  create(onError: ApiError, data: Article.ItemCreate): Observable<any> {
    return this.apiService.post(`${this.base}create`, data, onError);
  }

  add(onError: ApiError, body: Data): Observable<Data> {
    return this.apiService.post(`${this.base}create`, body, onError);
  }
}
