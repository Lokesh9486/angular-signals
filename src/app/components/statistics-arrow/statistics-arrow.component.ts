import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
import { SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-statistics-arrow',
  standalone: true,
  imports: [NgClass],
  template: `
    <div class="d-flex align-items-center gap-3">
      <div [ngClass]="['arrow-con', className]">
        <ng-content [innerHTML]="svgarrow"></ng-content>
      </div>
     <p class="title_light py-3"><strong>+9%</strong> last year</p>
    </div>
  `,
  styles: `
  .arrow-con{
    background-color:#e6fffa;
    width:25px;
    height:25px;
    border-radius:50%;
    display:flex;
    align-items:center;
    justify-content:center;
    &.arrow_danger{
      background-color:#fdede8;
    }
    &.arrow_success{
      background-color:#e6fffa;
    }
  }
  `
})
export class StatisticsArrowComponent {
  @Input()className:String=""

}
