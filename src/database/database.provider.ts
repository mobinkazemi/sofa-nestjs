import { Sequelize } from 'sequelize-typescript';
import constants from '../constants';
import { User } from '../user/user.entity';

const { database } = constants;

export const databaseProvider = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({ dialect: 'postgres', ...database });
      sequelize.addModels([User]);
      await sequelize.sync({ alter: true });
      return sequelize;
    },
  },
];
