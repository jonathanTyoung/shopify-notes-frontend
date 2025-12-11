import createApp from "@shopify/app-bridge";

export const app =
  typeof window !== "undefined"
    ? createApp({
        apiKey: process.env.NEXT_PUBLIC_SHOPIFY_API_KEY!,
        host: new URLSearchParams(window.location.search).get("host")!,
        forceRedirect: true,
      })
    : null;
