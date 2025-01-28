import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;

const path = require('path');

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'app'), path.join(__dirname, 'components')],
    prependData: `@import "_variables.scss";`,
  }
}