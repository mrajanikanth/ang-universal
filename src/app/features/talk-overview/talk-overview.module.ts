import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TalkOverviewRoutingModule } from './talk-overview-routing.module';
import { TalksListComponent } from '../features/talk-overview/talks-list/talks-list.component';

@NgModule({
  declarations: [TalksListComponent],
  imports: [
    CommonModule,
    TalkOverviewRoutingModule
  ]
})
export class TalkOverviewModule { }
