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
      skills: new FormArray([
        new FormControl('sdfsf'),
        new FormControl('dsfdsfaf')
      ])
    });
  }

  addSkill() {
    
  }

  sendUserData() {
    let newUser: User = {
      name: this.registrForm.controls['nameControl'].value,
      surname: this.registrForm.controls['surControl'].value,
      lang: this.registrForm.controls['langControl'].value.value,
      role: this.registrForm.controls['roleControl'].value.value,
      skills: ['string', 'string']
    }
    console.log(newUser)
  }

}
