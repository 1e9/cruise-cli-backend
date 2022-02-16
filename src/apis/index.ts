import { Api, Get, useContext } from '@midwayjs/hooks';

export default Api(Get('/home'), async () => {
  return {
    message: '新建成功！',
  };
});
