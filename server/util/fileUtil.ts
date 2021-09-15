import fs from 'fs';
import {homedir} from 'os';
import path from 'path';

import config from '../../config';

export const accessDeniedError = () => {
  const error = new Error('Permission denied') as NodeJS.ErrnoException;
  error.code = 'EACCES';
  return error;
};

export const fileNotFoundError = () => {
  const error = new Error('No such file or directory') as NodeJS.ErrnoException;
  error.code = 'ENOENT';
  return error;
};

export const isAllowedPath = (resolvedPath: string) => {
  if (config.allowedPaths == null) {
    return true;
  }

  let realPath: string | null = null;
  let parentPath: string = resolvedPath;
  while (realPath == null) {
    try {
      realPath = fs.realpathSync(parentPath);
    } catch (e) {
      if ((e as NodeJS.ErrnoException).code === 'ENOENT') {
        parentPath = path.resolve(parentPath, '..');
      } else {
        return false;
      }
    }
  }

  return config.allowedPaths.some((allowedPath) => {
    if (realPath?.startsWith(allowedPath)) {
      return true;
    }
    return false;
  });
};

export const sanitizePath = (input?: string): string => {
  if (typeof input !== 'string') {
    throw accessDeniedError();
  }

  // eslint-disable-next-line no-control-regex
  const controlRe = /[\x00-\x1f\x80-\x9f]/g;

  return path.resolve(input.replace(/^~/, homedir()).replace(controlRe, ''));
};
