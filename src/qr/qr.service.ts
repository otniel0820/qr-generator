import { Injectable } from '@nestjs/common';

@Injectable()
export class QrService {
  generateAppLink(userAgent: string): string {
    let appLink: string;

    if (userAgent.includes('iPhone') || userAgent.includes('iPad')) {
      appLink = process.env.URL_IOS;
    } else if (userAgent.includes('Android')) {
      appLink = process.env.URL_ANDROID;
    } else {
      appLink = process.env.URL;
    }

    return appLink;
  }
}
