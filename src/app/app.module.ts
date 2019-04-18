import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HostpageComponent } from './hostpage/hostpage.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { KitchenComponent } from './kitchen/kitchen.component';
import { ManagerComponent } from './manager/manager.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HostpageComponent,
    UserloginComponent,
    KitchenComponent,
    ManagerComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
	MatButtonModule, 
	MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
