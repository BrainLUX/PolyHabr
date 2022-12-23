import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {Article} from "../../../../data/models/article";
import {Destination, NavigationService} from "../../../core/services/navigation.service";

@Component({
  selector: 'poly-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CardComponent implements OnInit {

  @Input()
  article!: Article.Item;

  @Input()
  type: CardType = CardType.DEFAULT;

  @Input()
  isLast: boolean = false;

  constructor(private navigationService: NavigationService) {
  }

  ngOnInit(): void {
  }

  toArticle(e: Event): void {
    e.preventDefault();
    this.navigationService.navigateTo(Destination.ARTICLE);
  }

  isFull(): boolean {
    return this.type == CardType.FULL;
  }

  isShort(): boolean {
    return this.type == CardType.SHORT;
  }

  isDefault(): boolean {
    return this.type == CardType.DEFAULT;
  }
}

export enum CardType {
  DEFAULT, FULL, SHORT
}
