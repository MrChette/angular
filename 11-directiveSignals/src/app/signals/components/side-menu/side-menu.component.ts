import { Component, signal } from '@angular/core';

interface MenuItem {
  title:string;
  route: string;
}

@Component({
  selector: 'side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent {

  public menuItems = signal<MenuItem[]>([
    { title: 'Contador', route: 'counter'},
    { title: 'User Info', route: 'user-info'},
    { title: 'Mutaciones', route: 'properties'},
  ]);

  //public menuItems: MenuItem[] = [
  //  { title: 'Contador', route: 'counter'},
  //  { title: 'User Ingo', route: 'user-info'},
  //  { title: 'Mutaciones', route: 'properties'},
  //]

}
