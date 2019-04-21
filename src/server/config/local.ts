import { IConfig } from 'server/types/application';
import path from 'path';

const config: Partial<IConfig> = {
  staticDir: process.env.STATIC_DIR || path.resolve(__dirname, '../../client/dist'),
  db: {
    connectionString: process.env.DB_CONNECTION || 'postgres://user:password@localhost:5432/point_test'
  }
};

export = config;
