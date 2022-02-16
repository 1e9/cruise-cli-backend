import { Api, Get, Post, useContext, Params, Redirect } from '@midwayjs/hooks';
import type { Context } from '@midwayjs/koa';

import prisma from './prisma';

export const createUser = Api(
  Post('/user/create'),
  Redirect('/home'),
  async (data: any = { name: 'gt', email: false }) => {
    const ctx = useContext<Context>();
    const result = await prisma.user.create({
      data,
    });
    return result;
  }
);
export default Api(Get('/user/:id'), Params<{ id: string }>(), async () => {
  const ctx = useContext<Context>();
  createUser({ name: 'gt', email: 'a.com', id: 5 });
  const result = await prisma.user.findUnique({
    where: { id: Number(ctx.params.id) },
    select: { email: false, id: false, name: true },
  });
  return result;
});
