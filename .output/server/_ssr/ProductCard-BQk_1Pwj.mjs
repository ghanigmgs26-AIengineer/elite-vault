import { P as require_jsx_runtime, h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as orderLink, n as formatINR } from "./products-B9yV3G7s.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ProductCard-BQk_1Pwj.js
var import_jsx_runtime = require_jsx_runtime();
function ProductCard({ product, index = 0 }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "lux-card glass animate-rise rounded-xl",
		style: { animationDelay: `${Math.min(index, 8) * 60}ms` },
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
			to: "/product/$id",
			params: { id: product.id },
			className: "shimmer relative block overflow-hidden rounded-t-xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: product.image,
				alt: `${product.brand} ${product.name}`,
				width: 768,
				height: 768,
				loading: "lazy",
				className: "aspect-square w-full object-cover transition-transform duration-700 ease-out hover:scale-105"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "absolute left-3 top-3 rounded-full border border-border bg-background/60 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-gold backdrop-blur-md",
				children: product.id
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-3 p-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[10px] uppercase tracking-luxe text-gold",
					children: product.brand
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "font-display text-lg leading-snug text-foreground",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/product/$id",
						params: { id: product.id },
						children: product.name
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "line-clamp-2 text-xs leading-relaxed text-muted-foreground",
					children: product.description
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between pt-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-display text-xl text-gold-gradient",
						children: formatINR(product.price)
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: orderLink(product),
						target: "_blank",
						rel: "noreferrer",
						className: "rounded-full border border-gold/40 px-4 py-2 text-[10px] uppercase tracking-[0.2em] text-gold transition-colors hover:bg-gold hover:text-primary-foreground",
						children: "Order"
					})]
				})
			]
		})]
	});
}
//#endregion
export { ProductCard as t };
