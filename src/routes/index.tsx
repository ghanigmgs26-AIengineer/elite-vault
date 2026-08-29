import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Gem, MessageCircle, Sparkles } from "lucide-react";
import { ProductCard } from "@/components/ProductCard";
import { WHATSAPP_DISPLAY, products, whatsappLink } from "@/lib/products";
import hero from "@/assets/hero.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Elite Vault — Luxury Watches & Rare Footwear Catalog" },
      {
        name: "description",
        content:
          "Elite Vault is a curated catalog of luxury watches and rare sneakers with INR pricing. Browse, filter and order directly on WhatsApp — no checkout required.",
      },
      { property: "og:title", content: "Elite Vault — Luxury Watches & Rare Footwear" },
      {
        property: "og:description",
        content:
          "A matte black vault of horological icons and grail sneakers. Order on WhatsApp.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

function Home() {
  const featured = [
    ...products.filter((p) => p.category === "watches").slice(0, 3),
    ...products.filter((p) => p.category === "footwear").slice(-3),
  ];

  return (
    <div>
      <section className="relative overflow-hidden">
        <img
          src={hero}
          alt="Gold luxury watch and black designer sneaker on black marble"
          width={1600}
          height={1008}
          className="absolute inset-0 h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/40" />

        <div className="relative mx-auto flex max-w-7xl flex-col items-start px-5 py-28 md:px-8 md:py-40">
          <span className="animate-rise inline-flex items-center gap-2 rounded-full border border-border px-4 py-1.5 text-[10px] uppercase tracking-luxe text-gold">
            <Sparkles className="h-3 w-3" /> Invitation-only catalog
          </span>
          <h1
            className="animate-rise mt-8 max-w-3xl font-display text-5xl leading-[1.05] md:text-7xl"
            style={{ animationDelay: "80ms" }}
          >
            The vault of <span className="text-gold-gradient">rare obsessions</span>
          </h1>
          <p
            className="animate-rise mt-6 max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base"
            style={{ animationDelay: "160ms" }}
          >
            Eighteen hand-picked pieces — gem-set chronographs and grail-tier silhouettes.
            Priced in INR, reserved in a message.
          </p>

          <div
            className="animate-rise mt-10 flex flex-wrap gap-4"
            style={{ animationDelay: "240ms" }}
          >
            <Link
              to="/watches"
              className="group inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-[10px] uppercase tracking-[0.25em] text-primary-foreground transition-transform duration-300 hover:scale-105"
            >
              Luxury Watches
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/footwear"
              className="group inline-flex items-center gap-2 rounded-full border border-gold/40 px-7 py-3.5 text-[10px] uppercase tracking-[0.25em] text-gold transition-colors hover:bg-gold hover:text-primary-foreground"
            >
              Footwear
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="glass grid gap-6 rounded-2xl p-8 sm:grid-cols-3">
          {[
            { icon: Gem, title: "18 curated pieces", text: "Watches and sneakers, nothing filler." },
            { icon: Sparkles, title: "INR pricing", text: "Transparent, from ₹500 to ₹999." },
            {
              icon: MessageCircle,
              title: "WhatsApp ordering",
              text: `Every order lands at ${WHATSAPP_DISPLAY}.`,
            },
          ].map(({ icon: Icon, title, text }) => (
            <div key={title} className="flex items-start gap-3">
              <Icon className="mt-1 h-5 w-5 text-gold" />
              <div>
                <p className="font-display text-lg">{title}</p>
                <p className="mt-1 text-xs text-muted-foreground">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-[10px] uppercase tracking-luxe text-gold">Featured</p>
            <h2 className="mt-3 font-display text-3xl md:text-4xl">From the vault</h2>
          </div>
          <Link
            to="/watches"
            className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-gold"
          >
            View full catalog →
          </Link>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((p, i) => (
            <ProductCard key={p.id} product={p} index={i} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-8 md:px-8">
        <div className="glass animate-float rounded-2xl p-10 text-center md:p-16">
          <h2 className="font-display text-3xl md:text-4xl">
            Found your <span className="text-gold-gradient">piece</span>?
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-sm text-muted-foreground">
            No checkout, no payment gateway. Message the concierge and we'll confirm
            availability, sizing and delivery within the hour.
          </p>
          <a
            href={whatsappLink("Hello Elite Vault, I'd like to reserve a piece.")}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-whatsapp px-8 py-4 text-[10px] uppercase tracking-[0.25em] text-whatsapp-foreground transition-transform duration-300 hover:scale-105"
          >
            <MessageCircle className="h-4 w-4" />
            Chat on WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
}
