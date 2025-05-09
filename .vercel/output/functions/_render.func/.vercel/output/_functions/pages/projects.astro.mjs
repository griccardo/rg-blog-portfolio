/* empty css                                 */
import { j as renderSlot, c as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute, a as renderComponent, b as createAstro } from '../chunks/astro/server_Clh-S9fL.mjs';
import 'kleur/colors';
import { p as projectsPageContent, $ as $$Layout } from '../chunks/Layout_DQPlhN-Z.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_BJWTyN4S.mjs';
import 'clsx';
import { createMarkdownProcessor } from '@astrojs/markdown-remark';
export { renderers } from '../renderers.mjs';

const symbol = Symbol.for('@astropub/md');

const shared = /** @type {Shared} */ (
	globalThis[symbol] || (
		globalThis[symbol] = {
			markdownConfig: {},
		}
	)
);

/** @typedef {import('./shared').Shared} Shared */

class HTMLString extends String {
	get [Symbol.toStringTag]() {
		return 'HTMLString'
	}
}

async function markdown(
	/** @type {string} */ content,
	/** @type {MarkdownRenderingOptions} */ options = null
) {
	const processor = await createMarkdownProcessor({
		...shared.markdownConfig,
		...Object(options),
	});

	const result = await processor.render(content);
	return new HTMLString(result.code);
}

markdown.inline = async function inlinemarkdown(
	/** @type {string} */ content,
	/** @type {MarkdownRenderingOptions} */ options = null
) {
	const processor = await createMarkdownProcessor({
		...shared.markdownConfig,
		...Object(options),
	});

	const result = await processor.render(content);

	return new HTMLString(
		result.code.indexOf("<p>") === 0 &&
		result.code.indexOf("</p>") === result.code.length - 4
			? result.code.slice(3, -4)
			: result.code,
	);
};

/** @typedef {import('./markdown').MarkdownRenderingOptions} MarkdownRenderingOptions */

const Markdown = Object.assign(
	function Markdown(result, attributes, slots) {
		return {
			get [Symbol.toStringTag]() {
				return 'AstroComponent'
			},
			async *[Symbol.asyncIterator]() {
				const mdl = attributes.of;

				if (typeof mdl === 'string') {
					yield await markdown(mdl, {
						fileURL: new URL(import.meta.url),
						contentDir: new URL('./', import.meta.url),
					});
				} else {
					yield renderSlot(result, slots.default);
				}
			},
		}
	},
	{
		isAstroComponentFactory: true,
		Inline: Object.assign(
			function MarkdownInline(result, attributes, slots) {
				return {
					get [Symbol.toStringTag]() {
						return 'AstroComponent'
					},
					async *[Symbol.asyncIterator]() {
						const mdl = attributes.of;

						if (typeof mdl === 'string') {
							yield await markdown.inline(mdl, {
								fileURL: new URL(import.meta.url),
								contentDir: new URL('./', import.meta.url),
							});
						} else {
							yield renderSlot(result, slots.default);
						}
					},
				}
			},
			{
				isAstroComponentFactory: true,
			}
		)
	}
);

const $$Astro = createAstro();
const $$ProjectCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ProjectCard;
  const { title, description, image, year, url } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(url, "href")} target="_blank" class="sm:py-5 py-10 flex flex-col sm:flex-row gap-6 group-hover:opacity-60 hover:!opacity-100 transition-opacity"> <div class="h-full bg-gray-700 rounded-lg aspect-video sm:h-[150px]"> ${renderComponent($$result, "Image", $$Image, { "width": 1920, "height": 1080, "src": image, "alt": title, "class": "w-full h-full object-cover rounded-lg aspect-video" })} </div> <div> <div class="flex items-center gap-1 mb-2"> <h2 class="font-medium">${title}</h2> <span class="opacity-60">· ${year}</span> </div> <div class="opacity-60"> ${renderComponent($$result, "Markdown", Markdown, { "of": description })} </div> </div> </a>`;
}, "/Users/riccardogobbo/astroprjs/astro-minimal-portfolio-template/src/components/ProjectCard.astro", void 0);

const $$Projects = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "seo": projectsPageContent.seo }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="mt-10 max-w-2xl mx-auto px-6"> <h1 class="font-bold text-3xl mb-1">Projects</h1> <p class="opacity-60 mb-10">${projectsPageContent.subtitle}</p> <div class="grid grid-cols-1 group"> ${projectsPageContent.projects.map((project) => renderTemplate`${renderComponent($$result2, "ProjectCard", $$ProjectCard, { ...project })}`)} </div> </section> ` })}`;
}, "/Users/riccardogobbo/astroprjs/astro-minimal-portfolio-template/src/pages/projects.astro", void 0);

const $$file = "/Users/riccardogobbo/astroprjs/astro-minimal-portfolio-template/src/pages/projects.astro";
const $$url = "/projects";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Projects,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
