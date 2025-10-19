import nextra from "nextra";
import { NextConfig } from "next";

const withNextra = nextra({
  latex: true,
  search: {
    codeblocks: false
  },
  contentDirBasePath: '/'
});

const config: NextConfig = {};
export default withNextra(config);