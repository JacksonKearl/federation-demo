// Add here any additional internal typings that resolvers might access
// These will be preserved across calls to `apollo server:codegen`

type ReviewInternalRepresentation = { authorID: string };

//// Machine generated types below this line:
// Use `apollo server:codegen` to reconstruct
type PromiseOrValue<T> = Promise<T> | T;

type rNil = undefined | null;
type tNil = null;

export type Resolvers<TContext = {}> = {
  Review: ReviewResolver<TContext>;
  User: UserResolver<TContext>;
  Product: ProductResolver<TContext>;
};

type ResolverFunction<TContext, TReturn, TParent = any, TArgs = {}> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: any
) => PromiseOrValue<TReturn>;

export type ReviewResolver<TContext> = {
  __resolveReference?: ResolverFunction<TContext, Review, ReviewRepresentation>;
  body?: ResolverFunction<TContext, string | rNil, ReviewRepresentation>;
  author?: ResolverFunction<
    TContext,
    UserRepresentation | rNil,
    ReviewRepresentation
  >;
  product?: ResolverFunction<TContext, Product | rNil, ReviewRepresentation>;
};

export type UserResolver<TContext> = {
  username?: ResolverFunction<TContext, string | rNil, UserRepresentation>;
  numberOfReviews?: ResolverFunction<TContext, number, UserRepresentation>;
  reviews?: ResolverFunction<
    TContext,
    (Review | rNil)[] | rNil,
    UserRepresentation
  >;
};

export type ProductResolver<TContext> = {
  reviews?: ResolverFunction<
    TContext,
    (Review | rNil)[] | rNil,
    ProductRepresentation
  >;
};

export type ReviewRepresentation = {
  id: string;
} & ReviewInternalRepresentation;

export type Review = ReviewRepresentation &
  ReviewInternalRepresentation & {
    body?: string | tNil;
    author?: User | tNil;
    product?: Product | tNil;
  };

export type UserRepresentation = { id: string };
export type User = UserRepresentation & {
  username?: string | tNil;
  numberOfReviews?: number | tNil;
  reviews?: (Review | tNil)[] | tNil;
};

export type ProductRepresentation = {
  upc: string;
};
export type Product = ProductRepresentation & {
  reviews?: (Review | tNil)[] | tNil;
};
