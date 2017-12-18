import { Component, OnInit } from '@angular/core';
// import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-apply-form',
  templateUrl: './apply-form.component.html',
  styleUrls: ['./apply-form.component.scss']
})
export class ApplyFormComponent implements OnInit {
  // applyForm: FormGroup;

  constructor() { }

  ngOnInit() {
    // this.applyForm = new FormGroup({
    //   'teamname': new FormControl(null, Validators.required),
    //   'leadername': new FormControl(null, Validators.required),
    //   'department': new FormControl(null, Validators.required),
    //   ''
    // });
  }

}
