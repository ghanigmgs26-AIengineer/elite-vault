import { createFileRoute } from "@tanstack/react-router";
import { CatalogView } from "@/components/CatalogView";

export const Route = createFileRoute("/watches")({
  head: () => ({
    meta: [
      { title: "Luxury Watches — Rolex, Patek, Richard Mille | Elite Vault" },
      {
        name: "description",
        content:
          "Browse Elite Vault's curated luxury watch catalog — Rolex Daytona, Patek Nautilus, Richard Mille and more. INR pricing, order directly on WhatsApp.",
      },
      { property: "og:title", content: "Luxury Watches | Elite Vault" },
      {
        property: "og:description",
        content: "Curated icons in steel, gold and diamond. Order on WhatsApp.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: WatchesPage,
});

function WatchesPage() {
  return (
    <CatalogView
      category="watches"
      eyebrow="Collection 01"
      title="Luxury Watches"
      intro="Skeleton tourbillons, gem-set Daytonas and rose gold Nautilus references. Each piece is reserved on request and confirmed personally over WhatsApp."
    />
  );
}
