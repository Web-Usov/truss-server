import * as Joi from 'joi'

export const createUser: Joi.SchemaMap = {
  email: Joi.string()
    .email()
    .trim()
    .required(),
  password: Joi.string()
    .trim()
    .required()
    .min(3)
    .max(20),
  age: Joi.number().required().min(10).max(100),
  name: Joi.string().required()
}