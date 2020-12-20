import type { Types } from 'mongoose'
import { Field, ID, ObjectType } from '@nestjs/graphql'
import { UserEntity } from '@core/user/user.entity'
import { FilterableField, PagingStrategies, Relation } from '@nestjs-query/query-graphql'
import { Ref } from '@typegoose/typegoose'
import { UserDTO } from '@core/user/user.dto'

@ObjectType()
@Relation('createdBy', () => UserDTO, {
  disableRemove: true,
  pagingStrategy: PagingStrategies.OFFSET,
  enableTotalCount: true
})
@Relation('modifiedBy', () => UserDTO, {
  disableRemove: true,
  pagingStrategy: PagingStrategies.OFFSET,
  enableTotalCount: true
})
export class BaseDTO {

  _id: Types.ObjectId

  @FilterableField(() => ID)
  id!: string;
  
  @Field(() => UserDTO)
  public createdBy?: Ref<UserEntity>

  @Field(() => UserDTO)
  public modifiedBy?: Ref<UserEntity>

  @FilterableField({
    description:
      'A generic datetime field used within an m8a data object. It is a timestamp of the date and time when the record was modified.',
  })
  public modifiedAt?: Date

  @FilterableField({
    description:
      'A generic datetime field used within an m8a data object. It is a timestamp of the date and time when the record was created.',
  })
  public createdAt?: Date

}