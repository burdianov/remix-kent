export const loader = () =>
  new Response('whatever', { headers: { 'Content-Type': 'text/plain' } });
