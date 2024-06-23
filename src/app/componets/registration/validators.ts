import { AbstractControl, ValidatorFn, ValidationErrors } from '@angular/forms';

export function SkillCountValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    return control.value.length > 3 ? {tooManySkills: {value: control.value}} : null;
  };
}
