import { Component, OnInit } from '@angular/core';
import { Task } from './task';
import { TaskdataService } from '../taskdata.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-addtask',
  templateUrl: './addtask.component.html',
  styleUrls: ['./addtask.component.css']
})
export class AddtaskComponent implements OnInit {
status = ['pending','done'];
model = {Id:'',Title:'',Status:'pending'};
  constructor(private _data:TaskdataService,private _router:Router) { }

  ngOnInit() {
  }
taskSubmit(){

this._data.addTask(this.model).subscribe(
  (data:any)=>{
this._router.navigate(['/allTask']);
  }
);
}
}
