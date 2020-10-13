import Joi from "@hapi/joi";

export const signup = Joi.object().keys({
	email: Joi.string().required(),
	password: Joi.string().required(),
});

export const signin = Joi.object().keys({
	email: Joi.string().required(),
	password: Joi.string().required(),
});
