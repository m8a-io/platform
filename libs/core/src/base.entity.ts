import { Types } from 'mongoose'
import {
  Prop,
  Ref,
  ModelOptions,
  plugin as Plugin
} from '@typegoose/typegoose'
import * as mongooseAutopopulate from 'mongoose-autopopulate'
import { UserEntity } from '@core/user/user.entity'
import { Base } from '@typegoose/typegoose/lib/defaultClasses'

@ModelOptions({
  schemaOptions: {
    timestamps: {
      updatedAt: 'modifiedAt',
    }
  }
})
@Plugin(mongooseAutopopulate as any)
export class BaseEntity extends Base {
  @Prop({ ref: () => UserEntity, autopopulate: { maxDepth: 1 } })
  public createdBy?: Ref<UserEntity>

  @Prop({ ref: () => UserEntity, autopopulate: { maxDepth: 1 } })
  public modifiedBy?: Ref<UserEntity>

  @Prop()
  public modifiedAt!: Date

  @Prop()
  public createdAt!: Date

  public get id(): string {
    return this._id.toHexString();
  }

  public set id(id) {
    this._id = new Types.ObjectId(id)
  }  
}
