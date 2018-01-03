import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-apply-form',
  templateUrl: './apply-form.component.html',
  styleUrls: ['./apply-form.component.scss']
})
export class ApplyFormComponent implements OnInit {
  applyForm: FormGroup;
  submitTried = false;

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
      'members': new FormArray([]),
      'questions': new FormGroup({
        'impression': new FormControl(null, Validators.required),
        'motivation': new FormControl(null, Validators.required)
      })
    });
    this.createMember();
  }

  createMember() {
    for (let i = 0; i < 4; i++) {
      (this.applyForm.get('members') as FormArray).push(
        new FormGroup({
          'name': new FormControl(null, Validators.required),
          'department': new FormControl(null, Validators.required),
          'phone': new FormControl(null, Validators.required),
          'email': new FormControl(null, Validators.required),
          'address': new FormControl(null, Validators.required)
        })
      );
    }
  }

  checkError(controlName, index = null) {
    if (index !== null) {
      return (this.applyForm.get('members') as FormArray).controls[index].get(controlName).invalid && this.submitTried;
    }
    return this.applyForm.get(controlName).invalid && this.submitTried;
  }

  onSubmit() {
    this.submitTried = true;
  }

}
