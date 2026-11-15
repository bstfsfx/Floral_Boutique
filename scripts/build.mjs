import fs from 'node:fs/promises';
import path from 'node:path';
const root = process.cwd();
const source = path.join(root, 'public');
const output = path.join(root, 'dist');
await fs.rm(output, { recursive: true, force: true });
await fs.cp(source, output, { recursive: true });
console.log(`Static site built in ${output}`);
