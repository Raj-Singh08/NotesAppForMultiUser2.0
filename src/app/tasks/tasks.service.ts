import { Injectable } from "@angular/core";
import { NewTaskType } from "./task/task.model";


@Injectable({ providedIn: 'root' })
export class TaskService {
    private tasks = [
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
    ];

    constructor(){
        const tasks = localStorage.getItem('tasks');
        if(tasks){
            this.tasks=JSON.parse(tasks);
        }
    }

    getUserTasks(userId: string) {
        return this.tasks.filter(tasks => tasks.userId === userId);
    }

    addTask(task: NewTaskType, userId: string) {
        this.tasks.unshift({
            id: new Date().getTime().toString(),
            title: task.title,
            summary: task.summary,
            dueDate: task.date,
            userId: userId
        });
        this.saveTask();
    }

    removeTask(id: string) {
        this.tasks = this.tasks.filter((task) => task.id !== id);
        this.saveTask();
    }

    private saveTask(){
        localStorage.setItem('tasks',JSON.stringify(this.tasks))
    }
}