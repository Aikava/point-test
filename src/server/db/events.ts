import * as Sequelize from 'sequelize';

export interface IDBEvent  {
  id?: number;
  type: string;
  createdAt: Date,
  data: JSON
}

export type EventInstance = Sequelize.Instance<IDBEvent>;
export type EventModel = Sequelize.Model<EventInstance, IDBEvent>;

export default function (sequelize: Sequelize.Sequelize): EventModel {
  return sequelize.define(
    'event',
    {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      type: {
        type: Sequelize.STRING,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        field: 'created_at'
      },
      data: {
        allowNull: false,
        type: Sequelize.STRING
      }
    }, {
      underscored: true,
      timestamps: false,
      freezeTableName: true,
      tableName: 'events'
    });
}
