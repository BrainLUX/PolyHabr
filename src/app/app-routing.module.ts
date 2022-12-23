import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {FeedComponent} from "./feed/feed.component";
import {SearchComponent} from "./search/search.component";
import {Destination} from "./core/services/navigation.service";
import {LoginComponent} from "./login/login.component";
import {RegistrationComponent} from "./registration/registration.component";
import {ArticleComponent} from "./article/article.component";
import {ProfileComponent} from "./profile/profile.component";
import {EmailConfirmComponent} from "./email-confirm/email-confirm.component";

const routes: Routes = [
  {
    path: Destination.FEED.toPath(),
    component: FeedComponent
  },
  {
    path: Destination.SEARCH.toPath(),
    component: SearchComponent
  },
  {
    path: Destination.LOGIN.toPath(),
    component: LoginComponent
  },
  {
    path: Destination.REGISTER.toPath(),
    component: RegistrationComponent
  },
  {
    path: Destination.ARTICLE.toPath(),
    component: ArticleComponent
  },
  {
    path: Destination.PROFILE.toPath(),
    component: ProfileComponent
  },
  {
    path: Destination.EMAIL_CONFIRM.toPath(),
    component: EmailConfirmComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {

    preloadingStrategy: PreloadAllModules,
    relativeLinkResolution: 'legacy'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
