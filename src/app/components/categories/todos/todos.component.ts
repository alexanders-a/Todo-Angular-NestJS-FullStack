import { Component, Input, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Expose } from 'class-transformer';
import { TODO_UPDATE } from 'src/app/graphql/graphq.queries';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnInit {
  constructor(private apollo: Apollo) {}

  @Input() id!: string;
  @Input() text!: string;
  @Input() isCompleted!: boolean;
  isChecked!: boolean;

  ngOnInit(): void {
    this.isChecked = this.isCompleted;
  }

  onChange(): void {
    this.apollo
      .mutate({
        mutation: TODO_UPDATE,
        variables: {
          categoryId: this.id,
          isCompleted: !this.isChecked,
        },
      })
      .subscribe((res: any) => {
        this.isChecked = !this.isChecked;
      });
  }
}
