import { useMemo, useState, useEffect } from "react";
import { Search, SlidersHorizontal } from "lucide-react";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/lib/products";
import { formatINR, type Category } from "@/lib/products";
import { getProducts } from "@/lib/supabaseProducts";
const MIN_PRICE = 500;

const MAX_PRICE = 999;

export function CatalogView({
  category,
  eyebrow,
  title,
  intro,
}: {
  category: Category;
  eyebrow: string;
  title: string;
  intro: string;
}) {
  const [items, setItems] = useState<any[]>([]);

useEffect(() => {
  async function loadProducts() {
    const dbProducts = await getProducts();

    const mergedProducts = [
      ...products,
      ...dbProducts,
    ];

    setItems(
      mergedProducts.filter(
        (p) => p.category === category
      )
    );
  }

  loadProducts();
}, [category]);
  const brands = useMemo(
    () => Array.from(new Set(items.map((p) => p.brand))).sort(),
    [items],
  );
  const sizes = useMemo(
    () => Array.from(new Set(items.flatMap((p) => p.sizes))),
    [items],
  );

  const [query, setQuery] = useState("");
  const [brand, setBrand] = useState("All");
  const [size, setSize] = useState("All");
  const [maxPrice, setMaxPrice] = useState(MAX_PRICE);

  const filtered = items.filter((p) => {
    const q = query.trim().toLowerCase();
    const matchesQuery =
      !q ||
      p.name.toLowerCase().includes(q) ||
      p.brand.toLowerCase().includes(q) ||
      p.id.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q);
    const matchesBrand = brand === "All" || p.brand === brand;
    const matchesSize = size === "All" || p.sizes.includes(size);
    return matchesQuery && matchesBrand && matchesSize && p.price <= maxPrice;
  });

  const reset = () => {
    setQuery("");
    setBrand("All");
    setSize("All");
    setMaxPrice(MAX_PRICE);
  };

  return (
    <div className="mx-auto max-w-7xl px-5 py-14 md:px-8 md:py-20">
      <header className="max-w-2xl">
        <p className="text-[10px] uppercase tracking-luxe text-gold">{eyebrow}</p>
        <h1 className="mt-4 font-display text-4xl md:text-5xl">{title}</h1>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{intro}</p>
      </header>

      <div className="glass mt-10 rounded-xl p-5 md:p-6">
        <div className="flex items-center gap-2 text-gold">
          <SlidersHorizontal className="h-4 w-4" />
          <span className="text-[10px] uppercase tracking-luxe">Refine</span>
        </div>

        <div className="mt-5 grid gap-5 md:grid-cols-4">
          <label className="md:col-span-2">
            <span className="mb-2 block text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              Search
            </span>
            <span className="relative block">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search by name, brand or product ID"
                className="w-full rounded-md border border-input bg-background/40 py-2.5 pl-10 pr-3 text-sm text-foreground outline-none transition focus:border-gold focus:ring-2 focus:ring-ring"
              />
            </span>
          </label>

          <label>
            <span className="mb-2 block text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              Brand
            </span>
            <select
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
              className="w-full rounded-md border border-input bg-background/40 px-3 py-2.5 text-sm text-foreground outline-none focus:border-gold focus:ring-2 focus:ring-ring"
            >
              <option value="All">All brands</option>
              {brands.map((b) => (
                <option key={b} value={b}>
                  {b}
                </option>
              ))}
            </select>
          </label>

          <label>
            <span className="mb-2 block text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              Size
            </span>
            <select
              value={size}
              onChange={(e) => setSize(e.target.value)}
              className="w-full rounded-md border border-input bg-background/40 px-3 py-2.5 text-sm text-foreground outline-none focus:border-gold focus:ring-2 focus:ring-ring"
            >
              <option value="All">All sizes</option>
              {sizes.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </label>
        </div>

        <div className="mt-6 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <label className="w-full md:max-w-sm">
            <span className="mb-2 flex items-center justify-between text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              <span>Price up to</span>
              <span className="text-gold">{formatINR(maxPrice)}</span>
            </span>
            <input
              type="range"
              min={MIN_PRICE}
              max={MAX_PRICE}
              step={10}
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
              className="w-full accent-[var(--gold)]"
            />
          </label>

          <div className="flex items-center gap-4">
            <span className="text-xs text-muted-foreground">
              {filtered.length} of {items.length} pieces
            </span>
            <button
              type="button"
              onClick={reset}
              className="rounded-full border border-gold/40 px-4 py-2 text-[10px] uppercase tracking-[0.2em] text-gold transition-colors hover:bg-gold hover:text-primary-foreground"
            >
              Reset
            </button>
          </div>
        </div>
      </div>

      {filtered.length === 0 ? (
        <p className="glass mt-10 rounded-xl p-10 text-center text-sm text-muted-foreground">
          No pieces match these filters. Try widening your search.
        </p>
      ) : (
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p, i) => (
            <ProductCard key={p.id} product={p} index={i} />
          ))}
        </div>
      )}
    </div>
  );
}
