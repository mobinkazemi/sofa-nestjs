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

@Table({ timestamps: true, paranoid: true, freezeTableName: true })
export class Product extends Model {
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
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  @Column({
    type: DataType.STRING(500),
    allowNull: true,
  })
  description: string;

  @Column({
    type: DataType.TEXT,
    allowNull: true,
  })
  review: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    validate: { min: 0 },
  })
  masterPrice: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    validate: { min: 0 },
  })
  price: number;

  @Column({
    type: DataType.SMALLINT,
    allowNull: false,
    // defaultValue: 1,
    comment: `نوع محصول:‌
        1. مبل
        2. تخت خواب
        3. کمد
        4. جاکفشی
        `,
  })
  type: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: true,
  })
  categoryId: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: true,
  })
  shopId: number;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: true,
    defaultValue: true,
  })
  status: boolean;

  @Column({
    type: DataType.SMALLINT,
    allowNull: true,
  })
  quantity: number;
}
