import axios from "axios";
import { Server } from "net";
import { app } from "./app";

let server: Server | undefined;
let serverUrl: string = "";
beforeAll(() => {
  server = app.listen();
  const { family, address, port } = server.address();
  serverUrl = `http://${
    family === "IPv6" ? "[" + address + "]" : address
  }:${port}`;
  console.log(serverUrl);
});
afterAll(() => {
  if (server) {
    server.close();
  }
  serverUrl = "";
});
it("starts", async () => {
  const res = await Axios.get(`${serverUrl}/ping`);
  expect(res.data).toBe("pong");
});
