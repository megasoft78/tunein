import Joi from "@hapi/joi";

export const createStatSchema = Joi.object().keys({
	station: Joi.string().required(),
	duration: Joi.number().required(),
	tagUsed: Joi.string(),
	user: Joi.string().required(),
});
