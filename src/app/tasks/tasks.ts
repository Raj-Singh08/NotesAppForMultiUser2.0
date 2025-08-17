import { Component, Input } from '@angular/core';
import { TaskService } from './tasks.service';


@Component({
  selector: 'app-tasks',
  standalone:false,
  templateUrl: './tasks.html',
  styleUrl: './tasks.css'
})
export class Tasks {


  @Input({ required: true }) name!: string;
  @Input({ required: true }) UserId!: string;
  isAddingTask: boolean = false;
  // private tasksService : TaskService;

  // constructor(tasksService:TaskService){
  //   this.tasksService=tasksService;
  //  }

  //OR
  constructor(private tasksService: TaskService) {}


  onStartAddTask() {
    this.isAddingTask = true;
  }

  get selectedUserTasks() {
    return this.tasksService.getUserTasks(this.UserId);
  }

  onCloseAddTask(value: boolean) {
    this.isAddingTask = value;
  }


}
