/**
 * Created by LeneWhiteley on 12.01.2018.
 */

import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { LeneComponent } from "../lene/lene.component";
import { KellyComponent } from "../kelly/kelly.component";

@NgModule({
  imports: [
    RouterModule
  ],
  declarations: [
    HomeComponent,
    LeneComponent,
    KellyComponent
  ],
  exports: [
    HomeComponent
  ]
})

export class HomeModule { }
