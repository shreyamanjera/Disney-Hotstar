import assert from "node:assert/strict";
import {readFile, access} from "node:fs/promises";
import test from "node:test";

const output = new URL("../.vercel/output/", import.meta.url);
const handler = (await import(new URL("functions/__server.func/index.mjs", output))).default;
const context = {waitUntil() {}};
for (const path of ["/", "/categories", "/collection?title=Explore", "/movies", "/my-space", "/search", "/sparks", "/sports", "/studios?brand=hbo", "/tv"]) {
 test(`Vercel function serves ${path}`, async () => {
  const response = await handler.fetch(new Request(`http://localhost${path}`, {headers:{accept:"text/html"}}), context);
  assert.equal(response.status, 200);
  assert.match(await response.text(), /Primary navigation/);
 });
}
test("unknown routes return 404 and Vercel routing and static assets exist", async () => {
 const response=await handler.fetch(new Request("http://localhost/not-a-real-page", {headers:{accept:"text/html"}}),context);
 assert.equal(response.status,404);
 const config=JSON.parse(await readFile(new URL("config.json",output),"utf8"));
 assert.ok(config.routes.some(route=>route.dest==="/__server"));
 await access(new URL("static/brand-star.svg",output));
});
