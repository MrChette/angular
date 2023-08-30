import { Component, OnDestroy, computed, effect, signal } from '@angular/core';
import { User } from '../../interfaces/user-request.interface';

@Component({
  templateUrl: './properties-page.component.html',
  styleUrls: ['./properties-page.component.css']
})
export class PropertiesPageComponent implements OnDestroy{

  public counter = signal(10);

  public user = signal<User>({
    id: 2,
    email: "janet.weaver@reqres.in",
    first_name: "Janet",
    last_name: "Weaver",
    avatar: "https://reqres.in/img/faces/2-image.jpg"
  })

  public fullName = computed( () => `${ this.user().first_name} ${this.user().last_name }` );

  public userChangeEffect = effect( () => {

    console.log( `${this.user().first_name} - ${ this.counter() }` )

  });

  //? Los efectos se destruyen automaticamente, pero tambien se puede manual
  ngOnDestroy(): void {
    //this.userChangeEffect.destroy();
  }

  increaseBy( value:number) {
    this.counter.update( current => current + value);
  }



  onFieldUpdated( field: keyof User, value: string){

    //? Con set, fallos de seguridad?
    //this.user.set({
    //  ...this.user(),
    //  [field]: value,
    //})

    //? Con update, cuidado con el id
    this.user.update( current => {
      return {
        ...current,
        [field]: value,
      }
    })


    //? Con mutate
    //this.user.mutate( current => {
    //
    //  switch( field ) {
    //    case 'email':
    //      current.email = value;
    //    break;
    //
    //    case 'first_name':
    //      current.first_name = value;
    //    break;
    //
    //    case 'last_name':
    //      current.last_name = value;
    //    break;
    //
    //    case 'id':
    //      current.id = Number(value);
    //    break;
    //  }
    //});

  }

}
