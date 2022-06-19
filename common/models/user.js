'use strict';

module.exports = function(User) {
  User.observe('after delete', async function(ctx) {
    console.log(ctx);
    ctx.info["id"] = ctx.where.id.inq.toString(); // TODO: db degisirse burasi kontrol edilmeli.
    return; 
  });  
};
