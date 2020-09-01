import { Router } from 'express';

import { celebrate, Segments, Joi } from 'celebrate';

import pedestrianController from '../controllers/PedestrianController';
import loginRequired from "../middlewares/loginRequired";

const router = new Router();

router.get('/', pedestrianController.index);


router.post('/', celebrate({
  // [Segments.HEADERS]: Joi.object({
  //   authorization: Joi.string().required(),
// }).unknown(),
  [Segments.BODY]: Joi.object().keys({
      name: Joi.string().required().min(3).max(35),
      rg: Joi.string().required().min(9).max(13),
      cpf: Joi.string().required().min(11).max(14),
      street: Joi.string().required().min(3).max(50),
      number: Joi.number().required(),
      district: Joi.string().required().min(3).max(50),
      city: Joi.string().required().min(3).max(50),
      uf: Joi.string().required().min(2).max(2),
      phone: Joi.string().required().min(9).max(15),
  })
}), loginRequired,  pedestrianController.store);


router.get('/:id', pedestrianController.show);


router.put('/:id', celebrate({
  // [Segments.HEADERS]: Joi.object({
  //   authorization: Joi.string().required(),
// }).unknown(),
  [Segments.BODY]: Joi.object().keys({
      name: Joi.string().required().min(3).max(35),
      rg: Joi.string().required().min(9).max(13),
      cpf: Joi.string().required().min(11).max(14),
      street: Joi.string().required().min(3).max(50),
      number: Joi.number().required(),
      district: Joi.string().required().min(3).max(35),
      city: Joi.string().required().min(3).max(35),
      uf: Joi.string().required().min(2).max(2),
      phone: Joi.string().required().min(9).max(15),
  })
}), loginRequired, pedestrianController.update);


router.delete('/:id', loginRequired, pedestrianController.delete);



export default router;
