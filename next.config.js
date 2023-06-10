/** @type {import('next').NextConfig} */

// next.config.js
module.exports = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://react-email-c54f.vercel.app/api/:path*",
      },
    ];
  },
};
