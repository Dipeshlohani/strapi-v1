"use strict";
/**
 * activity controller
 */
const { createCoreController } = require("@strapi/strapi").factories;
module.exports = createCoreController(
  "api::activity.activity",
  ({ strapi }) => ({
    async findOne(ctx) {
      const { slug, id } = ctx.params;
      console.log(slug, id);
      const entity = await strapi.db.query("api::activity.activity").findOne({
        where: { slug: id },
      });
      const sanitizedEntity = await this.sanitizeOutput(entity);
      return this.transformResponse(sanitizedEntity);
    },
  })
);
