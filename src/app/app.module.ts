import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TasksComponent } from './tasks/tasks.component';
import { TaskdataService } from './taskdata.service';
import { routing } from './app.routing';
import { AddtaskComponent } from './tasks/addtask.component';
@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    AddtaskComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [TaskdataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
