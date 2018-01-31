import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { PlugInBase } from '../plugins/plugin-base';
import { PluginBComponent } from './plugin-b/plugin-b.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  declarations: [PluginBComponent],
  entryComponents: [PluginBComponent],
  exports: [PluginBComponent],
  providers: [ { provide: 'PlugInBase', useValue: PluginBComponent } ]
})
export class LazytwoModule { }
