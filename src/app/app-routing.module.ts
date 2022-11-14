import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {FeedComponent} from "./feed/feed.component";
import {SearchComponent} from "./search/search.component";
import {Destination} from "./core/services/navigation.service";
import {LoginComponent} from "./login/login.component";

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
