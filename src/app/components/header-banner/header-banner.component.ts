import { Component, Input } from '@angular/core';
import { TitleBoldComponent } from '../title-bold/title-bold.component';

@Component({
  selector: 'app-header-banner',
  standalone: true,
  imports: [TitleBoldComponent],
  template: `
   <div class="note_topic">
    <app-title-bold [title]="title"></app-title-bold>
  </div>
  `,
  styles: `.note_topic {
    background-color: #ecf2ff;
    padding: 30px;
    border-radius: 8px;
    background-image: url("/../../assets/images/ChatBc.png");
    background-repeat: no-repeat;
    background-position: top 5px right 40px;
    background-size: 140px;
    margin-bottom: 20px;
  }`
})
export class HeaderBannerComponent {
   @Input()title=""
}
