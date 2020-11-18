import { ObjectType } from '@nestjs/graphql';
import { FilterableField } from '@nestjs-query/query-graphql';
import { prop as Property, Index } from '@typegoose/typegoose';
import { BaseEntity } from './base.entity';

@ObjectType({ description: 'The extensible User Object Type.' })
@Index({ userName: 1 }, { unique: true })
@Index({ email: 1 }, { unique: true })
export class User extends BaseEntity {
  @FilterableField({ description: `The user's first name` })
  @Property({ required: true })
  public firstName: string;

  @FilterableField({ description: `The user's last name` })
  @Property({ required: true })
  public lastName: string;

  @FilterableField({
    description: `The user's username. In the form of an email address. Can be the user's email address of a version thereof.`,
  })
  @Property()
  public userName: string;

  @FilterableField({ description: `The user's email address` })
  @Property({ required: true })
  public email: string;

  @Property()
  public password: string;

  @FilterableField()
  @Property({ required: true })
  public status: string;
}
