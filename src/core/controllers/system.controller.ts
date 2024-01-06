import { Controller, Get, HttpCode } from '@nestjs/common';

@Controller()
export class SystemController {
  @Get('/health')
  @HttpCode(200)
  health() {}
}
