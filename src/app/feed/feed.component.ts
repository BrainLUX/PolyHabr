import {Component, OnInit} from '@angular/core';
import {Article} from "../../data/models/article";
import {SortBarState} from "../../data/models/sort-bar-state";

@Component({
  selector: 'poly-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {

  readonly SortBarState = SortBarState;

  readonly articles: Article.Item[] = [
    Article.Item.createTemporary(),
    Article.Item.createTemporary(),
    Article.Item.createTemporary(),
    Article.Item.createTemporary(),
    Article.Item.createTemporary()
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
