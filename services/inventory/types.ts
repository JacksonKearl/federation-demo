// Add here any additional internal typings that resolvers might access
// These will be preserved across calls to `apollo server:codegen`

//// Machine generated types below this line:
// Use `apollo server:codegen` to reconstruct
type PromiseOrValue<T> = Promise<T> | T;

type rNil = undefined | null;
type tNil = null;

export type Resolvers<TContext = {}> = {
  Product: ProductResolver<TContext>;
};

type ResolverFunction<TContext, TReturn, TParent = any, TArgs = {}> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: any
) => PromiseOrValue<TReturn>;

export type ProductResolver<TContext> = {
  __resolveReference?: ResolverFunction<
    TContext,
    Product | rNil,
    ProductRepresentation
  >;
  inStock?: ResolverFunction<TContext, boolean, ProductRepresentation>;
  shippingEstimate?: ResolverFunction<
    TContext,
    number | rNil,
    ProductRepresentation & { price: number | rNil; weight: number | rNil }
  >;
};

export type ProductRepresentation = {
  upc: string;
};
export type Product = ProductRepresentation & {
  id?: string | tNil;
  name?: string | tNil;
  username?: string | tNil;
};
