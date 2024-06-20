import { TuiRootModule } from "@taiga-ui/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TuiInputModule, TuiDataListWrapperModule, TuiSelectModule, TuiRadioBlockModule } from '@taiga-ui/kit';
import { TuiButtonModule, TuiDataListModule } from '@taiga-ui/core';

import { AppComponent } from './app.component';
import { RegistrationComponent } from './componets/registration/registration.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    TuiRootModule,
    FormsModule,
    ReactiveFormsModule,
    TuiRadioBlockModule,
    TuiInputModule,
    TuiButtonModule,
    TuiSelectModule,
	  TuiDataListModule,
	  TuiDataListWrapperModule
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
