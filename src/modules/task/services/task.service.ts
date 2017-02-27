import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs/Rx';
import { TaskWithInfoModel } from '../models/task.model';

@Injectable()
export class TaskService {
    private _tasks: BehaviorSubject<TaskWithInfoModel[]>;

    constructor() {
        this._tasks = new BehaviorSubject<TaskWithInfoModel[]>([]);
    }

    public getTasks(): Observable<TaskWithInfoModel[]> {
        this.refreshTasks();
        return this._tasks.asObservable();
    }

    public refreshTasks() {
        let randomWait = Math.trunc(Math.random() * 5000);
        setTimeout(() => {
            let tasks: TaskWithInfoModel[] = [];
            for (let i = 1; i <= 10; i++) {
                let num = parseInt((Math.random() * 100).toString());
                tasks.push(TaskWithInfoModel.create({
                        imageUrl: 'assets/img/logonew.png',
                        title: 'São Paulo ' + num,
                        subTitle: num + ' Listings'
                    }));
            }

            tasks[1].tasks = [];

            for (let i = 1; i <= 6; i++) {
                let num = parseInt((Math.random() * 100).toString());
                tasks[1].tasks.push(TaskWithInfoModel.create({
                        imageUrl: 'assets/img/logonew.png',
                        title: 'São Paulo ' + num,
                        subTitle: num + ' Listings'
                    }));
            }

            this._tasks.next(tasks);
        }, randomWait);
        console.log(randomWait);
    }
}