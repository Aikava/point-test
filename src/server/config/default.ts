import { IConfig } from 'server/types/application';

process.env.ALLOW_CONFIG_MUTATIONS = 'true';

const config: Partial<IConfig>= {
  server: {
    port: 1122
  },
  db: {
    connectionString: process.env.DB_CONNECTION,
    options: {
      dialect: 'postgres'
    }
  },
  staticDir: process.env.STATIC_DIR || './'
};

export = config;
