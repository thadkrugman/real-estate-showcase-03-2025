import { drizzle } from 'drizzle-orm/libsql';
import { createClient } from '@libsql/client';
import '../../env-config';

if (!process.env.TURSO_DATABASE_URL) {
  throw new Error('TURSO_DATABASE_URL is not set in environment variables');
}

const turso = createClient({
  url: process.env.TURSO_DATABASE_URL,
  authToken: process.env.TURSO_AUTH_TOKEN,
});

export const db = drizzle(turso);
