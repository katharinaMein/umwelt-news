import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlleNewsComponent } from './alle-news/alle-news.component';
import { BmuvNewsComponent } from './bmuv-news/bmuv-news.component';
import { GFMNewsComponent } from './gfm-news/gfm-news.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { UDNewsComponent } from './ud-news/ud-news.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: LandingPageComponent
  },
  {
    path: 'alle-news',
    component: AlleNewsComponent
  },
  {
    path: 'ud-news',
    component: UDNewsComponent
  },
  {
    path: 'bmuv-news',
    component: BmuvNewsComponent
  },
  {
    path: 'gfm-news',
    component: GFMNewsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
