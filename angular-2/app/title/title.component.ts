import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit {

  constructor(private route : ActivatedRoute) { }
  public task_title;

  ngOnInit(): void {
    let title = this.route.snapshot.paramMap.get('title');
    this.task_title = title;
  }

}
