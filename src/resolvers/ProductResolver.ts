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
import { Product } from "../entities/Product";
import { Category } from "../entities/Category";
import { getMongoRepository } from "typeorm";

/**
 * Product Entity
 */

@Resolver(() => Product)
export class ProductResolver {
  /**
   * Return the product category
   * @param product
   * @returns Category | undefined
   */

  @FieldResolver(() => Category)
  async category(@Root() product: Product): Promise<Category | undefined> {
    return await Category.findOne(product.id);
  }

  /**
   * Return all products
   * @returns Products[]
   */

  @Query(() => [Product])
  async products(): Promise<Product[]> {
    return await Product.find();
  }

  /**
   * Return one product identified by id
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
   * Add a product into database
   * @param name: string
   * @param description: string
   * @param price: number
   * @returns Product
   */

  @Mutation(() => Product!)
  async addProduct(
    @Arg("name") name: string,
    @Arg("description") description: string,
    @Arg("brand") brand: string,
    @Arg("price", () => Float) price: number,
    @Arg("categoryId") categoryId: string
  ): Promise<Product> {
    const product = Product.create({
      name,
      description,
      brand,
      price,
      categoryId,
    });

    return await product.save();
  }

  /**
   * Delete a product identified by id
   * @param id
   * @returns Product
   */

  @Mutation(() => Product!, { nullable: true })
  async deleteProduct(
    @Arg("id", () => ID) id: string
  ): Promise<Product | undefined | null> {
    const AllProducts = await getMongoRepository(Product);
    const product = await AllProducts.findOne(id);

    if (product) {
      await AllProducts.delete(id);

      return product;
    }
    return null;
  }

  /**
   * Update a product into database identified by id
   * @param id
   * @param image
   * @param name
   * @param description
   * @param rating
   * @param brand
   * @param price
   * @param stock
   * @param onSale
   * @param categoryId
   * @returns
   */
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

      await getMongoRepository(Product).update(id, product);

      return product;
    }
    return null;
  }
}
