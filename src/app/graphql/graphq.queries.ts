import { gql } from 'apollo-angular';

export const CATEGORIES_DESCRIPTION = gql`
  query {
    categories {
      id
      title
      todos {
        id
        text
        isCompleted
      }
    }
  }
`;

export const TODO_UPDATE = gql`
  mutation UpdateTodo($categoryId: Int!, $isCompleted: Boolean!) {
    update(todoInput: { id: $categoryId, isCompleted: $isCompleted }) {
      id
    }
  }
`;

export const TODO_CREATE = gql`
  mutation CreateTodo($text: String!, $id: Int!) {
    createTodo(todoInput: { text: $text, category: $id }) {
      id
    }
  }
`;
