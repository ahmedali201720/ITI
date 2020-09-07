import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { TaskToDoComponent } from './task-to-do/task-to-do.component';
import { BoolPipePipe } from './bool-pipe.pipe';
import { TitleComponent } from './title/title.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskToDoComponent,
    BoolPipePipe,
    TitleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
