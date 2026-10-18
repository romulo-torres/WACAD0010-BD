import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model Numero_Serie
 *
 */
export type Numero_SerieModel = runtime.Types.Result.DefaultSelection<Prisma.$Numero_SeriePayload>;
export type AggregateNumero_Serie = {
    _count: Numero_SerieCountAggregateOutputType | null;
    _avg: Numero_SerieAvgAggregateOutputType | null;
    _sum: Numero_SerieSumAggregateOutputType | null;
    _min: Numero_SerieMinAggregateOutputType | null;
    _max: Numero_SerieMaxAggregateOutputType | null;
};
export type Numero_SerieAvgAggregateOutputType = {
    codigo_produto: number | null;
};
export type Numero_SerieSumAggregateOutputType = {
    codigo_produto: number | null;
};
export type Numero_SerieMinAggregateOutputType = {
    codigo_produto: number | null;
    numero_de_serie: string | null;
};
export type Numero_SerieMaxAggregateOutputType = {
    codigo_produto: number | null;
    numero_de_serie: string | null;
};
export type Numero_SerieCountAggregateOutputType = {
    codigo_produto: number;
    numero_de_serie: number;
    _all: number;
};
export type Numero_SerieAvgAggregateInputType = {
    codigo_produto?: true;
};
export type Numero_SerieSumAggregateInputType = {
    codigo_produto?: true;
};
export type Numero_SerieMinAggregateInputType = {
    codigo_produto?: true;
    numero_de_serie?: true;
};
export type Numero_SerieMaxAggregateInputType = {
    codigo_produto?: true;
    numero_de_serie?: true;
};
export type Numero_SerieCountAggregateInputType = {
    codigo_produto?: true;
    numero_de_serie?: true;
    _all?: true;
};
export type Numero_SerieAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Numero_Serie to aggregate.
     */
    where?: Prisma.Numero_SerieWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Numero_Series to fetch.
     */
    orderBy?: Prisma.Numero_SerieOrderByWithRelationInput | Prisma.Numero_SerieOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.Numero_SerieWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Numero_Series from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Numero_Series.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Numero_Series
    **/
    _count?: true | Numero_SerieCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: Numero_SerieAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: Numero_SerieSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: Numero_SerieMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: Numero_SerieMaxAggregateInputType;
};
export type GetNumero_SerieAggregateType<T extends Numero_SerieAggregateArgs> = {
    [P in keyof T & keyof AggregateNumero_Serie]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateNumero_Serie[P]> : Prisma.GetScalarType<T[P], AggregateNumero_Serie[P]>;
};
export type Numero_SerieGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.Numero_SerieWhereInput;
    orderBy?: Prisma.Numero_SerieOrderByWithAggregationInput | Prisma.Numero_SerieOrderByWithAggregationInput[];
    by: Prisma.Numero_SerieScalarFieldEnum[] | Prisma.Numero_SerieScalarFieldEnum;
    having?: Prisma.Numero_SerieScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Numero_SerieCountAggregateInputType | true;
    _avg?: Numero_SerieAvgAggregateInputType;
    _sum?: Numero_SerieSumAggregateInputType;
    _min?: Numero_SerieMinAggregateInputType;
    _max?: Numero_SerieMaxAggregateInputType;
};
export type Numero_SerieGroupByOutputType = {
    codigo_produto: number;
    numero_de_serie: string;
    _count: Numero_SerieCountAggregateOutputType | null;
    _avg: Numero_SerieAvgAggregateOutputType | null;
    _sum: Numero_SerieSumAggregateOutputType | null;
    _min: Numero_SerieMinAggregateOutputType | null;
    _max: Numero_SerieMaxAggregateOutputType | null;
};
export type GetNumero_SerieGroupByPayload<T extends Numero_SerieGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Numero_SerieGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Numero_SerieGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Numero_SerieGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Numero_SerieGroupByOutputType[P]>;
}>>;
export type Numero_SerieWhereInput = {
    AND?: Prisma.Numero_SerieWhereInput | Prisma.Numero_SerieWhereInput[];
    OR?: Prisma.Numero_SerieWhereInput[];
    NOT?: Prisma.Numero_SerieWhereInput | Prisma.Numero_SerieWhereInput[];
    codigo_produto?: Prisma.IntFilter<"Numero_Serie"> | number;
    numero_de_serie?: Prisma.StringFilter<"Numero_Serie"> | string;
    produto?: Prisma.XOR<Prisma.ProdutoScalarRelationFilter, Prisma.ProdutoWhereInput>;
};
export type Numero_SerieOrderByWithRelationInput = {
    codigo_produto?: Prisma.SortOrder;
    numero_de_serie?: Prisma.SortOrder;
    produto?: Prisma.ProdutoOrderByWithRelationInput;
    _relevance?: Prisma.Numero_SerieOrderByRelevanceInput;
};
export type Numero_SerieWhereUniqueInput = Prisma.AtLeast<{
    codigo_produto?: number;
    numero_de_serie?: string;
    AND?: Prisma.Numero_SerieWhereInput | Prisma.Numero_SerieWhereInput[];
    OR?: Prisma.Numero_SerieWhereInput[];
    NOT?: Prisma.Numero_SerieWhereInput | Prisma.Numero_SerieWhereInput[];
    produto?: Prisma.XOR<Prisma.ProdutoScalarRelationFilter, Prisma.ProdutoWhereInput>;
}, "codigo_produto" | "numero_de_serie">;
export type Numero_SerieOrderByWithAggregationInput = {
    codigo_produto?: Prisma.SortOrder;
    numero_de_serie?: Prisma.SortOrder;
    _count?: Prisma.Numero_SerieCountOrderByAggregateInput;
    _avg?: Prisma.Numero_SerieAvgOrderByAggregateInput;
    _max?: Prisma.Numero_SerieMaxOrderByAggregateInput;
    _min?: Prisma.Numero_SerieMinOrderByAggregateInput;
    _sum?: Prisma.Numero_SerieSumOrderByAggregateInput;
};
export type Numero_SerieScalarWhereWithAggregatesInput = {
    AND?: Prisma.Numero_SerieScalarWhereWithAggregatesInput | Prisma.Numero_SerieScalarWhereWithAggregatesInput[];
    OR?: Prisma.Numero_SerieScalarWhereWithAggregatesInput[];
    NOT?: Prisma.Numero_SerieScalarWhereWithAggregatesInput | Prisma.Numero_SerieScalarWhereWithAggregatesInput[];
    codigo_produto?: Prisma.IntWithAggregatesFilter<"Numero_Serie"> | number;
    numero_de_serie?: Prisma.StringWithAggregatesFilter<"Numero_Serie"> | string;
};
export type Numero_SerieCreateInput = {
    numero_de_serie: string;
    produto: Prisma.ProdutoCreateNestedOneWithoutNumeroSerieInput;
};
export type Numero_SerieUncheckedCreateInput = {
    codigo_produto: number;
    numero_de_serie: string;
};
export type Numero_SerieUpdateInput = {
    numero_de_serie?: Prisma.StringFieldUpdateOperationsInput | string;
    produto?: Prisma.ProdutoUpdateOneRequiredWithoutNumeroSerieNestedInput;
};
export type Numero_SerieUncheckedUpdateInput = {
    codigo_produto?: Prisma.IntFieldUpdateOperationsInput | number;
    numero_de_serie?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type Numero_SerieCreateManyInput = {
    codigo_produto: number;
    numero_de_serie: string;
};
export type Numero_SerieUpdateManyMutationInput = {
    numero_de_serie?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type Numero_SerieUncheckedUpdateManyInput = {
    codigo_produto?: Prisma.IntFieldUpdateOperationsInput | number;
    numero_de_serie?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type Numero_SerieNullableScalarRelationFilter = {
    is?: Prisma.Numero_SerieWhereInput | null;
    isNot?: Prisma.Numero_SerieWhereInput | null;
};
export type Numero_SerieOrderByRelevanceInput = {
    fields: Prisma.Numero_SerieOrderByRelevanceFieldEnum | Prisma.Numero_SerieOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type Numero_SerieCountOrderByAggregateInput = {
    codigo_produto?: Prisma.SortOrder;
    numero_de_serie?: Prisma.SortOrder;
};
export type Numero_SerieAvgOrderByAggregateInput = {
    codigo_produto?: Prisma.SortOrder;
};
export type Numero_SerieMaxOrderByAggregateInput = {
    codigo_produto?: Prisma.SortOrder;
    numero_de_serie?: Prisma.SortOrder;
};
export type Numero_SerieMinOrderByAggregateInput = {
    codigo_produto?: Prisma.SortOrder;
    numero_de_serie?: Prisma.SortOrder;
};
export type Numero_SerieSumOrderByAggregateInput = {
    codigo_produto?: Prisma.SortOrder;
};
export type Numero_SerieCreateNestedOneWithoutProdutoInput = {
    create?: Prisma.XOR<Prisma.Numero_SerieCreateWithoutProdutoInput, Prisma.Numero_SerieUncheckedCreateWithoutProdutoInput>;
    connectOrCreate?: Prisma.Numero_SerieCreateOrConnectWithoutProdutoInput;
    connect?: Prisma.Numero_SerieWhereUniqueInput;
};
export type Numero_SerieUncheckedCreateNestedOneWithoutProdutoInput = {
    create?: Prisma.XOR<Prisma.Numero_SerieCreateWithoutProdutoInput, Prisma.Numero_SerieUncheckedCreateWithoutProdutoInput>;
    connectOrCreate?: Prisma.Numero_SerieCreateOrConnectWithoutProdutoInput;
    connect?: Prisma.Numero_SerieWhereUniqueInput;
};
export type Numero_SerieUpdateOneWithoutProdutoNestedInput = {
    create?: Prisma.XOR<Prisma.Numero_SerieCreateWithoutProdutoInput, Prisma.Numero_SerieUncheckedCreateWithoutProdutoInput>;
    connectOrCreate?: Prisma.Numero_SerieCreateOrConnectWithoutProdutoInput;
    upsert?: Prisma.Numero_SerieUpsertWithoutProdutoInput;
    disconnect?: Prisma.Numero_SerieWhereInput | boolean;
    delete?: Prisma.Numero_SerieWhereInput | boolean;
    connect?: Prisma.Numero_SerieWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.Numero_SerieUpdateToOneWithWhereWithoutProdutoInput, Prisma.Numero_SerieUpdateWithoutProdutoInput>, Prisma.Numero_SerieUncheckedUpdateWithoutProdutoInput>;
};
export type Numero_SerieUncheckedUpdateOneWithoutProdutoNestedInput = {
    create?: Prisma.XOR<Prisma.Numero_SerieCreateWithoutProdutoInput, Prisma.Numero_SerieUncheckedCreateWithoutProdutoInput>;
    connectOrCreate?: Prisma.Numero_SerieCreateOrConnectWithoutProdutoInput;
    upsert?: Prisma.Numero_SerieUpsertWithoutProdutoInput;
    disconnect?: Prisma.Numero_SerieWhereInput | boolean;
    delete?: Prisma.Numero_SerieWhereInput | boolean;
    connect?: Prisma.Numero_SerieWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.Numero_SerieUpdateToOneWithWhereWithoutProdutoInput, Prisma.Numero_SerieUpdateWithoutProdutoInput>, Prisma.Numero_SerieUncheckedUpdateWithoutProdutoInput>;
};
export type Numero_SerieCreateWithoutProdutoInput = {
    numero_de_serie: string;
};
export type Numero_SerieUncheckedCreateWithoutProdutoInput = {
    numero_de_serie: string;
};
export type Numero_SerieCreateOrConnectWithoutProdutoInput = {
    where: Prisma.Numero_SerieWhereUniqueInput;
    create: Prisma.XOR<Prisma.Numero_SerieCreateWithoutProdutoInput, Prisma.Numero_SerieUncheckedCreateWithoutProdutoInput>;
};
export type Numero_SerieUpsertWithoutProdutoInput = {
    update: Prisma.XOR<Prisma.Numero_SerieUpdateWithoutProdutoInput, Prisma.Numero_SerieUncheckedUpdateWithoutProdutoInput>;
    create: Prisma.XOR<Prisma.Numero_SerieCreateWithoutProdutoInput, Prisma.Numero_SerieUncheckedCreateWithoutProdutoInput>;
    where?: Prisma.Numero_SerieWhereInput;
};
export type Numero_SerieUpdateToOneWithWhereWithoutProdutoInput = {
    where?: Prisma.Numero_SerieWhereInput;
    data: Prisma.XOR<Prisma.Numero_SerieUpdateWithoutProdutoInput, Prisma.Numero_SerieUncheckedUpdateWithoutProdutoInput>;
};
export type Numero_SerieUpdateWithoutProdutoInput = {
    numero_de_serie?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type Numero_SerieUncheckedUpdateWithoutProdutoInput = {
    numero_de_serie?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type Numero_SerieSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    codigo_produto?: boolean;
    numero_de_serie?: boolean;
    produto?: boolean | Prisma.ProdutoDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["numero_Serie"]>;
export type Numero_SerieSelectScalar = {
    codigo_produto?: boolean;
    numero_de_serie?: boolean;
};
export type Numero_SerieOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"codigo_produto" | "numero_de_serie", ExtArgs["result"]["numero_Serie"]>;
export type Numero_SerieInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    produto?: boolean | Prisma.ProdutoDefaultArgs<ExtArgs>;
};
export type $Numero_SeriePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Numero_Serie";
    objects: {
        produto: Prisma.$ProdutoPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        codigo_produto: number;
        numero_de_serie: string;
    }, ExtArgs["result"]["numero_Serie"]>;
    composites: {};
};
export type Numero_SerieGetPayload<S extends boolean | null | undefined | Numero_SerieDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$Numero_SeriePayload, S>;
export type Numero_SerieCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<Numero_SerieFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Numero_SerieCountAggregateInputType | true;
};
export interface Numero_SerieDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Numero_Serie'];
        meta: {
            name: 'Numero_Serie';
        };
    };
    /**
     * Find zero or one Numero_Serie that matches the filter.
     * @param {Numero_SerieFindUniqueArgs} args - Arguments to find a Numero_Serie
     * @example
     * // Get one Numero_Serie
     * const numero_Serie = await prisma.numero_Serie.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Numero_SerieFindUniqueArgs>(args: Prisma.SelectSubset<T, Numero_SerieFindUniqueArgs<ExtArgs>>): Prisma.Prisma__Numero_SerieClient<runtime.Types.Result.GetResult<Prisma.$Numero_SeriePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Numero_Serie that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Numero_SerieFindUniqueOrThrowArgs} args - Arguments to find a Numero_Serie
     * @example
     * // Get one Numero_Serie
     * const numero_Serie = await prisma.numero_Serie.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Numero_SerieFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, Numero_SerieFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__Numero_SerieClient<runtime.Types.Result.GetResult<Prisma.$Numero_SeriePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Numero_Serie that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Numero_SerieFindFirstArgs} args - Arguments to find a Numero_Serie
     * @example
     * // Get one Numero_Serie
     * const numero_Serie = await prisma.numero_Serie.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Numero_SerieFindFirstArgs>(args?: Prisma.SelectSubset<T, Numero_SerieFindFirstArgs<ExtArgs>>): Prisma.Prisma__Numero_SerieClient<runtime.Types.Result.GetResult<Prisma.$Numero_SeriePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Numero_Serie that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Numero_SerieFindFirstOrThrowArgs} args - Arguments to find a Numero_Serie
     * @example
     * // Get one Numero_Serie
     * const numero_Serie = await prisma.numero_Serie.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Numero_SerieFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, Numero_SerieFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__Numero_SerieClient<runtime.Types.Result.GetResult<Prisma.$Numero_SeriePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Numero_Series that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Numero_SerieFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Numero_Series
     * const numero_Series = await prisma.numero_Serie.findMany()
     *
     * // Get first 10 Numero_Series
     * const numero_Series = await prisma.numero_Serie.findMany({ take: 10 })
     *
     * // Only select the `codigo_produto`
     * const numero_SerieWithCodigo_produtoOnly = await prisma.numero_Serie.findMany({ select: { codigo_produto: true } })
     *
     */
    findMany<T extends Numero_SerieFindManyArgs>(args?: Prisma.SelectSubset<T, Numero_SerieFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$Numero_SeriePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Numero_Serie.
     * @param {Numero_SerieCreateArgs} args - Arguments to create a Numero_Serie.
     * @example
     * // Create one Numero_Serie
     * const Numero_Serie = await prisma.numero_Serie.create({
     *   data: {
     *     // ... data to create a Numero_Serie
     *   }
     * })
     *
     */
    create<T extends Numero_SerieCreateArgs>(args: Prisma.SelectSubset<T, Numero_SerieCreateArgs<ExtArgs>>): Prisma.Prisma__Numero_SerieClient<runtime.Types.Result.GetResult<Prisma.$Numero_SeriePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Numero_Series.
     * @param {Numero_SerieCreateManyArgs} args - Arguments to create many Numero_Series.
     * @example
     * // Create many Numero_Series
     * const numero_Serie = await prisma.numero_Serie.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends Numero_SerieCreateManyArgs>(args?: Prisma.SelectSubset<T, Numero_SerieCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Delete a Numero_Serie.
     * @param {Numero_SerieDeleteArgs} args - Arguments to delete one Numero_Serie.
     * @example
     * // Delete one Numero_Serie
     * const Numero_Serie = await prisma.numero_Serie.delete({
     *   where: {
     *     // ... filter to delete one Numero_Serie
     *   }
     * })
     *
     */
    delete<T extends Numero_SerieDeleteArgs>(args: Prisma.SelectSubset<T, Numero_SerieDeleteArgs<ExtArgs>>): Prisma.Prisma__Numero_SerieClient<runtime.Types.Result.GetResult<Prisma.$Numero_SeriePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Numero_Serie.
     * @param {Numero_SerieUpdateArgs} args - Arguments to update one Numero_Serie.
     * @example
     * // Update one Numero_Serie
     * const numero_Serie = await prisma.numero_Serie.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends Numero_SerieUpdateArgs>(args: Prisma.SelectSubset<T, Numero_SerieUpdateArgs<ExtArgs>>): Prisma.Prisma__Numero_SerieClient<runtime.Types.Result.GetResult<Prisma.$Numero_SeriePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Numero_Series.
     * @param {Numero_SerieDeleteManyArgs} args - Arguments to filter Numero_Series to delete.
     * @example
     * // Delete a few Numero_Series
     * const { count } = await prisma.numero_Serie.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends Numero_SerieDeleteManyArgs>(args?: Prisma.SelectSubset<T, Numero_SerieDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Numero_Series.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Numero_SerieUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Numero_Series
     * const numero_Serie = await prisma.numero_Serie.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends Numero_SerieUpdateManyArgs>(args: Prisma.SelectSubset<T, Numero_SerieUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create or update one Numero_Serie.
     * @param {Numero_SerieUpsertArgs} args - Arguments to update or create a Numero_Serie.
     * @example
     * // Update or create a Numero_Serie
     * const numero_Serie = await prisma.numero_Serie.upsert({
     *   create: {
     *     // ... data to create a Numero_Serie
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Numero_Serie we want to update
     *   }
     * })
     */
    upsert<T extends Numero_SerieUpsertArgs>(args: Prisma.SelectSubset<T, Numero_SerieUpsertArgs<ExtArgs>>): Prisma.Prisma__Numero_SerieClient<runtime.Types.Result.GetResult<Prisma.$Numero_SeriePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Numero_Series.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Numero_SerieCountArgs} args - Arguments to filter Numero_Series to count.
     * @example
     * // Count the number of Numero_Series
     * const count = await prisma.numero_Serie.count({
     *   where: {
     *     // ... the filter for the Numero_Series we want to count
     *   }
     * })
    **/
    count<T extends Numero_SerieCountArgs>(args?: Prisma.Subset<T, Numero_SerieCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Numero_SerieCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Numero_Serie.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Numero_SerieAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Numero_SerieAggregateArgs>(args: Prisma.Subset<T, Numero_SerieAggregateArgs>): Prisma.PrismaPromise<GetNumero_SerieAggregateType<T>>;
    /**
     * Group by Numero_Serie.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Numero_SerieGroupByArgs} args - Group by arguments.
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
    groupBy<T extends Numero_SerieGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: Numero_SerieGroupByArgs['orderBy'];
    } : {
        orderBy?: Numero_SerieGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, Numero_SerieGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNumero_SerieGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Numero_Serie model
     */
    readonly fields: Numero_SerieFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for Numero_Serie.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__Numero_SerieClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    produto<T extends Prisma.ProdutoDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ProdutoDefaultArgs<ExtArgs>>): Prisma.Prisma__ProdutoClient<runtime.Types.Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
/**
 * Fields of the Numero_Serie model
 */
export interface Numero_SerieFieldRefs {
    readonly codigo_produto: Prisma.FieldRef<"Numero_Serie", 'Int'>;
    readonly numero_de_serie: Prisma.FieldRef<"Numero_Serie", 'String'>;
}
/**
 * Numero_Serie findUnique
 */
export type Numero_SerieFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Numero_Serie
     */
    select?: Prisma.Numero_SerieSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Numero_Serie
     */
    omit?: Prisma.Numero_SerieOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.Numero_SerieInclude<ExtArgs> | null;
    /**
     * Filter, which Numero_Serie to fetch.
     */
    where: Prisma.Numero_SerieWhereUniqueInput;
};
/**
 * Numero_Serie findUniqueOrThrow
 */
export type Numero_SerieFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Numero_Serie
     */
    select?: Prisma.Numero_SerieSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Numero_Serie
     */
    omit?: Prisma.Numero_SerieOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.Numero_SerieInclude<ExtArgs> | null;
    /**
     * Filter, which Numero_Serie to fetch.
     */
    where: Prisma.Numero_SerieWhereUniqueInput;
};
/**
 * Numero_Serie findFirst
 */
export type Numero_SerieFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Numero_Serie
     */
    select?: Prisma.Numero_SerieSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Numero_Serie
     */
    omit?: Prisma.Numero_SerieOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.Numero_SerieInclude<ExtArgs> | null;
    /**
     * Filter, which Numero_Serie to fetch.
     */
    where?: Prisma.Numero_SerieWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Numero_Series to fetch.
     */
    orderBy?: Prisma.Numero_SerieOrderByWithRelationInput | Prisma.Numero_SerieOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Numero_Series.
     */
    cursor?: Prisma.Numero_SerieWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Numero_Series from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Numero_Series.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Numero_Series.
     */
    distinct?: Prisma.Numero_SerieScalarFieldEnum | Prisma.Numero_SerieScalarFieldEnum[];
};
/**
 * Numero_Serie findFirstOrThrow
 */
export type Numero_SerieFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Numero_Serie
     */
    select?: Prisma.Numero_SerieSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Numero_Serie
     */
    omit?: Prisma.Numero_SerieOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.Numero_SerieInclude<ExtArgs> | null;
    /**
     * Filter, which Numero_Serie to fetch.
     */
    where?: Prisma.Numero_SerieWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Numero_Series to fetch.
     */
    orderBy?: Prisma.Numero_SerieOrderByWithRelationInput | Prisma.Numero_SerieOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Numero_Series.
     */
    cursor?: Prisma.Numero_SerieWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Numero_Series from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Numero_Series.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Numero_Series.
     */
    distinct?: Prisma.Numero_SerieScalarFieldEnum | Prisma.Numero_SerieScalarFieldEnum[];
};
/**
 * Numero_Serie findMany
 */
export type Numero_SerieFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Numero_Serie
     */
    select?: Prisma.Numero_SerieSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Numero_Serie
     */
    omit?: Prisma.Numero_SerieOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.Numero_SerieInclude<ExtArgs> | null;
    /**
     * Filter, which Numero_Series to fetch.
     */
    where?: Prisma.Numero_SerieWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Numero_Series to fetch.
     */
    orderBy?: Prisma.Numero_SerieOrderByWithRelationInput | Prisma.Numero_SerieOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Numero_Series.
     */
    cursor?: Prisma.Numero_SerieWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Numero_Series from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Numero_Series.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Numero_Series.
     */
    distinct?: Prisma.Numero_SerieScalarFieldEnum | Prisma.Numero_SerieScalarFieldEnum[];
};
/**
 * Numero_Serie create
 */
export type Numero_SerieCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Numero_Serie
     */
    select?: Prisma.Numero_SerieSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Numero_Serie
     */
    omit?: Prisma.Numero_SerieOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.Numero_SerieInclude<ExtArgs> | null;
    /**
     * The data needed to create a Numero_Serie.
     */
    data: Prisma.XOR<Prisma.Numero_SerieCreateInput, Prisma.Numero_SerieUncheckedCreateInput>;
};
/**
 * Numero_Serie createMany
 */
export type Numero_SerieCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Numero_Series.
     */
    data: Prisma.Numero_SerieCreateManyInput | Prisma.Numero_SerieCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * Numero_Serie update
 */
export type Numero_SerieUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Numero_Serie
     */
    select?: Prisma.Numero_SerieSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Numero_Serie
     */
    omit?: Prisma.Numero_SerieOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.Numero_SerieInclude<ExtArgs> | null;
    /**
     * The data needed to update a Numero_Serie.
     */
    data: Prisma.XOR<Prisma.Numero_SerieUpdateInput, Prisma.Numero_SerieUncheckedUpdateInput>;
    /**
     * Choose, which Numero_Serie to update.
     */
    where: Prisma.Numero_SerieWhereUniqueInput;
};
/**
 * Numero_Serie updateMany
 */
export type Numero_SerieUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Numero_Series.
     */
    data: Prisma.XOR<Prisma.Numero_SerieUpdateManyMutationInput, Prisma.Numero_SerieUncheckedUpdateManyInput>;
    /**
     * Filter which Numero_Series to update
     */
    where?: Prisma.Numero_SerieWhereInput;
    /**
     * Limit how many Numero_Series to update.
     */
    limit?: number;
};
/**
 * Numero_Serie upsert
 */
export type Numero_SerieUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Numero_Serie
     */
    select?: Prisma.Numero_SerieSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Numero_Serie
     */
    omit?: Prisma.Numero_SerieOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.Numero_SerieInclude<ExtArgs> | null;
    /**
     * The filter to search for the Numero_Serie to update in case it exists.
     */
    where: Prisma.Numero_SerieWhereUniqueInput;
    /**
     * In case the Numero_Serie found by the `where` argument doesn't exist, create a new Numero_Serie with this data.
     */
    create: Prisma.XOR<Prisma.Numero_SerieCreateInput, Prisma.Numero_SerieUncheckedCreateInput>;
    /**
     * In case the Numero_Serie was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.Numero_SerieUpdateInput, Prisma.Numero_SerieUncheckedUpdateInput>;
};
/**
 * Numero_Serie delete
 */
export type Numero_SerieDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Numero_Serie
     */
    select?: Prisma.Numero_SerieSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Numero_Serie
     */
    omit?: Prisma.Numero_SerieOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.Numero_SerieInclude<ExtArgs> | null;
    /**
     * Filter which Numero_Serie to delete.
     */
    where: Prisma.Numero_SerieWhereUniqueInput;
};
/**
 * Numero_Serie deleteMany
 */
export type Numero_SerieDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Numero_Series to delete
     */
    where?: Prisma.Numero_SerieWhereInput;
    /**
     * Limit how many Numero_Series to delete.
     */
    limit?: number;
};
/**
 * Numero_Serie without action
 */
export type Numero_SerieDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Numero_Serie
     */
    select?: Prisma.Numero_SerieSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Numero_Serie
     */
    omit?: Prisma.Numero_SerieOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.Numero_SerieInclude<ExtArgs> | null;
};
//# sourceMappingURL=Numero_Serie.d.ts.map