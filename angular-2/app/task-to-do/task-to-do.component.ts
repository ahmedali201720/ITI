import { Component, OnInit } from '@angular/core';
import { user } from '../usermodule';
import { MyserviceService } from '../myservice.service'
import { takeUntil } from 'rxjs/operators'
import { Subject } from 'rxjs'
import { Router } from '@angular/router'

@Component({
  selector: 'app-task-to-do',
  templateUrl: './task-to-do.component.html',
  styleUrls: ['./task-to-do.component.css']
})
export class TaskToDoComponent implements OnInit {

  public list = [];
    private ngUnsubscribe = new Subject();
    constructor(public dataService:MyserviceService , private router : Router){}

    ngOnInit() : void
    {
      this.dataService.getUsers().pipe(takeUntil(this.ngUnsubscribe)).subscribe(data => {this.list = data; 
      console.log(this.list)});
    }

    onClick(titleText){
      this.router.navigate(['/to-do-list',titleText])
    }

    ngOnDestroy(){
      this.ngUnsubscribe.next();
      this.ngUnsubscribe.complete();
    }

}
