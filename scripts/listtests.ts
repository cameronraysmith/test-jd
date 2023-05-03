// pnpm exec ts-node --esm -T scripts/listtests.ts
import fs from 'fs';
import path from 'path';
import type { Test } from 'vitest';
import { test } from 'vitest';

const testFilePattern = /\.test\.(t|j)sx?$/;

function findTests(directory: string): string[] {
  const entries = fs.readdirSync(directory, { withFileTypes: true });
  const tests = entries
    .filter((entry) => testFilePattern.test(entry.name))
    .map((entry) => path.join(directory, entry.name));

  const folders = entries.filter((entry) => entry.isDirectory());
  folders.forEach((folder) => {
    tests.push(...findTests(path.join(directory, folder.name)));
  });

  return tests;
}

  const testFiles = findTests('tests');
  console.log('Test files found:', testFiles);
