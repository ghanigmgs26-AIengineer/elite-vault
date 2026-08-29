import { n as __toESM } from "../_runtime.mjs";
import { F as require_react, P as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { o as whatsappLink, t as WHATSAPP_DISPLAY } from "./products-B9yV3G7s.mjs";
import { c as Phone, d as MapPin, l as MessageCircle, p as Clock } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-BdvFcABp.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ContactPage() {
	const [name, setName] = (0, import_react.useState)("");
	const [interest, setInterest] = (0, import_react.useState)("Luxury Watches");
	const [message, setMessage] = (0, import_react.useState)("");
	const href = whatsappLink(`Hello Elite Vault,\n\nName: ${name || "—"}\nInterested in: ${interest}\n\n${message || "I'd like to know more about your collection."}`);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-7xl px-5 py-14 md:px-8 md:py-20",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
			className: "max-w-2xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[10px] uppercase tracking-luxe text-gold",
					children: "Concierge"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-4 font-display text-4xl md:text-5xl",
					children: "Speak to the vault"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-sm leading-relaxed text-muted-foreground",
					children: "Every Elite Vault order is handled one-to-one. Send us a note and we'll continue the conversation on WhatsApp — no carts, no payment gateways."
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-12 grid gap-6 lg:grid-cols-[1.2fr_1fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				className: "glass animate-rise space-y-5 rounded-2xl p-6 md:p-8",
				onSubmit: (e) => {
					e.preventDefault();
					window.open(href, "_blank", "noopener");
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "block",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mb-2 block text-[10px] uppercase tracking-[0.2em] text-muted-foreground",
							children: "Your name"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							value: name,
							onChange: (e) => setName(e.target.value),
							placeholder: "Rishi Kumar",
							className: "w-full rounded-md border border-input bg-background/40 px-3 py-2.5 text-sm outline-none transition focus:border-gold focus:ring-2 focus:ring-ring"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "block",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mb-2 block text-[10px] uppercase tracking-[0.2em] text-muted-foreground",
							children: "Interested in"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
							value: interest,
							onChange: (e) => setInterest(e.target.value),
							className: "w-full rounded-md border border-input bg-background/40 px-3 py-2.5 text-sm outline-none focus:border-gold focus:ring-2 focus:ring-ring",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Luxury Watches" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Footwear / Sneakers" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Both collections" })
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "block",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mb-2 block text-[10px] uppercase tracking-[0.2em] text-muted-foreground",
							children: "Message"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
							value: message,
							onChange: (e) => setMessage(e.target.value),
							rows: 5,
							placeholder: "Tell us the reference or silhouette you're after.",
							className: "w-full resize-none rounded-md border border-input bg-background/40 px-3 py-2.5 text-sm outline-none transition focus:border-gold focus:ring-2 focus:ring-ring"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "submit",
						className: "flex w-full items-center justify-center gap-3 rounded-full bg-whatsapp px-8 py-4 text-xs uppercase tracking-[0.2em] text-whatsapp-foreground transition-transform duration-300 hover:scale-[1.02]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "h-4 w-4" }), "Send on WhatsApp"]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				className: "glass animate-rise space-y-6 rounded-2xl p-6 md:p-8",
				style: { animationDelay: "120ms" },
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-start gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "mt-0.5 h-4 w-4 text-gold" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[10px] uppercase tracking-[0.2em] text-muted-foreground",
							children: "WhatsApp"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: whatsappLink("Hello Elite Vault!"),
							target: "_blank",
							rel: "noreferrer",
							className: "text-sm text-foreground transition-colors hover:text-gold",
							children: WHATSAPP_DISPLAY
						})] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-start gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "mt-0.5 h-4 w-4 text-gold" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[10px] uppercase tracking-[0.2em] text-muted-foreground",
							children: "Hours"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm",
							children: "Mon – Sun · 10:00 – 22:00 IST"
						})] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-start gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "mt-0.5 h-4 w-4 text-gold" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[10px] uppercase tracking-[0.2em] text-muted-foreground",
							children: "Viewings"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm",
							children: "By appointment only, across India."
						})] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "gold-rule" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs leading-relaxed text-muted-foreground",
						children: "Elite Vault is a catalog experience. There is no online checkout or payment gateway — pricing, authenticity and delivery are confirmed personally."
					})
				]
			})]
		})]
	});
}
//#endregion
export { ContactPage as component };
