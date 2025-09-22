import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-left-panel',
  templateUrl: './left-panel.component.html',
  styleUrls: ['./left-panel.component.scss']
})
export class LeftPanelComponent {
  routes: any = [];

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
    this.filterNavRoutes();
  }

  filterNavRoutes() {
    let routes: any = this.router.config.filter(route => route.children && route.children.length > 0);
    if (routes.length == 0) {
      return;
    }
    this.routes = routes[0].children.filter((route: any) => {
      if (route.data?.nav) {
        return true;
      }
      return false;
    });
  }

  redirecttoPage(route: string) {
    console.log("route", route)
    this.router.navigate([route]);
  }

  logout() {
    sessionStorage.clear();
    localStorage.clear();
     this.router.navigate(['login']);
  }

}


