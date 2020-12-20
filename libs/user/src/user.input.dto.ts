import { Field, InputType } from '@nestjs/graphql'

@InputType('UserInput')
export class UserInputDTO {

  @Field({ description: `The user's first name` })
  public firstName: string

  @Field({ description: `The user's last name` })
  public lastName: string

  @Field({
    description: `The user's username. In the form of an email address. Can be the user's email address of a version thereof.`,
  })
  public userName: string

  @Field()
  public password: string

  @Field({ description: `The user's email address` })
  public email: string

  @Field()
  public status: string
}

