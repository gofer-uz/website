import { generateStaticParamsFor, importPage } from "nextra/pages";
import { ReactNode } from "react";
import { MDXWrapper } from "../../mdx-components";

export const generateStaticParams = generateStaticParamsFor("mdxPath");

interface MetadataProps {
  params: Promise<{
    mdxPath: string[];
  }>;
  searchParams?: Promise<Record<string, string | string[]>>;
}

export async function generateMetadata(props: MetadataProps) {
  const params = await props.params;
  const { metadata } = await importPage(params.mdxPath);
  return metadata;
}

interface WrapperProps {
  children: ReactNode;
  toc?: any;
  metadata?: any;
  sourceCode?: string;
}

interface PageProps {
  params: Promise<{
    mdxPath: string[];
  }>;
  searchParams?: Promise<Record<string, string | string[]>>;
}

export default async function Page(props: PageProps) {
  const params = await props.params;
  const {
    default: MDXContent,
    toc,
    metadata,
    sourceCode,
  } = await importPage(params.mdxPath);

  return (
    <MDXWrapper toc={toc} metadata={metadata} sourceCode={sourceCode}>
      <MDXContent {...props} params={params} />
    </MDXWrapper>
  );
}
