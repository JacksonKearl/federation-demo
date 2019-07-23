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
  User?: UserResolver<TContext, TInternalReps>;
}

export interface QueryResolver<TContext = {}, TInternalReps = {}> {
  me: (
    parent: any,
    args: {},
    context: TContext,
    info: any
  ) => PromiseOrValue<Nullable<User>>;
  allUsers: (
    parent: any,
    args: {},
    context: TContext,
    info: any
  ) => PromiseOrValue<Nullable<Array<Nullable<User>>>>;
}

type UserRepresentation<TInternalReps extends Record<string, any>> = (Index<
  TInternalReps,
  "User",
  {}
>) & { id: string };

export type User<TInternalReps = {}> = UserRepresentation<TInternalReps> & {
  id?: string;
  name?: Nullable<string>;
  username?: Nullable<string>;
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
  id?: (
    parent: UserRepresentation<TInternalReps>,
    args: {},
    context: TContext,
    info: any
  ) => PromiseOrValue<string>;
  name?: (
    parent: UserRepresentation<TInternalReps>,
    args: {},
    context: TContext,
    info: any
  ) => PromiseOrValue<Nullable<string>>;
  username?: (
    parent: UserRepresentation<TInternalReps>,
    args: {},
    context: TContext,
    info: any
  ) => PromiseOrValue<Nullable<string>>;
}
