import Link from "next/link";
import { Footer, Layout, Navbar, ThemeSwitch } from "nextra-theme-blog";
import { Search } from "nextra/components/search";
import { getPageMap } from "nextra/page-map";

const LayoutBlog: React.FC<{ children: React.ReactNode }> = async ({ children }) => (
  <Layout>
    <Navbar pageMap={await getPageMap()}>
      <Link href="/"><b>Golang Uzbekistan</b></Link>
      <Search />
      <ThemeSwitch />
    </Navbar>

    {children}

    <Footer>
      MIT {new Date().getFullYear()} © Gopher Uzbekistan.
    </Footer>
  </Layout>
);

export default LayoutBlog;
