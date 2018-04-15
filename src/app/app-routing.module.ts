import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Title, Meta } from "@angular/platform-browser";

import { HomeComponent } from './home/home.component';
import { VrComponent } from './vr/vr.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent,
    data:{
      title: "NG-VR Demo",
    }
  },
  {
    path:'vr',
    component:VrComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
