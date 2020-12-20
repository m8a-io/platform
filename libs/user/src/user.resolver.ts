import { CRUDResolver, PagingStrategies } from '@nestjs-query/query-graphql'
import { Args, Resolver, Query } from '@nestjs/graphql'
import { UserDTO } from './user.dto'
import { UserInputDTO } from './user.input.dto'
import { UserService } from './user.service'

@Resolver(() => UserDTO)
export class UserResolver extends CRUDResolver(UserDTO, {
  pagingStrategy: PagingStrategies.OFFSET,
  aggregate: { enabled: true },
  CreateDTOClass: UserInputDTO,
  UpdateDTOClass: UserInputDTO
}) {
  constructor(readonly userService: UserService) {
    super(userService)
  }

  @Query(() => UserDTO)
  async findByIdCustom(@Args('id') id: string): Promise<UserDTO> {
    console.log('we are here!')
    const user = await this.userService.getById(id)
    console.log(user)
    return user
  }
}
