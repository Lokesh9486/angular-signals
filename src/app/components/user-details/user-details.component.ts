import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { TitleBoldComponent } from '../title-bold/title-bold.component';

interface dataType{
  images:number,
  title:string,
  work:string
}

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [TitleBoldComponent],
  template: `
    <div class="d-flex align-items-center gap-3">
      <img
        class="rounded-circle user_image"
        src="../../../assets/images/user-{{ data.images }}.jpg"
        alt=""
      />
      <div>
        <app-title-bold body_con [title]="data.title "></app-title-bold>
        <p class="title_light">{{data.work}}</p>
      </div>
    </div>
  `,
  styles: `.user_image{
    width: 35px;
}`,
})

export class UserDetailsComponent {
  @Input() data! :dataType;

   
}
