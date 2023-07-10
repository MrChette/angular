import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';



@NgModule({
  declarations: [
    HomePageComponent,
    AboutPageComponent,
    SideBarComponent,
    ContactPageComponent,
    SearchBoxComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports : [
    AboutPageComponent,
    HomePageComponent,
    SideBarComponent,
    ContactPageComponent,
    SearchBoxComponent
  ]
})
export class SharedModule { }
