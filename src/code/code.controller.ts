import { Controller, Post, Body } from '@nestjs/common';
import { CodeService } from './code.service';
import { CodeDto } from './dto/create-code.dto';

@Controller('code')
export class CodeController {
  constructor(private readonly codeService: CodeService) {}

  @Post()
  create(@Body() codeDto: CodeDto) {
    return this.codeService.returnTokens(codeDto);
  }
}
