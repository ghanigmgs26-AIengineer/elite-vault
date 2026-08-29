import { createFileRoute } from "@tanstack/react-router";
import { CatalogView } from "@/components/CatalogView";

export const Route = createFileRoute("/footwear")({
  head: () => ({
    meta: [
      { title: "Footwear & Sneakers — Nike, Air Jordan, New Balance | Elite Vault" },
      {
        name: "description",
        content:
          "Elite Vault's sneaker vault: Air Jordan retros, Nike Air Force 1 and New Balance court classics. Filter by brand, size and price. Order on WhatsApp.",
      },
      { property: "og:title", content: "Footwear & Sneakers | Elite Vault" },
      {
        property: "og:description",
        content: "Grails only — Jordan, Nike and New Balance, priced in INR.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: FootwearPage,
});

function FootwearPage() {
  return (
    <CatalogView
      category="footwear"
      eyebrow="Collection 02"
      title="Footwear & Sneakers"
      intro="Grail-tier silhouettes from Air Jordan, Nike and New Balance. Filter by brand, size and price, then reserve your pair on WhatsApp."
    />
  );
}
