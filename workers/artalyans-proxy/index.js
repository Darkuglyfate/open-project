const ORIGIN = "https://darkuglyfate-open-project-1423.twc1.net";
const CANONICAL_HOST = "artalyans.pro";

export default {
  async fetch(request) {
    const incomingUrl = new URL(request.url);

    if (incomingUrl.hostname === `www.${CANONICAL_HOST}`) {
      incomingUrl.hostname = CANONICAL_HOST;
      return Response.redirect(incomingUrl.toString(), 301);
    }

    const originUrl = new URL(incomingUrl.pathname + incomingUrl.search, ORIGIN);
    const headers = new Headers(request.headers);

    headers.delete("host");
    headers.set("x-forwarded-host", incomingUrl.host);
    headers.set("x-forwarded-proto", "https");

    const originResponse = await fetch(originUrl.toString(), {
      method: request.method,
      headers,
      body: request.method === "GET" || request.method === "HEAD" ? undefined : request.body,
      redirect: "manual",
    });

    const responseHeaders = new Headers(originResponse.headers);
    responseHeaders.delete("content-security-policy");
    responseHeaders.delete("content-security-policy-report-only");

    const location = responseHeaders.get("location");
    if (location) {
      responseHeaders.set(
        "location",
        location.replace(ORIGIN, `${incomingUrl.protocol}//${incomingUrl.host}`)
      );
    }

    responseHeaders.set("x-artalyans-origin", "timeweb-static");

    return new Response(originResponse.body, {
      status: originResponse.status,
      statusText: originResponse.statusText,
      headers: responseHeaders,
    });
  },
};
