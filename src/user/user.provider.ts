import { User } from './user.entity';

export const userProvider = [
  {
    provide: 'userRepo',
    useValue: User,
  },
];
