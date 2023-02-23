import { Component } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { Task } from 'src/app/Task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent {
  tasks: Task[] = [];

  constructor(private tasksService: TaskService) {}

  ngOnInit(): void {
    this.tasksService.getTasks().subscribe((tasks) => (this.tasks = tasks));
  }



  deleteTask(task:Task){
    this.tasksService.deleteTask(task).subscribe(()=>this.tasks = this.tasks.filter(t=>t.id !== task.id))
  }

  toggleRemainder(task:Task){
    task.remainder = !task.remainder
    this.tasksService.updateTask(task).subscribe()
  }

  addTask(task:Task){
    this.tasksService.addTask(task).subscribe((task)=>this.tasks.push(task))
  }
}
