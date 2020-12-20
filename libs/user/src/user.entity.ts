import { Prop, Index, ModelOptions } from '@typegoose/typegoose';
import { BaseEntity } from '@core/core/base.entity';

@Index({ userName: 1 }, { unique: true })
@Index({ email: 1 }, { unique: true })
@ModelOptions({ schemaOptions: { collection: 'users' } })
export class UserEntity extends BaseEntity {
  @Prop({ required: true })
  public firstName: string;

  @Prop({ required: true })
  public lastName: string;

  @Prop()
  public userName: string;

  @Prop({ required: true })
  public email: string;

  @Prop()
  public password: string;

  @Prop({ required: true })
  public status: string;
}
