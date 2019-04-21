export declare interface IConfig {
  server: {
    port: number;
  };
  staticDir: string;
  db: {
    connectionString: string;
    options?: {
      dialect: string;
    };
  };
}
