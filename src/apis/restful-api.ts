import { Api, Get, Post, Delete, Put, useContext, Params, Redirect } from '@midwayjs/hooks';
import type { Context } from '@midwayjs/koa';
import type { Operator, AsyncFunction } from '@midwayjs/hooks-core';

import prisma from './prisma';

export const create = (modelName: string) =>
  Api(Post(`/${modelName}`), async (data) => await prisma[modelName].create({ data }));

export const remove = (modelName: string) =>
  Api(Delete(`/${modelName}/:id`), Params<{ id: string }>(), async () => {
    const ctx = useContext<Context>();
    return await prisma[modelName].delete({
      where: { id: Number(ctx.params.id) },
    });
  });

export const update = (modelName: string) =>
  Api(Put(`/${modelName}/:id`), Params<{ id: string }>(), async (data) => {
    const ctx = useContext<Context>();
    return await prisma[modelName].update({
      where: { id: Number(ctx.params.id) },
      data,
    });
  });

export const read = (modelName: string) =>
  Api(Get(`/${modelName}/:id`), Params<{ id: string }>(), async () => {
    const ctx = useContext<Context>();
    return await prisma[modelName].findUnique({
      where: { id: Number(ctx.params.id) },
    });
  });

export const readMany = (modelName: string) =>
  Api(Get(`/${modelName}/many`), async () => await prisma[modelName].findMany());

