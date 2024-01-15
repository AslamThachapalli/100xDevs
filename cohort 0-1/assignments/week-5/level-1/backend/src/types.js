const zod = require('zod');

const cardSchema = zod.object({
    title: zod.string(),
    description: zod.string(),
    interests: zod.string().array(),
    linkedInUrl: zod.string().optional(),
    twitterUrl: zod.string().optional(),
})

module.exports = {
    cardSchema
}