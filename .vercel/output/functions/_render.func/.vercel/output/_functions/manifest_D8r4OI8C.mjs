import 'cookie';
import 'kleur/colors';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_pVsj-bJq.mjs';
import 'es-module-lexer';
import { e as decodeKey } from './chunks/astro/server_Clh-S9fL.mjs';
import 'clsx';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///Users/riccardogobbo/astroprjs/astro-minimal-portfolio-template/","adapterName":"@astrojs/vercel/serverless","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"inline","value":"const e=document.getElementById(\"link-menu-button\"),n=document.getElementById(\"link-menu\"),i=document.getElementById(\"open-indicator\");e.addEventListener(\"click\",()=>{n.classList.contains(\"opacity-0\")?(n.classList.remove(\"pointer-events-none\"),n.classList.remove(\"opacity-0\"),i.innerText=\"-\"):(n.classList.add(\"pointer-events-none\"),n.classList.add(\"opacity-0\"),i.innerText=\"+\")});document.addEventListener(\"click\",t=>{const s=t.target===e||e.contains(t.target),c=t.target===n||n.contains(t.target);!s&&!c&&(n.classList.add(\"pointer-events-none\"),n.classList.add(\"opacity-0\"),i.innerText=\"+\")});\n"}],"styles":[{"type":"external","src":"/_astro/about.D9ofSCd2.css"}],"routeData":{"route":"/about","isIndex":false,"type":"page","pattern":"^\\/about\\/?$","segments":[[{"content":"about","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about.astro","pathname":"/about","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"inline","value":"const e=document.getElementById(\"link-menu-button\"),n=document.getElementById(\"link-menu\"),i=document.getElementById(\"open-indicator\");e.addEventListener(\"click\",()=>{n.classList.contains(\"opacity-0\")?(n.classList.remove(\"pointer-events-none\"),n.classList.remove(\"opacity-0\"),i.innerText=\"-\"):(n.classList.add(\"pointer-events-none\"),n.classList.add(\"opacity-0\"),i.innerText=\"+\")});document.addEventListener(\"click\",t=>{const s=t.target===e||e.contains(t.target),c=t.target===n||n.contains(t.target);!s&&!c&&(n.classList.add(\"pointer-events-none\"),n.classList.add(\"opacity-0\"),i.innerText=\"+\")});\n"}],"styles":[{"type":"external","src":"/_astro/about.D9ofSCd2.css"}],"routeData":{"route":"/blog/[slug]","isIndex":false,"type":"page","pattern":"^\\/blog\\/([^/]+?)\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}],[{"content":"slug","dynamic":true,"spread":false}]],"params":["slug"],"component":"src/pages/blog/[slug].astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"inline","value":"const e=document.getElementById(\"link-menu-button\"),n=document.getElementById(\"link-menu\"),i=document.getElementById(\"open-indicator\");e.addEventListener(\"click\",()=>{n.classList.contains(\"opacity-0\")?(n.classList.remove(\"pointer-events-none\"),n.classList.remove(\"opacity-0\"),i.innerText=\"-\"):(n.classList.add(\"pointer-events-none\"),n.classList.add(\"opacity-0\"),i.innerText=\"+\")});document.addEventListener(\"click\",t=>{const s=t.target===e||e.contains(t.target),c=t.target===n||n.contains(t.target);!s&&!c&&(n.classList.add(\"pointer-events-none\"),n.classList.add(\"opacity-0\"),i.innerText=\"+\")});\n"}],"styles":[{"type":"external","src":"/_astro/about.D9ofSCd2.css"}],"routeData":{"route":"/blog","isIndex":true,"type":"page","pattern":"^\\/blog\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog/index.astro","pathname":"/blog","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"inline","value":"const e=document.getElementById(\"link-menu-button\"),n=document.getElementById(\"link-menu\"),i=document.getElementById(\"open-indicator\");e.addEventListener(\"click\",()=>{n.classList.contains(\"opacity-0\")?(n.classList.remove(\"pointer-events-none\"),n.classList.remove(\"opacity-0\"),i.innerText=\"-\"):(n.classList.add(\"pointer-events-none\"),n.classList.add(\"opacity-0\"),i.innerText=\"+\")});document.addEventListener(\"click\",t=>{const s=t.target===e||e.contains(t.target),c=t.target===n||n.contains(t.target);!s&&!c&&(n.classList.add(\"pointer-events-none\"),n.classList.add(\"opacity-0\"),i.innerText=\"+\")});\n"}],"styles":[{"type":"external","src":"/_astro/about.D9ofSCd2.css"}],"routeData":{"route":"/projects","isIndex":false,"type":"page","pattern":"^\\/projects\\/?$","segments":[[{"content":"projects","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/projects.astro","pathname":"/projects","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"inline","value":"const e=document.getElementById(\"link-menu-button\"),n=document.getElementById(\"link-menu\"),i=document.getElementById(\"open-indicator\");e.addEventListener(\"click\",()=>{n.classList.contains(\"opacity-0\")?(n.classList.remove(\"pointer-events-none\"),n.classList.remove(\"opacity-0\"),i.innerText=\"-\"):(n.classList.add(\"pointer-events-none\"),n.classList.add(\"opacity-0\"),i.innerText=\"+\")});document.addEventListener(\"click\",t=>{const s=t.target===e||e.contains(t.target),c=t.target===n||n.contains(t.target);!s&&!c&&(n.classList.add(\"pointer-events-none\"),n.classList.add(\"opacity-0\"),i.innerText=\"+\")});\n"}],"styles":[{"type":"external","src":"/_astro/about.D9ofSCd2.css"}],"routeData":{"route":"/swipswap-privacy-policy","isIndex":false,"type":"page","pattern":"^\\/swipswap-privacy-policy\\/?$","segments":[[{"content":"swipswap-privacy-policy","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/swipswap-privacy-policy.astro","pathname":"/swipswap-privacy-policy","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"inline","value":"const e=document.getElementById(\"link-menu-button\"),n=document.getElementById(\"link-menu\"),i=document.getElementById(\"open-indicator\");e.addEventListener(\"click\",()=>{n.classList.contains(\"opacity-0\")?(n.classList.remove(\"pointer-events-none\"),n.classList.remove(\"opacity-0\"),i.innerText=\"-\"):(n.classList.add(\"pointer-events-none\"),n.classList.add(\"opacity-0\"),i.innerText=\"+\")});document.addEventListener(\"click\",t=>{const s=t.target===e||e.contains(t.target),c=t.target===n||n.contains(t.target);!s&&!c&&(n.classList.add(\"pointer-events-none\"),n.classList.add(\"opacity-0\"),i.innerText=\"+\")});\n"}],"styles":[{"type":"external","src":"/_astro/about.D9ofSCd2.css"}],"routeData":{"route":"/swipswap-termini-e-condizioni","isIndex":false,"type":"page","pattern":"^\\/swipswap-termini-e-condizioni\\/?$","segments":[[{"content":"swipswap-termini-e-condizioni","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/swipswap-termini-e-condizioni.astro","pathname":"/swipswap-termini-e-condizioni","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"inline","value":"const e=document.getElementById(\"link-menu-button\"),n=document.getElementById(\"link-menu\"),i=document.getElementById(\"open-indicator\");e.addEventListener(\"click\",()=>{n.classList.contains(\"opacity-0\")?(n.classList.remove(\"pointer-events-none\"),n.classList.remove(\"opacity-0\"),i.innerText=\"-\"):(n.classList.add(\"pointer-events-none\"),n.classList.add(\"opacity-0\"),i.innerText=\"+\")});document.addEventListener(\"click\",t=>{const s=t.target===e||e.contains(t.target),c=t.target===n||n.contains(t.target);!s&&!c&&(n.classList.add(\"pointer-events-none\"),n.classList.add(\"opacity-0\"),i.innerText=\"+\")});\n"}],"styles":[{"type":"external","src":"/_astro/about.D9ofSCd2.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["/Users/riccardogobbo/astroprjs/astro-minimal-portfolio-template/src/pages/blog/[slug].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/blog/[slug]@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["/Users/riccardogobbo/astroprjs/astro-minimal-portfolio-template/src/pages/blog/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/blog/index@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/riccardogobbo/astroprjs/astro-minimal-portfolio-template/src/pages/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/index@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/riccardogobbo/astroprjs/astro-minimal-portfolio-template/src/pages/about.astro",{"propagation":"none","containsHead":true}],["/Users/riccardogobbo/astroprjs/astro-minimal-portfolio-template/src/pages/projects.astro",{"propagation":"none","containsHead":true}],["/Users/riccardogobbo/astroprjs/astro-minimal-portfolio-template/src/pages/swipswap-privacy-policy.astro",{"propagation":"none","containsHead":true}],["/Users/riccardogobbo/astroprjs/astro-minimal-portfolio-template/src/pages/swipswap-termini-e-condizioni.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(o,t)=>{let i=async()=>{await(await o())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:src/pages/blog/[slug]@_@astro":"pages/blog/_slug_.astro.mjs","\u0000@astro-page:src/pages/blog/index@_@astro":"pages/blog.astro.mjs","\u0000@astro-page:src/pages/swipswap-privacy-policy@_@astro":"pages/swipswap-privacy-policy.astro.mjs","\u0000@astro-page:src/pages/swipswap-termini-e-condizioni@_@astro":"pages/swipswap-termini-e-condizioni.astro.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/about@_@astro":"pages/about.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-page:src/pages/projects@_@astro":"pages/projects.astro.mjs","/Users/riccardogobbo/astroprjs/astro-minimal-portfolio-template/node_modules/astro/dist/env/setup.js":"chunks/astro/env-setup_Cr6XTFvb.mjs","/Users/riccardogobbo/astroprjs/astro-minimal-portfolio-template/src/content/posts/manutenzione-siti-web-htaccess.md?astroContentCollectionEntry=true":"chunks/manutenzione-siti-web-htaccess_FoJYvp28.mjs","/Users/riccardogobbo/astroprjs/astro-minimal-portfolio-template/src/content/posts/timber-e-twig-per-wordpress.md?astroContentCollectionEntry=true":"chunks/timber-e-twig-per-wordpress_DI_g9Vdw.mjs","/Users/riccardogobbo/astroprjs/astro-minimal-portfolio-template/src/content/posts/manutenzione-siti-web-htaccess.md?astroPropagatedAssets":"chunks/manutenzione-siti-web-htaccess_Cbr2jpvx.mjs","/Users/riccardogobbo/astroprjs/astro-minimal-portfolio-template/src/content/posts/timber-e-twig-per-wordpress.md?astroPropagatedAssets":"chunks/timber-e-twig-per-wordpress_BWN-dKdg.mjs","\u0000astro:asset-imports":"chunks/_astro_asset-imports_D9aVaOQr.mjs","\u0000astro:data-layer-content":"chunks/_astro_data-layer-content_BcEe_9wP.mjs","/Users/riccardogobbo/astroprjs/astro-minimal-portfolio-template/src/content/posts/manutenzione-siti-web-htaccess.md":"chunks/manutenzione-siti-web-htaccess_DgwaLa_x.mjs","/Users/riccardogobbo/astroprjs/astro-minimal-portfolio-template/src/content/posts/timber-e-twig-per-wordpress.md":"chunks/timber-e-twig-per-wordpress_BGwG-GI-.mjs","\u0000@astrojs-manifest":"manifest_D8r4OI8C.mjs","/astro/hoisted.js?q=0":"_astro/hoisted.Byshf39-.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/about.D9ofSCd2.css","/demo-1.jpg","/demo-2.jpg","/favicon.svg","/job.png","/light.jpg","/logo.png","/logo.webp","/wordpress.jpg","/fonts/InterVariable.woff2"],"buildFormat":"directory","checkOrigin":false,"serverIslandNameMap":[],"key":"WJhxvXFBTZXxWjrkoKk/flkgS3vwo8wcPPuFyBZCIzc=","experimentalEnvGetSecretEnabled":false});

export { manifest };
