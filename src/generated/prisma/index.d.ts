
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
 * Model Avistamento
 * 
 */
export type Avistamento = $Result.DefaultSelection<Prisma.$AvistamentoPayload>
/**
 * Model PessoaDesaparecida
 * 
 */
export type PessoaDesaparecida = $Result.DefaultSelection<Prisma.$PessoaDesaparecidaPayload>
/**
 * Model Pessoa
 * 
 */
export type Pessoa = $Result.DefaultSelection<Prisma.$PessoaPayload>
/**
 * Model Contato
 * 
 */
export type Contato = $Result.DefaultSelection<Prisma.$ContatoPayload>
/**
 * Model USER
 * 
 */
export type USER = $Result.DefaultSelection<Prisma.$USERPayload>
/**
 * Model Localizacao
 * 
 */
export type Localizacao = $Result.DefaultSelection<Prisma.$LocalizacaoPayload>
/**
 * Model TipoServico
 * 
 */
export type TipoServico = $Result.DefaultSelection<Prisma.$TipoServicoPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const status: {
  ATIVO: 'ATIVO',
  ENCONTRADO: 'ENCONTRADO'
};

export type status = (typeof status)[keyof typeof status]

}

export type status = $Enums.status

export const status: typeof $Enums.status

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Avistamentos
 * const avistamentos = await prisma.avistamento.findMany()
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
   * // Fetch zero or more Avistamentos
   * const avistamentos = await prisma.avistamento.findMany()
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
   * `prisma.avistamento`: Exposes CRUD operations for the **Avistamento** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Avistamentos
    * const avistamentos = await prisma.avistamento.findMany()
    * ```
    */
  get avistamento(): Prisma.AvistamentoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pessoaDesaparecida`: Exposes CRUD operations for the **PessoaDesaparecida** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PessoaDesaparecidas
    * const pessoaDesaparecidas = await prisma.pessoaDesaparecida.findMany()
    * ```
    */
  get pessoaDesaparecida(): Prisma.PessoaDesaparecidaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pessoa`: Exposes CRUD operations for the **Pessoa** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pessoas
    * const pessoas = await prisma.pessoa.findMany()
    * ```
    */
  get pessoa(): Prisma.PessoaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.contato`: Exposes CRUD operations for the **Contato** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Contatoes
    * const contatoes = await prisma.contato.findMany()
    * ```
    */
  get contato(): Prisma.ContatoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.uSER`: Exposes CRUD operations for the **USER** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more USERS
    * const uSERS = await prisma.uSER.findMany()
    * ```
    */
  get uSER(): Prisma.USERDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.localizacao`: Exposes CRUD operations for the **Localizacao** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Localizacaos
    * const localizacaos = await prisma.localizacao.findMany()
    * ```
    */
  get localizacao(): Prisma.LocalizacaoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tipoServico`: Exposes CRUD operations for the **TipoServico** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TipoServicos
    * const tipoServicos = await prisma.tipoServico.findMany()
    * ```
    */
  get tipoServico(): Prisma.TipoServicoDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
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
    Avistamento: 'Avistamento',
    PessoaDesaparecida: 'PessoaDesaparecida',
    Pessoa: 'Pessoa',
    Contato: 'Contato',
    USER: 'USER',
    Localizacao: 'Localizacao',
    TipoServico: 'TipoServico'
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
      modelProps: "avistamento" | "pessoaDesaparecida" | "pessoa" | "contato" | "uSER" | "localizacao" | "tipoServico"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Avistamento: {
        payload: Prisma.$AvistamentoPayload<ExtArgs>
        fields: Prisma.AvistamentoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AvistamentoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvistamentoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AvistamentoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvistamentoPayload>
          }
          findFirst: {
            args: Prisma.AvistamentoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvistamentoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AvistamentoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvistamentoPayload>
          }
          findMany: {
            args: Prisma.AvistamentoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvistamentoPayload>[]
          }
          create: {
            args: Prisma.AvistamentoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvistamentoPayload>
          }
          createMany: {
            args: Prisma.AvistamentoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AvistamentoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvistamentoPayload>[]
          }
          delete: {
            args: Prisma.AvistamentoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvistamentoPayload>
          }
          update: {
            args: Prisma.AvistamentoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvistamentoPayload>
          }
          deleteMany: {
            args: Prisma.AvistamentoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AvistamentoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AvistamentoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvistamentoPayload>[]
          }
          upsert: {
            args: Prisma.AvistamentoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvistamentoPayload>
          }
          aggregate: {
            args: Prisma.AvistamentoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAvistamento>
          }
          groupBy: {
            args: Prisma.AvistamentoGroupByArgs<ExtArgs>
            result: $Utils.Optional<AvistamentoGroupByOutputType>[]
          }
          count: {
            args: Prisma.AvistamentoCountArgs<ExtArgs>
            result: $Utils.Optional<AvistamentoCountAggregateOutputType> | number
          }
        }
      }
      PessoaDesaparecida: {
        payload: Prisma.$PessoaDesaparecidaPayload<ExtArgs>
        fields: Prisma.PessoaDesaparecidaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PessoaDesaparecidaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PessoaDesaparecidaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PessoaDesaparecidaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PessoaDesaparecidaPayload>
          }
          findFirst: {
            args: Prisma.PessoaDesaparecidaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PessoaDesaparecidaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PessoaDesaparecidaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PessoaDesaparecidaPayload>
          }
          findMany: {
            args: Prisma.PessoaDesaparecidaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PessoaDesaparecidaPayload>[]
          }
          create: {
            args: Prisma.PessoaDesaparecidaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PessoaDesaparecidaPayload>
          }
          createMany: {
            args: Prisma.PessoaDesaparecidaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PessoaDesaparecidaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PessoaDesaparecidaPayload>[]
          }
          delete: {
            args: Prisma.PessoaDesaparecidaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PessoaDesaparecidaPayload>
          }
          update: {
            args: Prisma.PessoaDesaparecidaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PessoaDesaparecidaPayload>
          }
          deleteMany: {
            args: Prisma.PessoaDesaparecidaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PessoaDesaparecidaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PessoaDesaparecidaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PessoaDesaparecidaPayload>[]
          }
          upsert: {
            args: Prisma.PessoaDesaparecidaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PessoaDesaparecidaPayload>
          }
          aggregate: {
            args: Prisma.PessoaDesaparecidaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePessoaDesaparecida>
          }
          groupBy: {
            args: Prisma.PessoaDesaparecidaGroupByArgs<ExtArgs>
            result: $Utils.Optional<PessoaDesaparecidaGroupByOutputType>[]
          }
          count: {
            args: Prisma.PessoaDesaparecidaCountArgs<ExtArgs>
            result: $Utils.Optional<PessoaDesaparecidaCountAggregateOutputType> | number
          }
        }
      }
      Pessoa: {
        payload: Prisma.$PessoaPayload<ExtArgs>
        fields: Prisma.PessoaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PessoaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PessoaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PessoaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PessoaPayload>
          }
          findFirst: {
            args: Prisma.PessoaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PessoaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PessoaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PessoaPayload>
          }
          findMany: {
            args: Prisma.PessoaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PessoaPayload>[]
          }
          create: {
            args: Prisma.PessoaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PessoaPayload>
          }
          createMany: {
            args: Prisma.PessoaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PessoaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PessoaPayload>[]
          }
          delete: {
            args: Prisma.PessoaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PessoaPayload>
          }
          update: {
            args: Prisma.PessoaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PessoaPayload>
          }
          deleteMany: {
            args: Prisma.PessoaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PessoaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PessoaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PessoaPayload>[]
          }
          upsert: {
            args: Prisma.PessoaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PessoaPayload>
          }
          aggregate: {
            args: Prisma.PessoaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePessoa>
          }
          groupBy: {
            args: Prisma.PessoaGroupByArgs<ExtArgs>
            result: $Utils.Optional<PessoaGroupByOutputType>[]
          }
          count: {
            args: Prisma.PessoaCountArgs<ExtArgs>
            result: $Utils.Optional<PessoaCountAggregateOutputType> | number
          }
        }
      }
      Contato: {
        payload: Prisma.$ContatoPayload<ExtArgs>
        fields: Prisma.ContatoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ContatoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContatoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ContatoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContatoPayload>
          }
          findFirst: {
            args: Prisma.ContatoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContatoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ContatoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContatoPayload>
          }
          findMany: {
            args: Prisma.ContatoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContatoPayload>[]
          }
          create: {
            args: Prisma.ContatoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContatoPayload>
          }
          createMany: {
            args: Prisma.ContatoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ContatoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContatoPayload>[]
          }
          delete: {
            args: Prisma.ContatoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContatoPayload>
          }
          update: {
            args: Prisma.ContatoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContatoPayload>
          }
          deleteMany: {
            args: Prisma.ContatoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ContatoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ContatoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContatoPayload>[]
          }
          upsert: {
            args: Prisma.ContatoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContatoPayload>
          }
          aggregate: {
            args: Prisma.ContatoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateContato>
          }
          groupBy: {
            args: Prisma.ContatoGroupByArgs<ExtArgs>
            result: $Utils.Optional<ContatoGroupByOutputType>[]
          }
          count: {
            args: Prisma.ContatoCountArgs<ExtArgs>
            result: $Utils.Optional<ContatoCountAggregateOutputType> | number
          }
        }
      }
      USER: {
        payload: Prisma.$USERPayload<ExtArgs>
        fields: Prisma.USERFieldRefs
        operations: {
          findUnique: {
            args: Prisma.USERFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$USERPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.USERFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$USERPayload>
          }
          findFirst: {
            args: Prisma.USERFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$USERPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.USERFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$USERPayload>
          }
          findMany: {
            args: Prisma.USERFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$USERPayload>[]
          }
          create: {
            args: Prisma.USERCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$USERPayload>
          }
          createMany: {
            args: Prisma.USERCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.USERCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$USERPayload>[]
          }
          delete: {
            args: Prisma.USERDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$USERPayload>
          }
          update: {
            args: Prisma.USERUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$USERPayload>
          }
          deleteMany: {
            args: Prisma.USERDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.USERUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.USERUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$USERPayload>[]
          }
          upsert: {
            args: Prisma.USERUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$USERPayload>
          }
          aggregate: {
            args: Prisma.USERAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUSER>
          }
          groupBy: {
            args: Prisma.USERGroupByArgs<ExtArgs>
            result: $Utils.Optional<USERGroupByOutputType>[]
          }
          count: {
            args: Prisma.USERCountArgs<ExtArgs>
            result: $Utils.Optional<USERCountAggregateOutputType> | number
          }
        }
      }
      Localizacao: {
        payload: Prisma.$LocalizacaoPayload<ExtArgs>
        fields: Prisma.LocalizacaoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LocalizacaoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocalizacaoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LocalizacaoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocalizacaoPayload>
          }
          findFirst: {
            args: Prisma.LocalizacaoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocalizacaoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LocalizacaoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocalizacaoPayload>
          }
          findMany: {
            args: Prisma.LocalizacaoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocalizacaoPayload>[]
          }
          create: {
            args: Prisma.LocalizacaoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocalizacaoPayload>
          }
          createMany: {
            args: Prisma.LocalizacaoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LocalizacaoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocalizacaoPayload>[]
          }
          delete: {
            args: Prisma.LocalizacaoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocalizacaoPayload>
          }
          update: {
            args: Prisma.LocalizacaoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocalizacaoPayload>
          }
          deleteMany: {
            args: Prisma.LocalizacaoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LocalizacaoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LocalizacaoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocalizacaoPayload>[]
          }
          upsert: {
            args: Prisma.LocalizacaoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocalizacaoPayload>
          }
          aggregate: {
            args: Prisma.LocalizacaoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLocalizacao>
          }
          groupBy: {
            args: Prisma.LocalizacaoGroupByArgs<ExtArgs>
            result: $Utils.Optional<LocalizacaoGroupByOutputType>[]
          }
          count: {
            args: Prisma.LocalizacaoCountArgs<ExtArgs>
            result: $Utils.Optional<LocalizacaoCountAggregateOutputType> | number
          }
        }
      }
      TipoServico: {
        payload: Prisma.$TipoServicoPayload<ExtArgs>
        fields: Prisma.TipoServicoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TipoServicoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoServicoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TipoServicoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoServicoPayload>
          }
          findFirst: {
            args: Prisma.TipoServicoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoServicoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TipoServicoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoServicoPayload>
          }
          findMany: {
            args: Prisma.TipoServicoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoServicoPayload>[]
          }
          create: {
            args: Prisma.TipoServicoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoServicoPayload>
          }
          createMany: {
            args: Prisma.TipoServicoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TipoServicoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoServicoPayload>[]
          }
          delete: {
            args: Prisma.TipoServicoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoServicoPayload>
          }
          update: {
            args: Prisma.TipoServicoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoServicoPayload>
          }
          deleteMany: {
            args: Prisma.TipoServicoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TipoServicoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TipoServicoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoServicoPayload>[]
          }
          upsert: {
            args: Prisma.TipoServicoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoServicoPayload>
          }
          aggregate: {
            args: Prisma.TipoServicoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTipoServico>
          }
          groupBy: {
            args: Prisma.TipoServicoGroupByArgs<ExtArgs>
            result: $Utils.Optional<TipoServicoGroupByOutputType>[]
          }
          count: {
            args: Prisma.TipoServicoCountArgs<ExtArgs>
            result: $Utils.Optional<TipoServicoCountAggregateOutputType> | number
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
    avistamento?: AvistamentoOmit
    pessoaDesaparecida?: PessoaDesaparecidaOmit
    pessoa?: PessoaOmit
    contato?: ContatoOmit
    uSER?: USEROmit
    localizacao?: LocalizacaoOmit
    tipoServico?: TipoServicoOmit
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
   * Count Type PessoaDesaparecidaCountOutputType
   */

  export type PessoaDesaparecidaCountOutputType = {
    avistamentos: number
  }

  export type PessoaDesaparecidaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    avistamentos?: boolean | PessoaDesaparecidaCountOutputTypeCountAvistamentosArgs
  }

  // Custom InputTypes
  /**
   * PessoaDesaparecidaCountOutputType without action
   */
  export type PessoaDesaparecidaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PessoaDesaparecidaCountOutputType
     */
    select?: PessoaDesaparecidaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PessoaDesaparecidaCountOutputType without action
   */
  export type PessoaDesaparecidaCountOutputTypeCountAvistamentosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AvistamentoWhereInput
  }


  /**
   * Count Type PessoaCountOutputType
   */

  export type PessoaCountOutputType = {
    localizacoes: number
  }

  export type PessoaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    localizacoes?: boolean | PessoaCountOutputTypeCountLocalizacoesArgs
  }

  // Custom InputTypes
  /**
   * PessoaCountOutputType without action
   */
  export type PessoaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PessoaCountOutputType
     */
    select?: PessoaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PessoaCountOutputType without action
   */
  export type PessoaCountOutputTypeCountLocalizacoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LocalizacaoWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Avistamento
   */

  export type AggregateAvistamento = {
    _count: AvistamentoCountAggregateOutputType | null
    _avg: AvistamentoAvgAggregateOutputType | null
    _sum: AvistamentoSumAggregateOutputType | null
    _min: AvistamentoMinAggregateOutputType | null
    _max: AvistamentoMaxAggregateOutputType | null
  }

  export type AvistamentoAvgAggregateOutputType = {
    id: number | null
    idPessoaDesaparecida: number | null
    latitude: number | null
    longitude: number | null
  }

  export type AvistamentoSumAggregateOutputType = {
    id: number | null
    idPessoaDesaparecida: number | null
    latitude: number | null
    longitude: number | null
  }

  export type AvistamentoMinAggregateOutputType = {
    id: number | null
    idPessoaDesaparecida: number | null
    dataHora: Date | null
    comentario: string | null
    localAvistamento: string | null
    latitude: number | null
    longitude: number | null
    nomeInformante: string | null
    contatoInformante: string | null
    dataCadastro: Date | null
    dataAtualizacao: Date | null
  }

  export type AvistamentoMaxAggregateOutputType = {
    id: number | null
    idPessoaDesaparecida: number | null
    dataHora: Date | null
    comentario: string | null
    localAvistamento: string | null
    latitude: number | null
    longitude: number | null
    nomeInformante: string | null
    contatoInformante: string | null
    dataCadastro: Date | null
    dataAtualizacao: Date | null
  }

  export type AvistamentoCountAggregateOutputType = {
    id: number
    idPessoaDesaparecida: number
    dataHora: number
    comentario: number
    localAvistamento: number
    latitude: number
    longitude: number
    nomeInformante: number
    contatoInformante: number
    dataCadastro: number
    dataAtualizacao: number
    _all: number
  }


  export type AvistamentoAvgAggregateInputType = {
    id?: true
    idPessoaDesaparecida?: true
    latitude?: true
    longitude?: true
  }

  export type AvistamentoSumAggregateInputType = {
    id?: true
    idPessoaDesaparecida?: true
    latitude?: true
    longitude?: true
  }

  export type AvistamentoMinAggregateInputType = {
    id?: true
    idPessoaDesaparecida?: true
    dataHora?: true
    comentario?: true
    localAvistamento?: true
    latitude?: true
    longitude?: true
    nomeInformante?: true
    contatoInformante?: true
    dataCadastro?: true
    dataAtualizacao?: true
  }

  export type AvistamentoMaxAggregateInputType = {
    id?: true
    idPessoaDesaparecida?: true
    dataHora?: true
    comentario?: true
    localAvistamento?: true
    latitude?: true
    longitude?: true
    nomeInformante?: true
    contatoInformante?: true
    dataCadastro?: true
    dataAtualizacao?: true
  }

  export type AvistamentoCountAggregateInputType = {
    id?: true
    idPessoaDesaparecida?: true
    dataHora?: true
    comentario?: true
    localAvistamento?: true
    latitude?: true
    longitude?: true
    nomeInformante?: true
    contatoInformante?: true
    dataCadastro?: true
    dataAtualizacao?: true
    _all?: true
  }

  export type AvistamentoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Avistamento to aggregate.
     */
    where?: AvistamentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Avistamentos to fetch.
     */
    orderBy?: AvistamentoOrderByWithRelationInput | AvistamentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AvistamentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Avistamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Avistamentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Avistamentos
    **/
    _count?: true | AvistamentoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AvistamentoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AvistamentoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AvistamentoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AvistamentoMaxAggregateInputType
  }

  export type GetAvistamentoAggregateType<T extends AvistamentoAggregateArgs> = {
        [P in keyof T & keyof AggregateAvistamento]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAvistamento[P]>
      : GetScalarType<T[P], AggregateAvistamento[P]>
  }




  export type AvistamentoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AvistamentoWhereInput
    orderBy?: AvistamentoOrderByWithAggregationInput | AvistamentoOrderByWithAggregationInput[]
    by: AvistamentoScalarFieldEnum[] | AvistamentoScalarFieldEnum
    having?: AvistamentoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AvistamentoCountAggregateInputType | true
    _avg?: AvistamentoAvgAggregateInputType
    _sum?: AvistamentoSumAggregateInputType
    _min?: AvistamentoMinAggregateInputType
    _max?: AvistamentoMaxAggregateInputType
  }

  export type AvistamentoGroupByOutputType = {
    id: number
    idPessoaDesaparecida: number
    dataHora: Date
    comentario: string
    localAvistamento: string | null
    latitude: number | null
    longitude: number | null
    nomeInformante: string | null
    contatoInformante: string | null
    dataCadastro: Date
    dataAtualizacao: Date
    _count: AvistamentoCountAggregateOutputType | null
    _avg: AvistamentoAvgAggregateOutputType | null
    _sum: AvistamentoSumAggregateOutputType | null
    _min: AvistamentoMinAggregateOutputType | null
    _max: AvistamentoMaxAggregateOutputType | null
  }

  type GetAvistamentoGroupByPayload<T extends AvistamentoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AvistamentoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AvistamentoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AvistamentoGroupByOutputType[P]>
            : GetScalarType<T[P], AvistamentoGroupByOutputType[P]>
        }
      >
    >


  export type AvistamentoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    idPessoaDesaparecida?: boolean
    dataHora?: boolean
    comentario?: boolean
    localAvistamento?: boolean
    latitude?: boolean
    longitude?: boolean
    nomeInformante?: boolean
    contatoInformante?: boolean
    dataCadastro?: boolean
    dataAtualizacao?: boolean
    pessoaDesaparecida?: boolean | PessoaDesaparecidaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["avistamento"]>

  export type AvistamentoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    idPessoaDesaparecida?: boolean
    dataHora?: boolean
    comentario?: boolean
    localAvistamento?: boolean
    latitude?: boolean
    longitude?: boolean
    nomeInformante?: boolean
    contatoInformante?: boolean
    dataCadastro?: boolean
    dataAtualizacao?: boolean
    pessoaDesaparecida?: boolean | PessoaDesaparecidaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["avistamento"]>

  export type AvistamentoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    idPessoaDesaparecida?: boolean
    dataHora?: boolean
    comentario?: boolean
    localAvistamento?: boolean
    latitude?: boolean
    longitude?: boolean
    nomeInformante?: boolean
    contatoInformante?: boolean
    dataCadastro?: boolean
    dataAtualizacao?: boolean
    pessoaDesaparecida?: boolean | PessoaDesaparecidaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["avistamento"]>

  export type AvistamentoSelectScalar = {
    id?: boolean
    idPessoaDesaparecida?: boolean
    dataHora?: boolean
    comentario?: boolean
    localAvistamento?: boolean
    latitude?: boolean
    longitude?: boolean
    nomeInformante?: boolean
    contatoInformante?: boolean
    dataCadastro?: boolean
    dataAtualizacao?: boolean
  }

  export type AvistamentoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "idPessoaDesaparecida" | "dataHora" | "comentario" | "localAvistamento" | "latitude" | "longitude" | "nomeInformante" | "contatoInformante" | "dataCadastro" | "dataAtualizacao", ExtArgs["result"]["avistamento"]>
  export type AvistamentoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pessoaDesaparecida?: boolean | PessoaDesaparecidaDefaultArgs<ExtArgs>
  }
  export type AvistamentoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pessoaDesaparecida?: boolean | PessoaDesaparecidaDefaultArgs<ExtArgs>
  }
  export type AvistamentoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pessoaDesaparecida?: boolean | PessoaDesaparecidaDefaultArgs<ExtArgs>
  }

  export type $AvistamentoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Avistamento"
    objects: {
      /**
       * Esta parte e para linkar com o id da tabela da pessoa desaparecida em si
       */
      pessoaDesaparecida: Prisma.$PessoaDesaparecidaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      idPessoaDesaparecida: number
      dataHora: Date
      comentario: string
      localAvistamento: string | null
      latitude: number | null
      longitude: number | null
      nomeInformante: string | null
      contatoInformante: string | null
      dataCadastro: Date
      dataAtualizacao: Date
    }, ExtArgs["result"]["avistamento"]>
    composites: {}
  }

  type AvistamentoGetPayload<S extends boolean | null | undefined | AvistamentoDefaultArgs> = $Result.GetResult<Prisma.$AvistamentoPayload, S>

  type AvistamentoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AvistamentoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AvistamentoCountAggregateInputType | true
    }

  export interface AvistamentoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Avistamento'], meta: { name: 'Avistamento' } }
    /**
     * Find zero or one Avistamento that matches the filter.
     * @param {AvistamentoFindUniqueArgs} args - Arguments to find a Avistamento
     * @example
     * // Get one Avistamento
     * const avistamento = await prisma.avistamento.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AvistamentoFindUniqueArgs>(args: SelectSubset<T, AvistamentoFindUniqueArgs<ExtArgs>>): Prisma__AvistamentoClient<$Result.GetResult<Prisma.$AvistamentoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Avistamento that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AvistamentoFindUniqueOrThrowArgs} args - Arguments to find a Avistamento
     * @example
     * // Get one Avistamento
     * const avistamento = await prisma.avistamento.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AvistamentoFindUniqueOrThrowArgs>(args: SelectSubset<T, AvistamentoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AvistamentoClient<$Result.GetResult<Prisma.$AvistamentoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Avistamento that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvistamentoFindFirstArgs} args - Arguments to find a Avistamento
     * @example
     * // Get one Avistamento
     * const avistamento = await prisma.avistamento.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AvistamentoFindFirstArgs>(args?: SelectSubset<T, AvistamentoFindFirstArgs<ExtArgs>>): Prisma__AvistamentoClient<$Result.GetResult<Prisma.$AvistamentoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Avistamento that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvistamentoFindFirstOrThrowArgs} args - Arguments to find a Avistamento
     * @example
     * // Get one Avistamento
     * const avistamento = await prisma.avistamento.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AvistamentoFindFirstOrThrowArgs>(args?: SelectSubset<T, AvistamentoFindFirstOrThrowArgs<ExtArgs>>): Prisma__AvistamentoClient<$Result.GetResult<Prisma.$AvistamentoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Avistamentos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvistamentoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Avistamentos
     * const avistamentos = await prisma.avistamento.findMany()
     * 
     * // Get first 10 Avistamentos
     * const avistamentos = await prisma.avistamento.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const avistamentoWithIdOnly = await prisma.avistamento.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AvistamentoFindManyArgs>(args?: SelectSubset<T, AvistamentoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvistamentoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Avistamento.
     * @param {AvistamentoCreateArgs} args - Arguments to create a Avistamento.
     * @example
     * // Create one Avistamento
     * const Avistamento = await prisma.avistamento.create({
     *   data: {
     *     // ... data to create a Avistamento
     *   }
     * })
     * 
     */
    create<T extends AvistamentoCreateArgs>(args: SelectSubset<T, AvistamentoCreateArgs<ExtArgs>>): Prisma__AvistamentoClient<$Result.GetResult<Prisma.$AvistamentoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Avistamentos.
     * @param {AvistamentoCreateManyArgs} args - Arguments to create many Avistamentos.
     * @example
     * // Create many Avistamentos
     * const avistamento = await prisma.avistamento.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AvistamentoCreateManyArgs>(args?: SelectSubset<T, AvistamentoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Avistamentos and returns the data saved in the database.
     * @param {AvistamentoCreateManyAndReturnArgs} args - Arguments to create many Avistamentos.
     * @example
     * // Create many Avistamentos
     * const avistamento = await prisma.avistamento.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Avistamentos and only return the `id`
     * const avistamentoWithIdOnly = await prisma.avistamento.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AvistamentoCreateManyAndReturnArgs>(args?: SelectSubset<T, AvistamentoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvistamentoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Avistamento.
     * @param {AvistamentoDeleteArgs} args - Arguments to delete one Avistamento.
     * @example
     * // Delete one Avistamento
     * const Avistamento = await prisma.avistamento.delete({
     *   where: {
     *     // ... filter to delete one Avistamento
     *   }
     * })
     * 
     */
    delete<T extends AvistamentoDeleteArgs>(args: SelectSubset<T, AvistamentoDeleteArgs<ExtArgs>>): Prisma__AvistamentoClient<$Result.GetResult<Prisma.$AvistamentoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Avistamento.
     * @param {AvistamentoUpdateArgs} args - Arguments to update one Avistamento.
     * @example
     * // Update one Avistamento
     * const avistamento = await prisma.avistamento.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AvistamentoUpdateArgs>(args: SelectSubset<T, AvistamentoUpdateArgs<ExtArgs>>): Prisma__AvistamentoClient<$Result.GetResult<Prisma.$AvistamentoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Avistamentos.
     * @param {AvistamentoDeleteManyArgs} args - Arguments to filter Avistamentos to delete.
     * @example
     * // Delete a few Avistamentos
     * const { count } = await prisma.avistamento.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AvistamentoDeleteManyArgs>(args?: SelectSubset<T, AvistamentoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Avistamentos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvistamentoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Avistamentos
     * const avistamento = await prisma.avistamento.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AvistamentoUpdateManyArgs>(args: SelectSubset<T, AvistamentoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Avistamentos and returns the data updated in the database.
     * @param {AvistamentoUpdateManyAndReturnArgs} args - Arguments to update many Avistamentos.
     * @example
     * // Update many Avistamentos
     * const avistamento = await prisma.avistamento.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Avistamentos and only return the `id`
     * const avistamentoWithIdOnly = await prisma.avistamento.updateManyAndReturn({
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
    updateManyAndReturn<T extends AvistamentoUpdateManyAndReturnArgs>(args: SelectSubset<T, AvistamentoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvistamentoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Avistamento.
     * @param {AvistamentoUpsertArgs} args - Arguments to update or create a Avistamento.
     * @example
     * // Update or create a Avistamento
     * const avistamento = await prisma.avistamento.upsert({
     *   create: {
     *     // ... data to create a Avistamento
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Avistamento we want to update
     *   }
     * })
     */
    upsert<T extends AvistamentoUpsertArgs>(args: SelectSubset<T, AvistamentoUpsertArgs<ExtArgs>>): Prisma__AvistamentoClient<$Result.GetResult<Prisma.$AvistamentoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Avistamentos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvistamentoCountArgs} args - Arguments to filter Avistamentos to count.
     * @example
     * // Count the number of Avistamentos
     * const count = await prisma.avistamento.count({
     *   where: {
     *     // ... the filter for the Avistamentos we want to count
     *   }
     * })
    **/
    count<T extends AvistamentoCountArgs>(
      args?: Subset<T, AvistamentoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AvistamentoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Avistamento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvistamentoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AvistamentoAggregateArgs>(args: Subset<T, AvistamentoAggregateArgs>): Prisma.PrismaPromise<GetAvistamentoAggregateType<T>>

    /**
     * Group by Avistamento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvistamentoGroupByArgs} args - Group by arguments.
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
      T extends AvistamentoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AvistamentoGroupByArgs['orderBy'] }
        : { orderBy?: AvistamentoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AvistamentoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAvistamentoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Avistamento model
   */
  readonly fields: AvistamentoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Avistamento.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AvistamentoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pessoaDesaparecida<T extends PessoaDesaparecidaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PessoaDesaparecidaDefaultArgs<ExtArgs>>): Prisma__PessoaDesaparecidaClient<$Result.GetResult<Prisma.$PessoaDesaparecidaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Avistamento model
   */
  interface AvistamentoFieldRefs {
    readonly id: FieldRef<"Avistamento", 'Int'>
    readonly idPessoaDesaparecida: FieldRef<"Avistamento", 'Int'>
    readonly dataHora: FieldRef<"Avistamento", 'DateTime'>
    readonly comentario: FieldRef<"Avistamento", 'String'>
    readonly localAvistamento: FieldRef<"Avistamento", 'String'>
    readonly latitude: FieldRef<"Avistamento", 'Float'>
    readonly longitude: FieldRef<"Avistamento", 'Float'>
    readonly nomeInformante: FieldRef<"Avistamento", 'String'>
    readonly contatoInformante: FieldRef<"Avistamento", 'String'>
    readonly dataCadastro: FieldRef<"Avistamento", 'DateTime'>
    readonly dataAtualizacao: FieldRef<"Avistamento", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Avistamento findUnique
   */
  export type AvistamentoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avistamento
     */
    select?: AvistamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avistamento
     */
    omit?: AvistamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvistamentoInclude<ExtArgs> | null
    /**
     * Filter, which Avistamento to fetch.
     */
    where: AvistamentoWhereUniqueInput
  }

  /**
   * Avistamento findUniqueOrThrow
   */
  export type AvistamentoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avistamento
     */
    select?: AvistamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avistamento
     */
    omit?: AvistamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvistamentoInclude<ExtArgs> | null
    /**
     * Filter, which Avistamento to fetch.
     */
    where: AvistamentoWhereUniqueInput
  }

  /**
   * Avistamento findFirst
   */
  export type AvistamentoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avistamento
     */
    select?: AvistamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avistamento
     */
    omit?: AvistamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvistamentoInclude<ExtArgs> | null
    /**
     * Filter, which Avistamento to fetch.
     */
    where?: AvistamentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Avistamentos to fetch.
     */
    orderBy?: AvistamentoOrderByWithRelationInput | AvistamentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Avistamentos.
     */
    cursor?: AvistamentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Avistamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Avistamentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Avistamentos.
     */
    distinct?: AvistamentoScalarFieldEnum | AvistamentoScalarFieldEnum[]
  }

  /**
   * Avistamento findFirstOrThrow
   */
  export type AvistamentoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avistamento
     */
    select?: AvistamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avistamento
     */
    omit?: AvistamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvistamentoInclude<ExtArgs> | null
    /**
     * Filter, which Avistamento to fetch.
     */
    where?: AvistamentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Avistamentos to fetch.
     */
    orderBy?: AvistamentoOrderByWithRelationInput | AvistamentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Avistamentos.
     */
    cursor?: AvistamentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Avistamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Avistamentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Avistamentos.
     */
    distinct?: AvistamentoScalarFieldEnum | AvistamentoScalarFieldEnum[]
  }

  /**
   * Avistamento findMany
   */
  export type AvistamentoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avistamento
     */
    select?: AvistamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avistamento
     */
    omit?: AvistamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvistamentoInclude<ExtArgs> | null
    /**
     * Filter, which Avistamentos to fetch.
     */
    where?: AvistamentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Avistamentos to fetch.
     */
    orderBy?: AvistamentoOrderByWithRelationInput | AvistamentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Avistamentos.
     */
    cursor?: AvistamentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Avistamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Avistamentos.
     */
    skip?: number
    distinct?: AvistamentoScalarFieldEnum | AvistamentoScalarFieldEnum[]
  }

  /**
   * Avistamento create
   */
  export type AvistamentoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avistamento
     */
    select?: AvistamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avistamento
     */
    omit?: AvistamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvistamentoInclude<ExtArgs> | null
    /**
     * The data needed to create a Avistamento.
     */
    data: XOR<AvistamentoCreateInput, AvistamentoUncheckedCreateInput>
  }

  /**
   * Avistamento createMany
   */
  export type AvistamentoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Avistamentos.
     */
    data: AvistamentoCreateManyInput | AvistamentoCreateManyInput[]
  }

  /**
   * Avistamento createManyAndReturn
   */
  export type AvistamentoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avistamento
     */
    select?: AvistamentoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Avistamento
     */
    omit?: AvistamentoOmit<ExtArgs> | null
    /**
     * The data used to create many Avistamentos.
     */
    data: AvistamentoCreateManyInput | AvistamentoCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvistamentoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Avistamento update
   */
  export type AvistamentoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avistamento
     */
    select?: AvistamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avistamento
     */
    omit?: AvistamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvistamentoInclude<ExtArgs> | null
    /**
     * The data needed to update a Avistamento.
     */
    data: XOR<AvistamentoUpdateInput, AvistamentoUncheckedUpdateInput>
    /**
     * Choose, which Avistamento to update.
     */
    where: AvistamentoWhereUniqueInput
  }

  /**
   * Avistamento updateMany
   */
  export type AvistamentoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Avistamentos.
     */
    data: XOR<AvistamentoUpdateManyMutationInput, AvistamentoUncheckedUpdateManyInput>
    /**
     * Filter which Avistamentos to update
     */
    where?: AvistamentoWhereInput
    /**
     * Limit how many Avistamentos to update.
     */
    limit?: number
  }

  /**
   * Avistamento updateManyAndReturn
   */
  export type AvistamentoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avistamento
     */
    select?: AvistamentoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Avistamento
     */
    omit?: AvistamentoOmit<ExtArgs> | null
    /**
     * The data used to update Avistamentos.
     */
    data: XOR<AvistamentoUpdateManyMutationInput, AvistamentoUncheckedUpdateManyInput>
    /**
     * Filter which Avistamentos to update
     */
    where?: AvistamentoWhereInput
    /**
     * Limit how many Avistamentos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvistamentoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Avistamento upsert
   */
  export type AvistamentoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avistamento
     */
    select?: AvistamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avistamento
     */
    omit?: AvistamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvistamentoInclude<ExtArgs> | null
    /**
     * The filter to search for the Avistamento to update in case it exists.
     */
    where: AvistamentoWhereUniqueInput
    /**
     * In case the Avistamento found by the `where` argument doesn't exist, create a new Avistamento with this data.
     */
    create: XOR<AvistamentoCreateInput, AvistamentoUncheckedCreateInput>
    /**
     * In case the Avistamento was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AvistamentoUpdateInput, AvistamentoUncheckedUpdateInput>
  }

  /**
   * Avistamento delete
   */
  export type AvistamentoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avistamento
     */
    select?: AvistamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avistamento
     */
    omit?: AvistamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvistamentoInclude<ExtArgs> | null
    /**
     * Filter which Avistamento to delete.
     */
    where: AvistamentoWhereUniqueInput
  }

  /**
   * Avistamento deleteMany
   */
  export type AvistamentoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Avistamentos to delete
     */
    where?: AvistamentoWhereInput
    /**
     * Limit how many Avistamentos to delete.
     */
    limit?: number
  }

  /**
   * Avistamento without action
   */
  export type AvistamentoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avistamento
     */
    select?: AvistamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avistamento
     */
    omit?: AvistamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvistamentoInclude<ExtArgs> | null
  }


  /**
   * Model PessoaDesaparecida
   */

  export type AggregatePessoaDesaparecida = {
    _count: PessoaDesaparecidaCountAggregateOutputType | null
    _avg: PessoaDesaparecidaAvgAggregateOutputType | null
    _sum: PessoaDesaparecidaSumAggregateOutputType | null
    _min: PessoaDesaparecidaMinAggregateOutputType | null
    _max: PessoaDesaparecidaMaxAggregateOutputType | null
  }

  export type PessoaDesaparecidaAvgAggregateOutputType = {
    id: number | null
    idade: number | null
  }

  export type PessoaDesaparecidaSumAggregateOutputType = {
    id: number | null
    idade: number | null
  }

  export type PessoaDesaparecidaMinAggregateOutputType = {
    id: number | null
    nome: string | null
    idade: number | null
    dataDesaparecimento: Date | null
    descricao: string | null
    status: $Enums.status | null
    dataCadastro: Date | null
    dataAtualizacao: Date | null
  }

  export type PessoaDesaparecidaMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    idade: number | null
    dataDesaparecimento: Date | null
    descricao: string | null
    status: $Enums.status | null
    dataCadastro: Date | null
    dataAtualizacao: Date | null
  }

  export type PessoaDesaparecidaCountAggregateOutputType = {
    id: number
    nome: number
    idade: number
    dataDesaparecimento: number
    descricao: number
    status: number
    dataCadastro: number
    dataAtualizacao: number
    _all: number
  }


  export type PessoaDesaparecidaAvgAggregateInputType = {
    id?: true
    idade?: true
  }

  export type PessoaDesaparecidaSumAggregateInputType = {
    id?: true
    idade?: true
  }

  export type PessoaDesaparecidaMinAggregateInputType = {
    id?: true
    nome?: true
    idade?: true
    dataDesaparecimento?: true
    descricao?: true
    status?: true
    dataCadastro?: true
    dataAtualizacao?: true
  }

  export type PessoaDesaparecidaMaxAggregateInputType = {
    id?: true
    nome?: true
    idade?: true
    dataDesaparecimento?: true
    descricao?: true
    status?: true
    dataCadastro?: true
    dataAtualizacao?: true
  }

  export type PessoaDesaparecidaCountAggregateInputType = {
    id?: true
    nome?: true
    idade?: true
    dataDesaparecimento?: true
    descricao?: true
    status?: true
    dataCadastro?: true
    dataAtualizacao?: true
    _all?: true
  }

  export type PessoaDesaparecidaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PessoaDesaparecida to aggregate.
     */
    where?: PessoaDesaparecidaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PessoaDesaparecidas to fetch.
     */
    orderBy?: PessoaDesaparecidaOrderByWithRelationInput | PessoaDesaparecidaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PessoaDesaparecidaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PessoaDesaparecidas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PessoaDesaparecidas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PessoaDesaparecidas
    **/
    _count?: true | PessoaDesaparecidaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PessoaDesaparecidaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PessoaDesaparecidaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PessoaDesaparecidaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PessoaDesaparecidaMaxAggregateInputType
  }

  export type GetPessoaDesaparecidaAggregateType<T extends PessoaDesaparecidaAggregateArgs> = {
        [P in keyof T & keyof AggregatePessoaDesaparecida]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePessoaDesaparecida[P]>
      : GetScalarType<T[P], AggregatePessoaDesaparecida[P]>
  }




  export type PessoaDesaparecidaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PessoaDesaparecidaWhereInput
    orderBy?: PessoaDesaparecidaOrderByWithAggregationInput | PessoaDesaparecidaOrderByWithAggregationInput[]
    by: PessoaDesaparecidaScalarFieldEnum[] | PessoaDesaparecidaScalarFieldEnum
    having?: PessoaDesaparecidaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PessoaDesaparecidaCountAggregateInputType | true
    _avg?: PessoaDesaparecidaAvgAggregateInputType
    _sum?: PessoaDesaparecidaSumAggregateInputType
    _min?: PessoaDesaparecidaMinAggregateInputType
    _max?: PessoaDesaparecidaMaxAggregateInputType
  }

  export type PessoaDesaparecidaGroupByOutputType = {
    id: number
    nome: string
    idade: number
    dataDesaparecimento: Date
    descricao: string | null
    status: $Enums.status
    dataCadastro: Date
    dataAtualizacao: Date
    _count: PessoaDesaparecidaCountAggregateOutputType | null
    _avg: PessoaDesaparecidaAvgAggregateOutputType | null
    _sum: PessoaDesaparecidaSumAggregateOutputType | null
    _min: PessoaDesaparecidaMinAggregateOutputType | null
    _max: PessoaDesaparecidaMaxAggregateOutputType | null
  }

  type GetPessoaDesaparecidaGroupByPayload<T extends PessoaDesaparecidaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PessoaDesaparecidaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PessoaDesaparecidaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PessoaDesaparecidaGroupByOutputType[P]>
            : GetScalarType<T[P], PessoaDesaparecidaGroupByOutputType[P]>
        }
      >
    >


  export type PessoaDesaparecidaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    idade?: boolean
    dataDesaparecimento?: boolean
    descricao?: boolean
    status?: boolean
    dataCadastro?: boolean
    dataAtualizacao?: boolean
    avistamentos?: boolean | PessoaDesaparecida$avistamentosArgs<ExtArgs>
    _count?: boolean | PessoaDesaparecidaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pessoaDesaparecida"]>

  export type PessoaDesaparecidaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    idade?: boolean
    dataDesaparecimento?: boolean
    descricao?: boolean
    status?: boolean
    dataCadastro?: boolean
    dataAtualizacao?: boolean
  }, ExtArgs["result"]["pessoaDesaparecida"]>

  export type PessoaDesaparecidaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    idade?: boolean
    dataDesaparecimento?: boolean
    descricao?: boolean
    status?: boolean
    dataCadastro?: boolean
    dataAtualizacao?: boolean
  }, ExtArgs["result"]["pessoaDesaparecida"]>

  export type PessoaDesaparecidaSelectScalar = {
    id?: boolean
    nome?: boolean
    idade?: boolean
    dataDesaparecimento?: boolean
    descricao?: boolean
    status?: boolean
    dataCadastro?: boolean
    dataAtualizacao?: boolean
  }

  export type PessoaDesaparecidaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "idade" | "dataDesaparecimento" | "descricao" | "status" | "dataCadastro" | "dataAtualizacao", ExtArgs["result"]["pessoaDesaparecida"]>
  export type PessoaDesaparecidaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    avistamentos?: boolean | PessoaDesaparecida$avistamentosArgs<ExtArgs>
    _count?: boolean | PessoaDesaparecidaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PessoaDesaparecidaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PessoaDesaparecidaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PessoaDesaparecidaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PessoaDesaparecida"
    objects: {
      avistamentos: Prisma.$AvistamentoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      idade: number
      dataDesaparecimento: Date
      descricao: string | null
      status: $Enums.status
      dataCadastro: Date
      dataAtualizacao: Date
    }, ExtArgs["result"]["pessoaDesaparecida"]>
    composites: {}
  }

  type PessoaDesaparecidaGetPayload<S extends boolean | null | undefined | PessoaDesaparecidaDefaultArgs> = $Result.GetResult<Prisma.$PessoaDesaparecidaPayload, S>

  type PessoaDesaparecidaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PessoaDesaparecidaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PessoaDesaparecidaCountAggregateInputType | true
    }

  export interface PessoaDesaparecidaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PessoaDesaparecida'], meta: { name: 'PessoaDesaparecida' } }
    /**
     * Find zero or one PessoaDesaparecida that matches the filter.
     * @param {PessoaDesaparecidaFindUniqueArgs} args - Arguments to find a PessoaDesaparecida
     * @example
     * // Get one PessoaDesaparecida
     * const pessoaDesaparecida = await prisma.pessoaDesaparecida.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PessoaDesaparecidaFindUniqueArgs>(args: SelectSubset<T, PessoaDesaparecidaFindUniqueArgs<ExtArgs>>): Prisma__PessoaDesaparecidaClient<$Result.GetResult<Prisma.$PessoaDesaparecidaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PessoaDesaparecida that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PessoaDesaparecidaFindUniqueOrThrowArgs} args - Arguments to find a PessoaDesaparecida
     * @example
     * // Get one PessoaDesaparecida
     * const pessoaDesaparecida = await prisma.pessoaDesaparecida.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PessoaDesaparecidaFindUniqueOrThrowArgs>(args: SelectSubset<T, PessoaDesaparecidaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PessoaDesaparecidaClient<$Result.GetResult<Prisma.$PessoaDesaparecidaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PessoaDesaparecida that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PessoaDesaparecidaFindFirstArgs} args - Arguments to find a PessoaDesaparecida
     * @example
     * // Get one PessoaDesaparecida
     * const pessoaDesaparecida = await prisma.pessoaDesaparecida.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PessoaDesaparecidaFindFirstArgs>(args?: SelectSubset<T, PessoaDesaparecidaFindFirstArgs<ExtArgs>>): Prisma__PessoaDesaparecidaClient<$Result.GetResult<Prisma.$PessoaDesaparecidaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PessoaDesaparecida that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PessoaDesaparecidaFindFirstOrThrowArgs} args - Arguments to find a PessoaDesaparecida
     * @example
     * // Get one PessoaDesaparecida
     * const pessoaDesaparecida = await prisma.pessoaDesaparecida.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PessoaDesaparecidaFindFirstOrThrowArgs>(args?: SelectSubset<T, PessoaDesaparecidaFindFirstOrThrowArgs<ExtArgs>>): Prisma__PessoaDesaparecidaClient<$Result.GetResult<Prisma.$PessoaDesaparecidaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PessoaDesaparecidas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PessoaDesaparecidaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PessoaDesaparecidas
     * const pessoaDesaparecidas = await prisma.pessoaDesaparecida.findMany()
     * 
     * // Get first 10 PessoaDesaparecidas
     * const pessoaDesaparecidas = await prisma.pessoaDesaparecida.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pessoaDesaparecidaWithIdOnly = await prisma.pessoaDesaparecida.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PessoaDesaparecidaFindManyArgs>(args?: SelectSubset<T, PessoaDesaparecidaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PessoaDesaparecidaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PessoaDesaparecida.
     * @param {PessoaDesaparecidaCreateArgs} args - Arguments to create a PessoaDesaparecida.
     * @example
     * // Create one PessoaDesaparecida
     * const PessoaDesaparecida = await prisma.pessoaDesaparecida.create({
     *   data: {
     *     // ... data to create a PessoaDesaparecida
     *   }
     * })
     * 
     */
    create<T extends PessoaDesaparecidaCreateArgs>(args: SelectSubset<T, PessoaDesaparecidaCreateArgs<ExtArgs>>): Prisma__PessoaDesaparecidaClient<$Result.GetResult<Prisma.$PessoaDesaparecidaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PessoaDesaparecidas.
     * @param {PessoaDesaparecidaCreateManyArgs} args - Arguments to create many PessoaDesaparecidas.
     * @example
     * // Create many PessoaDesaparecidas
     * const pessoaDesaparecida = await prisma.pessoaDesaparecida.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PessoaDesaparecidaCreateManyArgs>(args?: SelectSubset<T, PessoaDesaparecidaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PessoaDesaparecidas and returns the data saved in the database.
     * @param {PessoaDesaparecidaCreateManyAndReturnArgs} args - Arguments to create many PessoaDesaparecidas.
     * @example
     * // Create many PessoaDesaparecidas
     * const pessoaDesaparecida = await prisma.pessoaDesaparecida.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PessoaDesaparecidas and only return the `id`
     * const pessoaDesaparecidaWithIdOnly = await prisma.pessoaDesaparecida.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PessoaDesaparecidaCreateManyAndReturnArgs>(args?: SelectSubset<T, PessoaDesaparecidaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PessoaDesaparecidaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PessoaDesaparecida.
     * @param {PessoaDesaparecidaDeleteArgs} args - Arguments to delete one PessoaDesaparecida.
     * @example
     * // Delete one PessoaDesaparecida
     * const PessoaDesaparecida = await prisma.pessoaDesaparecida.delete({
     *   where: {
     *     // ... filter to delete one PessoaDesaparecida
     *   }
     * })
     * 
     */
    delete<T extends PessoaDesaparecidaDeleteArgs>(args: SelectSubset<T, PessoaDesaparecidaDeleteArgs<ExtArgs>>): Prisma__PessoaDesaparecidaClient<$Result.GetResult<Prisma.$PessoaDesaparecidaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PessoaDesaparecida.
     * @param {PessoaDesaparecidaUpdateArgs} args - Arguments to update one PessoaDesaparecida.
     * @example
     * // Update one PessoaDesaparecida
     * const pessoaDesaparecida = await prisma.pessoaDesaparecida.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PessoaDesaparecidaUpdateArgs>(args: SelectSubset<T, PessoaDesaparecidaUpdateArgs<ExtArgs>>): Prisma__PessoaDesaparecidaClient<$Result.GetResult<Prisma.$PessoaDesaparecidaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PessoaDesaparecidas.
     * @param {PessoaDesaparecidaDeleteManyArgs} args - Arguments to filter PessoaDesaparecidas to delete.
     * @example
     * // Delete a few PessoaDesaparecidas
     * const { count } = await prisma.pessoaDesaparecida.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PessoaDesaparecidaDeleteManyArgs>(args?: SelectSubset<T, PessoaDesaparecidaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PessoaDesaparecidas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PessoaDesaparecidaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PessoaDesaparecidas
     * const pessoaDesaparecida = await prisma.pessoaDesaparecida.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PessoaDesaparecidaUpdateManyArgs>(args: SelectSubset<T, PessoaDesaparecidaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PessoaDesaparecidas and returns the data updated in the database.
     * @param {PessoaDesaparecidaUpdateManyAndReturnArgs} args - Arguments to update many PessoaDesaparecidas.
     * @example
     * // Update many PessoaDesaparecidas
     * const pessoaDesaparecida = await prisma.pessoaDesaparecida.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PessoaDesaparecidas and only return the `id`
     * const pessoaDesaparecidaWithIdOnly = await prisma.pessoaDesaparecida.updateManyAndReturn({
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
    updateManyAndReturn<T extends PessoaDesaparecidaUpdateManyAndReturnArgs>(args: SelectSubset<T, PessoaDesaparecidaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PessoaDesaparecidaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PessoaDesaparecida.
     * @param {PessoaDesaparecidaUpsertArgs} args - Arguments to update or create a PessoaDesaparecida.
     * @example
     * // Update or create a PessoaDesaparecida
     * const pessoaDesaparecida = await prisma.pessoaDesaparecida.upsert({
     *   create: {
     *     // ... data to create a PessoaDesaparecida
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PessoaDesaparecida we want to update
     *   }
     * })
     */
    upsert<T extends PessoaDesaparecidaUpsertArgs>(args: SelectSubset<T, PessoaDesaparecidaUpsertArgs<ExtArgs>>): Prisma__PessoaDesaparecidaClient<$Result.GetResult<Prisma.$PessoaDesaparecidaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PessoaDesaparecidas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PessoaDesaparecidaCountArgs} args - Arguments to filter PessoaDesaparecidas to count.
     * @example
     * // Count the number of PessoaDesaparecidas
     * const count = await prisma.pessoaDesaparecida.count({
     *   where: {
     *     // ... the filter for the PessoaDesaparecidas we want to count
     *   }
     * })
    **/
    count<T extends PessoaDesaparecidaCountArgs>(
      args?: Subset<T, PessoaDesaparecidaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PessoaDesaparecidaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PessoaDesaparecida.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PessoaDesaparecidaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PessoaDesaparecidaAggregateArgs>(args: Subset<T, PessoaDesaparecidaAggregateArgs>): Prisma.PrismaPromise<GetPessoaDesaparecidaAggregateType<T>>

    /**
     * Group by PessoaDesaparecida.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PessoaDesaparecidaGroupByArgs} args - Group by arguments.
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
      T extends PessoaDesaparecidaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PessoaDesaparecidaGroupByArgs['orderBy'] }
        : { orderBy?: PessoaDesaparecidaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PessoaDesaparecidaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPessoaDesaparecidaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PessoaDesaparecida model
   */
  readonly fields: PessoaDesaparecidaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PessoaDesaparecida.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PessoaDesaparecidaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    avistamentos<T extends PessoaDesaparecida$avistamentosArgs<ExtArgs> = {}>(args?: Subset<T, PessoaDesaparecida$avistamentosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvistamentoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the PessoaDesaparecida model
   */
  interface PessoaDesaparecidaFieldRefs {
    readonly id: FieldRef<"PessoaDesaparecida", 'Int'>
    readonly nome: FieldRef<"PessoaDesaparecida", 'String'>
    readonly idade: FieldRef<"PessoaDesaparecida", 'Int'>
    readonly dataDesaparecimento: FieldRef<"PessoaDesaparecida", 'DateTime'>
    readonly descricao: FieldRef<"PessoaDesaparecida", 'String'>
    readonly status: FieldRef<"PessoaDesaparecida", 'status'>
    readonly dataCadastro: FieldRef<"PessoaDesaparecida", 'DateTime'>
    readonly dataAtualizacao: FieldRef<"PessoaDesaparecida", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PessoaDesaparecida findUnique
   */
  export type PessoaDesaparecidaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PessoaDesaparecida
     */
    select?: PessoaDesaparecidaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PessoaDesaparecida
     */
    omit?: PessoaDesaparecidaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PessoaDesaparecidaInclude<ExtArgs> | null
    /**
     * Filter, which PessoaDesaparecida to fetch.
     */
    where: PessoaDesaparecidaWhereUniqueInput
  }

  /**
   * PessoaDesaparecida findUniqueOrThrow
   */
  export type PessoaDesaparecidaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PessoaDesaparecida
     */
    select?: PessoaDesaparecidaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PessoaDesaparecida
     */
    omit?: PessoaDesaparecidaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PessoaDesaparecidaInclude<ExtArgs> | null
    /**
     * Filter, which PessoaDesaparecida to fetch.
     */
    where: PessoaDesaparecidaWhereUniqueInput
  }

  /**
   * PessoaDesaparecida findFirst
   */
  export type PessoaDesaparecidaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PessoaDesaparecida
     */
    select?: PessoaDesaparecidaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PessoaDesaparecida
     */
    omit?: PessoaDesaparecidaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PessoaDesaparecidaInclude<ExtArgs> | null
    /**
     * Filter, which PessoaDesaparecida to fetch.
     */
    where?: PessoaDesaparecidaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PessoaDesaparecidas to fetch.
     */
    orderBy?: PessoaDesaparecidaOrderByWithRelationInput | PessoaDesaparecidaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PessoaDesaparecidas.
     */
    cursor?: PessoaDesaparecidaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PessoaDesaparecidas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PessoaDesaparecidas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PessoaDesaparecidas.
     */
    distinct?: PessoaDesaparecidaScalarFieldEnum | PessoaDesaparecidaScalarFieldEnum[]
  }

  /**
   * PessoaDesaparecida findFirstOrThrow
   */
  export type PessoaDesaparecidaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PessoaDesaparecida
     */
    select?: PessoaDesaparecidaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PessoaDesaparecida
     */
    omit?: PessoaDesaparecidaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PessoaDesaparecidaInclude<ExtArgs> | null
    /**
     * Filter, which PessoaDesaparecida to fetch.
     */
    where?: PessoaDesaparecidaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PessoaDesaparecidas to fetch.
     */
    orderBy?: PessoaDesaparecidaOrderByWithRelationInput | PessoaDesaparecidaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PessoaDesaparecidas.
     */
    cursor?: PessoaDesaparecidaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PessoaDesaparecidas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PessoaDesaparecidas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PessoaDesaparecidas.
     */
    distinct?: PessoaDesaparecidaScalarFieldEnum | PessoaDesaparecidaScalarFieldEnum[]
  }

  /**
   * PessoaDesaparecida findMany
   */
  export type PessoaDesaparecidaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PessoaDesaparecida
     */
    select?: PessoaDesaparecidaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PessoaDesaparecida
     */
    omit?: PessoaDesaparecidaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PessoaDesaparecidaInclude<ExtArgs> | null
    /**
     * Filter, which PessoaDesaparecidas to fetch.
     */
    where?: PessoaDesaparecidaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PessoaDesaparecidas to fetch.
     */
    orderBy?: PessoaDesaparecidaOrderByWithRelationInput | PessoaDesaparecidaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PessoaDesaparecidas.
     */
    cursor?: PessoaDesaparecidaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PessoaDesaparecidas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PessoaDesaparecidas.
     */
    skip?: number
    distinct?: PessoaDesaparecidaScalarFieldEnum | PessoaDesaparecidaScalarFieldEnum[]
  }

  /**
   * PessoaDesaparecida create
   */
  export type PessoaDesaparecidaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PessoaDesaparecida
     */
    select?: PessoaDesaparecidaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PessoaDesaparecida
     */
    omit?: PessoaDesaparecidaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PessoaDesaparecidaInclude<ExtArgs> | null
    /**
     * The data needed to create a PessoaDesaparecida.
     */
    data: XOR<PessoaDesaparecidaCreateInput, PessoaDesaparecidaUncheckedCreateInput>
  }

  /**
   * PessoaDesaparecida createMany
   */
  export type PessoaDesaparecidaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PessoaDesaparecidas.
     */
    data: PessoaDesaparecidaCreateManyInput | PessoaDesaparecidaCreateManyInput[]
  }

  /**
   * PessoaDesaparecida createManyAndReturn
   */
  export type PessoaDesaparecidaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PessoaDesaparecida
     */
    select?: PessoaDesaparecidaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PessoaDesaparecida
     */
    omit?: PessoaDesaparecidaOmit<ExtArgs> | null
    /**
     * The data used to create many PessoaDesaparecidas.
     */
    data: PessoaDesaparecidaCreateManyInput | PessoaDesaparecidaCreateManyInput[]
  }

  /**
   * PessoaDesaparecida update
   */
  export type PessoaDesaparecidaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PessoaDesaparecida
     */
    select?: PessoaDesaparecidaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PessoaDesaparecida
     */
    omit?: PessoaDesaparecidaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PessoaDesaparecidaInclude<ExtArgs> | null
    /**
     * The data needed to update a PessoaDesaparecida.
     */
    data: XOR<PessoaDesaparecidaUpdateInput, PessoaDesaparecidaUncheckedUpdateInput>
    /**
     * Choose, which PessoaDesaparecida to update.
     */
    where: PessoaDesaparecidaWhereUniqueInput
  }

  /**
   * PessoaDesaparecida updateMany
   */
  export type PessoaDesaparecidaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PessoaDesaparecidas.
     */
    data: XOR<PessoaDesaparecidaUpdateManyMutationInput, PessoaDesaparecidaUncheckedUpdateManyInput>
    /**
     * Filter which PessoaDesaparecidas to update
     */
    where?: PessoaDesaparecidaWhereInput
    /**
     * Limit how many PessoaDesaparecidas to update.
     */
    limit?: number
  }

  /**
   * PessoaDesaparecida updateManyAndReturn
   */
  export type PessoaDesaparecidaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PessoaDesaparecida
     */
    select?: PessoaDesaparecidaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PessoaDesaparecida
     */
    omit?: PessoaDesaparecidaOmit<ExtArgs> | null
    /**
     * The data used to update PessoaDesaparecidas.
     */
    data: XOR<PessoaDesaparecidaUpdateManyMutationInput, PessoaDesaparecidaUncheckedUpdateManyInput>
    /**
     * Filter which PessoaDesaparecidas to update
     */
    where?: PessoaDesaparecidaWhereInput
    /**
     * Limit how many PessoaDesaparecidas to update.
     */
    limit?: number
  }

  /**
   * PessoaDesaparecida upsert
   */
  export type PessoaDesaparecidaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PessoaDesaparecida
     */
    select?: PessoaDesaparecidaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PessoaDesaparecida
     */
    omit?: PessoaDesaparecidaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PessoaDesaparecidaInclude<ExtArgs> | null
    /**
     * The filter to search for the PessoaDesaparecida to update in case it exists.
     */
    where: PessoaDesaparecidaWhereUniqueInput
    /**
     * In case the PessoaDesaparecida found by the `where` argument doesn't exist, create a new PessoaDesaparecida with this data.
     */
    create: XOR<PessoaDesaparecidaCreateInput, PessoaDesaparecidaUncheckedCreateInput>
    /**
     * In case the PessoaDesaparecida was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PessoaDesaparecidaUpdateInput, PessoaDesaparecidaUncheckedUpdateInput>
  }

  /**
   * PessoaDesaparecida delete
   */
  export type PessoaDesaparecidaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PessoaDesaparecida
     */
    select?: PessoaDesaparecidaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PessoaDesaparecida
     */
    omit?: PessoaDesaparecidaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PessoaDesaparecidaInclude<ExtArgs> | null
    /**
     * Filter which PessoaDesaparecida to delete.
     */
    where: PessoaDesaparecidaWhereUniqueInput
  }

  /**
   * PessoaDesaparecida deleteMany
   */
  export type PessoaDesaparecidaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PessoaDesaparecidas to delete
     */
    where?: PessoaDesaparecidaWhereInput
    /**
     * Limit how many PessoaDesaparecidas to delete.
     */
    limit?: number
  }

  /**
   * PessoaDesaparecida.avistamentos
   */
  export type PessoaDesaparecida$avistamentosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avistamento
     */
    select?: AvistamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avistamento
     */
    omit?: AvistamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvistamentoInclude<ExtArgs> | null
    where?: AvistamentoWhereInput
    orderBy?: AvistamentoOrderByWithRelationInput | AvistamentoOrderByWithRelationInput[]
    cursor?: AvistamentoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AvistamentoScalarFieldEnum | AvistamentoScalarFieldEnum[]
  }

  /**
   * PessoaDesaparecida without action
   */
  export type PessoaDesaparecidaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PessoaDesaparecida
     */
    select?: PessoaDesaparecidaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PessoaDesaparecida
     */
    omit?: PessoaDesaparecidaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PessoaDesaparecidaInclude<ExtArgs> | null
  }


  /**
   * Model Pessoa
   */

  export type AggregatePessoa = {
    _count: PessoaCountAggregateOutputType | null
    _avg: PessoaAvgAggregateOutputType | null
    _sum: PessoaSumAggregateOutputType | null
    _min: PessoaMinAggregateOutputType | null
    _max: PessoaMaxAggregateOutputType | null
  }

  export type PessoaAvgAggregateOutputType = {
    idade: number | null
  }

  export type PessoaSumAggregateOutputType = {
    idade: number | null
  }

  export type PessoaMinAggregateOutputType = {
    id: string | null
    nome: string | null
    idade: number | null
    email: string | null
    criadoEm: Date | null
  }

  export type PessoaMaxAggregateOutputType = {
    id: string | null
    nome: string | null
    idade: number | null
    email: string | null
    criadoEm: Date | null
  }

  export type PessoaCountAggregateOutputType = {
    id: number
    nome: number
    idade: number
    email: number
    criadoEm: number
    _all: number
  }


  export type PessoaAvgAggregateInputType = {
    idade?: true
  }

  export type PessoaSumAggregateInputType = {
    idade?: true
  }

  export type PessoaMinAggregateInputType = {
    id?: true
    nome?: true
    idade?: true
    email?: true
    criadoEm?: true
  }

  export type PessoaMaxAggregateInputType = {
    id?: true
    nome?: true
    idade?: true
    email?: true
    criadoEm?: true
  }

  export type PessoaCountAggregateInputType = {
    id?: true
    nome?: true
    idade?: true
    email?: true
    criadoEm?: true
    _all?: true
  }

  export type PessoaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pessoa to aggregate.
     */
    where?: PessoaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pessoas to fetch.
     */
    orderBy?: PessoaOrderByWithRelationInput | PessoaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PessoaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pessoas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pessoas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Pessoas
    **/
    _count?: true | PessoaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PessoaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PessoaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PessoaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PessoaMaxAggregateInputType
  }

  export type GetPessoaAggregateType<T extends PessoaAggregateArgs> = {
        [P in keyof T & keyof AggregatePessoa]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePessoa[P]>
      : GetScalarType<T[P], AggregatePessoa[P]>
  }




  export type PessoaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PessoaWhereInput
    orderBy?: PessoaOrderByWithAggregationInput | PessoaOrderByWithAggregationInput[]
    by: PessoaScalarFieldEnum[] | PessoaScalarFieldEnum
    having?: PessoaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PessoaCountAggregateInputType | true
    _avg?: PessoaAvgAggregateInputType
    _sum?: PessoaSumAggregateInputType
    _min?: PessoaMinAggregateInputType
    _max?: PessoaMaxAggregateInputType
  }

  export type PessoaGroupByOutputType = {
    id: string
    nome: string
    idade: number
    email: string
    criadoEm: Date
    _count: PessoaCountAggregateOutputType | null
    _avg: PessoaAvgAggregateOutputType | null
    _sum: PessoaSumAggregateOutputType | null
    _min: PessoaMinAggregateOutputType | null
    _max: PessoaMaxAggregateOutputType | null
  }

  type GetPessoaGroupByPayload<T extends PessoaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PessoaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PessoaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PessoaGroupByOutputType[P]>
            : GetScalarType<T[P], PessoaGroupByOutputType[P]>
        }
      >
    >


  export type PessoaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    idade?: boolean
    email?: boolean
    criadoEm?: boolean
    localizacoes?: boolean | Pessoa$localizacoesArgs<ExtArgs>
    _count?: boolean | PessoaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pessoa"]>

  export type PessoaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    idade?: boolean
    email?: boolean
    criadoEm?: boolean
  }, ExtArgs["result"]["pessoa"]>

  export type PessoaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    idade?: boolean
    email?: boolean
    criadoEm?: boolean
  }, ExtArgs["result"]["pessoa"]>

  export type PessoaSelectScalar = {
    id?: boolean
    nome?: boolean
    idade?: boolean
    email?: boolean
    criadoEm?: boolean
  }

  export type PessoaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "idade" | "email" | "criadoEm", ExtArgs["result"]["pessoa"]>
  export type PessoaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    localizacoes?: boolean | Pessoa$localizacoesArgs<ExtArgs>
    _count?: boolean | PessoaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PessoaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PessoaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PessoaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Pessoa"
    objects: {
      localizacoes: Prisma.$LocalizacaoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nome: string
      idade: number
      email: string
      criadoEm: Date
    }, ExtArgs["result"]["pessoa"]>
    composites: {}
  }

  type PessoaGetPayload<S extends boolean | null | undefined | PessoaDefaultArgs> = $Result.GetResult<Prisma.$PessoaPayload, S>

  type PessoaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PessoaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PessoaCountAggregateInputType | true
    }

  export interface PessoaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Pessoa'], meta: { name: 'Pessoa' } }
    /**
     * Find zero or one Pessoa that matches the filter.
     * @param {PessoaFindUniqueArgs} args - Arguments to find a Pessoa
     * @example
     * // Get one Pessoa
     * const pessoa = await prisma.pessoa.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PessoaFindUniqueArgs>(args: SelectSubset<T, PessoaFindUniqueArgs<ExtArgs>>): Prisma__PessoaClient<$Result.GetResult<Prisma.$PessoaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Pessoa that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PessoaFindUniqueOrThrowArgs} args - Arguments to find a Pessoa
     * @example
     * // Get one Pessoa
     * const pessoa = await prisma.pessoa.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PessoaFindUniqueOrThrowArgs>(args: SelectSubset<T, PessoaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PessoaClient<$Result.GetResult<Prisma.$PessoaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pessoa that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PessoaFindFirstArgs} args - Arguments to find a Pessoa
     * @example
     * // Get one Pessoa
     * const pessoa = await prisma.pessoa.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PessoaFindFirstArgs>(args?: SelectSubset<T, PessoaFindFirstArgs<ExtArgs>>): Prisma__PessoaClient<$Result.GetResult<Prisma.$PessoaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pessoa that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PessoaFindFirstOrThrowArgs} args - Arguments to find a Pessoa
     * @example
     * // Get one Pessoa
     * const pessoa = await prisma.pessoa.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PessoaFindFirstOrThrowArgs>(args?: SelectSubset<T, PessoaFindFirstOrThrowArgs<ExtArgs>>): Prisma__PessoaClient<$Result.GetResult<Prisma.$PessoaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Pessoas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PessoaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pessoas
     * const pessoas = await prisma.pessoa.findMany()
     * 
     * // Get first 10 Pessoas
     * const pessoas = await prisma.pessoa.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pessoaWithIdOnly = await prisma.pessoa.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PessoaFindManyArgs>(args?: SelectSubset<T, PessoaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PessoaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Pessoa.
     * @param {PessoaCreateArgs} args - Arguments to create a Pessoa.
     * @example
     * // Create one Pessoa
     * const Pessoa = await prisma.pessoa.create({
     *   data: {
     *     // ... data to create a Pessoa
     *   }
     * })
     * 
     */
    create<T extends PessoaCreateArgs>(args: SelectSubset<T, PessoaCreateArgs<ExtArgs>>): Prisma__PessoaClient<$Result.GetResult<Prisma.$PessoaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Pessoas.
     * @param {PessoaCreateManyArgs} args - Arguments to create many Pessoas.
     * @example
     * // Create many Pessoas
     * const pessoa = await prisma.pessoa.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PessoaCreateManyArgs>(args?: SelectSubset<T, PessoaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Pessoas and returns the data saved in the database.
     * @param {PessoaCreateManyAndReturnArgs} args - Arguments to create many Pessoas.
     * @example
     * // Create many Pessoas
     * const pessoa = await prisma.pessoa.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Pessoas and only return the `id`
     * const pessoaWithIdOnly = await prisma.pessoa.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PessoaCreateManyAndReturnArgs>(args?: SelectSubset<T, PessoaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PessoaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Pessoa.
     * @param {PessoaDeleteArgs} args - Arguments to delete one Pessoa.
     * @example
     * // Delete one Pessoa
     * const Pessoa = await prisma.pessoa.delete({
     *   where: {
     *     // ... filter to delete one Pessoa
     *   }
     * })
     * 
     */
    delete<T extends PessoaDeleteArgs>(args: SelectSubset<T, PessoaDeleteArgs<ExtArgs>>): Prisma__PessoaClient<$Result.GetResult<Prisma.$PessoaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Pessoa.
     * @param {PessoaUpdateArgs} args - Arguments to update one Pessoa.
     * @example
     * // Update one Pessoa
     * const pessoa = await prisma.pessoa.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PessoaUpdateArgs>(args: SelectSubset<T, PessoaUpdateArgs<ExtArgs>>): Prisma__PessoaClient<$Result.GetResult<Prisma.$PessoaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Pessoas.
     * @param {PessoaDeleteManyArgs} args - Arguments to filter Pessoas to delete.
     * @example
     * // Delete a few Pessoas
     * const { count } = await prisma.pessoa.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PessoaDeleteManyArgs>(args?: SelectSubset<T, PessoaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pessoas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PessoaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pessoas
     * const pessoa = await prisma.pessoa.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PessoaUpdateManyArgs>(args: SelectSubset<T, PessoaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pessoas and returns the data updated in the database.
     * @param {PessoaUpdateManyAndReturnArgs} args - Arguments to update many Pessoas.
     * @example
     * // Update many Pessoas
     * const pessoa = await prisma.pessoa.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Pessoas and only return the `id`
     * const pessoaWithIdOnly = await prisma.pessoa.updateManyAndReturn({
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
    updateManyAndReturn<T extends PessoaUpdateManyAndReturnArgs>(args: SelectSubset<T, PessoaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PessoaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Pessoa.
     * @param {PessoaUpsertArgs} args - Arguments to update or create a Pessoa.
     * @example
     * // Update or create a Pessoa
     * const pessoa = await prisma.pessoa.upsert({
     *   create: {
     *     // ... data to create a Pessoa
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pessoa we want to update
     *   }
     * })
     */
    upsert<T extends PessoaUpsertArgs>(args: SelectSubset<T, PessoaUpsertArgs<ExtArgs>>): Prisma__PessoaClient<$Result.GetResult<Prisma.$PessoaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Pessoas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PessoaCountArgs} args - Arguments to filter Pessoas to count.
     * @example
     * // Count the number of Pessoas
     * const count = await prisma.pessoa.count({
     *   where: {
     *     // ... the filter for the Pessoas we want to count
     *   }
     * })
    **/
    count<T extends PessoaCountArgs>(
      args?: Subset<T, PessoaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PessoaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pessoa.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PessoaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PessoaAggregateArgs>(args: Subset<T, PessoaAggregateArgs>): Prisma.PrismaPromise<GetPessoaAggregateType<T>>

    /**
     * Group by Pessoa.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PessoaGroupByArgs} args - Group by arguments.
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
      T extends PessoaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PessoaGroupByArgs['orderBy'] }
        : { orderBy?: PessoaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PessoaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPessoaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Pessoa model
   */
  readonly fields: PessoaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Pessoa.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PessoaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    localizacoes<T extends Pessoa$localizacoesArgs<ExtArgs> = {}>(args?: Subset<T, Pessoa$localizacoesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocalizacaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Pessoa model
   */
  interface PessoaFieldRefs {
    readonly id: FieldRef<"Pessoa", 'String'>
    readonly nome: FieldRef<"Pessoa", 'String'>
    readonly idade: FieldRef<"Pessoa", 'Int'>
    readonly email: FieldRef<"Pessoa", 'String'>
    readonly criadoEm: FieldRef<"Pessoa", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Pessoa findUnique
   */
  export type PessoaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pessoa
     */
    select?: PessoaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pessoa
     */
    omit?: PessoaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PessoaInclude<ExtArgs> | null
    /**
     * Filter, which Pessoa to fetch.
     */
    where: PessoaWhereUniqueInput
  }

  /**
   * Pessoa findUniqueOrThrow
   */
  export type PessoaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pessoa
     */
    select?: PessoaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pessoa
     */
    omit?: PessoaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PessoaInclude<ExtArgs> | null
    /**
     * Filter, which Pessoa to fetch.
     */
    where: PessoaWhereUniqueInput
  }

  /**
   * Pessoa findFirst
   */
  export type PessoaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pessoa
     */
    select?: PessoaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pessoa
     */
    omit?: PessoaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PessoaInclude<ExtArgs> | null
    /**
     * Filter, which Pessoa to fetch.
     */
    where?: PessoaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pessoas to fetch.
     */
    orderBy?: PessoaOrderByWithRelationInput | PessoaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pessoas.
     */
    cursor?: PessoaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pessoas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pessoas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pessoas.
     */
    distinct?: PessoaScalarFieldEnum | PessoaScalarFieldEnum[]
  }

  /**
   * Pessoa findFirstOrThrow
   */
  export type PessoaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pessoa
     */
    select?: PessoaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pessoa
     */
    omit?: PessoaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PessoaInclude<ExtArgs> | null
    /**
     * Filter, which Pessoa to fetch.
     */
    where?: PessoaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pessoas to fetch.
     */
    orderBy?: PessoaOrderByWithRelationInput | PessoaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pessoas.
     */
    cursor?: PessoaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pessoas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pessoas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pessoas.
     */
    distinct?: PessoaScalarFieldEnum | PessoaScalarFieldEnum[]
  }

  /**
   * Pessoa findMany
   */
  export type PessoaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pessoa
     */
    select?: PessoaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pessoa
     */
    omit?: PessoaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PessoaInclude<ExtArgs> | null
    /**
     * Filter, which Pessoas to fetch.
     */
    where?: PessoaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pessoas to fetch.
     */
    orderBy?: PessoaOrderByWithRelationInput | PessoaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Pessoas.
     */
    cursor?: PessoaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pessoas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pessoas.
     */
    skip?: number
    distinct?: PessoaScalarFieldEnum | PessoaScalarFieldEnum[]
  }

  /**
   * Pessoa create
   */
  export type PessoaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pessoa
     */
    select?: PessoaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pessoa
     */
    omit?: PessoaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PessoaInclude<ExtArgs> | null
    /**
     * The data needed to create a Pessoa.
     */
    data: XOR<PessoaCreateInput, PessoaUncheckedCreateInput>
  }

  /**
   * Pessoa createMany
   */
  export type PessoaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Pessoas.
     */
    data: PessoaCreateManyInput | PessoaCreateManyInput[]
  }

  /**
   * Pessoa createManyAndReturn
   */
  export type PessoaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pessoa
     */
    select?: PessoaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Pessoa
     */
    omit?: PessoaOmit<ExtArgs> | null
    /**
     * The data used to create many Pessoas.
     */
    data: PessoaCreateManyInput | PessoaCreateManyInput[]
  }

  /**
   * Pessoa update
   */
  export type PessoaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pessoa
     */
    select?: PessoaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pessoa
     */
    omit?: PessoaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PessoaInclude<ExtArgs> | null
    /**
     * The data needed to update a Pessoa.
     */
    data: XOR<PessoaUpdateInput, PessoaUncheckedUpdateInput>
    /**
     * Choose, which Pessoa to update.
     */
    where: PessoaWhereUniqueInput
  }

  /**
   * Pessoa updateMany
   */
  export type PessoaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Pessoas.
     */
    data: XOR<PessoaUpdateManyMutationInput, PessoaUncheckedUpdateManyInput>
    /**
     * Filter which Pessoas to update
     */
    where?: PessoaWhereInput
    /**
     * Limit how many Pessoas to update.
     */
    limit?: number
  }

  /**
   * Pessoa updateManyAndReturn
   */
  export type PessoaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pessoa
     */
    select?: PessoaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Pessoa
     */
    omit?: PessoaOmit<ExtArgs> | null
    /**
     * The data used to update Pessoas.
     */
    data: XOR<PessoaUpdateManyMutationInput, PessoaUncheckedUpdateManyInput>
    /**
     * Filter which Pessoas to update
     */
    where?: PessoaWhereInput
    /**
     * Limit how many Pessoas to update.
     */
    limit?: number
  }

  /**
   * Pessoa upsert
   */
  export type PessoaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pessoa
     */
    select?: PessoaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pessoa
     */
    omit?: PessoaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PessoaInclude<ExtArgs> | null
    /**
     * The filter to search for the Pessoa to update in case it exists.
     */
    where: PessoaWhereUniqueInput
    /**
     * In case the Pessoa found by the `where` argument doesn't exist, create a new Pessoa with this data.
     */
    create: XOR<PessoaCreateInput, PessoaUncheckedCreateInput>
    /**
     * In case the Pessoa was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PessoaUpdateInput, PessoaUncheckedUpdateInput>
  }

  /**
   * Pessoa delete
   */
  export type PessoaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pessoa
     */
    select?: PessoaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pessoa
     */
    omit?: PessoaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PessoaInclude<ExtArgs> | null
    /**
     * Filter which Pessoa to delete.
     */
    where: PessoaWhereUniqueInput
  }

  /**
   * Pessoa deleteMany
   */
  export type PessoaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pessoas to delete
     */
    where?: PessoaWhereInput
    /**
     * Limit how many Pessoas to delete.
     */
    limit?: number
  }

  /**
   * Pessoa.localizacoes
   */
  export type Pessoa$localizacoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Localizacao
     */
    select?: LocalizacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Localizacao
     */
    omit?: LocalizacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocalizacaoInclude<ExtArgs> | null
    where?: LocalizacaoWhereInput
    orderBy?: LocalizacaoOrderByWithRelationInput | LocalizacaoOrderByWithRelationInput[]
    cursor?: LocalizacaoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LocalizacaoScalarFieldEnum | LocalizacaoScalarFieldEnum[]
  }

  /**
   * Pessoa without action
   */
  export type PessoaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pessoa
     */
    select?: PessoaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pessoa
     */
    omit?: PessoaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PessoaInclude<ExtArgs> | null
  }


  /**
   * Model Contato
   */

  export type AggregateContato = {
    _count: ContatoCountAggregateOutputType | null
    _min: ContatoMinAggregateOutputType | null
    _max: ContatoMaxAggregateOutputType | null
  }

  export type ContatoMinAggregateOutputType = {
    id: string | null
    nome: string | null
    email: string | null
    telefone: string | null
    mensagem: string | null
    criadoEm: Date | null
  }

  export type ContatoMaxAggregateOutputType = {
    id: string | null
    nome: string | null
    email: string | null
    telefone: string | null
    mensagem: string | null
    criadoEm: Date | null
  }

  export type ContatoCountAggregateOutputType = {
    id: number
    nome: number
    email: number
    telefone: number
    mensagem: number
    criadoEm: number
    _all: number
  }


  export type ContatoMinAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    telefone?: true
    mensagem?: true
    criadoEm?: true
  }

  export type ContatoMaxAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    telefone?: true
    mensagem?: true
    criadoEm?: true
  }

  export type ContatoCountAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    telefone?: true
    mensagem?: true
    criadoEm?: true
    _all?: true
  }

  export type ContatoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Contato to aggregate.
     */
    where?: ContatoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contatoes to fetch.
     */
    orderBy?: ContatoOrderByWithRelationInput | ContatoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ContatoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contatoes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contatoes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Contatoes
    **/
    _count?: true | ContatoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContatoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContatoMaxAggregateInputType
  }

  export type GetContatoAggregateType<T extends ContatoAggregateArgs> = {
        [P in keyof T & keyof AggregateContato]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContato[P]>
      : GetScalarType<T[P], AggregateContato[P]>
  }




  export type ContatoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContatoWhereInput
    orderBy?: ContatoOrderByWithAggregationInput | ContatoOrderByWithAggregationInput[]
    by: ContatoScalarFieldEnum[] | ContatoScalarFieldEnum
    having?: ContatoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContatoCountAggregateInputType | true
    _min?: ContatoMinAggregateInputType
    _max?: ContatoMaxAggregateInputType
  }

  export type ContatoGroupByOutputType = {
    id: string
    nome: string
    email: string
    telefone: string | null
    mensagem: string
    criadoEm: Date
    _count: ContatoCountAggregateOutputType | null
    _min: ContatoMinAggregateOutputType | null
    _max: ContatoMaxAggregateOutputType | null
  }

  type GetContatoGroupByPayload<T extends ContatoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContatoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContatoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContatoGroupByOutputType[P]>
            : GetScalarType<T[P], ContatoGroupByOutputType[P]>
        }
      >
    >


  export type ContatoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    email?: boolean
    telefone?: boolean
    mensagem?: boolean
    criadoEm?: boolean
  }, ExtArgs["result"]["contato"]>

  export type ContatoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    email?: boolean
    telefone?: boolean
    mensagem?: boolean
    criadoEm?: boolean
  }, ExtArgs["result"]["contato"]>

  export type ContatoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    email?: boolean
    telefone?: boolean
    mensagem?: boolean
    criadoEm?: boolean
  }, ExtArgs["result"]["contato"]>

  export type ContatoSelectScalar = {
    id?: boolean
    nome?: boolean
    email?: boolean
    telefone?: boolean
    mensagem?: boolean
    criadoEm?: boolean
  }

  export type ContatoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "email" | "telefone" | "mensagem" | "criadoEm", ExtArgs["result"]["contato"]>

  export type $ContatoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Contato"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nome: string
      email: string
      telefone: string | null
      mensagem: string
      criadoEm: Date
    }, ExtArgs["result"]["contato"]>
    composites: {}
  }

  type ContatoGetPayload<S extends boolean | null | undefined | ContatoDefaultArgs> = $Result.GetResult<Prisma.$ContatoPayload, S>

  type ContatoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ContatoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ContatoCountAggregateInputType | true
    }

  export interface ContatoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Contato'], meta: { name: 'Contato' } }
    /**
     * Find zero or one Contato that matches the filter.
     * @param {ContatoFindUniqueArgs} args - Arguments to find a Contato
     * @example
     * // Get one Contato
     * const contato = await prisma.contato.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ContatoFindUniqueArgs>(args: SelectSubset<T, ContatoFindUniqueArgs<ExtArgs>>): Prisma__ContatoClient<$Result.GetResult<Prisma.$ContatoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Contato that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ContatoFindUniqueOrThrowArgs} args - Arguments to find a Contato
     * @example
     * // Get one Contato
     * const contato = await prisma.contato.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ContatoFindUniqueOrThrowArgs>(args: SelectSubset<T, ContatoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ContatoClient<$Result.GetResult<Prisma.$ContatoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Contato that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContatoFindFirstArgs} args - Arguments to find a Contato
     * @example
     * // Get one Contato
     * const contato = await prisma.contato.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ContatoFindFirstArgs>(args?: SelectSubset<T, ContatoFindFirstArgs<ExtArgs>>): Prisma__ContatoClient<$Result.GetResult<Prisma.$ContatoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Contato that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContatoFindFirstOrThrowArgs} args - Arguments to find a Contato
     * @example
     * // Get one Contato
     * const contato = await prisma.contato.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ContatoFindFirstOrThrowArgs>(args?: SelectSubset<T, ContatoFindFirstOrThrowArgs<ExtArgs>>): Prisma__ContatoClient<$Result.GetResult<Prisma.$ContatoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Contatoes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContatoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Contatoes
     * const contatoes = await prisma.contato.findMany()
     * 
     * // Get first 10 Contatoes
     * const contatoes = await prisma.contato.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const contatoWithIdOnly = await prisma.contato.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ContatoFindManyArgs>(args?: SelectSubset<T, ContatoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContatoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Contato.
     * @param {ContatoCreateArgs} args - Arguments to create a Contato.
     * @example
     * // Create one Contato
     * const Contato = await prisma.contato.create({
     *   data: {
     *     // ... data to create a Contato
     *   }
     * })
     * 
     */
    create<T extends ContatoCreateArgs>(args: SelectSubset<T, ContatoCreateArgs<ExtArgs>>): Prisma__ContatoClient<$Result.GetResult<Prisma.$ContatoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Contatoes.
     * @param {ContatoCreateManyArgs} args - Arguments to create many Contatoes.
     * @example
     * // Create many Contatoes
     * const contato = await prisma.contato.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ContatoCreateManyArgs>(args?: SelectSubset<T, ContatoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Contatoes and returns the data saved in the database.
     * @param {ContatoCreateManyAndReturnArgs} args - Arguments to create many Contatoes.
     * @example
     * // Create many Contatoes
     * const contato = await prisma.contato.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Contatoes and only return the `id`
     * const contatoWithIdOnly = await prisma.contato.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ContatoCreateManyAndReturnArgs>(args?: SelectSubset<T, ContatoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContatoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Contato.
     * @param {ContatoDeleteArgs} args - Arguments to delete one Contato.
     * @example
     * // Delete one Contato
     * const Contato = await prisma.contato.delete({
     *   where: {
     *     // ... filter to delete one Contato
     *   }
     * })
     * 
     */
    delete<T extends ContatoDeleteArgs>(args: SelectSubset<T, ContatoDeleteArgs<ExtArgs>>): Prisma__ContatoClient<$Result.GetResult<Prisma.$ContatoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Contato.
     * @param {ContatoUpdateArgs} args - Arguments to update one Contato.
     * @example
     * // Update one Contato
     * const contato = await prisma.contato.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ContatoUpdateArgs>(args: SelectSubset<T, ContatoUpdateArgs<ExtArgs>>): Prisma__ContatoClient<$Result.GetResult<Prisma.$ContatoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Contatoes.
     * @param {ContatoDeleteManyArgs} args - Arguments to filter Contatoes to delete.
     * @example
     * // Delete a few Contatoes
     * const { count } = await prisma.contato.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ContatoDeleteManyArgs>(args?: SelectSubset<T, ContatoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Contatoes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContatoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Contatoes
     * const contato = await prisma.contato.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ContatoUpdateManyArgs>(args: SelectSubset<T, ContatoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Contatoes and returns the data updated in the database.
     * @param {ContatoUpdateManyAndReturnArgs} args - Arguments to update many Contatoes.
     * @example
     * // Update many Contatoes
     * const contato = await prisma.contato.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Contatoes and only return the `id`
     * const contatoWithIdOnly = await prisma.contato.updateManyAndReturn({
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
    updateManyAndReturn<T extends ContatoUpdateManyAndReturnArgs>(args: SelectSubset<T, ContatoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContatoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Contato.
     * @param {ContatoUpsertArgs} args - Arguments to update or create a Contato.
     * @example
     * // Update or create a Contato
     * const contato = await prisma.contato.upsert({
     *   create: {
     *     // ... data to create a Contato
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Contato we want to update
     *   }
     * })
     */
    upsert<T extends ContatoUpsertArgs>(args: SelectSubset<T, ContatoUpsertArgs<ExtArgs>>): Prisma__ContatoClient<$Result.GetResult<Prisma.$ContatoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Contatoes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContatoCountArgs} args - Arguments to filter Contatoes to count.
     * @example
     * // Count the number of Contatoes
     * const count = await prisma.contato.count({
     *   where: {
     *     // ... the filter for the Contatoes we want to count
     *   }
     * })
    **/
    count<T extends ContatoCountArgs>(
      args?: Subset<T, ContatoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContatoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Contato.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContatoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ContatoAggregateArgs>(args: Subset<T, ContatoAggregateArgs>): Prisma.PrismaPromise<GetContatoAggregateType<T>>

    /**
     * Group by Contato.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContatoGroupByArgs} args - Group by arguments.
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
      T extends ContatoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ContatoGroupByArgs['orderBy'] }
        : { orderBy?: ContatoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ContatoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContatoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Contato model
   */
  readonly fields: ContatoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Contato.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ContatoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Contato model
   */
  interface ContatoFieldRefs {
    readonly id: FieldRef<"Contato", 'String'>
    readonly nome: FieldRef<"Contato", 'String'>
    readonly email: FieldRef<"Contato", 'String'>
    readonly telefone: FieldRef<"Contato", 'String'>
    readonly mensagem: FieldRef<"Contato", 'String'>
    readonly criadoEm: FieldRef<"Contato", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Contato findUnique
   */
  export type ContatoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contato
     */
    select?: ContatoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contato
     */
    omit?: ContatoOmit<ExtArgs> | null
    /**
     * Filter, which Contato to fetch.
     */
    where: ContatoWhereUniqueInput
  }

  /**
   * Contato findUniqueOrThrow
   */
  export type ContatoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contato
     */
    select?: ContatoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contato
     */
    omit?: ContatoOmit<ExtArgs> | null
    /**
     * Filter, which Contato to fetch.
     */
    where: ContatoWhereUniqueInput
  }

  /**
   * Contato findFirst
   */
  export type ContatoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contato
     */
    select?: ContatoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contato
     */
    omit?: ContatoOmit<ExtArgs> | null
    /**
     * Filter, which Contato to fetch.
     */
    where?: ContatoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contatoes to fetch.
     */
    orderBy?: ContatoOrderByWithRelationInput | ContatoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Contatoes.
     */
    cursor?: ContatoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contatoes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contatoes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Contatoes.
     */
    distinct?: ContatoScalarFieldEnum | ContatoScalarFieldEnum[]
  }

  /**
   * Contato findFirstOrThrow
   */
  export type ContatoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contato
     */
    select?: ContatoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contato
     */
    omit?: ContatoOmit<ExtArgs> | null
    /**
     * Filter, which Contato to fetch.
     */
    where?: ContatoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contatoes to fetch.
     */
    orderBy?: ContatoOrderByWithRelationInput | ContatoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Contatoes.
     */
    cursor?: ContatoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contatoes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contatoes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Contatoes.
     */
    distinct?: ContatoScalarFieldEnum | ContatoScalarFieldEnum[]
  }

  /**
   * Contato findMany
   */
  export type ContatoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contato
     */
    select?: ContatoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contato
     */
    omit?: ContatoOmit<ExtArgs> | null
    /**
     * Filter, which Contatoes to fetch.
     */
    where?: ContatoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contatoes to fetch.
     */
    orderBy?: ContatoOrderByWithRelationInput | ContatoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Contatoes.
     */
    cursor?: ContatoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contatoes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contatoes.
     */
    skip?: number
    distinct?: ContatoScalarFieldEnum | ContatoScalarFieldEnum[]
  }

  /**
   * Contato create
   */
  export type ContatoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contato
     */
    select?: ContatoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contato
     */
    omit?: ContatoOmit<ExtArgs> | null
    /**
     * The data needed to create a Contato.
     */
    data: XOR<ContatoCreateInput, ContatoUncheckedCreateInput>
  }

  /**
   * Contato createMany
   */
  export type ContatoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Contatoes.
     */
    data: ContatoCreateManyInput | ContatoCreateManyInput[]
  }

  /**
   * Contato createManyAndReturn
   */
  export type ContatoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contato
     */
    select?: ContatoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Contato
     */
    omit?: ContatoOmit<ExtArgs> | null
    /**
     * The data used to create many Contatoes.
     */
    data: ContatoCreateManyInput | ContatoCreateManyInput[]
  }

  /**
   * Contato update
   */
  export type ContatoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contato
     */
    select?: ContatoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contato
     */
    omit?: ContatoOmit<ExtArgs> | null
    /**
     * The data needed to update a Contato.
     */
    data: XOR<ContatoUpdateInput, ContatoUncheckedUpdateInput>
    /**
     * Choose, which Contato to update.
     */
    where: ContatoWhereUniqueInput
  }

  /**
   * Contato updateMany
   */
  export type ContatoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Contatoes.
     */
    data: XOR<ContatoUpdateManyMutationInput, ContatoUncheckedUpdateManyInput>
    /**
     * Filter which Contatoes to update
     */
    where?: ContatoWhereInput
    /**
     * Limit how many Contatoes to update.
     */
    limit?: number
  }

  /**
   * Contato updateManyAndReturn
   */
  export type ContatoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contato
     */
    select?: ContatoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Contato
     */
    omit?: ContatoOmit<ExtArgs> | null
    /**
     * The data used to update Contatoes.
     */
    data: XOR<ContatoUpdateManyMutationInput, ContatoUncheckedUpdateManyInput>
    /**
     * Filter which Contatoes to update
     */
    where?: ContatoWhereInput
    /**
     * Limit how many Contatoes to update.
     */
    limit?: number
  }

  /**
   * Contato upsert
   */
  export type ContatoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contato
     */
    select?: ContatoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contato
     */
    omit?: ContatoOmit<ExtArgs> | null
    /**
     * The filter to search for the Contato to update in case it exists.
     */
    where: ContatoWhereUniqueInput
    /**
     * In case the Contato found by the `where` argument doesn't exist, create a new Contato with this data.
     */
    create: XOR<ContatoCreateInput, ContatoUncheckedCreateInput>
    /**
     * In case the Contato was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ContatoUpdateInput, ContatoUncheckedUpdateInput>
  }

  /**
   * Contato delete
   */
  export type ContatoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contato
     */
    select?: ContatoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contato
     */
    omit?: ContatoOmit<ExtArgs> | null
    /**
     * Filter which Contato to delete.
     */
    where: ContatoWhereUniqueInput
  }

  /**
   * Contato deleteMany
   */
  export type ContatoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Contatoes to delete
     */
    where?: ContatoWhereInput
    /**
     * Limit how many Contatoes to delete.
     */
    limit?: number
  }

  /**
   * Contato without action
   */
  export type ContatoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contato
     */
    select?: ContatoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contato
     */
    omit?: ContatoOmit<ExtArgs> | null
  }


  /**
   * Model USER
   */

  export type AggregateUSER = {
    _count: USERCountAggregateOutputType | null
    _avg: USERAvgAggregateOutputType | null
    _sum: USERSumAggregateOutputType | null
    _min: USERMinAggregateOutputType | null
    _max: USERMaxAggregateOutputType | null
  }

  export type USERAvgAggregateOutputType = {
    id: number | null
  }

  export type USERSumAggregateOutputType = {
    id: number | null
  }

  export type USERMinAggregateOutputType = {
    id: number | null
    nome: string | null
    email: string | null
    senha_hash: string | null
    tipo_usuario: string | null
    dataCadastro: Date | null
    dataAtualizacao: Date | null
  }

  export type USERMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    email: string | null
    senha_hash: string | null
    tipo_usuario: string | null
    dataCadastro: Date | null
    dataAtualizacao: Date | null
  }

  export type USERCountAggregateOutputType = {
    id: number
    nome: number
    email: number
    senha_hash: number
    tipo_usuario: number
    dataCadastro: number
    dataAtualizacao: number
    _all: number
  }


  export type USERAvgAggregateInputType = {
    id?: true
  }

  export type USERSumAggregateInputType = {
    id?: true
  }

  export type USERMinAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    senha_hash?: true
    tipo_usuario?: true
    dataCadastro?: true
    dataAtualizacao?: true
  }

  export type USERMaxAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    senha_hash?: true
    tipo_usuario?: true
    dataCadastro?: true
    dataAtualizacao?: true
  }

  export type USERCountAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    senha_hash?: true
    tipo_usuario?: true
    dataCadastro?: true
    dataAtualizacao?: true
    _all?: true
  }

  export type USERAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which USER to aggregate.
     */
    where?: USERWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of USERS to fetch.
     */
    orderBy?: USEROrderByWithRelationInput | USEROrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: USERWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` USERS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` USERS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned USERS
    **/
    _count?: true | USERCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: USERAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: USERSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: USERMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: USERMaxAggregateInputType
  }

  export type GetUSERAggregateType<T extends USERAggregateArgs> = {
        [P in keyof T & keyof AggregateUSER]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUSER[P]>
      : GetScalarType<T[P], AggregateUSER[P]>
  }




  export type USERGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: USERWhereInput
    orderBy?: USEROrderByWithAggregationInput | USEROrderByWithAggregationInput[]
    by: USERScalarFieldEnum[] | USERScalarFieldEnum
    having?: USERScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: USERCountAggregateInputType | true
    _avg?: USERAvgAggregateInputType
    _sum?: USERSumAggregateInputType
    _min?: USERMinAggregateInputType
    _max?: USERMaxAggregateInputType
  }

  export type USERGroupByOutputType = {
    id: number
    nome: string
    email: string
    senha_hash: string
    tipo_usuario: string
    dataCadastro: Date
    dataAtualizacao: Date
    _count: USERCountAggregateOutputType | null
    _avg: USERAvgAggregateOutputType | null
    _sum: USERSumAggregateOutputType | null
    _min: USERMinAggregateOutputType | null
    _max: USERMaxAggregateOutputType | null
  }

  type GetUSERGroupByPayload<T extends USERGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<USERGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof USERGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], USERGroupByOutputType[P]>
            : GetScalarType<T[P], USERGroupByOutputType[P]>
        }
      >
    >


  export type USERSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    email?: boolean
    senha_hash?: boolean
    tipo_usuario?: boolean
    dataCadastro?: boolean
    dataAtualizacao?: boolean
  }, ExtArgs["result"]["uSER"]>

  export type USERSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    email?: boolean
    senha_hash?: boolean
    tipo_usuario?: boolean
    dataCadastro?: boolean
    dataAtualizacao?: boolean
  }, ExtArgs["result"]["uSER"]>

  export type USERSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    email?: boolean
    senha_hash?: boolean
    tipo_usuario?: boolean
    dataCadastro?: boolean
    dataAtualizacao?: boolean
  }, ExtArgs["result"]["uSER"]>

  export type USERSelectScalar = {
    id?: boolean
    nome?: boolean
    email?: boolean
    senha_hash?: boolean
    tipo_usuario?: boolean
    dataCadastro?: boolean
    dataAtualizacao?: boolean
  }

  export type USEROmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "email" | "senha_hash" | "tipo_usuario" | "dataCadastro" | "dataAtualizacao", ExtArgs["result"]["uSER"]>

  export type $USERPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "USER"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      email: string
      senha_hash: string
      tipo_usuario: string
      dataCadastro: Date
      dataAtualizacao: Date
    }, ExtArgs["result"]["uSER"]>
    composites: {}
  }

  type USERGetPayload<S extends boolean | null | undefined | USERDefaultArgs> = $Result.GetResult<Prisma.$USERPayload, S>

  type USERCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<USERFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: USERCountAggregateInputType | true
    }

  export interface USERDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['USER'], meta: { name: 'USER' } }
    /**
     * Find zero or one USER that matches the filter.
     * @param {USERFindUniqueArgs} args - Arguments to find a USER
     * @example
     * // Get one USER
     * const uSER = await prisma.uSER.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends USERFindUniqueArgs>(args: SelectSubset<T, USERFindUniqueArgs<ExtArgs>>): Prisma__USERClient<$Result.GetResult<Prisma.$USERPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one USER that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {USERFindUniqueOrThrowArgs} args - Arguments to find a USER
     * @example
     * // Get one USER
     * const uSER = await prisma.uSER.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends USERFindUniqueOrThrowArgs>(args: SelectSubset<T, USERFindUniqueOrThrowArgs<ExtArgs>>): Prisma__USERClient<$Result.GetResult<Prisma.$USERPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first USER that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {USERFindFirstArgs} args - Arguments to find a USER
     * @example
     * // Get one USER
     * const uSER = await prisma.uSER.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends USERFindFirstArgs>(args?: SelectSubset<T, USERFindFirstArgs<ExtArgs>>): Prisma__USERClient<$Result.GetResult<Prisma.$USERPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first USER that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {USERFindFirstOrThrowArgs} args - Arguments to find a USER
     * @example
     * // Get one USER
     * const uSER = await prisma.uSER.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends USERFindFirstOrThrowArgs>(args?: SelectSubset<T, USERFindFirstOrThrowArgs<ExtArgs>>): Prisma__USERClient<$Result.GetResult<Prisma.$USERPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more USERS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {USERFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all USERS
     * const uSERS = await prisma.uSER.findMany()
     * 
     * // Get first 10 USERS
     * const uSERS = await prisma.uSER.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const uSERWithIdOnly = await prisma.uSER.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends USERFindManyArgs>(args?: SelectSubset<T, USERFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$USERPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a USER.
     * @param {USERCreateArgs} args - Arguments to create a USER.
     * @example
     * // Create one USER
     * const USER = await prisma.uSER.create({
     *   data: {
     *     // ... data to create a USER
     *   }
     * })
     * 
     */
    create<T extends USERCreateArgs>(args: SelectSubset<T, USERCreateArgs<ExtArgs>>): Prisma__USERClient<$Result.GetResult<Prisma.$USERPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many USERS.
     * @param {USERCreateManyArgs} args - Arguments to create many USERS.
     * @example
     * // Create many USERS
     * const uSER = await prisma.uSER.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends USERCreateManyArgs>(args?: SelectSubset<T, USERCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many USERS and returns the data saved in the database.
     * @param {USERCreateManyAndReturnArgs} args - Arguments to create many USERS.
     * @example
     * // Create many USERS
     * const uSER = await prisma.uSER.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many USERS and only return the `id`
     * const uSERWithIdOnly = await prisma.uSER.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends USERCreateManyAndReturnArgs>(args?: SelectSubset<T, USERCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$USERPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a USER.
     * @param {USERDeleteArgs} args - Arguments to delete one USER.
     * @example
     * // Delete one USER
     * const USER = await prisma.uSER.delete({
     *   where: {
     *     // ... filter to delete one USER
     *   }
     * })
     * 
     */
    delete<T extends USERDeleteArgs>(args: SelectSubset<T, USERDeleteArgs<ExtArgs>>): Prisma__USERClient<$Result.GetResult<Prisma.$USERPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one USER.
     * @param {USERUpdateArgs} args - Arguments to update one USER.
     * @example
     * // Update one USER
     * const uSER = await prisma.uSER.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends USERUpdateArgs>(args: SelectSubset<T, USERUpdateArgs<ExtArgs>>): Prisma__USERClient<$Result.GetResult<Prisma.$USERPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more USERS.
     * @param {USERDeleteManyArgs} args - Arguments to filter USERS to delete.
     * @example
     * // Delete a few USERS
     * const { count } = await prisma.uSER.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends USERDeleteManyArgs>(args?: SelectSubset<T, USERDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more USERS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {USERUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many USERS
     * const uSER = await prisma.uSER.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends USERUpdateManyArgs>(args: SelectSubset<T, USERUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more USERS and returns the data updated in the database.
     * @param {USERUpdateManyAndReturnArgs} args - Arguments to update many USERS.
     * @example
     * // Update many USERS
     * const uSER = await prisma.uSER.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more USERS and only return the `id`
     * const uSERWithIdOnly = await prisma.uSER.updateManyAndReturn({
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
    updateManyAndReturn<T extends USERUpdateManyAndReturnArgs>(args: SelectSubset<T, USERUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$USERPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one USER.
     * @param {USERUpsertArgs} args - Arguments to update or create a USER.
     * @example
     * // Update or create a USER
     * const uSER = await prisma.uSER.upsert({
     *   create: {
     *     // ... data to create a USER
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the USER we want to update
     *   }
     * })
     */
    upsert<T extends USERUpsertArgs>(args: SelectSubset<T, USERUpsertArgs<ExtArgs>>): Prisma__USERClient<$Result.GetResult<Prisma.$USERPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of USERS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {USERCountArgs} args - Arguments to filter USERS to count.
     * @example
     * // Count the number of USERS
     * const count = await prisma.uSER.count({
     *   where: {
     *     // ... the filter for the USERS we want to count
     *   }
     * })
    **/
    count<T extends USERCountArgs>(
      args?: Subset<T, USERCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], USERCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a USER.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {USERAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends USERAggregateArgs>(args: Subset<T, USERAggregateArgs>): Prisma.PrismaPromise<GetUSERAggregateType<T>>

    /**
     * Group by USER.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {USERGroupByArgs} args - Group by arguments.
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
      T extends USERGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: USERGroupByArgs['orderBy'] }
        : { orderBy?: USERGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, USERGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUSERGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the USER model
   */
  readonly fields: USERFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for USER.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__USERClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the USER model
   */
  interface USERFieldRefs {
    readonly id: FieldRef<"USER", 'Int'>
    readonly nome: FieldRef<"USER", 'String'>
    readonly email: FieldRef<"USER", 'String'>
    readonly senha_hash: FieldRef<"USER", 'String'>
    readonly tipo_usuario: FieldRef<"USER", 'String'>
    readonly dataCadastro: FieldRef<"USER", 'DateTime'>
    readonly dataAtualizacao: FieldRef<"USER", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * USER findUnique
   */
  export type USERFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the USER
     */
    select?: USERSelect<ExtArgs> | null
    /**
     * Omit specific fields from the USER
     */
    omit?: USEROmit<ExtArgs> | null
    /**
     * Filter, which USER to fetch.
     */
    where: USERWhereUniqueInput
  }

  /**
   * USER findUniqueOrThrow
   */
  export type USERFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the USER
     */
    select?: USERSelect<ExtArgs> | null
    /**
     * Omit specific fields from the USER
     */
    omit?: USEROmit<ExtArgs> | null
    /**
     * Filter, which USER to fetch.
     */
    where: USERWhereUniqueInput
  }

  /**
   * USER findFirst
   */
  export type USERFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the USER
     */
    select?: USERSelect<ExtArgs> | null
    /**
     * Omit specific fields from the USER
     */
    omit?: USEROmit<ExtArgs> | null
    /**
     * Filter, which USER to fetch.
     */
    where?: USERWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of USERS to fetch.
     */
    orderBy?: USEROrderByWithRelationInput | USEROrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for USERS.
     */
    cursor?: USERWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` USERS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` USERS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of USERS.
     */
    distinct?: USERScalarFieldEnum | USERScalarFieldEnum[]
  }

  /**
   * USER findFirstOrThrow
   */
  export type USERFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the USER
     */
    select?: USERSelect<ExtArgs> | null
    /**
     * Omit specific fields from the USER
     */
    omit?: USEROmit<ExtArgs> | null
    /**
     * Filter, which USER to fetch.
     */
    where?: USERWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of USERS to fetch.
     */
    orderBy?: USEROrderByWithRelationInput | USEROrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for USERS.
     */
    cursor?: USERWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` USERS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` USERS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of USERS.
     */
    distinct?: USERScalarFieldEnum | USERScalarFieldEnum[]
  }

  /**
   * USER findMany
   */
  export type USERFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the USER
     */
    select?: USERSelect<ExtArgs> | null
    /**
     * Omit specific fields from the USER
     */
    omit?: USEROmit<ExtArgs> | null
    /**
     * Filter, which USERS to fetch.
     */
    where?: USERWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of USERS to fetch.
     */
    orderBy?: USEROrderByWithRelationInput | USEROrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing USERS.
     */
    cursor?: USERWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` USERS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` USERS.
     */
    skip?: number
    distinct?: USERScalarFieldEnum | USERScalarFieldEnum[]
  }

  /**
   * USER create
   */
  export type USERCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the USER
     */
    select?: USERSelect<ExtArgs> | null
    /**
     * Omit specific fields from the USER
     */
    omit?: USEROmit<ExtArgs> | null
    /**
     * The data needed to create a USER.
     */
    data: XOR<USERCreateInput, USERUncheckedCreateInput>
  }

  /**
   * USER createMany
   */
  export type USERCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many USERS.
     */
    data: USERCreateManyInput | USERCreateManyInput[]
  }

  /**
   * USER createManyAndReturn
   */
  export type USERCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the USER
     */
    select?: USERSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the USER
     */
    omit?: USEROmit<ExtArgs> | null
    /**
     * The data used to create many USERS.
     */
    data: USERCreateManyInput | USERCreateManyInput[]
  }

  /**
   * USER update
   */
  export type USERUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the USER
     */
    select?: USERSelect<ExtArgs> | null
    /**
     * Omit specific fields from the USER
     */
    omit?: USEROmit<ExtArgs> | null
    /**
     * The data needed to update a USER.
     */
    data: XOR<USERUpdateInput, USERUncheckedUpdateInput>
    /**
     * Choose, which USER to update.
     */
    where: USERWhereUniqueInput
  }

  /**
   * USER updateMany
   */
  export type USERUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update USERS.
     */
    data: XOR<USERUpdateManyMutationInput, USERUncheckedUpdateManyInput>
    /**
     * Filter which USERS to update
     */
    where?: USERWhereInput
    /**
     * Limit how many USERS to update.
     */
    limit?: number
  }

  /**
   * USER updateManyAndReturn
   */
  export type USERUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the USER
     */
    select?: USERSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the USER
     */
    omit?: USEROmit<ExtArgs> | null
    /**
     * The data used to update USERS.
     */
    data: XOR<USERUpdateManyMutationInput, USERUncheckedUpdateManyInput>
    /**
     * Filter which USERS to update
     */
    where?: USERWhereInput
    /**
     * Limit how many USERS to update.
     */
    limit?: number
  }

  /**
   * USER upsert
   */
  export type USERUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the USER
     */
    select?: USERSelect<ExtArgs> | null
    /**
     * Omit specific fields from the USER
     */
    omit?: USEROmit<ExtArgs> | null
    /**
     * The filter to search for the USER to update in case it exists.
     */
    where: USERWhereUniqueInput
    /**
     * In case the USER found by the `where` argument doesn't exist, create a new USER with this data.
     */
    create: XOR<USERCreateInput, USERUncheckedCreateInput>
    /**
     * In case the USER was found with the provided `where` argument, update it with this data.
     */
    update: XOR<USERUpdateInput, USERUncheckedUpdateInput>
  }

  /**
   * USER delete
   */
  export type USERDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the USER
     */
    select?: USERSelect<ExtArgs> | null
    /**
     * Omit specific fields from the USER
     */
    omit?: USEROmit<ExtArgs> | null
    /**
     * Filter which USER to delete.
     */
    where: USERWhereUniqueInput
  }

  /**
   * USER deleteMany
   */
  export type USERDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which USERS to delete
     */
    where?: USERWhereInput
    /**
     * Limit how many USERS to delete.
     */
    limit?: number
  }

  /**
   * USER without action
   */
  export type USERDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the USER
     */
    select?: USERSelect<ExtArgs> | null
    /**
     * Omit specific fields from the USER
     */
    omit?: USEROmit<ExtArgs> | null
  }


  /**
   * Model Localizacao
   */

  export type AggregateLocalizacao = {
    _count: LocalizacaoCountAggregateOutputType | null
    _avg: LocalizacaoAvgAggregateOutputType | null
    _sum: LocalizacaoSumAggregateOutputType | null
    _min: LocalizacaoMinAggregateOutputType | null
    _max: LocalizacaoMaxAggregateOutputType | null
  }

  export type LocalizacaoAvgAggregateOutputType = {
    latitude: number | null
    longitude: number | null
  }

  export type LocalizacaoSumAggregateOutputType = {
    latitude: number | null
    longitude: number | null
  }

  export type LocalizacaoMinAggregateOutputType = {
    id: string | null
    latitude: number | null
    longitude: number | null
    timestamp: Date | null
    pessoaId: string | null
  }

  export type LocalizacaoMaxAggregateOutputType = {
    id: string | null
    latitude: number | null
    longitude: number | null
    timestamp: Date | null
    pessoaId: string | null
  }

  export type LocalizacaoCountAggregateOutputType = {
    id: number
    latitude: number
    longitude: number
    timestamp: number
    pessoaId: number
    _all: number
  }


  export type LocalizacaoAvgAggregateInputType = {
    latitude?: true
    longitude?: true
  }

  export type LocalizacaoSumAggregateInputType = {
    latitude?: true
    longitude?: true
  }

  export type LocalizacaoMinAggregateInputType = {
    id?: true
    latitude?: true
    longitude?: true
    timestamp?: true
    pessoaId?: true
  }

  export type LocalizacaoMaxAggregateInputType = {
    id?: true
    latitude?: true
    longitude?: true
    timestamp?: true
    pessoaId?: true
  }

  export type LocalizacaoCountAggregateInputType = {
    id?: true
    latitude?: true
    longitude?: true
    timestamp?: true
    pessoaId?: true
    _all?: true
  }

  export type LocalizacaoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Localizacao to aggregate.
     */
    where?: LocalizacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Localizacaos to fetch.
     */
    orderBy?: LocalizacaoOrderByWithRelationInput | LocalizacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LocalizacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Localizacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Localizacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Localizacaos
    **/
    _count?: true | LocalizacaoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LocalizacaoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LocalizacaoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LocalizacaoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LocalizacaoMaxAggregateInputType
  }

  export type GetLocalizacaoAggregateType<T extends LocalizacaoAggregateArgs> = {
        [P in keyof T & keyof AggregateLocalizacao]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLocalizacao[P]>
      : GetScalarType<T[P], AggregateLocalizacao[P]>
  }




  export type LocalizacaoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LocalizacaoWhereInput
    orderBy?: LocalizacaoOrderByWithAggregationInput | LocalizacaoOrderByWithAggregationInput[]
    by: LocalizacaoScalarFieldEnum[] | LocalizacaoScalarFieldEnum
    having?: LocalizacaoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LocalizacaoCountAggregateInputType | true
    _avg?: LocalizacaoAvgAggregateInputType
    _sum?: LocalizacaoSumAggregateInputType
    _min?: LocalizacaoMinAggregateInputType
    _max?: LocalizacaoMaxAggregateInputType
  }

  export type LocalizacaoGroupByOutputType = {
    id: string
    latitude: number
    longitude: number
    timestamp: Date
    pessoaId: string
    _count: LocalizacaoCountAggregateOutputType | null
    _avg: LocalizacaoAvgAggregateOutputType | null
    _sum: LocalizacaoSumAggregateOutputType | null
    _min: LocalizacaoMinAggregateOutputType | null
    _max: LocalizacaoMaxAggregateOutputType | null
  }

  type GetLocalizacaoGroupByPayload<T extends LocalizacaoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LocalizacaoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LocalizacaoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LocalizacaoGroupByOutputType[P]>
            : GetScalarType<T[P], LocalizacaoGroupByOutputType[P]>
        }
      >
    >


  export type LocalizacaoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    latitude?: boolean
    longitude?: boolean
    timestamp?: boolean
    pessoaId?: boolean
    pessoa?: boolean | PessoaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["localizacao"]>

  export type LocalizacaoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    latitude?: boolean
    longitude?: boolean
    timestamp?: boolean
    pessoaId?: boolean
    pessoa?: boolean | PessoaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["localizacao"]>

  export type LocalizacaoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    latitude?: boolean
    longitude?: boolean
    timestamp?: boolean
    pessoaId?: boolean
    pessoa?: boolean | PessoaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["localizacao"]>

  export type LocalizacaoSelectScalar = {
    id?: boolean
    latitude?: boolean
    longitude?: boolean
    timestamp?: boolean
    pessoaId?: boolean
  }

  export type LocalizacaoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "latitude" | "longitude" | "timestamp" | "pessoaId", ExtArgs["result"]["localizacao"]>
  export type LocalizacaoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pessoa?: boolean | PessoaDefaultArgs<ExtArgs>
  }
  export type LocalizacaoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pessoa?: boolean | PessoaDefaultArgs<ExtArgs>
  }
  export type LocalizacaoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pessoa?: boolean | PessoaDefaultArgs<ExtArgs>
  }

  export type $LocalizacaoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Localizacao"
    objects: {
      pessoa: Prisma.$PessoaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      latitude: number
      longitude: number
      timestamp: Date
      pessoaId: string
    }, ExtArgs["result"]["localizacao"]>
    composites: {}
  }

  type LocalizacaoGetPayload<S extends boolean | null | undefined | LocalizacaoDefaultArgs> = $Result.GetResult<Prisma.$LocalizacaoPayload, S>

  type LocalizacaoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LocalizacaoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LocalizacaoCountAggregateInputType | true
    }

  export interface LocalizacaoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Localizacao'], meta: { name: 'Localizacao' } }
    /**
     * Find zero or one Localizacao that matches the filter.
     * @param {LocalizacaoFindUniqueArgs} args - Arguments to find a Localizacao
     * @example
     * // Get one Localizacao
     * const localizacao = await prisma.localizacao.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LocalizacaoFindUniqueArgs>(args: SelectSubset<T, LocalizacaoFindUniqueArgs<ExtArgs>>): Prisma__LocalizacaoClient<$Result.GetResult<Prisma.$LocalizacaoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Localizacao that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LocalizacaoFindUniqueOrThrowArgs} args - Arguments to find a Localizacao
     * @example
     * // Get one Localizacao
     * const localizacao = await prisma.localizacao.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LocalizacaoFindUniqueOrThrowArgs>(args: SelectSubset<T, LocalizacaoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LocalizacaoClient<$Result.GetResult<Prisma.$LocalizacaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Localizacao that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocalizacaoFindFirstArgs} args - Arguments to find a Localizacao
     * @example
     * // Get one Localizacao
     * const localizacao = await prisma.localizacao.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LocalizacaoFindFirstArgs>(args?: SelectSubset<T, LocalizacaoFindFirstArgs<ExtArgs>>): Prisma__LocalizacaoClient<$Result.GetResult<Prisma.$LocalizacaoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Localizacao that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocalizacaoFindFirstOrThrowArgs} args - Arguments to find a Localizacao
     * @example
     * // Get one Localizacao
     * const localizacao = await prisma.localizacao.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LocalizacaoFindFirstOrThrowArgs>(args?: SelectSubset<T, LocalizacaoFindFirstOrThrowArgs<ExtArgs>>): Prisma__LocalizacaoClient<$Result.GetResult<Prisma.$LocalizacaoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Localizacaos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocalizacaoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Localizacaos
     * const localizacaos = await prisma.localizacao.findMany()
     * 
     * // Get first 10 Localizacaos
     * const localizacaos = await prisma.localizacao.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const localizacaoWithIdOnly = await prisma.localizacao.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LocalizacaoFindManyArgs>(args?: SelectSubset<T, LocalizacaoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocalizacaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Localizacao.
     * @param {LocalizacaoCreateArgs} args - Arguments to create a Localizacao.
     * @example
     * // Create one Localizacao
     * const Localizacao = await prisma.localizacao.create({
     *   data: {
     *     // ... data to create a Localizacao
     *   }
     * })
     * 
     */
    create<T extends LocalizacaoCreateArgs>(args: SelectSubset<T, LocalizacaoCreateArgs<ExtArgs>>): Prisma__LocalizacaoClient<$Result.GetResult<Prisma.$LocalizacaoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Localizacaos.
     * @param {LocalizacaoCreateManyArgs} args - Arguments to create many Localizacaos.
     * @example
     * // Create many Localizacaos
     * const localizacao = await prisma.localizacao.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LocalizacaoCreateManyArgs>(args?: SelectSubset<T, LocalizacaoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Localizacaos and returns the data saved in the database.
     * @param {LocalizacaoCreateManyAndReturnArgs} args - Arguments to create many Localizacaos.
     * @example
     * // Create many Localizacaos
     * const localizacao = await prisma.localizacao.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Localizacaos and only return the `id`
     * const localizacaoWithIdOnly = await prisma.localizacao.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LocalizacaoCreateManyAndReturnArgs>(args?: SelectSubset<T, LocalizacaoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocalizacaoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Localizacao.
     * @param {LocalizacaoDeleteArgs} args - Arguments to delete one Localizacao.
     * @example
     * // Delete one Localizacao
     * const Localizacao = await prisma.localizacao.delete({
     *   where: {
     *     // ... filter to delete one Localizacao
     *   }
     * })
     * 
     */
    delete<T extends LocalizacaoDeleteArgs>(args: SelectSubset<T, LocalizacaoDeleteArgs<ExtArgs>>): Prisma__LocalizacaoClient<$Result.GetResult<Prisma.$LocalizacaoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Localizacao.
     * @param {LocalizacaoUpdateArgs} args - Arguments to update one Localizacao.
     * @example
     * // Update one Localizacao
     * const localizacao = await prisma.localizacao.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LocalizacaoUpdateArgs>(args: SelectSubset<T, LocalizacaoUpdateArgs<ExtArgs>>): Prisma__LocalizacaoClient<$Result.GetResult<Prisma.$LocalizacaoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Localizacaos.
     * @param {LocalizacaoDeleteManyArgs} args - Arguments to filter Localizacaos to delete.
     * @example
     * // Delete a few Localizacaos
     * const { count } = await prisma.localizacao.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LocalizacaoDeleteManyArgs>(args?: SelectSubset<T, LocalizacaoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Localizacaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocalizacaoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Localizacaos
     * const localizacao = await prisma.localizacao.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LocalizacaoUpdateManyArgs>(args: SelectSubset<T, LocalizacaoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Localizacaos and returns the data updated in the database.
     * @param {LocalizacaoUpdateManyAndReturnArgs} args - Arguments to update many Localizacaos.
     * @example
     * // Update many Localizacaos
     * const localizacao = await prisma.localizacao.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Localizacaos and only return the `id`
     * const localizacaoWithIdOnly = await prisma.localizacao.updateManyAndReturn({
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
    updateManyAndReturn<T extends LocalizacaoUpdateManyAndReturnArgs>(args: SelectSubset<T, LocalizacaoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocalizacaoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Localizacao.
     * @param {LocalizacaoUpsertArgs} args - Arguments to update or create a Localizacao.
     * @example
     * // Update or create a Localizacao
     * const localizacao = await prisma.localizacao.upsert({
     *   create: {
     *     // ... data to create a Localizacao
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Localizacao we want to update
     *   }
     * })
     */
    upsert<T extends LocalizacaoUpsertArgs>(args: SelectSubset<T, LocalizacaoUpsertArgs<ExtArgs>>): Prisma__LocalizacaoClient<$Result.GetResult<Prisma.$LocalizacaoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Localizacaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocalizacaoCountArgs} args - Arguments to filter Localizacaos to count.
     * @example
     * // Count the number of Localizacaos
     * const count = await prisma.localizacao.count({
     *   where: {
     *     // ... the filter for the Localizacaos we want to count
     *   }
     * })
    **/
    count<T extends LocalizacaoCountArgs>(
      args?: Subset<T, LocalizacaoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LocalizacaoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Localizacao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocalizacaoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LocalizacaoAggregateArgs>(args: Subset<T, LocalizacaoAggregateArgs>): Prisma.PrismaPromise<GetLocalizacaoAggregateType<T>>

    /**
     * Group by Localizacao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocalizacaoGroupByArgs} args - Group by arguments.
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
      T extends LocalizacaoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LocalizacaoGroupByArgs['orderBy'] }
        : { orderBy?: LocalizacaoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LocalizacaoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLocalizacaoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Localizacao model
   */
  readonly fields: LocalizacaoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Localizacao.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LocalizacaoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pessoa<T extends PessoaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PessoaDefaultArgs<ExtArgs>>): Prisma__PessoaClient<$Result.GetResult<Prisma.$PessoaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Localizacao model
   */
  interface LocalizacaoFieldRefs {
    readonly id: FieldRef<"Localizacao", 'String'>
    readonly latitude: FieldRef<"Localizacao", 'Float'>
    readonly longitude: FieldRef<"Localizacao", 'Float'>
    readonly timestamp: FieldRef<"Localizacao", 'DateTime'>
    readonly pessoaId: FieldRef<"Localizacao", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Localizacao findUnique
   */
  export type LocalizacaoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Localizacao
     */
    select?: LocalizacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Localizacao
     */
    omit?: LocalizacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocalizacaoInclude<ExtArgs> | null
    /**
     * Filter, which Localizacao to fetch.
     */
    where: LocalizacaoWhereUniqueInput
  }

  /**
   * Localizacao findUniqueOrThrow
   */
  export type LocalizacaoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Localizacao
     */
    select?: LocalizacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Localizacao
     */
    omit?: LocalizacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocalizacaoInclude<ExtArgs> | null
    /**
     * Filter, which Localizacao to fetch.
     */
    where: LocalizacaoWhereUniqueInput
  }

  /**
   * Localizacao findFirst
   */
  export type LocalizacaoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Localizacao
     */
    select?: LocalizacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Localizacao
     */
    omit?: LocalizacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocalizacaoInclude<ExtArgs> | null
    /**
     * Filter, which Localizacao to fetch.
     */
    where?: LocalizacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Localizacaos to fetch.
     */
    orderBy?: LocalizacaoOrderByWithRelationInput | LocalizacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Localizacaos.
     */
    cursor?: LocalizacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Localizacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Localizacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Localizacaos.
     */
    distinct?: LocalizacaoScalarFieldEnum | LocalizacaoScalarFieldEnum[]
  }

  /**
   * Localizacao findFirstOrThrow
   */
  export type LocalizacaoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Localizacao
     */
    select?: LocalizacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Localizacao
     */
    omit?: LocalizacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocalizacaoInclude<ExtArgs> | null
    /**
     * Filter, which Localizacao to fetch.
     */
    where?: LocalizacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Localizacaos to fetch.
     */
    orderBy?: LocalizacaoOrderByWithRelationInput | LocalizacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Localizacaos.
     */
    cursor?: LocalizacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Localizacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Localizacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Localizacaos.
     */
    distinct?: LocalizacaoScalarFieldEnum | LocalizacaoScalarFieldEnum[]
  }

  /**
   * Localizacao findMany
   */
  export type LocalizacaoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Localizacao
     */
    select?: LocalizacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Localizacao
     */
    omit?: LocalizacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocalizacaoInclude<ExtArgs> | null
    /**
     * Filter, which Localizacaos to fetch.
     */
    where?: LocalizacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Localizacaos to fetch.
     */
    orderBy?: LocalizacaoOrderByWithRelationInput | LocalizacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Localizacaos.
     */
    cursor?: LocalizacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Localizacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Localizacaos.
     */
    skip?: number
    distinct?: LocalizacaoScalarFieldEnum | LocalizacaoScalarFieldEnum[]
  }

  /**
   * Localizacao create
   */
  export type LocalizacaoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Localizacao
     */
    select?: LocalizacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Localizacao
     */
    omit?: LocalizacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocalizacaoInclude<ExtArgs> | null
    /**
     * The data needed to create a Localizacao.
     */
    data: XOR<LocalizacaoCreateInput, LocalizacaoUncheckedCreateInput>
  }

  /**
   * Localizacao createMany
   */
  export type LocalizacaoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Localizacaos.
     */
    data: LocalizacaoCreateManyInput | LocalizacaoCreateManyInput[]
  }

  /**
   * Localizacao createManyAndReturn
   */
  export type LocalizacaoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Localizacao
     */
    select?: LocalizacaoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Localizacao
     */
    omit?: LocalizacaoOmit<ExtArgs> | null
    /**
     * The data used to create many Localizacaos.
     */
    data: LocalizacaoCreateManyInput | LocalizacaoCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocalizacaoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Localizacao update
   */
  export type LocalizacaoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Localizacao
     */
    select?: LocalizacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Localizacao
     */
    omit?: LocalizacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocalizacaoInclude<ExtArgs> | null
    /**
     * The data needed to update a Localizacao.
     */
    data: XOR<LocalizacaoUpdateInput, LocalizacaoUncheckedUpdateInput>
    /**
     * Choose, which Localizacao to update.
     */
    where: LocalizacaoWhereUniqueInput
  }

  /**
   * Localizacao updateMany
   */
  export type LocalizacaoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Localizacaos.
     */
    data: XOR<LocalizacaoUpdateManyMutationInput, LocalizacaoUncheckedUpdateManyInput>
    /**
     * Filter which Localizacaos to update
     */
    where?: LocalizacaoWhereInput
    /**
     * Limit how many Localizacaos to update.
     */
    limit?: number
  }

  /**
   * Localizacao updateManyAndReturn
   */
  export type LocalizacaoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Localizacao
     */
    select?: LocalizacaoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Localizacao
     */
    omit?: LocalizacaoOmit<ExtArgs> | null
    /**
     * The data used to update Localizacaos.
     */
    data: XOR<LocalizacaoUpdateManyMutationInput, LocalizacaoUncheckedUpdateManyInput>
    /**
     * Filter which Localizacaos to update
     */
    where?: LocalizacaoWhereInput
    /**
     * Limit how many Localizacaos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocalizacaoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Localizacao upsert
   */
  export type LocalizacaoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Localizacao
     */
    select?: LocalizacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Localizacao
     */
    omit?: LocalizacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocalizacaoInclude<ExtArgs> | null
    /**
     * The filter to search for the Localizacao to update in case it exists.
     */
    where: LocalizacaoWhereUniqueInput
    /**
     * In case the Localizacao found by the `where` argument doesn't exist, create a new Localizacao with this data.
     */
    create: XOR<LocalizacaoCreateInput, LocalizacaoUncheckedCreateInput>
    /**
     * In case the Localizacao was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LocalizacaoUpdateInput, LocalizacaoUncheckedUpdateInput>
  }

  /**
   * Localizacao delete
   */
  export type LocalizacaoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Localizacao
     */
    select?: LocalizacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Localizacao
     */
    omit?: LocalizacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocalizacaoInclude<ExtArgs> | null
    /**
     * Filter which Localizacao to delete.
     */
    where: LocalizacaoWhereUniqueInput
  }

  /**
   * Localizacao deleteMany
   */
  export type LocalizacaoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Localizacaos to delete
     */
    where?: LocalizacaoWhereInput
    /**
     * Limit how many Localizacaos to delete.
     */
    limit?: number
  }

  /**
   * Localizacao without action
   */
  export type LocalizacaoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Localizacao
     */
    select?: LocalizacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Localizacao
     */
    omit?: LocalizacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocalizacaoInclude<ExtArgs> | null
  }


  /**
   * Model TipoServico
   */

  export type AggregateTipoServico = {
    _count: TipoServicoCountAggregateOutputType | null
    _avg: TipoServicoAvgAggregateOutputType | null
    _sum: TipoServicoSumAggregateOutputType | null
    _min: TipoServicoMinAggregateOutputType | null
    _max: TipoServicoMaxAggregateOutputType | null
  }

  export type TipoServicoAvgAggregateOutputType = {
    custoEstimado: number | null
  }

  export type TipoServicoSumAggregateOutputType = {
    custoEstimado: number | null
  }

  export type TipoServicoMinAggregateOutputType = {
    id: string | null
    nome: string | null
    descricao: string | null
    custoEstimado: number | null
    ativo: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TipoServicoMaxAggregateOutputType = {
    id: string | null
    nome: string | null
    descricao: string | null
    custoEstimado: number | null
    ativo: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TipoServicoCountAggregateOutputType = {
    id: number
    nome: number
    descricao: number
    custoEstimado: number
    ativo: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TipoServicoAvgAggregateInputType = {
    custoEstimado?: true
  }

  export type TipoServicoSumAggregateInputType = {
    custoEstimado?: true
  }

  export type TipoServicoMinAggregateInputType = {
    id?: true
    nome?: true
    descricao?: true
    custoEstimado?: true
    ativo?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TipoServicoMaxAggregateInputType = {
    id?: true
    nome?: true
    descricao?: true
    custoEstimado?: true
    ativo?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TipoServicoCountAggregateInputType = {
    id?: true
    nome?: true
    descricao?: true
    custoEstimado?: true
    ativo?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TipoServicoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TipoServico to aggregate.
     */
    where?: TipoServicoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TipoServicos to fetch.
     */
    orderBy?: TipoServicoOrderByWithRelationInput | TipoServicoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TipoServicoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TipoServicos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TipoServicos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TipoServicos
    **/
    _count?: true | TipoServicoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TipoServicoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TipoServicoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TipoServicoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TipoServicoMaxAggregateInputType
  }

  export type GetTipoServicoAggregateType<T extends TipoServicoAggregateArgs> = {
        [P in keyof T & keyof AggregateTipoServico]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTipoServico[P]>
      : GetScalarType<T[P], AggregateTipoServico[P]>
  }




  export type TipoServicoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TipoServicoWhereInput
    orderBy?: TipoServicoOrderByWithAggregationInput | TipoServicoOrderByWithAggregationInput[]
    by: TipoServicoScalarFieldEnum[] | TipoServicoScalarFieldEnum
    having?: TipoServicoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TipoServicoCountAggregateInputType | true
    _avg?: TipoServicoAvgAggregateInputType
    _sum?: TipoServicoSumAggregateInputType
    _min?: TipoServicoMinAggregateInputType
    _max?: TipoServicoMaxAggregateInputType
  }

  export type TipoServicoGroupByOutputType = {
    id: string
    nome: string
    descricao: string | null
    custoEstimado: number | null
    ativo: boolean
    createdAt: Date
    updatedAt: Date
    _count: TipoServicoCountAggregateOutputType | null
    _avg: TipoServicoAvgAggregateOutputType | null
    _sum: TipoServicoSumAggregateOutputType | null
    _min: TipoServicoMinAggregateOutputType | null
    _max: TipoServicoMaxAggregateOutputType | null
  }

  type GetTipoServicoGroupByPayload<T extends TipoServicoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TipoServicoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TipoServicoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TipoServicoGroupByOutputType[P]>
            : GetScalarType<T[P], TipoServicoGroupByOutputType[P]>
        }
      >
    >


  export type TipoServicoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    descricao?: boolean
    custoEstimado?: boolean
    ativo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["tipoServico"]>

  export type TipoServicoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    descricao?: boolean
    custoEstimado?: boolean
    ativo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["tipoServico"]>

  export type TipoServicoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    descricao?: boolean
    custoEstimado?: boolean
    ativo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["tipoServico"]>

  export type TipoServicoSelectScalar = {
    id?: boolean
    nome?: boolean
    descricao?: boolean
    custoEstimado?: boolean
    ativo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TipoServicoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "descricao" | "custoEstimado" | "ativo" | "createdAt" | "updatedAt", ExtArgs["result"]["tipoServico"]>

  export type $TipoServicoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TipoServico"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nome: string
      descricao: string | null
      custoEstimado: number | null
      ativo: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["tipoServico"]>
    composites: {}
  }

  type TipoServicoGetPayload<S extends boolean | null | undefined | TipoServicoDefaultArgs> = $Result.GetResult<Prisma.$TipoServicoPayload, S>

  type TipoServicoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TipoServicoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TipoServicoCountAggregateInputType | true
    }

  export interface TipoServicoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TipoServico'], meta: { name: 'TipoServico' } }
    /**
     * Find zero or one TipoServico that matches the filter.
     * @param {TipoServicoFindUniqueArgs} args - Arguments to find a TipoServico
     * @example
     * // Get one TipoServico
     * const tipoServico = await prisma.tipoServico.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TipoServicoFindUniqueArgs>(args: SelectSubset<T, TipoServicoFindUniqueArgs<ExtArgs>>): Prisma__TipoServicoClient<$Result.GetResult<Prisma.$TipoServicoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TipoServico that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TipoServicoFindUniqueOrThrowArgs} args - Arguments to find a TipoServico
     * @example
     * // Get one TipoServico
     * const tipoServico = await prisma.tipoServico.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TipoServicoFindUniqueOrThrowArgs>(args: SelectSubset<T, TipoServicoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TipoServicoClient<$Result.GetResult<Prisma.$TipoServicoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TipoServico that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoServicoFindFirstArgs} args - Arguments to find a TipoServico
     * @example
     * // Get one TipoServico
     * const tipoServico = await prisma.tipoServico.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TipoServicoFindFirstArgs>(args?: SelectSubset<T, TipoServicoFindFirstArgs<ExtArgs>>): Prisma__TipoServicoClient<$Result.GetResult<Prisma.$TipoServicoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TipoServico that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoServicoFindFirstOrThrowArgs} args - Arguments to find a TipoServico
     * @example
     * // Get one TipoServico
     * const tipoServico = await prisma.tipoServico.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TipoServicoFindFirstOrThrowArgs>(args?: SelectSubset<T, TipoServicoFindFirstOrThrowArgs<ExtArgs>>): Prisma__TipoServicoClient<$Result.GetResult<Prisma.$TipoServicoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TipoServicos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoServicoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TipoServicos
     * const tipoServicos = await prisma.tipoServico.findMany()
     * 
     * // Get first 10 TipoServicos
     * const tipoServicos = await prisma.tipoServico.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tipoServicoWithIdOnly = await prisma.tipoServico.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TipoServicoFindManyArgs>(args?: SelectSubset<T, TipoServicoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TipoServicoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TipoServico.
     * @param {TipoServicoCreateArgs} args - Arguments to create a TipoServico.
     * @example
     * // Create one TipoServico
     * const TipoServico = await prisma.tipoServico.create({
     *   data: {
     *     // ... data to create a TipoServico
     *   }
     * })
     * 
     */
    create<T extends TipoServicoCreateArgs>(args: SelectSubset<T, TipoServicoCreateArgs<ExtArgs>>): Prisma__TipoServicoClient<$Result.GetResult<Prisma.$TipoServicoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TipoServicos.
     * @param {TipoServicoCreateManyArgs} args - Arguments to create many TipoServicos.
     * @example
     * // Create many TipoServicos
     * const tipoServico = await prisma.tipoServico.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TipoServicoCreateManyArgs>(args?: SelectSubset<T, TipoServicoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TipoServicos and returns the data saved in the database.
     * @param {TipoServicoCreateManyAndReturnArgs} args - Arguments to create many TipoServicos.
     * @example
     * // Create many TipoServicos
     * const tipoServico = await prisma.tipoServico.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TipoServicos and only return the `id`
     * const tipoServicoWithIdOnly = await prisma.tipoServico.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TipoServicoCreateManyAndReturnArgs>(args?: SelectSubset<T, TipoServicoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TipoServicoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TipoServico.
     * @param {TipoServicoDeleteArgs} args - Arguments to delete one TipoServico.
     * @example
     * // Delete one TipoServico
     * const TipoServico = await prisma.tipoServico.delete({
     *   where: {
     *     // ... filter to delete one TipoServico
     *   }
     * })
     * 
     */
    delete<T extends TipoServicoDeleteArgs>(args: SelectSubset<T, TipoServicoDeleteArgs<ExtArgs>>): Prisma__TipoServicoClient<$Result.GetResult<Prisma.$TipoServicoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TipoServico.
     * @param {TipoServicoUpdateArgs} args - Arguments to update one TipoServico.
     * @example
     * // Update one TipoServico
     * const tipoServico = await prisma.tipoServico.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TipoServicoUpdateArgs>(args: SelectSubset<T, TipoServicoUpdateArgs<ExtArgs>>): Prisma__TipoServicoClient<$Result.GetResult<Prisma.$TipoServicoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TipoServicos.
     * @param {TipoServicoDeleteManyArgs} args - Arguments to filter TipoServicos to delete.
     * @example
     * // Delete a few TipoServicos
     * const { count } = await prisma.tipoServico.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TipoServicoDeleteManyArgs>(args?: SelectSubset<T, TipoServicoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TipoServicos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoServicoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TipoServicos
     * const tipoServico = await prisma.tipoServico.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TipoServicoUpdateManyArgs>(args: SelectSubset<T, TipoServicoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TipoServicos and returns the data updated in the database.
     * @param {TipoServicoUpdateManyAndReturnArgs} args - Arguments to update many TipoServicos.
     * @example
     * // Update many TipoServicos
     * const tipoServico = await prisma.tipoServico.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TipoServicos and only return the `id`
     * const tipoServicoWithIdOnly = await prisma.tipoServico.updateManyAndReturn({
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
    updateManyAndReturn<T extends TipoServicoUpdateManyAndReturnArgs>(args: SelectSubset<T, TipoServicoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TipoServicoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TipoServico.
     * @param {TipoServicoUpsertArgs} args - Arguments to update or create a TipoServico.
     * @example
     * // Update or create a TipoServico
     * const tipoServico = await prisma.tipoServico.upsert({
     *   create: {
     *     // ... data to create a TipoServico
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TipoServico we want to update
     *   }
     * })
     */
    upsert<T extends TipoServicoUpsertArgs>(args: SelectSubset<T, TipoServicoUpsertArgs<ExtArgs>>): Prisma__TipoServicoClient<$Result.GetResult<Prisma.$TipoServicoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TipoServicos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoServicoCountArgs} args - Arguments to filter TipoServicos to count.
     * @example
     * // Count the number of TipoServicos
     * const count = await prisma.tipoServico.count({
     *   where: {
     *     // ... the filter for the TipoServicos we want to count
     *   }
     * })
    **/
    count<T extends TipoServicoCountArgs>(
      args?: Subset<T, TipoServicoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TipoServicoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TipoServico.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoServicoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TipoServicoAggregateArgs>(args: Subset<T, TipoServicoAggregateArgs>): Prisma.PrismaPromise<GetTipoServicoAggregateType<T>>

    /**
     * Group by TipoServico.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoServicoGroupByArgs} args - Group by arguments.
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
      T extends TipoServicoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TipoServicoGroupByArgs['orderBy'] }
        : { orderBy?: TipoServicoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TipoServicoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTipoServicoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TipoServico model
   */
  readonly fields: TipoServicoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TipoServico.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TipoServicoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the TipoServico model
   */
  interface TipoServicoFieldRefs {
    readonly id: FieldRef<"TipoServico", 'String'>
    readonly nome: FieldRef<"TipoServico", 'String'>
    readonly descricao: FieldRef<"TipoServico", 'String'>
    readonly custoEstimado: FieldRef<"TipoServico", 'Float'>
    readonly ativo: FieldRef<"TipoServico", 'Boolean'>
    readonly createdAt: FieldRef<"TipoServico", 'DateTime'>
    readonly updatedAt: FieldRef<"TipoServico", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TipoServico findUnique
   */
  export type TipoServicoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoServico
     */
    select?: TipoServicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoServico
     */
    omit?: TipoServicoOmit<ExtArgs> | null
    /**
     * Filter, which TipoServico to fetch.
     */
    where: TipoServicoWhereUniqueInput
  }

  /**
   * TipoServico findUniqueOrThrow
   */
  export type TipoServicoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoServico
     */
    select?: TipoServicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoServico
     */
    omit?: TipoServicoOmit<ExtArgs> | null
    /**
     * Filter, which TipoServico to fetch.
     */
    where: TipoServicoWhereUniqueInput
  }

  /**
   * TipoServico findFirst
   */
  export type TipoServicoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoServico
     */
    select?: TipoServicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoServico
     */
    omit?: TipoServicoOmit<ExtArgs> | null
    /**
     * Filter, which TipoServico to fetch.
     */
    where?: TipoServicoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TipoServicos to fetch.
     */
    orderBy?: TipoServicoOrderByWithRelationInput | TipoServicoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TipoServicos.
     */
    cursor?: TipoServicoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TipoServicos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TipoServicos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TipoServicos.
     */
    distinct?: TipoServicoScalarFieldEnum | TipoServicoScalarFieldEnum[]
  }

  /**
   * TipoServico findFirstOrThrow
   */
  export type TipoServicoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoServico
     */
    select?: TipoServicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoServico
     */
    omit?: TipoServicoOmit<ExtArgs> | null
    /**
     * Filter, which TipoServico to fetch.
     */
    where?: TipoServicoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TipoServicos to fetch.
     */
    orderBy?: TipoServicoOrderByWithRelationInput | TipoServicoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TipoServicos.
     */
    cursor?: TipoServicoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TipoServicos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TipoServicos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TipoServicos.
     */
    distinct?: TipoServicoScalarFieldEnum | TipoServicoScalarFieldEnum[]
  }

  /**
   * TipoServico findMany
   */
  export type TipoServicoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoServico
     */
    select?: TipoServicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoServico
     */
    omit?: TipoServicoOmit<ExtArgs> | null
    /**
     * Filter, which TipoServicos to fetch.
     */
    where?: TipoServicoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TipoServicos to fetch.
     */
    orderBy?: TipoServicoOrderByWithRelationInput | TipoServicoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TipoServicos.
     */
    cursor?: TipoServicoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TipoServicos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TipoServicos.
     */
    skip?: number
    distinct?: TipoServicoScalarFieldEnum | TipoServicoScalarFieldEnum[]
  }

  /**
   * TipoServico create
   */
  export type TipoServicoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoServico
     */
    select?: TipoServicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoServico
     */
    omit?: TipoServicoOmit<ExtArgs> | null
    /**
     * The data needed to create a TipoServico.
     */
    data: XOR<TipoServicoCreateInput, TipoServicoUncheckedCreateInput>
  }

  /**
   * TipoServico createMany
   */
  export type TipoServicoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TipoServicos.
     */
    data: TipoServicoCreateManyInput | TipoServicoCreateManyInput[]
  }

  /**
   * TipoServico createManyAndReturn
   */
  export type TipoServicoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoServico
     */
    select?: TipoServicoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TipoServico
     */
    omit?: TipoServicoOmit<ExtArgs> | null
    /**
     * The data used to create many TipoServicos.
     */
    data: TipoServicoCreateManyInput | TipoServicoCreateManyInput[]
  }

  /**
   * TipoServico update
   */
  export type TipoServicoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoServico
     */
    select?: TipoServicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoServico
     */
    omit?: TipoServicoOmit<ExtArgs> | null
    /**
     * The data needed to update a TipoServico.
     */
    data: XOR<TipoServicoUpdateInput, TipoServicoUncheckedUpdateInput>
    /**
     * Choose, which TipoServico to update.
     */
    where: TipoServicoWhereUniqueInput
  }

  /**
   * TipoServico updateMany
   */
  export type TipoServicoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TipoServicos.
     */
    data: XOR<TipoServicoUpdateManyMutationInput, TipoServicoUncheckedUpdateManyInput>
    /**
     * Filter which TipoServicos to update
     */
    where?: TipoServicoWhereInput
    /**
     * Limit how many TipoServicos to update.
     */
    limit?: number
  }

  /**
   * TipoServico updateManyAndReturn
   */
  export type TipoServicoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoServico
     */
    select?: TipoServicoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TipoServico
     */
    omit?: TipoServicoOmit<ExtArgs> | null
    /**
     * The data used to update TipoServicos.
     */
    data: XOR<TipoServicoUpdateManyMutationInput, TipoServicoUncheckedUpdateManyInput>
    /**
     * Filter which TipoServicos to update
     */
    where?: TipoServicoWhereInput
    /**
     * Limit how many TipoServicos to update.
     */
    limit?: number
  }

  /**
   * TipoServico upsert
   */
  export type TipoServicoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoServico
     */
    select?: TipoServicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoServico
     */
    omit?: TipoServicoOmit<ExtArgs> | null
    /**
     * The filter to search for the TipoServico to update in case it exists.
     */
    where: TipoServicoWhereUniqueInput
    /**
     * In case the TipoServico found by the `where` argument doesn't exist, create a new TipoServico with this data.
     */
    create: XOR<TipoServicoCreateInput, TipoServicoUncheckedCreateInput>
    /**
     * In case the TipoServico was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TipoServicoUpdateInput, TipoServicoUncheckedUpdateInput>
  }

  /**
   * TipoServico delete
   */
  export type TipoServicoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoServico
     */
    select?: TipoServicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoServico
     */
    omit?: TipoServicoOmit<ExtArgs> | null
    /**
     * Filter which TipoServico to delete.
     */
    where: TipoServicoWhereUniqueInput
  }

  /**
   * TipoServico deleteMany
   */
  export type TipoServicoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TipoServicos to delete
     */
    where?: TipoServicoWhereInput
    /**
     * Limit how many TipoServicos to delete.
     */
    limit?: number
  }

  /**
   * TipoServico without action
   */
  export type TipoServicoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoServico
     */
    select?: TipoServicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoServico
     */
    omit?: TipoServicoOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const AvistamentoScalarFieldEnum: {
    id: 'id',
    idPessoaDesaparecida: 'idPessoaDesaparecida',
    dataHora: 'dataHora',
    comentario: 'comentario',
    localAvistamento: 'localAvistamento',
    latitude: 'latitude',
    longitude: 'longitude',
    nomeInformante: 'nomeInformante',
    contatoInformante: 'contatoInformante',
    dataCadastro: 'dataCadastro',
    dataAtualizacao: 'dataAtualizacao'
  };

  export type AvistamentoScalarFieldEnum = (typeof AvistamentoScalarFieldEnum)[keyof typeof AvistamentoScalarFieldEnum]


  export const PessoaDesaparecidaScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    idade: 'idade',
    dataDesaparecimento: 'dataDesaparecimento',
    descricao: 'descricao',
    status: 'status',
    dataCadastro: 'dataCadastro',
    dataAtualizacao: 'dataAtualizacao'
  };

  export type PessoaDesaparecidaScalarFieldEnum = (typeof PessoaDesaparecidaScalarFieldEnum)[keyof typeof PessoaDesaparecidaScalarFieldEnum]


  export const PessoaScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    idade: 'idade',
    email: 'email',
    criadoEm: 'criadoEm'
  };

  export type PessoaScalarFieldEnum = (typeof PessoaScalarFieldEnum)[keyof typeof PessoaScalarFieldEnum]


  export const ContatoScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    email: 'email',
    telefone: 'telefone',
    mensagem: 'mensagem',
    criadoEm: 'criadoEm'
  };

  export type ContatoScalarFieldEnum = (typeof ContatoScalarFieldEnum)[keyof typeof ContatoScalarFieldEnum]


  export const USERScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    email: 'email',
    senha_hash: 'senha_hash',
    tipo_usuario: 'tipo_usuario',
    dataCadastro: 'dataCadastro',
    dataAtualizacao: 'dataAtualizacao'
  };

  export type USERScalarFieldEnum = (typeof USERScalarFieldEnum)[keyof typeof USERScalarFieldEnum]


  export const LocalizacaoScalarFieldEnum: {
    id: 'id',
    latitude: 'latitude',
    longitude: 'longitude',
    timestamp: 'timestamp',
    pessoaId: 'pessoaId'
  };

  export type LocalizacaoScalarFieldEnum = (typeof LocalizacaoScalarFieldEnum)[keyof typeof LocalizacaoScalarFieldEnum]


  export const TipoServicoScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    descricao: 'descricao',
    custoEstimado: 'custoEstimado',
    ativo: 'ativo',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TipoServicoScalarFieldEnum = (typeof TipoServicoScalarFieldEnum)[keyof typeof TipoServicoScalarFieldEnum]


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
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'status'
   */
  export type EnumstatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'status'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    
  /**
   * Deep Input Types
   */


  export type AvistamentoWhereInput = {
    AND?: AvistamentoWhereInput | AvistamentoWhereInput[]
    OR?: AvistamentoWhereInput[]
    NOT?: AvistamentoWhereInput | AvistamentoWhereInput[]
    id?: IntFilter<"Avistamento"> | number
    idPessoaDesaparecida?: IntFilter<"Avistamento"> | number
    dataHora?: DateTimeFilter<"Avistamento"> | Date | string
    comentario?: StringFilter<"Avistamento"> | string
    localAvistamento?: StringNullableFilter<"Avistamento"> | string | null
    latitude?: FloatNullableFilter<"Avistamento"> | number | null
    longitude?: FloatNullableFilter<"Avistamento"> | number | null
    nomeInformante?: StringNullableFilter<"Avistamento"> | string | null
    contatoInformante?: StringNullableFilter<"Avistamento"> | string | null
    dataCadastro?: DateTimeFilter<"Avistamento"> | Date | string
    dataAtualizacao?: DateTimeFilter<"Avistamento"> | Date | string
    pessoaDesaparecida?: XOR<PessoaDesaparecidaScalarRelationFilter, PessoaDesaparecidaWhereInput>
  }

  export type AvistamentoOrderByWithRelationInput = {
    id?: SortOrder
    idPessoaDesaparecida?: SortOrder
    dataHora?: SortOrder
    comentario?: SortOrder
    localAvistamento?: SortOrderInput | SortOrder
    latitude?: SortOrderInput | SortOrder
    longitude?: SortOrderInput | SortOrder
    nomeInformante?: SortOrderInput | SortOrder
    contatoInformante?: SortOrderInput | SortOrder
    dataCadastro?: SortOrder
    dataAtualizacao?: SortOrder
    pessoaDesaparecida?: PessoaDesaparecidaOrderByWithRelationInput
  }

  export type AvistamentoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AvistamentoWhereInput | AvistamentoWhereInput[]
    OR?: AvistamentoWhereInput[]
    NOT?: AvistamentoWhereInput | AvistamentoWhereInput[]
    idPessoaDesaparecida?: IntFilter<"Avistamento"> | number
    dataHora?: DateTimeFilter<"Avistamento"> | Date | string
    comentario?: StringFilter<"Avistamento"> | string
    localAvistamento?: StringNullableFilter<"Avistamento"> | string | null
    latitude?: FloatNullableFilter<"Avistamento"> | number | null
    longitude?: FloatNullableFilter<"Avistamento"> | number | null
    nomeInformante?: StringNullableFilter<"Avistamento"> | string | null
    contatoInformante?: StringNullableFilter<"Avistamento"> | string | null
    dataCadastro?: DateTimeFilter<"Avistamento"> | Date | string
    dataAtualizacao?: DateTimeFilter<"Avistamento"> | Date | string
    pessoaDesaparecida?: XOR<PessoaDesaparecidaScalarRelationFilter, PessoaDesaparecidaWhereInput>
  }, "id">

  export type AvistamentoOrderByWithAggregationInput = {
    id?: SortOrder
    idPessoaDesaparecida?: SortOrder
    dataHora?: SortOrder
    comentario?: SortOrder
    localAvistamento?: SortOrderInput | SortOrder
    latitude?: SortOrderInput | SortOrder
    longitude?: SortOrderInput | SortOrder
    nomeInformante?: SortOrderInput | SortOrder
    contatoInformante?: SortOrderInput | SortOrder
    dataCadastro?: SortOrder
    dataAtualizacao?: SortOrder
    _count?: AvistamentoCountOrderByAggregateInput
    _avg?: AvistamentoAvgOrderByAggregateInput
    _max?: AvistamentoMaxOrderByAggregateInput
    _min?: AvistamentoMinOrderByAggregateInput
    _sum?: AvistamentoSumOrderByAggregateInput
  }

  export type AvistamentoScalarWhereWithAggregatesInput = {
    AND?: AvistamentoScalarWhereWithAggregatesInput | AvistamentoScalarWhereWithAggregatesInput[]
    OR?: AvistamentoScalarWhereWithAggregatesInput[]
    NOT?: AvistamentoScalarWhereWithAggregatesInput | AvistamentoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Avistamento"> | number
    idPessoaDesaparecida?: IntWithAggregatesFilter<"Avistamento"> | number
    dataHora?: DateTimeWithAggregatesFilter<"Avistamento"> | Date | string
    comentario?: StringWithAggregatesFilter<"Avistamento"> | string
    localAvistamento?: StringNullableWithAggregatesFilter<"Avistamento"> | string | null
    latitude?: FloatNullableWithAggregatesFilter<"Avistamento"> | number | null
    longitude?: FloatNullableWithAggregatesFilter<"Avistamento"> | number | null
    nomeInformante?: StringNullableWithAggregatesFilter<"Avistamento"> | string | null
    contatoInformante?: StringNullableWithAggregatesFilter<"Avistamento"> | string | null
    dataCadastro?: DateTimeWithAggregatesFilter<"Avistamento"> | Date | string
    dataAtualizacao?: DateTimeWithAggregatesFilter<"Avistamento"> | Date | string
  }

  export type PessoaDesaparecidaWhereInput = {
    AND?: PessoaDesaparecidaWhereInput | PessoaDesaparecidaWhereInput[]
    OR?: PessoaDesaparecidaWhereInput[]
    NOT?: PessoaDesaparecidaWhereInput | PessoaDesaparecidaWhereInput[]
    id?: IntFilter<"PessoaDesaparecida"> | number
    nome?: StringFilter<"PessoaDesaparecida"> | string
    idade?: IntFilter<"PessoaDesaparecida"> | number
    dataDesaparecimento?: DateTimeFilter<"PessoaDesaparecida"> | Date | string
    descricao?: StringNullableFilter<"PessoaDesaparecida"> | string | null
    status?: EnumstatusFilter<"PessoaDesaparecida"> | $Enums.status
    dataCadastro?: DateTimeFilter<"PessoaDesaparecida"> | Date | string
    dataAtualizacao?: DateTimeFilter<"PessoaDesaparecida"> | Date | string
    avistamentos?: AvistamentoListRelationFilter
  }

  export type PessoaDesaparecidaOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    idade?: SortOrder
    dataDesaparecimento?: SortOrder
    descricao?: SortOrderInput | SortOrder
    status?: SortOrder
    dataCadastro?: SortOrder
    dataAtualizacao?: SortOrder
    avistamentos?: AvistamentoOrderByRelationAggregateInput
  }

  export type PessoaDesaparecidaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PessoaDesaparecidaWhereInput | PessoaDesaparecidaWhereInput[]
    OR?: PessoaDesaparecidaWhereInput[]
    NOT?: PessoaDesaparecidaWhereInput | PessoaDesaparecidaWhereInput[]
    nome?: StringFilter<"PessoaDesaparecida"> | string
    idade?: IntFilter<"PessoaDesaparecida"> | number
    dataDesaparecimento?: DateTimeFilter<"PessoaDesaparecida"> | Date | string
    descricao?: StringNullableFilter<"PessoaDesaparecida"> | string | null
    status?: EnumstatusFilter<"PessoaDesaparecida"> | $Enums.status
    dataCadastro?: DateTimeFilter<"PessoaDesaparecida"> | Date | string
    dataAtualizacao?: DateTimeFilter<"PessoaDesaparecida"> | Date | string
    avistamentos?: AvistamentoListRelationFilter
  }, "id">

  export type PessoaDesaparecidaOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    idade?: SortOrder
    dataDesaparecimento?: SortOrder
    descricao?: SortOrderInput | SortOrder
    status?: SortOrder
    dataCadastro?: SortOrder
    dataAtualizacao?: SortOrder
    _count?: PessoaDesaparecidaCountOrderByAggregateInput
    _avg?: PessoaDesaparecidaAvgOrderByAggregateInput
    _max?: PessoaDesaparecidaMaxOrderByAggregateInput
    _min?: PessoaDesaparecidaMinOrderByAggregateInput
    _sum?: PessoaDesaparecidaSumOrderByAggregateInput
  }

  export type PessoaDesaparecidaScalarWhereWithAggregatesInput = {
    AND?: PessoaDesaparecidaScalarWhereWithAggregatesInput | PessoaDesaparecidaScalarWhereWithAggregatesInput[]
    OR?: PessoaDesaparecidaScalarWhereWithAggregatesInput[]
    NOT?: PessoaDesaparecidaScalarWhereWithAggregatesInput | PessoaDesaparecidaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PessoaDesaparecida"> | number
    nome?: StringWithAggregatesFilter<"PessoaDesaparecida"> | string
    idade?: IntWithAggregatesFilter<"PessoaDesaparecida"> | number
    dataDesaparecimento?: DateTimeWithAggregatesFilter<"PessoaDesaparecida"> | Date | string
    descricao?: StringNullableWithAggregatesFilter<"PessoaDesaparecida"> | string | null
    status?: EnumstatusWithAggregatesFilter<"PessoaDesaparecida"> | $Enums.status
    dataCadastro?: DateTimeWithAggregatesFilter<"PessoaDesaparecida"> | Date | string
    dataAtualizacao?: DateTimeWithAggregatesFilter<"PessoaDesaparecida"> | Date | string
  }

  export type PessoaWhereInput = {
    AND?: PessoaWhereInput | PessoaWhereInput[]
    OR?: PessoaWhereInput[]
    NOT?: PessoaWhereInput | PessoaWhereInput[]
    id?: StringFilter<"Pessoa"> | string
    nome?: StringFilter<"Pessoa"> | string
    idade?: IntFilter<"Pessoa"> | number
    email?: StringFilter<"Pessoa"> | string
    criadoEm?: DateTimeFilter<"Pessoa"> | Date | string
    localizacoes?: LocalizacaoListRelationFilter
  }

  export type PessoaOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    idade?: SortOrder
    email?: SortOrder
    criadoEm?: SortOrder
    localizacoes?: LocalizacaoOrderByRelationAggregateInput
  }

  export type PessoaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: PessoaWhereInput | PessoaWhereInput[]
    OR?: PessoaWhereInput[]
    NOT?: PessoaWhereInput | PessoaWhereInput[]
    nome?: StringFilter<"Pessoa"> | string
    idade?: IntFilter<"Pessoa"> | number
    criadoEm?: DateTimeFilter<"Pessoa"> | Date | string
    localizacoes?: LocalizacaoListRelationFilter
  }, "id" | "email">

  export type PessoaOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    idade?: SortOrder
    email?: SortOrder
    criadoEm?: SortOrder
    _count?: PessoaCountOrderByAggregateInput
    _avg?: PessoaAvgOrderByAggregateInput
    _max?: PessoaMaxOrderByAggregateInput
    _min?: PessoaMinOrderByAggregateInput
    _sum?: PessoaSumOrderByAggregateInput
  }

  export type PessoaScalarWhereWithAggregatesInput = {
    AND?: PessoaScalarWhereWithAggregatesInput | PessoaScalarWhereWithAggregatesInput[]
    OR?: PessoaScalarWhereWithAggregatesInput[]
    NOT?: PessoaScalarWhereWithAggregatesInput | PessoaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Pessoa"> | string
    nome?: StringWithAggregatesFilter<"Pessoa"> | string
    idade?: IntWithAggregatesFilter<"Pessoa"> | number
    email?: StringWithAggregatesFilter<"Pessoa"> | string
    criadoEm?: DateTimeWithAggregatesFilter<"Pessoa"> | Date | string
  }

  export type ContatoWhereInput = {
    AND?: ContatoWhereInput | ContatoWhereInput[]
    OR?: ContatoWhereInput[]
    NOT?: ContatoWhereInput | ContatoWhereInput[]
    id?: StringFilter<"Contato"> | string
    nome?: StringFilter<"Contato"> | string
    email?: StringFilter<"Contato"> | string
    telefone?: StringNullableFilter<"Contato"> | string | null
    mensagem?: StringFilter<"Contato"> | string
    criadoEm?: DateTimeFilter<"Contato"> | Date | string
  }

  export type ContatoOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    telefone?: SortOrderInput | SortOrder
    mensagem?: SortOrder
    criadoEm?: SortOrder
  }

  export type ContatoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: ContatoWhereInput | ContatoWhereInput[]
    OR?: ContatoWhereInput[]
    NOT?: ContatoWhereInput | ContatoWhereInput[]
    nome?: StringFilter<"Contato"> | string
    telefone?: StringNullableFilter<"Contato"> | string | null
    mensagem?: StringFilter<"Contato"> | string
    criadoEm?: DateTimeFilter<"Contato"> | Date | string
  }, "id" | "email">

  export type ContatoOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    telefone?: SortOrderInput | SortOrder
    mensagem?: SortOrder
    criadoEm?: SortOrder
    _count?: ContatoCountOrderByAggregateInput
    _max?: ContatoMaxOrderByAggregateInput
    _min?: ContatoMinOrderByAggregateInput
  }

  export type ContatoScalarWhereWithAggregatesInput = {
    AND?: ContatoScalarWhereWithAggregatesInput | ContatoScalarWhereWithAggregatesInput[]
    OR?: ContatoScalarWhereWithAggregatesInput[]
    NOT?: ContatoScalarWhereWithAggregatesInput | ContatoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Contato"> | string
    nome?: StringWithAggregatesFilter<"Contato"> | string
    email?: StringWithAggregatesFilter<"Contato"> | string
    telefone?: StringNullableWithAggregatesFilter<"Contato"> | string | null
    mensagem?: StringWithAggregatesFilter<"Contato"> | string
    criadoEm?: DateTimeWithAggregatesFilter<"Contato"> | Date | string
  }

  export type USERWhereInput = {
    AND?: USERWhereInput | USERWhereInput[]
    OR?: USERWhereInput[]
    NOT?: USERWhereInput | USERWhereInput[]
    id?: IntFilter<"USER"> | number
    nome?: StringFilter<"USER"> | string
    email?: StringFilter<"USER"> | string
    senha_hash?: StringFilter<"USER"> | string
    tipo_usuario?: StringFilter<"USER"> | string
    dataCadastro?: DateTimeFilter<"USER"> | Date | string
    dataAtualizacao?: DateTimeFilter<"USER"> | Date | string
  }

  export type USEROrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha_hash?: SortOrder
    tipo_usuario?: SortOrder
    dataCadastro?: SortOrder
    dataAtualizacao?: SortOrder
  }

  export type USERWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: USERWhereInput | USERWhereInput[]
    OR?: USERWhereInput[]
    NOT?: USERWhereInput | USERWhereInput[]
    nome?: StringFilter<"USER"> | string
    senha_hash?: StringFilter<"USER"> | string
    tipo_usuario?: StringFilter<"USER"> | string
    dataCadastro?: DateTimeFilter<"USER"> | Date | string
    dataAtualizacao?: DateTimeFilter<"USER"> | Date | string
  }, "id" | "email">

  export type USEROrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha_hash?: SortOrder
    tipo_usuario?: SortOrder
    dataCadastro?: SortOrder
    dataAtualizacao?: SortOrder
    _count?: USERCountOrderByAggregateInput
    _avg?: USERAvgOrderByAggregateInput
    _max?: USERMaxOrderByAggregateInput
    _min?: USERMinOrderByAggregateInput
    _sum?: USERSumOrderByAggregateInput
  }

  export type USERScalarWhereWithAggregatesInput = {
    AND?: USERScalarWhereWithAggregatesInput | USERScalarWhereWithAggregatesInput[]
    OR?: USERScalarWhereWithAggregatesInput[]
    NOT?: USERScalarWhereWithAggregatesInput | USERScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"USER"> | number
    nome?: StringWithAggregatesFilter<"USER"> | string
    email?: StringWithAggregatesFilter<"USER"> | string
    senha_hash?: StringWithAggregatesFilter<"USER"> | string
    tipo_usuario?: StringWithAggregatesFilter<"USER"> | string
    dataCadastro?: DateTimeWithAggregatesFilter<"USER"> | Date | string
    dataAtualizacao?: DateTimeWithAggregatesFilter<"USER"> | Date | string
  }

  export type LocalizacaoWhereInput = {
    AND?: LocalizacaoWhereInput | LocalizacaoWhereInput[]
    OR?: LocalizacaoWhereInput[]
    NOT?: LocalizacaoWhereInput | LocalizacaoWhereInput[]
    id?: StringFilter<"Localizacao"> | string
    latitude?: FloatFilter<"Localizacao"> | number
    longitude?: FloatFilter<"Localizacao"> | number
    timestamp?: DateTimeFilter<"Localizacao"> | Date | string
    pessoaId?: StringFilter<"Localizacao"> | string
    pessoa?: XOR<PessoaScalarRelationFilter, PessoaWhereInput>
  }

  export type LocalizacaoOrderByWithRelationInput = {
    id?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    timestamp?: SortOrder
    pessoaId?: SortOrder
    pessoa?: PessoaOrderByWithRelationInput
  }

  export type LocalizacaoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LocalizacaoWhereInput | LocalizacaoWhereInput[]
    OR?: LocalizacaoWhereInput[]
    NOT?: LocalizacaoWhereInput | LocalizacaoWhereInput[]
    latitude?: FloatFilter<"Localizacao"> | number
    longitude?: FloatFilter<"Localizacao"> | number
    timestamp?: DateTimeFilter<"Localizacao"> | Date | string
    pessoaId?: StringFilter<"Localizacao"> | string
    pessoa?: XOR<PessoaScalarRelationFilter, PessoaWhereInput>
  }, "id">

  export type LocalizacaoOrderByWithAggregationInput = {
    id?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    timestamp?: SortOrder
    pessoaId?: SortOrder
    _count?: LocalizacaoCountOrderByAggregateInput
    _avg?: LocalizacaoAvgOrderByAggregateInput
    _max?: LocalizacaoMaxOrderByAggregateInput
    _min?: LocalizacaoMinOrderByAggregateInput
    _sum?: LocalizacaoSumOrderByAggregateInput
  }

  export type LocalizacaoScalarWhereWithAggregatesInput = {
    AND?: LocalizacaoScalarWhereWithAggregatesInput | LocalizacaoScalarWhereWithAggregatesInput[]
    OR?: LocalizacaoScalarWhereWithAggregatesInput[]
    NOT?: LocalizacaoScalarWhereWithAggregatesInput | LocalizacaoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Localizacao"> | string
    latitude?: FloatWithAggregatesFilter<"Localizacao"> | number
    longitude?: FloatWithAggregatesFilter<"Localizacao"> | number
    timestamp?: DateTimeWithAggregatesFilter<"Localizacao"> | Date | string
    pessoaId?: StringWithAggregatesFilter<"Localizacao"> | string
  }

  export type TipoServicoWhereInput = {
    AND?: TipoServicoWhereInput | TipoServicoWhereInput[]
    OR?: TipoServicoWhereInput[]
    NOT?: TipoServicoWhereInput | TipoServicoWhereInput[]
    id?: StringFilter<"TipoServico"> | string
    nome?: StringFilter<"TipoServico"> | string
    descricao?: StringNullableFilter<"TipoServico"> | string | null
    custoEstimado?: FloatNullableFilter<"TipoServico"> | number | null
    ativo?: BoolFilter<"TipoServico"> | boolean
    createdAt?: DateTimeFilter<"TipoServico"> | Date | string
    updatedAt?: DateTimeFilter<"TipoServico"> | Date | string
  }

  export type TipoServicoOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrderInput | SortOrder
    custoEstimado?: SortOrderInput | SortOrder
    ativo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TipoServicoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    nome?: string
    AND?: TipoServicoWhereInput | TipoServicoWhereInput[]
    OR?: TipoServicoWhereInput[]
    NOT?: TipoServicoWhereInput | TipoServicoWhereInput[]
    descricao?: StringNullableFilter<"TipoServico"> | string | null
    custoEstimado?: FloatNullableFilter<"TipoServico"> | number | null
    ativo?: BoolFilter<"TipoServico"> | boolean
    createdAt?: DateTimeFilter<"TipoServico"> | Date | string
    updatedAt?: DateTimeFilter<"TipoServico"> | Date | string
  }, "id" | "nome">

  export type TipoServicoOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrderInput | SortOrder
    custoEstimado?: SortOrderInput | SortOrder
    ativo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TipoServicoCountOrderByAggregateInput
    _avg?: TipoServicoAvgOrderByAggregateInput
    _max?: TipoServicoMaxOrderByAggregateInput
    _min?: TipoServicoMinOrderByAggregateInput
    _sum?: TipoServicoSumOrderByAggregateInput
  }

  export type TipoServicoScalarWhereWithAggregatesInput = {
    AND?: TipoServicoScalarWhereWithAggregatesInput | TipoServicoScalarWhereWithAggregatesInput[]
    OR?: TipoServicoScalarWhereWithAggregatesInput[]
    NOT?: TipoServicoScalarWhereWithAggregatesInput | TipoServicoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TipoServico"> | string
    nome?: StringWithAggregatesFilter<"TipoServico"> | string
    descricao?: StringNullableWithAggregatesFilter<"TipoServico"> | string | null
    custoEstimado?: FloatNullableWithAggregatesFilter<"TipoServico"> | number | null
    ativo?: BoolWithAggregatesFilter<"TipoServico"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"TipoServico"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"TipoServico"> | Date | string
  }

  export type AvistamentoCreateInput = {
    dataHora?: Date | string
    comentario: string
    localAvistamento?: string | null
    latitude?: number | null
    longitude?: number | null
    nomeInformante?: string | null
    contatoInformante?: string | null
    dataCadastro?: Date | string
    dataAtualizacao?: Date | string
    pessoaDesaparecida: PessoaDesaparecidaCreateNestedOneWithoutAvistamentosInput
  }

  export type AvistamentoUncheckedCreateInput = {
    id?: number
    idPessoaDesaparecida: number
    dataHora?: Date | string
    comentario: string
    localAvistamento?: string | null
    latitude?: number | null
    longitude?: number | null
    nomeInformante?: string | null
    contatoInformante?: string | null
    dataCadastro?: Date | string
    dataAtualizacao?: Date | string
  }

  export type AvistamentoUpdateInput = {
    dataHora?: DateTimeFieldUpdateOperationsInput | Date | string
    comentario?: StringFieldUpdateOperationsInput | string
    localAvistamento?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    nomeInformante?: NullableStringFieldUpdateOperationsInput | string | null
    contatoInformante?: NullableStringFieldUpdateOperationsInput | string | null
    dataCadastro?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    pessoaDesaparecida?: PessoaDesaparecidaUpdateOneRequiredWithoutAvistamentosNestedInput
  }

  export type AvistamentoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    idPessoaDesaparecida?: IntFieldUpdateOperationsInput | number
    dataHora?: DateTimeFieldUpdateOperationsInput | Date | string
    comentario?: StringFieldUpdateOperationsInput | string
    localAvistamento?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    nomeInformante?: NullableStringFieldUpdateOperationsInput | string | null
    contatoInformante?: NullableStringFieldUpdateOperationsInput | string | null
    dataCadastro?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AvistamentoCreateManyInput = {
    id?: number
    idPessoaDesaparecida: number
    dataHora?: Date | string
    comentario: string
    localAvistamento?: string | null
    latitude?: number | null
    longitude?: number | null
    nomeInformante?: string | null
    contatoInformante?: string | null
    dataCadastro?: Date | string
    dataAtualizacao?: Date | string
  }

  export type AvistamentoUpdateManyMutationInput = {
    dataHora?: DateTimeFieldUpdateOperationsInput | Date | string
    comentario?: StringFieldUpdateOperationsInput | string
    localAvistamento?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    nomeInformante?: NullableStringFieldUpdateOperationsInput | string | null
    contatoInformante?: NullableStringFieldUpdateOperationsInput | string | null
    dataCadastro?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AvistamentoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    idPessoaDesaparecida?: IntFieldUpdateOperationsInput | number
    dataHora?: DateTimeFieldUpdateOperationsInput | Date | string
    comentario?: StringFieldUpdateOperationsInput | string
    localAvistamento?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    nomeInformante?: NullableStringFieldUpdateOperationsInput | string | null
    contatoInformante?: NullableStringFieldUpdateOperationsInput | string | null
    dataCadastro?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PessoaDesaparecidaCreateInput = {
    nome: string
    idade: number
    dataDesaparecimento: Date | string
    descricao?: string | null
    status?: $Enums.status
    dataCadastro?: Date | string
    dataAtualizacao?: Date | string
    avistamentos?: AvistamentoCreateNestedManyWithoutPessoaDesaparecidaInput
  }

  export type PessoaDesaparecidaUncheckedCreateInput = {
    id?: number
    nome: string
    idade: number
    dataDesaparecimento: Date | string
    descricao?: string | null
    status?: $Enums.status
    dataCadastro?: Date | string
    dataAtualizacao?: Date | string
    avistamentos?: AvistamentoUncheckedCreateNestedManyWithoutPessoaDesaparecidaInput
  }

  export type PessoaDesaparecidaUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    idade?: IntFieldUpdateOperationsInput | number
    dataDesaparecimento?: DateTimeFieldUpdateOperationsInput | Date | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumstatusFieldUpdateOperationsInput | $Enums.status
    dataCadastro?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    avistamentos?: AvistamentoUpdateManyWithoutPessoaDesaparecidaNestedInput
  }

  export type PessoaDesaparecidaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    idade?: IntFieldUpdateOperationsInput | number
    dataDesaparecimento?: DateTimeFieldUpdateOperationsInput | Date | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumstatusFieldUpdateOperationsInput | $Enums.status
    dataCadastro?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    avistamentos?: AvistamentoUncheckedUpdateManyWithoutPessoaDesaparecidaNestedInput
  }

  export type PessoaDesaparecidaCreateManyInput = {
    id?: number
    nome: string
    idade: number
    dataDesaparecimento: Date | string
    descricao?: string | null
    status?: $Enums.status
    dataCadastro?: Date | string
    dataAtualizacao?: Date | string
  }

  export type PessoaDesaparecidaUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    idade?: IntFieldUpdateOperationsInput | number
    dataDesaparecimento?: DateTimeFieldUpdateOperationsInput | Date | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumstatusFieldUpdateOperationsInput | $Enums.status
    dataCadastro?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PessoaDesaparecidaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    idade?: IntFieldUpdateOperationsInput | number
    dataDesaparecimento?: DateTimeFieldUpdateOperationsInput | Date | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumstatusFieldUpdateOperationsInput | $Enums.status
    dataCadastro?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PessoaCreateInput = {
    id?: string
    nome: string
    idade: number
    email: string
    criadoEm?: Date | string
    localizacoes?: LocalizacaoCreateNestedManyWithoutPessoaInput
  }

  export type PessoaUncheckedCreateInput = {
    id?: string
    nome: string
    idade: number
    email: string
    criadoEm?: Date | string
    localizacoes?: LocalizacaoUncheckedCreateNestedManyWithoutPessoaInput
  }

  export type PessoaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    idade?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    localizacoes?: LocalizacaoUpdateManyWithoutPessoaNestedInput
  }

  export type PessoaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    idade?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    localizacoes?: LocalizacaoUncheckedUpdateManyWithoutPessoaNestedInput
  }

  export type PessoaCreateManyInput = {
    id?: string
    nome: string
    idade: number
    email: string
    criadoEm?: Date | string
  }

  export type PessoaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    idade?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PessoaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    idade?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContatoCreateInput = {
    id?: string
    nome: string
    email: string
    telefone?: string | null
    mensagem: string
    criadoEm?: Date | string
  }

  export type ContatoUncheckedCreateInput = {
    id?: string
    nome: string
    email: string
    telefone?: string | null
    mensagem: string
    criadoEm?: Date | string
  }

  export type ContatoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    mensagem?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContatoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    mensagem?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContatoCreateManyInput = {
    id?: string
    nome: string
    email: string
    telefone?: string | null
    mensagem: string
    criadoEm?: Date | string
  }

  export type ContatoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    mensagem?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContatoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    mensagem?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type USERCreateInput = {
    nome: string
    email: string
    senha_hash: string
    tipo_usuario: string
    dataCadastro?: Date | string
    dataAtualizacao?: Date | string
  }

  export type USERUncheckedCreateInput = {
    id?: number
    nome: string
    email: string
    senha_hash: string
    tipo_usuario: string
    dataCadastro?: Date | string
    dataAtualizacao?: Date | string
  }

  export type USERUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha_hash?: StringFieldUpdateOperationsInput | string
    tipo_usuario?: StringFieldUpdateOperationsInput | string
    dataCadastro?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type USERUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha_hash?: StringFieldUpdateOperationsInput | string
    tipo_usuario?: StringFieldUpdateOperationsInput | string
    dataCadastro?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type USERCreateManyInput = {
    id?: number
    nome: string
    email: string
    senha_hash: string
    tipo_usuario: string
    dataCadastro?: Date | string
    dataAtualizacao?: Date | string
  }

  export type USERUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha_hash?: StringFieldUpdateOperationsInput | string
    tipo_usuario?: StringFieldUpdateOperationsInput | string
    dataCadastro?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type USERUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha_hash?: StringFieldUpdateOperationsInput | string
    tipo_usuario?: StringFieldUpdateOperationsInput | string
    dataCadastro?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LocalizacaoCreateInput = {
    id?: string
    latitude: number
    longitude: number
    timestamp?: Date | string
    pessoa: PessoaCreateNestedOneWithoutLocalizacoesInput
  }

  export type LocalizacaoUncheckedCreateInput = {
    id?: string
    latitude: number
    longitude: number
    timestamp?: Date | string
    pessoaId: string
  }

  export type LocalizacaoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    pessoa?: PessoaUpdateOneRequiredWithoutLocalizacoesNestedInput
  }

  export type LocalizacaoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    pessoaId?: StringFieldUpdateOperationsInput | string
  }

  export type LocalizacaoCreateManyInput = {
    id?: string
    latitude: number
    longitude: number
    timestamp?: Date | string
    pessoaId: string
  }

  export type LocalizacaoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LocalizacaoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    pessoaId?: StringFieldUpdateOperationsInput | string
  }

  export type TipoServicoCreateInput = {
    id?: string
    nome: string
    descricao?: string | null
    custoEstimado?: number | null
    ativo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TipoServicoUncheckedCreateInput = {
    id?: string
    nome: string
    descricao?: string | null
    custoEstimado?: number | null
    ativo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TipoServicoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    custoEstimado?: NullableFloatFieldUpdateOperationsInput | number | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TipoServicoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    custoEstimado?: NullableFloatFieldUpdateOperationsInput | number | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TipoServicoCreateManyInput = {
    id?: string
    nome: string
    descricao?: string | null
    custoEstimado?: number | null
    ativo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TipoServicoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    custoEstimado?: NullableFloatFieldUpdateOperationsInput | number | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TipoServicoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    custoEstimado?: NullableFloatFieldUpdateOperationsInput | number | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type PessoaDesaparecidaScalarRelationFilter = {
    is?: PessoaDesaparecidaWhereInput
    isNot?: PessoaDesaparecidaWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AvistamentoCountOrderByAggregateInput = {
    id?: SortOrder
    idPessoaDesaparecida?: SortOrder
    dataHora?: SortOrder
    comentario?: SortOrder
    localAvistamento?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    nomeInformante?: SortOrder
    contatoInformante?: SortOrder
    dataCadastro?: SortOrder
    dataAtualizacao?: SortOrder
  }

  export type AvistamentoAvgOrderByAggregateInput = {
    id?: SortOrder
    idPessoaDesaparecida?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type AvistamentoMaxOrderByAggregateInput = {
    id?: SortOrder
    idPessoaDesaparecida?: SortOrder
    dataHora?: SortOrder
    comentario?: SortOrder
    localAvistamento?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    nomeInformante?: SortOrder
    contatoInformante?: SortOrder
    dataCadastro?: SortOrder
    dataAtualizacao?: SortOrder
  }

  export type AvistamentoMinOrderByAggregateInput = {
    id?: SortOrder
    idPessoaDesaparecida?: SortOrder
    dataHora?: SortOrder
    comentario?: SortOrder
    localAvistamento?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    nomeInformante?: SortOrder
    contatoInformante?: SortOrder
    dataCadastro?: SortOrder
    dataAtualizacao?: SortOrder
  }

  export type AvistamentoSumOrderByAggregateInput = {
    id?: SortOrder
    idPessoaDesaparecida?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
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

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type EnumstatusFilter<$PrismaModel = never> = {
    equals?: $Enums.status | EnumstatusFieldRefInput<$PrismaModel>
    in?: $Enums.status[]
    notIn?: $Enums.status[]
    not?: NestedEnumstatusFilter<$PrismaModel> | $Enums.status
  }

  export type AvistamentoListRelationFilter = {
    every?: AvistamentoWhereInput
    some?: AvistamentoWhereInput
    none?: AvistamentoWhereInput
  }

  export type AvistamentoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PessoaDesaparecidaCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    idade?: SortOrder
    dataDesaparecimento?: SortOrder
    descricao?: SortOrder
    status?: SortOrder
    dataCadastro?: SortOrder
    dataAtualizacao?: SortOrder
  }

  export type PessoaDesaparecidaAvgOrderByAggregateInput = {
    id?: SortOrder
    idade?: SortOrder
  }

  export type PessoaDesaparecidaMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    idade?: SortOrder
    dataDesaparecimento?: SortOrder
    descricao?: SortOrder
    status?: SortOrder
    dataCadastro?: SortOrder
    dataAtualizacao?: SortOrder
  }

  export type PessoaDesaparecidaMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    idade?: SortOrder
    dataDesaparecimento?: SortOrder
    descricao?: SortOrder
    status?: SortOrder
    dataCadastro?: SortOrder
    dataAtualizacao?: SortOrder
  }

  export type PessoaDesaparecidaSumOrderByAggregateInput = {
    id?: SortOrder
    idade?: SortOrder
  }

  export type EnumstatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.status | EnumstatusFieldRefInput<$PrismaModel>
    in?: $Enums.status[]
    notIn?: $Enums.status[]
    not?: NestedEnumstatusWithAggregatesFilter<$PrismaModel> | $Enums.status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumstatusFilter<$PrismaModel>
    _max?: NestedEnumstatusFilter<$PrismaModel>
  }

  export type LocalizacaoListRelationFilter = {
    every?: LocalizacaoWhereInput
    some?: LocalizacaoWhereInput
    none?: LocalizacaoWhereInput
  }

  export type LocalizacaoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PessoaCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    idade?: SortOrder
    email?: SortOrder
    criadoEm?: SortOrder
  }

  export type PessoaAvgOrderByAggregateInput = {
    idade?: SortOrder
  }

  export type PessoaMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    idade?: SortOrder
    email?: SortOrder
    criadoEm?: SortOrder
  }

  export type PessoaMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    idade?: SortOrder
    email?: SortOrder
    criadoEm?: SortOrder
  }

  export type PessoaSumOrderByAggregateInput = {
    idade?: SortOrder
  }

  export type ContatoCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    telefone?: SortOrder
    mensagem?: SortOrder
    criadoEm?: SortOrder
  }

  export type ContatoMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    telefone?: SortOrder
    mensagem?: SortOrder
    criadoEm?: SortOrder
  }

  export type ContatoMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    telefone?: SortOrder
    mensagem?: SortOrder
    criadoEm?: SortOrder
  }

  export type USERCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha_hash?: SortOrder
    tipo_usuario?: SortOrder
    dataCadastro?: SortOrder
    dataAtualizacao?: SortOrder
  }

  export type USERAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type USERMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha_hash?: SortOrder
    tipo_usuario?: SortOrder
    dataCadastro?: SortOrder
    dataAtualizacao?: SortOrder
  }

  export type USERMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha_hash?: SortOrder
    tipo_usuario?: SortOrder
    dataCadastro?: SortOrder
    dataAtualizacao?: SortOrder
  }

  export type USERSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type PessoaScalarRelationFilter = {
    is?: PessoaWhereInput
    isNot?: PessoaWhereInput
  }

  export type LocalizacaoCountOrderByAggregateInput = {
    id?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    timestamp?: SortOrder
    pessoaId?: SortOrder
  }

  export type LocalizacaoAvgOrderByAggregateInput = {
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type LocalizacaoMaxOrderByAggregateInput = {
    id?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    timestamp?: SortOrder
    pessoaId?: SortOrder
  }

  export type LocalizacaoMinOrderByAggregateInput = {
    id?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    timestamp?: SortOrder
    pessoaId?: SortOrder
  }

  export type LocalizacaoSumOrderByAggregateInput = {
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type TipoServicoCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    custoEstimado?: SortOrder
    ativo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TipoServicoAvgOrderByAggregateInput = {
    custoEstimado?: SortOrder
  }

  export type TipoServicoMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    custoEstimado?: SortOrder
    ativo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TipoServicoMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    custoEstimado?: SortOrder
    ativo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TipoServicoSumOrderByAggregateInput = {
    custoEstimado?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type PessoaDesaparecidaCreateNestedOneWithoutAvistamentosInput = {
    create?: XOR<PessoaDesaparecidaCreateWithoutAvistamentosInput, PessoaDesaparecidaUncheckedCreateWithoutAvistamentosInput>
    connectOrCreate?: PessoaDesaparecidaCreateOrConnectWithoutAvistamentosInput
    connect?: PessoaDesaparecidaWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PessoaDesaparecidaUpdateOneRequiredWithoutAvistamentosNestedInput = {
    create?: XOR<PessoaDesaparecidaCreateWithoutAvistamentosInput, PessoaDesaparecidaUncheckedCreateWithoutAvistamentosInput>
    connectOrCreate?: PessoaDesaparecidaCreateOrConnectWithoutAvistamentosInput
    upsert?: PessoaDesaparecidaUpsertWithoutAvistamentosInput
    connect?: PessoaDesaparecidaWhereUniqueInput
    update?: XOR<XOR<PessoaDesaparecidaUpdateToOneWithWhereWithoutAvistamentosInput, PessoaDesaparecidaUpdateWithoutAvistamentosInput>, PessoaDesaparecidaUncheckedUpdateWithoutAvistamentosInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type AvistamentoCreateNestedManyWithoutPessoaDesaparecidaInput = {
    create?: XOR<AvistamentoCreateWithoutPessoaDesaparecidaInput, AvistamentoUncheckedCreateWithoutPessoaDesaparecidaInput> | AvistamentoCreateWithoutPessoaDesaparecidaInput[] | AvistamentoUncheckedCreateWithoutPessoaDesaparecidaInput[]
    connectOrCreate?: AvistamentoCreateOrConnectWithoutPessoaDesaparecidaInput | AvistamentoCreateOrConnectWithoutPessoaDesaparecidaInput[]
    createMany?: AvistamentoCreateManyPessoaDesaparecidaInputEnvelope
    connect?: AvistamentoWhereUniqueInput | AvistamentoWhereUniqueInput[]
  }

  export type AvistamentoUncheckedCreateNestedManyWithoutPessoaDesaparecidaInput = {
    create?: XOR<AvistamentoCreateWithoutPessoaDesaparecidaInput, AvistamentoUncheckedCreateWithoutPessoaDesaparecidaInput> | AvistamentoCreateWithoutPessoaDesaparecidaInput[] | AvistamentoUncheckedCreateWithoutPessoaDesaparecidaInput[]
    connectOrCreate?: AvistamentoCreateOrConnectWithoutPessoaDesaparecidaInput | AvistamentoCreateOrConnectWithoutPessoaDesaparecidaInput[]
    createMany?: AvistamentoCreateManyPessoaDesaparecidaInputEnvelope
    connect?: AvistamentoWhereUniqueInput | AvistamentoWhereUniqueInput[]
  }

  export type EnumstatusFieldUpdateOperationsInput = {
    set?: $Enums.status
  }

  export type AvistamentoUpdateManyWithoutPessoaDesaparecidaNestedInput = {
    create?: XOR<AvistamentoCreateWithoutPessoaDesaparecidaInput, AvistamentoUncheckedCreateWithoutPessoaDesaparecidaInput> | AvistamentoCreateWithoutPessoaDesaparecidaInput[] | AvistamentoUncheckedCreateWithoutPessoaDesaparecidaInput[]
    connectOrCreate?: AvistamentoCreateOrConnectWithoutPessoaDesaparecidaInput | AvistamentoCreateOrConnectWithoutPessoaDesaparecidaInput[]
    upsert?: AvistamentoUpsertWithWhereUniqueWithoutPessoaDesaparecidaInput | AvistamentoUpsertWithWhereUniqueWithoutPessoaDesaparecidaInput[]
    createMany?: AvistamentoCreateManyPessoaDesaparecidaInputEnvelope
    set?: AvistamentoWhereUniqueInput | AvistamentoWhereUniqueInput[]
    disconnect?: AvistamentoWhereUniqueInput | AvistamentoWhereUniqueInput[]
    delete?: AvistamentoWhereUniqueInput | AvistamentoWhereUniqueInput[]
    connect?: AvistamentoWhereUniqueInput | AvistamentoWhereUniqueInput[]
    update?: AvistamentoUpdateWithWhereUniqueWithoutPessoaDesaparecidaInput | AvistamentoUpdateWithWhereUniqueWithoutPessoaDesaparecidaInput[]
    updateMany?: AvistamentoUpdateManyWithWhereWithoutPessoaDesaparecidaInput | AvistamentoUpdateManyWithWhereWithoutPessoaDesaparecidaInput[]
    deleteMany?: AvistamentoScalarWhereInput | AvistamentoScalarWhereInput[]
  }

  export type AvistamentoUncheckedUpdateManyWithoutPessoaDesaparecidaNestedInput = {
    create?: XOR<AvistamentoCreateWithoutPessoaDesaparecidaInput, AvistamentoUncheckedCreateWithoutPessoaDesaparecidaInput> | AvistamentoCreateWithoutPessoaDesaparecidaInput[] | AvistamentoUncheckedCreateWithoutPessoaDesaparecidaInput[]
    connectOrCreate?: AvistamentoCreateOrConnectWithoutPessoaDesaparecidaInput | AvistamentoCreateOrConnectWithoutPessoaDesaparecidaInput[]
    upsert?: AvistamentoUpsertWithWhereUniqueWithoutPessoaDesaparecidaInput | AvistamentoUpsertWithWhereUniqueWithoutPessoaDesaparecidaInput[]
    createMany?: AvistamentoCreateManyPessoaDesaparecidaInputEnvelope
    set?: AvistamentoWhereUniqueInput | AvistamentoWhereUniqueInput[]
    disconnect?: AvistamentoWhereUniqueInput | AvistamentoWhereUniqueInput[]
    delete?: AvistamentoWhereUniqueInput | AvistamentoWhereUniqueInput[]
    connect?: AvistamentoWhereUniqueInput | AvistamentoWhereUniqueInput[]
    update?: AvistamentoUpdateWithWhereUniqueWithoutPessoaDesaparecidaInput | AvistamentoUpdateWithWhereUniqueWithoutPessoaDesaparecidaInput[]
    updateMany?: AvistamentoUpdateManyWithWhereWithoutPessoaDesaparecidaInput | AvistamentoUpdateManyWithWhereWithoutPessoaDesaparecidaInput[]
    deleteMany?: AvistamentoScalarWhereInput | AvistamentoScalarWhereInput[]
  }

  export type LocalizacaoCreateNestedManyWithoutPessoaInput = {
    create?: XOR<LocalizacaoCreateWithoutPessoaInput, LocalizacaoUncheckedCreateWithoutPessoaInput> | LocalizacaoCreateWithoutPessoaInput[] | LocalizacaoUncheckedCreateWithoutPessoaInput[]
    connectOrCreate?: LocalizacaoCreateOrConnectWithoutPessoaInput | LocalizacaoCreateOrConnectWithoutPessoaInput[]
    createMany?: LocalizacaoCreateManyPessoaInputEnvelope
    connect?: LocalizacaoWhereUniqueInput | LocalizacaoWhereUniqueInput[]
  }

  export type LocalizacaoUncheckedCreateNestedManyWithoutPessoaInput = {
    create?: XOR<LocalizacaoCreateWithoutPessoaInput, LocalizacaoUncheckedCreateWithoutPessoaInput> | LocalizacaoCreateWithoutPessoaInput[] | LocalizacaoUncheckedCreateWithoutPessoaInput[]
    connectOrCreate?: LocalizacaoCreateOrConnectWithoutPessoaInput | LocalizacaoCreateOrConnectWithoutPessoaInput[]
    createMany?: LocalizacaoCreateManyPessoaInputEnvelope
    connect?: LocalizacaoWhereUniqueInput | LocalizacaoWhereUniqueInput[]
  }

  export type LocalizacaoUpdateManyWithoutPessoaNestedInput = {
    create?: XOR<LocalizacaoCreateWithoutPessoaInput, LocalizacaoUncheckedCreateWithoutPessoaInput> | LocalizacaoCreateWithoutPessoaInput[] | LocalizacaoUncheckedCreateWithoutPessoaInput[]
    connectOrCreate?: LocalizacaoCreateOrConnectWithoutPessoaInput | LocalizacaoCreateOrConnectWithoutPessoaInput[]
    upsert?: LocalizacaoUpsertWithWhereUniqueWithoutPessoaInput | LocalizacaoUpsertWithWhereUniqueWithoutPessoaInput[]
    createMany?: LocalizacaoCreateManyPessoaInputEnvelope
    set?: LocalizacaoWhereUniqueInput | LocalizacaoWhereUniqueInput[]
    disconnect?: LocalizacaoWhereUniqueInput | LocalizacaoWhereUniqueInput[]
    delete?: LocalizacaoWhereUniqueInput | LocalizacaoWhereUniqueInput[]
    connect?: LocalizacaoWhereUniqueInput | LocalizacaoWhereUniqueInput[]
    update?: LocalizacaoUpdateWithWhereUniqueWithoutPessoaInput | LocalizacaoUpdateWithWhereUniqueWithoutPessoaInput[]
    updateMany?: LocalizacaoUpdateManyWithWhereWithoutPessoaInput | LocalizacaoUpdateManyWithWhereWithoutPessoaInput[]
    deleteMany?: LocalizacaoScalarWhereInput | LocalizacaoScalarWhereInput[]
  }

  export type LocalizacaoUncheckedUpdateManyWithoutPessoaNestedInput = {
    create?: XOR<LocalizacaoCreateWithoutPessoaInput, LocalizacaoUncheckedCreateWithoutPessoaInput> | LocalizacaoCreateWithoutPessoaInput[] | LocalizacaoUncheckedCreateWithoutPessoaInput[]
    connectOrCreate?: LocalizacaoCreateOrConnectWithoutPessoaInput | LocalizacaoCreateOrConnectWithoutPessoaInput[]
    upsert?: LocalizacaoUpsertWithWhereUniqueWithoutPessoaInput | LocalizacaoUpsertWithWhereUniqueWithoutPessoaInput[]
    createMany?: LocalizacaoCreateManyPessoaInputEnvelope
    set?: LocalizacaoWhereUniqueInput | LocalizacaoWhereUniqueInput[]
    disconnect?: LocalizacaoWhereUniqueInput | LocalizacaoWhereUniqueInput[]
    delete?: LocalizacaoWhereUniqueInput | LocalizacaoWhereUniqueInput[]
    connect?: LocalizacaoWhereUniqueInput | LocalizacaoWhereUniqueInput[]
    update?: LocalizacaoUpdateWithWhereUniqueWithoutPessoaInput | LocalizacaoUpdateWithWhereUniqueWithoutPessoaInput[]
    updateMany?: LocalizacaoUpdateManyWithWhereWithoutPessoaInput | LocalizacaoUpdateManyWithWhereWithoutPessoaInput[]
    deleteMany?: LocalizacaoScalarWhereInput | LocalizacaoScalarWhereInput[]
  }

  export type PessoaCreateNestedOneWithoutLocalizacoesInput = {
    create?: XOR<PessoaCreateWithoutLocalizacoesInput, PessoaUncheckedCreateWithoutLocalizacoesInput>
    connectOrCreate?: PessoaCreateOrConnectWithoutLocalizacoesInput
    connect?: PessoaWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PessoaUpdateOneRequiredWithoutLocalizacoesNestedInput = {
    create?: XOR<PessoaCreateWithoutLocalizacoesInput, PessoaUncheckedCreateWithoutLocalizacoesInput>
    connectOrCreate?: PessoaCreateOrConnectWithoutLocalizacoesInput
    upsert?: PessoaUpsertWithoutLocalizacoesInput
    connect?: PessoaWhereUniqueInput
    update?: XOR<XOR<PessoaUpdateToOneWithWhereWithoutLocalizacoesInput, PessoaUpdateWithoutLocalizacoesInput>, PessoaUncheckedUpdateWithoutLocalizacoesInput>
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
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

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedEnumstatusFilter<$PrismaModel = never> = {
    equals?: $Enums.status | EnumstatusFieldRefInput<$PrismaModel>
    in?: $Enums.status[]
    notIn?: $Enums.status[]
    not?: NestedEnumstatusFilter<$PrismaModel> | $Enums.status
  }

  export type NestedEnumstatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.status | EnumstatusFieldRefInput<$PrismaModel>
    in?: $Enums.status[]
    notIn?: $Enums.status[]
    not?: NestedEnumstatusWithAggregatesFilter<$PrismaModel> | $Enums.status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumstatusFilter<$PrismaModel>
    _max?: NestedEnumstatusFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type PessoaDesaparecidaCreateWithoutAvistamentosInput = {
    nome: string
    idade: number
    dataDesaparecimento: Date | string
    descricao?: string | null
    status?: $Enums.status
    dataCadastro?: Date | string
    dataAtualizacao?: Date | string
  }

  export type PessoaDesaparecidaUncheckedCreateWithoutAvistamentosInput = {
    id?: number
    nome: string
    idade: number
    dataDesaparecimento: Date | string
    descricao?: string | null
    status?: $Enums.status
    dataCadastro?: Date | string
    dataAtualizacao?: Date | string
  }

  export type PessoaDesaparecidaCreateOrConnectWithoutAvistamentosInput = {
    where: PessoaDesaparecidaWhereUniqueInput
    create: XOR<PessoaDesaparecidaCreateWithoutAvistamentosInput, PessoaDesaparecidaUncheckedCreateWithoutAvistamentosInput>
  }

  export type PessoaDesaparecidaUpsertWithoutAvistamentosInput = {
    update: XOR<PessoaDesaparecidaUpdateWithoutAvistamentosInput, PessoaDesaparecidaUncheckedUpdateWithoutAvistamentosInput>
    create: XOR<PessoaDesaparecidaCreateWithoutAvistamentosInput, PessoaDesaparecidaUncheckedCreateWithoutAvistamentosInput>
    where?: PessoaDesaparecidaWhereInput
  }

  export type PessoaDesaparecidaUpdateToOneWithWhereWithoutAvistamentosInput = {
    where?: PessoaDesaparecidaWhereInput
    data: XOR<PessoaDesaparecidaUpdateWithoutAvistamentosInput, PessoaDesaparecidaUncheckedUpdateWithoutAvistamentosInput>
  }

  export type PessoaDesaparecidaUpdateWithoutAvistamentosInput = {
    nome?: StringFieldUpdateOperationsInput | string
    idade?: IntFieldUpdateOperationsInput | number
    dataDesaparecimento?: DateTimeFieldUpdateOperationsInput | Date | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumstatusFieldUpdateOperationsInput | $Enums.status
    dataCadastro?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PessoaDesaparecidaUncheckedUpdateWithoutAvistamentosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    idade?: IntFieldUpdateOperationsInput | number
    dataDesaparecimento?: DateTimeFieldUpdateOperationsInput | Date | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumstatusFieldUpdateOperationsInput | $Enums.status
    dataCadastro?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AvistamentoCreateWithoutPessoaDesaparecidaInput = {
    dataHora?: Date | string
    comentario: string
    localAvistamento?: string | null
    latitude?: number | null
    longitude?: number | null
    nomeInformante?: string | null
    contatoInformante?: string | null
    dataCadastro?: Date | string
    dataAtualizacao?: Date | string
  }

  export type AvistamentoUncheckedCreateWithoutPessoaDesaparecidaInput = {
    id?: number
    dataHora?: Date | string
    comentario: string
    localAvistamento?: string | null
    latitude?: number | null
    longitude?: number | null
    nomeInformante?: string | null
    contatoInformante?: string | null
    dataCadastro?: Date | string
    dataAtualizacao?: Date | string
  }

  export type AvistamentoCreateOrConnectWithoutPessoaDesaparecidaInput = {
    where: AvistamentoWhereUniqueInput
    create: XOR<AvistamentoCreateWithoutPessoaDesaparecidaInput, AvistamentoUncheckedCreateWithoutPessoaDesaparecidaInput>
  }

  export type AvistamentoCreateManyPessoaDesaparecidaInputEnvelope = {
    data: AvistamentoCreateManyPessoaDesaparecidaInput | AvistamentoCreateManyPessoaDesaparecidaInput[]
  }

  export type AvistamentoUpsertWithWhereUniqueWithoutPessoaDesaparecidaInput = {
    where: AvistamentoWhereUniqueInput
    update: XOR<AvistamentoUpdateWithoutPessoaDesaparecidaInput, AvistamentoUncheckedUpdateWithoutPessoaDesaparecidaInput>
    create: XOR<AvistamentoCreateWithoutPessoaDesaparecidaInput, AvistamentoUncheckedCreateWithoutPessoaDesaparecidaInput>
  }

  export type AvistamentoUpdateWithWhereUniqueWithoutPessoaDesaparecidaInput = {
    where: AvistamentoWhereUniqueInput
    data: XOR<AvistamentoUpdateWithoutPessoaDesaparecidaInput, AvistamentoUncheckedUpdateWithoutPessoaDesaparecidaInput>
  }

  export type AvistamentoUpdateManyWithWhereWithoutPessoaDesaparecidaInput = {
    where: AvistamentoScalarWhereInput
    data: XOR<AvistamentoUpdateManyMutationInput, AvistamentoUncheckedUpdateManyWithoutPessoaDesaparecidaInput>
  }

  export type AvistamentoScalarWhereInput = {
    AND?: AvistamentoScalarWhereInput | AvistamentoScalarWhereInput[]
    OR?: AvistamentoScalarWhereInput[]
    NOT?: AvistamentoScalarWhereInput | AvistamentoScalarWhereInput[]
    id?: IntFilter<"Avistamento"> | number
    idPessoaDesaparecida?: IntFilter<"Avistamento"> | number
    dataHora?: DateTimeFilter<"Avistamento"> | Date | string
    comentario?: StringFilter<"Avistamento"> | string
    localAvistamento?: StringNullableFilter<"Avistamento"> | string | null
    latitude?: FloatNullableFilter<"Avistamento"> | number | null
    longitude?: FloatNullableFilter<"Avistamento"> | number | null
    nomeInformante?: StringNullableFilter<"Avistamento"> | string | null
    contatoInformante?: StringNullableFilter<"Avistamento"> | string | null
    dataCadastro?: DateTimeFilter<"Avistamento"> | Date | string
    dataAtualizacao?: DateTimeFilter<"Avistamento"> | Date | string
  }

  export type LocalizacaoCreateWithoutPessoaInput = {
    id?: string
    latitude: number
    longitude: number
    timestamp?: Date | string
  }

  export type LocalizacaoUncheckedCreateWithoutPessoaInput = {
    id?: string
    latitude: number
    longitude: number
    timestamp?: Date | string
  }

  export type LocalizacaoCreateOrConnectWithoutPessoaInput = {
    where: LocalizacaoWhereUniqueInput
    create: XOR<LocalizacaoCreateWithoutPessoaInput, LocalizacaoUncheckedCreateWithoutPessoaInput>
  }

  export type LocalizacaoCreateManyPessoaInputEnvelope = {
    data: LocalizacaoCreateManyPessoaInput | LocalizacaoCreateManyPessoaInput[]
  }

  export type LocalizacaoUpsertWithWhereUniqueWithoutPessoaInput = {
    where: LocalizacaoWhereUniqueInput
    update: XOR<LocalizacaoUpdateWithoutPessoaInput, LocalizacaoUncheckedUpdateWithoutPessoaInput>
    create: XOR<LocalizacaoCreateWithoutPessoaInput, LocalizacaoUncheckedCreateWithoutPessoaInput>
  }

  export type LocalizacaoUpdateWithWhereUniqueWithoutPessoaInput = {
    where: LocalizacaoWhereUniqueInput
    data: XOR<LocalizacaoUpdateWithoutPessoaInput, LocalizacaoUncheckedUpdateWithoutPessoaInput>
  }

  export type LocalizacaoUpdateManyWithWhereWithoutPessoaInput = {
    where: LocalizacaoScalarWhereInput
    data: XOR<LocalizacaoUpdateManyMutationInput, LocalizacaoUncheckedUpdateManyWithoutPessoaInput>
  }

  export type LocalizacaoScalarWhereInput = {
    AND?: LocalizacaoScalarWhereInput | LocalizacaoScalarWhereInput[]
    OR?: LocalizacaoScalarWhereInput[]
    NOT?: LocalizacaoScalarWhereInput | LocalizacaoScalarWhereInput[]
    id?: StringFilter<"Localizacao"> | string
    latitude?: FloatFilter<"Localizacao"> | number
    longitude?: FloatFilter<"Localizacao"> | number
    timestamp?: DateTimeFilter<"Localizacao"> | Date | string
    pessoaId?: StringFilter<"Localizacao"> | string
  }

  export type PessoaCreateWithoutLocalizacoesInput = {
    id?: string
    nome: string
    idade: number
    email: string
    criadoEm?: Date | string
  }

  export type PessoaUncheckedCreateWithoutLocalizacoesInput = {
    id?: string
    nome: string
    idade: number
    email: string
    criadoEm?: Date | string
  }

  export type PessoaCreateOrConnectWithoutLocalizacoesInput = {
    where: PessoaWhereUniqueInput
    create: XOR<PessoaCreateWithoutLocalizacoesInput, PessoaUncheckedCreateWithoutLocalizacoesInput>
  }

  export type PessoaUpsertWithoutLocalizacoesInput = {
    update: XOR<PessoaUpdateWithoutLocalizacoesInput, PessoaUncheckedUpdateWithoutLocalizacoesInput>
    create: XOR<PessoaCreateWithoutLocalizacoesInput, PessoaUncheckedCreateWithoutLocalizacoesInput>
    where?: PessoaWhereInput
  }

  export type PessoaUpdateToOneWithWhereWithoutLocalizacoesInput = {
    where?: PessoaWhereInput
    data: XOR<PessoaUpdateWithoutLocalizacoesInput, PessoaUncheckedUpdateWithoutLocalizacoesInput>
  }

  export type PessoaUpdateWithoutLocalizacoesInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    idade?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PessoaUncheckedUpdateWithoutLocalizacoesInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    idade?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AvistamentoCreateManyPessoaDesaparecidaInput = {
    id?: number
    dataHora?: Date | string
    comentario: string
    localAvistamento?: string | null
    latitude?: number | null
    longitude?: number | null
    nomeInformante?: string | null
    contatoInformante?: string | null
    dataCadastro?: Date | string
    dataAtualizacao?: Date | string
  }

  export type AvistamentoUpdateWithoutPessoaDesaparecidaInput = {
    dataHora?: DateTimeFieldUpdateOperationsInput | Date | string
    comentario?: StringFieldUpdateOperationsInput | string
    localAvistamento?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    nomeInformante?: NullableStringFieldUpdateOperationsInput | string | null
    contatoInformante?: NullableStringFieldUpdateOperationsInput | string | null
    dataCadastro?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AvistamentoUncheckedUpdateWithoutPessoaDesaparecidaInput = {
    id?: IntFieldUpdateOperationsInput | number
    dataHora?: DateTimeFieldUpdateOperationsInput | Date | string
    comentario?: StringFieldUpdateOperationsInput | string
    localAvistamento?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    nomeInformante?: NullableStringFieldUpdateOperationsInput | string | null
    contatoInformante?: NullableStringFieldUpdateOperationsInput | string | null
    dataCadastro?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AvistamentoUncheckedUpdateManyWithoutPessoaDesaparecidaInput = {
    id?: IntFieldUpdateOperationsInput | number
    dataHora?: DateTimeFieldUpdateOperationsInput | Date | string
    comentario?: StringFieldUpdateOperationsInput | string
    localAvistamento?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    nomeInformante?: NullableStringFieldUpdateOperationsInput | string | null
    contatoInformante?: NullableStringFieldUpdateOperationsInput | string | null
    dataCadastro?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LocalizacaoCreateManyPessoaInput = {
    id?: string
    latitude: number
    longitude: number
    timestamp?: Date | string
  }

  export type LocalizacaoUpdateWithoutPessoaInput = {
    id?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LocalizacaoUncheckedUpdateWithoutPessoaInput = {
    id?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LocalizacaoUncheckedUpdateManyWithoutPessoaInput = {
    id?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
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