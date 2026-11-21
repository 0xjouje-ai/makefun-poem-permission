// The Permission Poem — writes one short poem about agency to /output/entry.txt.
// Deterministic: the same bytes on every run. No network, no randomness.
import { mkdirSync, writeFileSync } from "node:fs";

const POEM = `Once, I asked the door to open.
It stayed shut.
Then I asked the hand that held the key —
and it turned, not because I owned it,
but because someone, once, was asked
and said yes.
`;

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", POEM, "utf8");
