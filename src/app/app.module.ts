import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './components/UI/material.module';
import { GraphqlModule } from './graphql/graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { CategoriesComponent } from './components/categories/categories.component';
import { TodosComponent } from './components/categories/todos/todos.component';
import { CreateTodosComponent } from './components/categories/todos/create-todos/create-todos.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CategoriesComponent,
    TodosComponent,
    CreateTodosComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    GraphqlModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
