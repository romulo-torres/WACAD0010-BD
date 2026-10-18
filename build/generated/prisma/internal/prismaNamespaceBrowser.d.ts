import * as runtime from "@prisma/client/runtime/index-browser";
export type * from '../models.js';
export type * from './prismaNamespace.js';
export declare const Decimal: typeof runtime.Decimal;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
/**
 * Helper for filtering JSON entries that have `null` on the database (empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const DbNull: import("@prisma/client-runtime-utils").DbNullClass;
/**
 * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
/**
 * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const AnyNull: import("@prisma/client-runtime-utils").AnyNullClass;
export declare const ModelName: {
    readonly Consumidor: 'Consumidor';
    readonly Produto_Comprado: 'Produto_Comprado';
    readonly Enderecos: 'Enderecos';
    readonly Produto: 'Produto';
    readonly Numero_Serie: 'Numero_Serie';
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: 'ReadUncommitted';
    readonly ReadCommitted: 'ReadCommitted';
    readonly RepeatableRead: 'RepeatableRead';
    readonly Serializable: 'Serializable';
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const ConsumidorScalarFieldEnum: {
    readonly cpf: 'cpf';
    readonly nome: 'nome';
    readonly nascimento: 'nascimento';
    readonly telefone: 'telefone';
    readonly email: 'email';
};
export type ConsumidorScalarFieldEnum = (typeof ConsumidorScalarFieldEnum)[keyof typeof ConsumidorScalarFieldEnum];
export declare const Produto_CompradoScalarFieldEnum: {
    readonly idproduto_comprado: 'idproduto_comprado';
    readonly consumidor_cpf: 'consumidor_cpf';
    readonly codigo_produto: 'codigo_produto';
    readonly endereco_escolhido: 'endereco_escolhido';
    readonly data: 'data';
    readonly forma_pagamento: 'forma_pagamento';
    readonly preco_total: 'preco_total';
    readonly desconto: 'desconto';
};
export type Produto_CompradoScalarFieldEnum = (typeof Produto_CompradoScalarFieldEnum)[keyof typeof Produto_CompradoScalarFieldEnum];
export declare const EnderecosScalarFieldEnum: {
    readonly id_endereco: 'id_endereco';
    readonly consumidor_cpf: 'consumidor_cpf';
    readonly endereco: 'endereco';
};
export type EnderecosScalarFieldEnum = (typeof EnderecosScalarFieldEnum)[keyof typeof EnderecosScalarFieldEnum];
export declare const ProdutoScalarFieldEnum: {
    readonly codigo: 'codigo';
    readonly categoria: 'categoria';
    readonly subcategoria: 'subcategoria';
    readonly modelo: 'modelo';
    readonly fabricante: 'fabricante';
    readonly qtd: 'qtd';
    readonly preco: 'preco';
};
export type ProdutoScalarFieldEnum = (typeof ProdutoScalarFieldEnum)[keyof typeof ProdutoScalarFieldEnum];
export declare const Numero_SerieScalarFieldEnum: {
    readonly codigo_produto: 'codigo_produto';
    readonly numero_de_serie: 'numero_de_serie';
};
export type Numero_SerieScalarFieldEnum = (typeof Numero_SerieScalarFieldEnum)[keyof typeof Numero_SerieScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: 'asc';
    readonly desc: 'desc';
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const ConsumidorOrderByRelevanceFieldEnum: {
    readonly nome: 'nome';
    readonly telefone: 'telefone';
    readonly email: 'email';
};
export type ConsumidorOrderByRelevanceFieldEnum = (typeof ConsumidorOrderByRelevanceFieldEnum)[keyof typeof ConsumidorOrderByRelevanceFieldEnum];
export declare const NullsOrder: {
    readonly first: 'first';
    readonly last: 'last';
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
export declare const Produto_CompradoOrderByRelevanceFieldEnum: {
    readonly forma_pagamento: 'forma_pagamento';
};
export type Produto_CompradoOrderByRelevanceFieldEnum = (typeof Produto_CompradoOrderByRelevanceFieldEnum)[keyof typeof Produto_CompradoOrderByRelevanceFieldEnum];
export declare const EnderecosOrderByRelevanceFieldEnum: {
    readonly endereco: 'endereco';
};
export type EnderecosOrderByRelevanceFieldEnum = (typeof EnderecosOrderByRelevanceFieldEnum)[keyof typeof EnderecosOrderByRelevanceFieldEnum];
export declare const ProdutoOrderByRelevanceFieldEnum: {
    readonly categoria: 'categoria';
    readonly subcategoria: 'subcategoria';
    readonly modelo: 'modelo';
    readonly fabricante: 'fabricante';
};
export type ProdutoOrderByRelevanceFieldEnum = (typeof ProdutoOrderByRelevanceFieldEnum)[keyof typeof ProdutoOrderByRelevanceFieldEnum];
export declare const Numero_SerieOrderByRelevanceFieldEnum: {
    readonly numero_de_serie: 'numero_de_serie';
};
export type Numero_SerieOrderByRelevanceFieldEnum = (typeof Numero_SerieOrderByRelevanceFieldEnum)[keyof typeof Numero_SerieOrderByRelevanceFieldEnum];
//# sourceMappingURL=prismaNamespaceBrowser.d.ts.map