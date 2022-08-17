import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateTodosComponent } from '../categories/todos/create-todos/create-todos.component';


@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.scss'],
})
export class HeaderComponent {
  constructor(public dialog: MatDialog) {}

  openModal() {
    this.dialog.open(CreateTodosComponent, {
      height: '360px',
      width: '600px',
    });
  }
}
