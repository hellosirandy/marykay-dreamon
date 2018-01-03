import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormArray, Validators } from '@angular/forms';
import { Member } from '../../interfaces/member';
import { Application } from '../../interfaces/application';
import { ApplyService } from '../../services/apply.service';

@Component({
  selector: 'app-apply-form',
  templateUrl: './apply-form.component.html',
  styleUrls: ['./apply-form.component.scss']
})
export class ApplyFormComponent implements OnInit {
  applyForm: FormGroup;
  submitTried = false;
  applicationFinished = false;

  constructor(
    private apply: ApplyService,
  ) { }

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
    window.scrollTo(0, 0);
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
    if (this.applyForm.valid) {
      const applyForm = this.applyForm.getRawValue();
      const teamname: string = applyForm.leader.teamname;
      const leader: Member = this.getMember(applyForm.leader);
      const members: Member[] = applyForm.members.map(m => this.getMember(m));
      const impression: string = applyForm.questions.impression;
      const motivation: string = applyForm.questions.motivation;
      const date = Date.now();
      const reverseDate = -date;
      const application: Application = { teamname, leader, members, impression, motivation, date, reverseDate };
      this.submitApplication(application);
    }
  }

  async submitApplication(app: Application) {
    await this.apply.createApplication(app);
    this.applicationFinished = true;
  }

  getMember(member): Member {
    return {
      name: member.name,
      department: member.department,
      phone: member.phone,
      email: member.email,
      address: member.address
    };
  }

  getMembersControl() {
    return (this.applyForm.get('members') as FormArray).controls;
  }

}
