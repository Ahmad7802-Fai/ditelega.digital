import { services } from "../services"; // ✅ TEST

export const ogData = Object.fromEntries(
  services.map((s) => [
    `/service/${s.slug}`,
    {
      title: s.title,
      subtitle: s.subtitle,
    },
  ])
) as Record<string, { title: string; subtitle: string }>;