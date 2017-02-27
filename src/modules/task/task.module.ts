import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { TaskComponent } from './task.component/task.component';
import { TaskWithInfoComponent } from './task-with-info.component/task-with-info.component';
import { TaskTileComponent } from './task-tile.component/task-tile.component';

import { TaskService } from './services/task.service';

@NgModule({
    imports: [SharedModule],
    declarations: [TaskComponent, TaskWithInfoComponent, TaskTileComponent],
    entryComponents: [TaskComponent],
    providers: [TaskService]
})
export class TaskModule { }