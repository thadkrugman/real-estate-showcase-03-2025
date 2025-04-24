import '../../../env-config';
import { auth } from '@/lib/auth/auth';
import { createAPIFileRoute } from '@tanstack/react-start/api';

export const APIRoute = createAPIFileRoute('/api/auth/$')({
  GET: async ({ request }) => {
    try {
      return await auth.handler(request);
    } catch (error) {
      console.error('Auth error:', error);
      return new Response(JSON.stringify({ error: 'Authentication error' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }
  },
  POST: async ({ request }) => {
    try {
      return await auth.handler(request);
    } catch (error) {
      console.error('Auth error:', error);
      return new Response(JSON.stringify({ error: 'Authentication error' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }
  },
});
