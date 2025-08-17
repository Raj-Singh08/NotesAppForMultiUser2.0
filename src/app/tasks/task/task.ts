import { Component ,Input, Output,EventEmitter, inject} from '@angular/core';
import {type TaskType } from './task.model';
import { TaskService } from '../tasks.service';
import { DatePipe } from '@angular/common';
import { Card } from '../../shared/card/card';

@Component({
  selector: 'app-task',
  standalone:true,
  templateUrl: './task.html',
  styleUrl: './task.css',
  imports:[DatePipe,Card]
})
export class Task {
  @Input ({required: true}) task!: TaskType;
  private tasksService = inject(TaskService); // we can use constructor too foe injection

  onCompleteTask(){
    this.tasksService.removeTask(this.task.id);
  }
}
