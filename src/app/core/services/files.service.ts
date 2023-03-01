import {Injectable} from '@angular/core';
import {ApiService} from "./api.service";
import {Observable} from "rxjs";
import {HttpParams} from "@angular/common/http";
import {ApiError} from "../types/api-error";
import {Article} from "../../../data/models/article";
import {ApiResult} from "../types/api-result";
import {FormBuilder} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class FilesService {

  private readonly base: string = "/files/";

  constructor(private apiService: ApiService, private formBuilder: FormBuilder) {
  }

  sendFile(onError: ApiError, file: File, articleId: string): Observable<void> {
    const formData = new FormData();
    formData.append('file', file, "file.pdf");
    formData.append('articleId', articleId);

    return this.apiService.postForm(`${this.base}`, formData, onError);
  }

  sendImage(onError: ApiError, file: File, articleId: string): Observable<void> {
    const formData = new FormData();
    formData.append('file', file, "file.pdf");
    formData.append('articleId', articleId);

    return this.apiService.postForm(`${this.base}savePreviewPic`, formData, onError);
  }
}
