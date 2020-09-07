import { Component, Output , EventEmitter} from '@angular/core';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username : string;
  password : string;
  @Output() callParentFunction:EventEmitter<{}> = new EventEmitter<{}>()
  constructor() { }

  onClick() {
    this.callParentFunction.emit({'user':this.username,'pass':this.password})
  }

}
