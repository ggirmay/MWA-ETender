import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { PostComponent } from './post.component';
import { RegisterComponent } from './register.component';
import { LoginComponent } from './login.component';
import { LoginGuard } from './login.guard';

const routes: Routes = [  
{ path: '', component: AppComponent},
{ path:'bidde', component: PostComponent},  //canActivate :[LoginGuard] },
{ path:'register', component: RegisterComponent },
{ path:'login', component: LoginComponent },

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
