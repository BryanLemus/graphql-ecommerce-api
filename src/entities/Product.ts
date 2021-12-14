import { ObjectType, Field, ID, Float } from "type-graphql";
import { BaseEntity, Column, Entity, ObjectIdColumn } from "typeorm";
import { ObjectId } from "mongodb";

@ObjectType()
@Entity()
export class Product extends BaseEntity {
  @Field(() => ID)
  @ObjectIdColumn()
  id!: ObjectId;

  @Field()
  @Column()
  image!: string;

  @Field()
  @Column()
  name!: string;

  @Field()
  @Column()
  description!: string;

  @Field(() => Float)
  @Column()
  rating!: number;

  @Field()
  @Column()
  brand!: string;

  @Field(() => Float)
  @Column()
  price!: number;

  @Field()
  @Column()
  stock!: number;

  @Field()
  @Column()
  onSale!: boolean;

  @Field()
  @Column()
  categoryId!: string;
}
