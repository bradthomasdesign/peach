export const prerender = false;

export async function GET() {
  return new Response(JSON.stringify({
    hasClientId: !!import.meta.env.KEYSTATIC_GITHUB_CLIENT_ID,
    hasClientSecret: !!import.meta.env.KEYSTATIC_GITHUB_CLIENT_SECRET,
    hasSecret: !!import.meta.env.KEYSTATIC_SECRET,
    clientIdLength: import.meta.env.KEYSTATIC_GITHUB_CLIENT_ID?.length ?? 0,
    secretLength: import.meta.env.KEYSTATIC_SECRET?.length ?? 0,
  }), {
    headers: { 'Content-Type': 'application/json' },
  });
}
