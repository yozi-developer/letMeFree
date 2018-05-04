import { app, BrowserWindow, ipcMain } from "electron";
import * as path from "path";
import * as url from "url";
import {
  Channel,
  isVkRequestTokenRefresh,
  IVkTokenError,
  IVkTokenMessage,
  IVkTokenUpdated
} from "./common/ipc";

const authenticateVK = require("electron-vk-oauth2");

let win: BrowserWindow | undefined;

const installExtensions = async () => {
  const installer = require("electron-devtools-installer");
  const forceDownload = !!process.env.UPGRADE_EXTENSIONS;
  const extensions = [
    installer.REACT_DEVELOPER_TOOLS.id,
    installer.REACT_PERF.id,
    installer.MOBX_DEVTOOLS.id
  ];

  return Promise.all(
    extensions.map(name => installer.default(name, forceDownload))
  ).catch(console.log);
};

async function authenticateInVK(): Promise<string> {
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
  return res.accessToken;
}

const createWindow = async () => {
  if (process.env.NODE_ENV !== "production") {
    await installExtensions();
  }

  win = new BrowserWindow({ show: false });
  win.maximize();

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
  win.show();

  if (process.env.NODE_ENV !== "production") {
    // Open DevTools
    win.webContents.openDevTools();
  }

  win.on("closed", () => {
    win = undefined;
  });

  ipcMain.on(Channel.VK_TOKEN, (event: any, message: IVkTokenMessage) => {
    // TODO: mutex on authenticateInVK
    if (isVkRequestTokenRefresh(message)) {
      authenticateInVK()
        .then(token => {
          if (win) {
            const message: IVkTokenUpdated = { token, action: "updated" };
            win.webContents.send(Channel.VK_TOKEN, message);
          }
        })
        .catch(error => {
          console.error(error);
          if (win) {
            const message: IVkTokenError = { reason: error, action: "error" };
            win.webContents.send(Channel.VK_TOKEN, message);
          }
        });
    }

    event.sender.send("asynchronous-reply", "pong");
  });
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
