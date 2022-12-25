import {Component, OnInit} from '@angular/core';
import {Destination, NavigationService} from "../core/services/navigation.service";
import {ErrorCodes} from "../../data/models/error-codes";

@Component({
  selector: 'poly-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  readonly ErrorCodes = ErrorCodes;
  loginError: boolean = false;
  constructor(private navigationService: NavigationService) {
  }

  ngOnInit(): void {
  }

  toFeed(e: Event): void {
    e.preventDefault();
    this.navigationService.navigateTo(Destination.FEED);
  }

  toRegistration(e: Event): void {
    e.preventDefault();
    this.navigationService.navigateTo(Destination.REGISTER);
  }
}
