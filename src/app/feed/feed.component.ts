import {Component, OnInit} from '@angular/core';
import {Article} from "../../data/models/article";
import {SortBarState} from "../../data/models/sort-bar-state";
import {ArticlesService} from "../core/services/articles.service";

@Component({
  selector: 'poly-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {

  readonly SortBarState = SortBarState;

  articles: Article.Item[] = [];

  constructor(private articlesService: ArticlesService) {
    articlesService.getArticles(() => {
    }).subscribe(result => {
      console.log(result.contents!!);
      this.articles = result.contents!!;
    });
  }

  ngOnInit(): void {
  }

}
