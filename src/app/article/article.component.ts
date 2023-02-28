import {Component, OnInit} from '@angular/core';
import {Article} from "../../data/models/article";
import {CardType} from "../shared/components/card/card.component";
import {ArticlesService} from "../core/services/articles.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'poly-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  readonly CardType = CardType;

  article!: Article.Item;
  readonly comments: Article.Comment[] = [];

  others: Article.Item[] = [];

  constructor(private articlesService: ArticlesService, private route: ActivatedRoute,) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(param => {
      if (param["actor"]) {
        this.articlesService.getArticle(Number(param["actor"]), () => {
        }).subscribe(result => {
          this.article = result;
          this.articlesService.search(() => {
          }, this.article.listDisciplineName[0]).subscribe(result => {
            this.others = result.contents!!;
          });
        });
      }
    });
  }

  sendComment(input: HTMLTextAreaElement) {
    this.comments.push(new Article.Comment(input.value, new Date().toDateString()));
    input.value = "";
  }
}
