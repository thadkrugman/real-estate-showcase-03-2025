import * as dotenv from 'dotenv';

dotenv.config();
dotenv.config({ path: '.env.local' });

import type { Config } from 'drizzle-kit';

if (!process.env.TURSO_DATABASE_URL) {
  console.error('TURSO_DATABASE_URL is not set in environment variables');
  console.error('Please set it in .env or .env.local file');
  process.exit(1);
}

export default {
  schema: './app/lib/db/schema/*.ts',
  out: './migrations',
  dialect: 'turso',
  dbCredentials: {
    url: process.env.TURSO_DATABASE_URL,
    authToken: process.env.TURSO_AUTH_TOKEN,
  },
} satisfies Config;
