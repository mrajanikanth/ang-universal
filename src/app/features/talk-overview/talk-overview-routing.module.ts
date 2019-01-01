import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TalksListComponent} from '../features/talk-overview/talks-list/talks-list.component';

const routes: Routes = [
  { path: '', component: TalksListComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TalkOverviewRoutingModule { }
