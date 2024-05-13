import { Routes } from '@angular/router';
// import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {path:'',redirectTo:'/home',pathMatch:'full'},
    {path: 'home', loadComponent: () => import('./home/home.component').then(mod => mod.HomeComponent)},
    {path: 'about', loadComponent: () => import('./about/about.component').then(mod => mod.AboutComponent)},
];
