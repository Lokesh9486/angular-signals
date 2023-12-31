import { Component, Input } from '@angular/core';

@Component({
  selector: 'sidebar-menu-title',
  standalone: true,
  imports: [],
  template: `
    <p class="title">
       {{title}}
    </p>
  `,
  styleUrl: './sidebar-menu-title.component.scss'
})
export class SidebarMenuTitleComponent {
   @Input({required: true})title:String="";
}
