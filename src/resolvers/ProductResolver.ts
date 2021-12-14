/**
 * Import modules
 */

import {
  Resolver,
  Query,
  FieldResolver,
  Root,
  Arg,
  Mutation,
  Float,
  ID,
} from "type-graphql";
import * as db from "../fake-database";
import { Product } from "../entities/Product";
import { Category } from "../entities/Category";
import { getRepository } from "typeorm";

/**
 * Product Entity
 */

@Resolver(() => Product)
export class ProductResolver {
  /**
   *
   * @param product
   * @returns Category | undefined
   */

  @FieldResolver(() => Category)
  category(@Root() product: Product): { id: string; name: string } | undefined {
    return db.categories.find((category) => category.id === product.categoryId);
  }

  /**
   *
   * @returns Products[]
   */

  @Query(() => [Product])
  async products(): Promise<Product[]> {
    return await Product.find();
  }

  /**
   *
   * @param id: string
   * @returns Product | undefined | null
   */

  @Query(() => Product!, { nullable: true })
  async product(
    @Arg("id", () => ID) id: string
  ): Promise<Product | undefined | null> {
    return await Product.findOne(id);
  }

  /**
   *
   * @param name: string
   * @param description: string
   * @param price: number
   * @returns Product
   */

  @Mutation(() => Product!)
  async addProduct(
    @Arg("name") name: string,
    @Arg("description") description: string,
    @Arg("price", () => Float) price: number
  ): Promise<Product> {
    const product = Product.create({
      name,
      description,
      price,
    });

    return await product.save();
  }

  /**
   *
   * @param id
   * @returns Product
   */

  @Mutation(() => Product!, { nullable: true })
  async deleteProduct(
    @Arg("id", () => ID) id: string
  ): Promise<Product | undefined | null> {
    const AllProducts = await getRepository(Product);
    const product = await AllProducts.findOne(id);

    if (product) {
      await AllProducts.delete(id);

      return product;
    }
    return null;
  }

  async updateProduct(
    @Arg("id", () => ID) id: string,
    @Arg("image") image: string,
    @Arg("name") name: string,
    @Arg("description") description: string,
    @Arg("rating", () => Float) rating: number,
    @Arg("brand") brand: string,
    @Arg("price", () => Float) price: number,
    @Arg("stock", () => Float) stock: number,
    @Arg("onSale") onSale: boolean,
    @Arg("categoryId") categoryId: string
  ): Promise<Product | null> {
    let product = await Product.findOne(id);

    if (product) {
      product.image = image;
      product.name = name;
      product.description = description;
      product.rating = rating;
      product.brand = brand;
      product.price = price;
      product.stock = stock;
      product.onSale = onSale;
      product.categoryId = categoryId;

      await getRepository(Product).update(id, product);

      return product;
    }
    return null;
  }
}
