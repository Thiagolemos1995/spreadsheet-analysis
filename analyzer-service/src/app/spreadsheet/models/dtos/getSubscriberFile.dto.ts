import { IsNotEmpty } from 'class-validator';

export class GetSubscriberDto {
  @IsNotEmpty()
  id: string;
}
