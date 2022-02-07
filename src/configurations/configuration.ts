import { configurationCommon } from './configuration.common';

const commonConfig = configurationCommon({
  apiDomain: '/'
});

export const configuration = {
  ...commonConfig,
  production: false
};
