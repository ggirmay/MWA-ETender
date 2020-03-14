import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
<<<<<<< HEAD
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import {MatCheckboxModule} from '@angular/material/checkbox';

=======
import {MatButtonModule} from '@angular/material/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PostComponent } from './post.component';
>>>>>>> 9e16fd5091cec69893f723d2eb88d5a96f6a15e0

@NgModule({
  declarations: [
    AppComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatInputModule,
<<<<<<< HEAD
    FormsModule,
    MatCheckboxModule
=======
    MatButtonModule
>>>>>>> 9e16fd5091cec69893f723d2eb88d5a96f6a15e0
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
