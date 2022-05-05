import { Module } from '@nestjs/common';
import { AuthorizationCodeService } from './authorization-code.service';
import { AuthorizationCodeController } from './authorization-code.controller';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [
    HttpModule.register({
      timeout: 5000,
      maxRedirects: 5,
    }),
  ],
  controllers: [AuthorizationCodeController],
  providers: [AuthorizationCodeService]
})
export class AuthorizationCodeModule {}
