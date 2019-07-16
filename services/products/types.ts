// Add here any additional internal typings that resolvers might access
// These will be preserved across calls to `apollo server:codegen`

type ProductInternalRepresentation = {};

//// Machine generated types below this line:
// Use `apollo server:codegen` to reconstruct
type PromiseOrValue<T> = Promise<T> | T;

type rNil = undefined | null;
type tNil = null;

type ResolverFunction<TContext, TReturn, TParent = any, TArgs = {}> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: any
) => PromiseOrValue<TReturn>;

export type Resolvers<TContext = {}> = {
  Query: QueryResolver<TContext>;
  Product: ProductResolver<TContext>;
};

export type QueryResolver<TContext> = {
  topProducts: ResolverFunction<
    TContext,
    (Product | rNil)[] | rNil,
    any,
    { first: number }
  >;
};

export type ProductResolver<TContext> = {
  __resolveReference?: ResolverFunction<
    TContext,
    Product | rNil,
    ProductRepresentation
  >;
  name?: ResolverFunction<TContext, string | rNil, ProductRepresentation>;
  price?: ResolverFunction<TContext, number | rNil, ProductRepresentation>;
  weight?: ResolverFunction<TContext, number | rNil, ProductRepresentation>;
};

export type ProductRepresentation = {
  upc: string;
} & ProductInternalRepresentation;
export type Product = ProductRepresentation & {
  name?: String | tNil;
  price?: number | tNil;
  weight?: number | tNil;
};
