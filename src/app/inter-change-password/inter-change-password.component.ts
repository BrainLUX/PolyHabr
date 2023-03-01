import { Component, OnInit } from '@angular/core';
import {AuthorizationService} from "../core/services/authorization.service";
import {ApiService} from "../core/services/api.service";
import {Destination, NavigationService} from "../core/services/navigation.service";

@Component({
  selector: 'poly-inter-change-password',
  templateUrl: './inter-change-password.component.html',
  styleUrls: ['./inter-change-password.component.scss']
})
export class InterChangePasswordComponent implements OnInit {

  constructor(private authorizationService: AuthorizationService, private apiService: ApiService,
              private navigationService: NavigationService) { }

  ngOnInit(): void {
    const passwordToken: string = window.location.search.replace("?token=", "");
    this.apiService.setCookie("password-token", passwordToken);
    this.navigationService.navigateTo(Destination.CHANGE_PASSWORD);
  }

}
