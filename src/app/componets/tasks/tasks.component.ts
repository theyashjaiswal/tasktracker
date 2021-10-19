import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/Task';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];
  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    //observable is returned from the service
    //http client returns an observable
    this.taskService.getTasks().subscribe((tasks) => (this.tasks = tasks));
  }
}
