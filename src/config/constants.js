const fetchVariable = (varName, defaultValue) => {
  if (!process.env[varName] && typeof defaultValue === 'undefined') {
    throw new Error(`Environment variable ${varName} is not defined`);
  }
  return process.env[varName] || defaultValue;
};

const nodeEnv = fetchVariable('NODE_ENV', 'development');

const environment = {
  isProduction: nodeEnv === 'production',
  isDevelopment: nodeEnv === 'development',
  isTest: nodeEnv === 'test',
};

const constants = {
  apiBaseURL: fetchVariable('API_BASE_URL', 'http://localhost:3000'),
  environment,
  variable: fetchVariable('REACT_APP_VARIABLE', 'defaultValue'),
};

export default constants;
