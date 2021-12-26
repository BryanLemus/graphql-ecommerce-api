import { Arg, ID, Query, Resolver } from "type-graphql";
import { Category } from "../entity/Category";

@Resolver(() => Category)
export class CategoryResolver {
  @Query(() => [Category])
  async categories(): Promise<Category[]> {
    return await Category.find();
  }

  @Query(() => Category)
  async category(
    @Arg("id", () => ID) id: string
  ): Promise<Category | undefined> {
    return await Category.findOne(id);
  }
}
