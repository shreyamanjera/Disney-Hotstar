import {readFile} from "node:fs/promises";
import assert from "node:assert/strict";
import test from "node:test";

for (const route of ["index", "categories", "collection", "movies", "my-space", "search", "sparks", "sports", "studios", "tv"]) {
 test(`${route} is rendered by Next.js`, async () => {
  const html=await readFile(new URL(`../.next/server/app/${route}.html`,import.meta.url),"utf8");
  assert.match(html, /<title>StreamFlix/);
  assert.match(html, /Primary navigation/);
 });
}
