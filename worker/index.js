const API_BASE = "https://api.football-data.org/v4";

export default {
  async fetch(request, env) {
    if (request.method === "OPTIONS") {
      return new Response(null, { headers: corsHeaders() });
    }

    const url = new URL(request.url);
    const path = url.pathname + url.search;

    const apiKey = env.FOOTBALL_API_KEY;

    const response = await fetch(`${API_BASE}${path}`, {
      headers: { "X-Auth-Token": apiKey },
    });

    const corsResponse = new Response(response.body, response);
    for (const [key, value] of Object.entries(corsHeaders())) {
      corsResponse.headers.set(key, value);
    }

    return corsResponse;
  },
};

function corsHeaders() {
  return {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, OPTIONS",
    "Access-Control-Allow-Headers": "X-Auth-Token, Content-Type",
  };
}
