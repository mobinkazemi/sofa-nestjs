import { Injectable, Inject } from '@nestjs/common';
import { User } from './user.entity';
import _ from 'lodash';
import { Op } from 'sequelize';
import { UserListInputDTO } from './dto/listInput.dto';
@Injectable()
export class UserService {
  constructor(
    @Inject('userRepo')
    private userRepo: typeof User,
  ) {}

  async list(checkedData: any) {
    for (let key in checkedData) {
      if (
        Object.keys(this.userRepo['rawAttributes']).includes(key) &&
        this.userRepo['rawAttributes'][key]['type']['key'] == 'STRING'
      )
        checkedData[key] = { [Op.substring]: checkedData[key] };
    }

    let orderColumn = checkedData.order ? checkedData.order : 'id';
    let orderType = !checkedData.asc ? 'desc' : 'asc';

    delete checkedData.asc;
    delete checkedData.order;
    
    const users = await this.userRepo.findAll({
      where: checkedData,
      order: [[orderColumn, orderType]],
      raw: true,
    });

    return users;
  }
}
