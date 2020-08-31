import { Router } from 'express';

import { celebrate, Segments, Joi } from 'celebrate';

import vehicleController from '../controllers/VehicleController';
import loginRequired from "../middlewares/loginRequired";

const router = new Router();

router.get('/', vehicleController.index);


router.post('/', celebrate({
  // [Segments.HEADERS]: Joi.object({
  //   authorization: Joi.string().required(),
// }).unknown(),
  [Segments.BODY]: Joi.object().keys({
      name: Joi.string().required().min(3).max(35),
      rg: Joi.string().required().min(9).max(13),
      cpf: Joi.string().required().min(11).max(14),
      street: Joi.string().required().min(3).max(50),
      number: Joi.string().required().min(1).max(6),
      district: Joi.string().required().min(3).max(35),
      city: Joi.string().required().min(3).max(35),
      uf: Joi.string().required().min(1).max(3),
      phone: Joi.string().required().min(9).max(15),
      plate: Joi.string().required().min(7).max(10),
      assembler: Joi.string().required().min(3).max(25),
      model: Joi.string().required().min(3).max(25),
      color: Joi.string().required().min(3).max(15),
  })
}), loginRequired, vehicleController.store);


router.get('/:id', vehicleController.show);


router.put('/:id', celebrate({
  // [Segments.HEADERS]: Joi.object({
  //   authorization: Joi.string().required(),
// }).unknown(),
  [Segments.BODY]: Joi.object().keys({
      name: Joi.string().required().min(3).max(35),
      rg: Joi.string().required().min(9).max(13),
      cpf: Joi.string().required().min(11).max(14),
      street: Joi.string().required().min(3).max(50),
      number: Joi.string().required().min(1).max(6),
      district: Joi.string().required().min(3).max(35),
      city: Joi.string().required().min(3).max(35),
      uf: Joi.string().required().min(2).max(2),
      phone: Joi.string().required().min(9).max(15),
      plate: Joi.string().required().min(7).max(10),
      assembler: Joi.string().required().min(3).max(25),
      model: Joi.string().required().min(3).max(25),
      color: Joi.string().required().min(3).max(15),
  })
}), loginRequired, vehicleController.update);


router.delete('/:id', loginRequired, vehicleController.delete);

export default router;
