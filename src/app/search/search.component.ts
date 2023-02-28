import {Component, OnInit, ViewChild} from '@angular/core';
import {SortBarState} from "../../data/models/sort-bar-state";
import {Article} from "../../data/models/article";
import {SortBarComponent} from "../shared/components/sort-bar/sort-bar.component";
import {ArticlesService} from "../core/services/articles.service";

@Component({
  selector: 'poly-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  @ViewChild("sortBar")
  sortBarComponent!: SortBarComponent;

  readonly SortBarState = SortBarState;

  articles: Article.Item[] = [];

  constructor(private articlesService: ArticlesService) {
  }

  ngOnInit(): void {
  }

  onSearch(text: string): void {
    if (text.trim().length < 3) {
      this.articles = [];
    } else {
      this.articlesService.search(() => {
      }, text).subscribe(result => {
        console.log(result.contents!!)
        this.articles = result.contents!!;
      });
    }

    this.sortBarComponent.state = this.articles.length > 0 ? SortBarState.SEARCH_SORT : SortBarState.SEARCH;
  }

}
