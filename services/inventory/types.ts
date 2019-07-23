// This is a machine generated file.
// Use "apollo service:codegen" to regenerate.
type PromiseOrValue<T> = Promise<T> | T;
type Nullable<T> = T | null | undefined;
type Index<
  Map extends Record<string, any>,
  Key extends string,
  IfMissing
> = Map[Key] extends object ? Map[Key] : IfMissing;

export interface Resolvers<TContext = {}, TInternalReps = {}> {
  Product?: ProductResolver<TContext, TInternalReps>;
}

type ProductRepresentation<TInternalReps extends Record<string, any>> = Index<
  TInternalReps,
  "Product",
  {}
> &
  ({ upc: string });

export type Product<TInternalReps = {}> = ProductRepresentation<
  TInternalReps
> & {
  upc?: string;
  weight?: Nullable<number>;
  price?: Nullable<number>;
  inStock?: Nullable<boolean>;
  shippingEstimate?: Nullable<number>;
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
  inStock?: (
    parent: ProductRepresentation<TInternalReps>,
    args: {},
    context: TContext,
    info: any
  ) => PromiseOrValue<Nullable<boolean>>;
  shippingEstimate?: (
    parent: ProductRepresentation<TInternalReps> & {
      price: Nullable<number>;
      weight: Nullable<number>;
    },
    args: {},
    context: TContext,
    info: any
  ) => PromiseOrValue<Nullable<number>>;
}
