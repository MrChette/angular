import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { CountriesRoutingModule } from "./countries-routing.module";
import { SelectorPageComponent } from "./pages/selector-page/selector-page.component";




@NgModule({
  declarations: [
    SelectorPageComponent
  ],
  imports: [
    CommonModule,
    CountriesRoutingModule,
    ReactiveFormsModule
  ]
})
export class CountriesModule { }
