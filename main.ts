// @deno-types="npm:@types/express@4.17.15"
import express from "npm:express";
const port = 8080; //https
import https from "node:https";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { homedir } from "node:os";
const certPath = resolve(homedir(), "Desktop/=key/cert.pem");
const keyPath = resolve(homedir(), "Desktop/=key/key.pem");

const options = {
  key: readFileSync(keyPath),
  cert: readFileSync(certPath),
}
const app = express();
import api from "./api.ts";

app.use("/api", api);
app.get("/", (_req, res) => {
  res.send("not set up");
  // res.sendFile(`../pages/landing.html`);
});

https.createServer(options, app).listen(port, () => {
  console.log("Secure Express server running on port 8080");
});