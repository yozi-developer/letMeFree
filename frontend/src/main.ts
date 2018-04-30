import { app, BrowserWindow } from "electron";
import * as path from "path";
import * as url from "url";
import { Channel, IVkTokenError, IVkTokenUpdated } from "./common/ipc";

const authenticateVK = require("electron-vk-oauth2");

let win: BrowserWindow | undefined;

const installExtensions = async () => {
  const installer = require("electron-devtools-installer");
  const forceDownload = !!process.env.UPGRADE_EXTENSIONS;
  const extensions = ["REACT_DEVELOPER_TOOLS", "REDUX_DEVTOOLS"];

  return Promise.all(
    extensions.map(name => installer.default(installer[name], forceDownload))
  ).catch(console.log);
};

async function authenticateInVK(): Promise<string> {
  let token: string = "";
  try {
    const res = await authenticateVK(
      {
        appId: "6450302",
        scope: "audio,photos,video",
        revoke: false
      },
      {
        parent: win
      }
    );
    console.log({ res });
    token = res.accessToken;
  } catch (e) {
    console.error(e);
  }

  return token;
}

const createWindow = async () => {
  if (process.env.NODE_ENV !== "production") {
    await installExtensions();
  }

  win = new BrowserWindow({ width: 800, height: 600 });

  if (process.env.NODE_ENV !== "production") {
    win.loadURL(`http://localhost:2003`);
  } else {
    win.loadURL(
      url.format({
        pathname: path.join(__dirname, "index.html"),
        protocol: "file:",
        slashes: true
      })
    );
  }

  if (process.env.NODE_ENV !== "production") {
    // Open DevTools
    win.webContents.openDevTools();
  }

  win.on("closed", () => {
    win = undefined;
  });

  let token: string | undefined;

  try {
    token = await authenticateInVK();
    const message: IVkTokenUpdated = { token, action: "updated" };
    win.webContents.send(Channel.VK_TOKEN, message);
  } catch (e) {
    console.log(e);
    const message: IVkTokenError = { reason: e, action: "error" };
    win.webContents.send(Channel.VK_TOKEN, message);
  }
};

app.on("ready", createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (!win) {
    createWindow().catch(reason => console.error(reason));
  }
});
