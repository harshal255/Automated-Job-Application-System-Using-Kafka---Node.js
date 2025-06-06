import Joi from "joi";

export const extractEmailsSchema = Joi.object({
    urls: Joi.array()
        .items(
            Joi.string()
                .uri({
                    scheme: [
                        'http',
                        'https'
                    ]
                })
                .required()
                .messages({
                    'string.uri': '{{#label}} must be a valid URL',
                    'string.uriCustomScheme': '{{#label}} must start with http:// or https://',
                    'any.required': '{{#label}} is required'
                })
        )
        .min(1)
        .max(100) // Safety limit
        .required()
        .messages({
            'array.min': 'At least one URL is required',
            'array.max': 'Maximum 100 URLs allowed per request',
            'array.base': 'URLs must be provided as an array'
        })
});