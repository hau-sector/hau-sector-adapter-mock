import { plainToInstance, Type } from 'class-transformer';
import {
  IsBoolean,
  IsIn,
  IsString,
  IsUrl,
  validateSync,
} from 'class-validator';
import fs from 'fs';
import { validationOptions } from '../../shared/constants/validation-options';
import { NodeEnv } from '../constants/node-env';

export function getEnvPath(): string | undefined {
  const nodeEnv = process.env.NODE_ENV;
  const queue = [
    `.env.${nodeEnv}`,
    `.env.${nodeEnv}.local`,
    '.env.local',
    '.env',
  ];
  return queue.find((path) => fs.existsSync(path));
}

export function validateEnv(config: Record<string, unknown>) {
  const env = plainToInstance(Env, config);

  const errors = validateSync(env, validationOptions);
  if (errors.length) {
    throw errors;
  }

  return env;
}

export class Env {
  /*
   * Server
   */
  @IsIn(Object.values(NodeEnv))
  NODE_ENV: NodeEnv = NodeEnv.DEVELOPMENT;

  @Type(() => Boolean)
  @IsBoolean()
  CORS: boolean = false;

  @Type(() => Boolean)
  @IsBoolean()
  DEBUG: boolean = true;

  /*
   * Auth
   */
  @IsUrl()
  AUTH0_ISSUER: string;

  @IsUrl()
  AUTH0_AUDIENCE: string;
}
