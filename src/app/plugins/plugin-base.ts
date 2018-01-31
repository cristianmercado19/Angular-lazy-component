import { EventEmitter, Input, Output, Type } from '@angular/core';

export class PlugInBase {
  @Input() data: any;
  @Output() dataChange: EventEmitter<any>;
}
