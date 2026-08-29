globalThis.__nitro_main__ = import.meta.url;
import { i as HTTPError, n as defineLazyEventHandler, t as H3Core } from "./_libs/h3+rou3+srvx.mjs";
import { t as HookableCore } from "./_libs/hookable.mjs";
import { r as FastResponse } from "./_libs/h3-v2+rou3+srvx.mjs";
//#region #nitro-vite-setup
function lazyService(loader) {
	let promise, mod;
	return { fetch(req) {
		if (mod) return mod.fetch(req);
		if (!promise) promise = loader().then((_mod) => mod = _mod.default || _mod);
		return promise.then((mod) => mod.fetch(req));
	} };
}
var services = { ["ssr"]: lazyService(() => import("./_ssr/ssr.mjs")) };
globalThis.__nitro_vite_envs__ = services;
//#endregion
//#region #nitro/virtual/public-assets-data
var public_assets_data_default = {
	"/assets/admin-D8e9tMuy.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"c3d-ixfWh3xU7V4tVxTEVwvicVd3xkM\"",
		"mtime": "2026-08-29T12:03:46.558Z",
		"size": 3133,
		"path": "../public/assets/admin-D8e9tMuy.js"
	},
	"/assets/cart-B9uIUOoz.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"84f-LHpAvHyJRnfx/mjs13gX3mFRavM\"",
		"mtime": "2026-08-29T12:03:46.559Z",
		"size": 2127,
		"path": "../public/assets/cart-B9uIUOoz.js"
	},
	"/assets/CatalogView-BeRn8BKs.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1574-hybjrvLdFdVhlUShPIcWMfbj9zA\"",
		"mtime": "2026-08-29T12:03:46.552Z",
		"size": 5492,
		"path": "../public/assets/CatalogView-BeRn8BKs.js"
	},
	"/robots.txt": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"a0-CKGXSIe7TSsqDTmGm/nY1t/o5d0\"",
		"mtime": "2026-08-28T15:54:32.608Z",
		"size": 160,
		"path": "../public/robots.txt"
	},
	"/assets/contact-DiHdpJsW.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"13a7-TyudRlKndtEgMaqwzp97DnUnauE\"",
		"mtime": "2026-08-29T12:03:46.560Z",
		"size": 5031,
		"path": "../public/assets/contact-DiHdpJsW.js"
	},
	"/favicon.png": {
		"type": "image/png",
		"etag": "\"fe5-Hr0cbg1yWlsccc83i5ls8Qzhofg\"",
		"mtime": "2026-08-28T15:53:57.160Z",
		"size": 4069,
		"path": "../public/favicon.png"
	},
	"/assets/jsx-runtime-Cltr0gcK.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"20ee-ObwGPj96dlkL76iVLbX2wLAXzuw\"",
		"mtime": "2026-08-29T12:03:46.562Z",
		"size": 8430,
		"path": "../public/assets/jsx-runtime-Cltr0gcK.js"
	},
	"/assets/product._id-CKPDOSks.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"11ff-Mqvpzlw4Afm1T0yrSKeuLBUk1Tk\"",
		"mtime": "2026-08-29T12:03:46.562Z",
		"size": 4607,
		"path": "../public/assets/product._id-CKPDOSks.js"
	},
	"/assets/product._id-Ddfku5dh.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"29e-ioVLPxRIfSDpur2AluiyINkxwbY\"",
		"mtime": "2026-08-29T12:03:46.628Z",
		"size": 670,
		"path": "../public/assets/product._id-Ddfku5dh.js"
	},
	"/assets/ProductCard-BIB_-NHU.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"674-cEdNWVjpo50u/ZhRevrCgHqX5C4\"",
		"mtime": "2026-08-29T12:03:46.557Z",
		"size": 1652,
		"path": "../public/assets/ProductCard-BIB_-NHU.js"
	},
	"/assets/routes-BYk805nq.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"15ca-BnBBUvYluPeEqQq98JGKEcRpjYw\"",
		"mtime": "2026-08-29T12:03:46.652Z",
		"size": 5578,
		"path": "../public/assets/routes-BYk805nq.js"
	},
	"/assets/logo-Dd8fh2hk.png": {
		"type": "image/png",
		"etag": "\"e047-eiuAUG50p8jXlTiSWAf0nmIl5bM\"",
		"mtime": "2026-08-29T12:03:46.661Z",
		"size": 57415,
		"path": "../public/assets/logo-Dd8fh2hk.png"
	},
	"/assets/index-CaU4AeFe.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"56ce5-vIi6GM2uCZQCeID41IxJqnDa/lE\"",
		"mtime": "2026-08-29T12:03:46.551Z",
		"size": 355557,
		"path": "../public/assets/index-CaU4AeFe.js"
	},
	"/assets/test-DzlAk13o.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1dd-FQzIxQg9iWcFuwTSxNP5PpM4Rik\"",
		"mtime": "2026-08-29T12:03:46.657Z",
		"size": 477,
		"path": "../public/assets/test-DzlAk13o.js"
	},
	"/assets/watches-CQtyQKC2.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"178-ZiikuFJnR9+ibgManh/H4lwq0IA\"",
		"mtime": "2026-08-29T12:03:46.657Z",
		"size": 376,
		"path": "../public/assets/watches-CQtyQKC2.js"
	},
	"/products/favicon.png": {
		"type": "image/png",
		"etag": "\"fe5-Hr0cbg1yWlsccc83i5ls8Qzhofg\"",
		"mtime": "2026-08-28T15:57:18.719Z",
		"size": 4069,
		"path": "../public/products/favicon.png"
	},
	"/products/robots.txt": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"a0-CKGXSIe7TSsqDTmGm/nY1t/o5d0\"",
		"mtime": "2026-08-28T15:57:22.975Z",
		"size": 160,
		"path": "../public/products/robots.txt"
	},
	"/assets/styles-BDmzO4HT.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"13fd0-GkV5MO48t8x2kZ5VG8REjuizww8\"",
		"mtime": "2026-08-29T12:03:46.661Z",
		"size": 81872,
		"path": "../public/assets/styles-BDmzO4HT.css"
	},
	"/products/sh-002.jpg": {
		"type": "image/jpeg",
		"etag": "\"8723-dASW9HIm83x+J1MMKD93/QGCdx8\"",
		"mtime": "2026-08-28T17:51:34.690Z",
		"size": 34595,
		"path": "../public/products/sh-002.jpg"
	},
	"/products/sh-001.jpg": {
		"type": "image/jpeg",
		"etag": "\"1c954-+hoce5sphfH3iwnSh1CHMs+/dYs\"",
		"mtime": "2026-08-28T17:48:37.698Z",
		"size": 117076,
		"path": "../public/products/sh-001.jpg"
	},
	"/products/sh-003.jpg": {
		"type": "image/jpeg",
		"etag": "\"15871-5UNTosL4usT/lyseXKS88FDoC3Q\"",
		"mtime": "2026-08-28T17:53:06.448Z",
		"size": 88177,
		"path": "../public/products/sh-003.jpg"
	},
	"/products/sh-004.jpg": {
		"type": "image/jpeg",
		"etag": "\"28187-cU/BfoUQkVujn/ikTGRoEhwbbHg\"",
		"mtime": "2026-08-28T17:54:16.548Z",
		"size": 164231,
		"path": "../public/products/sh-004.jpg"
	},
	"/assets/footwear-B0-Jgc9f.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"16d-wXCFSVgPl8a092F49YeBMp5zI2E\"",
		"mtime": "2026-08-29T12:03:46.561Z",
		"size": 365,
		"path": "../public/assets/footwear-B0-Jgc9f.js"
	},
	"/assets/supabase-Gjs9zMln.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"32f88-Qae5qcsJ3jcJin1yErvgkFInpu0\"",
		"mtime": "2026-08-29T12:03:46.652Z",
		"size": 208776,
		"path": "../public/assets/supabase-Gjs9zMln.js"
	},
	"/products/sh-006.jpg": {
		"type": "image/jpeg",
		"etag": "\"16ecf-y6whXG9VP3foHuBfoe/iFenuD0U\"",
		"mtime": "2026-08-28T17:56:42.421Z",
		"size": 93903,
		"path": "../public/products/sh-006.jpg"
	},
	"/products/sh-005.jpg": {
		"type": "image/jpeg",
		"etag": "\"217ee-FkPFFiz0Kaa+4y7b5RSGc8XfaBQ\"",
		"mtime": "2026-08-28T17:55:54.538Z",
		"size": 137198,
		"path": "../public/products/sh-005.jpg"
	},
	"/products/sh-008.jpg": {
		"type": "image/jpeg",
		"etag": "\"16de2-CBhiU5zVmZWrOs1TF89UiygQWlk\"",
		"mtime": "2026-08-28T17:59:02.738Z",
		"size": 93666,
		"path": "../public/products/sh-008.jpg"
	},
	"/products/sh-007.jpg": {
		"type": "image/jpeg",
		"etag": "\"275ca-JKvPMg//jqHDZinarmIeuyt8gFE\"",
		"mtime": "2026-08-28T17:57:42.700Z",
		"size": 161226,
		"path": "../public/products/sh-007.jpg"
	},
	"/products/sh-009.jpg": {
		"type": "image/jpeg",
		"etag": "\"32e46-EJcGqmEz9tJgwerE374GJAVYvzQ\"",
		"mtime": "2026-08-28T18:00:04.567Z",
		"size": 208454,
		"path": "../public/products/sh-009.jpg"
	},
	"/products/wtc-001.jpg": {
		"type": "image/jpeg",
		"etag": "\"31471-g4M2LKl3neQGXpGizMNStkF/Y5M\"",
		"mtime": "2026-08-28T17:24:42.515Z",
		"size": 201841,
		"path": "../public/products/wtc-001.jpg"
	},
	"/products/wtc-002.jpg": {
		"type": "image/jpeg",
		"etag": "\"2b2be-HcsD32xH1kzafqcarDP6nk2u5h4\"",
		"mtime": "2026-08-28T17:28:06.239Z",
		"size": 176830,
		"path": "../public/products/wtc-002.jpg"
	},
	"/products/wtc-003.jpg": {
		"type": "image/jpeg",
		"etag": "\"11a45-J/LQ9XLiJ06/7qwcqfBVX0E7T5M\"",
		"mtime": "2026-08-28T17:31:18.396Z",
		"size": 72261,
		"path": "../public/products/wtc-003.jpg"
	},
	"/products/wtc-004.jpg": {
		"type": "image/jpeg",
		"etag": "\"315a0-e3hJu+WGXLLR+uhT5GHZhDX4DA8\"",
		"mtime": "2026-08-28T17:38:50.773Z",
		"size": 202144,
		"path": "../public/products/wtc-004.jpg"
	},
	"/products/wtc-005.jpg": {
		"type": "image/jpeg",
		"etag": "\"2d0fb-i4nFPrSAeOGhFpj8uIdZYGNPa5k\"",
		"mtime": "2026-08-28T17:36:45.343Z",
		"size": 184571,
		"path": "../public/products/wtc-005.jpg"
	},
	"/products/wtc-007.jpg": {
		"type": "image/jpeg",
		"etag": "\"23390-viOcq07noxScuA+yyEbhXfjGsdU\"",
		"mtime": "2026-08-28T17:45:23.943Z",
		"size": 144272,
		"path": "../public/products/wtc-007.jpg"
	},
	"/products/wtc-008.jpg": {
		"type": "image/jpeg",
		"etag": "\"185ee-iKLMfeu8sR8t4AMcpPMSnP7TTKs\"",
		"mtime": "2026-08-28T17:32:49.506Z",
		"size": 99822,
		"path": "../public/products/wtc-008.jpg"
	},
	"/assets/hero-C9YfnY7A.jpg": {
		"type": "image/jpeg",
		"etag": "\"1b37e-9t8ZEmYZEbA1Cu92g8i9vvvqvuQ\"",
		"mtime": "2026-08-29T12:03:46.660Z",
		"size": 111486,
		"path": "../public/assets/hero-C9YfnY7A.jpg"
	},
	"/products/wtc-009.jpg": {
		"type": "image/jpeg",
		"etag": "\"224be-zjc1RFcqAOlHPqR85mdUcVnHL1o\"",
		"mtime": "2026-08-28T17:35:21.207Z",
		"size": 140478,
		"path": "../public/products/wtc-009.jpg"
	},
	"/products/wtc-006.jpg": {
		"type": "image/jpeg",
		"etag": "\"25fb9-ghbSXuyaw+YdvBThydwLo73psj8\"",
		"mtime": "2026-08-28T17:42:32.383Z",
		"size": 155577,
		"path": "../public/products/wtc-006.jpg"
	}
};
//#endregion
//#region #nitro/virtual/public-assets
var publicAssetBases = {};
function isPublicAssetURL(id = "") {
	if (public_assets_data_default[id]) return true;
	for (const base in publicAssetBases) if (id.startsWith(base)) return true;
	return false;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/route-rules.mjs
var headers = ((m) => function headersRouteRule(event) {
	for (const [key, value] of Object.entries(m.options || {})) event.res.headers.set(key, value);
});
//#endregion
//#region #nitro/virtual/routing
var findRouteRules = /* @__PURE__ */ (() => {
	const $0 = [{
		name: "headers",
		route: "/assets/**",
		handler: headers,
		options: { "cache-control": "public, max-age=31536000, immutable" }
	}];
	return (m, p) => {
		let r = [];
		if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1) || "/";
		let s = p.split("/");
		if (s.length > 1) {
			if (s[1] === "assets") r.unshift({
				data: $0,
				params: { "_": s.slice(2).join("/") }
			});
		}
		return r;
	};
})();
var _lazy_rhqZI2 = defineLazyEventHandler(() => import("./_chunks/ssr-renderer.mjs"));
var findRoute = /* @__PURE__ */ (() => {
	const data = {
		route: "/**",
		handler: _lazy_rhqZI2
	};
	return ((_m, p) => {
		return {
			data,
			params: { "_": p.slice(1) }
		};
	});
})();
[].filter(Boolean);
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/prod.mjs
var errorHandler = (error, event) => {
	const res = defaultHandler(error, event);
	return new FastResponse(typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2), res);
};
function defaultHandler(error, event) {
	const unhandled = error.unhandled ?? !HTTPError.isError(error);
	const { status = 500, statusText = "" } = unhandled ? {} : error;
	if (status === 404) {
		const url = event.url || new URL(event.req.url);
		const baseURL = "/";
		if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) return {
			status: 302,
			headers: new Headers({ location: `${baseURL}${url.pathname.slice(1)}${url.search}` })
		};
	}
	const headers = new Headers(unhandled ? {} : error.headers);
	headers.set("content-type", "application/json; charset=utf-8");
	return {
		status,
		statusText,
		headers,
		body: {
			error: true,
			...unhandled ? {
				status,
				unhandled: true
			} : typeof error.toJSON === "function" ? error.toJSON() : {
				status,
				statusText,
				message: error.message
			}
		}
	};
}
//#endregion
//#region #nitro/virtual/error-handler
var errorHandlers = [errorHandler];
async function error_handler_default(error, event) {
	for (const handler of errorHandlers) try {
		const response = await handler(error, event, { defaultHandler });
		if (response) return response;
	} catch (error) {
		console.error(error);
	}
}
//#endregion
//#region #nitro/virtual/app
function createNitroApp() {
	const captureError = (error, errorCtx) => {
		if (errorCtx?.event) {
			const errors = errorCtx.event.req.context?.nitro?.errors;
			if (errors) errors.push({
				error,
				context: errorCtx
			});
		}
	};
	const h3App = createH3App({ onError(error, event) {
		return error_handler_default(error, event);
	} });
	let appHandler = (req) => {
		req.context ||= {};
		req.context.nitro = req.context.nitro || { errors: [] };
		return h3App.fetch(req);
	};
	return {
		fetch: appHandler,
		h3: h3App,
		hooks: void 0,
		captureError
	};
}
function createH3App(config) {
	const h3App = new H3Core(config);
	h3App["~findRoute"] = (event) => findRoute(event.req.method, event.url.pathname);
	h3App["~getMiddleware"] = (event, route) => {
		const pathname = event.url.pathname;
		const method = event.req.method;
		const middleware = [];
		const routeRules = getRouteRules(method, pathname);
		event.context.routeRules = routeRules?.routeRules;
		if (routeRules?.routeRuleMiddleware.length) middleware.push(...routeRules.routeRuleMiddleware);
		if (route?.data?.middleware?.length) middleware.push(...route.data.middleware);
		return middleware;
	};
	return h3App;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/app.mjs
var APP_ID = "default";
function useNitroApp() {
	let instance = useNitroApp._instance;
	if (instance) return instance;
	instance = useNitroApp._instance = createNitroApp();
	globalThis.__nitro__ = globalThis.__nitro__ || {};
	globalThis.__nitro__[APP_ID] = instance;
	return instance;
}
function useNitroHooks() {
	const nitroApp = useNitroApp();
	const hooks = nitroApp.hooks;
	if (hooks) return hooks;
	return nitroApp.hooks = new HookableCore();
}
function getRouteRules(method, pathname) {
	const m = findRouteRules(method, pathname);
	if (!m?.length) return { routeRuleMiddleware: [] };
	const routeRules = {};
	for (const layer of m) for (const rule of layer.data) {
		const currentRule = routeRules[rule.name];
		if (currentRule) {
			if (rule.options === false) {
				delete routeRules[rule.name];
				continue;
			}
			if (typeof currentRule.options === "object" && typeof rule.options === "object") currentRule.options = {
				...currentRule.options,
				...rule.options
			};
			else currentRule.options = rule.options;
			currentRule.route = rule.route;
			currentRule.params = {
				...currentRule.params,
				...layer.params
			};
		} else if (rule.options !== false) routeRules[rule.name] = {
			...rule,
			params: layer.params
		};
	}
	const middleware = [];
	const orderedRules = Object.values(routeRules).sort((a, b) => (a.handler?.order || 0) - (b.handler?.order || 0));
	for (const rule of orderedRules) {
		if (rule.options === false || !rule.handler) continue;
		middleware.push(rule.handler(rule));
	}
	return {
		routeRules,
		routeRuleMiddleware: middleware
	};
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/_module-handler.mjs
function createHandler(hooks) {
	const nitroApp = useNitroApp();
	const nitroHooks = useNitroHooks();
	return {
		async fetch(request, env, context) {
			globalThis.__env__ = env;
			augmentReq(request, {
				env,
				context
			});
			const ctxExt = {};
			const url = new URL(request.url);
			if (hooks.fetch) {
				const res = await hooks.fetch(request, env, context, url, ctxExt);
				if (res) return res;
			}
			return await nitroApp.fetch(request);
		},
		scheduled(controller, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:scheduled", {
				controller,
				env,
				context
			}) || Promise.resolve());
		},
		email(message, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:email", {
				message,
				event: message,
				env,
				context
			}) || Promise.resolve());
		},
		queue(batch, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:queue", {
				batch,
				event: batch,
				env,
				context
			}) || Promise.resolve());
		},
		tail(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:tail", {
				traces,
				env,
				context
			}) || Promise.resolve());
		},
		trace(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:trace", {
				traces,
				env,
				context
			}) || Promise.resolve());
		}
	};
}
function augmentReq(cfReq, ctx) {
	const req = cfReq;
	req.ip = cfReq.headers.get("cf-connecting-ip") || void 0;
	req.runtime ??= { name: "cloudflare" };
	req.runtime.cloudflare = {
		...req.runtime.cloudflare,
		...ctx
	};
	req.waitUntil = ctx.context?.waitUntil.bind(ctx.context);
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/cloudflare-module.mjs
var cloudflare_module_default = createHandler({ fetch(cfRequest, env, context, url) {
	if (env.ASSETS && isPublicAssetURL(url.pathname)) return env.ASSETS.fetch(cfRequest);
} });
//#endregion
export { cloudflare_module_default as default };
