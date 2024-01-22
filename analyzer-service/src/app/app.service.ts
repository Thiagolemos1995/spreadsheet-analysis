import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getStatus(): { message: string } {
    return { message: 'Analyzer service is up and running' };
  }
}
