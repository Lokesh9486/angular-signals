import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SanitizeHtmlPipe } from '../../../pipes/sanitize-html.pipe';

@Component({
  selector: 'app-sidebar-menu',
  standalone: true,
  imports: [RouterModule,SanitizeHtmlPipe],
  template: `
    <ul class="sidebar_menu_ul">
      @for (item of data; track $index) {
    <li>
      <a
        routerLink="{{ item.route }}"
        routerLinkActive="active"
        class="sidebar_menu"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          [innerHTML]="item.svg | sanitizeHtml"
        ></svg>
        <span>{{ item.name }}</span>
      </a>
    </li>
    }
    </ul>
  `,
  styleUrl: './sidebar-menu.component.scss',
})
export class SidebarMenuComponent {
  @Input() data!: any;
}
