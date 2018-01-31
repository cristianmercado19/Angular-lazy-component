import { CommonModule } from '@angular/common';
import { NgModule, NgModuleFactoryLoader, SystemJsNgModuleLoader } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { provideRoutes } from '@angular/router';

import { AppComponent } from './app.component';
import { LazyDynamicComponentFactoryService } from './LazyDynamicComponentFactory.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule
  ],
  providers: [
    { provide: NgModuleFactoryLoader, useClass: SystemJsNgModuleLoader },
    LazyDynamicComponentFactoryService,
    provideRoutes(
      [
        { path: 'plugA', loadChildren: './lazyone/lazyone.module#LazyoneModule' },
        { path: 'plugB', loadChildren: './lazytwo/lazytwo.module#LazytwoModule' }
      ])
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
