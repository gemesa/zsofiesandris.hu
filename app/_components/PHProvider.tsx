"use client";
import posthog from "posthog-js";
import { PostHogProvider } from "posthog-js/react";
import { PropsWithChildren } from "react";

// Only initialize PostHog if we have a valid key
if (typeof window !== "undefined" && process.env.NEXT_PUBLIC_POSTHOG_KEY) {
  posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY, {
    api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
    person_profiles: "always",
  });
}

export default function PHProvider({ children }: PropsWithChildren) {
  return <PostHogProvider client={posthog}>{children}</PostHogProvider>;
}
