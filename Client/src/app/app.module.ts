import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatGridListModule} from '@angular/material/grid-list';
import {BiddeService} from './bidde.service';
import {MatButtonModule} from '@angular/material/button';
import { PostComponent } from './post.component';
import {ReactiveFormsModule} from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
// import {MatExpansionModule} from '@angular/material/expansion';

import { RegisterComponent } from './register.component';
import { PostBidComponent } from './PostBidComponent';
import { BidService } from './BidService';
import { RegService } from './reg.service';
import { LoginService } from './login.service';
import { LoginComponent } from './login.component';
import { BidListComponent } from './BidListComponent';


@NgModule({
  declarations: [
    AppComponent,
   PostComponent,

   RegisterComponent, PostBidComponent, LoginComponent, BidListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatCardModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatInputModule,
    MatGridListModule,
    MatToolbarModule,
    MatButtonModule,
    ReactiveFormsModule,
      // MatExpansionModule,

    FormsModule,
    MatCheckboxModule

  ],
  providers: [BiddeService, BidService, RegService, LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
