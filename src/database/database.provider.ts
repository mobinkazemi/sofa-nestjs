import { Sequelize } from 'sequelize-typescript';
import constants from '../constants';
import { User } from 'src/user/user.entity';
import { Product } from 'src/product/product.entity';


const { database } = constants;
export const databaseProvider = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({ dialect: 'postgres', ...database });
      sequelize.addModels([User, Product]);
      await sequelize.sync({ alter: true });
      return sequelize;
    },
  },
];
