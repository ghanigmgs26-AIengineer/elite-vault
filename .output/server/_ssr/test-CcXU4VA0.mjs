import { n as __toESM } from "../_runtime.mjs";
import { t as supabase } from "./supabase-D5zTFZ1y.mjs";
import { F as require_react, P as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/test-CcXU4VA0.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function TestPage() {
	const [products, setProducts] = (0, import_react.useState)([]);
	(0, import_react.useEffect)(() => {
		async function load() {
			const { data, error } = await supabase.from("products").select("*");
			console.log(data);
			console.log(error);
			if (data) setProducts(data);
		}
		load();
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "p-10",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { children: "Supabase Test" }), products.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: p.name }, p.id))]
	});
}
//#endregion
export { TestPage as component };
