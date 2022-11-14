import {Component, OnInit} from '@angular/core';
import {Destination, NavigationService} from "../../../core/services/navigation.service";

@Component({
  selector: 'poly-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private navigationService: NavigationService) {
  }

  ngOnInit(): void {
  }

  toFeed(e: Event): void {
    e.preventDefault();
    this.navigationService.navigateTo(Destination.FEED);
  }

  toSearch(e: Event): void {
    e.preventDefault();
    this.navigationService.navigateTo(Destination.SEARCH);
  }

}
