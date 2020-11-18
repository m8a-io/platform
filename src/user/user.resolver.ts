import { CRUDResolver, PagingStrategies } from '@nestjs-query/query-graphql';
import { Args, Mutation, Resolver, Query } from '@nestjs/graphql';
import { RegisterInputDTO } from './register.input.dto';
import { User } from './user.entity';
import { UserService } from './user.service';

@Resolver()
export class UserResolver extends CRUDResolver(User, {
  pagingStrategy: PagingStrategies.OFFSET,
  aggregate: { enabled: true },
}) {
  constructor(private readonly userService: UserService) {
    super(userService);
  }

  @Query(() => User)
  async findByIdCustom(@Args('id') id: string): Promise<User> {
    return await this.userService.getById(id);
  }

  @Mutation(() => User, { nullable: true })
  async register(@Args('args') args: RegisterInputDTO): Promise<User> {
    return await this.userService.register(args);
  }
}
