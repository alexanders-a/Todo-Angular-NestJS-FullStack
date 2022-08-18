import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { CategoryModule } from './category/category.module';

@Module({
  imports: [
    CategoryModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      driver: ApolloDriver,
      debug: false,
      playground: true,
      introspection: true,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
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
  controllers: [],
  providers: [],
})
export class AppModule {}
