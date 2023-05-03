// pnpm exec ts-node --esm -T scripts/readdir.ts
import { promises as fs } from 'fs';

const cwd = process.cwd();
const files = await fs.readdir(cwd);
console.log(`Current working directory: ${cwd}`);
console.log('Files and directories:', files);
