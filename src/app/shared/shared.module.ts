import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { SelectComponent } from './components/select/select.component';


@NgModule({
  declarations: [
    HeaderComponent,
    SpinnerComponent,
    SelectComponent
  ],
  imports: [
    CommonModule,
    BrowserModule ,
    FormsModule,
    RouterModule,
    HttpClientModule
  ],
  exports : [
    HeaderComponent,
    BrowserModule,
    RouterModule,
    FormsModule,
    SpinnerComponent,
    SelectComponent
  ]
})
export class SharedModule { }
