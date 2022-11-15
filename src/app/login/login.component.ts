import { Component, OnInit } from '@angular/core';
import {Destination, NavigationService} from "../core/services/navigation.service";

@Component({
  selector: 'poly-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private navigationService: NavigationService) { }

  ngOnInit(): void {
  }

  toFeed(e: Event): void {
    e.preventDefault();
    this.navigationService.navigateTo(Destination.FEED);
  }

  toRegister(e: Event): void {
    e.preventDefault();
    this.navigationService.navigateTo(Destination.REGISTER);
  }
}
