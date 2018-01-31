import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { PlugInBase } from '../../plugins/plugin-base';

@Component({

  selector: 'app-plugin-a',
  templateUrl: './plugin-a.component.html',
  styleUrls: ['./plugin-a.component.css']
})
export class PluginAComponent implements PlugInBase, OnInit, OnDestroy {

  @Input() data:any;

  @Output() dataChange: EventEmitter<any> = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
    console.log(`plugin A instanciated`);
  }

  ngOnDestroy(){
    this.dataChange.complete();
    console.log('destroyed');
  }

  emit() {
    this.dataChange.emit( this.data);
  }
}
