import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ArticleTypesService} from "../core/services/article_types.service";
import {Article} from "../../data/models/article";
import {ArticlesService} from "../core/services/articles.service";
import {Destination, NavigationService} from "../core/services/navigation.service";
import {Data} from "../core/types/Data";
import {DisciplineTypesService} from "../core/services/discipline_types.service";

@Component({
  selector: 'poly-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent {

  @ViewChild("titleInputComponent")
  titleInputComponent!: ElementRef;

  @ViewChild("tagInputComponent")
  tagInputComponent!: ElementRef;

  @ViewChild("textInputComponent")
  textInputComponent!: ElementRef;

  @ViewChild("previewTextInputComponent")
  previewTextInputComponent!: ElementRef;

  types: Article.Type[] = [];
  disciplines: Article.Type[] = [];

  constructor(private articleTypesService: ArticleTypesService, private articlesService: ArticlesService,
              private navigationService: NavigationService, private disciplineTypesService: DisciplineTypesService) {
    articleTypesService.getTypes(() => {
    }).subscribe(result => {
      this.types = result.contents;
      this.selectedType = this.types[0];
    });
    disciplineTypesService.getTypes(() => {
    }).subscribe(result => {
      this.disciplines = result.contents;
      this.selectedDiscipline = this.disciplines[0];
    });
  }

  file: File | null = null;
  preview: File | null = null;
  hasError: boolean = false;
  hasPreviewError: boolean = false;
  selectedType!: Article.Type;
  selectedDiscipline!: Article.Type;

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

  onPreviewSelected(event: any): void {
    if (event.target.files.length > 0) {
      this.hasPreviewError = false;
      if (event.target.files[0].size < 15 * 1024 * 1024) {
        this.preview = event.target.files[0];
      } else {
        this.hasPreviewError = true;
        event.target.value = "";
      }
    }
  }

  toArticle(id: string): void {
    this.navigationService.navigateTo(Destination.ARTICLE, new Map([["article", id]]));
  }

  add(): void {
    let body: Data = {
      title: this.titleInputComponent.nativeElement.value,
      text: this.textInputComponent.nativeElement.value,
      previewText: this.previewTextInputComponent.nativeElement.value,
      listTag: this.tagInputComponent.nativeElement.value.toString().trim().split(","),
      listDisciplineName: [this.selectedDiscipline.name],
      articleType: this.selectedType.name
    };
    this.articlesService.add(() => {
    }, body).subscribe((result) => this.toArticle(result["id"] as string));
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
