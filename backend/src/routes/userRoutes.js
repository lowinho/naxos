import { Router } from 'express';

import { celebrate, Segments, Joi } from 'celebrate';

import userController from '../controllers/UserController';
import loginRequired from "../middlewares/loginRequired";

const router = new Router();

router.get('/', userController.index);


router.post('/', celebrate({
  // [Segments.HEADERS]: Joi.object({
  //   authorization: Joi.string().required(),
// }).unknown(),
  [Segments.BODY]: Joi.object().keys({
      user: Joi.string().required().min(3).max(15),
      email: Joi.string().required().email(),
      password: Joi.string().required().min(6).max(12)
  })
}), userController.store);


router.get('/:id', celebrate({
  [Segments.HEADERS]: Joi.object({
    authorization: Joi.string().required(),
}).unknown()
}), userController.show);


router.put('/:id', celebrate({
  [Segments.HEADERS]: Joi.object({
    authorization: Joi.string().required(),
}).unknown(),
  [Segments.BODY]: Joi.object().keys({
      user: Joi.string().required().min(3).max(15),
      email: Joi.string().required().email(),
      password: Joi.string().required().min(6).max(12)
  })
}), loginRequired, userController.update);


router.delete('/:id',  userController.delete);

export default router;

