
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model partyImages
 * 
 */
export type partyImages = $Result.DefaultSelection<Prisma.$partyImagesPayload>
/**
 * Model Order
 * 
 */
export type Order = $Result.DefaultSelection<Prisma.$OrderPayload>
/**
 * Model AcceptedOrders
 * 
 */
export type AcceptedOrders = $Result.DefaultSelection<Prisma.$AcceptedOrdersPayload>
/**
 * Model RejectedOrders
 * 
 */
export type RejectedOrders = $Result.DefaultSelection<Prisma.$RejectedOrdersPayload>
/**
 * Model OrderItem
 * 
 */
export type OrderItem = $Result.DefaultSelection<Prisma.$OrderItemPayload>
/**
 * Model Collection
 * 
 */
export type Collection = $Result.DefaultSelection<Prisma.$CollectionPayload>
/**
 * Model PartyEditRequest
 * 
 */
export type PartyEditRequest = $Result.DefaultSelection<Prisma.$PartyEditRequestPayload>
/**
 * Model Stock
 * 
 */
export type Stock = $Result.DefaultSelection<Prisma.$StockPayload>
/**
 * Model StockItem
 * 
 */
export type StockItem = $Result.DefaultSelection<Prisma.$StockItemPayload>
/**
 * Model admin
 * 
 */
export type admin = $Result.DefaultSelection<Prisma.$adminPayload>
/**
 * Model Attendance
 * 
 */
export type Attendance = $Result.DefaultSelection<Prisma.$AttendancePayload>
/**
 * Model DailyRateList
 * 
 */
export type DailyRateList = $Result.DefaultSelection<Prisma.$DailyRateListPayload>
/**
 * Model mstemp
 * The underlying view does not contain a valid unique identifier and can therefore currently not be handled by Prisma Client.
 */
export type mstemp = $Result.DefaultSelection<Prisma.$mstempPayload>
/**
 * Model mstparty
 * The underlying view does not contain a valid unique identifier and can therefore currently not be handled by Prisma Client.
 */
export type mstparty = $Result.DefaultSelection<Prisma.$mstpartyPayload>
/**
 * Model mstitm
 * The underlying view does not contain a valid unique identifier and can therefore currently not be handled by Prisma Client.
 */
export type mstitm = $Result.DefaultSelection<Prisma.$mstitmPayload>
/**
 * Model OutstandingAmt
 * 
 */
export type OutstandingAmt = $Result.DefaultSelection<Prisma.$OutstandingAmtPayload>

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
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

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

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.partyImages`: Exposes CRUD operations for the **partyImages** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PartyImages
    * const partyImages = await prisma.partyImages.findMany()
    * ```
    */
  get partyImages(): Prisma.partyImagesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.order`: Exposes CRUD operations for the **Order** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Orders
    * const orders = await prisma.order.findMany()
    * ```
    */
  get order(): Prisma.OrderDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.acceptedOrders`: Exposes CRUD operations for the **AcceptedOrders** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AcceptedOrders
    * const acceptedOrders = await prisma.acceptedOrders.findMany()
    * ```
    */
  get acceptedOrders(): Prisma.AcceptedOrdersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.rejectedOrders`: Exposes CRUD operations for the **RejectedOrders** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RejectedOrders
    * const rejectedOrders = await prisma.rejectedOrders.findMany()
    * ```
    */
  get rejectedOrders(): Prisma.RejectedOrdersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.orderItem`: Exposes CRUD operations for the **OrderItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OrderItems
    * const orderItems = await prisma.orderItem.findMany()
    * ```
    */
  get orderItem(): Prisma.OrderItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.collection`: Exposes CRUD operations for the **Collection** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Collections
    * const collections = await prisma.collection.findMany()
    * ```
    */
  get collection(): Prisma.CollectionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.partyEditRequest`: Exposes CRUD operations for the **PartyEditRequest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PartyEditRequests
    * const partyEditRequests = await prisma.partyEditRequest.findMany()
    * ```
    */
  get partyEditRequest(): Prisma.PartyEditRequestDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.stock`: Exposes CRUD operations for the **Stock** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Stocks
    * const stocks = await prisma.stock.findMany()
    * ```
    */
  get stock(): Prisma.StockDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.stockItem`: Exposes CRUD operations for the **StockItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StockItems
    * const stockItems = await prisma.stockItem.findMany()
    * ```
    */
  get stockItem(): Prisma.StockItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.admin`: Exposes CRUD operations for the **admin** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Admins
    * const admins = await prisma.admin.findMany()
    * ```
    */
  get admin(): Prisma.adminDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.attendance`: Exposes CRUD operations for the **Attendance** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Attendances
    * const attendances = await prisma.attendance.findMany()
    * ```
    */
  get attendance(): Prisma.AttendanceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.dailyRateList`: Exposes CRUD operations for the **DailyRateList** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DailyRateLists
    * const dailyRateLists = await prisma.dailyRateList.findMany()
    * ```
    */
  get dailyRateList(): Prisma.DailyRateListDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.mstemp`: Exposes CRUD operations for the **mstemp** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Mstemps
    * const mstemps = await prisma.mstemp.findMany()
    * ```
    */
  get mstemp(): Prisma.mstempDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.mstparty`: Exposes CRUD operations for the **mstparty** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Mstparties
    * const mstparties = await prisma.mstparty.findMany()
    * ```
    */
  get mstparty(): Prisma.mstpartyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.mstitm`: Exposes CRUD operations for the **mstitm** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Mstitms
    * const mstitms = await prisma.mstitm.findMany()
    * ```
    */
  get mstitm(): Prisma.mstitmDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.outstandingAmt`: Exposes CRUD operations for the **OutstandingAmt** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OutstandingAmts
    * const outstandingAmts = await prisma.outstandingAmt.findMany()
    * ```
    */
  get outstandingAmt(): Prisma.OutstandingAmtDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

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
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    partyImages: 'partyImages',
    Order: 'Order',
    AcceptedOrders: 'AcceptedOrders',
    RejectedOrders: 'RejectedOrders',
    OrderItem: 'OrderItem',
    Collection: 'Collection',
    PartyEditRequest: 'PartyEditRequest',
    Stock: 'Stock',
    StockItem: 'StockItem',
    admin: 'admin',
    Attendance: 'Attendance',
    DailyRateList: 'DailyRateList',
    mstemp: 'mstemp',
    mstparty: 'mstparty',
    mstitm: 'mstitm',
    OutstandingAmt: 'OutstandingAmt'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "partyImages" | "order" | "acceptedOrders" | "rejectedOrders" | "orderItem" | "collection" | "partyEditRequest" | "stock" | "stockItem" | "admin" | "attendance" | "dailyRateList" | "mstemp" | "mstparty" | "mstitm" | "outstandingAmt"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      partyImages: {
        payload: Prisma.$partyImagesPayload<ExtArgs>
        fields: Prisma.partyImagesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.partyImagesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$partyImagesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.partyImagesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$partyImagesPayload>
          }
          findFirst: {
            args: Prisma.partyImagesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$partyImagesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.partyImagesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$partyImagesPayload>
          }
          findMany: {
            args: Prisma.partyImagesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$partyImagesPayload>[]
          }
          create: {
            args: Prisma.partyImagesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$partyImagesPayload>
          }
          createMany: {
            args: Prisma.partyImagesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.partyImagesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$partyImagesPayload>
          }
          update: {
            args: Prisma.partyImagesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$partyImagesPayload>
          }
          deleteMany: {
            args: Prisma.partyImagesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.partyImagesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.partyImagesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$partyImagesPayload>
          }
          aggregate: {
            args: Prisma.PartyImagesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePartyImages>
          }
          groupBy: {
            args: Prisma.partyImagesGroupByArgs<ExtArgs>
            result: $Utils.Optional<PartyImagesGroupByOutputType>[]
          }
          count: {
            args: Prisma.partyImagesCountArgs<ExtArgs>
            result: $Utils.Optional<PartyImagesCountAggregateOutputType> | number
          }
        }
      }
      Order: {
        payload: Prisma.$OrderPayload<ExtArgs>
        fields: Prisma.OrderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          findFirst: {
            args: Prisma.OrderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          findMany: {
            args: Prisma.OrderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          create: {
            args: Prisma.OrderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          createMany: {
            args: Prisma.OrderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.OrderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          update: {
            args: Prisma.OrderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          deleteMany: {
            args: Prisma.OrderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.OrderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          aggregate: {
            args: Prisma.OrderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrder>
          }
          groupBy: {
            args: Prisma.OrderGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrderGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrderCountArgs<ExtArgs>
            result: $Utils.Optional<OrderCountAggregateOutputType> | number
          }
        }
      }
      AcceptedOrders: {
        payload: Prisma.$AcceptedOrdersPayload<ExtArgs>
        fields: Prisma.AcceptedOrdersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AcceptedOrdersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AcceptedOrdersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AcceptedOrdersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AcceptedOrdersPayload>
          }
          findFirst: {
            args: Prisma.AcceptedOrdersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AcceptedOrdersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AcceptedOrdersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AcceptedOrdersPayload>
          }
          findMany: {
            args: Prisma.AcceptedOrdersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AcceptedOrdersPayload>[]
          }
          create: {
            args: Prisma.AcceptedOrdersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AcceptedOrdersPayload>
          }
          createMany: {
            args: Prisma.AcceptedOrdersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AcceptedOrdersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AcceptedOrdersPayload>
          }
          update: {
            args: Prisma.AcceptedOrdersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AcceptedOrdersPayload>
          }
          deleteMany: {
            args: Prisma.AcceptedOrdersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AcceptedOrdersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AcceptedOrdersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AcceptedOrdersPayload>
          }
          aggregate: {
            args: Prisma.AcceptedOrdersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAcceptedOrders>
          }
          groupBy: {
            args: Prisma.AcceptedOrdersGroupByArgs<ExtArgs>
            result: $Utils.Optional<AcceptedOrdersGroupByOutputType>[]
          }
          count: {
            args: Prisma.AcceptedOrdersCountArgs<ExtArgs>
            result: $Utils.Optional<AcceptedOrdersCountAggregateOutputType> | number
          }
        }
      }
      RejectedOrders: {
        payload: Prisma.$RejectedOrdersPayload<ExtArgs>
        fields: Prisma.RejectedOrdersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RejectedOrdersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RejectedOrdersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RejectedOrdersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RejectedOrdersPayload>
          }
          findFirst: {
            args: Prisma.RejectedOrdersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RejectedOrdersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RejectedOrdersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RejectedOrdersPayload>
          }
          findMany: {
            args: Prisma.RejectedOrdersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RejectedOrdersPayload>[]
          }
          create: {
            args: Prisma.RejectedOrdersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RejectedOrdersPayload>
          }
          createMany: {
            args: Prisma.RejectedOrdersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.RejectedOrdersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RejectedOrdersPayload>
          }
          update: {
            args: Prisma.RejectedOrdersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RejectedOrdersPayload>
          }
          deleteMany: {
            args: Prisma.RejectedOrdersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RejectedOrdersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RejectedOrdersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RejectedOrdersPayload>
          }
          aggregate: {
            args: Prisma.RejectedOrdersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRejectedOrders>
          }
          groupBy: {
            args: Prisma.RejectedOrdersGroupByArgs<ExtArgs>
            result: $Utils.Optional<RejectedOrdersGroupByOutputType>[]
          }
          count: {
            args: Prisma.RejectedOrdersCountArgs<ExtArgs>
            result: $Utils.Optional<RejectedOrdersCountAggregateOutputType> | number
          }
        }
      }
      OrderItem: {
        payload: Prisma.$OrderItemPayload<ExtArgs>
        fields: Prisma.OrderItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrderItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrderItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>
          }
          findFirst: {
            args: Prisma.OrderItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrderItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>
          }
          findMany: {
            args: Prisma.OrderItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>[]
          }
          create: {
            args: Prisma.OrderItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>
          }
          createMany: {
            args: Prisma.OrderItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.OrderItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>
          }
          update: {
            args: Prisma.OrderItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>
          }
          deleteMany: {
            args: Prisma.OrderItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrderItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.OrderItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>
          }
          aggregate: {
            args: Prisma.OrderItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrderItem>
          }
          groupBy: {
            args: Prisma.OrderItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrderItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrderItemCountArgs<ExtArgs>
            result: $Utils.Optional<OrderItemCountAggregateOutputType> | number
          }
        }
      }
      Collection: {
        payload: Prisma.$CollectionPayload<ExtArgs>
        fields: Prisma.CollectionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CollectionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollectionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CollectionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollectionPayload>
          }
          findFirst: {
            args: Prisma.CollectionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollectionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CollectionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollectionPayload>
          }
          findMany: {
            args: Prisma.CollectionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollectionPayload>[]
          }
          create: {
            args: Prisma.CollectionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollectionPayload>
          }
          createMany: {
            args: Prisma.CollectionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CollectionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollectionPayload>
          }
          update: {
            args: Prisma.CollectionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollectionPayload>
          }
          deleteMany: {
            args: Prisma.CollectionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CollectionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CollectionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollectionPayload>
          }
          aggregate: {
            args: Prisma.CollectionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCollection>
          }
          groupBy: {
            args: Prisma.CollectionGroupByArgs<ExtArgs>
            result: $Utils.Optional<CollectionGroupByOutputType>[]
          }
          count: {
            args: Prisma.CollectionCountArgs<ExtArgs>
            result: $Utils.Optional<CollectionCountAggregateOutputType> | number
          }
        }
      }
      PartyEditRequest: {
        payload: Prisma.$PartyEditRequestPayload<ExtArgs>
        fields: Prisma.PartyEditRequestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PartyEditRequestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartyEditRequestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PartyEditRequestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartyEditRequestPayload>
          }
          findFirst: {
            args: Prisma.PartyEditRequestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartyEditRequestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PartyEditRequestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartyEditRequestPayload>
          }
          findMany: {
            args: Prisma.PartyEditRequestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartyEditRequestPayload>[]
          }
          create: {
            args: Prisma.PartyEditRequestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartyEditRequestPayload>
          }
          createMany: {
            args: Prisma.PartyEditRequestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PartyEditRequestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartyEditRequestPayload>
          }
          update: {
            args: Prisma.PartyEditRequestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartyEditRequestPayload>
          }
          deleteMany: {
            args: Prisma.PartyEditRequestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PartyEditRequestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PartyEditRequestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartyEditRequestPayload>
          }
          aggregate: {
            args: Prisma.PartyEditRequestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePartyEditRequest>
          }
          groupBy: {
            args: Prisma.PartyEditRequestGroupByArgs<ExtArgs>
            result: $Utils.Optional<PartyEditRequestGroupByOutputType>[]
          }
          count: {
            args: Prisma.PartyEditRequestCountArgs<ExtArgs>
            result: $Utils.Optional<PartyEditRequestCountAggregateOutputType> | number
          }
        }
      }
      Stock: {
        payload: Prisma.$StockPayload<ExtArgs>
        fields: Prisma.StockFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StockFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StockFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockPayload>
          }
          findFirst: {
            args: Prisma.StockFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StockFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockPayload>
          }
          findMany: {
            args: Prisma.StockFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockPayload>[]
          }
          create: {
            args: Prisma.StockCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockPayload>
          }
          createMany: {
            args: Prisma.StockCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.StockDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockPayload>
          }
          update: {
            args: Prisma.StockUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockPayload>
          }
          deleteMany: {
            args: Prisma.StockDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StockUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.StockUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockPayload>
          }
          aggregate: {
            args: Prisma.StockAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStock>
          }
          groupBy: {
            args: Prisma.StockGroupByArgs<ExtArgs>
            result: $Utils.Optional<StockGroupByOutputType>[]
          }
          count: {
            args: Prisma.StockCountArgs<ExtArgs>
            result: $Utils.Optional<StockCountAggregateOutputType> | number
          }
        }
      }
      StockItem: {
        payload: Prisma.$StockItemPayload<ExtArgs>
        fields: Prisma.StockItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StockItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StockItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockItemPayload>
          }
          findFirst: {
            args: Prisma.StockItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StockItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockItemPayload>
          }
          findMany: {
            args: Prisma.StockItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockItemPayload>[]
          }
          create: {
            args: Prisma.StockItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockItemPayload>
          }
          createMany: {
            args: Prisma.StockItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.StockItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockItemPayload>
          }
          update: {
            args: Prisma.StockItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockItemPayload>
          }
          deleteMany: {
            args: Prisma.StockItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StockItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.StockItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockItemPayload>
          }
          aggregate: {
            args: Prisma.StockItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStockItem>
          }
          groupBy: {
            args: Prisma.StockItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<StockItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.StockItemCountArgs<ExtArgs>
            result: $Utils.Optional<StockItemCountAggregateOutputType> | number
          }
        }
      }
      admin: {
        payload: Prisma.$adminPayload<ExtArgs>
        fields: Prisma.adminFieldRefs
        operations: {
          findUnique: {
            args: Prisma.adminFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.adminFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminPayload>
          }
          findFirst: {
            args: Prisma.adminFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.adminFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminPayload>
          }
          findMany: {
            args: Prisma.adminFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminPayload>[]
          }
          create: {
            args: Prisma.adminCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminPayload>
          }
          createMany: {
            args: Prisma.adminCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.adminDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminPayload>
          }
          update: {
            args: Prisma.adminUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminPayload>
          }
          deleteMany: {
            args: Prisma.adminDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.adminUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.adminUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminPayload>
          }
          aggregate: {
            args: Prisma.AdminAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdmin>
          }
          groupBy: {
            args: Prisma.adminGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdminGroupByOutputType>[]
          }
          count: {
            args: Prisma.adminCountArgs<ExtArgs>
            result: $Utils.Optional<AdminCountAggregateOutputType> | number
          }
        }
      }
      Attendance: {
        payload: Prisma.$AttendancePayload<ExtArgs>
        fields: Prisma.AttendanceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AttendanceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AttendanceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>
          }
          findFirst: {
            args: Prisma.AttendanceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AttendanceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>
          }
          findMany: {
            args: Prisma.AttendanceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>[]
          }
          create: {
            args: Prisma.AttendanceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>
          }
          createMany: {
            args: Prisma.AttendanceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AttendanceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>
          }
          update: {
            args: Prisma.AttendanceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>
          }
          deleteMany: {
            args: Prisma.AttendanceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AttendanceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AttendanceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>
          }
          aggregate: {
            args: Prisma.AttendanceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAttendance>
          }
          groupBy: {
            args: Prisma.AttendanceGroupByArgs<ExtArgs>
            result: $Utils.Optional<AttendanceGroupByOutputType>[]
          }
          count: {
            args: Prisma.AttendanceCountArgs<ExtArgs>
            result: $Utils.Optional<AttendanceCountAggregateOutputType> | number
          }
        }
      }
      DailyRateList: {
        payload: Prisma.$DailyRateListPayload<ExtArgs>
        fields: Prisma.DailyRateListFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DailyRateListFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyRateListPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DailyRateListFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyRateListPayload>
          }
          findFirst: {
            args: Prisma.DailyRateListFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyRateListPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DailyRateListFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyRateListPayload>
          }
          findMany: {
            args: Prisma.DailyRateListFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyRateListPayload>[]
          }
          create: {
            args: Prisma.DailyRateListCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyRateListPayload>
          }
          createMany: {
            args: Prisma.DailyRateListCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.DailyRateListDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyRateListPayload>
          }
          update: {
            args: Prisma.DailyRateListUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyRateListPayload>
          }
          deleteMany: {
            args: Prisma.DailyRateListDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DailyRateListUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DailyRateListUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyRateListPayload>
          }
          aggregate: {
            args: Prisma.DailyRateListAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDailyRateList>
          }
          groupBy: {
            args: Prisma.DailyRateListGroupByArgs<ExtArgs>
            result: $Utils.Optional<DailyRateListGroupByOutputType>[]
          }
          count: {
            args: Prisma.DailyRateListCountArgs<ExtArgs>
            result: $Utils.Optional<DailyRateListCountAggregateOutputType> | number
          }
        }
      }
      mstemp: {
        payload: Prisma.$mstempPayload<ExtArgs>
        fields: Prisma.mstempFieldRefs
        operations: {
          findUnique: {
            args: Prisma.mstempFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mstempPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.mstempFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mstempPayload>
          }
          findFirst: {
            args: Prisma.mstempFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mstempPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.mstempFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mstempPayload>
          }
          findMany: {
            args: Prisma.mstempFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mstempPayload>[]
          }
          create: {
            args: Prisma.mstempCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mstempPayload>
          }
          createMany: {
            args: Prisma.mstempCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.mstempDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mstempPayload>
          }
          update: {
            args: Prisma.mstempUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mstempPayload>
          }
          deleteMany: {
            args: Prisma.mstempDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.mstempUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.mstempUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mstempPayload>
          }
          aggregate: {
            args: Prisma.MstempAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMstemp>
          }
          groupBy: {
            args: Prisma.mstempGroupByArgs<ExtArgs>
            result: $Utils.Optional<MstempGroupByOutputType>[]
          }
          count: {
            args: Prisma.mstempCountArgs<ExtArgs>
            result: $Utils.Optional<MstempCountAggregateOutputType> | number
          }
        }
      }
      mstparty: {
        payload: Prisma.$mstpartyPayload<ExtArgs>
        fields: Prisma.mstpartyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.mstpartyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mstpartyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.mstpartyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mstpartyPayload>
          }
          findFirst: {
            args: Prisma.mstpartyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mstpartyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.mstpartyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mstpartyPayload>
          }
          findMany: {
            args: Prisma.mstpartyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mstpartyPayload>[]
          }
          create: {
            args: Prisma.mstpartyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mstpartyPayload>
          }
          createMany: {
            args: Prisma.mstpartyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.mstpartyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mstpartyPayload>
          }
          update: {
            args: Prisma.mstpartyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mstpartyPayload>
          }
          deleteMany: {
            args: Prisma.mstpartyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.mstpartyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.mstpartyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mstpartyPayload>
          }
          aggregate: {
            args: Prisma.MstpartyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMstparty>
          }
          groupBy: {
            args: Prisma.mstpartyGroupByArgs<ExtArgs>
            result: $Utils.Optional<MstpartyGroupByOutputType>[]
          }
          count: {
            args: Prisma.mstpartyCountArgs<ExtArgs>
            result: $Utils.Optional<MstpartyCountAggregateOutputType> | number
          }
        }
      }
      mstitm: {
        payload: Prisma.$mstitmPayload<ExtArgs>
        fields: Prisma.mstitmFieldRefs
        operations: {
          findUnique: {
            args: Prisma.mstitmFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mstitmPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.mstitmFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mstitmPayload>
          }
          findFirst: {
            args: Prisma.mstitmFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mstitmPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.mstitmFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mstitmPayload>
          }
          findMany: {
            args: Prisma.mstitmFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mstitmPayload>[]
          }
          create: {
            args: Prisma.mstitmCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mstitmPayload>
          }
          createMany: {
            args: Prisma.mstitmCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.mstitmDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mstitmPayload>
          }
          update: {
            args: Prisma.mstitmUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mstitmPayload>
          }
          deleteMany: {
            args: Prisma.mstitmDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.mstitmUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.mstitmUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mstitmPayload>
          }
          aggregate: {
            args: Prisma.MstitmAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMstitm>
          }
          groupBy: {
            args: Prisma.mstitmGroupByArgs<ExtArgs>
            result: $Utils.Optional<MstitmGroupByOutputType>[]
          }
          count: {
            args: Prisma.mstitmCountArgs<ExtArgs>
            result: $Utils.Optional<MstitmCountAggregateOutputType> | number
          }
        }
      }
      OutstandingAmt: {
        payload: Prisma.$OutstandingAmtPayload<ExtArgs>
        fields: Prisma.OutstandingAmtFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OutstandingAmtFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutstandingAmtPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OutstandingAmtFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutstandingAmtPayload>
          }
          findFirst: {
            args: Prisma.OutstandingAmtFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutstandingAmtPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OutstandingAmtFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutstandingAmtPayload>
          }
          findMany: {
            args: Prisma.OutstandingAmtFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutstandingAmtPayload>[]
          }
          create: {
            args: Prisma.OutstandingAmtCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutstandingAmtPayload>
          }
          createMany: {
            args: Prisma.OutstandingAmtCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.OutstandingAmtDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutstandingAmtPayload>
          }
          update: {
            args: Prisma.OutstandingAmtUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutstandingAmtPayload>
          }
          deleteMany: {
            args: Prisma.OutstandingAmtDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OutstandingAmtUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.OutstandingAmtUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutstandingAmtPayload>
          }
          aggregate: {
            args: Prisma.OutstandingAmtAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOutstandingAmt>
          }
          groupBy: {
            args: Prisma.OutstandingAmtGroupByArgs<ExtArgs>
            result: $Utils.Optional<OutstandingAmtGroupByOutputType>[]
          }
          count: {
            args: Prisma.OutstandingAmtCountArgs<ExtArgs>
            result: $Utils.Optional<OutstandingAmtCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
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
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    partyImages?: partyImagesOmit
    order?: OrderOmit
    acceptedOrders?: AcceptedOrdersOmit
    rejectedOrders?: RejectedOrdersOmit
    orderItem?: OrderItemOmit
    collection?: CollectionOmit
    partyEditRequest?: PartyEditRequestOmit
    stock?: StockOmit
    stockItem?: StockItemOmit
    admin?: adminOmit
    attendance?: AttendanceOmit
    dailyRateList?: DailyRateListOmit
    mstemp?: mstempOmit
    mstparty?: mstpartyOmit
    mstitm?: mstitmOmit
    outstandingAmt?: OutstandingAmtOmit
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
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

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
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

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
    attendance: number
    partyImages: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    attendance?: boolean | UserCountOutputTypeCountAttendanceArgs
    partyImages?: boolean | UserCountOutputTypeCountPartyImagesArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAttendanceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttendanceWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPartyImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: partyImagesWhereInput
  }


  /**
   * Count Type OrderCountOutputType
   */

  export type OrderCountOutputType = {
    orderItems: number
  }

  export type OrderCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orderItems?: boolean | OrderCountOutputTypeCountOrderItemsArgs
  }

  // Custom InputTypes
  /**
   * OrderCountOutputType without action
   */
  export type OrderCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderCountOutputType
     */
    select?: OrderCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OrderCountOutputType without action
   */
  export type OrderCountOutputTypeCountOrderItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderItemWhereInput
  }


  /**
   * Count Type StockCountOutputType
   */

  export type StockCountOutputType = {
    stockItems: number
  }

  export type StockCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    stockItems?: boolean | StockCountOutputTypeCountStockItemsArgs
  }

  // Custom InputTypes
  /**
   * StockCountOutputType without action
   */
  export type StockCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockCountOutputType
     */
    select?: StockCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StockCountOutputType without action
   */
  export type StockCountOutputTypeCountStockItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StockItemWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    user_id: number | null
  }

  export type UserSumAggregateOutputType = {
    user_id: number | null
  }

  export type UserMinAggregateOutputType = {
    user_id: number | null
    username: string | null
    password: string | null
    untcd: string | null
    stcd: string | null
    stnm: string | null
    untnm: string | null
    usrnm: string | null
  }

  export type UserMaxAggregateOutputType = {
    user_id: number | null
    username: string | null
    password: string | null
    untcd: string | null
    stcd: string | null
    stnm: string | null
    untnm: string | null
    usrnm: string | null
  }

  export type UserCountAggregateOutputType = {
    user_id: number
    username: number
    password: number
    untcd: number
    stcd: number
    stnm: number
    untnm: number
    usrnm: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    user_id?: true
  }

  export type UserSumAggregateInputType = {
    user_id?: true
  }

  export type UserMinAggregateInputType = {
    user_id?: true
    username?: true
    password?: true
    untcd?: true
    stcd?: true
    stnm?: true
    untnm?: true
    usrnm?: true
  }

  export type UserMaxAggregateInputType = {
    user_id?: true
    username?: true
    password?: true
    untcd?: true
    stcd?: true
    stnm?: true
    untnm?: true
    usrnm?: true
  }

  export type UserCountAggregateInputType = {
    user_id?: true
    username?: true
    password?: true
    untcd?: true
    stcd?: true
    stnm?: true
    untnm?: true
    usrnm?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
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
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
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




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    user_id: number
    username: string
    password: string
    untcd: string
    stcd: string
    stnm: string
    untnm: string
    usrnm: string
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    username?: boolean
    password?: boolean
    untcd?: boolean
    stcd?: boolean
    stnm?: boolean
    untnm?: boolean
    usrnm?: boolean
    attendance?: boolean | User$attendanceArgs<ExtArgs>
    partyImages?: boolean | User$partyImagesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    user_id?: boolean
    username?: boolean
    password?: boolean
    untcd?: boolean
    stcd?: boolean
    stnm?: boolean
    untnm?: boolean
    usrnm?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"user_id" | "username" | "password" | "untcd" | "stcd" | "stnm" | "untnm" | "usrnm", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    attendance?: boolean | User$attendanceArgs<ExtArgs>
    partyImages?: boolean | User$partyImagesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      attendance: Prisma.$AttendancePayload<ExtArgs>[]
      partyImages: Prisma.$partyImagesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      user_id: number
      username: string
      password: string
      untcd: string
      stcd: string
      stnm: string
      untnm: string
      usrnm: string
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
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
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
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
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `user_id`
     * const userWithUser_idOnly = await prisma.user.findMany({ select: { user_id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

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
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

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
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

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
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

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
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


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
      T extends $Utils.Record<'select', any>
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
      ByFields extends MaybeTupleToUnion<T['by']>,
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
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    attendance<T extends User$attendanceArgs<ExtArgs> = {}>(args?: Subset<T, User$attendanceArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    partyImages<T extends User$partyImagesArgs<ExtArgs> = {}>(args?: Subset<T, User$partyImagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$partyImagesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly user_id: FieldRef<"User", 'Int'>
    readonly username: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly untcd: FieldRef<"User", 'String'>
    readonly stcd: FieldRef<"User", 'String'>
    readonly stnm: FieldRef<"User", 'String'>
    readonly untnm: FieldRef<"User", 'String'>
    readonly usrnm: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
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
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
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
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
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
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.attendance
   */
  export type User$attendanceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    where?: AttendanceWhereInput
    orderBy?: AttendanceOrderByWithRelationInput | AttendanceOrderByWithRelationInput[]
    cursor?: AttendanceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AttendanceScalarFieldEnum | AttendanceScalarFieldEnum[]
  }

  /**
   * User.partyImages
   */
  export type User$partyImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the partyImages
     */
    select?: partyImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the partyImages
     */
    omit?: partyImagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: partyImagesInclude<ExtArgs> | null
    where?: partyImagesWhereInput
    orderBy?: partyImagesOrderByWithRelationInput | partyImagesOrderByWithRelationInput[]
    cursor?: partyImagesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PartyImagesScalarFieldEnum | PartyImagesScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model partyImages
   */

  export type AggregatePartyImages = {
    _count: PartyImagesCountAggregateOutputType | null
    _min: PartyImagesMinAggregateOutputType | null
    _max: PartyImagesMaxAggregateOutputType | null
  }

  export type PartyImagesMinAggregateOutputType = {
    image_id: string | null
    partyId: string | null
    createdAt: Date | null
    imageUrl2: string | null
    imageUrl3: string | null
    profileImageUrl: string | null
    userId: string | null
  }

  export type PartyImagesMaxAggregateOutputType = {
    image_id: string | null
    partyId: string | null
    createdAt: Date | null
    imageUrl2: string | null
    imageUrl3: string | null
    profileImageUrl: string | null
    userId: string | null
  }

  export type PartyImagesCountAggregateOutputType = {
    image_id: number
    partyId: number
    createdAt: number
    imageUrl2: number
    imageUrl3: number
    profileImageUrl: number
    userId: number
    _all: number
  }


  export type PartyImagesMinAggregateInputType = {
    image_id?: true
    partyId?: true
    createdAt?: true
    imageUrl2?: true
    imageUrl3?: true
    profileImageUrl?: true
    userId?: true
  }

  export type PartyImagesMaxAggregateInputType = {
    image_id?: true
    partyId?: true
    createdAt?: true
    imageUrl2?: true
    imageUrl3?: true
    profileImageUrl?: true
    userId?: true
  }

  export type PartyImagesCountAggregateInputType = {
    image_id?: true
    partyId?: true
    createdAt?: true
    imageUrl2?: true
    imageUrl3?: true
    profileImageUrl?: true
    userId?: true
    _all?: true
  }

  export type PartyImagesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which partyImages to aggregate.
     */
    where?: partyImagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of partyImages to fetch.
     */
    orderBy?: partyImagesOrderByWithRelationInput | partyImagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: partyImagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` partyImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` partyImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned partyImages
    **/
    _count?: true | PartyImagesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PartyImagesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PartyImagesMaxAggregateInputType
  }

  export type GetPartyImagesAggregateType<T extends PartyImagesAggregateArgs> = {
        [P in keyof T & keyof AggregatePartyImages]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePartyImages[P]>
      : GetScalarType<T[P], AggregatePartyImages[P]>
  }




  export type partyImagesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: partyImagesWhereInput
    orderBy?: partyImagesOrderByWithAggregationInput | partyImagesOrderByWithAggregationInput[]
    by: PartyImagesScalarFieldEnum[] | PartyImagesScalarFieldEnum
    having?: partyImagesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PartyImagesCountAggregateInputType | true
    _min?: PartyImagesMinAggregateInputType
    _max?: PartyImagesMaxAggregateInputType
  }

  export type PartyImagesGroupByOutputType = {
    image_id: string
    partyId: string
    createdAt: Date
    imageUrl2: string | null
    imageUrl3: string | null
    profileImageUrl: string
    userId: string | null
    _count: PartyImagesCountAggregateOutputType | null
    _min: PartyImagesMinAggregateOutputType | null
    _max: PartyImagesMaxAggregateOutputType | null
  }

  type GetPartyImagesGroupByPayload<T extends partyImagesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PartyImagesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PartyImagesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PartyImagesGroupByOutputType[P]>
            : GetScalarType<T[P], PartyImagesGroupByOutputType[P]>
        }
      >
    >


  export type partyImagesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    image_id?: boolean
    partyId?: boolean
    createdAt?: boolean
    imageUrl2?: boolean
    imageUrl3?: boolean
    profileImageUrl?: boolean
    userId?: boolean
    user?: boolean | partyImages$userArgs<ExtArgs>
  }, ExtArgs["result"]["partyImages"]>



  export type partyImagesSelectScalar = {
    image_id?: boolean
    partyId?: boolean
    createdAt?: boolean
    imageUrl2?: boolean
    imageUrl3?: boolean
    profileImageUrl?: boolean
    userId?: boolean
  }

  export type partyImagesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"image_id" | "partyId" | "createdAt" | "imageUrl2" | "imageUrl3" | "profileImageUrl" | "userId", ExtArgs["result"]["partyImages"]>
  export type partyImagesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | partyImages$userArgs<ExtArgs>
  }

  export type $partyImagesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "partyImages"
    objects: {
      user: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      image_id: string
      partyId: string
      createdAt: Date
      imageUrl2: string | null
      imageUrl3: string | null
      profileImageUrl: string
      userId: string | null
    }, ExtArgs["result"]["partyImages"]>
    composites: {}
  }

  type partyImagesGetPayload<S extends boolean | null | undefined | partyImagesDefaultArgs> = $Result.GetResult<Prisma.$partyImagesPayload, S>

  type partyImagesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<partyImagesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PartyImagesCountAggregateInputType | true
    }

  export interface partyImagesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['partyImages'], meta: { name: 'partyImages' } }
    /**
     * Find zero or one PartyImages that matches the filter.
     * @param {partyImagesFindUniqueArgs} args - Arguments to find a PartyImages
     * @example
     * // Get one PartyImages
     * const partyImages = await prisma.partyImages.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends partyImagesFindUniqueArgs>(args: SelectSubset<T, partyImagesFindUniqueArgs<ExtArgs>>): Prisma__partyImagesClient<$Result.GetResult<Prisma.$partyImagesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PartyImages that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {partyImagesFindUniqueOrThrowArgs} args - Arguments to find a PartyImages
     * @example
     * // Get one PartyImages
     * const partyImages = await prisma.partyImages.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends partyImagesFindUniqueOrThrowArgs>(args: SelectSubset<T, partyImagesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__partyImagesClient<$Result.GetResult<Prisma.$partyImagesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PartyImages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {partyImagesFindFirstArgs} args - Arguments to find a PartyImages
     * @example
     * // Get one PartyImages
     * const partyImages = await prisma.partyImages.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends partyImagesFindFirstArgs>(args?: SelectSubset<T, partyImagesFindFirstArgs<ExtArgs>>): Prisma__partyImagesClient<$Result.GetResult<Prisma.$partyImagesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PartyImages that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {partyImagesFindFirstOrThrowArgs} args - Arguments to find a PartyImages
     * @example
     * // Get one PartyImages
     * const partyImages = await prisma.partyImages.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends partyImagesFindFirstOrThrowArgs>(args?: SelectSubset<T, partyImagesFindFirstOrThrowArgs<ExtArgs>>): Prisma__partyImagesClient<$Result.GetResult<Prisma.$partyImagesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PartyImages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {partyImagesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PartyImages
     * const partyImages = await prisma.partyImages.findMany()
     * 
     * // Get first 10 PartyImages
     * const partyImages = await prisma.partyImages.findMany({ take: 10 })
     * 
     * // Only select the `image_id`
     * const partyImagesWithImage_idOnly = await prisma.partyImages.findMany({ select: { image_id: true } })
     * 
     */
    findMany<T extends partyImagesFindManyArgs>(args?: SelectSubset<T, partyImagesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$partyImagesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PartyImages.
     * @param {partyImagesCreateArgs} args - Arguments to create a PartyImages.
     * @example
     * // Create one PartyImages
     * const PartyImages = await prisma.partyImages.create({
     *   data: {
     *     // ... data to create a PartyImages
     *   }
     * })
     * 
     */
    create<T extends partyImagesCreateArgs>(args: SelectSubset<T, partyImagesCreateArgs<ExtArgs>>): Prisma__partyImagesClient<$Result.GetResult<Prisma.$partyImagesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PartyImages.
     * @param {partyImagesCreateManyArgs} args - Arguments to create many PartyImages.
     * @example
     * // Create many PartyImages
     * const partyImages = await prisma.partyImages.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends partyImagesCreateManyArgs>(args?: SelectSubset<T, partyImagesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a PartyImages.
     * @param {partyImagesDeleteArgs} args - Arguments to delete one PartyImages.
     * @example
     * // Delete one PartyImages
     * const PartyImages = await prisma.partyImages.delete({
     *   where: {
     *     // ... filter to delete one PartyImages
     *   }
     * })
     * 
     */
    delete<T extends partyImagesDeleteArgs>(args: SelectSubset<T, partyImagesDeleteArgs<ExtArgs>>): Prisma__partyImagesClient<$Result.GetResult<Prisma.$partyImagesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PartyImages.
     * @param {partyImagesUpdateArgs} args - Arguments to update one PartyImages.
     * @example
     * // Update one PartyImages
     * const partyImages = await prisma.partyImages.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends partyImagesUpdateArgs>(args: SelectSubset<T, partyImagesUpdateArgs<ExtArgs>>): Prisma__partyImagesClient<$Result.GetResult<Prisma.$partyImagesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PartyImages.
     * @param {partyImagesDeleteManyArgs} args - Arguments to filter PartyImages to delete.
     * @example
     * // Delete a few PartyImages
     * const { count } = await prisma.partyImages.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends partyImagesDeleteManyArgs>(args?: SelectSubset<T, partyImagesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PartyImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {partyImagesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PartyImages
     * const partyImages = await prisma.partyImages.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends partyImagesUpdateManyArgs>(args: SelectSubset<T, partyImagesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PartyImages.
     * @param {partyImagesUpsertArgs} args - Arguments to update or create a PartyImages.
     * @example
     * // Update or create a PartyImages
     * const partyImages = await prisma.partyImages.upsert({
     *   create: {
     *     // ... data to create a PartyImages
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PartyImages we want to update
     *   }
     * })
     */
    upsert<T extends partyImagesUpsertArgs>(args: SelectSubset<T, partyImagesUpsertArgs<ExtArgs>>): Prisma__partyImagesClient<$Result.GetResult<Prisma.$partyImagesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PartyImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {partyImagesCountArgs} args - Arguments to filter PartyImages to count.
     * @example
     * // Count the number of PartyImages
     * const count = await prisma.partyImages.count({
     *   where: {
     *     // ... the filter for the PartyImages we want to count
     *   }
     * })
    **/
    count<T extends partyImagesCountArgs>(
      args?: Subset<T, partyImagesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PartyImagesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PartyImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartyImagesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PartyImagesAggregateArgs>(args: Subset<T, PartyImagesAggregateArgs>): Prisma.PrismaPromise<GetPartyImagesAggregateType<T>>

    /**
     * Group by PartyImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {partyImagesGroupByArgs} args - Group by arguments.
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
      T extends partyImagesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: partyImagesGroupByArgs['orderBy'] }
        : { orderBy?: partyImagesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, partyImagesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPartyImagesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the partyImages model
   */
  readonly fields: partyImagesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for partyImages.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__partyImagesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends partyImages$userArgs<ExtArgs> = {}>(args?: Subset<T, partyImages$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the partyImages model
   */
  interface partyImagesFieldRefs {
    readonly image_id: FieldRef<"partyImages", 'String'>
    readonly partyId: FieldRef<"partyImages", 'String'>
    readonly createdAt: FieldRef<"partyImages", 'DateTime'>
    readonly imageUrl2: FieldRef<"partyImages", 'String'>
    readonly imageUrl3: FieldRef<"partyImages", 'String'>
    readonly profileImageUrl: FieldRef<"partyImages", 'String'>
    readonly userId: FieldRef<"partyImages", 'String'>
  }
    

  // Custom InputTypes
  /**
   * partyImages findUnique
   */
  export type partyImagesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the partyImages
     */
    select?: partyImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the partyImages
     */
    omit?: partyImagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: partyImagesInclude<ExtArgs> | null
    /**
     * Filter, which partyImages to fetch.
     */
    where: partyImagesWhereUniqueInput
  }

  /**
   * partyImages findUniqueOrThrow
   */
  export type partyImagesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the partyImages
     */
    select?: partyImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the partyImages
     */
    omit?: partyImagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: partyImagesInclude<ExtArgs> | null
    /**
     * Filter, which partyImages to fetch.
     */
    where: partyImagesWhereUniqueInput
  }

  /**
   * partyImages findFirst
   */
  export type partyImagesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the partyImages
     */
    select?: partyImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the partyImages
     */
    omit?: partyImagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: partyImagesInclude<ExtArgs> | null
    /**
     * Filter, which partyImages to fetch.
     */
    where?: partyImagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of partyImages to fetch.
     */
    orderBy?: partyImagesOrderByWithRelationInput | partyImagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for partyImages.
     */
    cursor?: partyImagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` partyImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` partyImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of partyImages.
     */
    distinct?: PartyImagesScalarFieldEnum | PartyImagesScalarFieldEnum[]
  }

  /**
   * partyImages findFirstOrThrow
   */
  export type partyImagesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the partyImages
     */
    select?: partyImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the partyImages
     */
    omit?: partyImagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: partyImagesInclude<ExtArgs> | null
    /**
     * Filter, which partyImages to fetch.
     */
    where?: partyImagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of partyImages to fetch.
     */
    orderBy?: partyImagesOrderByWithRelationInput | partyImagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for partyImages.
     */
    cursor?: partyImagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` partyImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` partyImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of partyImages.
     */
    distinct?: PartyImagesScalarFieldEnum | PartyImagesScalarFieldEnum[]
  }

  /**
   * partyImages findMany
   */
  export type partyImagesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the partyImages
     */
    select?: partyImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the partyImages
     */
    omit?: partyImagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: partyImagesInclude<ExtArgs> | null
    /**
     * Filter, which partyImages to fetch.
     */
    where?: partyImagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of partyImages to fetch.
     */
    orderBy?: partyImagesOrderByWithRelationInput | partyImagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing partyImages.
     */
    cursor?: partyImagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` partyImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` partyImages.
     */
    skip?: number
    distinct?: PartyImagesScalarFieldEnum | PartyImagesScalarFieldEnum[]
  }

  /**
   * partyImages create
   */
  export type partyImagesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the partyImages
     */
    select?: partyImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the partyImages
     */
    omit?: partyImagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: partyImagesInclude<ExtArgs> | null
    /**
     * The data needed to create a partyImages.
     */
    data: XOR<partyImagesCreateInput, partyImagesUncheckedCreateInput>
  }

  /**
   * partyImages createMany
   */
  export type partyImagesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many partyImages.
     */
    data: partyImagesCreateManyInput | partyImagesCreateManyInput[]
  }

  /**
   * partyImages update
   */
  export type partyImagesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the partyImages
     */
    select?: partyImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the partyImages
     */
    omit?: partyImagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: partyImagesInclude<ExtArgs> | null
    /**
     * The data needed to update a partyImages.
     */
    data: XOR<partyImagesUpdateInput, partyImagesUncheckedUpdateInput>
    /**
     * Choose, which partyImages to update.
     */
    where: partyImagesWhereUniqueInput
  }

  /**
   * partyImages updateMany
   */
  export type partyImagesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update partyImages.
     */
    data: XOR<partyImagesUpdateManyMutationInput, partyImagesUncheckedUpdateManyInput>
    /**
     * Filter which partyImages to update
     */
    where?: partyImagesWhereInput
    /**
     * Limit how many partyImages to update.
     */
    limit?: number
  }

  /**
   * partyImages upsert
   */
  export type partyImagesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the partyImages
     */
    select?: partyImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the partyImages
     */
    omit?: partyImagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: partyImagesInclude<ExtArgs> | null
    /**
     * The filter to search for the partyImages to update in case it exists.
     */
    where: partyImagesWhereUniqueInput
    /**
     * In case the partyImages found by the `where` argument doesn't exist, create a new partyImages with this data.
     */
    create: XOR<partyImagesCreateInput, partyImagesUncheckedCreateInput>
    /**
     * In case the partyImages was found with the provided `where` argument, update it with this data.
     */
    update: XOR<partyImagesUpdateInput, partyImagesUncheckedUpdateInput>
  }

  /**
   * partyImages delete
   */
  export type partyImagesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the partyImages
     */
    select?: partyImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the partyImages
     */
    omit?: partyImagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: partyImagesInclude<ExtArgs> | null
    /**
     * Filter which partyImages to delete.
     */
    where: partyImagesWhereUniqueInput
  }

  /**
   * partyImages deleteMany
   */
  export type partyImagesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which partyImages to delete
     */
    where?: partyImagesWhereInput
    /**
     * Limit how many partyImages to delete.
     */
    limit?: number
  }

  /**
   * partyImages.user
   */
  export type partyImages$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * partyImages without action
   */
  export type partyImagesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the partyImages
     */
    select?: partyImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the partyImages
     */
    omit?: partyImagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: partyImagesInclude<ExtArgs> | null
  }


  /**
   * Model Order
   */

  export type AggregateOrder = {
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  export type OrderAvgAggregateOutputType = {
    totalAmount: Decimal | null
    discountAmount: Decimal | null
    creditDays: number | null
    bulkRate: Decimal | null
    consumerRate: Decimal | null
  }

  export type OrderSumAggregateOutputType = {
    totalAmount: Decimal | null
    discountAmount: Decimal | null
    creditDays: number | null
    bulkRate: Decimal | null
    consumerRate: Decimal | null
  }

  export type OrderMinAggregateOutputType = {
    order_id: string | null
    partyId: string | null
    partyName: string | null
    empId: string | null
    totalAmount: Decimal | null
    discountAmount: Decimal | null
    createdAt: Date | null
    creditDays: number | null
    paymentMode: string | null
    status: string | null
    bulkRate: Decimal | null
    consumerRate: Decimal | null
  }

  export type OrderMaxAggregateOutputType = {
    order_id: string | null
    partyId: string | null
    partyName: string | null
    empId: string | null
    totalAmount: Decimal | null
    discountAmount: Decimal | null
    createdAt: Date | null
    creditDays: number | null
    paymentMode: string | null
    status: string | null
    bulkRate: Decimal | null
    consumerRate: Decimal | null
  }

  export type OrderCountAggregateOutputType = {
    order_id: number
    partyId: number
    partyName: number
    empId: number
    totalAmount: number
    discountAmount: number
    createdAt: number
    creditDays: number
    paymentMode: number
    status: number
    bulkRate: number
    consumerRate: number
    _all: number
  }


  export type OrderAvgAggregateInputType = {
    totalAmount?: true
    discountAmount?: true
    creditDays?: true
    bulkRate?: true
    consumerRate?: true
  }

  export type OrderSumAggregateInputType = {
    totalAmount?: true
    discountAmount?: true
    creditDays?: true
    bulkRate?: true
    consumerRate?: true
  }

  export type OrderMinAggregateInputType = {
    order_id?: true
    partyId?: true
    partyName?: true
    empId?: true
    totalAmount?: true
    discountAmount?: true
    createdAt?: true
    creditDays?: true
    paymentMode?: true
    status?: true
    bulkRate?: true
    consumerRate?: true
  }

  export type OrderMaxAggregateInputType = {
    order_id?: true
    partyId?: true
    partyName?: true
    empId?: true
    totalAmount?: true
    discountAmount?: true
    createdAt?: true
    creditDays?: true
    paymentMode?: true
    status?: true
    bulkRate?: true
    consumerRate?: true
  }

  export type OrderCountAggregateInputType = {
    order_id?: true
    partyId?: true
    partyName?: true
    empId?: true
    totalAmount?: true
    discountAmount?: true
    createdAt?: true
    creditDays?: true
    paymentMode?: true
    status?: true
    bulkRate?: true
    consumerRate?: true
    _all?: true
  }

  export type OrderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Order to aggregate.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Orders
    **/
    _count?: true | OrderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrderAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrderSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderMaxAggregateInputType
  }

  export type GetOrderAggregateType<T extends OrderAggregateArgs> = {
        [P in keyof T & keyof AggregateOrder]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrder[P]>
      : GetScalarType<T[P], AggregateOrder[P]>
  }




  export type OrderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithAggregationInput | OrderOrderByWithAggregationInput[]
    by: OrderScalarFieldEnum[] | OrderScalarFieldEnum
    having?: OrderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderCountAggregateInputType | true
    _avg?: OrderAvgAggregateInputType
    _sum?: OrderSumAggregateInputType
    _min?: OrderMinAggregateInputType
    _max?: OrderMaxAggregateInputType
  }

  export type OrderGroupByOutputType = {
    order_id: string
    partyId: string
    partyName: string
    empId: string
    totalAmount: Decimal
    discountAmount: Decimal
    createdAt: Date
    creditDays: number | null
    paymentMode: string
    status: string
    bulkRate: Decimal | null
    consumerRate: Decimal | null
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  type GetOrderGroupByPayload<T extends OrderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderGroupByOutputType[P]>
            : GetScalarType<T[P], OrderGroupByOutputType[P]>
        }
      >
    >


  export type OrderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    order_id?: boolean
    partyId?: boolean
    partyName?: boolean
    empId?: boolean
    totalAmount?: boolean
    discountAmount?: boolean
    createdAt?: boolean
    creditDays?: boolean
    paymentMode?: boolean
    status?: boolean
    bulkRate?: boolean
    consumerRate?: boolean
    accept?: boolean | Order$acceptArgs<ExtArgs>
    orderItems?: boolean | Order$orderItemsArgs<ExtArgs>
    reject?: boolean | Order$rejectArgs<ExtArgs>
    _count?: boolean | OrderCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>



  export type OrderSelectScalar = {
    order_id?: boolean
    partyId?: boolean
    partyName?: boolean
    empId?: boolean
    totalAmount?: boolean
    discountAmount?: boolean
    createdAt?: boolean
    creditDays?: boolean
    paymentMode?: boolean
    status?: boolean
    bulkRate?: boolean
    consumerRate?: boolean
  }

  export type OrderOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"order_id" | "partyId" | "partyName" | "empId" | "totalAmount" | "discountAmount" | "createdAt" | "creditDays" | "paymentMode" | "status" | "bulkRate" | "consumerRate", ExtArgs["result"]["order"]>
  export type OrderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accept?: boolean | Order$acceptArgs<ExtArgs>
    orderItems?: boolean | Order$orderItemsArgs<ExtArgs>
    reject?: boolean | Order$rejectArgs<ExtArgs>
    _count?: boolean | OrderCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $OrderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Order"
    objects: {
      accept: Prisma.$AcceptedOrdersPayload<ExtArgs> | null
      orderItems: Prisma.$OrderItemPayload<ExtArgs>[]
      reject: Prisma.$RejectedOrdersPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      order_id: string
      partyId: string
      partyName: string
      empId: string
      totalAmount: Prisma.Decimal
      discountAmount: Prisma.Decimal
      createdAt: Date
      creditDays: number | null
      paymentMode: string
      status: string
      bulkRate: Prisma.Decimal | null
      consumerRate: Prisma.Decimal | null
    }, ExtArgs["result"]["order"]>
    composites: {}
  }

  type OrderGetPayload<S extends boolean | null | undefined | OrderDefaultArgs> = $Result.GetResult<Prisma.$OrderPayload, S>

  type OrderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrderCountAggregateInputType | true
    }

  export interface OrderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Order'], meta: { name: 'Order' } }
    /**
     * Find zero or one Order that matches the filter.
     * @param {OrderFindUniqueArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrderFindUniqueArgs>(args: SelectSubset<T, OrderFindUniqueArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Order that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrderFindUniqueOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrderFindUniqueOrThrowArgs>(args: SelectSubset<T, OrderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Order that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrderFindFirstArgs>(args?: SelectSubset<T, OrderFindFirstArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Order that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrderFindFirstOrThrowArgs>(args?: SelectSubset<T, OrderFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Orders
     * const orders = await prisma.order.findMany()
     * 
     * // Get first 10 Orders
     * const orders = await prisma.order.findMany({ take: 10 })
     * 
     * // Only select the `order_id`
     * const orderWithOrder_idOnly = await prisma.order.findMany({ select: { order_id: true } })
     * 
     */
    findMany<T extends OrderFindManyArgs>(args?: SelectSubset<T, OrderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Order.
     * @param {OrderCreateArgs} args - Arguments to create a Order.
     * @example
     * // Create one Order
     * const Order = await prisma.order.create({
     *   data: {
     *     // ... data to create a Order
     *   }
     * })
     * 
     */
    create<T extends OrderCreateArgs>(args: SelectSubset<T, OrderCreateArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Orders.
     * @param {OrderCreateManyArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const order = await prisma.order.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrderCreateManyArgs>(args?: SelectSubset<T, OrderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Order.
     * @param {OrderDeleteArgs} args - Arguments to delete one Order.
     * @example
     * // Delete one Order
     * const Order = await prisma.order.delete({
     *   where: {
     *     // ... filter to delete one Order
     *   }
     * })
     * 
     */
    delete<T extends OrderDeleteArgs>(args: SelectSubset<T, OrderDeleteArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Order.
     * @param {OrderUpdateArgs} args - Arguments to update one Order.
     * @example
     * // Update one Order
     * const order = await prisma.order.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrderUpdateArgs>(args: SelectSubset<T, OrderUpdateArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Orders.
     * @param {OrderDeleteManyArgs} args - Arguments to filter Orders to delete.
     * @example
     * // Delete a few Orders
     * const { count } = await prisma.order.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrderDeleteManyArgs>(args?: SelectSubset<T, OrderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Orders
     * const order = await prisma.order.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrderUpdateManyArgs>(args: SelectSubset<T, OrderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Order.
     * @param {OrderUpsertArgs} args - Arguments to update or create a Order.
     * @example
     * // Update or create a Order
     * const order = await prisma.order.upsert({
     *   create: {
     *     // ... data to create a Order
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Order we want to update
     *   }
     * })
     */
    upsert<T extends OrderUpsertArgs>(args: SelectSubset<T, OrderUpsertArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderCountArgs} args - Arguments to filter Orders to count.
     * @example
     * // Count the number of Orders
     * const count = await prisma.order.count({
     *   where: {
     *     // ... the filter for the Orders we want to count
     *   }
     * })
    **/
    count<T extends OrderCountArgs>(
      args?: Subset<T, OrderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OrderAggregateArgs>(args: Subset<T, OrderAggregateArgs>): Prisma.PrismaPromise<GetOrderAggregateType<T>>

    /**
     * Group by Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderGroupByArgs} args - Group by arguments.
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
      T extends OrderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrderGroupByArgs['orderBy'] }
        : { orderBy?: OrderGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, OrderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Order model
   */
  readonly fields: OrderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Order.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    accept<T extends Order$acceptArgs<ExtArgs> = {}>(args?: Subset<T, Order$acceptArgs<ExtArgs>>): Prisma__AcceptedOrdersClient<$Result.GetResult<Prisma.$AcceptedOrdersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    orderItems<T extends Order$orderItemsArgs<ExtArgs> = {}>(args?: Subset<T, Order$orderItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reject<T extends Order$rejectArgs<ExtArgs> = {}>(args?: Subset<T, Order$rejectArgs<ExtArgs>>): Prisma__RejectedOrdersClient<$Result.GetResult<Prisma.$RejectedOrdersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Order model
   */
  interface OrderFieldRefs {
    readonly order_id: FieldRef<"Order", 'String'>
    readonly partyId: FieldRef<"Order", 'String'>
    readonly partyName: FieldRef<"Order", 'String'>
    readonly empId: FieldRef<"Order", 'String'>
    readonly totalAmount: FieldRef<"Order", 'Decimal'>
    readonly discountAmount: FieldRef<"Order", 'Decimal'>
    readonly createdAt: FieldRef<"Order", 'DateTime'>
    readonly creditDays: FieldRef<"Order", 'Int'>
    readonly paymentMode: FieldRef<"Order", 'String'>
    readonly status: FieldRef<"Order", 'String'>
    readonly bulkRate: FieldRef<"Order", 'Decimal'>
    readonly consumerRate: FieldRef<"Order", 'Decimal'>
  }
    

  // Custom InputTypes
  /**
   * Order findUnique
   */
  export type OrderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order findUniqueOrThrow
   */
  export type OrderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order findFirst
   */
  export type OrderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order findFirstOrThrow
   */
  export type OrderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order findMany
   */
  export type OrderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order create
   */
  export type OrderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The data needed to create a Order.
     */
    data: XOR<OrderCreateInput, OrderUncheckedCreateInput>
  }

  /**
   * Order createMany
   */
  export type OrderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Orders.
     */
    data: OrderCreateManyInput | OrderCreateManyInput[]
  }

  /**
   * Order update
   */
  export type OrderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The data needed to update a Order.
     */
    data: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>
    /**
     * Choose, which Order to update.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order updateMany
   */
  export type OrderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Orders.
     */
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyInput>
    /**
     * Filter which Orders to update
     */
    where?: OrderWhereInput
    /**
     * Limit how many Orders to update.
     */
    limit?: number
  }

  /**
   * Order upsert
   */
  export type OrderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The filter to search for the Order to update in case it exists.
     */
    where: OrderWhereUniqueInput
    /**
     * In case the Order found by the `where` argument doesn't exist, create a new Order with this data.
     */
    create: XOR<OrderCreateInput, OrderUncheckedCreateInput>
    /**
     * In case the Order was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>
  }

  /**
   * Order delete
   */
  export type OrderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter which Order to delete.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order deleteMany
   */
  export type OrderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Orders to delete
     */
    where?: OrderWhereInput
    /**
     * Limit how many Orders to delete.
     */
    limit?: number
  }

  /**
   * Order.accept
   */
  export type Order$acceptArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AcceptedOrders
     */
    select?: AcceptedOrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AcceptedOrders
     */
    omit?: AcceptedOrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AcceptedOrdersInclude<ExtArgs> | null
    where?: AcceptedOrdersWhereInput
  }

  /**
   * Order.orderItems
   */
  export type Order$orderItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    where?: OrderItemWhereInput
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[]
    cursor?: OrderItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderItemScalarFieldEnum | OrderItemScalarFieldEnum[]
  }

  /**
   * Order.reject
   */
  export type Order$rejectArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RejectedOrders
     */
    select?: RejectedOrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RejectedOrders
     */
    omit?: RejectedOrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RejectedOrdersInclude<ExtArgs> | null
    where?: RejectedOrdersWhereInput
  }

  /**
   * Order without action
   */
  export type OrderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
  }


  /**
   * Model AcceptedOrders
   */

  export type AggregateAcceptedOrders = {
    _count: AcceptedOrdersCountAggregateOutputType | null
    _min: AcceptedOrdersMinAggregateOutputType | null
    _max: AcceptedOrdersMaxAggregateOutputType | null
  }

  export type AcceptedOrdersMinAggregateOutputType = {
    accept_id: string | null
    order_id: string | null
    createdAt: Date | null
  }

  export type AcceptedOrdersMaxAggregateOutputType = {
    accept_id: string | null
    order_id: string | null
    createdAt: Date | null
  }

  export type AcceptedOrdersCountAggregateOutputType = {
    accept_id: number
    order_id: number
    createdAt: number
    _all: number
  }


  export type AcceptedOrdersMinAggregateInputType = {
    accept_id?: true
    order_id?: true
    createdAt?: true
  }

  export type AcceptedOrdersMaxAggregateInputType = {
    accept_id?: true
    order_id?: true
    createdAt?: true
  }

  export type AcceptedOrdersCountAggregateInputType = {
    accept_id?: true
    order_id?: true
    createdAt?: true
    _all?: true
  }

  export type AcceptedOrdersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AcceptedOrders to aggregate.
     */
    where?: AcceptedOrdersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AcceptedOrders to fetch.
     */
    orderBy?: AcceptedOrdersOrderByWithRelationInput | AcceptedOrdersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AcceptedOrdersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AcceptedOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AcceptedOrders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AcceptedOrders
    **/
    _count?: true | AcceptedOrdersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AcceptedOrdersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AcceptedOrdersMaxAggregateInputType
  }

  export type GetAcceptedOrdersAggregateType<T extends AcceptedOrdersAggregateArgs> = {
        [P in keyof T & keyof AggregateAcceptedOrders]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAcceptedOrders[P]>
      : GetScalarType<T[P], AggregateAcceptedOrders[P]>
  }




  export type AcceptedOrdersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AcceptedOrdersWhereInput
    orderBy?: AcceptedOrdersOrderByWithAggregationInput | AcceptedOrdersOrderByWithAggregationInput[]
    by: AcceptedOrdersScalarFieldEnum[] | AcceptedOrdersScalarFieldEnum
    having?: AcceptedOrdersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AcceptedOrdersCountAggregateInputType | true
    _min?: AcceptedOrdersMinAggregateInputType
    _max?: AcceptedOrdersMaxAggregateInputType
  }

  export type AcceptedOrdersGroupByOutputType = {
    accept_id: string
    order_id: string
    createdAt: Date
    _count: AcceptedOrdersCountAggregateOutputType | null
    _min: AcceptedOrdersMinAggregateOutputType | null
    _max: AcceptedOrdersMaxAggregateOutputType | null
  }

  type GetAcceptedOrdersGroupByPayload<T extends AcceptedOrdersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AcceptedOrdersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AcceptedOrdersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AcceptedOrdersGroupByOutputType[P]>
            : GetScalarType<T[P], AcceptedOrdersGroupByOutputType[P]>
        }
      >
    >


  export type AcceptedOrdersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    accept_id?: boolean
    order_id?: boolean
    createdAt?: boolean
    Order?: boolean | OrderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["acceptedOrders"]>



  export type AcceptedOrdersSelectScalar = {
    accept_id?: boolean
    order_id?: boolean
    createdAt?: boolean
  }

  export type AcceptedOrdersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"accept_id" | "order_id" | "createdAt", ExtArgs["result"]["acceptedOrders"]>
  export type AcceptedOrdersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Order?: boolean | OrderDefaultArgs<ExtArgs>
  }

  export type $AcceptedOrdersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AcceptedOrders"
    objects: {
      Order: Prisma.$OrderPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      accept_id: string
      order_id: string
      createdAt: Date
    }, ExtArgs["result"]["acceptedOrders"]>
    composites: {}
  }

  type AcceptedOrdersGetPayload<S extends boolean | null | undefined | AcceptedOrdersDefaultArgs> = $Result.GetResult<Prisma.$AcceptedOrdersPayload, S>

  type AcceptedOrdersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AcceptedOrdersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AcceptedOrdersCountAggregateInputType | true
    }

  export interface AcceptedOrdersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AcceptedOrders'], meta: { name: 'AcceptedOrders' } }
    /**
     * Find zero or one AcceptedOrders that matches the filter.
     * @param {AcceptedOrdersFindUniqueArgs} args - Arguments to find a AcceptedOrders
     * @example
     * // Get one AcceptedOrders
     * const acceptedOrders = await prisma.acceptedOrders.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AcceptedOrdersFindUniqueArgs>(args: SelectSubset<T, AcceptedOrdersFindUniqueArgs<ExtArgs>>): Prisma__AcceptedOrdersClient<$Result.GetResult<Prisma.$AcceptedOrdersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AcceptedOrders that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AcceptedOrdersFindUniqueOrThrowArgs} args - Arguments to find a AcceptedOrders
     * @example
     * // Get one AcceptedOrders
     * const acceptedOrders = await prisma.acceptedOrders.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AcceptedOrdersFindUniqueOrThrowArgs>(args: SelectSubset<T, AcceptedOrdersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AcceptedOrdersClient<$Result.GetResult<Prisma.$AcceptedOrdersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AcceptedOrders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AcceptedOrdersFindFirstArgs} args - Arguments to find a AcceptedOrders
     * @example
     * // Get one AcceptedOrders
     * const acceptedOrders = await prisma.acceptedOrders.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AcceptedOrdersFindFirstArgs>(args?: SelectSubset<T, AcceptedOrdersFindFirstArgs<ExtArgs>>): Prisma__AcceptedOrdersClient<$Result.GetResult<Prisma.$AcceptedOrdersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AcceptedOrders that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AcceptedOrdersFindFirstOrThrowArgs} args - Arguments to find a AcceptedOrders
     * @example
     * // Get one AcceptedOrders
     * const acceptedOrders = await prisma.acceptedOrders.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AcceptedOrdersFindFirstOrThrowArgs>(args?: SelectSubset<T, AcceptedOrdersFindFirstOrThrowArgs<ExtArgs>>): Prisma__AcceptedOrdersClient<$Result.GetResult<Prisma.$AcceptedOrdersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AcceptedOrders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AcceptedOrdersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AcceptedOrders
     * const acceptedOrders = await prisma.acceptedOrders.findMany()
     * 
     * // Get first 10 AcceptedOrders
     * const acceptedOrders = await prisma.acceptedOrders.findMany({ take: 10 })
     * 
     * // Only select the `accept_id`
     * const acceptedOrdersWithAccept_idOnly = await prisma.acceptedOrders.findMany({ select: { accept_id: true } })
     * 
     */
    findMany<T extends AcceptedOrdersFindManyArgs>(args?: SelectSubset<T, AcceptedOrdersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AcceptedOrdersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AcceptedOrders.
     * @param {AcceptedOrdersCreateArgs} args - Arguments to create a AcceptedOrders.
     * @example
     * // Create one AcceptedOrders
     * const AcceptedOrders = await prisma.acceptedOrders.create({
     *   data: {
     *     // ... data to create a AcceptedOrders
     *   }
     * })
     * 
     */
    create<T extends AcceptedOrdersCreateArgs>(args: SelectSubset<T, AcceptedOrdersCreateArgs<ExtArgs>>): Prisma__AcceptedOrdersClient<$Result.GetResult<Prisma.$AcceptedOrdersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AcceptedOrders.
     * @param {AcceptedOrdersCreateManyArgs} args - Arguments to create many AcceptedOrders.
     * @example
     * // Create many AcceptedOrders
     * const acceptedOrders = await prisma.acceptedOrders.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AcceptedOrdersCreateManyArgs>(args?: SelectSubset<T, AcceptedOrdersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a AcceptedOrders.
     * @param {AcceptedOrdersDeleteArgs} args - Arguments to delete one AcceptedOrders.
     * @example
     * // Delete one AcceptedOrders
     * const AcceptedOrders = await prisma.acceptedOrders.delete({
     *   where: {
     *     // ... filter to delete one AcceptedOrders
     *   }
     * })
     * 
     */
    delete<T extends AcceptedOrdersDeleteArgs>(args: SelectSubset<T, AcceptedOrdersDeleteArgs<ExtArgs>>): Prisma__AcceptedOrdersClient<$Result.GetResult<Prisma.$AcceptedOrdersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AcceptedOrders.
     * @param {AcceptedOrdersUpdateArgs} args - Arguments to update one AcceptedOrders.
     * @example
     * // Update one AcceptedOrders
     * const acceptedOrders = await prisma.acceptedOrders.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AcceptedOrdersUpdateArgs>(args: SelectSubset<T, AcceptedOrdersUpdateArgs<ExtArgs>>): Prisma__AcceptedOrdersClient<$Result.GetResult<Prisma.$AcceptedOrdersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AcceptedOrders.
     * @param {AcceptedOrdersDeleteManyArgs} args - Arguments to filter AcceptedOrders to delete.
     * @example
     * // Delete a few AcceptedOrders
     * const { count } = await prisma.acceptedOrders.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AcceptedOrdersDeleteManyArgs>(args?: SelectSubset<T, AcceptedOrdersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AcceptedOrders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AcceptedOrdersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AcceptedOrders
     * const acceptedOrders = await prisma.acceptedOrders.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AcceptedOrdersUpdateManyArgs>(args: SelectSubset<T, AcceptedOrdersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AcceptedOrders.
     * @param {AcceptedOrdersUpsertArgs} args - Arguments to update or create a AcceptedOrders.
     * @example
     * // Update or create a AcceptedOrders
     * const acceptedOrders = await prisma.acceptedOrders.upsert({
     *   create: {
     *     // ... data to create a AcceptedOrders
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AcceptedOrders we want to update
     *   }
     * })
     */
    upsert<T extends AcceptedOrdersUpsertArgs>(args: SelectSubset<T, AcceptedOrdersUpsertArgs<ExtArgs>>): Prisma__AcceptedOrdersClient<$Result.GetResult<Prisma.$AcceptedOrdersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AcceptedOrders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AcceptedOrdersCountArgs} args - Arguments to filter AcceptedOrders to count.
     * @example
     * // Count the number of AcceptedOrders
     * const count = await prisma.acceptedOrders.count({
     *   where: {
     *     // ... the filter for the AcceptedOrders we want to count
     *   }
     * })
    **/
    count<T extends AcceptedOrdersCountArgs>(
      args?: Subset<T, AcceptedOrdersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AcceptedOrdersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AcceptedOrders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AcceptedOrdersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AcceptedOrdersAggregateArgs>(args: Subset<T, AcceptedOrdersAggregateArgs>): Prisma.PrismaPromise<GetAcceptedOrdersAggregateType<T>>

    /**
     * Group by AcceptedOrders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AcceptedOrdersGroupByArgs} args - Group by arguments.
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
      T extends AcceptedOrdersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AcceptedOrdersGroupByArgs['orderBy'] }
        : { orderBy?: AcceptedOrdersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, AcceptedOrdersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAcceptedOrdersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AcceptedOrders model
   */
  readonly fields: AcceptedOrdersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AcceptedOrders.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AcceptedOrdersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Order<T extends OrderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrderDefaultArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AcceptedOrders model
   */
  interface AcceptedOrdersFieldRefs {
    readonly accept_id: FieldRef<"AcceptedOrders", 'String'>
    readonly order_id: FieldRef<"AcceptedOrders", 'String'>
    readonly createdAt: FieldRef<"AcceptedOrders", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AcceptedOrders findUnique
   */
  export type AcceptedOrdersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AcceptedOrders
     */
    select?: AcceptedOrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AcceptedOrders
     */
    omit?: AcceptedOrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AcceptedOrdersInclude<ExtArgs> | null
    /**
     * Filter, which AcceptedOrders to fetch.
     */
    where: AcceptedOrdersWhereUniqueInput
  }

  /**
   * AcceptedOrders findUniqueOrThrow
   */
  export type AcceptedOrdersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AcceptedOrders
     */
    select?: AcceptedOrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AcceptedOrders
     */
    omit?: AcceptedOrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AcceptedOrdersInclude<ExtArgs> | null
    /**
     * Filter, which AcceptedOrders to fetch.
     */
    where: AcceptedOrdersWhereUniqueInput
  }

  /**
   * AcceptedOrders findFirst
   */
  export type AcceptedOrdersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AcceptedOrders
     */
    select?: AcceptedOrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AcceptedOrders
     */
    omit?: AcceptedOrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AcceptedOrdersInclude<ExtArgs> | null
    /**
     * Filter, which AcceptedOrders to fetch.
     */
    where?: AcceptedOrdersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AcceptedOrders to fetch.
     */
    orderBy?: AcceptedOrdersOrderByWithRelationInput | AcceptedOrdersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AcceptedOrders.
     */
    cursor?: AcceptedOrdersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AcceptedOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AcceptedOrders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AcceptedOrders.
     */
    distinct?: AcceptedOrdersScalarFieldEnum | AcceptedOrdersScalarFieldEnum[]
  }

  /**
   * AcceptedOrders findFirstOrThrow
   */
  export type AcceptedOrdersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AcceptedOrders
     */
    select?: AcceptedOrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AcceptedOrders
     */
    omit?: AcceptedOrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AcceptedOrdersInclude<ExtArgs> | null
    /**
     * Filter, which AcceptedOrders to fetch.
     */
    where?: AcceptedOrdersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AcceptedOrders to fetch.
     */
    orderBy?: AcceptedOrdersOrderByWithRelationInput | AcceptedOrdersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AcceptedOrders.
     */
    cursor?: AcceptedOrdersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AcceptedOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AcceptedOrders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AcceptedOrders.
     */
    distinct?: AcceptedOrdersScalarFieldEnum | AcceptedOrdersScalarFieldEnum[]
  }

  /**
   * AcceptedOrders findMany
   */
  export type AcceptedOrdersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AcceptedOrders
     */
    select?: AcceptedOrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AcceptedOrders
     */
    omit?: AcceptedOrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AcceptedOrdersInclude<ExtArgs> | null
    /**
     * Filter, which AcceptedOrders to fetch.
     */
    where?: AcceptedOrdersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AcceptedOrders to fetch.
     */
    orderBy?: AcceptedOrdersOrderByWithRelationInput | AcceptedOrdersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AcceptedOrders.
     */
    cursor?: AcceptedOrdersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AcceptedOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AcceptedOrders.
     */
    skip?: number
    distinct?: AcceptedOrdersScalarFieldEnum | AcceptedOrdersScalarFieldEnum[]
  }

  /**
   * AcceptedOrders create
   */
  export type AcceptedOrdersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AcceptedOrders
     */
    select?: AcceptedOrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AcceptedOrders
     */
    omit?: AcceptedOrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AcceptedOrdersInclude<ExtArgs> | null
    /**
     * The data needed to create a AcceptedOrders.
     */
    data: XOR<AcceptedOrdersCreateInput, AcceptedOrdersUncheckedCreateInput>
  }

  /**
   * AcceptedOrders createMany
   */
  export type AcceptedOrdersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AcceptedOrders.
     */
    data: AcceptedOrdersCreateManyInput | AcceptedOrdersCreateManyInput[]
  }

  /**
   * AcceptedOrders update
   */
  export type AcceptedOrdersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AcceptedOrders
     */
    select?: AcceptedOrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AcceptedOrders
     */
    omit?: AcceptedOrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AcceptedOrdersInclude<ExtArgs> | null
    /**
     * The data needed to update a AcceptedOrders.
     */
    data: XOR<AcceptedOrdersUpdateInput, AcceptedOrdersUncheckedUpdateInput>
    /**
     * Choose, which AcceptedOrders to update.
     */
    where: AcceptedOrdersWhereUniqueInput
  }

  /**
   * AcceptedOrders updateMany
   */
  export type AcceptedOrdersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AcceptedOrders.
     */
    data: XOR<AcceptedOrdersUpdateManyMutationInput, AcceptedOrdersUncheckedUpdateManyInput>
    /**
     * Filter which AcceptedOrders to update
     */
    where?: AcceptedOrdersWhereInput
    /**
     * Limit how many AcceptedOrders to update.
     */
    limit?: number
  }

  /**
   * AcceptedOrders upsert
   */
  export type AcceptedOrdersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AcceptedOrders
     */
    select?: AcceptedOrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AcceptedOrders
     */
    omit?: AcceptedOrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AcceptedOrdersInclude<ExtArgs> | null
    /**
     * The filter to search for the AcceptedOrders to update in case it exists.
     */
    where: AcceptedOrdersWhereUniqueInput
    /**
     * In case the AcceptedOrders found by the `where` argument doesn't exist, create a new AcceptedOrders with this data.
     */
    create: XOR<AcceptedOrdersCreateInput, AcceptedOrdersUncheckedCreateInput>
    /**
     * In case the AcceptedOrders was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AcceptedOrdersUpdateInput, AcceptedOrdersUncheckedUpdateInput>
  }

  /**
   * AcceptedOrders delete
   */
  export type AcceptedOrdersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AcceptedOrders
     */
    select?: AcceptedOrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AcceptedOrders
     */
    omit?: AcceptedOrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AcceptedOrdersInclude<ExtArgs> | null
    /**
     * Filter which AcceptedOrders to delete.
     */
    where: AcceptedOrdersWhereUniqueInput
  }

  /**
   * AcceptedOrders deleteMany
   */
  export type AcceptedOrdersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AcceptedOrders to delete
     */
    where?: AcceptedOrdersWhereInput
    /**
     * Limit how many AcceptedOrders to delete.
     */
    limit?: number
  }

  /**
   * AcceptedOrders without action
   */
  export type AcceptedOrdersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AcceptedOrders
     */
    select?: AcceptedOrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AcceptedOrders
     */
    omit?: AcceptedOrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AcceptedOrdersInclude<ExtArgs> | null
  }


  /**
   * Model RejectedOrders
   */

  export type AggregateRejectedOrders = {
    _count: RejectedOrdersCountAggregateOutputType | null
    _min: RejectedOrdersMinAggregateOutputType | null
    _max: RejectedOrdersMaxAggregateOutputType | null
  }

  export type RejectedOrdersMinAggregateOutputType = {
    reject_id: string | null
    order_id: string | null
    createdAt: Date | null
  }

  export type RejectedOrdersMaxAggregateOutputType = {
    reject_id: string | null
    order_id: string | null
    createdAt: Date | null
  }

  export type RejectedOrdersCountAggregateOutputType = {
    reject_id: number
    order_id: number
    createdAt: number
    _all: number
  }


  export type RejectedOrdersMinAggregateInputType = {
    reject_id?: true
    order_id?: true
    createdAt?: true
  }

  export type RejectedOrdersMaxAggregateInputType = {
    reject_id?: true
    order_id?: true
    createdAt?: true
  }

  export type RejectedOrdersCountAggregateInputType = {
    reject_id?: true
    order_id?: true
    createdAt?: true
    _all?: true
  }

  export type RejectedOrdersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RejectedOrders to aggregate.
     */
    where?: RejectedOrdersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RejectedOrders to fetch.
     */
    orderBy?: RejectedOrdersOrderByWithRelationInput | RejectedOrdersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RejectedOrdersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RejectedOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RejectedOrders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RejectedOrders
    **/
    _count?: true | RejectedOrdersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RejectedOrdersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RejectedOrdersMaxAggregateInputType
  }

  export type GetRejectedOrdersAggregateType<T extends RejectedOrdersAggregateArgs> = {
        [P in keyof T & keyof AggregateRejectedOrders]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRejectedOrders[P]>
      : GetScalarType<T[P], AggregateRejectedOrders[P]>
  }




  export type RejectedOrdersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RejectedOrdersWhereInput
    orderBy?: RejectedOrdersOrderByWithAggregationInput | RejectedOrdersOrderByWithAggregationInput[]
    by: RejectedOrdersScalarFieldEnum[] | RejectedOrdersScalarFieldEnum
    having?: RejectedOrdersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RejectedOrdersCountAggregateInputType | true
    _min?: RejectedOrdersMinAggregateInputType
    _max?: RejectedOrdersMaxAggregateInputType
  }

  export type RejectedOrdersGroupByOutputType = {
    reject_id: string
    order_id: string
    createdAt: Date
    _count: RejectedOrdersCountAggregateOutputType | null
    _min: RejectedOrdersMinAggregateOutputType | null
    _max: RejectedOrdersMaxAggregateOutputType | null
  }

  type GetRejectedOrdersGroupByPayload<T extends RejectedOrdersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RejectedOrdersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RejectedOrdersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RejectedOrdersGroupByOutputType[P]>
            : GetScalarType<T[P], RejectedOrdersGroupByOutputType[P]>
        }
      >
    >


  export type RejectedOrdersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    reject_id?: boolean
    order_id?: boolean
    createdAt?: boolean
    Order?: boolean | OrderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rejectedOrders"]>



  export type RejectedOrdersSelectScalar = {
    reject_id?: boolean
    order_id?: boolean
    createdAt?: boolean
  }

  export type RejectedOrdersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"reject_id" | "order_id" | "createdAt", ExtArgs["result"]["rejectedOrders"]>
  export type RejectedOrdersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Order?: boolean | OrderDefaultArgs<ExtArgs>
  }

  export type $RejectedOrdersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RejectedOrders"
    objects: {
      Order: Prisma.$OrderPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      reject_id: string
      order_id: string
      createdAt: Date
    }, ExtArgs["result"]["rejectedOrders"]>
    composites: {}
  }

  type RejectedOrdersGetPayload<S extends boolean | null | undefined | RejectedOrdersDefaultArgs> = $Result.GetResult<Prisma.$RejectedOrdersPayload, S>

  type RejectedOrdersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RejectedOrdersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RejectedOrdersCountAggregateInputType | true
    }

  export interface RejectedOrdersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RejectedOrders'], meta: { name: 'RejectedOrders' } }
    /**
     * Find zero or one RejectedOrders that matches the filter.
     * @param {RejectedOrdersFindUniqueArgs} args - Arguments to find a RejectedOrders
     * @example
     * // Get one RejectedOrders
     * const rejectedOrders = await prisma.rejectedOrders.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RejectedOrdersFindUniqueArgs>(args: SelectSubset<T, RejectedOrdersFindUniqueArgs<ExtArgs>>): Prisma__RejectedOrdersClient<$Result.GetResult<Prisma.$RejectedOrdersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RejectedOrders that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RejectedOrdersFindUniqueOrThrowArgs} args - Arguments to find a RejectedOrders
     * @example
     * // Get one RejectedOrders
     * const rejectedOrders = await prisma.rejectedOrders.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RejectedOrdersFindUniqueOrThrowArgs>(args: SelectSubset<T, RejectedOrdersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RejectedOrdersClient<$Result.GetResult<Prisma.$RejectedOrdersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RejectedOrders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RejectedOrdersFindFirstArgs} args - Arguments to find a RejectedOrders
     * @example
     * // Get one RejectedOrders
     * const rejectedOrders = await prisma.rejectedOrders.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RejectedOrdersFindFirstArgs>(args?: SelectSubset<T, RejectedOrdersFindFirstArgs<ExtArgs>>): Prisma__RejectedOrdersClient<$Result.GetResult<Prisma.$RejectedOrdersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RejectedOrders that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RejectedOrdersFindFirstOrThrowArgs} args - Arguments to find a RejectedOrders
     * @example
     * // Get one RejectedOrders
     * const rejectedOrders = await prisma.rejectedOrders.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RejectedOrdersFindFirstOrThrowArgs>(args?: SelectSubset<T, RejectedOrdersFindFirstOrThrowArgs<ExtArgs>>): Prisma__RejectedOrdersClient<$Result.GetResult<Prisma.$RejectedOrdersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RejectedOrders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RejectedOrdersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RejectedOrders
     * const rejectedOrders = await prisma.rejectedOrders.findMany()
     * 
     * // Get first 10 RejectedOrders
     * const rejectedOrders = await prisma.rejectedOrders.findMany({ take: 10 })
     * 
     * // Only select the `reject_id`
     * const rejectedOrdersWithReject_idOnly = await prisma.rejectedOrders.findMany({ select: { reject_id: true } })
     * 
     */
    findMany<T extends RejectedOrdersFindManyArgs>(args?: SelectSubset<T, RejectedOrdersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RejectedOrdersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RejectedOrders.
     * @param {RejectedOrdersCreateArgs} args - Arguments to create a RejectedOrders.
     * @example
     * // Create one RejectedOrders
     * const RejectedOrders = await prisma.rejectedOrders.create({
     *   data: {
     *     // ... data to create a RejectedOrders
     *   }
     * })
     * 
     */
    create<T extends RejectedOrdersCreateArgs>(args: SelectSubset<T, RejectedOrdersCreateArgs<ExtArgs>>): Prisma__RejectedOrdersClient<$Result.GetResult<Prisma.$RejectedOrdersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RejectedOrders.
     * @param {RejectedOrdersCreateManyArgs} args - Arguments to create many RejectedOrders.
     * @example
     * // Create many RejectedOrders
     * const rejectedOrders = await prisma.rejectedOrders.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RejectedOrdersCreateManyArgs>(args?: SelectSubset<T, RejectedOrdersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a RejectedOrders.
     * @param {RejectedOrdersDeleteArgs} args - Arguments to delete one RejectedOrders.
     * @example
     * // Delete one RejectedOrders
     * const RejectedOrders = await prisma.rejectedOrders.delete({
     *   where: {
     *     // ... filter to delete one RejectedOrders
     *   }
     * })
     * 
     */
    delete<T extends RejectedOrdersDeleteArgs>(args: SelectSubset<T, RejectedOrdersDeleteArgs<ExtArgs>>): Prisma__RejectedOrdersClient<$Result.GetResult<Prisma.$RejectedOrdersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RejectedOrders.
     * @param {RejectedOrdersUpdateArgs} args - Arguments to update one RejectedOrders.
     * @example
     * // Update one RejectedOrders
     * const rejectedOrders = await prisma.rejectedOrders.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RejectedOrdersUpdateArgs>(args: SelectSubset<T, RejectedOrdersUpdateArgs<ExtArgs>>): Prisma__RejectedOrdersClient<$Result.GetResult<Prisma.$RejectedOrdersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RejectedOrders.
     * @param {RejectedOrdersDeleteManyArgs} args - Arguments to filter RejectedOrders to delete.
     * @example
     * // Delete a few RejectedOrders
     * const { count } = await prisma.rejectedOrders.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RejectedOrdersDeleteManyArgs>(args?: SelectSubset<T, RejectedOrdersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RejectedOrders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RejectedOrdersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RejectedOrders
     * const rejectedOrders = await prisma.rejectedOrders.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RejectedOrdersUpdateManyArgs>(args: SelectSubset<T, RejectedOrdersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one RejectedOrders.
     * @param {RejectedOrdersUpsertArgs} args - Arguments to update or create a RejectedOrders.
     * @example
     * // Update or create a RejectedOrders
     * const rejectedOrders = await prisma.rejectedOrders.upsert({
     *   create: {
     *     // ... data to create a RejectedOrders
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RejectedOrders we want to update
     *   }
     * })
     */
    upsert<T extends RejectedOrdersUpsertArgs>(args: SelectSubset<T, RejectedOrdersUpsertArgs<ExtArgs>>): Prisma__RejectedOrdersClient<$Result.GetResult<Prisma.$RejectedOrdersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RejectedOrders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RejectedOrdersCountArgs} args - Arguments to filter RejectedOrders to count.
     * @example
     * // Count the number of RejectedOrders
     * const count = await prisma.rejectedOrders.count({
     *   where: {
     *     // ... the filter for the RejectedOrders we want to count
     *   }
     * })
    **/
    count<T extends RejectedOrdersCountArgs>(
      args?: Subset<T, RejectedOrdersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RejectedOrdersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RejectedOrders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RejectedOrdersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RejectedOrdersAggregateArgs>(args: Subset<T, RejectedOrdersAggregateArgs>): Prisma.PrismaPromise<GetRejectedOrdersAggregateType<T>>

    /**
     * Group by RejectedOrders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RejectedOrdersGroupByArgs} args - Group by arguments.
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
      T extends RejectedOrdersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RejectedOrdersGroupByArgs['orderBy'] }
        : { orderBy?: RejectedOrdersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, RejectedOrdersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRejectedOrdersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RejectedOrders model
   */
  readonly fields: RejectedOrdersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RejectedOrders.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RejectedOrdersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Order<T extends OrderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrderDefaultArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RejectedOrders model
   */
  interface RejectedOrdersFieldRefs {
    readonly reject_id: FieldRef<"RejectedOrders", 'String'>
    readonly order_id: FieldRef<"RejectedOrders", 'String'>
    readonly createdAt: FieldRef<"RejectedOrders", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RejectedOrders findUnique
   */
  export type RejectedOrdersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RejectedOrders
     */
    select?: RejectedOrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RejectedOrders
     */
    omit?: RejectedOrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RejectedOrdersInclude<ExtArgs> | null
    /**
     * Filter, which RejectedOrders to fetch.
     */
    where: RejectedOrdersWhereUniqueInput
  }

  /**
   * RejectedOrders findUniqueOrThrow
   */
  export type RejectedOrdersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RejectedOrders
     */
    select?: RejectedOrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RejectedOrders
     */
    omit?: RejectedOrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RejectedOrdersInclude<ExtArgs> | null
    /**
     * Filter, which RejectedOrders to fetch.
     */
    where: RejectedOrdersWhereUniqueInput
  }

  /**
   * RejectedOrders findFirst
   */
  export type RejectedOrdersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RejectedOrders
     */
    select?: RejectedOrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RejectedOrders
     */
    omit?: RejectedOrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RejectedOrdersInclude<ExtArgs> | null
    /**
     * Filter, which RejectedOrders to fetch.
     */
    where?: RejectedOrdersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RejectedOrders to fetch.
     */
    orderBy?: RejectedOrdersOrderByWithRelationInput | RejectedOrdersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RejectedOrders.
     */
    cursor?: RejectedOrdersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RejectedOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RejectedOrders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RejectedOrders.
     */
    distinct?: RejectedOrdersScalarFieldEnum | RejectedOrdersScalarFieldEnum[]
  }

  /**
   * RejectedOrders findFirstOrThrow
   */
  export type RejectedOrdersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RejectedOrders
     */
    select?: RejectedOrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RejectedOrders
     */
    omit?: RejectedOrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RejectedOrdersInclude<ExtArgs> | null
    /**
     * Filter, which RejectedOrders to fetch.
     */
    where?: RejectedOrdersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RejectedOrders to fetch.
     */
    orderBy?: RejectedOrdersOrderByWithRelationInput | RejectedOrdersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RejectedOrders.
     */
    cursor?: RejectedOrdersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RejectedOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RejectedOrders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RejectedOrders.
     */
    distinct?: RejectedOrdersScalarFieldEnum | RejectedOrdersScalarFieldEnum[]
  }

  /**
   * RejectedOrders findMany
   */
  export type RejectedOrdersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RejectedOrders
     */
    select?: RejectedOrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RejectedOrders
     */
    omit?: RejectedOrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RejectedOrdersInclude<ExtArgs> | null
    /**
     * Filter, which RejectedOrders to fetch.
     */
    where?: RejectedOrdersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RejectedOrders to fetch.
     */
    orderBy?: RejectedOrdersOrderByWithRelationInput | RejectedOrdersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RejectedOrders.
     */
    cursor?: RejectedOrdersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RejectedOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RejectedOrders.
     */
    skip?: number
    distinct?: RejectedOrdersScalarFieldEnum | RejectedOrdersScalarFieldEnum[]
  }

  /**
   * RejectedOrders create
   */
  export type RejectedOrdersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RejectedOrders
     */
    select?: RejectedOrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RejectedOrders
     */
    omit?: RejectedOrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RejectedOrdersInclude<ExtArgs> | null
    /**
     * The data needed to create a RejectedOrders.
     */
    data: XOR<RejectedOrdersCreateInput, RejectedOrdersUncheckedCreateInput>
  }

  /**
   * RejectedOrders createMany
   */
  export type RejectedOrdersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RejectedOrders.
     */
    data: RejectedOrdersCreateManyInput | RejectedOrdersCreateManyInput[]
  }

  /**
   * RejectedOrders update
   */
  export type RejectedOrdersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RejectedOrders
     */
    select?: RejectedOrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RejectedOrders
     */
    omit?: RejectedOrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RejectedOrdersInclude<ExtArgs> | null
    /**
     * The data needed to update a RejectedOrders.
     */
    data: XOR<RejectedOrdersUpdateInput, RejectedOrdersUncheckedUpdateInput>
    /**
     * Choose, which RejectedOrders to update.
     */
    where: RejectedOrdersWhereUniqueInput
  }

  /**
   * RejectedOrders updateMany
   */
  export type RejectedOrdersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RejectedOrders.
     */
    data: XOR<RejectedOrdersUpdateManyMutationInput, RejectedOrdersUncheckedUpdateManyInput>
    /**
     * Filter which RejectedOrders to update
     */
    where?: RejectedOrdersWhereInput
    /**
     * Limit how many RejectedOrders to update.
     */
    limit?: number
  }

  /**
   * RejectedOrders upsert
   */
  export type RejectedOrdersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RejectedOrders
     */
    select?: RejectedOrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RejectedOrders
     */
    omit?: RejectedOrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RejectedOrdersInclude<ExtArgs> | null
    /**
     * The filter to search for the RejectedOrders to update in case it exists.
     */
    where: RejectedOrdersWhereUniqueInput
    /**
     * In case the RejectedOrders found by the `where` argument doesn't exist, create a new RejectedOrders with this data.
     */
    create: XOR<RejectedOrdersCreateInput, RejectedOrdersUncheckedCreateInput>
    /**
     * In case the RejectedOrders was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RejectedOrdersUpdateInput, RejectedOrdersUncheckedUpdateInput>
  }

  /**
   * RejectedOrders delete
   */
  export type RejectedOrdersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RejectedOrders
     */
    select?: RejectedOrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RejectedOrders
     */
    omit?: RejectedOrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RejectedOrdersInclude<ExtArgs> | null
    /**
     * Filter which RejectedOrders to delete.
     */
    where: RejectedOrdersWhereUniqueInput
  }

  /**
   * RejectedOrders deleteMany
   */
  export type RejectedOrdersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RejectedOrders to delete
     */
    where?: RejectedOrdersWhereInput
    /**
     * Limit how many RejectedOrders to delete.
     */
    limit?: number
  }

  /**
   * RejectedOrders without action
   */
  export type RejectedOrdersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RejectedOrders
     */
    select?: RejectedOrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RejectedOrders
     */
    omit?: RejectedOrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RejectedOrdersInclude<ExtArgs> | null
  }


  /**
   * Model OrderItem
   */

  export type AggregateOrderItem = {
    _count: OrderItemCountAggregateOutputType | null
    _avg: OrderItemAvgAggregateOutputType | null
    _sum: OrderItemSumAggregateOutputType | null
    _min: OrderItemMinAggregateOutputType | null
    _max: OrderItemMaxAggregateOutputType | null
  }

  export type OrderItemAvgAggregateOutputType = {
    quantity: number | null
    rate: Decimal | null
    amount: Decimal | null
  }

  export type OrderItemSumAggregateOutputType = {
    quantity: number | null
    rate: Decimal | null
    amount: Decimal | null
  }

  export type OrderItemMinAggregateOutputType = {
    id: string | null
    orderId: string | null
    itemCode: string | null
    itemName: string | null
    quantity: number | null
    rate: Decimal | null
    amount: Decimal | null
    packType: string | null
  }

  export type OrderItemMaxAggregateOutputType = {
    id: string | null
    orderId: string | null
    itemCode: string | null
    itemName: string | null
    quantity: number | null
    rate: Decimal | null
    amount: Decimal | null
    packType: string | null
  }

  export type OrderItemCountAggregateOutputType = {
    id: number
    orderId: number
    itemCode: number
    itemName: number
    quantity: number
    rate: number
    amount: number
    packType: number
    _all: number
  }


  export type OrderItemAvgAggregateInputType = {
    quantity?: true
    rate?: true
    amount?: true
  }

  export type OrderItemSumAggregateInputType = {
    quantity?: true
    rate?: true
    amount?: true
  }

  export type OrderItemMinAggregateInputType = {
    id?: true
    orderId?: true
    itemCode?: true
    itemName?: true
    quantity?: true
    rate?: true
    amount?: true
    packType?: true
  }

  export type OrderItemMaxAggregateInputType = {
    id?: true
    orderId?: true
    itemCode?: true
    itemName?: true
    quantity?: true
    rate?: true
    amount?: true
    packType?: true
  }

  export type OrderItemCountAggregateInputType = {
    id?: true
    orderId?: true
    itemCode?: true
    itemName?: true
    quantity?: true
    rate?: true
    amount?: true
    packType?: true
    _all?: true
  }

  export type OrderItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrderItem to aggregate.
     */
    where?: OrderItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderItems to fetch.
     */
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrderItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OrderItems
    **/
    _count?: true | OrderItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrderItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrderItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderItemMaxAggregateInputType
  }

  export type GetOrderItemAggregateType<T extends OrderItemAggregateArgs> = {
        [P in keyof T & keyof AggregateOrderItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrderItem[P]>
      : GetScalarType<T[P], AggregateOrderItem[P]>
  }




  export type OrderItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderItemWhereInput
    orderBy?: OrderItemOrderByWithAggregationInput | OrderItemOrderByWithAggregationInput[]
    by: OrderItemScalarFieldEnum[] | OrderItemScalarFieldEnum
    having?: OrderItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderItemCountAggregateInputType | true
    _avg?: OrderItemAvgAggregateInputType
    _sum?: OrderItemSumAggregateInputType
    _min?: OrderItemMinAggregateInputType
    _max?: OrderItemMaxAggregateInputType
  }

  export type OrderItemGroupByOutputType = {
    id: string
    orderId: string
    itemCode: string
    itemName: string
    quantity: number
    rate: Decimal
    amount: Decimal
    packType: string
    _count: OrderItemCountAggregateOutputType | null
    _avg: OrderItemAvgAggregateOutputType | null
    _sum: OrderItemSumAggregateOutputType | null
    _min: OrderItemMinAggregateOutputType | null
    _max: OrderItemMaxAggregateOutputType | null
  }

  type GetOrderItemGroupByPayload<T extends OrderItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrderItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderItemGroupByOutputType[P]>
            : GetScalarType<T[P], OrderItemGroupByOutputType[P]>
        }
      >
    >


  export type OrderItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderId?: boolean
    itemCode?: boolean
    itemName?: boolean
    quantity?: boolean
    rate?: boolean
    amount?: boolean
    packType?: boolean
    order?: boolean | OrderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orderItem"]>



  export type OrderItemSelectScalar = {
    id?: boolean
    orderId?: boolean
    itemCode?: boolean
    itemName?: boolean
    quantity?: boolean
    rate?: boolean
    amount?: boolean
    packType?: boolean
  }

  export type OrderItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "orderId" | "itemCode" | "itemName" | "quantity" | "rate" | "amount" | "packType", ExtArgs["result"]["orderItem"]>
  export type OrderItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrderDefaultArgs<ExtArgs>
  }

  export type $OrderItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OrderItem"
    objects: {
      order: Prisma.$OrderPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      orderId: string
      itemCode: string
      itemName: string
      quantity: number
      rate: Prisma.Decimal
      amount: Prisma.Decimal
      packType: string
    }, ExtArgs["result"]["orderItem"]>
    composites: {}
  }

  type OrderItemGetPayload<S extends boolean | null | undefined | OrderItemDefaultArgs> = $Result.GetResult<Prisma.$OrderItemPayload, S>

  type OrderItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrderItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrderItemCountAggregateInputType | true
    }

  export interface OrderItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OrderItem'], meta: { name: 'OrderItem' } }
    /**
     * Find zero or one OrderItem that matches the filter.
     * @param {OrderItemFindUniqueArgs} args - Arguments to find a OrderItem
     * @example
     * // Get one OrderItem
     * const orderItem = await prisma.orderItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrderItemFindUniqueArgs>(args: SelectSubset<T, OrderItemFindUniqueArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one OrderItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrderItemFindUniqueOrThrowArgs} args - Arguments to find a OrderItem
     * @example
     * // Get one OrderItem
     * const orderItem = await prisma.orderItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrderItemFindUniqueOrThrowArgs>(args: SelectSubset<T, OrderItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OrderItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemFindFirstArgs} args - Arguments to find a OrderItem
     * @example
     * // Get one OrderItem
     * const orderItem = await prisma.orderItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrderItemFindFirstArgs>(args?: SelectSubset<T, OrderItemFindFirstArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OrderItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemFindFirstOrThrowArgs} args - Arguments to find a OrderItem
     * @example
     * // Get one OrderItem
     * const orderItem = await prisma.orderItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrderItemFindFirstOrThrowArgs>(args?: SelectSubset<T, OrderItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more OrderItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OrderItems
     * const orderItems = await prisma.orderItem.findMany()
     * 
     * // Get first 10 OrderItems
     * const orderItems = await prisma.orderItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const orderItemWithIdOnly = await prisma.orderItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrderItemFindManyArgs>(args?: SelectSubset<T, OrderItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a OrderItem.
     * @param {OrderItemCreateArgs} args - Arguments to create a OrderItem.
     * @example
     * // Create one OrderItem
     * const OrderItem = await prisma.orderItem.create({
     *   data: {
     *     // ... data to create a OrderItem
     *   }
     * })
     * 
     */
    create<T extends OrderItemCreateArgs>(args: SelectSubset<T, OrderItemCreateArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many OrderItems.
     * @param {OrderItemCreateManyArgs} args - Arguments to create many OrderItems.
     * @example
     * // Create many OrderItems
     * const orderItem = await prisma.orderItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrderItemCreateManyArgs>(args?: SelectSubset<T, OrderItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a OrderItem.
     * @param {OrderItemDeleteArgs} args - Arguments to delete one OrderItem.
     * @example
     * // Delete one OrderItem
     * const OrderItem = await prisma.orderItem.delete({
     *   where: {
     *     // ... filter to delete one OrderItem
     *   }
     * })
     * 
     */
    delete<T extends OrderItemDeleteArgs>(args: SelectSubset<T, OrderItemDeleteArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one OrderItem.
     * @param {OrderItemUpdateArgs} args - Arguments to update one OrderItem.
     * @example
     * // Update one OrderItem
     * const orderItem = await prisma.orderItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrderItemUpdateArgs>(args: SelectSubset<T, OrderItemUpdateArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more OrderItems.
     * @param {OrderItemDeleteManyArgs} args - Arguments to filter OrderItems to delete.
     * @example
     * // Delete a few OrderItems
     * const { count } = await prisma.orderItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrderItemDeleteManyArgs>(args?: SelectSubset<T, OrderItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrderItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OrderItems
     * const orderItem = await prisma.orderItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrderItemUpdateManyArgs>(args: SelectSubset<T, OrderItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one OrderItem.
     * @param {OrderItemUpsertArgs} args - Arguments to update or create a OrderItem.
     * @example
     * // Update or create a OrderItem
     * const orderItem = await prisma.orderItem.upsert({
     *   create: {
     *     // ... data to create a OrderItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OrderItem we want to update
     *   }
     * })
     */
    upsert<T extends OrderItemUpsertArgs>(args: SelectSubset<T, OrderItemUpsertArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of OrderItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemCountArgs} args - Arguments to filter OrderItems to count.
     * @example
     * // Count the number of OrderItems
     * const count = await prisma.orderItem.count({
     *   where: {
     *     // ... the filter for the OrderItems we want to count
     *   }
     * })
    **/
    count<T extends OrderItemCountArgs>(
      args?: Subset<T, OrderItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OrderItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OrderItemAggregateArgs>(args: Subset<T, OrderItemAggregateArgs>): Prisma.PrismaPromise<GetOrderItemAggregateType<T>>

    /**
     * Group by OrderItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemGroupByArgs} args - Group by arguments.
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
      T extends OrderItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrderItemGroupByArgs['orderBy'] }
        : { orderBy?: OrderItemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, OrderItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OrderItem model
   */
  readonly fields: OrderItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OrderItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrderItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    order<T extends OrderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrderDefaultArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the OrderItem model
   */
  interface OrderItemFieldRefs {
    readonly id: FieldRef<"OrderItem", 'String'>
    readonly orderId: FieldRef<"OrderItem", 'String'>
    readonly itemCode: FieldRef<"OrderItem", 'String'>
    readonly itemName: FieldRef<"OrderItem", 'String'>
    readonly quantity: FieldRef<"OrderItem", 'Int'>
    readonly rate: FieldRef<"OrderItem", 'Decimal'>
    readonly amount: FieldRef<"OrderItem", 'Decimal'>
    readonly packType: FieldRef<"OrderItem", 'String'>
  }
    

  // Custom InputTypes
  /**
   * OrderItem findUnique
   */
  export type OrderItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * Filter, which OrderItem to fetch.
     */
    where: OrderItemWhereUniqueInput
  }

  /**
   * OrderItem findUniqueOrThrow
   */
  export type OrderItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * Filter, which OrderItem to fetch.
     */
    where: OrderItemWhereUniqueInput
  }

  /**
   * OrderItem findFirst
   */
  export type OrderItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * Filter, which OrderItem to fetch.
     */
    where?: OrderItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderItems to fetch.
     */
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrderItems.
     */
    cursor?: OrderItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrderItems.
     */
    distinct?: OrderItemScalarFieldEnum | OrderItemScalarFieldEnum[]
  }

  /**
   * OrderItem findFirstOrThrow
   */
  export type OrderItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * Filter, which OrderItem to fetch.
     */
    where?: OrderItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderItems to fetch.
     */
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrderItems.
     */
    cursor?: OrderItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrderItems.
     */
    distinct?: OrderItemScalarFieldEnum | OrderItemScalarFieldEnum[]
  }

  /**
   * OrderItem findMany
   */
  export type OrderItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * Filter, which OrderItems to fetch.
     */
    where?: OrderItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderItems to fetch.
     */
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OrderItems.
     */
    cursor?: OrderItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderItems.
     */
    skip?: number
    distinct?: OrderItemScalarFieldEnum | OrderItemScalarFieldEnum[]
  }

  /**
   * OrderItem create
   */
  export type OrderItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * The data needed to create a OrderItem.
     */
    data: XOR<OrderItemCreateInput, OrderItemUncheckedCreateInput>
  }

  /**
   * OrderItem createMany
   */
  export type OrderItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OrderItems.
     */
    data: OrderItemCreateManyInput | OrderItemCreateManyInput[]
  }

  /**
   * OrderItem update
   */
  export type OrderItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * The data needed to update a OrderItem.
     */
    data: XOR<OrderItemUpdateInput, OrderItemUncheckedUpdateInput>
    /**
     * Choose, which OrderItem to update.
     */
    where: OrderItemWhereUniqueInput
  }

  /**
   * OrderItem updateMany
   */
  export type OrderItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OrderItems.
     */
    data: XOR<OrderItemUpdateManyMutationInput, OrderItemUncheckedUpdateManyInput>
    /**
     * Filter which OrderItems to update
     */
    where?: OrderItemWhereInput
    /**
     * Limit how many OrderItems to update.
     */
    limit?: number
  }

  /**
   * OrderItem upsert
   */
  export type OrderItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * The filter to search for the OrderItem to update in case it exists.
     */
    where: OrderItemWhereUniqueInput
    /**
     * In case the OrderItem found by the `where` argument doesn't exist, create a new OrderItem with this data.
     */
    create: XOR<OrderItemCreateInput, OrderItemUncheckedCreateInput>
    /**
     * In case the OrderItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrderItemUpdateInput, OrderItemUncheckedUpdateInput>
  }

  /**
   * OrderItem delete
   */
  export type OrderItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * Filter which OrderItem to delete.
     */
    where: OrderItemWhereUniqueInput
  }

  /**
   * OrderItem deleteMany
   */
  export type OrderItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrderItems to delete
     */
    where?: OrderItemWhereInput
    /**
     * Limit how many OrderItems to delete.
     */
    limit?: number
  }

  /**
   * OrderItem without action
   */
  export type OrderItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
  }


  /**
   * Model Collection
   */

  export type AggregateCollection = {
    _count: CollectionCountAggregateOutputType | null
    _avg: CollectionAvgAggregateOutputType | null
    _sum: CollectionSumAggregateOutputType | null
    _min: CollectionMinAggregateOutputType | null
    _max: CollectionMaxAggregateOutputType | null
  }

  export type CollectionAvgAggregateOutputType = {
    amount: Decimal | null
  }

  export type CollectionSumAggregateOutputType = {
    amount: Decimal | null
  }

  export type CollectionMinAggregateOutputType = {
    collection_id: string | null
    partyId: string | null
    partyName: string | null
    empId: string | null
    amount: Decimal | null
    paymentMethod: string | null
    chequeNumber: string | null
    chequeDate: string | null
    bankName: string | null
    upiId: string | null
    transactionId: string | null
    createdAt: Date | null
    verified: boolean | null
    verifiedAt: Date | null
    imageUrl: string | null
  }

  export type CollectionMaxAggregateOutputType = {
    collection_id: string | null
    partyId: string | null
    partyName: string | null
    empId: string | null
    amount: Decimal | null
    paymentMethod: string | null
    chequeNumber: string | null
    chequeDate: string | null
    bankName: string | null
    upiId: string | null
    transactionId: string | null
    createdAt: Date | null
    verified: boolean | null
    verifiedAt: Date | null
    imageUrl: string | null
  }

  export type CollectionCountAggregateOutputType = {
    collection_id: number
    partyId: number
    partyName: number
    empId: number
    amount: number
    paymentMethod: number
    chequeNumber: number
    chequeDate: number
    bankName: number
    upiId: number
    transactionId: number
    createdAt: number
    verified: number
    verifiedAt: number
    imageUrl: number
    _all: number
  }


  export type CollectionAvgAggregateInputType = {
    amount?: true
  }

  export type CollectionSumAggregateInputType = {
    amount?: true
  }

  export type CollectionMinAggregateInputType = {
    collection_id?: true
    partyId?: true
    partyName?: true
    empId?: true
    amount?: true
    paymentMethod?: true
    chequeNumber?: true
    chequeDate?: true
    bankName?: true
    upiId?: true
    transactionId?: true
    createdAt?: true
    verified?: true
    verifiedAt?: true
    imageUrl?: true
  }

  export type CollectionMaxAggregateInputType = {
    collection_id?: true
    partyId?: true
    partyName?: true
    empId?: true
    amount?: true
    paymentMethod?: true
    chequeNumber?: true
    chequeDate?: true
    bankName?: true
    upiId?: true
    transactionId?: true
    createdAt?: true
    verified?: true
    verifiedAt?: true
    imageUrl?: true
  }

  export type CollectionCountAggregateInputType = {
    collection_id?: true
    partyId?: true
    partyName?: true
    empId?: true
    amount?: true
    paymentMethod?: true
    chequeNumber?: true
    chequeDate?: true
    bankName?: true
    upiId?: true
    transactionId?: true
    createdAt?: true
    verified?: true
    verifiedAt?: true
    imageUrl?: true
    _all?: true
  }

  export type CollectionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Collection to aggregate.
     */
    where?: CollectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Collections to fetch.
     */
    orderBy?: CollectionOrderByWithRelationInput | CollectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CollectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Collections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Collections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Collections
    **/
    _count?: true | CollectionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CollectionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CollectionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CollectionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CollectionMaxAggregateInputType
  }

  export type GetCollectionAggregateType<T extends CollectionAggregateArgs> = {
        [P in keyof T & keyof AggregateCollection]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCollection[P]>
      : GetScalarType<T[P], AggregateCollection[P]>
  }




  export type CollectionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CollectionWhereInput
    orderBy?: CollectionOrderByWithAggregationInput | CollectionOrderByWithAggregationInput[]
    by: CollectionScalarFieldEnum[] | CollectionScalarFieldEnum
    having?: CollectionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CollectionCountAggregateInputType | true
    _avg?: CollectionAvgAggregateInputType
    _sum?: CollectionSumAggregateInputType
    _min?: CollectionMinAggregateInputType
    _max?: CollectionMaxAggregateInputType
  }

  export type CollectionGroupByOutputType = {
    collection_id: string
    partyId: string
    partyName: string
    empId: string
    amount: Decimal
    paymentMethod: string
    chequeNumber: string | null
    chequeDate: string | null
    bankName: string | null
    upiId: string | null
    transactionId: string | null
    createdAt: Date
    verified: boolean
    verifiedAt: Date | null
    imageUrl: string | null
    _count: CollectionCountAggregateOutputType | null
    _avg: CollectionAvgAggregateOutputType | null
    _sum: CollectionSumAggregateOutputType | null
    _min: CollectionMinAggregateOutputType | null
    _max: CollectionMaxAggregateOutputType | null
  }

  type GetCollectionGroupByPayload<T extends CollectionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CollectionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CollectionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CollectionGroupByOutputType[P]>
            : GetScalarType<T[P], CollectionGroupByOutputType[P]>
        }
      >
    >


  export type CollectionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    collection_id?: boolean
    partyId?: boolean
    partyName?: boolean
    empId?: boolean
    amount?: boolean
    paymentMethod?: boolean
    chequeNumber?: boolean
    chequeDate?: boolean
    bankName?: boolean
    upiId?: boolean
    transactionId?: boolean
    createdAt?: boolean
    verified?: boolean
    verifiedAt?: boolean
    imageUrl?: boolean
  }, ExtArgs["result"]["collection"]>



  export type CollectionSelectScalar = {
    collection_id?: boolean
    partyId?: boolean
    partyName?: boolean
    empId?: boolean
    amount?: boolean
    paymentMethod?: boolean
    chequeNumber?: boolean
    chequeDate?: boolean
    bankName?: boolean
    upiId?: boolean
    transactionId?: boolean
    createdAt?: boolean
    verified?: boolean
    verifiedAt?: boolean
    imageUrl?: boolean
  }

  export type CollectionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"collection_id" | "partyId" | "partyName" | "empId" | "amount" | "paymentMethod" | "chequeNumber" | "chequeDate" | "bankName" | "upiId" | "transactionId" | "createdAt" | "verified" | "verifiedAt" | "imageUrl", ExtArgs["result"]["collection"]>

  export type $CollectionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Collection"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      collection_id: string
      partyId: string
      partyName: string
      empId: string
      amount: Prisma.Decimal
      paymentMethod: string
      chequeNumber: string | null
      chequeDate: string | null
      bankName: string | null
      upiId: string | null
      transactionId: string | null
      createdAt: Date
      verified: boolean
      verifiedAt: Date | null
      imageUrl: string | null
    }, ExtArgs["result"]["collection"]>
    composites: {}
  }

  type CollectionGetPayload<S extends boolean | null | undefined | CollectionDefaultArgs> = $Result.GetResult<Prisma.$CollectionPayload, S>

  type CollectionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CollectionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CollectionCountAggregateInputType | true
    }

  export interface CollectionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Collection'], meta: { name: 'Collection' } }
    /**
     * Find zero or one Collection that matches the filter.
     * @param {CollectionFindUniqueArgs} args - Arguments to find a Collection
     * @example
     * // Get one Collection
     * const collection = await prisma.collection.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CollectionFindUniqueArgs>(args: SelectSubset<T, CollectionFindUniqueArgs<ExtArgs>>): Prisma__CollectionClient<$Result.GetResult<Prisma.$CollectionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Collection that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CollectionFindUniqueOrThrowArgs} args - Arguments to find a Collection
     * @example
     * // Get one Collection
     * const collection = await prisma.collection.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CollectionFindUniqueOrThrowArgs>(args: SelectSubset<T, CollectionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CollectionClient<$Result.GetResult<Prisma.$CollectionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Collection that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollectionFindFirstArgs} args - Arguments to find a Collection
     * @example
     * // Get one Collection
     * const collection = await prisma.collection.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CollectionFindFirstArgs>(args?: SelectSubset<T, CollectionFindFirstArgs<ExtArgs>>): Prisma__CollectionClient<$Result.GetResult<Prisma.$CollectionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Collection that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollectionFindFirstOrThrowArgs} args - Arguments to find a Collection
     * @example
     * // Get one Collection
     * const collection = await prisma.collection.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CollectionFindFirstOrThrowArgs>(args?: SelectSubset<T, CollectionFindFirstOrThrowArgs<ExtArgs>>): Prisma__CollectionClient<$Result.GetResult<Prisma.$CollectionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Collections that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollectionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Collections
     * const collections = await prisma.collection.findMany()
     * 
     * // Get first 10 Collections
     * const collections = await prisma.collection.findMany({ take: 10 })
     * 
     * // Only select the `collection_id`
     * const collectionWithCollection_idOnly = await prisma.collection.findMany({ select: { collection_id: true } })
     * 
     */
    findMany<T extends CollectionFindManyArgs>(args?: SelectSubset<T, CollectionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CollectionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Collection.
     * @param {CollectionCreateArgs} args - Arguments to create a Collection.
     * @example
     * // Create one Collection
     * const Collection = await prisma.collection.create({
     *   data: {
     *     // ... data to create a Collection
     *   }
     * })
     * 
     */
    create<T extends CollectionCreateArgs>(args: SelectSubset<T, CollectionCreateArgs<ExtArgs>>): Prisma__CollectionClient<$Result.GetResult<Prisma.$CollectionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Collections.
     * @param {CollectionCreateManyArgs} args - Arguments to create many Collections.
     * @example
     * // Create many Collections
     * const collection = await prisma.collection.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CollectionCreateManyArgs>(args?: SelectSubset<T, CollectionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Collection.
     * @param {CollectionDeleteArgs} args - Arguments to delete one Collection.
     * @example
     * // Delete one Collection
     * const Collection = await prisma.collection.delete({
     *   where: {
     *     // ... filter to delete one Collection
     *   }
     * })
     * 
     */
    delete<T extends CollectionDeleteArgs>(args: SelectSubset<T, CollectionDeleteArgs<ExtArgs>>): Prisma__CollectionClient<$Result.GetResult<Prisma.$CollectionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Collection.
     * @param {CollectionUpdateArgs} args - Arguments to update one Collection.
     * @example
     * // Update one Collection
     * const collection = await prisma.collection.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CollectionUpdateArgs>(args: SelectSubset<T, CollectionUpdateArgs<ExtArgs>>): Prisma__CollectionClient<$Result.GetResult<Prisma.$CollectionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Collections.
     * @param {CollectionDeleteManyArgs} args - Arguments to filter Collections to delete.
     * @example
     * // Delete a few Collections
     * const { count } = await prisma.collection.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CollectionDeleteManyArgs>(args?: SelectSubset<T, CollectionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Collections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollectionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Collections
     * const collection = await prisma.collection.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CollectionUpdateManyArgs>(args: SelectSubset<T, CollectionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Collection.
     * @param {CollectionUpsertArgs} args - Arguments to update or create a Collection.
     * @example
     * // Update or create a Collection
     * const collection = await prisma.collection.upsert({
     *   create: {
     *     // ... data to create a Collection
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Collection we want to update
     *   }
     * })
     */
    upsert<T extends CollectionUpsertArgs>(args: SelectSubset<T, CollectionUpsertArgs<ExtArgs>>): Prisma__CollectionClient<$Result.GetResult<Prisma.$CollectionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Collections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollectionCountArgs} args - Arguments to filter Collections to count.
     * @example
     * // Count the number of Collections
     * const count = await prisma.collection.count({
     *   where: {
     *     // ... the filter for the Collections we want to count
     *   }
     * })
    **/
    count<T extends CollectionCountArgs>(
      args?: Subset<T, CollectionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CollectionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Collection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollectionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CollectionAggregateArgs>(args: Subset<T, CollectionAggregateArgs>): Prisma.PrismaPromise<GetCollectionAggregateType<T>>

    /**
     * Group by Collection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollectionGroupByArgs} args - Group by arguments.
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
      T extends CollectionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CollectionGroupByArgs['orderBy'] }
        : { orderBy?: CollectionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, CollectionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCollectionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Collection model
   */
  readonly fields: CollectionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Collection.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CollectionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Collection model
   */
  interface CollectionFieldRefs {
    readonly collection_id: FieldRef<"Collection", 'String'>
    readonly partyId: FieldRef<"Collection", 'String'>
    readonly partyName: FieldRef<"Collection", 'String'>
    readonly empId: FieldRef<"Collection", 'String'>
    readonly amount: FieldRef<"Collection", 'Decimal'>
    readonly paymentMethod: FieldRef<"Collection", 'String'>
    readonly chequeNumber: FieldRef<"Collection", 'String'>
    readonly chequeDate: FieldRef<"Collection", 'String'>
    readonly bankName: FieldRef<"Collection", 'String'>
    readonly upiId: FieldRef<"Collection", 'String'>
    readonly transactionId: FieldRef<"Collection", 'String'>
    readonly createdAt: FieldRef<"Collection", 'DateTime'>
    readonly verified: FieldRef<"Collection", 'Boolean'>
    readonly verifiedAt: FieldRef<"Collection", 'DateTime'>
    readonly imageUrl: FieldRef<"Collection", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Collection findUnique
   */
  export type CollectionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collection
     */
    select?: CollectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Collection
     */
    omit?: CollectionOmit<ExtArgs> | null
    /**
     * Filter, which Collection to fetch.
     */
    where: CollectionWhereUniqueInput
  }

  /**
   * Collection findUniqueOrThrow
   */
  export type CollectionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collection
     */
    select?: CollectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Collection
     */
    omit?: CollectionOmit<ExtArgs> | null
    /**
     * Filter, which Collection to fetch.
     */
    where: CollectionWhereUniqueInput
  }

  /**
   * Collection findFirst
   */
  export type CollectionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collection
     */
    select?: CollectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Collection
     */
    omit?: CollectionOmit<ExtArgs> | null
    /**
     * Filter, which Collection to fetch.
     */
    where?: CollectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Collections to fetch.
     */
    orderBy?: CollectionOrderByWithRelationInput | CollectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Collections.
     */
    cursor?: CollectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Collections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Collections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Collections.
     */
    distinct?: CollectionScalarFieldEnum | CollectionScalarFieldEnum[]
  }

  /**
   * Collection findFirstOrThrow
   */
  export type CollectionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collection
     */
    select?: CollectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Collection
     */
    omit?: CollectionOmit<ExtArgs> | null
    /**
     * Filter, which Collection to fetch.
     */
    where?: CollectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Collections to fetch.
     */
    orderBy?: CollectionOrderByWithRelationInput | CollectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Collections.
     */
    cursor?: CollectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Collections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Collections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Collections.
     */
    distinct?: CollectionScalarFieldEnum | CollectionScalarFieldEnum[]
  }

  /**
   * Collection findMany
   */
  export type CollectionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collection
     */
    select?: CollectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Collection
     */
    omit?: CollectionOmit<ExtArgs> | null
    /**
     * Filter, which Collections to fetch.
     */
    where?: CollectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Collections to fetch.
     */
    orderBy?: CollectionOrderByWithRelationInput | CollectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Collections.
     */
    cursor?: CollectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Collections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Collections.
     */
    skip?: number
    distinct?: CollectionScalarFieldEnum | CollectionScalarFieldEnum[]
  }

  /**
   * Collection create
   */
  export type CollectionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collection
     */
    select?: CollectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Collection
     */
    omit?: CollectionOmit<ExtArgs> | null
    /**
     * The data needed to create a Collection.
     */
    data: XOR<CollectionCreateInput, CollectionUncheckedCreateInput>
  }

  /**
   * Collection createMany
   */
  export type CollectionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Collections.
     */
    data: CollectionCreateManyInput | CollectionCreateManyInput[]
  }

  /**
   * Collection update
   */
  export type CollectionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collection
     */
    select?: CollectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Collection
     */
    omit?: CollectionOmit<ExtArgs> | null
    /**
     * The data needed to update a Collection.
     */
    data: XOR<CollectionUpdateInput, CollectionUncheckedUpdateInput>
    /**
     * Choose, which Collection to update.
     */
    where: CollectionWhereUniqueInput
  }

  /**
   * Collection updateMany
   */
  export type CollectionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Collections.
     */
    data: XOR<CollectionUpdateManyMutationInput, CollectionUncheckedUpdateManyInput>
    /**
     * Filter which Collections to update
     */
    where?: CollectionWhereInput
    /**
     * Limit how many Collections to update.
     */
    limit?: number
  }

  /**
   * Collection upsert
   */
  export type CollectionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collection
     */
    select?: CollectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Collection
     */
    omit?: CollectionOmit<ExtArgs> | null
    /**
     * The filter to search for the Collection to update in case it exists.
     */
    where: CollectionWhereUniqueInput
    /**
     * In case the Collection found by the `where` argument doesn't exist, create a new Collection with this data.
     */
    create: XOR<CollectionCreateInput, CollectionUncheckedCreateInput>
    /**
     * In case the Collection was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CollectionUpdateInput, CollectionUncheckedUpdateInput>
  }

  /**
   * Collection delete
   */
  export type CollectionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collection
     */
    select?: CollectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Collection
     */
    omit?: CollectionOmit<ExtArgs> | null
    /**
     * Filter which Collection to delete.
     */
    where: CollectionWhereUniqueInput
  }

  /**
   * Collection deleteMany
   */
  export type CollectionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Collections to delete
     */
    where?: CollectionWhereInput
    /**
     * Limit how many Collections to delete.
     */
    limit?: number
  }

  /**
   * Collection without action
   */
  export type CollectionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collection
     */
    select?: CollectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Collection
     */
    omit?: CollectionOmit<ExtArgs> | null
  }


  /**
   * Model PartyEditRequest
   */

  export type AggregatePartyEditRequest = {
    _count: PartyEditRequestCountAggregateOutputType | null
    _min: PartyEditRequestMinAggregateOutputType | null
    _max: PartyEditRequestMaxAggregateOutputType | null
  }

  export type PartyEditRequestMinAggregateOutputType = {
    request_id: string | null
    partyId: string | null
    partyName: string | null
    empId: string | null
    updatedName: string | null
    updatedAddress: string | null
    updatedContactPerson: string | null
    updatedMobileNumber: string | null
    updatedEmailId: string | null
    shopImage1: string | null
    shopImage2: string | null
    status: string | null
    adminComment: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PartyEditRequestMaxAggregateOutputType = {
    request_id: string | null
    partyId: string | null
    partyName: string | null
    empId: string | null
    updatedName: string | null
    updatedAddress: string | null
    updatedContactPerson: string | null
    updatedMobileNumber: string | null
    updatedEmailId: string | null
    shopImage1: string | null
    shopImage2: string | null
    status: string | null
    adminComment: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PartyEditRequestCountAggregateOutputType = {
    request_id: number
    partyId: number
    partyName: number
    empId: number
    updatedName: number
    updatedAddress: number
    updatedContactPerson: number
    updatedMobileNumber: number
    updatedEmailId: number
    shopImage1: number
    shopImage2: number
    status: number
    adminComment: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PartyEditRequestMinAggregateInputType = {
    request_id?: true
    partyId?: true
    partyName?: true
    empId?: true
    updatedName?: true
    updatedAddress?: true
    updatedContactPerson?: true
    updatedMobileNumber?: true
    updatedEmailId?: true
    shopImage1?: true
    shopImage2?: true
    status?: true
    adminComment?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PartyEditRequestMaxAggregateInputType = {
    request_id?: true
    partyId?: true
    partyName?: true
    empId?: true
    updatedName?: true
    updatedAddress?: true
    updatedContactPerson?: true
    updatedMobileNumber?: true
    updatedEmailId?: true
    shopImage1?: true
    shopImage2?: true
    status?: true
    adminComment?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PartyEditRequestCountAggregateInputType = {
    request_id?: true
    partyId?: true
    partyName?: true
    empId?: true
    updatedName?: true
    updatedAddress?: true
    updatedContactPerson?: true
    updatedMobileNumber?: true
    updatedEmailId?: true
    shopImage1?: true
    shopImage2?: true
    status?: true
    adminComment?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PartyEditRequestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PartyEditRequest to aggregate.
     */
    where?: PartyEditRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PartyEditRequests to fetch.
     */
    orderBy?: PartyEditRequestOrderByWithRelationInput | PartyEditRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PartyEditRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PartyEditRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PartyEditRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PartyEditRequests
    **/
    _count?: true | PartyEditRequestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PartyEditRequestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PartyEditRequestMaxAggregateInputType
  }

  export type GetPartyEditRequestAggregateType<T extends PartyEditRequestAggregateArgs> = {
        [P in keyof T & keyof AggregatePartyEditRequest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePartyEditRequest[P]>
      : GetScalarType<T[P], AggregatePartyEditRequest[P]>
  }




  export type PartyEditRequestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PartyEditRequestWhereInput
    orderBy?: PartyEditRequestOrderByWithAggregationInput | PartyEditRequestOrderByWithAggregationInput[]
    by: PartyEditRequestScalarFieldEnum[] | PartyEditRequestScalarFieldEnum
    having?: PartyEditRequestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PartyEditRequestCountAggregateInputType | true
    _min?: PartyEditRequestMinAggregateInputType
    _max?: PartyEditRequestMaxAggregateInputType
  }

  export type PartyEditRequestGroupByOutputType = {
    request_id: string
    partyId: string
    partyName: string
    empId: string
    updatedName: string | null
    updatedAddress: string | null
    updatedContactPerson: string | null
    updatedMobileNumber: string | null
    updatedEmailId: string | null
    shopImage1: string | null
    shopImage2: string | null
    status: string
    adminComment: string | null
    createdAt: Date
    updatedAt: Date
    _count: PartyEditRequestCountAggregateOutputType | null
    _min: PartyEditRequestMinAggregateOutputType | null
    _max: PartyEditRequestMaxAggregateOutputType | null
  }

  type GetPartyEditRequestGroupByPayload<T extends PartyEditRequestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PartyEditRequestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PartyEditRequestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PartyEditRequestGroupByOutputType[P]>
            : GetScalarType<T[P], PartyEditRequestGroupByOutputType[P]>
        }
      >
    >


  export type PartyEditRequestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    request_id?: boolean
    partyId?: boolean
    partyName?: boolean
    empId?: boolean
    updatedName?: boolean
    updatedAddress?: boolean
    updatedContactPerson?: boolean
    updatedMobileNumber?: boolean
    updatedEmailId?: boolean
    shopImage1?: boolean
    shopImage2?: boolean
    status?: boolean
    adminComment?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["partyEditRequest"]>



  export type PartyEditRequestSelectScalar = {
    request_id?: boolean
    partyId?: boolean
    partyName?: boolean
    empId?: boolean
    updatedName?: boolean
    updatedAddress?: boolean
    updatedContactPerson?: boolean
    updatedMobileNumber?: boolean
    updatedEmailId?: boolean
    shopImage1?: boolean
    shopImage2?: boolean
    status?: boolean
    adminComment?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PartyEditRequestOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"request_id" | "partyId" | "partyName" | "empId" | "updatedName" | "updatedAddress" | "updatedContactPerson" | "updatedMobileNumber" | "updatedEmailId" | "shopImage1" | "shopImage2" | "status" | "adminComment" | "createdAt" | "updatedAt", ExtArgs["result"]["partyEditRequest"]>

  export type $PartyEditRequestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PartyEditRequest"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      request_id: string
      partyId: string
      partyName: string
      empId: string
      updatedName: string | null
      updatedAddress: string | null
      updatedContactPerson: string | null
      updatedMobileNumber: string | null
      updatedEmailId: string | null
      shopImage1: string | null
      shopImage2: string | null
      status: string
      adminComment: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["partyEditRequest"]>
    composites: {}
  }

  type PartyEditRequestGetPayload<S extends boolean | null | undefined | PartyEditRequestDefaultArgs> = $Result.GetResult<Prisma.$PartyEditRequestPayload, S>

  type PartyEditRequestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PartyEditRequestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PartyEditRequestCountAggregateInputType | true
    }

  export interface PartyEditRequestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PartyEditRequest'], meta: { name: 'PartyEditRequest' } }
    /**
     * Find zero or one PartyEditRequest that matches the filter.
     * @param {PartyEditRequestFindUniqueArgs} args - Arguments to find a PartyEditRequest
     * @example
     * // Get one PartyEditRequest
     * const partyEditRequest = await prisma.partyEditRequest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PartyEditRequestFindUniqueArgs>(args: SelectSubset<T, PartyEditRequestFindUniqueArgs<ExtArgs>>): Prisma__PartyEditRequestClient<$Result.GetResult<Prisma.$PartyEditRequestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PartyEditRequest that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PartyEditRequestFindUniqueOrThrowArgs} args - Arguments to find a PartyEditRequest
     * @example
     * // Get one PartyEditRequest
     * const partyEditRequest = await prisma.partyEditRequest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PartyEditRequestFindUniqueOrThrowArgs>(args: SelectSubset<T, PartyEditRequestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PartyEditRequestClient<$Result.GetResult<Prisma.$PartyEditRequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PartyEditRequest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartyEditRequestFindFirstArgs} args - Arguments to find a PartyEditRequest
     * @example
     * // Get one PartyEditRequest
     * const partyEditRequest = await prisma.partyEditRequest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PartyEditRequestFindFirstArgs>(args?: SelectSubset<T, PartyEditRequestFindFirstArgs<ExtArgs>>): Prisma__PartyEditRequestClient<$Result.GetResult<Prisma.$PartyEditRequestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PartyEditRequest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartyEditRequestFindFirstOrThrowArgs} args - Arguments to find a PartyEditRequest
     * @example
     * // Get one PartyEditRequest
     * const partyEditRequest = await prisma.partyEditRequest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PartyEditRequestFindFirstOrThrowArgs>(args?: SelectSubset<T, PartyEditRequestFindFirstOrThrowArgs<ExtArgs>>): Prisma__PartyEditRequestClient<$Result.GetResult<Prisma.$PartyEditRequestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PartyEditRequests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartyEditRequestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PartyEditRequests
     * const partyEditRequests = await prisma.partyEditRequest.findMany()
     * 
     * // Get first 10 PartyEditRequests
     * const partyEditRequests = await prisma.partyEditRequest.findMany({ take: 10 })
     * 
     * // Only select the `request_id`
     * const partyEditRequestWithRequest_idOnly = await prisma.partyEditRequest.findMany({ select: { request_id: true } })
     * 
     */
    findMany<T extends PartyEditRequestFindManyArgs>(args?: SelectSubset<T, PartyEditRequestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PartyEditRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PartyEditRequest.
     * @param {PartyEditRequestCreateArgs} args - Arguments to create a PartyEditRequest.
     * @example
     * // Create one PartyEditRequest
     * const PartyEditRequest = await prisma.partyEditRequest.create({
     *   data: {
     *     // ... data to create a PartyEditRequest
     *   }
     * })
     * 
     */
    create<T extends PartyEditRequestCreateArgs>(args: SelectSubset<T, PartyEditRequestCreateArgs<ExtArgs>>): Prisma__PartyEditRequestClient<$Result.GetResult<Prisma.$PartyEditRequestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PartyEditRequests.
     * @param {PartyEditRequestCreateManyArgs} args - Arguments to create many PartyEditRequests.
     * @example
     * // Create many PartyEditRequests
     * const partyEditRequest = await prisma.partyEditRequest.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PartyEditRequestCreateManyArgs>(args?: SelectSubset<T, PartyEditRequestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a PartyEditRequest.
     * @param {PartyEditRequestDeleteArgs} args - Arguments to delete one PartyEditRequest.
     * @example
     * // Delete one PartyEditRequest
     * const PartyEditRequest = await prisma.partyEditRequest.delete({
     *   where: {
     *     // ... filter to delete one PartyEditRequest
     *   }
     * })
     * 
     */
    delete<T extends PartyEditRequestDeleteArgs>(args: SelectSubset<T, PartyEditRequestDeleteArgs<ExtArgs>>): Prisma__PartyEditRequestClient<$Result.GetResult<Prisma.$PartyEditRequestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PartyEditRequest.
     * @param {PartyEditRequestUpdateArgs} args - Arguments to update one PartyEditRequest.
     * @example
     * // Update one PartyEditRequest
     * const partyEditRequest = await prisma.partyEditRequest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PartyEditRequestUpdateArgs>(args: SelectSubset<T, PartyEditRequestUpdateArgs<ExtArgs>>): Prisma__PartyEditRequestClient<$Result.GetResult<Prisma.$PartyEditRequestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PartyEditRequests.
     * @param {PartyEditRequestDeleteManyArgs} args - Arguments to filter PartyEditRequests to delete.
     * @example
     * // Delete a few PartyEditRequests
     * const { count } = await prisma.partyEditRequest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PartyEditRequestDeleteManyArgs>(args?: SelectSubset<T, PartyEditRequestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PartyEditRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartyEditRequestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PartyEditRequests
     * const partyEditRequest = await prisma.partyEditRequest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PartyEditRequestUpdateManyArgs>(args: SelectSubset<T, PartyEditRequestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PartyEditRequest.
     * @param {PartyEditRequestUpsertArgs} args - Arguments to update or create a PartyEditRequest.
     * @example
     * // Update or create a PartyEditRequest
     * const partyEditRequest = await prisma.partyEditRequest.upsert({
     *   create: {
     *     // ... data to create a PartyEditRequest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PartyEditRequest we want to update
     *   }
     * })
     */
    upsert<T extends PartyEditRequestUpsertArgs>(args: SelectSubset<T, PartyEditRequestUpsertArgs<ExtArgs>>): Prisma__PartyEditRequestClient<$Result.GetResult<Prisma.$PartyEditRequestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PartyEditRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartyEditRequestCountArgs} args - Arguments to filter PartyEditRequests to count.
     * @example
     * // Count the number of PartyEditRequests
     * const count = await prisma.partyEditRequest.count({
     *   where: {
     *     // ... the filter for the PartyEditRequests we want to count
     *   }
     * })
    **/
    count<T extends PartyEditRequestCountArgs>(
      args?: Subset<T, PartyEditRequestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PartyEditRequestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PartyEditRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartyEditRequestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PartyEditRequestAggregateArgs>(args: Subset<T, PartyEditRequestAggregateArgs>): Prisma.PrismaPromise<GetPartyEditRequestAggregateType<T>>

    /**
     * Group by PartyEditRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartyEditRequestGroupByArgs} args - Group by arguments.
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
      T extends PartyEditRequestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PartyEditRequestGroupByArgs['orderBy'] }
        : { orderBy?: PartyEditRequestGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, PartyEditRequestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPartyEditRequestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PartyEditRequest model
   */
  readonly fields: PartyEditRequestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PartyEditRequest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PartyEditRequestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PartyEditRequest model
   */
  interface PartyEditRequestFieldRefs {
    readonly request_id: FieldRef<"PartyEditRequest", 'String'>
    readonly partyId: FieldRef<"PartyEditRequest", 'String'>
    readonly partyName: FieldRef<"PartyEditRequest", 'String'>
    readonly empId: FieldRef<"PartyEditRequest", 'String'>
    readonly updatedName: FieldRef<"PartyEditRequest", 'String'>
    readonly updatedAddress: FieldRef<"PartyEditRequest", 'String'>
    readonly updatedContactPerson: FieldRef<"PartyEditRequest", 'String'>
    readonly updatedMobileNumber: FieldRef<"PartyEditRequest", 'String'>
    readonly updatedEmailId: FieldRef<"PartyEditRequest", 'String'>
    readonly shopImage1: FieldRef<"PartyEditRequest", 'String'>
    readonly shopImage2: FieldRef<"PartyEditRequest", 'String'>
    readonly status: FieldRef<"PartyEditRequest", 'String'>
    readonly adminComment: FieldRef<"PartyEditRequest", 'String'>
    readonly createdAt: FieldRef<"PartyEditRequest", 'DateTime'>
    readonly updatedAt: FieldRef<"PartyEditRequest", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PartyEditRequest findUnique
   */
  export type PartyEditRequestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartyEditRequest
     */
    select?: PartyEditRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PartyEditRequest
     */
    omit?: PartyEditRequestOmit<ExtArgs> | null
    /**
     * Filter, which PartyEditRequest to fetch.
     */
    where: PartyEditRequestWhereUniqueInput
  }

  /**
   * PartyEditRequest findUniqueOrThrow
   */
  export type PartyEditRequestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartyEditRequest
     */
    select?: PartyEditRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PartyEditRequest
     */
    omit?: PartyEditRequestOmit<ExtArgs> | null
    /**
     * Filter, which PartyEditRequest to fetch.
     */
    where: PartyEditRequestWhereUniqueInput
  }

  /**
   * PartyEditRequest findFirst
   */
  export type PartyEditRequestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartyEditRequest
     */
    select?: PartyEditRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PartyEditRequest
     */
    omit?: PartyEditRequestOmit<ExtArgs> | null
    /**
     * Filter, which PartyEditRequest to fetch.
     */
    where?: PartyEditRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PartyEditRequests to fetch.
     */
    orderBy?: PartyEditRequestOrderByWithRelationInput | PartyEditRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PartyEditRequests.
     */
    cursor?: PartyEditRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PartyEditRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PartyEditRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PartyEditRequests.
     */
    distinct?: PartyEditRequestScalarFieldEnum | PartyEditRequestScalarFieldEnum[]
  }

  /**
   * PartyEditRequest findFirstOrThrow
   */
  export type PartyEditRequestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartyEditRequest
     */
    select?: PartyEditRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PartyEditRequest
     */
    omit?: PartyEditRequestOmit<ExtArgs> | null
    /**
     * Filter, which PartyEditRequest to fetch.
     */
    where?: PartyEditRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PartyEditRequests to fetch.
     */
    orderBy?: PartyEditRequestOrderByWithRelationInput | PartyEditRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PartyEditRequests.
     */
    cursor?: PartyEditRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PartyEditRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PartyEditRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PartyEditRequests.
     */
    distinct?: PartyEditRequestScalarFieldEnum | PartyEditRequestScalarFieldEnum[]
  }

  /**
   * PartyEditRequest findMany
   */
  export type PartyEditRequestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartyEditRequest
     */
    select?: PartyEditRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PartyEditRequest
     */
    omit?: PartyEditRequestOmit<ExtArgs> | null
    /**
     * Filter, which PartyEditRequests to fetch.
     */
    where?: PartyEditRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PartyEditRequests to fetch.
     */
    orderBy?: PartyEditRequestOrderByWithRelationInput | PartyEditRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PartyEditRequests.
     */
    cursor?: PartyEditRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PartyEditRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PartyEditRequests.
     */
    skip?: number
    distinct?: PartyEditRequestScalarFieldEnum | PartyEditRequestScalarFieldEnum[]
  }

  /**
   * PartyEditRequest create
   */
  export type PartyEditRequestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartyEditRequest
     */
    select?: PartyEditRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PartyEditRequest
     */
    omit?: PartyEditRequestOmit<ExtArgs> | null
    /**
     * The data needed to create a PartyEditRequest.
     */
    data: XOR<PartyEditRequestCreateInput, PartyEditRequestUncheckedCreateInput>
  }

  /**
   * PartyEditRequest createMany
   */
  export type PartyEditRequestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PartyEditRequests.
     */
    data: PartyEditRequestCreateManyInput | PartyEditRequestCreateManyInput[]
  }

  /**
   * PartyEditRequest update
   */
  export type PartyEditRequestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartyEditRequest
     */
    select?: PartyEditRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PartyEditRequest
     */
    omit?: PartyEditRequestOmit<ExtArgs> | null
    /**
     * The data needed to update a PartyEditRequest.
     */
    data: XOR<PartyEditRequestUpdateInput, PartyEditRequestUncheckedUpdateInput>
    /**
     * Choose, which PartyEditRequest to update.
     */
    where: PartyEditRequestWhereUniqueInput
  }

  /**
   * PartyEditRequest updateMany
   */
  export type PartyEditRequestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PartyEditRequests.
     */
    data: XOR<PartyEditRequestUpdateManyMutationInput, PartyEditRequestUncheckedUpdateManyInput>
    /**
     * Filter which PartyEditRequests to update
     */
    where?: PartyEditRequestWhereInput
    /**
     * Limit how many PartyEditRequests to update.
     */
    limit?: number
  }

  /**
   * PartyEditRequest upsert
   */
  export type PartyEditRequestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartyEditRequest
     */
    select?: PartyEditRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PartyEditRequest
     */
    omit?: PartyEditRequestOmit<ExtArgs> | null
    /**
     * The filter to search for the PartyEditRequest to update in case it exists.
     */
    where: PartyEditRequestWhereUniqueInput
    /**
     * In case the PartyEditRequest found by the `where` argument doesn't exist, create a new PartyEditRequest with this data.
     */
    create: XOR<PartyEditRequestCreateInput, PartyEditRequestUncheckedCreateInput>
    /**
     * In case the PartyEditRequest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PartyEditRequestUpdateInput, PartyEditRequestUncheckedUpdateInput>
  }

  /**
   * PartyEditRequest delete
   */
  export type PartyEditRequestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartyEditRequest
     */
    select?: PartyEditRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PartyEditRequest
     */
    omit?: PartyEditRequestOmit<ExtArgs> | null
    /**
     * Filter which PartyEditRequest to delete.
     */
    where: PartyEditRequestWhereUniqueInput
  }

  /**
   * PartyEditRequest deleteMany
   */
  export type PartyEditRequestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PartyEditRequests to delete
     */
    where?: PartyEditRequestWhereInput
    /**
     * Limit how many PartyEditRequests to delete.
     */
    limit?: number
  }

  /**
   * PartyEditRequest without action
   */
  export type PartyEditRequestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartyEditRequest
     */
    select?: PartyEditRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PartyEditRequest
     */
    omit?: PartyEditRequestOmit<ExtArgs> | null
  }


  /**
   * Model Stock
   */

  export type AggregateStock = {
    _count: StockCountAggregateOutputType | null
    _min: StockMinAggregateOutputType | null
    _max: StockMaxAggregateOutputType | null
  }

  export type StockMinAggregateOutputType = {
    stock_id: string | null
    partyId: string | null
    partyName: string | null
    empId: string | null
    createdAt: Date | null
  }

  export type StockMaxAggregateOutputType = {
    stock_id: string | null
    partyId: string | null
    partyName: string | null
    empId: string | null
    createdAt: Date | null
  }

  export type StockCountAggregateOutputType = {
    stock_id: number
    partyId: number
    partyName: number
    empId: number
    createdAt: number
    _all: number
  }


  export type StockMinAggregateInputType = {
    stock_id?: true
    partyId?: true
    partyName?: true
    empId?: true
    createdAt?: true
  }

  export type StockMaxAggregateInputType = {
    stock_id?: true
    partyId?: true
    partyName?: true
    empId?: true
    createdAt?: true
  }

  export type StockCountAggregateInputType = {
    stock_id?: true
    partyId?: true
    partyName?: true
    empId?: true
    createdAt?: true
    _all?: true
  }

  export type StockAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Stock to aggregate.
     */
    where?: StockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stocks to fetch.
     */
    orderBy?: StockOrderByWithRelationInput | StockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Stocks
    **/
    _count?: true | StockCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StockMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StockMaxAggregateInputType
  }

  export type GetStockAggregateType<T extends StockAggregateArgs> = {
        [P in keyof T & keyof AggregateStock]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStock[P]>
      : GetScalarType<T[P], AggregateStock[P]>
  }




  export type StockGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StockWhereInput
    orderBy?: StockOrderByWithAggregationInput | StockOrderByWithAggregationInput[]
    by: StockScalarFieldEnum[] | StockScalarFieldEnum
    having?: StockScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StockCountAggregateInputType | true
    _min?: StockMinAggregateInputType
    _max?: StockMaxAggregateInputType
  }

  export type StockGroupByOutputType = {
    stock_id: string
    partyId: string
    partyName: string
    empId: string
    createdAt: Date
    _count: StockCountAggregateOutputType | null
    _min: StockMinAggregateOutputType | null
    _max: StockMaxAggregateOutputType | null
  }

  type GetStockGroupByPayload<T extends StockGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StockGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StockGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StockGroupByOutputType[P]>
            : GetScalarType<T[P], StockGroupByOutputType[P]>
        }
      >
    >


  export type StockSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    stock_id?: boolean
    partyId?: boolean
    partyName?: boolean
    empId?: boolean
    createdAt?: boolean
    stockItems?: boolean | Stock$stockItemsArgs<ExtArgs>
    _count?: boolean | StockCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stock"]>



  export type StockSelectScalar = {
    stock_id?: boolean
    partyId?: boolean
    partyName?: boolean
    empId?: boolean
    createdAt?: boolean
  }

  export type StockOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"stock_id" | "partyId" | "partyName" | "empId" | "createdAt", ExtArgs["result"]["stock"]>
  export type StockInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    stockItems?: boolean | Stock$stockItemsArgs<ExtArgs>
    _count?: boolean | StockCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $StockPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Stock"
    objects: {
      stockItems: Prisma.$StockItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      stock_id: string
      partyId: string
      partyName: string
      empId: string
      createdAt: Date
    }, ExtArgs["result"]["stock"]>
    composites: {}
  }

  type StockGetPayload<S extends boolean | null | undefined | StockDefaultArgs> = $Result.GetResult<Prisma.$StockPayload, S>

  type StockCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StockFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StockCountAggregateInputType | true
    }

  export interface StockDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Stock'], meta: { name: 'Stock' } }
    /**
     * Find zero or one Stock that matches the filter.
     * @param {StockFindUniqueArgs} args - Arguments to find a Stock
     * @example
     * // Get one Stock
     * const stock = await prisma.stock.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StockFindUniqueArgs>(args: SelectSubset<T, StockFindUniqueArgs<ExtArgs>>): Prisma__StockClient<$Result.GetResult<Prisma.$StockPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Stock that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StockFindUniqueOrThrowArgs} args - Arguments to find a Stock
     * @example
     * // Get one Stock
     * const stock = await prisma.stock.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StockFindUniqueOrThrowArgs>(args: SelectSubset<T, StockFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StockClient<$Result.GetResult<Prisma.$StockPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Stock that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockFindFirstArgs} args - Arguments to find a Stock
     * @example
     * // Get one Stock
     * const stock = await prisma.stock.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StockFindFirstArgs>(args?: SelectSubset<T, StockFindFirstArgs<ExtArgs>>): Prisma__StockClient<$Result.GetResult<Prisma.$StockPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Stock that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockFindFirstOrThrowArgs} args - Arguments to find a Stock
     * @example
     * // Get one Stock
     * const stock = await prisma.stock.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StockFindFirstOrThrowArgs>(args?: SelectSubset<T, StockFindFirstOrThrowArgs<ExtArgs>>): Prisma__StockClient<$Result.GetResult<Prisma.$StockPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Stocks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Stocks
     * const stocks = await prisma.stock.findMany()
     * 
     * // Get first 10 Stocks
     * const stocks = await prisma.stock.findMany({ take: 10 })
     * 
     * // Only select the `stock_id`
     * const stockWithStock_idOnly = await prisma.stock.findMany({ select: { stock_id: true } })
     * 
     */
    findMany<T extends StockFindManyArgs>(args?: SelectSubset<T, StockFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StockPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Stock.
     * @param {StockCreateArgs} args - Arguments to create a Stock.
     * @example
     * // Create one Stock
     * const Stock = await prisma.stock.create({
     *   data: {
     *     // ... data to create a Stock
     *   }
     * })
     * 
     */
    create<T extends StockCreateArgs>(args: SelectSubset<T, StockCreateArgs<ExtArgs>>): Prisma__StockClient<$Result.GetResult<Prisma.$StockPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Stocks.
     * @param {StockCreateManyArgs} args - Arguments to create many Stocks.
     * @example
     * // Create many Stocks
     * const stock = await prisma.stock.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StockCreateManyArgs>(args?: SelectSubset<T, StockCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Stock.
     * @param {StockDeleteArgs} args - Arguments to delete one Stock.
     * @example
     * // Delete one Stock
     * const Stock = await prisma.stock.delete({
     *   where: {
     *     // ... filter to delete one Stock
     *   }
     * })
     * 
     */
    delete<T extends StockDeleteArgs>(args: SelectSubset<T, StockDeleteArgs<ExtArgs>>): Prisma__StockClient<$Result.GetResult<Prisma.$StockPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Stock.
     * @param {StockUpdateArgs} args - Arguments to update one Stock.
     * @example
     * // Update one Stock
     * const stock = await prisma.stock.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StockUpdateArgs>(args: SelectSubset<T, StockUpdateArgs<ExtArgs>>): Prisma__StockClient<$Result.GetResult<Prisma.$StockPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Stocks.
     * @param {StockDeleteManyArgs} args - Arguments to filter Stocks to delete.
     * @example
     * // Delete a few Stocks
     * const { count } = await prisma.stock.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StockDeleteManyArgs>(args?: SelectSubset<T, StockDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Stocks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Stocks
     * const stock = await prisma.stock.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StockUpdateManyArgs>(args: SelectSubset<T, StockUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Stock.
     * @param {StockUpsertArgs} args - Arguments to update or create a Stock.
     * @example
     * // Update or create a Stock
     * const stock = await prisma.stock.upsert({
     *   create: {
     *     // ... data to create a Stock
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Stock we want to update
     *   }
     * })
     */
    upsert<T extends StockUpsertArgs>(args: SelectSubset<T, StockUpsertArgs<ExtArgs>>): Prisma__StockClient<$Result.GetResult<Prisma.$StockPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Stocks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockCountArgs} args - Arguments to filter Stocks to count.
     * @example
     * // Count the number of Stocks
     * const count = await prisma.stock.count({
     *   where: {
     *     // ... the filter for the Stocks we want to count
     *   }
     * })
    **/
    count<T extends StockCountArgs>(
      args?: Subset<T, StockCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StockCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Stock.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StockAggregateArgs>(args: Subset<T, StockAggregateArgs>): Prisma.PrismaPromise<GetStockAggregateType<T>>

    /**
     * Group by Stock.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockGroupByArgs} args - Group by arguments.
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
      T extends StockGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StockGroupByArgs['orderBy'] }
        : { orderBy?: StockGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, StockGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStockGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Stock model
   */
  readonly fields: StockFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Stock.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StockClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    stockItems<T extends Stock$stockItemsArgs<ExtArgs> = {}>(args?: Subset<T, Stock$stockItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StockItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Stock model
   */
  interface StockFieldRefs {
    readonly stock_id: FieldRef<"Stock", 'String'>
    readonly partyId: FieldRef<"Stock", 'String'>
    readonly partyName: FieldRef<"Stock", 'String'>
    readonly empId: FieldRef<"Stock", 'String'>
    readonly createdAt: FieldRef<"Stock", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Stock findUnique
   */
  export type StockFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stock
     */
    select?: StockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stock
     */
    omit?: StockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockInclude<ExtArgs> | null
    /**
     * Filter, which Stock to fetch.
     */
    where: StockWhereUniqueInput
  }

  /**
   * Stock findUniqueOrThrow
   */
  export type StockFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stock
     */
    select?: StockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stock
     */
    omit?: StockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockInclude<ExtArgs> | null
    /**
     * Filter, which Stock to fetch.
     */
    where: StockWhereUniqueInput
  }

  /**
   * Stock findFirst
   */
  export type StockFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stock
     */
    select?: StockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stock
     */
    omit?: StockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockInclude<ExtArgs> | null
    /**
     * Filter, which Stock to fetch.
     */
    where?: StockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stocks to fetch.
     */
    orderBy?: StockOrderByWithRelationInput | StockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Stocks.
     */
    cursor?: StockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Stocks.
     */
    distinct?: StockScalarFieldEnum | StockScalarFieldEnum[]
  }

  /**
   * Stock findFirstOrThrow
   */
  export type StockFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stock
     */
    select?: StockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stock
     */
    omit?: StockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockInclude<ExtArgs> | null
    /**
     * Filter, which Stock to fetch.
     */
    where?: StockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stocks to fetch.
     */
    orderBy?: StockOrderByWithRelationInput | StockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Stocks.
     */
    cursor?: StockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Stocks.
     */
    distinct?: StockScalarFieldEnum | StockScalarFieldEnum[]
  }

  /**
   * Stock findMany
   */
  export type StockFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stock
     */
    select?: StockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stock
     */
    omit?: StockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockInclude<ExtArgs> | null
    /**
     * Filter, which Stocks to fetch.
     */
    where?: StockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stocks to fetch.
     */
    orderBy?: StockOrderByWithRelationInput | StockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Stocks.
     */
    cursor?: StockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stocks.
     */
    skip?: number
    distinct?: StockScalarFieldEnum | StockScalarFieldEnum[]
  }

  /**
   * Stock create
   */
  export type StockCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stock
     */
    select?: StockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stock
     */
    omit?: StockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockInclude<ExtArgs> | null
    /**
     * The data needed to create a Stock.
     */
    data: XOR<StockCreateInput, StockUncheckedCreateInput>
  }

  /**
   * Stock createMany
   */
  export type StockCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Stocks.
     */
    data: StockCreateManyInput | StockCreateManyInput[]
  }

  /**
   * Stock update
   */
  export type StockUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stock
     */
    select?: StockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stock
     */
    omit?: StockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockInclude<ExtArgs> | null
    /**
     * The data needed to update a Stock.
     */
    data: XOR<StockUpdateInput, StockUncheckedUpdateInput>
    /**
     * Choose, which Stock to update.
     */
    where: StockWhereUniqueInput
  }

  /**
   * Stock updateMany
   */
  export type StockUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Stocks.
     */
    data: XOR<StockUpdateManyMutationInput, StockUncheckedUpdateManyInput>
    /**
     * Filter which Stocks to update
     */
    where?: StockWhereInput
    /**
     * Limit how many Stocks to update.
     */
    limit?: number
  }

  /**
   * Stock upsert
   */
  export type StockUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stock
     */
    select?: StockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stock
     */
    omit?: StockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockInclude<ExtArgs> | null
    /**
     * The filter to search for the Stock to update in case it exists.
     */
    where: StockWhereUniqueInput
    /**
     * In case the Stock found by the `where` argument doesn't exist, create a new Stock with this data.
     */
    create: XOR<StockCreateInput, StockUncheckedCreateInput>
    /**
     * In case the Stock was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StockUpdateInput, StockUncheckedUpdateInput>
  }

  /**
   * Stock delete
   */
  export type StockDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stock
     */
    select?: StockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stock
     */
    omit?: StockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockInclude<ExtArgs> | null
    /**
     * Filter which Stock to delete.
     */
    where: StockWhereUniqueInput
  }

  /**
   * Stock deleteMany
   */
  export type StockDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Stocks to delete
     */
    where?: StockWhereInput
    /**
     * Limit how many Stocks to delete.
     */
    limit?: number
  }

  /**
   * Stock.stockItems
   */
  export type Stock$stockItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockItem
     */
    select?: StockItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockItem
     */
    omit?: StockItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockItemInclude<ExtArgs> | null
    where?: StockItemWhereInput
    orderBy?: StockItemOrderByWithRelationInput | StockItemOrderByWithRelationInput[]
    cursor?: StockItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StockItemScalarFieldEnum | StockItemScalarFieldEnum[]
  }

  /**
   * Stock without action
   */
  export type StockDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stock
     */
    select?: StockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stock
     */
    omit?: StockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockInclude<ExtArgs> | null
  }


  /**
   * Model StockItem
   */

  export type AggregateStockItem = {
    _count: StockItemCountAggregateOutputType | null
    _avg: StockItemAvgAggregateOutputType | null
    _sum: StockItemSumAggregateOutputType | null
    _min: StockItemMinAggregateOutputType | null
    _max: StockItemMaxAggregateOutputType | null
  }

  export type StockItemAvgAggregateOutputType = {
    quantity: number | null
  }

  export type StockItemSumAggregateOutputType = {
    quantity: number | null
  }

  export type StockItemMinAggregateOutputType = {
    id: string | null
    stockId: string | null
    itemCode: string | null
    itemName: string | null
    quantity: number | null
  }

  export type StockItemMaxAggregateOutputType = {
    id: string | null
    stockId: string | null
    itemCode: string | null
    itemName: string | null
    quantity: number | null
  }

  export type StockItemCountAggregateOutputType = {
    id: number
    stockId: number
    itemCode: number
    itemName: number
    quantity: number
    _all: number
  }


  export type StockItemAvgAggregateInputType = {
    quantity?: true
  }

  export type StockItemSumAggregateInputType = {
    quantity?: true
  }

  export type StockItemMinAggregateInputType = {
    id?: true
    stockId?: true
    itemCode?: true
    itemName?: true
    quantity?: true
  }

  export type StockItemMaxAggregateInputType = {
    id?: true
    stockId?: true
    itemCode?: true
    itemName?: true
    quantity?: true
  }

  export type StockItemCountAggregateInputType = {
    id?: true
    stockId?: true
    itemCode?: true
    itemName?: true
    quantity?: true
    _all?: true
  }

  export type StockItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StockItem to aggregate.
     */
    where?: StockItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StockItems to fetch.
     */
    orderBy?: StockItemOrderByWithRelationInput | StockItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StockItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StockItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StockItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StockItems
    **/
    _count?: true | StockItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StockItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StockItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StockItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StockItemMaxAggregateInputType
  }

  export type GetStockItemAggregateType<T extends StockItemAggregateArgs> = {
        [P in keyof T & keyof AggregateStockItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStockItem[P]>
      : GetScalarType<T[P], AggregateStockItem[P]>
  }




  export type StockItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StockItemWhereInput
    orderBy?: StockItemOrderByWithAggregationInput | StockItemOrderByWithAggregationInput[]
    by: StockItemScalarFieldEnum[] | StockItemScalarFieldEnum
    having?: StockItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StockItemCountAggregateInputType | true
    _avg?: StockItemAvgAggregateInputType
    _sum?: StockItemSumAggregateInputType
    _min?: StockItemMinAggregateInputType
    _max?: StockItemMaxAggregateInputType
  }

  export type StockItemGroupByOutputType = {
    id: string
    stockId: string
    itemCode: string
    itemName: string
    quantity: number
    _count: StockItemCountAggregateOutputType | null
    _avg: StockItemAvgAggregateOutputType | null
    _sum: StockItemSumAggregateOutputType | null
    _min: StockItemMinAggregateOutputType | null
    _max: StockItemMaxAggregateOutputType | null
  }

  type GetStockItemGroupByPayload<T extends StockItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StockItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StockItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StockItemGroupByOutputType[P]>
            : GetScalarType<T[P], StockItemGroupByOutputType[P]>
        }
      >
    >


  export type StockItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    stockId?: boolean
    itemCode?: boolean
    itemName?: boolean
    quantity?: boolean
    stock?: boolean | StockDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stockItem"]>



  export type StockItemSelectScalar = {
    id?: boolean
    stockId?: boolean
    itemCode?: boolean
    itemName?: boolean
    quantity?: boolean
  }

  export type StockItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "stockId" | "itemCode" | "itemName" | "quantity", ExtArgs["result"]["stockItem"]>
  export type StockItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    stock?: boolean | StockDefaultArgs<ExtArgs>
  }

  export type $StockItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StockItem"
    objects: {
      stock: Prisma.$StockPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      stockId: string
      itemCode: string
      itemName: string
      quantity: number
    }, ExtArgs["result"]["stockItem"]>
    composites: {}
  }

  type StockItemGetPayload<S extends boolean | null | undefined | StockItemDefaultArgs> = $Result.GetResult<Prisma.$StockItemPayload, S>

  type StockItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StockItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StockItemCountAggregateInputType | true
    }

  export interface StockItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StockItem'], meta: { name: 'StockItem' } }
    /**
     * Find zero or one StockItem that matches the filter.
     * @param {StockItemFindUniqueArgs} args - Arguments to find a StockItem
     * @example
     * // Get one StockItem
     * const stockItem = await prisma.stockItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StockItemFindUniqueArgs>(args: SelectSubset<T, StockItemFindUniqueArgs<ExtArgs>>): Prisma__StockItemClient<$Result.GetResult<Prisma.$StockItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one StockItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StockItemFindUniqueOrThrowArgs} args - Arguments to find a StockItem
     * @example
     * // Get one StockItem
     * const stockItem = await prisma.stockItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StockItemFindUniqueOrThrowArgs>(args: SelectSubset<T, StockItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StockItemClient<$Result.GetResult<Prisma.$StockItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StockItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockItemFindFirstArgs} args - Arguments to find a StockItem
     * @example
     * // Get one StockItem
     * const stockItem = await prisma.stockItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StockItemFindFirstArgs>(args?: SelectSubset<T, StockItemFindFirstArgs<ExtArgs>>): Prisma__StockItemClient<$Result.GetResult<Prisma.$StockItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StockItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockItemFindFirstOrThrowArgs} args - Arguments to find a StockItem
     * @example
     * // Get one StockItem
     * const stockItem = await prisma.stockItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StockItemFindFirstOrThrowArgs>(args?: SelectSubset<T, StockItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__StockItemClient<$Result.GetResult<Prisma.$StockItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more StockItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StockItems
     * const stockItems = await prisma.stockItem.findMany()
     * 
     * // Get first 10 StockItems
     * const stockItems = await prisma.stockItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const stockItemWithIdOnly = await prisma.stockItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StockItemFindManyArgs>(args?: SelectSubset<T, StockItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StockItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a StockItem.
     * @param {StockItemCreateArgs} args - Arguments to create a StockItem.
     * @example
     * // Create one StockItem
     * const StockItem = await prisma.stockItem.create({
     *   data: {
     *     // ... data to create a StockItem
     *   }
     * })
     * 
     */
    create<T extends StockItemCreateArgs>(args: SelectSubset<T, StockItemCreateArgs<ExtArgs>>): Prisma__StockItemClient<$Result.GetResult<Prisma.$StockItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many StockItems.
     * @param {StockItemCreateManyArgs} args - Arguments to create many StockItems.
     * @example
     * // Create many StockItems
     * const stockItem = await prisma.stockItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StockItemCreateManyArgs>(args?: SelectSubset<T, StockItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a StockItem.
     * @param {StockItemDeleteArgs} args - Arguments to delete one StockItem.
     * @example
     * // Delete one StockItem
     * const StockItem = await prisma.stockItem.delete({
     *   where: {
     *     // ... filter to delete one StockItem
     *   }
     * })
     * 
     */
    delete<T extends StockItemDeleteArgs>(args: SelectSubset<T, StockItemDeleteArgs<ExtArgs>>): Prisma__StockItemClient<$Result.GetResult<Prisma.$StockItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one StockItem.
     * @param {StockItemUpdateArgs} args - Arguments to update one StockItem.
     * @example
     * // Update one StockItem
     * const stockItem = await prisma.stockItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StockItemUpdateArgs>(args: SelectSubset<T, StockItemUpdateArgs<ExtArgs>>): Prisma__StockItemClient<$Result.GetResult<Prisma.$StockItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more StockItems.
     * @param {StockItemDeleteManyArgs} args - Arguments to filter StockItems to delete.
     * @example
     * // Delete a few StockItems
     * const { count } = await prisma.stockItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StockItemDeleteManyArgs>(args?: SelectSubset<T, StockItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StockItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StockItems
     * const stockItem = await prisma.stockItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StockItemUpdateManyArgs>(args: SelectSubset<T, StockItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one StockItem.
     * @param {StockItemUpsertArgs} args - Arguments to update or create a StockItem.
     * @example
     * // Update or create a StockItem
     * const stockItem = await prisma.stockItem.upsert({
     *   create: {
     *     // ... data to create a StockItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StockItem we want to update
     *   }
     * })
     */
    upsert<T extends StockItemUpsertArgs>(args: SelectSubset<T, StockItemUpsertArgs<ExtArgs>>): Prisma__StockItemClient<$Result.GetResult<Prisma.$StockItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of StockItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockItemCountArgs} args - Arguments to filter StockItems to count.
     * @example
     * // Count the number of StockItems
     * const count = await prisma.stockItem.count({
     *   where: {
     *     // ... the filter for the StockItems we want to count
     *   }
     * })
    **/
    count<T extends StockItemCountArgs>(
      args?: Subset<T, StockItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StockItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StockItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StockItemAggregateArgs>(args: Subset<T, StockItemAggregateArgs>): Prisma.PrismaPromise<GetStockItemAggregateType<T>>

    /**
     * Group by StockItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockItemGroupByArgs} args - Group by arguments.
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
      T extends StockItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StockItemGroupByArgs['orderBy'] }
        : { orderBy?: StockItemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, StockItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStockItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StockItem model
   */
  readonly fields: StockItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StockItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StockItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    stock<T extends StockDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StockDefaultArgs<ExtArgs>>): Prisma__StockClient<$Result.GetResult<Prisma.$StockPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the StockItem model
   */
  interface StockItemFieldRefs {
    readonly id: FieldRef<"StockItem", 'String'>
    readonly stockId: FieldRef<"StockItem", 'String'>
    readonly itemCode: FieldRef<"StockItem", 'String'>
    readonly itemName: FieldRef<"StockItem", 'String'>
    readonly quantity: FieldRef<"StockItem", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * StockItem findUnique
   */
  export type StockItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockItem
     */
    select?: StockItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockItem
     */
    omit?: StockItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockItemInclude<ExtArgs> | null
    /**
     * Filter, which StockItem to fetch.
     */
    where: StockItemWhereUniqueInput
  }

  /**
   * StockItem findUniqueOrThrow
   */
  export type StockItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockItem
     */
    select?: StockItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockItem
     */
    omit?: StockItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockItemInclude<ExtArgs> | null
    /**
     * Filter, which StockItem to fetch.
     */
    where: StockItemWhereUniqueInput
  }

  /**
   * StockItem findFirst
   */
  export type StockItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockItem
     */
    select?: StockItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockItem
     */
    omit?: StockItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockItemInclude<ExtArgs> | null
    /**
     * Filter, which StockItem to fetch.
     */
    where?: StockItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StockItems to fetch.
     */
    orderBy?: StockItemOrderByWithRelationInput | StockItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StockItems.
     */
    cursor?: StockItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StockItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StockItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StockItems.
     */
    distinct?: StockItemScalarFieldEnum | StockItemScalarFieldEnum[]
  }

  /**
   * StockItem findFirstOrThrow
   */
  export type StockItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockItem
     */
    select?: StockItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockItem
     */
    omit?: StockItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockItemInclude<ExtArgs> | null
    /**
     * Filter, which StockItem to fetch.
     */
    where?: StockItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StockItems to fetch.
     */
    orderBy?: StockItemOrderByWithRelationInput | StockItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StockItems.
     */
    cursor?: StockItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StockItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StockItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StockItems.
     */
    distinct?: StockItemScalarFieldEnum | StockItemScalarFieldEnum[]
  }

  /**
   * StockItem findMany
   */
  export type StockItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockItem
     */
    select?: StockItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockItem
     */
    omit?: StockItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockItemInclude<ExtArgs> | null
    /**
     * Filter, which StockItems to fetch.
     */
    where?: StockItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StockItems to fetch.
     */
    orderBy?: StockItemOrderByWithRelationInput | StockItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StockItems.
     */
    cursor?: StockItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StockItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StockItems.
     */
    skip?: number
    distinct?: StockItemScalarFieldEnum | StockItemScalarFieldEnum[]
  }

  /**
   * StockItem create
   */
  export type StockItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockItem
     */
    select?: StockItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockItem
     */
    omit?: StockItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockItemInclude<ExtArgs> | null
    /**
     * The data needed to create a StockItem.
     */
    data: XOR<StockItemCreateInput, StockItemUncheckedCreateInput>
  }

  /**
   * StockItem createMany
   */
  export type StockItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StockItems.
     */
    data: StockItemCreateManyInput | StockItemCreateManyInput[]
  }

  /**
   * StockItem update
   */
  export type StockItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockItem
     */
    select?: StockItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockItem
     */
    omit?: StockItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockItemInclude<ExtArgs> | null
    /**
     * The data needed to update a StockItem.
     */
    data: XOR<StockItemUpdateInput, StockItemUncheckedUpdateInput>
    /**
     * Choose, which StockItem to update.
     */
    where: StockItemWhereUniqueInput
  }

  /**
   * StockItem updateMany
   */
  export type StockItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StockItems.
     */
    data: XOR<StockItemUpdateManyMutationInput, StockItemUncheckedUpdateManyInput>
    /**
     * Filter which StockItems to update
     */
    where?: StockItemWhereInput
    /**
     * Limit how many StockItems to update.
     */
    limit?: number
  }

  /**
   * StockItem upsert
   */
  export type StockItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockItem
     */
    select?: StockItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockItem
     */
    omit?: StockItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockItemInclude<ExtArgs> | null
    /**
     * The filter to search for the StockItem to update in case it exists.
     */
    where: StockItemWhereUniqueInput
    /**
     * In case the StockItem found by the `where` argument doesn't exist, create a new StockItem with this data.
     */
    create: XOR<StockItemCreateInput, StockItemUncheckedCreateInput>
    /**
     * In case the StockItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StockItemUpdateInput, StockItemUncheckedUpdateInput>
  }

  /**
   * StockItem delete
   */
  export type StockItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockItem
     */
    select?: StockItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockItem
     */
    omit?: StockItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockItemInclude<ExtArgs> | null
    /**
     * Filter which StockItem to delete.
     */
    where: StockItemWhereUniqueInput
  }

  /**
   * StockItem deleteMany
   */
  export type StockItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StockItems to delete
     */
    where?: StockItemWhereInput
    /**
     * Limit how many StockItems to delete.
     */
    limit?: number
  }

  /**
   * StockItem without action
   */
  export type StockItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockItem
     */
    select?: StockItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockItem
     */
    omit?: StockItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockItemInclude<ExtArgs> | null
  }


  /**
   * Model admin
   */

  export type AggregateAdmin = {
    _count: AdminCountAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  export type AdminMinAggregateOutputType = {
    admin_id: string | null
    username: string | null
    password: string | null
  }

  export type AdminMaxAggregateOutputType = {
    admin_id: string | null
    username: string | null
    password: string | null
  }

  export type AdminCountAggregateOutputType = {
    admin_id: number
    username: number
    password: number
    _all: number
  }


  export type AdminMinAggregateInputType = {
    admin_id?: true
    username?: true
    password?: true
  }

  export type AdminMaxAggregateInputType = {
    admin_id?: true
    username?: true
    password?: true
  }

  export type AdminCountAggregateInputType = {
    admin_id?: true
    username?: true
    password?: true
    _all?: true
  }

  export type AdminAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which admin to aggregate.
     */
    where?: adminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of admins to fetch.
     */
    orderBy?: adminOrderByWithRelationInput | adminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: adminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned admins
    **/
    _count?: true | AdminCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdminMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdminMaxAggregateInputType
  }

  export type GetAdminAggregateType<T extends AdminAggregateArgs> = {
        [P in keyof T & keyof AggregateAdmin]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdmin[P]>
      : GetScalarType<T[P], AggregateAdmin[P]>
  }




  export type adminGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: adminWhereInput
    orderBy?: adminOrderByWithAggregationInput | adminOrderByWithAggregationInput[]
    by: AdminScalarFieldEnum[] | AdminScalarFieldEnum
    having?: adminScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdminCountAggregateInputType | true
    _min?: AdminMinAggregateInputType
    _max?: AdminMaxAggregateInputType
  }

  export type AdminGroupByOutputType = {
    admin_id: string
    username: string
    password: string
    _count: AdminCountAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  type GetAdminGroupByPayload<T extends adminGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdminGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdminGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdminGroupByOutputType[P]>
            : GetScalarType<T[P], AdminGroupByOutputType[P]>
        }
      >
    >


  export type adminSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    admin_id?: boolean
    username?: boolean
    password?: boolean
  }, ExtArgs["result"]["admin"]>



  export type adminSelectScalar = {
    admin_id?: boolean
    username?: boolean
    password?: boolean
  }

  export type adminOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"admin_id" | "username" | "password", ExtArgs["result"]["admin"]>

  export type $adminPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "admin"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      admin_id: string
      username: string
      password: string
    }, ExtArgs["result"]["admin"]>
    composites: {}
  }

  type adminGetPayload<S extends boolean | null | undefined | adminDefaultArgs> = $Result.GetResult<Prisma.$adminPayload, S>

  type adminCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<adminFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AdminCountAggregateInputType | true
    }

  export interface adminDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['admin'], meta: { name: 'admin' } }
    /**
     * Find zero or one Admin that matches the filter.
     * @param {adminFindUniqueArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends adminFindUniqueArgs>(args: SelectSubset<T, adminFindUniqueArgs<ExtArgs>>): Prisma__adminClient<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Admin that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {adminFindUniqueOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends adminFindUniqueOrThrowArgs>(args: SelectSubset<T, adminFindUniqueOrThrowArgs<ExtArgs>>): Prisma__adminClient<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Admin that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adminFindFirstArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends adminFindFirstArgs>(args?: SelectSubset<T, adminFindFirstArgs<ExtArgs>>): Prisma__adminClient<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Admin that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adminFindFirstOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends adminFindFirstOrThrowArgs>(args?: SelectSubset<T, adminFindFirstOrThrowArgs<ExtArgs>>): Prisma__adminClient<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Admins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adminFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Admins
     * const admins = await prisma.admin.findMany()
     * 
     * // Get first 10 Admins
     * const admins = await prisma.admin.findMany({ take: 10 })
     * 
     * // Only select the `admin_id`
     * const adminWithAdmin_idOnly = await prisma.admin.findMany({ select: { admin_id: true } })
     * 
     */
    findMany<T extends adminFindManyArgs>(args?: SelectSubset<T, adminFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Admin.
     * @param {adminCreateArgs} args - Arguments to create a Admin.
     * @example
     * // Create one Admin
     * const Admin = await prisma.admin.create({
     *   data: {
     *     // ... data to create a Admin
     *   }
     * })
     * 
     */
    create<T extends adminCreateArgs>(args: SelectSubset<T, adminCreateArgs<ExtArgs>>): Prisma__adminClient<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Admins.
     * @param {adminCreateManyArgs} args - Arguments to create many Admins.
     * @example
     * // Create many Admins
     * const admin = await prisma.admin.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends adminCreateManyArgs>(args?: SelectSubset<T, adminCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Admin.
     * @param {adminDeleteArgs} args - Arguments to delete one Admin.
     * @example
     * // Delete one Admin
     * const Admin = await prisma.admin.delete({
     *   where: {
     *     // ... filter to delete one Admin
     *   }
     * })
     * 
     */
    delete<T extends adminDeleteArgs>(args: SelectSubset<T, adminDeleteArgs<ExtArgs>>): Prisma__adminClient<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Admin.
     * @param {adminUpdateArgs} args - Arguments to update one Admin.
     * @example
     * // Update one Admin
     * const admin = await prisma.admin.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends adminUpdateArgs>(args: SelectSubset<T, adminUpdateArgs<ExtArgs>>): Prisma__adminClient<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Admins.
     * @param {adminDeleteManyArgs} args - Arguments to filter Admins to delete.
     * @example
     * // Delete a few Admins
     * const { count } = await prisma.admin.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends adminDeleteManyArgs>(args?: SelectSubset<T, adminDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adminUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Admins
     * const admin = await prisma.admin.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends adminUpdateManyArgs>(args: SelectSubset<T, adminUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Admin.
     * @param {adminUpsertArgs} args - Arguments to update or create a Admin.
     * @example
     * // Update or create a Admin
     * const admin = await prisma.admin.upsert({
     *   create: {
     *     // ... data to create a Admin
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Admin we want to update
     *   }
     * })
     */
    upsert<T extends adminUpsertArgs>(args: SelectSubset<T, adminUpsertArgs<ExtArgs>>): Prisma__adminClient<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adminCountArgs} args - Arguments to filter Admins to count.
     * @example
     * // Count the number of Admins
     * const count = await prisma.admin.count({
     *   where: {
     *     // ... the filter for the Admins we want to count
     *   }
     * })
    **/
    count<T extends adminCountArgs>(
      args?: Subset<T, adminCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdminCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AdminAggregateArgs>(args: Subset<T, AdminAggregateArgs>): Prisma.PrismaPromise<GetAdminAggregateType<T>>

    /**
     * Group by Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adminGroupByArgs} args - Group by arguments.
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
      T extends adminGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: adminGroupByArgs['orderBy'] }
        : { orderBy?: adminGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, adminGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdminGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the admin model
   */
  readonly fields: adminFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for admin.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__adminClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the admin model
   */
  interface adminFieldRefs {
    readonly admin_id: FieldRef<"admin", 'String'>
    readonly username: FieldRef<"admin", 'String'>
    readonly password: FieldRef<"admin", 'String'>
  }
    

  // Custom InputTypes
  /**
   * admin findUnique
   */
  export type adminFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin
     */
    omit?: adminOmit<ExtArgs> | null
    /**
     * Filter, which admin to fetch.
     */
    where: adminWhereUniqueInput
  }

  /**
   * admin findUniqueOrThrow
   */
  export type adminFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin
     */
    omit?: adminOmit<ExtArgs> | null
    /**
     * Filter, which admin to fetch.
     */
    where: adminWhereUniqueInput
  }

  /**
   * admin findFirst
   */
  export type adminFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin
     */
    omit?: adminOmit<ExtArgs> | null
    /**
     * Filter, which admin to fetch.
     */
    where?: adminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of admins to fetch.
     */
    orderBy?: adminOrderByWithRelationInput | adminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for admins.
     */
    cursor?: adminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * admin findFirstOrThrow
   */
  export type adminFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin
     */
    omit?: adminOmit<ExtArgs> | null
    /**
     * Filter, which admin to fetch.
     */
    where?: adminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of admins to fetch.
     */
    orderBy?: adminOrderByWithRelationInput | adminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for admins.
     */
    cursor?: adminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * admin findMany
   */
  export type adminFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin
     */
    omit?: adminOmit<ExtArgs> | null
    /**
     * Filter, which admins to fetch.
     */
    where?: adminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of admins to fetch.
     */
    orderBy?: adminOrderByWithRelationInput | adminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing admins.
     */
    cursor?: adminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` admins.
     */
    skip?: number
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * admin create
   */
  export type adminCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin
     */
    omit?: adminOmit<ExtArgs> | null
    /**
     * The data needed to create a admin.
     */
    data: XOR<adminCreateInput, adminUncheckedCreateInput>
  }

  /**
   * admin createMany
   */
  export type adminCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many admins.
     */
    data: adminCreateManyInput | adminCreateManyInput[]
  }

  /**
   * admin update
   */
  export type adminUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin
     */
    omit?: adminOmit<ExtArgs> | null
    /**
     * The data needed to update a admin.
     */
    data: XOR<adminUpdateInput, adminUncheckedUpdateInput>
    /**
     * Choose, which admin to update.
     */
    where: adminWhereUniqueInput
  }

  /**
   * admin updateMany
   */
  export type adminUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update admins.
     */
    data: XOR<adminUpdateManyMutationInput, adminUncheckedUpdateManyInput>
    /**
     * Filter which admins to update
     */
    where?: adminWhereInput
    /**
     * Limit how many admins to update.
     */
    limit?: number
  }

  /**
   * admin upsert
   */
  export type adminUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin
     */
    omit?: adminOmit<ExtArgs> | null
    /**
     * The filter to search for the admin to update in case it exists.
     */
    where: adminWhereUniqueInput
    /**
     * In case the admin found by the `where` argument doesn't exist, create a new admin with this data.
     */
    create: XOR<adminCreateInput, adminUncheckedCreateInput>
    /**
     * In case the admin was found with the provided `where` argument, update it with this data.
     */
    update: XOR<adminUpdateInput, adminUncheckedUpdateInput>
  }

  /**
   * admin delete
   */
  export type adminDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin
     */
    omit?: adminOmit<ExtArgs> | null
    /**
     * Filter which admin to delete.
     */
    where: adminWhereUniqueInput
  }

  /**
   * admin deleteMany
   */
  export type adminDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which admins to delete
     */
    where?: adminWhereInput
    /**
     * Limit how many admins to delete.
     */
    limit?: number
  }

  /**
   * admin without action
   */
  export type adminDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin
     */
    omit?: adminOmit<ExtArgs> | null
  }


  /**
   * Model Attendance
   */

  export type AggregateAttendance = {
    _count: AttendanceCountAggregateOutputType | null
    _min: AttendanceMinAggregateOutputType | null
    _max: AttendanceMaxAggregateOutputType | null
  }

  export type AttendanceMinAggregateOutputType = {
    attendance_id: string | null
    userId: string | null
    date: Date | null
    status: string | null
    markedAt: Date | null
    markedBy: string | null
    absentReason: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AttendanceMaxAggregateOutputType = {
    attendance_id: string | null
    userId: string | null
    date: Date | null
    status: string | null
    markedAt: Date | null
    markedBy: string | null
    absentReason: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AttendanceCountAggregateOutputType = {
    attendance_id: number
    userId: number
    date: number
    status: number
    markedAt: number
    markedBy: number
    absentReason: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AttendanceMinAggregateInputType = {
    attendance_id?: true
    userId?: true
    date?: true
    status?: true
    markedAt?: true
    markedBy?: true
    absentReason?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AttendanceMaxAggregateInputType = {
    attendance_id?: true
    userId?: true
    date?: true
    status?: true
    markedAt?: true
    markedBy?: true
    absentReason?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AttendanceCountAggregateInputType = {
    attendance_id?: true
    userId?: true
    date?: true
    status?: true
    markedAt?: true
    markedBy?: true
    absentReason?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AttendanceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Attendance to aggregate.
     */
    where?: AttendanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attendances to fetch.
     */
    orderBy?: AttendanceOrderByWithRelationInput | AttendanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AttendanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attendances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attendances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Attendances
    **/
    _count?: true | AttendanceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AttendanceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AttendanceMaxAggregateInputType
  }

  export type GetAttendanceAggregateType<T extends AttendanceAggregateArgs> = {
        [P in keyof T & keyof AggregateAttendance]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAttendance[P]>
      : GetScalarType<T[P], AggregateAttendance[P]>
  }




  export type AttendanceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttendanceWhereInput
    orderBy?: AttendanceOrderByWithAggregationInput | AttendanceOrderByWithAggregationInput[]
    by: AttendanceScalarFieldEnum[] | AttendanceScalarFieldEnum
    having?: AttendanceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AttendanceCountAggregateInputType | true
    _min?: AttendanceMinAggregateInputType
    _max?: AttendanceMaxAggregateInputType
  }

  export type AttendanceGroupByOutputType = {
    attendance_id: string
    userId: string
    date: Date
    status: string
    markedAt: Date | null
    markedBy: string | null
    absentReason: string | null
    createdAt: Date
    updatedAt: Date
    _count: AttendanceCountAggregateOutputType | null
    _min: AttendanceMinAggregateOutputType | null
    _max: AttendanceMaxAggregateOutputType | null
  }

  type GetAttendanceGroupByPayload<T extends AttendanceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AttendanceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AttendanceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AttendanceGroupByOutputType[P]>
            : GetScalarType<T[P], AttendanceGroupByOutputType[P]>
        }
      >
    >


  export type AttendanceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    attendance_id?: boolean
    userId?: boolean
    date?: boolean
    status?: boolean
    markedAt?: boolean
    markedBy?: boolean
    absentReason?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["attendance"]>



  export type AttendanceSelectScalar = {
    attendance_id?: boolean
    userId?: boolean
    date?: boolean
    status?: boolean
    markedAt?: boolean
    markedBy?: boolean
    absentReason?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AttendanceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"attendance_id" | "userId" | "date" | "status" | "markedAt" | "markedBy" | "absentReason" | "createdAt" | "updatedAt", ExtArgs["result"]["attendance"]>
  export type AttendanceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AttendancePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Attendance"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      attendance_id: string
      userId: string
      date: Date
      status: string
      markedAt: Date | null
      markedBy: string | null
      absentReason: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["attendance"]>
    composites: {}
  }

  type AttendanceGetPayload<S extends boolean | null | undefined | AttendanceDefaultArgs> = $Result.GetResult<Prisma.$AttendancePayload, S>

  type AttendanceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AttendanceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AttendanceCountAggregateInputType | true
    }

  export interface AttendanceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Attendance'], meta: { name: 'Attendance' } }
    /**
     * Find zero or one Attendance that matches the filter.
     * @param {AttendanceFindUniqueArgs} args - Arguments to find a Attendance
     * @example
     * // Get one Attendance
     * const attendance = await prisma.attendance.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AttendanceFindUniqueArgs>(args: SelectSubset<T, AttendanceFindUniqueArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Attendance that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AttendanceFindUniqueOrThrowArgs} args - Arguments to find a Attendance
     * @example
     * // Get one Attendance
     * const attendance = await prisma.attendance.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AttendanceFindUniqueOrThrowArgs>(args: SelectSubset<T, AttendanceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Attendance that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceFindFirstArgs} args - Arguments to find a Attendance
     * @example
     * // Get one Attendance
     * const attendance = await prisma.attendance.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AttendanceFindFirstArgs>(args?: SelectSubset<T, AttendanceFindFirstArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Attendance that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceFindFirstOrThrowArgs} args - Arguments to find a Attendance
     * @example
     * // Get one Attendance
     * const attendance = await prisma.attendance.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AttendanceFindFirstOrThrowArgs>(args?: SelectSubset<T, AttendanceFindFirstOrThrowArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Attendances that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Attendances
     * const attendances = await prisma.attendance.findMany()
     * 
     * // Get first 10 Attendances
     * const attendances = await prisma.attendance.findMany({ take: 10 })
     * 
     * // Only select the `attendance_id`
     * const attendanceWithAttendance_idOnly = await prisma.attendance.findMany({ select: { attendance_id: true } })
     * 
     */
    findMany<T extends AttendanceFindManyArgs>(args?: SelectSubset<T, AttendanceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Attendance.
     * @param {AttendanceCreateArgs} args - Arguments to create a Attendance.
     * @example
     * // Create one Attendance
     * const Attendance = await prisma.attendance.create({
     *   data: {
     *     // ... data to create a Attendance
     *   }
     * })
     * 
     */
    create<T extends AttendanceCreateArgs>(args: SelectSubset<T, AttendanceCreateArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Attendances.
     * @param {AttendanceCreateManyArgs} args - Arguments to create many Attendances.
     * @example
     * // Create many Attendances
     * const attendance = await prisma.attendance.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AttendanceCreateManyArgs>(args?: SelectSubset<T, AttendanceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Attendance.
     * @param {AttendanceDeleteArgs} args - Arguments to delete one Attendance.
     * @example
     * // Delete one Attendance
     * const Attendance = await prisma.attendance.delete({
     *   where: {
     *     // ... filter to delete one Attendance
     *   }
     * })
     * 
     */
    delete<T extends AttendanceDeleteArgs>(args: SelectSubset<T, AttendanceDeleteArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Attendance.
     * @param {AttendanceUpdateArgs} args - Arguments to update one Attendance.
     * @example
     * // Update one Attendance
     * const attendance = await prisma.attendance.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AttendanceUpdateArgs>(args: SelectSubset<T, AttendanceUpdateArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Attendances.
     * @param {AttendanceDeleteManyArgs} args - Arguments to filter Attendances to delete.
     * @example
     * // Delete a few Attendances
     * const { count } = await prisma.attendance.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AttendanceDeleteManyArgs>(args?: SelectSubset<T, AttendanceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Attendances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Attendances
     * const attendance = await prisma.attendance.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AttendanceUpdateManyArgs>(args: SelectSubset<T, AttendanceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Attendance.
     * @param {AttendanceUpsertArgs} args - Arguments to update or create a Attendance.
     * @example
     * // Update or create a Attendance
     * const attendance = await prisma.attendance.upsert({
     *   create: {
     *     // ... data to create a Attendance
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Attendance we want to update
     *   }
     * })
     */
    upsert<T extends AttendanceUpsertArgs>(args: SelectSubset<T, AttendanceUpsertArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Attendances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceCountArgs} args - Arguments to filter Attendances to count.
     * @example
     * // Count the number of Attendances
     * const count = await prisma.attendance.count({
     *   where: {
     *     // ... the filter for the Attendances we want to count
     *   }
     * })
    **/
    count<T extends AttendanceCountArgs>(
      args?: Subset<T, AttendanceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AttendanceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Attendance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AttendanceAggregateArgs>(args: Subset<T, AttendanceAggregateArgs>): Prisma.PrismaPromise<GetAttendanceAggregateType<T>>

    /**
     * Group by Attendance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceGroupByArgs} args - Group by arguments.
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
      T extends AttendanceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AttendanceGroupByArgs['orderBy'] }
        : { orderBy?: AttendanceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, AttendanceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAttendanceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Attendance model
   */
  readonly fields: AttendanceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Attendance.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AttendanceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Attendance model
   */
  interface AttendanceFieldRefs {
    readonly attendance_id: FieldRef<"Attendance", 'String'>
    readonly userId: FieldRef<"Attendance", 'String'>
    readonly date: FieldRef<"Attendance", 'DateTime'>
    readonly status: FieldRef<"Attendance", 'String'>
    readonly markedAt: FieldRef<"Attendance", 'DateTime'>
    readonly markedBy: FieldRef<"Attendance", 'String'>
    readonly absentReason: FieldRef<"Attendance", 'String'>
    readonly createdAt: FieldRef<"Attendance", 'DateTime'>
    readonly updatedAt: FieldRef<"Attendance", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Attendance findUnique
   */
  export type AttendanceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * Filter, which Attendance to fetch.
     */
    where: AttendanceWhereUniqueInput
  }

  /**
   * Attendance findUniqueOrThrow
   */
  export type AttendanceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * Filter, which Attendance to fetch.
     */
    where: AttendanceWhereUniqueInput
  }

  /**
   * Attendance findFirst
   */
  export type AttendanceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * Filter, which Attendance to fetch.
     */
    where?: AttendanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attendances to fetch.
     */
    orderBy?: AttendanceOrderByWithRelationInput | AttendanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Attendances.
     */
    cursor?: AttendanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attendances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attendances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Attendances.
     */
    distinct?: AttendanceScalarFieldEnum | AttendanceScalarFieldEnum[]
  }

  /**
   * Attendance findFirstOrThrow
   */
  export type AttendanceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * Filter, which Attendance to fetch.
     */
    where?: AttendanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attendances to fetch.
     */
    orderBy?: AttendanceOrderByWithRelationInput | AttendanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Attendances.
     */
    cursor?: AttendanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attendances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attendances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Attendances.
     */
    distinct?: AttendanceScalarFieldEnum | AttendanceScalarFieldEnum[]
  }

  /**
   * Attendance findMany
   */
  export type AttendanceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * Filter, which Attendances to fetch.
     */
    where?: AttendanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attendances to fetch.
     */
    orderBy?: AttendanceOrderByWithRelationInput | AttendanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Attendances.
     */
    cursor?: AttendanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attendances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attendances.
     */
    skip?: number
    distinct?: AttendanceScalarFieldEnum | AttendanceScalarFieldEnum[]
  }

  /**
   * Attendance create
   */
  export type AttendanceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * The data needed to create a Attendance.
     */
    data: XOR<AttendanceCreateInput, AttendanceUncheckedCreateInput>
  }

  /**
   * Attendance createMany
   */
  export type AttendanceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Attendances.
     */
    data: AttendanceCreateManyInput | AttendanceCreateManyInput[]
  }

  /**
   * Attendance update
   */
  export type AttendanceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * The data needed to update a Attendance.
     */
    data: XOR<AttendanceUpdateInput, AttendanceUncheckedUpdateInput>
    /**
     * Choose, which Attendance to update.
     */
    where: AttendanceWhereUniqueInput
  }

  /**
   * Attendance updateMany
   */
  export type AttendanceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Attendances.
     */
    data: XOR<AttendanceUpdateManyMutationInput, AttendanceUncheckedUpdateManyInput>
    /**
     * Filter which Attendances to update
     */
    where?: AttendanceWhereInput
    /**
     * Limit how many Attendances to update.
     */
    limit?: number
  }

  /**
   * Attendance upsert
   */
  export type AttendanceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * The filter to search for the Attendance to update in case it exists.
     */
    where: AttendanceWhereUniqueInput
    /**
     * In case the Attendance found by the `where` argument doesn't exist, create a new Attendance with this data.
     */
    create: XOR<AttendanceCreateInput, AttendanceUncheckedCreateInput>
    /**
     * In case the Attendance was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AttendanceUpdateInput, AttendanceUncheckedUpdateInput>
  }

  /**
   * Attendance delete
   */
  export type AttendanceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * Filter which Attendance to delete.
     */
    where: AttendanceWhereUniqueInput
  }

  /**
   * Attendance deleteMany
   */
  export type AttendanceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Attendances to delete
     */
    where?: AttendanceWhereInput
    /**
     * Limit how many Attendances to delete.
     */
    limit?: number
  }

  /**
   * Attendance without action
   */
  export type AttendanceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
  }


  /**
   * Model DailyRateList
   */

  export type AggregateDailyRateList = {
    _count: DailyRateListCountAggregateOutputType | null
    _avg: DailyRateListAvgAggregateOutputType | null
    _sum: DailyRateListSumAggregateOutputType | null
    _min: DailyRateListMinAggregateOutputType | null
    _max: DailyRateListMaxAggregateOutputType | null
  }

  export type DailyRateListAvgAggregateOutputType = {
    bulkRate: number | null
    consumerRate: number | null
  }

  export type DailyRateListSumAggregateOutputType = {
    bulkRate: number | null
    consumerRate: number | null
  }

  export type DailyRateListMinAggregateOutputType = {
    rate_id: string | null
    untcd: string | null
    date: Date | null
    bulkRate: number | null
    consumerRate: number | null
    createdAt: Date | null
  }

  export type DailyRateListMaxAggregateOutputType = {
    rate_id: string | null
    untcd: string | null
    date: Date | null
    bulkRate: number | null
    consumerRate: number | null
    createdAt: Date | null
  }

  export type DailyRateListCountAggregateOutputType = {
    rate_id: number
    untcd: number
    date: number
    bulkRate: number
    consumerRate: number
    createdAt: number
    _all: number
  }


  export type DailyRateListAvgAggregateInputType = {
    bulkRate?: true
    consumerRate?: true
  }

  export type DailyRateListSumAggregateInputType = {
    bulkRate?: true
    consumerRate?: true
  }

  export type DailyRateListMinAggregateInputType = {
    rate_id?: true
    untcd?: true
    date?: true
    bulkRate?: true
    consumerRate?: true
    createdAt?: true
  }

  export type DailyRateListMaxAggregateInputType = {
    rate_id?: true
    untcd?: true
    date?: true
    bulkRate?: true
    consumerRate?: true
    createdAt?: true
  }

  export type DailyRateListCountAggregateInputType = {
    rate_id?: true
    untcd?: true
    date?: true
    bulkRate?: true
    consumerRate?: true
    createdAt?: true
    _all?: true
  }

  export type DailyRateListAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DailyRateList to aggregate.
     */
    where?: DailyRateListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyRateLists to fetch.
     */
    orderBy?: DailyRateListOrderByWithRelationInput | DailyRateListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DailyRateListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyRateLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyRateLists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DailyRateLists
    **/
    _count?: true | DailyRateListCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DailyRateListAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DailyRateListSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DailyRateListMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DailyRateListMaxAggregateInputType
  }

  export type GetDailyRateListAggregateType<T extends DailyRateListAggregateArgs> = {
        [P in keyof T & keyof AggregateDailyRateList]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDailyRateList[P]>
      : GetScalarType<T[P], AggregateDailyRateList[P]>
  }




  export type DailyRateListGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DailyRateListWhereInput
    orderBy?: DailyRateListOrderByWithAggregationInput | DailyRateListOrderByWithAggregationInput[]
    by: DailyRateListScalarFieldEnum[] | DailyRateListScalarFieldEnum
    having?: DailyRateListScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DailyRateListCountAggregateInputType | true
    _avg?: DailyRateListAvgAggregateInputType
    _sum?: DailyRateListSumAggregateInputType
    _min?: DailyRateListMinAggregateInputType
    _max?: DailyRateListMaxAggregateInputType
  }

  export type DailyRateListGroupByOutputType = {
    rate_id: string
    untcd: string
    date: Date
    bulkRate: number
    consumerRate: number
    createdAt: Date
    _count: DailyRateListCountAggregateOutputType | null
    _avg: DailyRateListAvgAggregateOutputType | null
    _sum: DailyRateListSumAggregateOutputType | null
    _min: DailyRateListMinAggregateOutputType | null
    _max: DailyRateListMaxAggregateOutputType | null
  }

  type GetDailyRateListGroupByPayload<T extends DailyRateListGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DailyRateListGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DailyRateListGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DailyRateListGroupByOutputType[P]>
            : GetScalarType<T[P], DailyRateListGroupByOutputType[P]>
        }
      >
    >


  export type DailyRateListSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    rate_id?: boolean
    untcd?: boolean
    date?: boolean
    bulkRate?: boolean
    consumerRate?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["dailyRateList"]>



  export type DailyRateListSelectScalar = {
    rate_id?: boolean
    untcd?: boolean
    date?: boolean
    bulkRate?: boolean
    consumerRate?: boolean
    createdAt?: boolean
  }

  export type DailyRateListOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"rate_id" | "untcd" | "date" | "bulkRate" | "consumerRate" | "createdAt", ExtArgs["result"]["dailyRateList"]>

  export type $DailyRateListPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DailyRateList"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      rate_id: string
      untcd: string
      date: Date
      bulkRate: number
      consumerRate: number
      createdAt: Date
    }, ExtArgs["result"]["dailyRateList"]>
    composites: {}
  }

  type DailyRateListGetPayload<S extends boolean | null | undefined | DailyRateListDefaultArgs> = $Result.GetResult<Prisma.$DailyRateListPayload, S>

  type DailyRateListCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DailyRateListFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DailyRateListCountAggregateInputType | true
    }

  export interface DailyRateListDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DailyRateList'], meta: { name: 'DailyRateList' } }
    /**
     * Find zero or one DailyRateList that matches the filter.
     * @param {DailyRateListFindUniqueArgs} args - Arguments to find a DailyRateList
     * @example
     * // Get one DailyRateList
     * const dailyRateList = await prisma.dailyRateList.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DailyRateListFindUniqueArgs>(args: SelectSubset<T, DailyRateListFindUniqueArgs<ExtArgs>>): Prisma__DailyRateListClient<$Result.GetResult<Prisma.$DailyRateListPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DailyRateList that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DailyRateListFindUniqueOrThrowArgs} args - Arguments to find a DailyRateList
     * @example
     * // Get one DailyRateList
     * const dailyRateList = await prisma.dailyRateList.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DailyRateListFindUniqueOrThrowArgs>(args: SelectSubset<T, DailyRateListFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DailyRateListClient<$Result.GetResult<Prisma.$DailyRateListPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DailyRateList that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyRateListFindFirstArgs} args - Arguments to find a DailyRateList
     * @example
     * // Get one DailyRateList
     * const dailyRateList = await prisma.dailyRateList.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DailyRateListFindFirstArgs>(args?: SelectSubset<T, DailyRateListFindFirstArgs<ExtArgs>>): Prisma__DailyRateListClient<$Result.GetResult<Prisma.$DailyRateListPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DailyRateList that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyRateListFindFirstOrThrowArgs} args - Arguments to find a DailyRateList
     * @example
     * // Get one DailyRateList
     * const dailyRateList = await prisma.dailyRateList.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DailyRateListFindFirstOrThrowArgs>(args?: SelectSubset<T, DailyRateListFindFirstOrThrowArgs<ExtArgs>>): Prisma__DailyRateListClient<$Result.GetResult<Prisma.$DailyRateListPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DailyRateLists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyRateListFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DailyRateLists
     * const dailyRateLists = await prisma.dailyRateList.findMany()
     * 
     * // Get first 10 DailyRateLists
     * const dailyRateLists = await prisma.dailyRateList.findMany({ take: 10 })
     * 
     * // Only select the `rate_id`
     * const dailyRateListWithRate_idOnly = await prisma.dailyRateList.findMany({ select: { rate_id: true } })
     * 
     */
    findMany<T extends DailyRateListFindManyArgs>(args?: SelectSubset<T, DailyRateListFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DailyRateListPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DailyRateList.
     * @param {DailyRateListCreateArgs} args - Arguments to create a DailyRateList.
     * @example
     * // Create one DailyRateList
     * const DailyRateList = await prisma.dailyRateList.create({
     *   data: {
     *     // ... data to create a DailyRateList
     *   }
     * })
     * 
     */
    create<T extends DailyRateListCreateArgs>(args: SelectSubset<T, DailyRateListCreateArgs<ExtArgs>>): Prisma__DailyRateListClient<$Result.GetResult<Prisma.$DailyRateListPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DailyRateLists.
     * @param {DailyRateListCreateManyArgs} args - Arguments to create many DailyRateLists.
     * @example
     * // Create many DailyRateLists
     * const dailyRateList = await prisma.dailyRateList.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DailyRateListCreateManyArgs>(args?: SelectSubset<T, DailyRateListCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a DailyRateList.
     * @param {DailyRateListDeleteArgs} args - Arguments to delete one DailyRateList.
     * @example
     * // Delete one DailyRateList
     * const DailyRateList = await prisma.dailyRateList.delete({
     *   where: {
     *     // ... filter to delete one DailyRateList
     *   }
     * })
     * 
     */
    delete<T extends DailyRateListDeleteArgs>(args: SelectSubset<T, DailyRateListDeleteArgs<ExtArgs>>): Prisma__DailyRateListClient<$Result.GetResult<Prisma.$DailyRateListPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DailyRateList.
     * @param {DailyRateListUpdateArgs} args - Arguments to update one DailyRateList.
     * @example
     * // Update one DailyRateList
     * const dailyRateList = await prisma.dailyRateList.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DailyRateListUpdateArgs>(args: SelectSubset<T, DailyRateListUpdateArgs<ExtArgs>>): Prisma__DailyRateListClient<$Result.GetResult<Prisma.$DailyRateListPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DailyRateLists.
     * @param {DailyRateListDeleteManyArgs} args - Arguments to filter DailyRateLists to delete.
     * @example
     * // Delete a few DailyRateLists
     * const { count } = await prisma.dailyRateList.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DailyRateListDeleteManyArgs>(args?: SelectSubset<T, DailyRateListDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DailyRateLists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyRateListUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DailyRateLists
     * const dailyRateList = await prisma.dailyRateList.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DailyRateListUpdateManyArgs>(args: SelectSubset<T, DailyRateListUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one DailyRateList.
     * @param {DailyRateListUpsertArgs} args - Arguments to update or create a DailyRateList.
     * @example
     * // Update or create a DailyRateList
     * const dailyRateList = await prisma.dailyRateList.upsert({
     *   create: {
     *     // ... data to create a DailyRateList
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DailyRateList we want to update
     *   }
     * })
     */
    upsert<T extends DailyRateListUpsertArgs>(args: SelectSubset<T, DailyRateListUpsertArgs<ExtArgs>>): Prisma__DailyRateListClient<$Result.GetResult<Prisma.$DailyRateListPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DailyRateLists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyRateListCountArgs} args - Arguments to filter DailyRateLists to count.
     * @example
     * // Count the number of DailyRateLists
     * const count = await prisma.dailyRateList.count({
     *   where: {
     *     // ... the filter for the DailyRateLists we want to count
     *   }
     * })
    **/
    count<T extends DailyRateListCountArgs>(
      args?: Subset<T, DailyRateListCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DailyRateListCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DailyRateList.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyRateListAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DailyRateListAggregateArgs>(args: Subset<T, DailyRateListAggregateArgs>): Prisma.PrismaPromise<GetDailyRateListAggregateType<T>>

    /**
     * Group by DailyRateList.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyRateListGroupByArgs} args - Group by arguments.
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
      T extends DailyRateListGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DailyRateListGroupByArgs['orderBy'] }
        : { orderBy?: DailyRateListGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, DailyRateListGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDailyRateListGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DailyRateList model
   */
  readonly fields: DailyRateListFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DailyRateList.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DailyRateListClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DailyRateList model
   */
  interface DailyRateListFieldRefs {
    readonly rate_id: FieldRef<"DailyRateList", 'String'>
    readonly untcd: FieldRef<"DailyRateList", 'String'>
    readonly date: FieldRef<"DailyRateList", 'DateTime'>
    readonly bulkRate: FieldRef<"DailyRateList", 'Int'>
    readonly consumerRate: FieldRef<"DailyRateList", 'Int'>
    readonly createdAt: FieldRef<"DailyRateList", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * DailyRateList findUnique
   */
  export type DailyRateListFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyRateList
     */
    select?: DailyRateListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyRateList
     */
    omit?: DailyRateListOmit<ExtArgs> | null
    /**
     * Filter, which DailyRateList to fetch.
     */
    where: DailyRateListWhereUniqueInput
  }

  /**
   * DailyRateList findUniqueOrThrow
   */
  export type DailyRateListFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyRateList
     */
    select?: DailyRateListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyRateList
     */
    omit?: DailyRateListOmit<ExtArgs> | null
    /**
     * Filter, which DailyRateList to fetch.
     */
    where: DailyRateListWhereUniqueInput
  }

  /**
   * DailyRateList findFirst
   */
  export type DailyRateListFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyRateList
     */
    select?: DailyRateListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyRateList
     */
    omit?: DailyRateListOmit<ExtArgs> | null
    /**
     * Filter, which DailyRateList to fetch.
     */
    where?: DailyRateListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyRateLists to fetch.
     */
    orderBy?: DailyRateListOrderByWithRelationInput | DailyRateListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DailyRateLists.
     */
    cursor?: DailyRateListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyRateLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyRateLists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DailyRateLists.
     */
    distinct?: DailyRateListScalarFieldEnum | DailyRateListScalarFieldEnum[]
  }

  /**
   * DailyRateList findFirstOrThrow
   */
  export type DailyRateListFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyRateList
     */
    select?: DailyRateListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyRateList
     */
    omit?: DailyRateListOmit<ExtArgs> | null
    /**
     * Filter, which DailyRateList to fetch.
     */
    where?: DailyRateListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyRateLists to fetch.
     */
    orderBy?: DailyRateListOrderByWithRelationInput | DailyRateListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DailyRateLists.
     */
    cursor?: DailyRateListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyRateLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyRateLists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DailyRateLists.
     */
    distinct?: DailyRateListScalarFieldEnum | DailyRateListScalarFieldEnum[]
  }

  /**
   * DailyRateList findMany
   */
  export type DailyRateListFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyRateList
     */
    select?: DailyRateListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyRateList
     */
    omit?: DailyRateListOmit<ExtArgs> | null
    /**
     * Filter, which DailyRateLists to fetch.
     */
    where?: DailyRateListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyRateLists to fetch.
     */
    orderBy?: DailyRateListOrderByWithRelationInput | DailyRateListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DailyRateLists.
     */
    cursor?: DailyRateListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyRateLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyRateLists.
     */
    skip?: number
    distinct?: DailyRateListScalarFieldEnum | DailyRateListScalarFieldEnum[]
  }

  /**
   * DailyRateList create
   */
  export type DailyRateListCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyRateList
     */
    select?: DailyRateListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyRateList
     */
    omit?: DailyRateListOmit<ExtArgs> | null
    /**
     * The data needed to create a DailyRateList.
     */
    data: XOR<DailyRateListCreateInput, DailyRateListUncheckedCreateInput>
  }

  /**
   * DailyRateList createMany
   */
  export type DailyRateListCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DailyRateLists.
     */
    data: DailyRateListCreateManyInput | DailyRateListCreateManyInput[]
  }

  /**
   * DailyRateList update
   */
  export type DailyRateListUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyRateList
     */
    select?: DailyRateListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyRateList
     */
    omit?: DailyRateListOmit<ExtArgs> | null
    /**
     * The data needed to update a DailyRateList.
     */
    data: XOR<DailyRateListUpdateInput, DailyRateListUncheckedUpdateInput>
    /**
     * Choose, which DailyRateList to update.
     */
    where: DailyRateListWhereUniqueInput
  }

  /**
   * DailyRateList updateMany
   */
  export type DailyRateListUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DailyRateLists.
     */
    data: XOR<DailyRateListUpdateManyMutationInput, DailyRateListUncheckedUpdateManyInput>
    /**
     * Filter which DailyRateLists to update
     */
    where?: DailyRateListWhereInput
    /**
     * Limit how many DailyRateLists to update.
     */
    limit?: number
  }

  /**
   * DailyRateList upsert
   */
  export type DailyRateListUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyRateList
     */
    select?: DailyRateListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyRateList
     */
    omit?: DailyRateListOmit<ExtArgs> | null
    /**
     * The filter to search for the DailyRateList to update in case it exists.
     */
    where: DailyRateListWhereUniqueInput
    /**
     * In case the DailyRateList found by the `where` argument doesn't exist, create a new DailyRateList with this data.
     */
    create: XOR<DailyRateListCreateInput, DailyRateListUncheckedCreateInput>
    /**
     * In case the DailyRateList was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DailyRateListUpdateInput, DailyRateListUncheckedUpdateInput>
  }

  /**
   * DailyRateList delete
   */
  export type DailyRateListDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyRateList
     */
    select?: DailyRateListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyRateList
     */
    omit?: DailyRateListOmit<ExtArgs> | null
    /**
     * Filter which DailyRateList to delete.
     */
    where: DailyRateListWhereUniqueInput
  }

  /**
   * DailyRateList deleteMany
   */
  export type DailyRateListDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DailyRateLists to delete
     */
    where?: DailyRateListWhereInput
    /**
     * Limit how many DailyRateLists to delete.
     */
    limit?: number
  }

  /**
   * DailyRateList without action
   */
  export type DailyRateListDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyRateList
     */
    select?: DailyRateListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyRateList
     */
    omit?: DailyRateListOmit<ExtArgs> | null
  }


  /**
   * Model mstemp
   */

  export type AggregateMstemp = {
    _count: MstempCountAggregateOutputType | null
    _min: MstempMinAggregateOutputType | null
    _max: MstempMaxAggregateOutputType | null
  }

  export type MstempMinAggregateOutputType = {
    empcd: string | null
    ledcd: string | null
    lednm: string | null
  }

  export type MstempMaxAggregateOutputType = {
    empcd: string | null
    ledcd: string | null
    lednm: string | null
  }

  export type MstempCountAggregateOutputType = {
    empcd: number
    ledcd: number
    lednm: number
    _all: number
  }


  export type MstempMinAggregateInputType = {
    empcd?: true
    ledcd?: true
    lednm?: true
  }

  export type MstempMaxAggregateInputType = {
    empcd?: true
    ledcd?: true
    lednm?: true
  }

  export type MstempCountAggregateInputType = {
    empcd?: true
    ledcd?: true
    lednm?: true
    _all?: true
  }

  export type MstempAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which mstemp to aggregate.
     */
    where?: mstempWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mstemps to fetch.
     */
    orderBy?: mstempOrderByWithRelationInput | mstempOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: mstempWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mstemps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mstemps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned mstemps
    **/
    _count?: true | MstempCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MstempMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MstempMaxAggregateInputType
  }

  export type GetMstempAggregateType<T extends MstempAggregateArgs> = {
        [P in keyof T & keyof AggregateMstemp]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMstemp[P]>
      : GetScalarType<T[P], AggregateMstemp[P]>
  }




  export type mstempGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: mstempWhereInput
    orderBy?: mstempOrderByWithAggregationInput | mstempOrderByWithAggregationInput[]
    by: MstempScalarFieldEnum[] | MstempScalarFieldEnum
    having?: mstempScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MstempCountAggregateInputType | true
    _min?: MstempMinAggregateInputType
    _max?: MstempMaxAggregateInputType
  }

  export type MstempGroupByOutputType = {
    empcd: string
    ledcd: string
    lednm: string | null
    _count: MstempCountAggregateOutputType | null
    _min: MstempMinAggregateOutputType | null
    _max: MstempMaxAggregateOutputType | null
  }

  type GetMstempGroupByPayload<T extends mstempGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MstempGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MstempGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MstempGroupByOutputType[P]>
            : GetScalarType<T[P], MstempGroupByOutputType[P]>
        }
      >
    >


  export type mstempSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    empcd?: boolean
    ledcd?: boolean
    lednm?: boolean
  }, ExtArgs["result"]["mstemp"]>



  export type mstempSelectScalar = {
    empcd?: boolean
    ledcd?: boolean
    lednm?: boolean
  }

  export type mstempOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"empcd" | "ledcd" | "lednm", ExtArgs["result"]["mstemp"]>

  export type $mstempPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "mstemp"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      empcd: string
      ledcd: string
      lednm: string | null
    }, ExtArgs["result"]["mstemp"]>
    composites: {}
  }

  type mstempGetPayload<S extends boolean | null | undefined | mstempDefaultArgs> = $Result.GetResult<Prisma.$mstempPayload, S>

  type mstempCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<mstempFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MstempCountAggregateInputType | true
    }

  export interface mstempDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['mstemp'], meta: { name: 'mstemp' } }
    /**
     * Find zero or one Mstemp that matches the filter.
     * @param {mstempFindUniqueArgs} args - Arguments to find a Mstemp
     * @example
     * // Get one Mstemp
     * const mstemp = await prisma.mstemp.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends mstempFindUniqueArgs>(args: SelectSubset<T, mstempFindUniqueArgs<ExtArgs>>): Prisma__mstempClient<$Result.GetResult<Prisma.$mstempPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Mstemp that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {mstempFindUniqueOrThrowArgs} args - Arguments to find a Mstemp
     * @example
     * // Get one Mstemp
     * const mstemp = await prisma.mstemp.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends mstempFindUniqueOrThrowArgs>(args: SelectSubset<T, mstempFindUniqueOrThrowArgs<ExtArgs>>): Prisma__mstempClient<$Result.GetResult<Prisma.$mstempPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Mstemp that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mstempFindFirstArgs} args - Arguments to find a Mstemp
     * @example
     * // Get one Mstemp
     * const mstemp = await prisma.mstemp.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends mstempFindFirstArgs>(args?: SelectSubset<T, mstempFindFirstArgs<ExtArgs>>): Prisma__mstempClient<$Result.GetResult<Prisma.$mstempPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Mstemp that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mstempFindFirstOrThrowArgs} args - Arguments to find a Mstemp
     * @example
     * // Get one Mstemp
     * const mstemp = await prisma.mstemp.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends mstempFindFirstOrThrowArgs>(args?: SelectSubset<T, mstempFindFirstOrThrowArgs<ExtArgs>>): Prisma__mstempClient<$Result.GetResult<Prisma.$mstempPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Mstemps that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mstempFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Mstemps
     * const mstemps = await prisma.mstemp.findMany()
     * 
     * // Get first 10 Mstemps
     * const mstemps = await prisma.mstemp.findMany({ take: 10 })
     * 
     * // Only select the `empcd`
     * const mstempWithEmpcdOnly = await prisma.mstemp.findMany({ select: { empcd: true } })
     * 
     */
    findMany<T extends mstempFindManyArgs>(args?: SelectSubset<T, mstempFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$mstempPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Mstemp.
     * @param {mstempCreateArgs} args - Arguments to create a Mstemp.
     * @example
     * // Create one Mstemp
     * const Mstemp = await prisma.mstemp.create({
     *   data: {
     *     // ... data to create a Mstemp
     *   }
     * })
     * 
     */
    create<T extends mstempCreateArgs>(args: SelectSubset<T, mstempCreateArgs<ExtArgs>>): Prisma__mstempClient<$Result.GetResult<Prisma.$mstempPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Mstemps.
     * @param {mstempCreateManyArgs} args - Arguments to create many Mstemps.
     * @example
     * // Create many Mstemps
     * const mstemp = await prisma.mstemp.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends mstempCreateManyArgs>(args?: SelectSubset<T, mstempCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Mstemp.
     * @param {mstempDeleteArgs} args - Arguments to delete one Mstemp.
     * @example
     * // Delete one Mstemp
     * const Mstemp = await prisma.mstemp.delete({
     *   where: {
     *     // ... filter to delete one Mstemp
     *   }
     * })
     * 
     */
    delete<T extends mstempDeleteArgs>(args: SelectSubset<T, mstempDeleteArgs<ExtArgs>>): Prisma__mstempClient<$Result.GetResult<Prisma.$mstempPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Mstemp.
     * @param {mstempUpdateArgs} args - Arguments to update one Mstemp.
     * @example
     * // Update one Mstemp
     * const mstemp = await prisma.mstemp.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends mstempUpdateArgs>(args: SelectSubset<T, mstempUpdateArgs<ExtArgs>>): Prisma__mstempClient<$Result.GetResult<Prisma.$mstempPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Mstemps.
     * @param {mstempDeleteManyArgs} args - Arguments to filter Mstemps to delete.
     * @example
     * // Delete a few Mstemps
     * const { count } = await prisma.mstemp.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends mstempDeleteManyArgs>(args?: SelectSubset<T, mstempDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Mstemps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mstempUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Mstemps
     * const mstemp = await prisma.mstemp.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends mstempUpdateManyArgs>(args: SelectSubset<T, mstempUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Mstemp.
     * @param {mstempUpsertArgs} args - Arguments to update or create a Mstemp.
     * @example
     * // Update or create a Mstemp
     * const mstemp = await prisma.mstemp.upsert({
     *   create: {
     *     // ... data to create a Mstemp
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Mstemp we want to update
     *   }
     * })
     */
    upsert<T extends mstempUpsertArgs>(args: SelectSubset<T, mstempUpsertArgs<ExtArgs>>): Prisma__mstempClient<$Result.GetResult<Prisma.$mstempPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Mstemps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mstempCountArgs} args - Arguments to filter Mstemps to count.
     * @example
     * // Count the number of Mstemps
     * const count = await prisma.mstemp.count({
     *   where: {
     *     // ... the filter for the Mstemps we want to count
     *   }
     * })
    **/
    count<T extends mstempCountArgs>(
      args?: Subset<T, mstempCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MstempCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Mstemp.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MstempAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MstempAggregateArgs>(args: Subset<T, MstempAggregateArgs>): Prisma.PrismaPromise<GetMstempAggregateType<T>>

    /**
     * Group by Mstemp.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mstempGroupByArgs} args - Group by arguments.
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
      T extends mstempGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: mstempGroupByArgs['orderBy'] }
        : { orderBy?: mstempGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, mstempGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMstempGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the mstemp model
   */
  readonly fields: mstempFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for mstemp.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__mstempClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the mstemp model
   */
  interface mstempFieldRefs {
    readonly empcd: FieldRef<"mstemp", 'String'>
    readonly ledcd: FieldRef<"mstemp", 'String'>
    readonly lednm: FieldRef<"mstemp", 'String'>
  }
    

  // Custom InputTypes
  /**
   * mstemp findUnique
   */
  export type mstempFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mstemp
     */
    select?: mstempSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mstemp
     */
    omit?: mstempOmit<ExtArgs> | null
    /**
     * Filter, which mstemp to fetch.
     */
    where: mstempWhereUniqueInput
  }

  /**
   * mstemp findUniqueOrThrow
   */
  export type mstempFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mstemp
     */
    select?: mstempSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mstemp
     */
    omit?: mstempOmit<ExtArgs> | null
    /**
     * Filter, which mstemp to fetch.
     */
    where: mstempWhereUniqueInput
  }

  /**
   * mstemp findFirst
   */
  export type mstempFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mstemp
     */
    select?: mstempSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mstemp
     */
    omit?: mstempOmit<ExtArgs> | null
    /**
     * Filter, which mstemp to fetch.
     */
    where?: mstempWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mstemps to fetch.
     */
    orderBy?: mstempOrderByWithRelationInput | mstempOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for mstemps.
     */
    cursor?: mstempWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mstemps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mstemps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of mstemps.
     */
    distinct?: MstempScalarFieldEnum | MstempScalarFieldEnum[]
  }

  /**
   * mstemp findFirstOrThrow
   */
  export type mstempFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mstemp
     */
    select?: mstempSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mstemp
     */
    omit?: mstempOmit<ExtArgs> | null
    /**
     * Filter, which mstemp to fetch.
     */
    where?: mstempWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mstemps to fetch.
     */
    orderBy?: mstempOrderByWithRelationInput | mstempOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for mstemps.
     */
    cursor?: mstempWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mstemps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mstemps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of mstemps.
     */
    distinct?: MstempScalarFieldEnum | MstempScalarFieldEnum[]
  }

  /**
   * mstemp findMany
   */
  export type mstempFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mstemp
     */
    select?: mstempSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mstemp
     */
    omit?: mstempOmit<ExtArgs> | null
    /**
     * Filter, which mstemps to fetch.
     */
    where?: mstempWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mstemps to fetch.
     */
    orderBy?: mstempOrderByWithRelationInput | mstempOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing mstemps.
     */
    cursor?: mstempWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mstemps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mstemps.
     */
    skip?: number
    distinct?: MstempScalarFieldEnum | MstempScalarFieldEnum[]
  }

  /**
   * mstemp create
   */
  export type mstempCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mstemp
     */
    select?: mstempSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mstemp
     */
    omit?: mstempOmit<ExtArgs> | null
    /**
     * The data needed to create a mstemp.
     */
    data: XOR<mstempCreateInput, mstempUncheckedCreateInput>
  }

  /**
   * mstemp createMany
   */
  export type mstempCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many mstemps.
     */
    data: mstempCreateManyInput | mstempCreateManyInput[]
  }

  /**
   * mstemp update
   */
  export type mstempUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mstemp
     */
    select?: mstempSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mstemp
     */
    omit?: mstempOmit<ExtArgs> | null
    /**
     * The data needed to update a mstemp.
     */
    data: XOR<mstempUpdateInput, mstempUncheckedUpdateInput>
    /**
     * Choose, which mstemp to update.
     */
    where: mstempWhereUniqueInput
  }

  /**
   * mstemp updateMany
   */
  export type mstempUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update mstemps.
     */
    data: XOR<mstempUpdateManyMutationInput, mstempUncheckedUpdateManyInput>
    /**
     * Filter which mstemps to update
     */
    where?: mstempWhereInput
    /**
     * Limit how many mstemps to update.
     */
    limit?: number
  }

  /**
   * mstemp upsert
   */
  export type mstempUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mstemp
     */
    select?: mstempSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mstemp
     */
    omit?: mstempOmit<ExtArgs> | null
    /**
     * The filter to search for the mstemp to update in case it exists.
     */
    where: mstempWhereUniqueInput
    /**
     * In case the mstemp found by the `where` argument doesn't exist, create a new mstemp with this data.
     */
    create: XOR<mstempCreateInput, mstempUncheckedCreateInput>
    /**
     * In case the mstemp was found with the provided `where` argument, update it with this data.
     */
    update: XOR<mstempUpdateInput, mstempUncheckedUpdateInput>
  }

  /**
   * mstemp delete
   */
  export type mstempDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mstemp
     */
    select?: mstempSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mstemp
     */
    omit?: mstempOmit<ExtArgs> | null
    /**
     * Filter which mstemp to delete.
     */
    where: mstempWhereUniqueInput
  }

  /**
   * mstemp deleteMany
   */
  export type mstempDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which mstemps to delete
     */
    where?: mstempWhereInput
    /**
     * Limit how many mstemps to delete.
     */
    limit?: number
  }

  /**
   * mstemp without action
   */
  export type mstempDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mstemp
     */
    select?: mstempSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mstemp
     */
    omit?: mstempOmit<ExtArgs> | null
  }


  /**
   * Model mstparty
   */

  export type AggregateMstparty = {
    _count: MstpartyCountAggregateOutputType | null
    _min: MstpartyMinAggregateOutputType | null
    _max: MstpartyMaxAggregateOutputType | null
  }

  export type MstpartyMinAggregateOutputType = {
    ledcd: string | null
    lednm: string | null
    empcd: string | null
    areacd: string | null
    areanm: string | null
    ledadr1: string | null
  }

  export type MstpartyMaxAggregateOutputType = {
    ledcd: string | null
    lednm: string | null
    empcd: string | null
    areacd: string | null
    areanm: string | null
    ledadr1: string | null
  }

  export type MstpartyCountAggregateOutputType = {
    ledcd: number
    lednm: number
    empcd: number
    areacd: number
    areanm: number
    ledadr1: number
    _all: number
  }


  export type MstpartyMinAggregateInputType = {
    ledcd?: true
    lednm?: true
    empcd?: true
    areacd?: true
    areanm?: true
    ledadr1?: true
  }

  export type MstpartyMaxAggregateInputType = {
    ledcd?: true
    lednm?: true
    empcd?: true
    areacd?: true
    areanm?: true
    ledadr1?: true
  }

  export type MstpartyCountAggregateInputType = {
    ledcd?: true
    lednm?: true
    empcd?: true
    areacd?: true
    areanm?: true
    ledadr1?: true
    _all?: true
  }

  export type MstpartyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which mstparty to aggregate.
     */
    where?: mstpartyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mstparties to fetch.
     */
    orderBy?: mstpartyOrderByWithRelationInput | mstpartyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: mstpartyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mstparties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mstparties.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned mstparties
    **/
    _count?: true | MstpartyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MstpartyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MstpartyMaxAggregateInputType
  }

  export type GetMstpartyAggregateType<T extends MstpartyAggregateArgs> = {
        [P in keyof T & keyof AggregateMstparty]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMstparty[P]>
      : GetScalarType<T[P], AggregateMstparty[P]>
  }




  export type mstpartyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: mstpartyWhereInput
    orderBy?: mstpartyOrderByWithAggregationInput | mstpartyOrderByWithAggregationInput[]
    by: MstpartyScalarFieldEnum[] | MstpartyScalarFieldEnum
    having?: mstpartyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MstpartyCountAggregateInputType | true
    _min?: MstpartyMinAggregateInputType
    _max?: MstpartyMaxAggregateInputType
  }

  export type MstpartyGroupByOutputType = {
    ledcd: string
    lednm: string | null
    empcd: string | null
    areacd: string
    areanm: string | null
    ledadr1: string | null
    _count: MstpartyCountAggregateOutputType | null
    _min: MstpartyMinAggregateOutputType | null
    _max: MstpartyMaxAggregateOutputType | null
  }

  type GetMstpartyGroupByPayload<T extends mstpartyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MstpartyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MstpartyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MstpartyGroupByOutputType[P]>
            : GetScalarType<T[P], MstpartyGroupByOutputType[P]>
        }
      >
    >


  export type mstpartySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ledcd?: boolean
    lednm?: boolean
    empcd?: boolean
    areacd?: boolean
    areanm?: boolean
    ledadr1?: boolean
  }, ExtArgs["result"]["mstparty"]>



  export type mstpartySelectScalar = {
    ledcd?: boolean
    lednm?: boolean
    empcd?: boolean
    areacd?: boolean
    areanm?: boolean
    ledadr1?: boolean
  }

  export type mstpartyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"ledcd" | "lednm" | "empcd" | "areacd" | "areanm" | "ledadr1", ExtArgs["result"]["mstparty"]>

  export type $mstpartyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "mstparty"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      ledcd: string
      lednm: string | null
      empcd: string | null
      areacd: string
      areanm: string | null
      ledadr1: string | null
    }, ExtArgs["result"]["mstparty"]>
    composites: {}
  }

  type mstpartyGetPayload<S extends boolean | null | undefined | mstpartyDefaultArgs> = $Result.GetResult<Prisma.$mstpartyPayload, S>

  type mstpartyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<mstpartyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MstpartyCountAggregateInputType | true
    }

  export interface mstpartyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['mstparty'], meta: { name: 'mstparty' } }
    /**
     * Find zero or one Mstparty that matches the filter.
     * @param {mstpartyFindUniqueArgs} args - Arguments to find a Mstparty
     * @example
     * // Get one Mstparty
     * const mstparty = await prisma.mstparty.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends mstpartyFindUniqueArgs>(args: SelectSubset<T, mstpartyFindUniqueArgs<ExtArgs>>): Prisma__mstpartyClient<$Result.GetResult<Prisma.$mstpartyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Mstparty that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {mstpartyFindUniqueOrThrowArgs} args - Arguments to find a Mstparty
     * @example
     * // Get one Mstparty
     * const mstparty = await prisma.mstparty.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends mstpartyFindUniqueOrThrowArgs>(args: SelectSubset<T, mstpartyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__mstpartyClient<$Result.GetResult<Prisma.$mstpartyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Mstparty that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mstpartyFindFirstArgs} args - Arguments to find a Mstparty
     * @example
     * // Get one Mstparty
     * const mstparty = await prisma.mstparty.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends mstpartyFindFirstArgs>(args?: SelectSubset<T, mstpartyFindFirstArgs<ExtArgs>>): Prisma__mstpartyClient<$Result.GetResult<Prisma.$mstpartyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Mstparty that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mstpartyFindFirstOrThrowArgs} args - Arguments to find a Mstparty
     * @example
     * // Get one Mstparty
     * const mstparty = await prisma.mstparty.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends mstpartyFindFirstOrThrowArgs>(args?: SelectSubset<T, mstpartyFindFirstOrThrowArgs<ExtArgs>>): Prisma__mstpartyClient<$Result.GetResult<Prisma.$mstpartyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Mstparties that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mstpartyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Mstparties
     * const mstparties = await prisma.mstparty.findMany()
     * 
     * // Get first 10 Mstparties
     * const mstparties = await prisma.mstparty.findMany({ take: 10 })
     * 
     * // Only select the `ledcd`
     * const mstpartyWithLedcdOnly = await prisma.mstparty.findMany({ select: { ledcd: true } })
     * 
     */
    findMany<T extends mstpartyFindManyArgs>(args?: SelectSubset<T, mstpartyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$mstpartyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Mstparty.
     * @param {mstpartyCreateArgs} args - Arguments to create a Mstparty.
     * @example
     * // Create one Mstparty
     * const Mstparty = await prisma.mstparty.create({
     *   data: {
     *     // ... data to create a Mstparty
     *   }
     * })
     * 
     */
    create<T extends mstpartyCreateArgs>(args: SelectSubset<T, mstpartyCreateArgs<ExtArgs>>): Prisma__mstpartyClient<$Result.GetResult<Prisma.$mstpartyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Mstparties.
     * @param {mstpartyCreateManyArgs} args - Arguments to create many Mstparties.
     * @example
     * // Create many Mstparties
     * const mstparty = await prisma.mstparty.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends mstpartyCreateManyArgs>(args?: SelectSubset<T, mstpartyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Mstparty.
     * @param {mstpartyDeleteArgs} args - Arguments to delete one Mstparty.
     * @example
     * // Delete one Mstparty
     * const Mstparty = await prisma.mstparty.delete({
     *   where: {
     *     // ... filter to delete one Mstparty
     *   }
     * })
     * 
     */
    delete<T extends mstpartyDeleteArgs>(args: SelectSubset<T, mstpartyDeleteArgs<ExtArgs>>): Prisma__mstpartyClient<$Result.GetResult<Prisma.$mstpartyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Mstparty.
     * @param {mstpartyUpdateArgs} args - Arguments to update one Mstparty.
     * @example
     * // Update one Mstparty
     * const mstparty = await prisma.mstparty.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends mstpartyUpdateArgs>(args: SelectSubset<T, mstpartyUpdateArgs<ExtArgs>>): Prisma__mstpartyClient<$Result.GetResult<Prisma.$mstpartyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Mstparties.
     * @param {mstpartyDeleteManyArgs} args - Arguments to filter Mstparties to delete.
     * @example
     * // Delete a few Mstparties
     * const { count } = await prisma.mstparty.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends mstpartyDeleteManyArgs>(args?: SelectSubset<T, mstpartyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Mstparties.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mstpartyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Mstparties
     * const mstparty = await prisma.mstparty.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends mstpartyUpdateManyArgs>(args: SelectSubset<T, mstpartyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Mstparty.
     * @param {mstpartyUpsertArgs} args - Arguments to update or create a Mstparty.
     * @example
     * // Update or create a Mstparty
     * const mstparty = await prisma.mstparty.upsert({
     *   create: {
     *     // ... data to create a Mstparty
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Mstparty we want to update
     *   }
     * })
     */
    upsert<T extends mstpartyUpsertArgs>(args: SelectSubset<T, mstpartyUpsertArgs<ExtArgs>>): Prisma__mstpartyClient<$Result.GetResult<Prisma.$mstpartyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Mstparties.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mstpartyCountArgs} args - Arguments to filter Mstparties to count.
     * @example
     * // Count the number of Mstparties
     * const count = await prisma.mstparty.count({
     *   where: {
     *     // ... the filter for the Mstparties we want to count
     *   }
     * })
    **/
    count<T extends mstpartyCountArgs>(
      args?: Subset<T, mstpartyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MstpartyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Mstparty.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MstpartyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MstpartyAggregateArgs>(args: Subset<T, MstpartyAggregateArgs>): Prisma.PrismaPromise<GetMstpartyAggregateType<T>>

    /**
     * Group by Mstparty.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mstpartyGroupByArgs} args - Group by arguments.
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
      T extends mstpartyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: mstpartyGroupByArgs['orderBy'] }
        : { orderBy?: mstpartyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, mstpartyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMstpartyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the mstparty model
   */
  readonly fields: mstpartyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for mstparty.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__mstpartyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the mstparty model
   */
  interface mstpartyFieldRefs {
    readonly ledcd: FieldRef<"mstparty", 'String'>
    readonly lednm: FieldRef<"mstparty", 'String'>
    readonly empcd: FieldRef<"mstparty", 'String'>
    readonly areacd: FieldRef<"mstparty", 'String'>
    readonly areanm: FieldRef<"mstparty", 'String'>
    readonly ledadr1: FieldRef<"mstparty", 'String'>
  }
    

  // Custom InputTypes
  /**
   * mstparty findUnique
   */
  export type mstpartyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mstparty
     */
    select?: mstpartySelect<ExtArgs> | null
    /**
     * Omit specific fields from the mstparty
     */
    omit?: mstpartyOmit<ExtArgs> | null
    /**
     * Filter, which mstparty to fetch.
     */
    where: mstpartyWhereUniqueInput
  }

  /**
   * mstparty findUniqueOrThrow
   */
  export type mstpartyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mstparty
     */
    select?: mstpartySelect<ExtArgs> | null
    /**
     * Omit specific fields from the mstparty
     */
    omit?: mstpartyOmit<ExtArgs> | null
    /**
     * Filter, which mstparty to fetch.
     */
    where: mstpartyWhereUniqueInput
  }

  /**
   * mstparty findFirst
   */
  export type mstpartyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mstparty
     */
    select?: mstpartySelect<ExtArgs> | null
    /**
     * Omit specific fields from the mstparty
     */
    omit?: mstpartyOmit<ExtArgs> | null
    /**
     * Filter, which mstparty to fetch.
     */
    where?: mstpartyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mstparties to fetch.
     */
    orderBy?: mstpartyOrderByWithRelationInput | mstpartyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for mstparties.
     */
    cursor?: mstpartyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mstparties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mstparties.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of mstparties.
     */
    distinct?: MstpartyScalarFieldEnum | MstpartyScalarFieldEnum[]
  }

  /**
   * mstparty findFirstOrThrow
   */
  export type mstpartyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mstparty
     */
    select?: mstpartySelect<ExtArgs> | null
    /**
     * Omit specific fields from the mstparty
     */
    omit?: mstpartyOmit<ExtArgs> | null
    /**
     * Filter, which mstparty to fetch.
     */
    where?: mstpartyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mstparties to fetch.
     */
    orderBy?: mstpartyOrderByWithRelationInput | mstpartyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for mstparties.
     */
    cursor?: mstpartyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mstparties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mstparties.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of mstparties.
     */
    distinct?: MstpartyScalarFieldEnum | MstpartyScalarFieldEnum[]
  }

  /**
   * mstparty findMany
   */
  export type mstpartyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mstparty
     */
    select?: mstpartySelect<ExtArgs> | null
    /**
     * Omit specific fields from the mstparty
     */
    omit?: mstpartyOmit<ExtArgs> | null
    /**
     * Filter, which mstparties to fetch.
     */
    where?: mstpartyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mstparties to fetch.
     */
    orderBy?: mstpartyOrderByWithRelationInput | mstpartyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing mstparties.
     */
    cursor?: mstpartyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mstparties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mstparties.
     */
    skip?: number
    distinct?: MstpartyScalarFieldEnum | MstpartyScalarFieldEnum[]
  }

  /**
   * mstparty create
   */
  export type mstpartyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mstparty
     */
    select?: mstpartySelect<ExtArgs> | null
    /**
     * Omit specific fields from the mstparty
     */
    omit?: mstpartyOmit<ExtArgs> | null
    /**
     * The data needed to create a mstparty.
     */
    data: XOR<mstpartyCreateInput, mstpartyUncheckedCreateInput>
  }

  /**
   * mstparty createMany
   */
  export type mstpartyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many mstparties.
     */
    data: mstpartyCreateManyInput | mstpartyCreateManyInput[]
  }

  /**
   * mstparty update
   */
  export type mstpartyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mstparty
     */
    select?: mstpartySelect<ExtArgs> | null
    /**
     * Omit specific fields from the mstparty
     */
    omit?: mstpartyOmit<ExtArgs> | null
    /**
     * The data needed to update a mstparty.
     */
    data: XOR<mstpartyUpdateInput, mstpartyUncheckedUpdateInput>
    /**
     * Choose, which mstparty to update.
     */
    where: mstpartyWhereUniqueInput
  }

  /**
   * mstparty updateMany
   */
  export type mstpartyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update mstparties.
     */
    data: XOR<mstpartyUpdateManyMutationInput, mstpartyUncheckedUpdateManyInput>
    /**
     * Filter which mstparties to update
     */
    where?: mstpartyWhereInput
    /**
     * Limit how many mstparties to update.
     */
    limit?: number
  }

  /**
   * mstparty upsert
   */
  export type mstpartyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mstparty
     */
    select?: mstpartySelect<ExtArgs> | null
    /**
     * Omit specific fields from the mstparty
     */
    omit?: mstpartyOmit<ExtArgs> | null
    /**
     * The filter to search for the mstparty to update in case it exists.
     */
    where: mstpartyWhereUniqueInput
    /**
     * In case the mstparty found by the `where` argument doesn't exist, create a new mstparty with this data.
     */
    create: XOR<mstpartyCreateInput, mstpartyUncheckedCreateInput>
    /**
     * In case the mstparty was found with the provided `where` argument, update it with this data.
     */
    update: XOR<mstpartyUpdateInput, mstpartyUncheckedUpdateInput>
  }

  /**
   * mstparty delete
   */
  export type mstpartyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mstparty
     */
    select?: mstpartySelect<ExtArgs> | null
    /**
     * Omit specific fields from the mstparty
     */
    omit?: mstpartyOmit<ExtArgs> | null
    /**
     * Filter which mstparty to delete.
     */
    where: mstpartyWhereUniqueInput
  }

  /**
   * mstparty deleteMany
   */
  export type mstpartyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which mstparties to delete
     */
    where?: mstpartyWhereInput
    /**
     * Limit how many mstparties to delete.
     */
    limit?: number
  }

  /**
   * mstparty without action
   */
  export type mstpartyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mstparty
     */
    select?: mstpartySelect<ExtArgs> | null
    /**
     * Omit specific fields from the mstparty
     */
    omit?: mstpartyOmit<ExtArgs> | null
  }


  /**
   * Model mstitm
   */

  export type AggregateMstitm = {
    _count: MstitmCountAggregateOutputType | null
    _avg: MstitmAvgAggregateOutputType | null
    _sum: MstitmSumAggregateOutputType | null
    _min: MstitmMinAggregateOutputType | null
    _max: MstitmMaxAggregateOutputType | null
  }

  export type MstitmAvgAggregateOutputType = {
    rowid: number | null
    pcksz: Decimal | null
    wgtconv: Decimal | null
    itmrate: number | null
  }

  export type MstitmSumAggregateOutputType = {
    rowid: bigint | null
    pcksz: Decimal | null
    wgtconv: Decimal | null
    itmrate: number | null
  }

  export type MstitmMinAggregateOutputType = {
    rowid: bigint | null
    itmcd: string | null
    itmnm: string | null
    pcksz: Decimal | null
    wgtconv: Decimal | null
    itmsubcat: string | null
    itmcatgrp: string | null
    lsitmnm: string | null
    itmrate: number | null
  }

  export type MstitmMaxAggregateOutputType = {
    rowid: bigint | null
    itmcd: string | null
    itmnm: string | null
    pcksz: Decimal | null
    wgtconv: Decimal | null
    itmsubcat: string | null
    itmcatgrp: string | null
    lsitmnm: string | null
    itmrate: number | null
  }

  export type MstitmCountAggregateOutputType = {
    rowid: number
    itmcd: number
    itmnm: number
    pcksz: number
    wgtconv: number
    itmsubcat: number
    itmcatgrp: number
    lsitmnm: number
    itmrate: number
    _all: number
  }


  export type MstitmAvgAggregateInputType = {
    rowid?: true
    pcksz?: true
    wgtconv?: true
    itmrate?: true
  }

  export type MstitmSumAggregateInputType = {
    rowid?: true
    pcksz?: true
    wgtconv?: true
    itmrate?: true
  }

  export type MstitmMinAggregateInputType = {
    rowid?: true
    itmcd?: true
    itmnm?: true
    pcksz?: true
    wgtconv?: true
    itmsubcat?: true
    itmcatgrp?: true
    lsitmnm?: true
    itmrate?: true
  }

  export type MstitmMaxAggregateInputType = {
    rowid?: true
    itmcd?: true
    itmnm?: true
    pcksz?: true
    wgtconv?: true
    itmsubcat?: true
    itmcatgrp?: true
    lsitmnm?: true
    itmrate?: true
  }

  export type MstitmCountAggregateInputType = {
    rowid?: true
    itmcd?: true
    itmnm?: true
    pcksz?: true
    wgtconv?: true
    itmsubcat?: true
    itmcatgrp?: true
    lsitmnm?: true
    itmrate?: true
    _all?: true
  }

  export type MstitmAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which mstitm to aggregate.
     */
    where?: mstitmWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mstitms to fetch.
     */
    orderBy?: mstitmOrderByWithRelationInput | mstitmOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: mstitmWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mstitms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mstitms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned mstitms
    **/
    _count?: true | MstitmCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MstitmAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MstitmSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MstitmMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MstitmMaxAggregateInputType
  }

  export type GetMstitmAggregateType<T extends MstitmAggregateArgs> = {
        [P in keyof T & keyof AggregateMstitm]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMstitm[P]>
      : GetScalarType<T[P], AggregateMstitm[P]>
  }




  export type mstitmGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: mstitmWhereInput
    orderBy?: mstitmOrderByWithAggregationInput | mstitmOrderByWithAggregationInput[]
    by: MstitmScalarFieldEnum[] | MstitmScalarFieldEnum
    having?: mstitmScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MstitmCountAggregateInputType | true
    _avg?: MstitmAvgAggregateInputType
    _sum?: MstitmSumAggregateInputType
    _min?: MstitmMinAggregateInputType
    _max?: MstitmMaxAggregateInputType
  }

  export type MstitmGroupByOutputType = {
    rowid: bigint
    itmcd: string
    itmnm: string
    pcksz: Decimal | null
    wgtconv: Decimal | null
    itmsubcat: string | null
    itmcatgrp: string | null
    lsitmnm: string | null
    itmrate: number
    _count: MstitmCountAggregateOutputType | null
    _avg: MstitmAvgAggregateOutputType | null
    _sum: MstitmSumAggregateOutputType | null
    _min: MstitmMinAggregateOutputType | null
    _max: MstitmMaxAggregateOutputType | null
  }

  type GetMstitmGroupByPayload<T extends mstitmGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MstitmGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MstitmGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MstitmGroupByOutputType[P]>
            : GetScalarType<T[P], MstitmGroupByOutputType[P]>
        }
      >
    >


  export type mstitmSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    rowid?: boolean
    itmcd?: boolean
    itmnm?: boolean
    pcksz?: boolean
    wgtconv?: boolean
    itmsubcat?: boolean
    itmcatgrp?: boolean
    lsitmnm?: boolean
    itmrate?: boolean
  }, ExtArgs["result"]["mstitm"]>



  export type mstitmSelectScalar = {
    rowid?: boolean
    itmcd?: boolean
    itmnm?: boolean
    pcksz?: boolean
    wgtconv?: boolean
    itmsubcat?: boolean
    itmcatgrp?: boolean
    lsitmnm?: boolean
    itmrate?: boolean
  }

  export type mstitmOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"rowid" | "itmcd" | "itmnm" | "pcksz" | "wgtconv" | "itmsubcat" | "itmcatgrp" | "lsitmnm" | "itmrate", ExtArgs["result"]["mstitm"]>

  export type $mstitmPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "mstitm"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      rowid: bigint
      itmcd: string
      itmnm: string
      pcksz: Prisma.Decimal | null
      wgtconv: Prisma.Decimal | null
      itmsubcat: string | null
      itmcatgrp: string | null
      lsitmnm: string | null
      itmrate: number
    }, ExtArgs["result"]["mstitm"]>
    composites: {}
  }

  type mstitmGetPayload<S extends boolean | null | undefined | mstitmDefaultArgs> = $Result.GetResult<Prisma.$mstitmPayload, S>

  type mstitmCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<mstitmFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MstitmCountAggregateInputType | true
    }

  export interface mstitmDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['mstitm'], meta: { name: 'mstitm' } }
    /**
     * Find zero or one Mstitm that matches the filter.
     * @param {mstitmFindUniqueArgs} args - Arguments to find a Mstitm
     * @example
     * // Get one Mstitm
     * const mstitm = await prisma.mstitm.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends mstitmFindUniqueArgs>(args: SelectSubset<T, mstitmFindUniqueArgs<ExtArgs>>): Prisma__mstitmClient<$Result.GetResult<Prisma.$mstitmPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Mstitm that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {mstitmFindUniqueOrThrowArgs} args - Arguments to find a Mstitm
     * @example
     * // Get one Mstitm
     * const mstitm = await prisma.mstitm.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends mstitmFindUniqueOrThrowArgs>(args: SelectSubset<T, mstitmFindUniqueOrThrowArgs<ExtArgs>>): Prisma__mstitmClient<$Result.GetResult<Prisma.$mstitmPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Mstitm that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mstitmFindFirstArgs} args - Arguments to find a Mstitm
     * @example
     * // Get one Mstitm
     * const mstitm = await prisma.mstitm.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends mstitmFindFirstArgs>(args?: SelectSubset<T, mstitmFindFirstArgs<ExtArgs>>): Prisma__mstitmClient<$Result.GetResult<Prisma.$mstitmPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Mstitm that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mstitmFindFirstOrThrowArgs} args - Arguments to find a Mstitm
     * @example
     * // Get one Mstitm
     * const mstitm = await prisma.mstitm.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends mstitmFindFirstOrThrowArgs>(args?: SelectSubset<T, mstitmFindFirstOrThrowArgs<ExtArgs>>): Prisma__mstitmClient<$Result.GetResult<Prisma.$mstitmPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Mstitms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mstitmFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Mstitms
     * const mstitms = await prisma.mstitm.findMany()
     * 
     * // Get first 10 Mstitms
     * const mstitms = await prisma.mstitm.findMany({ take: 10 })
     * 
     * // Only select the `rowid`
     * const mstitmWithRowidOnly = await prisma.mstitm.findMany({ select: { rowid: true } })
     * 
     */
    findMany<T extends mstitmFindManyArgs>(args?: SelectSubset<T, mstitmFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$mstitmPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Mstitm.
     * @param {mstitmCreateArgs} args - Arguments to create a Mstitm.
     * @example
     * // Create one Mstitm
     * const Mstitm = await prisma.mstitm.create({
     *   data: {
     *     // ... data to create a Mstitm
     *   }
     * })
     * 
     */
    create<T extends mstitmCreateArgs>(args: SelectSubset<T, mstitmCreateArgs<ExtArgs>>): Prisma__mstitmClient<$Result.GetResult<Prisma.$mstitmPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Mstitms.
     * @param {mstitmCreateManyArgs} args - Arguments to create many Mstitms.
     * @example
     * // Create many Mstitms
     * const mstitm = await prisma.mstitm.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends mstitmCreateManyArgs>(args?: SelectSubset<T, mstitmCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Mstitm.
     * @param {mstitmDeleteArgs} args - Arguments to delete one Mstitm.
     * @example
     * // Delete one Mstitm
     * const Mstitm = await prisma.mstitm.delete({
     *   where: {
     *     // ... filter to delete one Mstitm
     *   }
     * })
     * 
     */
    delete<T extends mstitmDeleteArgs>(args: SelectSubset<T, mstitmDeleteArgs<ExtArgs>>): Prisma__mstitmClient<$Result.GetResult<Prisma.$mstitmPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Mstitm.
     * @param {mstitmUpdateArgs} args - Arguments to update one Mstitm.
     * @example
     * // Update one Mstitm
     * const mstitm = await prisma.mstitm.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends mstitmUpdateArgs>(args: SelectSubset<T, mstitmUpdateArgs<ExtArgs>>): Prisma__mstitmClient<$Result.GetResult<Prisma.$mstitmPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Mstitms.
     * @param {mstitmDeleteManyArgs} args - Arguments to filter Mstitms to delete.
     * @example
     * // Delete a few Mstitms
     * const { count } = await prisma.mstitm.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends mstitmDeleteManyArgs>(args?: SelectSubset<T, mstitmDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Mstitms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mstitmUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Mstitms
     * const mstitm = await prisma.mstitm.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends mstitmUpdateManyArgs>(args: SelectSubset<T, mstitmUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Mstitm.
     * @param {mstitmUpsertArgs} args - Arguments to update or create a Mstitm.
     * @example
     * // Update or create a Mstitm
     * const mstitm = await prisma.mstitm.upsert({
     *   create: {
     *     // ... data to create a Mstitm
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Mstitm we want to update
     *   }
     * })
     */
    upsert<T extends mstitmUpsertArgs>(args: SelectSubset<T, mstitmUpsertArgs<ExtArgs>>): Prisma__mstitmClient<$Result.GetResult<Prisma.$mstitmPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Mstitms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mstitmCountArgs} args - Arguments to filter Mstitms to count.
     * @example
     * // Count the number of Mstitms
     * const count = await prisma.mstitm.count({
     *   where: {
     *     // ... the filter for the Mstitms we want to count
     *   }
     * })
    **/
    count<T extends mstitmCountArgs>(
      args?: Subset<T, mstitmCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MstitmCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Mstitm.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MstitmAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MstitmAggregateArgs>(args: Subset<T, MstitmAggregateArgs>): Prisma.PrismaPromise<GetMstitmAggregateType<T>>

    /**
     * Group by Mstitm.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mstitmGroupByArgs} args - Group by arguments.
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
      T extends mstitmGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: mstitmGroupByArgs['orderBy'] }
        : { orderBy?: mstitmGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, mstitmGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMstitmGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the mstitm model
   */
  readonly fields: mstitmFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for mstitm.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__mstitmClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the mstitm model
   */
  interface mstitmFieldRefs {
    readonly rowid: FieldRef<"mstitm", 'BigInt'>
    readonly itmcd: FieldRef<"mstitm", 'String'>
    readonly itmnm: FieldRef<"mstitm", 'String'>
    readonly pcksz: FieldRef<"mstitm", 'Decimal'>
    readonly wgtconv: FieldRef<"mstitm", 'Decimal'>
    readonly itmsubcat: FieldRef<"mstitm", 'String'>
    readonly itmcatgrp: FieldRef<"mstitm", 'String'>
    readonly lsitmnm: FieldRef<"mstitm", 'String'>
    readonly itmrate: FieldRef<"mstitm", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * mstitm findUnique
   */
  export type mstitmFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mstitm
     */
    select?: mstitmSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mstitm
     */
    omit?: mstitmOmit<ExtArgs> | null
    /**
     * Filter, which mstitm to fetch.
     */
    where: mstitmWhereUniqueInput
  }

  /**
   * mstitm findUniqueOrThrow
   */
  export type mstitmFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mstitm
     */
    select?: mstitmSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mstitm
     */
    omit?: mstitmOmit<ExtArgs> | null
    /**
     * Filter, which mstitm to fetch.
     */
    where: mstitmWhereUniqueInput
  }

  /**
   * mstitm findFirst
   */
  export type mstitmFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mstitm
     */
    select?: mstitmSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mstitm
     */
    omit?: mstitmOmit<ExtArgs> | null
    /**
     * Filter, which mstitm to fetch.
     */
    where?: mstitmWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mstitms to fetch.
     */
    orderBy?: mstitmOrderByWithRelationInput | mstitmOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for mstitms.
     */
    cursor?: mstitmWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mstitms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mstitms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of mstitms.
     */
    distinct?: MstitmScalarFieldEnum | MstitmScalarFieldEnum[]
  }

  /**
   * mstitm findFirstOrThrow
   */
  export type mstitmFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mstitm
     */
    select?: mstitmSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mstitm
     */
    omit?: mstitmOmit<ExtArgs> | null
    /**
     * Filter, which mstitm to fetch.
     */
    where?: mstitmWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mstitms to fetch.
     */
    orderBy?: mstitmOrderByWithRelationInput | mstitmOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for mstitms.
     */
    cursor?: mstitmWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mstitms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mstitms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of mstitms.
     */
    distinct?: MstitmScalarFieldEnum | MstitmScalarFieldEnum[]
  }

  /**
   * mstitm findMany
   */
  export type mstitmFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mstitm
     */
    select?: mstitmSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mstitm
     */
    omit?: mstitmOmit<ExtArgs> | null
    /**
     * Filter, which mstitms to fetch.
     */
    where?: mstitmWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mstitms to fetch.
     */
    orderBy?: mstitmOrderByWithRelationInput | mstitmOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing mstitms.
     */
    cursor?: mstitmWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mstitms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mstitms.
     */
    skip?: number
    distinct?: MstitmScalarFieldEnum | MstitmScalarFieldEnum[]
  }

  /**
   * mstitm create
   */
  export type mstitmCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mstitm
     */
    select?: mstitmSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mstitm
     */
    omit?: mstitmOmit<ExtArgs> | null
    /**
     * The data needed to create a mstitm.
     */
    data: XOR<mstitmCreateInput, mstitmUncheckedCreateInput>
  }

  /**
   * mstitm createMany
   */
  export type mstitmCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many mstitms.
     */
    data: mstitmCreateManyInput | mstitmCreateManyInput[]
  }

  /**
   * mstitm update
   */
  export type mstitmUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mstitm
     */
    select?: mstitmSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mstitm
     */
    omit?: mstitmOmit<ExtArgs> | null
    /**
     * The data needed to update a mstitm.
     */
    data: XOR<mstitmUpdateInput, mstitmUncheckedUpdateInput>
    /**
     * Choose, which mstitm to update.
     */
    where: mstitmWhereUniqueInput
  }

  /**
   * mstitm updateMany
   */
  export type mstitmUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update mstitms.
     */
    data: XOR<mstitmUpdateManyMutationInput, mstitmUncheckedUpdateManyInput>
    /**
     * Filter which mstitms to update
     */
    where?: mstitmWhereInput
    /**
     * Limit how many mstitms to update.
     */
    limit?: number
  }

  /**
   * mstitm upsert
   */
  export type mstitmUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mstitm
     */
    select?: mstitmSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mstitm
     */
    omit?: mstitmOmit<ExtArgs> | null
    /**
     * The filter to search for the mstitm to update in case it exists.
     */
    where: mstitmWhereUniqueInput
    /**
     * In case the mstitm found by the `where` argument doesn't exist, create a new mstitm with this data.
     */
    create: XOR<mstitmCreateInput, mstitmUncheckedCreateInput>
    /**
     * In case the mstitm was found with the provided `where` argument, update it with this data.
     */
    update: XOR<mstitmUpdateInput, mstitmUncheckedUpdateInput>
  }

  /**
   * mstitm delete
   */
  export type mstitmDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mstitm
     */
    select?: mstitmSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mstitm
     */
    omit?: mstitmOmit<ExtArgs> | null
    /**
     * Filter which mstitm to delete.
     */
    where: mstitmWhereUniqueInput
  }

  /**
   * mstitm deleteMany
   */
  export type mstitmDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which mstitms to delete
     */
    where?: mstitmWhereInput
    /**
     * Limit how many mstitms to delete.
     */
    limit?: number
  }

  /**
   * mstitm without action
   */
  export type mstitmDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mstitm
     */
    select?: mstitmSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mstitm
     */
    omit?: mstitmOmit<ExtArgs> | null
  }


  /**
   * Model OutstandingAmt
   */

  export type AggregateOutstandingAmt = {
    _count: OutstandingAmtCountAggregateOutputType | null
    _avg: OutstandingAmtAvgAggregateOutputType | null
    _sum: OutstandingAmtSumAggregateOutputType | null
    _min: OutstandingAmtMinAggregateOutputType | null
    _max: OutstandingAmtMaxAggregateOutputType | null
  }

  export type OutstandingAmtAvgAggregateOutputType = {
    outamt: Decimal | null
  }

  export type OutstandingAmtSumAggregateOutputType = {
    outamt: Decimal | null
  }

  export type OutstandingAmtMinAggregateOutputType = {
    ledcd: string | null
    outamt: Decimal | null
  }

  export type OutstandingAmtMaxAggregateOutputType = {
    ledcd: string | null
    outamt: Decimal | null
  }

  export type OutstandingAmtCountAggregateOutputType = {
    ledcd: number
    outamt: number
    _all: number
  }


  export type OutstandingAmtAvgAggregateInputType = {
    outamt?: true
  }

  export type OutstandingAmtSumAggregateInputType = {
    outamt?: true
  }

  export type OutstandingAmtMinAggregateInputType = {
    ledcd?: true
    outamt?: true
  }

  export type OutstandingAmtMaxAggregateInputType = {
    ledcd?: true
    outamt?: true
  }

  export type OutstandingAmtCountAggregateInputType = {
    ledcd?: true
    outamt?: true
    _all?: true
  }

  export type OutstandingAmtAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OutstandingAmt to aggregate.
     */
    where?: OutstandingAmtWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OutstandingAmts to fetch.
     */
    orderBy?: OutstandingAmtOrderByWithRelationInput | OutstandingAmtOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OutstandingAmtWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OutstandingAmts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OutstandingAmts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OutstandingAmts
    **/
    _count?: true | OutstandingAmtCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OutstandingAmtAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OutstandingAmtSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OutstandingAmtMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OutstandingAmtMaxAggregateInputType
  }

  export type GetOutstandingAmtAggregateType<T extends OutstandingAmtAggregateArgs> = {
        [P in keyof T & keyof AggregateOutstandingAmt]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOutstandingAmt[P]>
      : GetScalarType<T[P], AggregateOutstandingAmt[P]>
  }




  export type OutstandingAmtGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OutstandingAmtWhereInput
    orderBy?: OutstandingAmtOrderByWithAggregationInput | OutstandingAmtOrderByWithAggregationInput[]
    by: OutstandingAmtScalarFieldEnum[] | OutstandingAmtScalarFieldEnum
    having?: OutstandingAmtScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OutstandingAmtCountAggregateInputType | true
    _avg?: OutstandingAmtAvgAggregateInputType
    _sum?: OutstandingAmtSumAggregateInputType
    _min?: OutstandingAmtMinAggregateInputType
    _max?: OutstandingAmtMaxAggregateInputType
  }

  export type OutstandingAmtGroupByOutputType = {
    ledcd: string
    outamt: Decimal | null
    _count: OutstandingAmtCountAggregateOutputType | null
    _avg: OutstandingAmtAvgAggregateOutputType | null
    _sum: OutstandingAmtSumAggregateOutputType | null
    _min: OutstandingAmtMinAggregateOutputType | null
    _max: OutstandingAmtMaxAggregateOutputType | null
  }

  type GetOutstandingAmtGroupByPayload<T extends OutstandingAmtGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OutstandingAmtGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OutstandingAmtGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OutstandingAmtGroupByOutputType[P]>
            : GetScalarType<T[P], OutstandingAmtGroupByOutputType[P]>
        }
      >
    >


  export type OutstandingAmtSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ledcd?: boolean
    outamt?: boolean
  }, ExtArgs["result"]["outstandingAmt"]>



  export type OutstandingAmtSelectScalar = {
    ledcd?: boolean
    outamt?: boolean
  }

  export type OutstandingAmtOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"ledcd" | "outamt", ExtArgs["result"]["outstandingAmt"]>

  export type $OutstandingAmtPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OutstandingAmt"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      ledcd: string
      outamt: Prisma.Decimal | null
    }, ExtArgs["result"]["outstandingAmt"]>
    composites: {}
  }

  type OutstandingAmtGetPayload<S extends boolean | null | undefined | OutstandingAmtDefaultArgs> = $Result.GetResult<Prisma.$OutstandingAmtPayload, S>

  type OutstandingAmtCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OutstandingAmtFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OutstandingAmtCountAggregateInputType | true
    }

  export interface OutstandingAmtDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OutstandingAmt'], meta: { name: 'OutstandingAmt' } }
    /**
     * Find zero or one OutstandingAmt that matches the filter.
     * @param {OutstandingAmtFindUniqueArgs} args - Arguments to find a OutstandingAmt
     * @example
     * // Get one OutstandingAmt
     * const outstandingAmt = await prisma.outstandingAmt.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OutstandingAmtFindUniqueArgs>(args: SelectSubset<T, OutstandingAmtFindUniqueArgs<ExtArgs>>): Prisma__OutstandingAmtClient<$Result.GetResult<Prisma.$OutstandingAmtPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one OutstandingAmt that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OutstandingAmtFindUniqueOrThrowArgs} args - Arguments to find a OutstandingAmt
     * @example
     * // Get one OutstandingAmt
     * const outstandingAmt = await prisma.outstandingAmt.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OutstandingAmtFindUniqueOrThrowArgs>(args: SelectSubset<T, OutstandingAmtFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OutstandingAmtClient<$Result.GetResult<Prisma.$OutstandingAmtPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OutstandingAmt that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutstandingAmtFindFirstArgs} args - Arguments to find a OutstandingAmt
     * @example
     * // Get one OutstandingAmt
     * const outstandingAmt = await prisma.outstandingAmt.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OutstandingAmtFindFirstArgs>(args?: SelectSubset<T, OutstandingAmtFindFirstArgs<ExtArgs>>): Prisma__OutstandingAmtClient<$Result.GetResult<Prisma.$OutstandingAmtPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OutstandingAmt that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutstandingAmtFindFirstOrThrowArgs} args - Arguments to find a OutstandingAmt
     * @example
     * // Get one OutstandingAmt
     * const outstandingAmt = await prisma.outstandingAmt.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OutstandingAmtFindFirstOrThrowArgs>(args?: SelectSubset<T, OutstandingAmtFindFirstOrThrowArgs<ExtArgs>>): Prisma__OutstandingAmtClient<$Result.GetResult<Prisma.$OutstandingAmtPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more OutstandingAmts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutstandingAmtFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OutstandingAmts
     * const outstandingAmts = await prisma.outstandingAmt.findMany()
     * 
     * // Get first 10 OutstandingAmts
     * const outstandingAmts = await prisma.outstandingAmt.findMany({ take: 10 })
     * 
     * // Only select the `ledcd`
     * const outstandingAmtWithLedcdOnly = await prisma.outstandingAmt.findMany({ select: { ledcd: true } })
     * 
     */
    findMany<T extends OutstandingAmtFindManyArgs>(args?: SelectSubset<T, OutstandingAmtFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OutstandingAmtPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a OutstandingAmt.
     * @param {OutstandingAmtCreateArgs} args - Arguments to create a OutstandingAmt.
     * @example
     * // Create one OutstandingAmt
     * const OutstandingAmt = await prisma.outstandingAmt.create({
     *   data: {
     *     // ... data to create a OutstandingAmt
     *   }
     * })
     * 
     */
    create<T extends OutstandingAmtCreateArgs>(args: SelectSubset<T, OutstandingAmtCreateArgs<ExtArgs>>): Prisma__OutstandingAmtClient<$Result.GetResult<Prisma.$OutstandingAmtPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many OutstandingAmts.
     * @param {OutstandingAmtCreateManyArgs} args - Arguments to create many OutstandingAmts.
     * @example
     * // Create many OutstandingAmts
     * const outstandingAmt = await prisma.outstandingAmt.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OutstandingAmtCreateManyArgs>(args?: SelectSubset<T, OutstandingAmtCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a OutstandingAmt.
     * @param {OutstandingAmtDeleteArgs} args - Arguments to delete one OutstandingAmt.
     * @example
     * // Delete one OutstandingAmt
     * const OutstandingAmt = await prisma.outstandingAmt.delete({
     *   where: {
     *     // ... filter to delete one OutstandingAmt
     *   }
     * })
     * 
     */
    delete<T extends OutstandingAmtDeleteArgs>(args: SelectSubset<T, OutstandingAmtDeleteArgs<ExtArgs>>): Prisma__OutstandingAmtClient<$Result.GetResult<Prisma.$OutstandingAmtPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one OutstandingAmt.
     * @param {OutstandingAmtUpdateArgs} args - Arguments to update one OutstandingAmt.
     * @example
     * // Update one OutstandingAmt
     * const outstandingAmt = await prisma.outstandingAmt.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OutstandingAmtUpdateArgs>(args: SelectSubset<T, OutstandingAmtUpdateArgs<ExtArgs>>): Prisma__OutstandingAmtClient<$Result.GetResult<Prisma.$OutstandingAmtPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more OutstandingAmts.
     * @param {OutstandingAmtDeleteManyArgs} args - Arguments to filter OutstandingAmts to delete.
     * @example
     * // Delete a few OutstandingAmts
     * const { count } = await prisma.outstandingAmt.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OutstandingAmtDeleteManyArgs>(args?: SelectSubset<T, OutstandingAmtDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OutstandingAmts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutstandingAmtUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OutstandingAmts
     * const outstandingAmt = await prisma.outstandingAmt.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OutstandingAmtUpdateManyArgs>(args: SelectSubset<T, OutstandingAmtUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one OutstandingAmt.
     * @param {OutstandingAmtUpsertArgs} args - Arguments to update or create a OutstandingAmt.
     * @example
     * // Update or create a OutstandingAmt
     * const outstandingAmt = await prisma.outstandingAmt.upsert({
     *   create: {
     *     // ... data to create a OutstandingAmt
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OutstandingAmt we want to update
     *   }
     * })
     */
    upsert<T extends OutstandingAmtUpsertArgs>(args: SelectSubset<T, OutstandingAmtUpsertArgs<ExtArgs>>): Prisma__OutstandingAmtClient<$Result.GetResult<Prisma.$OutstandingAmtPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of OutstandingAmts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutstandingAmtCountArgs} args - Arguments to filter OutstandingAmts to count.
     * @example
     * // Count the number of OutstandingAmts
     * const count = await prisma.outstandingAmt.count({
     *   where: {
     *     // ... the filter for the OutstandingAmts we want to count
     *   }
     * })
    **/
    count<T extends OutstandingAmtCountArgs>(
      args?: Subset<T, OutstandingAmtCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OutstandingAmtCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OutstandingAmt.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutstandingAmtAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OutstandingAmtAggregateArgs>(args: Subset<T, OutstandingAmtAggregateArgs>): Prisma.PrismaPromise<GetOutstandingAmtAggregateType<T>>

    /**
     * Group by OutstandingAmt.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutstandingAmtGroupByArgs} args - Group by arguments.
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
      T extends OutstandingAmtGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OutstandingAmtGroupByArgs['orderBy'] }
        : { orderBy?: OutstandingAmtGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, OutstandingAmtGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOutstandingAmtGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OutstandingAmt model
   */
  readonly fields: OutstandingAmtFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OutstandingAmt.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OutstandingAmtClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the OutstandingAmt model
   */
  interface OutstandingAmtFieldRefs {
    readonly ledcd: FieldRef<"OutstandingAmt", 'String'>
    readonly outamt: FieldRef<"OutstandingAmt", 'Decimal'>
  }
    

  // Custom InputTypes
  /**
   * OutstandingAmt findUnique
   */
  export type OutstandingAmtFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutstandingAmt
     */
    select?: OutstandingAmtSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OutstandingAmt
     */
    omit?: OutstandingAmtOmit<ExtArgs> | null
    /**
     * Filter, which OutstandingAmt to fetch.
     */
    where: OutstandingAmtWhereUniqueInput
  }

  /**
   * OutstandingAmt findUniqueOrThrow
   */
  export type OutstandingAmtFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutstandingAmt
     */
    select?: OutstandingAmtSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OutstandingAmt
     */
    omit?: OutstandingAmtOmit<ExtArgs> | null
    /**
     * Filter, which OutstandingAmt to fetch.
     */
    where: OutstandingAmtWhereUniqueInput
  }

  /**
   * OutstandingAmt findFirst
   */
  export type OutstandingAmtFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutstandingAmt
     */
    select?: OutstandingAmtSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OutstandingAmt
     */
    omit?: OutstandingAmtOmit<ExtArgs> | null
    /**
     * Filter, which OutstandingAmt to fetch.
     */
    where?: OutstandingAmtWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OutstandingAmts to fetch.
     */
    orderBy?: OutstandingAmtOrderByWithRelationInput | OutstandingAmtOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OutstandingAmts.
     */
    cursor?: OutstandingAmtWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OutstandingAmts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OutstandingAmts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OutstandingAmts.
     */
    distinct?: OutstandingAmtScalarFieldEnum | OutstandingAmtScalarFieldEnum[]
  }

  /**
   * OutstandingAmt findFirstOrThrow
   */
  export type OutstandingAmtFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutstandingAmt
     */
    select?: OutstandingAmtSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OutstandingAmt
     */
    omit?: OutstandingAmtOmit<ExtArgs> | null
    /**
     * Filter, which OutstandingAmt to fetch.
     */
    where?: OutstandingAmtWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OutstandingAmts to fetch.
     */
    orderBy?: OutstandingAmtOrderByWithRelationInput | OutstandingAmtOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OutstandingAmts.
     */
    cursor?: OutstandingAmtWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OutstandingAmts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OutstandingAmts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OutstandingAmts.
     */
    distinct?: OutstandingAmtScalarFieldEnum | OutstandingAmtScalarFieldEnum[]
  }

  /**
   * OutstandingAmt findMany
   */
  export type OutstandingAmtFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutstandingAmt
     */
    select?: OutstandingAmtSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OutstandingAmt
     */
    omit?: OutstandingAmtOmit<ExtArgs> | null
    /**
     * Filter, which OutstandingAmts to fetch.
     */
    where?: OutstandingAmtWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OutstandingAmts to fetch.
     */
    orderBy?: OutstandingAmtOrderByWithRelationInput | OutstandingAmtOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OutstandingAmts.
     */
    cursor?: OutstandingAmtWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OutstandingAmts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OutstandingAmts.
     */
    skip?: number
    distinct?: OutstandingAmtScalarFieldEnum | OutstandingAmtScalarFieldEnum[]
  }

  /**
   * OutstandingAmt create
   */
  export type OutstandingAmtCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutstandingAmt
     */
    select?: OutstandingAmtSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OutstandingAmt
     */
    omit?: OutstandingAmtOmit<ExtArgs> | null
    /**
     * The data needed to create a OutstandingAmt.
     */
    data: XOR<OutstandingAmtCreateInput, OutstandingAmtUncheckedCreateInput>
  }

  /**
   * OutstandingAmt createMany
   */
  export type OutstandingAmtCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OutstandingAmts.
     */
    data: OutstandingAmtCreateManyInput | OutstandingAmtCreateManyInput[]
  }

  /**
   * OutstandingAmt update
   */
  export type OutstandingAmtUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutstandingAmt
     */
    select?: OutstandingAmtSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OutstandingAmt
     */
    omit?: OutstandingAmtOmit<ExtArgs> | null
    /**
     * The data needed to update a OutstandingAmt.
     */
    data: XOR<OutstandingAmtUpdateInput, OutstandingAmtUncheckedUpdateInput>
    /**
     * Choose, which OutstandingAmt to update.
     */
    where: OutstandingAmtWhereUniqueInput
  }

  /**
   * OutstandingAmt updateMany
   */
  export type OutstandingAmtUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OutstandingAmts.
     */
    data: XOR<OutstandingAmtUpdateManyMutationInput, OutstandingAmtUncheckedUpdateManyInput>
    /**
     * Filter which OutstandingAmts to update
     */
    where?: OutstandingAmtWhereInput
    /**
     * Limit how many OutstandingAmts to update.
     */
    limit?: number
  }

  /**
   * OutstandingAmt upsert
   */
  export type OutstandingAmtUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutstandingAmt
     */
    select?: OutstandingAmtSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OutstandingAmt
     */
    omit?: OutstandingAmtOmit<ExtArgs> | null
    /**
     * The filter to search for the OutstandingAmt to update in case it exists.
     */
    where: OutstandingAmtWhereUniqueInput
    /**
     * In case the OutstandingAmt found by the `where` argument doesn't exist, create a new OutstandingAmt with this data.
     */
    create: XOR<OutstandingAmtCreateInput, OutstandingAmtUncheckedCreateInput>
    /**
     * In case the OutstandingAmt was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OutstandingAmtUpdateInput, OutstandingAmtUncheckedUpdateInput>
  }

  /**
   * OutstandingAmt delete
   */
  export type OutstandingAmtDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutstandingAmt
     */
    select?: OutstandingAmtSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OutstandingAmt
     */
    omit?: OutstandingAmtOmit<ExtArgs> | null
    /**
     * Filter which OutstandingAmt to delete.
     */
    where: OutstandingAmtWhereUniqueInput
  }

  /**
   * OutstandingAmt deleteMany
   */
  export type OutstandingAmtDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OutstandingAmts to delete
     */
    where?: OutstandingAmtWhereInput
    /**
     * Limit how many OutstandingAmts to delete.
     */
    limit?: number
  }

  /**
   * OutstandingAmt without action
   */
  export type OutstandingAmtDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutstandingAmt
     */
    select?: OutstandingAmtSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OutstandingAmt
     */
    omit?: OutstandingAmtOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable',
    Snapshot: 'Snapshot'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    user_id: 'user_id',
    username: 'username',
    password: 'password',
    untcd: 'untcd',
    stcd: 'stcd',
    stnm: 'stnm',
    untnm: 'untnm',
    usrnm: 'usrnm'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const PartyImagesScalarFieldEnum: {
    image_id: 'image_id',
    partyId: 'partyId',
    createdAt: 'createdAt',
    imageUrl2: 'imageUrl2',
    imageUrl3: 'imageUrl3',
    profileImageUrl: 'profileImageUrl',
    userId: 'userId'
  };

  export type PartyImagesScalarFieldEnum = (typeof PartyImagesScalarFieldEnum)[keyof typeof PartyImagesScalarFieldEnum]


  export const OrderScalarFieldEnum: {
    order_id: 'order_id',
    partyId: 'partyId',
    partyName: 'partyName',
    empId: 'empId',
    totalAmount: 'totalAmount',
    discountAmount: 'discountAmount',
    createdAt: 'createdAt',
    creditDays: 'creditDays',
    paymentMode: 'paymentMode',
    status: 'status',
    bulkRate: 'bulkRate',
    consumerRate: 'consumerRate'
  };

  export type OrderScalarFieldEnum = (typeof OrderScalarFieldEnum)[keyof typeof OrderScalarFieldEnum]


  export const AcceptedOrdersScalarFieldEnum: {
    accept_id: 'accept_id',
    order_id: 'order_id',
    createdAt: 'createdAt'
  };

  export type AcceptedOrdersScalarFieldEnum = (typeof AcceptedOrdersScalarFieldEnum)[keyof typeof AcceptedOrdersScalarFieldEnum]


  export const RejectedOrdersScalarFieldEnum: {
    reject_id: 'reject_id',
    order_id: 'order_id',
    createdAt: 'createdAt'
  };

  export type RejectedOrdersScalarFieldEnum = (typeof RejectedOrdersScalarFieldEnum)[keyof typeof RejectedOrdersScalarFieldEnum]


  export const OrderItemScalarFieldEnum: {
    id: 'id',
    orderId: 'orderId',
    itemCode: 'itemCode',
    itemName: 'itemName',
    quantity: 'quantity',
    rate: 'rate',
    amount: 'amount',
    packType: 'packType'
  };

  export type OrderItemScalarFieldEnum = (typeof OrderItemScalarFieldEnum)[keyof typeof OrderItemScalarFieldEnum]


  export const CollectionScalarFieldEnum: {
    collection_id: 'collection_id',
    partyId: 'partyId',
    partyName: 'partyName',
    empId: 'empId',
    amount: 'amount',
    paymentMethod: 'paymentMethod',
    chequeNumber: 'chequeNumber',
    chequeDate: 'chequeDate',
    bankName: 'bankName',
    upiId: 'upiId',
    transactionId: 'transactionId',
    createdAt: 'createdAt',
    verified: 'verified',
    verifiedAt: 'verifiedAt',
    imageUrl: 'imageUrl'
  };

  export type CollectionScalarFieldEnum = (typeof CollectionScalarFieldEnum)[keyof typeof CollectionScalarFieldEnum]


  export const PartyEditRequestScalarFieldEnum: {
    request_id: 'request_id',
    partyId: 'partyId',
    partyName: 'partyName',
    empId: 'empId',
    updatedName: 'updatedName',
    updatedAddress: 'updatedAddress',
    updatedContactPerson: 'updatedContactPerson',
    updatedMobileNumber: 'updatedMobileNumber',
    updatedEmailId: 'updatedEmailId',
    shopImage1: 'shopImage1',
    shopImage2: 'shopImage2',
    status: 'status',
    adminComment: 'adminComment',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PartyEditRequestScalarFieldEnum = (typeof PartyEditRequestScalarFieldEnum)[keyof typeof PartyEditRequestScalarFieldEnum]


  export const StockScalarFieldEnum: {
    stock_id: 'stock_id',
    partyId: 'partyId',
    partyName: 'partyName',
    empId: 'empId',
    createdAt: 'createdAt'
  };

  export type StockScalarFieldEnum = (typeof StockScalarFieldEnum)[keyof typeof StockScalarFieldEnum]


  export const StockItemScalarFieldEnum: {
    id: 'id',
    stockId: 'stockId',
    itemCode: 'itemCode',
    itemName: 'itemName',
    quantity: 'quantity'
  };

  export type StockItemScalarFieldEnum = (typeof StockItemScalarFieldEnum)[keyof typeof StockItemScalarFieldEnum]


  export const AdminScalarFieldEnum: {
    admin_id: 'admin_id',
    username: 'username',
    password: 'password'
  };

  export type AdminScalarFieldEnum = (typeof AdminScalarFieldEnum)[keyof typeof AdminScalarFieldEnum]


  export const AttendanceScalarFieldEnum: {
    attendance_id: 'attendance_id',
    userId: 'userId',
    date: 'date',
    status: 'status',
    markedAt: 'markedAt',
    markedBy: 'markedBy',
    absentReason: 'absentReason',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AttendanceScalarFieldEnum = (typeof AttendanceScalarFieldEnum)[keyof typeof AttendanceScalarFieldEnum]


  export const DailyRateListScalarFieldEnum: {
    rate_id: 'rate_id',
    untcd: 'untcd',
    date: 'date',
    bulkRate: 'bulkRate',
    consumerRate: 'consumerRate',
    createdAt: 'createdAt'
  };

  export type DailyRateListScalarFieldEnum = (typeof DailyRateListScalarFieldEnum)[keyof typeof DailyRateListScalarFieldEnum]


  export const MstempScalarFieldEnum: {
    empcd: 'empcd',
    ledcd: 'ledcd',
    lednm: 'lednm'
  };

  export type MstempScalarFieldEnum = (typeof MstempScalarFieldEnum)[keyof typeof MstempScalarFieldEnum]


  export const MstpartyScalarFieldEnum: {
    ledcd: 'ledcd',
    lednm: 'lednm',
    empcd: 'empcd',
    areacd: 'areacd',
    areanm: 'areanm',
    ledadr1: 'ledadr1'
  };

  export type MstpartyScalarFieldEnum = (typeof MstpartyScalarFieldEnum)[keyof typeof MstpartyScalarFieldEnum]


  export const MstitmScalarFieldEnum: {
    rowid: 'rowid',
    itmcd: 'itmcd',
    itmnm: 'itmnm',
    pcksz: 'pcksz',
    wgtconv: 'wgtconv',
    itmsubcat: 'itmsubcat',
    itmcatgrp: 'itmcatgrp',
    lsitmnm: 'lsitmnm',
    itmrate: 'itmrate'
  };

  export type MstitmScalarFieldEnum = (typeof MstitmScalarFieldEnum)[keyof typeof MstitmScalarFieldEnum]


  export const OutstandingAmtScalarFieldEnum: {
    ledcd: 'ledcd',
    outamt: 'outamt'
  };

  export type OutstandingAmtScalarFieldEnum = (typeof OutstandingAmtScalarFieldEnum)[keyof typeof OutstandingAmtScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    user_id?: IntFilter<"User"> | number
    username?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    untcd?: StringFilter<"User"> | string
    stcd?: StringFilter<"User"> | string
    stnm?: StringFilter<"User"> | string
    untnm?: StringFilter<"User"> | string
    usrnm?: StringFilter<"User"> | string
    attendance?: AttendanceListRelationFilter
    partyImages?: PartyImagesListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    user_id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    untcd?: SortOrder
    stcd?: SortOrder
    stnm?: SortOrder
    untnm?: SortOrder
    usrnm?: SortOrder
    attendance?: AttendanceOrderByRelationAggregateInput
    partyImages?: partyImagesOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    user_id?: number
    username?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    untcd?: StringFilter<"User"> | string
    stcd?: StringFilter<"User"> | string
    stnm?: StringFilter<"User"> | string
    untnm?: StringFilter<"User"> | string
    usrnm?: StringFilter<"User"> | string
    attendance?: AttendanceListRelationFilter
    partyImages?: PartyImagesListRelationFilter
  }, "user_id" | "username">

  export type UserOrderByWithAggregationInput = {
    user_id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    untcd?: SortOrder
    stcd?: SortOrder
    stnm?: SortOrder
    untnm?: SortOrder
    usrnm?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    user_id?: IntWithAggregatesFilter<"User"> | number
    username?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    untcd?: StringWithAggregatesFilter<"User"> | string
    stcd?: StringWithAggregatesFilter<"User"> | string
    stnm?: StringWithAggregatesFilter<"User"> | string
    untnm?: StringWithAggregatesFilter<"User"> | string
    usrnm?: StringWithAggregatesFilter<"User"> | string
  }

  export type partyImagesWhereInput = {
    AND?: partyImagesWhereInput | partyImagesWhereInput[]
    OR?: partyImagesWhereInput[]
    NOT?: partyImagesWhereInput | partyImagesWhereInput[]
    image_id?: StringFilter<"partyImages"> | string
    partyId?: StringFilter<"partyImages"> | string
    createdAt?: DateTimeFilter<"partyImages"> | Date | string
    imageUrl2?: StringNullableFilter<"partyImages"> | string | null
    imageUrl3?: StringNullableFilter<"partyImages"> | string | null
    profileImageUrl?: StringFilter<"partyImages"> | string
    userId?: StringNullableFilter<"partyImages"> | string | null
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type partyImagesOrderByWithRelationInput = {
    image_id?: SortOrder
    partyId?: SortOrder
    createdAt?: SortOrder
    imageUrl2?: SortOrderInput | SortOrder
    imageUrl3?: SortOrderInput | SortOrder
    profileImageUrl?: SortOrder
    userId?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type partyImagesWhereUniqueInput = Prisma.AtLeast<{
    image_id?: string
    AND?: partyImagesWhereInput | partyImagesWhereInput[]
    OR?: partyImagesWhereInput[]
    NOT?: partyImagesWhereInput | partyImagesWhereInput[]
    partyId?: StringFilter<"partyImages"> | string
    createdAt?: DateTimeFilter<"partyImages"> | Date | string
    imageUrl2?: StringNullableFilter<"partyImages"> | string | null
    imageUrl3?: StringNullableFilter<"partyImages"> | string | null
    profileImageUrl?: StringFilter<"partyImages"> | string
    userId?: StringNullableFilter<"partyImages"> | string | null
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "image_id">

  export type partyImagesOrderByWithAggregationInput = {
    image_id?: SortOrder
    partyId?: SortOrder
    createdAt?: SortOrder
    imageUrl2?: SortOrderInput | SortOrder
    imageUrl3?: SortOrderInput | SortOrder
    profileImageUrl?: SortOrder
    userId?: SortOrderInput | SortOrder
    _count?: partyImagesCountOrderByAggregateInput
    _max?: partyImagesMaxOrderByAggregateInput
    _min?: partyImagesMinOrderByAggregateInput
  }

  export type partyImagesScalarWhereWithAggregatesInput = {
    AND?: partyImagesScalarWhereWithAggregatesInput | partyImagesScalarWhereWithAggregatesInput[]
    OR?: partyImagesScalarWhereWithAggregatesInput[]
    NOT?: partyImagesScalarWhereWithAggregatesInput | partyImagesScalarWhereWithAggregatesInput[]
    image_id?: StringWithAggregatesFilter<"partyImages"> | string
    partyId?: StringWithAggregatesFilter<"partyImages"> | string
    createdAt?: DateTimeWithAggregatesFilter<"partyImages"> | Date | string
    imageUrl2?: StringNullableWithAggregatesFilter<"partyImages"> | string | null
    imageUrl3?: StringNullableWithAggregatesFilter<"partyImages"> | string | null
    profileImageUrl?: StringWithAggregatesFilter<"partyImages"> | string
    userId?: StringNullableWithAggregatesFilter<"partyImages"> | string | null
  }

  export type OrderWhereInput = {
    AND?: OrderWhereInput | OrderWhereInput[]
    OR?: OrderWhereInput[]
    NOT?: OrderWhereInput | OrderWhereInput[]
    order_id?: StringFilter<"Order"> | string
    partyId?: StringFilter<"Order"> | string
    partyName?: StringFilter<"Order"> | string
    empId?: StringFilter<"Order"> | string
    totalAmount?: DecimalFilter<"Order"> | Decimal | DecimalJsLike | number | string
    discountAmount?: DecimalFilter<"Order"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"Order"> | Date | string
    creditDays?: IntNullableFilter<"Order"> | number | null
    paymentMode?: StringFilter<"Order"> | string
    status?: StringFilter<"Order"> | string
    bulkRate?: DecimalNullableFilter<"Order"> | Decimal | DecimalJsLike | number | string | null
    consumerRate?: DecimalNullableFilter<"Order"> | Decimal | DecimalJsLike | number | string | null
    accept?: XOR<AcceptedOrdersNullableScalarRelationFilter, AcceptedOrdersWhereInput> | null
    orderItems?: OrderItemListRelationFilter
    reject?: XOR<RejectedOrdersNullableScalarRelationFilter, RejectedOrdersWhereInput> | null
  }

  export type OrderOrderByWithRelationInput = {
    order_id?: SortOrder
    partyId?: SortOrder
    partyName?: SortOrder
    empId?: SortOrder
    totalAmount?: SortOrder
    discountAmount?: SortOrder
    createdAt?: SortOrder
    creditDays?: SortOrderInput | SortOrder
    paymentMode?: SortOrder
    status?: SortOrder
    bulkRate?: SortOrderInput | SortOrder
    consumerRate?: SortOrderInput | SortOrder
    accept?: AcceptedOrdersOrderByWithRelationInput
    orderItems?: OrderItemOrderByRelationAggregateInput
    reject?: RejectedOrdersOrderByWithRelationInput
  }

  export type OrderWhereUniqueInput = Prisma.AtLeast<{
    order_id?: string
    AND?: OrderWhereInput | OrderWhereInput[]
    OR?: OrderWhereInput[]
    NOT?: OrderWhereInput | OrderWhereInput[]
    partyId?: StringFilter<"Order"> | string
    partyName?: StringFilter<"Order"> | string
    empId?: StringFilter<"Order"> | string
    totalAmount?: DecimalFilter<"Order"> | Decimal | DecimalJsLike | number | string
    discountAmount?: DecimalFilter<"Order"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"Order"> | Date | string
    creditDays?: IntNullableFilter<"Order"> | number | null
    paymentMode?: StringFilter<"Order"> | string
    status?: StringFilter<"Order"> | string
    bulkRate?: DecimalNullableFilter<"Order"> | Decimal | DecimalJsLike | number | string | null
    consumerRate?: DecimalNullableFilter<"Order"> | Decimal | DecimalJsLike | number | string | null
    accept?: XOR<AcceptedOrdersNullableScalarRelationFilter, AcceptedOrdersWhereInput> | null
    orderItems?: OrderItemListRelationFilter
    reject?: XOR<RejectedOrdersNullableScalarRelationFilter, RejectedOrdersWhereInput> | null
  }, "order_id">

  export type OrderOrderByWithAggregationInput = {
    order_id?: SortOrder
    partyId?: SortOrder
    partyName?: SortOrder
    empId?: SortOrder
    totalAmount?: SortOrder
    discountAmount?: SortOrder
    createdAt?: SortOrder
    creditDays?: SortOrderInput | SortOrder
    paymentMode?: SortOrder
    status?: SortOrder
    bulkRate?: SortOrderInput | SortOrder
    consumerRate?: SortOrderInput | SortOrder
    _count?: OrderCountOrderByAggregateInput
    _avg?: OrderAvgOrderByAggregateInput
    _max?: OrderMaxOrderByAggregateInput
    _min?: OrderMinOrderByAggregateInput
    _sum?: OrderSumOrderByAggregateInput
  }

  export type OrderScalarWhereWithAggregatesInput = {
    AND?: OrderScalarWhereWithAggregatesInput | OrderScalarWhereWithAggregatesInput[]
    OR?: OrderScalarWhereWithAggregatesInput[]
    NOT?: OrderScalarWhereWithAggregatesInput | OrderScalarWhereWithAggregatesInput[]
    order_id?: StringWithAggregatesFilter<"Order"> | string
    partyId?: StringWithAggregatesFilter<"Order"> | string
    partyName?: StringWithAggregatesFilter<"Order"> | string
    empId?: StringWithAggregatesFilter<"Order"> | string
    totalAmount?: DecimalWithAggregatesFilter<"Order"> | Decimal | DecimalJsLike | number | string
    discountAmount?: DecimalWithAggregatesFilter<"Order"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeWithAggregatesFilter<"Order"> | Date | string
    creditDays?: IntNullableWithAggregatesFilter<"Order"> | number | null
    paymentMode?: StringWithAggregatesFilter<"Order"> | string
    status?: StringWithAggregatesFilter<"Order"> | string
    bulkRate?: DecimalNullableWithAggregatesFilter<"Order"> | Decimal | DecimalJsLike | number | string | null
    consumerRate?: DecimalNullableWithAggregatesFilter<"Order"> | Decimal | DecimalJsLike | number | string | null
  }

  export type AcceptedOrdersWhereInput = {
    AND?: AcceptedOrdersWhereInput | AcceptedOrdersWhereInput[]
    OR?: AcceptedOrdersWhereInput[]
    NOT?: AcceptedOrdersWhereInput | AcceptedOrdersWhereInput[]
    accept_id?: StringFilter<"AcceptedOrders"> | string
    order_id?: StringFilter<"AcceptedOrders"> | string
    createdAt?: DateTimeFilter<"AcceptedOrders"> | Date | string
    Order?: XOR<OrderScalarRelationFilter, OrderWhereInput>
  }

  export type AcceptedOrdersOrderByWithRelationInput = {
    accept_id?: SortOrder
    order_id?: SortOrder
    createdAt?: SortOrder
    Order?: OrderOrderByWithRelationInput
  }

  export type AcceptedOrdersWhereUniqueInput = Prisma.AtLeast<{
    accept_id?: string
    order_id?: string
    AND?: AcceptedOrdersWhereInput | AcceptedOrdersWhereInput[]
    OR?: AcceptedOrdersWhereInput[]
    NOT?: AcceptedOrdersWhereInput | AcceptedOrdersWhereInput[]
    createdAt?: DateTimeFilter<"AcceptedOrders"> | Date | string
    Order?: XOR<OrderScalarRelationFilter, OrderWhereInput>
  }, "accept_id" | "order_id">

  export type AcceptedOrdersOrderByWithAggregationInput = {
    accept_id?: SortOrder
    order_id?: SortOrder
    createdAt?: SortOrder
    _count?: AcceptedOrdersCountOrderByAggregateInput
    _max?: AcceptedOrdersMaxOrderByAggregateInput
    _min?: AcceptedOrdersMinOrderByAggregateInput
  }

  export type AcceptedOrdersScalarWhereWithAggregatesInput = {
    AND?: AcceptedOrdersScalarWhereWithAggregatesInput | AcceptedOrdersScalarWhereWithAggregatesInput[]
    OR?: AcceptedOrdersScalarWhereWithAggregatesInput[]
    NOT?: AcceptedOrdersScalarWhereWithAggregatesInput | AcceptedOrdersScalarWhereWithAggregatesInput[]
    accept_id?: StringWithAggregatesFilter<"AcceptedOrders"> | string
    order_id?: StringWithAggregatesFilter<"AcceptedOrders"> | string
    createdAt?: DateTimeWithAggregatesFilter<"AcceptedOrders"> | Date | string
  }

  export type RejectedOrdersWhereInput = {
    AND?: RejectedOrdersWhereInput | RejectedOrdersWhereInput[]
    OR?: RejectedOrdersWhereInput[]
    NOT?: RejectedOrdersWhereInput | RejectedOrdersWhereInput[]
    reject_id?: StringFilter<"RejectedOrders"> | string
    order_id?: StringFilter<"RejectedOrders"> | string
    createdAt?: DateTimeFilter<"RejectedOrders"> | Date | string
    Order?: XOR<OrderScalarRelationFilter, OrderWhereInput>
  }

  export type RejectedOrdersOrderByWithRelationInput = {
    reject_id?: SortOrder
    order_id?: SortOrder
    createdAt?: SortOrder
    Order?: OrderOrderByWithRelationInput
  }

  export type RejectedOrdersWhereUniqueInput = Prisma.AtLeast<{
    reject_id?: string
    order_id?: string
    AND?: RejectedOrdersWhereInput | RejectedOrdersWhereInput[]
    OR?: RejectedOrdersWhereInput[]
    NOT?: RejectedOrdersWhereInput | RejectedOrdersWhereInput[]
    createdAt?: DateTimeFilter<"RejectedOrders"> | Date | string
    Order?: XOR<OrderScalarRelationFilter, OrderWhereInput>
  }, "reject_id" | "order_id">

  export type RejectedOrdersOrderByWithAggregationInput = {
    reject_id?: SortOrder
    order_id?: SortOrder
    createdAt?: SortOrder
    _count?: RejectedOrdersCountOrderByAggregateInput
    _max?: RejectedOrdersMaxOrderByAggregateInput
    _min?: RejectedOrdersMinOrderByAggregateInput
  }

  export type RejectedOrdersScalarWhereWithAggregatesInput = {
    AND?: RejectedOrdersScalarWhereWithAggregatesInput | RejectedOrdersScalarWhereWithAggregatesInput[]
    OR?: RejectedOrdersScalarWhereWithAggregatesInput[]
    NOT?: RejectedOrdersScalarWhereWithAggregatesInput | RejectedOrdersScalarWhereWithAggregatesInput[]
    reject_id?: StringWithAggregatesFilter<"RejectedOrders"> | string
    order_id?: StringWithAggregatesFilter<"RejectedOrders"> | string
    createdAt?: DateTimeWithAggregatesFilter<"RejectedOrders"> | Date | string
  }

  export type OrderItemWhereInput = {
    AND?: OrderItemWhereInput | OrderItemWhereInput[]
    OR?: OrderItemWhereInput[]
    NOT?: OrderItemWhereInput | OrderItemWhereInput[]
    id?: StringFilter<"OrderItem"> | string
    orderId?: StringFilter<"OrderItem"> | string
    itemCode?: StringFilter<"OrderItem"> | string
    itemName?: StringFilter<"OrderItem"> | string
    quantity?: IntFilter<"OrderItem"> | number
    rate?: DecimalFilter<"OrderItem"> | Decimal | DecimalJsLike | number | string
    amount?: DecimalFilter<"OrderItem"> | Decimal | DecimalJsLike | number | string
    packType?: StringFilter<"OrderItem"> | string
    order?: XOR<OrderScalarRelationFilter, OrderWhereInput>
  }

  export type OrderItemOrderByWithRelationInput = {
    id?: SortOrder
    orderId?: SortOrder
    itemCode?: SortOrder
    itemName?: SortOrder
    quantity?: SortOrder
    rate?: SortOrder
    amount?: SortOrder
    packType?: SortOrder
    order?: OrderOrderByWithRelationInput
  }

  export type OrderItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: OrderItemWhereInput | OrderItemWhereInput[]
    OR?: OrderItemWhereInput[]
    NOT?: OrderItemWhereInput | OrderItemWhereInput[]
    orderId?: StringFilter<"OrderItem"> | string
    itemCode?: StringFilter<"OrderItem"> | string
    itemName?: StringFilter<"OrderItem"> | string
    quantity?: IntFilter<"OrderItem"> | number
    rate?: DecimalFilter<"OrderItem"> | Decimal | DecimalJsLike | number | string
    amount?: DecimalFilter<"OrderItem"> | Decimal | DecimalJsLike | number | string
    packType?: StringFilter<"OrderItem"> | string
    order?: XOR<OrderScalarRelationFilter, OrderWhereInput>
  }, "id">

  export type OrderItemOrderByWithAggregationInput = {
    id?: SortOrder
    orderId?: SortOrder
    itemCode?: SortOrder
    itemName?: SortOrder
    quantity?: SortOrder
    rate?: SortOrder
    amount?: SortOrder
    packType?: SortOrder
    _count?: OrderItemCountOrderByAggregateInput
    _avg?: OrderItemAvgOrderByAggregateInput
    _max?: OrderItemMaxOrderByAggregateInput
    _min?: OrderItemMinOrderByAggregateInput
    _sum?: OrderItemSumOrderByAggregateInput
  }

  export type OrderItemScalarWhereWithAggregatesInput = {
    AND?: OrderItemScalarWhereWithAggregatesInput | OrderItemScalarWhereWithAggregatesInput[]
    OR?: OrderItemScalarWhereWithAggregatesInput[]
    NOT?: OrderItemScalarWhereWithAggregatesInput | OrderItemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"OrderItem"> | string
    orderId?: StringWithAggregatesFilter<"OrderItem"> | string
    itemCode?: StringWithAggregatesFilter<"OrderItem"> | string
    itemName?: StringWithAggregatesFilter<"OrderItem"> | string
    quantity?: IntWithAggregatesFilter<"OrderItem"> | number
    rate?: DecimalWithAggregatesFilter<"OrderItem"> | Decimal | DecimalJsLike | number | string
    amount?: DecimalWithAggregatesFilter<"OrderItem"> | Decimal | DecimalJsLike | number | string
    packType?: StringWithAggregatesFilter<"OrderItem"> | string
  }

  export type CollectionWhereInput = {
    AND?: CollectionWhereInput | CollectionWhereInput[]
    OR?: CollectionWhereInput[]
    NOT?: CollectionWhereInput | CollectionWhereInput[]
    collection_id?: StringFilter<"Collection"> | string
    partyId?: StringFilter<"Collection"> | string
    partyName?: StringFilter<"Collection"> | string
    empId?: StringFilter<"Collection"> | string
    amount?: DecimalFilter<"Collection"> | Decimal | DecimalJsLike | number | string
    paymentMethod?: StringFilter<"Collection"> | string
    chequeNumber?: StringNullableFilter<"Collection"> | string | null
    chequeDate?: StringNullableFilter<"Collection"> | string | null
    bankName?: StringNullableFilter<"Collection"> | string | null
    upiId?: StringNullableFilter<"Collection"> | string | null
    transactionId?: StringNullableFilter<"Collection"> | string | null
    createdAt?: DateTimeFilter<"Collection"> | Date | string
    verified?: BoolFilter<"Collection"> | boolean
    verifiedAt?: DateTimeNullableFilter<"Collection"> | Date | string | null
    imageUrl?: StringNullableFilter<"Collection"> | string | null
  }

  export type CollectionOrderByWithRelationInput = {
    collection_id?: SortOrder
    partyId?: SortOrder
    partyName?: SortOrder
    empId?: SortOrder
    amount?: SortOrder
    paymentMethod?: SortOrder
    chequeNumber?: SortOrderInput | SortOrder
    chequeDate?: SortOrderInput | SortOrder
    bankName?: SortOrderInput | SortOrder
    upiId?: SortOrderInput | SortOrder
    transactionId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    verified?: SortOrder
    verifiedAt?: SortOrderInput | SortOrder
    imageUrl?: SortOrderInput | SortOrder
  }

  export type CollectionWhereUniqueInput = Prisma.AtLeast<{
    collection_id?: string
    AND?: CollectionWhereInput | CollectionWhereInput[]
    OR?: CollectionWhereInput[]
    NOT?: CollectionWhereInput | CollectionWhereInput[]
    partyId?: StringFilter<"Collection"> | string
    partyName?: StringFilter<"Collection"> | string
    empId?: StringFilter<"Collection"> | string
    amount?: DecimalFilter<"Collection"> | Decimal | DecimalJsLike | number | string
    paymentMethod?: StringFilter<"Collection"> | string
    chequeNumber?: StringNullableFilter<"Collection"> | string | null
    chequeDate?: StringNullableFilter<"Collection"> | string | null
    bankName?: StringNullableFilter<"Collection"> | string | null
    upiId?: StringNullableFilter<"Collection"> | string | null
    transactionId?: StringNullableFilter<"Collection"> | string | null
    createdAt?: DateTimeFilter<"Collection"> | Date | string
    verified?: BoolFilter<"Collection"> | boolean
    verifiedAt?: DateTimeNullableFilter<"Collection"> | Date | string | null
    imageUrl?: StringNullableFilter<"Collection"> | string | null
  }, "collection_id">

  export type CollectionOrderByWithAggregationInput = {
    collection_id?: SortOrder
    partyId?: SortOrder
    partyName?: SortOrder
    empId?: SortOrder
    amount?: SortOrder
    paymentMethod?: SortOrder
    chequeNumber?: SortOrderInput | SortOrder
    chequeDate?: SortOrderInput | SortOrder
    bankName?: SortOrderInput | SortOrder
    upiId?: SortOrderInput | SortOrder
    transactionId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    verified?: SortOrder
    verifiedAt?: SortOrderInput | SortOrder
    imageUrl?: SortOrderInput | SortOrder
    _count?: CollectionCountOrderByAggregateInput
    _avg?: CollectionAvgOrderByAggregateInput
    _max?: CollectionMaxOrderByAggregateInput
    _min?: CollectionMinOrderByAggregateInput
    _sum?: CollectionSumOrderByAggregateInput
  }

  export type CollectionScalarWhereWithAggregatesInput = {
    AND?: CollectionScalarWhereWithAggregatesInput | CollectionScalarWhereWithAggregatesInput[]
    OR?: CollectionScalarWhereWithAggregatesInput[]
    NOT?: CollectionScalarWhereWithAggregatesInput | CollectionScalarWhereWithAggregatesInput[]
    collection_id?: StringWithAggregatesFilter<"Collection"> | string
    partyId?: StringWithAggregatesFilter<"Collection"> | string
    partyName?: StringWithAggregatesFilter<"Collection"> | string
    empId?: StringWithAggregatesFilter<"Collection"> | string
    amount?: DecimalWithAggregatesFilter<"Collection"> | Decimal | DecimalJsLike | number | string
    paymentMethod?: StringWithAggregatesFilter<"Collection"> | string
    chequeNumber?: StringNullableWithAggregatesFilter<"Collection"> | string | null
    chequeDate?: StringNullableWithAggregatesFilter<"Collection"> | string | null
    bankName?: StringNullableWithAggregatesFilter<"Collection"> | string | null
    upiId?: StringNullableWithAggregatesFilter<"Collection"> | string | null
    transactionId?: StringNullableWithAggregatesFilter<"Collection"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Collection"> | Date | string
    verified?: BoolWithAggregatesFilter<"Collection"> | boolean
    verifiedAt?: DateTimeNullableWithAggregatesFilter<"Collection"> | Date | string | null
    imageUrl?: StringNullableWithAggregatesFilter<"Collection"> | string | null
  }

  export type PartyEditRequestWhereInput = {
    AND?: PartyEditRequestWhereInput | PartyEditRequestWhereInput[]
    OR?: PartyEditRequestWhereInput[]
    NOT?: PartyEditRequestWhereInput | PartyEditRequestWhereInput[]
    request_id?: StringFilter<"PartyEditRequest"> | string
    partyId?: StringFilter<"PartyEditRequest"> | string
    partyName?: StringFilter<"PartyEditRequest"> | string
    empId?: StringFilter<"PartyEditRequest"> | string
    updatedName?: StringNullableFilter<"PartyEditRequest"> | string | null
    updatedAddress?: StringNullableFilter<"PartyEditRequest"> | string | null
    updatedContactPerson?: StringNullableFilter<"PartyEditRequest"> | string | null
    updatedMobileNumber?: StringNullableFilter<"PartyEditRequest"> | string | null
    updatedEmailId?: StringNullableFilter<"PartyEditRequest"> | string | null
    shopImage1?: StringNullableFilter<"PartyEditRequest"> | string | null
    shopImage2?: StringNullableFilter<"PartyEditRequest"> | string | null
    status?: StringFilter<"PartyEditRequest"> | string
    adminComment?: StringNullableFilter<"PartyEditRequest"> | string | null
    createdAt?: DateTimeFilter<"PartyEditRequest"> | Date | string
    updatedAt?: DateTimeFilter<"PartyEditRequest"> | Date | string
  }

  export type PartyEditRequestOrderByWithRelationInput = {
    request_id?: SortOrder
    partyId?: SortOrder
    partyName?: SortOrder
    empId?: SortOrder
    updatedName?: SortOrderInput | SortOrder
    updatedAddress?: SortOrderInput | SortOrder
    updatedContactPerson?: SortOrderInput | SortOrder
    updatedMobileNumber?: SortOrderInput | SortOrder
    updatedEmailId?: SortOrderInput | SortOrder
    shopImage1?: SortOrderInput | SortOrder
    shopImage2?: SortOrderInput | SortOrder
    status?: SortOrder
    adminComment?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PartyEditRequestWhereUniqueInput = Prisma.AtLeast<{
    request_id?: string
    AND?: PartyEditRequestWhereInput | PartyEditRequestWhereInput[]
    OR?: PartyEditRequestWhereInput[]
    NOT?: PartyEditRequestWhereInput | PartyEditRequestWhereInput[]
    partyId?: StringFilter<"PartyEditRequest"> | string
    partyName?: StringFilter<"PartyEditRequest"> | string
    empId?: StringFilter<"PartyEditRequest"> | string
    updatedName?: StringNullableFilter<"PartyEditRequest"> | string | null
    updatedAddress?: StringNullableFilter<"PartyEditRequest"> | string | null
    updatedContactPerson?: StringNullableFilter<"PartyEditRequest"> | string | null
    updatedMobileNumber?: StringNullableFilter<"PartyEditRequest"> | string | null
    updatedEmailId?: StringNullableFilter<"PartyEditRequest"> | string | null
    shopImage1?: StringNullableFilter<"PartyEditRequest"> | string | null
    shopImage2?: StringNullableFilter<"PartyEditRequest"> | string | null
    status?: StringFilter<"PartyEditRequest"> | string
    adminComment?: StringNullableFilter<"PartyEditRequest"> | string | null
    createdAt?: DateTimeFilter<"PartyEditRequest"> | Date | string
    updatedAt?: DateTimeFilter<"PartyEditRequest"> | Date | string
  }, "request_id">

  export type PartyEditRequestOrderByWithAggregationInput = {
    request_id?: SortOrder
    partyId?: SortOrder
    partyName?: SortOrder
    empId?: SortOrder
    updatedName?: SortOrderInput | SortOrder
    updatedAddress?: SortOrderInput | SortOrder
    updatedContactPerson?: SortOrderInput | SortOrder
    updatedMobileNumber?: SortOrderInput | SortOrder
    updatedEmailId?: SortOrderInput | SortOrder
    shopImage1?: SortOrderInput | SortOrder
    shopImage2?: SortOrderInput | SortOrder
    status?: SortOrder
    adminComment?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PartyEditRequestCountOrderByAggregateInput
    _max?: PartyEditRequestMaxOrderByAggregateInput
    _min?: PartyEditRequestMinOrderByAggregateInput
  }

  export type PartyEditRequestScalarWhereWithAggregatesInput = {
    AND?: PartyEditRequestScalarWhereWithAggregatesInput | PartyEditRequestScalarWhereWithAggregatesInput[]
    OR?: PartyEditRequestScalarWhereWithAggregatesInput[]
    NOT?: PartyEditRequestScalarWhereWithAggregatesInput | PartyEditRequestScalarWhereWithAggregatesInput[]
    request_id?: StringWithAggregatesFilter<"PartyEditRequest"> | string
    partyId?: StringWithAggregatesFilter<"PartyEditRequest"> | string
    partyName?: StringWithAggregatesFilter<"PartyEditRequest"> | string
    empId?: StringWithAggregatesFilter<"PartyEditRequest"> | string
    updatedName?: StringNullableWithAggregatesFilter<"PartyEditRequest"> | string | null
    updatedAddress?: StringNullableWithAggregatesFilter<"PartyEditRequest"> | string | null
    updatedContactPerson?: StringNullableWithAggregatesFilter<"PartyEditRequest"> | string | null
    updatedMobileNumber?: StringNullableWithAggregatesFilter<"PartyEditRequest"> | string | null
    updatedEmailId?: StringNullableWithAggregatesFilter<"PartyEditRequest"> | string | null
    shopImage1?: StringNullableWithAggregatesFilter<"PartyEditRequest"> | string | null
    shopImage2?: StringNullableWithAggregatesFilter<"PartyEditRequest"> | string | null
    status?: StringWithAggregatesFilter<"PartyEditRequest"> | string
    adminComment?: StringNullableWithAggregatesFilter<"PartyEditRequest"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"PartyEditRequest"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PartyEditRequest"> | Date | string
  }

  export type StockWhereInput = {
    AND?: StockWhereInput | StockWhereInput[]
    OR?: StockWhereInput[]
    NOT?: StockWhereInput | StockWhereInput[]
    stock_id?: StringFilter<"Stock"> | string
    partyId?: StringFilter<"Stock"> | string
    partyName?: StringFilter<"Stock"> | string
    empId?: StringFilter<"Stock"> | string
    createdAt?: DateTimeFilter<"Stock"> | Date | string
    stockItems?: StockItemListRelationFilter
  }

  export type StockOrderByWithRelationInput = {
    stock_id?: SortOrder
    partyId?: SortOrder
    partyName?: SortOrder
    empId?: SortOrder
    createdAt?: SortOrder
    stockItems?: StockItemOrderByRelationAggregateInput
  }

  export type StockWhereUniqueInput = Prisma.AtLeast<{
    stock_id?: string
    AND?: StockWhereInput | StockWhereInput[]
    OR?: StockWhereInput[]
    NOT?: StockWhereInput | StockWhereInput[]
    partyId?: StringFilter<"Stock"> | string
    partyName?: StringFilter<"Stock"> | string
    empId?: StringFilter<"Stock"> | string
    createdAt?: DateTimeFilter<"Stock"> | Date | string
    stockItems?: StockItemListRelationFilter
  }, "stock_id">

  export type StockOrderByWithAggregationInput = {
    stock_id?: SortOrder
    partyId?: SortOrder
    partyName?: SortOrder
    empId?: SortOrder
    createdAt?: SortOrder
    _count?: StockCountOrderByAggregateInput
    _max?: StockMaxOrderByAggregateInput
    _min?: StockMinOrderByAggregateInput
  }

  export type StockScalarWhereWithAggregatesInput = {
    AND?: StockScalarWhereWithAggregatesInput | StockScalarWhereWithAggregatesInput[]
    OR?: StockScalarWhereWithAggregatesInput[]
    NOT?: StockScalarWhereWithAggregatesInput | StockScalarWhereWithAggregatesInput[]
    stock_id?: StringWithAggregatesFilter<"Stock"> | string
    partyId?: StringWithAggregatesFilter<"Stock"> | string
    partyName?: StringWithAggregatesFilter<"Stock"> | string
    empId?: StringWithAggregatesFilter<"Stock"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Stock"> | Date | string
  }

  export type StockItemWhereInput = {
    AND?: StockItemWhereInput | StockItemWhereInput[]
    OR?: StockItemWhereInput[]
    NOT?: StockItemWhereInput | StockItemWhereInput[]
    id?: StringFilter<"StockItem"> | string
    stockId?: StringFilter<"StockItem"> | string
    itemCode?: StringFilter<"StockItem"> | string
    itemName?: StringFilter<"StockItem"> | string
    quantity?: IntFilter<"StockItem"> | number
    stock?: XOR<StockScalarRelationFilter, StockWhereInput>
  }

  export type StockItemOrderByWithRelationInput = {
    id?: SortOrder
    stockId?: SortOrder
    itemCode?: SortOrder
    itemName?: SortOrder
    quantity?: SortOrder
    stock?: StockOrderByWithRelationInput
  }

  export type StockItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: StockItemWhereInput | StockItemWhereInput[]
    OR?: StockItemWhereInput[]
    NOT?: StockItemWhereInput | StockItemWhereInput[]
    stockId?: StringFilter<"StockItem"> | string
    itemCode?: StringFilter<"StockItem"> | string
    itemName?: StringFilter<"StockItem"> | string
    quantity?: IntFilter<"StockItem"> | number
    stock?: XOR<StockScalarRelationFilter, StockWhereInput>
  }, "id">

  export type StockItemOrderByWithAggregationInput = {
    id?: SortOrder
    stockId?: SortOrder
    itemCode?: SortOrder
    itemName?: SortOrder
    quantity?: SortOrder
    _count?: StockItemCountOrderByAggregateInput
    _avg?: StockItemAvgOrderByAggregateInput
    _max?: StockItemMaxOrderByAggregateInput
    _min?: StockItemMinOrderByAggregateInput
    _sum?: StockItemSumOrderByAggregateInput
  }

  export type StockItemScalarWhereWithAggregatesInput = {
    AND?: StockItemScalarWhereWithAggregatesInput | StockItemScalarWhereWithAggregatesInput[]
    OR?: StockItemScalarWhereWithAggregatesInput[]
    NOT?: StockItemScalarWhereWithAggregatesInput | StockItemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"StockItem"> | string
    stockId?: StringWithAggregatesFilter<"StockItem"> | string
    itemCode?: StringWithAggregatesFilter<"StockItem"> | string
    itemName?: StringWithAggregatesFilter<"StockItem"> | string
    quantity?: IntWithAggregatesFilter<"StockItem"> | number
  }

  export type adminWhereInput = {
    AND?: adminWhereInput | adminWhereInput[]
    OR?: adminWhereInput[]
    NOT?: adminWhereInput | adminWhereInput[]
    admin_id?: StringFilter<"admin"> | string
    username?: StringFilter<"admin"> | string
    password?: StringFilter<"admin"> | string
  }

  export type adminOrderByWithRelationInput = {
    admin_id?: SortOrder
    username?: SortOrder
    password?: SortOrder
  }

  export type adminWhereUniqueInput = Prisma.AtLeast<{
    admin_id?: string
    username?: string
    AND?: adminWhereInput | adminWhereInput[]
    OR?: adminWhereInput[]
    NOT?: adminWhereInput | adminWhereInput[]
    password?: StringFilter<"admin"> | string
  }, "admin_id" | "username">

  export type adminOrderByWithAggregationInput = {
    admin_id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    _count?: adminCountOrderByAggregateInput
    _max?: adminMaxOrderByAggregateInput
    _min?: adminMinOrderByAggregateInput
  }

  export type adminScalarWhereWithAggregatesInput = {
    AND?: adminScalarWhereWithAggregatesInput | adminScalarWhereWithAggregatesInput[]
    OR?: adminScalarWhereWithAggregatesInput[]
    NOT?: adminScalarWhereWithAggregatesInput | adminScalarWhereWithAggregatesInput[]
    admin_id?: StringWithAggregatesFilter<"admin"> | string
    username?: StringWithAggregatesFilter<"admin"> | string
    password?: StringWithAggregatesFilter<"admin"> | string
  }

  export type AttendanceWhereInput = {
    AND?: AttendanceWhereInput | AttendanceWhereInput[]
    OR?: AttendanceWhereInput[]
    NOT?: AttendanceWhereInput | AttendanceWhereInput[]
    attendance_id?: StringFilter<"Attendance"> | string
    userId?: StringFilter<"Attendance"> | string
    date?: DateTimeFilter<"Attendance"> | Date | string
    status?: StringFilter<"Attendance"> | string
    markedAt?: DateTimeNullableFilter<"Attendance"> | Date | string | null
    markedBy?: StringNullableFilter<"Attendance"> | string | null
    absentReason?: StringNullableFilter<"Attendance"> | string | null
    createdAt?: DateTimeFilter<"Attendance"> | Date | string
    updatedAt?: DateTimeFilter<"Attendance"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AttendanceOrderByWithRelationInput = {
    attendance_id?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    status?: SortOrder
    markedAt?: SortOrderInput | SortOrder
    markedBy?: SortOrderInput | SortOrder
    absentReason?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AttendanceWhereUniqueInput = Prisma.AtLeast<{
    attendance_id?: string
    userId_date?: AttendanceUserIdDateCompoundUniqueInput
    AND?: AttendanceWhereInput | AttendanceWhereInput[]
    OR?: AttendanceWhereInput[]
    NOT?: AttendanceWhereInput | AttendanceWhereInput[]
    userId?: StringFilter<"Attendance"> | string
    date?: DateTimeFilter<"Attendance"> | Date | string
    status?: StringFilter<"Attendance"> | string
    markedAt?: DateTimeNullableFilter<"Attendance"> | Date | string | null
    markedBy?: StringNullableFilter<"Attendance"> | string | null
    absentReason?: StringNullableFilter<"Attendance"> | string | null
    createdAt?: DateTimeFilter<"Attendance"> | Date | string
    updatedAt?: DateTimeFilter<"Attendance"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "attendance_id" | "userId_date">

  export type AttendanceOrderByWithAggregationInput = {
    attendance_id?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    status?: SortOrder
    markedAt?: SortOrderInput | SortOrder
    markedBy?: SortOrderInput | SortOrder
    absentReason?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AttendanceCountOrderByAggregateInput
    _max?: AttendanceMaxOrderByAggregateInput
    _min?: AttendanceMinOrderByAggregateInput
  }

  export type AttendanceScalarWhereWithAggregatesInput = {
    AND?: AttendanceScalarWhereWithAggregatesInput | AttendanceScalarWhereWithAggregatesInput[]
    OR?: AttendanceScalarWhereWithAggregatesInput[]
    NOT?: AttendanceScalarWhereWithAggregatesInput | AttendanceScalarWhereWithAggregatesInput[]
    attendance_id?: StringWithAggregatesFilter<"Attendance"> | string
    userId?: StringWithAggregatesFilter<"Attendance"> | string
    date?: DateTimeWithAggregatesFilter<"Attendance"> | Date | string
    status?: StringWithAggregatesFilter<"Attendance"> | string
    markedAt?: DateTimeNullableWithAggregatesFilter<"Attendance"> | Date | string | null
    markedBy?: StringNullableWithAggregatesFilter<"Attendance"> | string | null
    absentReason?: StringNullableWithAggregatesFilter<"Attendance"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Attendance"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Attendance"> | Date | string
  }

  export type DailyRateListWhereInput = {
    AND?: DailyRateListWhereInput | DailyRateListWhereInput[]
    OR?: DailyRateListWhereInput[]
    NOT?: DailyRateListWhereInput | DailyRateListWhereInput[]
    rate_id?: StringFilter<"DailyRateList"> | string
    untcd?: StringFilter<"DailyRateList"> | string
    date?: DateTimeFilter<"DailyRateList"> | Date | string
    bulkRate?: IntFilter<"DailyRateList"> | number
    consumerRate?: IntFilter<"DailyRateList"> | number
    createdAt?: DateTimeFilter<"DailyRateList"> | Date | string
  }

  export type DailyRateListOrderByWithRelationInput = {
    rate_id?: SortOrder
    untcd?: SortOrder
    date?: SortOrder
    bulkRate?: SortOrder
    consumerRate?: SortOrder
    createdAt?: SortOrder
  }

  export type DailyRateListWhereUniqueInput = Prisma.AtLeast<{
    untcd_date?: DailyRateListUntcdDateCompoundUniqueInput
    AND?: DailyRateListWhereInput | DailyRateListWhereInput[]
    OR?: DailyRateListWhereInput[]
    NOT?: DailyRateListWhereInput | DailyRateListWhereInput[]
    rate_id?: StringFilter<"DailyRateList"> | string
    untcd?: StringFilter<"DailyRateList"> | string
    date?: DateTimeFilter<"DailyRateList"> | Date | string
    bulkRate?: IntFilter<"DailyRateList"> | number
    consumerRate?: IntFilter<"DailyRateList"> | number
    createdAt?: DateTimeFilter<"DailyRateList"> | Date | string
  }, "untcd_date">

  export type DailyRateListOrderByWithAggregationInput = {
    rate_id?: SortOrder
    untcd?: SortOrder
    date?: SortOrder
    bulkRate?: SortOrder
    consumerRate?: SortOrder
    createdAt?: SortOrder
    _count?: DailyRateListCountOrderByAggregateInput
    _avg?: DailyRateListAvgOrderByAggregateInput
    _max?: DailyRateListMaxOrderByAggregateInput
    _min?: DailyRateListMinOrderByAggregateInput
    _sum?: DailyRateListSumOrderByAggregateInput
  }

  export type DailyRateListScalarWhereWithAggregatesInput = {
    AND?: DailyRateListScalarWhereWithAggregatesInput | DailyRateListScalarWhereWithAggregatesInput[]
    OR?: DailyRateListScalarWhereWithAggregatesInput[]
    NOT?: DailyRateListScalarWhereWithAggregatesInput | DailyRateListScalarWhereWithAggregatesInput[]
    rate_id?: StringWithAggregatesFilter<"DailyRateList"> | string
    untcd?: StringWithAggregatesFilter<"DailyRateList"> | string
    date?: DateTimeWithAggregatesFilter<"DailyRateList"> | Date | string
    bulkRate?: IntWithAggregatesFilter<"DailyRateList"> | number
    consumerRate?: IntWithAggregatesFilter<"DailyRateList"> | number
    createdAt?: DateTimeWithAggregatesFilter<"DailyRateList"> | Date | string
  }

  export type mstempWhereInput = {
    AND?: mstempWhereInput | mstempWhereInput[]
    OR?: mstempWhereInput[]
    NOT?: mstempWhereInput | mstempWhereInput[]
    empcd?: StringFilter<"mstemp"> | string
    ledcd?: StringFilter<"mstemp"> | string
    lednm?: StringNullableFilter<"mstemp"> | string | null
  }

  export type mstempOrderByWithRelationInput = {
    empcd?: SortOrder
    ledcd?: SortOrder
    lednm?: SortOrderInput | SortOrder
  }

  export type mstempWhereUniqueInput = Prisma.AtLeast<{
    empcd?: string
    AND?: mstempWhereInput | mstempWhereInput[]
    OR?: mstempWhereInput[]
    NOT?: mstempWhereInput | mstempWhereInput[]
    ledcd?: StringFilter<"mstemp"> | string
    lednm?: StringNullableFilter<"mstemp"> | string | null
  }, "empcd">

  export type mstempOrderByWithAggregationInput = {
    empcd?: SortOrder
    ledcd?: SortOrder
    lednm?: SortOrderInput | SortOrder
    _count?: mstempCountOrderByAggregateInput
    _max?: mstempMaxOrderByAggregateInput
    _min?: mstempMinOrderByAggregateInput
  }

  export type mstempScalarWhereWithAggregatesInput = {
    AND?: mstempScalarWhereWithAggregatesInput | mstempScalarWhereWithAggregatesInput[]
    OR?: mstempScalarWhereWithAggregatesInput[]
    NOT?: mstempScalarWhereWithAggregatesInput | mstempScalarWhereWithAggregatesInput[]
    empcd?: StringWithAggregatesFilter<"mstemp"> | string
    ledcd?: StringWithAggregatesFilter<"mstemp"> | string
    lednm?: StringNullableWithAggregatesFilter<"mstemp"> | string | null
  }

  export type mstpartyWhereInput = {
    AND?: mstpartyWhereInput | mstpartyWhereInput[]
    OR?: mstpartyWhereInput[]
    NOT?: mstpartyWhereInput | mstpartyWhereInput[]
    ledcd?: StringFilter<"mstparty"> | string
    lednm?: StringNullableFilter<"mstparty"> | string | null
    empcd?: StringNullableFilter<"mstparty"> | string | null
    areacd?: StringFilter<"mstparty"> | string
    areanm?: StringNullableFilter<"mstparty"> | string | null
    ledadr1?: StringNullableFilter<"mstparty"> | string | null
  }

  export type mstpartyOrderByWithRelationInput = {
    ledcd?: SortOrder
    lednm?: SortOrderInput | SortOrder
    empcd?: SortOrderInput | SortOrder
    areacd?: SortOrder
    areanm?: SortOrderInput | SortOrder
    ledadr1?: SortOrderInput | SortOrder
  }

  export type mstpartyWhereUniqueInput = Prisma.AtLeast<{
    ledcd?: string
    AND?: mstpartyWhereInput | mstpartyWhereInput[]
    OR?: mstpartyWhereInput[]
    NOT?: mstpartyWhereInput | mstpartyWhereInput[]
    lednm?: StringNullableFilter<"mstparty"> | string | null
    empcd?: StringNullableFilter<"mstparty"> | string | null
    areacd?: StringFilter<"mstparty"> | string
    areanm?: StringNullableFilter<"mstparty"> | string | null
    ledadr1?: StringNullableFilter<"mstparty"> | string | null
  }, "ledcd">

  export type mstpartyOrderByWithAggregationInput = {
    ledcd?: SortOrder
    lednm?: SortOrderInput | SortOrder
    empcd?: SortOrderInput | SortOrder
    areacd?: SortOrder
    areanm?: SortOrderInput | SortOrder
    ledadr1?: SortOrderInput | SortOrder
    _count?: mstpartyCountOrderByAggregateInput
    _max?: mstpartyMaxOrderByAggregateInput
    _min?: mstpartyMinOrderByAggregateInput
  }

  export type mstpartyScalarWhereWithAggregatesInput = {
    AND?: mstpartyScalarWhereWithAggregatesInput | mstpartyScalarWhereWithAggregatesInput[]
    OR?: mstpartyScalarWhereWithAggregatesInput[]
    NOT?: mstpartyScalarWhereWithAggregatesInput | mstpartyScalarWhereWithAggregatesInput[]
    ledcd?: StringWithAggregatesFilter<"mstparty"> | string
    lednm?: StringNullableWithAggregatesFilter<"mstparty"> | string | null
    empcd?: StringNullableWithAggregatesFilter<"mstparty"> | string | null
    areacd?: StringWithAggregatesFilter<"mstparty"> | string
    areanm?: StringNullableWithAggregatesFilter<"mstparty"> | string | null
    ledadr1?: StringNullableWithAggregatesFilter<"mstparty"> | string | null
  }

  export type mstitmWhereInput = {
    AND?: mstitmWhereInput | mstitmWhereInput[]
    OR?: mstitmWhereInput[]
    NOT?: mstitmWhereInput | mstitmWhereInput[]
    rowid?: BigIntFilter<"mstitm"> | bigint | number
    itmcd?: StringFilter<"mstitm"> | string
    itmnm?: StringFilter<"mstitm"> | string
    pcksz?: DecimalNullableFilter<"mstitm"> | Decimal | DecimalJsLike | number | string | null
    wgtconv?: DecimalNullableFilter<"mstitm"> | Decimal | DecimalJsLike | number | string | null
    itmsubcat?: StringNullableFilter<"mstitm"> | string | null
    itmcatgrp?: StringNullableFilter<"mstitm"> | string | null
    lsitmnm?: StringNullableFilter<"mstitm"> | string | null
    itmrate?: IntFilter<"mstitm"> | number
  }

  export type mstitmOrderByWithRelationInput = {
    rowid?: SortOrder
    itmcd?: SortOrder
    itmnm?: SortOrder
    pcksz?: SortOrderInput | SortOrder
    wgtconv?: SortOrderInput | SortOrder
    itmsubcat?: SortOrderInput | SortOrder
    itmcatgrp?: SortOrderInput | SortOrder
    lsitmnm?: SortOrderInput | SortOrder
    itmrate?: SortOrder
  }

  export type mstitmWhereUniqueInput = Prisma.AtLeast<{
    itmcd?: string
    AND?: mstitmWhereInput | mstitmWhereInput[]
    OR?: mstitmWhereInput[]
    NOT?: mstitmWhereInput | mstitmWhereInput[]
    rowid?: BigIntFilter<"mstitm"> | bigint | number
    itmnm?: StringFilter<"mstitm"> | string
    pcksz?: DecimalNullableFilter<"mstitm"> | Decimal | DecimalJsLike | number | string | null
    wgtconv?: DecimalNullableFilter<"mstitm"> | Decimal | DecimalJsLike | number | string | null
    itmsubcat?: StringNullableFilter<"mstitm"> | string | null
    itmcatgrp?: StringNullableFilter<"mstitm"> | string | null
    lsitmnm?: StringNullableFilter<"mstitm"> | string | null
    itmrate?: IntFilter<"mstitm"> | number
  }, "itmcd">

  export type mstitmOrderByWithAggregationInput = {
    rowid?: SortOrder
    itmcd?: SortOrder
    itmnm?: SortOrder
    pcksz?: SortOrderInput | SortOrder
    wgtconv?: SortOrderInput | SortOrder
    itmsubcat?: SortOrderInput | SortOrder
    itmcatgrp?: SortOrderInput | SortOrder
    lsitmnm?: SortOrderInput | SortOrder
    itmrate?: SortOrder
    _count?: mstitmCountOrderByAggregateInput
    _avg?: mstitmAvgOrderByAggregateInput
    _max?: mstitmMaxOrderByAggregateInput
    _min?: mstitmMinOrderByAggregateInput
    _sum?: mstitmSumOrderByAggregateInput
  }

  export type mstitmScalarWhereWithAggregatesInput = {
    AND?: mstitmScalarWhereWithAggregatesInput | mstitmScalarWhereWithAggregatesInput[]
    OR?: mstitmScalarWhereWithAggregatesInput[]
    NOT?: mstitmScalarWhereWithAggregatesInput | mstitmScalarWhereWithAggregatesInput[]
    rowid?: BigIntWithAggregatesFilter<"mstitm"> | bigint | number
    itmcd?: StringWithAggregatesFilter<"mstitm"> | string
    itmnm?: StringWithAggregatesFilter<"mstitm"> | string
    pcksz?: DecimalNullableWithAggregatesFilter<"mstitm"> | Decimal | DecimalJsLike | number | string | null
    wgtconv?: DecimalNullableWithAggregatesFilter<"mstitm"> | Decimal | DecimalJsLike | number | string | null
    itmsubcat?: StringNullableWithAggregatesFilter<"mstitm"> | string | null
    itmcatgrp?: StringNullableWithAggregatesFilter<"mstitm"> | string | null
    lsitmnm?: StringNullableWithAggregatesFilter<"mstitm"> | string | null
    itmrate?: IntWithAggregatesFilter<"mstitm"> | number
  }

  export type OutstandingAmtWhereInput = {
    AND?: OutstandingAmtWhereInput | OutstandingAmtWhereInput[]
    OR?: OutstandingAmtWhereInput[]
    NOT?: OutstandingAmtWhereInput | OutstandingAmtWhereInput[]
    ledcd?: StringFilter<"OutstandingAmt"> | string
    outamt?: DecimalNullableFilter<"OutstandingAmt"> | Decimal | DecimalJsLike | number | string | null
  }

  export type OutstandingAmtOrderByWithRelationInput = {
    ledcd?: SortOrder
    outamt?: SortOrderInput | SortOrder
  }

  export type OutstandingAmtWhereUniqueInput = Prisma.AtLeast<{
    ledcd?: string
    AND?: OutstandingAmtWhereInput | OutstandingAmtWhereInput[]
    OR?: OutstandingAmtWhereInput[]
    NOT?: OutstandingAmtWhereInput | OutstandingAmtWhereInput[]
    outamt?: DecimalNullableFilter<"OutstandingAmt"> | Decimal | DecimalJsLike | number | string | null
  }, "ledcd" | "ledcd">

  export type OutstandingAmtOrderByWithAggregationInput = {
    ledcd?: SortOrder
    outamt?: SortOrderInput | SortOrder
    _count?: OutstandingAmtCountOrderByAggregateInput
    _avg?: OutstandingAmtAvgOrderByAggregateInput
    _max?: OutstandingAmtMaxOrderByAggregateInput
    _min?: OutstandingAmtMinOrderByAggregateInput
    _sum?: OutstandingAmtSumOrderByAggregateInput
  }

  export type OutstandingAmtScalarWhereWithAggregatesInput = {
    AND?: OutstandingAmtScalarWhereWithAggregatesInput | OutstandingAmtScalarWhereWithAggregatesInput[]
    OR?: OutstandingAmtScalarWhereWithAggregatesInput[]
    NOT?: OutstandingAmtScalarWhereWithAggregatesInput | OutstandingAmtScalarWhereWithAggregatesInput[]
    ledcd?: StringWithAggregatesFilter<"OutstandingAmt"> | string
    outamt?: DecimalNullableWithAggregatesFilter<"OutstandingAmt"> | Decimal | DecimalJsLike | number | string | null
  }

  export type UserCreateInput = {
    username: string
    password: string
    untcd?: string
    stcd?: string
    stnm?: string
    untnm?: string
    usrnm?: string
    attendance?: AttendanceCreateNestedManyWithoutUserInput
    partyImages?: partyImagesCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    user_id?: number
    username: string
    password: string
    untcd?: string
    stcd?: string
    stnm?: string
    untnm?: string
    usrnm?: string
    attendance?: AttendanceUncheckedCreateNestedManyWithoutUserInput
    partyImages?: partyImagesUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    untcd?: StringFieldUpdateOperationsInput | string
    stcd?: StringFieldUpdateOperationsInput | string
    stnm?: StringFieldUpdateOperationsInput | string
    untnm?: StringFieldUpdateOperationsInput | string
    usrnm?: StringFieldUpdateOperationsInput | string
    attendance?: AttendanceUpdateManyWithoutUserNestedInput
    partyImages?: partyImagesUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    untcd?: StringFieldUpdateOperationsInput | string
    stcd?: StringFieldUpdateOperationsInput | string
    stnm?: StringFieldUpdateOperationsInput | string
    untnm?: StringFieldUpdateOperationsInput | string
    usrnm?: StringFieldUpdateOperationsInput | string
    attendance?: AttendanceUncheckedUpdateManyWithoutUserNestedInput
    partyImages?: partyImagesUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    username: string
    password: string
    untcd?: string
    stcd?: string
    stnm?: string
    untnm?: string
    usrnm?: string
  }

  export type UserUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    untcd?: StringFieldUpdateOperationsInput | string
    stcd?: StringFieldUpdateOperationsInput | string
    stnm?: StringFieldUpdateOperationsInput | string
    untnm?: StringFieldUpdateOperationsInput | string
    usrnm?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    untcd?: StringFieldUpdateOperationsInput | string
    stcd?: StringFieldUpdateOperationsInput | string
    stnm?: StringFieldUpdateOperationsInput | string
    untnm?: StringFieldUpdateOperationsInput | string
    usrnm?: StringFieldUpdateOperationsInput | string
  }

  export type partyImagesCreateInput = {
    image_id?: string
    partyId: string
    createdAt?: Date | string
    imageUrl2?: string | null
    imageUrl3?: string | null
    profileImageUrl: string
    user?: UserCreateNestedOneWithoutPartyImagesInput
  }

  export type partyImagesUncheckedCreateInput = {
    image_id?: string
    partyId: string
    createdAt?: Date | string
    imageUrl2?: string | null
    imageUrl3?: string | null
    profileImageUrl: string
    userId?: string | null
  }

  export type partyImagesUpdateInput = {
    image_id?: StringFieldUpdateOperationsInput | string
    partyId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    imageUrl2?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl3?: NullableStringFieldUpdateOperationsInput | string | null
    profileImageUrl?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneWithoutPartyImagesNestedInput
  }

  export type partyImagesUncheckedUpdateInput = {
    image_id?: StringFieldUpdateOperationsInput | string
    partyId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    imageUrl2?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl3?: NullableStringFieldUpdateOperationsInput | string | null
    profileImageUrl?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type partyImagesCreateManyInput = {
    image_id?: string
    partyId: string
    createdAt?: Date | string
    imageUrl2?: string | null
    imageUrl3?: string | null
    profileImageUrl: string
    userId?: string | null
  }

  export type partyImagesUpdateManyMutationInput = {
    image_id?: StringFieldUpdateOperationsInput | string
    partyId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    imageUrl2?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl3?: NullableStringFieldUpdateOperationsInput | string | null
    profileImageUrl?: StringFieldUpdateOperationsInput | string
  }

  export type partyImagesUncheckedUpdateManyInput = {
    image_id?: StringFieldUpdateOperationsInput | string
    partyId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    imageUrl2?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl3?: NullableStringFieldUpdateOperationsInput | string | null
    profileImageUrl?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OrderCreateInput = {
    order_id?: string
    partyId: string
    partyName: string
    empId: string
    totalAmount: Decimal | DecimalJsLike | number | string
    discountAmount: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    creditDays?: number | null
    paymentMode?: string
    status?: string
    bulkRate?: Decimal | DecimalJsLike | number | string | null
    consumerRate?: Decimal | DecimalJsLike | number | string | null
    accept?: AcceptedOrdersCreateNestedOneWithoutOrderInput
    orderItems?: OrderItemCreateNestedManyWithoutOrderInput
    reject?: RejectedOrdersCreateNestedOneWithoutOrderInput
  }

  export type OrderUncheckedCreateInput = {
    order_id?: string
    partyId: string
    partyName: string
    empId: string
    totalAmount: Decimal | DecimalJsLike | number | string
    discountAmount: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    creditDays?: number | null
    paymentMode?: string
    status?: string
    bulkRate?: Decimal | DecimalJsLike | number | string | null
    consumerRate?: Decimal | DecimalJsLike | number | string | null
    accept?: AcceptedOrdersUncheckedCreateNestedOneWithoutOrderInput
    orderItems?: OrderItemUncheckedCreateNestedManyWithoutOrderInput
    reject?: RejectedOrdersUncheckedCreateNestedOneWithoutOrderInput
  }

  export type OrderUpdateInput = {
    order_id?: StringFieldUpdateOperationsInput | string
    partyId?: StringFieldUpdateOperationsInput | string
    partyName?: StringFieldUpdateOperationsInput | string
    empId?: StringFieldUpdateOperationsInput | string
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discountAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creditDays?: NullableIntFieldUpdateOperationsInput | number | null
    paymentMode?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    bulkRate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    consumerRate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    accept?: AcceptedOrdersUpdateOneWithoutOrderNestedInput
    orderItems?: OrderItemUpdateManyWithoutOrderNestedInput
    reject?: RejectedOrdersUpdateOneWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateInput = {
    order_id?: StringFieldUpdateOperationsInput | string
    partyId?: StringFieldUpdateOperationsInput | string
    partyName?: StringFieldUpdateOperationsInput | string
    empId?: StringFieldUpdateOperationsInput | string
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discountAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creditDays?: NullableIntFieldUpdateOperationsInput | number | null
    paymentMode?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    bulkRate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    consumerRate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    accept?: AcceptedOrdersUncheckedUpdateOneWithoutOrderNestedInput
    orderItems?: OrderItemUncheckedUpdateManyWithoutOrderNestedInput
    reject?: RejectedOrdersUncheckedUpdateOneWithoutOrderNestedInput
  }

  export type OrderCreateManyInput = {
    order_id?: string
    partyId: string
    partyName: string
    empId: string
    totalAmount: Decimal | DecimalJsLike | number | string
    discountAmount: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    creditDays?: number | null
    paymentMode?: string
    status?: string
    bulkRate?: Decimal | DecimalJsLike | number | string | null
    consumerRate?: Decimal | DecimalJsLike | number | string | null
  }

  export type OrderUpdateManyMutationInput = {
    order_id?: StringFieldUpdateOperationsInput | string
    partyId?: StringFieldUpdateOperationsInput | string
    partyName?: StringFieldUpdateOperationsInput | string
    empId?: StringFieldUpdateOperationsInput | string
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discountAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creditDays?: NullableIntFieldUpdateOperationsInput | number | null
    paymentMode?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    bulkRate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    consumerRate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type OrderUncheckedUpdateManyInput = {
    order_id?: StringFieldUpdateOperationsInput | string
    partyId?: StringFieldUpdateOperationsInput | string
    partyName?: StringFieldUpdateOperationsInput | string
    empId?: StringFieldUpdateOperationsInput | string
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discountAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creditDays?: NullableIntFieldUpdateOperationsInput | number | null
    paymentMode?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    bulkRate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    consumerRate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type AcceptedOrdersCreateInput = {
    accept_id?: string
    createdAt?: Date | string
    Order: OrderCreateNestedOneWithoutAcceptInput
  }

  export type AcceptedOrdersUncheckedCreateInput = {
    accept_id?: string
    order_id: string
    createdAt?: Date | string
  }

  export type AcceptedOrdersUpdateInput = {
    accept_id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Order?: OrderUpdateOneRequiredWithoutAcceptNestedInput
  }

  export type AcceptedOrdersUncheckedUpdateInput = {
    accept_id?: StringFieldUpdateOperationsInput | string
    order_id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AcceptedOrdersCreateManyInput = {
    accept_id?: string
    order_id: string
    createdAt?: Date | string
  }

  export type AcceptedOrdersUpdateManyMutationInput = {
    accept_id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AcceptedOrdersUncheckedUpdateManyInput = {
    accept_id?: StringFieldUpdateOperationsInput | string
    order_id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RejectedOrdersCreateInput = {
    reject_id?: string
    createdAt?: Date | string
    Order: OrderCreateNestedOneWithoutRejectInput
  }

  export type RejectedOrdersUncheckedCreateInput = {
    reject_id?: string
    order_id: string
    createdAt?: Date | string
  }

  export type RejectedOrdersUpdateInput = {
    reject_id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Order?: OrderUpdateOneRequiredWithoutRejectNestedInput
  }

  export type RejectedOrdersUncheckedUpdateInput = {
    reject_id?: StringFieldUpdateOperationsInput | string
    order_id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RejectedOrdersCreateManyInput = {
    reject_id?: string
    order_id: string
    createdAt?: Date | string
  }

  export type RejectedOrdersUpdateManyMutationInput = {
    reject_id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RejectedOrdersUncheckedUpdateManyInput = {
    reject_id?: StringFieldUpdateOperationsInput | string
    order_id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderItemCreateInput = {
    id?: string
    itemCode: string
    itemName: string
    quantity: number
    rate: Decimal | DecimalJsLike | number | string
    amount: Decimal | DecimalJsLike | number | string
    packType?: string
    order: OrderCreateNestedOneWithoutOrderItemsInput
  }

  export type OrderItemUncheckedCreateInput = {
    id?: string
    orderId: string
    itemCode: string
    itemName: string
    quantity: number
    rate: Decimal | DecimalJsLike | number | string
    amount: Decimal | DecimalJsLike | number | string
    packType?: string
  }

  export type OrderItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    itemCode?: StringFieldUpdateOperationsInput | string
    itemName?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    rate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    packType?: StringFieldUpdateOperationsInput | string
    order?: OrderUpdateOneRequiredWithoutOrderItemsNestedInput
  }

  export type OrderItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    itemCode?: StringFieldUpdateOperationsInput | string
    itemName?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    rate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    packType?: StringFieldUpdateOperationsInput | string
  }

  export type OrderItemCreateManyInput = {
    id?: string
    orderId: string
    itemCode: string
    itemName: string
    quantity: number
    rate: Decimal | DecimalJsLike | number | string
    amount: Decimal | DecimalJsLike | number | string
    packType?: string
  }

  export type OrderItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    itemCode?: StringFieldUpdateOperationsInput | string
    itemName?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    rate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    packType?: StringFieldUpdateOperationsInput | string
  }

  export type OrderItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    itemCode?: StringFieldUpdateOperationsInput | string
    itemName?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    rate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    packType?: StringFieldUpdateOperationsInput | string
  }

  export type CollectionCreateInput = {
    collection_id?: string
    partyId: string
    partyName: string
    empId: string
    amount: Decimal | DecimalJsLike | number | string
    paymentMethod: string
    chequeNumber?: string | null
    chequeDate?: string | null
    bankName?: string | null
    upiId?: string | null
    transactionId?: string | null
    createdAt?: Date | string
    verified?: boolean
    verifiedAt?: Date | string | null
    imageUrl?: string | null
  }

  export type CollectionUncheckedCreateInput = {
    collection_id?: string
    partyId: string
    partyName: string
    empId: string
    amount: Decimal | DecimalJsLike | number | string
    paymentMethod: string
    chequeNumber?: string | null
    chequeDate?: string | null
    bankName?: string | null
    upiId?: string | null
    transactionId?: string | null
    createdAt?: Date | string
    verified?: boolean
    verifiedAt?: Date | string | null
    imageUrl?: string | null
  }

  export type CollectionUpdateInput = {
    collection_id?: StringFieldUpdateOperationsInput | string
    partyId?: StringFieldUpdateOperationsInput | string
    partyName?: StringFieldUpdateOperationsInput | string
    empId?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paymentMethod?: StringFieldUpdateOperationsInput | string
    chequeNumber?: NullableStringFieldUpdateOperationsInput | string | null
    chequeDate?: NullableStringFieldUpdateOperationsInput | string | null
    bankName?: NullableStringFieldUpdateOperationsInput | string | null
    upiId?: NullableStringFieldUpdateOperationsInput | string | null
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    verified?: BoolFieldUpdateOperationsInput | boolean
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CollectionUncheckedUpdateInput = {
    collection_id?: StringFieldUpdateOperationsInput | string
    partyId?: StringFieldUpdateOperationsInput | string
    partyName?: StringFieldUpdateOperationsInput | string
    empId?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paymentMethod?: StringFieldUpdateOperationsInput | string
    chequeNumber?: NullableStringFieldUpdateOperationsInput | string | null
    chequeDate?: NullableStringFieldUpdateOperationsInput | string | null
    bankName?: NullableStringFieldUpdateOperationsInput | string | null
    upiId?: NullableStringFieldUpdateOperationsInput | string | null
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    verified?: BoolFieldUpdateOperationsInput | boolean
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CollectionCreateManyInput = {
    collection_id?: string
    partyId: string
    partyName: string
    empId: string
    amount: Decimal | DecimalJsLike | number | string
    paymentMethod: string
    chequeNumber?: string | null
    chequeDate?: string | null
    bankName?: string | null
    upiId?: string | null
    transactionId?: string | null
    createdAt?: Date | string
    verified?: boolean
    verifiedAt?: Date | string | null
    imageUrl?: string | null
  }

  export type CollectionUpdateManyMutationInput = {
    collection_id?: StringFieldUpdateOperationsInput | string
    partyId?: StringFieldUpdateOperationsInput | string
    partyName?: StringFieldUpdateOperationsInput | string
    empId?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paymentMethod?: StringFieldUpdateOperationsInput | string
    chequeNumber?: NullableStringFieldUpdateOperationsInput | string | null
    chequeDate?: NullableStringFieldUpdateOperationsInput | string | null
    bankName?: NullableStringFieldUpdateOperationsInput | string | null
    upiId?: NullableStringFieldUpdateOperationsInput | string | null
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    verified?: BoolFieldUpdateOperationsInput | boolean
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CollectionUncheckedUpdateManyInput = {
    collection_id?: StringFieldUpdateOperationsInput | string
    partyId?: StringFieldUpdateOperationsInput | string
    partyName?: StringFieldUpdateOperationsInput | string
    empId?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paymentMethod?: StringFieldUpdateOperationsInput | string
    chequeNumber?: NullableStringFieldUpdateOperationsInput | string | null
    chequeDate?: NullableStringFieldUpdateOperationsInput | string | null
    bankName?: NullableStringFieldUpdateOperationsInput | string | null
    upiId?: NullableStringFieldUpdateOperationsInput | string | null
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    verified?: BoolFieldUpdateOperationsInput | boolean
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PartyEditRequestCreateInput = {
    request_id?: string
    partyId: string
    partyName: string
    empId: string
    updatedName?: string | null
    updatedAddress?: string | null
    updatedContactPerson?: string | null
    updatedMobileNumber?: string | null
    updatedEmailId?: string | null
    shopImage1?: string | null
    shopImage2?: string | null
    status?: string
    adminComment?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PartyEditRequestUncheckedCreateInput = {
    request_id?: string
    partyId: string
    partyName: string
    empId: string
    updatedName?: string | null
    updatedAddress?: string | null
    updatedContactPerson?: string | null
    updatedMobileNumber?: string | null
    updatedEmailId?: string | null
    shopImage1?: string | null
    shopImage2?: string | null
    status?: string
    adminComment?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PartyEditRequestUpdateInput = {
    request_id?: StringFieldUpdateOperationsInput | string
    partyId?: StringFieldUpdateOperationsInput | string
    partyName?: StringFieldUpdateOperationsInput | string
    empId?: StringFieldUpdateOperationsInput | string
    updatedName?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAddress?: NullableStringFieldUpdateOperationsInput | string | null
    updatedContactPerson?: NullableStringFieldUpdateOperationsInput | string | null
    updatedMobileNumber?: NullableStringFieldUpdateOperationsInput | string | null
    updatedEmailId?: NullableStringFieldUpdateOperationsInput | string | null
    shopImage1?: NullableStringFieldUpdateOperationsInput | string | null
    shopImage2?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    adminComment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PartyEditRequestUncheckedUpdateInput = {
    request_id?: StringFieldUpdateOperationsInput | string
    partyId?: StringFieldUpdateOperationsInput | string
    partyName?: StringFieldUpdateOperationsInput | string
    empId?: StringFieldUpdateOperationsInput | string
    updatedName?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAddress?: NullableStringFieldUpdateOperationsInput | string | null
    updatedContactPerson?: NullableStringFieldUpdateOperationsInput | string | null
    updatedMobileNumber?: NullableStringFieldUpdateOperationsInput | string | null
    updatedEmailId?: NullableStringFieldUpdateOperationsInput | string | null
    shopImage1?: NullableStringFieldUpdateOperationsInput | string | null
    shopImage2?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    adminComment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PartyEditRequestCreateManyInput = {
    request_id?: string
    partyId: string
    partyName: string
    empId: string
    updatedName?: string | null
    updatedAddress?: string | null
    updatedContactPerson?: string | null
    updatedMobileNumber?: string | null
    updatedEmailId?: string | null
    shopImage1?: string | null
    shopImage2?: string | null
    status?: string
    adminComment?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PartyEditRequestUpdateManyMutationInput = {
    request_id?: StringFieldUpdateOperationsInput | string
    partyId?: StringFieldUpdateOperationsInput | string
    partyName?: StringFieldUpdateOperationsInput | string
    empId?: StringFieldUpdateOperationsInput | string
    updatedName?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAddress?: NullableStringFieldUpdateOperationsInput | string | null
    updatedContactPerson?: NullableStringFieldUpdateOperationsInput | string | null
    updatedMobileNumber?: NullableStringFieldUpdateOperationsInput | string | null
    updatedEmailId?: NullableStringFieldUpdateOperationsInput | string | null
    shopImage1?: NullableStringFieldUpdateOperationsInput | string | null
    shopImage2?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    adminComment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PartyEditRequestUncheckedUpdateManyInput = {
    request_id?: StringFieldUpdateOperationsInput | string
    partyId?: StringFieldUpdateOperationsInput | string
    partyName?: StringFieldUpdateOperationsInput | string
    empId?: StringFieldUpdateOperationsInput | string
    updatedName?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAddress?: NullableStringFieldUpdateOperationsInput | string | null
    updatedContactPerson?: NullableStringFieldUpdateOperationsInput | string | null
    updatedMobileNumber?: NullableStringFieldUpdateOperationsInput | string | null
    updatedEmailId?: NullableStringFieldUpdateOperationsInput | string | null
    shopImage1?: NullableStringFieldUpdateOperationsInput | string | null
    shopImage2?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    adminComment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StockCreateInput = {
    stock_id?: string
    partyId: string
    partyName: string
    empId: string
    createdAt?: Date | string
    stockItems?: StockItemCreateNestedManyWithoutStockInput
  }

  export type StockUncheckedCreateInput = {
    stock_id?: string
    partyId: string
    partyName: string
    empId: string
    createdAt?: Date | string
    stockItems?: StockItemUncheckedCreateNestedManyWithoutStockInput
  }

  export type StockUpdateInput = {
    stock_id?: StringFieldUpdateOperationsInput | string
    partyId?: StringFieldUpdateOperationsInput | string
    partyName?: StringFieldUpdateOperationsInput | string
    empId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    stockItems?: StockItemUpdateManyWithoutStockNestedInput
  }

  export type StockUncheckedUpdateInput = {
    stock_id?: StringFieldUpdateOperationsInput | string
    partyId?: StringFieldUpdateOperationsInput | string
    partyName?: StringFieldUpdateOperationsInput | string
    empId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    stockItems?: StockItemUncheckedUpdateManyWithoutStockNestedInput
  }

  export type StockCreateManyInput = {
    stock_id?: string
    partyId: string
    partyName: string
    empId: string
    createdAt?: Date | string
  }

  export type StockUpdateManyMutationInput = {
    stock_id?: StringFieldUpdateOperationsInput | string
    partyId?: StringFieldUpdateOperationsInput | string
    partyName?: StringFieldUpdateOperationsInput | string
    empId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StockUncheckedUpdateManyInput = {
    stock_id?: StringFieldUpdateOperationsInput | string
    partyId?: StringFieldUpdateOperationsInput | string
    partyName?: StringFieldUpdateOperationsInput | string
    empId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StockItemCreateInput = {
    id?: string
    itemCode: string
    itemName: string
    quantity: number
    stock: StockCreateNestedOneWithoutStockItemsInput
  }

  export type StockItemUncheckedCreateInput = {
    id?: string
    stockId: string
    itemCode: string
    itemName: string
    quantity: number
  }

  export type StockItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    itemCode?: StringFieldUpdateOperationsInput | string
    itemName?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    stock?: StockUpdateOneRequiredWithoutStockItemsNestedInput
  }

  export type StockItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    stockId?: StringFieldUpdateOperationsInput | string
    itemCode?: StringFieldUpdateOperationsInput | string
    itemName?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type StockItemCreateManyInput = {
    id?: string
    stockId: string
    itemCode: string
    itemName: string
    quantity: number
  }

  export type StockItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    itemCode?: StringFieldUpdateOperationsInput | string
    itemName?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type StockItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    stockId?: StringFieldUpdateOperationsInput | string
    itemCode?: StringFieldUpdateOperationsInput | string
    itemName?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type adminCreateInput = {
    admin_id?: string
    username: string
    password: string
  }

  export type adminUncheckedCreateInput = {
    admin_id?: string
    username: string
    password: string
  }

  export type adminUpdateInput = {
    admin_id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type adminUncheckedUpdateInput = {
    admin_id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type adminCreateManyInput = {
    admin_id?: string
    username: string
    password: string
  }

  export type adminUpdateManyMutationInput = {
    admin_id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type adminUncheckedUpdateManyInput = {
    admin_id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type AttendanceCreateInput = {
    attendance_id?: string
    date: Date | string
    status?: string
    markedAt?: Date | string | null
    markedBy?: string | null
    absentReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutAttendanceInput
  }

  export type AttendanceUncheckedCreateInput = {
    attendance_id?: string
    userId: string
    date: Date | string
    status?: string
    markedAt?: Date | string | null
    markedBy?: string | null
    absentReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AttendanceUpdateInput = {
    attendance_id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    markedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    markedBy?: NullableStringFieldUpdateOperationsInput | string | null
    absentReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAttendanceNestedInput
  }

  export type AttendanceUncheckedUpdateInput = {
    attendance_id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    markedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    markedBy?: NullableStringFieldUpdateOperationsInput | string | null
    absentReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttendanceCreateManyInput = {
    attendance_id?: string
    userId: string
    date: Date | string
    status?: string
    markedAt?: Date | string | null
    markedBy?: string | null
    absentReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AttendanceUpdateManyMutationInput = {
    attendance_id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    markedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    markedBy?: NullableStringFieldUpdateOperationsInput | string | null
    absentReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttendanceUncheckedUpdateManyInput = {
    attendance_id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    markedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    markedBy?: NullableStringFieldUpdateOperationsInput | string | null
    absentReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DailyRateListCreateInput = {
    rate_id?: string
    untcd?: string
    date: Date | string
    bulkRate?: number
    consumerRate?: number
    createdAt?: Date | string
  }

  export type DailyRateListUncheckedCreateInput = {
    rate_id?: string
    untcd?: string
    date: Date | string
    bulkRate?: number
    consumerRate?: number
    createdAt?: Date | string
  }

  export type DailyRateListUpdateInput = {
    rate_id?: StringFieldUpdateOperationsInput | string
    untcd?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    bulkRate?: IntFieldUpdateOperationsInput | number
    consumerRate?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DailyRateListUncheckedUpdateInput = {
    rate_id?: StringFieldUpdateOperationsInput | string
    untcd?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    bulkRate?: IntFieldUpdateOperationsInput | number
    consumerRate?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DailyRateListCreateManyInput = {
    rate_id?: string
    untcd?: string
    date: Date | string
    bulkRate?: number
    consumerRate?: number
    createdAt?: Date | string
  }

  export type DailyRateListUpdateManyMutationInput = {
    rate_id?: StringFieldUpdateOperationsInput | string
    untcd?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    bulkRate?: IntFieldUpdateOperationsInput | number
    consumerRate?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DailyRateListUncheckedUpdateManyInput = {
    rate_id?: StringFieldUpdateOperationsInput | string
    untcd?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    bulkRate?: IntFieldUpdateOperationsInput | number
    consumerRate?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type mstempCreateInput = {
    empcd: string
    ledcd: string
    lednm?: string | null
  }

  export type mstempUncheckedCreateInput = {
    empcd: string
    ledcd: string
    lednm?: string | null
  }

  export type mstempUpdateInput = {
    empcd?: StringFieldUpdateOperationsInput | string
    ledcd?: StringFieldUpdateOperationsInput | string
    lednm?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type mstempUncheckedUpdateInput = {
    empcd?: StringFieldUpdateOperationsInput | string
    ledcd?: StringFieldUpdateOperationsInput | string
    lednm?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type mstempCreateManyInput = {
    empcd: string
    ledcd: string
    lednm?: string | null
  }

  export type mstempUpdateManyMutationInput = {
    empcd?: StringFieldUpdateOperationsInput | string
    ledcd?: StringFieldUpdateOperationsInput | string
    lednm?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type mstempUncheckedUpdateManyInput = {
    empcd?: StringFieldUpdateOperationsInput | string
    ledcd?: StringFieldUpdateOperationsInput | string
    lednm?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type mstpartyCreateInput = {
    ledcd: string
    lednm?: string | null
    empcd?: string | null
    areacd: string
    areanm?: string | null
    ledadr1?: string | null
  }

  export type mstpartyUncheckedCreateInput = {
    ledcd: string
    lednm?: string | null
    empcd?: string | null
    areacd: string
    areanm?: string | null
    ledadr1?: string | null
  }

  export type mstpartyUpdateInput = {
    ledcd?: StringFieldUpdateOperationsInput | string
    lednm?: NullableStringFieldUpdateOperationsInput | string | null
    empcd?: NullableStringFieldUpdateOperationsInput | string | null
    areacd?: StringFieldUpdateOperationsInput | string
    areanm?: NullableStringFieldUpdateOperationsInput | string | null
    ledadr1?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type mstpartyUncheckedUpdateInput = {
    ledcd?: StringFieldUpdateOperationsInput | string
    lednm?: NullableStringFieldUpdateOperationsInput | string | null
    empcd?: NullableStringFieldUpdateOperationsInput | string | null
    areacd?: StringFieldUpdateOperationsInput | string
    areanm?: NullableStringFieldUpdateOperationsInput | string | null
    ledadr1?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type mstpartyCreateManyInput = {
    ledcd: string
    lednm?: string | null
    empcd?: string | null
    areacd: string
    areanm?: string | null
    ledadr1?: string | null
  }

  export type mstpartyUpdateManyMutationInput = {
    ledcd?: StringFieldUpdateOperationsInput | string
    lednm?: NullableStringFieldUpdateOperationsInput | string | null
    empcd?: NullableStringFieldUpdateOperationsInput | string | null
    areacd?: StringFieldUpdateOperationsInput | string
    areanm?: NullableStringFieldUpdateOperationsInput | string | null
    ledadr1?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type mstpartyUncheckedUpdateManyInput = {
    ledcd?: StringFieldUpdateOperationsInput | string
    lednm?: NullableStringFieldUpdateOperationsInput | string | null
    empcd?: NullableStringFieldUpdateOperationsInput | string | null
    areacd?: StringFieldUpdateOperationsInput | string
    areanm?: NullableStringFieldUpdateOperationsInput | string | null
    ledadr1?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type mstitmCreateInput = {
    rowid: bigint | number
    itmcd: string
    itmnm: string
    pcksz?: Decimal | DecimalJsLike | number | string | null
    wgtconv?: Decimal | DecimalJsLike | number | string | null
    itmsubcat?: string | null
    itmcatgrp?: string | null
    lsitmnm?: string | null
    itmrate: number
  }

  export type mstitmUncheckedCreateInput = {
    rowid: bigint | number
    itmcd: string
    itmnm: string
    pcksz?: Decimal | DecimalJsLike | number | string | null
    wgtconv?: Decimal | DecimalJsLike | number | string | null
    itmsubcat?: string | null
    itmcatgrp?: string | null
    lsitmnm?: string | null
    itmrate: number
  }

  export type mstitmUpdateInput = {
    rowid?: BigIntFieldUpdateOperationsInput | bigint | number
    itmcd?: StringFieldUpdateOperationsInput | string
    itmnm?: StringFieldUpdateOperationsInput | string
    pcksz?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    wgtconv?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    itmsubcat?: NullableStringFieldUpdateOperationsInput | string | null
    itmcatgrp?: NullableStringFieldUpdateOperationsInput | string | null
    lsitmnm?: NullableStringFieldUpdateOperationsInput | string | null
    itmrate?: IntFieldUpdateOperationsInput | number
  }

  export type mstitmUncheckedUpdateInput = {
    rowid?: BigIntFieldUpdateOperationsInput | bigint | number
    itmcd?: StringFieldUpdateOperationsInput | string
    itmnm?: StringFieldUpdateOperationsInput | string
    pcksz?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    wgtconv?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    itmsubcat?: NullableStringFieldUpdateOperationsInput | string | null
    itmcatgrp?: NullableStringFieldUpdateOperationsInput | string | null
    lsitmnm?: NullableStringFieldUpdateOperationsInput | string | null
    itmrate?: IntFieldUpdateOperationsInput | number
  }

  export type mstitmCreateManyInput = {
    rowid: bigint | number
    itmcd: string
    itmnm: string
    pcksz?: Decimal | DecimalJsLike | number | string | null
    wgtconv?: Decimal | DecimalJsLike | number | string | null
    itmsubcat?: string | null
    itmcatgrp?: string | null
    lsitmnm?: string | null
    itmrate: number
  }

  export type mstitmUpdateManyMutationInput = {
    rowid?: BigIntFieldUpdateOperationsInput | bigint | number
    itmcd?: StringFieldUpdateOperationsInput | string
    itmnm?: StringFieldUpdateOperationsInput | string
    pcksz?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    wgtconv?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    itmsubcat?: NullableStringFieldUpdateOperationsInput | string | null
    itmcatgrp?: NullableStringFieldUpdateOperationsInput | string | null
    lsitmnm?: NullableStringFieldUpdateOperationsInput | string | null
    itmrate?: IntFieldUpdateOperationsInput | number
  }

  export type mstitmUncheckedUpdateManyInput = {
    rowid?: BigIntFieldUpdateOperationsInput | bigint | number
    itmcd?: StringFieldUpdateOperationsInput | string
    itmnm?: StringFieldUpdateOperationsInput | string
    pcksz?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    wgtconv?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    itmsubcat?: NullableStringFieldUpdateOperationsInput | string | null
    itmcatgrp?: NullableStringFieldUpdateOperationsInput | string | null
    lsitmnm?: NullableStringFieldUpdateOperationsInput | string | null
    itmrate?: IntFieldUpdateOperationsInput | number
  }

  export type OutstandingAmtCreateInput = {
    ledcd: string
    outamt?: Decimal | DecimalJsLike | number | string | null
  }

  export type OutstandingAmtUncheckedCreateInput = {
    ledcd: string
    outamt?: Decimal | DecimalJsLike | number | string | null
  }

  export type OutstandingAmtUpdateInput = {
    ledcd?: StringFieldUpdateOperationsInput | string
    outamt?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type OutstandingAmtUncheckedUpdateInput = {
    ledcd?: StringFieldUpdateOperationsInput | string
    outamt?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type OutstandingAmtCreateManyInput = {
    ledcd: string
    outamt?: Decimal | DecimalJsLike | number | string | null
  }

  export type OutstandingAmtUpdateManyMutationInput = {
    ledcd?: StringFieldUpdateOperationsInput | string
    outamt?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type OutstandingAmtUncheckedUpdateManyInput = {
    ledcd?: StringFieldUpdateOperationsInput | string
    outamt?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type AttendanceListRelationFilter = {
    every?: AttendanceWhereInput
    some?: AttendanceWhereInput
    none?: AttendanceWhereInput
  }

  export type PartyImagesListRelationFilter = {
    every?: partyImagesWhereInput
    some?: partyImagesWhereInput
    none?: partyImagesWhereInput
  }

  export type AttendanceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type partyImagesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    user_id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    untcd?: SortOrder
    stcd?: SortOrder
    stnm?: SortOrder
    untnm?: SortOrder
    usrnm?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    user_id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    user_id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    untcd?: SortOrder
    stcd?: SortOrder
    stnm?: SortOrder
    untnm?: SortOrder
    usrnm?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    user_id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    untcd?: SortOrder
    stcd?: SortOrder
    stnm?: SortOrder
    untnm?: SortOrder
    usrnm?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    user_id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type partyImagesCountOrderByAggregateInput = {
    image_id?: SortOrder
    partyId?: SortOrder
    createdAt?: SortOrder
    imageUrl2?: SortOrder
    imageUrl3?: SortOrder
    profileImageUrl?: SortOrder
    userId?: SortOrder
  }

  export type partyImagesMaxOrderByAggregateInput = {
    image_id?: SortOrder
    partyId?: SortOrder
    createdAt?: SortOrder
    imageUrl2?: SortOrder
    imageUrl3?: SortOrder
    profileImageUrl?: SortOrder
    userId?: SortOrder
  }

  export type partyImagesMinOrderByAggregateInput = {
    image_id?: SortOrder
    partyId?: SortOrder
    createdAt?: SortOrder
    imageUrl2?: SortOrder
    imageUrl3?: SortOrder
    profileImageUrl?: SortOrder
    userId?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type AcceptedOrdersNullableScalarRelationFilter = {
    is?: AcceptedOrdersWhereInput | null
    isNot?: AcceptedOrdersWhereInput | null
  }

  export type OrderItemListRelationFilter = {
    every?: OrderItemWhereInput
    some?: OrderItemWhereInput
    none?: OrderItemWhereInput
  }

  export type RejectedOrdersNullableScalarRelationFilter = {
    is?: RejectedOrdersWhereInput | null
    isNot?: RejectedOrdersWhereInput | null
  }

  export type OrderItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrderCountOrderByAggregateInput = {
    order_id?: SortOrder
    partyId?: SortOrder
    partyName?: SortOrder
    empId?: SortOrder
    totalAmount?: SortOrder
    discountAmount?: SortOrder
    createdAt?: SortOrder
    creditDays?: SortOrder
    paymentMode?: SortOrder
    status?: SortOrder
    bulkRate?: SortOrder
    consumerRate?: SortOrder
  }

  export type OrderAvgOrderByAggregateInput = {
    totalAmount?: SortOrder
    discountAmount?: SortOrder
    creditDays?: SortOrder
    bulkRate?: SortOrder
    consumerRate?: SortOrder
  }

  export type OrderMaxOrderByAggregateInput = {
    order_id?: SortOrder
    partyId?: SortOrder
    partyName?: SortOrder
    empId?: SortOrder
    totalAmount?: SortOrder
    discountAmount?: SortOrder
    createdAt?: SortOrder
    creditDays?: SortOrder
    paymentMode?: SortOrder
    status?: SortOrder
    bulkRate?: SortOrder
    consumerRate?: SortOrder
  }

  export type OrderMinOrderByAggregateInput = {
    order_id?: SortOrder
    partyId?: SortOrder
    partyName?: SortOrder
    empId?: SortOrder
    totalAmount?: SortOrder
    discountAmount?: SortOrder
    createdAt?: SortOrder
    creditDays?: SortOrder
    paymentMode?: SortOrder
    status?: SortOrder
    bulkRate?: SortOrder
    consumerRate?: SortOrder
  }

  export type OrderSumOrderByAggregateInput = {
    totalAmount?: SortOrder
    discountAmount?: SortOrder
    creditDays?: SortOrder
    bulkRate?: SortOrder
    consumerRate?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type OrderScalarRelationFilter = {
    is?: OrderWhereInput
    isNot?: OrderWhereInput
  }

  export type AcceptedOrdersCountOrderByAggregateInput = {
    accept_id?: SortOrder
    order_id?: SortOrder
    createdAt?: SortOrder
  }

  export type AcceptedOrdersMaxOrderByAggregateInput = {
    accept_id?: SortOrder
    order_id?: SortOrder
    createdAt?: SortOrder
  }

  export type AcceptedOrdersMinOrderByAggregateInput = {
    accept_id?: SortOrder
    order_id?: SortOrder
    createdAt?: SortOrder
  }

  export type RejectedOrdersCountOrderByAggregateInput = {
    reject_id?: SortOrder
    order_id?: SortOrder
    createdAt?: SortOrder
  }

  export type RejectedOrdersMaxOrderByAggregateInput = {
    reject_id?: SortOrder
    order_id?: SortOrder
    createdAt?: SortOrder
  }

  export type RejectedOrdersMinOrderByAggregateInput = {
    reject_id?: SortOrder
    order_id?: SortOrder
    createdAt?: SortOrder
  }

  export type OrderItemCountOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    itemCode?: SortOrder
    itemName?: SortOrder
    quantity?: SortOrder
    rate?: SortOrder
    amount?: SortOrder
    packType?: SortOrder
  }

  export type OrderItemAvgOrderByAggregateInput = {
    quantity?: SortOrder
    rate?: SortOrder
    amount?: SortOrder
  }

  export type OrderItemMaxOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    itemCode?: SortOrder
    itemName?: SortOrder
    quantity?: SortOrder
    rate?: SortOrder
    amount?: SortOrder
    packType?: SortOrder
  }

  export type OrderItemMinOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    itemCode?: SortOrder
    itemName?: SortOrder
    quantity?: SortOrder
    rate?: SortOrder
    amount?: SortOrder
    packType?: SortOrder
  }

  export type OrderItemSumOrderByAggregateInput = {
    quantity?: SortOrder
    rate?: SortOrder
    amount?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type CollectionCountOrderByAggregateInput = {
    collection_id?: SortOrder
    partyId?: SortOrder
    partyName?: SortOrder
    empId?: SortOrder
    amount?: SortOrder
    paymentMethod?: SortOrder
    chequeNumber?: SortOrder
    chequeDate?: SortOrder
    bankName?: SortOrder
    upiId?: SortOrder
    transactionId?: SortOrder
    createdAt?: SortOrder
    verified?: SortOrder
    verifiedAt?: SortOrder
    imageUrl?: SortOrder
  }

  export type CollectionAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type CollectionMaxOrderByAggregateInput = {
    collection_id?: SortOrder
    partyId?: SortOrder
    partyName?: SortOrder
    empId?: SortOrder
    amount?: SortOrder
    paymentMethod?: SortOrder
    chequeNumber?: SortOrder
    chequeDate?: SortOrder
    bankName?: SortOrder
    upiId?: SortOrder
    transactionId?: SortOrder
    createdAt?: SortOrder
    verified?: SortOrder
    verifiedAt?: SortOrder
    imageUrl?: SortOrder
  }

  export type CollectionMinOrderByAggregateInput = {
    collection_id?: SortOrder
    partyId?: SortOrder
    partyName?: SortOrder
    empId?: SortOrder
    amount?: SortOrder
    paymentMethod?: SortOrder
    chequeNumber?: SortOrder
    chequeDate?: SortOrder
    bankName?: SortOrder
    upiId?: SortOrder
    transactionId?: SortOrder
    createdAt?: SortOrder
    verified?: SortOrder
    verifiedAt?: SortOrder
    imageUrl?: SortOrder
  }

  export type CollectionSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type PartyEditRequestCountOrderByAggregateInput = {
    request_id?: SortOrder
    partyId?: SortOrder
    partyName?: SortOrder
    empId?: SortOrder
    updatedName?: SortOrder
    updatedAddress?: SortOrder
    updatedContactPerson?: SortOrder
    updatedMobileNumber?: SortOrder
    updatedEmailId?: SortOrder
    shopImage1?: SortOrder
    shopImage2?: SortOrder
    status?: SortOrder
    adminComment?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PartyEditRequestMaxOrderByAggregateInput = {
    request_id?: SortOrder
    partyId?: SortOrder
    partyName?: SortOrder
    empId?: SortOrder
    updatedName?: SortOrder
    updatedAddress?: SortOrder
    updatedContactPerson?: SortOrder
    updatedMobileNumber?: SortOrder
    updatedEmailId?: SortOrder
    shopImage1?: SortOrder
    shopImage2?: SortOrder
    status?: SortOrder
    adminComment?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PartyEditRequestMinOrderByAggregateInput = {
    request_id?: SortOrder
    partyId?: SortOrder
    partyName?: SortOrder
    empId?: SortOrder
    updatedName?: SortOrder
    updatedAddress?: SortOrder
    updatedContactPerson?: SortOrder
    updatedMobileNumber?: SortOrder
    updatedEmailId?: SortOrder
    shopImage1?: SortOrder
    shopImage2?: SortOrder
    status?: SortOrder
    adminComment?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StockItemListRelationFilter = {
    every?: StockItemWhereInput
    some?: StockItemWhereInput
    none?: StockItemWhereInput
  }

  export type StockItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StockCountOrderByAggregateInput = {
    stock_id?: SortOrder
    partyId?: SortOrder
    partyName?: SortOrder
    empId?: SortOrder
    createdAt?: SortOrder
  }

  export type StockMaxOrderByAggregateInput = {
    stock_id?: SortOrder
    partyId?: SortOrder
    partyName?: SortOrder
    empId?: SortOrder
    createdAt?: SortOrder
  }

  export type StockMinOrderByAggregateInput = {
    stock_id?: SortOrder
    partyId?: SortOrder
    partyName?: SortOrder
    empId?: SortOrder
    createdAt?: SortOrder
  }

  export type StockScalarRelationFilter = {
    is?: StockWhereInput
    isNot?: StockWhereInput
  }

  export type StockItemCountOrderByAggregateInput = {
    id?: SortOrder
    stockId?: SortOrder
    itemCode?: SortOrder
    itemName?: SortOrder
    quantity?: SortOrder
  }

  export type StockItemAvgOrderByAggregateInput = {
    quantity?: SortOrder
  }

  export type StockItemMaxOrderByAggregateInput = {
    id?: SortOrder
    stockId?: SortOrder
    itemCode?: SortOrder
    itemName?: SortOrder
    quantity?: SortOrder
  }

  export type StockItemMinOrderByAggregateInput = {
    id?: SortOrder
    stockId?: SortOrder
    itemCode?: SortOrder
    itemName?: SortOrder
    quantity?: SortOrder
  }

  export type StockItemSumOrderByAggregateInput = {
    quantity?: SortOrder
  }

  export type adminCountOrderByAggregateInput = {
    admin_id?: SortOrder
    username?: SortOrder
    password?: SortOrder
  }

  export type adminMaxOrderByAggregateInput = {
    admin_id?: SortOrder
    username?: SortOrder
    password?: SortOrder
  }

  export type adminMinOrderByAggregateInput = {
    admin_id?: SortOrder
    username?: SortOrder
    password?: SortOrder
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type AttendanceUserIdDateCompoundUniqueInput = {
    userId: string
    date: Date | string
  }

  export type AttendanceCountOrderByAggregateInput = {
    attendance_id?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    status?: SortOrder
    markedAt?: SortOrder
    markedBy?: SortOrder
    absentReason?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AttendanceMaxOrderByAggregateInput = {
    attendance_id?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    status?: SortOrder
    markedAt?: SortOrder
    markedBy?: SortOrder
    absentReason?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AttendanceMinOrderByAggregateInput = {
    attendance_id?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    status?: SortOrder
    markedAt?: SortOrder
    markedBy?: SortOrder
    absentReason?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DailyRateListUntcdDateCompoundUniqueInput = {
    untcd: string
    date: Date | string
  }

  export type DailyRateListCountOrderByAggregateInput = {
    rate_id?: SortOrder
    untcd?: SortOrder
    date?: SortOrder
    bulkRate?: SortOrder
    consumerRate?: SortOrder
    createdAt?: SortOrder
  }

  export type DailyRateListAvgOrderByAggregateInput = {
    bulkRate?: SortOrder
    consumerRate?: SortOrder
  }

  export type DailyRateListMaxOrderByAggregateInput = {
    rate_id?: SortOrder
    untcd?: SortOrder
    date?: SortOrder
    bulkRate?: SortOrder
    consumerRate?: SortOrder
    createdAt?: SortOrder
  }

  export type DailyRateListMinOrderByAggregateInput = {
    rate_id?: SortOrder
    untcd?: SortOrder
    date?: SortOrder
    bulkRate?: SortOrder
    consumerRate?: SortOrder
    createdAt?: SortOrder
  }

  export type DailyRateListSumOrderByAggregateInput = {
    bulkRate?: SortOrder
    consumerRate?: SortOrder
  }

  export type mstempCountOrderByAggregateInput = {
    empcd?: SortOrder
    ledcd?: SortOrder
    lednm?: SortOrder
  }

  export type mstempMaxOrderByAggregateInput = {
    empcd?: SortOrder
    ledcd?: SortOrder
    lednm?: SortOrder
  }

  export type mstempMinOrderByAggregateInput = {
    empcd?: SortOrder
    ledcd?: SortOrder
    lednm?: SortOrder
  }

  export type mstpartyCountOrderByAggregateInput = {
    ledcd?: SortOrder
    lednm?: SortOrder
    empcd?: SortOrder
    areacd?: SortOrder
    areanm?: SortOrder
    ledadr1?: SortOrder
  }

  export type mstpartyMaxOrderByAggregateInput = {
    ledcd?: SortOrder
    lednm?: SortOrder
    empcd?: SortOrder
    areacd?: SortOrder
    areanm?: SortOrder
    ledadr1?: SortOrder
  }

  export type mstpartyMinOrderByAggregateInput = {
    ledcd?: SortOrder
    lednm?: SortOrder
    empcd?: SortOrder
    areacd?: SortOrder
    areanm?: SortOrder
    ledadr1?: SortOrder
  }

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type mstitmCountOrderByAggregateInput = {
    rowid?: SortOrder
    itmcd?: SortOrder
    itmnm?: SortOrder
    pcksz?: SortOrder
    wgtconv?: SortOrder
    itmsubcat?: SortOrder
    itmcatgrp?: SortOrder
    lsitmnm?: SortOrder
    itmrate?: SortOrder
  }

  export type mstitmAvgOrderByAggregateInput = {
    rowid?: SortOrder
    pcksz?: SortOrder
    wgtconv?: SortOrder
    itmrate?: SortOrder
  }

  export type mstitmMaxOrderByAggregateInput = {
    rowid?: SortOrder
    itmcd?: SortOrder
    itmnm?: SortOrder
    pcksz?: SortOrder
    wgtconv?: SortOrder
    itmsubcat?: SortOrder
    itmcatgrp?: SortOrder
    lsitmnm?: SortOrder
    itmrate?: SortOrder
  }

  export type mstitmMinOrderByAggregateInput = {
    rowid?: SortOrder
    itmcd?: SortOrder
    itmnm?: SortOrder
    pcksz?: SortOrder
    wgtconv?: SortOrder
    itmsubcat?: SortOrder
    itmcatgrp?: SortOrder
    lsitmnm?: SortOrder
    itmrate?: SortOrder
  }

  export type mstitmSumOrderByAggregateInput = {
    rowid?: SortOrder
    pcksz?: SortOrder
    wgtconv?: SortOrder
    itmrate?: SortOrder
  }

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type OutstandingAmtCountOrderByAggregateInput = {
    ledcd?: SortOrder
    outamt?: SortOrder
  }

  export type OutstandingAmtAvgOrderByAggregateInput = {
    outamt?: SortOrder
  }

  export type OutstandingAmtMaxOrderByAggregateInput = {
    ledcd?: SortOrder
    outamt?: SortOrder
  }

  export type OutstandingAmtMinOrderByAggregateInput = {
    ledcd?: SortOrder
    outamt?: SortOrder
  }

  export type OutstandingAmtSumOrderByAggregateInput = {
    outamt?: SortOrder
  }

  export type AttendanceCreateNestedManyWithoutUserInput = {
    create?: XOR<AttendanceCreateWithoutUserInput, AttendanceUncheckedCreateWithoutUserInput> | AttendanceCreateWithoutUserInput[] | AttendanceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutUserInput | AttendanceCreateOrConnectWithoutUserInput[]
    createMany?: AttendanceCreateManyUserInputEnvelope
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
  }

  export type partyImagesCreateNestedManyWithoutUserInput = {
    create?: XOR<partyImagesCreateWithoutUserInput, partyImagesUncheckedCreateWithoutUserInput> | partyImagesCreateWithoutUserInput[] | partyImagesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: partyImagesCreateOrConnectWithoutUserInput | partyImagesCreateOrConnectWithoutUserInput[]
    createMany?: partyImagesCreateManyUserInputEnvelope
    connect?: partyImagesWhereUniqueInput | partyImagesWhereUniqueInput[]
  }

  export type AttendanceUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AttendanceCreateWithoutUserInput, AttendanceUncheckedCreateWithoutUserInput> | AttendanceCreateWithoutUserInput[] | AttendanceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutUserInput | AttendanceCreateOrConnectWithoutUserInput[]
    createMany?: AttendanceCreateManyUserInputEnvelope
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
  }

  export type partyImagesUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<partyImagesCreateWithoutUserInput, partyImagesUncheckedCreateWithoutUserInput> | partyImagesCreateWithoutUserInput[] | partyImagesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: partyImagesCreateOrConnectWithoutUserInput | partyImagesCreateOrConnectWithoutUserInput[]
    createMany?: partyImagesCreateManyUserInputEnvelope
    connect?: partyImagesWhereUniqueInput | partyImagesWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type AttendanceUpdateManyWithoutUserNestedInput = {
    create?: XOR<AttendanceCreateWithoutUserInput, AttendanceUncheckedCreateWithoutUserInput> | AttendanceCreateWithoutUserInput[] | AttendanceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutUserInput | AttendanceCreateOrConnectWithoutUserInput[]
    upsert?: AttendanceUpsertWithWhereUniqueWithoutUserInput | AttendanceUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AttendanceCreateManyUserInputEnvelope
    set?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    disconnect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    delete?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    update?: AttendanceUpdateWithWhereUniqueWithoutUserInput | AttendanceUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AttendanceUpdateManyWithWhereWithoutUserInput | AttendanceUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AttendanceScalarWhereInput | AttendanceScalarWhereInput[]
  }

  export type partyImagesUpdateManyWithoutUserNestedInput = {
    create?: XOR<partyImagesCreateWithoutUserInput, partyImagesUncheckedCreateWithoutUserInput> | partyImagesCreateWithoutUserInput[] | partyImagesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: partyImagesCreateOrConnectWithoutUserInput | partyImagesCreateOrConnectWithoutUserInput[]
    upsert?: partyImagesUpsertWithWhereUniqueWithoutUserInput | partyImagesUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: partyImagesCreateManyUserInputEnvelope
    set?: partyImagesWhereUniqueInput | partyImagesWhereUniqueInput[]
    disconnect?: partyImagesWhereUniqueInput | partyImagesWhereUniqueInput[]
    delete?: partyImagesWhereUniqueInput | partyImagesWhereUniqueInput[]
    connect?: partyImagesWhereUniqueInput | partyImagesWhereUniqueInput[]
    update?: partyImagesUpdateWithWhereUniqueWithoutUserInput | partyImagesUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: partyImagesUpdateManyWithWhereWithoutUserInput | partyImagesUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: partyImagesScalarWhereInput | partyImagesScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type AttendanceUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AttendanceCreateWithoutUserInput, AttendanceUncheckedCreateWithoutUserInput> | AttendanceCreateWithoutUserInput[] | AttendanceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutUserInput | AttendanceCreateOrConnectWithoutUserInput[]
    upsert?: AttendanceUpsertWithWhereUniqueWithoutUserInput | AttendanceUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AttendanceCreateManyUserInputEnvelope
    set?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    disconnect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    delete?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    update?: AttendanceUpdateWithWhereUniqueWithoutUserInput | AttendanceUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AttendanceUpdateManyWithWhereWithoutUserInput | AttendanceUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AttendanceScalarWhereInput | AttendanceScalarWhereInput[]
  }

  export type partyImagesUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<partyImagesCreateWithoutUserInput, partyImagesUncheckedCreateWithoutUserInput> | partyImagesCreateWithoutUserInput[] | partyImagesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: partyImagesCreateOrConnectWithoutUserInput | partyImagesCreateOrConnectWithoutUserInput[]
    upsert?: partyImagesUpsertWithWhereUniqueWithoutUserInput | partyImagesUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: partyImagesCreateManyUserInputEnvelope
    set?: partyImagesWhereUniqueInput | partyImagesWhereUniqueInput[]
    disconnect?: partyImagesWhereUniqueInput | partyImagesWhereUniqueInput[]
    delete?: partyImagesWhereUniqueInput | partyImagesWhereUniqueInput[]
    connect?: partyImagesWhereUniqueInput | partyImagesWhereUniqueInput[]
    update?: partyImagesUpdateWithWhereUniqueWithoutUserInput | partyImagesUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: partyImagesUpdateManyWithWhereWithoutUserInput | partyImagesUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: partyImagesScalarWhereInput | partyImagesScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutPartyImagesInput = {
    create?: XOR<UserCreateWithoutPartyImagesInput, UserUncheckedCreateWithoutPartyImagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutPartyImagesInput
    connect?: UserWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type UserUpdateOneWithoutPartyImagesNestedInput = {
    create?: XOR<UserCreateWithoutPartyImagesInput, UserUncheckedCreateWithoutPartyImagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutPartyImagesInput
    upsert?: UserUpsertWithoutPartyImagesInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPartyImagesInput, UserUpdateWithoutPartyImagesInput>, UserUncheckedUpdateWithoutPartyImagesInput>
  }

  export type AcceptedOrdersCreateNestedOneWithoutOrderInput = {
    create?: XOR<AcceptedOrdersCreateWithoutOrderInput, AcceptedOrdersUncheckedCreateWithoutOrderInput>
    connectOrCreate?: AcceptedOrdersCreateOrConnectWithoutOrderInput
    connect?: AcceptedOrdersWhereUniqueInput
  }

  export type OrderItemCreateNestedManyWithoutOrderInput = {
    create?: XOR<OrderItemCreateWithoutOrderInput, OrderItemUncheckedCreateWithoutOrderInput> | OrderItemCreateWithoutOrderInput[] | OrderItemUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutOrderInput | OrderItemCreateOrConnectWithoutOrderInput[]
    createMany?: OrderItemCreateManyOrderInputEnvelope
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
  }

  export type RejectedOrdersCreateNestedOneWithoutOrderInput = {
    create?: XOR<RejectedOrdersCreateWithoutOrderInput, RejectedOrdersUncheckedCreateWithoutOrderInput>
    connectOrCreate?: RejectedOrdersCreateOrConnectWithoutOrderInput
    connect?: RejectedOrdersWhereUniqueInput
  }

  export type AcceptedOrdersUncheckedCreateNestedOneWithoutOrderInput = {
    create?: XOR<AcceptedOrdersCreateWithoutOrderInput, AcceptedOrdersUncheckedCreateWithoutOrderInput>
    connectOrCreate?: AcceptedOrdersCreateOrConnectWithoutOrderInput
    connect?: AcceptedOrdersWhereUniqueInput
  }

  export type OrderItemUncheckedCreateNestedManyWithoutOrderInput = {
    create?: XOR<OrderItemCreateWithoutOrderInput, OrderItemUncheckedCreateWithoutOrderInput> | OrderItemCreateWithoutOrderInput[] | OrderItemUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutOrderInput | OrderItemCreateOrConnectWithoutOrderInput[]
    createMany?: OrderItemCreateManyOrderInputEnvelope
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
  }

  export type RejectedOrdersUncheckedCreateNestedOneWithoutOrderInput = {
    create?: XOR<RejectedOrdersCreateWithoutOrderInput, RejectedOrdersUncheckedCreateWithoutOrderInput>
    connectOrCreate?: RejectedOrdersCreateOrConnectWithoutOrderInput
    connect?: RejectedOrdersWhereUniqueInput
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type AcceptedOrdersUpdateOneWithoutOrderNestedInput = {
    create?: XOR<AcceptedOrdersCreateWithoutOrderInput, AcceptedOrdersUncheckedCreateWithoutOrderInput>
    connectOrCreate?: AcceptedOrdersCreateOrConnectWithoutOrderInput
    upsert?: AcceptedOrdersUpsertWithoutOrderInput
    disconnect?: AcceptedOrdersWhereInput | boolean
    delete?: AcceptedOrdersWhereInput | boolean
    connect?: AcceptedOrdersWhereUniqueInput
    update?: XOR<XOR<AcceptedOrdersUpdateToOneWithWhereWithoutOrderInput, AcceptedOrdersUpdateWithoutOrderInput>, AcceptedOrdersUncheckedUpdateWithoutOrderInput>
  }

  export type OrderItemUpdateManyWithoutOrderNestedInput = {
    create?: XOR<OrderItemCreateWithoutOrderInput, OrderItemUncheckedCreateWithoutOrderInput> | OrderItemCreateWithoutOrderInput[] | OrderItemUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutOrderInput | OrderItemCreateOrConnectWithoutOrderInput[]
    upsert?: OrderItemUpsertWithWhereUniqueWithoutOrderInput | OrderItemUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: OrderItemCreateManyOrderInputEnvelope
    set?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    disconnect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    delete?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    update?: OrderItemUpdateWithWhereUniqueWithoutOrderInput | OrderItemUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: OrderItemUpdateManyWithWhereWithoutOrderInput | OrderItemUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[]
  }

  export type RejectedOrdersUpdateOneWithoutOrderNestedInput = {
    create?: XOR<RejectedOrdersCreateWithoutOrderInput, RejectedOrdersUncheckedCreateWithoutOrderInput>
    connectOrCreate?: RejectedOrdersCreateOrConnectWithoutOrderInput
    upsert?: RejectedOrdersUpsertWithoutOrderInput
    disconnect?: RejectedOrdersWhereInput | boolean
    delete?: RejectedOrdersWhereInput | boolean
    connect?: RejectedOrdersWhereUniqueInput
    update?: XOR<XOR<RejectedOrdersUpdateToOneWithWhereWithoutOrderInput, RejectedOrdersUpdateWithoutOrderInput>, RejectedOrdersUncheckedUpdateWithoutOrderInput>
  }

  export type AcceptedOrdersUncheckedUpdateOneWithoutOrderNestedInput = {
    create?: XOR<AcceptedOrdersCreateWithoutOrderInput, AcceptedOrdersUncheckedCreateWithoutOrderInput>
    connectOrCreate?: AcceptedOrdersCreateOrConnectWithoutOrderInput
    upsert?: AcceptedOrdersUpsertWithoutOrderInput
    disconnect?: AcceptedOrdersWhereInput | boolean
    delete?: AcceptedOrdersWhereInput | boolean
    connect?: AcceptedOrdersWhereUniqueInput
    update?: XOR<XOR<AcceptedOrdersUpdateToOneWithWhereWithoutOrderInput, AcceptedOrdersUpdateWithoutOrderInput>, AcceptedOrdersUncheckedUpdateWithoutOrderInput>
  }

  export type OrderItemUncheckedUpdateManyWithoutOrderNestedInput = {
    create?: XOR<OrderItemCreateWithoutOrderInput, OrderItemUncheckedCreateWithoutOrderInput> | OrderItemCreateWithoutOrderInput[] | OrderItemUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutOrderInput | OrderItemCreateOrConnectWithoutOrderInput[]
    upsert?: OrderItemUpsertWithWhereUniqueWithoutOrderInput | OrderItemUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: OrderItemCreateManyOrderInputEnvelope
    set?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    disconnect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    delete?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    update?: OrderItemUpdateWithWhereUniqueWithoutOrderInput | OrderItemUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: OrderItemUpdateManyWithWhereWithoutOrderInput | OrderItemUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[]
  }

  export type RejectedOrdersUncheckedUpdateOneWithoutOrderNestedInput = {
    create?: XOR<RejectedOrdersCreateWithoutOrderInput, RejectedOrdersUncheckedCreateWithoutOrderInput>
    connectOrCreate?: RejectedOrdersCreateOrConnectWithoutOrderInput
    upsert?: RejectedOrdersUpsertWithoutOrderInput
    disconnect?: RejectedOrdersWhereInput | boolean
    delete?: RejectedOrdersWhereInput | boolean
    connect?: RejectedOrdersWhereUniqueInput
    update?: XOR<XOR<RejectedOrdersUpdateToOneWithWhereWithoutOrderInput, RejectedOrdersUpdateWithoutOrderInput>, RejectedOrdersUncheckedUpdateWithoutOrderInput>
  }

  export type OrderCreateNestedOneWithoutAcceptInput = {
    create?: XOR<OrderCreateWithoutAcceptInput, OrderUncheckedCreateWithoutAcceptInput>
    connectOrCreate?: OrderCreateOrConnectWithoutAcceptInput
    connect?: OrderWhereUniqueInput
  }

  export type OrderUpdateOneRequiredWithoutAcceptNestedInput = {
    create?: XOR<OrderCreateWithoutAcceptInput, OrderUncheckedCreateWithoutAcceptInput>
    connectOrCreate?: OrderCreateOrConnectWithoutAcceptInput
    upsert?: OrderUpsertWithoutAcceptInput
    connect?: OrderWhereUniqueInput
    update?: XOR<XOR<OrderUpdateToOneWithWhereWithoutAcceptInput, OrderUpdateWithoutAcceptInput>, OrderUncheckedUpdateWithoutAcceptInput>
  }

  export type OrderCreateNestedOneWithoutRejectInput = {
    create?: XOR<OrderCreateWithoutRejectInput, OrderUncheckedCreateWithoutRejectInput>
    connectOrCreate?: OrderCreateOrConnectWithoutRejectInput
    connect?: OrderWhereUniqueInput
  }

  export type OrderUpdateOneRequiredWithoutRejectNestedInput = {
    create?: XOR<OrderCreateWithoutRejectInput, OrderUncheckedCreateWithoutRejectInput>
    connectOrCreate?: OrderCreateOrConnectWithoutRejectInput
    upsert?: OrderUpsertWithoutRejectInput
    connect?: OrderWhereUniqueInput
    update?: XOR<XOR<OrderUpdateToOneWithWhereWithoutRejectInput, OrderUpdateWithoutRejectInput>, OrderUncheckedUpdateWithoutRejectInput>
  }

  export type OrderCreateNestedOneWithoutOrderItemsInput = {
    create?: XOR<OrderCreateWithoutOrderItemsInput, OrderUncheckedCreateWithoutOrderItemsInput>
    connectOrCreate?: OrderCreateOrConnectWithoutOrderItemsInput
    connect?: OrderWhereUniqueInput
  }

  export type OrderUpdateOneRequiredWithoutOrderItemsNestedInput = {
    create?: XOR<OrderCreateWithoutOrderItemsInput, OrderUncheckedCreateWithoutOrderItemsInput>
    connectOrCreate?: OrderCreateOrConnectWithoutOrderItemsInput
    upsert?: OrderUpsertWithoutOrderItemsInput
    connect?: OrderWhereUniqueInput
    update?: XOR<XOR<OrderUpdateToOneWithWhereWithoutOrderItemsInput, OrderUpdateWithoutOrderItemsInput>, OrderUncheckedUpdateWithoutOrderItemsInput>
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type StockItemCreateNestedManyWithoutStockInput = {
    create?: XOR<StockItemCreateWithoutStockInput, StockItemUncheckedCreateWithoutStockInput> | StockItemCreateWithoutStockInput[] | StockItemUncheckedCreateWithoutStockInput[]
    connectOrCreate?: StockItemCreateOrConnectWithoutStockInput | StockItemCreateOrConnectWithoutStockInput[]
    createMany?: StockItemCreateManyStockInputEnvelope
    connect?: StockItemWhereUniqueInput | StockItemWhereUniqueInput[]
  }

  export type StockItemUncheckedCreateNestedManyWithoutStockInput = {
    create?: XOR<StockItemCreateWithoutStockInput, StockItemUncheckedCreateWithoutStockInput> | StockItemCreateWithoutStockInput[] | StockItemUncheckedCreateWithoutStockInput[]
    connectOrCreate?: StockItemCreateOrConnectWithoutStockInput | StockItemCreateOrConnectWithoutStockInput[]
    createMany?: StockItemCreateManyStockInputEnvelope
    connect?: StockItemWhereUniqueInput | StockItemWhereUniqueInput[]
  }

  export type StockItemUpdateManyWithoutStockNestedInput = {
    create?: XOR<StockItemCreateWithoutStockInput, StockItemUncheckedCreateWithoutStockInput> | StockItemCreateWithoutStockInput[] | StockItemUncheckedCreateWithoutStockInput[]
    connectOrCreate?: StockItemCreateOrConnectWithoutStockInput | StockItemCreateOrConnectWithoutStockInput[]
    upsert?: StockItemUpsertWithWhereUniqueWithoutStockInput | StockItemUpsertWithWhereUniqueWithoutStockInput[]
    createMany?: StockItemCreateManyStockInputEnvelope
    set?: StockItemWhereUniqueInput | StockItemWhereUniqueInput[]
    disconnect?: StockItemWhereUniqueInput | StockItemWhereUniqueInput[]
    delete?: StockItemWhereUniqueInput | StockItemWhereUniqueInput[]
    connect?: StockItemWhereUniqueInput | StockItemWhereUniqueInput[]
    update?: StockItemUpdateWithWhereUniqueWithoutStockInput | StockItemUpdateWithWhereUniqueWithoutStockInput[]
    updateMany?: StockItemUpdateManyWithWhereWithoutStockInput | StockItemUpdateManyWithWhereWithoutStockInput[]
    deleteMany?: StockItemScalarWhereInput | StockItemScalarWhereInput[]
  }

  export type StockItemUncheckedUpdateManyWithoutStockNestedInput = {
    create?: XOR<StockItemCreateWithoutStockInput, StockItemUncheckedCreateWithoutStockInput> | StockItemCreateWithoutStockInput[] | StockItemUncheckedCreateWithoutStockInput[]
    connectOrCreate?: StockItemCreateOrConnectWithoutStockInput | StockItemCreateOrConnectWithoutStockInput[]
    upsert?: StockItemUpsertWithWhereUniqueWithoutStockInput | StockItemUpsertWithWhereUniqueWithoutStockInput[]
    createMany?: StockItemCreateManyStockInputEnvelope
    set?: StockItemWhereUniqueInput | StockItemWhereUniqueInput[]
    disconnect?: StockItemWhereUniqueInput | StockItemWhereUniqueInput[]
    delete?: StockItemWhereUniqueInput | StockItemWhereUniqueInput[]
    connect?: StockItemWhereUniqueInput | StockItemWhereUniqueInput[]
    update?: StockItemUpdateWithWhereUniqueWithoutStockInput | StockItemUpdateWithWhereUniqueWithoutStockInput[]
    updateMany?: StockItemUpdateManyWithWhereWithoutStockInput | StockItemUpdateManyWithWhereWithoutStockInput[]
    deleteMany?: StockItemScalarWhereInput | StockItemScalarWhereInput[]
  }

  export type StockCreateNestedOneWithoutStockItemsInput = {
    create?: XOR<StockCreateWithoutStockItemsInput, StockUncheckedCreateWithoutStockItemsInput>
    connectOrCreate?: StockCreateOrConnectWithoutStockItemsInput
    connect?: StockWhereUniqueInput
  }

  export type StockUpdateOneRequiredWithoutStockItemsNestedInput = {
    create?: XOR<StockCreateWithoutStockItemsInput, StockUncheckedCreateWithoutStockItemsInput>
    connectOrCreate?: StockCreateOrConnectWithoutStockItemsInput
    upsert?: StockUpsertWithoutStockItemsInput
    connect?: StockWhereUniqueInput
    update?: XOR<XOR<StockUpdateToOneWithWhereWithoutStockItemsInput, StockUpdateWithoutStockItemsInput>, StockUncheckedUpdateWithoutStockItemsInput>
  }

  export type UserCreateNestedOneWithoutAttendanceInput = {
    create?: XOR<UserCreateWithoutAttendanceInput, UserUncheckedCreateWithoutAttendanceInput>
    connectOrCreate?: UserCreateOrConnectWithoutAttendanceInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutAttendanceNestedInput = {
    create?: XOR<UserCreateWithoutAttendanceInput, UserUncheckedCreateWithoutAttendanceInput>
    connectOrCreate?: UserCreateOrConnectWithoutAttendanceInput
    upsert?: UserUpsertWithoutAttendanceInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAttendanceInput, UserUpdateWithoutAttendanceInput>, UserUncheckedUpdateWithoutAttendanceInput>
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type AttendanceCreateWithoutUserInput = {
    attendance_id?: string
    date: Date | string
    status?: string
    markedAt?: Date | string | null
    markedBy?: string | null
    absentReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AttendanceUncheckedCreateWithoutUserInput = {
    attendance_id?: string
    date: Date | string
    status?: string
    markedAt?: Date | string | null
    markedBy?: string | null
    absentReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AttendanceCreateOrConnectWithoutUserInput = {
    where: AttendanceWhereUniqueInput
    create: XOR<AttendanceCreateWithoutUserInput, AttendanceUncheckedCreateWithoutUserInput>
  }

  export type AttendanceCreateManyUserInputEnvelope = {
    data: AttendanceCreateManyUserInput | AttendanceCreateManyUserInput[]
  }

  export type partyImagesCreateWithoutUserInput = {
    image_id?: string
    partyId: string
    createdAt?: Date | string
    imageUrl2?: string | null
    imageUrl3?: string | null
    profileImageUrl: string
  }

  export type partyImagesUncheckedCreateWithoutUserInput = {
    image_id?: string
    partyId: string
    createdAt?: Date | string
    imageUrl2?: string | null
    imageUrl3?: string | null
    profileImageUrl: string
  }

  export type partyImagesCreateOrConnectWithoutUserInput = {
    where: partyImagesWhereUniqueInput
    create: XOR<partyImagesCreateWithoutUserInput, partyImagesUncheckedCreateWithoutUserInput>
  }

  export type partyImagesCreateManyUserInputEnvelope = {
    data: partyImagesCreateManyUserInput | partyImagesCreateManyUserInput[]
  }

  export type AttendanceUpsertWithWhereUniqueWithoutUserInput = {
    where: AttendanceWhereUniqueInput
    update: XOR<AttendanceUpdateWithoutUserInput, AttendanceUncheckedUpdateWithoutUserInput>
    create: XOR<AttendanceCreateWithoutUserInput, AttendanceUncheckedCreateWithoutUserInput>
  }

  export type AttendanceUpdateWithWhereUniqueWithoutUserInput = {
    where: AttendanceWhereUniqueInput
    data: XOR<AttendanceUpdateWithoutUserInput, AttendanceUncheckedUpdateWithoutUserInput>
  }

  export type AttendanceUpdateManyWithWhereWithoutUserInput = {
    where: AttendanceScalarWhereInput
    data: XOR<AttendanceUpdateManyMutationInput, AttendanceUncheckedUpdateManyWithoutUserInput>
  }

  export type AttendanceScalarWhereInput = {
    AND?: AttendanceScalarWhereInput | AttendanceScalarWhereInput[]
    OR?: AttendanceScalarWhereInput[]
    NOT?: AttendanceScalarWhereInput | AttendanceScalarWhereInput[]
    attendance_id?: StringFilter<"Attendance"> | string
    userId?: StringFilter<"Attendance"> | string
    date?: DateTimeFilter<"Attendance"> | Date | string
    status?: StringFilter<"Attendance"> | string
    markedAt?: DateTimeNullableFilter<"Attendance"> | Date | string | null
    markedBy?: StringNullableFilter<"Attendance"> | string | null
    absentReason?: StringNullableFilter<"Attendance"> | string | null
    createdAt?: DateTimeFilter<"Attendance"> | Date | string
    updatedAt?: DateTimeFilter<"Attendance"> | Date | string
  }

  export type partyImagesUpsertWithWhereUniqueWithoutUserInput = {
    where: partyImagesWhereUniqueInput
    update: XOR<partyImagesUpdateWithoutUserInput, partyImagesUncheckedUpdateWithoutUserInput>
    create: XOR<partyImagesCreateWithoutUserInput, partyImagesUncheckedCreateWithoutUserInput>
  }

  export type partyImagesUpdateWithWhereUniqueWithoutUserInput = {
    where: partyImagesWhereUniqueInput
    data: XOR<partyImagesUpdateWithoutUserInput, partyImagesUncheckedUpdateWithoutUserInput>
  }

  export type partyImagesUpdateManyWithWhereWithoutUserInput = {
    where: partyImagesScalarWhereInput
    data: XOR<partyImagesUpdateManyMutationInput, partyImagesUncheckedUpdateManyWithoutUserInput>
  }

  export type partyImagesScalarWhereInput = {
    AND?: partyImagesScalarWhereInput | partyImagesScalarWhereInput[]
    OR?: partyImagesScalarWhereInput[]
    NOT?: partyImagesScalarWhereInput | partyImagesScalarWhereInput[]
    image_id?: StringFilter<"partyImages"> | string
    partyId?: StringFilter<"partyImages"> | string
    createdAt?: DateTimeFilter<"partyImages"> | Date | string
    imageUrl2?: StringNullableFilter<"partyImages"> | string | null
    imageUrl3?: StringNullableFilter<"partyImages"> | string | null
    profileImageUrl?: StringFilter<"partyImages"> | string
    userId?: StringNullableFilter<"partyImages"> | string | null
  }

  export type UserCreateWithoutPartyImagesInput = {
    username: string
    password: string
    untcd?: string
    stcd?: string
    stnm?: string
    untnm?: string
    usrnm?: string
    attendance?: AttendanceCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPartyImagesInput = {
    user_id?: number
    username: string
    password: string
    untcd?: string
    stcd?: string
    stnm?: string
    untnm?: string
    usrnm?: string
    attendance?: AttendanceUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPartyImagesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPartyImagesInput, UserUncheckedCreateWithoutPartyImagesInput>
  }

  export type UserUpsertWithoutPartyImagesInput = {
    update: XOR<UserUpdateWithoutPartyImagesInput, UserUncheckedUpdateWithoutPartyImagesInput>
    create: XOR<UserCreateWithoutPartyImagesInput, UserUncheckedCreateWithoutPartyImagesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPartyImagesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPartyImagesInput, UserUncheckedUpdateWithoutPartyImagesInput>
  }

  export type UserUpdateWithoutPartyImagesInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    untcd?: StringFieldUpdateOperationsInput | string
    stcd?: StringFieldUpdateOperationsInput | string
    stnm?: StringFieldUpdateOperationsInput | string
    untnm?: StringFieldUpdateOperationsInput | string
    usrnm?: StringFieldUpdateOperationsInput | string
    attendance?: AttendanceUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPartyImagesInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    untcd?: StringFieldUpdateOperationsInput | string
    stcd?: StringFieldUpdateOperationsInput | string
    stnm?: StringFieldUpdateOperationsInput | string
    untnm?: StringFieldUpdateOperationsInput | string
    usrnm?: StringFieldUpdateOperationsInput | string
    attendance?: AttendanceUncheckedUpdateManyWithoutUserNestedInput
  }

  export type AcceptedOrdersCreateWithoutOrderInput = {
    accept_id?: string
    createdAt?: Date | string
  }

  export type AcceptedOrdersUncheckedCreateWithoutOrderInput = {
    accept_id?: string
    createdAt?: Date | string
  }

  export type AcceptedOrdersCreateOrConnectWithoutOrderInput = {
    where: AcceptedOrdersWhereUniqueInput
    create: XOR<AcceptedOrdersCreateWithoutOrderInput, AcceptedOrdersUncheckedCreateWithoutOrderInput>
  }

  export type OrderItemCreateWithoutOrderInput = {
    id?: string
    itemCode: string
    itemName: string
    quantity: number
    rate: Decimal | DecimalJsLike | number | string
    amount: Decimal | DecimalJsLike | number | string
    packType?: string
  }

  export type OrderItemUncheckedCreateWithoutOrderInput = {
    id?: string
    itemCode: string
    itemName: string
    quantity: number
    rate: Decimal | DecimalJsLike | number | string
    amount: Decimal | DecimalJsLike | number | string
    packType?: string
  }

  export type OrderItemCreateOrConnectWithoutOrderInput = {
    where: OrderItemWhereUniqueInput
    create: XOR<OrderItemCreateWithoutOrderInput, OrderItemUncheckedCreateWithoutOrderInput>
  }

  export type OrderItemCreateManyOrderInputEnvelope = {
    data: OrderItemCreateManyOrderInput | OrderItemCreateManyOrderInput[]
  }

  export type RejectedOrdersCreateWithoutOrderInput = {
    reject_id?: string
    createdAt?: Date | string
  }

  export type RejectedOrdersUncheckedCreateWithoutOrderInput = {
    reject_id?: string
    createdAt?: Date | string
  }

  export type RejectedOrdersCreateOrConnectWithoutOrderInput = {
    where: RejectedOrdersWhereUniqueInput
    create: XOR<RejectedOrdersCreateWithoutOrderInput, RejectedOrdersUncheckedCreateWithoutOrderInput>
  }

  export type AcceptedOrdersUpsertWithoutOrderInput = {
    update: XOR<AcceptedOrdersUpdateWithoutOrderInput, AcceptedOrdersUncheckedUpdateWithoutOrderInput>
    create: XOR<AcceptedOrdersCreateWithoutOrderInput, AcceptedOrdersUncheckedCreateWithoutOrderInput>
    where?: AcceptedOrdersWhereInput
  }

  export type AcceptedOrdersUpdateToOneWithWhereWithoutOrderInput = {
    where?: AcceptedOrdersWhereInput
    data: XOR<AcceptedOrdersUpdateWithoutOrderInput, AcceptedOrdersUncheckedUpdateWithoutOrderInput>
  }

  export type AcceptedOrdersUpdateWithoutOrderInput = {
    accept_id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AcceptedOrdersUncheckedUpdateWithoutOrderInput = {
    accept_id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderItemUpsertWithWhereUniqueWithoutOrderInput = {
    where: OrderItemWhereUniqueInput
    update: XOR<OrderItemUpdateWithoutOrderInput, OrderItemUncheckedUpdateWithoutOrderInput>
    create: XOR<OrderItemCreateWithoutOrderInput, OrderItemUncheckedCreateWithoutOrderInput>
  }

  export type OrderItemUpdateWithWhereUniqueWithoutOrderInput = {
    where: OrderItemWhereUniqueInput
    data: XOR<OrderItemUpdateWithoutOrderInput, OrderItemUncheckedUpdateWithoutOrderInput>
  }

  export type OrderItemUpdateManyWithWhereWithoutOrderInput = {
    where: OrderItemScalarWhereInput
    data: XOR<OrderItemUpdateManyMutationInput, OrderItemUncheckedUpdateManyWithoutOrderInput>
  }

  export type OrderItemScalarWhereInput = {
    AND?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[]
    OR?: OrderItemScalarWhereInput[]
    NOT?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[]
    id?: StringFilter<"OrderItem"> | string
    orderId?: StringFilter<"OrderItem"> | string
    itemCode?: StringFilter<"OrderItem"> | string
    itemName?: StringFilter<"OrderItem"> | string
    quantity?: IntFilter<"OrderItem"> | number
    rate?: DecimalFilter<"OrderItem"> | Decimal | DecimalJsLike | number | string
    amount?: DecimalFilter<"OrderItem"> | Decimal | DecimalJsLike | number | string
    packType?: StringFilter<"OrderItem"> | string
  }

  export type RejectedOrdersUpsertWithoutOrderInput = {
    update: XOR<RejectedOrdersUpdateWithoutOrderInput, RejectedOrdersUncheckedUpdateWithoutOrderInput>
    create: XOR<RejectedOrdersCreateWithoutOrderInput, RejectedOrdersUncheckedCreateWithoutOrderInput>
    where?: RejectedOrdersWhereInput
  }

  export type RejectedOrdersUpdateToOneWithWhereWithoutOrderInput = {
    where?: RejectedOrdersWhereInput
    data: XOR<RejectedOrdersUpdateWithoutOrderInput, RejectedOrdersUncheckedUpdateWithoutOrderInput>
  }

  export type RejectedOrdersUpdateWithoutOrderInput = {
    reject_id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RejectedOrdersUncheckedUpdateWithoutOrderInput = {
    reject_id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderCreateWithoutAcceptInput = {
    order_id?: string
    partyId: string
    partyName: string
    empId: string
    totalAmount: Decimal | DecimalJsLike | number | string
    discountAmount: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    creditDays?: number | null
    paymentMode?: string
    status?: string
    bulkRate?: Decimal | DecimalJsLike | number | string | null
    consumerRate?: Decimal | DecimalJsLike | number | string | null
    orderItems?: OrderItemCreateNestedManyWithoutOrderInput
    reject?: RejectedOrdersCreateNestedOneWithoutOrderInput
  }

  export type OrderUncheckedCreateWithoutAcceptInput = {
    order_id?: string
    partyId: string
    partyName: string
    empId: string
    totalAmount: Decimal | DecimalJsLike | number | string
    discountAmount: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    creditDays?: number | null
    paymentMode?: string
    status?: string
    bulkRate?: Decimal | DecimalJsLike | number | string | null
    consumerRate?: Decimal | DecimalJsLike | number | string | null
    orderItems?: OrderItemUncheckedCreateNestedManyWithoutOrderInput
    reject?: RejectedOrdersUncheckedCreateNestedOneWithoutOrderInput
  }

  export type OrderCreateOrConnectWithoutAcceptInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutAcceptInput, OrderUncheckedCreateWithoutAcceptInput>
  }

  export type OrderUpsertWithoutAcceptInput = {
    update: XOR<OrderUpdateWithoutAcceptInput, OrderUncheckedUpdateWithoutAcceptInput>
    create: XOR<OrderCreateWithoutAcceptInput, OrderUncheckedCreateWithoutAcceptInput>
    where?: OrderWhereInput
  }

  export type OrderUpdateToOneWithWhereWithoutAcceptInput = {
    where?: OrderWhereInput
    data: XOR<OrderUpdateWithoutAcceptInput, OrderUncheckedUpdateWithoutAcceptInput>
  }

  export type OrderUpdateWithoutAcceptInput = {
    order_id?: StringFieldUpdateOperationsInput | string
    partyId?: StringFieldUpdateOperationsInput | string
    partyName?: StringFieldUpdateOperationsInput | string
    empId?: StringFieldUpdateOperationsInput | string
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discountAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creditDays?: NullableIntFieldUpdateOperationsInput | number | null
    paymentMode?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    bulkRate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    consumerRate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    orderItems?: OrderItemUpdateManyWithoutOrderNestedInput
    reject?: RejectedOrdersUpdateOneWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateWithoutAcceptInput = {
    order_id?: StringFieldUpdateOperationsInput | string
    partyId?: StringFieldUpdateOperationsInput | string
    partyName?: StringFieldUpdateOperationsInput | string
    empId?: StringFieldUpdateOperationsInput | string
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discountAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creditDays?: NullableIntFieldUpdateOperationsInput | number | null
    paymentMode?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    bulkRate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    consumerRate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    orderItems?: OrderItemUncheckedUpdateManyWithoutOrderNestedInput
    reject?: RejectedOrdersUncheckedUpdateOneWithoutOrderNestedInput
  }

  export type OrderCreateWithoutRejectInput = {
    order_id?: string
    partyId: string
    partyName: string
    empId: string
    totalAmount: Decimal | DecimalJsLike | number | string
    discountAmount: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    creditDays?: number | null
    paymentMode?: string
    status?: string
    bulkRate?: Decimal | DecimalJsLike | number | string | null
    consumerRate?: Decimal | DecimalJsLike | number | string | null
    accept?: AcceptedOrdersCreateNestedOneWithoutOrderInput
    orderItems?: OrderItemCreateNestedManyWithoutOrderInput
  }

  export type OrderUncheckedCreateWithoutRejectInput = {
    order_id?: string
    partyId: string
    partyName: string
    empId: string
    totalAmount: Decimal | DecimalJsLike | number | string
    discountAmount: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    creditDays?: number | null
    paymentMode?: string
    status?: string
    bulkRate?: Decimal | DecimalJsLike | number | string | null
    consumerRate?: Decimal | DecimalJsLike | number | string | null
    accept?: AcceptedOrdersUncheckedCreateNestedOneWithoutOrderInput
    orderItems?: OrderItemUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrderCreateOrConnectWithoutRejectInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutRejectInput, OrderUncheckedCreateWithoutRejectInput>
  }

  export type OrderUpsertWithoutRejectInput = {
    update: XOR<OrderUpdateWithoutRejectInput, OrderUncheckedUpdateWithoutRejectInput>
    create: XOR<OrderCreateWithoutRejectInput, OrderUncheckedCreateWithoutRejectInput>
    where?: OrderWhereInput
  }

  export type OrderUpdateToOneWithWhereWithoutRejectInput = {
    where?: OrderWhereInput
    data: XOR<OrderUpdateWithoutRejectInput, OrderUncheckedUpdateWithoutRejectInput>
  }

  export type OrderUpdateWithoutRejectInput = {
    order_id?: StringFieldUpdateOperationsInput | string
    partyId?: StringFieldUpdateOperationsInput | string
    partyName?: StringFieldUpdateOperationsInput | string
    empId?: StringFieldUpdateOperationsInput | string
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discountAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creditDays?: NullableIntFieldUpdateOperationsInput | number | null
    paymentMode?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    bulkRate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    consumerRate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    accept?: AcceptedOrdersUpdateOneWithoutOrderNestedInput
    orderItems?: OrderItemUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateWithoutRejectInput = {
    order_id?: StringFieldUpdateOperationsInput | string
    partyId?: StringFieldUpdateOperationsInput | string
    partyName?: StringFieldUpdateOperationsInput | string
    empId?: StringFieldUpdateOperationsInput | string
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discountAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creditDays?: NullableIntFieldUpdateOperationsInput | number | null
    paymentMode?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    bulkRate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    consumerRate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    accept?: AcceptedOrdersUncheckedUpdateOneWithoutOrderNestedInput
    orderItems?: OrderItemUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type OrderCreateWithoutOrderItemsInput = {
    order_id?: string
    partyId: string
    partyName: string
    empId: string
    totalAmount: Decimal | DecimalJsLike | number | string
    discountAmount: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    creditDays?: number | null
    paymentMode?: string
    status?: string
    bulkRate?: Decimal | DecimalJsLike | number | string | null
    consumerRate?: Decimal | DecimalJsLike | number | string | null
    accept?: AcceptedOrdersCreateNestedOneWithoutOrderInput
    reject?: RejectedOrdersCreateNestedOneWithoutOrderInput
  }

  export type OrderUncheckedCreateWithoutOrderItemsInput = {
    order_id?: string
    partyId: string
    partyName: string
    empId: string
    totalAmount: Decimal | DecimalJsLike | number | string
    discountAmount: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    creditDays?: number | null
    paymentMode?: string
    status?: string
    bulkRate?: Decimal | DecimalJsLike | number | string | null
    consumerRate?: Decimal | DecimalJsLike | number | string | null
    accept?: AcceptedOrdersUncheckedCreateNestedOneWithoutOrderInput
    reject?: RejectedOrdersUncheckedCreateNestedOneWithoutOrderInput
  }

  export type OrderCreateOrConnectWithoutOrderItemsInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutOrderItemsInput, OrderUncheckedCreateWithoutOrderItemsInput>
  }

  export type OrderUpsertWithoutOrderItemsInput = {
    update: XOR<OrderUpdateWithoutOrderItemsInput, OrderUncheckedUpdateWithoutOrderItemsInput>
    create: XOR<OrderCreateWithoutOrderItemsInput, OrderUncheckedCreateWithoutOrderItemsInput>
    where?: OrderWhereInput
  }

  export type OrderUpdateToOneWithWhereWithoutOrderItemsInput = {
    where?: OrderWhereInput
    data: XOR<OrderUpdateWithoutOrderItemsInput, OrderUncheckedUpdateWithoutOrderItemsInput>
  }

  export type OrderUpdateWithoutOrderItemsInput = {
    order_id?: StringFieldUpdateOperationsInput | string
    partyId?: StringFieldUpdateOperationsInput | string
    partyName?: StringFieldUpdateOperationsInput | string
    empId?: StringFieldUpdateOperationsInput | string
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discountAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creditDays?: NullableIntFieldUpdateOperationsInput | number | null
    paymentMode?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    bulkRate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    consumerRate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    accept?: AcceptedOrdersUpdateOneWithoutOrderNestedInput
    reject?: RejectedOrdersUpdateOneWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateWithoutOrderItemsInput = {
    order_id?: StringFieldUpdateOperationsInput | string
    partyId?: StringFieldUpdateOperationsInput | string
    partyName?: StringFieldUpdateOperationsInput | string
    empId?: StringFieldUpdateOperationsInput | string
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discountAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creditDays?: NullableIntFieldUpdateOperationsInput | number | null
    paymentMode?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    bulkRate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    consumerRate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    accept?: AcceptedOrdersUncheckedUpdateOneWithoutOrderNestedInput
    reject?: RejectedOrdersUncheckedUpdateOneWithoutOrderNestedInput
  }

  export type StockItemCreateWithoutStockInput = {
    id?: string
    itemCode: string
    itemName: string
    quantity: number
  }

  export type StockItemUncheckedCreateWithoutStockInput = {
    id?: string
    itemCode: string
    itemName: string
    quantity: number
  }

  export type StockItemCreateOrConnectWithoutStockInput = {
    where: StockItemWhereUniqueInput
    create: XOR<StockItemCreateWithoutStockInput, StockItemUncheckedCreateWithoutStockInput>
  }

  export type StockItemCreateManyStockInputEnvelope = {
    data: StockItemCreateManyStockInput | StockItemCreateManyStockInput[]
  }

  export type StockItemUpsertWithWhereUniqueWithoutStockInput = {
    where: StockItemWhereUniqueInput
    update: XOR<StockItemUpdateWithoutStockInput, StockItemUncheckedUpdateWithoutStockInput>
    create: XOR<StockItemCreateWithoutStockInput, StockItemUncheckedCreateWithoutStockInput>
  }

  export type StockItemUpdateWithWhereUniqueWithoutStockInput = {
    where: StockItemWhereUniqueInput
    data: XOR<StockItemUpdateWithoutStockInput, StockItemUncheckedUpdateWithoutStockInput>
  }

  export type StockItemUpdateManyWithWhereWithoutStockInput = {
    where: StockItemScalarWhereInput
    data: XOR<StockItemUpdateManyMutationInput, StockItemUncheckedUpdateManyWithoutStockInput>
  }

  export type StockItemScalarWhereInput = {
    AND?: StockItemScalarWhereInput | StockItemScalarWhereInput[]
    OR?: StockItemScalarWhereInput[]
    NOT?: StockItemScalarWhereInput | StockItemScalarWhereInput[]
    id?: StringFilter<"StockItem"> | string
    stockId?: StringFilter<"StockItem"> | string
    itemCode?: StringFilter<"StockItem"> | string
    itemName?: StringFilter<"StockItem"> | string
    quantity?: IntFilter<"StockItem"> | number
  }

  export type StockCreateWithoutStockItemsInput = {
    stock_id?: string
    partyId: string
    partyName: string
    empId: string
    createdAt?: Date | string
  }

  export type StockUncheckedCreateWithoutStockItemsInput = {
    stock_id?: string
    partyId: string
    partyName: string
    empId: string
    createdAt?: Date | string
  }

  export type StockCreateOrConnectWithoutStockItemsInput = {
    where: StockWhereUniqueInput
    create: XOR<StockCreateWithoutStockItemsInput, StockUncheckedCreateWithoutStockItemsInput>
  }

  export type StockUpsertWithoutStockItemsInput = {
    update: XOR<StockUpdateWithoutStockItemsInput, StockUncheckedUpdateWithoutStockItemsInput>
    create: XOR<StockCreateWithoutStockItemsInput, StockUncheckedCreateWithoutStockItemsInput>
    where?: StockWhereInput
  }

  export type StockUpdateToOneWithWhereWithoutStockItemsInput = {
    where?: StockWhereInput
    data: XOR<StockUpdateWithoutStockItemsInput, StockUncheckedUpdateWithoutStockItemsInput>
  }

  export type StockUpdateWithoutStockItemsInput = {
    stock_id?: StringFieldUpdateOperationsInput | string
    partyId?: StringFieldUpdateOperationsInput | string
    partyName?: StringFieldUpdateOperationsInput | string
    empId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StockUncheckedUpdateWithoutStockItemsInput = {
    stock_id?: StringFieldUpdateOperationsInput | string
    partyId?: StringFieldUpdateOperationsInput | string
    partyName?: StringFieldUpdateOperationsInput | string
    empId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateWithoutAttendanceInput = {
    username: string
    password: string
    untcd?: string
    stcd?: string
    stnm?: string
    untnm?: string
    usrnm?: string
    partyImages?: partyImagesCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAttendanceInput = {
    user_id?: number
    username: string
    password: string
    untcd?: string
    stcd?: string
    stnm?: string
    untnm?: string
    usrnm?: string
    partyImages?: partyImagesUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAttendanceInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAttendanceInput, UserUncheckedCreateWithoutAttendanceInput>
  }

  export type UserUpsertWithoutAttendanceInput = {
    update: XOR<UserUpdateWithoutAttendanceInput, UserUncheckedUpdateWithoutAttendanceInput>
    create: XOR<UserCreateWithoutAttendanceInput, UserUncheckedCreateWithoutAttendanceInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAttendanceInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAttendanceInput, UserUncheckedUpdateWithoutAttendanceInput>
  }

  export type UserUpdateWithoutAttendanceInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    untcd?: StringFieldUpdateOperationsInput | string
    stcd?: StringFieldUpdateOperationsInput | string
    stnm?: StringFieldUpdateOperationsInput | string
    untnm?: StringFieldUpdateOperationsInput | string
    usrnm?: StringFieldUpdateOperationsInput | string
    partyImages?: partyImagesUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAttendanceInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    untcd?: StringFieldUpdateOperationsInput | string
    stcd?: StringFieldUpdateOperationsInput | string
    stnm?: StringFieldUpdateOperationsInput | string
    untnm?: StringFieldUpdateOperationsInput | string
    usrnm?: StringFieldUpdateOperationsInput | string
    partyImages?: partyImagesUncheckedUpdateManyWithoutUserNestedInput
  }

  export type AttendanceCreateManyUserInput = {
    attendance_id?: string
    date: Date | string
    status?: string
    markedAt?: Date | string | null
    markedBy?: string | null
    absentReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type partyImagesCreateManyUserInput = {
    image_id?: string
    partyId: string
    createdAt?: Date | string
    imageUrl2?: string | null
    imageUrl3?: string | null
    profileImageUrl: string
  }

  export type AttendanceUpdateWithoutUserInput = {
    attendance_id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    markedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    markedBy?: NullableStringFieldUpdateOperationsInput | string | null
    absentReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttendanceUncheckedUpdateWithoutUserInput = {
    attendance_id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    markedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    markedBy?: NullableStringFieldUpdateOperationsInput | string | null
    absentReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttendanceUncheckedUpdateManyWithoutUserInput = {
    attendance_id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    markedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    markedBy?: NullableStringFieldUpdateOperationsInput | string | null
    absentReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type partyImagesUpdateWithoutUserInput = {
    image_id?: StringFieldUpdateOperationsInput | string
    partyId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    imageUrl2?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl3?: NullableStringFieldUpdateOperationsInput | string | null
    profileImageUrl?: StringFieldUpdateOperationsInput | string
  }

  export type partyImagesUncheckedUpdateWithoutUserInput = {
    image_id?: StringFieldUpdateOperationsInput | string
    partyId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    imageUrl2?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl3?: NullableStringFieldUpdateOperationsInput | string | null
    profileImageUrl?: StringFieldUpdateOperationsInput | string
  }

  export type partyImagesUncheckedUpdateManyWithoutUserInput = {
    image_id?: StringFieldUpdateOperationsInput | string
    partyId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    imageUrl2?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl3?: NullableStringFieldUpdateOperationsInput | string | null
    profileImageUrl?: StringFieldUpdateOperationsInput | string
  }

  export type OrderItemCreateManyOrderInput = {
    id?: string
    itemCode: string
    itemName: string
    quantity: number
    rate: Decimal | DecimalJsLike | number | string
    amount: Decimal | DecimalJsLike | number | string
    packType?: string
  }

  export type OrderItemUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    itemCode?: StringFieldUpdateOperationsInput | string
    itemName?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    rate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    packType?: StringFieldUpdateOperationsInput | string
  }

  export type OrderItemUncheckedUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    itemCode?: StringFieldUpdateOperationsInput | string
    itemName?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    rate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    packType?: StringFieldUpdateOperationsInput | string
  }

  export type OrderItemUncheckedUpdateManyWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    itemCode?: StringFieldUpdateOperationsInput | string
    itemName?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    rate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    packType?: StringFieldUpdateOperationsInput | string
  }

  export type StockItemCreateManyStockInput = {
    id?: string
    itemCode: string
    itemName: string
    quantity: number
  }

  export type StockItemUpdateWithoutStockInput = {
    id?: StringFieldUpdateOperationsInput | string
    itemCode?: StringFieldUpdateOperationsInput | string
    itemName?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type StockItemUncheckedUpdateWithoutStockInput = {
    id?: StringFieldUpdateOperationsInput | string
    itemCode?: StringFieldUpdateOperationsInput | string
    itemName?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type StockItemUncheckedUpdateManyWithoutStockInput = {
    id?: StringFieldUpdateOperationsInput | string
    itemCode?: StringFieldUpdateOperationsInput | string
    itemName?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
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