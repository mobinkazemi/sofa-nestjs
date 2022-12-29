import { Controller, Get, Param, Query } from '@nestjs/common';
import { UserListInputDTO } from './dto/listInput.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get('/list')
  list(@Query() userListInput: UserListInputDTO) {
    return this.userService.list({});
  }
}
