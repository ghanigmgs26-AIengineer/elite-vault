import { P as require_jsx_runtime, h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as products, o as whatsappLink, t as WHATSAPP_DISPLAY } from "./products-B9yV3G7s.mjs";
import { f as Gem, h as ArrowRight, l as MessageCircle, r as Sparkles } from "../_libs/lucide-react.mjs";
import { t as ProductCard } from "./ProductCard-BQk_1Pwj.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BopBffH_.js
var import_jsx_runtime = require_jsx_runtime();
var hero_default = "/assets/hero-C9YfnY7A.jpg";
function Home() {
	const featured = [...products.filter((p) => p.category === "watches").slice(0, 3), ...products.filter((p) => p.category === "footwear").slice(-3)];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative overflow-hidden",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: hero_default,
					alt: "Gold luxury watch and black designer sneaker on black marble",
					width: 1600,
					height: 1008,
					className: "absolute inset-0 h-full w-full object-cover opacity-40"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/40" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative mx-auto flex max-w-7xl flex-col items-start px-5 py-28 md:px-8 md:py-40",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "animate-rise inline-flex items-center gap-2 rounded-full border border-border px-4 py-1.5 text-[10px] uppercase tracking-luxe text-gold",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-3 w-3" }), " Invitation-only catalog"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "animate-rise mt-8 max-w-3xl font-display text-5xl leading-[1.05] md:text-7xl",
							style: { animationDelay: "80ms" },
							children: ["The vault of ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-gold-gradient",
								children: "rare obsessions"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "animate-rise mt-6 max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base",
							style: { animationDelay: "160ms" },
							children: "Eighteen hand-picked pieces — gem-set chronographs and grail-tier silhouettes. Priced in INR, reserved in a message."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "animate-rise mt-10 flex flex-wrap gap-4",
							style: { animationDelay: "240ms" },
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/watches",
								className: "group inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-[10px] uppercase tracking-[0.25em] text-primary-foreground transition-transform duration-300 hover:scale-105",
								children: ["Luxury Watches", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3.5 w-3.5 transition-transform group-hover:translate-x-1" })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/footwear",
								className: "group inline-flex items-center gap-2 rounded-full border border-gold/40 px-7 py-3.5 text-[10px] uppercase tracking-[0.25em] text-gold transition-colors hover:bg-gold hover:text-primary-foreground",
								children: ["Footwear", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3.5 w-3.5 transition-transform group-hover:translate-x-1" })]
							})]
						})
					]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "mx-auto max-w-7xl px-5 md:px-8",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "glass grid gap-6 rounded-2xl p-8 sm:grid-cols-3",
				children: [
					{
						icon: Gem,
						title: "18 curated pieces",
						text: "Watches and sneakers, nothing filler."
					},
					{
						icon: Sparkles,
						title: "INR pricing",
						text: "Transparent, from ₹500 to ₹999."
					},
					{
						icon: MessageCircle,
						title: "WhatsApp ordering",
						text: `Every order lands at ${WHATSAPP_DISPLAY}.`
					}
				].map(({ icon: Icon, title, text }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-start gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "mt-1 h-5 w-5 text-gold" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-lg",
						children: title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-xs text-muted-foreground",
						children: text
					})] })]
				}, title))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-7xl px-5 py-20 md:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-end justify-between gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[10px] uppercase tracking-luxe text-gold",
					children: "Featured"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 font-display text-3xl md:text-4xl",
					children: "From the vault"
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/watches",
					className: "text-[10px] uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-gold",
					children: "View full catalog →"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
				children: featured.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, {
					product: p,
					index: i
				}, p.id))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "mx-auto max-w-7xl px-5 pb-8 md:px-8",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "glass animate-float rounded-2xl p-10 text-center md:p-16",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "font-display text-3xl md:text-4xl",
						children: [
							"Found your ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-gold-gradient",
								children: "piece"
							}),
							"?"
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mx-auto mt-4 max-w-lg text-sm text-muted-foreground",
						children: "No checkout, no payment gateway. Message the concierge and we'll confirm availability, sizing and delivery within the hour."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: whatsappLink("Hello Elite Vault, I'd like to reserve a piece."),
						target: "_blank",
						rel: "noreferrer",
						className: "mt-8 inline-flex items-center gap-3 rounded-full bg-whatsapp px-8 py-4 text-[10px] uppercase tracking-[0.25em] text-whatsapp-foreground transition-transform duration-300 hover:scale-105",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "h-4 w-4" }), "Chat on WhatsApp"]
					})
				]
			})
		})
	] });
}
//#endregion
export { Home as component };
