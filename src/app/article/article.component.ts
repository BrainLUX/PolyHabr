import {Component, OnInit} from '@angular/core';
import {Article} from "../../data/models/article";
import {CardType} from "../shared/components/card/card.component";
import {ArticlesService} from "../core/services/articles.service";
import {ActivatedRoute} from "@angular/router";
import {CommentsService} from "../core/services/comments.service";

@Component({
  selector: 'poly-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  readonly CardType = CardType;

  article!: Article.Item;
  comments: Article.Comment[] = [];

  others: Article.Item[] = [];

  constructor(private articlesService: ArticlesService, private route: ActivatedRoute,
              private commentsService: CommentsService) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(param => {
      if (param["actor"]) {
        this.articlesService.getArticle(Number(param["actor"]), () => {
        }).subscribe(result => {
          this.article = result;
          this.articlesService.search(() => {
          }, this.article.listDisciplineName[0]).subscribe(result => {
            this.others = result.contents;
          });
          this.getComments();
        });
      }
    });
  }

  getComments(): void {
    this.commentsService.getComments(() => {
    }, this.article.id).subscribe(result => {
      this.comments = result.contents;
    });
  }

  sendComment(input: HTMLTextAreaElement) {
    this.commentsService.sendComment(() => {
    }, input.value, this.article.id).subscribe(() => {
      this.getComments();
      input.value = "";
    })
  }
}
