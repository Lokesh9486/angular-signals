import { NgClass, NgOptimizedImage } from '@angular/common';
import { Component, Injector, OnChanges, SimpleChanges, effect, inject } from '@angular/core';
import { SidebarMenuTitleComponent } from './sidebar-menu-title/sidebar-menu-title.component';
import { RouterModule } from '@angular/router';
import { SidebarMenuComponent } from './sidebar-menu/sidebar-menu.component';
import { SanitizeHtmlPipe } from '../../pipes/sanitize-html.pipe';
import { ServiceService } from '../../services/service.service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    NgOptimizedImage,
    SidebarMenuTitleComponent,
    RouterModule,
    SidebarMenuComponent,
    SanitizeHtmlPipe,
    NgClass
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})

export class SidebarComponent{
  sideBarDataHome: any = [
    {
      route: '/analytical',
      name: 'Analytical',
      svg: `
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
      <path d="M3.6 15h10.55"></path>
      <path d="M6.551 4.938l3.26 10.034"></path>
      <path d="M17.032 4.636l-8.535 6.201"></path>
      <path d="M20.559 14.51l-8.535 -6.201"></path>
      <path d="M12.257 20.916l3.261 -10.034"></path>`,
    },
    {
      route: '/notes',
      name: 'Notes',
      svg: `
  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
  <path d="M13 20l7 -7"></path>
  <path d="M13 20v-6a1 1 0 0 1 1 -1h6v-7a2 2 0 0 0 -2 -2h-12a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7"></path>`,
    },
    {
      route: '/employee',
      name: 'Employee',
      svg: `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M6.04 14.831l4.46 -4.331"></path>
        <path d="M12.555 20.82c4.55 -3.456 7.582 -8.639 8.426 -14.405a1.668 1.668 0 0 0 -.934 -1.767a19.647 19.647 0 0 0 -8.047 -1.648a19.647 19.647 0 0 0 -8.047 1.647a1.668 1.668 0 0 0 -.934 1.767c.844 5.766 3.875 10.95 8.426 14.406a.948 .948 0 0 0 1.11 0z"></path>
        <path d="M20 5c-2 0 -4.37 3.304 -8 6.644c-3.63 -3.34 -6 -6.644 -8 -6.644"></path>
        <path d="M17.738 15l-4.238 -4.5"></path>
      </svg>`,
    },
  ];
  sideBarDataApp: any = [
    {
      route: '/Chat',
      name: 'Chat',
      svg: `
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M12 20l-3 -3h-2a3 3 0 0 1 -3 -3v-6a3 3 0 0 1 3 -3h10a3 3 0 0 1 3 3v6a3 3 0 0 1 -3 3h-2l-3 3"></path>
                    <path d="M8 9l8 0"></path>
                    <path d="M8 13l6 0"></path>`,
    },
    {
      route: '/Calendar',
      name: 'Calendar',
      svg: `
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M4 5m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
                    <path d="M16 3l0 4"></path>
                    <path d="M8 3l0 4"></path>
                    <path d="M4 11l16 0"></path>
                    <path d="M8 15h2v2h-2z"></path>`,
    },
    {
      route: '/Email',
      name: 'Email',
      svg: `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
  <path d="M3 5m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z"></path>
  <path d="M3 7l9 6l9 -6"></path>
</svg>`,
    },
    {
      route: '/Contact',
      name: 'Contact',
      svg: `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
  <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"></path>
</svg>`,
    },
    {
      route: '/Courses',
      name: 'Courses',
      svg: `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
  <path d="M15 15m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
  <path d="M13 17.5v4.5l2 -1.5l2 1.5v-4.5"></path>
  <path d="M10 19h-5a2 2 0 0 1 -2 -2v-10c0 -1.1 .9 -2 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -1 1.73"></path>
  <path d="M6 9l12 0"></path>
  <path d="M6 12l3 0"></path>
  <path d="M6 15l2 0"></path>
</svg>`,
    },
    {
      route: '/Employee',
      name: 'Employee',
      svg: `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
  <path d="M6.04 14.831l4.46 -4.331"></path>
  <path d="M12.555 20.82c4.55 -3.456 7.582 -8.639 8.426 -14.405a1.668 1.668 0 0 0 -.934 -1.767a19.647 19.647 0 0 0 -8.047 -1.648a19.647 19.647 0 0 0 -8.047 1.647a1.668 1.668 0 0 0 -.934 1.767c.844 5.766 3.875 10.95 8.426 14.406a.948 .948 0 0 0 1.11 0z"></path>
  <path d="M20 5c-2 0 -4.37 3.304 -8 6.644c-3.63 -3.34 -6 -6.644 -8 -6.644"></path>
  <path d="M17.738 15l-4.238 -4.5"></path>
</svg>`,
    },
    {
      route: '/Notes',
      name: 'Notes',
      svg: `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
  <path d="M13 20l7 -7"></path>
  <path d="M13 20v-6a1 1 0 0 1 1 -1h6v-7a2 2 0 0 0 -2 -2h-12a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7"></path>
</svg>`,
    },
    {
      route: '/Tickets',
      name: 'Tickets',
      svg: `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
  <path d="M15 5l0 2"></path>
  <path d="M15 11l0 2"></path>
  <path d="M15 17l0 2"></path>
  <path d="M5 5h14a2 2 0 0 1 2 2v3a2 2 0 0 0 0 4v3a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-3a2 2 0 0 0 0 -4v-3a2 2 0 0 1 2 -2"></path>
</svg>`,
    },
    {
      route: '/Invoice',
      name: 'Invoice',
      svg: `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
  <path d="M3 5m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z"></path>
  <path d="M3 7l9 6l9 -6"></path>
</svg>`,
    },
    {
      route: '/Todo',
      name: 'Todo',
      svg: `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
  <path d="M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1"></path>
  <path d="M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z"></path>
  <path d="M16 5l3 3"></path>
</svg>`,
    },
    {
      route: '/Taskboard',
      name: 'Taskboard',
      svg: `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
  <path d="M9.615 20h-2.615a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8"></path>
  <path d="M14 19l2 2l4 -4"></path>
  <path d="M9 8h4"></path>
  <path d="M9 12h2"></path>
</svg>`,
    },
    {
      route: '/blog',
      name: 'blog',
      svg: `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
  <path d="M12 3v5m4 4h5"></path>
  <path d="M8.929 14.582l-3.429 2.918"></path>
  <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path>
  <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
</svg>`,
    },
  ];
  service = inject(ServiceService);
  collapseSideBar=this.service.collapseSideBar();
  constructor(){
    effect (() => {
      this.collapseSideBar=this.service.collapseSideBar();
    })
  }
}
