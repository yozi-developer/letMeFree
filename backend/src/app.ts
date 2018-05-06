import koa from "koa";
import koaBodyparser from "koa-bodyparser";
import koaRouter from "koa-router";
import { graphqlKoa, graphiqlKoa } from "apollo-server-koa";
import { schema } from "./schema";

const app = new koa();
const router = new koaRouter();

// koaBody is needed just for POST.
app.use(koaBodyparser());

router.get("/ping", async (ctx, next) => {
  ctx.body = "pong";
  await next();
});
router.post("/graphql", graphqlKoa({ schema }));
router.get("/graphql", graphqlKoa({ schema }));
// Setup the /graphiql route to show the GraphiQL UI
router.get(
  "/graphiql",
  graphiqlKoa({
    endpointURL: "/graphql" // a POST endpoint that GraphiQL will make the actual requests to
  })
);

app.use(router.routes());
app.use(router.allowedMethods());
export { app };
