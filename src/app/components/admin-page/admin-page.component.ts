import { Component, OnInit } from '@angular/core';
import { ApplyService } from '../../services/apply.service';
import { Observable } from 'rxjs/Observable';
import { Application } from '../../interfaces/application';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss']
})
export class AdminPageComponent implements OnInit {
  applications: Observable<Application[]>;

  constructor(
    private apply: ApplyService,
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.applications = this.apply.getApplications();
  }

  async logOut() {
    await this.auth.logout();
    this.router.navigate(['/']);
  }

}
