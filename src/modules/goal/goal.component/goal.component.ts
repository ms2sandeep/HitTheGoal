import { Component } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { GoalModel } from '../models/goal.model';

import { GoalService } from '../services/goal.service';

@Component({
    selector: 'goal',
    templateUrl: 'goal.component.html'
})
export class GoalComponent {
    public goals: Observable<GoalModel[]>;

    constructor(private goalService: GoalService)
    {
        this.goals  = goalService.getGoals();
    }

       
}