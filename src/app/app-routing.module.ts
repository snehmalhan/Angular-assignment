import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultLayoutComponent } from './components/common/default-layout/default-layout.component';
import { authGuard } from './guard/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./modules/login/login.module').then((m) => m.LoginModule),
    data: {
      title: 'Login',
      icon: 'icon-office',
      nav: false,
    }
  },
   {
        path: '',
        component: DefaultLayoutComponent,
        children: [
            {
                path: 'dashboard',
                loadChildren: () =>
                    import(
                        './modules/dashboard/dashboard.module'
                    ).then((m) => m.DashboardModule),
                  canActivate: [authGuard],
                data: {
                    title: 'Dashboard',
                    nav: true,
                    // roles: [],
                    // scopes: [],
                },
            },
            {
                path: 'user',
                loadChildren: () =>
                    import(
                        './modules/user/user.module'
                    ).then((m) => m.UserModule),
                 canActivate: [authGuard],
                data: {
                    title: 'User Page',
                    icon: 'dashboard',
                    nav: true,
                    // roles: [],
                    // scopes: [],
                },
            }, 
             {
                path: 'product',
                loadChildren: () =>
                    import(
                        './modules/product/product.module'
                    ).then((m) => m.ProductModule),
                 canActivate: [authGuard],
                data: {
                    title: 'Product Page',
                    icon: 'dashboard',
                    nav: true,
                    // roles: [],
                    // scopes: [],
                },
            },
        ],
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
