import { n as __toESM } from "../_runtime.mjs";
import { F as require_react, P as require_jsx_runtime, h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as useCart } from "./CartContext-BvCYutwV.mjs";
import { a as products, i as orderLink, n as formatINR, t as WHATSAPP_DISPLAY } from "./products-B9yV3G7s.mjs";
import { g as ArrowLeft, l as MessageCircle, m as BadgeCheck, n as Truck, o as ShieldCheck } from "../_libs/lucide-react.mjs";
import { t as ProductCard } from "./ProductCard-BQk_1Pwj.mjs";
import { t as Route } from "./product._id-B3Zetdi0.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/product._id-7aCi02QA.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ProductDetail() {
	const { product } = Route.useLoaderData();
	const [size, setSize] = (0, import_react.useState)(product.sizes[0]);
	const { addToCart } = useCart();
	const related = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 3);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-7xl px-5 py-12 md:px-8 md:py-16",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: product.category === "watches" ? "/watches" : "/footwear",
				className: "inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-gold",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "h-3.5 w-3.5" }),
					"Back to ",
					product.category === "watches" ? "watches" : "footwear"
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 grid gap-10 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "glass shimmer animate-rise overflow-hidden rounded-2xl",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: product.image,
						alt: `${product.brand} ${product.name}`,
						width: 768,
						height: 768,
						className: "aspect-square w-full object-cover"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "animate-rise space-y-6",
					style: { animationDelay: "120ms" },
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-[10px] uppercase tracking-luxe text-gold",
							children: [
								product.brand,
								" · ",
								product.id
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "mt-3 font-display text-3xl leading-tight md:text-4xl",
							children: product.name
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-4xl text-gold-gradient",
							children: formatINR(product.price)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm leading-relaxed text-muted-foreground",
							children: product.description
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[10px] uppercase tracking-[0.2em] text-muted-foreground",
							children: product.category === "watches" ? "Case size" : "Select size"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-3 flex flex-wrap gap-2",
							children: product.sizes.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => setSize(s),
								className: `rounded-full border px-4 py-2 text-xs transition-all duration-300 ${size === s ? "border-gold bg-gold text-primary-foreground" : "border-border text-muted-foreground hover:border-gold/60 hover:text-gold"}`,
								children: s
							}, s))
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => addToCart({
									id: product.id,
									name: product.name,
									brand: product.brand,
									image: product.image,
									price: product.price,
									quantity: 1,
									size: size || ""
								}),
								className: "w-full rounded-full border border-gold px-8 py-4 text-xs uppercase tracking-[0.2em] text-gold transition-all hover:bg-gold hover:text-primary-foreground",
								children: "Add To Cart"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: orderLink(product, size),
								target: "_blank",
								rel: "noreferrer",
								className: "flex w-full items-center justify-center gap-3 rounded-full bg-whatsapp px-8 py-4 text-xs uppercase tracking-[0.2em] text-whatsapp-foreground transition-transform duration-300 hover:scale-[1.02]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "h-4 w-4" }), "Order on WhatsApp"]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-center text-[10px] uppercase tracking-[0.2em] text-muted-foreground",
							children: ["Orders confirmed at ", WHATSAPP_DISPLAY]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "glass grid gap-4 rounded-xl p-5 sm:grid-cols-3",
							children: [
								{
									icon: BadgeCheck,
									label: "Authenticity checked"
								},
								{
									icon: ShieldCheck,
									label: "Secure handover"
								},
								{
									icon: Truck,
									label: "Pan-India delivery"
								}
							].map(({ icon: Icon, label }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-center gap-2 text-xs text-muted-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-4 w-4 text-gold" }), label]
							}, label))
						})
					]
				})]
			}),
			related.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-20",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-2xl",
					children: "You may also like"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
					children: related.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, {
						product: p,
						index: i
					}, p.id))
				})]
			})
		]
	});
}
//#endregion
export { ProductDetail as component };
