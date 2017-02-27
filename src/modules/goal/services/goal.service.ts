import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs/Rx';
import { GoalModel } from '../models/goal.model';
import { AngularFire, FirebaseListObservable } from 'angularfire2';


@Injectable()
export class GoalService {
    private _goals: BehaviorSubject<GoalModel[]>;

    constructor(private af: AngularFire) {
        this._goals = new BehaviorSubject<GoalModel[]>([]);
    }

    public getGoals(): Observable<GoalModel[]> {
        this.refreshGoals();
        return this._goals.asObservable();
    }

    public addGoal(goal:GoalModel)
    {
        this.af.database.list('/goal').push(goal);
    }

    public refreshGoals() {
        let _goals: GoalModel[] = [];
        _goals.push({
            title: 'Home Renovation',
            description: 'Renovate your home before 14-Mar-2017',
            deadline: new Date(2017, 3, 14, 23, 59, 59)
        });
        this._goals.next(_goals);
    }
}