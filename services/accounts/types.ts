// Add here any additional internal typings that resolvers might access
// These will be preserved across calls to `apollo server:codegen`

type UserInternalRepresentation = {};

//// Machine generated types below this line:
// Use `apollo server:codegen` to reconstruct
type PromiseOrValue<T> = Promise<T> | T;

type rNil = undefined | null;
type tNil = null;

export type Resolvers<TContext = {}> = {
  Query: QueryResolver<TContext>;
  User: UserResolver<TContext>;
};

type ResolverFunction<TContext, TReturn, TParent = any, TArgs = {}> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: any
) => PromiseOrValue<TReturn>;

export type QueryResolver<TContext> = {
  me: ResolverFunction<TContext, User | rNil>;
  allUsers: ResolverFunction<TContext, (User | rNil)[] | rNil>;
};

export type UserResolver<TContext> = {
  __resolveReference?: ResolverFunction<
    TContext,
    User | rNil,
    UserRepresentation
  >;
  id?: ResolverFunction<TContext, string, UserRepresentation>;
  name?: ResolverFunction<TContext, string | rNil, UserRepresentation>;
  username?: ResolverFunction<TContext, string | rNil, UserRepresentation>;
};

export type UserRepresentation = { id: string } & UserInternalRepresentation;
export type User = UserRepresentation & {
  id?: string | tNil;
  name?: string | tNil;
  username?: string | tNil;
};
