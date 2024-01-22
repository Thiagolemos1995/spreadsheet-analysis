import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SpreadsheetModule } from './spreadsheet/spreadsheet.module';
import { MulterModule } from '@nestjs/platform-express';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.POSTGRES_HOST || 'localhost',
      port: Number(process.env.POSTGRES_PORT || 5432),
      username: process.env.POSTGRES_USER || 'postgres',
      password: process.env.POSTGRES_PASSWORD || 'admin',
      database: process.env.POSTGRES_DATABASE || 'subscriberdata',
      autoLoadEntities: true,
      synchronize: true, //not use in production
    }),
    MulterModule.register({
      dest: './analyzer-service/utils/uploads', // Especifique a pasta de destino para os uploads
    }),
    SpreadsheetModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
