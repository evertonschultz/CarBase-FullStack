import {
  ObjectID,
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ObjectIdColumn,
} from 'typeorm';


@Entity('cars')
class Car {
  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  name: string;

  @Column()
  brand: string;

  @Column()
  year: number;

  @Column({ default: false })
  sold: boolean;

  @Column()
  description: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Car;
