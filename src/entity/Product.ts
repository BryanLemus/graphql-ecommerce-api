import { ObjectType, Field, ID, Float } from "type-graphql";
import { BaseEntity, Column, Entity, ObjectIdColumn, ObjectID } from "typeorm";
import { Category } from "./Category";

@ObjectType()
@Entity("Product")
export class Product extends BaseEntity {
  @Field(() => ID)
  @ObjectIdColumn()
  id: ObjectID;

  @Field({nullable: true})
  @Column()
  image: string;

  @Field()
  @Column()
  name: string;

  @Field()
  @Column()
  description: string;

  @Field(() => Float)
  @Column()
  rating: number;

  @Field()
  @Column()
  brand: string;

  @Field(() => Float)
  @Column()
  price: number;

  @Field()
  @Column()
  stock: number;

  @Field()
  @Column()
  onSale: boolean;

  @Field(() => Category)
  @Column()
  category: Category;
}
