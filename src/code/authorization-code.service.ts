import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';
import { AuthorizationCodeDto } from './dto/authorization-code.dto';

@Injectable()
export class AuthorizationCodeService {

  constructor(private httpService: HttpService) {}

  async returnTokens(authorizationCode: AuthorizationCodeDto) {
    const params = new URLSearchParams()
    params.append('grant_type', process.env.GRANT_TYPE)
    params.append('client_id', process.env.CLIENT_ID_COGNITO)
    params.append('redirect_uri', process.env.REDIRECT_URI_COGNITO)
    params.append('code', authorizationCode.code)

    const config = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }

    try {
      const tokens = await firstValueFrom(this.httpService.post(process.env.URI_COGNITO_OAUTH, params, config));
      console.log(tokens.data)
      return tokens.data
    } catch (error) {
      console.error(error.response.data)
      return error.response.data
    }
  }
}
