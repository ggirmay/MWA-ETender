import { RouterModule, Routes } from "@angular/router";

import { PostComponent } from './post.component';
import { AppComponent } from './app.component';


const MY_ROUTES: Routes = [
    { path: '', component: AppComponent},
    { path: 'bidde', component: PostComponent },

];

export const myRoutes = RouterModule.forRoot(MY_ROUTES);
