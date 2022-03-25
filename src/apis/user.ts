import { Api, Get, Post, Delete, Put, useContext, Params } from '@midwayjs/hooks';
import type { Context } from '@midwayjs/koa';

import prisma from './prisma';

export const create = Api(Post('/user'), async (data) => {
  return await prisma.user.create({ data });
});

export const remove = Api(Delete('/user/:id'), Params<{ id: string }>(), async () => {
  const ctx = useContext<Context>();
  return await prisma.user.delete({
    where: { id: ctx.params.id },
    select: { email: true, id: false, name: true },
  });
});

export const update = Api(Put('/user/:id'), Params<{ id: string }>(), async (data) => {
  const ctx = useContext<Context>();
  return await prisma.user.update({
    where: { id: ctx.params.id },
    data,
  });
});

export const readOne = Api(Get('/user/:id'), Params<{ id: string }>(), async () => {
  const ctx = useContext<Context>();
  return await prisma.user.findUnique({
    where: { id: ctx.params.id },
  });
});

export const readMany = Api(Get('/user/many'), async () => await prisma.user.findMany());
