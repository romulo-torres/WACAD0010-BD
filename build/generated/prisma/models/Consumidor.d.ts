import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model Consumidor
 *
 */
export type ConsumidorModel = runtime.Types.Result.DefaultSelection<Prisma.$ConsumidorPayload>;
export type AggregateConsumidor = {
    _count: ConsumidorCountAggregateOutputType | null;
    _avg: ConsumidorAvgAggregateOutputType | null;
    _sum: ConsumidorSumAggregateOutputType | null;
    _min: ConsumidorMinAggregateOutputType | null;
    _max: ConsumidorMaxAggregateOutputType | null;
};
export type ConsumidorAvgAggregateOutputType = {
    cpf: number | null;
};
export type ConsumidorSumAggregateOutputType = {
    cpf: number | null;
};
export type ConsumidorMinAggregateOutputType = {
    cpf: number | null;
    nome: string | null;
    nascimento: Date | null;
    telefone: string | null;
    email: string | null;
};
export type ConsumidorMaxAggregateOutputType = {
    cpf: number | null;
    nome: string | null;
    nascimento: Date | null;
    telefone: string | null;
    email: string | null;
};
export type ConsumidorCountAggregateOutputType = {
    cpf: number;
    nome: number;
    nascimento: number;
    telefone: number;
    email: number;
    _all: number;
};
export type ConsumidorAvgAggregateInputType = {
    cpf?: true;
};
export type ConsumidorSumAggregateInputType = {
    cpf?: true;
};
export type ConsumidorMinAggregateInputType = {
    cpf?: true;
    nome?: true;
    nascimento?: true;
    telefone?: true;
    email?: true;
};
export type ConsumidorMaxAggregateInputType = {
    cpf?: true;
    nome?: true;
    nascimento?: true;
    telefone?: true;
    email?: true;
};
export type ConsumidorCountAggregateInputType = {
    cpf?: true;
    nome?: true;
    nascimento?: true;
    telefone?: true;
    email?: true;
    _all?: true;
};
export type ConsumidorAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Consumidor to aggregate.
     */
    where?: Prisma.ConsumidorWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Consumidors to fetch.
     */
    orderBy?: Prisma.ConsumidorOrderByWithRelationInput | Prisma.ConsumidorOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.ConsumidorWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Consumidors from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Consumidors.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Consumidors
    **/
    _count?: true | ConsumidorCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: ConsumidorAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: ConsumidorSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: ConsumidorMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: ConsumidorMaxAggregateInputType;
};
export type GetConsumidorAggregateType<T extends ConsumidorAggregateArgs> = {
    [P in keyof T & keyof AggregateConsumidor]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateConsumidor[P]> : Prisma.GetScalarType<T[P], AggregateConsumidor[P]>;
};
export type ConsumidorGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ConsumidorWhereInput;
    orderBy?: Prisma.ConsumidorOrderByWithAggregationInput | Prisma.ConsumidorOrderByWithAggregationInput[];
    by: Prisma.ConsumidorScalarFieldEnum[] | Prisma.ConsumidorScalarFieldEnum;
    having?: Prisma.ConsumidorScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ConsumidorCountAggregateInputType | true;
    _avg?: ConsumidorAvgAggregateInputType;
    _sum?: ConsumidorSumAggregateInputType;
    _min?: ConsumidorMinAggregateInputType;
    _max?: ConsumidorMaxAggregateInputType;
};
export type ConsumidorGroupByOutputType = {
    cpf: number;
    nome: string;
    nascimento: Date;
    telefone: string;
    email: string;
    _count: ConsumidorCountAggregateOutputType | null;
    _avg: ConsumidorAvgAggregateOutputType | null;
    _sum: ConsumidorSumAggregateOutputType | null;
    _min: ConsumidorMinAggregateOutputType | null;
    _max: ConsumidorMaxAggregateOutputType | null;
};
export type GetConsumidorGroupByPayload<T extends ConsumidorGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ConsumidorGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ConsumidorGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ConsumidorGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ConsumidorGroupByOutputType[P]>;
}>>;
export type ConsumidorWhereInput = {
    AND?: Prisma.ConsumidorWhereInput | Prisma.ConsumidorWhereInput[];
    OR?: Prisma.ConsumidorWhereInput[];
    NOT?: Prisma.ConsumidorWhereInput | Prisma.ConsumidorWhereInput[];
    cpf?: Prisma.IntFilter<"Consumidor"> | number;
    nome?: Prisma.StringFilter<"Consumidor"> | string;
    nascimento?: Prisma.DateTimeFilter<"Consumidor"> | Date | string;
    telefone?: Prisma.StringFilter<"Consumidor"> | string;
    email?: Prisma.StringFilter<"Consumidor"> | string;
    consumido?: Prisma.Produto_CompradoListRelationFilter;
    enderecos?: Prisma.EnderecosListRelationFilter;
};
export type ConsumidorOrderByWithRelationInput = {
    cpf?: Prisma.SortOrder;
    nome?: Prisma.SortOrder;
    nascimento?: Prisma.SortOrder;
    telefone?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    consumido?: Prisma.Produto_CompradoOrderByRelationAggregateInput;
    enderecos?: Prisma.EnderecosOrderByRelationAggregateInput;
    _relevance?: Prisma.ConsumidorOrderByRelevanceInput;
};
export type ConsumidorWhereUniqueInput = Prisma.AtLeast<{
    cpf?: number;
    email?: string;
    AND?: Prisma.ConsumidorWhereInput | Prisma.ConsumidorWhereInput[];
    OR?: Prisma.ConsumidorWhereInput[];
    NOT?: Prisma.ConsumidorWhereInput | Prisma.ConsumidorWhereInput[];
    nome?: Prisma.StringFilter<"Consumidor"> | string;
    nascimento?: Prisma.DateTimeFilter<"Consumidor"> | Date | string;
    telefone?: Prisma.StringFilter<"Consumidor"> | string;
    consumido?: Prisma.Produto_CompradoListRelationFilter;
    enderecos?: Prisma.EnderecosListRelationFilter;
}, "cpf" | "email">;
export type ConsumidorOrderByWithAggregationInput = {
    cpf?: Prisma.SortOrder;
    nome?: Prisma.SortOrder;
    nascimento?: Prisma.SortOrder;
    telefone?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    _count?: Prisma.ConsumidorCountOrderByAggregateInput;
    _avg?: Prisma.ConsumidorAvgOrderByAggregateInput;
    _max?: Prisma.ConsumidorMaxOrderByAggregateInput;
    _min?: Prisma.ConsumidorMinOrderByAggregateInput;
    _sum?: Prisma.ConsumidorSumOrderByAggregateInput;
};
export type ConsumidorScalarWhereWithAggregatesInput = {
    AND?: Prisma.ConsumidorScalarWhereWithAggregatesInput | Prisma.ConsumidorScalarWhereWithAggregatesInput[];
    OR?: Prisma.ConsumidorScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ConsumidorScalarWhereWithAggregatesInput | Prisma.ConsumidorScalarWhereWithAggregatesInput[];
    cpf?: Prisma.IntWithAggregatesFilter<"Consumidor"> | number;
    nome?: Prisma.StringWithAggregatesFilter<"Consumidor"> | string;
    nascimento?: Prisma.DateTimeWithAggregatesFilter<"Consumidor"> | Date | string;
    telefone?: Prisma.StringWithAggregatesFilter<"Consumidor"> | string;
    email?: Prisma.StringWithAggregatesFilter<"Consumidor"> | string;
};
export type ConsumidorCreateInput = {
    cpf: number;
    nome: string;
    nascimento: Date | string;
    telefone: string;
    email: string;
    consumido?: Prisma.Produto_CompradoCreateNestedManyWithoutConsumidorInput;
    enderecos?: Prisma.EnderecosCreateNestedManyWithoutConsumidorInput;
};
export type ConsumidorUncheckedCreateInput = {
    cpf: number;
    nome: string;
    nascimento: Date | string;
    telefone: string;
    email: string;
    consumido?: Prisma.Produto_CompradoUncheckedCreateNestedManyWithoutConsumidorInput;
    enderecos?: Prisma.EnderecosUncheckedCreateNestedManyWithoutConsumidorInput;
};
export type ConsumidorUpdateInput = {
    cpf?: Prisma.IntFieldUpdateOperationsInput | number;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    nascimento?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    telefone?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    consumido?: Prisma.Produto_CompradoUpdateManyWithoutConsumidorNestedInput;
    enderecos?: Prisma.EnderecosUpdateManyWithoutConsumidorNestedInput;
};
export type ConsumidorUncheckedUpdateInput = {
    cpf?: Prisma.IntFieldUpdateOperationsInput | number;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    nascimento?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    telefone?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    consumido?: Prisma.Produto_CompradoUncheckedUpdateManyWithoutConsumidorNestedInput;
    enderecos?: Prisma.EnderecosUncheckedUpdateManyWithoutConsumidorNestedInput;
};
export type ConsumidorCreateManyInput = {
    cpf: number;
    nome: string;
    nascimento: Date | string;
    telefone: string;
    email: string;
};
export type ConsumidorUpdateManyMutationInput = {
    cpf?: Prisma.IntFieldUpdateOperationsInput | number;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    nascimento?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    telefone?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type ConsumidorUncheckedUpdateManyInput = {
    cpf?: Prisma.IntFieldUpdateOperationsInput | number;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    nascimento?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    telefone?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type ConsumidorOrderByRelevanceInput = {
    fields: Prisma.ConsumidorOrderByRelevanceFieldEnum | Prisma.ConsumidorOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type ConsumidorCountOrderByAggregateInput = {
    cpf?: Prisma.SortOrder;
    nome?: Prisma.SortOrder;
    nascimento?: Prisma.SortOrder;
    telefone?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
};
export type ConsumidorAvgOrderByAggregateInput = {
    cpf?: Prisma.SortOrder;
};
export type ConsumidorMaxOrderByAggregateInput = {
    cpf?: Prisma.SortOrder;
    nome?: Prisma.SortOrder;
    nascimento?: Prisma.SortOrder;
    telefone?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
};
export type ConsumidorMinOrderByAggregateInput = {
    cpf?: Prisma.SortOrder;
    nome?: Prisma.SortOrder;
    nascimento?: Prisma.SortOrder;
    telefone?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
};
export type ConsumidorSumOrderByAggregateInput = {
    cpf?: Prisma.SortOrder;
};
export type ConsumidorScalarRelationFilter = {
    is?: Prisma.ConsumidorWhereInput;
    isNot?: Prisma.ConsumidorWhereInput;
};
export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type StringFieldUpdateOperationsInput = {
    set?: string;
};
export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
};
export type ConsumidorCreateNestedOneWithoutConsumidoInput = {
    create?: Prisma.XOR<Prisma.ConsumidorCreateWithoutConsumidoInput, Prisma.ConsumidorUncheckedCreateWithoutConsumidoInput>;
    connectOrCreate?: Prisma.ConsumidorCreateOrConnectWithoutConsumidoInput;
    connect?: Prisma.ConsumidorWhereUniqueInput;
};
export type ConsumidorUpdateOneRequiredWithoutConsumidoNestedInput = {
    create?: Prisma.XOR<Prisma.ConsumidorCreateWithoutConsumidoInput, Prisma.ConsumidorUncheckedCreateWithoutConsumidoInput>;
    connectOrCreate?: Prisma.ConsumidorCreateOrConnectWithoutConsumidoInput;
    upsert?: Prisma.ConsumidorUpsertWithoutConsumidoInput;
    connect?: Prisma.ConsumidorWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ConsumidorUpdateToOneWithWhereWithoutConsumidoInput, Prisma.ConsumidorUpdateWithoutConsumidoInput>, Prisma.ConsumidorUncheckedUpdateWithoutConsumidoInput>;
};
export type ConsumidorCreateNestedOneWithoutEnderecosInput = {
    create?: Prisma.XOR<Prisma.ConsumidorCreateWithoutEnderecosInput, Prisma.ConsumidorUncheckedCreateWithoutEnderecosInput>;
    connectOrCreate?: Prisma.ConsumidorCreateOrConnectWithoutEnderecosInput;
    connect?: Prisma.ConsumidorWhereUniqueInput;
};
export type ConsumidorUpdateOneRequiredWithoutEnderecosNestedInput = {
    create?: Prisma.XOR<Prisma.ConsumidorCreateWithoutEnderecosInput, Prisma.ConsumidorUncheckedCreateWithoutEnderecosInput>;
    connectOrCreate?: Prisma.ConsumidorCreateOrConnectWithoutEnderecosInput;
    upsert?: Prisma.ConsumidorUpsertWithoutEnderecosInput;
    connect?: Prisma.ConsumidorWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ConsumidorUpdateToOneWithWhereWithoutEnderecosInput, Prisma.ConsumidorUpdateWithoutEnderecosInput>, Prisma.ConsumidorUncheckedUpdateWithoutEnderecosInput>;
};
export type ConsumidorCreateWithoutConsumidoInput = {
    cpf: number;
    nome: string;
    nascimento: Date | string;
    telefone: string;
    email: string;
    enderecos?: Prisma.EnderecosCreateNestedManyWithoutConsumidorInput;
};
export type ConsumidorUncheckedCreateWithoutConsumidoInput = {
    cpf: number;
    nome: string;
    nascimento: Date | string;
    telefone: string;
    email: string;
    enderecos?: Prisma.EnderecosUncheckedCreateNestedManyWithoutConsumidorInput;
};
export type ConsumidorCreateOrConnectWithoutConsumidoInput = {
    where: Prisma.ConsumidorWhereUniqueInput;
    create: Prisma.XOR<Prisma.ConsumidorCreateWithoutConsumidoInput, Prisma.ConsumidorUncheckedCreateWithoutConsumidoInput>;
};
export type ConsumidorUpsertWithoutConsumidoInput = {
    update: Prisma.XOR<Prisma.ConsumidorUpdateWithoutConsumidoInput, Prisma.ConsumidorUncheckedUpdateWithoutConsumidoInput>;
    create: Prisma.XOR<Prisma.ConsumidorCreateWithoutConsumidoInput, Prisma.ConsumidorUncheckedCreateWithoutConsumidoInput>;
    where?: Prisma.ConsumidorWhereInput;
};
export type ConsumidorUpdateToOneWithWhereWithoutConsumidoInput = {
    where?: Prisma.ConsumidorWhereInput;
    data: Prisma.XOR<Prisma.ConsumidorUpdateWithoutConsumidoInput, Prisma.ConsumidorUncheckedUpdateWithoutConsumidoInput>;
};
export type ConsumidorUpdateWithoutConsumidoInput = {
    cpf?: Prisma.IntFieldUpdateOperationsInput | number;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    nascimento?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    telefone?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    enderecos?: Prisma.EnderecosUpdateManyWithoutConsumidorNestedInput;
};
export type ConsumidorUncheckedUpdateWithoutConsumidoInput = {
    cpf?: Prisma.IntFieldUpdateOperationsInput | number;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    nascimento?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    telefone?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    enderecos?: Prisma.EnderecosUncheckedUpdateManyWithoutConsumidorNestedInput;
};
export type ConsumidorCreateWithoutEnderecosInput = {
    cpf: number;
    nome: string;
    nascimento: Date | string;
    telefone: string;
    email: string;
    consumido?: Prisma.Produto_CompradoCreateNestedManyWithoutConsumidorInput;
};
export type ConsumidorUncheckedCreateWithoutEnderecosInput = {
    cpf: number;
    nome: string;
    nascimento: Date | string;
    telefone: string;
    email: string;
    consumido?: Prisma.Produto_CompradoUncheckedCreateNestedManyWithoutConsumidorInput;
};
export type ConsumidorCreateOrConnectWithoutEnderecosInput = {
    where: Prisma.ConsumidorWhereUniqueInput;
    create: Prisma.XOR<Prisma.ConsumidorCreateWithoutEnderecosInput, Prisma.ConsumidorUncheckedCreateWithoutEnderecosInput>;
};
export type ConsumidorUpsertWithoutEnderecosInput = {
    update: Prisma.XOR<Prisma.ConsumidorUpdateWithoutEnderecosInput, Prisma.ConsumidorUncheckedUpdateWithoutEnderecosInput>;
    create: Prisma.XOR<Prisma.ConsumidorCreateWithoutEnderecosInput, Prisma.ConsumidorUncheckedCreateWithoutEnderecosInput>;
    where?: Prisma.ConsumidorWhereInput;
};
export type ConsumidorUpdateToOneWithWhereWithoutEnderecosInput = {
    where?: Prisma.ConsumidorWhereInput;
    data: Prisma.XOR<Prisma.ConsumidorUpdateWithoutEnderecosInput, Prisma.ConsumidorUncheckedUpdateWithoutEnderecosInput>;
};
export type ConsumidorUpdateWithoutEnderecosInput = {
    cpf?: Prisma.IntFieldUpdateOperationsInput | number;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    nascimento?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    telefone?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    consumido?: Prisma.Produto_CompradoUpdateManyWithoutConsumidorNestedInput;
};
export type ConsumidorUncheckedUpdateWithoutEnderecosInput = {
    cpf?: Prisma.IntFieldUpdateOperationsInput | number;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    nascimento?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    telefone?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    consumido?: Prisma.Produto_CompradoUncheckedUpdateManyWithoutConsumidorNestedInput;
};
/**
 * Count Type ConsumidorCountOutputType
 */
export type ConsumidorCountOutputType = {
    consumido: number;
    enderecos: number;
};
export type ConsumidorCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    consumido?: boolean | ConsumidorCountOutputTypeCountConsumidoArgs;
    enderecos?: boolean | ConsumidorCountOutputTypeCountEnderecosArgs;
};
/**
 * ConsumidorCountOutputType without action
 */
export type ConsumidorCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConsumidorCountOutputType
     */
    select?: Prisma.ConsumidorCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * ConsumidorCountOutputType without action
 */
export type ConsumidorCountOutputTypeCountConsumidoArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.Produto_CompradoWhereInput;
};
/**
 * ConsumidorCountOutputType without action
 */
export type ConsumidorCountOutputTypeCountEnderecosArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EnderecosWhereInput;
};
export type ConsumidorSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    cpf?: boolean;
    nome?: boolean;
    nascimento?: boolean;
    telefone?: boolean;
    email?: boolean;
    consumido?: boolean | Prisma.Consumidor$consumidoArgs<ExtArgs>;
    enderecos?: boolean | Prisma.Consumidor$enderecosArgs<ExtArgs>;
    _count?: boolean | Prisma.ConsumidorCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["consumidor"]>;
export type ConsumidorSelectScalar = {
    cpf?: boolean;
    nome?: boolean;
    nascimento?: boolean;
    telefone?: boolean;
    email?: boolean;
};
export type ConsumidorOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"cpf" | "nome" | "nascimento" | "telefone" | "email", ExtArgs["result"]["consumidor"]>;
export type ConsumidorInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    consumido?: boolean | Prisma.Consumidor$consumidoArgs<ExtArgs>;
    enderecos?: boolean | Prisma.Consumidor$enderecosArgs<ExtArgs>;
    _count?: boolean | Prisma.ConsumidorCountOutputTypeDefaultArgs<ExtArgs>;
};
export type $ConsumidorPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Consumidor";
    objects: {
        consumido: Prisma.$Produto_CompradoPayload<ExtArgs>[];
        enderecos: Prisma.$EnderecosPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        cpf: number;
        nome: string;
        nascimento: Date;
        telefone: string;
        email: string;
    }, ExtArgs["result"]["consumidor"]>;
    composites: {};
};
export type ConsumidorGetPayload<S extends boolean | null | undefined | ConsumidorDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ConsumidorPayload, S>;
export type ConsumidorCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ConsumidorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ConsumidorCountAggregateInputType | true;
};
export interface ConsumidorDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Consumidor'];
        meta: {
            name: 'Consumidor';
        };
    };
    /**
     * Find zero or one Consumidor that matches the filter.
     * @param {ConsumidorFindUniqueArgs} args - Arguments to find a Consumidor
     * @example
     * // Get one Consumidor
     * const consumidor = await prisma.consumidor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ConsumidorFindUniqueArgs>(args: Prisma.SelectSubset<T, ConsumidorFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ConsumidorClient<runtime.Types.Result.GetResult<Prisma.$ConsumidorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Consumidor that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ConsumidorFindUniqueOrThrowArgs} args - Arguments to find a Consumidor
     * @example
     * // Get one Consumidor
     * const consumidor = await prisma.consumidor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ConsumidorFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ConsumidorFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ConsumidorClient<runtime.Types.Result.GetResult<Prisma.$ConsumidorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Consumidor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsumidorFindFirstArgs} args - Arguments to find a Consumidor
     * @example
     * // Get one Consumidor
     * const consumidor = await prisma.consumidor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ConsumidorFindFirstArgs>(args?: Prisma.SelectSubset<T, ConsumidorFindFirstArgs<ExtArgs>>): Prisma.Prisma__ConsumidorClient<runtime.Types.Result.GetResult<Prisma.$ConsumidorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Consumidor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsumidorFindFirstOrThrowArgs} args - Arguments to find a Consumidor
     * @example
     * // Get one Consumidor
     * const consumidor = await prisma.consumidor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ConsumidorFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ConsumidorFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ConsumidorClient<runtime.Types.Result.GetResult<Prisma.$ConsumidorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Consumidors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsumidorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Consumidors
     * const consumidors = await prisma.consumidor.findMany()
     *
     * // Get first 10 Consumidors
     * const consumidors = await prisma.consumidor.findMany({ take: 10 })
     *
     * // Only select the `cpf`
     * const consumidorWithCpfOnly = await prisma.consumidor.findMany({ select: { cpf: true } })
     *
     */
    findMany<T extends ConsumidorFindManyArgs>(args?: Prisma.SelectSubset<T, ConsumidorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ConsumidorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Consumidor.
     * @param {ConsumidorCreateArgs} args - Arguments to create a Consumidor.
     * @example
     * // Create one Consumidor
     * const Consumidor = await prisma.consumidor.create({
     *   data: {
     *     // ... data to create a Consumidor
     *   }
     * })
     *
     */
    create<T extends ConsumidorCreateArgs>(args: Prisma.SelectSubset<T, ConsumidorCreateArgs<ExtArgs>>): Prisma.Prisma__ConsumidorClient<runtime.Types.Result.GetResult<Prisma.$ConsumidorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Consumidors.
     * @param {ConsumidorCreateManyArgs} args - Arguments to create many Consumidors.
     * @example
     * // Create many Consumidors
     * const consumidor = await prisma.consumidor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends ConsumidorCreateManyArgs>(args?: Prisma.SelectSubset<T, ConsumidorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Delete a Consumidor.
     * @param {ConsumidorDeleteArgs} args - Arguments to delete one Consumidor.
     * @example
     * // Delete one Consumidor
     * const Consumidor = await prisma.consumidor.delete({
     *   where: {
     *     // ... filter to delete one Consumidor
     *   }
     * })
     *
     */
    delete<T extends ConsumidorDeleteArgs>(args: Prisma.SelectSubset<T, ConsumidorDeleteArgs<ExtArgs>>): Prisma.Prisma__ConsumidorClient<runtime.Types.Result.GetResult<Prisma.$ConsumidorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Consumidor.
     * @param {ConsumidorUpdateArgs} args - Arguments to update one Consumidor.
     * @example
     * // Update one Consumidor
     * const consumidor = await prisma.consumidor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends ConsumidorUpdateArgs>(args: Prisma.SelectSubset<T, ConsumidorUpdateArgs<ExtArgs>>): Prisma.Prisma__ConsumidorClient<runtime.Types.Result.GetResult<Prisma.$ConsumidorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Consumidors.
     * @param {ConsumidorDeleteManyArgs} args - Arguments to filter Consumidors to delete.
     * @example
     * // Delete a few Consumidors
     * const { count } = await prisma.consumidor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends ConsumidorDeleteManyArgs>(args?: Prisma.SelectSubset<T, ConsumidorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Consumidors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsumidorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Consumidors
     * const consumidor = await prisma.consumidor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends ConsumidorUpdateManyArgs>(args: Prisma.SelectSubset<T, ConsumidorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create or update one Consumidor.
     * @param {ConsumidorUpsertArgs} args - Arguments to update or create a Consumidor.
     * @example
     * // Update or create a Consumidor
     * const consumidor = await prisma.consumidor.upsert({
     *   create: {
     *     // ... data to create a Consumidor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Consumidor we want to update
     *   }
     * })
     */
    upsert<T extends ConsumidorUpsertArgs>(args: Prisma.SelectSubset<T, ConsumidorUpsertArgs<ExtArgs>>): Prisma.Prisma__ConsumidorClient<runtime.Types.Result.GetResult<Prisma.$ConsumidorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Consumidors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsumidorCountArgs} args - Arguments to filter Consumidors to count.
     * @example
     * // Count the number of Consumidors
     * const count = await prisma.consumidor.count({
     *   where: {
     *     // ... the filter for the Consumidors we want to count
     *   }
     * })
    **/
    count<T extends ConsumidorCountArgs>(args?: Prisma.Subset<T, ConsumidorCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ConsumidorCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Consumidor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsumidorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ConsumidorAggregateArgs>(args: Prisma.Subset<T, ConsumidorAggregateArgs>): Prisma.PrismaPromise<GetConsumidorAggregateType<T>>;
    /**
     * Group by Consumidor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsumidorGroupByArgs} args - Group by arguments.
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
    groupBy<T extends ConsumidorGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ConsumidorGroupByArgs['orderBy'];
    } : {
        orderBy?: ConsumidorGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ConsumidorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetConsumidorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Consumidor model
     */
    readonly fields: ConsumidorFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for Consumidor.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__ConsumidorClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    consumido<T extends Prisma.Consumidor$consumidoArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Consumidor$consumidoArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$Produto_CompradoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    enderecos<T extends Prisma.Consumidor$enderecosArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Consumidor$enderecosArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EnderecosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
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
 * Fields of the Consumidor model
 */
export interface ConsumidorFieldRefs {
    readonly cpf: Prisma.FieldRef<"Consumidor", 'Int'>;
    readonly nome: Prisma.FieldRef<"Consumidor", 'String'>;
    readonly nascimento: Prisma.FieldRef<"Consumidor", 'DateTime'>;
    readonly telefone: Prisma.FieldRef<"Consumidor", 'String'>;
    readonly email: Prisma.FieldRef<"Consumidor", 'String'>;
}
/**
 * Consumidor findUnique
 */
export type ConsumidorFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consumidor
     */
    select?: Prisma.ConsumidorSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Consumidor
     */
    omit?: Prisma.ConsumidorOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ConsumidorInclude<ExtArgs> | null;
    /**
     * Filter, which Consumidor to fetch.
     */
    where: Prisma.ConsumidorWhereUniqueInput;
};
/**
 * Consumidor findUniqueOrThrow
 */
export type ConsumidorFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consumidor
     */
    select?: Prisma.ConsumidorSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Consumidor
     */
    omit?: Prisma.ConsumidorOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ConsumidorInclude<ExtArgs> | null;
    /**
     * Filter, which Consumidor to fetch.
     */
    where: Prisma.ConsumidorWhereUniqueInput;
};
/**
 * Consumidor findFirst
 */
export type ConsumidorFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consumidor
     */
    select?: Prisma.ConsumidorSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Consumidor
     */
    omit?: Prisma.ConsumidorOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ConsumidorInclude<ExtArgs> | null;
    /**
     * Filter, which Consumidor to fetch.
     */
    where?: Prisma.ConsumidorWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Consumidors to fetch.
     */
    orderBy?: Prisma.ConsumidorOrderByWithRelationInput | Prisma.ConsumidorOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Consumidors.
     */
    cursor?: Prisma.ConsumidorWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Consumidors from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Consumidors.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Consumidors.
     */
    distinct?: Prisma.ConsumidorScalarFieldEnum | Prisma.ConsumidorScalarFieldEnum[];
};
/**
 * Consumidor findFirstOrThrow
 */
export type ConsumidorFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consumidor
     */
    select?: Prisma.ConsumidorSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Consumidor
     */
    omit?: Prisma.ConsumidorOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ConsumidorInclude<ExtArgs> | null;
    /**
     * Filter, which Consumidor to fetch.
     */
    where?: Prisma.ConsumidorWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Consumidors to fetch.
     */
    orderBy?: Prisma.ConsumidorOrderByWithRelationInput | Prisma.ConsumidorOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Consumidors.
     */
    cursor?: Prisma.ConsumidorWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Consumidors from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Consumidors.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Consumidors.
     */
    distinct?: Prisma.ConsumidorScalarFieldEnum | Prisma.ConsumidorScalarFieldEnum[];
};
/**
 * Consumidor findMany
 */
export type ConsumidorFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consumidor
     */
    select?: Prisma.ConsumidorSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Consumidor
     */
    omit?: Prisma.ConsumidorOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ConsumidorInclude<ExtArgs> | null;
    /**
     * Filter, which Consumidors to fetch.
     */
    where?: Prisma.ConsumidorWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Consumidors to fetch.
     */
    orderBy?: Prisma.ConsumidorOrderByWithRelationInput | Prisma.ConsumidorOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Consumidors.
     */
    cursor?: Prisma.ConsumidorWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Consumidors from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Consumidors.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Consumidors.
     */
    distinct?: Prisma.ConsumidorScalarFieldEnum | Prisma.ConsumidorScalarFieldEnum[];
};
/**
 * Consumidor create
 */
export type ConsumidorCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consumidor
     */
    select?: Prisma.ConsumidorSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Consumidor
     */
    omit?: Prisma.ConsumidorOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ConsumidorInclude<ExtArgs> | null;
    /**
     * The data needed to create a Consumidor.
     */
    data: Prisma.XOR<Prisma.ConsumidorCreateInput, Prisma.ConsumidorUncheckedCreateInput>;
};
/**
 * Consumidor createMany
 */
export type ConsumidorCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Consumidors.
     */
    data: Prisma.ConsumidorCreateManyInput | Prisma.ConsumidorCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * Consumidor update
 */
export type ConsumidorUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consumidor
     */
    select?: Prisma.ConsumidorSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Consumidor
     */
    omit?: Prisma.ConsumidorOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ConsumidorInclude<ExtArgs> | null;
    /**
     * The data needed to update a Consumidor.
     */
    data: Prisma.XOR<Prisma.ConsumidorUpdateInput, Prisma.ConsumidorUncheckedUpdateInput>;
    /**
     * Choose, which Consumidor to update.
     */
    where: Prisma.ConsumidorWhereUniqueInput;
};
/**
 * Consumidor updateMany
 */
export type ConsumidorUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Consumidors.
     */
    data: Prisma.XOR<Prisma.ConsumidorUpdateManyMutationInput, Prisma.ConsumidorUncheckedUpdateManyInput>;
    /**
     * Filter which Consumidors to update
     */
    where?: Prisma.ConsumidorWhereInput;
    /**
     * Limit how many Consumidors to update.
     */
    limit?: number;
};
/**
 * Consumidor upsert
 */
export type ConsumidorUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consumidor
     */
    select?: Prisma.ConsumidorSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Consumidor
     */
    omit?: Prisma.ConsumidorOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ConsumidorInclude<ExtArgs> | null;
    /**
     * The filter to search for the Consumidor to update in case it exists.
     */
    where: Prisma.ConsumidorWhereUniqueInput;
    /**
     * In case the Consumidor found by the `where` argument doesn't exist, create a new Consumidor with this data.
     */
    create: Prisma.XOR<Prisma.ConsumidorCreateInput, Prisma.ConsumidorUncheckedCreateInput>;
    /**
     * In case the Consumidor was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.ConsumidorUpdateInput, Prisma.ConsumidorUncheckedUpdateInput>;
};
/**
 * Consumidor delete
 */
export type ConsumidorDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consumidor
     */
    select?: Prisma.ConsumidorSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Consumidor
     */
    omit?: Prisma.ConsumidorOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ConsumidorInclude<ExtArgs> | null;
    /**
     * Filter which Consumidor to delete.
     */
    where: Prisma.ConsumidorWhereUniqueInput;
};
/**
 * Consumidor deleteMany
 */
export type ConsumidorDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Consumidors to delete
     */
    where?: Prisma.ConsumidorWhereInput;
    /**
     * Limit how many Consumidors to delete.
     */
    limit?: number;
};
/**
 * Consumidor.consumido
 */
export type Consumidor$consumidoArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produto_Comprado
     */
    select?: Prisma.Produto_CompradoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Produto_Comprado
     */
    omit?: Prisma.Produto_CompradoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.Produto_CompradoInclude<ExtArgs> | null;
    where?: Prisma.Produto_CompradoWhereInput;
    orderBy?: Prisma.Produto_CompradoOrderByWithRelationInput | Prisma.Produto_CompradoOrderByWithRelationInput[];
    cursor?: Prisma.Produto_CompradoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Produto_CompradoScalarFieldEnum | Prisma.Produto_CompradoScalarFieldEnum[];
};
/**
 * Consumidor.enderecos
 */
export type Consumidor$enderecosArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enderecos
     */
    select?: Prisma.EnderecosSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Enderecos
     */
    omit?: Prisma.EnderecosOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EnderecosInclude<ExtArgs> | null;
    where?: Prisma.EnderecosWhereInput;
    orderBy?: Prisma.EnderecosOrderByWithRelationInput | Prisma.EnderecosOrderByWithRelationInput[];
    cursor?: Prisma.EnderecosWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.EnderecosScalarFieldEnum | Prisma.EnderecosScalarFieldEnum[];
};
/**
 * Consumidor without action
 */
export type ConsumidorDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consumidor
     */
    select?: Prisma.ConsumidorSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Consumidor
     */
    omit?: Prisma.ConsumidorOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ConsumidorInclude<ExtArgs> | null;
};
//# sourceMappingURL=Consumidor.d.ts.map