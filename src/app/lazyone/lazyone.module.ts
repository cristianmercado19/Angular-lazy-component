import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { PlugInBase } from '../plugins/plugin-base';
import { PluginAComponent } from './plugin-a/plugin-a.component';
import { ExtraAComponent } from './plugin-a/extra-a/extra-a.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  declarations:    [ PluginAComponent, ExtraAComponent ],
  entryComponents: [ PluginAComponent ],
  exports:         [ PluginAComponent ],
  providers: [ { provide: 'PlugInBase', useValue: PluginAComponent } ]
})
export class LazyoneModule {
}
