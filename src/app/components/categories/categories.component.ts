import { Apollo } from 'apollo-angular';
import { Component, Input, OnInit } from '@angular/core';
import { CATEGORIES_DESCRIPTION } from 'src/app/graphql/graphq.queries';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit {
  categories: any[] = [];

  constructor(private apollo: Apollo) {}
  ngOnInit(): void {
    this.apollo
      .watchQuery({
        query: CATEGORIES_DESCRIPTION,
      })
      .valueChanges.subscribe((result: any) => {
        this.categories = result?.data?.categories;
      });
  }
}
