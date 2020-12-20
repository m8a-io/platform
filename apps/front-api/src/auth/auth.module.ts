import { Module } from '@nestjs/common'
import { RegisterResolver } from './register.resolver'
import { UserModule } from '@core/user/user.module'

@Module({
  imports: [UserModule],
  providers: [RegisterResolver]
})
export class AuthModule {}
