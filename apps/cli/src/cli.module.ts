import { Module } from '@nestjs/common'
import { CliService } from './cli.service'

@Module({
  imports: [],
  providers: [CliService],
})
export class CliModule {}
