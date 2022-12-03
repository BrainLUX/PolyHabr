import {Component, OnInit} from '@angular/core';
import {Article} from "../../data/models/article";
import {CardType} from "../shared/components/card/card.component";

@Component({
  selector: 'poly-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  readonly CardType = CardType;

  readonly article: Article.Item = Article.Item.createFullTemporary();
  readonly comments: Article.Comment[] = [
    Article.Comment.createTemporary(),
    Article.Comment.createTemporary(),
    Article.Comment.createTemporary(),
    Article.Comment.createTemporary(),
    Article.Comment.createTemporary()
  ];

  readonly others: Article.Item[] = [
    Article.Item.createTemporary(),
    Article.Item.createTemporary(),
    Article.Item.createTemporary()
  ];

  ngOnInit(): void {
  }

  sendComment(input: HTMLTextAreaElement) {
    this.comments.push(new Article.Comment(input.value, new Date().toDateString()));
    input.value = "";
  }

}
