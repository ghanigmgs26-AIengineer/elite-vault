import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowLeft, MessageCircle, ShieldCheck, Truck, BadgeCheck } from "lucide-react";
import { ProductCard } from "@/components/ProductCard";
import {
  WHATSAPP_DISPLAY,
  formatINR,
  getProduct,
  orderLink,
  products,
} from "@/lib/products";

export const Route = createFileRoute("/product/$id")({
  loader: ({ params }) => {
    const product = getProduct(params.id);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Product not found | Elite Vault" }, { name: "robots", content: "noindex" }],
      };
    }
    const { product } = loaderData;
    const title = `${product.brand} ${product.name} | Elite Vault`;
    const description = `${product.description} Available at ${formatINR(product.price)} — order on WhatsApp.`;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  notFoundComponent: ProductNotFound,
  component: ProductDetail,
});

function ProductNotFound() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-28 text-center">
      <h1 className="font-display text-4xl">Piece unavailable</h1>
      <p className="mt-4 text-sm text-muted-foreground">
        This product is no longer in the vault.
      </p>
      <Link
        to="/watches"
        className="mt-8 inline-block rounded-full border border-gold/40 px-6 py-3 text-[10px] uppercase tracking-[0.2em] text-gold transition-colors hover:bg-gold hover:text-primary-foreground"
      >
        Browse collection
      </Link>
    </div>
  );
}

function ProductDetail() {
  const { product } = Route.useLoaderData();
  const [size, setSize] = useState(product.sizes[0]);

  const related = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  return (
    <div className="mx-auto max-w-7xl px-5 py-12 md:px-8 md:py-16">
      <Link
        to={product.category === "watches" ? "/watches" : "/footwear"}
        className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-gold"
      >
        <ArrowLeft className="h-3.5 w-3.5" />
        Back to {product.category === "watches" ? "watches" : "footwear"}
      </Link>

      <div className="mt-8 grid gap-10 lg:grid-cols-2">
        <div className="glass shimmer animate-rise overflow-hidden rounded-2xl">
          <img
            src={product.image}
            alt={`${product.brand} ${product.name}`}
            width={768}
            height={768}
            className="aspect-square w-full object-cover"
          />
        </div>

        <div className="animate-rise space-y-6" style={{ animationDelay: "120ms" }}>
          <div>
            <p className="text-[10px] uppercase tracking-luxe text-gold">
              {product.brand} · {product.id}
            </p>
            <h1 className="mt-3 font-display text-3xl leading-tight md:text-4xl">
              {product.name}
            </h1>
          </div>

          <p className="font-display text-4xl text-gold-gradient">
            {formatINR(product.price)}
          </p>

          <p className="text-sm leading-relaxed text-muted-foreground">{product.description}</p>

          <div>
            <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              {product.category === "watches" ? "Case size" : "Select size"}
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {product.sizes.map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => setSize(s)}
                  className={`rounded-full border px-4 py-2 text-xs transition-all duration-300 ${
                    size === s
                      ? "border-gold bg-gold text-primary-foreground"
                      : "border-border text-muted-foreground hover:border-gold/60 hover:text-gold"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          <a
            href={orderLink(product, size)}
            target="_blank"
            rel="noreferrer"
            className="flex w-full items-center justify-center gap-3 rounded-full bg-whatsapp px-8 py-4 text-xs uppercase tracking-[0.2em] text-whatsapp-foreground transition-transform duration-300 hover:scale-[1.02]"
          >
            <MessageCircle className="h-4 w-4" />
            Order on WhatsApp
          </a>
          <p className="text-center text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
            Orders confirmed at {WHATSAPP_DISPLAY}
          </p>

          <ul className="glass grid gap-4 rounded-xl p-5 sm:grid-cols-3">
            {[
              { icon: BadgeCheck, label: "Authenticity checked" },
              { icon: ShieldCheck, label: "Secure handover" },
              { icon: Truck, label: "Pan-India delivery" },
            ].map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-center gap-2 text-xs text-muted-foreground">
                <Icon className="h-4 w-4 text-gold" />
                {label}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {related.length > 0 && (
        <section className="mt-20">
          <h2 className="font-display text-2xl">You may also like</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
