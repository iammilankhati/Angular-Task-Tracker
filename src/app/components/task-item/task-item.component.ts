import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Task } from "./../../Task";
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css'],
})
export class TaskItemComponent {
  @Input() task!: Task;
  @Output() onDeleteTask:EventEmitter<Task> = new EventEmitter();
  @Output() onToggleRemainder:EventEmitter<Task> = new EventEmitter();

  faTimes = faTimes;

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }
  onDelete(task:Task) {
    this.onDeleteTask.emit(task);
  }

  onToggle(task:Task){
 this.onToggleRemainder.emit(task);
  }

}
