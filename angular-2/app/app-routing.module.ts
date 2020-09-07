import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TaskToDoComponent } from './task-to-do/task-to-do.component';
import { AppComponent } from './app.component';
import { TitleComponent } from './title/title.component';


const routes: Routes = [
  { path : 'to-do-list' , component : TaskToDoComponent },
  { path : 'to-do-list/:title' , component : TitleComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }