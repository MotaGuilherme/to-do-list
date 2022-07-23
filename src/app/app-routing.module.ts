import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/home/pages/home/home.component';

const routes: Routes = [
  { path:"", component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
  BrowserModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
