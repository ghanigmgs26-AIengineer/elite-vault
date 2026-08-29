import { P as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as useCart } from "./CartContext-BvCYutwV.mjs";
import { n as formatINR } from "./products-B9yV3G7s.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/cart-C0pPPp8P.js
var import_jsx_runtime = require_jsx_runtime();
function CartPage() {
	const { cart, totalPrice, increaseQty, decreaseQty, removeFromCart } = useCart();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mx-auto max-w-7xl px-5 py-20",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "mb-8 font-display text-4xl text-gold",
			children: "Shopping Cart"
		}), cart.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "glass rounded-xl p-8",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-muted-foreground",
				children: "Your cart is empty."
			})
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "space-y-4",
			children: cart.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "glass flex items-center gap-4 rounded-xl p-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: item.image,
						alt: item.name,
						className: "h-24 w-24 rounded-lg object-cover"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex-1",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
								className: "font-semibold",
								children: [
									item.brand,
									" ",
									item.name
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-muted-foreground",
								children: formatINR(item.price)
							}),
							item.size && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-sm text-muted-foreground",
								children: ["Size: ", item.size]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => decreaseQty(item.id),
								className: "rounded border px-3 py-1",
								children: "-"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item.quantity }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => increaseQty(item.id),
								className: "rounded border px-3 py-1",
								children: "+"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => removeFromCart(item.id),
						className: "rounded border border-red-500 px-3 py-1 text-red-500",
						children: "Remove"
					})
				]
			}, item.id))
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-8 glass rounded-xl p-6 space-y-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
				className: "text-2xl font-semibold",
				children: ["Total: ", formatINR(totalPrice)]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: `https://wa.me/916366121895?text=${encodeURIComponent(`Hello Elite Vault,

I would like to order:

${cart.map((item) => `• ${item.brand} ${item.name}
Quantity: ${item.quantity}
Size: ${item.size || "N/A"}
Price: ${formatINR(item.price)}`).join("\n\n")}

Total: ${formatINR(totalPrice)}`)}`,
				target: "_blank",
				rel: "noreferrer",
				className: "inline-flex items-center justify-center rounded-full bg-green-600 px-6 py-3 text-white",
				children: "Order Entire Cart on WhatsApp"
			})]
		})] })]
	});
}
//#endregion
export { CartPage as component };
