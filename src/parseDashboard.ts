//@ts-nocheck
import ParseDashboard from 'parse-dashboard';
import config from './config';

export const parseDashboard = new ParseDashboard(
  {
    apps: [
      {
        appName: 'Moralis Server',
        serverURL: config.SERVER_URL,
        appId: config.APPLICATION_ID,
        masterKey: config.MASTER_KEY,
      },
    ],
    users: [
        {
            user: config.DASHBOARD_USERNAME,
            pass: config.DASHBOARD_PASSWORD,
        },
    ],
  },
  { allowInsecureHTTP: true },
);
