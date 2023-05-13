import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Api1Component } from './api1/api1.component';
import { Api2Component } from './api2/api2.component';
import { RouterModule } from '@angular/router';
import { Readjson1Component } from './readjson1/readjson1.component';
import { Readjson2Component } from './readjson2/readjson2.component';

@NgModule({
  declarations: [
    AppComponent,
    Api1Component,
    Api2Component,
    Readjson1Component,
    Readjson2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'api1-list', component: Api1Component},
      {path: 'api2-list', component: Api2Component},
      {path: 'json1-list', component: Readjson1Component},
      {path: 'json2-list', component: Readjson2Component},
      {path: '', redirectTo: '/json1-list', pathMatch: 'full'},
    ]),
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
