import { Component, Input } from '@angular/core';
import { TaskModel } from '../models/task.model';


@Component({
    selector: 'task-tile',
    templateUrl: 'task-tile.component.html'
})
export class TaskTileComponent {
    @Input()
    task: TaskModel;
}