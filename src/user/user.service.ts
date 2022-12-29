import { Injectable, Inject } from '@nestjs/common';
import { User } from './user.entity';
import { omitNull } from 'src/globals';
import { Op } from 'sequelize';
@Injectable()
export class UserService {
  constructor(
    @Inject('userRepo')
    private userRepo: typeof User,
  ) {}

  async list(checkedData: any) {
    for (let key in checkedData) {
      if (key && this.userRepo['rawAttributes'][key]['type']['key'] == 'STRING')
        checkedData[key] = { [Op.substring]: checkedData[key] };
    }

    let orderColumn = checkedData.order ? checkedData.order : 'id';
    let orderType =
      !checkedData.asc || checkedData.asc === 'false' ? 'desc' : 'asc';

    const users = await this.userRepo.findAll({
      where: checkedData,
      order: [[orderColumn, orderType]],
      raw: true,
    });

    return users;
  }
}
