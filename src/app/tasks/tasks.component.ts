import { Component, OnInit , OnDestroy } from '@angular/core';
import { Task } from './task';
import { TaskdataService } from '../taskdata.service';
import { Observable } from 'rxjs/Rx';
import {AnonymousSubscription} from "rxjs/Subscription";
import { Router } from '@angular/router';
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
allTask:Task[]=[];
private timerSubscription: AnonymousSubscription;
 private postsSubscription: AnonymousSubscription;
  constructor(private _data:TaskdataService,private _router:Router) { }

  ngOnInit() {
this.refreshData();
  }
  delTask(item:Task){
    event.stopPropagation();
  this._data.deleteTask(item).subscribe(
    (data:any)=>{
       this.allTask.splice(this.allTask.indexOf(item),1); 
    },
    function(error){

    }
    
  );

  }
  public ngOnDestroy(): void {
        if (this.postsSubscription) {
            this.postsSubscription.unsubscribe();
        }
        if (this.timerSubscription) {
            this.timerSubscription.unsubscribe();
        }
}
  private subscribeToData(): void {

  this.timerSubscription=Observable.timer(5000)
  .subscribe(()=>this.refreshData());
  }
 private refreshData():void{
    this.postsSubscription= this._data.getAllTask().subscribe(

      (data:Task[])=>{
        this.allTask=data;
        this.subscribeToData();
      },
      function(error){
        console.log(error);
      },
      function(){
        console.log("complete");
      }
    );
  }
  onClick(){
this._router.navigate(['/addTask']);
  }
}
