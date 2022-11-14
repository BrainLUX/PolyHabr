import {Component, OnInit} from '@angular/core';
import {SortBarState} from "../../data/models/sort-bar-state";
import {Article} from "../../data/models/article";

@Component({
  selector: 'poly-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  readonly SortBarState = SortBarState;

  readonly fullArticles: Article.Item[] = [
    Article.Item.createTemporary(),
    Article.Item.createTemporary(),
    Article.Item.createTemporary(),
    Article.Item.createTemporary(),
    Article.Item.createTemporary()
  ];

  articles: Article.Item[] = [];

  constructor() {
  }

  ngOnInit(): void {
  }

  onSearch(text: string): void {
    if (text.trim().length < 3) {
      this.articles = [];
      return;
    }
    this.articles = this.fullArticles.filter((item) => item.title.toLowerCase().includes(text.toLowerCase()));
  }

}
