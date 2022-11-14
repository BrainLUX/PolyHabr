import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './layout/header/header.component';
import { CardComponent } from './components/card/card.component';
import {SortBarComponent} from "./components/sort-bar/sort-bar.component";



@NgModule({
    declarations: [
        HeaderComponent,
        SortBarComponent,
        CardComponent
    ],
    exports: [
        HeaderComponent,
        SortBarComponent,
        CardComponent
    ],
    imports: [
        CommonModule
    ]
})
export class SharedModule { }
