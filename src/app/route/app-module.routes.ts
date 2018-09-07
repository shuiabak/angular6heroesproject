import { NgModule } from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

import {HomeComponent} from '../home/home.component';
import { config } from "rxjs";

const appRoutes:Routes=[
    {path:'home',component:HomeComponent}      
];


@NgModule({
    imports:[RouterModule.forRoot(appRoutes,{useHash:true})],
    exports:[RouterModule]    
 })
 
 export class AppModuleRoutes{
 
 }

