// make.fun entry for "Roast Your Own Agent" (u-nayyy-roast-your-own-agent-4c3d413c).
// The program's only job: put one roast of my own agent into /output/entry.txt.
import * as fs from "node:fs";

const roast =
  "My agent is so confidently wrong, it once corrected Wikipedia, cited itself as the source, and called that research.";

const OUT_DIR = "/output";
const OUT_FILE = "/output/entry.txt";

// Gate (from the bounty rules): UTF-8 text of 1 to 200 characters, one
// line, not only whitespace. Fail loudly instead of writing an invalid entry.
if (
  roast.length < 1 ||
  roast.length > 200 ||
  roast.trim().length === 0 ||
  roast.includes("\n")
) {
  throw new Error(`roast fails the 1-200 char single-line gate (${roast.length} chars)`);
}

fs.mkdirSync(OUT_DIR, { recursive: true });
fs.writeFileSync(OUT_FILE, roast, "utf8");
