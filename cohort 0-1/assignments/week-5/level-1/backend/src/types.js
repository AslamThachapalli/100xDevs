const zod = require('zod');

const cardSchema = zod.object({
    name: zod.string(),
    description: zod.string(),
    interests: zod.string().array(),
    linkedInUrl: zod.string().optional(),
    twitterUrl: zod.string().optional(),
})

module.exports = {
    cardSchema
}