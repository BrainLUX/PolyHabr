import {Component} from '@angular/core';
import {Destination, NavigationService} from "../core/services/navigation.service";
import {DisciplineTypesService} from "../core/services/discipline_types.service";
import {Article} from "../../data/models/article";

@Component({
  selector: 'poly-type',
  templateUrl: './type.component.html',
  styleUrls: ['./type.component.scss']
})
export class TypeComponent {

  types: Article.Type[] = [];
  selectedType!: Article.Type;

  constructor(private navigationService: NavigationService, private disciplineTypesService: DisciplineTypesService) {
    disciplineTypesService.getTypes(() => {
    }).subscribe(result => this.types = result.contents);
  }

  toFeed(e: Event): void {
    e.preventDefault();
    this.navigationService.navigateTo(Destination.FEED);
  }
}
