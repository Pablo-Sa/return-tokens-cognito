import { Injectable } from '@nestjs/common';
import { CodeDto } from './dto/create-code.dto';
@Injectable()
export class CodeService {
  returnTokens(code: CodeDto) {
    console.log(code)
    return 'This action adds a new code';
  }
}
