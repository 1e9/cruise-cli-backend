import { Api, Get, useContext } from '@midwayjs/hooks';
import type { Context } from '@midwayjs/koa';

export default Api(Get('/user'), async () => {
  const ctx = useContext<Context>();
  return {
    message: 'Hello',
    ip: ctx.ip,
  };
});
