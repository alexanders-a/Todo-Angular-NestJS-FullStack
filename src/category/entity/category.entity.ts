import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Todo } from 'src/todo/entity/todo.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity()
export class Category {

  @PrimaryGeneratedColumn()
  @Field((type) => Int)
  id: number
  @Column()
  @Field()
  title: string

  @OneToMany(() => Todo, todo => todo.category)
  @Field(() => [Todo], { nullable: true })
  todos: Todo[]

}