import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Destination, NavigationService} from "../core/services/navigation.service";
import {RegisterErrorConfig} from "../registration/registration.component";
import {AuthorizationService} from "../core/services/authorization.service";
import {ApiService} from "../core/services/api.service";
import {Authorization} from "../../data/models/authorization";
import {ErrorCodes} from "../../data/models/error-codes";

@Component({
  selector: 'poly-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {

  @ViewChild("passwordInputElement")
  passwordInputElement!: ElementRef;

  @ViewChild("passwordAgainInputElement")
  passwordAgainInputElement!: ElementRef;

  registerErrorConfig: RegisterErrorConfig = {
    emailError: null,
    nicknameError: null,
    nameError: null,
    surnameError: null,
    passwordError: null,
    passwordAgainError: null
  }

  constructor(private navigationService: NavigationService, private authorizationService: AuthorizationService,
              private apiService: ApiService) { }

  ngOnInit(): void {
  }

  toFeed(e: Event): void {
    e.preventDefault();
    this.navigationService.navigateTo(Destination.FEED);
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

  confirmPassword(e: Event): void {
    if (this.checkPasswordsIdentical()) {
      e.preventDefault();
      const passwordToken: string | null = this.apiService.getCookie("password-token");
      console.log(passwordToken);
      if (passwordToken != null) {
        const data: Authorization.SavePassword = {
          token: passwordToken,
          newPassword: this.passwordInputElement.nativeElement.value
        }
        this.authorizationService.savePassword(() => {
        }, data).subscribe();
      }
    }
  }

}
