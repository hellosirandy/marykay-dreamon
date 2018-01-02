import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-apply-form',
  templateUrl: './apply-form.component.html',
  styleUrls: ['./apply-form.component.scss']
})
export class ApplyFormComponent implements OnInit {
  applyForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.applyForm = new FormGroup({
      'leader': new FormGroup({
        'teamname': new FormControl(null, Validators.required),
        'name': new FormControl(null, Validators.required),
        'department': new FormControl(null, Validators.required),
        'phone': new FormControl(null, Validators.required),
        'email': new FormControl(null, Validators.required),
        'address': new FormControl(null, Validators.required),
      }),
      'members': new FormArray(this.createMember()),
      'questions': new FormGroup({
        'impression': new FormControl(null, Validators.required),
        'motivation': new FormControl(null, Validators.required)
      })
    });
  }

  createMember(): FormGroup[] {
    return [null, null, null, null].fill(new FormGroup({
      'name': new FormControl(null),
      'department': new FormControl(null),
      'phone': new FormControl(null),
      'email': new FormControl(null),
      'address': new FormControl(null)
    }));
  }
  
  onSubmit() {
    console.log(this.applyForm);
  }

}
