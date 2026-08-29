import { n as __toESM } from "../_runtime.mjs";
import { F as require_react, P as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/CartContext-BvCYutwV.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var CartContext = (0, import_react.createContext)(null);
function CartProvider({ children }) {
	const [cart, setCart] = (0, import_react.useState)([]);
	(0, import_react.useEffect)(() => {
		const saved = localStorage.getItem("elite-vault-cart");
		if (saved) setCart(JSON.parse(saved));
	}, []);
	(0, import_react.useEffect)(() => {
		localStorage.setItem("elite-vault-cart", JSON.stringify(cart));
	}, [cart]);
	const addToCart = (item) => {
		setCart((current) => {
			if (current.find((p) => p.id === item.id)) return current.map((p) => p.id === item.id ? {
				...p,
				quantity: p.quantity + 1
			} : p);
			return [...current, item];
		});
	};
	const removeFromCart = (id) => {
		setCart((current) => current.filter((item) => item.id !== id));
	};
	const increaseQty = (id) => {
		setCart((current) => current.map((item) => item.id === id ? {
			...item,
			quantity: item.quantity + 1
		} : item));
	};
	const decreaseQty = (id) => {
		setCart((current) => current.map((item) => item.id === id ? {
			...item,
			quantity: item.quantity - 1
		} : item).filter((item) => item.quantity > 0));
	};
	const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
	const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartContext.Provider, {
		value: {
			cart,
			addToCart,
			removeFromCart,
			increaseQty,
			decreaseQty,
			cartCount,
			totalPrice
		},
		children
	});
}
function useCart() {
	const ctx = (0, import_react.useContext)(CartContext);
	if (!ctx) throw new Error("useCart must be used inside CartProvider");
	return ctx;
}
//#endregion
export { useCart as n, CartProvider as t };
