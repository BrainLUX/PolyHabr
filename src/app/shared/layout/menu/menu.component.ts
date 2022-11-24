import {Component, OnInit} from '@angular/core';
import {Destination, NavigationService} from "../../../core/services/navigation.service";

@Component({
  selector: 'poly-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  state: MenuState = MenuState.HIDDEN;

  constructor(private navigationService: NavigationService) {
  }

  ngOnInit(): void {
  }

  showMenu(): void {
    this.state = MenuState.SHOWING;
    setTimeout(() => {
      this.state = MenuState.SHOWN;
    }, 100);
  }

  isShown(): Boolean {
    return this.state == MenuState.SHOWING || this.state == MenuState.SHOWN;
  }

  hideMenu(): void {
    if (this.state == MenuState.SHOWN) {
      this.state = MenuState.HIDDEN;
    }
  }

  toLogin(e: Event): void {
    e.preventDefault();
    this.navigationService.navigateTo(Destination.LOGIN);
  }

  toRegistration(e: Event): void {
    e.preventDefault();
    this.navigationService.navigateTo(Destination.REGISTRATION);
  }

}

enum MenuState {
  HIDDEN, SHOWING, SHOWN
}
