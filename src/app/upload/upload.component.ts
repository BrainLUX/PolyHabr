import {Component} from '@angular/core';
import {ArticleTypesService} from "../core/services/article_types.service";
import {Article} from "../../data/models/article";

@Component({
  selector: 'poly-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent {

  types: Article.Type[] = [];

  constructor(private articleTypesService: ArticleTypesService) {
    articleTypesService.getTypes(() => {
    }).subscribe(result => {
      this.types = result.contents;
      this.selectedType = this.types[0];
    });
  }

  file: File | null = null;
  hasError: boolean = false;
  selectedType!: Article.Type;

  onFileSelected(event: any): void {
    if (event.target.files.length > 0) {
      this.hasError = false;
      if (event.target.files[0].size < 15 * 1024 * 1024) {
        this.file = event.target.files[0];
      } else {
        this.hasError = true;
        event.target.value = "";
      }
    }
  }
}
