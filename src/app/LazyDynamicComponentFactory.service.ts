import { ComponentFactory, Inject, Injectable, Injector, NgModuleFactoryLoader, Type } from '@angular/core';
import { Route, ROUTES } from '@angular/router';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class LazyDynamicComponentFactoryService {

  private appPaths: Route[];
  constructor(
    private loader: NgModuleFactoryLoader,
    private injector: Injector,

    @Inject(ROUTES)
    loadablePaths: Route[][]
  ) {
    this.appPaths = loadablePaths.reduce((a, b) => a.concat(b));
  }

  buildComponentFactory<T>(componentPath: string, componentToken: any): Observable<ComponentFactory<T>> {
    const lazyPath = this.appPaths.find(r => r.path === componentPath);

    return Observable.fromPromise(
                          this.loader.load(lazyPath.loadChildren.toString()))
                        .map(factory => {
                          const module = factory.create(this.injector);
                          const entryComponentType = module.injector.get<Type<T>>(componentToken);
                          const componentFactory = module.componentFactoryResolver.resolveComponentFactory<T>(entryComponentType);

                          return componentFactory;
                        });
  }

}
