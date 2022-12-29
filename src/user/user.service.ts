import { Injectable, Inject } from '@nestjs/common';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @Inject('userRepo')
    private userRepo: typeof User,
  ) {}

  async getAllUsers() {
    return await this.userRepo.findAll();
  }
}
