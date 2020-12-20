import { Module } from '@nestjs/common'
import { ConfigModule } from '@core/config'
import { UserModule } from '@core/user'
import { AuthModule } from './auth/auth.module'
import { TypegooseModule } from '@core/typegoose'
import { GraphQLModule } from '@core/graphql'

@Module({
  imports: [ConfigModule, GraphQLModule, TypegooseModule, UserModule, AuthModule]
})
export class AppModule {}