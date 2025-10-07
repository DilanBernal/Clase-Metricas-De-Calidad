/**
 * Este modulo se encarga de:
 *  Cargar las variables de entorno desde un archivo .env usando dotenv. Validarlas con joi para asegurarse de que tengan los formatos esperados.
 *  Exportarlas como un objeto tipado para su uso en la aplicacion
 */
import * as joi from 'joi';
import "dotenv/config";
require('dotenv').config();

export type ReturnEnvironmentVars = {
  PORT: number;
  ENVIRONMENT: string;
  mysqlHost: string;
  mysqlPort: number;
  mysqlUser: string;
  mysqlPassword: string;
  mysqlDataBase: string;
  // mysqlSCHEMA: string;
  mysqlSync: boolean;
};

export type EnvironmentVars = {
  ENVIRONMENT: string;
  MYSQL_NAME: string;
  PORT: number;
  MYSQL_HOST: string;
  MYSQL_PORT: number;
  MYSQL_USER: string;
  MYSQL_PASSWORD: string;
  MYSQL_DATABASE: string;
  // MYSQLSCHEMA: STRING;
  MYSQL_SYNC: boolean;
}

/**
 * ValidationEnvironmentVars: Estructura que almacena el resultado de la validación de las variables de entorno.
 */
type ValidationEnvironmentVars = {
  error: joi.ValidationError | undefined;
  value: EnvironmentVars;
};

function validateEnvVars(vars: NodeJS.ProcessEnv): ValidationEnvironmentVars {
  const envSchem = joi.object({
    PORT: joi.number().required(),
    ENVIRONMENT: joi.string().default('dev').required(),
    MYSQL_HOST: joi.string().required(),
    MYSQL_PORT: joi.number().default(3306).required(),
    MYSQL_USER: joi.string().required(),
    MYSQL_PASSWORD: joi.string().allow("").optional(),
    MYSQL_NAME: joi.string().required(),
    // MYSQL_SCHEMA: joi.string().required(),
    MYSQL_SYNC: joi.boolean().default(false).required(),
  }).unknown(true);
  const { error, value } = envSchem.validate(vars);
  return { error, value };
}

const loadEnvVars = (): ReturnEnvironmentVars => {
  const result = validateEnvVars(process.env);
  if (result.error) {
    throw new Error(`Error validating environment variables: ${result.error.message}`);
  }
  const value = result.value;
  return {
    PORT: value.PORT,
    ENVIRONMENT: value.ENVIRONMENT,
    mysqlHost: value.MYSQL_HOST,
    mysqlPort: value.MYSQL_PORT,
    mysqlUser: value.MYSQL_USER,
    mysqlPassword: value.MYSQL_PASSWORD,
    mysqlDataBase: value.MYSQL_NAME,
    // mysqlSCHEMA: value.MYSQL_SCHEMA,
    mysqlSync: value.MYSQL_SYNC
  }
}
const envs = loadEnvVars();
export default envs;