import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { PostComponent } from './post.component';
import { RegisterComponent } from './register.component';
import { LoginComponent } from './login.component';
import { LoginGuard } from './login.guard';
import { PostBidComponent } from './PostBidComponent';
import { BidListComponent } from './BidListComponent';
import { HomeComponent } from './home/home.component';
import { WinnerComponent } from './WinnerComponent';
import { NewRegisterComponent } from './new-register.component';

const routes: Routes = [

{ path:'bidde', component: PostComponent, canActivate :[LoginGuard] },
{ path:'register', component: NewRegisterComponent },
{ path:'login', component: LoginComponent },
{path:'postBid', component:PostBidComponent},
{path:'bidder',component:BidListComponent},
{path:'winner',component:WinnerComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
