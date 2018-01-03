import { Component, OnInit } from '@angular/core';
import { ApplyService } from '../../services/apply.service';
import { Observable } from 'rxjs/Observable';
import { Application } from '../../interfaces/application';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-single-application-page',
  templateUrl: './single-application-page.component.html',
  styleUrls: ['./single-application-page.component.scss']
})
export class SingleApplicationPageComponent implements OnInit {
  application: Observable<Application>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private apply: ApplyService,
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.params['id'];
    this.application = this.apply.getSingelApplication(id);
  }

  async logOut() {
    await this.auth.logout();
    this.router.navigate(['/']);
  }

}
