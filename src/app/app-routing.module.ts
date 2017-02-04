import { Home2Component } from './home/home2/home2.component';
import { Home1Component } from './home/home1/home1.component';
import { SecondComponent } from './second/second.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, Route } from '@angular/router';

import { mainRouting } from './routing/mainRouting'
//const fallbackRoute: Route = { path: '**', component: Home1Component }

const routes: Routes = mainRouting ;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
