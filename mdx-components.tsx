import type { MDXComponents } from "mdx/types";
import { useMDXComponents as getDocsComponents } from "nextra-theme-docs";
// import { useMDXComponents as getBlogComponents } from "nextra-theme-blog";

export const MDXWrapper = getDocsComponents().wrapper;

export function useMDXComponents(components: MDXComponents = {}): MDXComponents {
  return {
    ...getDocsComponents(),
    // ...getBlogComponents(),
    ...components,
  };
}
