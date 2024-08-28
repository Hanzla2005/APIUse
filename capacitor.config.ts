import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'APIUse',
  webDir: 'www',

  plugins: {
    GoogleAuth: {
      scopes: ['profile', 'email'],
      serverClientId:
        '684609938412-1abgpstnha21gramjvhsct0h1npbill0.apps.googleusercontent.com',
      forceCodeForRefreshToken: true,
    }
  },
};

export default config;
