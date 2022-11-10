import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedComponent } from './feed/feed.component';
import {FeedRoutingModule} from "./feed-routing.module";
import { SortBarComponent } from './feed/sort-bar/sort-bar.component';



@NgModule({
  declarations: [
    FeedComponent,
    SortBarComponent
  ],
  imports: [
    CommonModule,
    FeedRoutingModule
  ]
})
export class FeedModule { }
