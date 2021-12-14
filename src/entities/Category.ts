import { ObjectId } from "mongodb";
import { ObjectType, Field, ID } from "type-graphql";
import { Column, Entity, ObjectIdColumn } from "typeorm";
import { Product } from "../entities/Product";

@ObjectType()
@Entity()
export class Category {
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
