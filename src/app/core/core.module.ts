import {ModuleWithProviders, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {AppStateService} from './services/app-state.service';
import {AppStateServerService} from './services/app-state.server.service';
import {AppStateClientService} from './services/app-state.client.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class CoreModule {
  static forServer(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [
        {
          provide: AppStateService,
          useClass: AppStateServerService
        }
      ]
    };
  }

  static forClient(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [
        {
          provide: AppStateService,
          useClass: AppStateClientService
        }
      ]
    };
  }
}
