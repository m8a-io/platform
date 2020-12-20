import { Module } from '@nestjs/common'
import { TypegooseModule as Typegoose } from 'nestjs-typegoose'
import { ConfigModule } from '@core/config'
import { TypegooseService } from './typegoose.service'

const dbUri = `${process.env.DB_CONNECTION}:${process.env.DB_PORT}/${process.env.DB_NAME}`

@Module({
  imports: [
    ConfigModule,
    Typegoose.forRoot(dbUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    })
  ],
  providers: [TypegooseService],
  exports: [TypegooseService]
})
export class TypegooseModule {}
