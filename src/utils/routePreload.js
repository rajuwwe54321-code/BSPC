import aboutBanner from "../assets/aout-banner.png";
import contactBanner from "../assets/contact-banne.png";

const pageImporters = {
  "/": () => import("../pages/Home"),
  "/about": () => import("../pages/About"),
  "/products": () => import("../pages/Products"),
  "/contact": () => import("../pages/Contact"),
  "/facilities": () => import("../pages/Facilities"),
  "/process": () => import("../pages/Process"),
  "/quality": () => import("../pages/Quality"),
};

const routeAssets = {
  "/about": [aboutBanner],
  "/contact": [contactBanner],
};

const preloadedChunks = new Set();
const preloadedAssets = new Set();

function preloadImage(src) {
  if (!src || preloadedAssets.has(src)) return;

  const img = new Image();
  img.src = src;
  preloadedAssets.add(src);
}

export function preloadRoute(path) {
  const importer = pageImporters[path];
  if (!importer) return Promise.resolve();

  const chunkPromise = preloadedChunks.has(path)
    ? Promise.resolve()
    : importer().then((module) => {
        preloadedChunks.add(path);
        return module;
      });

  (routeAssets[path] ?? []).forEach(preloadImage);

  return chunkPromise;
}

export function preloadNonCriticalRoutes() {
  Object.keys(pageImporters)
    .filter((path) => path !== "/")
    .forEach((path) => {
      void preloadRoute(path);
    });
}

export function preloadRouteAssets(path) {
  (routeAssets[path] ?? []).forEach(preloadImage);
}

export { pageImporters };
