import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule, PassportModule],
  providers: [],
  exports: [],
})
export class AuthModule {}
