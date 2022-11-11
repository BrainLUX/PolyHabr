import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedComponent } from './feed/feed.component';
import {FeedRoutingModule} from "./feed-routing.module";
import { SortBarComponent } from './feed/sort-bar/sort-bar.component';
import {SharedModule} from "../shared/shared.module";



@NgModule({
  declarations: [
    FeedComponent,
    SortBarComponent
  ],
  imports: [
    CommonModule,
    FeedRoutingModule,
    SharedModule
  ]
})
export class FeedModule { }
