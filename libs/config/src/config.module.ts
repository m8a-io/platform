import { Module } from '@nestjs/common'
import { ConfigModule as Config } from '@nestjs/config'
import { configHelper } from './config.helper'
import { validationSchema } from './validation.schema'

@Module({
  imports: [
    Config.forRoot({
      isGlobal: true,
      load: [configHelper],
      validationSchema,
      envFilePath: ['admin-api.env']
    })
  ]
})
export class ConfigModule {}
