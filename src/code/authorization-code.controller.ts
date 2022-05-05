import { Controller, Post, Body } from '@nestjs/common';
import { AuthorizationCodeService } from './authorization-code.service';
import { AuthorizationCodeDto } from './dto/authorization-code.dto';

@Controller('code')
export class AuthorizationCodeController {
  constructor(private readonly authorizationCodeService: AuthorizationCodeService) {}

  @Post()
  create(@Body() authorizationCodeDto: AuthorizationCodeDto) {
    return this.authorizationCodeService.returnTokens(authorizationCodeDto);
  }
}
