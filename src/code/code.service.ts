import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';
import { CodeDto } from './dto/create-code.dto';
@Injectable()
export class CodeService {

  constructor(private httpService: HttpService) {}

  async returnTokens(code: CodeDto) {
    console.log(code)
    const teste = await firstValueFrom(this.httpService.get(process.env.EXAMPLE));
    console.log(teste)
    return 'This action adds a new code';
  }
}
