import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  usernameForm : string;
  passwordForm : string;
  parentFunction(obj)
  {
       this.usernameForm = obj.user;
       this.passwordForm = obj.pass
  }
}
