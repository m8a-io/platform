import { Module } from '@nestjs/common';
import { NestjsQueryTypegooseModule } from '@nestjs-query/query-typegoose';
import { NestjsQueryGraphQLModule } from '@nestjs-query/query-graphql';
import { User } from './user.entity';
import { UserAssembler, UserService } from './user.service';
import { UserResolver } from './user.resolver';

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypegooseModule.forFeature([User])],
      services: [UserService],
      assemblers: [UserAssembler],
      resolvers: [],
    }),
  ],
  providers: [UserResolver, UserService],
  exports: [],
})
export class UserModule {}
