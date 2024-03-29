
/**
 * Client
**/

import * as runtime from './runtime/library';
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends Prisma.PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};


/**
 * Model User
 * 
 */
export type User = {
  id: string
  name: string | null
  email: string
  password: string
  roll: Roll
  createAt: Date
  categoryID: string | null
}

/**
 * Model Category
 * 
 */
export type Category = {
  categoryID: string
  type: string
}

/**
 * Model Ticket
 * 
 */
export type Ticket = {
  tiket_id: string
  title: string
  createDate: Date
  updatedDate: Date
  categoryID: string
  status: Status
  description: string
  userId: string
}

/**
 * Model Feedback
 * 
 */
export type Feedback = {
  feedback_Id: string
  feedback: string
  submitDate: Date
  ticket_id: string
  userId: string
}


/**
 * Enums
 */

// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

export const Roll: {
  customer: 'customer',
  assistance: 'assistance',
  admin: 'admin'
};

export type Roll = (typeof Roll)[keyof typeof Roll]


export const Status: {
  open: 'open',
  close: 'close',
  resolved: 'resolved'
};

export type Status = (typeof Status)[keyof typeof Status]


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<this, "$connect" | "$disconnect" | "$on" | "$transaction" | "$use">) => Promise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<R>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<GlobalReject>;

  /**
   * `prisma.category`: Exposes CRUD operations for the **Category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.category.findMany()
    * ```
    */
  get category(): Prisma.CategoryDelegate<GlobalReject>;

  /**
   * `prisma.ticket`: Exposes CRUD operations for the **Ticket** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tickets
    * const tickets = await prisma.ticket.findMany()
    * ```
    */
  get ticket(): Prisma.TicketDelegate<GlobalReject>;

  /**
   * `prisma.feedback`: Exposes CRUD operations for the **Feedback** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Feedbacks
    * const feedbacks = await prisma.feedback.findMany()
    * ```
    */
  get feedback(): Prisma.FeedbackDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket


  /**
   * Prisma Client JS version: 4.10.1
   * Query Engine version: aead147aa326ccb985dcfed5b065b4fdabd44b19
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  export function validator<V>(): <S>(select: runtime.Types.Utils.LegacyExact<S, V>) => S;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Category: 'Category',
    Ticket: 'Ticket',
    Feedback: 'Feedback'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type DefaultPrismaClient = PrismaClient
  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     * @deprecated since 4.0.0. Use `findUniqueOrThrow`/`findFirstOrThrow` methods instead.
     * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, '$connect' | '$disconnect' | '$on' | '$transaction' | '$use'>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */


  export type UserCountOutputType = {
    ticket: number
    Feedback: number
  }

  export type UserCountOutputTypeSelect = {
    ticket?: boolean
    Feedback?: boolean
  }

  export type UserCountOutputTypeGetPayload<S extends boolean | null | undefined | UserCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? UserCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (UserCountOutputTypeArgs)
    ? UserCountOutputType 
    : S extends { select: any } & (UserCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof UserCountOutputType ? UserCountOutputType[P] : never
  } 
      : UserCountOutputType




  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect | null
  }



  /**
   * Count Type CategoryCountOutputType
   */


  export type CategoryCountOutputType = {
    Ticket: number
    User: number
  }

  export type CategoryCountOutputTypeSelect = {
    Ticket?: boolean
    User?: boolean
  }

  export type CategoryCountOutputTypeGetPayload<S extends boolean | null | undefined | CategoryCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? CategoryCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (CategoryCountOutputTypeArgs)
    ? CategoryCountOutputType 
    : S extends { select: any } & (CategoryCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof CategoryCountOutputType ? CategoryCountOutputType[P] : never
  } 
      : CategoryCountOutputType




  // Custom InputTypes

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the CategoryCountOutputType
     */
    select?: CategoryCountOutputTypeSelect | null
  }



  /**
   * Count Type TicketCountOutputType
   */


  export type TicketCountOutputType = {
    feedback: number
  }

  export type TicketCountOutputTypeSelect = {
    feedback?: boolean
  }

  export type TicketCountOutputTypeGetPayload<S extends boolean | null | undefined | TicketCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? TicketCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (TicketCountOutputTypeArgs)
    ? TicketCountOutputType 
    : S extends { select: any } & (TicketCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof TicketCountOutputType ? TicketCountOutputType[P] : never
  } 
      : TicketCountOutputType




  // Custom InputTypes

  /**
   * TicketCountOutputType without action
   */
  export type TicketCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the TicketCountOutputType
     */
    select?: TicketCountOutputTypeSelect | null
  }



  /**
   * Models
   */

  /**
   * Model User
   */


  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    roll: Roll | null
    createAt: Date | null
    categoryID: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    roll: Roll | null
    createAt: Date | null
    categoryID: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    roll: number
    createAt: number
    categoryID: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    roll?: true
    createAt?: true
    categoryID?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    roll?: true
    createAt?: true
    categoryID?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    roll?: true
    createAt?: true
    categoryID?: true
    _all?: true
  }

  export type UserAggregateArgs = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: Enumerable<UserOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs = {
    where?: UserWhereInput
    orderBy?: Enumerable<UserOrderByWithAggregationInput>
    by: UserScalarFieldEnum[]
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }


  export type UserGroupByOutputType = {
    id: string
    name: string | null
    email: string
    password: string
    roll: Roll
    createAt: Date
    categoryID: string | null
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    roll?: boolean
    createAt?: boolean
    ticket?: boolean | User$ticketArgs
    Feedback?: boolean | User$FeedbackArgs
    assign_to?: boolean | CategoryArgs
    categoryID?: boolean
    _count?: boolean | UserCountOutputTypeArgs
  }


  export type UserInclude = {
    ticket?: boolean | User$ticketArgs
    Feedback?: boolean | User$FeedbackArgs
    assign_to?: boolean | CategoryArgs
    _count?: boolean | UserCountOutputTypeArgs
  }

  export type UserGetPayload<S extends boolean | null | undefined | UserArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? User :
    S extends undefined ? never :
    S extends { include: any } & (UserArgs | UserFindManyArgs)
    ? User  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'ticket' ? Array < TicketGetPayload<S['include'][P]>>  :
        P extends 'Feedback' ? Array < FeedbackGetPayload<S['include'][P]>>  :
        P extends 'assign_to' ? CategoryGetPayload<S['include'][P]> | null :
        P extends '_count' ? UserCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (UserArgs | UserFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'ticket' ? Array < TicketGetPayload<S['select'][P]>>  :
        P extends 'Feedback' ? Array < FeedbackGetPayload<S['select'][P]>>  :
        P extends 'assign_to' ? CategoryGetPayload<S['select'][P]> | null :
        P extends '_count' ? UserCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof User ? User[P] : never
  } 
      : User


  type UserCountArgs = 
    Omit<UserFindManyArgs, 'select' | 'include'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, UserFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'User'> extends True ? Prisma__UserClient<UserGetPayload<T>> : Prisma__UserClient<UserGetPayload<T> | null, null>

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, UserFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'User'> extends True ? Prisma__UserClient<UserGetPayload<T>> : Prisma__UserClient<UserGetPayload<T> | null, null>

    /**
     * Find the first User that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserFindManyArgs>(
      args?: SelectSubset<T, UserFindManyArgs>
    ): Prisma.PrismaPromise<Array<UserGetPayload<T>>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends UserCreateArgs>(
      args: SelectSubset<T, UserCreateArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs>(
      args?: SelectSubset<T, UserCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends UserDeleteArgs>(
      args: SelectSubset<T, UserDeleteArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserUpdateArgs>(
      args: SelectSubset<T, UserUpdateArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserDeleteManyArgs>(
      args?: SelectSubset<T, UserDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserUpdateManyArgs>(
      args: SelectSubset<T, UserUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
    **/
    upsert<T extends UserUpsertArgs>(
      args: SelectSubset<T, UserUpsertArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__UserClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    ticket<T extends User$ticketArgs= {}>(args?: Subset<T, User$ticketArgs>): Prisma.PrismaPromise<Array<TicketGetPayload<T>>| Null>;

    Feedback<T extends User$FeedbackArgs= {}>(args?: Subset<T, User$FeedbackArgs>): Prisma.PrismaPromise<Array<FeedbackGetPayload<T>>| Null>;

    assign_to<T extends CategoryArgs= {}>(args?: Subset<T, CategoryArgs>): Prisma__CategoryClient<CategoryGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * User base type for findUnique actions
   */
  export type UserFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUnique
   */
  export interface UserFindUniqueArgs extends UserFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User base type for findFirst actions
   */
  export type UserFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: Enumerable<UserOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: Enumerable<UserScalarFieldEnum>
  }

  /**
   * User findFirst
   */
  export interface UserFindFirstArgs extends UserFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: Enumerable<UserOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * User findMany
   */
  export type UserFindManyArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: Enumerable<UserOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * User create
   */
  export type UserCreateArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }


  /**
   * User createMany
   */
  export type UserCreateManyArgs = {
    /**
     * The data used to create many Users.
     */
    data: Enumerable<UserCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * User update
   */
  export type UserUpdateArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User updateMany
   */
  export type UserUpdateManyArgs = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }


  /**
   * User upsert
   */
  export type UserUpsertArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }


  /**
   * User delete
   */
  export type UserDeleteArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }


  /**
   * User.ticket
   */
  export type User$ticketArgs = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TicketInclude | null
    where?: TicketWhereInput
    orderBy?: Enumerable<TicketOrderByWithRelationAndSearchRelevanceInput>
    cursor?: TicketWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<TicketScalarFieldEnum>
  }


  /**
   * User.Feedback
   */
  export type User$FeedbackArgs = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FeedbackInclude | null
    where?: FeedbackWhereInput
    orderBy?: Enumerable<FeedbackOrderByWithRelationAndSearchRelevanceInput>
    cursor?: FeedbackWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<FeedbackScalarFieldEnum>
  }


  /**
   * User without action
   */
  export type UserArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
  }



  /**
   * Model Category
   */


  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  export type CategoryMinAggregateOutputType = {
    categoryID: string | null
    type: string | null
  }

  export type CategoryMaxAggregateOutputType = {
    categoryID: string | null
    type: string | null
  }

  export type CategoryCountAggregateOutputType = {
    categoryID: number
    type: number
    _all: number
  }


  export type CategoryMinAggregateInputType = {
    categoryID?: true
    type?: true
  }

  export type CategoryMaxAggregateInputType = {
    categoryID?: true
    type?: true
  }

  export type CategoryCountAggregateInputType = {
    categoryID?: true
    type?: true
    _all?: true
  }

  export type CategoryAggregateArgs = {
    /**
     * Filter which Category to aggregate.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: Enumerable<CategoryOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categories
    **/
    _count?: true | CategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryMaxAggregateInputType
  }

  export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory[P]>
      : GetScalarType<T[P], AggregateCategory[P]>
  }




  export type CategoryGroupByArgs = {
    where?: CategoryWhereInput
    orderBy?: Enumerable<CategoryOrderByWithAggregationInput>
    by: CategoryScalarFieldEnum[]
    having?: CategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryCountAggregateInputType | true
    _min?: CategoryMinAggregateInputType
    _max?: CategoryMaxAggregateInputType
  }


  export type CategoryGroupByOutputType = {
    categoryID: string
    type: string
    _count: CategoryCountAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  type GetCategoryGroupByPayload<T extends CategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<CategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryGroupByOutputType[P]>
        }
      >
    >


  export type CategorySelect = {
    categoryID?: boolean
    type?: boolean
    Ticket?: boolean | Category$TicketArgs
    User?: boolean | Category$UserArgs
    _count?: boolean | CategoryCountOutputTypeArgs
  }


  export type CategoryInclude = {
    Ticket?: boolean | Category$TicketArgs
    User?: boolean | Category$UserArgs
    _count?: boolean | CategoryCountOutputTypeArgs
  }

  export type CategoryGetPayload<S extends boolean | null | undefined | CategoryArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Category :
    S extends undefined ? never :
    S extends { include: any } & (CategoryArgs | CategoryFindManyArgs)
    ? Category  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'Ticket' ? Array < TicketGetPayload<S['include'][P]>>  :
        P extends 'User' ? Array < UserGetPayload<S['include'][P]>>  :
        P extends '_count' ? CategoryCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (CategoryArgs | CategoryFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'Ticket' ? Array < TicketGetPayload<S['select'][P]>>  :
        P extends 'User' ? Array < UserGetPayload<S['select'][P]>>  :
        P extends '_count' ? CategoryCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Category ? Category[P] : never
  } 
      : Category


  type CategoryCountArgs = 
    Omit<CategoryFindManyArgs, 'select' | 'include'> & {
      select?: CategoryCountAggregateInputType | true
    }

  export interface CategoryDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Category that matches the filter.
     * @param {CategoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CategoryFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, CategoryFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Category'> extends True ? Prisma__CategoryClient<CategoryGetPayload<T>> : Prisma__CategoryClient<CategoryGetPayload<T> | null, null>

    /**
     * Find one Category that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {CategoryFindUniqueOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CategoryFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, CategoryFindUniqueOrThrowArgs>
    ): Prisma__CategoryClient<CategoryGetPayload<T>>

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CategoryFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, CategoryFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Category'> extends True ? Prisma__CategoryClient<CategoryGetPayload<T>> : Prisma__CategoryClient<CategoryGetPayload<T> | null, null>

    /**
     * Find the first Category that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CategoryFindFirstOrThrowArgs>(
      args?: SelectSubset<T, CategoryFindFirstOrThrowArgs>
    ): Prisma__CategoryClient<CategoryGetPayload<T>>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.category.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.category.findMany({ take: 10 })
     * 
     * // Only select the `categoryID`
     * const categoryWithCategoryIDOnly = await prisma.category.findMany({ select: { categoryID: true } })
     * 
    **/
    findMany<T extends CategoryFindManyArgs>(
      args?: SelectSubset<T, CategoryFindManyArgs>
    ): Prisma.PrismaPromise<Array<CategoryGetPayload<T>>>

    /**
     * Create a Category.
     * @param {CategoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     * 
    **/
    create<T extends CategoryCreateArgs>(
      args: SelectSubset<T, CategoryCreateArgs>
    ): Prisma__CategoryClient<CategoryGetPayload<T>>

    /**
     * Create many Categories.
     *     @param {CategoryCreateManyArgs} args - Arguments to create many Categories.
     *     @example
     *     // Create many Categories
     *     const category = await prisma.category.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CategoryCreateManyArgs>(
      args?: SelectSubset<T, CategoryCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Category.
     * @param {CategoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     * 
    **/
    delete<T extends CategoryDeleteArgs>(
      args: SelectSubset<T, CategoryDeleteArgs>
    ): Prisma__CategoryClient<CategoryGetPayload<T>>

    /**
     * Update one Category.
     * @param {CategoryUpdateArgs} args - Arguments to update one Category.
     * @example
     * // Update one Category
     * const category = await prisma.category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CategoryUpdateArgs>(
      args: SelectSubset<T, CategoryUpdateArgs>
    ): Prisma__CategoryClient<CategoryGetPayload<T>>

    /**
     * Delete zero or more Categories.
     * @param {CategoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CategoryDeleteManyArgs>(
      args?: SelectSubset<T, CategoryDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CategoryUpdateManyArgs>(
      args: SelectSubset<T, CategoryUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Category.
     * @param {CategoryUpsertArgs} args - Arguments to update or create a Category.
     * @example
     * // Update or create a Category
     * const category = await prisma.category.upsert({
     *   create: {
     *     // ... data to create a Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category we want to update
     *   }
     * })
    **/
    upsert<T extends CategoryUpsertArgs>(
      args: SelectSubset<T, CategoryUpsertArgs>
    ): Prisma__CategoryClient<CategoryGetPayload<T>>

    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends CategoryCountArgs>(
      args?: Subset<T, CategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CategoryAggregateArgs>(args: Subset<T, CategoryAggregateArgs>): Prisma.PrismaPromise<GetCategoryAggregateType<T>>

    /**
     * Group by Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoryGroupByArgs['orderBy'] }
        : { orderBy?: CategoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__CategoryClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    Ticket<T extends Category$TicketArgs= {}>(args?: Subset<T, Category$TicketArgs>): Prisma.PrismaPromise<Array<TicketGetPayload<T>>| Null>;

    User<T extends Category$UserArgs= {}>(args?: Subset<T, Category$UserArgs>): Prisma.PrismaPromise<Array<UserGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Category base type for findUnique actions
   */
  export type CategoryFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findUnique
   */
  export interface CategoryFindUniqueArgs extends CategoryFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Category findUniqueOrThrow
   */
  export type CategoryFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }


  /**
   * Category base type for findFirst actions
   */
  export type CategoryFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: Enumerable<CategoryOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: Enumerable<CategoryScalarFieldEnum>
  }

  /**
   * Category findFirst
   */
  export interface CategoryFindFirstArgs extends CategoryFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Category findFirstOrThrow
   */
  export type CategoryFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: Enumerable<CategoryOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: Enumerable<CategoryScalarFieldEnum>
  }


  /**
   * Category findMany
   */
  export type CategoryFindManyArgs = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: Enumerable<CategoryOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    distinct?: Enumerable<CategoryScalarFieldEnum>
  }


  /**
   * Category create
   */
  export type CategoryCreateArgs = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude | null
    /**
     * The data needed to create a Category.
     */
    data: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
  }


  /**
   * Category createMany
   */
  export type CategoryCreateManyArgs = {
    /**
     * The data used to create many Categories.
     */
    data: Enumerable<CategoryCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Category update
   */
  export type CategoryUpdateArgs = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude | null
    /**
     * The data needed to update a Category.
     */
    data: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
    /**
     * Choose, which Category to update.
     */
    where: CategoryWhereUniqueInput
  }


  /**
   * Category updateMany
   */
  export type CategoryUpdateManyArgs = {
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
  }


  /**
   * Category upsert
   */
  export type CategoryUpsertArgs = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude | null
    /**
     * The filter to search for the Category to update in case it exists.
     */
    where: CategoryWhereUniqueInput
    /**
     * In case the Category found by the `where` argument doesn't exist, create a new Category with this data.
     */
    create: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
    /**
     * In case the Category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
  }


  /**
   * Category delete
   */
  export type CategoryDeleteArgs = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude | null
    /**
     * Filter which Category to delete.
     */
    where: CategoryWhereUniqueInput
  }


  /**
   * Category deleteMany
   */
  export type CategoryDeleteManyArgs = {
    /**
     * Filter which Categories to delete
     */
    where?: CategoryWhereInput
  }


  /**
   * Category.Ticket
   */
  export type Category$TicketArgs = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TicketInclude | null
    where?: TicketWhereInput
    orderBy?: Enumerable<TicketOrderByWithRelationAndSearchRelevanceInput>
    cursor?: TicketWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<TicketScalarFieldEnum>
  }


  /**
   * Category.User
   */
  export type Category$UserArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    where?: UserWhereInput
    orderBy?: Enumerable<UserOrderByWithRelationAndSearchRelevanceInput>
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * Category without action
   */
  export type CategoryArgs = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude | null
  }



  /**
   * Model Ticket
   */


  export type AggregateTicket = {
    _count: TicketCountAggregateOutputType | null
    _min: TicketMinAggregateOutputType | null
    _max: TicketMaxAggregateOutputType | null
  }

  export type TicketMinAggregateOutputType = {
    tiket_id: string | null
    title: string | null
    createDate: Date | null
    updatedDate: Date | null
    categoryID: string | null
    status: Status | null
    description: string | null
    userId: string | null
  }

  export type TicketMaxAggregateOutputType = {
    tiket_id: string | null
    title: string | null
    createDate: Date | null
    updatedDate: Date | null
    categoryID: string | null
    status: Status | null
    description: string | null
    userId: string | null
  }

  export type TicketCountAggregateOutputType = {
    tiket_id: number
    title: number
    createDate: number
    updatedDate: number
    categoryID: number
    status: number
    description: number
    userId: number
    _all: number
  }


  export type TicketMinAggregateInputType = {
    tiket_id?: true
    title?: true
    createDate?: true
    updatedDate?: true
    categoryID?: true
    status?: true
    description?: true
    userId?: true
  }

  export type TicketMaxAggregateInputType = {
    tiket_id?: true
    title?: true
    createDate?: true
    updatedDate?: true
    categoryID?: true
    status?: true
    description?: true
    userId?: true
  }

  export type TicketCountAggregateInputType = {
    tiket_id?: true
    title?: true
    createDate?: true
    updatedDate?: true
    categoryID?: true
    status?: true
    description?: true
    userId?: true
    _all?: true
  }

  export type TicketAggregateArgs = {
    /**
     * Filter which Ticket to aggregate.
     */
    where?: TicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tickets to fetch.
     */
    orderBy?: Enumerable<TicketOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tickets
    **/
    _count?: true | TicketCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TicketMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TicketMaxAggregateInputType
  }

  export type GetTicketAggregateType<T extends TicketAggregateArgs> = {
        [P in keyof T & keyof AggregateTicket]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTicket[P]>
      : GetScalarType<T[P], AggregateTicket[P]>
  }




  export type TicketGroupByArgs = {
    where?: TicketWhereInput
    orderBy?: Enumerable<TicketOrderByWithAggregationInput>
    by: TicketScalarFieldEnum[]
    having?: TicketScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TicketCountAggregateInputType | true
    _min?: TicketMinAggregateInputType
    _max?: TicketMaxAggregateInputType
  }


  export type TicketGroupByOutputType = {
    tiket_id: string
    title: string
    createDate: Date
    updatedDate: Date
    categoryID: string
    status: Status
    description: string
    userId: string
    _count: TicketCountAggregateOutputType | null
    _min: TicketMinAggregateOutputType | null
    _max: TicketMaxAggregateOutputType | null
  }

  type GetTicketGroupByPayload<T extends TicketGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<TicketGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TicketGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TicketGroupByOutputType[P]>
            : GetScalarType<T[P], TicketGroupByOutputType[P]>
        }
      >
    >


  export type TicketSelect = {
    tiket_id?: boolean
    title?: boolean
    createDate?: boolean
    updatedDate?: boolean
    category?: boolean | CategoryArgs
    categoryID?: boolean
    status?: boolean
    description?: boolean
    User?: boolean | UserArgs
    userId?: boolean
    feedback?: boolean | Ticket$feedbackArgs
    _count?: boolean | TicketCountOutputTypeArgs
  }


  export type TicketInclude = {
    category?: boolean | CategoryArgs
    User?: boolean | UserArgs
    feedback?: boolean | Ticket$feedbackArgs
    _count?: boolean | TicketCountOutputTypeArgs
  }

  export type TicketGetPayload<S extends boolean | null | undefined | TicketArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Ticket :
    S extends undefined ? never :
    S extends { include: any } & (TicketArgs | TicketFindManyArgs)
    ? Ticket  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'category' ? CategoryGetPayload<S['include'][P]> | null :
        P extends 'User' ? UserGetPayload<S['include'][P]> | null :
        P extends 'feedback' ? Array < FeedbackGetPayload<S['include'][P]>>  :
        P extends '_count' ? TicketCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (TicketArgs | TicketFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'category' ? CategoryGetPayload<S['select'][P]> | null :
        P extends 'User' ? UserGetPayload<S['select'][P]> | null :
        P extends 'feedback' ? Array < FeedbackGetPayload<S['select'][P]>>  :
        P extends '_count' ? TicketCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Ticket ? Ticket[P] : never
  } 
      : Ticket


  type TicketCountArgs = 
    Omit<TicketFindManyArgs, 'select' | 'include'> & {
      select?: TicketCountAggregateInputType | true
    }

  export interface TicketDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Ticket that matches the filter.
     * @param {TicketFindUniqueArgs} args - Arguments to find a Ticket
     * @example
     * // Get one Ticket
     * const ticket = await prisma.ticket.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TicketFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, TicketFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Ticket'> extends True ? Prisma__TicketClient<TicketGetPayload<T>> : Prisma__TicketClient<TicketGetPayload<T> | null, null>

    /**
     * Find one Ticket that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {TicketFindUniqueOrThrowArgs} args - Arguments to find a Ticket
     * @example
     * // Get one Ticket
     * const ticket = await prisma.ticket.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends TicketFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, TicketFindUniqueOrThrowArgs>
    ): Prisma__TicketClient<TicketGetPayload<T>>

    /**
     * Find the first Ticket that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketFindFirstArgs} args - Arguments to find a Ticket
     * @example
     * // Get one Ticket
     * const ticket = await prisma.ticket.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TicketFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, TicketFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Ticket'> extends True ? Prisma__TicketClient<TicketGetPayload<T>> : Prisma__TicketClient<TicketGetPayload<T> | null, null>

    /**
     * Find the first Ticket that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketFindFirstOrThrowArgs} args - Arguments to find a Ticket
     * @example
     * // Get one Ticket
     * const ticket = await prisma.ticket.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends TicketFindFirstOrThrowArgs>(
      args?: SelectSubset<T, TicketFindFirstOrThrowArgs>
    ): Prisma__TicketClient<TicketGetPayload<T>>

    /**
     * Find zero or more Tickets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tickets
     * const tickets = await prisma.ticket.findMany()
     * 
     * // Get first 10 Tickets
     * const tickets = await prisma.ticket.findMany({ take: 10 })
     * 
     * // Only select the `tiket_id`
     * const ticketWithTiket_idOnly = await prisma.ticket.findMany({ select: { tiket_id: true } })
     * 
    **/
    findMany<T extends TicketFindManyArgs>(
      args?: SelectSubset<T, TicketFindManyArgs>
    ): Prisma.PrismaPromise<Array<TicketGetPayload<T>>>

    /**
     * Create a Ticket.
     * @param {TicketCreateArgs} args - Arguments to create a Ticket.
     * @example
     * // Create one Ticket
     * const Ticket = await prisma.ticket.create({
     *   data: {
     *     // ... data to create a Ticket
     *   }
     * })
     * 
    **/
    create<T extends TicketCreateArgs>(
      args: SelectSubset<T, TicketCreateArgs>
    ): Prisma__TicketClient<TicketGetPayload<T>>

    /**
     * Create many Tickets.
     *     @param {TicketCreateManyArgs} args - Arguments to create many Tickets.
     *     @example
     *     // Create many Tickets
     *     const ticket = await prisma.ticket.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends TicketCreateManyArgs>(
      args?: SelectSubset<T, TicketCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Ticket.
     * @param {TicketDeleteArgs} args - Arguments to delete one Ticket.
     * @example
     * // Delete one Ticket
     * const Ticket = await prisma.ticket.delete({
     *   where: {
     *     // ... filter to delete one Ticket
     *   }
     * })
     * 
    **/
    delete<T extends TicketDeleteArgs>(
      args: SelectSubset<T, TicketDeleteArgs>
    ): Prisma__TicketClient<TicketGetPayload<T>>

    /**
     * Update one Ticket.
     * @param {TicketUpdateArgs} args - Arguments to update one Ticket.
     * @example
     * // Update one Ticket
     * const ticket = await prisma.ticket.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TicketUpdateArgs>(
      args: SelectSubset<T, TicketUpdateArgs>
    ): Prisma__TicketClient<TicketGetPayload<T>>

    /**
     * Delete zero or more Tickets.
     * @param {TicketDeleteManyArgs} args - Arguments to filter Tickets to delete.
     * @example
     * // Delete a few Tickets
     * const { count } = await prisma.ticket.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TicketDeleteManyArgs>(
      args?: SelectSubset<T, TicketDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tickets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tickets
     * const ticket = await prisma.ticket.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TicketUpdateManyArgs>(
      args: SelectSubset<T, TicketUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Ticket.
     * @param {TicketUpsertArgs} args - Arguments to update or create a Ticket.
     * @example
     * // Update or create a Ticket
     * const ticket = await prisma.ticket.upsert({
     *   create: {
     *     // ... data to create a Ticket
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ticket we want to update
     *   }
     * })
    **/
    upsert<T extends TicketUpsertArgs>(
      args: SelectSubset<T, TicketUpsertArgs>
    ): Prisma__TicketClient<TicketGetPayload<T>>

    /**
     * Count the number of Tickets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketCountArgs} args - Arguments to filter Tickets to count.
     * @example
     * // Count the number of Tickets
     * const count = await prisma.ticket.count({
     *   where: {
     *     // ... the filter for the Tickets we want to count
     *   }
     * })
    **/
    count<T extends TicketCountArgs>(
      args?: Subset<T, TicketCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TicketCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ticket.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TicketAggregateArgs>(args: Subset<T, TicketAggregateArgs>): Prisma.PrismaPromise<GetTicketAggregateType<T>>

    /**
     * Group by Ticket.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TicketGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TicketGroupByArgs['orderBy'] }
        : { orderBy?: TicketGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TicketGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTicketGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Ticket.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__TicketClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    category<T extends CategoryArgs= {}>(args?: Subset<T, CategoryArgs>): Prisma__CategoryClient<CategoryGetPayload<T> | Null>;

    User<T extends UserArgs= {}>(args?: Subset<T, UserArgs>): Prisma__UserClient<UserGetPayload<T> | Null>;

    feedback<T extends Ticket$feedbackArgs= {}>(args?: Subset<T, Ticket$feedbackArgs>): Prisma.PrismaPromise<Array<FeedbackGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Ticket base type for findUnique actions
   */
  export type TicketFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TicketInclude | null
    /**
     * Filter, which Ticket to fetch.
     */
    where: TicketWhereUniqueInput
  }

  /**
   * Ticket findUnique
   */
  export interface TicketFindUniqueArgs extends TicketFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Ticket findUniqueOrThrow
   */
  export type TicketFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TicketInclude | null
    /**
     * Filter, which Ticket to fetch.
     */
    where: TicketWhereUniqueInput
  }


  /**
   * Ticket base type for findFirst actions
   */
  export type TicketFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TicketInclude | null
    /**
     * Filter, which Ticket to fetch.
     */
    where?: TicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tickets to fetch.
     */
    orderBy?: Enumerable<TicketOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tickets.
     */
    cursor?: TicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tickets.
     */
    distinct?: Enumerable<TicketScalarFieldEnum>
  }

  /**
   * Ticket findFirst
   */
  export interface TicketFindFirstArgs extends TicketFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Ticket findFirstOrThrow
   */
  export type TicketFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TicketInclude | null
    /**
     * Filter, which Ticket to fetch.
     */
    where?: TicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tickets to fetch.
     */
    orderBy?: Enumerable<TicketOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tickets.
     */
    cursor?: TicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tickets.
     */
    distinct?: Enumerable<TicketScalarFieldEnum>
  }


  /**
   * Ticket findMany
   */
  export type TicketFindManyArgs = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TicketInclude | null
    /**
     * Filter, which Tickets to fetch.
     */
    where?: TicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tickets to fetch.
     */
    orderBy?: Enumerable<TicketOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tickets.
     */
    cursor?: TicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tickets.
     */
    skip?: number
    distinct?: Enumerable<TicketScalarFieldEnum>
  }


  /**
   * Ticket create
   */
  export type TicketCreateArgs = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TicketInclude | null
    /**
     * The data needed to create a Ticket.
     */
    data: XOR<TicketCreateInput, TicketUncheckedCreateInput>
  }


  /**
   * Ticket createMany
   */
  export type TicketCreateManyArgs = {
    /**
     * The data used to create many Tickets.
     */
    data: Enumerable<TicketCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Ticket update
   */
  export type TicketUpdateArgs = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TicketInclude | null
    /**
     * The data needed to update a Ticket.
     */
    data: XOR<TicketUpdateInput, TicketUncheckedUpdateInput>
    /**
     * Choose, which Ticket to update.
     */
    where: TicketWhereUniqueInput
  }


  /**
   * Ticket updateMany
   */
  export type TicketUpdateManyArgs = {
    /**
     * The data used to update Tickets.
     */
    data: XOR<TicketUpdateManyMutationInput, TicketUncheckedUpdateManyInput>
    /**
     * Filter which Tickets to update
     */
    where?: TicketWhereInput
  }


  /**
   * Ticket upsert
   */
  export type TicketUpsertArgs = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TicketInclude | null
    /**
     * The filter to search for the Ticket to update in case it exists.
     */
    where: TicketWhereUniqueInput
    /**
     * In case the Ticket found by the `where` argument doesn't exist, create a new Ticket with this data.
     */
    create: XOR<TicketCreateInput, TicketUncheckedCreateInput>
    /**
     * In case the Ticket was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TicketUpdateInput, TicketUncheckedUpdateInput>
  }


  /**
   * Ticket delete
   */
  export type TicketDeleteArgs = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TicketInclude | null
    /**
     * Filter which Ticket to delete.
     */
    where: TicketWhereUniqueInput
  }


  /**
   * Ticket deleteMany
   */
  export type TicketDeleteManyArgs = {
    /**
     * Filter which Tickets to delete
     */
    where?: TicketWhereInput
  }


  /**
   * Ticket.feedback
   */
  export type Ticket$feedbackArgs = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FeedbackInclude | null
    where?: FeedbackWhereInput
    orderBy?: Enumerable<FeedbackOrderByWithRelationAndSearchRelevanceInput>
    cursor?: FeedbackWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<FeedbackScalarFieldEnum>
  }


  /**
   * Ticket without action
   */
  export type TicketArgs = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TicketInclude | null
  }



  /**
   * Model Feedback
   */


  export type AggregateFeedback = {
    _count: FeedbackCountAggregateOutputType | null
    _min: FeedbackMinAggregateOutputType | null
    _max: FeedbackMaxAggregateOutputType | null
  }

  export type FeedbackMinAggregateOutputType = {
    feedback_Id: string | null
    feedback: string | null
    submitDate: Date | null
    ticket_id: string | null
    userId: string | null
  }

  export type FeedbackMaxAggregateOutputType = {
    feedback_Id: string | null
    feedback: string | null
    submitDate: Date | null
    ticket_id: string | null
    userId: string | null
  }

  export type FeedbackCountAggregateOutputType = {
    feedback_Id: number
    feedback: number
    submitDate: number
    ticket_id: number
    userId: number
    _all: number
  }


  export type FeedbackMinAggregateInputType = {
    feedback_Id?: true
    feedback?: true
    submitDate?: true
    ticket_id?: true
    userId?: true
  }

  export type FeedbackMaxAggregateInputType = {
    feedback_Id?: true
    feedback?: true
    submitDate?: true
    ticket_id?: true
    userId?: true
  }

  export type FeedbackCountAggregateInputType = {
    feedback_Id?: true
    feedback?: true
    submitDate?: true
    ticket_id?: true
    userId?: true
    _all?: true
  }

  export type FeedbackAggregateArgs = {
    /**
     * Filter which Feedback to aggregate.
     */
    where?: FeedbackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Feedbacks to fetch.
     */
    orderBy?: Enumerable<FeedbackOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FeedbackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Feedbacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Feedbacks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Feedbacks
    **/
    _count?: true | FeedbackCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FeedbackMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FeedbackMaxAggregateInputType
  }

  export type GetFeedbackAggregateType<T extends FeedbackAggregateArgs> = {
        [P in keyof T & keyof AggregateFeedback]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFeedback[P]>
      : GetScalarType<T[P], AggregateFeedback[P]>
  }




  export type FeedbackGroupByArgs = {
    where?: FeedbackWhereInput
    orderBy?: Enumerable<FeedbackOrderByWithAggregationInput>
    by: FeedbackScalarFieldEnum[]
    having?: FeedbackScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FeedbackCountAggregateInputType | true
    _min?: FeedbackMinAggregateInputType
    _max?: FeedbackMaxAggregateInputType
  }


  export type FeedbackGroupByOutputType = {
    feedback_Id: string
    feedback: string
    submitDate: Date
    ticket_id: string
    userId: string
    _count: FeedbackCountAggregateOutputType | null
    _min: FeedbackMinAggregateOutputType | null
    _max: FeedbackMaxAggregateOutputType | null
  }

  type GetFeedbackGroupByPayload<T extends FeedbackGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<FeedbackGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FeedbackGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FeedbackGroupByOutputType[P]>
            : GetScalarType<T[P], FeedbackGroupByOutputType[P]>
        }
      >
    >


  export type FeedbackSelect = {
    feedback_Id?: boolean
    feedback?: boolean
    submitDate?: boolean
    Ticket?: boolean | TicketArgs
    ticket_id?: boolean
    userId?: boolean
    User?: boolean | UserArgs
  }


  export type FeedbackInclude = {
    Ticket?: boolean | TicketArgs
    User?: boolean | UserArgs
  }

  export type FeedbackGetPayload<S extends boolean | null | undefined | FeedbackArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Feedback :
    S extends undefined ? never :
    S extends { include: any } & (FeedbackArgs | FeedbackFindManyArgs)
    ? Feedback  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'Ticket' ? TicketGetPayload<S['include'][P]> | null :
        P extends 'User' ? UserGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (FeedbackArgs | FeedbackFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'Ticket' ? TicketGetPayload<S['select'][P]> | null :
        P extends 'User' ? UserGetPayload<S['select'][P]> :  P extends keyof Feedback ? Feedback[P] : never
  } 
      : Feedback


  type FeedbackCountArgs = 
    Omit<FeedbackFindManyArgs, 'select' | 'include'> & {
      select?: FeedbackCountAggregateInputType | true
    }

  export interface FeedbackDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Feedback that matches the filter.
     * @param {FeedbackFindUniqueArgs} args - Arguments to find a Feedback
     * @example
     * // Get one Feedback
     * const feedback = await prisma.feedback.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends FeedbackFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, FeedbackFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Feedback'> extends True ? Prisma__FeedbackClient<FeedbackGetPayload<T>> : Prisma__FeedbackClient<FeedbackGetPayload<T> | null, null>

    /**
     * Find one Feedback that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {FeedbackFindUniqueOrThrowArgs} args - Arguments to find a Feedback
     * @example
     * // Get one Feedback
     * const feedback = await prisma.feedback.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends FeedbackFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, FeedbackFindUniqueOrThrowArgs>
    ): Prisma__FeedbackClient<FeedbackGetPayload<T>>

    /**
     * Find the first Feedback that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackFindFirstArgs} args - Arguments to find a Feedback
     * @example
     * // Get one Feedback
     * const feedback = await prisma.feedback.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends FeedbackFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, FeedbackFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Feedback'> extends True ? Prisma__FeedbackClient<FeedbackGetPayload<T>> : Prisma__FeedbackClient<FeedbackGetPayload<T> | null, null>

    /**
     * Find the first Feedback that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackFindFirstOrThrowArgs} args - Arguments to find a Feedback
     * @example
     * // Get one Feedback
     * const feedback = await prisma.feedback.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends FeedbackFindFirstOrThrowArgs>(
      args?: SelectSubset<T, FeedbackFindFirstOrThrowArgs>
    ): Prisma__FeedbackClient<FeedbackGetPayload<T>>

    /**
     * Find zero or more Feedbacks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Feedbacks
     * const feedbacks = await prisma.feedback.findMany()
     * 
     * // Get first 10 Feedbacks
     * const feedbacks = await prisma.feedback.findMany({ take: 10 })
     * 
     * // Only select the `feedback_Id`
     * const feedbackWithFeedback_IdOnly = await prisma.feedback.findMany({ select: { feedback_Id: true } })
     * 
    **/
    findMany<T extends FeedbackFindManyArgs>(
      args?: SelectSubset<T, FeedbackFindManyArgs>
    ): Prisma.PrismaPromise<Array<FeedbackGetPayload<T>>>

    /**
     * Create a Feedback.
     * @param {FeedbackCreateArgs} args - Arguments to create a Feedback.
     * @example
     * // Create one Feedback
     * const Feedback = await prisma.feedback.create({
     *   data: {
     *     // ... data to create a Feedback
     *   }
     * })
     * 
    **/
    create<T extends FeedbackCreateArgs>(
      args: SelectSubset<T, FeedbackCreateArgs>
    ): Prisma__FeedbackClient<FeedbackGetPayload<T>>

    /**
     * Create many Feedbacks.
     *     @param {FeedbackCreateManyArgs} args - Arguments to create many Feedbacks.
     *     @example
     *     // Create many Feedbacks
     *     const feedback = await prisma.feedback.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends FeedbackCreateManyArgs>(
      args?: SelectSubset<T, FeedbackCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Feedback.
     * @param {FeedbackDeleteArgs} args - Arguments to delete one Feedback.
     * @example
     * // Delete one Feedback
     * const Feedback = await prisma.feedback.delete({
     *   where: {
     *     // ... filter to delete one Feedback
     *   }
     * })
     * 
    **/
    delete<T extends FeedbackDeleteArgs>(
      args: SelectSubset<T, FeedbackDeleteArgs>
    ): Prisma__FeedbackClient<FeedbackGetPayload<T>>

    /**
     * Update one Feedback.
     * @param {FeedbackUpdateArgs} args - Arguments to update one Feedback.
     * @example
     * // Update one Feedback
     * const feedback = await prisma.feedback.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends FeedbackUpdateArgs>(
      args: SelectSubset<T, FeedbackUpdateArgs>
    ): Prisma__FeedbackClient<FeedbackGetPayload<T>>

    /**
     * Delete zero or more Feedbacks.
     * @param {FeedbackDeleteManyArgs} args - Arguments to filter Feedbacks to delete.
     * @example
     * // Delete a few Feedbacks
     * const { count } = await prisma.feedback.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends FeedbackDeleteManyArgs>(
      args?: SelectSubset<T, FeedbackDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Feedbacks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Feedbacks
     * const feedback = await prisma.feedback.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends FeedbackUpdateManyArgs>(
      args: SelectSubset<T, FeedbackUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Feedback.
     * @param {FeedbackUpsertArgs} args - Arguments to update or create a Feedback.
     * @example
     * // Update or create a Feedback
     * const feedback = await prisma.feedback.upsert({
     *   create: {
     *     // ... data to create a Feedback
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Feedback we want to update
     *   }
     * })
    **/
    upsert<T extends FeedbackUpsertArgs>(
      args: SelectSubset<T, FeedbackUpsertArgs>
    ): Prisma__FeedbackClient<FeedbackGetPayload<T>>

    /**
     * Count the number of Feedbacks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackCountArgs} args - Arguments to filter Feedbacks to count.
     * @example
     * // Count the number of Feedbacks
     * const count = await prisma.feedback.count({
     *   where: {
     *     // ... the filter for the Feedbacks we want to count
     *   }
     * })
    **/
    count<T extends FeedbackCountArgs>(
      args?: Subset<T, FeedbackCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FeedbackCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Feedback.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FeedbackAggregateArgs>(args: Subset<T, FeedbackAggregateArgs>): Prisma.PrismaPromise<GetFeedbackAggregateType<T>>

    /**
     * Group by Feedback.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FeedbackGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FeedbackGroupByArgs['orderBy'] }
        : { orderBy?: FeedbackGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FeedbackGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFeedbackGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Feedback.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__FeedbackClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    Ticket<T extends TicketArgs= {}>(args?: Subset<T, TicketArgs>): Prisma__TicketClient<TicketGetPayload<T> | Null>;

    User<T extends UserArgs= {}>(args?: Subset<T, UserArgs>): Prisma__UserClient<UserGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Feedback base type for findUnique actions
   */
  export type FeedbackFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FeedbackInclude | null
    /**
     * Filter, which Feedback to fetch.
     */
    where: FeedbackWhereUniqueInput
  }

  /**
   * Feedback findUnique
   */
  export interface FeedbackFindUniqueArgs extends FeedbackFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Feedback findUniqueOrThrow
   */
  export type FeedbackFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FeedbackInclude | null
    /**
     * Filter, which Feedback to fetch.
     */
    where: FeedbackWhereUniqueInput
  }


  /**
   * Feedback base type for findFirst actions
   */
  export type FeedbackFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FeedbackInclude | null
    /**
     * Filter, which Feedback to fetch.
     */
    where?: FeedbackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Feedbacks to fetch.
     */
    orderBy?: Enumerable<FeedbackOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Feedbacks.
     */
    cursor?: FeedbackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Feedbacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Feedbacks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Feedbacks.
     */
    distinct?: Enumerable<FeedbackScalarFieldEnum>
  }

  /**
   * Feedback findFirst
   */
  export interface FeedbackFindFirstArgs extends FeedbackFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Feedback findFirstOrThrow
   */
  export type FeedbackFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FeedbackInclude | null
    /**
     * Filter, which Feedback to fetch.
     */
    where?: FeedbackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Feedbacks to fetch.
     */
    orderBy?: Enumerable<FeedbackOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Feedbacks.
     */
    cursor?: FeedbackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Feedbacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Feedbacks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Feedbacks.
     */
    distinct?: Enumerable<FeedbackScalarFieldEnum>
  }


  /**
   * Feedback findMany
   */
  export type FeedbackFindManyArgs = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FeedbackInclude | null
    /**
     * Filter, which Feedbacks to fetch.
     */
    where?: FeedbackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Feedbacks to fetch.
     */
    orderBy?: Enumerable<FeedbackOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Feedbacks.
     */
    cursor?: FeedbackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Feedbacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Feedbacks.
     */
    skip?: number
    distinct?: Enumerable<FeedbackScalarFieldEnum>
  }


  /**
   * Feedback create
   */
  export type FeedbackCreateArgs = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FeedbackInclude | null
    /**
     * The data needed to create a Feedback.
     */
    data: XOR<FeedbackCreateInput, FeedbackUncheckedCreateInput>
  }


  /**
   * Feedback createMany
   */
  export type FeedbackCreateManyArgs = {
    /**
     * The data used to create many Feedbacks.
     */
    data: Enumerable<FeedbackCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Feedback update
   */
  export type FeedbackUpdateArgs = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FeedbackInclude | null
    /**
     * The data needed to update a Feedback.
     */
    data: XOR<FeedbackUpdateInput, FeedbackUncheckedUpdateInput>
    /**
     * Choose, which Feedback to update.
     */
    where: FeedbackWhereUniqueInput
  }


  /**
   * Feedback updateMany
   */
  export type FeedbackUpdateManyArgs = {
    /**
     * The data used to update Feedbacks.
     */
    data: XOR<FeedbackUpdateManyMutationInput, FeedbackUncheckedUpdateManyInput>
    /**
     * Filter which Feedbacks to update
     */
    where?: FeedbackWhereInput
  }


  /**
   * Feedback upsert
   */
  export type FeedbackUpsertArgs = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FeedbackInclude | null
    /**
     * The filter to search for the Feedback to update in case it exists.
     */
    where: FeedbackWhereUniqueInput
    /**
     * In case the Feedback found by the `where` argument doesn't exist, create a new Feedback with this data.
     */
    create: XOR<FeedbackCreateInput, FeedbackUncheckedCreateInput>
    /**
     * In case the Feedback was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FeedbackUpdateInput, FeedbackUncheckedUpdateInput>
  }


  /**
   * Feedback delete
   */
  export type FeedbackDeleteArgs = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FeedbackInclude | null
    /**
     * Filter which Feedback to delete.
     */
    where: FeedbackWhereUniqueInput
  }


  /**
   * Feedback deleteMany
   */
  export type FeedbackDeleteManyArgs = {
    /**
     * Filter which Feedbacks to delete
     */
    where?: FeedbackWhereInput
  }


  /**
   * Feedback without action
   */
  export type FeedbackArgs = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FeedbackInclude | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const CategoryOrderByRelevanceFieldEnum: {
    categoryID: 'categoryID',
    type: 'type'
  };

  export type CategoryOrderByRelevanceFieldEnum = (typeof CategoryOrderByRelevanceFieldEnum)[keyof typeof CategoryOrderByRelevanceFieldEnum]


  export const CategoryScalarFieldEnum: {
    categoryID: 'categoryID',
    type: 'type'
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum]


  export const FeedbackOrderByRelevanceFieldEnum: {
    feedback_Id: 'feedback_Id',
    feedback: 'feedback',
    ticket_id: 'ticket_id',
    userId: 'userId'
  };

  export type FeedbackOrderByRelevanceFieldEnum = (typeof FeedbackOrderByRelevanceFieldEnum)[keyof typeof FeedbackOrderByRelevanceFieldEnum]


  export const FeedbackScalarFieldEnum: {
    feedback_Id: 'feedback_Id',
    feedback: 'feedback',
    submitDate: 'submitDate',
    ticket_id: 'ticket_id',
    userId: 'userId'
  };

  export type FeedbackScalarFieldEnum = (typeof FeedbackScalarFieldEnum)[keyof typeof FeedbackScalarFieldEnum]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const TicketOrderByRelevanceFieldEnum: {
    tiket_id: 'tiket_id',
    title: 'title',
    categoryID: 'categoryID',
    description: 'description',
    userId: 'userId'
  };

  export type TicketOrderByRelevanceFieldEnum = (typeof TicketOrderByRelevanceFieldEnum)[keyof typeof TicketOrderByRelevanceFieldEnum]


  export const TicketScalarFieldEnum: {
    tiket_id: 'tiket_id',
    title: 'title',
    createDate: 'createDate',
    updatedDate: 'updatedDate',
    categoryID: 'categoryID',
    status: 'status',
    description: 'description',
    userId: 'userId'
  };

  export type TicketScalarFieldEnum = (typeof TicketScalarFieldEnum)[keyof typeof TicketScalarFieldEnum]


  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserOrderByRelevanceFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    categoryID: 'categoryID'
  };

  export type UserOrderByRelevanceFieldEnum = (typeof UserOrderByRelevanceFieldEnum)[keyof typeof UserOrderByRelevanceFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    roll: 'roll',
    createAt: 'createAt',
    categoryID: 'categoryID'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: Enumerable<UserWhereInput>
    OR?: Enumerable<UserWhereInput>
    NOT?: Enumerable<UserWhereInput>
    id?: StringFilter | string
    name?: StringNullableFilter | string | null
    email?: StringFilter | string
    password?: StringFilter | string
    roll?: EnumRollFilter | Roll
    createAt?: DateTimeFilter | Date | string
    ticket?: TicketListRelationFilter
    Feedback?: FeedbackListRelationFilter
    assign_to?: XOR<CategoryRelationFilter, CategoryWhereInput> | null
    categoryID?: StringNullableFilter | string | null
  }

  export type UserOrderByWithRelationAndSearchRelevanceInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    roll?: SortOrder
    createAt?: SortOrder
    ticket?: TicketOrderByRelationAggregateInput
    Feedback?: FeedbackOrderByRelationAggregateInput
    assign_to?: CategoryOrderByWithRelationAndSearchRelevanceInput
    categoryID?: SortOrder
    _relevance?: UserOrderByRelevanceInput
  }

  export type UserWhereUniqueInput = {
    id?: string
    email?: string
  }

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    roll?: SortOrder
    createAt?: SortOrder
    categoryID?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: Enumerable<UserScalarWhereWithAggregatesInput>
    OR?: Enumerable<UserScalarWhereWithAggregatesInput>
    NOT?: Enumerable<UserScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    name?: StringNullableWithAggregatesFilter | string | null
    email?: StringWithAggregatesFilter | string
    password?: StringWithAggregatesFilter | string
    roll?: EnumRollWithAggregatesFilter | Roll
    createAt?: DateTimeWithAggregatesFilter | Date | string
    categoryID?: StringNullableWithAggregatesFilter | string | null
  }

  export type CategoryWhereInput = {
    AND?: Enumerable<CategoryWhereInput>
    OR?: Enumerable<CategoryWhereInput>
    NOT?: Enumerable<CategoryWhereInput>
    categoryID?: StringFilter | string
    type?: StringFilter | string
    Ticket?: TicketListRelationFilter
    User?: UserListRelationFilter
  }

  export type CategoryOrderByWithRelationAndSearchRelevanceInput = {
    categoryID?: SortOrder
    type?: SortOrder
    Ticket?: TicketOrderByRelationAggregateInput
    User?: UserOrderByRelationAggregateInput
    _relevance?: CategoryOrderByRelevanceInput
  }

  export type CategoryWhereUniqueInput = {
    categoryID?: string
    type?: string
  }

  export type CategoryOrderByWithAggregationInput = {
    categoryID?: SortOrder
    type?: SortOrder
    _count?: CategoryCountOrderByAggregateInput
    _max?: CategoryMaxOrderByAggregateInput
    _min?: CategoryMinOrderByAggregateInput
  }

  export type CategoryScalarWhereWithAggregatesInput = {
    AND?: Enumerable<CategoryScalarWhereWithAggregatesInput>
    OR?: Enumerable<CategoryScalarWhereWithAggregatesInput>
    NOT?: Enumerable<CategoryScalarWhereWithAggregatesInput>
    categoryID?: StringWithAggregatesFilter | string
    type?: StringWithAggregatesFilter | string
  }

  export type TicketWhereInput = {
    AND?: Enumerable<TicketWhereInput>
    OR?: Enumerable<TicketWhereInput>
    NOT?: Enumerable<TicketWhereInput>
    tiket_id?: StringFilter | string
    title?: StringFilter | string
    createDate?: DateTimeFilter | Date | string
    updatedDate?: DateTimeFilter | Date | string
    category?: XOR<CategoryRelationFilter, CategoryWhereInput> | null
    categoryID?: StringFilter | string
    status?: EnumStatusFilter | Status
    description?: StringFilter | string
    User?: XOR<UserRelationFilter, UserWhereInput> | null
    userId?: StringFilter | string
    feedback?: FeedbackListRelationFilter
  }

  export type TicketOrderByWithRelationAndSearchRelevanceInput = {
    tiket_id?: SortOrder
    title?: SortOrder
    createDate?: SortOrder
    updatedDate?: SortOrder
    category?: CategoryOrderByWithRelationAndSearchRelevanceInput
    categoryID?: SortOrder
    status?: SortOrder
    description?: SortOrder
    User?: UserOrderByWithRelationAndSearchRelevanceInput
    userId?: SortOrder
    feedback?: FeedbackOrderByRelationAggregateInput
    _relevance?: TicketOrderByRelevanceInput
  }

  export type TicketWhereUniqueInput = {
    tiket_id?: string
  }

  export type TicketOrderByWithAggregationInput = {
    tiket_id?: SortOrder
    title?: SortOrder
    createDate?: SortOrder
    updatedDate?: SortOrder
    categoryID?: SortOrder
    status?: SortOrder
    description?: SortOrder
    userId?: SortOrder
    _count?: TicketCountOrderByAggregateInput
    _max?: TicketMaxOrderByAggregateInput
    _min?: TicketMinOrderByAggregateInput
  }

  export type TicketScalarWhereWithAggregatesInput = {
    AND?: Enumerable<TicketScalarWhereWithAggregatesInput>
    OR?: Enumerable<TicketScalarWhereWithAggregatesInput>
    NOT?: Enumerable<TicketScalarWhereWithAggregatesInput>
    tiket_id?: StringWithAggregatesFilter | string
    title?: StringWithAggregatesFilter | string
    createDate?: DateTimeWithAggregatesFilter | Date | string
    updatedDate?: DateTimeWithAggregatesFilter | Date | string
    categoryID?: StringWithAggregatesFilter | string
    status?: EnumStatusWithAggregatesFilter | Status
    description?: StringWithAggregatesFilter | string
    userId?: StringWithAggregatesFilter | string
  }

  export type FeedbackWhereInput = {
    AND?: Enumerable<FeedbackWhereInput>
    OR?: Enumerable<FeedbackWhereInput>
    NOT?: Enumerable<FeedbackWhereInput>
    feedback_Id?: StringFilter | string
    feedback?: StringFilter | string
    submitDate?: DateTimeFilter | Date | string
    Ticket?: XOR<TicketRelationFilter, TicketWhereInput> | null
    ticket_id?: StringFilter | string
    userId?: StringFilter | string
    User?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type FeedbackOrderByWithRelationAndSearchRelevanceInput = {
    feedback_Id?: SortOrder
    feedback?: SortOrder
    submitDate?: SortOrder
    Ticket?: TicketOrderByWithRelationAndSearchRelevanceInput
    ticket_id?: SortOrder
    userId?: SortOrder
    User?: UserOrderByWithRelationAndSearchRelevanceInput
    _relevance?: FeedbackOrderByRelevanceInput
  }

  export type FeedbackWhereUniqueInput = {
    feedback_Id?: string
  }

  export type FeedbackOrderByWithAggregationInput = {
    feedback_Id?: SortOrder
    feedback?: SortOrder
    submitDate?: SortOrder
    ticket_id?: SortOrder
    userId?: SortOrder
    _count?: FeedbackCountOrderByAggregateInput
    _max?: FeedbackMaxOrderByAggregateInput
    _min?: FeedbackMinOrderByAggregateInput
  }

  export type FeedbackScalarWhereWithAggregatesInput = {
    AND?: Enumerable<FeedbackScalarWhereWithAggregatesInput>
    OR?: Enumerable<FeedbackScalarWhereWithAggregatesInput>
    NOT?: Enumerable<FeedbackScalarWhereWithAggregatesInput>
    feedback_Id?: StringWithAggregatesFilter | string
    feedback?: StringWithAggregatesFilter | string
    submitDate?: DateTimeWithAggregatesFilter | Date | string
    ticket_id?: StringWithAggregatesFilter | string
    userId?: StringWithAggregatesFilter | string
  }

  export type UserCreateInput = {
    id?: string
    name?: string | null
    email: string
    password: string
    roll?: Roll
    createAt?: Date | string
    ticket?: TicketCreateNestedManyWithoutUserInput
    Feedback?: FeedbackCreateNestedManyWithoutUserInput
    assign_to?: CategoryCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name?: string | null
    email: string
    password: string
    roll?: Roll
    createAt?: Date | string
    ticket?: TicketUncheckedCreateNestedManyWithoutUserInput
    Feedback?: FeedbackUncheckedCreateNestedManyWithoutUserInput
    categoryID?: string | null
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    roll?: EnumRollFieldUpdateOperationsInput | Roll
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ticket?: TicketUpdateManyWithoutUserNestedInput
    Feedback?: FeedbackUpdateManyWithoutUserNestedInput
    assign_to?: CategoryUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    roll?: EnumRollFieldUpdateOperationsInput | Roll
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ticket?: TicketUncheckedUpdateManyWithoutUserNestedInput
    Feedback?: FeedbackUncheckedUpdateManyWithoutUserNestedInput
    categoryID?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserCreateManyInput = {
    id?: string
    name?: string | null
    email: string
    password: string
    roll?: Roll
    createAt?: Date | string
    categoryID?: string | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    roll?: EnumRollFieldUpdateOperationsInput | Roll
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    roll?: EnumRollFieldUpdateOperationsInput | Roll
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categoryID?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CategoryCreateInput = {
    categoryID?: string
    type: string
    Ticket?: TicketCreateNestedManyWithoutCategoryInput
    User?: UserCreateNestedManyWithoutAssign_toInput
  }

  export type CategoryUncheckedCreateInput = {
    categoryID?: string
    type: string
    Ticket?: TicketUncheckedCreateNestedManyWithoutCategoryInput
    User?: UserUncheckedCreateNestedManyWithoutAssign_toInput
  }

  export type CategoryUpdateInput = {
    categoryID?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    Ticket?: TicketUpdateManyWithoutCategoryNestedInput
    User?: UserUpdateManyWithoutAssign_toNestedInput
  }

  export type CategoryUncheckedUpdateInput = {
    categoryID?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    Ticket?: TicketUncheckedUpdateManyWithoutCategoryNestedInput
    User?: UserUncheckedUpdateManyWithoutAssign_toNestedInput
  }

  export type CategoryCreateManyInput = {
    categoryID?: string
    type: string
  }

  export type CategoryUpdateManyMutationInput = {
    categoryID?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
  }

  export type CategoryUncheckedUpdateManyInput = {
    categoryID?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
  }

  export type TicketCreateInput = {
    tiket_id?: string
    title: string
    createDate?: Date | string
    updatedDate?: Date | string
    category?: CategoryCreateNestedOneWithoutTicketInput
    status?: Status
    description: string
    User?: UserCreateNestedOneWithoutTicketInput
    feedback?: FeedbackCreateNestedManyWithoutTicketInput
  }

  export type TicketUncheckedCreateInput = {
    tiket_id?: string
    title: string
    createDate?: Date | string
    updatedDate?: Date | string
    categoryID: string
    status?: Status
    description: string
    userId: string
    feedback?: FeedbackUncheckedCreateNestedManyWithoutTicketInput
  }

  export type TicketUpdateInput = {
    tiket_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneWithoutTicketNestedInput
    status?: EnumStatusFieldUpdateOperationsInput | Status
    description?: StringFieldUpdateOperationsInput | string
    User?: UserUpdateOneWithoutTicketNestedInput
    feedback?: FeedbackUpdateManyWithoutTicketNestedInput
  }

  export type TicketUncheckedUpdateInput = {
    tiket_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    categoryID?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | Status
    description?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    feedback?: FeedbackUncheckedUpdateManyWithoutTicketNestedInput
  }

  export type TicketCreateManyInput = {
    tiket_id?: string
    title: string
    createDate?: Date | string
    updatedDate?: Date | string
    categoryID: string
    status?: Status
    description: string
    userId: string
  }

  export type TicketUpdateManyMutationInput = {
    tiket_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | Status
    description?: StringFieldUpdateOperationsInput | string
  }

  export type TicketUncheckedUpdateManyInput = {
    tiket_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    categoryID?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | Status
    description?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type FeedbackCreateInput = {
    feedback_Id?: string
    feedback: string
    submitDate?: Date | string
    Ticket?: TicketCreateNestedOneWithoutFeedbackInput
    User: UserCreateNestedOneWithoutFeedbackInput
  }

  export type FeedbackUncheckedCreateInput = {
    feedback_Id?: string
    feedback: string
    submitDate?: Date | string
    ticket_id: string
    userId: string
  }

  export type FeedbackUpdateInput = {
    feedback_Id?: StringFieldUpdateOperationsInput | string
    feedback?: StringFieldUpdateOperationsInput | string
    submitDate?: DateTimeFieldUpdateOperationsInput | Date | string
    Ticket?: TicketUpdateOneWithoutFeedbackNestedInput
    User?: UserUpdateOneRequiredWithoutFeedbackNestedInput
  }

  export type FeedbackUncheckedUpdateInput = {
    feedback_Id?: StringFieldUpdateOperationsInput | string
    feedback?: StringFieldUpdateOperationsInput | string
    submitDate?: DateTimeFieldUpdateOperationsInput | Date | string
    ticket_id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type FeedbackCreateManyInput = {
    feedback_Id?: string
    feedback: string
    submitDate?: Date | string
    ticket_id: string
    userId: string
  }

  export type FeedbackUpdateManyMutationInput = {
    feedback_Id?: StringFieldUpdateOperationsInput | string
    feedback?: StringFieldUpdateOperationsInput | string
    submitDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeedbackUncheckedUpdateManyInput = {
    feedback_Id?: StringFieldUpdateOperationsInput | string
    feedback?: StringFieldUpdateOperationsInput | string
    submitDate?: DateTimeFieldUpdateOperationsInput | Date | string
    ticket_id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    search?: string
    mode?: QueryMode
    not?: NestedStringFilter | string
  }

  export type StringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    search?: string
    mode?: QueryMode
    not?: NestedStringNullableFilter | string | null
  }

  export type EnumRollFilter = {
    equals?: Roll
    in?: Enumerable<Roll>
    notIn?: Enumerable<Roll>
    not?: NestedEnumRollFilter | Roll
  }

  export type DateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type TicketListRelationFilter = {
    every?: TicketWhereInput
    some?: TicketWhereInput
    none?: TicketWhereInput
  }

  export type FeedbackListRelationFilter = {
    every?: FeedbackWhereInput
    some?: FeedbackWhereInput
    none?: FeedbackWhereInput
  }

  export type CategoryRelationFilter = {
    is?: CategoryWhereInput | null
    isNot?: CategoryWhereInput | null
  }

  export type TicketOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FeedbackOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOrderByRelevanceInput = {
    fields: Enumerable<UserOrderByRelevanceFieldEnum>
    sort: SortOrder
    search: string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    roll?: SortOrder
    createAt?: SortOrder
    categoryID?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    roll?: SortOrder
    createAt?: SortOrder
    categoryID?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    roll?: SortOrder
    createAt?: SortOrder
    categoryID?: SortOrder
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    search?: string
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type StringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    search?: string
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type EnumRollWithAggregatesFilter = {
    equals?: Roll
    in?: Enumerable<Roll>
    notIn?: Enumerable<Roll>
    not?: NestedEnumRollWithAggregatesFilter | Roll
    _count?: NestedIntFilter
    _min?: NestedEnumRollFilter
    _max?: NestedEnumRollFilter
  }

  export type DateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CategoryOrderByRelevanceInput = {
    fields: Enumerable<CategoryOrderByRelevanceFieldEnum>
    sort: SortOrder
    search: string
  }

  export type CategoryCountOrderByAggregateInput = {
    categoryID?: SortOrder
    type?: SortOrder
  }

  export type CategoryMaxOrderByAggregateInput = {
    categoryID?: SortOrder
    type?: SortOrder
  }

  export type CategoryMinOrderByAggregateInput = {
    categoryID?: SortOrder
    type?: SortOrder
  }

  export type EnumStatusFilter = {
    equals?: Status
    in?: Enumerable<Status>
    notIn?: Enumerable<Status>
    not?: NestedEnumStatusFilter | Status
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type TicketOrderByRelevanceInput = {
    fields: Enumerable<TicketOrderByRelevanceFieldEnum>
    sort: SortOrder
    search: string
  }

  export type TicketCountOrderByAggregateInput = {
    tiket_id?: SortOrder
    title?: SortOrder
    createDate?: SortOrder
    updatedDate?: SortOrder
    categoryID?: SortOrder
    status?: SortOrder
    description?: SortOrder
    userId?: SortOrder
  }

  export type TicketMaxOrderByAggregateInput = {
    tiket_id?: SortOrder
    title?: SortOrder
    createDate?: SortOrder
    updatedDate?: SortOrder
    categoryID?: SortOrder
    status?: SortOrder
    description?: SortOrder
    userId?: SortOrder
  }

  export type TicketMinOrderByAggregateInput = {
    tiket_id?: SortOrder
    title?: SortOrder
    createDate?: SortOrder
    updatedDate?: SortOrder
    categoryID?: SortOrder
    status?: SortOrder
    description?: SortOrder
    userId?: SortOrder
  }

  export type EnumStatusWithAggregatesFilter = {
    equals?: Status
    in?: Enumerable<Status>
    notIn?: Enumerable<Status>
    not?: NestedEnumStatusWithAggregatesFilter | Status
    _count?: NestedIntFilter
    _min?: NestedEnumStatusFilter
    _max?: NestedEnumStatusFilter
  }

  export type TicketRelationFilter = {
    is?: TicketWhereInput | null
    isNot?: TicketWhereInput | null
  }

  export type FeedbackOrderByRelevanceInput = {
    fields: Enumerable<FeedbackOrderByRelevanceFieldEnum>
    sort: SortOrder
    search: string
  }

  export type FeedbackCountOrderByAggregateInput = {
    feedback_Id?: SortOrder
    feedback?: SortOrder
    submitDate?: SortOrder
    ticket_id?: SortOrder
    userId?: SortOrder
  }

  export type FeedbackMaxOrderByAggregateInput = {
    feedback_Id?: SortOrder
    feedback?: SortOrder
    submitDate?: SortOrder
    ticket_id?: SortOrder
    userId?: SortOrder
  }

  export type FeedbackMinOrderByAggregateInput = {
    feedback_Id?: SortOrder
    feedback?: SortOrder
    submitDate?: SortOrder
    ticket_id?: SortOrder
    userId?: SortOrder
  }

  export type TicketCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<TicketCreateWithoutUserInput>, Enumerable<TicketUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<TicketCreateOrConnectWithoutUserInput>
    createMany?: TicketCreateManyUserInputEnvelope
    connect?: Enumerable<TicketWhereUniqueInput>
  }

  export type FeedbackCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<FeedbackCreateWithoutUserInput>, Enumerable<FeedbackUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<FeedbackCreateOrConnectWithoutUserInput>
    createMany?: FeedbackCreateManyUserInputEnvelope
    connect?: Enumerable<FeedbackWhereUniqueInput>
  }

  export type CategoryCreateNestedOneWithoutUserInput = {
    create?: XOR<CategoryCreateWithoutUserInput, CategoryUncheckedCreateWithoutUserInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutUserInput
    connect?: CategoryWhereUniqueInput
  }

  export type TicketUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<TicketCreateWithoutUserInput>, Enumerable<TicketUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<TicketCreateOrConnectWithoutUserInput>
    createMany?: TicketCreateManyUserInputEnvelope
    connect?: Enumerable<TicketWhereUniqueInput>
  }

  export type FeedbackUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<FeedbackCreateWithoutUserInput>, Enumerable<FeedbackUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<FeedbackCreateOrConnectWithoutUserInput>
    createMany?: FeedbackCreateManyUserInputEnvelope
    connect?: Enumerable<FeedbackWhereUniqueInput>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumRollFieldUpdateOperationsInput = {
    set?: Roll
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type TicketUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<TicketCreateWithoutUserInput>, Enumerable<TicketUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<TicketCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<TicketUpsertWithWhereUniqueWithoutUserInput>
    createMany?: TicketCreateManyUserInputEnvelope
    set?: Enumerable<TicketWhereUniqueInput>
    disconnect?: Enumerable<TicketWhereUniqueInput>
    delete?: Enumerable<TicketWhereUniqueInput>
    connect?: Enumerable<TicketWhereUniqueInput>
    update?: Enumerable<TicketUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<TicketUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<TicketScalarWhereInput>
  }

  export type FeedbackUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<FeedbackCreateWithoutUserInput>, Enumerable<FeedbackUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<FeedbackCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<FeedbackUpsertWithWhereUniqueWithoutUserInput>
    createMany?: FeedbackCreateManyUserInputEnvelope
    set?: Enumerable<FeedbackWhereUniqueInput>
    disconnect?: Enumerable<FeedbackWhereUniqueInput>
    delete?: Enumerable<FeedbackWhereUniqueInput>
    connect?: Enumerable<FeedbackWhereUniqueInput>
    update?: Enumerable<FeedbackUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<FeedbackUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<FeedbackScalarWhereInput>
  }

  export type CategoryUpdateOneWithoutUserNestedInput = {
    create?: XOR<CategoryCreateWithoutUserInput, CategoryUncheckedCreateWithoutUserInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutUserInput
    upsert?: CategoryUpsertWithoutUserInput
    disconnect?: boolean
    delete?: boolean
    connect?: CategoryWhereUniqueInput
    update?: XOR<CategoryUpdateWithoutUserInput, CategoryUncheckedUpdateWithoutUserInput>
  }

  export type TicketUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<TicketCreateWithoutUserInput>, Enumerable<TicketUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<TicketCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<TicketUpsertWithWhereUniqueWithoutUserInput>
    createMany?: TicketCreateManyUserInputEnvelope
    set?: Enumerable<TicketWhereUniqueInput>
    disconnect?: Enumerable<TicketWhereUniqueInput>
    delete?: Enumerable<TicketWhereUniqueInput>
    connect?: Enumerable<TicketWhereUniqueInput>
    update?: Enumerable<TicketUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<TicketUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<TicketScalarWhereInput>
  }

  export type FeedbackUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<FeedbackCreateWithoutUserInput>, Enumerable<FeedbackUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<FeedbackCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<FeedbackUpsertWithWhereUniqueWithoutUserInput>
    createMany?: FeedbackCreateManyUserInputEnvelope
    set?: Enumerable<FeedbackWhereUniqueInput>
    disconnect?: Enumerable<FeedbackWhereUniqueInput>
    delete?: Enumerable<FeedbackWhereUniqueInput>
    connect?: Enumerable<FeedbackWhereUniqueInput>
    update?: Enumerable<FeedbackUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<FeedbackUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<FeedbackScalarWhereInput>
  }

  export type TicketCreateNestedManyWithoutCategoryInput = {
    create?: XOR<Enumerable<TicketCreateWithoutCategoryInput>, Enumerable<TicketUncheckedCreateWithoutCategoryInput>>
    connectOrCreate?: Enumerable<TicketCreateOrConnectWithoutCategoryInput>
    createMany?: TicketCreateManyCategoryInputEnvelope
    connect?: Enumerable<TicketWhereUniqueInput>
  }

  export type UserCreateNestedManyWithoutAssign_toInput = {
    create?: XOR<Enumerable<UserCreateWithoutAssign_toInput>, Enumerable<UserUncheckedCreateWithoutAssign_toInput>>
    connectOrCreate?: Enumerable<UserCreateOrConnectWithoutAssign_toInput>
    createMany?: UserCreateManyAssign_toInputEnvelope
    connect?: Enumerable<UserWhereUniqueInput>
  }

  export type TicketUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<Enumerable<TicketCreateWithoutCategoryInput>, Enumerable<TicketUncheckedCreateWithoutCategoryInput>>
    connectOrCreate?: Enumerable<TicketCreateOrConnectWithoutCategoryInput>
    createMany?: TicketCreateManyCategoryInputEnvelope
    connect?: Enumerable<TicketWhereUniqueInput>
  }

  export type UserUncheckedCreateNestedManyWithoutAssign_toInput = {
    create?: XOR<Enumerable<UserCreateWithoutAssign_toInput>, Enumerable<UserUncheckedCreateWithoutAssign_toInput>>
    connectOrCreate?: Enumerable<UserCreateOrConnectWithoutAssign_toInput>
    createMany?: UserCreateManyAssign_toInputEnvelope
    connect?: Enumerable<UserWhereUniqueInput>
  }

  export type TicketUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<Enumerable<TicketCreateWithoutCategoryInput>, Enumerable<TicketUncheckedCreateWithoutCategoryInput>>
    connectOrCreate?: Enumerable<TicketCreateOrConnectWithoutCategoryInput>
    upsert?: Enumerable<TicketUpsertWithWhereUniqueWithoutCategoryInput>
    createMany?: TicketCreateManyCategoryInputEnvelope
    set?: Enumerable<TicketWhereUniqueInput>
    disconnect?: Enumerable<TicketWhereUniqueInput>
    delete?: Enumerable<TicketWhereUniqueInput>
    connect?: Enumerable<TicketWhereUniqueInput>
    update?: Enumerable<TicketUpdateWithWhereUniqueWithoutCategoryInput>
    updateMany?: Enumerable<TicketUpdateManyWithWhereWithoutCategoryInput>
    deleteMany?: Enumerable<TicketScalarWhereInput>
  }

  export type UserUpdateManyWithoutAssign_toNestedInput = {
    create?: XOR<Enumerable<UserCreateWithoutAssign_toInput>, Enumerable<UserUncheckedCreateWithoutAssign_toInput>>
    connectOrCreate?: Enumerable<UserCreateOrConnectWithoutAssign_toInput>
    upsert?: Enumerable<UserUpsertWithWhereUniqueWithoutAssign_toInput>
    createMany?: UserCreateManyAssign_toInputEnvelope
    set?: Enumerable<UserWhereUniqueInput>
    disconnect?: Enumerable<UserWhereUniqueInput>
    delete?: Enumerable<UserWhereUniqueInput>
    connect?: Enumerable<UserWhereUniqueInput>
    update?: Enumerable<UserUpdateWithWhereUniqueWithoutAssign_toInput>
    updateMany?: Enumerable<UserUpdateManyWithWhereWithoutAssign_toInput>
    deleteMany?: Enumerable<UserScalarWhereInput>
  }

  export type TicketUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<Enumerable<TicketCreateWithoutCategoryInput>, Enumerable<TicketUncheckedCreateWithoutCategoryInput>>
    connectOrCreate?: Enumerable<TicketCreateOrConnectWithoutCategoryInput>
    upsert?: Enumerable<TicketUpsertWithWhereUniqueWithoutCategoryInput>
    createMany?: TicketCreateManyCategoryInputEnvelope
    set?: Enumerable<TicketWhereUniqueInput>
    disconnect?: Enumerable<TicketWhereUniqueInput>
    delete?: Enumerable<TicketWhereUniqueInput>
    connect?: Enumerable<TicketWhereUniqueInput>
    update?: Enumerable<TicketUpdateWithWhereUniqueWithoutCategoryInput>
    updateMany?: Enumerable<TicketUpdateManyWithWhereWithoutCategoryInput>
    deleteMany?: Enumerable<TicketScalarWhereInput>
  }

  export type UserUncheckedUpdateManyWithoutAssign_toNestedInput = {
    create?: XOR<Enumerable<UserCreateWithoutAssign_toInput>, Enumerable<UserUncheckedCreateWithoutAssign_toInput>>
    connectOrCreate?: Enumerable<UserCreateOrConnectWithoutAssign_toInput>
    upsert?: Enumerable<UserUpsertWithWhereUniqueWithoutAssign_toInput>
    createMany?: UserCreateManyAssign_toInputEnvelope
    set?: Enumerable<UserWhereUniqueInput>
    disconnect?: Enumerable<UserWhereUniqueInput>
    delete?: Enumerable<UserWhereUniqueInput>
    connect?: Enumerable<UserWhereUniqueInput>
    update?: Enumerable<UserUpdateWithWhereUniqueWithoutAssign_toInput>
    updateMany?: Enumerable<UserUpdateManyWithWhereWithoutAssign_toInput>
    deleteMany?: Enumerable<UserScalarWhereInput>
  }

  export type CategoryCreateNestedOneWithoutTicketInput = {
    create?: XOR<CategoryCreateWithoutTicketInput, CategoryUncheckedCreateWithoutTicketInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutTicketInput
    connect?: CategoryWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutTicketInput = {
    create?: XOR<UserCreateWithoutTicketInput, UserUncheckedCreateWithoutTicketInput>
    connectOrCreate?: UserCreateOrConnectWithoutTicketInput
    connect?: UserWhereUniqueInput
  }

  export type FeedbackCreateNestedManyWithoutTicketInput = {
    create?: XOR<Enumerable<FeedbackCreateWithoutTicketInput>, Enumerable<FeedbackUncheckedCreateWithoutTicketInput>>
    connectOrCreate?: Enumerable<FeedbackCreateOrConnectWithoutTicketInput>
    createMany?: FeedbackCreateManyTicketInputEnvelope
    connect?: Enumerable<FeedbackWhereUniqueInput>
  }

  export type FeedbackUncheckedCreateNestedManyWithoutTicketInput = {
    create?: XOR<Enumerable<FeedbackCreateWithoutTicketInput>, Enumerable<FeedbackUncheckedCreateWithoutTicketInput>>
    connectOrCreate?: Enumerable<FeedbackCreateOrConnectWithoutTicketInput>
    createMany?: FeedbackCreateManyTicketInputEnvelope
    connect?: Enumerable<FeedbackWhereUniqueInput>
  }

  export type CategoryUpdateOneWithoutTicketNestedInput = {
    create?: XOR<CategoryCreateWithoutTicketInput, CategoryUncheckedCreateWithoutTicketInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutTicketInput
    upsert?: CategoryUpsertWithoutTicketInput
    disconnect?: boolean
    delete?: boolean
    connect?: CategoryWhereUniqueInput
    update?: XOR<CategoryUpdateWithoutTicketInput, CategoryUncheckedUpdateWithoutTicketInput>
  }

  export type EnumStatusFieldUpdateOperationsInput = {
    set?: Status
  }

  export type UserUpdateOneWithoutTicketNestedInput = {
    create?: XOR<UserCreateWithoutTicketInput, UserUncheckedCreateWithoutTicketInput>
    connectOrCreate?: UserCreateOrConnectWithoutTicketInput
    upsert?: UserUpsertWithoutTicketInput
    disconnect?: boolean
    delete?: boolean
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutTicketInput, UserUncheckedUpdateWithoutTicketInput>
  }

  export type FeedbackUpdateManyWithoutTicketNestedInput = {
    create?: XOR<Enumerable<FeedbackCreateWithoutTicketInput>, Enumerable<FeedbackUncheckedCreateWithoutTicketInput>>
    connectOrCreate?: Enumerable<FeedbackCreateOrConnectWithoutTicketInput>
    upsert?: Enumerable<FeedbackUpsertWithWhereUniqueWithoutTicketInput>
    createMany?: FeedbackCreateManyTicketInputEnvelope
    set?: Enumerable<FeedbackWhereUniqueInput>
    disconnect?: Enumerable<FeedbackWhereUniqueInput>
    delete?: Enumerable<FeedbackWhereUniqueInput>
    connect?: Enumerable<FeedbackWhereUniqueInput>
    update?: Enumerable<FeedbackUpdateWithWhereUniqueWithoutTicketInput>
    updateMany?: Enumerable<FeedbackUpdateManyWithWhereWithoutTicketInput>
    deleteMany?: Enumerable<FeedbackScalarWhereInput>
  }

  export type FeedbackUncheckedUpdateManyWithoutTicketNestedInput = {
    create?: XOR<Enumerable<FeedbackCreateWithoutTicketInput>, Enumerable<FeedbackUncheckedCreateWithoutTicketInput>>
    connectOrCreate?: Enumerable<FeedbackCreateOrConnectWithoutTicketInput>
    upsert?: Enumerable<FeedbackUpsertWithWhereUniqueWithoutTicketInput>
    createMany?: FeedbackCreateManyTicketInputEnvelope
    set?: Enumerable<FeedbackWhereUniqueInput>
    disconnect?: Enumerable<FeedbackWhereUniqueInput>
    delete?: Enumerable<FeedbackWhereUniqueInput>
    connect?: Enumerable<FeedbackWhereUniqueInput>
    update?: Enumerable<FeedbackUpdateWithWhereUniqueWithoutTicketInput>
    updateMany?: Enumerable<FeedbackUpdateManyWithWhereWithoutTicketInput>
    deleteMany?: Enumerable<FeedbackScalarWhereInput>
  }

  export type TicketCreateNestedOneWithoutFeedbackInput = {
    create?: XOR<TicketCreateWithoutFeedbackInput, TicketUncheckedCreateWithoutFeedbackInput>
    connectOrCreate?: TicketCreateOrConnectWithoutFeedbackInput
    connect?: TicketWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutFeedbackInput = {
    create?: XOR<UserCreateWithoutFeedbackInput, UserUncheckedCreateWithoutFeedbackInput>
    connectOrCreate?: UserCreateOrConnectWithoutFeedbackInput
    connect?: UserWhereUniqueInput
  }

  export type TicketUpdateOneWithoutFeedbackNestedInput = {
    create?: XOR<TicketCreateWithoutFeedbackInput, TicketUncheckedCreateWithoutFeedbackInput>
    connectOrCreate?: TicketCreateOrConnectWithoutFeedbackInput
    upsert?: TicketUpsertWithoutFeedbackInput
    disconnect?: boolean
    delete?: boolean
    connect?: TicketWhereUniqueInput
    update?: XOR<TicketUpdateWithoutFeedbackInput, TicketUncheckedUpdateWithoutFeedbackInput>
  }

  export type UserUpdateOneRequiredWithoutFeedbackNestedInput = {
    create?: XOR<UserCreateWithoutFeedbackInput, UserUncheckedCreateWithoutFeedbackInput>
    connectOrCreate?: UserCreateOrConnectWithoutFeedbackInput
    upsert?: UserUpsertWithoutFeedbackInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutFeedbackInput, UserUncheckedUpdateWithoutFeedbackInput>
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    search?: string
    not?: NestedStringFilter | string
  }

  export type NestedStringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    search?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type NestedEnumRollFilter = {
    equals?: Roll
    in?: Enumerable<Roll>
    notIn?: Enumerable<Roll>
    not?: NestedEnumRollFilter | Roll
  }

  export type NestedDateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    search?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedStringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    search?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type NestedIntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type NestedEnumRollWithAggregatesFilter = {
    equals?: Roll
    in?: Enumerable<Roll>
    notIn?: Enumerable<Roll>
    not?: NestedEnumRollWithAggregatesFilter | Roll
    _count?: NestedIntFilter
    _min?: NestedEnumRollFilter
    _max?: NestedEnumRollFilter
  }

  export type NestedDateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type NestedEnumStatusFilter = {
    equals?: Status
    in?: Enumerable<Status>
    notIn?: Enumerable<Status>
    not?: NestedEnumStatusFilter | Status
  }

  export type NestedEnumStatusWithAggregatesFilter = {
    equals?: Status
    in?: Enumerable<Status>
    notIn?: Enumerable<Status>
    not?: NestedEnumStatusWithAggregatesFilter | Status
    _count?: NestedIntFilter
    _min?: NestedEnumStatusFilter
    _max?: NestedEnumStatusFilter
  }

  export type TicketCreateWithoutUserInput = {
    tiket_id?: string
    title: string
    createDate?: Date | string
    updatedDate?: Date | string
    category?: CategoryCreateNestedOneWithoutTicketInput
    status?: Status
    description: string
    feedback?: FeedbackCreateNestedManyWithoutTicketInput
  }

  export type TicketUncheckedCreateWithoutUserInput = {
    tiket_id?: string
    title: string
    createDate?: Date | string
    updatedDate?: Date | string
    categoryID: string
    status?: Status
    description: string
    feedback?: FeedbackUncheckedCreateNestedManyWithoutTicketInput
  }

  export type TicketCreateOrConnectWithoutUserInput = {
    where: TicketWhereUniqueInput
    create: XOR<TicketCreateWithoutUserInput, TicketUncheckedCreateWithoutUserInput>
  }

  export type TicketCreateManyUserInputEnvelope = {
    data: Enumerable<TicketCreateManyUserInput>
    skipDuplicates?: boolean
  }

  export type FeedbackCreateWithoutUserInput = {
    feedback_Id?: string
    feedback: string
    submitDate?: Date | string
    Ticket?: TicketCreateNestedOneWithoutFeedbackInput
  }

  export type FeedbackUncheckedCreateWithoutUserInput = {
    feedback_Id?: string
    feedback: string
    submitDate?: Date | string
    ticket_id: string
  }

  export type FeedbackCreateOrConnectWithoutUserInput = {
    where: FeedbackWhereUniqueInput
    create: XOR<FeedbackCreateWithoutUserInput, FeedbackUncheckedCreateWithoutUserInput>
  }

  export type FeedbackCreateManyUserInputEnvelope = {
    data: Enumerable<FeedbackCreateManyUserInput>
    skipDuplicates?: boolean
  }

  export type CategoryCreateWithoutUserInput = {
    categoryID?: string
    type: string
    Ticket?: TicketCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateWithoutUserInput = {
    categoryID?: string
    type: string
    Ticket?: TicketUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryCreateOrConnectWithoutUserInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutUserInput, CategoryUncheckedCreateWithoutUserInput>
  }

  export type TicketUpsertWithWhereUniqueWithoutUserInput = {
    where: TicketWhereUniqueInput
    update: XOR<TicketUpdateWithoutUserInput, TicketUncheckedUpdateWithoutUserInput>
    create: XOR<TicketCreateWithoutUserInput, TicketUncheckedCreateWithoutUserInput>
  }

  export type TicketUpdateWithWhereUniqueWithoutUserInput = {
    where: TicketWhereUniqueInput
    data: XOR<TicketUpdateWithoutUserInput, TicketUncheckedUpdateWithoutUserInput>
  }

  export type TicketUpdateManyWithWhereWithoutUserInput = {
    where: TicketScalarWhereInput
    data: XOR<TicketUpdateManyMutationInput, TicketUncheckedUpdateManyWithoutTicketInput>
  }

  export type TicketScalarWhereInput = {
    AND?: Enumerable<TicketScalarWhereInput>
    OR?: Enumerable<TicketScalarWhereInput>
    NOT?: Enumerable<TicketScalarWhereInput>
    tiket_id?: StringFilter | string
    title?: StringFilter | string
    createDate?: DateTimeFilter | Date | string
    updatedDate?: DateTimeFilter | Date | string
    categoryID?: StringFilter | string
    status?: EnumStatusFilter | Status
    description?: StringFilter | string
    userId?: StringFilter | string
  }

  export type FeedbackUpsertWithWhereUniqueWithoutUserInput = {
    where: FeedbackWhereUniqueInput
    update: XOR<FeedbackUpdateWithoutUserInput, FeedbackUncheckedUpdateWithoutUserInput>
    create: XOR<FeedbackCreateWithoutUserInput, FeedbackUncheckedCreateWithoutUserInput>
  }

  export type FeedbackUpdateWithWhereUniqueWithoutUserInput = {
    where: FeedbackWhereUniqueInput
    data: XOR<FeedbackUpdateWithoutUserInput, FeedbackUncheckedUpdateWithoutUserInput>
  }

  export type FeedbackUpdateManyWithWhereWithoutUserInput = {
    where: FeedbackScalarWhereInput
    data: XOR<FeedbackUpdateManyMutationInput, FeedbackUncheckedUpdateManyWithoutFeedbackInput>
  }

  export type FeedbackScalarWhereInput = {
    AND?: Enumerable<FeedbackScalarWhereInput>
    OR?: Enumerable<FeedbackScalarWhereInput>
    NOT?: Enumerable<FeedbackScalarWhereInput>
    feedback_Id?: StringFilter | string
    feedback?: StringFilter | string
    submitDate?: DateTimeFilter | Date | string
    ticket_id?: StringFilter | string
    userId?: StringFilter | string
  }

  export type CategoryUpsertWithoutUserInput = {
    update: XOR<CategoryUpdateWithoutUserInput, CategoryUncheckedUpdateWithoutUserInput>
    create: XOR<CategoryCreateWithoutUserInput, CategoryUncheckedCreateWithoutUserInput>
  }

  export type CategoryUpdateWithoutUserInput = {
    categoryID?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    Ticket?: TicketUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateWithoutUserInput = {
    categoryID?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    Ticket?: TicketUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type TicketCreateWithoutCategoryInput = {
    tiket_id?: string
    title: string
    createDate?: Date | string
    updatedDate?: Date | string
    status?: Status
    description: string
    User?: UserCreateNestedOneWithoutTicketInput
    feedback?: FeedbackCreateNestedManyWithoutTicketInput
  }

  export type TicketUncheckedCreateWithoutCategoryInput = {
    tiket_id?: string
    title: string
    createDate?: Date | string
    updatedDate?: Date | string
    status?: Status
    description: string
    userId: string
    feedback?: FeedbackUncheckedCreateNestedManyWithoutTicketInput
  }

  export type TicketCreateOrConnectWithoutCategoryInput = {
    where: TicketWhereUniqueInput
    create: XOR<TicketCreateWithoutCategoryInput, TicketUncheckedCreateWithoutCategoryInput>
  }

  export type TicketCreateManyCategoryInputEnvelope = {
    data: Enumerable<TicketCreateManyCategoryInput>
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutAssign_toInput = {
    id?: string
    name?: string | null
    email: string
    password: string
    roll?: Roll
    createAt?: Date | string
    ticket?: TicketCreateNestedManyWithoutUserInput
    Feedback?: FeedbackCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAssign_toInput = {
    id?: string
    name?: string | null
    email: string
    password: string
    roll?: Roll
    createAt?: Date | string
    ticket?: TicketUncheckedCreateNestedManyWithoutUserInput
    Feedback?: FeedbackUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAssign_toInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAssign_toInput, UserUncheckedCreateWithoutAssign_toInput>
  }

  export type UserCreateManyAssign_toInputEnvelope = {
    data: Enumerable<UserCreateManyAssign_toInput>
    skipDuplicates?: boolean
  }

  export type TicketUpsertWithWhereUniqueWithoutCategoryInput = {
    where: TicketWhereUniqueInput
    update: XOR<TicketUpdateWithoutCategoryInput, TicketUncheckedUpdateWithoutCategoryInput>
    create: XOR<TicketCreateWithoutCategoryInput, TicketUncheckedCreateWithoutCategoryInput>
  }

  export type TicketUpdateWithWhereUniqueWithoutCategoryInput = {
    where: TicketWhereUniqueInput
    data: XOR<TicketUpdateWithoutCategoryInput, TicketUncheckedUpdateWithoutCategoryInput>
  }

  export type TicketUpdateManyWithWhereWithoutCategoryInput = {
    where: TicketScalarWhereInput
    data: XOR<TicketUpdateManyMutationInput, TicketUncheckedUpdateManyWithoutTicketInput>
  }

  export type UserUpsertWithWhereUniqueWithoutAssign_toInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutAssign_toInput, UserUncheckedUpdateWithoutAssign_toInput>
    create: XOR<UserCreateWithoutAssign_toInput, UserUncheckedCreateWithoutAssign_toInput>
  }

  export type UserUpdateWithWhereUniqueWithoutAssign_toInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutAssign_toInput, UserUncheckedUpdateWithoutAssign_toInput>
  }

  export type UserUpdateManyWithWhereWithoutAssign_toInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutUserInput>
  }

  export type UserScalarWhereInput = {
    AND?: Enumerable<UserScalarWhereInput>
    OR?: Enumerable<UserScalarWhereInput>
    NOT?: Enumerable<UserScalarWhereInput>
    id?: StringFilter | string
    name?: StringNullableFilter | string | null
    email?: StringFilter | string
    password?: StringFilter | string
    roll?: EnumRollFilter | Roll
    createAt?: DateTimeFilter | Date | string
    categoryID?: StringNullableFilter | string | null
  }

  export type CategoryCreateWithoutTicketInput = {
    categoryID?: string
    type: string
    User?: UserCreateNestedManyWithoutAssign_toInput
  }

  export type CategoryUncheckedCreateWithoutTicketInput = {
    categoryID?: string
    type: string
    User?: UserUncheckedCreateNestedManyWithoutAssign_toInput
  }

  export type CategoryCreateOrConnectWithoutTicketInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutTicketInput, CategoryUncheckedCreateWithoutTicketInput>
  }

  export type UserCreateWithoutTicketInput = {
    id?: string
    name?: string | null
    email: string
    password: string
    roll?: Roll
    createAt?: Date | string
    Feedback?: FeedbackCreateNestedManyWithoutUserInput
    assign_to?: CategoryCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTicketInput = {
    id?: string
    name?: string | null
    email: string
    password: string
    roll?: Roll
    createAt?: Date | string
    Feedback?: FeedbackUncheckedCreateNestedManyWithoutUserInput
    categoryID?: string | null
  }

  export type UserCreateOrConnectWithoutTicketInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTicketInput, UserUncheckedCreateWithoutTicketInput>
  }

  export type FeedbackCreateWithoutTicketInput = {
    feedback_Id?: string
    feedback: string
    submitDate?: Date | string
    User: UserCreateNestedOneWithoutFeedbackInput
  }

  export type FeedbackUncheckedCreateWithoutTicketInput = {
    feedback_Id?: string
    feedback: string
    submitDate?: Date | string
    userId: string
  }

  export type FeedbackCreateOrConnectWithoutTicketInput = {
    where: FeedbackWhereUniqueInput
    create: XOR<FeedbackCreateWithoutTicketInput, FeedbackUncheckedCreateWithoutTicketInput>
  }

  export type FeedbackCreateManyTicketInputEnvelope = {
    data: Enumerable<FeedbackCreateManyTicketInput>
    skipDuplicates?: boolean
  }

  export type CategoryUpsertWithoutTicketInput = {
    update: XOR<CategoryUpdateWithoutTicketInput, CategoryUncheckedUpdateWithoutTicketInput>
    create: XOR<CategoryCreateWithoutTicketInput, CategoryUncheckedCreateWithoutTicketInput>
  }

  export type CategoryUpdateWithoutTicketInput = {
    categoryID?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    User?: UserUpdateManyWithoutAssign_toNestedInput
  }

  export type CategoryUncheckedUpdateWithoutTicketInput = {
    categoryID?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    User?: UserUncheckedUpdateManyWithoutAssign_toNestedInput
  }

  export type UserUpsertWithoutTicketInput = {
    update: XOR<UserUpdateWithoutTicketInput, UserUncheckedUpdateWithoutTicketInput>
    create: XOR<UserCreateWithoutTicketInput, UserUncheckedCreateWithoutTicketInput>
  }

  export type UserUpdateWithoutTicketInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    roll?: EnumRollFieldUpdateOperationsInput | Roll
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Feedback?: FeedbackUpdateManyWithoutUserNestedInput
    assign_to?: CategoryUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTicketInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    roll?: EnumRollFieldUpdateOperationsInput | Roll
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Feedback?: FeedbackUncheckedUpdateManyWithoutUserNestedInput
    categoryID?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FeedbackUpsertWithWhereUniqueWithoutTicketInput = {
    where: FeedbackWhereUniqueInput
    update: XOR<FeedbackUpdateWithoutTicketInput, FeedbackUncheckedUpdateWithoutTicketInput>
    create: XOR<FeedbackCreateWithoutTicketInput, FeedbackUncheckedCreateWithoutTicketInput>
  }

  export type FeedbackUpdateWithWhereUniqueWithoutTicketInput = {
    where: FeedbackWhereUniqueInput
    data: XOR<FeedbackUpdateWithoutTicketInput, FeedbackUncheckedUpdateWithoutTicketInput>
  }

  export type FeedbackUpdateManyWithWhereWithoutTicketInput = {
    where: FeedbackScalarWhereInput
    data: XOR<FeedbackUpdateManyMutationInput, FeedbackUncheckedUpdateManyWithoutFeedbackInput>
  }

  export type TicketCreateWithoutFeedbackInput = {
    tiket_id?: string
    title: string
    createDate?: Date | string
    updatedDate?: Date | string
    category?: CategoryCreateNestedOneWithoutTicketInput
    status?: Status
    description: string
    User?: UserCreateNestedOneWithoutTicketInput
  }

  export type TicketUncheckedCreateWithoutFeedbackInput = {
    tiket_id?: string
    title: string
    createDate?: Date | string
    updatedDate?: Date | string
    categoryID: string
    status?: Status
    description: string
    userId: string
  }

  export type TicketCreateOrConnectWithoutFeedbackInput = {
    where: TicketWhereUniqueInput
    create: XOR<TicketCreateWithoutFeedbackInput, TicketUncheckedCreateWithoutFeedbackInput>
  }

  export type UserCreateWithoutFeedbackInput = {
    id?: string
    name?: string | null
    email: string
    password: string
    roll?: Roll
    createAt?: Date | string
    ticket?: TicketCreateNestedManyWithoutUserInput
    assign_to?: CategoryCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutFeedbackInput = {
    id?: string
    name?: string | null
    email: string
    password: string
    roll?: Roll
    createAt?: Date | string
    ticket?: TicketUncheckedCreateNestedManyWithoutUserInput
    categoryID?: string | null
  }

  export type UserCreateOrConnectWithoutFeedbackInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFeedbackInput, UserUncheckedCreateWithoutFeedbackInput>
  }

  export type TicketUpsertWithoutFeedbackInput = {
    update: XOR<TicketUpdateWithoutFeedbackInput, TicketUncheckedUpdateWithoutFeedbackInput>
    create: XOR<TicketCreateWithoutFeedbackInput, TicketUncheckedCreateWithoutFeedbackInput>
  }

  export type TicketUpdateWithoutFeedbackInput = {
    tiket_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneWithoutTicketNestedInput
    status?: EnumStatusFieldUpdateOperationsInput | Status
    description?: StringFieldUpdateOperationsInput | string
    User?: UserUpdateOneWithoutTicketNestedInput
  }

  export type TicketUncheckedUpdateWithoutFeedbackInput = {
    tiket_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    categoryID?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | Status
    description?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type UserUpsertWithoutFeedbackInput = {
    update: XOR<UserUpdateWithoutFeedbackInput, UserUncheckedUpdateWithoutFeedbackInput>
    create: XOR<UserCreateWithoutFeedbackInput, UserUncheckedCreateWithoutFeedbackInput>
  }

  export type UserUpdateWithoutFeedbackInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    roll?: EnumRollFieldUpdateOperationsInput | Roll
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ticket?: TicketUpdateManyWithoutUserNestedInput
    assign_to?: CategoryUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutFeedbackInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    roll?: EnumRollFieldUpdateOperationsInput | Roll
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ticket?: TicketUncheckedUpdateManyWithoutUserNestedInput
    categoryID?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TicketCreateManyUserInput = {
    tiket_id?: string
    title: string
    createDate?: Date | string
    updatedDate?: Date | string
    categoryID: string
    status?: Status
    description: string
  }

  export type FeedbackCreateManyUserInput = {
    feedback_Id?: string
    feedback: string
    submitDate?: Date | string
    ticket_id: string
  }

  export type TicketUpdateWithoutUserInput = {
    tiket_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneWithoutTicketNestedInput
    status?: EnumStatusFieldUpdateOperationsInput | Status
    description?: StringFieldUpdateOperationsInput | string
    feedback?: FeedbackUpdateManyWithoutTicketNestedInput
  }

  export type TicketUncheckedUpdateWithoutUserInput = {
    tiket_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    categoryID?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | Status
    description?: StringFieldUpdateOperationsInput | string
    feedback?: FeedbackUncheckedUpdateManyWithoutTicketNestedInput
  }

  export type TicketUncheckedUpdateManyWithoutTicketInput = {
    tiket_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    categoryID?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | Status
    description?: StringFieldUpdateOperationsInput | string
  }

  export type FeedbackUpdateWithoutUserInput = {
    feedback_Id?: StringFieldUpdateOperationsInput | string
    feedback?: StringFieldUpdateOperationsInput | string
    submitDate?: DateTimeFieldUpdateOperationsInput | Date | string
    Ticket?: TicketUpdateOneWithoutFeedbackNestedInput
  }

  export type FeedbackUncheckedUpdateWithoutUserInput = {
    feedback_Id?: StringFieldUpdateOperationsInput | string
    feedback?: StringFieldUpdateOperationsInput | string
    submitDate?: DateTimeFieldUpdateOperationsInput | Date | string
    ticket_id?: StringFieldUpdateOperationsInput | string
  }

  export type FeedbackUncheckedUpdateManyWithoutFeedbackInput = {
    feedback_Id?: StringFieldUpdateOperationsInput | string
    feedback?: StringFieldUpdateOperationsInput | string
    submitDate?: DateTimeFieldUpdateOperationsInput | Date | string
    ticket_id?: StringFieldUpdateOperationsInput | string
  }

  export type TicketCreateManyCategoryInput = {
    tiket_id?: string
    title: string
    createDate?: Date | string
    updatedDate?: Date | string
    status?: Status
    description: string
    userId: string
  }

  export type UserCreateManyAssign_toInput = {
    id?: string
    name?: string | null
    email: string
    password: string
    roll?: Roll
    createAt?: Date | string
  }

  export type TicketUpdateWithoutCategoryInput = {
    tiket_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | Status
    description?: StringFieldUpdateOperationsInput | string
    User?: UserUpdateOneWithoutTicketNestedInput
    feedback?: FeedbackUpdateManyWithoutTicketNestedInput
  }

  export type TicketUncheckedUpdateWithoutCategoryInput = {
    tiket_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    createDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | Status
    description?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    feedback?: FeedbackUncheckedUpdateManyWithoutTicketNestedInput
  }

  export type UserUpdateWithoutAssign_toInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    roll?: EnumRollFieldUpdateOperationsInput | Roll
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ticket?: TicketUpdateManyWithoutUserNestedInput
    Feedback?: FeedbackUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAssign_toInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    roll?: EnumRollFieldUpdateOperationsInput | Roll
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ticket?: TicketUncheckedUpdateManyWithoutUserNestedInput
    Feedback?: FeedbackUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    roll?: EnumRollFieldUpdateOperationsInput | Roll
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeedbackCreateManyTicketInput = {
    feedback_Id?: string
    feedback: string
    submitDate?: Date | string
    userId: string
  }

  export type FeedbackUpdateWithoutTicketInput = {
    feedback_Id?: StringFieldUpdateOperationsInput | string
    feedback?: StringFieldUpdateOperationsInput | string
    submitDate?: DateTimeFieldUpdateOperationsInput | Date | string
    User?: UserUpdateOneRequiredWithoutFeedbackNestedInput
  }

  export type FeedbackUncheckedUpdateWithoutTicketInput = {
    feedback_Id?: StringFieldUpdateOperationsInput | string
    feedback?: StringFieldUpdateOperationsInput | string
    submitDate?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}