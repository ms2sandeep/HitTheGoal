import { NgModule } from '@angular/core';
import { GoalModule } from './goal/goal.module';
import { TaskModule } from './task/task.module';

@NgModule({
    imports: [
        GoalModule,
        TaskModule],
})
export class BundleModule { }