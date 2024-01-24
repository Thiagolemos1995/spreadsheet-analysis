import {
  Controller,
  Delete,
  Get,
  Post,
  Query,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { SpreadsheetService } from '../services/spreadsheet.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { Express } from 'express';
import 'multer';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { Observable } from 'rxjs';
import {
  SubscriberData,
  SubscriberDataResponse,
} from '../models/subscriberData.interface';
import { GetSubscriberDto } from '../models/dtos';
import { DeleteResult } from 'typeorm';

export const imageFileFilter = (req, file, callback) => {
  if (!file.originalname.match(/\.(xlsx)$/)) {
    return callback(new Error('Only xlsx files are allowed!'), false);
  }
  callback(null, true);
};

export const editFileName = (req, file, callback) => {
  const name = file.originalname.split('.')[0];
  const fileExtName = extname(file.originalname);
  const randomName = Array(4)
    .fill(null)
    .map(() => Math.round(Math.random() * 16).toString(16))
    .join('');
  callback(null, `${name}-${randomName}${fileExtName}`);
};

@Controller('spreadsheet')
export class SpreadsheetController {
  constructor(private readonly spreadsheetService: SpreadsheetService) {}

  @Post()
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './analyzer-service/utils/uploads',
        filename: editFileName,
      }),
      fileFilter: imageFileFilter,
    })
  )
  subscriberDataSpreadsheet(
    @UploadedFile() file: Express.Multer.File
  ): Promise<SubscriberDataResponse> {
    const spreadsheetData =
      this.spreadsheetService.extractDataFromSpreadsheet(file);

    return spreadsheetData;
  }

  @Get()
  fetchSubscriberDataById(
    @Query() params: GetSubscriberDto
  ): Observable<SubscriberData> {
    return this.spreadsheetService.fetchSubscriberDataById(params);
  }

  @Get('/all')
  fetchSubscriberData(): Observable<SubscriberData[]> {
    return this.spreadsheetService.fetchSubscriberData();
  }

  @Delete()
  deleteSubscriberData(
    @Query() params: GetSubscriberDto
  ): Observable<DeleteResult> {
    return this.spreadsheetService.deleteSubscriberData(params);
  }
}
