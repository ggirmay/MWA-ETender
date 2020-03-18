import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatGridListModule} from '@angular/material/grid-list';
import {BiddeService} from './bidde.service';
import {MatButtonModule} from '@angular/material/button';
import { PostComponent } from './post.component';
import {ReactiveFormsModule} from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
// import {MatExpansionModule} from '@angular/material/expansion';

//import { RegisterComponent } from './register.component';
import { PostBidComponent } from './PostBidComponent';
import { BidService } from './BidService';
import { RegService } from './reg.service';
import { LoginService } from './login.service';
import { LoginComponent } from './login.component';
import { LoginGuard } from './login.guard';
import { BidListComponent } from './BidListComponent';
import {TokenInterceptorService} from './token-interceptor.service'
import {MatRadioModule} from '@angular/material/radio';
import { HomeComponent } from './home/home.component';
import { MatSelectModule } from '@angular/material/select';
import { CommonModule } from '@angular/common';
import { NewRegisterComponent } from './new-register.component';


@NgModule({
  declarations: [
    AppComponent,
   PostComponent,
    HomeComponent,
    PostBidComponent, LoginComponent, BidListComponent, NewRegisterComponent//, HomeComponent
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
    MatRadioModule,
    //  MatExpansionModule,
    
    MatSelectModule,
    FormsModule,
    MatCheckboxModule,
    CommonModule,
   
  ],
  providers: [BiddeService, BidService, RegService, LoginService, LoginGuard, TokenInterceptorService,
  {
    provide:HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
