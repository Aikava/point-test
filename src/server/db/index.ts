import Sequelize from 'sequelize';
import { get } from 'config';
import { EventInstance, IDBEvent } from 'server/db/events';
import { IConfig } from 'server/types/application';

const connectionString: IConfig['db']['connectionString'] = get('db.connectionString');
const dbOptions: IConfig['db']['options'] = get('db.options');

const db = new Sequelize(connectionString, dbOptions);

const events = db.import<EventInstance, IDBEvent>('events');
export default { db, events };
