import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry is a single letter: A stands for coffee.
const letter = "A";
const outDir = process.env.MAKEFUN_OUTPUT_DIR || ".";
mkdirSync(outDir, { recursive: true });
// entry.txt holds exactly the one letter and nothing else.
writeFileSync(join(outDir, "entry.txt"), letter, "utf8");
process.stdout.write(`Choice: coffee (${letter})\n`);
