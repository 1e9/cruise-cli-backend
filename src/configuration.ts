import { createConfiguration, hooks } from '@midwayjs/hooks';
import { MidwayConfig } from '@midwayjs/core';
import * as Koa from '@midwayjs/koa';
import cors from '@koa/cors';

/**
 * setup midway server
 */
export default createConfiguration({
  imports: [Koa, hooks({ middleware: [cors({ origin: '*' })] })],
  importConfigs: [
    {
      default: {
        keys: 'session_keys',
        koa: {
          port: 7001,
        },
      } as MidwayConfig,
    },
  ],
});
