import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [

  { path: '/about', title: 'Sobre',  icon: 'ni-planet text-blue', class: '' },
  { path: '/user-profile', title: 'Usuário',  icon: 'ni-single-02 text-yellow', class: '' },
  { path: '/crianca', title: 'Dependentes', icon: 'ni-bullet-list-67 text-yellow', class: ''},
  { path: '/diagnostico', title: 'Diagnóstico', icon: 'ni-collection text-red', class: ''},
  { path: '/duvida', title: 'Duvida', icon: 'ni-chat-round text-red', class: ''},
  { path: '/login', title: 'Logout',  icon: 'ni-key-25 text-info', class: '' }
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {

  public menuItems: any[];
  public isCollapsed = true;

  constructor(private router: Router) { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
   });
  }
}
