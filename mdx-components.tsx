import type { MDXComponents } from "mdx/types";
import { useMDXComponents as getDocsComponents } from "nextra-theme-docs";

export const MDXWrapper = getDocsComponents().wrapper;

export function useMDXComponents(components: MDXComponents = {}): MDXComponents {
  return {
    ...getDocsComponents(),
    ...components,
  };
}
