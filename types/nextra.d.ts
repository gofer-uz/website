// For CSS imports
declare module '*.css' {
  const content: { [className: string]: string };
  export default content;
}

// For nextra types that might be missing
declare module 'nextra/pages' {
  export function generateStaticParamsFor(folderKey: string): () => Promise<any[]>;
  export function importPage(path: string[]): Promise<{
    default: React.ComponentType<any>;
    metadata: any;
    toc: any;
    sourceCode?: string;
  }>;
}

declare module 'nextra/page-map' {
  export function getPageMap(): Promise<any>;
}

declare module 'nextra/components' {
  import { ReactNode } from 'react';
  
  export function Head(props: { children?: ReactNode }): JSX.Element;
  export function Banner(props: { storageKey: string, children: ReactNode }): JSX.Element;
}

declare module 'nextra-theme-docs' {
  import { ReactNode, ComponentType } from 'react';
  import type { MDXComponents } from 'mdx/types';
  
  export interface NavbarProps {
    logo?: ReactNode;
    projectLink?: string;
    projectIcon?: ReactNode;
    [key: string]: any;
  }
  
  export function Navbar(props: NavbarProps): JSX.Element;
  
  export interface LayoutProps {
    navbar?: ReactNode;
    footer?: ReactNode;
    banner?: ReactNode;
    pageMap?: any;
    docsRepositoryBase?: string;
    children?: ReactNode;
    [key: string]: any;
  }
  
  export function Layout(props: LayoutProps): JSX.Element;
  
  export function Footer(props: { children?: ReactNode }): JSX.Element;
  
  export function getMDXComponents(): {
    wrapper: ComponentType<{
      children: ReactNode;
      toc?: any;
      metadata?: any;
      sourceCode?: string;
      [key: string]: any;
    }>;
    [key: string]: any;
  };

  export function useMDXComponents(components?: MDXComponents): MDXComponents & {
    wrapper: React.ComponentType<{
      children: React.ReactNode;
      toc?: any;
      metadata?: any;
      sourceCode?: string;
    }>;
  };
}