import { Component, OnInit } from '@angular/core';
import { UiToggleService } from 'src/app/services/ui-toggle.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  title: string = 'Task Tracker';
  showAddTask: boolean = false;
  subscription: Subscription = new Subscription();

  constructor(
    private uiToggleService: UiToggleService,
    private router: Router
  ) {
    this.subscription = this.uiToggleService
      .onToggle()
      .subscribe((val) => (this.showAddTask = val));
  }

  ngOnInit(): void {}

  toggleAddTask() {
    this.uiToggleService.toggleAddTask();
  }

  hasRoute(route: string) {
    return this.router.url === route;
  }
}
