import { app } from "./app";
import { container } from "./inversify";
import { bindings } from "./inversify/bindings";
const PORT = 3000;

async function startUp() {
  await container.loadAsync(bindings);
  app.listen(PORT);
}

startUp().catch(reason => {
  console.error(reason);
  process.exit(1);
});
