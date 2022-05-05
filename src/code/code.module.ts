import { Module } from '@nestjs/common';
import { CodeService } from './code.service';
import { CodeController } from './code.controller';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [
    HttpModule.register({
      timeout: 5000,
      maxRedirects: 5,
    }),
  ],
  controllers: [CodeController],
  providers: [CodeService]
})
export class CodeModule {}
