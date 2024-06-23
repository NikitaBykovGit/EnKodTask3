import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormArray, FormGroup, FormControl, Validators } from '@angular/forms';

import { ROLE, Role, initialRole, LANGUAGE, Language, initialLang, User } from '../../models/user';
import { SkillCountValidator } from './validators'

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegistrationComponent {

  registrForm: FormGroup;
  languages: Language[];
  roles: Role[];
  isSuccess: boolean;

  constructor() {
    this.languages = initialLang;
    this.roles = initialRole;
    this.isSuccess = true;
    this.registrForm = new FormGroup({
      nameControl: new FormControl('', [Validators.required]),
      surControl: new FormControl('', [Validators.required]),
      langControl: new FormControl(this.languages[0]),
      roleControl: new FormControl(this.roles[0]),
      skills: new FormArray([], [SkillCountValidator()])
    });
  }

  addSkillControl() {
    (this.registrForm.controls['skills'] as FormArray).push(new FormControl(''));
  }

  removeSkillControl(index: number) {
    (this.registrForm.controls['skills'] as FormArray).removeAt(index);
  }

  trackByFn(index: number, item: FormControl) {
    return index;
  }

  sendUserData() {
    if (this.registrForm.valid) {
      let newUser: User = {
        name: this.registrForm.controls['nameControl'].value,
        surname: this.registrForm.controls['surControl'].value,
        lang: this.registrForm.controls['langControl'].value.value,
        role: this.registrForm.controls['roleControl'].value.value,
        skills: this.registrForm.controls['skills'].value
      }
      console.log(newUser);
    } else {
      this.isSuccess = false;
    }
  }
}
