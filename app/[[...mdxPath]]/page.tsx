import { generateStaticParamsFor, importPage } from "nextra/pages";
import { MDXWrapper } from "../../mdx-components";
import { getPageMap } from "nextra/page-map";
import LayoutBlog from "./layout-blog";
import LayoutDocs from "./layout-docs";

export const generateStaticParams = generateStaticParamsFor("mdxPath");

export async function generateMetadata(props: PageProps) {
  const params = await props.params
  const { metadata } = await importPage(params.mdxPath)
  return metadata
}

interface PageProps {
  params: Promise<{
    mdxPath: string[];
  }>;
  searchParams?: Promise<Record<string, string | string[]>>;
}

export default async function Page(props: PageProps) {

  console.log("props", props)
  const params = await props.params;
  console.log("params", params)
  const {
    default: MDXContent,
    toc,
    metadata,
    sourceCode,
  } = await importPage(params.mdxPath);

  // console.log(metadata)

  const layout = ["docs", "blog"].find(l => l == metadata?.template) ?? "docs";

  switch (layout) {
    case "docs":
      return <LayoutDocs>
        <MDXWrapper toc={toc} metadata={metadata} sourceCode={sourceCode}>
          <MDXContent {...props} params={params} />
        </MDXWrapper>
      </LayoutDocs>;
    case "blog":
      return <LayoutBlog>
        <MDXContent {...props} params={params} />
      </LayoutBlog>;
  }
}


