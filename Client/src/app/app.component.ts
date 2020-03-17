
import { Component } from '@angular/core';
import {LoginService} from './login.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`.fixed-header{font-size : 20px}`]
})

export class AppComponent {

  constructor(public loginService: LoginService) {}
}

