import { Module } from '@nestjs/common'
import { GraphQLModule as GraphQL } from '@nestjs/graphql'

@Module({
  imports: [
    GraphQL.forRoot({
      autoSchemaFile: true,
      path: process.env.GQL_PATH
    })
  ],
  providers: []
})
export class GraphQLModule {}
