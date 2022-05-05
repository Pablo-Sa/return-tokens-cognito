import { Test, TestingModule } from '@nestjs/testing';
import { AuthorizationCodeController } from './authorization-code.controller';
import { AuthorizationCodeService } from './authorization-code.service';

describe('CodeController', () => {
  let controller: AuthorizationCodeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthorizationCodeController],
      providers: [AuthorizationCodeService],
    }).compile();

    controller = module.get<AuthorizationCodeController>(AuthorizationCodeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
