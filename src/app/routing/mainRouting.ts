import { SecondComponent } from '../second/second.component';
import { HomeComponent } from '../home/home.component';
import { Home2Component } from '../home/home2/home2.component';
import { Home1Component } from '../home/home1/home1.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, Route } from '@angular/router';

export const mainRouting: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    {
        path: 'home',
        component: HomeComponent,
        children: [
            { path: '', component: Home1Component, pathMatch: 'full' },
            { path: 'home1', component: Home1Component },
            { path: 'home2', component: Home2Component },
            { path: '**', component: Home1Component }
        ]
    },
    { path: 'second', component: SecondComponent },
]