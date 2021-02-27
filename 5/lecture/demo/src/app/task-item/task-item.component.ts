import { Component, Input, OnInit, Output, EventEmitter, OnChanges, OnDestroy } from '@angular/core';
import { Task } from '../task';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit, OnChanges, OnDestroy {
  @Input() declare task: Task;
  @Input() declare pos: number;
  @Output() remove = new EventEmitter();
  @Output() done = new EventEmitter();
  constructor() {
    console.log('TaskItemCompomemt: constructor');
  }

  ngOnInit(): void {
    // fetch data from other resources here (eg from serivces)
    console.log('TaskItemCompomemt: ngOnInit');
  }

  ngOnChanges(): void {
    console.log('TaskItemCompomemt: ngOnChanges');
  }

  ngOnDestroy(): void {
    console.log('TaskItemCompomemt: ngOnDestroy');
  }

  removeTask(index: number) {
    this.remove.emit(index);
  }

  isDoneChanged(): void {
    this.done.emit(this.task);
  }

}
