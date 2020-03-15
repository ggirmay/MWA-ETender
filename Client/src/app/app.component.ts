
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: []
})
export class AppComponent {
  message1 = '';
  message2 = '';
  message3 = '';
  constructor(public http: HttpClient) {}

  post() {
    console.log('post' , {a: this.message1, b: this.message2, c: this.message3});
    this.http.post('http://localhost:3000/api/message', {a: this.message1, b: this.message2, c: this.message3}).toPromise();
  }
}

