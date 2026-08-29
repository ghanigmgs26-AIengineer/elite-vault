import { P as require_jsx_runtime, h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/product._id-CcWNfgsd.js
var import_jsx_runtime = require_jsx_runtime();
function ProductNotFound() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-3xl px-5 py-28 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-4xl",
				children: "Piece unavailable"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-sm text-muted-foreground",
				children: "This product is no longer in the vault."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/watches",
				className: "mt-8 inline-block rounded-full border border-gold/40 px-6 py-3 text-[10px] uppercase tracking-[0.2em] text-gold transition-colors hover:bg-gold hover:text-primary-foreground",
				children: "Browse collection"
			})
		]
	});
}
//#endregion
export { ProductNotFound as notFoundComponent };
