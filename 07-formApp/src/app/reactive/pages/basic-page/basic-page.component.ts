import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


const rtx5090 = {
  name: 'RTX5090',
  price: 2000,
  inStorage: 10,
}

@Component({
  templateUrl: './basic-page.component.html',
  styles: [
  ]
})
export class BasicPageComponent implements OnInit {

  //Crear formulario reactivo

  //Forma 1 -> Con formGroup
  //public myForm: FormGroup = new FormGroup({
  //  name: new FormControl (''),
  //  price: new FormControl (0),
  //  inStorage: new FormControl (0),
  //})


  //Forma -> Con formBuilder
  public myForm: FormGroup = this.fb.group ( {
    name: ['', [ Validators.required, Validators.minLength(3) ]],
    price: [0 , [ Validators.required, Validators.min(0) ]],
    inStorage: [0,  [ Validators.required, Validators.min(0) ]],
  })

  constructor ( private fb: FormBuilder ) {}

  ngOnInit(): void {
    //this.myForm.reset(rtx5090)
  }

  //! PARA VALIDAR FORMULARIOS ( SI TIENE ALGUN ERROR Y HA SIDO TOCADO)
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

  onSave(): void {

    if( this.myForm.invalid ) {
      //! PARA DISPARAR VALIDACIONES
      this.myForm.markAllAsTouched();

      return
    };

    console.log ( this.myForm.value )

    this.myForm.reset( {
      price: 10,
      inStorage: 0
    })
  }

}
