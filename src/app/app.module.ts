import { AuthModule } from './auth/auth.module';
import { PanelModule } from './panel/panel.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { adminRoutes } from './routes/routes.routing';
import { ErrorInterceptorProvider } from './Services/error.interceptor';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule, ToastContainerModule } from 'ngx-toastr';
import { NgxUiLoaderModule, NgxUiLoaderConfig, POSITION, SPINNER, PB_DIRECTION,
  NgxUiLoaderRouterModule, NgxUiLoaderHttpModule } from 'ngx-ui-loader';
 
  const ngxUiLoaderConfig: NgxUiLoaderConfig = {
    pbColor: 'red',
    //
    bgsColor: 'red',
    bgsPosition: POSITION.bottomRight,
    bgsSize: 70,
    //
    fgsPosition: POSITION.bottomRight,
    fgsSize: 70,
    fgsColor: 'red',
    bgsType: SPINNER.doubleBounce,
    fgsType: SPINNER.doubleBounce,
    pbDirection: PB_DIRECTION.leftToRight,
    pbThickness: 4,
  };
  @NgModule({
  declarations: [
    AppComponent, 
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    PanelModule,
    AuthModule,
    RouterModule.forRoot(adminRoutes),
    CommonModule,

    BrowserAnimationsModule, 
    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: 'toast-bottom-center',
      preventDuplicates: true,
      progressBar: true,
      progressAnimation: 'decreasing'
    }),
    ToastContainerModule,
    HttpClientModule,
    NgxUiLoaderModule.forRoot(ngxUiLoaderConfig),
    NgxUiLoaderRouterModule,
    NgxUiLoaderHttpModule.forRoot({ showForeground: true })
  ],
  providers: [ErrorInterceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
