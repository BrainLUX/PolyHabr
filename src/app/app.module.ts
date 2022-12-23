import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {RouterModule} from "@angular/router";
import {AppRoutingModule} from "./app-routing.module";
import {SharedModule} from "./shared/shared.module";
import {DataModule} from "../data/data.module";
import {SearchComponent} from './search/search.component';
import {FeedComponent} from "./feed/feed.component";
import {CoreModule} from "./core/core.module";
import { LoginComponent } from './login/login.component';
import { ArticleComponent } from './article/article.component';
import { RegistrationComponent } from './registration/registration.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    FeedComponent,
    SearchComponent,
    LoginComponent,
    RegistrationComponent,
    LoginComponent,
    ArticleComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    SharedModule,
    DataModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
