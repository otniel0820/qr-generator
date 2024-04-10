import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { QrModule } from './qr/qr.module';


@Module({
  imports: [
    ConfigModule.forRoot(),
    QrModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
