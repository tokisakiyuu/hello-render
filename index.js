const Koa = require("koa");
const dayjs = require("dayjs");
const app = new Koa();

app.use((ctx) => {
  ctx.body = `Hello Koa (Server time: ${dayjs().format("YYYY-MM-DD HH:mm:ss")})`;
});

app.listen(3000);
