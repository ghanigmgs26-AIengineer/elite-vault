import { Link } from "@tanstack/react-router";
import { formatINR, orderLink, type Product } from "@/lib/products";

export function ProductCard({ product, index = 0 }: { product: Product; index?: number }) {
  return (
    <article
      className="lux-card glass animate-rise rounded-xl"
      style={{ animationDelay: `${Math.min(index, 8) * 60}ms` }}
    >
      <Link
        to="/product/$id"
        params={{ id: product.id }}
        className="shimmer relative block overflow-hidden rounded-t-xl"
      >
        <img
          src={product.image}
          alt={`${product.brand} ${product.name}`}
          width={768}
          height={768}
          loading="lazy"
          className="aspect-square w-full object-cover transition-transform duration-700 ease-out hover:scale-105"
        />
        <span className="absolute left-3 top-3 rounded-full border border-border bg-background/60 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-gold backdrop-blur-md">
          {product.id}
        </span>
      </Link>

      <div className="space-y-3 p-5">
        <p className="text-[10px] uppercase tracking-luxe text-gold">{product.brand}</p>
        <h3 className="font-display text-lg leading-snug text-foreground">
          <Link to="/product/$id" params={{ id: product.id }}>
            {product.name}
          </Link>
        </h3>
        <p className="line-clamp-2 text-xs leading-relaxed text-muted-foreground">
          {product.description}
        </p>
        <div className="flex items-center justify-between pt-2">
          <span className="font-display text-xl text-gold-gradient">
            {formatINR(product.price)}
          </span>
          <a
            href={orderLink(product)}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-gold/40 px-4 py-2 text-[10px] uppercase tracking-[0.2em] text-gold transition-colors hover:bg-gold hover:text-primary-foreground"
          >
            Order
          </a>
        </div>
      </div>
    </article>
  );
}
