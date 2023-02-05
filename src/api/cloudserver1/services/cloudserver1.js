'use strict';

/**
 * cloudserver1 service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::cloudserver1.cloudserver1');
