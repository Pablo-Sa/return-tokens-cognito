import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthorizationCodeModule } from './code/authorization-code.module';

@Module({
  imports: [AuthorizationCodeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
