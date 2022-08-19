import { NgModule } from '@angular/core';
//!!
// import { ApolloClientOptions, InMemoryCache } from '@apollo/client'; don't work
import { ApolloClientOptions, InMemoryCache } from '@apollo/client/core';
import { HttpLink,} from 'apollo-angular/http';
import { ApolloModule, APOLLO_OPTIONS } from 'apollo-angular';

const uri = 'https://backend-nestjs-graphql.herokuapp.com/graphql';



export function createApollo(httpLink: HttpLink): ApolloClientOptions<any> {
  return {
    link: httpLink.create({ uri }),
    cache: new InMemoryCache(),
  };
}

@NgModule({
  //!!
  exports: [ApolloModule],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink],
    },
  ],


})
export class GraphqlModule {}
