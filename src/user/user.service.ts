import {
  Assembler,
  AssemblerQueryService,
  ClassTransformerAssembler,
  QueryService,
  InjectQueryService,
} from '@nestjs-query/core';
import { User } from './user.entity';
import * as argon2 from 'argon2';
import { argon2id } from 'argon2';
import { RegisterInputDTO } from './register.input.dto';
import { UserInputError, ApolloError } from 'apollo-server-express';
import { Injectable } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { ReturnModelType } from '@typegoose/typegoose';

@Assembler(User, User)
export class UserAssembler extends ClassTransformerAssembler<User, User> {}

@Injectable()
@QueryService(User)
export class UserService extends AssemblerQueryService<User, User> {
  constructor(
    @InjectModel(User) private readonly model: ReturnModelType<typeof User>,
    readonly assembler: UserAssembler,
    @InjectQueryService(User) private readonly service: QueryService<User>,
  ) {
    super(assembler, service);
  }

  async register(registerInput: RegisterInputDTO): Promise<User> {
    const hashedPassword = await argon2.hash(registerInput.password, {
      type: argon2id,
    });

    // const sysUser = await this.service.query({
    //   filter: {
    //     userName: { eq: 'admin@m8a.io.admin' },
    //   },
    // });

    // if (sysUser.length === 0) {
    //   throw new ApolloError(
    //     'There was a problem with locating the system user for the registration process. Please see your admin for help.',
    //     '10001',
    //   );
    // }

    const locatedUser = await this.service.query({
      filter: {
        userName: { eq: registerInput.email },
      },
    });

    if (locatedUser.length === 1) {
      throw new UserInputError('This user already exists.');
    }

    const user = await this.service.createOne({
      firstName: registerInput.firstName,
      lastName: registerInput.lastName,
      email: registerInput.email,
      userName: registerInput.email,
      password: hashedPassword,
      status: 'Registered', // TODO: need proper email verification
    //   createdBy: sysUser[0]._id,
    //   modifiedBy: sysUser[0]._id,
    });

    return user;
  }
}
