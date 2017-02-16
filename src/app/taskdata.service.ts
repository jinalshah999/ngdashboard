import { Injectable } from '@angular/core';
import { Response, Http, Headers, RequestOptions } from '@angular/http';
import { Task } from './tasks/task';
import 'rxjs/Rx';
@Injectable()
export class TaskdataService {
  private url: string = "https://rkdemotask.herokuapp.com/Tasks/";
  constructor(private _http: Http) { }

  getAllTask() {
    return this._http.get(this.url)
      .map((res: Response) => res.json());
  }
  addTask(item: Task) {

    let body = JSON.stringify(item);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let req = new RequestOptions({ headers: headers });
    return this._http.post(this.url, body, req).map((res: Response) => res.json());

  }
  deleteTask(item: Task) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let req = new RequestOptions({ headers: headers });
    return this._http.delete(this.url + item.Id, req).
      map((res: Response) => res.json());
  }
}
