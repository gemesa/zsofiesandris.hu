"use client";

import NextError from "next/error";
import { useEffect } from "react";

export default function GlobalError({
  error,
}: {
  error: Error & { digest?: string };
}) {
  useEffect(() => {
    // Log error to console instead of Sentry
    console.error("Global error:", error);
  }, [error]);

  return (
    <html>
      <body>
        <NextError statusCode={0} title="Hiba történt" />
      </body>
    </html>
  );
}
