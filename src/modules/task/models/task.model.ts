export class TaskWithInfoModel {
    public task: TaskModel;
    public taskInfo: TaskInfoModel;
    public taskInfoImages: TaskInfoImageModel[];
    public tasks: TaskWithInfoModel[];

    private constructor()
    { }

    public static create(
        task: TaskModel = null,
        taskInfo: TaskInfoModel = null,
        taskInfoImages: TaskInfoImageModel[] = null,
        tasks: TaskWithInfoModel[] = null
    ): TaskWithInfoModel {
        var model = new TaskWithInfoModel();
        model.task = task;
        model.taskInfo = taskInfo;
        model.taskInfoImages = taskInfoImages;
        model.tasks = tasks;
        return model;
    }

    public hasChildren(): boolean {
        return !!this.tasks && this.tasks.length > 0;
    };
}

export class TaskModel {
    public title: string;
    public subTitle: string;
    public imageUrl: string;
}

export class TaskInfoModel {
    public taskId: string;
    public title: string;
    public subTitle: string;
    public description: string;
}

export class TaskInfoImageModel {
    public taskInfoId: string;
    public url: string;
    public description: string;
}