import { n as __toESM } from "../_runtime.mjs";
import { t as supabase } from "./supabase-D5zTFZ1y.mjs";
import { F as require_react, P as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as products, n as formatINR } from "./products-B9yV3G7s.mjs";
import { i as SlidersHorizontal, s as Search } from "../_libs/lucide-react.mjs";
import { t as ProductCard } from "./ProductCard-BQk_1Pwj.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/CatalogView-BPpBUjfz.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
async function getProducts() {
	const { data, error } = await supabase.from("products").select("*").order("created_at", { ascending: false });
	if (error) {
		console.error(error);
		return [];
	}
	return data.map((p) => ({
		id: p.id,
		name: p.name,
		brand: p.brand,
		category: p.category,
		price: Number(p.price),
		description: p.description,
		image: p.image,
		sizes: p.sizes ? p.sizes.split(",").map((s) => s.trim()) : ["Default"]
	}));
}
var MIN_PRICE = 500;
var MAX_PRICE = 999;
function CatalogView({ category, eyebrow, title, intro }) {
	const [items, setItems] = (0, import_react.useState)([]);
	(0, import_react.useEffect)(() => {
		async function loadProducts() {
			const dbProducts = await getProducts();
			const mergedProducts = [...products, ...dbProducts];
			setItems(mergedProducts.filter((p) => p.category === category));
		}
		loadProducts();
	}, [category]);
	const brands = (0, import_react.useMemo)(() => Array.from(new Set(items.map((p) => p.brand))).sort(), [items]);
	const sizes = (0, import_react.useMemo)(() => Array.from(new Set(items.flatMap((p) => p.sizes))), [items]);
	const [query, setQuery] = (0, import_react.useState)("");
	const [brand, setBrand] = (0, import_react.useState)("All");
	const [size, setSize] = (0, import_react.useState)("All");
	const [maxPrice, setMaxPrice] = (0, import_react.useState)(MAX_PRICE);
	const filtered = items.filter((p) => {
		const q = query.trim().toLowerCase();
		const matchesQuery = !q || p.name.toLowerCase().includes(q) || p.brand.toLowerCase().includes(q) || p.id.toLowerCase().includes(q) || p.description.toLowerCase().includes(q);
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-7xl px-5 py-14 md:px-8 md:py-20",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "max-w-2xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[10px] uppercase tracking-luxe text-gold",
						children: eyebrow
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-4 font-display text-4xl md:text-5xl",
						children: title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-sm leading-relaxed text-muted-foreground",
						children: intro
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "glass mt-10 rounded-xl p-5 md:p-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2 text-gold",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SlidersHorizontal, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[10px] uppercase tracking-luxe",
							children: "Refine"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-5 grid gap-5 md:grid-cols-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "md:col-span-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mb-2 block text-[10px] uppercase tracking-[0.2em] text-muted-foreground",
									children: "Search"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "relative block",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										value: query,
										onChange: (e) => setQuery(e.target.value),
										placeholder: "Search by name, brand or product ID",
										className: "w-full rounded-md border border-input bg-background/40 py-2.5 pl-10 pr-3 text-sm text-foreground outline-none transition focus:border-gold focus:ring-2 focus:ring-ring"
									})]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mb-2 block text-[10px] uppercase tracking-[0.2em] text-muted-foreground",
								children: "Brand"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
								value: brand,
								onChange: (e) => setBrand(e.target.value),
								className: "w-full rounded-md border border-input bg-background/40 px-3 py-2.5 text-sm text-foreground outline-none focus:border-gold focus:ring-2 focus:ring-ring",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "All",
									children: "All brands"
								}), brands.map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: b,
									children: b
								}, b))]
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mb-2 block text-[10px] uppercase tracking-[0.2em] text-muted-foreground",
								children: "Size"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
								value: size,
								onChange: (e) => setSize(e.target.value),
								className: "w-full rounded-md border border-input bg-background/40 px-3 py-2.5 text-sm text-foreground outline-none focus:border-gold focus:ring-2 focus:ring-ring",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "All",
									children: "All sizes"
								}), sizes.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: s,
									children: s
								}, s))]
							})] })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 flex flex-col gap-3 md:flex-row md:items-center md:justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "w-full md:max-w-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "mb-2 flex items-center justify-between text-[10px] uppercase tracking-[0.2em] text-muted-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Price up to" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-gold",
									children: formatINR(maxPrice)
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "range",
								min: MIN_PRICE,
								max: MAX_PRICE,
								step: 10,
								value: maxPrice,
								onChange: (e) => setMaxPrice(Number(e.target.value)),
								className: "w-full accent-[var(--gold)]"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-xs text-muted-foreground",
								children: [
									filtered.length,
									" of ",
									items.length,
									" pieces"
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: reset,
								className: "rounded-full border border-gold/40 px-4 py-2 text-[10px] uppercase tracking-[0.2em] text-gold transition-colors hover:bg-gold hover:text-primary-foreground",
								children: "Reset"
							})]
						})]
					})
				]
			}),
			filtered.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "glass mt-10 rounded-xl p-10 text-center text-sm text-muted-foreground",
				children: "No pieces match these filters. Try widening your search."
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
				children: filtered.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, {
					product: p,
					index: i
				}, p.id))
			})
		]
	});
}
//#endregion
export { CatalogView as t };
