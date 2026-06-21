import { Component } from '@angular/core';
import { TaskService } from '../service/task.service';
import { Task } from '../task';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task',
  imports: [CommonModule, FormsModule],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  task: Task[] = []
  taskNewTitle: string = "";
  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.task = this.taskService.getTasks();
  }

  addTask(): void {
    const newTask: Task = {
      id: this.task.length + 1,
      title: this.taskNewTitle,
      completed: false
    }
    this.taskService.addTask(newTask);
    console.log("Agregando una nueva tarea")
  }

  deleteTask(id: number): void {
    this.taskService.deleteTask(id);
    this.task = this.taskService.getTasks();
  }
}
