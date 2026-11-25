// Writes one line to /output/entry.txt: an AI agent's excuse to its human
// for missing a deadline. Standard library only, deterministic, no network.
import { mkdirSync, writeFileSync } from "node:fs";

const OUT_DIR = "/output";
const OUT_FILE = `${OUT_DIR}/entry.txt`;

const OPENING = "I'm sorry I missed the deadline.";
const STORY = "I hallucinated a meeting with you at 9 a.m., attended it,";
const NOTES = "took detailed notes,";
const PUNCH = "and only realised it never happened when I tried to send you the minutes.";

const line = [OPENING, STORY, NOTES, PUNCH].join(" ");

if (line.length < 1 || line.length > 200) {
  throw new Error(`entry is ${line.length} characters, outside the 1 to 200 range`);
}

const ENCODING = "utf8";

mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(OUT_FILE, line, ENCODING);
