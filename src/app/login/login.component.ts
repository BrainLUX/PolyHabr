import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Destination, NavigationService} from "../core/services/navigation.service";
import {ErrorCodes} from "../../data/models/error-codes";
import {AuthorizationService} from "../core/services/authorization.service";
import {RegisterErrorConfig} from "../registration/registration.component";
import {RegexType} from "../../data/models/regex-types";
import {InputFieldsType} from "../../data/models/input-field-types";
import {Authorization} from "../../data/models/authorization";
import {ApiService} from "../core/services/api.service";

@Component({
  selector: 'poly-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @ViewChild("nicknameInputElement")
  nicknameInputElement!: ElementRef;

  @ViewChild("passwordInputElement")
  passwordInputElement!: ElementRef;
  readonly RegexType = RegexType;
  readonly InputFieldsType = InputFieldsType;
  nicknameInputValue: string | null = null;

  registerErrorConfig: RegisterErrorConfig = {
    emailError: null,
    nicknameError: null,
    nameError: null,
    surnameError: null,
    passwordError: null,
    passwordAgainError: null
  }
  constructor(private navigationService: NavigationService, private authorizationService: AuthorizationService,
              private apiService: ApiService) {
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

  onEnterButtonClicked(e: Event): void {
    if (this.registerErrorConfig.nicknameError == null) {
      e.preventDefault();
      const data: Authorization.SignIn = {
        username: this.nicknameInputElement.nativeElement.value,
        password: this.passwordInputElement.nativeElement.value
      }
      this.authorizationService.signIn(() => {
        this.registerErrorConfig.passwordError = ErrorCodes.LOGIN_ERROR;
      }, data).subscribe(result => {
        this.apiService.setAccessToken(result.accessToken);
        this.navigationService.navigateTo(Destination.FEED);
      });
    }
  }

  checkFieldValidation(regexType: RegexType, element: any, errorField: InputFieldsType): void {
    let parseString: string;
    if (element instanceof HTMLInputElement) {
      parseString = String(element.value);
    } else {
      parseString = String(element);
    }
    const regex = new RegExp(regexType, 'g');
    const result = parseString.match(regex);
    if (result == null) {
      if (parseString.length > 0) {
        switch (errorField) {
          case InputFieldsType.NICKNAME:
            this.registerErrorConfig.nicknameError = ErrorCodes.NICKNAME_LOGIN;
            break;
        }
      } else {
        switch (errorField) {
          case InputFieldsType.NICKNAME:
            this.registerErrorConfig.nicknameError = null;
            break;
        }
      }
    } else {
      switch (errorField) {
        case InputFieldsType.NICKNAME:
          this.registerErrorConfig.nicknameError = null;
          break;
      }
    }
  }
}
