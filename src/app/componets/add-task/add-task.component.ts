import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/Task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})
export class AddTaskComponent implements OnInit {
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();
  constructor() {}

  text: string = '';
  day: string = '';
  reminder: boolean = false;

  ngOnInit(): void {}

  onSubmit() {
    if (!this.text) {
      alert('Please add a task');
    } else if (!this.day) {
      alert('Please add a day&time');
    } else {
      const newTask = {
        text: this.text,
        day: this.day,
        reminder: this.reminder,
      };
      this.onAddTask.emit(newTask);
      console.log('added task' + newTask);
      this.text = '';
      this.day = '';
      this.reminder = false;
    }
  }
}
