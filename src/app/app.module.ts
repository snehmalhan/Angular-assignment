import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DefaultLayoutComponent } from './components/common/default-layout/default-layout.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { NOTYF, notyfFactory } from './utility/notyf.token';
import { ToastrModule } from 'ngx-toastr';
import { CommonDependencyModule } from './modules/common-dependency/common-dependency.module';

// Import your interceptor
import { HttpInterceptorInterceptor } from 'src/app/http-interceptor/http-interceptor.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    DefaultLayoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    CommonDependencyModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
    }),
  ],
  providers: [
    { provide: NOTYF, useFactory: notyfFactory },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
