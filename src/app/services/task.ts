import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Task {
  id: number | undefined;

  constructor() { }

  private tasks: Array<Task> = [];

  getTasks(): Array<Task> {

    this.tasks = this.getFromLocalStorage();

    return this.tasks;
  }

  getById(id: number): Task | undefined {

    const task = this.tasks.find(c => c.id === id);

    return task;
  }

  addTask(task: Task) {

    this.tasks.push(task);

    //ele grava tudo no localStorage
      this.saveToLocalstorage();
  }

  updateTask() {

    //ele grava tudo no localStorage
      this.saveToLocalstorage();
  }

  removeTask(task: Task) {
    const index = this.tasks.indexOf(task);

    if (index !== -1) {
      //achou
      this.tasks.splice(index, 1);

      //ele grava tudo no localStorage
      this.saveToLocalstorage();
    }

  }

  private saveToLocalstorage() {

    const tasksJSON = JSON.stringify(this.tasks);

    localStorage.setItem('tasks', tasksJSON);

  }

  private getFromLocalStorage(): Array<Task> {

    const tasksJSON = localStorage.getItem('tasks');

    if (!tasksJSON) {
      //não achou 
      return new Array<Task>();
    }

    return JSON.parse(tasksJSON);
  }

}
