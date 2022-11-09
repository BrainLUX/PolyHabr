import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {FeedComponent} from "./feed/feed/feed.component";

const routes: Routes = [
  {
    path: '',
    component: FeedComponent,
    data: {
      requiredRoles: []
    }
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
