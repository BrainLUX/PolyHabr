import {Component, ElementRef, ViewChild} from '@angular/core';
import {InputFieldsType} from 'src/data/models/input-field-types';
import {RegexType} from 'src/data/models/regex-types';
import {ErrorCodes} from "../../data/models/error-codes";
import {Destination, NavigationService} from "../core/services/navigation.service";

@Component({
  selector: 'poly-profile-settings',
  templateUrl: './profile-settings.component.html',
  styleUrls: ['./profile-settings.component.scss']
})
export class ProfileSettingsComponent {

  @ViewChild("emailInputElement")
  emailInputElement!: ElementRef;

  @ViewChild("surnameInputElement")
  surnameInputElement!: ElementRef;

  @ViewChild("nicknameInputElement")
  nicknameInputElement!: ElementRef;

  @ViewChild("passwordOldInputElement")
  passwordOldInputElement!: ElementRef;

  @ViewChild("passwordInputElement")
  passwordInputElement!: ElementRef;

  @ViewChild("passwordAgainInputElement")
  passwordAgainInputElement!: ElementRef;

  readonly RegexType = RegexType;
  readonly InputFieldsType = InputFieldsType;
  nicknameInputValue: string | null = null;

  profileSettingsErrorConfig: ProfileSettingsErrorConfig = {
    emailError: null,
    nicknameError: null,
    passwordOldError: null,
    passwordError: null,
    passwordAgainError: null
  }

  constructor(private navigationService: NavigationService) {
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
            this.profileSettingsErrorConfig.emailError = ErrorCodes.INCORRECT_EMAIL;
            break;
          case InputFieldsType.NICKNAME:
            this.profileSettingsErrorConfig.nicknameError = ErrorCodes.NICKNAME_LOGIN;
            break;
        }
      } else {
        switch (errorField) {
          case InputFieldsType.EMAIL:
            this.profileSettingsErrorConfig.emailError = null;
            break;
          case InputFieldsType.NICKNAME:
            this.profileSettingsErrorConfig.nicknameError = null;
            break;
        }
      }
    } else {
      switch (errorField) {
        case InputFieldsType.EMAIL:
          this.profileSettingsErrorConfig.emailError = null;
          break;
        case InputFieldsType.NICKNAME:
          this.profileSettingsErrorConfig.nicknameError = null;
          break;
      }
    }
  }

  onClickConfirmChanges(e: Event): void {
    if (this.checkEnterValidation() && this.checkPasswordsIdentical()) {
      e.preventDefault();
    }
  }

  toTypes(e: Event): void {
    e.preventDefault();
    this.navigationService.navigateTo(Destination.TYPES);
  }

  checkPasswordsIdentical(): boolean {
    if (this.passwordInputElement.nativeElement.value != this.passwordAgainInputElement.nativeElement.value) {
      this.profileSettingsErrorConfig.passwordError = ErrorCodes.PASSWORDS_MISMATCH;
      this.profileSettingsErrorConfig.passwordAgainError = ErrorCodes.PASSWORDS_MISMATCH;
      return false;
    } else {
      return true;
    }
  }

  checkEnterValidation(): boolean {
    let legal = true;
    if (this.emailInputElement.nativeElement.value.length > 256) {
      this.profileSettingsErrorConfig.emailError = ErrorCodes.EMAIL_BIGGER;
      legal = false;
    }
    if (this.nicknameInputElement.nativeElement.value.length > 20) {
      this.profileSettingsErrorConfig.nicknameError = ErrorCodes.NICKNAME_BIGGER;
      legal = false;
    }
    if (this.nicknameInputElement.nativeElement.value.length < 4) {
      this.profileSettingsErrorConfig.nicknameError = ErrorCodes.NICKNAME_LESS;
      legal = false;
    }
    if (this.passwordInputElement.nativeElement.value.length > 72) {
      this.profileSettingsErrorConfig.passwordError = ErrorCodes.PASSWORD_BIGGER;
      legal = false;
    }
    if (this.passwordInputElement.nativeElement.value.length < 8) {
      this.profileSettingsErrorConfig.passwordError = ErrorCodes.PASSWORD_LESS;
      legal = false;
    }
    if (this.emailInputElement.nativeElement.value.length == 0) {
      this.profileSettingsErrorConfig.emailError = ErrorCodes.NON_FILLED_FIELD;
      legal = false;
    }
    if (this.nicknameInputElement.nativeElement.value.length == 0) {
      this.profileSettingsErrorConfig.nicknameError = ErrorCodes.NON_FILLED_FIELD;
      legal = false;
    }
    if (this.passwordOldInputElement.nativeElement.value.length == 0) {
      this.profileSettingsErrorConfig.passwordOldError = ErrorCodes.NON_FILLED_FIELD;
      legal = false;
    }
    if (this.passwordInputElement.nativeElement.value.length == 0) {
      this.profileSettingsErrorConfig.passwordError = ErrorCodes.NON_FILLED_FIELD;
      legal = false;
    }
    if (this.passwordAgainInputElement.nativeElement.value.length == 0) {
      this.profileSettingsErrorConfig.passwordAgainError = ErrorCodes.NON_FILLED_FIELD;
      legal = false;
    }
    return legal;
  }

}

export interface ProfileSettingsErrorConfig {
  emailError: ErrorCodes | null,
  nicknameError: ErrorCodes | null,
  passwordOldError: ErrorCodes | null,
  passwordError: ErrorCodes | null,
  passwordAgainError: ErrorCodes | null
}
