import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AppComponent } from './app.component';
import { EmpDetailsComponent } from './emp-details/emp-details.component';
import { FilterPipe } from './search.pipe';
import { FormsModule } from '@angular/forms';



@NgModule({  
  declarations: [
    AppComponent,
    EmpDetailsComponent,
    FilterPipe
    
  ],
  
  imports: [
    BrowserModule,
    AngularFontAwesomeModule,
    BrowserAnimationsModule   ,
    FormsModule

  ],
  providers: [  ],
  bootstrap: [EmpDetailsComponent]
})
export class AppModule { }
