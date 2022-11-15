import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './layout/header/header.component';
import { CardComponent } from './components/card/card.component';
import {SortBarComponent} from "./components/sort-bar/sort-bar.component";
import { MenuComponent } from './layout/menu/menu.component';
import {ClickOutsideModule} from "ng-click-outside";



@NgModule({
    declarations: [
        HeaderComponent,
        SortBarComponent,
        CardComponent,
        MenuComponent
    ],
    exports: [
        HeaderComponent,
        SortBarComponent,
        CardComponent
    ],
    imports: [
        CommonModule,
      ClickOutsideModule
    ]
})
export class SharedModule { }
