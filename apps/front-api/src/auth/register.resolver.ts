import { Args, Resolver, Mutation } from '@nestjs/graphql';
import { RegisterInputDTO } from './register.input.dto'
import { UserService } from '@core/user/user.service'
import { UserDTO } from '@core/user/user.dto'

@Resolver(() => UserDTO)
export class RegisterResolver {  
  constructor(
    private readonly userService: UserService) {
  }

  @Mutation(() => UserDTO, { description: 'This is the mutation for registering a new user.' })
  async register(@Args('data') registerInput: RegisterInputDTO): Promise<UserDTO> {
    return await this.userService.register(registerInput)
  }
}
