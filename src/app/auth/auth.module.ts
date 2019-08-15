import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './services/auth.service';
import { RegisterComponent } from './component/register/register.component';
import { LoginComponent } from './component/login/login.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { RouterModule } from '@angular/router';

import { authRoutes } from './routes/routes.routing';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(authRoutes)
  ],
  declarations: [AuthComponent,
  LoginComponent,
  RegisterComponent,
  
  ],
  providers : [ AuthService],
})
export class AuthModule { }
