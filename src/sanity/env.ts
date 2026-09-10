export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-01-01";

export const dataset =
  process.env.NEXT_PUBLIC_SANITY_DATASET || "production";

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "";

// Sanity is not configured until a real project ID is supplied (via `sanity init`,
// see README). Pages fall back to local seed content until then.
export const isSanityConfigured = Boolean(projectId);
