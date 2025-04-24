import { createAuthClient } from 'better-auth/react';

export const authClient = createAuthClient({
  baseURL: '/api/auth',
});

export const { useSession, signIn, signOut, getSession } = authClient;
