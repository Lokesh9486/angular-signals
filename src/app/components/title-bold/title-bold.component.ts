import { NgClass } from '@angular/common';
import { Component, Input, OnChanges, SimpleChanges, inject } from '@angular/core';
import { ServiceService } from '../../services/service.service';
import { NgControl } from '@angular/forms';

@Component({
  selector: 'app-title-bold',
  standalone: true,
  imports: [NgClass],
  template: `
    <p [ngClass]="['title_bold',customClass]">{{title}}</p>
  `,
  styles: ``,
  // providers:[ServiceService]
})
export class TitleBoldComponent implements OnChanges{
  @Input()title:String="";
  @Input({required:false})customClass:String="";
  public service = inject(ServiceService);
  // {{service.notes()[0].note}}
  ngOnChanges(changes: SimpleChanges): void {
    // console.log(this.service.notes)
  }
}
