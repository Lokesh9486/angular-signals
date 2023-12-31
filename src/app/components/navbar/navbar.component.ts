import { Component, inject } from '@angular/core';
import { ServiceService } from '../../services/service.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
   service=inject(ServiceService);
   collapseFun(){
    console.log("collapseFun")
    this.service.collapseSideBar.update((isActive)=>!isActive);
   }
}
