import { Component, OnInit } from '@angular/core';
import {
  Validators,
  FormControl,
  FormGroup,
  FormBuilder,
} from '@angular/forms';
import { Apollo } from 'apollo-angular';
import {
  CATEGORIES_DESCRIPTION,
  TODO_CREATE,
} from 'src/app/graphql/graphq.queries';

@Component({
  selector: 'app-create-todos',
  templateUrl: './create-todos.component.html',
  styleUrls: ['./create-todos.component.scss'],
})
export class CreateTodosComponent implements OnInit {
  todoName = new FormControl('', [Validators.required]);
  todoForm!: FormGroup;
  todoInput: any = '';
  categories: any[] = [];

  constructor(private apollo: Apollo, private formBuilder: FormBuilder) {}

  initForm(): void {
    this.todoForm = this.formBuilder.group({
      todoText: new FormControl('', [Validators.required, Validators.min(2)]),
      category: new FormControl('', Validators.required),
    });
  }

  ngOnInit(): void {
    this.initForm();
    this.apollo
      .watchQuery({
        query: CATEGORIES_DESCRIPTION,
      })
      .valueChanges.subscribe((result: any) => {
        this.categories = result?.data?.categories;
      });
  }

  ngOnDestroy() {
    this.todoForm.reset();
  }
  onSubmit() {
    if (this.todoForm.valid) {
      const { todoText, category } = this.todoForm.value;
      this.createTodo(todoText, category);
    }
    return;
  }
  createTodo(todoText: string, categoryId: number) {
    this.apollo
      .mutate({
        mutation: TODO_CREATE,
        variables: {
          text: todoText,
          id: categoryId,
        },
      })
      .subscribe(() => {
        this.todoForm.reset();
        window.location.reload();
      });
  }
}
