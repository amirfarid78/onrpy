
/**
 * Client
**/

import * as runtime from '@prisma/client/runtime/client.js';
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
 * Model Wallet
 * 
 */
export type Wallet = $Result.DefaultSelection<Prisma.$WalletPayload>
/**
 * Model Transaction
 * 
 */
export type Transaction = $Result.DefaultSelection<Prisma.$TransactionPayload>
/**
 * Model LotteryPool
 * 
 */
export type LotteryPool = $Result.DefaultSelection<Prisma.$LotteryPoolPayload>
/**
 * Model PoolEntry
 * 
 */
export type PoolEntry = $Result.DefaultSelection<Prisma.$PoolEntryPayload>
/**
 * Model Winner
 * 
 */
export type Winner = $Result.DefaultSelection<Prisma.$WinnerPayload>
/**
 * Model AdminLog
 * 
 */
export type AdminLog = $Result.DefaultSelection<Prisma.$AdminLogPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  USER: 'USER',
  ADMIN: 'ADMIN'
};

export type Role = (typeof Role)[keyof typeof Role]


export const TransactionType: {
  DEPOSIT: 'DEPOSIT',
  WITHDRAWAL: 'WITHDRAWAL',
  ENTRY_FEE: 'ENTRY_FEE',
  PRIZE_CREDIT: 'PRIZE_CREDIT'
};

export type TransactionType = (typeof TransactionType)[keyof typeof TransactionType]


export const TransactionStatus: {
  PENDING: 'PENDING',
  COMPLETED: 'COMPLETED',
  FAILED: 'FAILED'
};

export type TransactionStatus = (typeof TransactionStatus)[keyof typeof TransactionStatus]


export const PoolStatus: {
  OPEN: 'OPEN',
  CLOSED: 'CLOSED',
  DRAWN: 'DRAWN',
  CANCELLED: 'CANCELLED'
};

export type PoolStatus = (typeof PoolStatus)[keyof typeof PoolStatus]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type TransactionType = $Enums.TransactionType

export const TransactionType: typeof $Enums.TransactionType

export type TransactionStatus = $Enums.TransactionStatus

export const TransactionStatus: typeof $Enums.TransactionStatus

export type PoolStatus = $Enums.PoolStatus

export const PoolStatus: typeof $Enums.PoolStatus

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
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * Read more in our [docs](https://pris.ly/d/client).
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
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * `prisma.wallet`: Exposes CRUD operations for the **Wallet** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Wallets
    * const wallets = await prisma.wallet.findMany()
    * ```
    */
  get wallet(): Prisma.WalletDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.transaction`: Exposes CRUD operations for the **Transaction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Transactions
    * const transactions = await prisma.transaction.findMany()
    * ```
    */
  get transaction(): Prisma.TransactionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.lotteryPool`: Exposes CRUD operations for the **LotteryPool** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LotteryPools
    * const lotteryPools = await prisma.lotteryPool.findMany()
    * ```
    */
  get lotteryPool(): Prisma.LotteryPoolDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.poolEntry`: Exposes CRUD operations for the **PoolEntry** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PoolEntries
    * const poolEntries = await prisma.poolEntry.findMany()
    * ```
    */
  get poolEntry(): Prisma.PoolEntryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.winner`: Exposes CRUD operations for the **Winner** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Winners
    * const winners = await prisma.winner.findMany()
    * ```
    */
  get winner(): Prisma.WinnerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.adminLog`: Exposes CRUD operations for the **AdminLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AdminLogs
    * const adminLogs = await prisma.adminLog.findMany()
    * ```
    */
  get adminLog(): Prisma.AdminLogDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.2.0
   * Query Engine version: 0c8ef2ce45c83248ab3df073180d5eda9e8be7a3
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    Wallet: 'Wallet',
    Transaction: 'Transaction',
    LotteryPool: 'LotteryPool',
    PoolEntry: 'PoolEntry',
    Winner: 'Winner',
    AdminLog: 'AdminLog'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "wallet" | "transaction" | "lotteryPool" | "poolEntry" | "winner" | "adminLog"
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
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
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
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
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
      Wallet: {
        payload: Prisma.$WalletPayload<ExtArgs>
        fields: Prisma.WalletFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WalletFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WalletFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletPayload>
          }
          findFirst: {
            args: Prisma.WalletFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WalletFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletPayload>
          }
          findMany: {
            args: Prisma.WalletFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletPayload>[]
          }
          create: {
            args: Prisma.WalletCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletPayload>
          }
          createMany: {
            args: Prisma.WalletCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WalletCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletPayload>[]
          }
          delete: {
            args: Prisma.WalletDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletPayload>
          }
          update: {
            args: Prisma.WalletUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletPayload>
          }
          deleteMany: {
            args: Prisma.WalletDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WalletUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WalletUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletPayload>[]
          }
          upsert: {
            args: Prisma.WalletUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletPayload>
          }
          aggregate: {
            args: Prisma.WalletAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWallet>
          }
          groupBy: {
            args: Prisma.WalletGroupByArgs<ExtArgs>
            result: $Utils.Optional<WalletGroupByOutputType>[]
          }
          count: {
            args: Prisma.WalletCountArgs<ExtArgs>
            result: $Utils.Optional<WalletCountAggregateOutputType> | number
          }
        }
      }
      Transaction: {
        payload: Prisma.$TransactionPayload<ExtArgs>
        fields: Prisma.TransactionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TransactionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TransactionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          findFirst: {
            args: Prisma.TransactionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TransactionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          findMany: {
            args: Prisma.TransactionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>[]
          }
          create: {
            args: Prisma.TransactionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          createMany: {
            args: Prisma.TransactionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TransactionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>[]
          }
          delete: {
            args: Prisma.TransactionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          update: {
            args: Prisma.TransactionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          deleteMany: {
            args: Prisma.TransactionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TransactionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TransactionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>[]
          }
          upsert: {
            args: Prisma.TransactionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          aggregate: {
            args: Prisma.TransactionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTransaction>
          }
          groupBy: {
            args: Prisma.TransactionGroupByArgs<ExtArgs>
            result: $Utils.Optional<TransactionGroupByOutputType>[]
          }
          count: {
            args: Prisma.TransactionCountArgs<ExtArgs>
            result: $Utils.Optional<TransactionCountAggregateOutputType> | number
          }
        }
      }
      LotteryPool: {
        payload: Prisma.$LotteryPoolPayload<ExtArgs>
        fields: Prisma.LotteryPoolFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LotteryPoolFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LotteryPoolPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LotteryPoolFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LotteryPoolPayload>
          }
          findFirst: {
            args: Prisma.LotteryPoolFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LotteryPoolPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LotteryPoolFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LotteryPoolPayload>
          }
          findMany: {
            args: Prisma.LotteryPoolFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LotteryPoolPayload>[]
          }
          create: {
            args: Prisma.LotteryPoolCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LotteryPoolPayload>
          }
          createMany: {
            args: Prisma.LotteryPoolCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LotteryPoolCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LotteryPoolPayload>[]
          }
          delete: {
            args: Prisma.LotteryPoolDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LotteryPoolPayload>
          }
          update: {
            args: Prisma.LotteryPoolUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LotteryPoolPayload>
          }
          deleteMany: {
            args: Prisma.LotteryPoolDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LotteryPoolUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LotteryPoolUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LotteryPoolPayload>[]
          }
          upsert: {
            args: Prisma.LotteryPoolUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LotteryPoolPayload>
          }
          aggregate: {
            args: Prisma.LotteryPoolAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLotteryPool>
          }
          groupBy: {
            args: Prisma.LotteryPoolGroupByArgs<ExtArgs>
            result: $Utils.Optional<LotteryPoolGroupByOutputType>[]
          }
          count: {
            args: Prisma.LotteryPoolCountArgs<ExtArgs>
            result: $Utils.Optional<LotteryPoolCountAggregateOutputType> | number
          }
        }
      }
      PoolEntry: {
        payload: Prisma.$PoolEntryPayload<ExtArgs>
        fields: Prisma.PoolEntryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PoolEntryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PoolEntryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PoolEntryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PoolEntryPayload>
          }
          findFirst: {
            args: Prisma.PoolEntryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PoolEntryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PoolEntryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PoolEntryPayload>
          }
          findMany: {
            args: Prisma.PoolEntryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PoolEntryPayload>[]
          }
          create: {
            args: Prisma.PoolEntryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PoolEntryPayload>
          }
          createMany: {
            args: Prisma.PoolEntryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PoolEntryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PoolEntryPayload>[]
          }
          delete: {
            args: Prisma.PoolEntryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PoolEntryPayload>
          }
          update: {
            args: Prisma.PoolEntryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PoolEntryPayload>
          }
          deleteMany: {
            args: Prisma.PoolEntryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PoolEntryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PoolEntryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PoolEntryPayload>[]
          }
          upsert: {
            args: Prisma.PoolEntryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PoolEntryPayload>
          }
          aggregate: {
            args: Prisma.PoolEntryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePoolEntry>
          }
          groupBy: {
            args: Prisma.PoolEntryGroupByArgs<ExtArgs>
            result: $Utils.Optional<PoolEntryGroupByOutputType>[]
          }
          count: {
            args: Prisma.PoolEntryCountArgs<ExtArgs>
            result: $Utils.Optional<PoolEntryCountAggregateOutputType> | number
          }
        }
      }
      Winner: {
        payload: Prisma.$WinnerPayload<ExtArgs>
        fields: Prisma.WinnerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WinnerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WinnerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WinnerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WinnerPayload>
          }
          findFirst: {
            args: Prisma.WinnerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WinnerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WinnerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WinnerPayload>
          }
          findMany: {
            args: Prisma.WinnerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WinnerPayload>[]
          }
          create: {
            args: Prisma.WinnerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WinnerPayload>
          }
          createMany: {
            args: Prisma.WinnerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WinnerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WinnerPayload>[]
          }
          delete: {
            args: Prisma.WinnerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WinnerPayload>
          }
          update: {
            args: Prisma.WinnerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WinnerPayload>
          }
          deleteMany: {
            args: Prisma.WinnerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WinnerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WinnerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WinnerPayload>[]
          }
          upsert: {
            args: Prisma.WinnerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WinnerPayload>
          }
          aggregate: {
            args: Prisma.WinnerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWinner>
          }
          groupBy: {
            args: Prisma.WinnerGroupByArgs<ExtArgs>
            result: $Utils.Optional<WinnerGroupByOutputType>[]
          }
          count: {
            args: Prisma.WinnerCountArgs<ExtArgs>
            result: $Utils.Optional<WinnerCountAggregateOutputType> | number
          }
        }
      }
      AdminLog: {
        payload: Prisma.$AdminLogPayload<ExtArgs>
        fields: Prisma.AdminLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdminLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdminLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminLogPayload>
          }
          findFirst: {
            args: Prisma.AdminLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdminLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminLogPayload>
          }
          findMany: {
            args: Prisma.AdminLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminLogPayload>[]
          }
          create: {
            args: Prisma.AdminLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminLogPayload>
          }
          createMany: {
            args: Prisma.AdminLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AdminLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminLogPayload>[]
          }
          delete: {
            args: Prisma.AdminLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminLogPayload>
          }
          update: {
            args: Prisma.AdminLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminLogPayload>
          }
          deleteMany: {
            args: Prisma.AdminLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AdminLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AdminLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminLogPayload>[]
          }
          upsert: {
            args: Prisma.AdminLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminLogPayload>
          }
          aggregate: {
            args: Prisma.AdminLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdminLog>
          }
          groupBy: {
            args: Prisma.AdminLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdminLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.AdminLogCountArgs<ExtArgs>
            result: $Utils.Optional<AdminLogCountAggregateOutputType> | number
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
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
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
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    wallet?: WalletOmit
    transaction?: TransactionOmit
    lotteryPool?: LotteryPoolOmit
    poolEntry?: PoolEntryOmit
    winner?: WinnerOmit
    adminLog?: AdminLogOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
    entries: number
    wins: number
    adminLogs: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    entries?: boolean | UserCountOutputTypeCountEntriesArgs
    wins?: boolean | UserCountOutputTypeCountWinsArgs
    adminLogs?: boolean | UserCountOutputTypeCountAdminLogsArgs
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
  export type UserCountOutputTypeCountEntriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PoolEntryWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountWinsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WinnerWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAdminLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdminLogWhereInput
  }


  /**
   * Count Type WalletCountOutputType
   */

  export type WalletCountOutputType = {
    transactions: number
  }

  export type WalletCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transactions?: boolean | WalletCountOutputTypeCountTransactionsArgs
  }

  // Custom InputTypes
  /**
   * WalletCountOutputType without action
   */
  export type WalletCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WalletCountOutputType
     */
    select?: WalletCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * WalletCountOutputType without action
   */
  export type WalletCountOutputTypeCountTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
  }


  /**
   * Count Type LotteryPoolCountOutputType
   */

  export type LotteryPoolCountOutputType = {
    entries: number
    winners: number
  }

  export type LotteryPoolCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    entries?: boolean | LotteryPoolCountOutputTypeCountEntriesArgs
    winners?: boolean | LotteryPoolCountOutputTypeCountWinnersArgs
  }

  // Custom InputTypes
  /**
   * LotteryPoolCountOutputType without action
   */
  export type LotteryPoolCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LotteryPoolCountOutputType
     */
    select?: LotteryPoolCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LotteryPoolCountOutputType without action
   */
  export type LotteryPoolCountOutputTypeCountEntriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PoolEntryWhereInput
  }

  /**
   * LotteryPoolCountOutputType without action
   */
  export type LotteryPoolCountOutputTypeCountWinnersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WinnerWhereInput
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
    phone: string | null
    role: $Enums.Role | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    phone: string | null
    role: $Enums.Role | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    phone: number
    role: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    phone?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    phone?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    phone?: true
    role?: true
    createdAt?: true
    updatedAt?: true
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
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    phone: string
    role: $Enums.Role
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
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
    id?: boolean
    phone?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    wallet?: boolean | User$walletArgs<ExtArgs>
    entries?: boolean | User$entriesArgs<ExtArgs>
    wins?: boolean | User$winsArgs<ExtArgs>
    adminLogs?: boolean | User$adminLogsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    phone?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    phone?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    phone?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "phone" | "role" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    wallet?: boolean | User$walletArgs<ExtArgs>
    entries?: boolean | User$entriesArgs<ExtArgs>
    wins?: boolean | User$winsArgs<ExtArgs>
    adminLogs?: boolean | User$adminLogsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      wallet: Prisma.$WalletPayload<ExtArgs> | null
      entries: Prisma.$PoolEntryPayload<ExtArgs>[]
      wins: Prisma.$WinnerPayload<ExtArgs>[]
      adminLogs: Prisma.$AdminLogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      phone: string
      role: $Enums.Role
      createdAt: Date
      updatedAt: Date
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
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
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
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

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
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

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
    wallet<T extends User$walletArgs<ExtArgs> = {}>(args?: Subset<T, User$walletArgs<ExtArgs>>): Prisma__WalletClient<$Result.GetResult<Prisma.$WalletPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    entries<T extends User$entriesArgs<ExtArgs> = {}>(args?: Subset<T, User$entriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PoolEntryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    wins<T extends User$winsArgs<ExtArgs> = {}>(args?: Subset<T, User$winsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WinnerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    adminLogs<T extends User$adminLogsArgs<ExtArgs> = {}>(args?: Subset<T, User$adminLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly id: FieldRef<"User", 'String'>
    readonly phone: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
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
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
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
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
   * User.wallet
   */
  export type User$walletArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wallet
     */
    select?: WalletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wallet
     */
    omit?: WalletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletInclude<ExtArgs> | null
    where?: WalletWhereInput
  }

  /**
   * User.entries
   */
  export type User$entriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PoolEntry
     */
    select?: PoolEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PoolEntry
     */
    omit?: PoolEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PoolEntryInclude<ExtArgs> | null
    where?: PoolEntryWhereInput
    orderBy?: PoolEntryOrderByWithRelationInput | PoolEntryOrderByWithRelationInput[]
    cursor?: PoolEntryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PoolEntryScalarFieldEnum | PoolEntryScalarFieldEnum[]
  }

  /**
   * User.wins
   */
  export type User$winsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Winner
     */
    select?: WinnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Winner
     */
    omit?: WinnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WinnerInclude<ExtArgs> | null
    where?: WinnerWhereInput
    orderBy?: WinnerOrderByWithRelationInput | WinnerOrderByWithRelationInput[]
    cursor?: WinnerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WinnerScalarFieldEnum | WinnerScalarFieldEnum[]
  }

  /**
   * User.adminLogs
   */
  export type User$adminLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminLog
     */
    select?: AdminLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminLog
     */
    omit?: AdminLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminLogInclude<ExtArgs> | null
    where?: AdminLogWhereInput
    orderBy?: AdminLogOrderByWithRelationInput | AdminLogOrderByWithRelationInput[]
    cursor?: AdminLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AdminLogScalarFieldEnum | AdminLogScalarFieldEnum[]
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
   * Model Wallet
   */

  export type AggregateWallet = {
    _count: WalletCountAggregateOutputType | null
    _avg: WalletAvgAggregateOutputType | null
    _sum: WalletSumAggregateOutputType | null
    _min: WalletMinAggregateOutputType | null
    _max: WalletMaxAggregateOutputType | null
  }

  export type WalletAvgAggregateOutputType = {
    balance: number | null
  }

  export type WalletSumAggregateOutputType = {
    balance: number | null
  }

  export type WalletMinAggregateOutputType = {
    id: string | null
    userId: string | null
    balance: number | null
    currency: string | null
    updatedAt: Date | null
  }

  export type WalletMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    balance: number | null
    currency: string | null
    updatedAt: Date | null
  }

  export type WalletCountAggregateOutputType = {
    id: number
    userId: number
    balance: number
    currency: number
    updatedAt: number
    _all: number
  }


  export type WalletAvgAggregateInputType = {
    balance?: true
  }

  export type WalletSumAggregateInputType = {
    balance?: true
  }

  export type WalletMinAggregateInputType = {
    id?: true
    userId?: true
    balance?: true
    currency?: true
    updatedAt?: true
  }

  export type WalletMaxAggregateInputType = {
    id?: true
    userId?: true
    balance?: true
    currency?: true
    updatedAt?: true
  }

  export type WalletCountAggregateInputType = {
    id?: true
    userId?: true
    balance?: true
    currency?: true
    updatedAt?: true
    _all?: true
  }

  export type WalletAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Wallet to aggregate.
     */
    where?: WalletWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Wallets to fetch.
     */
    orderBy?: WalletOrderByWithRelationInput | WalletOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WalletWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Wallets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Wallets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Wallets
    **/
    _count?: true | WalletCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WalletAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WalletSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WalletMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WalletMaxAggregateInputType
  }

  export type GetWalletAggregateType<T extends WalletAggregateArgs> = {
        [P in keyof T & keyof AggregateWallet]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWallet[P]>
      : GetScalarType<T[P], AggregateWallet[P]>
  }




  export type WalletGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WalletWhereInput
    orderBy?: WalletOrderByWithAggregationInput | WalletOrderByWithAggregationInput[]
    by: WalletScalarFieldEnum[] | WalletScalarFieldEnum
    having?: WalletScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WalletCountAggregateInputType | true
    _avg?: WalletAvgAggregateInputType
    _sum?: WalletSumAggregateInputType
    _min?: WalletMinAggregateInputType
    _max?: WalletMaxAggregateInputType
  }

  export type WalletGroupByOutputType = {
    id: string
    userId: string
    balance: number
    currency: string
    updatedAt: Date
    _count: WalletCountAggregateOutputType | null
    _avg: WalletAvgAggregateOutputType | null
    _sum: WalletSumAggregateOutputType | null
    _min: WalletMinAggregateOutputType | null
    _max: WalletMaxAggregateOutputType | null
  }

  type GetWalletGroupByPayload<T extends WalletGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WalletGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WalletGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WalletGroupByOutputType[P]>
            : GetScalarType<T[P], WalletGroupByOutputType[P]>
        }
      >
    >


  export type WalletSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    balance?: boolean
    currency?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    transactions?: boolean | Wallet$transactionsArgs<ExtArgs>
    _count?: boolean | WalletCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["wallet"]>

  export type WalletSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    balance?: boolean
    currency?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["wallet"]>

  export type WalletSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    balance?: boolean
    currency?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["wallet"]>

  export type WalletSelectScalar = {
    id?: boolean
    userId?: boolean
    balance?: boolean
    currency?: boolean
    updatedAt?: boolean
  }

  export type WalletOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "balance" | "currency" | "updatedAt", ExtArgs["result"]["wallet"]>
  export type WalletInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    transactions?: boolean | Wallet$transactionsArgs<ExtArgs>
    _count?: boolean | WalletCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type WalletIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type WalletIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $WalletPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Wallet"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      transactions: Prisma.$TransactionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      balance: number
      currency: string
      updatedAt: Date
    }, ExtArgs["result"]["wallet"]>
    composites: {}
  }

  type WalletGetPayload<S extends boolean | null | undefined | WalletDefaultArgs> = $Result.GetResult<Prisma.$WalletPayload, S>

  type WalletCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WalletFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WalletCountAggregateInputType | true
    }

  export interface WalletDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Wallet'], meta: { name: 'Wallet' } }
    /**
     * Find zero or one Wallet that matches the filter.
     * @param {WalletFindUniqueArgs} args - Arguments to find a Wallet
     * @example
     * // Get one Wallet
     * const wallet = await prisma.wallet.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WalletFindUniqueArgs>(args: SelectSubset<T, WalletFindUniqueArgs<ExtArgs>>): Prisma__WalletClient<$Result.GetResult<Prisma.$WalletPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Wallet that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WalletFindUniqueOrThrowArgs} args - Arguments to find a Wallet
     * @example
     * // Get one Wallet
     * const wallet = await prisma.wallet.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WalletFindUniqueOrThrowArgs>(args: SelectSubset<T, WalletFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WalletClient<$Result.GetResult<Prisma.$WalletPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Wallet that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalletFindFirstArgs} args - Arguments to find a Wallet
     * @example
     * // Get one Wallet
     * const wallet = await prisma.wallet.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WalletFindFirstArgs>(args?: SelectSubset<T, WalletFindFirstArgs<ExtArgs>>): Prisma__WalletClient<$Result.GetResult<Prisma.$WalletPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Wallet that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalletFindFirstOrThrowArgs} args - Arguments to find a Wallet
     * @example
     * // Get one Wallet
     * const wallet = await prisma.wallet.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WalletFindFirstOrThrowArgs>(args?: SelectSubset<T, WalletFindFirstOrThrowArgs<ExtArgs>>): Prisma__WalletClient<$Result.GetResult<Prisma.$WalletPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Wallets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalletFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Wallets
     * const wallets = await prisma.wallet.findMany()
     * 
     * // Get first 10 Wallets
     * const wallets = await prisma.wallet.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const walletWithIdOnly = await prisma.wallet.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WalletFindManyArgs>(args?: SelectSubset<T, WalletFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WalletPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Wallet.
     * @param {WalletCreateArgs} args - Arguments to create a Wallet.
     * @example
     * // Create one Wallet
     * const Wallet = await prisma.wallet.create({
     *   data: {
     *     // ... data to create a Wallet
     *   }
     * })
     * 
     */
    create<T extends WalletCreateArgs>(args: SelectSubset<T, WalletCreateArgs<ExtArgs>>): Prisma__WalletClient<$Result.GetResult<Prisma.$WalletPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Wallets.
     * @param {WalletCreateManyArgs} args - Arguments to create many Wallets.
     * @example
     * // Create many Wallets
     * const wallet = await prisma.wallet.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WalletCreateManyArgs>(args?: SelectSubset<T, WalletCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Wallets and returns the data saved in the database.
     * @param {WalletCreateManyAndReturnArgs} args - Arguments to create many Wallets.
     * @example
     * // Create many Wallets
     * const wallet = await prisma.wallet.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Wallets and only return the `id`
     * const walletWithIdOnly = await prisma.wallet.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WalletCreateManyAndReturnArgs>(args?: SelectSubset<T, WalletCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WalletPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Wallet.
     * @param {WalletDeleteArgs} args - Arguments to delete one Wallet.
     * @example
     * // Delete one Wallet
     * const Wallet = await prisma.wallet.delete({
     *   where: {
     *     // ... filter to delete one Wallet
     *   }
     * })
     * 
     */
    delete<T extends WalletDeleteArgs>(args: SelectSubset<T, WalletDeleteArgs<ExtArgs>>): Prisma__WalletClient<$Result.GetResult<Prisma.$WalletPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Wallet.
     * @param {WalletUpdateArgs} args - Arguments to update one Wallet.
     * @example
     * // Update one Wallet
     * const wallet = await prisma.wallet.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WalletUpdateArgs>(args: SelectSubset<T, WalletUpdateArgs<ExtArgs>>): Prisma__WalletClient<$Result.GetResult<Prisma.$WalletPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Wallets.
     * @param {WalletDeleteManyArgs} args - Arguments to filter Wallets to delete.
     * @example
     * // Delete a few Wallets
     * const { count } = await prisma.wallet.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WalletDeleteManyArgs>(args?: SelectSubset<T, WalletDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Wallets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalletUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Wallets
     * const wallet = await prisma.wallet.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WalletUpdateManyArgs>(args: SelectSubset<T, WalletUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Wallets and returns the data updated in the database.
     * @param {WalletUpdateManyAndReturnArgs} args - Arguments to update many Wallets.
     * @example
     * // Update many Wallets
     * const wallet = await prisma.wallet.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Wallets and only return the `id`
     * const walletWithIdOnly = await prisma.wallet.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends WalletUpdateManyAndReturnArgs>(args: SelectSubset<T, WalletUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WalletPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Wallet.
     * @param {WalletUpsertArgs} args - Arguments to update or create a Wallet.
     * @example
     * // Update or create a Wallet
     * const wallet = await prisma.wallet.upsert({
     *   create: {
     *     // ... data to create a Wallet
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Wallet we want to update
     *   }
     * })
     */
    upsert<T extends WalletUpsertArgs>(args: SelectSubset<T, WalletUpsertArgs<ExtArgs>>): Prisma__WalletClient<$Result.GetResult<Prisma.$WalletPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Wallets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalletCountArgs} args - Arguments to filter Wallets to count.
     * @example
     * // Count the number of Wallets
     * const count = await prisma.wallet.count({
     *   where: {
     *     // ... the filter for the Wallets we want to count
     *   }
     * })
    **/
    count<T extends WalletCountArgs>(
      args?: Subset<T, WalletCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WalletCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Wallet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalletAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WalletAggregateArgs>(args: Subset<T, WalletAggregateArgs>): Prisma.PrismaPromise<GetWalletAggregateType<T>>

    /**
     * Group by Wallet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalletGroupByArgs} args - Group by arguments.
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
      T extends WalletGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WalletGroupByArgs['orderBy'] }
        : { orderBy?: WalletGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WalletGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWalletGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Wallet model
   */
  readonly fields: WalletFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Wallet.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WalletClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    transactions<T extends Wallet$transactionsArgs<ExtArgs> = {}>(args?: Subset<T, Wallet$transactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Wallet model
   */
  interface WalletFieldRefs {
    readonly id: FieldRef<"Wallet", 'String'>
    readonly userId: FieldRef<"Wallet", 'String'>
    readonly balance: FieldRef<"Wallet", 'Float'>
    readonly currency: FieldRef<"Wallet", 'String'>
    readonly updatedAt: FieldRef<"Wallet", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Wallet findUnique
   */
  export type WalletFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wallet
     */
    select?: WalletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wallet
     */
    omit?: WalletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletInclude<ExtArgs> | null
    /**
     * Filter, which Wallet to fetch.
     */
    where: WalletWhereUniqueInput
  }

  /**
   * Wallet findUniqueOrThrow
   */
  export type WalletFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wallet
     */
    select?: WalletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wallet
     */
    omit?: WalletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletInclude<ExtArgs> | null
    /**
     * Filter, which Wallet to fetch.
     */
    where: WalletWhereUniqueInput
  }

  /**
   * Wallet findFirst
   */
  export type WalletFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wallet
     */
    select?: WalletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wallet
     */
    omit?: WalletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletInclude<ExtArgs> | null
    /**
     * Filter, which Wallet to fetch.
     */
    where?: WalletWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Wallets to fetch.
     */
    orderBy?: WalletOrderByWithRelationInput | WalletOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Wallets.
     */
    cursor?: WalletWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Wallets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Wallets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Wallets.
     */
    distinct?: WalletScalarFieldEnum | WalletScalarFieldEnum[]
  }

  /**
   * Wallet findFirstOrThrow
   */
  export type WalletFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wallet
     */
    select?: WalletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wallet
     */
    omit?: WalletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletInclude<ExtArgs> | null
    /**
     * Filter, which Wallet to fetch.
     */
    where?: WalletWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Wallets to fetch.
     */
    orderBy?: WalletOrderByWithRelationInput | WalletOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Wallets.
     */
    cursor?: WalletWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Wallets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Wallets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Wallets.
     */
    distinct?: WalletScalarFieldEnum | WalletScalarFieldEnum[]
  }

  /**
   * Wallet findMany
   */
  export type WalletFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wallet
     */
    select?: WalletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wallet
     */
    omit?: WalletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletInclude<ExtArgs> | null
    /**
     * Filter, which Wallets to fetch.
     */
    where?: WalletWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Wallets to fetch.
     */
    orderBy?: WalletOrderByWithRelationInput | WalletOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Wallets.
     */
    cursor?: WalletWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Wallets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Wallets.
     */
    skip?: number
    distinct?: WalletScalarFieldEnum | WalletScalarFieldEnum[]
  }

  /**
   * Wallet create
   */
  export type WalletCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wallet
     */
    select?: WalletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wallet
     */
    omit?: WalletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletInclude<ExtArgs> | null
    /**
     * The data needed to create a Wallet.
     */
    data: XOR<WalletCreateInput, WalletUncheckedCreateInput>
  }

  /**
   * Wallet createMany
   */
  export type WalletCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Wallets.
     */
    data: WalletCreateManyInput | WalletCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Wallet createManyAndReturn
   */
  export type WalletCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wallet
     */
    select?: WalletSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Wallet
     */
    omit?: WalletOmit<ExtArgs> | null
    /**
     * The data used to create many Wallets.
     */
    data: WalletCreateManyInput | WalletCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Wallet update
   */
  export type WalletUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wallet
     */
    select?: WalletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wallet
     */
    omit?: WalletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletInclude<ExtArgs> | null
    /**
     * The data needed to update a Wallet.
     */
    data: XOR<WalletUpdateInput, WalletUncheckedUpdateInput>
    /**
     * Choose, which Wallet to update.
     */
    where: WalletWhereUniqueInput
  }

  /**
   * Wallet updateMany
   */
  export type WalletUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Wallets.
     */
    data: XOR<WalletUpdateManyMutationInput, WalletUncheckedUpdateManyInput>
    /**
     * Filter which Wallets to update
     */
    where?: WalletWhereInput
    /**
     * Limit how many Wallets to update.
     */
    limit?: number
  }

  /**
   * Wallet updateManyAndReturn
   */
  export type WalletUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wallet
     */
    select?: WalletSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Wallet
     */
    omit?: WalletOmit<ExtArgs> | null
    /**
     * The data used to update Wallets.
     */
    data: XOR<WalletUpdateManyMutationInput, WalletUncheckedUpdateManyInput>
    /**
     * Filter which Wallets to update
     */
    where?: WalletWhereInput
    /**
     * Limit how many Wallets to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Wallet upsert
   */
  export type WalletUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wallet
     */
    select?: WalletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wallet
     */
    omit?: WalletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletInclude<ExtArgs> | null
    /**
     * The filter to search for the Wallet to update in case it exists.
     */
    where: WalletWhereUniqueInput
    /**
     * In case the Wallet found by the `where` argument doesn't exist, create a new Wallet with this data.
     */
    create: XOR<WalletCreateInput, WalletUncheckedCreateInput>
    /**
     * In case the Wallet was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WalletUpdateInput, WalletUncheckedUpdateInput>
  }

  /**
   * Wallet delete
   */
  export type WalletDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wallet
     */
    select?: WalletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wallet
     */
    omit?: WalletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletInclude<ExtArgs> | null
    /**
     * Filter which Wallet to delete.
     */
    where: WalletWhereUniqueInput
  }

  /**
   * Wallet deleteMany
   */
  export type WalletDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Wallets to delete
     */
    where?: WalletWhereInput
    /**
     * Limit how many Wallets to delete.
     */
    limit?: number
  }

  /**
   * Wallet.transactions
   */
  export type Wallet$transactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    cursor?: TransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Wallet without action
   */
  export type WalletDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wallet
     */
    select?: WalletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wallet
     */
    omit?: WalletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletInclude<ExtArgs> | null
  }


  /**
   * Model Transaction
   */

  export type AggregateTransaction = {
    _count: TransactionCountAggregateOutputType | null
    _avg: TransactionAvgAggregateOutputType | null
    _sum: TransactionSumAggregateOutputType | null
    _min: TransactionMinAggregateOutputType | null
    _max: TransactionMaxAggregateOutputType | null
  }

  export type TransactionAvgAggregateOutputType = {
    amount: number | null
  }

  export type TransactionSumAggregateOutputType = {
    amount: number | null
  }

  export type TransactionMinAggregateOutputType = {
    id: string | null
    walletId: string | null
    amount: number | null
    type: $Enums.TransactionType | null
    status: $Enums.TransactionStatus | null
    reference: string | null
    createdAt: Date | null
  }

  export type TransactionMaxAggregateOutputType = {
    id: string | null
    walletId: string | null
    amount: number | null
    type: $Enums.TransactionType | null
    status: $Enums.TransactionStatus | null
    reference: string | null
    createdAt: Date | null
  }

  export type TransactionCountAggregateOutputType = {
    id: number
    walletId: number
    amount: number
    type: number
    status: number
    reference: number
    createdAt: number
    _all: number
  }


  export type TransactionAvgAggregateInputType = {
    amount?: true
  }

  export type TransactionSumAggregateInputType = {
    amount?: true
  }

  export type TransactionMinAggregateInputType = {
    id?: true
    walletId?: true
    amount?: true
    type?: true
    status?: true
    reference?: true
    createdAt?: true
  }

  export type TransactionMaxAggregateInputType = {
    id?: true
    walletId?: true
    amount?: true
    type?: true
    status?: true
    reference?: true
    createdAt?: true
  }

  export type TransactionCountAggregateInputType = {
    id?: true
    walletId?: true
    amount?: true
    type?: true
    status?: true
    reference?: true
    createdAt?: true
    _all?: true
  }

  export type TransactionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transaction to aggregate.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Transactions
    **/
    _count?: true | TransactionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TransactionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TransactionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TransactionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TransactionMaxAggregateInputType
  }

  export type GetTransactionAggregateType<T extends TransactionAggregateArgs> = {
        [P in keyof T & keyof AggregateTransaction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTransaction[P]>
      : GetScalarType<T[P], AggregateTransaction[P]>
  }




  export type TransactionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithAggregationInput | TransactionOrderByWithAggregationInput[]
    by: TransactionScalarFieldEnum[] | TransactionScalarFieldEnum
    having?: TransactionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TransactionCountAggregateInputType | true
    _avg?: TransactionAvgAggregateInputType
    _sum?: TransactionSumAggregateInputType
    _min?: TransactionMinAggregateInputType
    _max?: TransactionMaxAggregateInputType
  }

  export type TransactionGroupByOutputType = {
    id: string
    walletId: string
    amount: number
    type: $Enums.TransactionType
    status: $Enums.TransactionStatus
    reference: string | null
    createdAt: Date
    _count: TransactionCountAggregateOutputType | null
    _avg: TransactionAvgAggregateOutputType | null
    _sum: TransactionSumAggregateOutputType | null
    _min: TransactionMinAggregateOutputType | null
    _max: TransactionMaxAggregateOutputType | null
  }

  type GetTransactionGroupByPayload<T extends TransactionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TransactionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TransactionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TransactionGroupByOutputType[P]>
            : GetScalarType<T[P], TransactionGroupByOutputType[P]>
        }
      >
    >


  export type TransactionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    walletId?: boolean
    amount?: boolean
    type?: boolean
    status?: boolean
    reference?: boolean
    createdAt?: boolean
    wallet?: boolean | WalletDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transaction"]>

  export type TransactionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    walletId?: boolean
    amount?: boolean
    type?: boolean
    status?: boolean
    reference?: boolean
    createdAt?: boolean
    wallet?: boolean | WalletDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transaction"]>

  export type TransactionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    walletId?: boolean
    amount?: boolean
    type?: boolean
    status?: boolean
    reference?: boolean
    createdAt?: boolean
    wallet?: boolean | WalletDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transaction"]>

  export type TransactionSelectScalar = {
    id?: boolean
    walletId?: boolean
    amount?: boolean
    type?: boolean
    status?: boolean
    reference?: boolean
    createdAt?: boolean
  }

  export type TransactionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "walletId" | "amount" | "type" | "status" | "reference" | "createdAt", ExtArgs["result"]["transaction"]>
  export type TransactionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    wallet?: boolean | WalletDefaultArgs<ExtArgs>
  }
  export type TransactionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    wallet?: boolean | WalletDefaultArgs<ExtArgs>
  }
  export type TransactionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    wallet?: boolean | WalletDefaultArgs<ExtArgs>
  }

  export type $TransactionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Transaction"
    objects: {
      wallet: Prisma.$WalletPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      walletId: string
      amount: number
      type: $Enums.TransactionType
      status: $Enums.TransactionStatus
      reference: string | null
      createdAt: Date
    }, ExtArgs["result"]["transaction"]>
    composites: {}
  }

  type TransactionGetPayload<S extends boolean | null | undefined | TransactionDefaultArgs> = $Result.GetResult<Prisma.$TransactionPayload, S>

  type TransactionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TransactionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TransactionCountAggregateInputType | true
    }

  export interface TransactionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Transaction'], meta: { name: 'Transaction' } }
    /**
     * Find zero or one Transaction that matches the filter.
     * @param {TransactionFindUniqueArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TransactionFindUniqueArgs>(args: SelectSubset<T, TransactionFindUniqueArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Transaction that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TransactionFindUniqueOrThrowArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TransactionFindUniqueOrThrowArgs>(args: SelectSubset<T, TransactionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transaction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindFirstArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TransactionFindFirstArgs>(args?: SelectSubset<T, TransactionFindFirstArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transaction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindFirstOrThrowArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TransactionFindFirstOrThrowArgs>(args?: SelectSubset<T, TransactionFindFirstOrThrowArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Transactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Transactions
     * const transactions = await prisma.transaction.findMany()
     * 
     * // Get first 10 Transactions
     * const transactions = await prisma.transaction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const transactionWithIdOnly = await prisma.transaction.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TransactionFindManyArgs>(args?: SelectSubset<T, TransactionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Transaction.
     * @param {TransactionCreateArgs} args - Arguments to create a Transaction.
     * @example
     * // Create one Transaction
     * const Transaction = await prisma.transaction.create({
     *   data: {
     *     // ... data to create a Transaction
     *   }
     * })
     * 
     */
    create<T extends TransactionCreateArgs>(args: SelectSubset<T, TransactionCreateArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Transactions.
     * @param {TransactionCreateManyArgs} args - Arguments to create many Transactions.
     * @example
     * // Create many Transactions
     * const transaction = await prisma.transaction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TransactionCreateManyArgs>(args?: SelectSubset<T, TransactionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Transactions and returns the data saved in the database.
     * @param {TransactionCreateManyAndReturnArgs} args - Arguments to create many Transactions.
     * @example
     * // Create many Transactions
     * const transaction = await prisma.transaction.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Transactions and only return the `id`
     * const transactionWithIdOnly = await prisma.transaction.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TransactionCreateManyAndReturnArgs>(args?: SelectSubset<T, TransactionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Transaction.
     * @param {TransactionDeleteArgs} args - Arguments to delete one Transaction.
     * @example
     * // Delete one Transaction
     * const Transaction = await prisma.transaction.delete({
     *   where: {
     *     // ... filter to delete one Transaction
     *   }
     * })
     * 
     */
    delete<T extends TransactionDeleteArgs>(args: SelectSubset<T, TransactionDeleteArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Transaction.
     * @param {TransactionUpdateArgs} args - Arguments to update one Transaction.
     * @example
     * // Update one Transaction
     * const transaction = await prisma.transaction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TransactionUpdateArgs>(args: SelectSubset<T, TransactionUpdateArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Transactions.
     * @param {TransactionDeleteManyArgs} args - Arguments to filter Transactions to delete.
     * @example
     * // Delete a few Transactions
     * const { count } = await prisma.transaction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TransactionDeleteManyArgs>(args?: SelectSubset<T, TransactionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Transactions
     * const transaction = await prisma.transaction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TransactionUpdateManyArgs>(args: SelectSubset<T, TransactionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transactions and returns the data updated in the database.
     * @param {TransactionUpdateManyAndReturnArgs} args - Arguments to update many Transactions.
     * @example
     * // Update many Transactions
     * const transaction = await prisma.transaction.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Transactions and only return the `id`
     * const transactionWithIdOnly = await prisma.transaction.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TransactionUpdateManyAndReturnArgs>(args: SelectSubset<T, TransactionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Transaction.
     * @param {TransactionUpsertArgs} args - Arguments to update or create a Transaction.
     * @example
     * // Update or create a Transaction
     * const transaction = await prisma.transaction.upsert({
     *   create: {
     *     // ... data to create a Transaction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Transaction we want to update
     *   }
     * })
     */
    upsert<T extends TransactionUpsertArgs>(args: SelectSubset<T, TransactionUpsertArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionCountArgs} args - Arguments to filter Transactions to count.
     * @example
     * // Count the number of Transactions
     * const count = await prisma.transaction.count({
     *   where: {
     *     // ... the filter for the Transactions we want to count
     *   }
     * })
    **/
    count<T extends TransactionCountArgs>(
      args?: Subset<T, TransactionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TransactionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Transaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TransactionAggregateArgs>(args: Subset<T, TransactionAggregateArgs>): Prisma.PrismaPromise<GetTransactionAggregateType<T>>

    /**
     * Group by Transaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionGroupByArgs} args - Group by arguments.
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
      T extends TransactionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TransactionGroupByArgs['orderBy'] }
        : { orderBy?: TransactionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TransactionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTransactionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Transaction model
   */
  readonly fields: TransactionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Transaction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TransactionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    wallet<T extends WalletDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WalletDefaultArgs<ExtArgs>>): Prisma__WalletClient<$Result.GetResult<Prisma.$WalletPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Transaction model
   */
  interface TransactionFieldRefs {
    readonly id: FieldRef<"Transaction", 'String'>
    readonly walletId: FieldRef<"Transaction", 'String'>
    readonly amount: FieldRef<"Transaction", 'Float'>
    readonly type: FieldRef<"Transaction", 'TransactionType'>
    readonly status: FieldRef<"Transaction", 'TransactionStatus'>
    readonly reference: FieldRef<"Transaction", 'String'>
    readonly createdAt: FieldRef<"Transaction", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Transaction findUnique
   */
  export type TransactionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction findUniqueOrThrow
   */
  export type TransactionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction findFirst
   */
  export type TransactionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transactions.
     */
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Transaction findFirstOrThrow
   */
  export type TransactionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transactions.
     */
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Transaction findMany
   */
  export type TransactionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transactions to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Transaction create
   */
  export type TransactionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The data needed to create a Transaction.
     */
    data: XOR<TransactionCreateInput, TransactionUncheckedCreateInput>
  }

  /**
   * Transaction createMany
   */
  export type TransactionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Transactions.
     */
    data: TransactionCreateManyInput | TransactionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Transaction createManyAndReturn
   */
  export type TransactionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * The data used to create many Transactions.
     */
    data: TransactionCreateManyInput | TransactionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Transaction update
   */
  export type TransactionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The data needed to update a Transaction.
     */
    data: XOR<TransactionUpdateInput, TransactionUncheckedUpdateInput>
    /**
     * Choose, which Transaction to update.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction updateMany
   */
  export type TransactionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Transactions.
     */
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyInput>
    /**
     * Filter which Transactions to update
     */
    where?: TransactionWhereInput
    /**
     * Limit how many Transactions to update.
     */
    limit?: number
  }

  /**
   * Transaction updateManyAndReturn
   */
  export type TransactionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * The data used to update Transactions.
     */
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyInput>
    /**
     * Filter which Transactions to update
     */
    where?: TransactionWhereInput
    /**
     * Limit how many Transactions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Transaction upsert
   */
  export type TransactionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The filter to search for the Transaction to update in case it exists.
     */
    where: TransactionWhereUniqueInput
    /**
     * In case the Transaction found by the `where` argument doesn't exist, create a new Transaction with this data.
     */
    create: XOR<TransactionCreateInput, TransactionUncheckedCreateInput>
    /**
     * In case the Transaction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TransactionUpdateInput, TransactionUncheckedUpdateInput>
  }

  /**
   * Transaction delete
   */
  export type TransactionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter which Transaction to delete.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction deleteMany
   */
  export type TransactionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transactions to delete
     */
    where?: TransactionWhereInput
    /**
     * Limit how many Transactions to delete.
     */
    limit?: number
  }

  /**
   * Transaction without action
   */
  export type TransactionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
  }


  /**
   * Model LotteryPool
   */

  export type AggregateLotteryPool = {
    _count: LotteryPoolCountAggregateOutputType | null
    _avg: LotteryPoolAvgAggregateOutputType | null
    _sum: LotteryPoolSumAggregateOutputType | null
    _min: LotteryPoolMinAggregateOutputType | null
    _max: LotteryPoolMaxAggregateOutputType | null
  }

  export type LotteryPoolAvgAggregateOutputType = {
    pricePerEntry: number | null
    maxSlots: number | null
    filledSlots: number | null
  }

  export type LotteryPoolSumAggregateOutputType = {
    pricePerEntry: number | null
    maxSlots: number | null
    filledSlots: number | null
  }

  export type LotteryPoolMinAggregateOutputType = {
    id: string | null
    productId: string | null
    productName: string | null
    productImage: string | null
    pricePerEntry: number | null
    maxSlots: number | null
    filledSlots: number | null
    status: $Enums.PoolStatus | null
    startDate: Date | null
    endDate: Date | null
    drawTime: Date | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LotteryPoolMaxAggregateOutputType = {
    id: string | null
    productId: string | null
    productName: string | null
    productImage: string | null
    pricePerEntry: number | null
    maxSlots: number | null
    filledSlots: number | null
    status: $Enums.PoolStatus | null
    startDate: Date | null
    endDate: Date | null
    drawTime: Date | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LotteryPoolCountAggregateOutputType = {
    id: number
    productId: number
    productName: number
    productImage: number
    pricePerEntry: number
    maxSlots: number
    filledSlots: number
    status: number
    startDate: number
    endDate: number
    drawTime: number
    description: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type LotteryPoolAvgAggregateInputType = {
    pricePerEntry?: true
    maxSlots?: true
    filledSlots?: true
  }

  export type LotteryPoolSumAggregateInputType = {
    pricePerEntry?: true
    maxSlots?: true
    filledSlots?: true
  }

  export type LotteryPoolMinAggregateInputType = {
    id?: true
    productId?: true
    productName?: true
    productImage?: true
    pricePerEntry?: true
    maxSlots?: true
    filledSlots?: true
    status?: true
    startDate?: true
    endDate?: true
    drawTime?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LotteryPoolMaxAggregateInputType = {
    id?: true
    productId?: true
    productName?: true
    productImage?: true
    pricePerEntry?: true
    maxSlots?: true
    filledSlots?: true
    status?: true
    startDate?: true
    endDate?: true
    drawTime?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LotteryPoolCountAggregateInputType = {
    id?: true
    productId?: true
    productName?: true
    productImage?: true
    pricePerEntry?: true
    maxSlots?: true
    filledSlots?: true
    status?: true
    startDate?: true
    endDate?: true
    drawTime?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type LotteryPoolAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LotteryPool to aggregate.
     */
    where?: LotteryPoolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LotteryPools to fetch.
     */
    orderBy?: LotteryPoolOrderByWithRelationInput | LotteryPoolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LotteryPoolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LotteryPools from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LotteryPools.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LotteryPools
    **/
    _count?: true | LotteryPoolCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LotteryPoolAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LotteryPoolSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LotteryPoolMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LotteryPoolMaxAggregateInputType
  }

  export type GetLotteryPoolAggregateType<T extends LotteryPoolAggregateArgs> = {
        [P in keyof T & keyof AggregateLotteryPool]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLotteryPool[P]>
      : GetScalarType<T[P], AggregateLotteryPool[P]>
  }




  export type LotteryPoolGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LotteryPoolWhereInput
    orderBy?: LotteryPoolOrderByWithAggregationInput | LotteryPoolOrderByWithAggregationInput[]
    by: LotteryPoolScalarFieldEnum[] | LotteryPoolScalarFieldEnum
    having?: LotteryPoolScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LotteryPoolCountAggregateInputType | true
    _avg?: LotteryPoolAvgAggregateInputType
    _sum?: LotteryPoolSumAggregateInputType
    _min?: LotteryPoolMinAggregateInputType
    _max?: LotteryPoolMaxAggregateInputType
  }

  export type LotteryPoolGroupByOutputType = {
    id: string
    productId: string | null
    productName: string
    productImage: string
    pricePerEntry: number
    maxSlots: number
    filledSlots: number
    status: $Enums.PoolStatus
    startDate: Date
    endDate: Date
    drawTime: Date | null
    description: string | null
    createdAt: Date
    updatedAt: Date
    _count: LotteryPoolCountAggregateOutputType | null
    _avg: LotteryPoolAvgAggregateOutputType | null
    _sum: LotteryPoolSumAggregateOutputType | null
    _min: LotteryPoolMinAggregateOutputType | null
    _max: LotteryPoolMaxAggregateOutputType | null
  }

  type GetLotteryPoolGroupByPayload<T extends LotteryPoolGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LotteryPoolGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LotteryPoolGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LotteryPoolGroupByOutputType[P]>
            : GetScalarType<T[P], LotteryPoolGroupByOutputType[P]>
        }
      >
    >


  export type LotteryPoolSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    productName?: boolean
    productImage?: boolean
    pricePerEntry?: boolean
    maxSlots?: boolean
    filledSlots?: boolean
    status?: boolean
    startDate?: boolean
    endDate?: boolean
    drawTime?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    entries?: boolean | LotteryPool$entriesArgs<ExtArgs>
    winners?: boolean | LotteryPool$winnersArgs<ExtArgs>
    _count?: boolean | LotteryPoolCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lotteryPool"]>

  export type LotteryPoolSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    productName?: boolean
    productImage?: boolean
    pricePerEntry?: boolean
    maxSlots?: boolean
    filledSlots?: boolean
    status?: boolean
    startDate?: boolean
    endDate?: boolean
    drawTime?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["lotteryPool"]>

  export type LotteryPoolSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    productName?: boolean
    productImage?: boolean
    pricePerEntry?: boolean
    maxSlots?: boolean
    filledSlots?: boolean
    status?: boolean
    startDate?: boolean
    endDate?: boolean
    drawTime?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["lotteryPool"]>

  export type LotteryPoolSelectScalar = {
    id?: boolean
    productId?: boolean
    productName?: boolean
    productImage?: boolean
    pricePerEntry?: boolean
    maxSlots?: boolean
    filledSlots?: boolean
    status?: boolean
    startDate?: boolean
    endDate?: boolean
    drawTime?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type LotteryPoolOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "productId" | "productName" | "productImage" | "pricePerEntry" | "maxSlots" | "filledSlots" | "status" | "startDate" | "endDate" | "drawTime" | "description" | "createdAt" | "updatedAt", ExtArgs["result"]["lotteryPool"]>
  export type LotteryPoolInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    entries?: boolean | LotteryPool$entriesArgs<ExtArgs>
    winners?: boolean | LotteryPool$winnersArgs<ExtArgs>
    _count?: boolean | LotteryPoolCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type LotteryPoolIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type LotteryPoolIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $LotteryPoolPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LotteryPool"
    objects: {
      entries: Prisma.$PoolEntryPayload<ExtArgs>[]
      winners: Prisma.$WinnerPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      productId: string | null
      productName: string
      productImage: string
      pricePerEntry: number
      maxSlots: number
      filledSlots: number
      status: $Enums.PoolStatus
      startDate: Date
      endDate: Date
      drawTime: Date | null
      description: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["lotteryPool"]>
    composites: {}
  }

  type LotteryPoolGetPayload<S extends boolean | null | undefined | LotteryPoolDefaultArgs> = $Result.GetResult<Prisma.$LotteryPoolPayload, S>

  type LotteryPoolCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LotteryPoolFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LotteryPoolCountAggregateInputType | true
    }

  export interface LotteryPoolDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LotteryPool'], meta: { name: 'LotteryPool' } }
    /**
     * Find zero or one LotteryPool that matches the filter.
     * @param {LotteryPoolFindUniqueArgs} args - Arguments to find a LotteryPool
     * @example
     * // Get one LotteryPool
     * const lotteryPool = await prisma.lotteryPool.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LotteryPoolFindUniqueArgs>(args: SelectSubset<T, LotteryPoolFindUniqueArgs<ExtArgs>>): Prisma__LotteryPoolClient<$Result.GetResult<Prisma.$LotteryPoolPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LotteryPool that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LotteryPoolFindUniqueOrThrowArgs} args - Arguments to find a LotteryPool
     * @example
     * // Get one LotteryPool
     * const lotteryPool = await prisma.lotteryPool.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LotteryPoolFindUniqueOrThrowArgs>(args: SelectSubset<T, LotteryPoolFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LotteryPoolClient<$Result.GetResult<Prisma.$LotteryPoolPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LotteryPool that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LotteryPoolFindFirstArgs} args - Arguments to find a LotteryPool
     * @example
     * // Get one LotteryPool
     * const lotteryPool = await prisma.lotteryPool.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LotteryPoolFindFirstArgs>(args?: SelectSubset<T, LotteryPoolFindFirstArgs<ExtArgs>>): Prisma__LotteryPoolClient<$Result.GetResult<Prisma.$LotteryPoolPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LotteryPool that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LotteryPoolFindFirstOrThrowArgs} args - Arguments to find a LotteryPool
     * @example
     * // Get one LotteryPool
     * const lotteryPool = await prisma.lotteryPool.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LotteryPoolFindFirstOrThrowArgs>(args?: SelectSubset<T, LotteryPoolFindFirstOrThrowArgs<ExtArgs>>): Prisma__LotteryPoolClient<$Result.GetResult<Prisma.$LotteryPoolPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LotteryPools that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LotteryPoolFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LotteryPools
     * const lotteryPools = await prisma.lotteryPool.findMany()
     * 
     * // Get first 10 LotteryPools
     * const lotteryPools = await prisma.lotteryPool.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const lotteryPoolWithIdOnly = await prisma.lotteryPool.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LotteryPoolFindManyArgs>(args?: SelectSubset<T, LotteryPoolFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LotteryPoolPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LotteryPool.
     * @param {LotteryPoolCreateArgs} args - Arguments to create a LotteryPool.
     * @example
     * // Create one LotteryPool
     * const LotteryPool = await prisma.lotteryPool.create({
     *   data: {
     *     // ... data to create a LotteryPool
     *   }
     * })
     * 
     */
    create<T extends LotteryPoolCreateArgs>(args: SelectSubset<T, LotteryPoolCreateArgs<ExtArgs>>): Prisma__LotteryPoolClient<$Result.GetResult<Prisma.$LotteryPoolPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LotteryPools.
     * @param {LotteryPoolCreateManyArgs} args - Arguments to create many LotteryPools.
     * @example
     * // Create many LotteryPools
     * const lotteryPool = await prisma.lotteryPool.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LotteryPoolCreateManyArgs>(args?: SelectSubset<T, LotteryPoolCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LotteryPools and returns the data saved in the database.
     * @param {LotteryPoolCreateManyAndReturnArgs} args - Arguments to create many LotteryPools.
     * @example
     * // Create many LotteryPools
     * const lotteryPool = await prisma.lotteryPool.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LotteryPools and only return the `id`
     * const lotteryPoolWithIdOnly = await prisma.lotteryPool.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LotteryPoolCreateManyAndReturnArgs>(args?: SelectSubset<T, LotteryPoolCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LotteryPoolPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a LotteryPool.
     * @param {LotteryPoolDeleteArgs} args - Arguments to delete one LotteryPool.
     * @example
     * // Delete one LotteryPool
     * const LotteryPool = await prisma.lotteryPool.delete({
     *   where: {
     *     // ... filter to delete one LotteryPool
     *   }
     * })
     * 
     */
    delete<T extends LotteryPoolDeleteArgs>(args: SelectSubset<T, LotteryPoolDeleteArgs<ExtArgs>>): Prisma__LotteryPoolClient<$Result.GetResult<Prisma.$LotteryPoolPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LotteryPool.
     * @param {LotteryPoolUpdateArgs} args - Arguments to update one LotteryPool.
     * @example
     * // Update one LotteryPool
     * const lotteryPool = await prisma.lotteryPool.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LotteryPoolUpdateArgs>(args: SelectSubset<T, LotteryPoolUpdateArgs<ExtArgs>>): Prisma__LotteryPoolClient<$Result.GetResult<Prisma.$LotteryPoolPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LotteryPools.
     * @param {LotteryPoolDeleteManyArgs} args - Arguments to filter LotteryPools to delete.
     * @example
     * // Delete a few LotteryPools
     * const { count } = await prisma.lotteryPool.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LotteryPoolDeleteManyArgs>(args?: SelectSubset<T, LotteryPoolDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LotteryPools.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LotteryPoolUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LotteryPools
     * const lotteryPool = await prisma.lotteryPool.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LotteryPoolUpdateManyArgs>(args: SelectSubset<T, LotteryPoolUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LotteryPools and returns the data updated in the database.
     * @param {LotteryPoolUpdateManyAndReturnArgs} args - Arguments to update many LotteryPools.
     * @example
     * // Update many LotteryPools
     * const lotteryPool = await prisma.lotteryPool.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more LotteryPools and only return the `id`
     * const lotteryPoolWithIdOnly = await prisma.lotteryPool.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LotteryPoolUpdateManyAndReturnArgs>(args: SelectSubset<T, LotteryPoolUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LotteryPoolPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one LotteryPool.
     * @param {LotteryPoolUpsertArgs} args - Arguments to update or create a LotteryPool.
     * @example
     * // Update or create a LotteryPool
     * const lotteryPool = await prisma.lotteryPool.upsert({
     *   create: {
     *     // ... data to create a LotteryPool
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LotteryPool we want to update
     *   }
     * })
     */
    upsert<T extends LotteryPoolUpsertArgs>(args: SelectSubset<T, LotteryPoolUpsertArgs<ExtArgs>>): Prisma__LotteryPoolClient<$Result.GetResult<Prisma.$LotteryPoolPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LotteryPools.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LotteryPoolCountArgs} args - Arguments to filter LotteryPools to count.
     * @example
     * // Count the number of LotteryPools
     * const count = await prisma.lotteryPool.count({
     *   where: {
     *     // ... the filter for the LotteryPools we want to count
     *   }
     * })
    **/
    count<T extends LotteryPoolCountArgs>(
      args?: Subset<T, LotteryPoolCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LotteryPoolCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LotteryPool.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LotteryPoolAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LotteryPoolAggregateArgs>(args: Subset<T, LotteryPoolAggregateArgs>): Prisma.PrismaPromise<GetLotteryPoolAggregateType<T>>

    /**
     * Group by LotteryPool.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LotteryPoolGroupByArgs} args - Group by arguments.
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
      T extends LotteryPoolGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LotteryPoolGroupByArgs['orderBy'] }
        : { orderBy?: LotteryPoolGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LotteryPoolGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLotteryPoolGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LotteryPool model
   */
  readonly fields: LotteryPoolFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LotteryPool.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LotteryPoolClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    entries<T extends LotteryPool$entriesArgs<ExtArgs> = {}>(args?: Subset<T, LotteryPool$entriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PoolEntryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    winners<T extends LotteryPool$winnersArgs<ExtArgs> = {}>(args?: Subset<T, LotteryPool$winnersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WinnerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the LotteryPool model
   */
  interface LotteryPoolFieldRefs {
    readonly id: FieldRef<"LotteryPool", 'String'>
    readonly productId: FieldRef<"LotteryPool", 'String'>
    readonly productName: FieldRef<"LotteryPool", 'String'>
    readonly productImage: FieldRef<"LotteryPool", 'String'>
    readonly pricePerEntry: FieldRef<"LotteryPool", 'Float'>
    readonly maxSlots: FieldRef<"LotteryPool", 'Int'>
    readonly filledSlots: FieldRef<"LotteryPool", 'Int'>
    readonly status: FieldRef<"LotteryPool", 'PoolStatus'>
    readonly startDate: FieldRef<"LotteryPool", 'DateTime'>
    readonly endDate: FieldRef<"LotteryPool", 'DateTime'>
    readonly drawTime: FieldRef<"LotteryPool", 'DateTime'>
    readonly description: FieldRef<"LotteryPool", 'String'>
    readonly createdAt: FieldRef<"LotteryPool", 'DateTime'>
    readonly updatedAt: FieldRef<"LotteryPool", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * LotteryPool findUnique
   */
  export type LotteryPoolFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LotteryPool
     */
    select?: LotteryPoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LotteryPool
     */
    omit?: LotteryPoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LotteryPoolInclude<ExtArgs> | null
    /**
     * Filter, which LotteryPool to fetch.
     */
    where: LotteryPoolWhereUniqueInput
  }

  /**
   * LotteryPool findUniqueOrThrow
   */
  export type LotteryPoolFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LotteryPool
     */
    select?: LotteryPoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LotteryPool
     */
    omit?: LotteryPoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LotteryPoolInclude<ExtArgs> | null
    /**
     * Filter, which LotteryPool to fetch.
     */
    where: LotteryPoolWhereUniqueInput
  }

  /**
   * LotteryPool findFirst
   */
  export type LotteryPoolFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LotteryPool
     */
    select?: LotteryPoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LotteryPool
     */
    omit?: LotteryPoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LotteryPoolInclude<ExtArgs> | null
    /**
     * Filter, which LotteryPool to fetch.
     */
    where?: LotteryPoolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LotteryPools to fetch.
     */
    orderBy?: LotteryPoolOrderByWithRelationInput | LotteryPoolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LotteryPools.
     */
    cursor?: LotteryPoolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LotteryPools from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LotteryPools.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LotteryPools.
     */
    distinct?: LotteryPoolScalarFieldEnum | LotteryPoolScalarFieldEnum[]
  }

  /**
   * LotteryPool findFirstOrThrow
   */
  export type LotteryPoolFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LotteryPool
     */
    select?: LotteryPoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LotteryPool
     */
    omit?: LotteryPoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LotteryPoolInclude<ExtArgs> | null
    /**
     * Filter, which LotteryPool to fetch.
     */
    where?: LotteryPoolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LotteryPools to fetch.
     */
    orderBy?: LotteryPoolOrderByWithRelationInput | LotteryPoolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LotteryPools.
     */
    cursor?: LotteryPoolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LotteryPools from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LotteryPools.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LotteryPools.
     */
    distinct?: LotteryPoolScalarFieldEnum | LotteryPoolScalarFieldEnum[]
  }

  /**
   * LotteryPool findMany
   */
  export type LotteryPoolFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LotteryPool
     */
    select?: LotteryPoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LotteryPool
     */
    omit?: LotteryPoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LotteryPoolInclude<ExtArgs> | null
    /**
     * Filter, which LotteryPools to fetch.
     */
    where?: LotteryPoolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LotteryPools to fetch.
     */
    orderBy?: LotteryPoolOrderByWithRelationInput | LotteryPoolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LotteryPools.
     */
    cursor?: LotteryPoolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LotteryPools from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LotteryPools.
     */
    skip?: number
    distinct?: LotteryPoolScalarFieldEnum | LotteryPoolScalarFieldEnum[]
  }

  /**
   * LotteryPool create
   */
  export type LotteryPoolCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LotteryPool
     */
    select?: LotteryPoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LotteryPool
     */
    omit?: LotteryPoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LotteryPoolInclude<ExtArgs> | null
    /**
     * The data needed to create a LotteryPool.
     */
    data: XOR<LotteryPoolCreateInput, LotteryPoolUncheckedCreateInput>
  }

  /**
   * LotteryPool createMany
   */
  export type LotteryPoolCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LotteryPools.
     */
    data: LotteryPoolCreateManyInput | LotteryPoolCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LotteryPool createManyAndReturn
   */
  export type LotteryPoolCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LotteryPool
     */
    select?: LotteryPoolSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LotteryPool
     */
    omit?: LotteryPoolOmit<ExtArgs> | null
    /**
     * The data used to create many LotteryPools.
     */
    data: LotteryPoolCreateManyInput | LotteryPoolCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LotteryPool update
   */
  export type LotteryPoolUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LotteryPool
     */
    select?: LotteryPoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LotteryPool
     */
    omit?: LotteryPoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LotteryPoolInclude<ExtArgs> | null
    /**
     * The data needed to update a LotteryPool.
     */
    data: XOR<LotteryPoolUpdateInput, LotteryPoolUncheckedUpdateInput>
    /**
     * Choose, which LotteryPool to update.
     */
    where: LotteryPoolWhereUniqueInput
  }

  /**
   * LotteryPool updateMany
   */
  export type LotteryPoolUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LotteryPools.
     */
    data: XOR<LotteryPoolUpdateManyMutationInput, LotteryPoolUncheckedUpdateManyInput>
    /**
     * Filter which LotteryPools to update
     */
    where?: LotteryPoolWhereInput
    /**
     * Limit how many LotteryPools to update.
     */
    limit?: number
  }

  /**
   * LotteryPool updateManyAndReturn
   */
  export type LotteryPoolUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LotteryPool
     */
    select?: LotteryPoolSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LotteryPool
     */
    omit?: LotteryPoolOmit<ExtArgs> | null
    /**
     * The data used to update LotteryPools.
     */
    data: XOR<LotteryPoolUpdateManyMutationInput, LotteryPoolUncheckedUpdateManyInput>
    /**
     * Filter which LotteryPools to update
     */
    where?: LotteryPoolWhereInput
    /**
     * Limit how many LotteryPools to update.
     */
    limit?: number
  }

  /**
   * LotteryPool upsert
   */
  export type LotteryPoolUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LotteryPool
     */
    select?: LotteryPoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LotteryPool
     */
    omit?: LotteryPoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LotteryPoolInclude<ExtArgs> | null
    /**
     * The filter to search for the LotteryPool to update in case it exists.
     */
    where: LotteryPoolWhereUniqueInput
    /**
     * In case the LotteryPool found by the `where` argument doesn't exist, create a new LotteryPool with this data.
     */
    create: XOR<LotteryPoolCreateInput, LotteryPoolUncheckedCreateInput>
    /**
     * In case the LotteryPool was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LotteryPoolUpdateInput, LotteryPoolUncheckedUpdateInput>
  }

  /**
   * LotteryPool delete
   */
  export type LotteryPoolDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LotteryPool
     */
    select?: LotteryPoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LotteryPool
     */
    omit?: LotteryPoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LotteryPoolInclude<ExtArgs> | null
    /**
     * Filter which LotteryPool to delete.
     */
    where: LotteryPoolWhereUniqueInput
  }

  /**
   * LotteryPool deleteMany
   */
  export type LotteryPoolDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LotteryPools to delete
     */
    where?: LotteryPoolWhereInput
    /**
     * Limit how many LotteryPools to delete.
     */
    limit?: number
  }

  /**
   * LotteryPool.entries
   */
  export type LotteryPool$entriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PoolEntry
     */
    select?: PoolEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PoolEntry
     */
    omit?: PoolEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PoolEntryInclude<ExtArgs> | null
    where?: PoolEntryWhereInput
    orderBy?: PoolEntryOrderByWithRelationInput | PoolEntryOrderByWithRelationInput[]
    cursor?: PoolEntryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PoolEntryScalarFieldEnum | PoolEntryScalarFieldEnum[]
  }

  /**
   * LotteryPool.winners
   */
  export type LotteryPool$winnersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Winner
     */
    select?: WinnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Winner
     */
    omit?: WinnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WinnerInclude<ExtArgs> | null
    where?: WinnerWhereInput
    orderBy?: WinnerOrderByWithRelationInput | WinnerOrderByWithRelationInput[]
    cursor?: WinnerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WinnerScalarFieldEnum | WinnerScalarFieldEnum[]
  }

  /**
   * LotteryPool without action
   */
  export type LotteryPoolDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LotteryPool
     */
    select?: LotteryPoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LotteryPool
     */
    omit?: LotteryPoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LotteryPoolInclude<ExtArgs> | null
  }


  /**
   * Model PoolEntry
   */

  export type AggregatePoolEntry = {
    _count: PoolEntryCountAggregateOutputType | null
    _avg: PoolEntryAvgAggregateOutputType | null
    _sum: PoolEntrySumAggregateOutputType | null
    _min: PoolEntryMinAggregateOutputType | null
    _max: PoolEntryMaxAggregateOutputType | null
  }

  export type PoolEntryAvgAggregateOutputType = {
    ticketNumber: number | null
  }

  export type PoolEntrySumAggregateOutputType = {
    ticketNumber: number | null
  }

  export type PoolEntryMinAggregateOutputType = {
    id: string | null
    poolId: string | null
    userId: string | null
    ticketNumber: number | null
    purchasedAt: Date | null
  }

  export type PoolEntryMaxAggregateOutputType = {
    id: string | null
    poolId: string | null
    userId: string | null
    ticketNumber: number | null
    purchasedAt: Date | null
  }

  export type PoolEntryCountAggregateOutputType = {
    id: number
    poolId: number
    userId: number
    ticketNumber: number
    purchasedAt: number
    _all: number
  }


  export type PoolEntryAvgAggregateInputType = {
    ticketNumber?: true
  }

  export type PoolEntrySumAggregateInputType = {
    ticketNumber?: true
  }

  export type PoolEntryMinAggregateInputType = {
    id?: true
    poolId?: true
    userId?: true
    ticketNumber?: true
    purchasedAt?: true
  }

  export type PoolEntryMaxAggregateInputType = {
    id?: true
    poolId?: true
    userId?: true
    ticketNumber?: true
    purchasedAt?: true
  }

  export type PoolEntryCountAggregateInputType = {
    id?: true
    poolId?: true
    userId?: true
    ticketNumber?: true
    purchasedAt?: true
    _all?: true
  }

  export type PoolEntryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PoolEntry to aggregate.
     */
    where?: PoolEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PoolEntries to fetch.
     */
    orderBy?: PoolEntryOrderByWithRelationInput | PoolEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PoolEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PoolEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PoolEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PoolEntries
    **/
    _count?: true | PoolEntryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PoolEntryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PoolEntrySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PoolEntryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PoolEntryMaxAggregateInputType
  }

  export type GetPoolEntryAggregateType<T extends PoolEntryAggregateArgs> = {
        [P in keyof T & keyof AggregatePoolEntry]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePoolEntry[P]>
      : GetScalarType<T[P], AggregatePoolEntry[P]>
  }




  export type PoolEntryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PoolEntryWhereInput
    orderBy?: PoolEntryOrderByWithAggregationInput | PoolEntryOrderByWithAggregationInput[]
    by: PoolEntryScalarFieldEnum[] | PoolEntryScalarFieldEnum
    having?: PoolEntryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PoolEntryCountAggregateInputType | true
    _avg?: PoolEntryAvgAggregateInputType
    _sum?: PoolEntrySumAggregateInputType
    _min?: PoolEntryMinAggregateInputType
    _max?: PoolEntryMaxAggregateInputType
  }

  export type PoolEntryGroupByOutputType = {
    id: string
    poolId: string
    userId: string
    ticketNumber: number
    purchasedAt: Date
    _count: PoolEntryCountAggregateOutputType | null
    _avg: PoolEntryAvgAggregateOutputType | null
    _sum: PoolEntrySumAggregateOutputType | null
    _min: PoolEntryMinAggregateOutputType | null
    _max: PoolEntryMaxAggregateOutputType | null
  }

  type GetPoolEntryGroupByPayload<T extends PoolEntryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PoolEntryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PoolEntryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PoolEntryGroupByOutputType[P]>
            : GetScalarType<T[P], PoolEntryGroupByOutputType[P]>
        }
      >
    >


  export type PoolEntrySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    poolId?: boolean
    userId?: boolean
    ticketNumber?: boolean
    purchasedAt?: boolean
    pool?: boolean | LotteryPoolDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    winner?: boolean | PoolEntry$winnerArgs<ExtArgs>
  }, ExtArgs["result"]["poolEntry"]>

  export type PoolEntrySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    poolId?: boolean
    userId?: boolean
    ticketNumber?: boolean
    purchasedAt?: boolean
    pool?: boolean | LotteryPoolDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["poolEntry"]>

  export type PoolEntrySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    poolId?: boolean
    userId?: boolean
    ticketNumber?: boolean
    purchasedAt?: boolean
    pool?: boolean | LotteryPoolDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["poolEntry"]>

  export type PoolEntrySelectScalar = {
    id?: boolean
    poolId?: boolean
    userId?: boolean
    ticketNumber?: boolean
    purchasedAt?: boolean
  }

  export type PoolEntryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "poolId" | "userId" | "ticketNumber" | "purchasedAt", ExtArgs["result"]["poolEntry"]>
  export type PoolEntryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pool?: boolean | LotteryPoolDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    winner?: boolean | PoolEntry$winnerArgs<ExtArgs>
  }
  export type PoolEntryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pool?: boolean | LotteryPoolDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PoolEntryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pool?: boolean | LotteryPoolDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PoolEntryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PoolEntry"
    objects: {
      pool: Prisma.$LotteryPoolPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
      winner: Prisma.$WinnerPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      poolId: string
      userId: string
      ticketNumber: number
      purchasedAt: Date
    }, ExtArgs["result"]["poolEntry"]>
    composites: {}
  }

  type PoolEntryGetPayload<S extends boolean | null | undefined | PoolEntryDefaultArgs> = $Result.GetResult<Prisma.$PoolEntryPayload, S>

  type PoolEntryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PoolEntryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PoolEntryCountAggregateInputType | true
    }

  export interface PoolEntryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PoolEntry'], meta: { name: 'PoolEntry' } }
    /**
     * Find zero or one PoolEntry that matches the filter.
     * @param {PoolEntryFindUniqueArgs} args - Arguments to find a PoolEntry
     * @example
     * // Get one PoolEntry
     * const poolEntry = await prisma.poolEntry.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PoolEntryFindUniqueArgs>(args: SelectSubset<T, PoolEntryFindUniqueArgs<ExtArgs>>): Prisma__PoolEntryClient<$Result.GetResult<Prisma.$PoolEntryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PoolEntry that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PoolEntryFindUniqueOrThrowArgs} args - Arguments to find a PoolEntry
     * @example
     * // Get one PoolEntry
     * const poolEntry = await prisma.poolEntry.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PoolEntryFindUniqueOrThrowArgs>(args: SelectSubset<T, PoolEntryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PoolEntryClient<$Result.GetResult<Prisma.$PoolEntryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PoolEntry that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PoolEntryFindFirstArgs} args - Arguments to find a PoolEntry
     * @example
     * // Get one PoolEntry
     * const poolEntry = await prisma.poolEntry.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PoolEntryFindFirstArgs>(args?: SelectSubset<T, PoolEntryFindFirstArgs<ExtArgs>>): Prisma__PoolEntryClient<$Result.GetResult<Prisma.$PoolEntryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PoolEntry that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PoolEntryFindFirstOrThrowArgs} args - Arguments to find a PoolEntry
     * @example
     * // Get one PoolEntry
     * const poolEntry = await prisma.poolEntry.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PoolEntryFindFirstOrThrowArgs>(args?: SelectSubset<T, PoolEntryFindFirstOrThrowArgs<ExtArgs>>): Prisma__PoolEntryClient<$Result.GetResult<Prisma.$PoolEntryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PoolEntries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PoolEntryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PoolEntries
     * const poolEntries = await prisma.poolEntry.findMany()
     * 
     * // Get first 10 PoolEntries
     * const poolEntries = await prisma.poolEntry.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const poolEntryWithIdOnly = await prisma.poolEntry.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PoolEntryFindManyArgs>(args?: SelectSubset<T, PoolEntryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PoolEntryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PoolEntry.
     * @param {PoolEntryCreateArgs} args - Arguments to create a PoolEntry.
     * @example
     * // Create one PoolEntry
     * const PoolEntry = await prisma.poolEntry.create({
     *   data: {
     *     // ... data to create a PoolEntry
     *   }
     * })
     * 
     */
    create<T extends PoolEntryCreateArgs>(args: SelectSubset<T, PoolEntryCreateArgs<ExtArgs>>): Prisma__PoolEntryClient<$Result.GetResult<Prisma.$PoolEntryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PoolEntries.
     * @param {PoolEntryCreateManyArgs} args - Arguments to create many PoolEntries.
     * @example
     * // Create many PoolEntries
     * const poolEntry = await prisma.poolEntry.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PoolEntryCreateManyArgs>(args?: SelectSubset<T, PoolEntryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PoolEntries and returns the data saved in the database.
     * @param {PoolEntryCreateManyAndReturnArgs} args - Arguments to create many PoolEntries.
     * @example
     * // Create many PoolEntries
     * const poolEntry = await prisma.poolEntry.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PoolEntries and only return the `id`
     * const poolEntryWithIdOnly = await prisma.poolEntry.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PoolEntryCreateManyAndReturnArgs>(args?: SelectSubset<T, PoolEntryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PoolEntryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PoolEntry.
     * @param {PoolEntryDeleteArgs} args - Arguments to delete one PoolEntry.
     * @example
     * // Delete one PoolEntry
     * const PoolEntry = await prisma.poolEntry.delete({
     *   where: {
     *     // ... filter to delete one PoolEntry
     *   }
     * })
     * 
     */
    delete<T extends PoolEntryDeleteArgs>(args: SelectSubset<T, PoolEntryDeleteArgs<ExtArgs>>): Prisma__PoolEntryClient<$Result.GetResult<Prisma.$PoolEntryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PoolEntry.
     * @param {PoolEntryUpdateArgs} args - Arguments to update one PoolEntry.
     * @example
     * // Update one PoolEntry
     * const poolEntry = await prisma.poolEntry.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PoolEntryUpdateArgs>(args: SelectSubset<T, PoolEntryUpdateArgs<ExtArgs>>): Prisma__PoolEntryClient<$Result.GetResult<Prisma.$PoolEntryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PoolEntries.
     * @param {PoolEntryDeleteManyArgs} args - Arguments to filter PoolEntries to delete.
     * @example
     * // Delete a few PoolEntries
     * const { count } = await prisma.poolEntry.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PoolEntryDeleteManyArgs>(args?: SelectSubset<T, PoolEntryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PoolEntries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PoolEntryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PoolEntries
     * const poolEntry = await prisma.poolEntry.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PoolEntryUpdateManyArgs>(args: SelectSubset<T, PoolEntryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PoolEntries and returns the data updated in the database.
     * @param {PoolEntryUpdateManyAndReturnArgs} args - Arguments to update many PoolEntries.
     * @example
     * // Update many PoolEntries
     * const poolEntry = await prisma.poolEntry.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PoolEntries and only return the `id`
     * const poolEntryWithIdOnly = await prisma.poolEntry.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PoolEntryUpdateManyAndReturnArgs>(args: SelectSubset<T, PoolEntryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PoolEntryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PoolEntry.
     * @param {PoolEntryUpsertArgs} args - Arguments to update or create a PoolEntry.
     * @example
     * // Update or create a PoolEntry
     * const poolEntry = await prisma.poolEntry.upsert({
     *   create: {
     *     // ... data to create a PoolEntry
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PoolEntry we want to update
     *   }
     * })
     */
    upsert<T extends PoolEntryUpsertArgs>(args: SelectSubset<T, PoolEntryUpsertArgs<ExtArgs>>): Prisma__PoolEntryClient<$Result.GetResult<Prisma.$PoolEntryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PoolEntries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PoolEntryCountArgs} args - Arguments to filter PoolEntries to count.
     * @example
     * // Count the number of PoolEntries
     * const count = await prisma.poolEntry.count({
     *   where: {
     *     // ... the filter for the PoolEntries we want to count
     *   }
     * })
    **/
    count<T extends PoolEntryCountArgs>(
      args?: Subset<T, PoolEntryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PoolEntryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PoolEntry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PoolEntryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PoolEntryAggregateArgs>(args: Subset<T, PoolEntryAggregateArgs>): Prisma.PrismaPromise<GetPoolEntryAggregateType<T>>

    /**
     * Group by PoolEntry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PoolEntryGroupByArgs} args - Group by arguments.
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
      T extends PoolEntryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PoolEntryGroupByArgs['orderBy'] }
        : { orderBy?: PoolEntryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PoolEntryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPoolEntryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PoolEntry model
   */
  readonly fields: PoolEntryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PoolEntry.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PoolEntryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pool<T extends LotteryPoolDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LotteryPoolDefaultArgs<ExtArgs>>): Prisma__LotteryPoolClient<$Result.GetResult<Prisma.$LotteryPoolPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    winner<T extends PoolEntry$winnerArgs<ExtArgs> = {}>(args?: Subset<T, PoolEntry$winnerArgs<ExtArgs>>): Prisma__WinnerClient<$Result.GetResult<Prisma.$WinnerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the PoolEntry model
   */
  interface PoolEntryFieldRefs {
    readonly id: FieldRef<"PoolEntry", 'String'>
    readonly poolId: FieldRef<"PoolEntry", 'String'>
    readonly userId: FieldRef<"PoolEntry", 'String'>
    readonly ticketNumber: FieldRef<"PoolEntry", 'Int'>
    readonly purchasedAt: FieldRef<"PoolEntry", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PoolEntry findUnique
   */
  export type PoolEntryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PoolEntry
     */
    select?: PoolEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PoolEntry
     */
    omit?: PoolEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PoolEntryInclude<ExtArgs> | null
    /**
     * Filter, which PoolEntry to fetch.
     */
    where: PoolEntryWhereUniqueInput
  }

  /**
   * PoolEntry findUniqueOrThrow
   */
  export type PoolEntryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PoolEntry
     */
    select?: PoolEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PoolEntry
     */
    omit?: PoolEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PoolEntryInclude<ExtArgs> | null
    /**
     * Filter, which PoolEntry to fetch.
     */
    where: PoolEntryWhereUniqueInput
  }

  /**
   * PoolEntry findFirst
   */
  export type PoolEntryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PoolEntry
     */
    select?: PoolEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PoolEntry
     */
    omit?: PoolEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PoolEntryInclude<ExtArgs> | null
    /**
     * Filter, which PoolEntry to fetch.
     */
    where?: PoolEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PoolEntries to fetch.
     */
    orderBy?: PoolEntryOrderByWithRelationInput | PoolEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PoolEntries.
     */
    cursor?: PoolEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PoolEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PoolEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PoolEntries.
     */
    distinct?: PoolEntryScalarFieldEnum | PoolEntryScalarFieldEnum[]
  }

  /**
   * PoolEntry findFirstOrThrow
   */
  export type PoolEntryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PoolEntry
     */
    select?: PoolEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PoolEntry
     */
    omit?: PoolEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PoolEntryInclude<ExtArgs> | null
    /**
     * Filter, which PoolEntry to fetch.
     */
    where?: PoolEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PoolEntries to fetch.
     */
    orderBy?: PoolEntryOrderByWithRelationInput | PoolEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PoolEntries.
     */
    cursor?: PoolEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PoolEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PoolEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PoolEntries.
     */
    distinct?: PoolEntryScalarFieldEnum | PoolEntryScalarFieldEnum[]
  }

  /**
   * PoolEntry findMany
   */
  export type PoolEntryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PoolEntry
     */
    select?: PoolEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PoolEntry
     */
    omit?: PoolEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PoolEntryInclude<ExtArgs> | null
    /**
     * Filter, which PoolEntries to fetch.
     */
    where?: PoolEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PoolEntries to fetch.
     */
    orderBy?: PoolEntryOrderByWithRelationInput | PoolEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PoolEntries.
     */
    cursor?: PoolEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PoolEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PoolEntries.
     */
    skip?: number
    distinct?: PoolEntryScalarFieldEnum | PoolEntryScalarFieldEnum[]
  }

  /**
   * PoolEntry create
   */
  export type PoolEntryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PoolEntry
     */
    select?: PoolEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PoolEntry
     */
    omit?: PoolEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PoolEntryInclude<ExtArgs> | null
    /**
     * The data needed to create a PoolEntry.
     */
    data: XOR<PoolEntryCreateInput, PoolEntryUncheckedCreateInput>
  }

  /**
   * PoolEntry createMany
   */
  export type PoolEntryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PoolEntries.
     */
    data: PoolEntryCreateManyInput | PoolEntryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PoolEntry createManyAndReturn
   */
  export type PoolEntryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PoolEntry
     */
    select?: PoolEntrySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PoolEntry
     */
    omit?: PoolEntryOmit<ExtArgs> | null
    /**
     * The data used to create many PoolEntries.
     */
    data: PoolEntryCreateManyInput | PoolEntryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PoolEntryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PoolEntry update
   */
  export type PoolEntryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PoolEntry
     */
    select?: PoolEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PoolEntry
     */
    omit?: PoolEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PoolEntryInclude<ExtArgs> | null
    /**
     * The data needed to update a PoolEntry.
     */
    data: XOR<PoolEntryUpdateInput, PoolEntryUncheckedUpdateInput>
    /**
     * Choose, which PoolEntry to update.
     */
    where: PoolEntryWhereUniqueInput
  }

  /**
   * PoolEntry updateMany
   */
  export type PoolEntryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PoolEntries.
     */
    data: XOR<PoolEntryUpdateManyMutationInput, PoolEntryUncheckedUpdateManyInput>
    /**
     * Filter which PoolEntries to update
     */
    where?: PoolEntryWhereInput
    /**
     * Limit how many PoolEntries to update.
     */
    limit?: number
  }

  /**
   * PoolEntry updateManyAndReturn
   */
  export type PoolEntryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PoolEntry
     */
    select?: PoolEntrySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PoolEntry
     */
    omit?: PoolEntryOmit<ExtArgs> | null
    /**
     * The data used to update PoolEntries.
     */
    data: XOR<PoolEntryUpdateManyMutationInput, PoolEntryUncheckedUpdateManyInput>
    /**
     * Filter which PoolEntries to update
     */
    where?: PoolEntryWhereInput
    /**
     * Limit how many PoolEntries to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PoolEntryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PoolEntry upsert
   */
  export type PoolEntryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PoolEntry
     */
    select?: PoolEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PoolEntry
     */
    omit?: PoolEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PoolEntryInclude<ExtArgs> | null
    /**
     * The filter to search for the PoolEntry to update in case it exists.
     */
    where: PoolEntryWhereUniqueInput
    /**
     * In case the PoolEntry found by the `where` argument doesn't exist, create a new PoolEntry with this data.
     */
    create: XOR<PoolEntryCreateInput, PoolEntryUncheckedCreateInput>
    /**
     * In case the PoolEntry was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PoolEntryUpdateInput, PoolEntryUncheckedUpdateInput>
  }

  /**
   * PoolEntry delete
   */
  export type PoolEntryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PoolEntry
     */
    select?: PoolEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PoolEntry
     */
    omit?: PoolEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PoolEntryInclude<ExtArgs> | null
    /**
     * Filter which PoolEntry to delete.
     */
    where: PoolEntryWhereUniqueInput
  }

  /**
   * PoolEntry deleteMany
   */
  export type PoolEntryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PoolEntries to delete
     */
    where?: PoolEntryWhereInput
    /**
     * Limit how many PoolEntries to delete.
     */
    limit?: number
  }

  /**
   * PoolEntry.winner
   */
  export type PoolEntry$winnerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Winner
     */
    select?: WinnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Winner
     */
    omit?: WinnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WinnerInclude<ExtArgs> | null
    where?: WinnerWhereInput
  }

  /**
   * PoolEntry without action
   */
  export type PoolEntryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PoolEntry
     */
    select?: PoolEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PoolEntry
     */
    omit?: PoolEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PoolEntryInclude<ExtArgs> | null
  }


  /**
   * Model Winner
   */

  export type AggregateWinner = {
    _count: WinnerCountAggregateOutputType | null
    _avg: WinnerAvgAggregateOutputType | null
    _sum: WinnerSumAggregateOutputType | null
    _min: WinnerMinAggregateOutputType | null
    _max: WinnerMaxAggregateOutputType | null
  }

  export type WinnerAvgAggregateOutputType = {
    prizeAmount: number | null
  }

  export type WinnerSumAggregateOutputType = {
    prizeAmount: number | null
  }

  export type WinnerMinAggregateOutputType = {
    id: string | null
    poolId: string | null
    entryId: string | null
    userId: string | null
    prizeAmount: number | null
    announcedAt: Date | null
  }

  export type WinnerMaxAggregateOutputType = {
    id: string | null
    poolId: string | null
    entryId: string | null
    userId: string | null
    prizeAmount: number | null
    announcedAt: Date | null
  }

  export type WinnerCountAggregateOutputType = {
    id: number
    poolId: number
    entryId: number
    userId: number
    prizeAmount: number
    announcedAt: number
    _all: number
  }


  export type WinnerAvgAggregateInputType = {
    prizeAmount?: true
  }

  export type WinnerSumAggregateInputType = {
    prizeAmount?: true
  }

  export type WinnerMinAggregateInputType = {
    id?: true
    poolId?: true
    entryId?: true
    userId?: true
    prizeAmount?: true
    announcedAt?: true
  }

  export type WinnerMaxAggregateInputType = {
    id?: true
    poolId?: true
    entryId?: true
    userId?: true
    prizeAmount?: true
    announcedAt?: true
  }

  export type WinnerCountAggregateInputType = {
    id?: true
    poolId?: true
    entryId?: true
    userId?: true
    prizeAmount?: true
    announcedAt?: true
    _all?: true
  }

  export type WinnerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Winner to aggregate.
     */
    where?: WinnerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Winners to fetch.
     */
    orderBy?: WinnerOrderByWithRelationInput | WinnerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WinnerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Winners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Winners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Winners
    **/
    _count?: true | WinnerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WinnerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WinnerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WinnerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WinnerMaxAggregateInputType
  }

  export type GetWinnerAggregateType<T extends WinnerAggregateArgs> = {
        [P in keyof T & keyof AggregateWinner]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWinner[P]>
      : GetScalarType<T[P], AggregateWinner[P]>
  }




  export type WinnerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WinnerWhereInput
    orderBy?: WinnerOrderByWithAggregationInput | WinnerOrderByWithAggregationInput[]
    by: WinnerScalarFieldEnum[] | WinnerScalarFieldEnum
    having?: WinnerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WinnerCountAggregateInputType | true
    _avg?: WinnerAvgAggregateInputType
    _sum?: WinnerSumAggregateInputType
    _min?: WinnerMinAggregateInputType
    _max?: WinnerMaxAggregateInputType
  }

  export type WinnerGroupByOutputType = {
    id: string
    poolId: string
    entryId: string
    userId: string
    prizeAmount: number
    announcedAt: Date
    _count: WinnerCountAggregateOutputType | null
    _avg: WinnerAvgAggregateOutputType | null
    _sum: WinnerSumAggregateOutputType | null
    _min: WinnerMinAggregateOutputType | null
    _max: WinnerMaxAggregateOutputType | null
  }

  type GetWinnerGroupByPayload<T extends WinnerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WinnerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WinnerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WinnerGroupByOutputType[P]>
            : GetScalarType<T[P], WinnerGroupByOutputType[P]>
        }
      >
    >


  export type WinnerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    poolId?: boolean
    entryId?: boolean
    userId?: boolean
    prizeAmount?: boolean
    announcedAt?: boolean
    pool?: boolean | LotteryPoolDefaultArgs<ExtArgs>
    entry?: boolean | PoolEntryDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["winner"]>

  export type WinnerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    poolId?: boolean
    entryId?: boolean
    userId?: boolean
    prizeAmount?: boolean
    announcedAt?: boolean
    pool?: boolean | LotteryPoolDefaultArgs<ExtArgs>
    entry?: boolean | PoolEntryDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["winner"]>

  export type WinnerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    poolId?: boolean
    entryId?: boolean
    userId?: boolean
    prizeAmount?: boolean
    announcedAt?: boolean
    pool?: boolean | LotteryPoolDefaultArgs<ExtArgs>
    entry?: boolean | PoolEntryDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["winner"]>

  export type WinnerSelectScalar = {
    id?: boolean
    poolId?: boolean
    entryId?: boolean
    userId?: boolean
    prizeAmount?: boolean
    announcedAt?: boolean
  }

  export type WinnerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "poolId" | "entryId" | "userId" | "prizeAmount" | "announcedAt", ExtArgs["result"]["winner"]>
  export type WinnerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pool?: boolean | LotteryPoolDefaultArgs<ExtArgs>
    entry?: boolean | PoolEntryDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type WinnerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pool?: boolean | LotteryPoolDefaultArgs<ExtArgs>
    entry?: boolean | PoolEntryDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type WinnerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pool?: boolean | LotteryPoolDefaultArgs<ExtArgs>
    entry?: boolean | PoolEntryDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $WinnerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Winner"
    objects: {
      pool: Prisma.$LotteryPoolPayload<ExtArgs>
      entry: Prisma.$PoolEntryPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      poolId: string
      entryId: string
      userId: string
      prizeAmount: number
      announcedAt: Date
    }, ExtArgs["result"]["winner"]>
    composites: {}
  }

  type WinnerGetPayload<S extends boolean | null | undefined | WinnerDefaultArgs> = $Result.GetResult<Prisma.$WinnerPayload, S>

  type WinnerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WinnerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WinnerCountAggregateInputType | true
    }

  export interface WinnerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Winner'], meta: { name: 'Winner' } }
    /**
     * Find zero or one Winner that matches the filter.
     * @param {WinnerFindUniqueArgs} args - Arguments to find a Winner
     * @example
     * // Get one Winner
     * const winner = await prisma.winner.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WinnerFindUniqueArgs>(args: SelectSubset<T, WinnerFindUniqueArgs<ExtArgs>>): Prisma__WinnerClient<$Result.GetResult<Prisma.$WinnerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Winner that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WinnerFindUniqueOrThrowArgs} args - Arguments to find a Winner
     * @example
     * // Get one Winner
     * const winner = await prisma.winner.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WinnerFindUniqueOrThrowArgs>(args: SelectSubset<T, WinnerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WinnerClient<$Result.GetResult<Prisma.$WinnerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Winner that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WinnerFindFirstArgs} args - Arguments to find a Winner
     * @example
     * // Get one Winner
     * const winner = await prisma.winner.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WinnerFindFirstArgs>(args?: SelectSubset<T, WinnerFindFirstArgs<ExtArgs>>): Prisma__WinnerClient<$Result.GetResult<Prisma.$WinnerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Winner that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WinnerFindFirstOrThrowArgs} args - Arguments to find a Winner
     * @example
     * // Get one Winner
     * const winner = await prisma.winner.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WinnerFindFirstOrThrowArgs>(args?: SelectSubset<T, WinnerFindFirstOrThrowArgs<ExtArgs>>): Prisma__WinnerClient<$Result.GetResult<Prisma.$WinnerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Winners that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WinnerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Winners
     * const winners = await prisma.winner.findMany()
     * 
     * // Get first 10 Winners
     * const winners = await prisma.winner.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const winnerWithIdOnly = await prisma.winner.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WinnerFindManyArgs>(args?: SelectSubset<T, WinnerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WinnerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Winner.
     * @param {WinnerCreateArgs} args - Arguments to create a Winner.
     * @example
     * // Create one Winner
     * const Winner = await prisma.winner.create({
     *   data: {
     *     // ... data to create a Winner
     *   }
     * })
     * 
     */
    create<T extends WinnerCreateArgs>(args: SelectSubset<T, WinnerCreateArgs<ExtArgs>>): Prisma__WinnerClient<$Result.GetResult<Prisma.$WinnerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Winners.
     * @param {WinnerCreateManyArgs} args - Arguments to create many Winners.
     * @example
     * // Create many Winners
     * const winner = await prisma.winner.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WinnerCreateManyArgs>(args?: SelectSubset<T, WinnerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Winners and returns the data saved in the database.
     * @param {WinnerCreateManyAndReturnArgs} args - Arguments to create many Winners.
     * @example
     * // Create many Winners
     * const winner = await prisma.winner.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Winners and only return the `id`
     * const winnerWithIdOnly = await prisma.winner.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WinnerCreateManyAndReturnArgs>(args?: SelectSubset<T, WinnerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WinnerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Winner.
     * @param {WinnerDeleteArgs} args - Arguments to delete one Winner.
     * @example
     * // Delete one Winner
     * const Winner = await prisma.winner.delete({
     *   where: {
     *     // ... filter to delete one Winner
     *   }
     * })
     * 
     */
    delete<T extends WinnerDeleteArgs>(args: SelectSubset<T, WinnerDeleteArgs<ExtArgs>>): Prisma__WinnerClient<$Result.GetResult<Prisma.$WinnerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Winner.
     * @param {WinnerUpdateArgs} args - Arguments to update one Winner.
     * @example
     * // Update one Winner
     * const winner = await prisma.winner.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WinnerUpdateArgs>(args: SelectSubset<T, WinnerUpdateArgs<ExtArgs>>): Prisma__WinnerClient<$Result.GetResult<Prisma.$WinnerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Winners.
     * @param {WinnerDeleteManyArgs} args - Arguments to filter Winners to delete.
     * @example
     * // Delete a few Winners
     * const { count } = await prisma.winner.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WinnerDeleteManyArgs>(args?: SelectSubset<T, WinnerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Winners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WinnerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Winners
     * const winner = await prisma.winner.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WinnerUpdateManyArgs>(args: SelectSubset<T, WinnerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Winners and returns the data updated in the database.
     * @param {WinnerUpdateManyAndReturnArgs} args - Arguments to update many Winners.
     * @example
     * // Update many Winners
     * const winner = await prisma.winner.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Winners and only return the `id`
     * const winnerWithIdOnly = await prisma.winner.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends WinnerUpdateManyAndReturnArgs>(args: SelectSubset<T, WinnerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WinnerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Winner.
     * @param {WinnerUpsertArgs} args - Arguments to update or create a Winner.
     * @example
     * // Update or create a Winner
     * const winner = await prisma.winner.upsert({
     *   create: {
     *     // ... data to create a Winner
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Winner we want to update
     *   }
     * })
     */
    upsert<T extends WinnerUpsertArgs>(args: SelectSubset<T, WinnerUpsertArgs<ExtArgs>>): Prisma__WinnerClient<$Result.GetResult<Prisma.$WinnerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Winners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WinnerCountArgs} args - Arguments to filter Winners to count.
     * @example
     * // Count the number of Winners
     * const count = await prisma.winner.count({
     *   where: {
     *     // ... the filter for the Winners we want to count
     *   }
     * })
    **/
    count<T extends WinnerCountArgs>(
      args?: Subset<T, WinnerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WinnerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Winner.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WinnerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WinnerAggregateArgs>(args: Subset<T, WinnerAggregateArgs>): Prisma.PrismaPromise<GetWinnerAggregateType<T>>

    /**
     * Group by Winner.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WinnerGroupByArgs} args - Group by arguments.
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
      T extends WinnerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WinnerGroupByArgs['orderBy'] }
        : { orderBy?: WinnerGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WinnerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWinnerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Winner model
   */
  readonly fields: WinnerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Winner.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WinnerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pool<T extends LotteryPoolDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LotteryPoolDefaultArgs<ExtArgs>>): Prisma__LotteryPoolClient<$Result.GetResult<Prisma.$LotteryPoolPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    entry<T extends PoolEntryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PoolEntryDefaultArgs<ExtArgs>>): Prisma__PoolEntryClient<$Result.GetResult<Prisma.$PoolEntryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Winner model
   */
  interface WinnerFieldRefs {
    readonly id: FieldRef<"Winner", 'String'>
    readonly poolId: FieldRef<"Winner", 'String'>
    readonly entryId: FieldRef<"Winner", 'String'>
    readonly userId: FieldRef<"Winner", 'String'>
    readonly prizeAmount: FieldRef<"Winner", 'Float'>
    readonly announcedAt: FieldRef<"Winner", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Winner findUnique
   */
  export type WinnerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Winner
     */
    select?: WinnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Winner
     */
    omit?: WinnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WinnerInclude<ExtArgs> | null
    /**
     * Filter, which Winner to fetch.
     */
    where: WinnerWhereUniqueInput
  }

  /**
   * Winner findUniqueOrThrow
   */
  export type WinnerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Winner
     */
    select?: WinnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Winner
     */
    omit?: WinnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WinnerInclude<ExtArgs> | null
    /**
     * Filter, which Winner to fetch.
     */
    where: WinnerWhereUniqueInput
  }

  /**
   * Winner findFirst
   */
  export type WinnerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Winner
     */
    select?: WinnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Winner
     */
    omit?: WinnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WinnerInclude<ExtArgs> | null
    /**
     * Filter, which Winner to fetch.
     */
    where?: WinnerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Winners to fetch.
     */
    orderBy?: WinnerOrderByWithRelationInput | WinnerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Winners.
     */
    cursor?: WinnerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Winners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Winners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Winners.
     */
    distinct?: WinnerScalarFieldEnum | WinnerScalarFieldEnum[]
  }

  /**
   * Winner findFirstOrThrow
   */
  export type WinnerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Winner
     */
    select?: WinnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Winner
     */
    omit?: WinnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WinnerInclude<ExtArgs> | null
    /**
     * Filter, which Winner to fetch.
     */
    where?: WinnerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Winners to fetch.
     */
    orderBy?: WinnerOrderByWithRelationInput | WinnerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Winners.
     */
    cursor?: WinnerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Winners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Winners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Winners.
     */
    distinct?: WinnerScalarFieldEnum | WinnerScalarFieldEnum[]
  }

  /**
   * Winner findMany
   */
  export type WinnerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Winner
     */
    select?: WinnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Winner
     */
    omit?: WinnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WinnerInclude<ExtArgs> | null
    /**
     * Filter, which Winners to fetch.
     */
    where?: WinnerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Winners to fetch.
     */
    orderBy?: WinnerOrderByWithRelationInput | WinnerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Winners.
     */
    cursor?: WinnerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Winners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Winners.
     */
    skip?: number
    distinct?: WinnerScalarFieldEnum | WinnerScalarFieldEnum[]
  }

  /**
   * Winner create
   */
  export type WinnerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Winner
     */
    select?: WinnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Winner
     */
    omit?: WinnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WinnerInclude<ExtArgs> | null
    /**
     * The data needed to create a Winner.
     */
    data: XOR<WinnerCreateInput, WinnerUncheckedCreateInput>
  }

  /**
   * Winner createMany
   */
  export type WinnerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Winners.
     */
    data: WinnerCreateManyInput | WinnerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Winner createManyAndReturn
   */
  export type WinnerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Winner
     */
    select?: WinnerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Winner
     */
    omit?: WinnerOmit<ExtArgs> | null
    /**
     * The data used to create many Winners.
     */
    data: WinnerCreateManyInput | WinnerCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WinnerIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Winner update
   */
  export type WinnerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Winner
     */
    select?: WinnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Winner
     */
    omit?: WinnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WinnerInclude<ExtArgs> | null
    /**
     * The data needed to update a Winner.
     */
    data: XOR<WinnerUpdateInput, WinnerUncheckedUpdateInput>
    /**
     * Choose, which Winner to update.
     */
    where: WinnerWhereUniqueInput
  }

  /**
   * Winner updateMany
   */
  export type WinnerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Winners.
     */
    data: XOR<WinnerUpdateManyMutationInput, WinnerUncheckedUpdateManyInput>
    /**
     * Filter which Winners to update
     */
    where?: WinnerWhereInput
    /**
     * Limit how many Winners to update.
     */
    limit?: number
  }

  /**
   * Winner updateManyAndReturn
   */
  export type WinnerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Winner
     */
    select?: WinnerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Winner
     */
    omit?: WinnerOmit<ExtArgs> | null
    /**
     * The data used to update Winners.
     */
    data: XOR<WinnerUpdateManyMutationInput, WinnerUncheckedUpdateManyInput>
    /**
     * Filter which Winners to update
     */
    where?: WinnerWhereInput
    /**
     * Limit how many Winners to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WinnerIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Winner upsert
   */
  export type WinnerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Winner
     */
    select?: WinnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Winner
     */
    omit?: WinnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WinnerInclude<ExtArgs> | null
    /**
     * The filter to search for the Winner to update in case it exists.
     */
    where: WinnerWhereUniqueInput
    /**
     * In case the Winner found by the `where` argument doesn't exist, create a new Winner with this data.
     */
    create: XOR<WinnerCreateInput, WinnerUncheckedCreateInput>
    /**
     * In case the Winner was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WinnerUpdateInput, WinnerUncheckedUpdateInput>
  }

  /**
   * Winner delete
   */
  export type WinnerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Winner
     */
    select?: WinnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Winner
     */
    omit?: WinnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WinnerInclude<ExtArgs> | null
    /**
     * Filter which Winner to delete.
     */
    where: WinnerWhereUniqueInput
  }

  /**
   * Winner deleteMany
   */
  export type WinnerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Winners to delete
     */
    where?: WinnerWhereInput
    /**
     * Limit how many Winners to delete.
     */
    limit?: number
  }

  /**
   * Winner without action
   */
  export type WinnerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Winner
     */
    select?: WinnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Winner
     */
    omit?: WinnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WinnerInclude<ExtArgs> | null
  }


  /**
   * Model AdminLog
   */

  export type AggregateAdminLog = {
    _count: AdminLogCountAggregateOutputType | null
    _min: AdminLogMinAggregateOutputType | null
    _max: AdminLogMaxAggregateOutputType | null
  }

  export type AdminLogMinAggregateOutputType = {
    id: string | null
    adminId: string | null
    action: string | null
    details: string | null
    createdAt: Date | null
  }

  export type AdminLogMaxAggregateOutputType = {
    id: string | null
    adminId: string | null
    action: string | null
    details: string | null
    createdAt: Date | null
  }

  export type AdminLogCountAggregateOutputType = {
    id: number
    adminId: number
    action: number
    details: number
    createdAt: number
    _all: number
  }


  export type AdminLogMinAggregateInputType = {
    id?: true
    adminId?: true
    action?: true
    details?: true
    createdAt?: true
  }

  export type AdminLogMaxAggregateInputType = {
    id?: true
    adminId?: true
    action?: true
    details?: true
    createdAt?: true
  }

  export type AdminLogCountAggregateInputType = {
    id?: true
    adminId?: true
    action?: true
    details?: true
    createdAt?: true
    _all?: true
  }

  export type AdminLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AdminLog to aggregate.
     */
    where?: AdminLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminLogs to fetch.
     */
    orderBy?: AdminLogOrderByWithRelationInput | AdminLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdminLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AdminLogs
    **/
    _count?: true | AdminLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdminLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdminLogMaxAggregateInputType
  }

  export type GetAdminLogAggregateType<T extends AdminLogAggregateArgs> = {
        [P in keyof T & keyof AggregateAdminLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdminLog[P]>
      : GetScalarType<T[P], AggregateAdminLog[P]>
  }




  export type AdminLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdminLogWhereInput
    orderBy?: AdminLogOrderByWithAggregationInput | AdminLogOrderByWithAggregationInput[]
    by: AdminLogScalarFieldEnum[] | AdminLogScalarFieldEnum
    having?: AdminLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdminLogCountAggregateInputType | true
    _min?: AdminLogMinAggregateInputType
    _max?: AdminLogMaxAggregateInputType
  }

  export type AdminLogGroupByOutputType = {
    id: string
    adminId: string
    action: string
    details: string | null
    createdAt: Date
    _count: AdminLogCountAggregateOutputType | null
    _min: AdminLogMinAggregateOutputType | null
    _max: AdminLogMaxAggregateOutputType | null
  }

  type GetAdminLogGroupByPayload<T extends AdminLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdminLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdminLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdminLogGroupByOutputType[P]>
            : GetScalarType<T[P], AdminLogGroupByOutputType[P]>
        }
      >
    >


  export type AdminLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    adminId?: boolean
    action?: boolean
    details?: boolean
    createdAt?: boolean
    admin?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["adminLog"]>

  export type AdminLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    adminId?: boolean
    action?: boolean
    details?: boolean
    createdAt?: boolean
    admin?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["adminLog"]>

  export type AdminLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    adminId?: boolean
    action?: boolean
    details?: boolean
    createdAt?: boolean
    admin?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["adminLog"]>

  export type AdminLogSelectScalar = {
    id?: boolean
    adminId?: boolean
    action?: boolean
    details?: boolean
    createdAt?: boolean
  }

  export type AdminLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "adminId" | "action" | "details" | "createdAt", ExtArgs["result"]["adminLog"]>
  export type AdminLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    admin?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AdminLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    admin?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AdminLogIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    admin?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AdminLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AdminLog"
    objects: {
      admin: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      adminId: string
      action: string
      details: string | null
      createdAt: Date
    }, ExtArgs["result"]["adminLog"]>
    composites: {}
  }

  type AdminLogGetPayload<S extends boolean | null | undefined | AdminLogDefaultArgs> = $Result.GetResult<Prisma.$AdminLogPayload, S>

  type AdminLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AdminLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AdminLogCountAggregateInputType | true
    }

  export interface AdminLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AdminLog'], meta: { name: 'AdminLog' } }
    /**
     * Find zero or one AdminLog that matches the filter.
     * @param {AdminLogFindUniqueArgs} args - Arguments to find a AdminLog
     * @example
     * // Get one AdminLog
     * const adminLog = await prisma.adminLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdminLogFindUniqueArgs>(args: SelectSubset<T, AdminLogFindUniqueArgs<ExtArgs>>): Prisma__AdminLogClient<$Result.GetResult<Prisma.$AdminLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AdminLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AdminLogFindUniqueOrThrowArgs} args - Arguments to find a AdminLog
     * @example
     * // Get one AdminLog
     * const adminLog = await prisma.adminLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdminLogFindUniqueOrThrowArgs>(args: SelectSubset<T, AdminLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AdminLogClient<$Result.GetResult<Prisma.$AdminLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AdminLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminLogFindFirstArgs} args - Arguments to find a AdminLog
     * @example
     * // Get one AdminLog
     * const adminLog = await prisma.adminLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdminLogFindFirstArgs>(args?: SelectSubset<T, AdminLogFindFirstArgs<ExtArgs>>): Prisma__AdminLogClient<$Result.GetResult<Prisma.$AdminLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AdminLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminLogFindFirstOrThrowArgs} args - Arguments to find a AdminLog
     * @example
     * // Get one AdminLog
     * const adminLog = await prisma.adminLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdminLogFindFirstOrThrowArgs>(args?: SelectSubset<T, AdminLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__AdminLogClient<$Result.GetResult<Prisma.$AdminLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AdminLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AdminLogs
     * const adminLogs = await prisma.adminLog.findMany()
     * 
     * // Get first 10 AdminLogs
     * const adminLogs = await prisma.adminLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const adminLogWithIdOnly = await prisma.adminLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AdminLogFindManyArgs>(args?: SelectSubset<T, AdminLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AdminLog.
     * @param {AdminLogCreateArgs} args - Arguments to create a AdminLog.
     * @example
     * // Create one AdminLog
     * const AdminLog = await prisma.adminLog.create({
     *   data: {
     *     // ... data to create a AdminLog
     *   }
     * })
     * 
     */
    create<T extends AdminLogCreateArgs>(args: SelectSubset<T, AdminLogCreateArgs<ExtArgs>>): Prisma__AdminLogClient<$Result.GetResult<Prisma.$AdminLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AdminLogs.
     * @param {AdminLogCreateManyArgs} args - Arguments to create many AdminLogs.
     * @example
     * // Create many AdminLogs
     * const adminLog = await prisma.adminLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AdminLogCreateManyArgs>(args?: SelectSubset<T, AdminLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AdminLogs and returns the data saved in the database.
     * @param {AdminLogCreateManyAndReturnArgs} args - Arguments to create many AdminLogs.
     * @example
     * // Create many AdminLogs
     * const adminLog = await prisma.adminLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AdminLogs and only return the `id`
     * const adminLogWithIdOnly = await prisma.adminLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AdminLogCreateManyAndReturnArgs>(args?: SelectSubset<T, AdminLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AdminLog.
     * @param {AdminLogDeleteArgs} args - Arguments to delete one AdminLog.
     * @example
     * // Delete one AdminLog
     * const AdminLog = await prisma.adminLog.delete({
     *   where: {
     *     // ... filter to delete one AdminLog
     *   }
     * })
     * 
     */
    delete<T extends AdminLogDeleteArgs>(args: SelectSubset<T, AdminLogDeleteArgs<ExtArgs>>): Prisma__AdminLogClient<$Result.GetResult<Prisma.$AdminLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AdminLog.
     * @param {AdminLogUpdateArgs} args - Arguments to update one AdminLog.
     * @example
     * // Update one AdminLog
     * const adminLog = await prisma.adminLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AdminLogUpdateArgs>(args: SelectSubset<T, AdminLogUpdateArgs<ExtArgs>>): Prisma__AdminLogClient<$Result.GetResult<Prisma.$AdminLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AdminLogs.
     * @param {AdminLogDeleteManyArgs} args - Arguments to filter AdminLogs to delete.
     * @example
     * // Delete a few AdminLogs
     * const { count } = await prisma.adminLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AdminLogDeleteManyArgs>(args?: SelectSubset<T, AdminLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AdminLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AdminLogs
     * const adminLog = await prisma.adminLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AdminLogUpdateManyArgs>(args: SelectSubset<T, AdminLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AdminLogs and returns the data updated in the database.
     * @param {AdminLogUpdateManyAndReturnArgs} args - Arguments to update many AdminLogs.
     * @example
     * // Update many AdminLogs
     * const adminLog = await prisma.adminLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AdminLogs and only return the `id`
     * const adminLogWithIdOnly = await prisma.adminLog.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AdminLogUpdateManyAndReturnArgs>(args: SelectSubset<T, AdminLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AdminLog.
     * @param {AdminLogUpsertArgs} args - Arguments to update or create a AdminLog.
     * @example
     * // Update or create a AdminLog
     * const adminLog = await prisma.adminLog.upsert({
     *   create: {
     *     // ... data to create a AdminLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AdminLog we want to update
     *   }
     * })
     */
    upsert<T extends AdminLogUpsertArgs>(args: SelectSubset<T, AdminLogUpsertArgs<ExtArgs>>): Prisma__AdminLogClient<$Result.GetResult<Prisma.$AdminLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AdminLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminLogCountArgs} args - Arguments to filter AdminLogs to count.
     * @example
     * // Count the number of AdminLogs
     * const count = await prisma.adminLog.count({
     *   where: {
     *     // ... the filter for the AdminLogs we want to count
     *   }
     * })
    **/
    count<T extends AdminLogCountArgs>(
      args?: Subset<T, AdminLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdminLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AdminLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AdminLogAggregateArgs>(args: Subset<T, AdminLogAggregateArgs>): Prisma.PrismaPromise<GetAdminLogAggregateType<T>>

    /**
     * Group by AdminLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminLogGroupByArgs} args - Group by arguments.
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
      T extends AdminLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdminLogGroupByArgs['orderBy'] }
        : { orderBy?: AdminLogGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AdminLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdminLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AdminLog model
   */
  readonly fields: AdminLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AdminLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdminLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    admin<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the AdminLog model
   */
  interface AdminLogFieldRefs {
    readonly id: FieldRef<"AdminLog", 'String'>
    readonly adminId: FieldRef<"AdminLog", 'String'>
    readonly action: FieldRef<"AdminLog", 'String'>
    readonly details: FieldRef<"AdminLog", 'String'>
    readonly createdAt: FieldRef<"AdminLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AdminLog findUnique
   */
  export type AdminLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminLog
     */
    select?: AdminLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminLog
     */
    omit?: AdminLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminLogInclude<ExtArgs> | null
    /**
     * Filter, which AdminLog to fetch.
     */
    where: AdminLogWhereUniqueInput
  }

  /**
   * AdminLog findUniqueOrThrow
   */
  export type AdminLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminLog
     */
    select?: AdminLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminLog
     */
    omit?: AdminLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminLogInclude<ExtArgs> | null
    /**
     * Filter, which AdminLog to fetch.
     */
    where: AdminLogWhereUniqueInput
  }

  /**
   * AdminLog findFirst
   */
  export type AdminLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminLog
     */
    select?: AdminLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminLog
     */
    omit?: AdminLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminLogInclude<ExtArgs> | null
    /**
     * Filter, which AdminLog to fetch.
     */
    where?: AdminLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminLogs to fetch.
     */
    orderBy?: AdminLogOrderByWithRelationInput | AdminLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AdminLogs.
     */
    cursor?: AdminLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AdminLogs.
     */
    distinct?: AdminLogScalarFieldEnum | AdminLogScalarFieldEnum[]
  }

  /**
   * AdminLog findFirstOrThrow
   */
  export type AdminLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminLog
     */
    select?: AdminLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminLog
     */
    omit?: AdminLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminLogInclude<ExtArgs> | null
    /**
     * Filter, which AdminLog to fetch.
     */
    where?: AdminLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminLogs to fetch.
     */
    orderBy?: AdminLogOrderByWithRelationInput | AdminLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AdminLogs.
     */
    cursor?: AdminLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AdminLogs.
     */
    distinct?: AdminLogScalarFieldEnum | AdminLogScalarFieldEnum[]
  }

  /**
   * AdminLog findMany
   */
  export type AdminLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminLog
     */
    select?: AdminLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminLog
     */
    omit?: AdminLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminLogInclude<ExtArgs> | null
    /**
     * Filter, which AdminLogs to fetch.
     */
    where?: AdminLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminLogs to fetch.
     */
    orderBy?: AdminLogOrderByWithRelationInput | AdminLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AdminLogs.
     */
    cursor?: AdminLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminLogs.
     */
    skip?: number
    distinct?: AdminLogScalarFieldEnum | AdminLogScalarFieldEnum[]
  }

  /**
   * AdminLog create
   */
  export type AdminLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminLog
     */
    select?: AdminLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminLog
     */
    omit?: AdminLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminLogInclude<ExtArgs> | null
    /**
     * The data needed to create a AdminLog.
     */
    data: XOR<AdminLogCreateInput, AdminLogUncheckedCreateInput>
  }

  /**
   * AdminLog createMany
   */
  export type AdminLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AdminLogs.
     */
    data: AdminLogCreateManyInput | AdminLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AdminLog createManyAndReturn
   */
  export type AdminLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminLog
     */
    select?: AdminLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AdminLog
     */
    omit?: AdminLogOmit<ExtArgs> | null
    /**
     * The data used to create many AdminLogs.
     */
    data: AdminLogCreateManyInput | AdminLogCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminLogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AdminLog update
   */
  export type AdminLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminLog
     */
    select?: AdminLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminLog
     */
    omit?: AdminLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminLogInclude<ExtArgs> | null
    /**
     * The data needed to update a AdminLog.
     */
    data: XOR<AdminLogUpdateInput, AdminLogUncheckedUpdateInput>
    /**
     * Choose, which AdminLog to update.
     */
    where: AdminLogWhereUniqueInput
  }

  /**
   * AdminLog updateMany
   */
  export type AdminLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AdminLogs.
     */
    data: XOR<AdminLogUpdateManyMutationInput, AdminLogUncheckedUpdateManyInput>
    /**
     * Filter which AdminLogs to update
     */
    where?: AdminLogWhereInput
    /**
     * Limit how many AdminLogs to update.
     */
    limit?: number
  }

  /**
   * AdminLog updateManyAndReturn
   */
  export type AdminLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminLog
     */
    select?: AdminLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AdminLog
     */
    omit?: AdminLogOmit<ExtArgs> | null
    /**
     * The data used to update AdminLogs.
     */
    data: XOR<AdminLogUpdateManyMutationInput, AdminLogUncheckedUpdateManyInput>
    /**
     * Filter which AdminLogs to update
     */
    where?: AdminLogWhereInput
    /**
     * Limit how many AdminLogs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminLogIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AdminLog upsert
   */
  export type AdminLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminLog
     */
    select?: AdminLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminLog
     */
    omit?: AdminLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminLogInclude<ExtArgs> | null
    /**
     * The filter to search for the AdminLog to update in case it exists.
     */
    where: AdminLogWhereUniqueInput
    /**
     * In case the AdminLog found by the `where` argument doesn't exist, create a new AdminLog with this data.
     */
    create: XOR<AdminLogCreateInput, AdminLogUncheckedCreateInput>
    /**
     * In case the AdminLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdminLogUpdateInput, AdminLogUncheckedUpdateInput>
  }

  /**
   * AdminLog delete
   */
  export type AdminLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminLog
     */
    select?: AdminLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminLog
     */
    omit?: AdminLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminLogInclude<ExtArgs> | null
    /**
     * Filter which AdminLog to delete.
     */
    where: AdminLogWhereUniqueInput
  }

  /**
   * AdminLog deleteMany
   */
  export type AdminLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AdminLogs to delete
     */
    where?: AdminLogWhereInput
    /**
     * Limit how many AdminLogs to delete.
     */
    limit?: number
  }

  /**
   * AdminLog without action
   */
  export type AdminLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminLog
     */
    select?: AdminLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminLog
     */
    omit?: AdminLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminLogInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    phone: 'phone',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const WalletScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    balance: 'balance',
    currency: 'currency',
    updatedAt: 'updatedAt'
  };

  export type WalletScalarFieldEnum = (typeof WalletScalarFieldEnum)[keyof typeof WalletScalarFieldEnum]


  export const TransactionScalarFieldEnum: {
    id: 'id',
    walletId: 'walletId',
    amount: 'amount',
    type: 'type',
    status: 'status',
    reference: 'reference',
    createdAt: 'createdAt'
  };

  export type TransactionScalarFieldEnum = (typeof TransactionScalarFieldEnum)[keyof typeof TransactionScalarFieldEnum]


  export const LotteryPoolScalarFieldEnum: {
    id: 'id',
    productId: 'productId',
    productName: 'productName',
    productImage: 'productImage',
    pricePerEntry: 'pricePerEntry',
    maxSlots: 'maxSlots',
    filledSlots: 'filledSlots',
    status: 'status',
    startDate: 'startDate',
    endDate: 'endDate',
    drawTime: 'drawTime',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type LotteryPoolScalarFieldEnum = (typeof LotteryPoolScalarFieldEnum)[keyof typeof LotteryPoolScalarFieldEnum]


  export const PoolEntryScalarFieldEnum: {
    id: 'id',
    poolId: 'poolId',
    userId: 'userId',
    ticketNumber: 'ticketNumber',
    purchasedAt: 'purchasedAt'
  };

  export type PoolEntryScalarFieldEnum = (typeof PoolEntryScalarFieldEnum)[keyof typeof PoolEntryScalarFieldEnum]


  export const WinnerScalarFieldEnum: {
    id: 'id',
    poolId: 'poolId',
    entryId: 'entryId',
    userId: 'userId',
    prizeAmount: 'prizeAmount',
    announcedAt: 'announcedAt'
  };

  export type WinnerScalarFieldEnum = (typeof WinnerScalarFieldEnum)[keyof typeof WinnerScalarFieldEnum]


  export const AdminLogScalarFieldEnum: {
    id: 'id',
    adminId: 'adminId',
    action: 'action',
    details: 'details',
    createdAt: 'createdAt'
  };

  export type AdminLogScalarFieldEnum = (typeof AdminLogScalarFieldEnum)[keyof typeof AdminLogScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'TransactionType'
   */
  export type EnumTransactionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TransactionType'>
    


  /**
   * Reference to a field of type 'TransactionType[]'
   */
  export type ListEnumTransactionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TransactionType[]'>
    


  /**
   * Reference to a field of type 'TransactionStatus'
   */
  export type EnumTransactionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TransactionStatus'>
    


  /**
   * Reference to a field of type 'TransactionStatus[]'
   */
  export type ListEnumTransactionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TransactionStatus[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'PoolStatus'
   */
  export type EnumPoolStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PoolStatus'>
    


  /**
   * Reference to a field of type 'PoolStatus[]'
   */
  export type ListEnumPoolStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PoolStatus[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    phone?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    wallet?: XOR<WalletNullableScalarRelationFilter, WalletWhereInput> | null
    entries?: PoolEntryListRelationFilter
    wins?: WinnerListRelationFilter
    adminLogs?: AdminLogListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    phone?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    wallet?: WalletOrderByWithRelationInput
    entries?: PoolEntryOrderByRelationAggregateInput
    wins?: WinnerOrderByRelationAggregateInput
    adminLogs?: AdminLogOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    phone?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    wallet?: XOR<WalletNullableScalarRelationFilter, WalletWhereInput> | null
    entries?: PoolEntryListRelationFilter
    wins?: WinnerListRelationFilter
    adminLogs?: AdminLogListRelationFilter
  }, "id" | "phone">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    phone?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    phone?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type WalletWhereInput = {
    AND?: WalletWhereInput | WalletWhereInput[]
    OR?: WalletWhereInput[]
    NOT?: WalletWhereInput | WalletWhereInput[]
    id?: StringFilter<"Wallet"> | string
    userId?: StringFilter<"Wallet"> | string
    balance?: FloatFilter<"Wallet"> | number
    currency?: StringFilter<"Wallet"> | string
    updatedAt?: DateTimeFilter<"Wallet"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    transactions?: TransactionListRelationFilter
  }

  export type WalletOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    balance?: SortOrder
    currency?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    transactions?: TransactionOrderByRelationAggregateInput
  }

  export type WalletWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: WalletWhereInput | WalletWhereInput[]
    OR?: WalletWhereInput[]
    NOT?: WalletWhereInput | WalletWhereInput[]
    balance?: FloatFilter<"Wallet"> | number
    currency?: StringFilter<"Wallet"> | string
    updatedAt?: DateTimeFilter<"Wallet"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    transactions?: TransactionListRelationFilter
  }, "id" | "userId">

  export type WalletOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    balance?: SortOrder
    currency?: SortOrder
    updatedAt?: SortOrder
    _count?: WalletCountOrderByAggregateInput
    _avg?: WalletAvgOrderByAggregateInput
    _max?: WalletMaxOrderByAggregateInput
    _min?: WalletMinOrderByAggregateInput
    _sum?: WalletSumOrderByAggregateInput
  }

  export type WalletScalarWhereWithAggregatesInput = {
    AND?: WalletScalarWhereWithAggregatesInput | WalletScalarWhereWithAggregatesInput[]
    OR?: WalletScalarWhereWithAggregatesInput[]
    NOT?: WalletScalarWhereWithAggregatesInput | WalletScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Wallet"> | string
    userId?: StringWithAggregatesFilter<"Wallet"> | string
    balance?: FloatWithAggregatesFilter<"Wallet"> | number
    currency?: StringWithAggregatesFilter<"Wallet"> | string
    updatedAt?: DateTimeWithAggregatesFilter<"Wallet"> | Date | string
  }

  export type TransactionWhereInput = {
    AND?: TransactionWhereInput | TransactionWhereInput[]
    OR?: TransactionWhereInput[]
    NOT?: TransactionWhereInput | TransactionWhereInput[]
    id?: StringFilter<"Transaction"> | string
    walletId?: StringFilter<"Transaction"> | string
    amount?: FloatFilter<"Transaction"> | number
    type?: EnumTransactionTypeFilter<"Transaction"> | $Enums.TransactionType
    status?: EnumTransactionStatusFilter<"Transaction"> | $Enums.TransactionStatus
    reference?: StringNullableFilter<"Transaction"> | string | null
    createdAt?: DateTimeFilter<"Transaction"> | Date | string
    wallet?: XOR<WalletScalarRelationFilter, WalletWhereInput>
  }

  export type TransactionOrderByWithRelationInput = {
    id?: SortOrder
    walletId?: SortOrder
    amount?: SortOrder
    type?: SortOrder
    status?: SortOrder
    reference?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    wallet?: WalletOrderByWithRelationInput
  }

  export type TransactionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TransactionWhereInput | TransactionWhereInput[]
    OR?: TransactionWhereInput[]
    NOT?: TransactionWhereInput | TransactionWhereInput[]
    walletId?: StringFilter<"Transaction"> | string
    amount?: FloatFilter<"Transaction"> | number
    type?: EnumTransactionTypeFilter<"Transaction"> | $Enums.TransactionType
    status?: EnumTransactionStatusFilter<"Transaction"> | $Enums.TransactionStatus
    reference?: StringNullableFilter<"Transaction"> | string | null
    createdAt?: DateTimeFilter<"Transaction"> | Date | string
    wallet?: XOR<WalletScalarRelationFilter, WalletWhereInput>
  }, "id">

  export type TransactionOrderByWithAggregationInput = {
    id?: SortOrder
    walletId?: SortOrder
    amount?: SortOrder
    type?: SortOrder
    status?: SortOrder
    reference?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: TransactionCountOrderByAggregateInput
    _avg?: TransactionAvgOrderByAggregateInput
    _max?: TransactionMaxOrderByAggregateInput
    _min?: TransactionMinOrderByAggregateInput
    _sum?: TransactionSumOrderByAggregateInput
  }

  export type TransactionScalarWhereWithAggregatesInput = {
    AND?: TransactionScalarWhereWithAggregatesInput | TransactionScalarWhereWithAggregatesInput[]
    OR?: TransactionScalarWhereWithAggregatesInput[]
    NOT?: TransactionScalarWhereWithAggregatesInput | TransactionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Transaction"> | string
    walletId?: StringWithAggregatesFilter<"Transaction"> | string
    amount?: FloatWithAggregatesFilter<"Transaction"> | number
    type?: EnumTransactionTypeWithAggregatesFilter<"Transaction"> | $Enums.TransactionType
    status?: EnumTransactionStatusWithAggregatesFilter<"Transaction"> | $Enums.TransactionStatus
    reference?: StringNullableWithAggregatesFilter<"Transaction"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Transaction"> | Date | string
  }

  export type LotteryPoolWhereInput = {
    AND?: LotteryPoolWhereInput | LotteryPoolWhereInput[]
    OR?: LotteryPoolWhereInput[]
    NOT?: LotteryPoolWhereInput | LotteryPoolWhereInput[]
    id?: StringFilter<"LotteryPool"> | string
    productId?: StringNullableFilter<"LotteryPool"> | string | null
    productName?: StringFilter<"LotteryPool"> | string
    productImage?: StringFilter<"LotteryPool"> | string
    pricePerEntry?: FloatFilter<"LotteryPool"> | number
    maxSlots?: IntFilter<"LotteryPool"> | number
    filledSlots?: IntFilter<"LotteryPool"> | number
    status?: EnumPoolStatusFilter<"LotteryPool"> | $Enums.PoolStatus
    startDate?: DateTimeFilter<"LotteryPool"> | Date | string
    endDate?: DateTimeFilter<"LotteryPool"> | Date | string
    drawTime?: DateTimeNullableFilter<"LotteryPool"> | Date | string | null
    description?: StringNullableFilter<"LotteryPool"> | string | null
    createdAt?: DateTimeFilter<"LotteryPool"> | Date | string
    updatedAt?: DateTimeFilter<"LotteryPool"> | Date | string
    entries?: PoolEntryListRelationFilter
    winners?: WinnerListRelationFilter
  }

  export type LotteryPoolOrderByWithRelationInput = {
    id?: SortOrder
    productId?: SortOrderInput | SortOrder
    productName?: SortOrder
    productImage?: SortOrder
    pricePerEntry?: SortOrder
    maxSlots?: SortOrder
    filledSlots?: SortOrder
    status?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    drawTime?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    entries?: PoolEntryOrderByRelationAggregateInput
    winners?: WinnerOrderByRelationAggregateInput
  }

  export type LotteryPoolWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LotteryPoolWhereInput | LotteryPoolWhereInput[]
    OR?: LotteryPoolWhereInput[]
    NOT?: LotteryPoolWhereInput | LotteryPoolWhereInput[]
    productId?: StringNullableFilter<"LotteryPool"> | string | null
    productName?: StringFilter<"LotteryPool"> | string
    productImage?: StringFilter<"LotteryPool"> | string
    pricePerEntry?: FloatFilter<"LotteryPool"> | number
    maxSlots?: IntFilter<"LotteryPool"> | number
    filledSlots?: IntFilter<"LotteryPool"> | number
    status?: EnumPoolStatusFilter<"LotteryPool"> | $Enums.PoolStatus
    startDate?: DateTimeFilter<"LotteryPool"> | Date | string
    endDate?: DateTimeFilter<"LotteryPool"> | Date | string
    drawTime?: DateTimeNullableFilter<"LotteryPool"> | Date | string | null
    description?: StringNullableFilter<"LotteryPool"> | string | null
    createdAt?: DateTimeFilter<"LotteryPool"> | Date | string
    updatedAt?: DateTimeFilter<"LotteryPool"> | Date | string
    entries?: PoolEntryListRelationFilter
    winners?: WinnerListRelationFilter
  }, "id">

  export type LotteryPoolOrderByWithAggregationInput = {
    id?: SortOrder
    productId?: SortOrderInput | SortOrder
    productName?: SortOrder
    productImage?: SortOrder
    pricePerEntry?: SortOrder
    maxSlots?: SortOrder
    filledSlots?: SortOrder
    status?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    drawTime?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: LotteryPoolCountOrderByAggregateInput
    _avg?: LotteryPoolAvgOrderByAggregateInput
    _max?: LotteryPoolMaxOrderByAggregateInput
    _min?: LotteryPoolMinOrderByAggregateInput
    _sum?: LotteryPoolSumOrderByAggregateInput
  }

  export type LotteryPoolScalarWhereWithAggregatesInput = {
    AND?: LotteryPoolScalarWhereWithAggregatesInput | LotteryPoolScalarWhereWithAggregatesInput[]
    OR?: LotteryPoolScalarWhereWithAggregatesInput[]
    NOT?: LotteryPoolScalarWhereWithAggregatesInput | LotteryPoolScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"LotteryPool"> | string
    productId?: StringNullableWithAggregatesFilter<"LotteryPool"> | string | null
    productName?: StringWithAggregatesFilter<"LotteryPool"> | string
    productImage?: StringWithAggregatesFilter<"LotteryPool"> | string
    pricePerEntry?: FloatWithAggregatesFilter<"LotteryPool"> | number
    maxSlots?: IntWithAggregatesFilter<"LotteryPool"> | number
    filledSlots?: IntWithAggregatesFilter<"LotteryPool"> | number
    status?: EnumPoolStatusWithAggregatesFilter<"LotteryPool"> | $Enums.PoolStatus
    startDate?: DateTimeWithAggregatesFilter<"LotteryPool"> | Date | string
    endDate?: DateTimeWithAggregatesFilter<"LotteryPool"> | Date | string
    drawTime?: DateTimeNullableWithAggregatesFilter<"LotteryPool"> | Date | string | null
    description?: StringNullableWithAggregatesFilter<"LotteryPool"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"LotteryPool"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"LotteryPool"> | Date | string
  }

  export type PoolEntryWhereInput = {
    AND?: PoolEntryWhereInput | PoolEntryWhereInput[]
    OR?: PoolEntryWhereInput[]
    NOT?: PoolEntryWhereInput | PoolEntryWhereInput[]
    id?: StringFilter<"PoolEntry"> | string
    poolId?: StringFilter<"PoolEntry"> | string
    userId?: StringFilter<"PoolEntry"> | string
    ticketNumber?: IntFilter<"PoolEntry"> | number
    purchasedAt?: DateTimeFilter<"PoolEntry"> | Date | string
    pool?: XOR<LotteryPoolScalarRelationFilter, LotteryPoolWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    winner?: XOR<WinnerNullableScalarRelationFilter, WinnerWhereInput> | null
  }

  export type PoolEntryOrderByWithRelationInput = {
    id?: SortOrder
    poolId?: SortOrder
    userId?: SortOrder
    ticketNumber?: SortOrder
    purchasedAt?: SortOrder
    pool?: LotteryPoolOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
    winner?: WinnerOrderByWithRelationInput
  }

  export type PoolEntryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    poolId_ticketNumber?: PoolEntryPoolIdTicketNumberCompoundUniqueInput
    AND?: PoolEntryWhereInput | PoolEntryWhereInput[]
    OR?: PoolEntryWhereInput[]
    NOT?: PoolEntryWhereInput | PoolEntryWhereInput[]
    poolId?: StringFilter<"PoolEntry"> | string
    userId?: StringFilter<"PoolEntry"> | string
    ticketNumber?: IntFilter<"PoolEntry"> | number
    purchasedAt?: DateTimeFilter<"PoolEntry"> | Date | string
    pool?: XOR<LotteryPoolScalarRelationFilter, LotteryPoolWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    winner?: XOR<WinnerNullableScalarRelationFilter, WinnerWhereInput> | null
  }, "id" | "poolId_ticketNumber">

  export type PoolEntryOrderByWithAggregationInput = {
    id?: SortOrder
    poolId?: SortOrder
    userId?: SortOrder
    ticketNumber?: SortOrder
    purchasedAt?: SortOrder
    _count?: PoolEntryCountOrderByAggregateInput
    _avg?: PoolEntryAvgOrderByAggregateInput
    _max?: PoolEntryMaxOrderByAggregateInput
    _min?: PoolEntryMinOrderByAggregateInput
    _sum?: PoolEntrySumOrderByAggregateInput
  }

  export type PoolEntryScalarWhereWithAggregatesInput = {
    AND?: PoolEntryScalarWhereWithAggregatesInput | PoolEntryScalarWhereWithAggregatesInput[]
    OR?: PoolEntryScalarWhereWithAggregatesInput[]
    NOT?: PoolEntryScalarWhereWithAggregatesInput | PoolEntryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PoolEntry"> | string
    poolId?: StringWithAggregatesFilter<"PoolEntry"> | string
    userId?: StringWithAggregatesFilter<"PoolEntry"> | string
    ticketNumber?: IntWithAggregatesFilter<"PoolEntry"> | number
    purchasedAt?: DateTimeWithAggregatesFilter<"PoolEntry"> | Date | string
  }

  export type WinnerWhereInput = {
    AND?: WinnerWhereInput | WinnerWhereInput[]
    OR?: WinnerWhereInput[]
    NOT?: WinnerWhereInput | WinnerWhereInput[]
    id?: StringFilter<"Winner"> | string
    poolId?: StringFilter<"Winner"> | string
    entryId?: StringFilter<"Winner"> | string
    userId?: StringFilter<"Winner"> | string
    prizeAmount?: FloatFilter<"Winner"> | number
    announcedAt?: DateTimeFilter<"Winner"> | Date | string
    pool?: XOR<LotteryPoolScalarRelationFilter, LotteryPoolWhereInput>
    entry?: XOR<PoolEntryScalarRelationFilter, PoolEntryWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type WinnerOrderByWithRelationInput = {
    id?: SortOrder
    poolId?: SortOrder
    entryId?: SortOrder
    userId?: SortOrder
    prizeAmount?: SortOrder
    announcedAt?: SortOrder
    pool?: LotteryPoolOrderByWithRelationInput
    entry?: PoolEntryOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type WinnerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    poolId?: string
    entryId?: string
    AND?: WinnerWhereInput | WinnerWhereInput[]
    OR?: WinnerWhereInput[]
    NOT?: WinnerWhereInput | WinnerWhereInput[]
    userId?: StringFilter<"Winner"> | string
    prizeAmount?: FloatFilter<"Winner"> | number
    announcedAt?: DateTimeFilter<"Winner"> | Date | string
    pool?: XOR<LotteryPoolScalarRelationFilter, LotteryPoolWhereInput>
    entry?: XOR<PoolEntryScalarRelationFilter, PoolEntryWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "poolId" | "entryId">

  export type WinnerOrderByWithAggregationInput = {
    id?: SortOrder
    poolId?: SortOrder
    entryId?: SortOrder
    userId?: SortOrder
    prizeAmount?: SortOrder
    announcedAt?: SortOrder
    _count?: WinnerCountOrderByAggregateInput
    _avg?: WinnerAvgOrderByAggregateInput
    _max?: WinnerMaxOrderByAggregateInput
    _min?: WinnerMinOrderByAggregateInput
    _sum?: WinnerSumOrderByAggregateInput
  }

  export type WinnerScalarWhereWithAggregatesInput = {
    AND?: WinnerScalarWhereWithAggregatesInput | WinnerScalarWhereWithAggregatesInput[]
    OR?: WinnerScalarWhereWithAggregatesInput[]
    NOT?: WinnerScalarWhereWithAggregatesInput | WinnerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Winner"> | string
    poolId?: StringWithAggregatesFilter<"Winner"> | string
    entryId?: StringWithAggregatesFilter<"Winner"> | string
    userId?: StringWithAggregatesFilter<"Winner"> | string
    prizeAmount?: FloatWithAggregatesFilter<"Winner"> | number
    announcedAt?: DateTimeWithAggregatesFilter<"Winner"> | Date | string
  }

  export type AdminLogWhereInput = {
    AND?: AdminLogWhereInput | AdminLogWhereInput[]
    OR?: AdminLogWhereInput[]
    NOT?: AdminLogWhereInput | AdminLogWhereInput[]
    id?: StringFilter<"AdminLog"> | string
    adminId?: StringFilter<"AdminLog"> | string
    action?: StringFilter<"AdminLog"> | string
    details?: StringNullableFilter<"AdminLog"> | string | null
    createdAt?: DateTimeFilter<"AdminLog"> | Date | string
    admin?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AdminLogOrderByWithRelationInput = {
    id?: SortOrder
    adminId?: SortOrder
    action?: SortOrder
    details?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    admin?: UserOrderByWithRelationInput
  }

  export type AdminLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AdminLogWhereInput | AdminLogWhereInput[]
    OR?: AdminLogWhereInput[]
    NOT?: AdminLogWhereInput | AdminLogWhereInput[]
    adminId?: StringFilter<"AdminLog"> | string
    action?: StringFilter<"AdminLog"> | string
    details?: StringNullableFilter<"AdminLog"> | string | null
    createdAt?: DateTimeFilter<"AdminLog"> | Date | string
    admin?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type AdminLogOrderByWithAggregationInput = {
    id?: SortOrder
    adminId?: SortOrder
    action?: SortOrder
    details?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: AdminLogCountOrderByAggregateInput
    _max?: AdminLogMaxOrderByAggregateInput
    _min?: AdminLogMinOrderByAggregateInput
  }

  export type AdminLogScalarWhereWithAggregatesInput = {
    AND?: AdminLogScalarWhereWithAggregatesInput | AdminLogScalarWhereWithAggregatesInput[]
    OR?: AdminLogScalarWhereWithAggregatesInput[]
    NOT?: AdminLogScalarWhereWithAggregatesInput | AdminLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AdminLog"> | string
    adminId?: StringWithAggregatesFilter<"AdminLog"> | string
    action?: StringWithAggregatesFilter<"AdminLog"> | string
    details?: StringNullableWithAggregatesFilter<"AdminLog"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"AdminLog"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    phone: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    wallet?: WalletCreateNestedOneWithoutUserInput
    entries?: PoolEntryCreateNestedManyWithoutUserInput
    wins?: WinnerCreateNestedManyWithoutUserInput
    adminLogs?: AdminLogCreateNestedManyWithoutAdminInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    phone: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    wallet?: WalletUncheckedCreateNestedOneWithoutUserInput
    entries?: PoolEntryUncheckedCreateNestedManyWithoutUserInput
    wins?: WinnerUncheckedCreateNestedManyWithoutUserInput
    adminLogs?: AdminLogUncheckedCreateNestedManyWithoutAdminInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    wallet?: WalletUpdateOneWithoutUserNestedInput
    entries?: PoolEntryUpdateManyWithoutUserNestedInput
    wins?: WinnerUpdateManyWithoutUserNestedInput
    adminLogs?: AdminLogUpdateManyWithoutAdminNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    wallet?: WalletUncheckedUpdateOneWithoutUserNestedInput
    entries?: PoolEntryUncheckedUpdateManyWithoutUserNestedInput
    wins?: WinnerUncheckedUpdateManyWithoutUserNestedInput
    adminLogs?: AdminLogUncheckedUpdateManyWithoutAdminNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    phone: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WalletCreateInput = {
    id?: string
    balance?: number
    currency?: string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutWalletInput
    transactions?: TransactionCreateNestedManyWithoutWalletInput
  }

  export type WalletUncheckedCreateInput = {
    id?: string
    userId: string
    balance?: number
    currency?: string
    updatedAt?: Date | string
    transactions?: TransactionUncheckedCreateNestedManyWithoutWalletInput
  }

  export type WalletUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    balance?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutWalletNestedInput
    transactions?: TransactionUpdateManyWithoutWalletNestedInput
  }

  export type WalletUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    balance?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: TransactionUncheckedUpdateManyWithoutWalletNestedInput
  }

  export type WalletCreateManyInput = {
    id?: string
    userId: string
    balance?: number
    currency?: string
    updatedAt?: Date | string
  }

  export type WalletUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    balance?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WalletUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    balance?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionCreateInput = {
    id?: string
    amount: number
    type: $Enums.TransactionType
    status?: $Enums.TransactionStatus
    reference?: string | null
    createdAt?: Date | string
    wallet: WalletCreateNestedOneWithoutTransactionsInput
  }

  export type TransactionUncheckedCreateInput = {
    id?: string
    walletId: string
    amount: number
    type: $Enums.TransactionType
    status?: $Enums.TransactionStatus
    reference?: string | null
    createdAt?: Date | string
  }

  export type TransactionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    wallet?: WalletUpdateOneRequiredWithoutTransactionsNestedInput
  }

  export type TransactionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    walletId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionCreateManyInput = {
    id?: string
    walletId: string
    amount: number
    type: $Enums.TransactionType
    status?: $Enums.TransactionStatus
    reference?: string | null
    createdAt?: Date | string
  }

  export type TransactionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    walletId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LotteryPoolCreateInput = {
    id?: string
    productId?: string | null
    productName: string
    productImage: string
    pricePerEntry?: number
    maxSlots: number
    filledSlots?: number
    status?: $Enums.PoolStatus
    startDate?: Date | string
    endDate: Date | string
    drawTime?: Date | string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    entries?: PoolEntryCreateNestedManyWithoutPoolInput
    winners?: WinnerCreateNestedManyWithoutPoolInput
  }

  export type LotteryPoolUncheckedCreateInput = {
    id?: string
    productId?: string | null
    productName: string
    productImage: string
    pricePerEntry?: number
    maxSlots: number
    filledSlots?: number
    status?: $Enums.PoolStatus
    startDate?: Date | string
    endDate: Date | string
    drawTime?: Date | string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    entries?: PoolEntryUncheckedCreateNestedManyWithoutPoolInput
    winners?: WinnerUncheckedCreateNestedManyWithoutPoolInput
  }

  export type LotteryPoolUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: NullableStringFieldUpdateOperationsInput | string | null
    productName?: StringFieldUpdateOperationsInput | string
    productImage?: StringFieldUpdateOperationsInput | string
    pricePerEntry?: FloatFieldUpdateOperationsInput | number
    maxSlots?: IntFieldUpdateOperationsInput | number
    filledSlots?: IntFieldUpdateOperationsInput | number
    status?: EnumPoolStatusFieldUpdateOperationsInput | $Enums.PoolStatus
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    drawTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    entries?: PoolEntryUpdateManyWithoutPoolNestedInput
    winners?: WinnerUpdateManyWithoutPoolNestedInput
  }

  export type LotteryPoolUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: NullableStringFieldUpdateOperationsInput | string | null
    productName?: StringFieldUpdateOperationsInput | string
    productImage?: StringFieldUpdateOperationsInput | string
    pricePerEntry?: FloatFieldUpdateOperationsInput | number
    maxSlots?: IntFieldUpdateOperationsInput | number
    filledSlots?: IntFieldUpdateOperationsInput | number
    status?: EnumPoolStatusFieldUpdateOperationsInput | $Enums.PoolStatus
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    drawTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    entries?: PoolEntryUncheckedUpdateManyWithoutPoolNestedInput
    winners?: WinnerUncheckedUpdateManyWithoutPoolNestedInput
  }

  export type LotteryPoolCreateManyInput = {
    id?: string
    productId?: string | null
    productName: string
    productImage: string
    pricePerEntry?: number
    maxSlots: number
    filledSlots?: number
    status?: $Enums.PoolStatus
    startDate?: Date | string
    endDate: Date | string
    drawTime?: Date | string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LotteryPoolUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: NullableStringFieldUpdateOperationsInput | string | null
    productName?: StringFieldUpdateOperationsInput | string
    productImage?: StringFieldUpdateOperationsInput | string
    pricePerEntry?: FloatFieldUpdateOperationsInput | number
    maxSlots?: IntFieldUpdateOperationsInput | number
    filledSlots?: IntFieldUpdateOperationsInput | number
    status?: EnumPoolStatusFieldUpdateOperationsInput | $Enums.PoolStatus
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    drawTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LotteryPoolUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: NullableStringFieldUpdateOperationsInput | string | null
    productName?: StringFieldUpdateOperationsInput | string
    productImage?: StringFieldUpdateOperationsInput | string
    pricePerEntry?: FloatFieldUpdateOperationsInput | number
    maxSlots?: IntFieldUpdateOperationsInput | number
    filledSlots?: IntFieldUpdateOperationsInput | number
    status?: EnumPoolStatusFieldUpdateOperationsInput | $Enums.PoolStatus
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    drawTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PoolEntryCreateInput = {
    id?: string
    ticketNumber: number
    purchasedAt?: Date | string
    pool: LotteryPoolCreateNestedOneWithoutEntriesInput
    user: UserCreateNestedOneWithoutEntriesInput
    winner?: WinnerCreateNestedOneWithoutEntryInput
  }

  export type PoolEntryUncheckedCreateInput = {
    id?: string
    poolId: string
    userId: string
    ticketNumber: number
    purchasedAt?: Date | string
    winner?: WinnerUncheckedCreateNestedOneWithoutEntryInput
  }

  export type PoolEntryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    ticketNumber?: IntFieldUpdateOperationsInput | number
    purchasedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pool?: LotteryPoolUpdateOneRequiredWithoutEntriesNestedInput
    user?: UserUpdateOneRequiredWithoutEntriesNestedInput
    winner?: WinnerUpdateOneWithoutEntryNestedInput
  }

  export type PoolEntryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    poolId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    ticketNumber?: IntFieldUpdateOperationsInput | number
    purchasedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    winner?: WinnerUncheckedUpdateOneWithoutEntryNestedInput
  }

  export type PoolEntryCreateManyInput = {
    id?: string
    poolId: string
    userId: string
    ticketNumber: number
    purchasedAt?: Date | string
  }

  export type PoolEntryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    ticketNumber?: IntFieldUpdateOperationsInput | number
    purchasedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PoolEntryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    poolId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    ticketNumber?: IntFieldUpdateOperationsInput | number
    purchasedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WinnerCreateInput = {
    id?: string
    prizeAmount: number
    announcedAt?: Date | string
    pool: LotteryPoolCreateNestedOneWithoutWinnersInput
    entry: PoolEntryCreateNestedOneWithoutWinnerInput
    user: UserCreateNestedOneWithoutWinsInput
  }

  export type WinnerUncheckedCreateInput = {
    id?: string
    poolId: string
    entryId: string
    userId: string
    prizeAmount: number
    announcedAt?: Date | string
  }

  export type WinnerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    prizeAmount?: FloatFieldUpdateOperationsInput | number
    announcedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pool?: LotteryPoolUpdateOneRequiredWithoutWinnersNestedInput
    entry?: PoolEntryUpdateOneRequiredWithoutWinnerNestedInput
    user?: UserUpdateOneRequiredWithoutWinsNestedInput
  }

  export type WinnerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    poolId?: StringFieldUpdateOperationsInput | string
    entryId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    prizeAmount?: FloatFieldUpdateOperationsInput | number
    announcedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WinnerCreateManyInput = {
    id?: string
    poolId: string
    entryId: string
    userId: string
    prizeAmount: number
    announcedAt?: Date | string
  }

  export type WinnerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    prizeAmount?: FloatFieldUpdateOperationsInput | number
    announcedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WinnerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    poolId?: StringFieldUpdateOperationsInput | string
    entryId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    prizeAmount?: FloatFieldUpdateOperationsInput | number
    announcedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminLogCreateInput = {
    id?: string
    action: string
    details?: string | null
    createdAt?: Date | string
    admin: UserCreateNestedOneWithoutAdminLogsInput
  }

  export type AdminLogUncheckedCreateInput = {
    id?: string
    adminId: string
    action: string
    details?: string | null
    createdAt?: Date | string
  }

  export type AdminLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    details?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    admin?: UserUpdateOneRequiredWithoutAdminLogsNestedInput
  }

  export type AdminLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    adminId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    details?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminLogCreateManyInput = {
    id?: string
    adminId: string
    action: string
    details?: string | null
    createdAt?: Date | string
  }

  export type AdminLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    details?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    adminId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    details?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type WalletNullableScalarRelationFilter = {
    is?: WalletWhereInput | null
    isNot?: WalletWhereInput | null
  }

  export type PoolEntryListRelationFilter = {
    every?: PoolEntryWhereInput
    some?: PoolEntryWhereInput
    none?: PoolEntryWhereInput
  }

  export type WinnerListRelationFilter = {
    every?: WinnerWhereInput
    some?: WinnerWhereInput
    none?: WinnerWhereInput
  }

  export type AdminLogListRelationFilter = {
    every?: AdminLogWhereInput
    some?: AdminLogWhereInput
    none?: AdminLogWhereInput
  }

  export type PoolEntryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WinnerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AdminLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    phone?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    phone?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    phone?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type TransactionListRelationFilter = {
    every?: TransactionWhereInput
    some?: TransactionWhereInput
    none?: TransactionWhereInput
  }

  export type TransactionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WalletCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    balance?: SortOrder
    currency?: SortOrder
    updatedAt?: SortOrder
  }

  export type WalletAvgOrderByAggregateInput = {
    balance?: SortOrder
  }

  export type WalletMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    balance?: SortOrder
    currency?: SortOrder
    updatedAt?: SortOrder
  }

  export type WalletMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    balance?: SortOrder
    currency?: SortOrder
    updatedAt?: SortOrder
  }

  export type WalletSumOrderByAggregateInput = {
    balance?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type EnumTransactionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionType | EnumTransactionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionTypeFilter<$PrismaModel> | $Enums.TransactionType
  }

  export type EnumTransactionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionStatus | EnumTransactionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionStatus[] | ListEnumTransactionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionStatus[] | ListEnumTransactionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionStatusFilter<$PrismaModel> | $Enums.TransactionStatus
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type WalletScalarRelationFilter = {
    is?: WalletWhereInput
    isNot?: WalletWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type TransactionCountOrderByAggregateInput = {
    id?: SortOrder
    walletId?: SortOrder
    amount?: SortOrder
    type?: SortOrder
    status?: SortOrder
    reference?: SortOrder
    createdAt?: SortOrder
  }

  export type TransactionAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type TransactionMaxOrderByAggregateInput = {
    id?: SortOrder
    walletId?: SortOrder
    amount?: SortOrder
    type?: SortOrder
    status?: SortOrder
    reference?: SortOrder
    createdAt?: SortOrder
  }

  export type TransactionMinOrderByAggregateInput = {
    id?: SortOrder
    walletId?: SortOrder
    amount?: SortOrder
    type?: SortOrder
    status?: SortOrder
    reference?: SortOrder
    createdAt?: SortOrder
  }

  export type TransactionSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type EnumTransactionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionType | EnumTransactionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionTypeWithAggregatesFilter<$PrismaModel> | $Enums.TransactionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTransactionTypeFilter<$PrismaModel>
    _max?: NestedEnumTransactionTypeFilter<$PrismaModel>
  }

  export type EnumTransactionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionStatus | EnumTransactionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionStatus[] | ListEnumTransactionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionStatus[] | ListEnumTransactionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionStatusWithAggregatesFilter<$PrismaModel> | $Enums.TransactionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTransactionStatusFilter<$PrismaModel>
    _max?: NestedEnumTransactionStatusFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type EnumPoolStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PoolStatus | EnumPoolStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PoolStatus[] | ListEnumPoolStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PoolStatus[] | ListEnumPoolStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPoolStatusFilter<$PrismaModel> | $Enums.PoolStatus
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type LotteryPoolCountOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    productName?: SortOrder
    productImage?: SortOrder
    pricePerEntry?: SortOrder
    maxSlots?: SortOrder
    filledSlots?: SortOrder
    status?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    drawTime?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LotteryPoolAvgOrderByAggregateInput = {
    pricePerEntry?: SortOrder
    maxSlots?: SortOrder
    filledSlots?: SortOrder
  }

  export type LotteryPoolMaxOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    productName?: SortOrder
    productImage?: SortOrder
    pricePerEntry?: SortOrder
    maxSlots?: SortOrder
    filledSlots?: SortOrder
    status?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    drawTime?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LotteryPoolMinOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    productName?: SortOrder
    productImage?: SortOrder
    pricePerEntry?: SortOrder
    maxSlots?: SortOrder
    filledSlots?: SortOrder
    status?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    drawTime?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LotteryPoolSumOrderByAggregateInput = {
    pricePerEntry?: SortOrder
    maxSlots?: SortOrder
    filledSlots?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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

  export type EnumPoolStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PoolStatus | EnumPoolStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PoolStatus[] | ListEnumPoolStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PoolStatus[] | ListEnumPoolStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPoolStatusWithAggregatesFilter<$PrismaModel> | $Enums.PoolStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPoolStatusFilter<$PrismaModel>
    _max?: NestedEnumPoolStatusFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type LotteryPoolScalarRelationFilter = {
    is?: LotteryPoolWhereInput
    isNot?: LotteryPoolWhereInput
  }

  export type WinnerNullableScalarRelationFilter = {
    is?: WinnerWhereInput | null
    isNot?: WinnerWhereInput | null
  }

  export type PoolEntryPoolIdTicketNumberCompoundUniqueInput = {
    poolId: string
    ticketNumber: number
  }

  export type PoolEntryCountOrderByAggregateInput = {
    id?: SortOrder
    poolId?: SortOrder
    userId?: SortOrder
    ticketNumber?: SortOrder
    purchasedAt?: SortOrder
  }

  export type PoolEntryAvgOrderByAggregateInput = {
    ticketNumber?: SortOrder
  }

  export type PoolEntryMaxOrderByAggregateInput = {
    id?: SortOrder
    poolId?: SortOrder
    userId?: SortOrder
    ticketNumber?: SortOrder
    purchasedAt?: SortOrder
  }

  export type PoolEntryMinOrderByAggregateInput = {
    id?: SortOrder
    poolId?: SortOrder
    userId?: SortOrder
    ticketNumber?: SortOrder
    purchasedAt?: SortOrder
  }

  export type PoolEntrySumOrderByAggregateInput = {
    ticketNumber?: SortOrder
  }

  export type PoolEntryScalarRelationFilter = {
    is?: PoolEntryWhereInput
    isNot?: PoolEntryWhereInput
  }

  export type WinnerCountOrderByAggregateInput = {
    id?: SortOrder
    poolId?: SortOrder
    entryId?: SortOrder
    userId?: SortOrder
    prizeAmount?: SortOrder
    announcedAt?: SortOrder
  }

  export type WinnerAvgOrderByAggregateInput = {
    prizeAmount?: SortOrder
  }

  export type WinnerMaxOrderByAggregateInput = {
    id?: SortOrder
    poolId?: SortOrder
    entryId?: SortOrder
    userId?: SortOrder
    prizeAmount?: SortOrder
    announcedAt?: SortOrder
  }

  export type WinnerMinOrderByAggregateInput = {
    id?: SortOrder
    poolId?: SortOrder
    entryId?: SortOrder
    userId?: SortOrder
    prizeAmount?: SortOrder
    announcedAt?: SortOrder
  }

  export type WinnerSumOrderByAggregateInput = {
    prizeAmount?: SortOrder
  }

  export type AdminLogCountOrderByAggregateInput = {
    id?: SortOrder
    adminId?: SortOrder
    action?: SortOrder
    details?: SortOrder
    createdAt?: SortOrder
  }

  export type AdminLogMaxOrderByAggregateInput = {
    id?: SortOrder
    adminId?: SortOrder
    action?: SortOrder
    details?: SortOrder
    createdAt?: SortOrder
  }

  export type AdminLogMinOrderByAggregateInput = {
    id?: SortOrder
    adminId?: SortOrder
    action?: SortOrder
    details?: SortOrder
    createdAt?: SortOrder
  }

  export type WalletCreateNestedOneWithoutUserInput = {
    create?: XOR<WalletCreateWithoutUserInput, WalletUncheckedCreateWithoutUserInput>
    connectOrCreate?: WalletCreateOrConnectWithoutUserInput
    connect?: WalletWhereUniqueInput
  }

  export type PoolEntryCreateNestedManyWithoutUserInput = {
    create?: XOR<PoolEntryCreateWithoutUserInput, PoolEntryUncheckedCreateWithoutUserInput> | PoolEntryCreateWithoutUserInput[] | PoolEntryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PoolEntryCreateOrConnectWithoutUserInput | PoolEntryCreateOrConnectWithoutUserInput[]
    createMany?: PoolEntryCreateManyUserInputEnvelope
    connect?: PoolEntryWhereUniqueInput | PoolEntryWhereUniqueInput[]
  }

  export type WinnerCreateNestedManyWithoutUserInput = {
    create?: XOR<WinnerCreateWithoutUserInput, WinnerUncheckedCreateWithoutUserInput> | WinnerCreateWithoutUserInput[] | WinnerUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WinnerCreateOrConnectWithoutUserInput | WinnerCreateOrConnectWithoutUserInput[]
    createMany?: WinnerCreateManyUserInputEnvelope
    connect?: WinnerWhereUniqueInput | WinnerWhereUniqueInput[]
  }

  export type AdminLogCreateNestedManyWithoutAdminInput = {
    create?: XOR<AdminLogCreateWithoutAdminInput, AdminLogUncheckedCreateWithoutAdminInput> | AdminLogCreateWithoutAdminInput[] | AdminLogUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: AdminLogCreateOrConnectWithoutAdminInput | AdminLogCreateOrConnectWithoutAdminInput[]
    createMany?: AdminLogCreateManyAdminInputEnvelope
    connect?: AdminLogWhereUniqueInput | AdminLogWhereUniqueInput[]
  }

  export type WalletUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<WalletCreateWithoutUserInput, WalletUncheckedCreateWithoutUserInput>
    connectOrCreate?: WalletCreateOrConnectWithoutUserInput
    connect?: WalletWhereUniqueInput
  }

  export type PoolEntryUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PoolEntryCreateWithoutUserInput, PoolEntryUncheckedCreateWithoutUserInput> | PoolEntryCreateWithoutUserInput[] | PoolEntryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PoolEntryCreateOrConnectWithoutUserInput | PoolEntryCreateOrConnectWithoutUserInput[]
    createMany?: PoolEntryCreateManyUserInputEnvelope
    connect?: PoolEntryWhereUniqueInput | PoolEntryWhereUniqueInput[]
  }

  export type WinnerUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<WinnerCreateWithoutUserInput, WinnerUncheckedCreateWithoutUserInput> | WinnerCreateWithoutUserInput[] | WinnerUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WinnerCreateOrConnectWithoutUserInput | WinnerCreateOrConnectWithoutUserInput[]
    createMany?: WinnerCreateManyUserInputEnvelope
    connect?: WinnerWhereUniqueInput | WinnerWhereUniqueInput[]
  }

  export type AdminLogUncheckedCreateNestedManyWithoutAdminInput = {
    create?: XOR<AdminLogCreateWithoutAdminInput, AdminLogUncheckedCreateWithoutAdminInput> | AdminLogCreateWithoutAdminInput[] | AdminLogUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: AdminLogCreateOrConnectWithoutAdminInput | AdminLogCreateOrConnectWithoutAdminInput[]
    createMany?: AdminLogCreateManyAdminInputEnvelope
    connect?: AdminLogWhereUniqueInput | AdminLogWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type WalletUpdateOneWithoutUserNestedInput = {
    create?: XOR<WalletCreateWithoutUserInput, WalletUncheckedCreateWithoutUserInput>
    connectOrCreate?: WalletCreateOrConnectWithoutUserInput
    upsert?: WalletUpsertWithoutUserInput
    disconnect?: WalletWhereInput | boolean
    delete?: WalletWhereInput | boolean
    connect?: WalletWhereUniqueInput
    update?: XOR<XOR<WalletUpdateToOneWithWhereWithoutUserInput, WalletUpdateWithoutUserInput>, WalletUncheckedUpdateWithoutUserInput>
  }

  export type PoolEntryUpdateManyWithoutUserNestedInput = {
    create?: XOR<PoolEntryCreateWithoutUserInput, PoolEntryUncheckedCreateWithoutUserInput> | PoolEntryCreateWithoutUserInput[] | PoolEntryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PoolEntryCreateOrConnectWithoutUserInput | PoolEntryCreateOrConnectWithoutUserInput[]
    upsert?: PoolEntryUpsertWithWhereUniqueWithoutUserInput | PoolEntryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PoolEntryCreateManyUserInputEnvelope
    set?: PoolEntryWhereUniqueInput | PoolEntryWhereUniqueInput[]
    disconnect?: PoolEntryWhereUniqueInput | PoolEntryWhereUniqueInput[]
    delete?: PoolEntryWhereUniqueInput | PoolEntryWhereUniqueInput[]
    connect?: PoolEntryWhereUniqueInput | PoolEntryWhereUniqueInput[]
    update?: PoolEntryUpdateWithWhereUniqueWithoutUserInput | PoolEntryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PoolEntryUpdateManyWithWhereWithoutUserInput | PoolEntryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PoolEntryScalarWhereInput | PoolEntryScalarWhereInput[]
  }

  export type WinnerUpdateManyWithoutUserNestedInput = {
    create?: XOR<WinnerCreateWithoutUserInput, WinnerUncheckedCreateWithoutUserInput> | WinnerCreateWithoutUserInput[] | WinnerUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WinnerCreateOrConnectWithoutUserInput | WinnerCreateOrConnectWithoutUserInput[]
    upsert?: WinnerUpsertWithWhereUniqueWithoutUserInput | WinnerUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WinnerCreateManyUserInputEnvelope
    set?: WinnerWhereUniqueInput | WinnerWhereUniqueInput[]
    disconnect?: WinnerWhereUniqueInput | WinnerWhereUniqueInput[]
    delete?: WinnerWhereUniqueInput | WinnerWhereUniqueInput[]
    connect?: WinnerWhereUniqueInput | WinnerWhereUniqueInput[]
    update?: WinnerUpdateWithWhereUniqueWithoutUserInput | WinnerUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WinnerUpdateManyWithWhereWithoutUserInput | WinnerUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WinnerScalarWhereInput | WinnerScalarWhereInput[]
  }

  export type AdminLogUpdateManyWithoutAdminNestedInput = {
    create?: XOR<AdminLogCreateWithoutAdminInput, AdminLogUncheckedCreateWithoutAdminInput> | AdminLogCreateWithoutAdminInput[] | AdminLogUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: AdminLogCreateOrConnectWithoutAdminInput | AdminLogCreateOrConnectWithoutAdminInput[]
    upsert?: AdminLogUpsertWithWhereUniqueWithoutAdminInput | AdminLogUpsertWithWhereUniqueWithoutAdminInput[]
    createMany?: AdminLogCreateManyAdminInputEnvelope
    set?: AdminLogWhereUniqueInput | AdminLogWhereUniqueInput[]
    disconnect?: AdminLogWhereUniqueInput | AdminLogWhereUniqueInput[]
    delete?: AdminLogWhereUniqueInput | AdminLogWhereUniqueInput[]
    connect?: AdminLogWhereUniqueInput | AdminLogWhereUniqueInput[]
    update?: AdminLogUpdateWithWhereUniqueWithoutAdminInput | AdminLogUpdateWithWhereUniqueWithoutAdminInput[]
    updateMany?: AdminLogUpdateManyWithWhereWithoutAdminInput | AdminLogUpdateManyWithWhereWithoutAdminInput[]
    deleteMany?: AdminLogScalarWhereInput | AdminLogScalarWhereInput[]
  }

  export type WalletUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<WalletCreateWithoutUserInput, WalletUncheckedCreateWithoutUserInput>
    connectOrCreate?: WalletCreateOrConnectWithoutUserInput
    upsert?: WalletUpsertWithoutUserInput
    disconnect?: WalletWhereInput | boolean
    delete?: WalletWhereInput | boolean
    connect?: WalletWhereUniqueInput
    update?: XOR<XOR<WalletUpdateToOneWithWhereWithoutUserInput, WalletUpdateWithoutUserInput>, WalletUncheckedUpdateWithoutUserInput>
  }

  export type PoolEntryUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PoolEntryCreateWithoutUserInput, PoolEntryUncheckedCreateWithoutUserInput> | PoolEntryCreateWithoutUserInput[] | PoolEntryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PoolEntryCreateOrConnectWithoutUserInput | PoolEntryCreateOrConnectWithoutUserInput[]
    upsert?: PoolEntryUpsertWithWhereUniqueWithoutUserInput | PoolEntryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PoolEntryCreateManyUserInputEnvelope
    set?: PoolEntryWhereUniqueInput | PoolEntryWhereUniqueInput[]
    disconnect?: PoolEntryWhereUniqueInput | PoolEntryWhereUniqueInput[]
    delete?: PoolEntryWhereUniqueInput | PoolEntryWhereUniqueInput[]
    connect?: PoolEntryWhereUniqueInput | PoolEntryWhereUniqueInput[]
    update?: PoolEntryUpdateWithWhereUniqueWithoutUserInput | PoolEntryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PoolEntryUpdateManyWithWhereWithoutUserInput | PoolEntryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PoolEntryScalarWhereInput | PoolEntryScalarWhereInput[]
  }

  export type WinnerUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<WinnerCreateWithoutUserInput, WinnerUncheckedCreateWithoutUserInput> | WinnerCreateWithoutUserInput[] | WinnerUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WinnerCreateOrConnectWithoutUserInput | WinnerCreateOrConnectWithoutUserInput[]
    upsert?: WinnerUpsertWithWhereUniqueWithoutUserInput | WinnerUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WinnerCreateManyUserInputEnvelope
    set?: WinnerWhereUniqueInput | WinnerWhereUniqueInput[]
    disconnect?: WinnerWhereUniqueInput | WinnerWhereUniqueInput[]
    delete?: WinnerWhereUniqueInput | WinnerWhereUniqueInput[]
    connect?: WinnerWhereUniqueInput | WinnerWhereUniqueInput[]
    update?: WinnerUpdateWithWhereUniqueWithoutUserInput | WinnerUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WinnerUpdateManyWithWhereWithoutUserInput | WinnerUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WinnerScalarWhereInput | WinnerScalarWhereInput[]
  }

  export type AdminLogUncheckedUpdateManyWithoutAdminNestedInput = {
    create?: XOR<AdminLogCreateWithoutAdminInput, AdminLogUncheckedCreateWithoutAdminInput> | AdminLogCreateWithoutAdminInput[] | AdminLogUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: AdminLogCreateOrConnectWithoutAdminInput | AdminLogCreateOrConnectWithoutAdminInput[]
    upsert?: AdminLogUpsertWithWhereUniqueWithoutAdminInput | AdminLogUpsertWithWhereUniqueWithoutAdminInput[]
    createMany?: AdminLogCreateManyAdminInputEnvelope
    set?: AdminLogWhereUniqueInput | AdminLogWhereUniqueInput[]
    disconnect?: AdminLogWhereUniqueInput | AdminLogWhereUniqueInput[]
    delete?: AdminLogWhereUniqueInput | AdminLogWhereUniqueInput[]
    connect?: AdminLogWhereUniqueInput | AdminLogWhereUniqueInput[]
    update?: AdminLogUpdateWithWhereUniqueWithoutAdminInput | AdminLogUpdateWithWhereUniqueWithoutAdminInput[]
    updateMany?: AdminLogUpdateManyWithWhereWithoutAdminInput | AdminLogUpdateManyWithWhereWithoutAdminInput[]
    deleteMany?: AdminLogScalarWhereInput | AdminLogScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutWalletInput = {
    create?: XOR<UserCreateWithoutWalletInput, UserUncheckedCreateWithoutWalletInput>
    connectOrCreate?: UserCreateOrConnectWithoutWalletInput
    connect?: UserWhereUniqueInput
  }

  export type TransactionCreateNestedManyWithoutWalletInput = {
    create?: XOR<TransactionCreateWithoutWalletInput, TransactionUncheckedCreateWithoutWalletInput> | TransactionCreateWithoutWalletInput[] | TransactionUncheckedCreateWithoutWalletInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutWalletInput | TransactionCreateOrConnectWithoutWalletInput[]
    createMany?: TransactionCreateManyWalletInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type TransactionUncheckedCreateNestedManyWithoutWalletInput = {
    create?: XOR<TransactionCreateWithoutWalletInput, TransactionUncheckedCreateWithoutWalletInput> | TransactionCreateWithoutWalletInput[] | TransactionUncheckedCreateWithoutWalletInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutWalletInput | TransactionCreateOrConnectWithoutWalletInput[]
    createMany?: TransactionCreateManyWalletInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutWalletNestedInput = {
    create?: XOR<UserCreateWithoutWalletInput, UserUncheckedCreateWithoutWalletInput>
    connectOrCreate?: UserCreateOrConnectWithoutWalletInput
    upsert?: UserUpsertWithoutWalletInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutWalletInput, UserUpdateWithoutWalletInput>, UserUncheckedUpdateWithoutWalletInput>
  }

  export type TransactionUpdateManyWithoutWalletNestedInput = {
    create?: XOR<TransactionCreateWithoutWalletInput, TransactionUncheckedCreateWithoutWalletInput> | TransactionCreateWithoutWalletInput[] | TransactionUncheckedCreateWithoutWalletInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutWalletInput | TransactionCreateOrConnectWithoutWalletInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutWalletInput | TransactionUpsertWithWhereUniqueWithoutWalletInput[]
    createMany?: TransactionCreateManyWalletInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutWalletInput | TransactionUpdateWithWhereUniqueWithoutWalletInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutWalletInput | TransactionUpdateManyWithWhereWithoutWalletInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type TransactionUncheckedUpdateManyWithoutWalletNestedInput = {
    create?: XOR<TransactionCreateWithoutWalletInput, TransactionUncheckedCreateWithoutWalletInput> | TransactionCreateWithoutWalletInput[] | TransactionUncheckedCreateWithoutWalletInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutWalletInput | TransactionCreateOrConnectWithoutWalletInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutWalletInput | TransactionUpsertWithWhereUniqueWithoutWalletInput[]
    createMany?: TransactionCreateManyWalletInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutWalletInput | TransactionUpdateWithWhereUniqueWithoutWalletInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutWalletInput | TransactionUpdateManyWithWhereWithoutWalletInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type WalletCreateNestedOneWithoutTransactionsInput = {
    create?: XOR<WalletCreateWithoutTransactionsInput, WalletUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: WalletCreateOrConnectWithoutTransactionsInput
    connect?: WalletWhereUniqueInput
  }

  export type EnumTransactionTypeFieldUpdateOperationsInput = {
    set?: $Enums.TransactionType
  }

  export type EnumTransactionStatusFieldUpdateOperationsInput = {
    set?: $Enums.TransactionStatus
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type WalletUpdateOneRequiredWithoutTransactionsNestedInput = {
    create?: XOR<WalletCreateWithoutTransactionsInput, WalletUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: WalletCreateOrConnectWithoutTransactionsInput
    upsert?: WalletUpsertWithoutTransactionsInput
    connect?: WalletWhereUniqueInput
    update?: XOR<XOR<WalletUpdateToOneWithWhereWithoutTransactionsInput, WalletUpdateWithoutTransactionsInput>, WalletUncheckedUpdateWithoutTransactionsInput>
  }

  export type PoolEntryCreateNestedManyWithoutPoolInput = {
    create?: XOR<PoolEntryCreateWithoutPoolInput, PoolEntryUncheckedCreateWithoutPoolInput> | PoolEntryCreateWithoutPoolInput[] | PoolEntryUncheckedCreateWithoutPoolInput[]
    connectOrCreate?: PoolEntryCreateOrConnectWithoutPoolInput | PoolEntryCreateOrConnectWithoutPoolInput[]
    createMany?: PoolEntryCreateManyPoolInputEnvelope
    connect?: PoolEntryWhereUniqueInput | PoolEntryWhereUniqueInput[]
  }

  export type WinnerCreateNestedManyWithoutPoolInput = {
    create?: XOR<WinnerCreateWithoutPoolInput, WinnerUncheckedCreateWithoutPoolInput> | WinnerCreateWithoutPoolInput[] | WinnerUncheckedCreateWithoutPoolInput[]
    connectOrCreate?: WinnerCreateOrConnectWithoutPoolInput | WinnerCreateOrConnectWithoutPoolInput[]
    createMany?: WinnerCreateManyPoolInputEnvelope
    connect?: WinnerWhereUniqueInput | WinnerWhereUniqueInput[]
  }

  export type PoolEntryUncheckedCreateNestedManyWithoutPoolInput = {
    create?: XOR<PoolEntryCreateWithoutPoolInput, PoolEntryUncheckedCreateWithoutPoolInput> | PoolEntryCreateWithoutPoolInput[] | PoolEntryUncheckedCreateWithoutPoolInput[]
    connectOrCreate?: PoolEntryCreateOrConnectWithoutPoolInput | PoolEntryCreateOrConnectWithoutPoolInput[]
    createMany?: PoolEntryCreateManyPoolInputEnvelope
    connect?: PoolEntryWhereUniqueInput | PoolEntryWhereUniqueInput[]
  }

  export type WinnerUncheckedCreateNestedManyWithoutPoolInput = {
    create?: XOR<WinnerCreateWithoutPoolInput, WinnerUncheckedCreateWithoutPoolInput> | WinnerCreateWithoutPoolInput[] | WinnerUncheckedCreateWithoutPoolInput[]
    connectOrCreate?: WinnerCreateOrConnectWithoutPoolInput | WinnerCreateOrConnectWithoutPoolInput[]
    createMany?: WinnerCreateManyPoolInputEnvelope
    connect?: WinnerWhereUniqueInput | WinnerWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumPoolStatusFieldUpdateOperationsInput = {
    set?: $Enums.PoolStatus
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type PoolEntryUpdateManyWithoutPoolNestedInput = {
    create?: XOR<PoolEntryCreateWithoutPoolInput, PoolEntryUncheckedCreateWithoutPoolInput> | PoolEntryCreateWithoutPoolInput[] | PoolEntryUncheckedCreateWithoutPoolInput[]
    connectOrCreate?: PoolEntryCreateOrConnectWithoutPoolInput | PoolEntryCreateOrConnectWithoutPoolInput[]
    upsert?: PoolEntryUpsertWithWhereUniqueWithoutPoolInput | PoolEntryUpsertWithWhereUniqueWithoutPoolInput[]
    createMany?: PoolEntryCreateManyPoolInputEnvelope
    set?: PoolEntryWhereUniqueInput | PoolEntryWhereUniqueInput[]
    disconnect?: PoolEntryWhereUniqueInput | PoolEntryWhereUniqueInput[]
    delete?: PoolEntryWhereUniqueInput | PoolEntryWhereUniqueInput[]
    connect?: PoolEntryWhereUniqueInput | PoolEntryWhereUniqueInput[]
    update?: PoolEntryUpdateWithWhereUniqueWithoutPoolInput | PoolEntryUpdateWithWhereUniqueWithoutPoolInput[]
    updateMany?: PoolEntryUpdateManyWithWhereWithoutPoolInput | PoolEntryUpdateManyWithWhereWithoutPoolInput[]
    deleteMany?: PoolEntryScalarWhereInput | PoolEntryScalarWhereInput[]
  }

  export type WinnerUpdateManyWithoutPoolNestedInput = {
    create?: XOR<WinnerCreateWithoutPoolInput, WinnerUncheckedCreateWithoutPoolInput> | WinnerCreateWithoutPoolInput[] | WinnerUncheckedCreateWithoutPoolInput[]
    connectOrCreate?: WinnerCreateOrConnectWithoutPoolInput | WinnerCreateOrConnectWithoutPoolInput[]
    upsert?: WinnerUpsertWithWhereUniqueWithoutPoolInput | WinnerUpsertWithWhereUniqueWithoutPoolInput[]
    createMany?: WinnerCreateManyPoolInputEnvelope
    set?: WinnerWhereUniqueInput | WinnerWhereUniqueInput[]
    disconnect?: WinnerWhereUniqueInput | WinnerWhereUniqueInput[]
    delete?: WinnerWhereUniqueInput | WinnerWhereUniqueInput[]
    connect?: WinnerWhereUniqueInput | WinnerWhereUniqueInput[]
    update?: WinnerUpdateWithWhereUniqueWithoutPoolInput | WinnerUpdateWithWhereUniqueWithoutPoolInput[]
    updateMany?: WinnerUpdateManyWithWhereWithoutPoolInput | WinnerUpdateManyWithWhereWithoutPoolInput[]
    deleteMany?: WinnerScalarWhereInput | WinnerScalarWhereInput[]
  }

  export type PoolEntryUncheckedUpdateManyWithoutPoolNestedInput = {
    create?: XOR<PoolEntryCreateWithoutPoolInput, PoolEntryUncheckedCreateWithoutPoolInput> | PoolEntryCreateWithoutPoolInput[] | PoolEntryUncheckedCreateWithoutPoolInput[]
    connectOrCreate?: PoolEntryCreateOrConnectWithoutPoolInput | PoolEntryCreateOrConnectWithoutPoolInput[]
    upsert?: PoolEntryUpsertWithWhereUniqueWithoutPoolInput | PoolEntryUpsertWithWhereUniqueWithoutPoolInput[]
    createMany?: PoolEntryCreateManyPoolInputEnvelope
    set?: PoolEntryWhereUniqueInput | PoolEntryWhereUniqueInput[]
    disconnect?: PoolEntryWhereUniqueInput | PoolEntryWhereUniqueInput[]
    delete?: PoolEntryWhereUniqueInput | PoolEntryWhereUniqueInput[]
    connect?: PoolEntryWhereUniqueInput | PoolEntryWhereUniqueInput[]
    update?: PoolEntryUpdateWithWhereUniqueWithoutPoolInput | PoolEntryUpdateWithWhereUniqueWithoutPoolInput[]
    updateMany?: PoolEntryUpdateManyWithWhereWithoutPoolInput | PoolEntryUpdateManyWithWhereWithoutPoolInput[]
    deleteMany?: PoolEntryScalarWhereInput | PoolEntryScalarWhereInput[]
  }

  export type WinnerUncheckedUpdateManyWithoutPoolNestedInput = {
    create?: XOR<WinnerCreateWithoutPoolInput, WinnerUncheckedCreateWithoutPoolInput> | WinnerCreateWithoutPoolInput[] | WinnerUncheckedCreateWithoutPoolInput[]
    connectOrCreate?: WinnerCreateOrConnectWithoutPoolInput | WinnerCreateOrConnectWithoutPoolInput[]
    upsert?: WinnerUpsertWithWhereUniqueWithoutPoolInput | WinnerUpsertWithWhereUniqueWithoutPoolInput[]
    createMany?: WinnerCreateManyPoolInputEnvelope
    set?: WinnerWhereUniqueInput | WinnerWhereUniqueInput[]
    disconnect?: WinnerWhereUniqueInput | WinnerWhereUniqueInput[]
    delete?: WinnerWhereUniqueInput | WinnerWhereUniqueInput[]
    connect?: WinnerWhereUniqueInput | WinnerWhereUniqueInput[]
    update?: WinnerUpdateWithWhereUniqueWithoutPoolInput | WinnerUpdateWithWhereUniqueWithoutPoolInput[]
    updateMany?: WinnerUpdateManyWithWhereWithoutPoolInput | WinnerUpdateManyWithWhereWithoutPoolInput[]
    deleteMany?: WinnerScalarWhereInput | WinnerScalarWhereInput[]
  }

  export type LotteryPoolCreateNestedOneWithoutEntriesInput = {
    create?: XOR<LotteryPoolCreateWithoutEntriesInput, LotteryPoolUncheckedCreateWithoutEntriesInput>
    connectOrCreate?: LotteryPoolCreateOrConnectWithoutEntriesInput
    connect?: LotteryPoolWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutEntriesInput = {
    create?: XOR<UserCreateWithoutEntriesInput, UserUncheckedCreateWithoutEntriesInput>
    connectOrCreate?: UserCreateOrConnectWithoutEntriesInput
    connect?: UserWhereUniqueInput
  }

  export type WinnerCreateNestedOneWithoutEntryInput = {
    create?: XOR<WinnerCreateWithoutEntryInput, WinnerUncheckedCreateWithoutEntryInput>
    connectOrCreate?: WinnerCreateOrConnectWithoutEntryInput
    connect?: WinnerWhereUniqueInput
  }

  export type WinnerUncheckedCreateNestedOneWithoutEntryInput = {
    create?: XOR<WinnerCreateWithoutEntryInput, WinnerUncheckedCreateWithoutEntryInput>
    connectOrCreate?: WinnerCreateOrConnectWithoutEntryInput
    connect?: WinnerWhereUniqueInput
  }

  export type LotteryPoolUpdateOneRequiredWithoutEntriesNestedInput = {
    create?: XOR<LotteryPoolCreateWithoutEntriesInput, LotteryPoolUncheckedCreateWithoutEntriesInput>
    connectOrCreate?: LotteryPoolCreateOrConnectWithoutEntriesInput
    upsert?: LotteryPoolUpsertWithoutEntriesInput
    connect?: LotteryPoolWhereUniqueInput
    update?: XOR<XOR<LotteryPoolUpdateToOneWithWhereWithoutEntriesInput, LotteryPoolUpdateWithoutEntriesInput>, LotteryPoolUncheckedUpdateWithoutEntriesInput>
  }

  export type UserUpdateOneRequiredWithoutEntriesNestedInput = {
    create?: XOR<UserCreateWithoutEntriesInput, UserUncheckedCreateWithoutEntriesInput>
    connectOrCreate?: UserCreateOrConnectWithoutEntriesInput
    upsert?: UserUpsertWithoutEntriesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutEntriesInput, UserUpdateWithoutEntriesInput>, UserUncheckedUpdateWithoutEntriesInput>
  }

  export type WinnerUpdateOneWithoutEntryNestedInput = {
    create?: XOR<WinnerCreateWithoutEntryInput, WinnerUncheckedCreateWithoutEntryInput>
    connectOrCreate?: WinnerCreateOrConnectWithoutEntryInput
    upsert?: WinnerUpsertWithoutEntryInput
    disconnect?: WinnerWhereInput | boolean
    delete?: WinnerWhereInput | boolean
    connect?: WinnerWhereUniqueInput
    update?: XOR<XOR<WinnerUpdateToOneWithWhereWithoutEntryInput, WinnerUpdateWithoutEntryInput>, WinnerUncheckedUpdateWithoutEntryInput>
  }

  export type WinnerUncheckedUpdateOneWithoutEntryNestedInput = {
    create?: XOR<WinnerCreateWithoutEntryInput, WinnerUncheckedCreateWithoutEntryInput>
    connectOrCreate?: WinnerCreateOrConnectWithoutEntryInput
    upsert?: WinnerUpsertWithoutEntryInput
    disconnect?: WinnerWhereInput | boolean
    delete?: WinnerWhereInput | boolean
    connect?: WinnerWhereUniqueInput
    update?: XOR<XOR<WinnerUpdateToOneWithWhereWithoutEntryInput, WinnerUpdateWithoutEntryInput>, WinnerUncheckedUpdateWithoutEntryInput>
  }

  export type LotteryPoolCreateNestedOneWithoutWinnersInput = {
    create?: XOR<LotteryPoolCreateWithoutWinnersInput, LotteryPoolUncheckedCreateWithoutWinnersInput>
    connectOrCreate?: LotteryPoolCreateOrConnectWithoutWinnersInput
    connect?: LotteryPoolWhereUniqueInput
  }

  export type PoolEntryCreateNestedOneWithoutWinnerInput = {
    create?: XOR<PoolEntryCreateWithoutWinnerInput, PoolEntryUncheckedCreateWithoutWinnerInput>
    connectOrCreate?: PoolEntryCreateOrConnectWithoutWinnerInput
    connect?: PoolEntryWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutWinsInput = {
    create?: XOR<UserCreateWithoutWinsInput, UserUncheckedCreateWithoutWinsInput>
    connectOrCreate?: UserCreateOrConnectWithoutWinsInput
    connect?: UserWhereUniqueInput
  }

  export type LotteryPoolUpdateOneRequiredWithoutWinnersNestedInput = {
    create?: XOR<LotteryPoolCreateWithoutWinnersInput, LotteryPoolUncheckedCreateWithoutWinnersInput>
    connectOrCreate?: LotteryPoolCreateOrConnectWithoutWinnersInput
    upsert?: LotteryPoolUpsertWithoutWinnersInput
    connect?: LotteryPoolWhereUniqueInput
    update?: XOR<XOR<LotteryPoolUpdateToOneWithWhereWithoutWinnersInput, LotteryPoolUpdateWithoutWinnersInput>, LotteryPoolUncheckedUpdateWithoutWinnersInput>
  }

  export type PoolEntryUpdateOneRequiredWithoutWinnerNestedInput = {
    create?: XOR<PoolEntryCreateWithoutWinnerInput, PoolEntryUncheckedCreateWithoutWinnerInput>
    connectOrCreate?: PoolEntryCreateOrConnectWithoutWinnerInput
    upsert?: PoolEntryUpsertWithoutWinnerInput
    connect?: PoolEntryWhereUniqueInput
    update?: XOR<XOR<PoolEntryUpdateToOneWithWhereWithoutWinnerInput, PoolEntryUpdateWithoutWinnerInput>, PoolEntryUncheckedUpdateWithoutWinnerInput>
  }

  export type UserUpdateOneRequiredWithoutWinsNestedInput = {
    create?: XOR<UserCreateWithoutWinsInput, UserUncheckedCreateWithoutWinsInput>
    connectOrCreate?: UserCreateOrConnectWithoutWinsInput
    upsert?: UserUpsertWithoutWinsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutWinsInput, UserUpdateWithoutWinsInput>, UserUncheckedUpdateWithoutWinsInput>
  }

  export type UserCreateNestedOneWithoutAdminLogsInput = {
    create?: XOR<UserCreateWithoutAdminLogsInput, UserUncheckedCreateWithoutAdminLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAdminLogsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutAdminLogsNestedInput = {
    create?: XOR<UserCreateWithoutAdminLogsInput, UserUncheckedCreateWithoutAdminLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAdminLogsInput
    upsert?: UserUpsertWithoutAdminLogsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAdminLogsInput, UserUpdateWithoutAdminLogsInput>, UserUncheckedUpdateWithoutAdminLogsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
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

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedEnumTransactionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionType | EnumTransactionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionTypeFilter<$PrismaModel> | $Enums.TransactionType
  }

  export type NestedEnumTransactionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionStatus | EnumTransactionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionStatus[] | ListEnumTransactionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionStatus[] | ListEnumTransactionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionStatusFilter<$PrismaModel> | $Enums.TransactionStatus
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumTransactionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionType | EnumTransactionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionTypeWithAggregatesFilter<$PrismaModel> | $Enums.TransactionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTransactionTypeFilter<$PrismaModel>
    _max?: NestedEnumTransactionTypeFilter<$PrismaModel>
  }

  export type NestedEnumTransactionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionStatus | EnumTransactionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionStatus[] | ListEnumTransactionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionStatus[] | ListEnumTransactionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionStatusWithAggregatesFilter<$PrismaModel> | $Enums.TransactionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTransactionStatusFilter<$PrismaModel>
    _max?: NestedEnumTransactionStatusFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
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
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumPoolStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PoolStatus | EnumPoolStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PoolStatus[] | ListEnumPoolStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PoolStatus[] | ListEnumPoolStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPoolStatusFilter<$PrismaModel> | $Enums.PoolStatus
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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

  export type NestedEnumPoolStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PoolStatus | EnumPoolStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PoolStatus[] | ListEnumPoolStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PoolStatus[] | ListEnumPoolStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPoolStatusWithAggregatesFilter<$PrismaModel> | $Enums.PoolStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPoolStatusFilter<$PrismaModel>
    _max?: NestedEnumPoolStatusFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type WalletCreateWithoutUserInput = {
    id?: string
    balance?: number
    currency?: string
    updatedAt?: Date | string
    transactions?: TransactionCreateNestedManyWithoutWalletInput
  }

  export type WalletUncheckedCreateWithoutUserInput = {
    id?: string
    balance?: number
    currency?: string
    updatedAt?: Date | string
    transactions?: TransactionUncheckedCreateNestedManyWithoutWalletInput
  }

  export type WalletCreateOrConnectWithoutUserInput = {
    where: WalletWhereUniqueInput
    create: XOR<WalletCreateWithoutUserInput, WalletUncheckedCreateWithoutUserInput>
  }

  export type PoolEntryCreateWithoutUserInput = {
    id?: string
    ticketNumber: number
    purchasedAt?: Date | string
    pool: LotteryPoolCreateNestedOneWithoutEntriesInput
    winner?: WinnerCreateNestedOneWithoutEntryInput
  }

  export type PoolEntryUncheckedCreateWithoutUserInput = {
    id?: string
    poolId: string
    ticketNumber: number
    purchasedAt?: Date | string
    winner?: WinnerUncheckedCreateNestedOneWithoutEntryInput
  }

  export type PoolEntryCreateOrConnectWithoutUserInput = {
    where: PoolEntryWhereUniqueInput
    create: XOR<PoolEntryCreateWithoutUserInput, PoolEntryUncheckedCreateWithoutUserInput>
  }

  export type PoolEntryCreateManyUserInputEnvelope = {
    data: PoolEntryCreateManyUserInput | PoolEntryCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type WinnerCreateWithoutUserInput = {
    id?: string
    prizeAmount: number
    announcedAt?: Date | string
    pool: LotteryPoolCreateNestedOneWithoutWinnersInput
    entry: PoolEntryCreateNestedOneWithoutWinnerInput
  }

  export type WinnerUncheckedCreateWithoutUserInput = {
    id?: string
    poolId: string
    entryId: string
    prizeAmount: number
    announcedAt?: Date | string
  }

  export type WinnerCreateOrConnectWithoutUserInput = {
    where: WinnerWhereUniqueInput
    create: XOR<WinnerCreateWithoutUserInput, WinnerUncheckedCreateWithoutUserInput>
  }

  export type WinnerCreateManyUserInputEnvelope = {
    data: WinnerCreateManyUserInput | WinnerCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AdminLogCreateWithoutAdminInput = {
    id?: string
    action: string
    details?: string | null
    createdAt?: Date | string
  }

  export type AdminLogUncheckedCreateWithoutAdminInput = {
    id?: string
    action: string
    details?: string | null
    createdAt?: Date | string
  }

  export type AdminLogCreateOrConnectWithoutAdminInput = {
    where: AdminLogWhereUniqueInput
    create: XOR<AdminLogCreateWithoutAdminInput, AdminLogUncheckedCreateWithoutAdminInput>
  }

  export type AdminLogCreateManyAdminInputEnvelope = {
    data: AdminLogCreateManyAdminInput | AdminLogCreateManyAdminInput[]
    skipDuplicates?: boolean
  }

  export type WalletUpsertWithoutUserInput = {
    update: XOR<WalletUpdateWithoutUserInput, WalletUncheckedUpdateWithoutUserInput>
    create: XOR<WalletCreateWithoutUserInput, WalletUncheckedCreateWithoutUserInput>
    where?: WalletWhereInput
  }

  export type WalletUpdateToOneWithWhereWithoutUserInput = {
    where?: WalletWhereInput
    data: XOR<WalletUpdateWithoutUserInput, WalletUncheckedUpdateWithoutUserInput>
  }

  export type WalletUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    balance?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: TransactionUpdateManyWithoutWalletNestedInput
  }

  export type WalletUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    balance?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: TransactionUncheckedUpdateManyWithoutWalletNestedInput
  }

  export type PoolEntryUpsertWithWhereUniqueWithoutUserInput = {
    where: PoolEntryWhereUniqueInput
    update: XOR<PoolEntryUpdateWithoutUserInput, PoolEntryUncheckedUpdateWithoutUserInput>
    create: XOR<PoolEntryCreateWithoutUserInput, PoolEntryUncheckedCreateWithoutUserInput>
  }

  export type PoolEntryUpdateWithWhereUniqueWithoutUserInput = {
    where: PoolEntryWhereUniqueInput
    data: XOR<PoolEntryUpdateWithoutUserInput, PoolEntryUncheckedUpdateWithoutUserInput>
  }

  export type PoolEntryUpdateManyWithWhereWithoutUserInput = {
    where: PoolEntryScalarWhereInput
    data: XOR<PoolEntryUpdateManyMutationInput, PoolEntryUncheckedUpdateManyWithoutUserInput>
  }

  export type PoolEntryScalarWhereInput = {
    AND?: PoolEntryScalarWhereInput | PoolEntryScalarWhereInput[]
    OR?: PoolEntryScalarWhereInput[]
    NOT?: PoolEntryScalarWhereInput | PoolEntryScalarWhereInput[]
    id?: StringFilter<"PoolEntry"> | string
    poolId?: StringFilter<"PoolEntry"> | string
    userId?: StringFilter<"PoolEntry"> | string
    ticketNumber?: IntFilter<"PoolEntry"> | number
    purchasedAt?: DateTimeFilter<"PoolEntry"> | Date | string
  }

  export type WinnerUpsertWithWhereUniqueWithoutUserInput = {
    where: WinnerWhereUniqueInput
    update: XOR<WinnerUpdateWithoutUserInput, WinnerUncheckedUpdateWithoutUserInput>
    create: XOR<WinnerCreateWithoutUserInput, WinnerUncheckedCreateWithoutUserInput>
  }

  export type WinnerUpdateWithWhereUniqueWithoutUserInput = {
    where: WinnerWhereUniqueInput
    data: XOR<WinnerUpdateWithoutUserInput, WinnerUncheckedUpdateWithoutUserInput>
  }

  export type WinnerUpdateManyWithWhereWithoutUserInput = {
    where: WinnerScalarWhereInput
    data: XOR<WinnerUpdateManyMutationInput, WinnerUncheckedUpdateManyWithoutUserInput>
  }

  export type WinnerScalarWhereInput = {
    AND?: WinnerScalarWhereInput | WinnerScalarWhereInput[]
    OR?: WinnerScalarWhereInput[]
    NOT?: WinnerScalarWhereInput | WinnerScalarWhereInput[]
    id?: StringFilter<"Winner"> | string
    poolId?: StringFilter<"Winner"> | string
    entryId?: StringFilter<"Winner"> | string
    userId?: StringFilter<"Winner"> | string
    prizeAmount?: FloatFilter<"Winner"> | number
    announcedAt?: DateTimeFilter<"Winner"> | Date | string
  }

  export type AdminLogUpsertWithWhereUniqueWithoutAdminInput = {
    where: AdminLogWhereUniqueInput
    update: XOR<AdminLogUpdateWithoutAdminInput, AdminLogUncheckedUpdateWithoutAdminInput>
    create: XOR<AdminLogCreateWithoutAdminInput, AdminLogUncheckedCreateWithoutAdminInput>
  }

  export type AdminLogUpdateWithWhereUniqueWithoutAdminInput = {
    where: AdminLogWhereUniqueInput
    data: XOR<AdminLogUpdateWithoutAdminInput, AdminLogUncheckedUpdateWithoutAdminInput>
  }

  export type AdminLogUpdateManyWithWhereWithoutAdminInput = {
    where: AdminLogScalarWhereInput
    data: XOR<AdminLogUpdateManyMutationInput, AdminLogUncheckedUpdateManyWithoutAdminInput>
  }

  export type AdminLogScalarWhereInput = {
    AND?: AdminLogScalarWhereInput | AdminLogScalarWhereInput[]
    OR?: AdminLogScalarWhereInput[]
    NOT?: AdminLogScalarWhereInput | AdminLogScalarWhereInput[]
    id?: StringFilter<"AdminLog"> | string
    adminId?: StringFilter<"AdminLog"> | string
    action?: StringFilter<"AdminLog"> | string
    details?: StringNullableFilter<"AdminLog"> | string | null
    createdAt?: DateTimeFilter<"AdminLog"> | Date | string
  }

  export type UserCreateWithoutWalletInput = {
    id?: string
    phone: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    entries?: PoolEntryCreateNestedManyWithoutUserInput
    wins?: WinnerCreateNestedManyWithoutUserInput
    adminLogs?: AdminLogCreateNestedManyWithoutAdminInput
  }

  export type UserUncheckedCreateWithoutWalletInput = {
    id?: string
    phone: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    entries?: PoolEntryUncheckedCreateNestedManyWithoutUserInput
    wins?: WinnerUncheckedCreateNestedManyWithoutUserInput
    adminLogs?: AdminLogUncheckedCreateNestedManyWithoutAdminInput
  }

  export type UserCreateOrConnectWithoutWalletInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutWalletInput, UserUncheckedCreateWithoutWalletInput>
  }

  export type TransactionCreateWithoutWalletInput = {
    id?: string
    amount: number
    type: $Enums.TransactionType
    status?: $Enums.TransactionStatus
    reference?: string | null
    createdAt?: Date | string
  }

  export type TransactionUncheckedCreateWithoutWalletInput = {
    id?: string
    amount: number
    type: $Enums.TransactionType
    status?: $Enums.TransactionStatus
    reference?: string | null
    createdAt?: Date | string
  }

  export type TransactionCreateOrConnectWithoutWalletInput = {
    where: TransactionWhereUniqueInput
    create: XOR<TransactionCreateWithoutWalletInput, TransactionUncheckedCreateWithoutWalletInput>
  }

  export type TransactionCreateManyWalletInputEnvelope = {
    data: TransactionCreateManyWalletInput | TransactionCreateManyWalletInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutWalletInput = {
    update: XOR<UserUpdateWithoutWalletInput, UserUncheckedUpdateWithoutWalletInput>
    create: XOR<UserCreateWithoutWalletInput, UserUncheckedCreateWithoutWalletInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutWalletInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutWalletInput, UserUncheckedUpdateWithoutWalletInput>
  }

  export type UserUpdateWithoutWalletInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    entries?: PoolEntryUpdateManyWithoutUserNestedInput
    wins?: WinnerUpdateManyWithoutUserNestedInput
    adminLogs?: AdminLogUpdateManyWithoutAdminNestedInput
  }

  export type UserUncheckedUpdateWithoutWalletInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    entries?: PoolEntryUncheckedUpdateManyWithoutUserNestedInput
    wins?: WinnerUncheckedUpdateManyWithoutUserNestedInput
    adminLogs?: AdminLogUncheckedUpdateManyWithoutAdminNestedInput
  }

  export type TransactionUpsertWithWhereUniqueWithoutWalletInput = {
    where: TransactionWhereUniqueInput
    update: XOR<TransactionUpdateWithoutWalletInput, TransactionUncheckedUpdateWithoutWalletInput>
    create: XOR<TransactionCreateWithoutWalletInput, TransactionUncheckedCreateWithoutWalletInput>
  }

  export type TransactionUpdateWithWhereUniqueWithoutWalletInput = {
    where: TransactionWhereUniqueInput
    data: XOR<TransactionUpdateWithoutWalletInput, TransactionUncheckedUpdateWithoutWalletInput>
  }

  export type TransactionUpdateManyWithWhereWithoutWalletInput = {
    where: TransactionScalarWhereInput
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyWithoutWalletInput>
  }

  export type TransactionScalarWhereInput = {
    AND?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
    OR?: TransactionScalarWhereInput[]
    NOT?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
    id?: StringFilter<"Transaction"> | string
    walletId?: StringFilter<"Transaction"> | string
    amount?: FloatFilter<"Transaction"> | number
    type?: EnumTransactionTypeFilter<"Transaction"> | $Enums.TransactionType
    status?: EnumTransactionStatusFilter<"Transaction"> | $Enums.TransactionStatus
    reference?: StringNullableFilter<"Transaction"> | string | null
    createdAt?: DateTimeFilter<"Transaction"> | Date | string
  }

  export type WalletCreateWithoutTransactionsInput = {
    id?: string
    balance?: number
    currency?: string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutWalletInput
  }

  export type WalletUncheckedCreateWithoutTransactionsInput = {
    id?: string
    userId: string
    balance?: number
    currency?: string
    updatedAt?: Date | string
  }

  export type WalletCreateOrConnectWithoutTransactionsInput = {
    where: WalletWhereUniqueInput
    create: XOR<WalletCreateWithoutTransactionsInput, WalletUncheckedCreateWithoutTransactionsInput>
  }

  export type WalletUpsertWithoutTransactionsInput = {
    update: XOR<WalletUpdateWithoutTransactionsInput, WalletUncheckedUpdateWithoutTransactionsInput>
    create: XOR<WalletCreateWithoutTransactionsInput, WalletUncheckedCreateWithoutTransactionsInput>
    where?: WalletWhereInput
  }

  export type WalletUpdateToOneWithWhereWithoutTransactionsInput = {
    where?: WalletWhereInput
    data: XOR<WalletUpdateWithoutTransactionsInput, WalletUncheckedUpdateWithoutTransactionsInput>
  }

  export type WalletUpdateWithoutTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    balance?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutWalletNestedInput
  }

  export type WalletUncheckedUpdateWithoutTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    balance?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PoolEntryCreateWithoutPoolInput = {
    id?: string
    ticketNumber: number
    purchasedAt?: Date | string
    user: UserCreateNestedOneWithoutEntriesInput
    winner?: WinnerCreateNestedOneWithoutEntryInput
  }

  export type PoolEntryUncheckedCreateWithoutPoolInput = {
    id?: string
    userId: string
    ticketNumber: number
    purchasedAt?: Date | string
    winner?: WinnerUncheckedCreateNestedOneWithoutEntryInput
  }

  export type PoolEntryCreateOrConnectWithoutPoolInput = {
    where: PoolEntryWhereUniqueInput
    create: XOR<PoolEntryCreateWithoutPoolInput, PoolEntryUncheckedCreateWithoutPoolInput>
  }

  export type PoolEntryCreateManyPoolInputEnvelope = {
    data: PoolEntryCreateManyPoolInput | PoolEntryCreateManyPoolInput[]
    skipDuplicates?: boolean
  }

  export type WinnerCreateWithoutPoolInput = {
    id?: string
    prizeAmount: number
    announcedAt?: Date | string
    entry: PoolEntryCreateNestedOneWithoutWinnerInput
    user: UserCreateNestedOneWithoutWinsInput
  }

  export type WinnerUncheckedCreateWithoutPoolInput = {
    id?: string
    entryId: string
    userId: string
    prizeAmount: number
    announcedAt?: Date | string
  }

  export type WinnerCreateOrConnectWithoutPoolInput = {
    where: WinnerWhereUniqueInput
    create: XOR<WinnerCreateWithoutPoolInput, WinnerUncheckedCreateWithoutPoolInput>
  }

  export type WinnerCreateManyPoolInputEnvelope = {
    data: WinnerCreateManyPoolInput | WinnerCreateManyPoolInput[]
    skipDuplicates?: boolean
  }

  export type PoolEntryUpsertWithWhereUniqueWithoutPoolInput = {
    where: PoolEntryWhereUniqueInput
    update: XOR<PoolEntryUpdateWithoutPoolInput, PoolEntryUncheckedUpdateWithoutPoolInput>
    create: XOR<PoolEntryCreateWithoutPoolInput, PoolEntryUncheckedCreateWithoutPoolInput>
  }

  export type PoolEntryUpdateWithWhereUniqueWithoutPoolInput = {
    where: PoolEntryWhereUniqueInput
    data: XOR<PoolEntryUpdateWithoutPoolInput, PoolEntryUncheckedUpdateWithoutPoolInput>
  }

  export type PoolEntryUpdateManyWithWhereWithoutPoolInput = {
    where: PoolEntryScalarWhereInput
    data: XOR<PoolEntryUpdateManyMutationInput, PoolEntryUncheckedUpdateManyWithoutPoolInput>
  }

  export type WinnerUpsertWithWhereUniqueWithoutPoolInput = {
    where: WinnerWhereUniqueInput
    update: XOR<WinnerUpdateWithoutPoolInput, WinnerUncheckedUpdateWithoutPoolInput>
    create: XOR<WinnerCreateWithoutPoolInput, WinnerUncheckedCreateWithoutPoolInput>
  }

  export type WinnerUpdateWithWhereUniqueWithoutPoolInput = {
    where: WinnerWhereUniqueInput
    data: XOR<WinnerUpdateWithoutPoolInput, WinnerUncheckedUpdateWithoutPoolInput>
  }

  export type WinnerUpdateManyWithWhereWithoutPoolInput = {
    where: WinnerScalarWhereInput
    data: XOR<WinnerUpdateManyMutationInput, WinnerUncheckedUpdateManyWithoutPoolInput>
  }

  export type LotteryPoolCreateWithoutEntriesInput = {
    id?: string
    productId?: string | null
    productName: string
    productImage: string
    pricePerEntry?: number
    maxSlots: number
    filledSlots?: number
    status?: $Enums.PoolStatus
    startDate?: Date | string
    endDate: Date | string
    drawTime?: Date | string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    winners?: WinnerCreateNestedManyWithoutPoolInput
  }

  export type LotteryPoolUncheckedCreateWithoutEntriesInput = {
    id?: string
    productId?: string | null
    productName: string
    productImage: string
    pricePerEntry?: number
    maxSlots: number
    filledSlots?: number
    status?: $Enums.PoolStatus
    startDate?: Date | string
    endDate: Date | string
    drawTime?: Date | string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    winners?: WinnerUncheckedCreateNestedManyWithoutPoolInput
  }

  export type LotteryPoolCreateOrConnectWithoutEntriesInput = {
    where: LotteryPoolWhereUniqueInput
    create: XOR<LotteryPoolCreateWithoutEntriesInput, LotteryPoolUncheckedCreateWithoutEntriesInput>
  }

  export type UserCreateWithoutEntriesInput = {
    id?: string
    phone: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    wallet?: WalletCreateNestedOneWithoutUserInput
    wins?: WinnerCreateNestedManyWithoutUserInput
    adminLogs?: AdminLogCreateNestedManyWithoutAdminInput
  }

  export type UserUncheckedCreateWithoutEntriesInput = {
    id?: string
    phone: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    wallet?: WalletUncheckedCreateNestedOneWithoutUserInput
    wins?: WinnerUncheckedCreateNestedManyWithoutUserInput
    adminLogs?: AdminLogUncheckedCreateNestedManyWithoutAdminInput
  }

  export type UserCreateOrConnectWithoutEntriesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutEntriesInput, UserUncheckedCreateWithoutEntriesInput>
  }

  export type WinnerCreateWithoutEntryInput = {
    id?: string
    prizeAmount: number
    announcedAt?: Date | string
    pool: LotteryPoolCreateNestedOneWithoutWinnersInput
    user: UserCreateNestedOneWithoutWinsInput
  }

  export type WinnerUncheckedCreateWithoutEntryInput = {
    id?: string
    poolId: string
    userId: string
    prizeAmount: number
    announcedAt?: Date | string
  }

  export type WinnerCreateOrConnectWithoutEntryInput = {
    where: WinnerWhereUniqueInput
    create: XOR<WinnerCreateWithoutEntryInput, WinnerUncheckedCreateWithoutEntryInput>
  }

  export type LotteryPoolUpsertWithoutEntriesInput = {
    update: XOR<LotteryPoolUpdateWithoutEntriesInput, LotteryPoolUncheckedUpdateWithoutEntriesInput>
    create: XOR<LotteryPoolCreateWithoutEntriesInput, LotteryPoolUncheckedCreateWithoutEntriesInput>
    where?: LotteryPoolWhereInput
  }

  export type LotteryPoolUpdateToOneWithWhereWithoutEntriesInput = {
    where?: LotteryPoolWhereInput
    data: XOR<LotteryPoolUpdateWithoutEntriesInput, LotteryPoolUncheckedUpdateWithoutEntriesInput>
  }

  export type LotteryPoolUpdateWithoutEntriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: NullableStringFieldUpdateOperationsInput | string | null
    productName?: StringFieldUpdateOperationsInput | string
    productImage?: StringFieldUpdateOperationsInput | string
    pricePerEntry?: FloatFieldUpdateOperationsInput | number
    maxSlots?: IntFieldUpdateOperationsInput | number
    filledSlots?: IntFieldUpdateOperationsInput | number
    status?: EnumPoolStatusFieldUpdateOperationsInput | $Enums.PoolStatus
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    drawTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    winners?: WinnerUpdateManyWithoutPoolNestedInput
  }

  export type LotteryPoolUncheckedUpdateWithoutEntriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: NullableStringFieldUpdateOperationsInput | string | null
    productName?: StringFieldUpdateOperationsInput | string
    productImage?: StringFieldUpdateOperationsInput | string
    pricePerEntry?: FloatFieldUpdateOperationsInput | number
    maxSlots?: IntFieldUpdateOperationsInput | number
    filledSlots?: IntFieldUpdateOperationsInput | number
    status?: EnumPoolStatusFieldUpdateOperationsInput | $Enums.PoolStatus
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    drawTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    winners?: WinnerUncheckedUpdateManyWithoutPoolNestedInput
  }

  export type UserUpsertWithoutEntriesInput = {
    update: XOR<UserUpdateWithoutEntriesInput, UserUncheckedUpdateWithoutEntriesInput>
    create: XOR<UserCreateWithoutEntriesInput, UserUncheckedCreateWithoutEntriesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutEntriesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutEntriesInput, UserUncheckedUpdateWithoutEntriesInput>
  }

  export type UserUpdateWithoutEntriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    wallet?: WalletUpdateOneWithoutUserNestedInput
    wins?: WinnerUpdateManyWithoutUserNestedInput
    adminLogs?: AdminLogUpdateManyWithoutAdminNestedInput
  }

  export type UserUncheckedUpdateWithoutEntriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    wallet?: WalletUncheckedUpdateOneWithoutUserNestedInput
    wins?: WinnerUncheckedUpdateManyWithoutUserNestedInput
    adminLogs?: AdminLogUncheckedUpdateManyWithoutAdminNestedInput
  }

  export type WinnerUpsertWithoutEntryInput = {
    update: XOR<WinnerUpdateWithoutEntryInput, WinnerUncheckedUpdateWithoutEntryInput>
    create: XOR<WinnerCreateWithoutEntryInput, WinnerUncheckedCreateWithoutEntryInput>
    where?: WinnerWhereInput
  }

  export type WinnerUpdateToOneWithWhereWithoutEntryInput = {
    where?: WinnerWhereInput
    data: XOR<WinnerUpdateWithoutEntryInput, WinnerUncheckedUpdateWithoutEntryInput>
  }

  export type WinnerUpdateWithoutEntryInput = {
    id?: StringFieldUpdateOperationsInput | string
    prizeAmount?: FloatFieldUpdateOperationsInput | number
    announcedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pool?: LotteryPoolUpdateOneRequiredWithoutWinnersNestedInput
    user?: UserUpdateOneRequiredWithoutWinsNestedInput
  }

  export type WinnerUncheckedUpdateWithoutEntryInput = {
    id?: StringFieldUpdateOperationsInput | string
    poolId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    prizeAmount?: FloatFieldUpdateOperationsInput | number
    announcedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LotteryPoolCreateWithoutWinnersInput = {
    id?: string
    productId?: string | null
    productName: string
    productImage: string
    pricePerEntry?: number
    maxSlots: number
    filledSlots?: number
    status?: $Enums.PoolStatus
    startDate?: Date | string
    endDate: Date | string
    drawTime?: Date | string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    entries?: PoolEntryCreateNestedManyWithoutPoolInput
  }

  export type LotteryPoolUncheckedCreateWithoutWinnersInput = {
    id?: string
    productId?: string | null
    productName: string
    productImage: string
    pricePerEntry?: number
    maxSlots: number
    filledSlots?: number
    status?: $Enums.PoolStatus
    startDate?: Date | string
    endDate: Date | string
    drawTime?: Date | string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    entries?: PoolEntryUncheckedCreateNestedManyWithoutPoolInput
  }

  export type LotteryPoolCreateOrConnectWithoutWinnersInput = {
    where: LotteryPoolWhereUniqueInput
    create: XOR<LotteryPoolCreateWithoutWinnersInput, LotteryPoolUncheckedCreateWithoutWinnersInput>
  }

  export type PoolEntryCreateWithoutWinnerInput = {
    id?: string
    ticketNumber: number
    purchasedAt?: Date | string
    pool: LotteryPoolCreateNestedOneWithoutEntriesInput
    user: UserCreateNestedOneWithoutEntriesInput
  }

  export type PoolEntryUncheckedCreateWithoutWinnerInput = {
    id?: string
    poolId: string
    userId: string
    ticketNumber: number
    purchasedAt?: Date | string
  }

  export type PoolEntryCreateOrConnectWithoutWinnerInput = {
    where: PoolEntryWhereUniqueInput
    create: XOR<PoolEntryCreateWithoutWinnerInput, PoolEntryUncheckedCreateWithoutWinnerInput>
  }

  export type UserCreateWithoutWinsInput = {
    id?: string
    phone: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    wallet?: WalletCreateNestedOneWithoutUserInput
    entries?: PoolEntryCreateNestedManyWithoutUserInput
    adminLogs?: AdminLogCreateNestedManyWithoutAdminInput
  }

  export type UserUncheckedCreateWithoutWinsInput = {
    id?: string
    phone: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    wallet?: WalletUncheckedCreateNestedOneWithoutUserInput
    entries?: PoolEntryUncheckedCreateNestedManyWithoutUserInput
    adminLogs?: AdminLogUncheckedCreateNestedManyWithoutAdminInput
  }

  export type UserCreateOrConnectWithoutWinsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutWinsInput, UserUncheckedCreateWithoutWinsInput>
  }

  export type LotteryPoolUpsertWithoutWinnersInput = {
    update: XOR<LotteryPoolUpdateWithoutWinnersInput, LotteryPoolUncheckedUpdateWithoutWinnersInput>
    create: XOR<LotteryPoolCreateWithoutWinnersInput, LotteryPoolUncheckedCreateWithoutWinnersInput>
    where?: LotteryPoolWhereInput
  }

  export type LotteryPoolUpdateToOneWithWhereWithoutWinnersInput = {
    where?: LotteryPoolWhereInput
    data: XOR<LotteryPoolUpdateWithoutWinnersInput, LotteryPoolUncheckedUpdateWithoutWinnersInput>
  }

  export type LotteryPoolUpdateWithoutWinnersInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: NullableStringFieldUpdateOperationsInput | string | null
    productName?: StringFieldUpdateOperationsInput | string
    productImage?: StringFieldUpdateOperationsInput | string
    pricePerEntry?: FloatFieldUpdateOperationsInput | number
    maxSlots?: IntFieldUpdateOperationsInput | number
    filledSlots?: IntFieldUpdateOperationsInput | number
    status?: EnumPoolStatusFieldUpdateOperationsInput | $Enums.PoolStatus
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    drawTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    entries?: PoolEntryUpdateManyWithoutPoolNestedInput
  }

  export type LotteryPoolUncheckedUpdateWithoutWinnersInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: NullableStringFieldUpdateOperationsInput | string | null
    productName?: StringFieldUpdateOperationsInput | string
    productImage?: StringFieldUpdateOperationsInput | string
    pricePerEntry?: FloatFieldUpdateOperationsInput | number
    maxSlots?: IntFieldUpdateOperationsInput | number
    filledSlots?: IntFieldUpdateOperationsInput | number
    status?: EnumPoolStatusFieldUpdateOperationsInput | $Enums.PoolStatus
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    drawTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    entries?: PoolEntryUncheckedUpdateManyWithoutPoolNestedInput
  }

  export type PoolEntryUpsertWithoutWinnerInput = {
    update: XOR<PoolEntryUpdateWithoutWinnerInput, PoolEntryUncheckedUpdateWithoutWinnerInput>
    create: XOR<PoolEntryCreateWithoutWinnerInput, PoolEntryUncheckedCreateWithoutWinnerInput>
    where?: PoolEntryWhereInput
  }

  export type PoolEntryUpdateToOneWithWhereWithoutWinnerInput = {
    where?: PoolEntryWhereInput
    data: XOR<PoolEntryUpdateWithoutWinnerInput, PoolEntryUncheckedUpdateWithoutWinnerInput>
  }

  export type PoolEntryUpdateWithoutWinnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    ticketNumber?: IntFieldUpdateOperationsInput | number
    purchasedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pool?: LotteryPoolUpdateOneRequiredWithoutEntriesNestedInput
    user?: UserUpdateOneRequiredWithoutEntriesNestedInput
  }

  export type PoolEntryUncheckedUpdateWithoutWinnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    poolId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    ticketNumber?: IntFieldUpdateOperationsInput | number
    purchasedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpsertWithoutWinsInput = {
    update: XOR<UserUpdateWithoutWinsInput, UserUncheckedUpdateWithoutWinsInput>
    create: XOR<UserCreateWithoutWinsInput, UserUncheckedCreateWithoutWinsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutWinsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutWinsInput, UserUncheckedUpdateWithoutWinsInput>
  }

  export type UserUpdateWithoutWinsInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    wallet?: WalletUpdateOneWithoutUserNestedInput
    entries?: PoolEntryUpdateManyWithoutUserNestedInput
    adminLogs?: AdminLogUpdateManyWithoutAdminNestedInput
  }

  export type UserUncheckedUpdateWithoutWinsInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    wallet?: WalletUncheckedUpdateOneWithoutUserNestedInput
    entries?: PoolEntryUncheckedUpdateManyWithoutUserNestedInput
    adminLogs?: AdminLogUncheckedUpdateManyWithoutAdminNestedInput
  }

  export type UserCreateWithoutAdminLogsInput = {
    id?: string
    phone: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    wallet?: WalletCreateNestedOneWithoutUserInput
    entries?: PoolEntryCreateNestedManyWithoutUserInput
    wins?: WinnerCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAdminLogsInput = {
    id?: string
    phone: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    wallet?: WalletUncheckedCreateNestedOneWithoutUserInput
    entries?: PoolEntryUncheckedCreateNestedManyWithoutUserInput
    wins?: WinnerUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAdminLogsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAdminLogsInput, UserUncheckedCreateWithoutAdminLogsInput>
  }

  export type UserUpsertWithoutAdminLogsInput = {
    update: XOR<UserUpdateWithoutAdminLogsInput, UserUncheckedUpdateWithoutAdminLogsInput>
    create: XOR<UserCreateWithoutAdminLogsInput, UserUncheckedCreateWithoutAdminLogsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAdminLogsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAdminLogsInput, UserUncheckedUpdateWithoutAdminLogsInput>
  }

  export type UserUpdateWithoutAdminLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    wallet?: WalletUpdateOneWithoutUserNestedInput
    entries?: PoolEntryUpdateManyWithoutUserNestedInput
    wins?: WinnerUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAdminLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    wallet?: WalletUncheckedUpdateOneWithoutUserNestedInput
    entries?: PoolEntryUncheckedUpdateManyWithoutUserNestedInput
    wins?: WinnerUncheckedUpdateManyWithoutUserNestedInput
  }

  export type PoolEntryCreateManyUserInput = {
    id?: string
    poolId: string
    ticketNumber: number
    purchasedAt?: Date | string
  }

  export type WinnerCreateManyUserInput = {
    id?: string
    poolId: string
    entryId: string
    prizeAmount: number
    announcedAt?: Date | string
  }

  export type AdminLogCreateManyAdminInput = {
    id?: string
    action: string
    details?: string | null
    createdAt?: Date | string
  }

  export type PoolEntryUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    ticketNumber?: IntFieldUpdateOperationsInput | number
    purchasedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pool?: LotteryPoolUpdateOneRequiredWithoutEntriesNestedInput
    winner?: WinnerUpdateOneWithoutEntryNestedInput
  }

  export type PoolEntryUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    poolId?: StringFieldUpdateOperationsInput | string
    ticketNumber?: IntFieldUpdateOperationsInput | number
    purchasedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    winner?: WinnerUncheckedUpdateOneWithoutEntryNestedInput
  }

  export type PoolEntryUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    poolId?: StringFieldUpdateOperationsInput | string
    ticketNumber?: IntFieldUpdateOperationsInput | number
    purchasedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WinnerUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    prizeAmount?: FloatFieldUpdateOperationsInput | number
    announcedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pool?: LotteryPoolUpdateOneRequiredWithoutWinnersNestedInput
    entry?: PoolEntryUpdateOneRequiredWithoutWinnerNestedInput
  }

  export type WinnerUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    poolId?: StringFieldUpdateOperationsInput | string
    entryId?: StringFieldUpdateOperationsInput | string
    prizeAmount?: FloatFieldUpdateOperationsInput | number
    announcedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WinnerUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    poolId?: StringFieldUpdateOperationsInput | string
    entryId?: StringFieldUpdateOperationsInput | string
    prizeAmount?: FloatFieldUpdateOperationsInput | number
    announcedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminLogUpdateWithoutAdminInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    details?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminLogUncheckedUpdateWithoutAdminInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    details?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminLogUncheckedUpdateManyWithoutAdminInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    details?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionCreateManyWalletInput = {
    id?: string
    amount: number
    type: $Enums.TransactionType
    status?: $Enums.TransactionStatus
    reference?: string | null
    createdAt?: Date | string
  }

  export type TransactionUpdateWithoutWalletInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionUncheckedUpdateWithoutWalletInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionUncheckedUpdateManyWithoutWalletInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PoolEntryCreateManyPoolInput = {
    id?: string
    userId: string
    ticketNumber: number
    purchasedAt?: Date | string
  }

  export type WinnerCreateManyPoolInput = {
    id?: string
    entryId: string
    userId: string
    prizeAmount: number
    announcedAt?: Date | string
  }

  export type PoolEntryUpdateWithoutPoolInput = {
    id?: StringFieldUpdateOperationsInput | string
    ticketNumber?: IntFieldUpdateOperationsInput | number
    purchasedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutEntriesNestedInput
    winner?: WinnerUpdateOneWithoutEntryNestedInput
  }

  export type PoolEntryUncheckedUpdateWithoutPoolInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    ticketNumber?: IntFieldUpdateOperationsInput | number
    purchasedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    winner?: WinnerUncheckedUpdateOneWithoutEntryNestedInput
  }

  export type PoolEntryUncheckedUpdateManyWithoutPoolInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    ticketNumber?: IntFieldUpdateOperationsInput | number
    purchasedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WinnerUpdateWithoutPoolInput = {
    id?: StringFieldUpdateOperationsInput | string
    prizeAmount?: FloatFieldUpdateOperationsInput | number
    announcedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    entry?: PoolEntryUpdateOneRequiredWithoutWinnerNestedInput
    user?: UserUpdateOneRequiredWithoutWinsNestedInput
  }

  export type WinnerUncheckedUpdateWithoutPoolInput = {
    id?: StringFieldUpdateOperationsInput | string
    entryId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    prizeAmount?: FloatFieldUpdateOperationsInput | number
    announcedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WinnerUncheckedUpdateManyWithoutPoolInput = {
    id?: StringFieldUpdateOperationsInput | string
    entryId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    prizeAmount?: FloatFieldUpdateOperationsInput | number
    announcedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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