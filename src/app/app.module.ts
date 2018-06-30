import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TopNavBarComponent } from './top-nav-bar/top-nav-bar.component';
import { LeftNavBarComponent } from './left-nav-bar/left-nav-bar.component';
import { MasterContentComponent } from './master-content/master-content.component';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { ROUTING } from "./app.routing";
import { RouterModule, Routes } from "@angular/router";
import { ContentLoaderComponent } from './master-content/content-loader/content-loader.component';


@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent,
    LeftNavBarComponent,
    MasterContentComponent,
    ContentLoaderComponent
  ],
  imports: [
    BrowserModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    ROUTING
  ],
  providers: [  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
