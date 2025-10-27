import nextra from "nextra";
import { NextConfig } from "next";

const withNextra = nextra({
  latex: true,
  search: {
    codeblocks: false
  },
  readingTime: true,
  defaultShowCopyCode: true,
});

const isProduction = process.env.NODE_ENV === 'production';
const config: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default withNextra(config);