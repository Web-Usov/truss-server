import * as Koa from 'koa';
import * as Router from 'koa-router';
import { UserController } from '../controllers';
import {Validate} from '../middlewares'
import { userValidators } from '../validators';

const routerOpts: Router.IRouterOptions = {
  prefix: '/api/v1/user',
};

const router: Router = new Router(routerOpts);

router.get('/', UserController.getAll);

router.get('/:id', UserController.getById);

router.post('/',
  Validate({ request: { body: userValidators.createUser } }),
  UserController.addUser
);

// router.delete('/:id', async (ctx: Koa.Context) => {
//   ctx.body = 'DELETE';
// });

// router.patch('/:id', async (ctx: Koa.Context) => {
//   ctx.body = 'PATCH';
// });

export default router;