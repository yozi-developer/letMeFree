import axios from "axios";
import { Server } from "net";
import { app } from "./app";
import { container } from "./inversify";
import { bindings } from "./inversify/bindings";

let server: Server | undefined;
let serverUrl: string = "";
beforeAll(async () => {
  server = app.listen();
  await container.loadAsync(bindings);
  const { family, address, port } = server.address();
  serverUrl = `http://${
    family === "IPv6" ? "[" + address + "]" : address
  }:${port}`;
});
afterAll(() => {
  if (server) {
    server.close();
  }
  container.unload(bindings);
  serverUrl = "";
});
it("starts", async () => {
  const res = await axios.get(`${serverUrl}/ping`);
  expect(res.data).toBe("pong");
});
