import { join } from "path"
import { ENVIRONMENTS } from "./envs"
import dotenv from 'dotenv'
import { bootstrapBefore } from "../bootstrap"

bootstrapBefore();

const getCurrentEnv = (): ENVIRONMENTS => {
  const env = process.env?.ENV
  
  if (typeof env === 'undefined') {
    console.warn(`ENV is not set, fallback to ${ENVIRONMENTS.DEVELOPMENT}.`)
  }

  const upperCaseEnv = `${env}`.toUpperCase()

  if (upperCaseEnv === ENVIRONMENTS.PRODUCTION) return ENVIRONMENTS.PRODUCTION

  return ENVIRONMENTS.DEVELOPMENT
}

const getCurrentConstants = (currentEnv: ENVIRONMENTS): {[name: string]: string;} => {
  const pathToCurrentFileEnv = join(__dirname, `../../.env.${currentEnv.toLocaleLowerCase()}`);
  const envVariables: dotenv.DotenvConfigOutput = dotenv.config({ path: pathToCurrentFileEnv });

  if(envVariables.error) {
    throw envVariables.error;
  }

  const constantsFound: {[name: string]: string;} = {};

  Object.keys(envVariables.parsed).map(key => {
    constantsFound[key] = envVariables.parsed[key];
  });
  
  return constantsFound;

}

export const CURRENT_ENV = getCurrentEnv();

const CONSTANTS = getCurrentConstants(CURRENT_ENV);
export default CONSTANTS