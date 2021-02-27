import { Component, OnInit } from '@angular/core';
import { Task } from '../task';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  newTasks: Task[];
  currentTask: Task;
  doneTasks: Task[];

  constructor() {
    this.doneTasks = [];
    this.newTasks = [new Task('task 1')];
    this.currentTask = new Task();
  }

  ngOnInit(): void {
  }

  addTodo(): void {
    this.currentTask.title = this.currentTask.title.trim();
    if (this.currentTask.title === '') return;
    this.newTasks.push(this.currentTask);
    this.currentTask = new Task();
  }

  onTaskRemove(index: number) {
    this.newTasks = this.newTasks.filter(x => x.id !== index);
    this.doneTasks = this.doneTasks.filter(x => x.id !== index);
  }

  onDone(task: Task) {
    if (task.isDone) {
      this.onTaskRemove(task.id);
      this.doneTasks.push(task);
      this.doneTasks.sort((a, b) => a.id > b.id ? 1 : -1);
    } else {
      this.onTaskRemove(task.id);
      this.newTasks.push(task);
      this.newTasks.sort((a, b) => a.id > b.id ? 1 : -1);
    }
  }

}
