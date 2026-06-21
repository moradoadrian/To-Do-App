import { Injectable } from '@angular/core';
import { Task } from '../task';
@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasks: Task[] = []

  constructor() { }

  getTasks(): Task[] { // Muestra las tareas
    return this.tasks;
  }

  addTask(task: Task) { // Agrega una tarea
    this.tasks.push(task);
  }

  deleteTask(id: number) { // Elimina una tarea
    this.tasks = this.tasks.filter(task => task.id !== id);
  }



}
