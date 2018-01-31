import { Component, ComponentFactory, ViewChild, ViewContainerRef } from '@angular/core';

import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';

import { LazyDynamicComponentFactoryService } from './LazyDynamicComponentFactory.service';
import { PlugInBase } from './plugins/plugin-base';



@Component({
  selector: 'esw-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dynamic component POC';
  @ViewChild('plugin', {read: ViewContainerRef}) adHost: ViewContainerRef;

  myState = { name: ''};
  constructor(
    private lazyDinamicComponentFactoryService: LazyDynamicComponentFactoryService
  ) { }

  loadComponent(value) {
    if (!value) {
      return;
    }

    this.lazyDinamicComponentFactoryService.buildComponentFactory<PlugInBase>(value, 'PlugInBase')
    .take(1)
    .subscribe( (componentFactory: ComponentFactory<PlugInBase>) => {
      const viewContainerRef = this.adHost;
      viewContainerRef.clear();
      const componentRef = viewContainerRef.createComponent(componentFactory);
      (<PlugInBase>componentRef.instance).data = this.myState;
      (<PlugInBase>componentRef.instance).dataChange.subscribe (
        (event) =>
        {
          alert(JSON.stringify(event));
        }
      );
      componentRef.onDestroy( this.reportDestroy);
    });
  }

  reportDestroy(c) {
    console.log(`destroyed component ${c}`);
  }

  loadComponentA() {
    this.loadComponent('plugA');
  }


  loadComponentB() {
    this.loadComponent('plugB');
  }
}
