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
  Review?: ReviewResolver<TContext, TInternalReps>;
  User?: UserResolver<TContext, TInternalReps>;
  Product?: ProductResolver<TContext, TInternalReps>;
}

type ReviewRepresentation<TInternalReps extends Record<string, any>> = Index<
  TInternalReps,
  "Review",
  {}
> &
  ({ id: string });

export type Review<TInternalReps = {}> = ReviewRepresentation<TInternalReps> & {
  id?: string;
  body?: Nullable<string>;
  author?: Nullable<User>;
  product?: Nullable<Product>;
};
export interface ReviewResolver<TContext = {}, TInternalReps = {}> {
  __resolveReference?: (
    parent: ReviewRepresentation<{
      /* explicity don't pass TInternalReps */
    }>,
    args: {},
    context: TContext,
    info: any
  ) => PromiseOrValue<Nullable<Review>>;
  id?: (
    parent: ReviewRepresentation<TInternalReps>,
    args: {},
    context: TContext,
    info: any
  ) => PromiseOrValue<string>;
  body?: (
    parent: ReviewRepresentation<TInternalReps>,
    args: {},
    context: TContext,
    info: any
  ) => PromiseOrValue<Nullable<string>>;
  author?: (
    parent: ReviewRepresentation<TInternalReps>,
    args: {},
    context: TContext,
    info: any
  ) => PromiseOrValue<Nullable<User>>;
  product?: (
    parent: ReviewRepresentation<TInternalReps>,
    args: {},
    context: TContext,
    info: any
  ) => PromiseOrValue<Nullable<Product>>;
}

type UserRepresentation<TInternalReps extends Record<string, any>> = Index<
  TInternalReps,
  "User",
  {}
> &
  ({ id: string });

export type User<TInternalReps = {}> = UserRepresentation<TInternalReps> & {
  id?: string;
  username?: Nullable<string>;
  numberOfReviews?: number;
  reviews?: Nullable<Array<Nullable<Review>>>;
};
export interface UserResolver<TContext = {}, TInternalReps = {}> {
  __resolveReference?: (
    parent: UserRepresentation<{
      /* explicity don't pass TInternalReps */
    }>,
    args: {},
    context: TContext,
    info: any
  ) => PromiseOrValue<Nullable<User>>;
  username?: (
    parent: UserRepresentation<TInternalReps>,
    args: {},
    context: TContext,
    info: any
  ) => PromiseOrValue<Nullable<string>>;
  numberOfReviews?: (
    parent: UserRepresentation<TInternalReps>,
    args: {},
    context: TContext,
    info: any
  ) => PromiseOrValue<number>;
  reviews?: (
    parent: UserRepresentation<TInternalReps>,
    args: {},
    context: TContext,
    info: any
  ) => PromiseOrValue<Nullable<Array<Nullable<Review>>>>;
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
  reviews?: Nullable<Array<Nullable<Review>>>;
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
  reviews?: (
    parent: ProductRepresentation<TInternalReps>,
    args: {},
    context: TContext,
    info: any
  ) => PromiseOrValue<Nullable<Array<Nullable<Review>>>>;
}
