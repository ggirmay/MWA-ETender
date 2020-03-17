import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { PostComponent } from './post.component';
import { RegisterComponent } from './register.component';
import { LoginComponent } from './login.component';
import { PostBidComponent } from './PostBidComponent';
import { BidListComponent } from './BidListComponent';

const routes: Routes = [
{ path: '', component: AppComponent},
{ path:'bidde', component: PostComponent },
{ path:'register', component: RegisterComponent },
{ path:'login', component: LoginComponent },
{path:'postBid', component:PostBidComponent},
{path:'bidder',component:BidListComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
