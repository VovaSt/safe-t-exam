import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { MainRoutingModule } from './main-routing.module';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    MainComponent,
    SideMenuComponent,
    PageNotFoundComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    AngularMaterialModule
  ]
})
export class MainModule { }
