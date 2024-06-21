import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormArray, FormGroup, FormControl } from '@angular/forms';

import { ROLE, Role, initialRole, LANGUAGE, Language, initialLang, User } from '../../models/user';

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

  constructor() {
    this.languages = initialLang;
    this.roles = initialRole;
    this.registrForm = new FormGroup({
      nameControl: new FormControl(''),
      surControl: new FormControl(''),
      langControl: new FormControl(this.languages[0]),
      roleControl: new FormControl(this.roles[0]),
      skills: new FormArray([])
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
    let newUser: User = {
      name: this.registrForm.controls['nameControl'].value,
      surname: this.registrForm.controls['surControl'].value,
      lang: this.registrForm.controls['langControl'].value.value,
      role: this.registrForm.controls['roleControl'].value.value,
      skills: this.registrForm.controls['skills'].value
    };
    console.log(newUser);
  }

}
