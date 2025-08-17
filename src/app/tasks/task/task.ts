import { Component ,Input, Output,EventEmitter, inject} from '@angular/core';
import {type TaskType } from './task.model';
import { TaskService } from '../tasks.service';

@Component({
  selector: 'app-task',
  standalone:false,
  templateUrl: './task.html',
  styleUrl: './task.css',
})
export class Task {
  @Input ({required: true}) task!: TaskType;
  private tasksService = inject(TaskService); // we can use constructor too foe injection

  onCompleteTask(){
    this.tasksService.removeTask(this.task.id);
  }
}
