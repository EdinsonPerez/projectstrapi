'use strict';

/**
 * customer1 service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::customer1.customer1');
