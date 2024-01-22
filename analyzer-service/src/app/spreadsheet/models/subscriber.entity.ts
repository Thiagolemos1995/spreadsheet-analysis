import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('subsciber_data')
export class SubscriberDataEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({ default: '' })
  fileName: string;

  @Column({ type: 'simple-array' })
  subscriberDataColumns: unknown;

  @Column('json')
  subscriberDataRows: unknown[][];
}
