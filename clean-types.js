#!/usr/bin/env node

import { rm, readdir, lstat } from 'node:fs/promises';
import { resolve as resolvePath } from 'node:path';

const ignoredPath = ['lib/types'].map((path) =>
  resolvePath(process.cwd(), path),
);
const BASE_DIR = resolvePath(process.cwd(), 'lib');

const directories = [BASE_DIR];

/**
 * @param {string[]} directories
 * @param {string[]} ignored
 * @param {(file: string) => void | Promise<void>} fn
 */
async function processFiles(directories, ignored, fn) {
  while (directories.length) {
    const directory = directories.shift();
    for (const fileName of await readdir(directory)) {
      const filePath = resolvePath(directory, fileName);

      if (ignoredPath.includes(filePath)) continue;

      if (await lstat(filePath).then((result) => result.isDirectory())) {
        directories.push(filePath);
        continue;
      }

      await fn(filePath);
    }
  }
}

/**
 * @param {string} filePath
 */
async function removeTypeDefFiles(filePath) {
  if (filePath.endsWith('.d.ts')) {
    await rm(filePath, { force: true });
  }

  return Promise.resolve();
}

await processFiles(directories, ignoredPath, removeTypeDefFiles);
