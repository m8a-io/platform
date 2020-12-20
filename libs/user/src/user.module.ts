import { Module } from '@nestjs/common';
import { NestjsQueryTypegooseModule } from '@nestjs-query/query-typegoose';
import { NestjsQueryGraphQLModule } from '@nestjs-query/query-graphql';
import { UserEntity } from './user.entity';
import { UserAssembler, UserService } from './user.service';
import { UserResolver } from './user.resolver';

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypegooseModule.forFeature([UserEntity])],
      services: [UserService],
      assemblers: [UserAssembler],
      resolvers: []      
    }),
  ],
  providers: [UserService, UserResolver],
  exports: [UserService],
})
export class UserModule {}
