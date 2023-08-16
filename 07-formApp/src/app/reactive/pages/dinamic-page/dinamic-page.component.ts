import { Component } from '@angular/core';
import { Form, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './dinamic-page.component.html',
  styles: [
  ]
})
export class DinamicPageComponent {

  public myForm: FormGroup= this.fb.group( {
    name: ['', [Validators.required, Validators.minLength(3)]],
    favoriteGames: this.fb.array([
      ['League of Legends', Validators.required ],
      ['Rocket League', Validators.required]
    ])
  })

  public newFavorite: FormControl = new FormControl( '', Validators.required )

  constructor ( private fb: FormBuilder) {}

  get favoriteGames() {
    return this.myForm.get('favoriteGames') as FormArray;
  }

  //? PARA VALIDAR FORMULARIOS ( SI TIENE ALGUN ERROR Y HA SIDO TOCADO)
  isValidField( field: string ): boolean | null {
    return this.myForm.controls[field].errors
      && this.myForm.controls[field].touched
  }

  //? PARA VALIDAR EL ARRAY DEL FORMULARIO( SI TIENE ALGUN ERROR Y HA SIDO TOCADO)
  isValidFieldInArray( formArray: FormArray, i: number ) {
    return formArray.controls[i].errors
    && formArray.controls[i].touched
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

  onAddToFavorites():void {
    if( this.newFavorite.invalid ) return;
    const newGame = this.newFavorite.value;

    this.favoriteGames.push( this.fb.control( newGame, Validators.required ));

    this.newFavorite.reset();

  }


  onDeleteFavorite( i:number ):void {
    this.favoriteGames.removeAt(i);
  }

  onSubmit():void {
    if ( this.myForm.invalid ) {
      this.myForm.markAllAsTouched();
      return;
    }
    (this.myForm.controls['favoriteGames'] as FormArray ) = this.fb.array([]);
    this.myForm.reset();
  }


}
