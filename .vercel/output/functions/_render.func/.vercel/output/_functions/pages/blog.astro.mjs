/* empty css                                 */
import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead, d as addAttribute } from '../chunks/astro/server_Clh-S9fL.mjs';
import 'kleur/colors';
import { $ as $$Image } from '../chunks/_astro_assets_BJWTyN4S.mjs';
import { b as blogPageContent, $ as $$Layout } from '../chunks/Layout_DQPlhN-Z.mjs';
import { a as getCollection } from '../chunks/_astro_content_DCugY-fZ.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const posts = await getCollection("posts");
  posts.sort((a, b) => {
    const dateA = new Date(a.data.pubDate).getTime();
    const dateB = new Date(b.data.pubDate).getTime();
    return dateB - dateA;
  });
  for (const post of posts) {
    const { remarkPluginFrontmatter } = await post.render();
    post.data.readingTime = remarkPluginFrontmatter.minutesRead.replace("min read", "minuti di lettura");
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "seo": blogPageContent.seo }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="mt-10 max-w-2xl mx-auto px-6"> <h1 class="font-bold text-3xl mb-1">Blog</h1> <p class="opacity-60 mb-14">${blogPageContent.subtitle}</p> <div class="grid grid-cols-1 gap-10 sm:gap-6 mb-10"> ${posts.map((post) => renderTemplate`<a${addAttribute(`/blog/${post.slug}`, "href")} class=" sm:flex sm:flex-row-reverse sm:justify-between sm:gap-6 post"> ${renderComponent($$result2, "Image", $$Image, { "src": post.data.image.url, "alt": post.data.image.url, "width": 100, "height": 100, "class": "rounded-lg w-[100px] h-[100px] object-cover" })} <div class="mt-4 sm:my-auto"> <p class="opacity-60 mb-2 text-sm"> ${post.data.pubDate.toLocaleDateString("en-GB")} · ${post.data.readingTime} </p> <h3 class="font-medium hover-underline">${post.data.title}</h3> <p class="text-sm opacity-60 mt-2 mb-3">${post.data.description}</p> </div> </a>`)} </div> </section> ` })}`;
}, "/Users/riccardogobbo/astroprjs/astro-minimal-portfolio-template/src/pages/blog/index.astro", void 0);

const $$file = "/Users/riccardogobbo/astroprjs/astro-minimal-portfolio-template/src/pages/blog/index.astro";
const $$url = "/blog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
