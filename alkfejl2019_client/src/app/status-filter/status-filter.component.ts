import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'status-filter',
  templateUrl: './status-filter.component.html',
  styleUrls: [ './status-filter.component.css' ]
})

export class StatusFilterComponent  {

  @Input('status') selectedStatus: string = '';
  public statuses: string[] = [ 'NEW', 'OTHER' ];
  @Output() onChange = new EventEmitter<string>();

  constructor() { }

  onFilterChange(status: string): void {
    this.selectedStatus = status;
    this.onChange.emit(status);
  }
}