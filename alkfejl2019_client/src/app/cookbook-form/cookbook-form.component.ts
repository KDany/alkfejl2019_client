import { Component, OnChanges, Input, Output, EventEmitter  } from '@angular/core'; 
import { Cookbook } from '../Cookbook';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'cookbook-form',
  templateUrl: './cookbook-form.component.html',
  styleUrls: ['./cookbook-form.component.css']
})
export class CookbookFormComponent implements OnChanges {

  @Input() cookbook: Cookbook
  public model: Cookbook
  @Output() onSubmit = new EventEmitter<Cookbook>();

  constructor() { }

  ngOnChanges(): void {
    this.model = Object.assign({}, this.cookbook);
  }
  
  submit(form: NgForm): void {
    if (!form.valid) {
      return;
    }
    this.onSubmit.emit(this.model);
  }

}
