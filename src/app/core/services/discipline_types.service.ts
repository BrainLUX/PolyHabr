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
export class DisciplineTypesService {

  private readonly base: string = "/discipline_type/";

  constructor(private apiService: ApiService) {
  }

  getTypes(onError: ApiError): Observable<ApiResult<Array<Article.Type>>> {
    return this.apiService.get(`${this.base}?offset=0&size=100`, new HttpParams(), onError);
  }
}
