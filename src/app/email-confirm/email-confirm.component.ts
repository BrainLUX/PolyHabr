import {Component, OnInit} from '@angular/core';
import {Destination, NavigationService} from "../core/services/navigation.service";

@Component({
  selector: 'poly-email-confirm',
  templateUrl: './email-confirm.component.html',
  styleUrls: ['./email-confirm.component.scss']
})
export class EmailConfirmComponent implements OnInit {

  emailString: string = "kahode5724@keshitv.com";

  constructor(private navigationService: NavigationService) {
  }

  ngOnInit(): void {
  }

  toFeed(e: Event): void {
    e.preventDefault();
    this.navigationService.navigateTo(Destination.FEED);
  }

}
