import { Injectable } from '@nestjs/common';
import * as xlsx from 'xlsx';
import { Express } from 'express';
import 'multer';
import { Repository } from 'typeorm';
import { SubscriberDataEntity } from '../models/subscriber.entity';
import { InjectRepository } from '@nestjs/typeorm';
import {
  SubscriberData,
  SubscriberDataResponse,
} from '../models/subscriberData.interface';
import { Observable, from } from 'rxjs';

@Injectable()
export class SpreadsheetService {
  constructor(
    @InjectRepository(SubscriberDataEntity)
    private readonly subscriberDataRepository: Repository<SubscriberDataEntity>
  ) {}

  async extractDataFromSpreadsheet(
    file: Express.Multer.File
  ): Promise<SubscriberDataResponse> {
    if (!file) {
      return { message: 'Nenhum arquivo enviado' };
    }

    const filePath = `./analyzer-service/utils/uploads/${file.filename}`;

    try {
      const workbook = xlsx.readFile(filePath);
      const sheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[sheetName];
      const data = xlsx.utils.sheet_to_json(worksheet, { header: 1 });
      const subscriberColumns = data[0];
      const subscriberData = data.slice(1);
      this.subscriberDataRepository.save({
        fileName: file.filename,
        subscriberDataColumns: subscriberColumns,
        subscriberDataRows: subscriberData as unknown[][],
      });

      return {
        message: 'Arquivo processado com sucesso!',
        filename: file.filename,
        subscriberDataColumns: subscriberColumns,
        subscriberDataRows: subscriberData,
      };
    } catch (error) {
      return { message: 'Erro ao processar o arquivo', error: error.message };
    }
  }

  fetchSubscriberData(): Observable<SubscriberData[]> {
    return from(this.subscriberDataRepository.find());
  }
}
