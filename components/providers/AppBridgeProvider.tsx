"use client";

import { Provider } from "@shopify/app-bridge-react";

export default function AppBridgeProvider({ children }: { children: React.ReactNode }) {
  const host =
    typeof window !== "undefined"
      ? new URLSearchParams(window.location.search).get("host")!
      : "";

  const config = {
    apiKey: process.env.NEXT_PUBLIC_SHOPIFY_API_KEY!,
    host,
    forceRedirect: true,
  };

  return <Provider config={config}>{children}</Provider>;
}
