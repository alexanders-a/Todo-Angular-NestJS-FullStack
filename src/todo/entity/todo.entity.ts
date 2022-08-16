import { Field, ObjectType } from '@nestjs/graphql';
import { Category } from 'src/category/entity/category.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity()
export class Todo {
  @PrimaryGeneratedColumn()
  @Field()
  id: number;
  @Column()
  @Field()
  text: string;
  @Column()
  @Column({ default: false })
  @Field({ defaultValue: false })
  isCompleted?: boolean;

  @ManyToOne(() => Category, (category) => category.todos)
  @Field(() => Category)
  category: Category;

//   @Column()
//   @Field()
//   categoryId: number;
}
