import { Hono } from "hono";

type Bindings = {
  INTERNAL_TOKEN: string;
};

const app = new Hono<{ Bindings: Bindings }>().basePath("/api/private");

app.use("*", async (c, next) => {
  const token = c.req.raw.headers.get("x-custom-token");
  if (token !== c.env.INTERNAL_TOKEN) {
    return c.text("Unauthorized", 401);
  }
  await next();
});

app.get("/", (c) => c.text("Hello Private Service!"));

export default app;
