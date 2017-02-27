import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { GoalComponent } from './goal.component/goal.component'

import { GoalService } from './services/goal.service';

@NgModule({
    imports: [SharedModule],
    declarations: [GoalComponent],
    entryComponents: [GoalComponent],
    providers: [GoalService]
})
export class GoalModule { }