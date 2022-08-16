import { Field, InputType, Int } from '@nestjs/graphql';
import { Category } from 'src/category/entity/category.entity';

@InputType()
export class TodoCreateDTO {
  @Field()
  text: string;

  @Field(() => Int)
  category: Category;
}
