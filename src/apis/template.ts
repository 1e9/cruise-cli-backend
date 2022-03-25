import { Api, Get, Post, Delete, Put, ContentType, Params, Query, useContext } from '@midwayjs/hooks';
import type { Context } from '@midwayjs/koa';

import prisma from './prisma';

export const get = Api(
  Get('/template'),
  Query<{
    // name: string;
    type: string;
  }>(),
  async (data) => {
    const ctx = useContext<Context>();
    return prisma.template.findMany({ where: ctx.query });
  }
);

export const readOne = Api(Get('/template/:id'), Params<{ id: string }>(), async (data) => {
  const ctx = useContext<Context>();
  return await prisma.template.findUnique({
    where: { id: ctx.params.id },
  });
});

export const create = Api(Post('/template'), async (data) => {
  return await prisma.template.create({ data });
});
