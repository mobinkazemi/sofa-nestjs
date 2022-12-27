import {
  Table,
  Column,
  Model,
  DataType,
  Default,
  CreatedAt,
  UpdatedAt,
  DeletedAt,
} from 'sequelize-typescript';

@Table({tableName: 'user', timestamps: true, paranoid: true})
export class User extends Model {
  @Column({
    type: DataType.INTEGER,
    allowNull: true,
  })
  pid: number;

  @Column({ 
    type: DataType.INTEGER,
    allowNull: true,
  })
  ord: number;

  @Column({
    type: DataType.STRING(12),
    allowNull: false,
    unique: true,
  })
  cellphone: string;

  @Column({
    type: DataType.STRING(64),
    allowNull: true,
  })
  firstName: string;

  @Column({
    type: DataType.STRING(64),
    allowNull: true,
  })
  lastName: string;

  @Column({
    type: DataType.STRING(128),
    allowNull: true,
  })
  displayName: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: true,
    comment: 'تصویر پروفایل',
  })
  picFileId: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: true,
  })
  provinceId: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: true,
  })
  cityId: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: true,
  })
  zone: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: true,
  })
  userRoleId: number;

  @Column({
    type: DataType.STRING,
    allowNull: true,
    unique: true,
  })
  username: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  password: string;

  @Column({
    type: DataType.STRING(128),
    allowNull: true,
  })
  email: string;

  @Column({
    type: DataType.SMALLINT,
    allowNull: true,
    defaultValue: 1,
    comment: `وضعیت کاربر:
    1. فعال
    0. غیر فعال
    `,
  })
  condition: number;
}
