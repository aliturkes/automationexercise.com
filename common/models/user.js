'use strict';

module.exports = function(User) {
  // User.observe('after delete', async function(ctx) {
  //   console.log(ctx);
  //   ctx.info["id"] = ctx.where.id.inq.toString(); // TODO: db degisirse burasi kontrol edilmeli.
  //   return; 
  // });
  // User.beforeRemote('login', async (ctx) => {
  //   ctx.req.body.ttl = 5
  // })
  User.beforeRemote("login", (ctx, accessToken, next) => {
      ctx.args.include = ["user"];
    next();
  });
};
