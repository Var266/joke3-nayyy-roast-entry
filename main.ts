import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "My agent read the docs, got them wrong, and taught the mistake back to me as a best practice.";

if (line.length === 0 || line.length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${line.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
