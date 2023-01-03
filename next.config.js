/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["links.papareact.com", "a0.muscache.com"],
  },
  env: {
    mapbox_key:
      "pk.eyJ1Ijoib2xlbmFhdmRpdW5pbmEiLCJhIjoiY2xjODY0MjBuMDdudjNvcXJiNTRubndtZCJ9.-vr9j7V4gr2ksuQWKNTrQQ",
  },
};

module.exports = nextConfig;
