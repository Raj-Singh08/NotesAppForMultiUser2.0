import { Component, Input } from '@angular/core';
import { Task } from './task/task';
import { NewTask } from './new-task/new-task';

@Component({
  selector: 'app-tasks',
  imports: [Task,NewTask],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css'
})
export class Tasks {


  @Input ({required:true}) name!: string; 
  @Input ({required:true}) UserId!: string;
  isAddingTask: boolean = false;
  

  tasks=[
    {
      id: 't1',
      userId: 'u1',
      title: 'Task1',
      summary: 'Dummy task 1',
      dueDate: '2025-01-01'
    },
    {
      id: 't2',
      userId: 'u3',
      title: 'Task2',
      summary: 'Dummy task 1',
      dueDate: '2025-01-01'
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Task3',
      summary: 'Dummy task 1',
      dueDate: '2025-01-01'
    }
  ]

  onCompleteTask(id:string) {
    this.tasks = this.tasks.filter(tasks=>tasks.id!==id);
}

  onStartAddTask() {
  this.isAddingTask=true;
}

  get selectedUserTasks() {
    return this.tasks.filter(task => task.userId === this.UserId);
  }

onCancelAdd(value:boolean){
  this.isAddingTask=value;
}
}
