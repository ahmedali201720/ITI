import { Component, OnInit } from '@angular/core';
import { user } from './usermodule';
import { MyserviceService } from './myservice.service'
import { takeUntil } from 'rxjs/operators'
import { Subject } from 'rxjs'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    public list = [];
    private ngUnsubscribe = new Subject();
    constructor(public dataService:MyserviceService){}

    ngOnInit() : void
    {
      this.dataService.getUsers().pipe(takeUntil(this.ngUnsubscribe)).subscribe(data => {this.list = data; 
      console.log(this.list)});
    }

    ngOnDestroy(){
      this.ngUnsubscribe.next();
      this.ngUnsubscribe.complete();
    }
}
