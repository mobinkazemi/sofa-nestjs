import { Sequelize } from 'sequelize-typescript';
import constants from '../constants';

const { database } = constants;

export const databaseProvider = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({ dialect: 'postgres', ...database });
      sequelize.addModels([]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
