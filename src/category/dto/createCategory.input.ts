import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CategoryCreateDTO {
  @Field()
  title: string;
}
