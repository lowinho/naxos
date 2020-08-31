import { Router } from 'express';

import { celebrate, Segments, Joi } from 'celebrate';

import controlController from '../controllers/ControlController';

const router = new Router();

router.get('/', controlController.index);

router.post('/', celebrate({
  // [Segments.HEADERS]: Joi.object({
  //   authorization: Joi.string().required(),
// }).unknown(),
  [Segments.BODY]: Joi.object().keys({
      date: Joi.string().required().min(3).max(35),
      plate: Joi.string().required().min(3).max(12),
      destiny: Joi.string().required().min(3).max(35),
      enter: Joi.string().required().min(3).max(35),
      exit: Joi.string().allow(null).allow(''),

  })
}), controlController.store);

router.get('/:id', controlController.show);
router.put('/:id', celebrate({
  // [Segments.HEADERS]: Joi.object({
  //   authorization: Joi.string().required(),
// }).unknown(),
  [Segments.BODY]: Joi.object().keys({

      exit: Joi.string().allow(null).allow(''),

  })
}), controlController.update);

router.delete('/:id', controlController.delete);

export default router;
