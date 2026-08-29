import { n as __toESM } from "../_runtime.mjs";
import { t as supabase } from "./supabase-D5zTFZ1y.mjs";
import { F as require_react, P as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin-CK1a8odK.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function AdminPage() {
	const [authorized, setAuthorized] = (0, import_react.useState)(false);
	const [password, setPassword] = (0, import_react.useState)("");
	const ADMIN_PASSWORD = "elitevault2025";
	const [products, setProducts] = (0, import_react.useState)([]);
	const [name, setName] = (0, import_react.useState)("");
	const [brand, setBrand] = (0, import_react.useState)("");
	const [category, setCategory] = (0, import_react.useState)("");
	const [price, setPrice] = (0, import_react.useState)("");
	const [image, setImage] = (0, import_react.useState)("");
	const [file, setFile] = (0, import_react.useState)(null);
	const [description, setDescription] = (0, import_react.useState)("");
	async function loadProducts() {
		const { data } = await supabase.from("products").select("*").order("created_at", { ascending: false });
		setProducts(data || []);
	}
	async function deleteProduct(id) {
		if (!confirm("Delete this product?")) return;
		await supabase.from("products").delete().eq("id", id);
		loadProducts();
	}
	(0, import_react.useEffect)(() => {
		loadProducts();
	}, []);
	async function addProduct() {
		let imageUrl = image;
		if (file) {
			const fileName = `${Date.now()}-${file.name}`;
			const { error: uploadError } = await supabase.storage.from("products").upload(fileName, file);
			if (uploadError) {
				alert(uploadError.message);
				return;
			}
			imageUrl = supabase.storage.from("products").getPublicUrl(fileName).data.publicUrl;
		}
		const { error } = await supabase.from("products").insert([{
			name,
			brand,
			category,
			price: Number(price),
			image: imageUrl,
			description,
			sizes: "Default"
		}]);
		if (error) {
			alert(error.message);
			return;
		}
		alert("Product Added");
		setName("");
		setBrand("");
		setCategory("");
		setPrice("");
		setImage("");
		setDescription("");
		setFile(null);
		loadProducts();
	}
	if (!authorized) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-md px-5 py-20",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mb-6 text-3xl font-bold",
				children: "Admin Login"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				type: "password",
				placeholder: "Enter Password",
				value: password,
				onChange: (e) => setPassword(e.target.value),
				className: "mb-4 w-full rounded border p-3"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: () => {
					if (password === ADMIN_PASSWORD) setAuthorized(true);
					else alert("Wrong Password");
				},
				className: "rounded bg-black px-6 py-3 text-white",
				children: "Login"
			})
		]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-2xl px-5 py-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mb-6 text-3xl font-bold",
				children: "Admin Panel"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						className: "w-full rounded border p-3",
						placeholder: "Product Name",
						value: name,
						onChange: (e) => setName(e.target.value)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						className: "w-full rounded border p-3",
						placeholder: "Brand",
						value: brand,
						onChange: (e) => setBrand(e.target.value)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						className: "w-full rounded border p-3",
						placeholder: "Category (watches or footwear)",
						value: category,
						onChange: (e) => setCategory(e.target.value)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						className: "w-full rounded border p-3",
						placeholder: "Price",
						value: price,
						onChange: (e) => setPrice(e.target.value)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "file",
						accept: "image/*",
						onChange: (e) => setFile(e.target.files?.[0] || null),
						className: "w-full rounded border p-3"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
						className: "w-full rounded border p-3",
						placeholder: "Description",
						value: description,
						onChange: (e) => setDescription(e.target.value)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: addProduct,
						className: "rounded bg-black px-6 py-3 text-white",
						children: "Add Product"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mb-4 text-2xl font-bold",
					children: "Products"
				}), products.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-3 flex items-center justify-between rounded border p-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "font-semibold",
						children: p.name
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-sm text-gray-500",
						children: p.brand
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => deleteProduct(p.id),
						className: "rounded bg-red-600 px-4 py-2 text-white",
						children: "Delete"
					})]
				}, p.id))]
			})
		]
	});
}
//#endregion
export { AdminPage as component };
