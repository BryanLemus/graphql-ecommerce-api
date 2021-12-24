import { ObjectId } from "mongodb";
import { ObjectType, Field, ID } from "type-graphql";
import { BaseEntity, Column, Entity, ObjectIdColumn } from "typeorm";
import { Product } from "../entities/Product";

@ObjectType()
@Entity()
export class Category extends BaseEntity {
  @Field(() => ID)
  @ObjectIdColumn()
  id!: ObjectId;

  @Field()
  @Column()
  name!: string;

  @Field(() => [Product])
  @Column()
  products!: Product[];
}


