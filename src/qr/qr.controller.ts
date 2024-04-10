import { Controller, Get, Redirect, Req } from '@nestjs/common';
import { Request } from 'express';
import { QrService } from './qr.service';

@Controller('qr')
export class QrController {
  constructor(private readonly qrService: QrService) {}

  @Get()
  @Redirect()
  generateQrCode(@Req() request: Request) {
    const userAgent = request.headers['user-agent'];
    const appLink = this.qrService.generateAppLink(userAgent);
    return { url: appLink };
  }
}
