import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {Article} from "../../../../data/models/article";

@Component({
  selector: 'poly-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CardComponent implements OnInit {

  @Input()
  article!: Article.Item;

  ngOnInit(): void {
  }

}
