import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpeakerListComponent } from './speaker-list/speaker-list.component';
import {Routes} from '@angular/router';

@NgModule({
  declarations: [SpeakerListComponent],
  imports: [
    CommonModule
  ]
})
export class SpeakerOverviewModule {
  static getRoutes(): Routes {
    return [
      {
        path: '',
        component: SpeakerListComponent
      }
    ];
  }
}
