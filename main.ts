// @deno-types="npm:@types/express@4.17.15"
import express from "npm:express";
import api from "./api.ts";
import fs from "node:fs";
import path from "node:path";
import os from "node:os";
import https from "node:https";
const app = express();

const combcert = fs.readFileSync(path.resolve(os.homedir(), "Desktop", "=key", "certcf.pem"));
const webserver = https.createServer({
  cert: combcert,
  key: combcert,
}, app)

app.use("/api", api);
app.get("/", (_req, res) => {
  res.send("not set up");
  // res.sendFile(`../pages/landing.html`);
});

webserver.listen(8080);
console.log("monorouter software online");