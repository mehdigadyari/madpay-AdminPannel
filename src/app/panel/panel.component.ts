import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import Chartist from '../../assets/vendors/js/chartist.min.js';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {

  constructor(private router: Router , private alertService: ToastrService) { }

  ngOnInit() {
    this.loadChart();
  }
  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/auth/login']);
    this.alertService.warning('با موفقیت خارج شدید', 'موفق');
  }
  loadChart() {
    
  }
}
