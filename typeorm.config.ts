import { DataSource } from 'typeorm';
import { ConfigService } from '@nestjs/config';
import { config } from 'dotenv';

config();

const configService = new ConfigService();

export default new DataSource({
  type: 'postgres',
  host: configService.get('DATABASE_HOST'),
  port: configService.get('DATABASE_PORT'),
  username: configService.get('DATABASE_USER'),
  password: configService.get('DATABASE_PASSWORD'),
  database: 'nest_api_learning',
  //   database: configService.get('DATABASE_NAME'),
  entities: ['dist/**/entities/*.entity.{ts,js}'],
  migrations: ['dist/src/migrations/*.{ts,js}'],
  migrationsTableName: 'typeorm_migrations',
  //   synchronize: true,
});