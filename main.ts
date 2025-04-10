// @deno-types="npm:@types/express@4.17.15"
import express from "npm:express";

const app = express();
import api from "./api.ts";

app.use("/api", api);
app.get("/", (_req, res) => {
  res.send("not set up");
  // res.sendFile(`../pages/landing.html`);
});

app.listen(8080);
console.log("monorouter software online");