import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { PostComponent } from './post.component';
import { RegisterComponent } from './register.component';
import { PostBidComponent } from './PostBidComponent';


const routes: Routes = [  { path: '', component: AppComponent},
{ path:'bidde', component: PostComponent },
{ path:'register', component: RegisterComponent },
{path:'postBid',component:PostBidComponent}

];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
