import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Destination, NavigationService} from "../core/services/navigation.service";
import {ErrorCodes} from "../../data/models/error-codes";

@Component({
  selector: 'poly-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  @ViewChild("emailInputElement")
  emailInputElement!: ElementRef;

  @ViewChild("surnameInputElement")
  surnameInputElement!: ElementRef;

  @ViewChild("nicknameInputElement")
  nicknameInputElement!: ElementRef;

  @ViewChild("passwordInputElement")
  passwordInputElement!: ElementRef;

  @ViewChild("passwordAgainInputElement")
  passwordAgainInputElement!: ElementRef;

  readonly RegexType = RegexType;
  readonly InputFieldsType = InputFieldsType;
  surnameInputValue: string | null = null;
  nicknameInputValue: string | null = null;

  registerErrorConfig: RegisterErrorConfig = {
    emailError: null,
    nicknameError: null,
    surnameError: null,
    passwordError: null,
    passwordAgainError: null
  }

  constructor(private navigationService: NavigationService) {
  }

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

  onEnterButtonClicked(e: Event): void {
    if (this.checkEnterValidation() && this.checkPasswordsIdentical()) {
      e.preventDefault();
      this.navigationService.navigateTo(Destination.PROFILE);
    } else {
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
          case InputFieldsType.EMAIL:
            this.registerErrorConfig.emailError = ErrorCodes.INCORRECT_EMAIL;
            break;
          case InputFieldsType.NICKNAME:
            this.registerErrorConfig.nicknameError = ErrorCodes.NICKNAME_LOGIN;
            break;
          case InputFieldsType.SURNAME:
            this.registerErrorConfig.surnameError = ErrorCodes.INCORRECT_SURNAME;
            break;
          case InputFieldsType.PASSWORD:
            break;
          case InputFieldsType.PASSWORD_AGAIN:
            break;
        }
      } else {
        switch (errorField) {
          case InputFieldsType.EMAIL:
            this.registerErrorConfig.emailError = null;
            break;
          case InputFieldsType.NICKNAME:
            this.registerErrorConfig.nicknameError = null;
            break;
          case InputFieldsType.SURNAME:
            this.registerErrorConfig.surnameError = null;
            break;
          case InputFieldsType.PASSWORD:
            break;
          case InputFieldsType.PASSWORD_AGAIN:
            break;
        }
      }
    } else {
      switch (errorField) {
        case InputFieldsType.EMAIL:
          this.registerErrorConfig.emailError = null;
          break;
        case InputFieldsType.NICKNAME:
          this.registerErrorConfig.nicknameError = null;
          break;
        case InputFieldsType.SURNAME:
          this.registerErrorConfig.surnameError = null;
          break;
        case InputFieldsType.PASSWORD:
          break;
        case InputFieldsType.PASSWORD_AGAIN:
          break;
      }
    }
  }

  checkPasswordsIdentical(): boolean {
    if (this.passwordInputElement.nativeElement.value != this.passwordAgainInputElement.nativeElement.value) {
      this.registerErrorConfig.passwordError = ErrorCodes.PASSWORDS_MISMATCH;
      this.registerErrorConfig.passwordAgainError = ErrorCodes.PASSWORDS_MISMATCH;
      return false;
    } else {
      return true;
    }
  }

  checkEnterValidation(): boolean {
    let legal = true;
    if (this.emailInputElement.nativeElement.value.length > 256) {
      this.registerErrorConfig.emailError = ErrorCodes.EMAIL_BIGGER;
      legal = false;
    }
    if (this.surnameInputElement.nativeElement.value.length > 70) {
      this.registerErrorConfig.surnameError = ErrorCodes.SURNAME_BIGGER;
      legal = false;
    }
    if (this.nicknameInputElement.nativeElement.value.length > 20) {
      this.registerErrorConfig.nicknameError = ErrorCodes.NICKNAME_BIGGER;
      legal = false;
    }
    if (this.nicknameInputElement.nativeElement.value.length < 4) {
      this.registerErrorConfig.nicknameError = ErrorCodes.NICKNAME_LESS;
      legal = false;
    }
    if (this.passwordInputElement.nativeElement.value.length > 72) {
      this.registerErrorConfig.passwordError = ErrorCodes.PASSWORD_BIGGER;
      legal = false;
    }
    if (this.passwordInputElement.nativeElement.value.length < 8) {
      this.registerErrorConfig.passwordError = ErrorCodes.PASSWORD_LESS;
      legal = false;
    }
    if (this.emailInputElement.nativeElement.value.length == 0) {
      this.registerErrorConfig.emailError = ErrorCodes.NON_FILLED_FIELD;
      legal = false;
    }
    if (this.nicknameInputElement.nativeElement.value.length == 0) {
      this.registerErrorConfig.nicknameError = ErrorCodes.NON_FILLED_FIELD;
      legal = false;
    }
    if (this.surnameInputElement.nativeElement.value.length == 0) {
      this.registerErrorConfig.surnameError = ErrorCodes.NON_FILLED_FIELD;
      legal = false;
    }
    if (this.passwordInputElement.nativeElement.value.length == 0) {
      this.registerErrorConfig.passwordError = ErrorCodes.NON_FILLED_FIELD;
      legal = false;
    }
    if (this.passwordAgainInputElement.nativeElement.value.length == 0) {
      this.registerErrorConfig.passwordAgainError = ErrorCodes.NON_FILLED_FIELD;
      legal = false;
    }
    return legal;
  }

}

export interface RegisterErrorConfig {
  emailError: ErrorCodes | null,
  surnameError: ErrorCodes | null,
  nicknameError: ErrorCodes | null,
  passwordError: ErrorCodes | null,
  passwordAgainError: ErrorCodes | null
}

export enum RegexType {
  LOGIN = "^[A-Za-z0-9]+([A-Za-z0-9]*|[._-]?[A-Za-z0-9]+)*$",
  SURNAME = "^[А-ЯЁ][а-яё]*$",
  EMAIL = `^([a-zA-Z0-9\\_\\.\\-]+)@([a-zA-Z0-9\\_\\-]+)(\\.[a-zA-Z]{2,5}){1,2}$`
}

export enum InputFieldsType {
  EMAIL, SURNAME, NICKNAME, PASSWORD, PASSWORD_AGAIN
}
