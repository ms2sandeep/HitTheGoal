import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Observable } from 'rxjs/Rx';

import { NavParams } from 'ionic-angular';

import { TaskWithInfoModel } from '../models/task.model';
import { TaskService } from '../services/task.service';



@Component({
    selector: 'task',
    templateUrl: 'task.component.html'
})
export class TaskComponent {
    tasksWithInfo: Observable<TaskWithInfoModel[]>;
    items: FirebaseListObservable<any[]>;

    constructor(
        private navParams: NavParams,
        private taskService: TaskService,
        af: AngularFire) {
        let tasksWithInfo = this.navParams.get('tasks');

        if (tasksWithInfo && tasksWithInfo.length > 0) {
            this.tasksWithInfo = new Observable<TaskWithInfoModel[]>(observer => {
                observer.complete(tasksWithInfo);
            });
        }
        else {
            this.items = af.database.list('/items');
            this.tasksWithInfo = this.taskService.getTasks();
        }
    }

    refreshTasks() {
        this.taskService.refreshTasks();
    }
}