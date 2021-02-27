export class Task {
    private static nextId: number = 1;
    id: number;
    title: string;
    isDone: boolean;

    constructor(title: string = '') {
        this.id = Task.nextId++;
        this.title = title;
        this.isDone = false;
    }
}