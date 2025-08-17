import { Component, Output, EventEmitter, signal, inject, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTaskType } from '../task/task.model';
import { TaskService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.html',
  styleUrl: './new-task.css'
})
export class NewTask {
  @Input({required:true}) userId!:string;
  @Output() close = new EventEmitter<boolean>();
  // @Output() add = new EventEmitter<NewTaskType>();
  //we can use signal or two way binding , both will work with NgModel, no change needed in html , both will have same [(ngModel)]="enteredTitle"
  //In two way binding we can read as well as write values
  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';

  private tasksService = inject(TaskService);

  onCancelAdd() {
    this.close.emit(false);
  }

  onSubmit() {
    this.tasksService.addTask({
      title:this.enteredTitle,
      summary:this.enteredSummary,
      date:this.enteredDate
    },this.userId)
this.close.emit(false);
  }}
  