import { Routes } from '@angular/router';
import { TaskDetails } from './task-details/task-details';
import { TaskList } from './task-list/task-list';

export const routes: Routes = [

    
    {path: 'taskDetails', title: 'Detalhe da tarefa', component: TaskDetails},
    {path: 'taskList', title: 'Lista de tarefas', component: TaskList},
    {path: '', redirectTo: 'taskList', pathMatch: 'full'},

];
