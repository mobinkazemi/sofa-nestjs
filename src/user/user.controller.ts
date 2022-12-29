import { Controller, Get, Param, ParseBoolPipe, Query } from '@nestjs/common';
import { UserListInputDTO } from './dto/listInput.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get('/list')
  list(
    @Query('asc', ParseBoolPipe) asc: boolean,
    @Query('order') order: string,
    @Query() userListInput: UserListInputDTO,
  ) {
    return this.userService.list({ ...userListInput, order, asc });
  }
}
