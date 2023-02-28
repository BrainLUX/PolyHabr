import {Component, OnInit} from '@angular/core';
import {Article} from "../../data/models/article";
import {ProfileSortState} from "../../data/models/profile-sort-state";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'poly-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  readonly ProfileSortState = ProfileSortState;
  name: string = "Дмитриев";
  nickname: string = "Admin";
  activeTab: ProfileSortState = ProfileSortState.PUBLISHED;
  articles: Article.Item[] = [];

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.url.subscribe(_ => {
      if (this.route.snapshot.fragment == ProfileSortState.PUBLISHED) {
        this.activeTab = ProfileSortState.PUBLISHED;
        this.articles = [];
      } else if (this.route.snapshot.fragment == ProfileSortState.FAVOURITES) {
        this.activeTab = ProfileSortState.FAVOURITES;
        this.articles = [];
      }
    });
  }

  onTabClick(state: ProfileSortState): void {
    this.activeTab = state;
    switch (state) {
      case ProfileSortState.PUBLISHED:
        window.location.href = "/profile#published";
        this.articles = [];
        break;
      case ProfileSortState.FAVOURITES:
        window.location.href = "/profile#favourites";
        this.articles = [ ];
        break;
    }
  }

  isTabActive(state: ProfileSortState): boolean {
    return this.activeTab == state;
  }

}
