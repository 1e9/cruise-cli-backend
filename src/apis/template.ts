import { Api, Get, Post, Delete, Put, ContentType, Params, Redirect } from '@midwayjs/hooks';
import type { Context } from '@midwayjs/koa';

import prisma from './prisma';

export const create = Api(Get('/template'), ContentType('text/html'), async (data) => {
  return '<!doctype html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>ux</title></head><body><div id="app"></div><script src="https://stnew03.beisen.com/ux/interface-person/release/dist/webpack-runtime-cec5af919e26c97d7e77.chunk.min.js"></script><script src="https://stnew03.beisen.com/ux/interface-person/release/dist/main-e860f24e1940493df6fe.chunk.min.js"></script></body></html>';
});
