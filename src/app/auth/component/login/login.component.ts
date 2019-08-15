import { Router } from '@angular/router';

import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],

})
export class LoginComponent implements OnInit {

  model :any ={};
  
  constructor(private authService: AuthService , private router : Router , private alertService: ToastrService) { }

  ngOnInit() {
  }

  login() {
    this.authService.login(this.model).subscribe(next => {
      this.alertService.success('با موفقیت وارد شدید', 'موفق');
      this.router.navigate(['/panel']);
    }, error => {
      this.alertService.error(error, 'خطا ');
    });
  }
}
