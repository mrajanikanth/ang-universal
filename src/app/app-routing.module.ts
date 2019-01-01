import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {Error404Component} from './components/error404/error404.component';
import { SpeakerOverviewModule } from './features/speaker-overview/speaker-overview.module';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'speaker-overview',
    children: [...SpeakerOverviewModule.getRoutes()]
  },
  {
    path: 'talks-overview',
    loadChildren: './features/talk-overview/talk-overview.module#TalkOverviewModule'
  },
  {
    path: '**',
    component: Error404Component
  }
  // !!! NO ROUTES AFTER THE FALLBACK ROUTE => ( path: '**' )
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes, {}),
    SpeakerOverviewModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
