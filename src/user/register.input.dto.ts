import { InputType, Field } from '@nestjs/graphql';
import { FilterableField } from '@nestjs-query/query-graphql';

@InputType()
export class RegisterInputDTO {
  @Field()
  // @Length(1, 100)
  public firstName: string;

  @FilterableField()
  // @Length(1, 100)
  public lastName: string;

  @Field({ nullable: true })
  //@IsNotEmpty({ message: 'You must enter an email address!'})
  //@IsEmail({}, { message: `The input isn't in the form of an email!`})
  public email: string;

  @Field()
  // @Length(8, 100, { message: 'Your password must be between 8 and 100 characters!'})
  public password: string;
}
