import {Component, OnInit} from '@angular/core';
import {Sort} from "../../../../data/models/sort-type";

@Component({
  selector: 'poly-sort-bar',
  templateUrl: './sort-bar.component.html',
  styleUrls: ['./sort-bar.component.scss']
})
export class SortBarComponent implements OnInit {

  readonly sortTypes: Sort.Type[] = [
    new Sort.Type("По дате выпуска"),
    new Sort.Type("По просмотрам", true),
    new Sort.Type("По рейтингу", true)
  ];

  readonly sortOptions: Sort.Option[] = [
    new Sort.Option("За неделю"),
    new Sort.Option("За месяц"),
    new Sort.Option("За год"),
    new Sort.Option("За всё время"),
  ];

  private selectedSort: Sort.Type = this.sortTypes[0];
  private selectedOption: Sort.Option | undefined = undefined;

  constructor() {
  }

  ngOnInit(): void {
  }

  selectSort(sortType: Sort.Type): void {
    if (this.selectedSort != sortType) {
      this.selectedSort.clearOption();
      this.selectedOption = undefined;
      this.selectedSort = sortType;
      if (sortType.hasOptions) {
        this.selectOption(this.sortOptions[0]);
        this.selectedSort.selectOption(this.sortOptions[0]);
      }
    } else {
      if (sortType.hasOptions) {
        this.selectedOption = this.selectedSort.selectedOption;
      }
    }
  }

  isSelected(sortType: Sort.Type): boolean {
    return this.selectedSort == sortType;
  }

  getSelectedOption(): Sort.Option | undefined {
    return this.selectedOption;
  }

  isOptionSelected(option: Sort.Option): boolean {
    return this.selectedOption == option;
  }

  selectOption(option: Sort.Option): void {
    this.selectedOption = option;
  }

  confirmSelect(): void {
    this.selectedSort.selectOption(this.selectedOption);
    this.selectedOption = undefined;
  }
}

