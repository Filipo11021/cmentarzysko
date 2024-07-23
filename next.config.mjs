import { withPayload } from '@payloadcms/next/withPayload'

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Your Next.js config here
  experimental: {
    reactCompiler: false,
  },
  images: {
    remotePatterns: [
      {
        hostname: 'cmentarzysko*.vercel.app',
      },
      {
        hostname: 'poecmentarzysko.pl',
      },
      {
        hostname: 'localhost',
      },
    ],
  },
}

export default withPayload(nextConfig)
