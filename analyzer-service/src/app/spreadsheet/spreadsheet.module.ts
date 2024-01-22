import { Module } from '@nestjs/common';
import { SpreadsheetService } from './services/spreadsheet.service';
import { SpreadsheetController } from './controllers/spreadsheet.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SubscriberDataEntity } from './models/subscriber.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SubscriberDataEntity])],
  providers: [SpreadsheetService],
  controllers: [SpreadsheetController],
})
export class SpreadsheetModule {}
