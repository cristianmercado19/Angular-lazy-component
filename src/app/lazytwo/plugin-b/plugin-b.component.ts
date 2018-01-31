import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { PlugInBase } from '../../plugins/plugin-base';

@Component({

  selector: 'app-plugin-b',
  templateUrl: './plugin-b.component.html',
  styleUrls: ['./plugin-b.component.css']
})
export class PluginBComponent implements PlugInBase, OnInit {
  private _data: any;

  get data(){
    return this._data;
  }
  set data( d: any){
    this._data = d;
    this.dataChange.emit(this._data);
  }

  // @Input() data: any;
  @Output() dataChange: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit() {
    console.log(`plugin B instanciated`);
  }

}
