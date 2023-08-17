import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './switches-page.component.html',
  styles: [
  ]
})
export class SwitchesPageComponent implements OnInit{

  public myForm: FormGroup = this.fb.group({
    gender: [ 'M', Validators.required ],
    wantNotifications: [ true, Validators.required ],
    termsAndConditions: [ false, Validators.requiredTrue ],
  });

  public person = {
    gender:'F',
    wantNotifications: false,
  }

  constructor ( private fb:FormBuilder) {}
  ngOnInit(): void {
    this.myForm.reset(this.person);
  }

  isValidField( field: string ): boolean | null {
    return this.myForm.controls[field].errors
      && this.myForm.controls[field].touched
  }

  getFieldError( field: string ):string | null{

    if( !this.myForm.controls[field]) return null;

    const errors = this.myForm.controls[field].errors || {};

    for (const key of Object.keys(errors)) {
      switch( key ) {
        case 'required':
          return 'Campo Requerido';

        case 'minlength':
          return `Minimo ${ errors['minlength'].requiredLength} caracteres`;
      }
    }

    return null;
  }

  //? PARA VALIDAR EL ARRAY DEL FORMULARIO( SI TIENE ALGUN ERROR Y HA SIDO TOCADO)
  isValidFieldInArray( formArray: FormArray, i: number ) {
    return formArray.controls[i].errors
    && formArray.controls[i].touched
  }



  onSave() {

    if ( this.myForm.invalid ) {
      this.myForm.markAllAsTouched();
      return;
    }

    //? BORRA LA CARACTERISTICA termsAndConditions EN CASO DE QUE EL BACKEND NO QUIERA RECIBIRLO
    const {termsAndConditions, ...newPerson} = this.myForm.value

    //? Por si quiero el person en el html sin la caract termsAndConditions
    this.person = newPerson;
    console.log( this.myForm.value );
    console.log( this.person )

  }

}
