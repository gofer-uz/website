import nextra from "nextra";
import { NextConfig } from "next";

const withNextra = nextra({
  latex: true,
  search: {
    codeblocks: false
  },
  contentDirBasePath: '/'
});

const isProduction = process.env.NODE_ENV === 'production';
const config: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // assetPrefix: '/',
  // basePath: '',
  trailingSlash: true,
};

export default withNextra(config);
