import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ArticleTypesService} from "../core/services/article_types.service";
import {Article} from "../../data/models/article";
import {ArticlesService} from "../core/services/articles.service";

@Component({
  selector: 'poly-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {

  @ViewChild("inputTitleElement")
  inputTitleElement!: ElementRef;

  @ViewChild("inputDisciplineElement")
  inputDisciplineElement!: ElementRef;

  @ViewChild("inputDescriptionElement")
  inputDescriptionElement!: ElementRef;

  @ViewChild("inputTagsElement")
  inputTagsElement!: ElementRef;

  types: Article.Type[] = [];

  file: File | null = null;
  hasError: boolean = false;
  selectedType!: Article.Type;

  constructor(private articleTypesService: ArticleTypesService, private articleService: ArticlesService) {
  }

  ngOnInit() {
    this.articleTypesService.getTypes(() => {
    }).subscribe(result => {
      this.types = result.contents;
      this.selectedType = this.types[0];
    });
    const id: number | undefined = Number(window.location.pathname.split("/")[2]);
    if (id != undefined) {
      this.articleService.getArticle(id, () => {
      }).subscribe(result => {
        console.log(result);
        const findType = this.types.find(type => type.name == result.typeId.name);
        if (findType != undefined) {
          this.selectedType = findType;
        }
        this.inputTitleElement.nativeElement.value = result.title;
        this.inputDisciplineElement.nativeElement.value = result.listDisciplineName[0];
        this.inputDescriptionElement.nativeElement.value = result.text;
        this.inputTagsElement.nativeElement.value = result.listTag.join(", ");
      });
    }
  }

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

  upload(e: Event): void {
    e.preventDefault();
    const id: number | undefined = Number(window.location.pathname.split("/")[2]);
    if (id != undefined) {
      this.articleService.update(()=>{
      }, id).subscribe(() => {})
    } else {
      const tagsString: string = this.inputTagsElement.nativeElement.value;
      const tagsList: string[] = tagsString.split(", ");
      const data: Article.ItemCreate = {
        title: this.inputTitleElement.nativeElement.value,
        text: this.inputDescriptionElement.nativeElement.value,
        previewText: "",
        filePdf: null,
        likes: 0,
        articleType: this.selectedType.name,
        listDisciplineName: this.inputDisciplineElement.nativeElement.value,
        listTag: tagsList
      };
      this.articleService.create(()=>{
      }, data).subscribe(result => {
        console.log(result)
      })
    }
  }
}
