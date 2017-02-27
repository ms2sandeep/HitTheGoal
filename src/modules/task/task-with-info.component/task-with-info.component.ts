import { Component, Input } from '@angular/core';
import { TaskComponent } from '../task.component/task.component';
import { TaskWithInfoModel, TaskInfoModel } from '../models/task.model';
import { NavController, NavParams } from 'ionic-angular';

@Component({
    selector: 'task-with-info',
    templateUrl: 'task-with-info.component.html'
})
export class TaskWithInfoComponent {
    @Input()
    tasksWithInfo: TaskWithInfoModel[];

    constructor(private navCtrl: NavController, private navParams: NavParams) {
        console.log('tasks with info component is created');
    }

    ngAfterViewInit() {
        if (!this.tasksWithInfo) {
            this.tasksWithInfo = this.navParams.get('tasks');
        }
    }

    showTaskInfo(taskInfo: TaskInfoModel) {
        if (taskInfo) {
            console.log('This task has info');
        }
        else {
            console.log('No info for this task');
        }
    }

    showChildTasks(tasksWithInfo: TaskWithInfoModel[]) {
        if (tasksWithInfo && tasksWithInfo.length > 0) {
            console.log('This has children tasks');
            this.navCtrl.push(TaskComponent, {
                tasks: tasksWithInfo
            });
        }
        else {
            console.log('No children for this task');
        }
    }
}