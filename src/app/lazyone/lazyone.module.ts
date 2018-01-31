import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { PlugInBase } from '../plugins/plugin-base';
import { PluginAComponent } from './plugin-a/plugin-a.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  declarations:    [ PluginAComponent ],
  entryComponents: [ PluginAComponent ],
  exports:         [ PluginAComponent ],
  providers: [ { provide: 'PlugInBase', useValue: PluginAComponent } ]
})
export class LazyoneModule {
}
