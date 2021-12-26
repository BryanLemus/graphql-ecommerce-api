import { ObjectType, Field, ID } from "type-graphql";
import { BaseEntity, Column, Entity, ObjectIdColumn, ObjectID } from "typeorm";
import { Product } from "./Product";

@ObjectType()
@Entity("Category")
export class Category extends BaseEntity {
  @Field(() => ID)
  @ObjectIdColumn()
  id: ObjectID;

  @Field()
  @Column()
  name: string;

  @Field(() => [Product])
  @Column()
  products: Product[];
}
