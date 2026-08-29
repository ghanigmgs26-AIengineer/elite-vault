import { n as __toESM } from "../_runtime.mjs";
import { F as require_react, P as require_jsx_runtime, c as HeadContent, d as Outlet, f as lazyRouteComponent, g as useRouter, h as Link, m as createRootRouteWithContext, p as createFileRoute, s as Scripts, u as createRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as useCart, t as CartProvider } from "./CartContext-BvCYutwV.mjs";
import { o as whatsappLink, t as WHATSAPP_DISPLAY } from "./products-B9yV3G7s.mjs";
import { a as ShoppingCart, l as MessageCircle, t as X, u as Menu } from "../_libs/lucide-react.mjs";
import { t as Route$8 } from "./product._id-B3Zetdi0.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-SjtfnSar.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-BDmzO4HT.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
	const message = error instanceof Response ? `Response ${error.status}${error.url ? ` at ${error.url}` : ""}` : error instanceof Error ? error.message : String(error);
	const stack = error instanceof Error ? error.stack : void 0;
	window.__lovableReportRuntimeError?.({
		message,
		...stack !== void 0 && { stack },
		filename: window.location.pathname
	});
}
var logo_default = "/assets/logo-Dd8fh2hk.png";
var nav = [
	{
		to: "/",
		label: "Home"
	},
	{
		to: "/watches",
		label: "Luxury Watches"
	},
	{
		to: "/footwear",
		label: "Footwear"
	},
	{
		to: "/contact",
		label: "Contact"
	}
];
function SiteHeader() {
	const [open, setOpen] = (0, import_react.useState)(false);
	const { cartCount } = useCart();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "sticky top-0 z-40 glass border-x-0 border-t-0",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/",
					className: "flex items-center gap-3",
					onClick: () => setOpen(false),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: logo_default,
						alt: "Elite Vault logo",
						width: 40,
						height: 40,
						className: "h-9 w-9"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-display text-xl tracking-[0.2em] text-gold-gradient uppercase",
						children: "Elite Vault"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					className: "hidden items-center gap-9 md:flex",
					children: [nav.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: item.to,
						className: "relative text-xs uppercase tracking-luxe text-muted-foreground transition-colors hover:text-gold",
						activeProps: { className: "text-gold" },
						activeOptions: { exact: item.to === "/" },
						children: item.label
					}, item.to)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/cart",
						className: "flex items-center gap-2 text-xs uppercase tracking-luxe text-muted-foreground hover:text-gold",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingCart, { className: "h-4 w-4" }),
							"Cart (",
							cartCount,
							")"
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					"aria-label": "Toggle navigation",
					onClick: () => setOpen((v) => !v),
					className: "rounded-md border border-border p-2 text-gold md:hidden",
					children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-5 w-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "h-5 w-5" })
				})
			]
		}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
			className: "animate-rise border-t border-border px-5 pb-5 md:hidden",
			children: [nav.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: item.to,
				onClick: () => setOpen(false),
				className: "block py-3 text-sm uppercase tracking-[0.2em] text-muted-foreground",
				activeProps: { className: "text-gold" },
				activeOptions: { exact: item.to === "/" },
				children: item.label
			}, item.to)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/cart",
				onClick: () => setOpen(false),
				className: "block py-3 text-sm uppercase tracking-[0.2em] text-muted-foreground",
				children: [
					"Cart (",
					cartCount,
					")"
				]
			})]
		})]
	});
}
function SiteFooter() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "mt-24 border-t border-border",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-3 md:px-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display text-2xl uppercase tracking-[0.2em] text-gold-gradient",
						children: "Elite Vault"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground",
						children: "A curated vault of horological icons and rare footwear. Every order is handled personally over WhatsApp — no carts, no queues."
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs uppercase tracking-luxe text-gold",
						children: "Collections"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "mt-4 space-y-2 text-sm text-muted-foreground",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/watches",
								className: "transition-colors hover:text-gold",
								children: "Luxury Watches"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/footwear",
								className: "transition-colors hover:text-gold",
								children: "Footwear"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/contact",
								className: "transition-colors hover:text-gold",
								children: "Contact"
							}) })
						]
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs uppercase tracking-luxe text-gold",
							children: "Concierge"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: whatsappLink("Hello Elite Vault, I have a question about your collection."),
							target: "_blank",
							rel: "noreferrer",
							className: "mt-4 block text-sm text-muted-foreground transition-colors hover:text-gold",
							children: ["WhatsApp ", WHATSAPP_DISPLAY]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-muted-foreground",
							children: "Mon – Sun · 10:00 – 22:00 IST"
						})
					] })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "gold-rule" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "py-6 text-center text-xs tracking-[0.2em] text-muted-foreground uppercase",
				children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" Elite Vault — Catalog only. No online checkout."
				]
			})
		]
	});
}
function WhatsAppFloat() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
		href: whatsappLink("Hello Elite Vault, I'd like to know more about your collection."),
		target: "_blank",
		rel: "noreferrer",
		"aria-label": "Order on WhatsApp",
		className: "fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-whatsapp-foreground animate-glow transition-transform duration-300 hover:scale-110",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "h-7 w-7" })
	});
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$7 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Elite Vault — Luxury Watches & Rare Footwear" },
			{
				name: "description",
				content: "Curated luxury watches and rare sneakers with INR pricing. Order directly on WhatsApp."
			},
			{
				name: "author",
				content: "Elite Vault"
			},
			{
				property: "og:title",
				content: "Elite Vault — Luxury Watches & Rare Footwear"
			},
			{
				property: "og:description",
				content: "A matte black vault of horological icons and grail sneakers."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600&family=Jost:wght@300;400;500;600&display=swap"
			},
			{
				rel: "icon",
				type: "image/png",
				href: "/favicon.png"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-screen flex-col",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				className: "flex-1",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppFloat, {})
		]
	}) });
}
var $$splitComponentImporter$6 = () => import("./routes-BopBffH_.mjs");
var Route$6 = createFileRoute("/")({
	head: () => ({ meta: [
		{ title: "Elite Vault — Luxury Watches & Rare Footwear Catalog" },
		{
			name: "description",
			content: "Elite Vault is a curated catalog of luxury watches and rare sneakers with INR pricing. Browse, filter and order directly on WhatsApp — no checkout required."
		},
		{
			property: "og:title",
			content: "Elite Vault — Luxury Watches & Rare Footwear"
		},
		{
			property: "og:description",
			content: "A matte black vault of horological icons and grail sneakers. Order on WhatsApp."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitComponentImporter$5 = () => import("./admin-CK1a8odK.mjs");
var Route$5 = createFileRoute("/admin")({ component: lazyRouteComponent($$splitComponentImporter$5, "component") });
var $$splitComponentImporter$4 = () => import("./cart-C0pPPp8P.mjs");
var Route$4 = createFileRoute("/cart")({ component: lazyRouteComponent($$splitComponentImporter$4, "component") });
var $$splitComponentImporter$3 = () => import("./contact-BdvFcABp.mjs");
var Route$3 = createFileRoute("/contact")({
	head: () => ({ meta: [
		{ title: "Contact the Elite Vault Concierge" },
		{
			name: "description",
			content: "Reach the Elite Vault concierge on WhatsApp at +91 63661 21895 for availability, pricing and delivery of luxury watches and sneakers."
		},
		{
			property: "og:title",
			content: "Contact | Elite Vault"
		},
		{
			property: "og:description",
			content: "Personal concierge for every order — WhatsApp only, no checkout."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./footwear-CH6OjWNR.mjs");
var Route$2 = createFileRoute("/footwear")({
	head: () => ({ meta: [
		{ title: "Footwear & Sneakers — Nike, Air Jordan, New Balance | Elite Vault" },
		{
			name: "description",
			content: "Elite Vault's sneaker vault: Air Jordan retros, Nike Air Force 1 and New Balance court classics. Filter by brand, size and price. Order on WhatsApp."
		},
		{
			property: "og:title",
			content: "Footwear & Sneakers | Elite Vault"
		},
		{
			property: "og:description",
			content: "Grails only — Jordan, Nike and New Balance, priced in INR."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./test-CcXU4VA0.mjs");
var Route$1 = createFileRoute("/test")({ component: lazyRouteComponent($$splitComponentImporter$1, "component") });
var $$splitComponentImporter = () => import("./watches-4Pv7MmvI.mjs");
var Route = createFileRoute("/watches")({
	head: () => ({ meta: [
		{ title: "Luxury Watches — Rolex, Patek, Richard Mille | Elite Vault" },
		{
			name: "description",
			content: "Browse Elite Vault's curated luxury watch catalog — Rolex Daytona, Patek Nautilus, Richard Mille and more. INR pricing, order directly on WhatsApp."
		},
		{
			property: "og:title",
			content: "Luxury Watches | Elite Vault"
		},
		{
			property: "og:description",
			content: "Curated icons in steel, gold and diamond. Order on WhatsApp."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var rootRouteChildren = {
	IndexRoute: Route$6.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$7
	}),
	AdminRoute: Route$5.update({
		id: "/admin",
		path: "/admin",
		getParentRoute: () => Route$7
	}),
	CartRoute: Route$4.update({
		id: "/cart",
		path: "/cart",
		getParentRoute: () => Route$7
	}),
	ContactRoute: Route$3.update({
		id: "/contact",
		path: "/contact",
		getParentRoute: () => Route$7
	}),
	FootwearRoute: Route$2.update({
		id: "/footwear",
		path: "/footwear",
		getParentRoute: () => Route$7
	}),
	TestRoute: Route$1.update({
		id: "/test",
		path: "/test",
		getParentRoute: () => Route$7
	}),
	WatchesRoute: Route.update({
		id: "/watches",
		path: "/watches",
		getParentRoute: () => Route$7
	}),
	ProductIdRoute: Route$8.update({
		id: "/product/$id",
		path: "/product/$id",
		getParentRoute: () => Route$7
	})
};
var routeTree = Route$7._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	const queryClient = new QueryClient();
	return createRouter({
		routeTree,
		context: { queryClient },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
