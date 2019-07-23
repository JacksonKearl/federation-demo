// This is a machine generated file.
// Use "apollo service:codegen" to regenerate.
type PromiseOrValue<T> = Promise<T> | T;
type Nullable<T> = T | null | undefined;
type Index<
  Map extends Record<string, any>,
  Key extends string,
  Else
> = Map[Key] extends object ? Map[Key] : Else;

export interface Resolvers<TContext = {}, TInternalReps = {}> {
  Query: QueryResolver<TContext, TInternalReps>;
  Product?: ProductResolver<TContext, TInternalReps>;
}

export interface QueryResolver<TContext = {}, TInternalReps = {}> {
  topProducts: (
    parent: any,
    args: {
      first?: number;
    },
    context: TContext,
    info: any
  ) => PromiseOrValue<Nullable<Array<Nullable<Product>>>>;
}

type ProductRepresentation<TInternalReps extends Record<string, any>> = (Index<
  TInternalReps,
  "Product",
  {}
>) & { upc: string };

export type Product<TInternalReps = {}> = ProductRepresentation<
  TInternalReps
> & {
  upc?: string;
  name?: Nullable<string>;
  price?: Nullable<number>;
  weight?: Nullable<number>;
};
export interface ProductResolver<TContext = {}, TInternalReps = {}> {
  __resolveReference?: (
    parent: ProductRepresentation<{
      /* explicity don't pass TInternalReps */
    }>,
    args: {},
    context: TContext,
    info: any
  ) => PromiseOrValue<Nullable<Product>>;
  upc?: (
    parent: ProductRepresentation<TInternalReps>,
    args: {},
    context: TContext,
    info: any
  ) => PromiseOrValue<string>;
  name?: (
    parent: ProductRepresentation<TInternalReps>,
    args: {},
    context: TContext,
    info: any
  ) => PromiseOrValue<Nullable<string>>;
  price?: (
    parent: ProductRepresentation<TInternalReps>,
    args: {},
    context: TContext,
    info: any
  ) => PromiseOrValue<Nullable<number>>;
  weight?: (
    parent: ProductRepresentation<TInternalReps>,
    args: {},
    context: TContext,
    info: any
  ) => PromiseOrValue<Nullable<number>>;
}
