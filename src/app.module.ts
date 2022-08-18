import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { TodoModule } from './todo/todo.module';
import { CategoryModule } from './category/category.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    TodoModule,
    CategoryModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      introspection: true,
      playground: true,
    }),
    // !! error here
    TypeOrmModule.forRoot({
      type: 'postgres',
      // !! Error,mb, here, cauce host is localhost!!
      host: 'ec2-3-223-242-224.compute-1.amazonaws.com',
      port: 5432,
      username: 'igxvkblqzegaiy',
      password:
        'd16b965cd182c98c3fda1a36dcd704b863ba0356c4c352c1b18ce68b61228037',
      database: 'd6ihr4nun3bkap',
      entities: ['dist/**/*.entity{.ts,.js}'],
      autoLoadEntities: true,
      synchronize: true,
      ssl: {
        rejectUnauthorized: false,
      },
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
