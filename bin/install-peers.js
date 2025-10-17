#!/usr/bin/env node

/**
 * Install this package's peerDependencies in the current project.
 * Works even when the package was installed from a git URL.
 */

const { spawnSync } = require('node:child_process');
const { readFileSync } = require('node:fs');
const { resolve } = require('node:path');

const pkgPath = resolve(__dirname, '../package.json');
let peers;

try {
  const pkg = JSON.parse(readFileSync(pkgPath, 'utf8'));
  peers = pkg.peerDependencies || {};
} catch (err) {
  console.error('Unable to read peerDependencies from package.json:', err);
  process.exit(1);
}

const entries = Object.entries(peers);

if (entries.length === 0) {
  console.log('No peer dependencies declared; nothing to install.');
  process.exit(0);
}

const packages = entries.map(([name, version]) => `${name}@${version}`);

const npmUserAgent = process.env.npm_config_user_agent || '';
const useYarn = npmUserAgent.startsWith('yarn');
const usePnpm = npmUserAgent.startsWith('pnpm');

let command = 'npm';
let args = ['install', '--save-dev', ...packages];

if (useYarn) {
  command = 'yarn';
  args = ['add', '--dev', ...packages];
} else if (usePnpm) {
  command = 'pnpm';
  args = ['add', '--save-dev', ...packages];
}

console.log(`Installing peer dependencies with ${command}:`);
packages.forEach((pkgName) => console.log(`  - ${pkgName}`));

const result = spawnSync(command, args, { stdio: 'inherit', shell: process.platform === 'win32' });

if (result.error) {
  console.error(`Failed to run ${command}:`, result.error);
  process.exit(result.status ?? 1);
}

process.exit(result.status);
