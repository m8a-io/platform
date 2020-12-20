import { ObjectType } from '@nestjs/graphql'
import { FilterableField } from '@nestjs-query/query-graphql'
import { BaseDTO } from '@core/core/baseDTO'

@ObjectType('User')
export class UserDTO extends BaseDTO {

  @FilterableField({ description: `The user's first name` })
  public firstName: string

  @FilterableField({ description: `The user's last name` })
  public lastName: string

  @FilterableField({
    description: `The user's username. In the form of an email address. Can be the user's email address of a version thereof.`,
  })
  public userName: string

  public password: string

  @FilterableField({ description: `The user's email address` })
  public email: string

  @FilterableField()
  public status: string
}