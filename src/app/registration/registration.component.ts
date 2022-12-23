import { Component, OnInit } from '@angular/core';
import {Destination, NavigationService} from "../core/services/navigation.service";

@Component({
  selector: 'poly-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  constructor(private navigationService: NavigationService) { }

  ngOnInit(): void {
  }

  toFeed(e: Event): void {
    e.preventDefault();
    this.navigationService.navigateTo(Destination.FEED);
  }

  toLogin(e: Event): void {
    e.preventDefault();
    this.navigationService.navigateTo(Destination.LOGIN);
  }

}
