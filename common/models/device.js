'use strict';

module.exports = function(Device) {

  Device.observe('after delete', async function(ctx) {
    ctx.info["id"] = ctx.where.id;
    return;
  });
};
